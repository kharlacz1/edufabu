import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

/*  public readonly articleTilesInfo = [
    new Artifact(0, "Piramida zwierząt", "Katarzyna Kozyra",  "4 wypreparowane zwierzęta – koń, pies, kot, kogut; wideo", "Granice prowokacji w sztuce - Piramida zwierząt wzbudziła wiele kontrowersji", "0"),
    new Artifact(1, "Grafika - projekt okładki",  "Henryk Tomaszewski",  "projekt okładki Hotel Sztuki Zachęta – Narodowa Galeria Sztuki, Bosz, Warszawa 2014", "Skrócony opis 1", "1"),
    new Artifact(2, "Naginanie konstrukcji",  " Monika Sosnowska",
      "Prace nad zginaniem stalowej konstrukcji miały miejsce na terenie dawnego radzieckiego kołchozu, w którym niegdyś produkowano mleko, a dzisiaj mieści się tam biuro architektoniczne i zakład ślusarski. Struktura Sosnowskiej jest kopią, w skali 1 : 1, zwieńczenia hiperboloidalnej wieży radiowej zaprojektowanej dla moskiewskiej Szabolowki",
      "Po inspiracjach polskim socmodernizmem i jego ruinami, blokowiskami, fabrykami domów czy straganami pozostałymi po warszawskim Stadionie Dziesięciolecia, jak również stylem międzynarodowym w wydaniu Bauhausu, De Stijlu i chicagowskich realizacji Ludwiga Miesa van der Rohe", "2"),
    new Artifact(3, "video ZŁOTO I SREBRO",  "Joanna Rajkowska",  "Film Złoto i srebro jest zapisem wycieczki ojca artystki Andrzeja Rajkowskiego do miejsc, które są związane z ich rodzinną historią. Opowieść ta skupia się na rozpamiętywaniu fortuny", "Chemia: złoto / srebro", "0"),
  ];
*/
  constructor() { }

  searchFormControl = new FormControl('', []);

  ngOnInit(): void {

  }

}

