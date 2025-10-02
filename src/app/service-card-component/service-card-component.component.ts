import { Component } from '@angular/core';

@Component({
  selector: 'app-service-card-component',
  imports: [],
  templateUrl: './service-card-component.component.html',
  styleUrl: './service-card-component.component.css'
})
export class ServiceCardComponentComponent {

  //Variable de modale

  showServiceModal = false;

    //Methodes modale site
  openServiceModal(): void {
    this.showServiceModal = true;
  }
  
  closeServiceModal():void{
      this.showServiceModal = false;
  }

}
