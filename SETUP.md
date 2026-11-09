# GitHub Pages로 게시하기

## 파일 구성

- `index.html`: 짧은 소개와 프로젝트 카드
- `projects/*.html`: 프로젝트별 상세 페이지
- `resume.html`, `RESUME.md`: 웹·GitHub용 이력서
- `Resume_Lim_Seongmin.pdf`: 두 페이지 이력서
- `project-notes/*.md`: GitHub에서 직접 읽는 상세 설명
- `assets/`: 실제 작업 화면, 프로필 사진, CSS와 JavaScript

별도 서버나 API 키, npm 설치 없이 동작하는 정적 웹사이트입니다.

## 권장 저장소

GitHub 계정이 LimsWeb인 경우 `limsweb.github.io`라는 전용 저장소를 만들면 사용자 사이트로 사용할 수 있습니다. 다른 이름의 프로젝트 저장소에서도 상대 경로로 동작하도록 만들었습니다.

1. GitHub에서 새 저장소를 만들고 README를 추가합니다. GitHub Free에서 Pages를 사용하려면 공개 저장소를 선택합니다.
2. 이 패키지의 파일을 저장소 루트에 올립니다. ZIP 자체를 올리는 대신 압축을 푼 파일을 올립니다.
3. 저장소 Settings → Pages → Build and deployment에서 Deploy from a branch를 선택합니다.
4. `main`, `/(root)`를 선택해 저장합니다.
5. 게시가 완료되면 Pages 설정 화면의 Visit site에서 실제 주소를 확인합니다.

이 문서에 적힌 저장소는 권장 이름이며, 패키지 생성만으로 저장소나 사이트가 생성되는 것은 아닙니다.

## 내용 수정

메인 내용은 index.html, 각 프로젝트는 projects 폴더에서 수정할 수 있습니다. HTML과 Markdown은 별도 파일이므로 함께 갱신합니다. 비공개 프로젝트의 소스코드를 공개할 필요는 없습니다.

프로젝트 상태는 2026.11.09에 확인한 자료 기준입니다. 회사명·정확한 재직 기간은 새로 추정해 넣지 않았고, 경력은 확인된 수행 영역으로 요약했습니다. 학력에는 학위 취득이 확인되지 않은 연구를 ‘논문 연구·작성 중’으로 적었습니다.

GitHub Pages 공식 안내: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
