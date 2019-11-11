
import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
    constructor(
    ){}

    setItem(key: string, value: any) {
        localStorage.setItem(key, value)
    }

    getItem(key: string) :string{
        return localStorage.getItem(key)
    }
}