import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  constructor() { }
  public form: any = { name: '', email: '' };
  
  ngOnInit() {
  }

  public send(): void {
    console.log(this.form);
  }

}
