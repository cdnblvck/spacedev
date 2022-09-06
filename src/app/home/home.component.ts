import {Component, OnInit} from '@angular/core';
import {Launch} from "../models";
import {Observable} from "rxjs";
import {SpaceService} from "../services/space.service";
import {Store} from "@ngrx/store";
import {AppState} from "../store/app.state";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  results: Launch[] = [];

  constructor(private _sce: SpaceService, private store: Store<AppState>) {
  }

  getLaunchList() {
    this._sce.getLaunches('50', '0').subscribe(value => {
      this.results = value.results
    })
  }

  ngOnInit(): void {
    this.getLaunchList()
  }
}
