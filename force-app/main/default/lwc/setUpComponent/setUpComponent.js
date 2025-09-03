import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class SetUpComponent extends LightningElement {
    showToast() {
    const event = new ShowToastEvent({
        title: 'Get Help',
        message:
            'Salesforce documentation is available ----',
    });
    this.dispatchEvent(event);
}}
