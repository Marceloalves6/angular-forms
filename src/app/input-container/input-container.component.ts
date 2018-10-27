import { Component, OnInit, ContentChild, Input } from '@angular/core';
import { NgModel, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-input-container',
  templateUrl: './input-container.component.html',
  styleUrls: ['./input-container.component.css']
})
export class InputContainerComponent implements OnInit {
  constructor() { }
  @Input() label: string;
  @Input() errorMessage: string
  @ContentChild(NgModel) model: NgModel;
  @ContentChild(FormControlName) control: FormControlName;
  ngOnInit() {
  }

  hasError(): boolean {
    
    const input = this.model || this.control;
    return input.invalid && (input.touched || input.dirty)
  }

}
