import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map, Observable, catchError, empty, of} from "rxjs";
import {Launches, Launch} from "../models";

@Injectable({
  providedIn: 'root'
})
export class SpaceService {

  // results: Launches[]

  constructor(private _http: HttpClient) {

  }

  getLaunches(limit: string = '10', offset: string = '0'): Observable<Launches> {
    const params = new HttpParams()
      .set('limit', limit)
      .set('offset', offset);
    return this._http.get<Launches>(environment.backendEndpoint + 'launch/upcoming', {params}).pipe(map(resp => {
      return resp
    }), catchError((error) => {
      if (error.status == 500) {
        console.log(error)
      }
      return empty();
    }))
  }

  getSingleLaunch(launchId: string): Observable<Launch> {
    return this._http.get<Launch>(environment.backendEndpoint + 'launch/upcoming/' + launchId).pipe(
      map(resp => {
        return resp
      }),
      catchError((error) => {
        return empty();
      }))
  }

}
