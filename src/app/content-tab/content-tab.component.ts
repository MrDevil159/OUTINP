import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-content-tab',
  templateUrl: './content-tab.component.html',
  styleUrls: ['./content-tab.component.scss'],
})
export class ContentTabComponent {
  name: string="";
  number:number | null = null;
  logs:{name: string, number: number|null}[] = [];

  addAction() {
    this.logs.push({name: this.name, number: this.number});
    this.name = "";
    this.number = null;
  }
  deleteLog(value: number) {
    if (value > -1) {
      this.logs.splice(value, 1);
    }
    console.log("in parent ", value);
    
  }
}
