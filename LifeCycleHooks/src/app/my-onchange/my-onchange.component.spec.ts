import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOnchangeComponent } from './my-onchange.component';

describe('MyOnchangeComponent', () => {
  let component: MyOnchangeComponent;
  let fixture: ComponentFixture<MyOnchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyOnchangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyOnchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
