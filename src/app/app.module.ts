import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
       
  
  ],
  providers: [],
  bootstrap: [AppComponent],
})


export class AppModule { }
