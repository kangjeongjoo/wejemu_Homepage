\# wejemu Homepage 프로젝트



웹케시㈜ 재무ERP 홈페이지 프로젝트

\- 순수 HTML + CSS로 작성

\- CSS는 css/ 폴더에 외부 파일로 분리

\- 이미지는 img/ 폴더에 저장

\- 로컬서버: localhost:3001



\## 프로젝트 개요

웹케시㈜의 재무ERP 제품군 홈페이지입니다.

중소·중견기업 및 대학 산학협력단을 대상으로 하는 ERP 솔루션을 소개합니다.



\## 제품 구성

| 제품명 | 대상 | 페이지 |

|--------|------|--------|

| SCloudERP | 중소기업 | erp-lite.html |

| 재무ERP | 중소·중견기업 | erp.html |

| 산학ERP (SANERP) | 대학 산학협력단 | sanerp.html |



\## 파일 구조

```

wejemu Homepage/

├── index.html          # 메인 홈페이지 (제품 전체 소개)

├── erp-lite.html       # SCloudERP 소개 페이지

├── erp.html            # 재무ERP 소개 페이지

├── sanerp.html         # 산학ERP 소개 페이지

├── free-trial.html     # 무료체험 신청 페이지

├── partnership.html    # 제휴 문의 페이지

├── support-popup.html  # 방문상담 신청 팝업

├── css/                # 각 페이지별 외부 CSS 파일

│   ├── index.css

│   ├── erp-lite.css

│   ├── erp.css

│   ├── sanerp.css

│   ├── free-trial.css

│   ├── partnership.css

│   └── support-popup.css

└── img/                # 이미지 파일 (추가 예정)

```



\## 코딩 규칙

\- 순수 HTML + CSS로 작성 (프레임워크 없음)

\- CSS는 각 HTML 파일과 대응하는 외부 파일로 분리 (`css/파일명.css`)

\- 이미지는 `img/` 폴더에 저장

\- 한국어 페이지 (lang="ko")

\- 인코딩: UTF-8



\## 디자인 가이드

\- 주색상: 파란 계열 (#1a4fa0, #2563eb 등)

\- 포인트: 오렌지 (#ff6b35)

\- 폰트: 시스템 기본 폰트 (별도 웹폰트 없음)

\- 반응형 지원 (모바일/태블릿/PC)



\## 페이지별 주요 참고 사이트

\- SCloudERP / 재무ERP: https://serp.co.kr

\- 산학ERP: https://erp.co.kr, https://rerp.co.kr

\- 무료체험: https://kyungrinara.com/home/home\_8200.html



\## 로컬 개발 환경

\- 로컬 서버: `localhost:3001` (npx serve 사용)

\- serve.bat 실행으로 서버 시작

\- Git 저장소: https://github.com/kangjeongjoo/wejemu_Homepage

\- 메인 브랜치: main



\## 작업 시 주의사항

\- CSS 수정 시 반드시 `css/` 폴더의 외부 파일 수정 (HTML 내 인라인 스타일 사용 금지)

\- 새 페이지 추가 시 동일한 이름의 CSS 파일도 `css/` 폴더에 함께 생성

\- 이미지 파일은 `img/` 폴더에 저장 후 상대경로로 참조

\- GNB(상단 네비게이션) 링크는 모든 페이지에서 동일하게 유지

