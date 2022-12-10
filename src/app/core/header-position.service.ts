import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CoreModule } from './core.module';

@Injectable()
export class HeaderPostionService {
    _absoluteChangedSubject:Subject<boolean> = new Subject<boolean>();
    absoluteChanged$= this._absoluteChangedSubject.asObservable() 
    constructor() { }

    isAbsolute(absolute:boolean){
        this._absoluteChangedSubject.next(absolute);
    }
}