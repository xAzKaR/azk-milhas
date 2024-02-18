import { Component } from '@angular/core';

@Component({
  selector: 'app-card-depoimentos',
  templateUrl: './card-depoimentos.component.html',
  styleUrls: ['./card-depoimentos.component.scss']
})
export class CardDepoimentosComponent {
  longText = `A Jornada foi uma das melhores agências de viagens que eu já experimentei.` +
  `O serviço ao cliente foi excepcional e toda a equipe foi muito atenciosa e prestativa.`;
}
