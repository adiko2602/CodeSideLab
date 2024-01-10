import * as bcrypt from "bcrypt";

export async function compare(password: string, hash: string) {
  return bcrypt.compareSync(password, hash);
}

export async function hash(password: string) {
  return bcrypt.hashSync(password, 4);
}
