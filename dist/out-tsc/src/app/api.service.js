import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const apiUrl = 'http://localhost:3000/api';
let ApiService = class ApiService {
    constructor(http) {
        this.http = http;
    }
    //constructor() { }
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // Let the app keep running by returning an empty result.
            return of(result);
        };
    }
    getCases() {
        return this.http.get(`${apiUrl}`)
            .pipe(tap(cases => console.log('fetched cases')), catchError(this.handleError('getCases', [])));
    }
    getCasesById(id) {
        const url = `${apiUrl}/${id}`;
        return this.http.get(url).pipe(tap(_ => console.log(`fetched cases id=${id}`)), catchError(this.handleError(`getCasesById id=${id}`)));
    }
    addCases(cases) {
        return this.http.post(apiUrl, cases, httpOptions).pipe(tap((c) => console.log(`added cases w/ id=${c._id}`)), catchError(this.handleError('addCases')));
    }
    updateCases(id, cases) {
        const url = `${apiUrl}/${id}`;
        return this.http.put(url, cases, httpOptions).pipe(tap(_ => console.log(`updated cases id=${id}`)), catchError(this.handleError('updateCases')));
    }
    deleteCases(id) {
        const url = `${apiUrl}/${id}`;
        return this.http.delete(url, httpOptions).pipe(tap(_ => console.log(`deleted cases id=${id}`)), catchError(this.handleError('deleteCases')));
    }
    getStatistic(status) {
        const url = `${apiUrl}/daily/${status}`;
        return this.http.get(url).pipe(tap(_ => console.log(`fetched statistic status=${status}`)), catchError(this.handleError(`getStatistic status=${status}`)));
    }
};
ApiService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ApiService);
export { ApiService };
//# sourceMappingURL=api.service.js.map