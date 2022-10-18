import render from './module/render';
import scores from './module/score';
import './styles.css';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/amavubiGames/scores/';

const refreshBtn = document.querySelector('.refresh');
const form = document.querySelector('form');

refreshBtn.addEventListener('click', () => {
  render(url);
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const submitBtn = document.querySelector('.submit_btn');
  const username = form.name.value;
  const score = form.score.value;
  scores(url, username, score);
  form.reset();
  submitBtn.disable = true;
});

document.addEventListener('DOMContentLoaded', () => {
  render(url);
});