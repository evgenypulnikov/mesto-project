import { submitLoading } from '../index.js';

import { renderAllCards } from '../modules/card.js';

import { profileAvatarElement,
  profileNameElement,
  profileStatusElement,
  changeAvatarSubmit,
  editProfileSubmit,
  addPlaceSubmit
} from '../modules/vars.js';

const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-11',
  headers: {
    authorization: 'a27e57c8-83b5-46fa-9811-ed86f5708328',
    'Content-Type': 'application/json'
  }
}

/*
  Webpack выдаёт ошибку при записи вида config.headers
  ругается на использование точки
  Unexpected token, expected ","
*/

/*___ Change Avatar */

function changeAvatar(avatar) {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: {
      authorization: 'a27e57c8-83b5-46fa-9811-ed86f5708328',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      avatar: avatar
    })
  })
    .then((res) => {
      if(res.ok) {
        return res.json();
      }
    })
    .then((res) => {
      profileAvatarElement.src = avatar;
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      submitLoading(false, changeAvatarSubmit, 'Сохранить');
    })
}

/*___ Get User Data */

function getUserData() {
  return fetch(`${config.baseUrl}/users/me`, {
  headers: {
    authorization: 'a27e57c8-83b5-46fa-9811-ed86f5708328',
    'Content-Type': 'application/json'
  }
})
  .then((res) => {
    if(res.ok) {
      return res.json();
    }
  })
  .then((res) => {
    profileAvatarElement.src = res.avatar;
    profileNameElement.textContent = res.name;
    profileStatusElement.textContent = res.about;
    return Promise.reject(`Ошибка: ${res.status}`); // ошибка
  })
  .catch((err) => {
    console.log(err);
  });
}

/*___ Edit User Data */

function editUserData(name, about) {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: {
      authorization: 'a27e57c8-83b5-46fa-9811-ed86f5708328',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      about: about
    })
  })
    .then((res) => {
      if(res.ok) {
        return res.json();
      }
    })
    .finally(() => {
      submitLoading(false, editProfileSubmit, 'Сохранить');
    });
}

/* Render JSON Cards */

function renderCards() {
  return fetch(`${config.baseUrl}/cards`, {
    headers: {
      authorization: 'a27e57c8-83b5-46fa-9811-ed86f5708328',
      'Content-Type': 'application/json'
    }
  })
    .then((res) => {
      if(res.ok) {
        return res.json();
      }
    })
    .then((res) => {
      renderAllCards(res);
      return Promise.reject(`Ошибка: ${res.status}`); // ошибка
    })
    .catch((err) => {
      console.log(err);
    });
}

/*___ Add New Card */

function addNewCard(name, link) {
  return fetch(`${config.baseUrl}/cards/`, {
    method: 'POST',
    headers: {
      authorization: 'a27e57c8-83b5-46fa-9811-ed86f5708328',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      link: link,
    })
  })
    .then((res) => {
      if(res.ok) {
        return res.json();
      }
    })
    .then((res) => {
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      submitLoading(false, addPlaceSubmit, 'Создать');
    });
}

/*___ Delete Card By Id */

function deleteCard(cardId) {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: 'DELETE',
    headers: {
      authorization: 'a27e57c8-83b5-46fa-9811-ed86f5708328'
    }
  })
    .then((res) => {
      if(res.ok) {
        return res.json();
      }
    })
    .then((res) => {
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => {
      console.log(err);
    });
}

/*___ Add & Remove Like */

function addLike(cardId, counter) {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: {
      authorization: 'a27e57c8-83b5-46fa-9811-ed86f5708328'
    }
  })
    .then((res) => {
      if(res.ok) {
        return res.json();
      }
    })
    .then((res) => {
      counter.textContent = res.likes.length;
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => {
      console.log(err);
    });
}

function removeLike(cardId, counter) {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: {
      authorization: 'a27e57c8-83b5-46fa-9811-ed86f5708328'
    }
  })
    .then((res) => {
      if(res.ok) {
        return res.json();
      }
    })
    .then((res) => {
      counter.textContent = res.likes.length;
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => {
      console.log(err);
    });
}

export { changeAvatar, getUserData, editUserData, renderCards, addNewCard, deleteCard, addLike, removeLike }
