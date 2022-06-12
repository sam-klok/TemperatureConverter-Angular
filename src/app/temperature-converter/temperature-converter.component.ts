import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temperature-converter',
  templateUrl: './temperature-converter.component.html',
  styleUrls: ['./temperature-converter.component.css']
})
export class TemperatureConverterComponent implements OnInit {

  inputCelsius: any;
  inputFahrenheit: any;

  constructor() { }

  ngOnInit(): void {
  }

  changed(value:any, type: string){
    if(value){
      let n: number = parseFloat(value);

      if (type === "inputFahrenheit"){
        // Convert from Fahrenheit to Celsius	℃=(℉-32)/1.8
        let c: number = (n-32)/1.8;
        this.inputCelsius = c.toFixed(1);
      }
      else{
        //Convert from Celsius to Fahrenheit	℉=(℃*1.8)+32
        let f: number = (n*1.8)+32;
        this.inputFahrenheit = f.toFixed(1);
      }
    }
    else{
      this.inputFahrenheit = null;
      this.inputCelsius = null;
    }
  
  }
}
