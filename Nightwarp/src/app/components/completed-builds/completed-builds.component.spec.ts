import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedBuildsComponent } from './completed-builds.component';

describe('CompletedBuildsComponent', () => {
  let component: CompletedBuildsComponent;
  let fixture: ComponentFixture<CompletedBuildsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedBuildsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedBuildsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
