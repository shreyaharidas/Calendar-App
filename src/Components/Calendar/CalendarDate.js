import './CalendarDate.css';
import Card from '../UI/Card'
import { useState } from 'react';
import EventCall from './Events/EventCall';

function CalendarDate(props) {

 const [blank, setBlank]= useState('')

    
    function eventListHandler(eventList){

        props.onEventList(eventList)
        
        }


    function showEventsHandler(eventList){

        props.onShowEvents(eventList)
       

    }

     
   


    var CalElement = props.days.map(function (day, index) {
        if (day !== '') {
            return (<Card className="dateCard"
                key={index}>
                    <EventCall className="EventCall" day={day} onEventList={eventListHandler} onShowEvents={showEventsHandler}>{props.day}</EventCall>
                    {day}
                </Card>)
        }
        else { return (<div key={index}></div>) }
    })


    return (
        <div className="rowOfSeven"  >
            {CalElement}
        </div>
    )

}

export default CalendarDate;