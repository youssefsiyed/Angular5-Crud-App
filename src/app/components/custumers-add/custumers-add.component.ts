import { Component, OnInit } from '@angular/core';
import { Custumers } from '../../models/Custumers';
import { CustumersService } from '../../services/custumers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-custumers-add',
  templateUrl: './custumers-add.component.html',
  styleUrls: ['./custumers-add.component.css']
})
export class CustumersAddComponent implements OnInit {
  custumer: Custumers;
  constructor(private cusService: CustumersService, private route: Router) {}

  ngOnInit() {
    this.custumer = this.cusService.getter();
  }
  processForm() {
    if (this.custumer.id == undefined) {
      this.cusService.SaveCustumer(this.custumer).subscribe(custumer => {
        console.log(custumer);
        this.route.navigate(['/custumers']);
      });
    } else {
      this.cusService.UpdateCustumer(this.custumer).subscribe(
        custumer => {
          console.log(custumer);
          this.route.navigate(['/custumers']);
        },
        error => {
          console.log(error);
        }
      );
    }
  }
}
