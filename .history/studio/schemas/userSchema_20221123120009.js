export const transactionSchema = {
  name: 'users',
  title: 'Users',
  type: 'document',
  fields: [
    { name: 'wallet', title: 'Wallet Adress', type: 'string' },
    { name: 'username', title: 'User name', type: 'string' },
    { name: 'toAdress', title: 'From - Wallet Address', type: 'string' },
    { name: 'amount', title: 'Amount', type: 'number' },
    { name: 'timestamp', title: 'Timestamp', type: 'datetime' },
  ],
};
