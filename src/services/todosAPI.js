export async function getTodos() {
  const endpoint = `https://jsonplaceholder.typicode.com/todos`;
  const response = await fetch (endpoint);
  const responseJSON = await response.json();
  return responseJSON;
};