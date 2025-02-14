import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsCourseComponent } from './aws-course.component';

describe('AwsCourseComponent', () => {
  let component: AwsCourseComponent;
  let fixture: ComponentFixture<AwsCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AwsCourseComponent]
    });
    fixture = TestBed.createComponent(AwsCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
