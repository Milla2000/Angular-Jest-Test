import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { ApiService } from '../api.service';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>; // provides a way to access the component instance itself 
  let apiService: ApiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule],
      providers: [
        {
          provide: ApiService,
          useValue: {
            LoginService: jest.fn(),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should pop message on login success', async () => {
    component.ngOnInit();

    fixture.detectChanges();

    const apiServiceLoginMock = apiService.LoginService as jest.Mock;
    const response = { message: 'successfull login' };

    apiServiceLoginMock.mockReturnValue(of(response));

    fixture.detectChanges();

    // component.form.setValue({
    //   email: 'test@yopmail.com',
    //   password: '12345678'
    // })
    component.login();

    fixture.detectChanges();

    expect(component.alertMsg).toEqual(response.message);

    jest.advanceTimersByTime(3000);

    await new Promise((resolve) => setTimeout(resolve, 3000));

    fixture.detectChanges();

    expect(component.alertMsg).toEqual('');
  });
});
