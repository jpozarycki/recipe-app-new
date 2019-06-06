import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from './shared/shared.module';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {AlertComponent} from './shared/alert/alert.component';
import {CoreModule} from './core.module';
import {StoreModule} from '@ngrx/store';
import {shoppingListReducer} from './shopping-list/store/shopping-list.reducer';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({shoppingList: shoppingListReducer}),
    SharedModule,
    CoreModule
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    AlertComponent
  ],
  // providers: [LoggingService]
})
export class AppModule {
}
