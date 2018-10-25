import { Component, OnInit, Input, ContentChild } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  constructor() { }
  @Input() title: string;
   ngOnInit() {
  }

}
