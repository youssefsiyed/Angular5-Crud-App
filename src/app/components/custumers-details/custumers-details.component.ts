import { Component, OnInit } from '@angular/core';
import { Custumers } from '../../models/Custumers';
import { CustumersService } from '../../services/custumers.service';

@Component({
  selector: 'app-custumers-details',
  templateUrl: './custumers-details.component.html',
  styleUrls: ['./custumers-details.component.css']
})
export class CustumersDetailsComponent implements OnInit {
  custumers: Custumers;
  constructor(private cusService: CustumersService) {}

  ngOnInit() {
    this.custumers = this.cusService.getter();
    //console.log(this.custumers);
  }
}
