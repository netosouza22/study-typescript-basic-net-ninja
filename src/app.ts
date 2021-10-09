import {Invoice } from './classes/invoice.js';
import { Payments } from './classes/payments.js'; 
import { hasFormatter } from './interfaces/hasFormatter.js';
import { ListTemplate } from './classes/listTemplate.js';

const form = document.querySelector(".new-item-form") as HTMLFormElement;

//inputs 
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#toFrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener('submit', (evt: Event) => {
    evt.preventDefault();

    const ul = document.querySelector('ul')!;
    const list = new ListTemplate(ul)

    let doc: hasFormatter;
    if(type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }else {
        doc = new Payments(toFrom.value, details.value, amount.valueAsNumber);
    }

    list.render(doc, type.value, 'end');
});

//GENERICS

const addUID = <T extends {name: string}>(obj: T) => {
    let uidRand = Math.floor(Math.random() * 100);

    return {...obj, uidRand};
}

interface Resource<T> {
    uid: number,
    resourceName: string,
    data: T,
}

const doc: Resource<object> = {
    uid: 23,
    resourceName: 'lulu',
    data: {
        name: 'lili',
        age: 2,
    }

}