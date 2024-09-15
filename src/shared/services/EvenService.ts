import { Observable, Subject } from "rxjs";

class EventService{
    private subject = new Subject();

    emit(eventName: String, payload: any){
        this.subject.next({eventName, payload});
    }

    listen(eventName: String, callback: (event: any) => void){
        this.subject.asObservable().subscribe((nextObj: any) => {
            if(eventName === nextObj.eventName){
                callback(nextObj.payload);
            }
        });
    }
}

export default new EventService();