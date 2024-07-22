import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyOnchangeComponent } from './my-onchange/my-onchange.component';
import { FormsModule } from '@angular/forms';
import { PeekABooParentComponent } from './peek-a-boo-parent.component';
import { PeekABooComponent } from './peek-a-boo.component';

import { SpyParentComponent } from './spy.component';
import { SpyDirective } from './spy.directive';

import {
  OnChangesParentComponent,
  OnChangesComponent
} from './on-changes.component';

import {
  AfterContentParentComponent,
  AfterContentComponent,
  ChildComponent
} from './after-content.component';

import {
  AfterViewParentComponent,
  AfterViewComponent,
  ChildViewComponent
} from './after-view.component';

import {
  CounterParentComponent,
  MyCounterComponent
} from './counter.component';

import {
  DoCheckParentComponent,
  DoCheckComponent
} from './do-check.component';

@NgModule({
  declarations: [
    AppComponent,
    MyOnchangeComponent,
    AfterContentParentComponent,
    AfterContentComponent,
    ChildComponent,
    AfterViewParentComponent,
    AfterViewComponent,
    ChildViewComponent,
    CounterParentComponent,
    MyCounterComponent,
    DoCheckParentComponent,
    DoCheckComponent,
    OnChangesParentComponent,
    OnChangesComponent,
    PeekABooParentComponent,
    PeekABooComponent,
    SpyParentComponent,
    SpyDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
