import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IngresoProductosPage } from './ingreso-productos.page';

describe('IngresoProductosPage', () => {
  let component: IngresoProductosPage;
  let fixture: ComponentFixture<IngresoProductosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresoProductosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IngresoProductosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
