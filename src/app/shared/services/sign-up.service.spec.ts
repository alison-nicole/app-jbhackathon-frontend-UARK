import { TestBed, inject } from '@angular/core/testing';

import { SignUpService } from './sign-up.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

// MOCK DATA
const mockBackendResults: String[] = ['test0', 'test1', 'test2'];

const baseURL = '/api/ws_infrastructure_university_hackathon';

describe('SignUpService', () => {
  let service: SignUpService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SignUpService],
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(SignUpService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', inject([SignUpService], (signupService: SignUpService) => {
    expect(signupService).toBeTruthy();
  }));

  // it('should return string array on getAllEducationYears call', () => {
  //     service.getAllEducationYears().subscribe((data: String[]) => {
  //       expect(data[0]).toEqual('test0');
  //       expect(data[1]).toEqual('test1');
  //       expect(data[2]).toEqual('test2');
  //     });

  //     const request = httpMock.expectOne(baseURL + '/year/all');
  //     expect(request.request.method).toEqual('GET');

  //     request.flush(mockBackendResults);

  //     httpMock.verify();
  // });

  // it('should return string array on getAllSchools call', () => {
  //   service.getAllSchools().subscribe((data: String[]) => {
  //     expect(data[0]).toEqual('test0');
  //     expect(data[1]).toEqual('test1');
  //     expect(data[2]).toEqual('test2');
  //   });

  //   const request = httpMock.expectOne(baseURL + '/school/all');
  //   expect(request.request.method).toEqual('GET');

  //   request.flush(mockBackendResults);

  //   httpMock.verify();
  // });

  // it('should return string array on getAllMajors call', () => {
  //   service.getAllMajors().subscribe((data: string[]) => {
  //     expect(data[0]).toEqual('test0');
  //     expect(data[1]).toEqual('test1');
  //     expect(data[2]).toEqual('test2');
  //   });

  //   const request = httpMock.expectOne(baseURL + '/major/all');
  //   expect(request.request.method).toEqual('GET');

  //   request.flush(mockBackendResults);

  //   httpMock.verify();
  // });

  // it('should return string array on getAllSkills call', () => {
  //   service.getAllSkills().subscribe((data: string[]) => {
  //     expect(data[0]).toEqual('test0');
  //     expect(data[1]).toEqual('test1');
  //     expect(data[2]).toEqual('test2');
  //   });

  //   const request = httpMock.expectOne(baseURL + '/skill/all');
  //   expect(request.request.method).toEqual('GET');

  //   request.flush(mockBackendResults);

  //   httpMock.verify();
  // });

  it('should return string array on getAllTeams call', () => {
    service.getAllTeams().subscribe((data: string[]) => {
      expect(data[0]).toEqual('test0');
      expect(data[1]).toEqual('test1');
      expect(data[2]).toEqual('test2');
    });

    const request = httpMock.expectOne(baseURL + '/team/all');
    expect(request.request.method).toEqual('GET');

    request.flush(mockBackendResults);

    httpMock.verify();
  });

  it('should post on postNewParticipant call', () => {
    service.postNewParticipant(1).subscribe();

    const request = httpMock.expectOne(baseURL + '/signup');
    expect(request.request.method).toEqual('POST');

    httpMock.verify();
  });

  it('should return string array on getAllSkills call', () => {
    service.getNumberOfTeamMembers(123456).subscribe();

    const request = httpMock.expectOne(baseURL + '/team/memberAmount/123456');
    expect(request.request.method).toEqual('GET');

    request.flush(mockBackendResults);

    httpMock.verify();
  });

  it('should return string array on getAllSkills call', () => {
    service.getNumberOfGradStudentsOnTeam(123456).subscribe();

    const request = httpMock.expectOne(baseURL + '/team/gradAmount/123456');
    expect(request.request.method).toEqual('GET');

    request.flush(mockBackendResults);

    httpMock.verify();
  });

  it('should return string array on getAllSkills call', () => {
    service.getTeamByTeamID(1).subscribe();

    const request = httpMock.expectOne(baseURL + '/team/getTeam/1');
    expect(request.request.method).toEqual('GET');

    request.flush(mockBackendResults);

    httpMock.verify();
  });
});
