const apiEndpoint = 'https://student-json-api.lidemy.me';

async function getPosts({ id, querystrings }) {
  let requestUrl = `${apiEndpoint}/posts`;
  if (id) {
    requestUrl += `/${id}`;
  };
  requestUrl += '?';
  for (const querystring in querystrings) {
    requestUrl += `_${querystring}=${querystrings[querystring]}&`
  }
  requestUrl = requestUrl.slice(0, requestUrl.length - 1);
  const response = await fetch(requestUrl)
  const data = await response.json();
  return data;
}

async function addPost({ data, token }) {
  const requestUrl = `${apiEndpoint}/posts`;
  const options = {
    method: 'POST',
    headers: {
      'authorization': `Bearer ${token}`
    },
    body: JSON.stringify(data),
  }
  const response = await fetch(requestUrl, options);
  const result = await response.json();
  return result;
}

async function login({ username, password }) {
  const requestUrl = `${apiEndpoint}/login`;
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      username,
      password
    })
  }
  const response = await fetch(requestUrl, options);
  const result = await response.json();
  return result;
}

async function getUserdata({ token }) {
  if (!token) {
    return;
  };
  const requestUrl = `${apiEndpoint}/me`;
  const headers = {
    'authorization': `Bearer ${token}`
  };
  const response = await fetch(requestUrl, { headers });
  const data = await response.json();
  return data;
}

export {
  getPosts,
  addPost,
  login,
  getUserdata,
}