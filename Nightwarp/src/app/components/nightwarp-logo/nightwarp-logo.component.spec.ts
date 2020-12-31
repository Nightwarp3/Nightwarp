import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NightwarpLogoComponent } from './nightwarp-logo.component';

describe('NightwarpLogoComponent', () => {
  let component: NightwarpLogoComponent;
  let fixture: ComponentFixture<NightwarpLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NightwarpLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NightwarpLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
