
import './CalendarOutline.css';
import Card from '../UI/Card'
import CalendarDate from './CalendarDate'
import { useState } from 'react';


function CalendarOutline(props) {



function eventListHandler(eventList){

props.onEvents(eventList)

}

function showEventsHandler(eventList){

    props.onShowEvents(eventList)

}


    const yearAndMonth = props.MonthYear.split('-')
    const year = parseInt(yearAndMonth[0]);

    const month = parseInt(yearAndMonth[1])

    const months = [ "","January", " February", "March", "April", "May", "June", "July",
                     "August", "September", "October", "November", "December"]

    const monthChar = months[month];


    var numOfDays = new Date(year, month, 0).getDate();


    var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var weekdayElement = weekday.map((day,index) => <Card className="day" key={index} >{day}</Card>)


    var localDay = new Date(year, (month-1));


    var dayArray = new Array();

    for (let i = 1; i <= numOfDays; i++) {

        dayArray.push(i);
    }

    for (var emptyday = 1; emptyday <= localDay.getDay(); emptyday++) {
        dayArray.unshift("");
    }



    return (
        <div>
            <Card className="outlineCard" >
                <div className='YearTab'>{year} </div>

                <div className='MonthTab'>{monthChar} </div>
            </Card>

            <div className='weekdays' >
                {weekdayElement}
            </div>
            <CalendarDate days={dayArray} month={month} year={year} onEventList={eventListHandler} onShowEvents={showEventsHandler}  />
            
        </div>
    )


}

export default CalendarOutline
