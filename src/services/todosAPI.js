export async function getTodosFromUser(user) {
  const endpoint = `https://jsonplaceholder.typicode.com/todos?userId=${user}`;
  const response = await fetch (endpoint);
  const responseJSON = await response.json();
  return responseJSON;
};