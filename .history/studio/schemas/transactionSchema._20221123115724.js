export const transactionSchema = {
  name: 'transaction',
  title: 'Transaction',
  type: 'document',
  fields: [
    { name: 'txHash', title: ' Transaction Hash', type: 'string' },
    { name: 'fromAdress', title: 'To - Wallet Address', type: 'string' },
    { name: 'toAdress', title: 'From - Wallet Address', type: 'string' },
  ],
};
