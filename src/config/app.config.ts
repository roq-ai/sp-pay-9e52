interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Account Manager'],
  customerRoles: [],
  tenantRoles: ['Business Owner', 'Team Member', 'Customer Service Representative', 'Account Manager'],
  tenantName: 'Company',
  applicationName: 'SP PAY',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage user information',
    'Manage company information',
    'Edit personal account details',
    'Manage user-company relations',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/32da0a3d-aaa9-4223-a7dc-6d2eb18d78c6',
};
