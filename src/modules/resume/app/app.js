import { LightningElement, track } from "lwc";

import Database from "resume/database";

export default class App extends LightningElement {
    @track resume;

    constructor() {
        super();

        this.resume = {};
    }

    get isBusy() {
        return Object.keys(this.resume).length === 0;
    }

    connectedCallback() {
        //Database.assignTo(this, "resume");
        Database.retrieve().assignTo(this, "resume");
    }
}
