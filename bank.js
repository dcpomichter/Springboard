const accounts = [
    { id: 1, owner: "Alice", balance: 500 },
    { id: 2, owner: "Bob", balance: 300 }
];

function getAccountById(id) {
    for (const account of accounts) {
        if (account.id === id) {
            return account;
        }
    }
}

function createAccount(newAccountId, newAccountOwner) {
    const account = getAccountById(accountId);
    if (account) {
        throw new Error("Error: Account ID already exists, please select a new ID");
    }
    if (!Number.isFinite(newAccountId) || newAccountId <= 0) {
        throw new Error("Invalid value for account ID: The account ID must be a positive finite integer.");
    }
    if (typeof newAccountOwner !== "string" || newAccountOwner.trim() === "") {
        throw new Error("Invalid account owner: The account owner must be a non-empty string.");
    }
    accounts.push(
        {
            id: newAccountId,
            owner: newAccountOwner,
            balance: 0
        }
    );
}
function depositMoney(accountId, amount) {
    const account = getAccountById(accountId);

    if (!account) {
        throw new Error("Account not found");
    }
    if (Number.isFinite(amount) && amount > 0) {
        account.balance += amount;
    } else {
        throw new Error("Invalid value for withdrawal amount: The amount must be a positive finite number.")
    }
}

function withdrawMoney(accountId, amount) {
    const account = getAccountById(accountId);

    if (!account) {
        throw new Error("Account not found.");
    }

    if (!Number.isFinite(amount) || amount <= 0) {
        throw new Error("Invalid value for withdrawal amount: The amount must be a positive finite number.");
    }
    if (account.balance < amount) {
        throw new Error("Insufficient funds for withdrawal.");
    }
    account.balance -= amount;
}

function transferMoney(fromAccountId, toAccountId, amount) {
    const fromAccount = getAccountById(fromAccountId);
    const toAccount = getAccountById(toAccountId);

    if (!fromAccount) {
        throw new Error("Source account not found.");
    }
    if (!toAccount) {
        throw new Error("Target account not found.");
    }
    if (!Number.isFinite(amount) || amount <= 0) {
        throw new Error("Invalid value for transfer amount: The amount must be a positive finite number.");
    }
    if (fromAccount.balance < amount) {
        throw new Error("Insufficient funds for transfer.");
    }

    fromAccount.balance -= amount;
    toAccount.balance += amount;

}
