import { Injectable } from '@angular/core';
import { Subject, Observable, filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventBusService {
  private eventBus: Subject<EventBus> = new Subject<EventBus>();

  publish(event: EventBus): void {
    this.eventBus.next(event);
  }

  subscribe(eventName: string): Observable<any> {
    return this.eventBus.asObservable().pipe(
      filter((event: EventBus) => event.name === eventName)
    );
  }
}

export interface EventBus {
  name: string,
  data: any
}