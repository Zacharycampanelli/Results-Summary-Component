const totalScoreEl = document.getElementById('final_score');
const reactionScoreEl = document.getElementById('reaction_score');
const memoryScoreEl = document.getElementById('memory_score');
const verbalScoreEl = document.getElementById('verbal_score');
const visualScoreEl = document.getElementById('visual_score');

const resultData = [
  {
    category: 'Reaction',
    score: 80,
    icon: './assets/images/icon-reaction.svg',
  },
  {
    category: 'Memory',
    score: 92,
    icon: './assets/images/icon-memory.svg',
  },
  {
    category: 'Verbal',
    score: 61,
    icon: './assets/images/icon-verbal.svg',
  },
  {
    category: 'Visual',
    score: 72,
    icon: './assets/images/icon-visual.svg',
  },
];

const calculateTotalScore = (reactS, memS, verbS, visS) => {
  let total = (reactS + memS + verbS + visS) / 4;
  total = Math.round(total);
  totalScoreEl.textContent = total;
};

const assignScores = () => {
  let reactionScore = resultData[0].score;
  let memoryScore = resultData[1].score;
  let verbalScore = resultData[2].score;
  let visualScore = resultData[3].score;

  reactionScoreEl.textContent = reactionScore;
  memoryScoreEl.textContent = memoryScore;
  verbalScoreEl.textContent = verbalScore;
  visualScoreEl.textContent = visualScore;
  calculateTotalScore(reactionScore, memoryScore, verbalScore, visualScore);
};

assignScores();
