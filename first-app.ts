let user: {
  name: string;
  age: number;
  isAdminl: boolean;
  id: string | number;
};

user = {
  name: "Max",
  age: 30,
  isAdminl: true,
  id: "123",
};

let hobbies: string[];

hobbies = ["Sports", "Cooking"];

function add(a: number, b: number): number {
  return a + b;
}

type AddFn = (a: number, b: number) => number;

function calculate(a: number, b: number, calcFn: AddFn) {
  calcFn(a, b);
}

calculate(10, 20, add);

interface Credentials {
  username: string;
  password: string;
}
let cred: Credentials;

cred = {
  username: "Max",
  password: "1234",
};

// type Admin = {
//   permissions: string[];
// };
// type AppUser = {
//   userName: string;
// };

// type AppAdmin = AppUser & Admin;

// let admin: AppAdmin;

// admin = {
//   permissions: ["create-server"],
//   userName: "Max",
// };

interface Admin {
  persmissions: string[];
}

interface AppUser {
  userName: string;
}

interface AppAdmin extends Admin, AppUser {}

type DataStorage<T> = {
  storage: T[];
  add: (data: T) => void;
};

const textStorage: DataStorage<string> = {
  storage: ["Hi", "Bye"],
  add: function (data: string) {
    this.storage.push(data);
  },
};

const userStorage: DataStorage<AppUser> = {
  storage: [],
  add: function (user: AppUser) {
    this.storage.push(user);
  },
};
