// this is for hover highlighting/drawing a box around things
// to target it for analysis, normally you get everything on a page
// at the moment this is injected into the console until chrome extension is setup

window.addEventListener('mouseover', (e) => {
  e.target.style.border = '2px solid purple';
});

window.addEventListener('mouseout', (e) => {
  e.target.style.border = '';
});

window.addEventListener('click', (e) => {
  console.log(e.target.innerText);
});

// can do an event:map type object
// loop over them and call window.addEventListener