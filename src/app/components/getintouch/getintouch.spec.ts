import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Getintouch } from './getintouch';

describe('Getintouch', () => {
  let component: Getintouch;
  let fixture: ComponentFixture<Getintouch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Getintouch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Getintouch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
