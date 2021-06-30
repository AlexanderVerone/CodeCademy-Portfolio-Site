const toggleBtn = document.getElementById('changeTheme');
const themeLink = document.getElementById('theme-link');

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
