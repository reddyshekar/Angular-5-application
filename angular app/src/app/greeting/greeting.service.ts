import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

@Injectable()
export class GreetingService {

  constructor(private http: Http) {}

  getGreetingMessage(name: string) {
    return this.http.get('http://localhost:9000/generateGreeting/'+ name)
        .map((response: Response) => {
            const msg = response.text();
            
            return msg;
        })
        .catch((error: Response) => Observable.throw(error.json()));
}
}
