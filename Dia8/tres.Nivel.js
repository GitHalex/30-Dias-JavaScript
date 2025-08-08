const personAccount = {
  firstName: "Alex",
  lastName: "Calcina",
  incomes: [],
  expenses: [],

  totalIncome() {
    let total = 0;
    for (const income of this.incomes) {
      total += income.amount;
    }
    return total;
  },

  totalExpense() {
    let total = 0;
    for (const expense of this.expenses) {
      total += expense.amount;
    }
    return total;
  },

  accountInfo() {
    return `${this.firstName} ${this.lastName}'s account information`;
  },

  addIncome(descripcion, amount) {
    this.incomes.push({ descripcion, amount });
  },

  addExpense(descripcion, amount) {
    this.expenses.push({ descripcion, amount });
  },

  accountBalance() {
    const income = this.totalIncome();
    const expense = this.totalExpense();
    const balance = income - expense;
    return `Current balance: $${balance}`;
  },
};

personAccount.addIncome("Salary", 3000);
personAccount.addIncome("Freelance", 500);
personAccount.addExpense("Rent", 500);
personAccount.addExpense("Utilities", 200);

console.log(personAccount.accountInfo());
console.log(`Total Income: $${personAccount.totalIncome()}`);
console.log(`Total Expense: $${personAccount.totalExpense()}`);
console.log(personAccount.accountBalance());

const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

console.log(typeof users);
const signUp = (users) => {
  const logeados = [];
  for (const nombre of users) {
    if (nombre.isLoggedIn) {
      logeados.push(nombre.username);
      console.log(`el usuario ${nombre.username} ya tiene una cuenta`);
    } else {
      logeados.push(nombre.username);
    }
  }
  return logeados;
};
console.log(signUp(users));
