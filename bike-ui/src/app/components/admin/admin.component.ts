import { Component, OnInit } from '@angular/core';
import {BikeService } from "../../service/bike.service";
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public bikes;

  constructor(private bikeServ:BikeService) { }

  ngOnInit() {
    this.getBikes();
  }

  getBikes(){
    this.bikeServ.getBikes().subscribe(
      data=>{this.bikes=data},
      err=>console.error(err),
      ()=>console.log('bikes loaded')
    );
  }
}
