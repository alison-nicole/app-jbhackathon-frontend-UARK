import { TestBed, inject } from '@angular/core/testing';

import { AddPrizeService } from './add-prize.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

// MOCK DATA
const mockBackendResults: String[] = ['test0', 'test1', 'test2'];

const baseURL = '/api/ws_infrastructure_university_hackathon';

describe('SignUpService', () => {
  let service: AddPrizeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddPrizeService],
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(AddPrizeService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', inject([AddPrizeService], (addPrizeService: AddPrizeService) => {
    expect(addPrizeService).toBeTruthy();
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

  
});
