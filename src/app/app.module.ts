import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { registerLocaleData } from '@angular/common'
import locatePt from '@angular/common/locales/pt'


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { PanelComponent } from './panel/panel.component';
import { InputContainerComponent } from './input-container/input-container.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: 'template-form', component: TemplateFormComponent }
]
registerLocaleData(locatePt, 'pt');
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    PanelComponent,
    InputContainerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [FormsModule, RouterModule],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
