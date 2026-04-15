# 배포 안내

## 현재 배포 주소

- GitHub 저장소: https://github.com/hmc7768-spec/-
- GitHub Pages 주소: https://hmc7768-spec.github.io/-/

## 현재 배포 방식

이 프로젝트는 정적 HTML/CSS/JS 구조이며, GitHub Pages로 배포합니다.

- 메인 파일: `index.html`
- 스타일 파일: `style.css`, `addon.css`
- 스크립트 파일: `script.js`, `addon.js`

GitHub 저장소 `master` 브랜치에 푸시되면, 저장소에 설정된 GitHub Pages 워크플로를 통해 배포됩니다.

## 배포 순서

1. 코드 수정 후 변경 파일 확인
2. 필요한 파일만 Git에 추가
3. 커밋 생성
4. 원격 저장소 `origin`의 `master` 브랜치로 푸시
5. GitHub Actions / Pages 반영 확인
6. 배포 주소에서 실제 화면 확인

## 로컬 확인 주소

같은 PC에서 바로 확인할 때:

- `file:///C:/Users/24101801/OneDrive%20-%20오토플러스(%EC%A3%BC)/%EB%B0%94%ED%83%95%20%ED%99%94%EB%A9%B4/%EC%BD%94%EB%8D%B1%EC%8A%A4%20%EA%B0%9C%EB%B0%9C/index.html`
- `http://127.0.0.1:8080/index.html`

같은 와이파이의 모바일 기기에서 확인할 때:

- `http://192.168.10.14:8080/index.html`

## 배포 후 점검 항목

- 사원명부 기본 진입
- 인사기록카드 상세보기 진입
- 조직도 좌측 트리/우측 인원 카드
- 조직관리 1/2/3단계 흐름
- 코드관리 각 탭 진입
- 오른쪽 기획 주석 표시

## 주의사항

- `screenshots/`, `serve-demo.err.log`, `serve-demo.out.log` 같은 검증용 파일은 배포 커밋에 포함하지 않습니다.
- 배포 전에는 가능하면 로컬 화면 캡처로 먼저 확인한 뒤 푸시합니다.
- 커밋 메시지는 `날짜 시간 + 한글 작업 내용` 형식으로 관리합니다.
