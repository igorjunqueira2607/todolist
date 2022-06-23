export async function getUsers() {
  const endpoint = `https://jsonplaceholder.typicode.com/users`;
  const response = await fetch (endpoint);
  const responseJSON = await response.json();
  return responseJSON;
};