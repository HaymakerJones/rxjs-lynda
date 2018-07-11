import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorsNavComponent } from './operators-nav.component';

describe('OperatorsNavComponent', () => {
  let component: OperatorsNavComponent;
  let fixture: ComponentFixture<OperatorsNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatorsNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
