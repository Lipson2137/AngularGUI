import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { CheckoutFeedServiceService} from '../checkout-feed-service.service';
import checkouts from './dataCheckout/checkouts.json';
interface Checkout{
 name:String,
 site:String,
whenDay:String;
}






@Component({
  selector: 'app-chart-component',
  templateUrl: './chart-component.component.html',
  styleUrls: ['./chart-component.component.css']
})
export class ChartComponentComponent implements OnInit {
  MondayValue:Number;
  TuesdayValue:Number;
  WenesdayValue:Number;
  ThursdayValue:Number;
  FridayValue:Number;
  SaturdayValue:Number;
  SundayValue:Number;


  constructor(private CheckoutFeedServiceService:CheckoutFeedServiceService) {
    
   }

 
  checkouts:Checkout[] = checkouts;

  ngOnInit(): void {



      const dateToday = new Date();
      const dateYesterday = new Date( new Date().setDate(dateToday.getDate()-1));
      const dateYesterday2 =  new Date( new Date().setDate(dateToday.getDate()-2));
      const dateYesterday3 =  new Date( new Date().setDate(dateToday.getDate()-3));
      const dateYesterday4 =  new Date( new Date().setDate(dateToday.getDate()-4));
      const dateYesterday5 =  new Date( new Date().setDate(dateToday.getDate()-5));
      const dateYesterday6 =  new Date( new Date().setDate(dateToday.getDate()-6));


      console.log("date today: "+dateToday.getDate()+":"+dateToday.getMonth());
      console.log("date yesterday: "+dateYesterday);
      console.log("date yesterday6: "+dateYesterday6.getDate());


 this.MondayValue =   checkouts.filter(obj =>obj.whenDay==='Monday').length;
 this.TuesdayValue =   checkouts.filter(obj =>obj.whenDay==='Tuesday').length;
 this.WenesdayValue =   checkouts.filter(obj =>obj.whenDay==='Wenesday').length;
 this.ThursdayValue =   checkouts.filter(obj =>obj.whenDay==='Thursday').length;
 this.FridayValue =   checkouts.filter(obj =>obj.whenDay==='Friday').length;
 this.SaturdayValue =   checkouts.filter(obj =>obj.whenDay==='Saturday').length;
 this.SundayValue =   checkouts.filter(obj =>obj.whenDay==='Sunday').length;


    console.log(checkouts.length)

  

    Chart.register(...registerables);
    this.loadChart();
    const myChart = new Chart("myChart", {
      type: 'line',
      data: {
          labels: [dateYesterday6.getDate()+"."+(dateYesterday6.getMonth()+1),dateYesterday5.getDate()+"."+(dateYesterday5.getMonth()+1),dateYesterday4.getDate()+"."+(dateYesterday4.getMonth()+1),dateYesterday3.getDate()+"."+(dateYesterday3.getMonth()+1),dateYesterday2.getDate()+"."+(dateYesterday2.getMonth()+1),dateYesterday.getDate()+"."+(dateYesterday.getMonth()+1),dateToday.getDate()+"."+(dateToday.getMonth()+1)],
          datasets: [{
              label: "# number of checkouts per time",
              data: [this.MondayValue,this.TuesdayValue,this.WenesdayValue,this.ThursdayValue,this.FridayValue,this.SaturdayValue,this.SundayValue],
              fill: false,
              borderColor:  'rgb(75, 192, 192)',
              tension: 0.4,
              backgroundColor:'rgb(255,255,255)'
          
          }]
      },
      options: {
          scales: {
              y: {
                ticks:{
                   color:'white'
                },
            
                  beginAtZero: true,
              },
              x: {
                ticks:{
                   color:'white'
                },
                beginAtZero: true,
              }
          }
      }
  });

 
   
  }

 

  loadChart(): void{}

}
