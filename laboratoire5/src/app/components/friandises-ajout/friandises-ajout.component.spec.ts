import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriandisesAjoutComponent } from './friandises-ajout.component';

describe('FriandisesAjoutComponent', () => {
  let component: FriandisesAjoutComponent;
  let fixture: ComponentFixture<FriandisesAjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriandisesAjoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FriandisesAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
