복구 안내

1. 화면이 깨졌을 때 아래 명령으로 즉시 원복합니다.
   powershell -ExecutionPolicy Bypass -File .\restore-index.ps1

2. 현재 안정본 백업 파일은 아래 3개입니다.
   .\backups\index.stable.html
   .\backups\addon.stable.js
   .\backups\addon.stable.css

3. 다음 수정 전에는 현재 정상 파일을 stable 백업으로 먼저 복사한 뒤 작업합니다.
