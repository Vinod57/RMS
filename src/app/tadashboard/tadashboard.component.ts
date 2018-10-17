import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iemp } from '../emp';
import { Observable } from '../../../node_modules/rxjs';
@Component({
  selector: 'app-tadashboard',
  templateUrl: './tadashboard.component.html',
  styleUrls: ['./tadashboard.component.css']
})
export class TadashboardComponent implements OnInit {
  configUrl = 'https://addjd.herokuapp.com/addjd';  
  public emp = [];
  constructor(private http: HttpClient) { }
  getConfig():Observable<Iemp[]> {
    return this.http.get<Iemp[]> (this.configUrl);
  }
  ngOnInit() {
    this.getConfig().subscribe(data => this.emp = data);
  }

}
