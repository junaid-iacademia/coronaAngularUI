import { __decorate } from "tslib";
import { Component } from '@angular/core';
let CasesDetailsComponent = class CasesDetailsComponent {
    constructor(route, api, router) {
        this.route = route;
        this.api = api;
        this.router = router;
        this.cases = { _id: '', name: '', gender: '', age: null, address: '', city: '', country: '', status: '', updated: null };
        this.isLoadingResults = true;
    }
    getCasesDetails(id) {
        this.api.getCasesById(id)
            .subscribe((data) => {
            this.cases = data;
            console.log(this.cases);
            this.isLoadingResults = false;
        });
    }
    deleteCases(id) {
        this.isLoadingResults = true;
        this.api.deleteCases(id)
            .subscribe(res => {
            this.isLoadingResults = false;
            this.router.navigate(['/cases']);
        }, (err) => {
            console.log(err);
            this.isLoadingResults = false;
        });
    }
    ngOnInit() {
        this.getCasesDetails(this.route.snapshot.params.id);
    }
};
CasesDetailsComponent = __decorate([
    Component({
        selector: 'app-cases-details',
        templateUrl: './cases-details.component.html',
        styleUrls: ['./cases-details.component.css']
    })
], CasesDetailsComponent);
export { CasesDetailsComponent };
//# sourceMappingURL=cases-details.component.js.map