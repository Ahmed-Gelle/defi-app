export const usersSchema = {
  name: 'users',
  title: 'Users',
  type: 'document',
  fields: [
    { name: 'adress', title: 'Wallet Adress', type: 'string' },
    { name: 'userName', title: 'User name', type: 'string' },
    {
      name: 'transactions',
      title: 'Transactions',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'transactions' }] }],
    },
  ],
};
