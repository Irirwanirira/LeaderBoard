const render = async (url) => {
  let result = '';
  let errors = '';

  try {
    const response = await fetch(url);
    const data = await response.json();
    result = data.result;
  } catch (error) {
    errors = error;
  }
  const newResult = result.sort((a, b) => b.score - a.score);
  const displayPlayers = document.getElementById('list_of_players');
  if (errors) {
    displayPlayers.innerText = `${errors}`;
  }
  const finalResult = newResult.map((resolve) => `<li>${resolve.user}<span>${resolve.score}</span></li>`);

  displayPlayers.innerHTML = finalResult.join('');
  return result;
};

export default render;
