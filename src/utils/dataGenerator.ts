import { User } from "../interfaces/User";

import * as faker from "faker";

export default (): Array<User> => {
  return Array.from({ length: 10 }, (x: number) => x).map((n: number) => ({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    userName: faker.internet.userName(),
    email: faker.internet.email(),
  }));
};
