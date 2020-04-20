import { __decorate } from "tslib";
import { Component } from '@angular/core';
let CasesStatComponent = class CasesStatComponent {
    constructor(api) {
        this.api = api;
        this.stats = [];
        this.label = 'Positive';
        this.isLoadingResults = true;
        this.barChartOptions = {
            responsive: true,
        };
        this.barChartLabels = [];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartPlugins = [];
        this.barChartData = [{ data: [], backgroundColor: [], label: this.label }];
    }
    getStatistic(status) {
        this.barChartData = [{ data: [], backgroundColor: [], label: this.label }];
        this.barChartLabels = [];
        this.api.getStatistic(status)
            .subscribe((res) => {
            this.stats = res;
            const chartdata = [];
            const chartcolor = [];
            this.stats.forEach((stat) => {
                this.barChartLabels.push(stat._id.date);
                chartdata.push(stat.count);
                if (this.label === 'Positive') {
                    chartcolor.push('rgba(255, 165, 0, 0.5)');
                }
                else if (this.label === 'Dead') {
                    chartcolor.push('rgba(255, 0, 0, 0.5)');
                }
                else {
                    chartcolor.push('rgba(0, 255, 0, 0.5)');
                }
            });
            this.barChartData = [{ data: chartdata, backgroundColor: chartcolor, label: this.label }];
            this.isLoadingResults = false;
        }, err => {
            console.log(err);
            this.isLoadingResults = false;
        });
    }
    changeStatus() {
        this.isLoadingResults = true;
        this.getStatistic(this.label);
    }
    ngOnInit() {
        this.getStatistic(this.label);
    }
};
CasesStatComponent = __decorate([
    Component({
        selector: 'app-cases-stat',
        templateUrl: './cases-stat.component.html',
        styleUrls: ['./cases-stat.component.css']
    })
], CasesStatComponent);
export { CasesStatComponent };
//# sourceMappingURL=cases-stat.component.js.map