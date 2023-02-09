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

export const NavigationItem = {
  Home: {
    id: 1,
    name: 'Home',
    link: '/'
  },
  About: {
    id: 2,
    name: 'About',
    link: '/about'
  },
  Menu: {
    id: 3,
    name: 'Menu',
    link: '/menu'
  },
  Reservation: {
    id: 4,
    name: 'Reserve table',
    link: '/reserve-table'
  },
  Order: {
    id: 5,
    name: 'Order online',
    link: '/order-online'
  },
  Login: {
    id: 6,
    name: 'Login',
    link: '/login'
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
    class: 'navigation-header'
  },
  Footer: {
    type: 'footer',
    class: 'navigation-footer'
  }
}

export const ReservationStep = {
  StepOne: 'step-one',
  StepTwo: 'step-two'
}

export const Occasion = {
  default: {
    label: 'Occasion',
    value: 'default',
  },
  options: {
    birthday : {
      label: 'Birthday',
      value: 'birthday',
    },
    anniversary : {
      label: 'Anniversary',
      value: 'anniversary',
    },
    engagement : {
      label: 'Engagement',
      value: 'engagement',
    },
  },
}