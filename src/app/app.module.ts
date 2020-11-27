import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventosShowComponent } from './eventos-show/eventos-show.component';
import { EventFilterPipe } from './pipes/event-filter.pipe';
import { FormsModule } from '@angular/forms';
import { EventoItemComponent } from './evento-item/evento-item.component';
import { EventoAddComponent } from './evento-add/evento-add.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { BaseUrlInterceptor } from './interceptors/base-url.interceptor';
import { WelcomeComponent } from './welcome/welcome.component';
import { EventoDetailComponent } from './evento-detail/evento-detail.component';
import { RouterModule } from '@angular/router';
import { APP_RUTAS } from './app.rutas';

@NgModule({
  declarations: [
    AppComponent,
    EventosShowComponent,
    EventFilterPipe,
    EventoItemComponent,
    EventoAddComponent,
    WelcomeComponent,
    EventoDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(APP_RUTAS)
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BaseUrlInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
