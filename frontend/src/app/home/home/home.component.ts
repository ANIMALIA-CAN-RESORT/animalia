import { Component, OnInit } from '@angular/core';
import { faDog } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faDog = faDog;
  ahora = new Date();
  myDay = this.ahora.getDay();
  myMonth = this.ahora.getMonth();
  myWeekday = this.ahora.getDate();
  myYear = this.ahora.getFullYear();
  horas = this.ahora.getHours();
  minutos = this.ahora.getMinutes();
  day: string;
  month: string;

  constructor() { }

  ngOnInit() {

    if (this.myDay == 0)
      this.day = " Domingo ";

    else if (this.myDay == 1)
      this.day = " Lunes ";

    else if (this.myDay == 2)
      this.day = " Martes ";

    else if (this.myDay == 3)
      this.day = " Miércoles ";

    else if (this.myDay == 4)
      this.day = " Jueves ";

    else if (this.myDay == 5)
      this.day = " Viernes ";

    else if (this.myDay == 6)
      this.day = " Sábado ";

    if (this.myMonth == 0)
      this.month = "Enero ";

    else if (this.myMonth == 1)
      this.month = "Febrero ";

    else if (this.myMonth == 2)
      this.month = "Marzo ";

    else if (this.myMonth == 3)
      this.month = "Abril ";

    else if (this.myMonth == 4)
      this.month = "Mayo ";

    else if (this.myMonth == 5)
      this.month = "Junio ";

    else if (this.myMonth == 6)
      this.month = "Julio ";

    else if (this.myMonth == 7)
      this.month = "Agosto ";

    else if (this.myMonth == 8)
      this.month = "Setiembre ";

    else if (this.myMonth == 9)
      this.month = "Octubre ";

    else if (this.myMonth == 10)
      this.month = "Noviembre ";

    else if (this.myMonth == 11)
      this.month = "Diciembre ";

  }

}
