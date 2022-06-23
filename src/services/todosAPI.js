export async function getTodosFromUser(user) {
  const endpoint = `https://jsonplaceholder.typicode.com/todos?userId=${user}`;
  const response = await fetch (endpoint);
  const responseJSON = await response.json();
  return responseJSON;
};

export async function addTodos() {
  const endpoint = `https://jsonplaceholder.typicode.com/todos`;
  const response = await fetch (endpoint, {
    method: 'POST',
    body: JSON.stringify({
      userId: 1,
      title: '',
      completed: false,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const responseJSON = await response.json();
  return responseJSON;
};