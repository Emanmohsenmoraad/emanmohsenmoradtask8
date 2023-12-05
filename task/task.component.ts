import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  data: any[];

  constructor(private dataService: DataService) {
    this.data = this.dataService.getAllData();
  }

  deleteItem(id: number): void {
    this.dataService.deleteData(id);
    this.data = this.dataService.getAllData();
  }

  toggleEdit(item: any): void {
    item.editing = true;
  }

  saveEdit(item: any): void {
    this.dataService.editData(item.id, item.name,item.city);
    item.editing = false;
  }

  cancelEdit(item: any): void {
    item.editing = false;
    // Reset the input field to the original name
    item.name = this.dataService.getAllData().find(x => x.id === item.id)?.name;
    item.city= this.dataService.getAllData().find(x => x.id === item.id)?.city;
}
view(item:any):void{
  item.showDetails=true;

}
cancelview(item: any): void {
  item.showDetails = false;
}
}