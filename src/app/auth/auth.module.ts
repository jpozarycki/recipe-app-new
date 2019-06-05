import {NgModule} from '@angular/core';
import {AuthComponent} from './auth.component';
import {RouterModule} from '@angular/router';
import {AuthRoutingModule} from './auth-routing.module';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    FormsModule,
    RouterModule,
    SharedModule,
    AuthRoutingModule
  ],
})
export class AuthModule {
}
