import { api } from "../lib/axios";

export async function authenticate({ cpf, password }: LoginInput) {
  const existingUsers = await api.get("users").then((res) => res.data);
  let token = null;
  const userExists = existingUsers.filter(
    (existingUser: User) =>
      existingUser.cpf === cpf && existingUser.password === password
  );

  if (userExists.length > 0) token = "tokenSecreto";

  return { userData: userExists[0], token: token };
}
