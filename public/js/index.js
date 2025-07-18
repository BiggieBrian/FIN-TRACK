const pages = {
  logInContent: ` 
    <main class="min-h-screen flex justify-center items-center">
      <div class="lg:w-1/3 w-2/3">
        <h1 class="bodoni text-5xl text-center py-5">FIN-TRACK</h1>
        <form
          action=""
          class="flex flex-col justify-center items-center gap-8 my-5"
        >
          <div class="w-full">
            <input
              type="text"
              name=""
              id=""
              placeholder="Username"
              class="w-full bg-transparent text-white p-2 border-1 border-white rounded-xl"
            />
          </div>
          <div class="w-full">
            <input
              type="password"
              placeholder="Password"
              class="w-full bg-transparent text-white p-2 border-1 border-white rounded-xl"
            />
          </div>
          <button type="submit" class="bg-green-500 w-1/2 py-4 rounded-xl">
            <a href="./dashboard.html">Login</a>
          </button>
        </form>
        <div class="text-center">
          <p>
            No account? <a href="./register.html" class="underline">Register</a>
          </p>
          <a href="./profile.html">Profile</a>
        </div>
      </div>
    </main>
`,

  registerContent: `
    <main class="min-h-screen flex justify-center items-center">
      <div class="lg:w-1/3 w-2/3">
        <h1 class="bodoni text-5xl text-center py-5">FIN-TRACK</h1>
        <form
          action=""
          class="flex flex-col justify-center items-center gap-8 my-5"
        >
          <div class="w-full">
            <input
              type="text"
              name=""
              id=""
              placeholder="Name"
              class="w-full bg-transparent text-white p-2 border-1 border-white rounded-xl"
            />
          </div>
          <div class="w-full">
            <input
              type="email"
              name=""
              id=""
              placeholder="Email"
              class="w-full bg-transparent text-white p-2 border-1 border-white rounded-xl"
            />
          </div>
          <div class="w-full">
            <input
              type="tel"
              name=""
              id=""
              placeholder="Phone"
              class="w-full bg-transparent text-white p-2 border-1 border-white rounded-xl"
            />
          </div>
          <div class="w-full">
            <input
              type="text"
              name=""
              id=""
              placeholder="Username"
              class="w-full bg-transparent text-white p-2 border-1 border-white rounded-xl"
            />
          </div>
          <div class="w-full">
            <input
              type="password"
              placeholder="Password"
              class="w-full bg-transparent text-white p-2 border-1 border-white rounded-xl"
            />
          </div>
          <button type="submit" class="bg-green-500 w-1/2 py-4 rounded-xl">
            <a href="./index.html">Register</a>
          </button>
        </form>
        <div class="text-center">
          <p>
            Have an account? <a href="./index.html" class="underline">Log In</a>
          </p>
        </div>
      </div>
    </main>
`,

  profileContent: `
     <main class="min-h-screen flex justify-center items-center">
      <div class="lg:w-1/3 w-2/3">
        <h1 class="bodoni text-5xl text-center py-5">FIN-TRACK</h1>
        <form
          action=""
          class="flex flex-col justify-center items-center gap-8 my-5"
        >
          <div
            class="bg-black size-30 rounded-full border-1 border-white cursor-pointer"
          >
            <input type="image" src="" alt="" />
          </div>
          <div class="w-full">
            <input
              type="text"
              name=""
              id=""
              placeholder="John Wick"
              class="w-full bg-transparent text-white p-2 border-1 border-white rounded-xl"
            />
          </div>
          <div class="w-full">
            <input
              type="email"
              name=""
              id=""
              placeholder="johnwick@gmail.com"
              class="w-full bg-transparent text-white p-2 border-1 border-white rounded-xl"
            />
          </div>
          <div class="w-full">
            <input
              type="tel"
              name=""
              id=""
              placeholder="+254723916573"
              class="w-full bg-transparent text-white p-2 border-1 border-white rounded-xl"
            />
          </div>
          <div class="w-full">
            <input
              type="text"
              name=""
              id=""
              placeholder="johnwick"
              class="w-full bg-transparent text-white p-2 border-1 border-white rounded-xl"
            />
          </div>
          <div class="w-full">
            <input
              type="password"
              placeholder="********"
              class="w-full bg-transparent text-white p-2 border-1 border-white rounded-xl"
            />
          </div>
          <button type="submit" class="bg-green-500 w-1/2 py-4 rounded-xl">
            Update Profile
          </button>
        </form>
      </div>
    </main>
`,

  dashboardContent: `
    <div class="w-10/12 my-5 mx-auto">
      <header class="flex justify-between items-center">
        <div>
          <h1 class="bodoni text-3xl">FIN-TRACK</h1>
        </div>
        <div class="flex justify-center gap-4 items-center">
          <a href="./profile.html">
            <div>
              <img
                src="./images/ICONS JOHN WICK_.jpeg"
                alt=""
                class="size-15 rounded-full border-2 border-white cursor-pointer"
              />
            </div>
          </a>
          <h2 class="lg:block hidden">Welcome, John Wick</h2>
        </div>
      </header>
      <main class="flex flex-col justify-center items-center gap-16 mt-15">
        <section class="w-full flex justify-between lg:flex-row flex-col gap-8">
          <div
            class="lg:w-1/4 w-full border-2 border-orange-500 rounded-2xl p-3 text-orange-500"
          >
            <h1 id="balance" class="text-3xl pb-3">0</h1>
            <p>Balance</p>
          </div>
          <div
            class="lg:w-1/4 w-full border-2 border-green-500 rounded-2xl p-3 text-green-500"
          >
            <h1 id="income" class="text-3xl pb-3">0</h1>
            <p>Income</p>
          </div>
          <div
            class="lg:w-1/4 w-full border-2 border-red-500 rounded-2xl p-3 text-red-500"
          >
            <h1 id="expenses" class="text-3xl pb-3">0</h1>
            <p>Expenses</p>
          </div>
        </section>
        <section class="w-full">
          <form
            id="trxform"
            action=""
            class="flex flex-col justify-center items-center gap-4 my-5 md:w-8/12 w-full mx-auto"
          >
            <div class="w-full">
              <input
                type="number"
                name=""
                id="amountInput"
                placeholder="Amount"
                class="w-full bg-transparent text-white p-2 border-1 border-white rounded-xl"
              />
            </div>
            <div class="w-full">
              <select
                name=""
                id="transactionSelection"
                class="w-full bg-transparent text-white p-2 border-1 border-white rounded-xl"
              >
                <option value="0">Select Transaction Type</option>
                <option value="income">Income</option>
                <option value="expenses">Expenses</option>
              </select>
            </div>
            <div class="w-full">
              <textarea
                name=""
                id="descriptionInput"
                placeholder="Description"
                class="w-full bg-transparent text-white p-2 border-1 border-white rounded-xl"
              ></textarea>
            </div>
            <button
              id="addRecord"
              type="submit"
              class="bg-green-500 w-2/3 py-4 rounded-2xl"
            >
              Add Record
            </button>
          </form>
        </section>
        <section class="w-full">
          <div
            class="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
          >
            <div
              class="md:w-fit w-full flex flex-col md:flex-row justify-center items-start md:items-center gap-4"
            >
              <div class="md:w-fit w-full">
                <select
                  name=""
                  id="trxTypeFilter"
                  class="w-full bg-transparent text-white p-2 border-1 border-white rounded-xl"
                >
                  <option value="all">All</option>
                  <option value="income">Income</option>
                  <option value="expenses">Expenses</option>
                </select>
              </div>

              <div class="w-full md:w-fit">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Search by description"
                  class="w-full bg-transparent text-white p-2 border-1 border-white rounded-xl"
                />
              </div>
              <div
                class="w-full md:w-fit flex flex-col md:flex-row justify-center items-start md:items-center gap-2"
              >
                <label for="">From:</label>
                <input
                  type="date"
                  name=""
                  id=""
                  placeholder="Start Date"
                  class="w-full bg-transparent text-white p-2 border-1 border-white rounded-xl"
                />
                <label for="">To:</label>
                <input
                  type="date"
                  name=""
                  id=""
                  placeholder="End Date"
                  class="w-full bg-transparent text-white p-2 border-1 border-white rounded-xl"
                />
              </div>
            </div>
            <div class="w-full md:w-fit">
              <button
                type="submit"
                class="bg-green-500 py-2 px-8 rounded-xl w-full md:w-fit"
              >
                Export
              </button>
            </div>
          </div>

          <div class="overflow-x-auto my-8">
            <table
              class="min-w-full table-auto border border-gray-300 divide-y divide-gray-200"
            >
              <thead class="bg-gray-100">
                <tr>
                  <th
                    class="px-4 py-2 text-left text-sm font-semibold text-gray-700"
                  >
                    #
                  </th>
                  <th
                    class="px-4 py-2 text-left text-sm font-semibold text-gray-700"
                  >
                    Date
                  </th>
                  <th
                    class="px-4 py-2 text-left text-sm font-semibold text-gray-700"
                  >
                    Amount
                  </th>
                  <th
                    class="px-4 py-2 text-left text-sm font-semibold text-gray-700"
                  >
                    Transaction Type
                  </th>
                  <th
                    class="px-4 py-2 text-left text-sm font-semibold text-gray-700"
                  >
                    Description
                  </th>
                </tr>
              </thead>
              <tbody
                class="divide-y divide-gray-200"
                id="transactionTableBody"
              ></tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
`,
};
const { logInContent, registerContent, profileContent, dashboardContent } =
  pages;

const mainBody = document.querySelector("#mainBody");

//Generate The Page NavBar
const nav = document.querySelector("#navigationArea");
const body = document.querySelector("body");
const navLinks = [
  {
    text: "Dashboard",
    id: "dashboard",
  },
  {
    text: "Log In",
    id: "login",
  },
  {
    text: "Register",
    id: "register",
  },
  {
    text: "Profile",
    id: "profile",
  },
];
navLinks.forEach((link) => {
  const buttonTemplate = `<button id="${link.id}" class="cursor-pointer">${link.text}</button>`;
  nav.innerHTML += buttonTemplate;
});
//
const setDefaultDashboard = () => {
  mainBody.innerHTML = dashboardContent;
  generateDashboardFunctionality();
};
const loadPages = () => {
  const buttonsArray = Array.from(nav.children);
  buttonsArray.forEach((button) => {
    button.addEventListener("click", () => {
      switch (button.id) {
        case "login":
          return (mainBody.innerHTML = logInContent);
        case "register":
          return (mainBody.innerHTML = registerContent);
        case "profile":
          return (mainBody.innerHTML = profileContent);

        default:
          setDefaultDashboard();
      }
    });
  });
};

window.onload = () => {
  loadPages();
  setDefaultDashboard();
};

function generateDashboardFunctionality() {
  let balance;
  let income;
  let expenses;
  let transactions;

  //
  const balanceEl = document.querySelector("#balance");
  const incomeEl = document.querySelector("#income");
  const expensesEl = document.querySelector("#expenses");

  const addRecordForm = document.querySelector("#trxform");
  const addRecordButton = document.querySelector("#addRecord");

  const amountInput = document.querySelector("#amountInput");
  const transactionSelection = document.querySelector("#transactionSelection");
  const descriptionInput = document.querySelector("#descriptionInput");

  const tablebody = document.querySelector("#transactionTableBody");

  const trxTypeFilter = document.querySelector("#trxTypeFilter");

  //
  const setValues = () => {
    balanceEl.textContent = balance;
    incomeEl.textContent = income;
    expensesEl.textContent = expenses;
  };

  const loadTransactions = () => {
    tablebody.innerHTML = "";
    transactions.forEach((transaction) => {
      const rowTemplate = `
    <tr class="hover:bg-black">
        <td class="px-4 py-2 text-sm">${transaction.id}</td>
        <td class="px-4 py-2 text-sm">${transaction.date}</td>
        <td class="px-4 py-2 text-sm">${transaction.amount}</td>
        <td class="px-4 py-2 text-sm font-medium">${transaction.trxType}</td>
        <td class="px-4 py-2 text-sm">${transaction.description}</td>
    </tr>
  `;
      tablebody.innerHTML += rowTemplate;
    });
  };

  ///
  const formSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");

    amount = parseInt(amountInput.value);
    trxType = transactionSelection.value;
    description = descriptionInput.value.trim();

    if (amount < 0 || typeof amount != "number") {
      alert("Enter a valid amount.");
      return;
    }

    if (trxType == "0") {
      alert("Chose a transaction type.");
      return;
    }

    if (description == "") {
      alert("Enter a description.");
      return;
    }

    if (trxType == "income") {
      income += amount;
      balance += amount;
    } else {
      if (balance < amount) {
        alert("You have no money.");
        return;
      }
      expenses += amount;
      balance -= amount;
    }

    const transaction = {
      id: transactions.length + 1,
      amount,
      date: new Date().toLocaleDateString(),
      trxType: trxType[0].toUpperCase() + trxType.slice(1),
      description,
    };
    transactions.push(transaction);

    const cashFlow = {
      balance,
      income,
      expenses,
    };
    localStorage.setItem("transactions", JSON.stringify(transactions));
    localStorage.setItem("cashFlow", JSON.stringify(cashFlow));
    setValues();
    loadTransactions(transaction);
    addRecordForm.reset();
  };

  const whenDashboarLoads = () => {
    const savedCashFlow = JSON.parse(localStorage.getItem("cashFlow"));
    if (savedCashFlow) {
      balance = savedCashFlow.balance;
      income = savedCashFlow.income;
      expenses = savedCashFlow.expenses;
    }
    setValues();
    //
    const savedTransactions = JSON.parse(localStorage.getItem("transactions"));
    console.log(savedTransactions);
    if (savedTransactions) {
      transactions = savedTransactions;
    }
    loadTransactions();
  };
  addRecordForm.onsubmit = formSubmit;

  whenDashboarLoads();
}
