export const Viewport = {
  Desktop: {
    name: `desktop`,
    min: `1024px`
  },
  Tablet: {
    name: `tablet`,
    min: `768px`,
    max: `1023px`
  },
  Mobile: {
    name: `mobile`,
    min: `320px`,
    max: `767px`
  }
};

export const NavigationList = {
  Home: {
    id: 1,
    name: 'Home',
    link: '#'
  },
  About: {
    id: 2,
    name: 'About',
    link: '#'
  },
  Menu: {
    id: 3,
    name: 'Menu',
    link: '#'
  },
  Reservation: {
    id: 4,
    name: 'Reservation',
    link: '#'
  },
  Order: {
    id: 5,
    name: 'Order online',
    link: '#'
  },
  Login: {
    id: 6,
    name: 'Login',
    link: '#'
  }
};

export const MenuButton = {
  Open: {
    text: `Открыть меню`,
    class: `navigation__open`
  },
  Closed: {
    text: `Закрыть меню`,
    class: `navigation__closed`
  }
};

export const NavigationType = {
  Header: {
    type: 'header',
    class: 'navigation__header'
  },
  Footer: {
    type: 'footer',
    class: 'navigation__footer'
  }
}