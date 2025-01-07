export interface IStatus {
  online: boolean;
  verified: boolean;
  activeSubscription: boolean;
  lastAccess: string; // ISO date string
}
