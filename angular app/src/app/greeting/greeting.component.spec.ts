import { GreetingService } from './greeting.service';
import { ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingComponent } from './greeting.component';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs';

describe('GreetingComponent', () => {
  let component: GreetingComponent;
  let fixture: ComponentFixture<GreetingComponent>;
  let greetingService: GreetingService;

  class MockGreeting {
    
    public getGreetingMessage(value: string) : Observable<any> {
      return Observable.of("Hello " + value);
    }
  }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreetingComponent ],
      imports: [ReactiveFormsModule, HttpModule],
      providers: [{provide: GreetingService, useClass: MockGreeting}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreetingComponent);
    component = fixture.componentInstance;
    greetingService = TestBed.get(GreetingService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getMsg', () => {
    const model = {
      name: 'Rahul'
    }
    spyOn(component, 'getMsg').and.callThrough();
    component.getMsg(model, true);
    expect(component.getMsg).toHaveBeenCalled();
    expect(component.greetingMessage ).toEqual("Hello " + model.name);
   
  });
});
