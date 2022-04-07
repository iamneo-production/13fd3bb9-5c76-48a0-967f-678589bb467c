import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminNavigationsideComponent } from './superadmin-navigationside.component';

describe('SuperadminNavigationsideComponent', () => {
  let component: SuperadminNavigationsideComponent;
  let fixture: ComponentFixture<SuperadminNavigationsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperadminNavigationsideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperadminNavigationsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
