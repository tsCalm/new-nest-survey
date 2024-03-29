# new-nest-survey

old-nest-survey의 개선 버전

## 개발환경

- os: mac M1 Pro
- node version: v18.13.0
- npm version: 8.19.3
- mysql version: mysql Ver 8.0.31 for macos12.6 on arm64 (Homebrew)
- nest-cli version: 9.1.8

## 인프라

<img width="550" alt="스크린샷 2023-02-07 오후 5 51 26" src="https://user-images.githubusercontent.com/106916440/217197790-8e129e87-d388-48c8-b49a-6bf5adfe4dc4.png">

## [헥사고날 아키텍처](https://hssm93.tistory.com/entry/Hexagonal-Architecture-%ED%97%A5%EC%82%AC%EA%B3%A0%EB%82%A0-%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0)

<img width="422" alt="스크린샷 2023-02-16 오후 7 50 05" src="https://user-images.githubusercontent.com/106916440/219344806-3bc29558-15f2-456e-a0e1-14e9de03a8e9.png">
  
  
## ERD

<img width="875" alt="스크린샷 2023-02-12 오후 7 54 55" src="https://user-images.githubusercontent.com/106916440/218306824-7198eb98-9a6c-4eda-9180-829d96616520.png">

## 프로젝트 진행

- nestjs & git actions ci/cd

  1. github workflow 생성 [바로가기](https://hssm93.tistory.com/entry/NestJs-%EC%84%A4%EB%AC%B8%EC%A1%B0%EC%82%AC-%EB%AF%B8%EB%8B%88-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-1)

  2. aws ec2 인스턴스 생성 [바로가기](https://hssm93.tistory.com/entry/NestJs-%EC%84%A4%EB%AC%B8%EC%A1%B0%EC%82%AC-%EB%AF%B8%EB%8B%88-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-2-AWS-EC2-%EC%83%9D%EC%84%B1)
  3. aws ec2 인스턴스 접속 [바로가기](https://hssm93.tistory.com/entry/NestJs-%EC%84%A4%EB%AC%B8%EC%A1%B0%EC%82%AC-%EB%AF%B8%EB%8B%88-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-2-AWS-EC2-%EC%A0%91%EC%86%8D-%EB%B0%8F-%EB%B0%B0%ED%8F%AC)
  4. aws ec2 인스턴스 배포 [바로가기](https://hssm93.tistory.com/entry/NestJs-%EC%84%A4%EB%AC%B8%EC%A1%B0%EC%82%AC-%EB%AF%B8%EB%8B%88-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-3-AWS-EC2-%EB%B0%B0%ED%8F%AC)
  5. aws ec2 인스턴스 pm2를 사용하여 백그라운드로 실행하기 [바로가기](https://hssm93.tistory.com/entry/NestJs-%EC%84%A4%EB%AC%B8%EC%A1%B0%EC%82%AC-%EB%AF%B8%EB%8B%88-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-6-AWS-EC2-%EB%B0%B0%ED%8F%AC)
  6. aws ec2 인스턴스 도메인 연결 & nginx 리버스 프록시 설정 [바로가기](https://hssm93.tistory.com/entry/NestJs-%EC%84%A4%EB%AC%B8%EC%A1%B0%EC%82%AC-%EB%AF%B8%EB%8B%88-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-4-AWS-EC2-%EB%B0%B0%ED%8F%AC-%EB%8F%84%EB%A9%94%EC%9D%B8)

  7. git actions를 통한 빌드 파일 s3 자동 업로드 [바로가기](https://hssm93.tistory.com/entry/NestJs-%EC%84%A4%EB%AC%B8%EC%A1%B0%EC%82%AC-%EB%AF%B8%EB%8B%88-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-4-AWS-EC2-%EB%B0%B0%ED%8F%AC-%EC%9E%90%EB%8F%99%EB%B0%B0%ED%8F%AC)

  8. aws code-deploy & pm2 & nginx를 사용한 자동배포 [바로가기](https://hssm93.tistory.com/entry/NestJs-%EC%84%A4%EB%AC%B8%EC%A1%B0%EC%82%AC-%EB%AF%B8%EB%8B%88-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-4-AWS-EC2-%EB%B0%B0%ED%8F%AC-%EC%9E%90%EB%8F%99%EB%B0%B0%ED%8F%AC-2)

  9. AWS Certificate Manager, Route 53을 사용한 https 적용 [바로가기](https://hssm93.tistory.com/entry/10-NestJs-%EC%84%A4%EB%AC%B8%EC%A1%B0%EC%82%AC-%EB%AF%B8%EB%8B%88-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-AWS-EC2-%EB%B0%B0%ED%8F%AC-https)

- ERD & Entity [바로가기](https://hssm93.tistory.com/entry/11-NestJs-%EC%84%A4%EB%AC%B8%EC%A1%B0%EC%82%AC-%EB%AF%B8%EB%8B%88-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%97%94%ED%8B%B0%ED%8B%B0-%EB%A7%8C%EB%93%A4%EA%B8%B0)

- survey module 완성하기

  1. in bound port, out bound port, service 선언 [바로가기](https://hssm93.tistory.com/entry/11-NestJs-%EC%84%A4%EB%AC%B8%EC%A1%B0%EC%82%AC-%EB%AF%B8%EB%8B%88-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-TDD-%EC%B2%AB%EA%B2%BD%ED%97%98)

  2. 실패하는 테스트 케이스 만들기 [바로가기](https://hssm93.tistory.com/entry/12-NestJs-%EC%84%A4%EB%AC%B8%EC%A1%B0%EC%82%AC-%EB%AF%B8%EB%8B%88-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%8B%A4%ED%8C%A8%ED%95%98%EB%8A%94-%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%BC%80%EC%9D%B4%EC%8A%A4)

  3. 테스트 케이스 통과할 수 있도록 구현 [바로가기](https://hssm93.tistory.com/entry/13-NestJs-%EC%84%A4%EB%AC%B8%EC%A1%B0%EC%82%AC-%EB%AF%B8%EB%8B%88-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%85%8C%EC%8A%A4%ED%8A%B8-%ED%85%8C%EC%8A%A4%ED%8A%B8%EB%A5%BC-%ED%86%B5%EA%B3%BC%ED%95%A0-%EC%88%98-%EC%9E%88%EB%8F%84%EB%A1%9D-service-%EA%B5%AC%ED%98%84)

- controller QueryString [바로가기](https://hssm93.tistory.com/entry/NestJs-Controller-Query-Pipe-%EA%B8%B0%EB%A1%9D)

- survey seed data 3천개 만들기 (설문지당 질문 5개, 질문당 선택지 4개로 통일) [바로가기](https://hssm93.tistory.com/entry/nestjs-typeorm-seeder-faker-seeding)

- 엔티티에서 공통적으로 사용되는 column의 집합인 BaseEntity 추상 클래스로 선언 후 적용하기 [바로가기](https://hssm93.tistory.com/entry/NestJs-TypeOrm-%EC%97%94%ED%8B%B0%ED%8B%B0-%EA%B3%B5%ED%86%B5-%EC%BB%AC%EB%9F%BC-%EA%B4%80%EB%A6%AC)

- ErrorController, ExceptionFilter 제작 [바로가기](https://hssm93.tistory.com/entry/NestJs-TypeOrm-Response-Type%EC%97%90-%EB%8C%80%ED%95%9C-%EA%B3%A0%EB%AF%BC)

- 설문지 이름 Full Text Index 적용 후 테스트 [바로가기](https://hssm93.tistory.com/entry/index-select-%ED%85%8C%EC%8A%A4%ED%8A%B8)

- 스웨거 문서 만들기 [바로가기](https://hssm93.tistory.com/entry/NestJs-Swagger)
- 마이그레이션 적용 [바로가기](https://hssm93.tistory.com/entry/TypeOrm-Migration-%ED%95%99%EC%8A%B5)
