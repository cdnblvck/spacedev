import {Component, OnInit} from '@angular/core';
import {SpaceService} from "../services/space.service";
import {Launch} from "../models";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  result: Launch | undefined;
  routeParam: any;

  constructor(private _service: SpaceService, private activatedRoute: ActivatedRoute) {
  }

  getLaunchDetails() {
    this.activatedRoute.params.subscribe(params => {
      console.log(params)
      this.routeParam = params['id'];
      this._service.getSingleLaunch(this.routeParam.toString()).subscribe(value => {
        this.result = value
        console.log(value)
      })
    })

  }

  ngOnInit(): void {
    this.getLaunchDetails()
  }

}
