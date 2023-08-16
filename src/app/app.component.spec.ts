
import { ComponentFixture, TestBed } from '@angular/core/testing';


import { ApiService } from './api.service';
import { of } from 'rxjs';


describe('API service', () => {
  
  let service: ApiService;
  let httpClientSpy: any;

  beforeEach(async () => {
    httpClientSpy = {
      post: jest.fn(), // mock function to return an observable of empty array of users
      get: jest.fn(),
    };
    service = new ApiService(httpClientSpy); // create a new instance of the service
  });

  it('should be created', () => {
    expect(service).toBeTruthy(); // check that the service is created
  });

  it('should test login service', () => {
    const details = {
      // mock user details to be sent to the server
      email: 'millaj@gmail.com',
      password: '12345678',
    };

    const res = 'successfull login'; // mock response from the server after login
    // jest expects an observable to be returned from the post method of the httpClient
    jest.spyOn(httpClientSpy, 'post').mockReturnValue(of(res)); // mock the post method of the httpClient to return an observable of the response

    service.LoginService(details);
    expect(httpClientSpy.post).toBeCalledTimes(1); // check that the post method of the httpClient has been called1
  });
});
