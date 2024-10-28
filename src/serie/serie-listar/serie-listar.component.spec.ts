import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SerieListarComponent } from './serie-listar.component';
import { SerieModule } from '../serie.module'; // Importa el módulo SerieModule aquí

describe('SerieListarComponent', () => {
  let component: SerieListarComponent;
  let fixture: ComponentFixture<SerieListarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [SerieModule], // Importa el módulo en lugar de declarar el componente
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
