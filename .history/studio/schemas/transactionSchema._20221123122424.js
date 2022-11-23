export const transactionsSchema = {
  name: 'transactions',
  title: 'Transactions',
  type: 'document',
  fields: [
    { name: 'txHash', title: 'Transaction Hash 🚀', type: 'string' },
    { name: 'fromAdress', title: 'To - Wallet Address', type: 'string' },
    { name: 'toAdress', title: 'From - Wallet Address', type: 'string' },
    { name: 'amount', title: 'Amount', type: 'number' },
    { name: 'timestamp', title: 'Timestamp', type: 'datetime' },
  ],
};
