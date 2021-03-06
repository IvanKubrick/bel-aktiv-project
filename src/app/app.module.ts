import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './page/navigation/header/header.component';
import { FooterComponent } from './page/navigation/footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { LicensesComponent } from './licenses/licenses.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PromoComponent } from './promo/promo.component';
import { LicenseComponent } from './licenses/license/license.component';
import { ContactsBlockComponent } from './page/contacts-block/contacts-block.component';
import { LicensePopupComponent } from './licenses/license-popup/license-popup.component';
import { SidenavComponent } from './page/navigation/sidenav/sidenav.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ProjectsComponent,
    LicensesComponent,
    ContactsComponent,
    PromoComponent,
    LicenseComponent,
    ContactsBlockComponent,
    LicensePopupComponent,
    SidenavComponent,
    NotFoundComponent
  ],
  entryComponents: [LicensePopupComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MaterialModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
