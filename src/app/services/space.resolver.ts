import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';

import {empty, Observable, of} from 'rxjs';
import {SpaceService} from './space.service'
import {map, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RouteDataResolver implements Resolve<Observable<any>> {
  constructor(private spaceServ: SpaceService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    console.log(route.paramMap.get('id'))
    // @ts-ignore
    return this.spaceServ.getSingleLaunch(route.paramMap.get('id').toString()).pipe(
      catchError((error) => {
        return empty();
      }));
  }
}
