const mapping: Record<string, string> = {
  bookings: 'booking',
  organizations: 'organization',
  services: 'service',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
