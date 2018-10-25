import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { PanelComponent } from './panel/panel.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: 'template-form', component: TemplateFormComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [FormsModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
