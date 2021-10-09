import { Invoice } from './classes/invoice.js';
import { Payments } from './classes/payments.js';
import { ListTemplate } from './classes/listTemplate.js';
const form = document.querySelector(".new-item-form");
//inputs 
const type = document.querySelector("#type");
const toFrom = document.querySelector("#toFrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const ul = document.querySelector('ul');
    const list = new ListTemplate(ul);
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payments(toFrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
//GENERICS
const addUID = (obj) => {
    let uidRand = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uidRand });
};
