import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProbabilityCalculatorComponent } from './probability-calculator/probability-calculator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NumberPipe} from './pipes/numberPipe';
import { PercentagePipe} from './pipes/percentagePipe';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    ProbabilityCalculatorComponent,
    NumberPipe,
    PercentagePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
