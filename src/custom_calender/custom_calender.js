import React, { Component } from "react";
import './custom_calender.css'
class CustomCalender extends Component {
    constructor() {
        super()
        this.months = [
            {
              
            }
        ]
        this.weekdays = [
            {
                name: 'Sun'
            },
            {
                name: 'Mon'
            },
            {
                name: 'Tue'
            }, {
                name: 'Wed'
            }, {
                name: 'Thu'
            }, {
                name: 'Fri'
            }, {
                name: 'Sat'
            }
        ]
        this.state = {
            staringDayOfMonth: 0,
            days: []
        }
    }


    componentDidMount() {
        this.getDaysInMonth(2, 2020)

    }

    getDaysInMonth(month, year) {
        var d = new Date();
        var n = d.getDay();
        console.log(n)
         var pre = new Date(year , month -1 , 0).getDate()
         console.log(pre)
         var next = new Date(year , month +1 , 0).getDate()
         console.log(next)

        var date = new Date(year, month, 1);
        var startingDay = date.getDay()
      //  console.log(this.getDaysInMonth)

     //   console.log(date.getDay())

        var days = [];
        while (date.getMonth() === month) {
            days.push(date.getDate());
         //   console.log()
            date.setDate(date.getDate() + 1);
            // console.log(date.getMonth)
        }
  //      console.log(days)
        for (var i = 0; i < startingDay; i++) {
           days.unshift(pre-i)
        }

       
    //    console.log(days)

    //    console.log(days.length / 7)
        
        let row =0

        //for(i=0)
        let temp =[]
       for(i=0 ; i< 5; i++){
       let row =[]
        for(let j=(i*7) ; j< (i*7 + 7) ; j++){
           if(j < days.length){
         //      console.log(days[j])
               row.push(days[j])
          // d[i][j] = days[j]
           }
               
        
        }
        temp.push(row)
        
     //   console.log(d)
       }
       let nextval = 1
       while( temp[temp.length -1].length < 7){
        temp[temp.length -1].push(nextval)
        nextval = nextval + 1
       }
    //    for (var i = 0; i < temp[temp.length -1].length; i++) {
    //     days.unshift(pre-i)
    //  }
   //    console.log(temp)

        this.setState({
            days: temp,
          //  staringDayOfMonth:startingDay
        } , () => {
        //    this.getEmptySpan()
  //      console.log(this.state.days)
        })
    }

    getEmptySpan(){
        var empty_span = [];
for (var i = 0; i < this.state.staringDayOfMonth; i++) {
    empty_span.push(<span className="date">{31-i}</span>);
}
console.log(empty_span)
 return empty_span;
    }



    render() {
        return (
            <div>
                <div>
                    <span>
                        pre
                    </span>
                    <span>
                        pre
                    </span>
                </div>
                <div className="weekdays">

                    

                </div>
<table>
<tr>
{
                        this.weekdays.map(day => (
                            <th> {day.name}</th>
                          
                        ))

                    }
   
   
  </tr>
              
                    {
                        this.state.days.map((date,index) => (
                            
                         <tr className="date-row">

                             {date.map(d => (
                                 <td  className="cell">{d}</td>
                             ))}
                         </tr>
                          
                           
                        ))
                    }
                    </table>
                </div>
               
                )
            }
        }
        
        export default CustomCalender
        
