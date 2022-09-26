import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-project';
  link = 'recipe';

  onNavigate(link: string): void {
    this.link = link;
  }

  isShopping(link): boolean {
    return link === 'shopping-list';
  }
}
