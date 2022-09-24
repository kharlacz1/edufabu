import {Injectable} from '@angular/core';
import {Artifact} from '../app/Interfaces/artifact';


@Injectable({
  providedIn: 'root'
})
export class ArtifactService {

  data: Artifact[] =
    [
      {
        id: 0,
        name: "Piramida zwierząt",
        author: "Katarzyna Kozyra",
        desc: "4 wypreparowane zwierzęta – koń, pies, kot, kogut; wideo",
        reference: "Granice prowokacji w sztuce - Piramida zwierząt wzbudziła wiele kontrowersji",
        img: "0",
        tags: ["sztuka", "biologia", "społeczeństwo"]
      },
      {
        id: 1,
        name: "Grafika - projekt okładki",
        author: "Henryk Tomaszewski",
        desc: "projekt okładki Hotel Sztuki Zachęta – Narodowa Galeria Sztuki, Bosz, Warszawa 2014",
        reference: "Polska szkoła plakatu zdobyła uznanie na całym świecie. W szarej rzeczywistości powojennej Polski, na zburzonych ulicach pojawiły się niezwykłe plakaty. Cechowały je indywidualny styl, niezwykła malarska forma, swobodna gra wyobraźni, bogactwo emocji. Plakat tworzony przez wybitnych artystów został podniesiony do rangi sztuki, a ulica stała jego salonem",
        img: "1",
        tags: ["sztuka", "plakat"]
      },
      { id: 2,
        name: "Naginanie konstrukcji",
        desc:"Prace nad zginaniem stalowej konstrukcji miały miejsce na terenie dawnego radzieckiego kołchozu, w którym niegdyś produkowano mleko, a dzisiaj mieści się tam biuro architektoniczne i zakład ślusarski. Struktura Sosnowskiej jest kopią, w skali 1 : 1, zwieńczenia hiperboloidalnej wieży radiowej zaprojektowanej dla moskiewskiej Szabolowki",
        author: "Monika Sosnowska",
        reference: "Po inspiracjach polskim socmodernizmem i jego ruinami, blokowiskami, fabrykami domów czy straganami pozostałymi po warszawskim Stadionie Dziesięciolecia, jak również stylem międzynarodowym w wydaniu Bauhausu, De Stijlu i chicagowskich realizacji Ludwiga Miesa van der Rohe",
        img: "2",
        tags: ["sztuka", "architektura"]
      }
    ];

  constructor() { }
}
