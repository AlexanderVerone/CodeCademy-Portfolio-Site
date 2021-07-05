const toggleBtn = document.getElementById('changeTheme');
const themeLink = document.getElementById('theme-link');
const projBtn = document.getElementById('pop-up-proj');
const closePopUpBtn = document.getElementById('close-button');
const popUpWindow = document.querySelector('.b-popup');

const changeTheme = () => {
  let lightTheme = './light-style.css';
  let darkTheme = './dark-style.css';
  let currTheme = themeLink.getAttribute('href');
  let theme = '';

  if (currTheme == lightTheme) {
    currTheme = darkTheme;
    theme = 'dark';
  } else {
    currTheme = lightTheme;
    theme = 'light';
  }
  themeLink.setAttribute('href', currTheme);

  // Save(theme);
};

toggleBtn.addEventListener('click', changeTheme);

projBtn.addEventListener('click', () => {
  popUpWindow.style.display = 'block';
});

closePopUpBtn.addEventListener('click', () => {
  popUpWindow.style.display = 'none';
});
