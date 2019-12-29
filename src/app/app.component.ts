import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'recipe-app';
  loadedSection: string = "recipe"
  
  onNavigate(section:string){
    this.loadedSection = section
  }
}
