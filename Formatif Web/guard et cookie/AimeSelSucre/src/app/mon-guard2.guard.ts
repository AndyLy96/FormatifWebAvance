import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export const monGuard2Guard: CanActivateFn = (route, state) => {

  let cookieService: CookieService = inject(CookieService)
  const aimeLeSucre = cookieService.get('aimeLeSucre') === 'true';
    const aimeLeSel = cookieService.get('aimeLeSel') === 'true';

    if (!aimeLeSucre && !aimeLeSel) {
      return state.url === '/verreDEau';
    }

    if (aimeLeSucre && !aimeLeSel) {
      return state.url === '/bonbon';
    }

    if (!aimeLeSucre && aimeLeSel) {
      return state.url === '/sel';
    }

    return state.url === '/caramelAuSel';

  return true;
};
