import { Injectable } from '@angular/core';
import { Developer} from '../app/developer';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable()
export class DeveloperService {
  devs:Developer[];
  private url: string = "http://54.202.108.54/Home/";
  constructor(private httpClient:HttpClient) {   }
  
  getAllDevelopers():Observable<Developer[]>{
    return this.httpClient.get<Developer[]>(this.url+"Developers").pipe(
      map(response=> {this.devs = response; return response;}),
    catchError(this.handleError<any>()));
  }
  
  getDeveloperById(devId:number):Developer{
    return this.devs.find(dev => dev.id == devId);
  }
  
  addDeveloper(formModel: FormData): boolean {
    this.httpClient.post(this.url+"AddDeveloper", formModel)
      .subscribe(res=>{},(err)=>{
        console.log(err);
      });
      return true;
  }

  private handleError<T>(result?:T){
    return (error:any):Observable<T>=>{
      console.log('An Error occured' + error);
      return null;
    }
  }
}
