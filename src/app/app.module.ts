import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AddDeleteComponent } from './add-delete/add-delete.component';
import { DisplayComponent } from './display/display.component';
import { DisplayService } from './display.service';
import { JsonpModule } from '@angular/http';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        JsonpModule
    ],
    providers: [ DisplayService ],
    declarations: [
        AppComponent, 
        AddDeleteComponent,
        DisplayComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}