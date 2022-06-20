const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-11',
  headers: {
    authorization: 'a27e57c8-83b5-46fa-9811-ed86f5708328',
    'Content-Type': 'application/json'
  }
}

function checkRes(res) {
  if(res.ok) {
    return res.json();
  }
}

/*___ Change Avatar */

function changeAvatar(avatar) {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: avatar
    })
  })
    .then((res) => {
      return checkRes(res);
    });
}

/*___ Get User Data */

function getUserData() {
  return fetch(`${config.baseUrl}/users/me`, {
  headers: config.headers
})
  .then((res) => {
    return checkRes(res);
  });
}

/*___ Edit User Data */

function editUserData(name, about) {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      about: about
    })
  })
    .then((res) => {
      return checkRes(res);
    });
}

/*___ Render JSON Cards */

function getCards() {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers
  })
    .then((res) => {
      return checkRes(res);
    });
}

/*___ Add New Card */

function addNewCard(name, link) {
  return fetch(`${config.baseUrl}/cards/`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      link: link,
    })
  })
    .then((res) => {
      return checkRes(res);
    });
}

/*___ Delete Card By Id */

function deleteCard(cardId) {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: 'DELETE',
    headers: config.headers
  })
    .then((res) => {
      return checkRes(res);
    });
}

/*___ Add & Remove Like */

function addLike(cardId) {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: config.headers
  })
    .then((res) => {
      return checkRes(res);
    });
}

function removeLike(cardId) {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: config.headers
  })
    .then((res) => {
      return checkRes(res);
    });
}

/*___ Get Active Likes */

function getActiveLikes() {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers
  })
    .then((res) => {
      return checkRes(res);
    });
}

export { changeAvatar, getUserData, editUserData, getCards, addNewCard, deleteCard, addLike, removeLike, getActiveLikes }
