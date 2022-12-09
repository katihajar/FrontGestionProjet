import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProjectServiceComponent } from './list-project-service.component';

describe('ListProjectServiceComponent', () => {
  let component: ListProjectServiceComponent;
  let fixture: ComponentFixture<ListProjectServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProjectServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProjectServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
