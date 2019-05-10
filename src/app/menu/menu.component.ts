import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  prods:any;
  constructor(public auth: AuthenticationService) { }

  ngOnInit() {
    this.auth.getProds().subscribe(response => {
      this.prods = response;
    });
  }

}
