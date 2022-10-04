import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProfileService } from './profile.service';

describe('ProfileService', () => {
  let service: ProfileService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [ProfileService]
    });
    service = TestBed.get(ProfileService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should check if a team score exists', () => {
    // eslint-disable-next-line max-len
    const responseExpected = '{"Hackstreet Boys 2.0                                                                                 ":98,' +
      '"Trojan Horses                                                                                       ":108}';
    service.getSumForTeam().subscribe((teamsAndSums: string) => {
      const json = JSON.parse(teamsAndSums);
      expect(json['Hackstreet Boys 2.0                                                                                 ']).toBe(98);
      expect(json['Trojan Horses                                                                                       ']).toBe(108);
    });

    const req = httpMock.expectOne(`${service.apiRoot}/judging/teamTotals`);
    expect(req.request.method).toBe('GET');
    req.flush(responseExpected);
  });

  it('should add team score', () => {
    // eslint-disable-next-line max-len
    const form = {};
    const responseExpected = '{"Hackstreet Boys 2.0                                                                                 ":98,' +
      '"Trojan Horses                                                                                       ":108}';
    service.addScore(form).subscribe((teamsAndSums: string) => {
    });

    const req = httpMock.expectOne(`${service.apiRoot}/judging/submit`);
    expect(req.request.method).toBe('POST');
    req.flush(responseExpected);
  });

  it('should get all judge', () => {
    // eslint-disable-next-line max-len
    const responseExpected = '{"Hackstreet Boys 2.0                                                                                 ":98,' +
      '"Trojan Horses                                                                                       ":108}';
    service.getJudgeNames().subscribe((teamsAndSums: string) => {
    });

    const req = httpMock.expectOne(`${service.apiRoot}/judge/${service.getAll}`);
    expect(req.request.method).toBe('GET');
    req.flush(responseExpected);
  });

  it('should get breakdown', () => {
    // eslint-disable-next-line max-len
    const responseExpected = '{"Hackstreet Boys 2.0                                                                                 ":98,' +
      '"Trojan Horses                                                                                       ":108}';
    service.getBreakdown();

    const req = httpMock.expectOne(`${service.apiRoot}/judging/getBreakdown`);
    expect(req.request.method).toBe('GET');
    req.flush(responseExpected);
  });
});
