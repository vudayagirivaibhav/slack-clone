import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlackroomComponent } from './slackroom.component';

describe('SlackroomComponent', () => {
  let component: SlackroomComponent;
  let fixture: ComponentFixture<SlackroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlackroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlackroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
