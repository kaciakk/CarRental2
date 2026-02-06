const url: string = "http://localhost:3001/users";

export async function getUsers() {
  const response = fetch(url);
  const data = (await response).json();
  return data;
}
