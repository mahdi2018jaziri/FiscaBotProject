import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevueFiscaleEyComponent } from './revue-fiscale-ey.component';

describe('RevueFiscaleEyComponent', () => {
  let component: RevueFiscaleEyComponent;
  let fixture: ComponentFixture<RevueFiscaleEyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevueFiscaleEyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevueFiscaleEyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
