'use strict';
const btn = document.querySelector('.toggle_input');
const themeText = document.querySelector('.dark');
// Select the theme preference from localStorage
const currentTheme = localStorage.getItem('theme');
// If the current theme in localStorage is "light"...
if (currentTheme == 'light') {
  // ...then use the .light-theme class
  document.body.classList.add('light-theme');
}
// Listen for a click on the button
btn.addEventListener('click', function () {
  // Toggle the .light-theme class on each click
  document.body.classList.toggle('light-theme');
  if (document.body.classList.contains('light-theme')) {
    themeText.textContent = 'Light Mode';
  } else {
    themeText.textContent = 'Dark Mode';
  }

  // Let's say the theme in the localstorage is equal to dark
  let theme = 'dark';
  // we den switch from dark to light, den we check if it changes,
  if (document.body.classList.contains('light-theme')) {
    // ...then let's make the theme light
    theme = 'light';
  }
  // Then save the choice in localStorage
  localStorage.setItem('theme', theme);
});
