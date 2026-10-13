// Vercel 서버리스 함수: 응원 문장 하나를 골라 이름과 함께 돌려준다.
// 이름 뒤에 조사가 붙지 않도록 모든 문장을 "{name}, ..." 형태로 둔다.
const MESSAGES = [
  "{name}, 오늘도 한 걸음 내디딘 것만으로 충분히 잘하고 있어요.",
  "{name}, 지금의 노력은 보이지 않는 곳에서도 차곡차곡 쌓이고 있어요.",
  "{name}, 잠깐 쉬어 가도 괜찮아요. 멈춤도 앞으로 가는 방법이에요.",
  "{name}, 당신이 웃으면 주변도 함께 밝아져요. 오늘도 환하게!",
  "{name}, 어제보다 조금 나아졌다면 그걸로 대성공이에요.",
  "{name}, 오늘 하루가 생각보다 더 따뜻하게 흘러가길 응원해요.",
  "{name}, 지금 고민하는 만큼 분명 더 단단해질 거예요.",
  "{name}, 이미 많은 것을 해냈어요. 스스로를 칭찬해 주세요.",
  "{name}, 작은 성공 하나를 오늘의 선물로 챙겨 가세요.",
  "{name}, 자신의 속도대로 가면 돼요. 비교하지 않아도 괜찮아요.",
  "{name}, 오늘 마주칠 어려움보다 당신의 힘이 더 커요.",
  "{name}, 좋은 소식이 하나쯤 찾아오는 하루가 되길 바라요!",
  "{name}, 실수해도 괜찮아요. 다시 해 보면 되니까요.",
  "{name}, 꾸준함은 정말 멋진 재능이에요. 이미 갖고 있어요.",
  "{name}, 오늘 하루 끝에는 꼭 스스로에게 수고했다고 말해 주세요.",
];

module.exports = (req, res) => {
  const raw = typeof req.query?.name === "string" ? req.query.name : "";
  const name = raw.trim().slice(0, 20) || "여러분";
  const template = MESSAGES[Math.floor(Math.random() * MESSAGES.length)];

  res.setHeader("Cache-Control", "no-store");
  res.status(200).json({ name, message: template.replace("{name}", name) });
};
