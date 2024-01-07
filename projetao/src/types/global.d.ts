type UserType = "callReceiver" | "doctor";

interface LoginInput {
  cpf: string;
  password: string;
}

interface User {
  id: string;
  name: string;
  cpf: string;
  password: string;
}
