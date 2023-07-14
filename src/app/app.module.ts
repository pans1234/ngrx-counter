import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter/counter.component';
import { OutputComponent } from './counter/output/output.component';
import { ButtonsComponent } from './counter/buttons/buttons.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter/counter.reducer';
import { CustomInputComponent } from './counter/custom-input/custom-input.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { PostlistComponent } from './posts/postlist/postlist.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PostReducer } from './posts/postlist/state/post.reducer';
import { appReducer } from './store/App.store';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    OutputComponent,
    ButtonsComponent,
    CustomInputComponent,
    HomeComponent,
    HeaderComponent,
    PostlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // ! You havre to update each time whenver a store is created for a particular Module
    StoreModule.forRoot({counterModule : counterReducer, postModule : PostReducer}),
    // StoreModule.forRoot(appReducer),

    StoreDevtoolsModule.instrument({
      // maxAge: 25, // Retains last 25 states ----> Number of Actions
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
