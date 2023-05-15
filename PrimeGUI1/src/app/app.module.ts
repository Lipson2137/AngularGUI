import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponentComponent } from './calendar-component/calendar-component.component';
import { ChartComponentComponent } from './chart-component/chart-component.component';
import { TaskComponentComponent } from './task-component/task-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProxyComponentComponent } from './proxy-component/proxy-component.component';
import { SettingComponentComponent } from './setting-component/setting-component.component';
import { ProfilesComponentComponent } from './profiles-component/profiles-component.component';
import { PopupComponentComponent } from './popup-component/popup-component.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalGroupComponent } from './modal-group/modal-group.component';
import { FormsModule,  ReactiveFormsModule} from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';
import { ReleaseCalendarPipePipe } from './release-calendar-pipe.pipe';
import { CurrencyPipePipe } from './currency-pipe.pipe';
import { PaymentCardPipePipe } from './payment-card-pipe.pipe';
import { PaymentCardBlurPipePipe } from './payment-card-blur-pipe.pipe';
import { ProductKeyPipesPipe } from './product-key-pipes.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CalendarComponentComponent,
    ChartComponentComponent,
    TaskComponentComponent,
    HomeComponentComponent,
    ProxyComponentComponent,
    SettingComponentComponent,
    ProfilesComponentComponent,
    PopupComponentComponent,
    ModalGroupComponent,
    ReleaseCalendarPipePipe,
    CurrencyPipePipe,
    PaymentCardPipePipe,
    PaymentCardBlurPipePipe,
    ProductKeyPipesPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    AppRoutingModule,
    NgbModule,
    NgbModalModule,
    FormsModule,
    ClipboardModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
