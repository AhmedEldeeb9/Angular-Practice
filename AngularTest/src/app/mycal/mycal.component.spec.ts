import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycalComponent } from './mycal.component';

describe('MycalComponent', () => {
  let component: MycalComponent;
  let fixture: ComponentFixture<MycalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MycalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MycalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
