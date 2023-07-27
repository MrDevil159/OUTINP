import { Component, EventEmitter, Input,Output, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss']
})
export class TableDataComponent implements OnChanges {
  @Input() contacts:{name: string, number: number|null}[]=[];
  @Output() deleteThisContactEmitter = new EventEmitter();
  ngOnChanges(changes: SimpleChanges): void {
    this.contacts = changes['contacts'].currentValue;
    console.log(this.contacts);
  }
  delEvent(index: number) {
    console.log("Deleting", index);
    this.deleteThisContactEmitter.emit(index);
  }
}
