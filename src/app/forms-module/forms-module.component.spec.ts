/*import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModuleComponent } from './forms-module.component';

describe('FormsModuleComponent', () => {
  let component: FormsModuleComponent;
  let fixture: ComponentFixture<FormsModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});*/
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModuleComponent } from './forms-module.component';

describe('FormsModuleComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        FormsModuleComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(FormsModuleComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'TemplateDrivenForm'`, () => {
    const fixture = TestBed.createComponent(FormsModuleComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('TemplateDrivenForm');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(FormsModuleComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('TemplateDrivenForm app is running!');
  });
});




