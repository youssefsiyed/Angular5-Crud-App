import { Component, OnInit } from '@angular/core';
import { Custumers } from '../../models/Custumers';
import { CustumersService } from '../../services/custumers.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-custumers',
  templateUrl: './custumers.component.html',
  styleUrls: ['./custumers.component.css']
})
export class CustumersComponent implements OnInit {
  custumers: Custumers[];
  numSplice: number; /// | slice:0:numSplice
  searchSplice: string; /// search items
  orderSplice: string; /// order by
  showSplice: boolean = false; /// show/hide div
  isLoading: boolean = false; /// loading spinner
  page: number = 1; /// page
  itemsperpage: number = 5; /// items per page
  trieSplice: string; /// asc/desc name

  constructor(
    private cusService: CustumersService,
    private route: Router,
    private toast: ToastrService
  ) {}

  ngOnInit() {
    this.cusService.GetAllCustumers().subscribe(
      custumers => {
        // console.log(custumers);
        this.custumers = custumers;
        this.isLoading = true;
      },
      error => {
        console.log(error);
      }
    );
  }
  //////////////////////////////////////
  OrderByName(orderSplice) {
    this.orderSplice = orderSplice;
  }
  //////////////////////////////////////
  onRefresh(): void {
    window.location.reload();
  }
  /////////////////////// toggle checkbox
  toggleVisibility(e) {
    this.showSplice = e.target.checked;
  }
  //////////////////////////////////////////////
  OndeleteCust(custumers) {
    if (confirm('Are you Sure ?')) {
      this.cusService.DeleteCustumer(custumers.id).subscribe(data => {
        this.custumers.splice(this.custumers.indexOf(custumers), 1);
        this.toast.error('Deleted Success!', 'the custumer has been deleted!');
      });
    }
  }
  ///////////////////////////////////////////////
  onCreateCust() {
    let custumer = new Custumers();
    this.cusService.setter(custumer);
    this.route.navigate(['/custumers-add']);
  }
  //////////////////////////////////////////////
  onUpdateCust(custumer: Custumers) {
    this.cusService.setter(custumer);
    this.route.navigate(['/custumers-add']);
  }
  //////////////////////////////////////////////
  onOneCust(custumer: Custumers) {
    this.cusService.setter(custumer);
    this.route.navigate(['/custumers-details']);
  }
}
