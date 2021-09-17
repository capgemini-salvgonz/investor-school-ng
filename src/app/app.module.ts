import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// forms 
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';

//Material
import {MatSliderModule} from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';

//http client
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatSliderModule,
    MatCardModule,
    MatTableModule,  
    MatProgressSpinnerModule,
    MatMenuModule,	 	 
    MatIconModule,	 	 
    MatToolbarModule,	 
    MatButtonModule,	 
    MatFormFieldModule,	 
    MatInputModule,	  	 
    MatSelectModule,	 
    MatSortModule, 
    BrowserAnimationsModule,	 	 
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
