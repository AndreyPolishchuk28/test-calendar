import React from 'react'
import {Inject, ScheduleComponent, Day, Week, Month, Agenda, DragAndDrop, Resize, ViewsDirective, ViewDirective, ResourceDirective, ResourcesDirective} from "@syncfusion/ej2-react-schedule";

import '../App.css'

class Calendar extends React.Component {
    constructor() {
        super(...arguments);
        this.localData = [{
            Id: 1,
            Subject: 'Football game',
            StartTime: new Date(2019, 10 ,9, 20, 10),
            EndTime: new Date(2019, 10 ,9, 22, 10)
        },
        {
            Id: 2,
            Subject: 'Read the book',
            StartTime: new Date(2019, 10, 10, 15, 10),
            EndTime: new Date(2019, 10, 10, 17, 10)
            },
        ]
    }
    onDragStart(args) {
        args.navigation.enable = true;
    }

    generateResourceData(startId, endId, text) {
        let data = [];
        let colors = [
            '#ff8787', '#9775fa', '#748ffc', '#3bc9db', '#69db7c',
            '#fdd835', '#748ffc', '#9775fa', '#df5286', '#7fa900',
            '#fec200', '#5978ee', '#00bdae', '#ea80fc'
        ];
        for (let a = startId; a <= endId; a++) {
            let n = Math.floor(Math.random() * colors.length);
            data.push({
                Id: a,
                Text: text + ' ' + a,
                Color: colors[n]
            });
        }
        return data;
    }

    render() {
        return (
            <ScheduleComponent currentView='Month' selectedDate={new Date()} eventSettings={{ dataSource: this.localData }} dragStart={(this.onDragStart.bind(this))}>
                <ResourcesDirective>
                    <ResourceDirective field='ResourceId' title='Resource' name='Resources' allowMultiple={true} dataSource={this.generateResourceData(1,300, 'color')} textField='Text' idField='Id' colorField='Color'>
                    </ResourceDirective>
                </ResourcesDirective>
                <ViewsDirective>
                    <ViewDirective option='Day' />
                    <ViewDirective option='Week' />
                    <ViewDirective option='Month' />
                    <ViewDirective option='Agenda' />
                </ViewsDirective>
                <Inject services={[Day, Week, Month, Agenda, DragAndDrop, Resize]} />>
            </ScheduleComponent>
        )
    }
}

export default Calendar