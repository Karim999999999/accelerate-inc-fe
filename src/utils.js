const toggleMenu = () => {
  const menuBtn = document.querySelector('.menu-btn');
  const mainNav = document.querySelector('.main-navigation');
  const menuItem = document.querySelectorAll('.menu-item');

  // main toggle
  menuBtn.addEventListener('click', () => {
    toggle();
  });

  // toggle on item click if open
  menuItem.forEach(item => {
    item.addEventListener('click', () => {
      if (menuBtn.classList.contains('open')) {
        toggle();
      }
    });
  });

  function toggle() {
    menuBtn.classList.toggle('open');
    mainNav.classList.toggle('open');
  }
};

export default toggleMenu;
