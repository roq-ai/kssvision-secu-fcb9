interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: [],
  tenantRoles: ['Business Owner', 'Security Manager', 'Booking Administrator', 'Customer Service Representative'],
  tenantName: 'Organization',
  applicationName: 'Kssvision - Security and System',
  addOns: ['chat', 'notifications', 'file'],
};
