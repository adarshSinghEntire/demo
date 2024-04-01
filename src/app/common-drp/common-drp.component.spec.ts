import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonDrpComponent } from './common-drp.component';

describe('CommonDrpComponent', () => {
  let component: CommonDrpComponent;
  let fixture: ComponentFixture<CommonDrpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommonDrpComponent]
    });
    fixture = TestBed.createComponent(CommonDrpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
