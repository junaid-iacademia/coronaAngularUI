import { __decorate } from "tslib";
import { Component } from '@angular/core';
let CasesComponent = class CasesComponent {
    //constructor() { }
    constructor(api) {
        this.api = api;
        this.displayedColumns = ['name', 'age', 'status'];
        this.data = [];
        this.isLoadingResults = true;
    }
    ngOnInit() {
        this.api.getCases()
            .subscribe((res) => {
            this.data = res;
            console.log(this.data);
            this.isLoadingResults = false;
        }, err => {
            console.log(err);
            this.isLoadingResults = false;
        });
    }
};
CasesComponent = __decorate([
    Component({
        selector: 'app-cases',
        templateUrl: './cases.component.html',
        styleUrls: ['./cases.component.css']
    })
], CasesComponent);
export { CasesComponent };
//# sourceMappingURL=cases.component.js.map