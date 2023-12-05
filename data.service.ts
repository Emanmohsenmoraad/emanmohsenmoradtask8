import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: any[] = [
    { id: 1, name: 'Eman' ,city:'cairo'},
    { id: 2, name: 'Sameh', city:'cairo'},
    { id: 3, name: 'Asia' ,city:'cairo'}
  ];

  getAllData(): any[] {
    return this.data;
  }

  deleteData(id: number): void {
    const index = this.data.findIndex(item => item.id === id);
    if (index !== -1) {
      this.data.splice(index, 1);
    }
  }
  selectedItem: any | null = null;

  editData(id: number, newName: string, newCity:string): void {
    if (this.selectedItem) {
      const index = this.data.findIndex(par => par.id === this.selectedItem.id);
      if (index > -1) {
        this.data[index] = { ...this.selectedItem }; 
        this.selectedItem = null; 
      }
    }

}
toggleDetails(item: any): void {
  item.showDetails = !item.showDetails; 
}
}