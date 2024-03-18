import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule,  } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoLoaderComponent } from './logo-loader/logo-loader.component';
import { ReactiveFormsModule } from '@angular/forms';
<<<<<<< Updated upstream
import { PaginatorComponent } from './paginator/paginator.component';
import {MatPaginatorModule} from '@angular/material/paginator';

=======
import { HeloworldComponent } from './heloworld/heloworld.component';
>>>>>>> Stashed changes
@NgModule({
  declarations: [
    AppComponent,
    LogoLoaderComponent,
<<<<<<< Updated upstream
    PaginatorComponent,
=======
    HeloworldComponent,    
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
