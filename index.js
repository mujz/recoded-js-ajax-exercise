const baseUrl = 'https://api.github.com';

document.addEventListener('DOMContentLoaded', function() {
  const input = document.getElementById('name-input');
  const userImage = document.getElementById('user-image');

  input.addEventListener('keyup', async function(event) {
    if (event.keyCode === 13) {
      const avatarUrl = await fetchUserAvatar(input.value);
      userImage.src = avatarUrl;
    }
  });
});

async function fetchUserAvatar(userName) {
  const urlForUser = baseUrl + '/users/' + userName;
  try {
    const response = await fetch(urlForUser)
    if (!response.ok) {
      throw new Error('not OK');
    }
    const bodyJson = await response.json()
    return bodyJson.avatar_url;
  } catch (err) {
    throw new Error('failed because of err: ' + err)
  }
}
