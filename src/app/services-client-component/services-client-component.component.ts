import { Component, OnInit, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { NavigationComponent } from "../navigation-component/navigation-component";
import { FooterComponent } from "../footer-component/footer-component";
import { CommonModule } from '@angular/common';
import { ServiceCardComponentComponent } from "../service-card-component/service-card-component.component";

// Interface for defining the service structure
interface Service {
  type: string;
  nom: string;
  description: string;
  localisation: string;
  climat: string;
  imageUrl: string;
}

@Component({
  selector: 'app-services-client-component',
  standalone: true, // The component is standalone
  imports: [NavigationComponent, FooterComponent, CommonModule, ServiceCardComponentComponent],
  templateUrl: './services-client-component.component.html',
  styleUrl: './services-client-component.component.css'
})
export class ServicesClientComponentComponent implements OnInit, AfterViewInit {

  // @ViewChildren decorator to get all service card elements
  @ViewChildren('serviceCard') serviceCards!: QueryList<ElementRef>;
  
  // Service data
  services: Service[] = [
    {
      type: 'Hébergement',
      nom: 'Hôtel Grand Central',
      description: 'Situé au cœur de la ville, cet hôtel offre une vue imprenable et des services de luxe. Idéal pour les voyages d\'affaires ou les escapades romantiques.',
      localisation: 'Douala',
      climat: 'Tropical',
      imageUrl: 'https://placehold.co/800x600/09362b/ffffff?text=Hôtel'
    },
    {
      type: 'Hébergement',
      nom: 'Villa Le Rivage',
      description: 'Un havre de paix en bord de mer, avec un accès direct à la plage privée. Parfait pour se détendre et profiter du soleil.',
      localisation: 'Limbe',
      climat: 'Tropical',
      imageUrl: 'https://placehold.co/800x600/09362b/ffffff?text=Villa+Le+Rivage'
    },
    {
      type: 'Activité Culturelle',
      nom: 'Visite guidée des marchés',
      description: 'Découvrez les couleurs et les saveurs du Cameroun. Une immersion authentique dans la vie locale.',
      localisation: 'Yaoundé',
      climat: 'Tropical',
      imageUrl: 'https://placehold.co/800x600/09362b/ffffff?text=Marché+local'
    },
    {
      type: 'Location de Véhicule',
      nom: 'SUV de Luxe',
      description: 'Voyagez en toute élégance avec notre SUV de luxe. Parfait pour explorer le pays confortablement.',
      localisation: 'Douala',
      climat: 'Tropical',
      imageUrl: 'https://placehold.co/800x600/09362b/ffffff?text=SUV'
    },
    {
      type: 'Séjour',
      nom: 'Circuit Mont Cameroun',
      description: 'Une aventure de plusieurs jours pour les amoureux de la nature. Randonnée, découverte et paysages à couper le souffle.',
      localisation: 'Buea',
      climat: 'Montagneux',
      imageUrl: 'https://placehold.co/800x600/09362b/ffffff?text=Mont+Cameroun'
    },
    {
      type: 'Activité Culturelle',
      nom: 'Musée des Civilisations',
      description: 'Plongez au cœur de l\'histoire du Cameroun. Une collection riche qui retrace le passé du pays.',
      localisation: 'Yaoundé',
      climat: 'Tropical',
      imageUrl: 'https://placehold.co/800x600/09362b/ffffff?text=Musée'
    }
  ];

  categories: string[] = [];

  // This method is called when the component initializes
  ngOnInit(): void {
    // Extract unique categories from the services array
    this.categories = [...new Set(this.services.map(s => s.type))];
  }

  // This method is called after the view has been initialized
  ngAfterViewInit(): void {
    // Trigger the card animation
    this.animateCards();
  }

  // Method for the animation
  animateCards(): void {
    this.serviceCards.forEach((card, index) => {
      setTimeout(() => {
        card.nativeElement.classList.add('animated', 'fadeInUp', 'fast');
      }, 200 * index); // Progressive delay for each card
    });
  }

  // Method to filter services by category
  filterByCategory(category: string): Service[] {
    return this.services.filter(service => service.type === category);
  }

}