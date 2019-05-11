import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  prods:any;
  droppedItems: any;
  constructor(public auth: AuthenticationService) { }

  ngOnInit() {
    this.droppedItems=[];

    this.auth.getProds().subscribe(response => {
      this.prods = response;
    });
  }
  ItemDropInBox(e: any) {
    // Get the dropped data here
    this.droppedItems.push(e.dragData);
    this.removeItem(e.dragData, this.prods)
  }
  ItemDropBack(e: any) {
    // Get the dropped data here
    this.prods.push(e.dragData);
    this.removeItem(e.dragData, this.droppedItems)
  }
removeItem(item: any, list: Array<any>) {
  let index = list.map(function (e) {
    return e.id;
  }).indexOf(item.id);
  console.log(index);
  list.splice(index, 1);
}

}
