import { getUsers } from "../services/users.ts";

export default async ({ response }: any) => {
  response.body = await getUsers();
};
