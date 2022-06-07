import { createCard, renderCard } from './utils.js';

export function card() {
  const initPlaces = [
    {
      name: 'Карачаево-Черкесск',
      link: 'https://images.unsplash.com/photo-1634665598022-325f0152926e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80'
    },
    {
      name: 'Камчатка',
      link: 'https://images.unsplash.com/photo-1535427284698-c8e68a1eb910?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1168&q=80'
    },
    {
      name: 'Дагестан',
      link: 'https://images.unsplash.com/photo-1633975029239-83e696ffab0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80'
    },
    {
      name: 'Северная Осетия',
      link: 'https://images.unsplash.com/photo-1612719734814-73ed4b4235e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    },
    {
      name: 'Златоуст',
      link: 'https://images.unsplash.com/photo-1637073665858-44e5f12d3917?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80'
    },
    {
      name: 'Роза Хутор',
      link: 'https://images.unsplash.com/photo-1632414612752-f7619ec1d2c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    }
  ]

  /*___ Render Card */

  const placesContainer = document.querySelector('.photo-grid__list');
  initPlaces.forEach(function(initPlaces) {
    const card = createCard(initPlaces.link, initPlaces.name);
    renderCard(card, placesContainer);
  });
}


