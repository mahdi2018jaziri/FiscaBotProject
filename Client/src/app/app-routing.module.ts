import { Injectable,NgModule } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { RouterModule, Routes, TitleStrategy, RouterStateSnapshot } from '@angular/router';
import { ContactUsComponent } from './components/contactUs/contactUs.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: "",title: "Home", component: HomeComponent},

  {path: "contactUs",title: "contactUs", component: ContactUsComponent},
];

@Injectable()
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`App | ${title}`);
    }
  }
}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: TitleStrategy, useClass: TemplatePageTitleStrategy }],
})
export class AppRoutingModule { }
