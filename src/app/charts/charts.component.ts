import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  initialLetter= [];
  contactsByFullName = [];
  emailExtensions = [];
  phonePrefixData = [];


  constructor(private contactsService: ContactsService, private productsService: ProductsService) { }

  ngOnInit() {
    this.contactsService.getContacts().subscribe(data => {
      this.initialLetter = this.calculateInitialLettersData(data);
      this.contactsByFullName = this.calculateContactsByFullNameData(data);
      this.emailExtensions = this.calculateEmailExtensionsData(data);
      this.phonePrefixData=this.generatePhonePrefixData(data);
    })
  }

  calculateInitialLettersData(contacts: any[]): any{
    return contacts.reduce((result, contact)=>{
      const initial = contact.surname.charAt(0).toUpperCase();
      if(result.find(item => item.name === initial)){
        result.find(item => item.name === initial).value++
      }else{
        result.push({name: initial, value: 1})
      }
      return result;
    },[])
  }

  calculateContactsByFullNameData(contacts: any[]): any{
    let tempContactsByFullName = [{
      name: 'Contacts',
      series: []
    }];
    contacts.forEach(contact => {
      const fullName = contact.name + contact.surname + contact.surname2;
      const size = fullName.length;
      const range = `${size - (size % 5)} - ${size - (size % 5) + 4} ch.`;
      let exitstingRange = tempContactsByFullName[0].series.find(item => item.name === range);
      if(exitstingRange){
        exitstingRange.value++;
      }else{
        tempContactsByFullName[0].series.push({name: range, value: 1 });
      }   
    });
    return tempContactsByFullName.map(entry =>{
      return{
        ...entry,
        series: entry.series.sort((a,b) => Number(a.name.split('-')[0]) - Number(b.name.split('-')[0]))
      }
    })
  }

  calculateEmailExtensionsData(contacts: any[]): any{
    let emailExtensionsMap = new Map<string, number>();

    contacts.forEach(contact =>{
      let emailParts = contact.email.split('@');
      if(emailParts.length==2){
        const domain = emailParts[1];
        const firstDoIndex =domain.indexOf('.');
        if(firstDoIndex !=-1){
          const extension = domain.substring(firstDoIndex);
          if(emailExtensionsMap.has(extension)){
            emailExtensionsMap.set(extension, emailExtensionsMap.get(extension)+1)
          }else{
            emailExtensionsMap.set(extension, 1);
          }
        }
      }
    });
    let emailExtensions = [];
    emailExtensionsMap.forEach((value,key) =>{
      emailExtensions.push({name: key, value: value});
    });
    return emailExtensions;
  }

  generatePhonePrefixData(contacts: any[]): any{
    let phonePrefixData = [];
    let prefixCounts = {};
    contacts.forEach(contact =>{
      const phonePrefix = String(contact.phone_number).substring(0,1);
      if(prefixCounts[phonePrefix]){
        prefixCounts[phonePrefix]++;
      }else{
        prefixCounts[phonePrefix] = 1;
      }
    });

    for(let prefix in prefixCounts){
      if(prefixCounts.hasOwnProperty(prefix)){
        phonePrefixData.push({name: prefix, value:prefixCounts[prefix]})
      }
    }
    return phonePrefixData;
  }




}
