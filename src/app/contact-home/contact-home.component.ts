import { Component, OnInit } from '@angular/core';

export interface Contact {
  id: number;
  name: string;
  surname: string;
  surname2: string;
  phone_number: string;
  email: string;
}

const ELEMENT_DATA: Contact[] = [
  {id: 1, name: 'Carlos', surname: 'Verde', surname2: 'Gil', phone_number:'667800779', email: "gil_cobra@gmail.com" },
  {id: 2, name: 'Maria', surname: 'Lamas', surname2: 'Dommar', phone_number:'669551120', email: "colus@galicia.com" },
  {id: 3, name: 'Ana', surname: 'Blanco', surname2: 'Miranda', phone_number:'671800771', email: "jmora@usb.ve" },
  {id: 4, name: 'Luis', surname: 'Pardo', surname2: 'Lomas', phone_number:'667160778', email: "karma@yahoo.com" },
  {id: 5, name: 'Marcos', surname: 'Bolivar', surname2: 'Gamus', phone_number:'881552215', email: "gamuslola@hotmail.com" },
  {id: 6, name: 'Lucia', surname: 'Rodriguez', surname2: 'Chalbaud', phone_number:'668112233', email: "jscuco@gmail.com" },
  {id: 7, name: 'Pedro', surname: 'Da Silva', surname2: 'Sucre', phone_number:'981551254', email: "jmapa@gmail.com" },
  {id: 8, name: 'Mariana', surname: 'Martinez', surname2: 'Perez', phone_number:'687800707', email: "klg@galicia.com" },
  {id: 9, name: 'Doris', surname: 'Barcelona', surname2: 'Gomez', phone_number:'981998812', email: "lomas@hotmail.com" }

]

@Component({
  selector: 'app-contact-home',
  templateUrl: './contact-home.component.html',
  styleUrls: ['./contact-home.component.css']
})

export class ContactHomeComponent  {


     displayedColumns: string[] = ['id', 'name', 'surname', 'surname2', 'phone_number', 'email'];
    contacts = ELEMENT_DATA;
  }



