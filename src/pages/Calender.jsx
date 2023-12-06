import React from "react";
import {
  DatePickerComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-react-calendars";
import { scheduleData } from "../data/dummy";
import { Header } from "../components";
import { Schedule } from "@syncfusion/ej2-react-schedule";

const Calenders = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
     
     Calender
      {/* <Header category="App" title="Calender" />
      <ScheduleComponent>
        <Inject
          services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}
        />
      </ScheduleComponent> */}
    </div>
  );
};
export default Calenders;
