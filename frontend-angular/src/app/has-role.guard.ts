import { ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router';

export const hasRoleGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot
): boolean => {
  const expectedRole = route.data['expectedRole'];
  const currentUserRole = localStorage.getItem('userrole');
  if (currentUserRole !== expectedRole) {
    alert('You dont have access to this page!');
    return false;
  }
  return true;
};
