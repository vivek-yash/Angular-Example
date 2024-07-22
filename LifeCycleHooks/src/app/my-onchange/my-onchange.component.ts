import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-my-onchange',
  templateUrl: './my-onchange.component.html',
  styleUrls: ['./my-onchange.component.css']
})
export class MyOnchangeComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // @Input() hero!: Hero;
  // @Input() power: string;

  // changeLog: string[] = [];

  ngOnChanges(changes: SimpleChanges) {
    // for (let propName in changes) {
    //   let chng = changes[propName];
    //   let cur  = JSON.stringify(chng.currentValue);
    //   let prev = JSON.stringify(chng.previousValue);
    //   this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    // }
  }

  // reset() { this.changeLog.length = 0; }

}
