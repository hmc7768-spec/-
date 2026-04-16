(function () {
  const employeeSeed = [
    { id: "EMP-0024", name: "김지원", hq: "경영관리본부", office: "경영지원실", team: "인사팀", part: "", grade: "대리", hireGrade: "사원", title: "팀장", jobFamily: "관리", employeeType: "정규직", contractPeriod: "", birthDate: "1992.05.14", hireDate: "2021.03.02", phone: "010-4521-7788", education: "한양대학교 컴퓨터공학과", status: "재직", careerMonths: "24", assignmentDate: "2024.01.01", memo: "인사기획 및 제도 운영 담당", history: [["2024.01.01", "인사팀 대리 승진"], ["2022.07.01", "경영기획팀 → 인사팀 이동"], ["2021.03.02", "입사 (인사팀 사원)"]], educationHistory: [["2023.08", "인사관리 실무교육 이수"], ["2022.03", "직무교육 이수 (40h)"]] },
    { id: "EMP-0031", name: "이승훈", hq: "영업본부", office: "영업본부 직속", team: "김포지점", part: "김포지점 판매파트", grade: "과장", hireGrade: "대리", title: "지점장", jobFamily: "영업(판매)", employeeType: "정규직", contractPeriod: "", birthDate: "1988.09.10", hireDate: "2018.07.15", retireDate: "2025.02.28", phone: "010-2213-8932", education: "국민대학교 경영학과", status: "퇴직", careerMonths: "48", assignmentDate: "2023.03.01", memo: "김포지점 판매 운영 총괄", history: [["2025.02.28", "퇴직 처리"], ["2023.03.01", "김포지점 판매파트 배치"], ["2021.01.01", "광주지점 → 김포지점 이동"], ["2018.07.15", "입사 (영업본부)"]], educationHistory: [["2024.01", "영업관리 리더십 과정"], ["2022.09", "성과평가 과정 이수"]] },
    { id: "EMP-0045", name: "박민서", hq: "경영관리본부", office: "디지털사업실", team: "서비스기획팀", part: "UX파트", grade: "사원", hireGrade: "사원", title: "파트장", jobFamily: "관리(성과)", employeeType: "계약직", contractPeriod: "2026.01.01 ~ 2026.12.31", birthDate: "1997.11.21", hireDate: "2023.01.09", phone: "010-7211-4452", education: "서울여자대학교 시각디자인과", status: "휴직", leaveType: "육아휴직", leaveStartDate: "2026.02.01", leaveEndDate: "2026.07.31", careerMonths: "8", assignmentDate: "2026.02.01", memo: "서비스 UX 개선 프로젝트 참여", history: [["2026.02.01", "육아휴직 전환"], ["2024.06.01", "UX파트 배치"], ["2023.01.09", "입사 (서비스기획팀)"]], educationHistory: [["2024.02", "UX 리서치 교육"], ["2023.10", "서비스기획 워크숍"]], awardItems: [["인사처리", "육아휴직", "2026.02.01", "육아휴직 승인"]] },
    { id: "EMP-0012", name: "최현우", hq: "서비스본부", office: "오토케어사업실", team: "신차물류팀", part: "용인물류", grade: "차장", hireGrade: "과장", title: "팀장", jobFamily: "물류", employeeType: "정규직", contractPeriod: "", birthDate: "1985.01.03", hireDate: "2015.04.20", phone: "010-8121-1189", education: "인하대학교 물류학과", status: "재직", careerMonths: "60", assignmentDate: "2022.02.01", memo: "수도권 물류센터 운영 담당", history: [["2022.02.01", "용인물류 배치"], ["2019.01.01", "탁송팀 → 신차물류팀 이동"], ["2015.04.20", "입사 (오토케어사업실)"]], educationHistory: [["2023.11", "물류관리사"], ["2021.06", "현장안전교육 이수"]] },
    { id: "EMP-0067", name: "정다은", hq: "BPO사업본부", office: "금융사업실", team: "반납운영팀", part: "", grade: "사원", hireGrade: "사원", title: "팀장", jobFamily: "관리", employeeType: "정규직", contractPeriod: "", birthDate: "1999.07.09", hireDate: "2024.02.26", phone: "010-9831-6721", education: "경희대학교 경제학과", status: "재직", careerMonths: "3", assignmentDate: "2024.02.26", memo: "반납 프로세스 운영 지원", history: [["2024.02.26", "입사 (반납운영팀)"]], educationHistory: [["2024.03", "금융상품 운영교육"]] }
  ];
  const gradeCodes = ["사장", "부사장", "전무이사", "상무이사", "이사", "부장", "차장", "과장", "대리", "사원"];
  const titleCodes = ["대표이사", "본부장", "실장", "센터장", "팀장", "파트장", "지점장", "팀원"];
  const familyCodes = ["임원", "관리", "관리(성과)", "물류", "정비", "별정", "영업(판매)", "영업(매입)", "순회"];
  const employeeTypes = ["정규직", "계약직", "임원"];
  const orgRows = [
    ["오토플러스", "", "", ""], ["대표이사 직속", "RTC", "", ""], ["대표이사 직속", "RTC", "공정지원팀", ""], ["대표이사 직속", "RTC", "RTC RQI팀", ""],
    ["대표이사 직속", "RTC", "RTC 품질개선팀", ""], ["대표이사 직속", "RTC", "RTC 품질개선팀", "RTC 도장파트"], ["대표이사 직속", "RTC", "RTC 품질개선팀", "RTC 정비판금파트"],
    ["BPO사업본부", "", "", ""], ["BPO사업본부", "금융사업실", "", ""], ["BPO사업본부", "금융사업실", "반납운영팀", ""], ["BPO사업본부", "금융사업실", "제휴사업팀", ""], ["BPO사업본부", "금융사업실", "선불운영팀", ""],
    ["BPO사업본부", "옥션사업실", "", ""], ["BPO사업본부", "옥션사업실", "리본카옥션팀", "리본카옥션팀 영업파트"], ["BPO사업본부", "옥션사업실", "리본카옥션팀", "리본카옥션팀 운영파트"],
    ["BPO사업본부", "상품매입실", "법인영업팀", ""], ["BPO사업본부", "상품매입실", "법인영업팀", "법인영업팀 1파트"], ["BPO사업본부", "상품매입실", "법인영업팀", "법인영업팀 2파트"],
    ["BPO사업본부", "상품매입실", "", ""], ["BPO사업본부", "상품매입실", "온라인매입팀", ""], ["BPO사업본부", "상품매입실", "온라인매입팀", "온라인매입팀 1파트"], ["BPO사업본부", "상품매입실", "온라인매입팀", "온라인매입팀 2파트"],
    ["경영관리본부", "", "", ""], ["경영관리본부", "경영지원실", "경영기획팀", ""], ["경영관리본부", "경영지원실", "노무팀", ""], ["경영관리본부", "경영지원실", "인사팀", ""], ["경영관리본부", "경영지원실", "인사팀(부)", ""],
    ["경영관리본부", "경영지원실", "재무팀", ""], ["경영관리본부", "경영지원실", "재무팀", "재무팀 자금파트"], ["경영관리본부", "디지털사업실", "", ""], ["경영관리본부", "디지털사업실", "인프라개발팀", ""], ["경영관리본부", "디지털사업실", "온라인개발팀", ""],
    ["경영관리본부", "디지털사업실", "서비스기획팀", ""], ["경영관리본부", "디지털사업실", "서비스기획팀", "UX파트"],
    ["사업관리본부", "", "", ""], ["사업관리본부", "사업관리본부 직속", "포트폴리오팀", ""], ["사업관리본부", "사업관리본부 직속", "포트폴리오팀", "포트폴리오팀 견적심사파트"], ["사업관리본부", "사업관리본부 직속", "포트폴리오팀", "포트폴리오팀 차량이동파트"],
    ["사업관리본부", "영업기획실", "", ""], ["사업관리본부", "영업기획실", "고객지원팀", ""], ["사업관리본부", "영업기획실", "고객지원팀", "EW파트"], ["사업관리본부", "영업기획실", "마케팅팀", ""], ["사업관리본부", "영업기획실", "영업관리팀", ""],
    ["사업관리본부", "렌터카사업실", "", ""], ["사업관리본부", "렌터카사업실", "렌터카영업팀", "렌터카영업팀"], ["사업관리본부", "렌터카사업실", "렌터카지원팀", "렌터카지원팀"],
    ["서비스본부", "", "", ""], ["서비스본부", "서비스본부 직속", "순회정비팀", ""], ["서비스본부", "서비스본부 직속", "순회정비팀", "순회(경남)"], ["서비스본부", "서비스본부 직속", "순회정비팀", "순회(부산)"], ["서비스본부", "서비스본부 직속", "순회정비팀", "순회(서울1)"], ["서비스본부", "서비스본부 직속", "순회정비팀", "순회(서울2)"], ["서비스본부", "서비스본부 직속", "순회정비팀", "순회(인천)"],
    ["서비스본부", "오토케어사업실", "", ""], ["서비스본부", "오토케어사업실", "LP팀", ""], ["서비스본부", "오토케어사업실", "탁송팀", ""], ["서비스본부", "오토케어사업실", "신차물류팀", ""], ["서비스본부", "오토케어사업실", "신차물류팀", "경산물류"], ["서비스본부", "오토케어사업실", "신차물류팀", "광주물류"], ["서비스본부", "오토케어사업실", "신차물류팀", "김해물류"], ["서비스본부", "오토케어사업실", "신차물류팀", "용인물류"], ["서비스본부", "오토케어사업실", "신차물류팀", "인천물류"], ["서비스본부", "오토케어사업실", "신차물류팀", "청주물류"],
    ["영업본부", "", "", ""], ["영업본부", "영업본부 직속", "매입운영팀", ""], ["영업본부", "영업본부 직속", "매입전담팀", ""], ["영업본부", "영업본부 직속", "영업운영팀", ""], ["영업본부", "영업본부 직속", "서울지점", ""],
    ["영업본부", "영업본부 직속", "일산지점", ""], ["영업본부", "영업본부 직속", "일산지점", "일산지점 매입파트"], ["영업본부", "영업본부 직속", "일산지점", "일산지점 판매파트"],
    ["영업본부", "영업본부 직속", "광주지점", ""], ["영업본부", "영업본부 직속", "광주지점", "광주지점 매입파트"], ["영업본부", "영업본부 직속", "광주지점", "광주지점 판매파트"],
    ["영업본부", "영업본부 직속", "김포지점", ""], ["영업본부", "영업본부 직속", "김포지점", "김포지점 매입파트"], ["영업본부", "영업본부 직속", "김포지점", "김포지점 판매파트"],
    ["영업본부", "영업본부 직속", "동대구지점", ""], ["영업본부", "영업본부 직속", "동대구지점", "동대구지점 매입파트"], ["영업본부", "영업본부 직속", "동대구지점", "동대구지점 판매파트"],
    ["영업본부", "영업본부 직속", "부산지점", ""], ["영업본부", "영업본부 직속", "부산지점", "부산지점 라이브방송파트"], ["영업본부", "영업본부 직속", "부산지점", "부산지점 매입파트"], ["영업본부", "영업본부 직속", "부산지점", "부산지점 지원파트"], ["영업본부", "영업본부 직속", "부산지점", "부산지점 판매파트"],
    ["영업본부", "영업본부 직속", "천안지점", ""], ["영업본부", "영업본부 직속", "천안지점", "천안지점 매입파트"], ["영업본부", "영업본부 직속", "천안지점", "천안지점 판매파트"],
    ["영업본부", "영업본부 직속", "청라지점", ""], ["영업본부", "영업본부 직속", "청라지점", "청라지점 라이브방송파트"], ["영업본부", "영업본부 직속", "청라지점", "청라지점 지원파트"], ["영업본부", "영업본부 직속", "청라지점", "청라지점 판매파트"],
    ["영업본부", "영업본부 직속", "제주지점", ""], ["영업본부", "영업본부 직속", "중앙특판지점", ""]
  ].map(([hq, office, team, part]) => ({ hq, office, team, part }));
  function inferJobFamily(row) {
    const text = [row.hq, row.office, row.team, row.part].join(" ");
    if (text.includes("물류") || text.includes("탁송")) return "물류";
    if (text.includes("정비") || text.includes("RTC")) return "정비";
    if (text.includes("매입")) return "영업(매입)";
    if (text.includes("판매") || text.includes("지점") || text.includes("영업")) return "영업(판매)";
    if (text.includes("순회")) return "순회";
    if (text.includes("UX") || text.includes("서비스기획")) return "관리(성과)";
    return "관리";
  }
  function inferTitle(row) {
    if (row.hq === "오토플러스") return "대표이사";
    if (!row.office && !row.team && !row.part) return "본부장";
    if (row.team && row.team.includes("지점")) return "지점장";
    if (row.part) return "파트장";
    if (row.team) return "팀장";
    if (row.office) return row.office.includes("센터") ? "센터장" : "실장";
    return "본부장";
  }
  function inferGrade(row, index) {
    if (row.hq === "오토플러스") return "사장";
    if (!row.office && !row.team && !row.part) return index % 2 === 0 ? "부사장" : "전무이사";
    if (row.office && !row.team && !row.part) return "부장";
    if (row.team && !row.part) return index % 3 === 0 ? "차장" : "과장";
    return index % 2 === 0 ? "대리" : "사원";
  }
  function inferHireGrade(grade) {
    const index = gradeCodes.indexOf(grade);
    return index >= 0 && index < gradeCodes.length - 1 ? gradeCodes[index + 1] : grade;
  }
  function inferEmployeeType(index, row) {
    if (row.hq === "오토플러스" || (!row.office && !row.team && !row.part)) return "임원";
    if (index % 13 === 0) return "계약직";
    return "정규직";
  }
  function createEmployeeSeed() {
    const surnames = ["김", "이", "박", "최", "정", "강", "조", "윤", "장", "임", "한", "오", "서", "신", "권", "황"];
    const given = ["민준", "서준", "도윤", "하준", "시우", "지호", "지훈", "현우", "우진", "건우", "서연", "지우", "하윤", "민서", "지민", "채원", "수아", "다은", "가은", "예린", "태희", "승현", "도현", "은호", "주원", "유진", "수빈", "재윤", "유나", "소연"];
    const majors = ["경영학과", "경제학과", "컴퓨터공학과", "산업공학과", "물류학과", "행정학과", "기계공학과", "디자인학과"];
    const schools = ["한양대학교", "경희대학교", "국민대학교", "인하대학교", "중앙대학교", "단국대학교", "건국대학교", "서울과학기술대학교"];
    return orgRows.map((row, index) => {
      const grade = inferGrade(row, index);
      const employeeType = inferEmployeeType(index, row);
      const isRetired = index % 19 === 0 && employeeType !== "임원";
      const isOnLeave = !isRetired && index % 17 === 0 && employeeType !== "임원";
      const status = isRetired ? "퇴직" : isOnLeave ? "휴직" : "재직";
      const hireYear = 2014 + (index % 13);
      const hireMonth = String((index % 12) + 1).padStart(2, "0");
      const hireDay = String((index % 27) + 1).padStart(2, "0");
      const birthYear = 1982 + (index % 18);
      const birthMonth = String(((index + 4) % 12) + 1).padStart(2, "0");
      const birthDay = String(((index + 9) % 27) + 1).padStart(2, "0");
      const deepest = row.part || row.team || row.office || row.hq;
      const assignmentDate = `${Math.max(hireYear + 1, 2020)}.${hireMonth}.${hireDay}`;
      const leaveType = isOnLeave ? ["육아휴직", "질병휴직", "가사휴직", "학업휴직"][index % 4] : "";
      const leaveStartDate = isOnLeave ? `${Math.max(hireYear + 2, 2025)}.${hireMonth}.${hireDay}` : "";
      const leaveEndMonth = String((((Number(hireMonth) + 5) - 1) % 12) + 1).padStart(2, "0");
      const leaveEndYear = isOnLeave ? Math.max(hireYear + 2, 2025) + (Number(hireMonth) + 5 > 12 ? 1 : 0) : "";
      const leaveEndDate = isOnLeave ? `${leaveEndYear}.${leaveEndMonth}.28` : "";
      const retireDate = isRetired ? `${Math.max(hireYear + 6, 2024)}.${hireMonth}.${hireDay}` : "";
      return {
        id: `EMP-${String(index + 1).padStart(4, "0")}`,
        name: `${surnames[index % surnames.length]}${given[index % given.length]}`,
        hq: row.hq,
        office: row.office,
        team: row.team,
        part: row.part,
        hireHq: row.hq,
        hireOffice: row.office,
        hireTeam: row.team,
        hirePart: row.part,
        grade,
        hireGrade: inferHireGrade(grade),
        title: inferTitle(row),
        jobFamily: inferJobFamily(row),
        employeeType,
        contractPeriod: employeeType === "계약직" ? "2026.01.01 ~ 2026.12.31" : "",
        birthDate: `${birthYear}.${birthMonth}.${birthDay}`,
        hireDate: `${hireYear}.${hireMonth}.${hireDay}`,
        phone: `010-${String(2000 + index * 7).slice(-4)}-${String(3000 + index * 11).slice(-4)}`,
        education: `${schools[index % schools.length]} ${majors[index % majors.length]}`,
        status,
        retireDate,
        leaveType,
        leaveStartDate,
        leaveEndDate,
        careerMonths: String(6 + (index % 72)),
        assignmentDate: isOnLeave ? leaveStartDate : assignmentDate,
        groupwareId: `${surnames[index % surnames.length].toLowerCase?.() || "user"}${index + 1}`,
        residentNumber: `${String(birthYear).slice(2)}${birthMonth}${birthDay}-${index % 2 === 0 ? "1" : "2"}${String(100000 + index).padStart(6, "0")}`,
        maritalStatus: index % 3 === 0 ? "기혼" : "미혼",
        hireEmployeeType: employeeType,
        hireJobFamily: inferJobFamily(row),
        companyEmail: `${normalizedNameToken(`${surnames[index % surnames.length]}${given[index % given.length]}`)}.emp-${String(index + 1).padStart(4, "0").toLowerCase()}@autoplus.co.kr`,
        personalEmail: `${normalizedNameToken(`${surnames[index % surnames.length]}${given[index % given.length]}`)}@gmail.com`,
        companyPhone: `02-6200-${String(index + 1).padStart(4, "0")}`,
        address: `서울특별시 ${row.hq || "오토플러스"} ${deepest} ${String(index + 1).padStart(2, "0")}호`,
        memo: `${deepest} 조직 기준 더미 사원 데이터`,
        history: [
          ...(isRetired ? [[retireDate, "퇴직 처리"]] : []),
          ...(isOnLeave ? [[leaveStartDate, `${leaveType} 전환`]] : []),
          [assignmentDate, `${deepest} 배치`],
          [`${hireYear}.${hireMonth}.${hireDay}`, `입사 (${deepest})`]
        ],
        educationHistory: [[`${Math.max(hireYear + 1, 2020)}.${hireMonth}`, "직무 기본교육 이수"], [`${Math.max(hireYear + 2, 2021)}.${hireMonth}`, "공통 역량교육 이수"]],
        educationItems: [[`${hireYear - 4}.03 ~ ${hireYear}.02`, `${schools[index % schools.length]} ${majors[index % majors.length]}`], [`${hireYear - 7}.03 ~ ${hireYear - 4}.02`, "고등학교 졸업"]],
        careerHistory: [[`${hireYear - 2}.01 ~ ${hireYear - 1}.12`, `${inferJobFamily(row)} 유관 경력`], [`${hireYear - 3}.03 ~ ${hireYear - 2}.12`, "프로젝트 참여 및 실무 수행"]],
        awardItems: isOnLeave ? [["인사처리", leaveType, leaveStartDate, `${leaveType} 승인`]] : []
      };
    });
  }
  const fullEmployeeSeed = createEmployeeSeed();
  const levelDefs = [
    { id: "L1", name: "본부", parent: "-", desc: "최상위 조직 단위" },
    { id: "L2", name: "실", parent: "L1", desc: "본부 하위 실 단위" },
    { id: "L3", name: "팀", parent: "L2", desc: "실 하위 팀 단위" },
    { id: "L4", name: "파트", parent: "L3", desc: "팀 하위 파트 단위" }
  ];
  function buildSeqCode(prefix, seq) {
    return `${prefix}-${String(seq).padStart(3, "0")}`;
  }
  function buildOrgCode(level, seq) {
    return `ORG-${level}-${String(seq).padStart(3, "0")}`;
  }
  function createMetaRegistry(prefix, values, descriptions = {}) {
    return values.map((name, index) => ({
      code: buildSeqCode(prefix, index + 1),
      name,
      active: true,
      description: descriptions[name] || "",
      updatedAt: "2026.04.15 15:30"
    }));
  }
  const initialMetaRegistry = {
    grade: createMetaRegistry("GRD", gradeCodes),
    title: createMetaRegistry("POS", titleCodes),
    family: createMetaRegistry("JOB", familyCodes),
    type: createMetaRegistry("EMP", employeeTypes)
  };
  const adminPermissionGroups = [
    {
      id: "menus",
      label: "메뉴 접근 권한",
      items: [
        { id: "menu_directory", label: "사원명부", desc: "사원명부 조회, 검색, 통계 팝업 기능에 접근합니다." },
        { id: "menu_record", label: "인사기록카드", desc: "인사정보카드와 이력 조회/수정 기능에 접근합니다." },
        { id: "menu_org", label: "조직도", desc: "조직도 및 구성원 배치 현황 화면에 접근합니다." },
        { id: "menu_assignment", label: "조직관리", desc: "조직개편과 인사발령 단계를 수행합니다." },
        { id: "menu_codes", label: "코드관리", desc: "조직/직급/직책/직군/직원유형 기준정보를 관리합니다." },
        { id: "menu_admin", label: "관리자", desc: "관리자 권한 설정 화면에 접근합니다." }
      ]
    },
    {
      id: "scope",
      label: "조회 범위 권한",
      items: [
        { id: "directory_view_self", label: "사원정보 본인 열람", desc: "사원명부와 인사기록카드를 본인 범위로 함께 조회합니다." },
        { id: "directory_view_all", label: "사원정보 전체 열람", desc: "사원명부와 인사기록카드를 전체 범위로 함께 조회합니다." },
        { id: "directory_view_partial", label: "사원정보 일부 열람", desc: "지정한 조직 또는 구성원만 사원명부와 인사기록카드에서 함께 열람할 수 있습니다." },
        { id: "org_view", label: "조직도 열람", desc: "조직도와 구성원 배치 현황을 조회합니다." },
        { id: "assignment_view", label: "조직관리 열람", desc: "조직개편/인사발령 이력과 진행 상태를 열람합니다." },
        { id: "code_view", label: "코드관리 열람", desc: "조직/직급/직책/직군/직원유형 기준코드를 열람합니다." },
        { id: "admin_view", label: "관리자 권한 열람", desc: "관리자 권한 현황과 변경 이력을 열람합니다." }
      ]
    },
    {
      id: "actions",
      label: "업무 기능 권한",
      items: [
        { id: "employee_create", label: "사원 등록", desc: "신규 사원 등록과 사진 업로드를 수행합니다." },
        { id: "employee_edit", label: "기본정보/기록카드 수정", desc: "사원 기본정보와 기록카드를 수정합니다." },
        { id: "assignment_execute", label: "조직개편/인사발령 처리", desc: "조직개편과 인사발령 생성/완료를 수행합니다." },
        { id: "code_edit", label: "기준코드 변경", desc: "코드관리에서 기준정보를 추가/수정/적용합니다." },
        { id: "admin_edit", label: "관리자 권한 수정", desc: "관리자 계정과 권한을 추가/삭제/수정합니다." }
      ]
    },
    {
      id: "control",
      label: "통제 및 이력 권한",
      items: [
        { id: "history_view", label: "이력 조회", desc: "조직개편/인사발령 이력과 변경 로그를 조회합니다." },
        { id: "history_cancel", label: "이력 취소", desc: "잘못 반영된 이력을 취소합니다." },
        { id: "export_allow", label: "다운로드/내보내기", desc: "목록과 이력을 외부 문서로 내보냅니다." }
      ]
    }
  ];
  function createPermissionMap(enabled = []) {
    const map = {};
    adminPermissionGroups.forEach((group) => group.items.forEach((item) => { map[item.id] = enabled.includes(item.id); }));
    return map;
  }
  function getDefaultAdminPermissionIds(categoryId, role) {
    const viewer = {
      all_admin: [],
      directory_admin: ["menu_directory", "menu_record", "directory_view_self"],
      record_admin: ["menu_directory", "menu_record", "directory_view_self"],
      org_admin: ["menu_org", "org_view"],
      assignment_admin: ["menu_assignment", "assignment_view", "history_view"],
      code_admin: ["menu_codes", "code_view"],
      auth_admin: ["menu_admin", "admin_view"]
    };
    const manager = {
      all_admin: adminPermissionGroups.flatMap((group) => group.items.map((item) => item.id)),
      directory_admin: ["menu_directory", "menu_record", "directory_view_all", "employee_create", "employee_edit", "history_view", "export_allow"],
      record_admin: ["menu_directory", "menu_record", "directory_view_all", "employee_edit", "history_view", "export_allow"],
      org_admin: ["menu_org", "org_view", "history_view"],
      assignment_admin: ["menu_assignment", "assignment_view", "assignment_execute", "history_view", "history_cancel"],
      code_admin: ["menu_codes", "code_view", "code_edit", "history_view"],
      auth_admin: ["menu_admin", "admin_view", "admin_edit", "history_view"]
    };
    return [...new Set((role === "viewer" ? viewer[categoryId] : manager[categoryId]) || [])];
  }
  function getAdminCategoryPermissionIds(categoryId, role = "manager") {
    const defaults = getDefaultAdminPermissionIds(categoryId, role);
    if (categoryId === "all_admin") return defaults;
    const ids = new Set(defaults);
    if (role === "viewer") ids.delete("export_allow");
    return Array.from(ids);
  }
  function getEmployeeLoginId(employee) {
    return employee?.groupwareId || employee?.id || "";
  }
  function buildAdminMemberFromEmployee(employee, memberId, permissionIds, registeredAt, role = "manager", options = {}) {
    if (!employee) return null;
    return {
      id: memberId,
      role,
      employeeId: employee.id,
      name: employee.name,
      loginId: getEmployeeLoginId(employee),
      org: [employee.hq, employee.office, employee.team, employee.part].filter(Boolean).join(" > "),
      registeredAt,
      expiresAt: completeDateInput(options.expiresAt || ""),
      changeReason: String(options.changeReason || "").trim(),
      permissions: createPermissionMap(permissionIds),
      viewScope: permissionIds.includes("directory_view_all") ? "all" : permissionIds.includes("directory_view_partial") ? "partial" : "self",
      viewTargets: []
    };
  }
  function buildInitialAdminCategories(seedEmployees) {
    const byName = (name) => seedEmployees.find((employee) => employee.name === name) || seedEmployees[0];
    const allPerms = adminPermissionGroups.flatMap((group) => group.items.map((item) => item.id));
    return [
      {
        id: "all_admin",
        section: "전체 관리자",
        label: "통합 관리자",
        desc: "통합인사시스템 전 메뉴와 운영 기능을 총괄하는 관리자입니다.",
        managers: [
          buildAdminMemberFromEmployee(byName("김지원"), "ADM-001", allPerms, "2026.04.10", "manager"),
          buildAdminMemberFromEmployee(byName("최현우"), "ADM-002", getDefaultAdminPermissionIds("all_admin", "manager"), "2026.04.11", "manager")
        ].filter(Boolean),
        viewers: []
      },
      {
        id: "directory_admin",
        section: "메뉴별 관리자",
        label: "사원정보 관리자",
        desc: "사원명부와 인사기록카드의 공통 열람 범위, 조회, 신규 등록과 수정 흐름을 함께 관리합니다.",
        managers: [
          buildAdminMemberFromEmployee(byName("정다은"), "ADM-003", getDefaultAdminPermissionIds("directory_admin", "manager"), "2026.04.12", "manager")
        ].filter(Boolean),
        viewers: [
          buildAdminMemberFromEmployee(byName("김민준"), "ADV-002", getDefaultAdminPermissionIds("directory_admin", "viewer"), "2026.04.12", "viewer")
        ].filter(Boolean)
      },
      {
        id: "org_admin",
        section: "메뉴별 관리자",
        label: "조직도 관리자",
        desc: "조직도 탐색과 구성원 배치 현황 조회를 관리합니다.",
        managers: [],
        viewers: []
      }
    ];
  }
  const initialAdminCategories = buildInitialAdminCategories(fullEmployeeSeed);
  const initialOperatorLoginId = initialAdminCategories[0]?.managers?.[0]?.loginId || getEmployeeLoginId(fullEmployeeSeed[0]);
  function normalizeEmployeeInfoPermissions(member = {}) {
    const permissions = { ...(member.permissions || {}) };
    if (permissions.record_view_all) permissions.directory_view_all = true;
    if (permissions.record_view_self) permissions.directory_view_self = true;
    if (permissions.menu_record || permissions.menu_directory) {
      permissions.menu_record = true;
      permissions.menu_directory = true;
    }
    return {
      ...member,
      permissions,
      viewScope: member.viewScope || (permissions.directory_view_all ? "all" : permissions.directory_view_partial ? "partial" : "self")
    };
  }
  function mergeAdminMembersByLogin(members = []) {
    const merged = [];
    (members || []).forEach((member) => {
      const normalized = normalizeEmployeeInfoPermissions(member);
      const existing = merged.find((item) => item.loginId === normalized.loginId);
      if (!existing) {
        merged.push({
          ...normalized,
          viewTargets: JSON.parse(JSON.stringify(normalized.viewTargets || []))
        });
        return;
      }
      existing.permissions = { ...(existing.permissions || {}), ...(normalized.permissions || {}) };
      existing.viewTargets = normalizeAdminViewTargets([...(existing.viewTargets || []), ...(normalized.viewTargets || [])]);
      if ((existing.viewScope || "self") !== "all" && normalized.viewScope === "all") existing.viewScope = "all";
      else if ((existing.viewScope || "self") === "self" && normalized.viewScope === "partial") existing.viewScope = "partial";
      existing.changeReason = existing.changeReason || normalized.changeReason || "";
      existing.expiresAt = existing.expiresAt || normalized.expiresAt || "";
    });
    return merged;
  }
  function normalizeAdminCategories(categories = []) {
    const cloned = (categories || []).map((category) => ({
      ...category,
      managers: (category.managers || []).map((member) => ({ ...member, permissions: { ...(member.permissions || {}) }, viewTargets: JSON.parse(JSON.stringify(member.viewTargets || [])) })),
      viewers: (category.viewers || []).map((member) => ({ ...member, permissions: { ...(member.permissions || {}) }, viewTargets: JSON.parse(JSON.stringify(member.viewTargets || [])) }))
    }));
    const directoryCategory = cloned.find((category) => category.id === "directory_admin");
    const recordCategory = cloned.find((category) => category.id === "record_admin");
    if (directoryCategory) {
      directoryCategory.label = "사원정보 관리자";
      directoryCategory.desc = "사원명부와 인사기록카드의 공통 열람 범위, 조회, 신규 등록과 수정 흐름을 함께 관리합니다.";
      directoryCategory.managers = mergeAdminMembersByLogin([...(directoryCategory.managers || []), ...(recordCategory?.managers || [])]);
      directoryCategory.viewers = mergeAdminMembersByLogin([...(directoryCategory.viewers || []), ...(recordCategory?.viewers || [])]);
    }
    return cloned
      .filter((category) => category.id !== "record_admin")
      .map((category) => {
        if (category.id !== "directory_admin") return category;
        return {
          ...category,
          managers: mergeAdminMembersByLogin(category.managers || []),
          viewers: mergeAdminMembersByLogin(category.viewers || [])
        };
      });
  }
  function cloneAdminCategories(categories) {
    return normalizeAdminCategories(categories).map((category) => ({
      ...category,
      managers: (category.managers || []).map((manager) => ({
        ...manager,
        expiresAt: completeDateInput(manager.expiresAt || ""),
        changeReason: String(manager.changeReason || "").trim(),
        permissions: { ...(manager.permissions || {}) },
        viewTargets: JSON.parse(JSON.stringify(manager.viewTargets || []))
      })),
      viewers: (category.viewers || []).map((viewer) => ({
        ...viewer,
        expiresAt: completeDateInput(viewer.expiresAt || ""),
        changeReason: String(viewer.changeReason || "").trim(),
        permissions: { ...(viewer.permissions || {}) },
        viewTargets: JSON.parse(JSON.stringify(viewer.viewTargets || []))
      }))
    }));
  }
  function createAdminDraft() {
    return {
      categories: cloneAdminCategories(state.adminCategories),
      pendingChanges: []
    };
  }
  function ensureAdminDraft() {
    if (!state.adminDraft) state.adminDraft = createAdminDraft();
    return state.adminDraft;
  }
  function discardAdminDraft() {
    state.adminDraft = null;
    state.currentAdminPendingKey = "";
  }
  function getAdminCategoriesSource() {
    return state.adminDraft?.categories || state.adminCategories;
  }
  function getAdminRoleBucket(role = state.currentAdminRoleTab) {
    return role === "viewer" ? "viewers" : "managers";
  }
  function findAdminCategoryIn(categories, categoryId) {
    return (categories || []).find((category) => category.id === categoryId) || (categories || [])[0];
  }
  function getAdminPendingChanges() {
    return state.adminDraft?.pendingChanges || [];
  }
  function getAdminPrincipals(categories = state.adminCategories) {
    const map = new Map();
    (categories || []).forEach((category) => {
      ["managers", "viewers"].forEach((bucket) => {
        (category[bucket] || []).forEach((member) => {
          const key = member.loginId || member.id;
          if (!key) return;
          if (!map.has(key)) {
            map.set(key, {
              loginId: key,
              name: member.name,
              org: member.org,
              roles: []
            });
          }
          map.get(key).roles.push({
            categoryId: category.id,
            categoryLabel: getAdminCategoryDisplayName(category),
            role: bucket === "viewers" ? "viewer" : "manager"
          });
        });
      });
    });
    return Array.from(map.values()).sort((a, b) => a.name.localeCompare(b.name, "ko"));
  }
  function getCurrentOperatorAssignments(categories = state.adminCategories) {
    const loginId = state.currentOperatorLoginId;
    if (!loginId) return [];
    const assignments = [];
    (categories || []).forEach((category) => {
      ["managers", "viewers"].forEach((bucket) => {
        (category[bucket] || []).forEach((member) => {
          if (member.loginId !== loginId) return;
          if (member.expiresAt && parseDateValue(member.expiresAt) && parseDateValue(member.expiresAt) < getCurrentBaseDateValue()) return;
          assignments.push({
            categoryId: category.id,
            role: bucket === "viewers" ? "viewer" : "manager",
            member
          });
        });
      });
    });
    return assignments;
  }
  function getCurrentOperatorPermissions(categories = state.adminCategories) {
    const permissions = {};
    getCurrentOperatorAssignments(categories).forEach((assignment) => {
      Object.entries(assignment.member.permissions || {}).forEach(([key, value]) => {
        if (value) permissions[key] = true;
      });
    });
    return permissions;
  }
  function hasCurrentPermission(permissionId, categories = state.adminCategories) {
    if (!permissionId) return true;
    return !!getCurrentOperatorPermissions(categories)[permissionId];
  }
  function canAccessView(view, categories = state.adminCategories) {
    const permissionMap = {
      directory: "menu_directory",
      record: "menu_record",
      quick: "menu_record",
      org: "menu_org",
      assignment: "menu_assignment",
      codes: "menu_codes",
      admin: "menu_admin"
    };
    if (view === "record") {
      return hasCurrentPermission("menu_record", categories) || hasCurrentPermission("menu_directory", categories);
    }
    return hasCurrentPermission(permissionMap[view], categories);
  }
  function getFallbackView() {
    const candidates = ["directory", "record", "org", "assignment", "codes", "admin"];
    return candidates.find((view) => canAccessView(view)) || "directory";
  }
  function syncAccessControlledMenus(categories = state.adminCategories) {
    const visibility = {
      directory: canAccessView("directory", categories),
      record: canAccessView("record", categories),
      org: canAccessView("org", categories),
      assignment: canAccessView("assignment", categories),
      codes: canAccessView("codes", categories),
      admin: canAccessView("admin", categories)
    };
    const topMap = { 0: "directory", 1: "record", 2: "org", 3: "assignment" };
    const sideMap = { 0: "directory", 1: "record", 2: "org", 3: "assignment" };
    Object.entries(topMap).forEach(([index, key]) => refs.topItems[Number(index)]?.classList.toggle("codex-hidden", !visibility[key]));
    Object.entries(sideMap).forEach(([index, key]) => refs.sideItems[Number(index)]?.classList.toggle("codex-hidden", !visibility[key]));
    refs.sideItems[1]?.classList.add("codex-hidden");
    panels.codeMenu?.classList.toggle("codex-hidden", !visibility.codes);
    panels.adminMenu?.classList.toggle("codex-hidden", !visibility.admin);
    $(".hr-top-user", refs.hrSystem)?.classList.toggle("codex-hidden", !visibility.admin);
  }
  function getCurrentOperatorEmployee(categories = state.adminCategories) {
    const loginId = state.currentOperatorLoginId;
    if (!loginId) return null;
    const direct = state.employees.find((employee) => getEmployeeLoginId(employee) === loginId);
    if (direct) return direct;
    const assignment = getCurrentOperatorAssignments(categories)[0];
    return assignment?.member?.employeeId ? state.employees.find((employee) => employee.id === assignment.member.employeeId) || null : null;
  }
  function getAdminViewTargetKey(target) {
    if (!target) return "";
    if (target.type === "org") return `org:${target.key || ""}`;
    if (target.type === "employee") return `employee:${target.employeeId || ""}`;
    return "";
  }
  function normalizeAdminViewTargets(targets = []) {
    const unique = new Map();
    (targets || []).forEach((target) => {
      if (!target) return;
      const normalized = target.type === "org"
        ? { type: "org", key: target.key || "ROOT", label: target.label || "오토플러스" }
        : { type: "employee", employeeId: target.employeeId || "", label: target.label || "" };
      const key = getAdminViewTargetKey(normalized);
      if (!key) return;
      if (!normalized.label && normalized.type === "employee") {
        const employee = state.employees.find((item) => item.id === normalized.employeeId);
        if (employee) normalized.label = `${employee.name} (${getCurrentOrgLabel(employee)})`;
      }
      unique.set(key, normalized);
    });
    return Array.from(unique.values()).sort((a, b) => a.label.localeCompare(b.label, "ko"));
  }
  function getVisibleEmployeesFromTargets(targets = []) {
    const ids = new Set();
    normalizeAdminViewTargets(targets).forEach((target) => {
      if (target.type === "org") {
        getEmployeesInOrgKey(target.key || "ROOT", true).forEach((employee) => ids.add(employee.id));
      } else if (target.type === "employee" && target.employeeId) {
        ids.add(target.employeeId);
      }
    });
    return state.employees.filter((employee) => ids.has(employee.id));
  }
  function getCurrentDirectoryAccessibleEmployees(categories = state.adminCategories) {
    if (!canAccessView("directory", categories)) return [];
    const operator = getCurrentOperatorEmployee(categories);
    const assignments = getCurrentOperatorAssignments(categories).filter((assignment) => assignment.member?.permissions?.menu_directory);
    if (!assignments.length) return operator ? [operator] : [];
    if (assignments.some((assignment) => assignment.member?.permissions?.directory_view_all || assignment.member?.viewScope === "all")) {
      return state.employees.slice();
    }
    const ids = new Set();
    assignments.forEach((assignment) => {
      const member = assignment.member || {};
      if (member.permissions?.directory_view_self || member.viewScope === "self") {
        if (operator?.id) ids.add(operator.id);
      }
      if (member.permissions?.directory_view_partial || member.viewScope === "partial") {
        getVisibleEmployeesFromTargets(member.viewTargets || []).forEach((employee) => ids.add(employee.id));
      }
    });
    return state.employees.filter((employee) => ids.has(employee.id));
  }
  function getCurrentRecordAccessibleEmployees(categories = state.adminCategories) {
    if (!canAccessView("record", categories)) return [];
    return getCurrentDirectoryAccessibleEmployees(categories);
  }
  function canCurrentAccessEmployeeRecord(employee, categories = state.adminCategories) {
    if (!employee) return false;
    return getCurrentRecordAccessibleEmployees(categories).some((item) => item.id === employee.id);
  }
  function getFirstAccessibleRecordEmployee(categories = state.adminCategories) {
    return getCurrentRecordAccessibleEmployees(categories)[0] || null;
  }
  function getScopedDirectoryEmployees() {
    return getCurrentDirectoryAccessibleEmployees().filter((employee) => getEffectiveStatus(employee) !== "퇴직" || state.directoryStatus === "퇴직");
  }
  function hasPendingAdminChanges() {
    return getAdminPendingChanges().length > 0;
  }
  function getCurrentTimestamp() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    return `${year}.${month}.${day} ${hours}:${minutes}`;
  }
  const deferredUiTimers = {};
  function scheduleInputRefresh(timerKey, callback, delay = 120) {
    window.clearTimeout(deferredUiTimers[timerKey]);
    deferredUiTimers[timerKey] = window.setTimeout(callback, delay);
  }
  function bindDeferredTextInput(getRoot, selector, timerKey, assignValue, renderCallback, delay = 120) {
    const root = getRoot();
    const input = $(selector, root);
    if (!input) return;
    const queueRefresh = () => {
      const nextValue = input.value || "";
      const start = input.selectionStart ?? nextValue.length;
      const end = input.selectionEnd ?? nextValue.length;
      assignValue(nextValue);
      scheduleInputRefresh(timerKey, () => {
        renderCallback();
        const nextRoot = getRoot();
        const nextInput = $(selector, nextRoot);
        if (nextInput) {
          nextInput.focus({ preventScroll: true });
          nextInput.setSelectionRange(start, end);
        }
      }, delay);
    };
    input.addEventListener("compositionstart", () => {
      input.dataset.composing = "true";
    });
    input.addEventListener("compositionend", () => {
      input.dataset.composing = "false";
      queueRefresh();
    });
    input.addEventListener("input", (event) => {
      if (event.isComposing || input.dataset.composing === "true") {
        assignValue(input.value || "");
        return;
      }
      queueRefresh();
    });
  }
  function upsertAdminPendingChange(change) {
    const draft = ensureAdminDraft();
    const key = change.key || `${change.kind}|${change.categoryId}|${change.role || ""}|${change.memberId || ""}|${change.memberIds?.join(",") || ""}`;
    const payload = { ...change, _key: key, changedAt: getCurrentTimestamp() };
    const index = draft.pendingChanges.findIndex((item) => item._key === key);
    if (index >= 0) draft.pendingChanges.splice(index, 1, payload);
    else draft.pendingChanges.unshift(payload);
    state.currentAdminPendingKey = key;
  }
  function rebuildAdminDraftFromPending() {
    const next = createAdminDraft();
    const pending = getAdminPendingChanges().map((item) => JSON.parse(JSON.stringify(item)));
    next.pendingChanges = pending;
    pending.slice().reverse().forEach((change) => {
      const category = findAdminCategoryIn(next.categories, change.categoryId);
      if (!category) return;
      const bucket = getAdminRoleBucket(change.role);
      if (change.kind === "add-members") {
        const existingLoginIds = new Set(next.categories.flatMap((item) => [...(item.managers || []), ...(item.viewers || [])]).map((member) => member.loginId));
        const additions = (change.members || []).filter((member) => !existingLoginIds.has(member.loginId));
        category[bucket] = [...(category[bucket] || []), ...additions];
      } else if (change.kind === "remove-members") {
        const selected = new Set(change.memberIds || []);
        category[bucket] = (category[bucket] || []).filter((member) => !selected.has(member.id));
      } else if (change.kind === "set-permissions") {
        category[bucket] = (category[bucket] || []).map((member) => member.id === change.memberId ? {
          ...member,
          permissions: { ...(change.permissions || {}) },
          expiresAt: completeDateInput(change.expiresAt || member.expiresAt || ""),
          changeReason: String(change.changeReason || member.changeReason || "").trim(),
          viewScope: change.viewScope || member.viewScope || "self",
          viewTargets: JSON.parse(JSON.stringify(change.viewTargets || member.viewTargets || []))
        } : member);
      }
    });
    state.adminDraft = next;
    const members = getCurrentAdminMembers();
    if (!members.some((member) => member.id === state.currentAdminManagerId)) state.currentAdminManagerId = members[0]?.id || "";
  }
  function removeAdminPendingChange(changeKey) {
    if (!state.adminDraft) return;
    state.adminDraft.pendingChanges = state.adminDraft.pendingChanges.filter((item) => item._key !== changeKey);
    if (state.currentAdminPendingKey === changeKey) state.currentAdminPendingKey = "";
    rebuildAdminDraftFromPending();
    renderAdmin();
    bindAdmin();
  }
  function openAdminPendingChange(changeKey) {
    const change = getAdminPendingChanges().find((item) => item._key === changeKey);
    if (!change) return;
    state.currentAdminPendingKey = changeKey;
    state.currentAdminCategory = change.categoryId || state.currentAdminCategory;
    state.currentAdminRoleTab = change.role || state.currentAdminRoleTab;
    if (state.currentAdminRoleTab === "viewer" && !adminCategorySupportsViewer(getCurrentAdminCategory())) {
      state.currentAdminRoleTab = "manager";
    }
    if (change.kind === "add-members") {
      state.adminAddOpen = true;
      state.adminAddQuery = "";
      state.adminCandidateSelection = (change.members || []).map((member) => member.employeeId).filter(Boolean);
      const firstMember = (change.members || [])[0];
      const firstEmployee = firstMember?.employeeId ? state.employees.find((item) => item.id === firstMember.employeeId) : null;
      state.currentAdminOrgKey = firstEmployee ? (getEmployeeNodeKey(firstEmployee) || "ROOT") : (state.currentAdminOrgKey || "ROOT");
      expandAdminAncestors(state.currentAdminOrgKey || "ROOT");
    } else if (change.kind === "set-permissions") {
      state.adminAddOpen = false;
      state.currentAdminManagerId = change.memberId || state.currentAdminManagerId;
      state.adminScopeOpen = change.viewScope === "partial";
    } else if (change.kind === "remove-members") {
      state.adminAddOpen = false;
      state.adminMemberSelection = [...(change.memberIds || [])];
      state.currentAdminManagerId = (change.memberIds || [])[0] || state.currentAdminManagerId;
    }
    renderAdmin();
    bindAdmin();
  }
  function pushAdminHistory(action, target, detail = "", meta = {}) {
    state.adminHistory.unshift({
      id: `ADM-HIST-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      changedAt: getCurrentTimestamp(),
      action,
      target,
      detail,
      meta
    });
  }
  function applyAdminDraft() {
    if (!state.adminDraft?.pendingChanges?.length) return;
    state.adminCategories = cloneAdminCategories(state.adminDraft.categories);
    state.adminDraft.pendingChanges.slice().reverse().forEach((change) => {
      const categoryLabel = getAdminCategoryDisplayName(findAdminCategoryIn(state.adminCategories, change.categoryId) || { id: change.categoryId, label: change.categoryId });
      if (change.kind === "add-members") {
        pushAdminHistory(
          "추가",
          `${categoryLabel} · ${change.role === "viewer" ? "열람자" : "관리자"}`,
          `${(change.members || []).map((member) => member.name).join(", ")} 등록`,
          {
            kind: change.kind,
            categoryId: change.categoryId,
            categoryLabel,
            role: change.role,
            members: (change.members || []).map((member) => ({ name: member.name, loginId: member.loginId, org: member.org })),
            expiresAt: completeDateInput(change.expiresAt || ""),
            changeReason: String(change.changeReason || "").trim(),
            summary: change.summary || ""
          }
        );
      } else if (change.kind === "remove-members") {
        pushAdminHistory(
          "제거",
          `${categoryLabel} · ${change.role === "viewer" ? "열람자" : "관리자"}`,
          `${(change.memberNames || []).join(", ")} 제거`,
          {
            kind: change.kind,
            categoryId: change.categoryId,
            categoryLabel,
            role: change.role,
            memberNames: [...(change.memberNames || [])],
            expiresAt: completeDateInput(change.expiresAt || ""),
            changeReason: String(change.changeReason || "").trim(),
            summary: change.summary || ""
          }
        );
      } else if (change.kind === "set-permissions") {
        pushAdminHistory(
          "권한변경",
          `${categoryLabel} · ${change.memberName}`,
          change.role === "viewer" ? "열람 권한 재정의" : "관리 권한 재정의",
          {
            kind: change.kind,
            categoryId: change.categoryId,
            categoryLabel,
            role: change.role,
            memberName: change.memberName,
            memberId: change.memberId,
            permissions: { ...(change.permissions || {}) },
            expiresAt: completeDateInput(change.expiresAt || ""),
            changeReason: String(change.changeReason || "").trim(),
            viewScope: change.viewScope || "",
            viewTargets: JSON.parse(JSON.stringify(change.viewTargets || [])),
            summary: change.summary || ""
          }
        );
      }
    });
    discardAdminDraft();
    syncAccessControlledMenus();
    const nextView = canAccessView(state.currentHrView) ? state.currentHrView : getFallbackView();
    renderAdmin();
    bindAdmin();
    if (nextView !== state.currentHrView) showHrView(nextView);
  }
  function renderAdminHistoryTable() {
    if (!state.adminHistory.length) return `<div class="codex-note-box">아직 저장된 관리자 변경 이력이 없습니다.</div>`;
    return `<div class="codex-code-table-wrap"><table class="codex-admin-history-table"><thead><tr><th>변경시각</th><th>처리</th><th>대상</th><th>상세</th><th>보기</th></tr></thead><tbody>${state.adminHistory.slice(0, 12).map((item) => `<tr data-admin-history-row="${item.id}"><td>${item.changedAt}</td><td>${item.action}</td><td>${item.target}</td><td>${item.detail || "-"}</td><td><button type="button" class="hr-btn btn-outline btn-xs" data-admin-history-detail="${item.id}">상세</button></td></tr>`).join("")}</tbody></table></div>`;
  }
  function openAdminHistoryModal(historyId) {
    const history = state.adminHistory.find((item) => item.id === historyId);
    if (!history) return;
    $("h3", adminHistoryModal.root).textContent = `${history.changedAt} 변경 상세`;
    const meta = history.meta || {};
    const rows = [
      ["처리", history.action],
      ["대상", history.target],
      ["상세", history.detail || "-"],
      ["카테고리", meta.categoryLabel || "-"],
      ["역할", meta.role === "viewer" ? "열람자" : meta.role === "manager" ? "관리자" : "-"]
    ];
    if (Array.isArray(meta.members) && meta.members.length) {
      rows.push(["대상 인원", meta.members.map((member) => `${member.name} (${member.loginId || "-"})`).join(", ")]);
    } else if (Array.isArray(meta.memberNames) && meta.memberNames.length) {
      rows.push(["대상 인원", meta.memberNames.join(", ")]);
    } else if (meta.memberName) {
      rows.push(["대상 인원", meta.memberName]);
    }
    if (meta.permissions) {
      const enabled = Object.entries(meta.permissions).filter(([, value]) => value).map(([key]) => {
        const permission = adminPermissionGroups.flatMap((group) => group.items).find((item) => item.id === key);
        return permission?.label || key;
      });
      rows.push(["활성 권한", enabled.length ? enabled.join(", ") : "없음"]);
    }
    if (meta.expiresAt) rows.push(["임시 만료일", meta.expiresAt]);
    if (meta.changeReason) rows.push(["변경 사유", meta.changeReason]);
    if (meta.summary) rows.push(["요약", meta.summary]);
    adminHistoryModal.body.innerHTML = `<div class="codex-sheet-focus"><table><tbody>${rows.map(([label, value]) => `<tr><th>${label}</th><td>${value}</td></tr>`).join("")}</tbody></table></div>`;
    adminHistoryModal.save.onclick = () => adminHistoryModal.close();
    adminHistoryModal.open();
  }
  function getOrgRowLevel(row) {
    if (row.part) return "L4";
    if (row.team) return "L3";
    if (row.office) return "L2";
    return "L1";
  }
  function isRootOrgRow(row) {
    return row?.hq === "오토플러스" && !row?.office && !row?.team && !row?.part;
  }
  function getOrgRowName(row) {
    return row.part || row.team || row.office || row.hq || "오토플러스";
  }
  function getOrgRowParentName(row) {
    if (row.part) return row.team || row.office || row.hq || "오토플러스";
    if (row.team) return row.office || row.hq || "오토플러스";
    if (row.office) return row.hq || "오토플러스";
    return "오토플러스";
  }
  function getOrgRowKey(row) {
    return [getOrgRowLevel(row), row.hq || "", row.office || "", row.team || "", row.part || ""].join("|");
  }
  function getOrgRowPath(row) {
    return [row.hq, row.office, row.team, row.part].filter(Boolean).join(" > ");
  }
  function completeBlueprintHierarchy(rows) {
    const map = new Map();
    const pushRow = (row, preferred = {}) => {
      if (!row.hq || isRootOrgRow(row)) return;
      const key = getOrgRowKey(row);
      const existing = map.get(key) || {};
      const rowHasRealSource = !!row.sourceKey && row.sourceKey !== key;
      const existingHasRealSource = !!existing.sourceKey && existing.sourceKey !== key;
      const normalized = {
        hq: row.hq || "",
        office: row.office || "",
        team: row.team || "",
        part: row.part || "",
        sourceKey: existingHasRealSource
          ? existing.sourceKey
          : rowHasRealSource
            ? row.sourceKey
            : existing.sourceKey || preferred.sourceKey || row.sourceKey || key,
        displayOrder: existingHasRealSource
          ? (existing.displayOrder ?? preferred.displayOrder ?? row.displayOrder ?? 0)
          : (preferred.displayOrder ?? row.displayOrder ?? existing.displayOrder ?? 0),
        createdAt: existingHasRealSource
          ? (existing.createdAt || preferred.createdAt || row.createdAt || "2023.08.16 00:00")
          : (row.createdAt || existing.createdAt || preferred.createdAt || "2023.08.16 00:00"),
        updatedAt: existingHasRealSource
          ? (row.updatedAt || existing.updatedAt || preferred.updatedAt || "2026.04.14 09:00")
          : (row.updatedAt || existing.updatedAt || preferred.updatedAt || "2026.04.14 09:00")
      };
      map.set(key, { ...existing, ...normalized });
    };
    rows.forEach((row) => {
      pushRow(row);
      if (row.hq && row.hq !== "오토플러스") pushRow({ hq: row.hq, office: "", team: "", part: "" }, { sourceKey: getOrgRowKey({ hq: row.hq, office: "", team: "", part: "" }), displayOrder: row.displayOrder ?? 0 });
      if (row.office) pushRow({ hq: row.hq, office: row.office, team: "", part: "" }, { sourceKey: getOrgRowKey({ hq: row.hq, office: row.office, team: "", part: "" }), displayOrder: row.displayOrder ?? 0 });
      if (row.team) pushRow({ hq: row.hq, office: row.office, team: row.team, part: "" }, { sourceKey: getOrgRowKey({ hq: row.hq, office: row.office, team: row.team, part: "" }), displayOrder: row.displayOrder ?? 0 });
    });
    return Array.from(map.values());
  }
  function getParentKeyForRow(row) {
    if (!row) return "ROOT";
    if (row.part) return ["L3", row.hq, row.office, row.team, ""].join("|");
    if (row.team) return ["L2", row.hq, row.office, "", ""].join("|");
    if (row.office) return ["L1", row.hq, "", "", ""].join("|");
    return "ROOT";
  }
  function normalizeSiblingOrders(rows) {
    const groups = new Map();
    rows.forEach((row) => {
      const parentKey = getParentKeyForRow(row);
      if (!groups.has(parentKey)) groups.set(parentKey, []);
      groups.get(parentKey).push(row);
    });
    groups.forEach((items) => {
      items
        .sort((a, b) => (a.displayOrder ?? 0) - (b.displayOrder ?? 0) || getOrgRowName(a).localeCompare(getOrgRowName(b), "ko"))
        .forEach((row, index) => { row.displayOrder = index + 1; });
    });
    return rows;
  }
  function createOrgBlueprint(rows) {
    return normalizeSiblingOrders(completeBlueprintHierarchy(rows.map((row, index) => ({
      hq: row.hq,
      office: row.office,
      team: row.team,
      part: row.part,
      sourceKey: getOrgRowKey(row),
      displayOrder: index + 1,
      code: buildOrgCode(getOrgRowLevel(row), index + 1),
      active: true,
      description: "",
      createdAt: "2023.08.16 00:00",
      updatedAt: "2026.04.14 09:00"
    }))).map((row, index) => ({
      ...row,
      code: row.code || buildOrgCode(getOrgRowLevel(row), index + 1),
      active: row.active !== false,
      description: row.description || ""
    })));
  }
  function cloneOrgBlueprint(rows) {
    return rows.map((row) => ({ ...row }));
  }
  const baseOrgBlueprint = createOrgBlueprint(orgRows);
  const state = { employees: fullEmployeeSeed.map((employee) => ({ ...employee })), orgBlueprint: cloneOrgBlueprint(baseOrgBlueprint), metaRegistry: JSON.parse(JSON.stringify(initialMetaRegistry)), adminCategories: cloneAdminCategories(initialAdminCategories), adminHistory: [], adminDraft: null, currentAdminPendingKey: "", currentAdminCategory: "all_admin", currentAdminRoleTab: "manager", currentAdminManagerId: "ADM-001", currentAdminOrgKey: "ROOT", adminExpandedKeys: ["ROOT"], adminAddOpen: false, adminAddQuery: "", adminCandidateSelection: [], adminMemberSelection: [], adminScopeOpen: false, adminScopeQuery: "", adminScopeSelection: [], adminCopyOpen: false, adminCopyQuery: "", adminCopySourceId: "", adminCompareOpen: false, adminCompareQuery: "", adminCompareSourceId: "", currentOperatorLoginId: initialOperatorLoginId, codeHistory: [], codeDraft: null, currentPendingChangeKey: "", assignmentRecords: [], deletedOrgArchive: [], assignmentFlow: null, assignmentLandingTab: "org", assignmentLandingSearch: "", selectedId: "EMP-0001", currentHrView: "directory", currentSystem: 1, currentCodeView: "overview", currentCodeSelection: "", currentLevelSelection: "L1", currentMetaSelection: "grade", currentMetaCodeSelection: "", currentCodeHistoryFilter: "all", currentOrgNode: "ROOT", orgIncludeChildren: true, orgSearch: "", orgExpandedKeys: ["ROOT"], directorySearchText: "", directoryAdvancedOpen: false, directoryDept: [], directoryDeptQuery: "", directoryGrade: [], directoryGradeQuery: "", directoryStatus: "", directoryHireDateFrom: "", directoryHireDateTo: "", directoryRetireDateFrom: "", directoryRetireDateTo: "", directorySorts: [], hireStatMode: "month", hireStatYear: 2026, hireStatMonth: 4, hireStatQuarter: 2, hireStatHalf: 1, leaveStatMode: "current", leaveStatYear: 2026, leaveStatMonth: 4, leaveStatQuarter: 2, leaveStatHalf: 1, statModalSelection: "", currentRecordTab: "overview" };
  syncLegacyMetaArraysFromRegistry();
  syncEmployeeCodeRefs();
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const refs = { hrSystem: $("#hrSystem"), evalSystem: $("#evalSystem"), pageTitle: $(".hr-page-title"), searchBar: $('[data-region="searchbar"]'), stats: $('[data-region="stats"]'), tableWrap: $('[data-region="emptable"]'), orgWrap: $("#orgChartWrap"), cardWrap: $("#hrCardGrid"), hrContent: $(".hr-content"), hrSidebar: $(".hr-sidebar"), topItems: $$(".hr-top-item"), sideItems: $$(".hr-sidebar-item"), annoList: $("#annoList") };
  if (!refs.hrSystem || !refs.tableWrap || !refs.cardWrap) return;
  refs.pageActions = $(".hr-page-title > div:last-child", refs.hrSystem);
  refs.pageSecondaryButton = refs.pageActions?.querySelector(".btn-outline") || null;
  refs.pagePrimaryButton = refs.pageActions?.querySelector(".btn-primary") || null;
  const panels = {};
  function employeePath(employee) { return [employee.hq, employee.office, employee.team, employee.part].filter(Boolean).join(" > "); }
  function getMetaRegistry(kind) {
    return state.metaRegistry?.[kind] || [];
  }
  function createCodeDraft() {
    return {
      orgBlueprint: cloneOrgBlueprint(state.orgBlueprint),
      levelDefs: JSON.parse(JSON.stringify(levelDefs)),
      metaRegistry: JSON.parse(JSON.stringify(state.metaRegistry)),
      pendingChanges: []
    };
  }
  function ensureCodeDraft() {
    if (!state.codeDraft) state.codeDraft = createCodeDraft();
    return state.codeDraft;
  }
  function discardCodeDraft() {
    state.codeDraft = null;
    state.currentPendingChangeKey = "";
  }
  function getCodeDraftOrgBlueprint() {
    return cloneOrgBlueprint(state.codeDraft?.orgBlueprint || state.orgBlueprint);
  }
  function getCodeDraftLevelDefs() {
    return JSON.parse(JSON.stringify(state.codeDraft?.levelDefs || levelDefs));
  }
  function getCodeDraftMetaRegistry(kind) {
    const registry = state.codeDraft?.metaRegistry || state.metaRegistry;
    return JSON.parse(JSON.stringify(registry?.[kind] || []));
  }
  function getPendingOrgChanges() {
    return state.codeDraft?.pendingChanges || [];
  }
  function hasPendingOrgChanges() {
    return getPendingOrgChanges().length > 0;
  }
  function upsertPendingOrgChange(change) {
    const draft = ensureCodeDraft();
    const changeKey = `org|${change.payload.mode}|${change.payload.originalKey || getOrgRowKey(change.payload.row)}`;
    const payload = { ...change, _key: changeKey, changedAt: "2026.04.15 17:20" };
    const index = draft.pendingChanges.findIndex((item) => item._key === changeKey);
    if (index >= 0) draft.pendingChanges.splice(index, 1, payload);
    else draft.pendingChanges.unshift(payload);
    state.currentPendingChangeKey = changeKey;
  }
  function rebuildOrgDraftFromPending() {
    const next = createCodeDraft();
    const pending = getPendingOrgChanges().map((item) => ({ ...item, payload: JSON.parse(JSON.stringify(item.payload || {})) }));
    next.pendingChanges = pending;
    pending.slice().reverse().forEach((change) => {
      const payload = change.payload;
      if (payload?.kind === "org" && payload.row) {
        if (payload.mode === "edit") {
          next.orgBlueprint = next.orgBlueprint.map((row) => getOrgRowKey(row) === payload.originalKey ? { ...row, ...payload.row } : row);
        } else {
          const rowKey = getOrgRowKey(payload.row);
          if (!next.orgBlueprint.some((row) => getOrgRowKey(row) === rowKey)) next.orgBlueprint.push({ ...payload.row });
        }
        next.orgBlueprint = normalizeBlueprint(next.orgBlueprint);
      } else if (payload?.kind === "level" && payload.level) {
        const index = next.levelDefs.findIndex((item) => item.id === payload.level.id);
        if (payload.mode === "delete") {
          if (index >= 0) next.levelDefs.splice(index, 1);
        } else if (index >= 0) {
          next.levelDefs.splice(index, 1, { ...payload.level });
        } else {
          next.levelDefs.push({ ...payload.level });
        }
      } else if (payload?.kind === "meta" && payload.codeRecord && payload.metaKind) {
        const bucket = next.metaRegistry[payload.metaKind] || [];
        const index = bucket.findIndex((item) => item.code === payload.codeRecord.code);
        if (payload.mode === "delete") {
          if (index >= 0) bucket.splice(index, 1);
        } else if (index >= 0) {
          bucket.splice(index, 1, { ...payload.codeRecord });
        } else {
          bucket.push({ ...payload.codeRecord });
        }
        next.metaRegistry[payload.metaKind] = bucket;
      }
    });
    state.codeDraft = next;
  }
  function removePendingOrgChange(changeKey) {
    if (!state.codeDraft) return;
    state.codeDraft.pendingChanges = state.codeDraft.pendingChanges.filter((item) => item._key !== changeKey);
    if (state.currentPendingChangeKey === changeKey) state.currentPendingChangeKey = "";
    rebuildOrgDraftFromPending();
    renderCodes();
  }
  function openCodeOrgModalFromPending(changeKey) {
    const change = getPendingOrgChanges().find((item) => item._key === changeKey);
    if (!change?.payload?.row) return;
    const payload = change.payload;
    const row = payload.row;
    state.codeOrgModalDraft = {
      mode: payload.mode,
      originalKey: payload.originalKey || "",
      level: getOrgRowLevel(row),
      parentKey: getParentKeyForRow(row),
      name: getOrgRowName(row),
      code: row.code || "",
      active: row.active !== false,
      description: row.description || ""
    };
    $("h3", codeOrgModal.root).textContent = payload.mode === "edit" ? "조직코드 편집" : "신규 조직 추가";
    codeOrgModal.body.innerHTML = `<div class="codex-code-modal-layout"><div class="codex-code-modal-form"><div class="codex-form-grid"><label><span>레벨</span><select id="codeOrgLevel">${levelDefs.map((item) => `<option value="${item.id}" ${item.id === state.codeOrgModalDraft.level ? "selected" : ""}>${item.id} · ${item.name}</option>`).join("")}</select></label><label><span>상위조직</span><select id="codeOrgParentKey"></select></label><label class="span-2"><span>조직명</span><input id="codeOrgName" value="${state.codeOrgModalDraft.name}"></label><label><span>코드값</span><input id="codeOrgCode" value="${state.codeOrgModalDraft.code}"></label><label><span>사용여부</span><select id="codeOrgActive"><option value="Y" ${state.codeOrgModalDraft.active ? "selected" : ""}>사용</option><option value="N" ${state.codeOrgModalDraft.active ? "" : "selected"}>중지</option></select></label><label class="span-2"><span>설명</span><textarea id="codeOrgDescription" rows="4">${state.codeOrgModalDraft.description}</textarea></label></div><div class="codex-note-box"><strong id="codeOrgLevelText"></strong>상위조직을 바꾸거나 레벨을 바꾸면 우측 미리보기에 바로 반영됩니다.</div></div><div class="codex-code-modal-preview"><div class="codex-panel"><h4>조직도 미리보기</h4><div id="codeOrgPreview"></div></div></div></div>`;
    syncCodeOrgModalBody();
    bindCodeOrgModal();
    codeOrgModal.save.onclick = () => saveCodeOrgModal();
    codeOrgModal.open();
  }
  function openLevelDraftFromPending(changeKey) {
    const change = getPendingOrgChanges().find((item) => item._key === changeKey);
    if (!change?.payload?.level) return;
    state.currentCodeView = "level-edit";
    state.currentLevelSelection = change.payload.level.id;
    state.currentPendingChangeKey = changeKey;
    renderCodes();
  }
  function openMetaDraftFromPending(changeKey) {
    const change = getPendingOrgChanges().find((item) => item._key === changeKey);
    if (!change?.payload?.codeRecord || !change?.payload?.metaKind) return;
    state.currentCodeView = "meta-edit";
    state.currentMetaSelection = change.payload.metaKind;
    state.currentMetaCodeSelection = change.payload.codeRecord.code;
    state.currentPendingChangeKey = changeKey;
    renderCodes();
  }
  function applyCodeDraft() {
    const draft = state.codeDraft;
    if (!draft || !draft.pendingChanges.length) return;
    state.orgBlueprint = normalizeBlueprint(cloneOrgBlueprint(draft.orgBlueprint));
    levelDefs.splice(0, levelDefs.length, ...JSON.parse(JSON.stringify(draft.levelDefs || levelDefs)));
    state.metaRegistry = JSON.parse(JSON.stringify(draft.metaRegistry || state.metaRegistry));
    draft.pendingChanges.slice().reverse().forEach((change) => {
      const payload = change.payload || {};
      if (payload.kind === "org" && payload.row) {
        pushCodeHistory("조직코드", payload.mode === "edit" ? "수정" : "신규", payload.row.code || "-", getOrgRowName(payload.row), getOrgRowPath(payload.row));
      } else if (payload.kind === "level" && payload.level) {
        pushCodeHistory("레벨관리", payload.mode === "edit" ? "수정" : "신규", payload.level.id, payload.level.name, payload.level.desc || "레벨 정의 변경");
      } else if (payload.kind === "meta" && payload.codeRecord) {
        pushCodeHistory(`${getMetaKindConfig(payload.metaKind).label}코드`, payload.mode === "edit" ? "수정" : "신규", payload.codeRecord.code, payload.codeRecord.name, payload.codeRecord.description || "기준코드 변경");
      }
    });
    discardCodeDraft();
    syncEmployeeCodeRefs();
    syncLegacyMetaArraysFromRegistry();
    renderAll();
  }
  function syncLegacyMetaArraysFromRegistry() {
    gradeCodes.splice(0, gradeCodes.length, ...getMetaRegistry("grade").filter((item) => item.active !== false).map((item) => item.name));
    titleCodes.splice(0, titleCodes.length, ...getMetaRegistry("title").filter((item) => item.active !== false).map((item) => item.name));
    familyCodes.splice(0, familyCodes.length, ...getMetaRegistry("family").filter((item) => item.active !== false).map((item) => item.name));
    employeeTypes.splice(0, employeeTypes.length, ...getMetaRegistry("type").filter((item) => item.active !== false).map((item) => item.name));
  }
  function findMetaCode(kind, name) {
    return getMetaRegistry(kind).find((item) => item.name === name)?.code || "";
  }
  function getOrgCodeByPath(hq = "", office = "", team = "", part = "") {
    const matched = state.orgBlueprint.find((row) => row.hq === hq && (row.office || "") === (office || "") && (row.team || "") === (team || "") && (row.part || "") === (part || ""));
    return matched?.code || "";
  }
  function syncEmployeeCodeRefs() {
    state.employees.forEach((employee) => {
      employee.orgCode = getOrgCodeByPath(employee.hq, employee.office, employee.team, employee.part);
      employee.hireOrgCode = getOrgCodeByPath(employee.hireHq || employee.hq, employee.hireOffice || employee.office, employee.hireTeam || employee.team, employee.hirePart || employee.part);
      employee.gradeCode = findMetaCode("grade", employee.grade);
      employee.hireGradeCode = findMetaCode("grade", employee.hireGrade || employee.grade);
      employee.titleCode = findMetaCode("title", employee.title);
      employee.jobFamilyCode = findMetaCode("family", employee.jobFamily);
      employee.hireJobFamilyCode = findMetaCode("family", employee.hireJobFamily || employee.jobFamily);
      employee.employeeTypeCode = findMetaCode("type", employee.employeeType);
      employee.hireEmployeeTypeCode = findMetaCode("type", employee.hireEmployeeType || employee.employeeType);
    });
  }
  function pushCodeHistory(section, action, itemCode, itemName, detail = "") {
    state.codeHistory.unshift({
      id: `HIST-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      changedAt: "2026.04.15 16:10",
      section,
      action,
      itemCode,
      itemName,
      detail
    });
  }
  function buildOrgPathText(parts = []) {
    return (parts || []).map((item) => String(item || "").trim()).filter(Boolean).join(" > ");
  }
  function hireEmployeePath(employee) {
    return employee.hireOrgPathText || buildOrgPathText([employee.hireHq || employee.hq, employee.hireOffice || employee.office, employee.hireTeam || employee.team, employee.hirePart || employee.part]);
  }
  function deepestDept(employee) { return employee.part || employee.team || employee.office || employee.hq; }
  function selectedEmployee() { return state.employees.find((employee) => employee.id === state.selectedId) || state.employees[0]; }
  if (state.currentOrgNode === "ROOT") state.currentOrgNode = getEmployeeNodeKey(selectedEmployee());
  function parseDateValue(value) {
    return Number(String(value || "").replace(/\D/g, "").slice(0, 8)) || 0;
  }
  function getCurrentBaseDateValue() {
    return 20260416;
  }
  function getEffectiveStatus(employee) {
    const retireDateValue = parseDateValue(employee?.retireDate);
    if (retireDateValue) {
      if (retireDateValue <= getCurrentBaseDateValue()) return "퇴직";
      if (employee?.status === "퇴직") return "재직";
    }
    if (employee?.status === "휴직") {
      const startValue = parseDateValue(getLeaveStartDate(employee));
      const endValue = parseDateValue(getLeaveEndDate(employee));
      const currentValue = getCurrentBaseDateValue();
      if (startValue && currentValue < startValue) return "재직";
      if (endValue && currentValue > endValue) return "재직";
    }
    return employee?.status || "재직";
  }
  function getDisplayStatus(employee) {
    const effective = getEffectiveStatus(employee);
    if (effective === "휴직" && !isCurrentlyOnLeave(employee)) return "재직";
    return effective;
  }
  function isCurrentlyOnLeave(employee) {
    if (getEffectiveStatus(employee) !== "휴직") return false;
    const startValue = parseDateValue(getLeaveStartDate(employee));
    const endValue = parseDateValue(getLeaveEndDate(employee));
    const currentValue = getCurrentBaseDateValue();
    if (startValue && startValue > currentValue) return false;
    if (endValue && endValue < currentValue) return false;
    return true;
  }
  function normalizeLeaveRows(rows) {
    return (rows || [])
      .map((row) => [String(row?.[0] || "").trim(), completeDateInput(row?.[1] || ""), completeDateInput(row?.[2] || ""), String(row?.[3] || "").trim()])
      .filter((row) => row.some((value) => String(value || "").trim()))
      .sort((a, b) => {
        const aStart = parseDateValue(a[1]);
        const bStart = parseDateValue(b[1]);
        if (aStart !== bStart) return aStart - bStart;
        return parseDateValue(a[2]) - parseDateValue(b[2]);
      });
  }
  function validateLeaveRows(rows) {
    for (const row of rows) {
      const [type, startDate, endDate] = row;
      if ((type || endDate) && !startDate) return "휴직유형이나 종료일을 입력한 경우 시작일도 함께 입력해 주세요.";
      if (startDate && !type) return "휴직 시작일을 입력한 경우 휴직유형도 함께 입력해 주세요.";
      if (startDate && endDate && parseDateValue(endDate) < parseDateValue(startDate)) return "휴직 종료일은 시작일보다 빠를 수 없습니다.";
    }
    return "";
  }
  function getLeaveEntries(employee) {
    if (employee.leaveItems?.length) {
      return employee.leaveItems
        .map((row) => Array.isArray(row) ? row : [])
        .filter((row) => row.some((value) => String(value || "").trim()));
    }
    const fallback = [employee.leaveType || "", employee.leaveStartDate || "", employee.leaveEndDate || "", employee.leaveNote || ""];
    return fallback.some((value) => String(value || "").trim()) ? [fallback] : [];
  }
  function getActiveLeaveEntry(employee) {
    const currentValue = getCurrentBaseDateValue();
    return getLeaveEntries(employee).find((row) => {
      const startValue = parseDateValue(row[1]);
      const endValue = parseDateValue(row[2]);
      if (startValue && startValue > currentValue) return false;
      if (endValue && endValue < currentValue) return false;
      return !!(row[0] || row[1] || row[2] || row[3]);
    }) || null;
  }
  function getMostRelevantLeaveEntry(employee) {
    const rows = getLeaveEntries(employee);
    if (!rows.length) return null;
    const active = getActiveLeaveEntry(employee);
    if (active) return active;
    const currentValue = getCurrentBaseDateValue();
    const upcoming = rows
      .filter((row) => parseDateValue(row[1]) > currentValue)
      .sort((a, b) => parseDateValue(a[1]) - parseDateValue(b[1]))[0];
    if (upcoming) return upcoming;
    return [...rows].sort((a, b) => parseDateValue(b[2] || b[1]) - parseDateValue(a[2] || a[1]))[0] || null;
  }
  function syncEmployeeLeaveSummary(employee) {
    const relevant = getMostRelevantLeaveEntry(employee);
    employee.leaveType = relevant?.[0] || "";
    employee.leaveStartDate = relevant?.[1] || "";
    employee.leaveEndDate = relevant?.[2] || "";
    employee.leaveNote = relevant?.[3] || "";
  }
  function computeCurrentEmploymentStatus(employee, selectedStatus = "재직", retireDate = "") {
    const retireValue = parseDateValue(retireDate);
    if (retireValue) {
      return retireValue <= getCurrentBaseDateValue() ? "퇴직" : (selectedStatus === "퇴직" ? "재직" : selectedStatus);
    }
    const activeLeave = getActiveLeaveEntry(employee);
    if (activeLeave) return "휴직";
    if (selectedStatus === "휴직") return "재직";
    return selectedStatus || "재직";
  }
  function getLeavePhase(row) {
    const startValue = parseDateValue(row?.[1]);
    const endValue = parseDateValue(row?.[2]);
    const currentValue = getCurrentBaseDateValue();
    if (startValue && startValue > currentValue) return "예정";
    if (endValue && endValue < currentValue) return "종료";
    if (startValue || endValue) return "진행중";
    return "-";
  }
  function getEmployeeLeaveSummary(employee) {
    const relevant = getMostRelevantLeaveEntry(employee);
    if (!relevant) return { type: "-", period: "-", phase: "-", note: "" };
    const period = `${relevant[1] || "-"}${relevant[2] ? ` ~ ${relevant[2]}` : ""}`;
    return {
      type: relevant[0] || "휴직",
      period,
      phase: getLeavePhase(relevant),
      note: relevant[3] || ""
    };
  }
  function appendLeaveHistoryEntries(employee, leaveRows) {
    employee.history = employee.history || [];
    leaveRows.forEach((row) => {
      const [type, startDate, endDate, note] = row;
      const baseLabel = type || "휴직";
      if (startDate && !employee.history.some((item) => item?.[0] === startDate && String(item?.[1] || "").includes(baseLabel) && String(item?.[1] || "").includes("시작"))) {
        employee.history.unshift([startDate, `${baseLabel} 시작${note ? ` (${note})` : ""}`]);
      }
      if (endDate && !employee.history.some((item) => item?.[0] === endDate && String(item?.[1] || "").includes(baseLabel) && (String(item?.[1] || "").includes("종료") || String(item?.[1] || "").includes("복귀")))) {
        employee.history.unshift([endDate, `${baseLabel} 종료${note ? ` (${note})` : ""}`]);
      }
    });
  }
  function cycleDirectorySort(key) {
    const currentIndex = state.directorySorts.findIndex((item) => item.key === key);
    if (currentIndex === -1) {
      state.directorySorts.push({ key, order: -1 });
      return;
    }
    if (state.directorySorts[currentIndex].order === -1) {
      state.directorySorts[currentIndex].order = 1;
      return;
    }
    if (state.directorySorts[currentIndex].order === 1) {
      state.directorySorts.splice(currentIndex, 1);
      return;
    }
    state.directorySorts[currentIndex].order = -1;
  }
  function getDirectorySortIndicator(key) {
    const index = state.directorySorts.findIndex((item) => item.key === key);
    if (index === -1) return "";
    const item = state.directorySorts[index];
    return `${item.order === -1 ? " ▼" : " ▲"}${index + 1}`;
  }
  function statusBadge(status) {
    const className = status === "재직" ? "status-active" : status === "퇴직" ? "status-retired" : "status-leave";
    return `<span class="status-badge ${className}">${status}</span>`;
  }
  function parseDateParts(value) {
    const parts = (value || "").split(".");
    return { year: Number(parts[0] || 0), month: Number(parts[1] || 0), day: Number(parts[2] || 0) };
  }
  function normalizedNameToken(name) {
    return (name || "").replace(/\s+/g, "").toLowerCase();
  }
  const batchImportColumns = [
    { key: "id", label: "사원번호", required: true, desc: "중복 불가" },
    { key: "name", label: "사원명", required: true, desc: "필수" },
    { key: "groupwareId", label: "그룹웨어ID", required: false, desc: "미입력 시 자동 생성" },
    { key: "residentNumber", label: "주민등록번호", required: false, desc: "예: 950101-1234567" },
    { key: "hq", label: "본부", required: true, desc: "조직코드 기준값" },
    { key: "office", label: "실", required: false, desc: "조직코드 기준값" },
    { key: "team", label: "팀", required: false, desc: "조직코드 기준값" },
    { key: "part", label: "파트", required: false, desc: "조직코드 기준값" },
    { key: "grade", label: "직급", required: true, desc: "기준코드 기준값" },
    { key: "title", label: "직책", required: true, desc: "기준코드 기준값" },
    { key: "jobFamily", label: "직군", required: true, desc: "기준코드 기준값" },
    { key: "employeeType", label: "직원유형", required: true, desc: "기준코드 기준값" },
    { key: "status", label: "재직상태", required: true, desc: "재직/휴직/퇴직" },
    { key: "hireDate", label: "입사일", required: true, desc: "YYYYMMDD 또는 YYYY.MM.DD" },
    { key: "birthDate", label: "생년월일", required: true, desc: "YYYYMMDD 또는 YYYY.MM.DD" },
    { key: "retireDate", label: "퇴사일", required: false, desc: "퇴직 시 필수" },
    { key: "phone", label: "연락처", required: false, desc: "미입력 가능" },
    { key: "companyPhone", label: "회사전화", required: false, desc: "미입력 시 자동 생성" },
    { key: "companyEmail", label: "회사이메일", required: false, desc: "미입력 시 자동 생성" },
    { key: "personalEmail", label: "개인이메일", required: false, desc: "미입력 시 자동 생성" },
    { key: "maritalStatus", label: "결혼여부", required: false, desc: "미혼/기혼" },
    { key: "education", label: "최종학력", required: false, desc: "자유입력" },
    { key: "contractPeriod", label: "계약기간", required: false, desc: "계약직인 경우 입력" },
    { key: "careerMonths", label: "인정경력개월", required: false, desc: "숫자" },
    { key: "assignmentDate", label: "부서배정일", required: false, desc: "미입력 시 입사일" },
    { key: "address", label: "주소", required: false, desc: "자유입력" },
    { key: "memo", label: "인사메모", required: false, desc: "자유입력" },
    { key: "leaveType", label: "휴직유형", required: false, desc: "휴직 시 입력" },
    { key: "leaveStartDate", label: "휴직시작일", required: false, desc: "휴직 시 입력" },
    { key: "leaveEndDate", label: "휴직종료일", required: false, desc: "선택" },
    { key: "leaveNote", label: "휴직비고", required: false, desc: "선택" }
  ];
  function normalizeImportCell(value) {
    if (value === null || value === undefined) return "";
    return String(value).trim();
  }
  function buildBatchTemplateSampleRow() {
    return {
      사원번호: "EMP-9001",
      사원명: "홍길동",
      그룹웨어ID: "hong.gildong",
      주민등록번호: "950101-1234567",
      본부: "경영관리본부",
      실: "경영지원실",
      팀: "인사팀",
      파트: "",
      직급: "사원",
      직책: "팀원",
      직군: "관리",
      직원유형: "정규직",
      재직상태: "재직",
      입사일: "2026.04.16",
      생년월일: "1995.01.01",
      퇴사일: "",
      연락처: "010-0000-0000",
      회사전화: "02-6200-9001",
      회사이메일: "honggildong.emp-9001@autoplus.co.kr",
      개인이메일: "honggildong@gmail.com",
      결혼여부: "미혼",
      최종학력: "한양대학교 경영학과",
      계약기간: "",
      인정경력개월: "0",
      부서배정일: "2026.04.16",
      주소: "서울특별시",
      인사메모: "엑셀 일괄등록 예시",
      휴직유형: "",
      휴직시작일: "",
      휴직종료일: "",
      휴직비고: ""
    };
  }
  function getBatchTemplateGuideRows() {
    return batchImportColumns.map((column) => ({
      항목명: column.label,
      필수여부: column.required ? "Y" : "N",
      작성안내: column.desc
    }));
  }
  function getBatchTemplateCodeRows() {
    const orgRows = getActiveOrgRows().map((row) => ({
      구분: "조직",
      값: [row.hq, row.office, row.team, row.part].filter(Boolean).join(" > "),
      보조값1: row.hq || "",
      보조값2: row.office || "",
      보조값3: row.team || "",
      보조값4: row.part || ""
    }));
    const gradeRows = gradeCodes.map((item) => ({ 구분: "직급", 값: item, 보조값1: "", 보조값2: "", 보조값3: "", 보조값4: "" }));
    const titleRows = titleCodes.map((item) => ({ 구분: "직책", 값: item, 보조값1: "", 보조값2: "", 보조값3: "", 보조값4: "" }));
    const familyRows = familyCodes.map((item) => ({ 구분: "직군", 값: item, 보조값1: "", 보조값2: "", 보조값3: "", 보조값4: "" }));
    const typeRows = employeeTypes.map((item) => ({ 구분: "직원유형", 값: item, 보조값1: "", 보조값2: "", 보조값3: "", 보조값4: "" }));
    const statusRows = ["재직", "휴직", "퇴직"].map((item) => ({ 구분: "재직상태", 값: item, 보조값1: "", 보조값2: "", 보조값3: "", 보조값4: "" }));
    return [...orgRows, ...gradeRows, ...titleRows, ...familyRows, ...typeRows, ...statusRows];
  }
  function escapeCsvCell(value) {
    const text = String(value ?? "");
    if (/[",\r\n]/.test(text)) return `"${text.replace(/"/g, '""')}"`;
    return text;
  }
  function buildBatchTemplateCsv() {
    const headers = batchImportColumns.map((column) => column.label);
    const sample = buildBatchTemplateSampleRow();
    const lines = [
      headers.map(escapeCsvCell).join(","),
      headers.map((header) => escapeCsvCell(sample[header] || "")).join(",")
    ];
    return `\uFEFF${lines.join("\r\n")}`;
  }
  function downloadTextFile(filename, content, mimeType = "text/plain;charset=utf-8") {
    const blob = new Blob([content], { type: mimeType });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(link.href), 1000);
  }
  function parseCsvRows(text) {
    const rows = [];
    let row = [];
    let value = "";
    let index = 0;
    let inQuotes = false;
    while (index < text.length) {
      const char = text[index];
      const next = text[index + 1];
      if (char === '"') {
        if (inQuotes && next === '"') {
          value += '"';
          index += 2;
          continue;
        }
        inQuotes = !inQuotes;
        index += 1;
        continue;
      }
      if (!inQuotes && char === ",") {
        row.push(value);
        value = "";
        index += 1;
        continue;
      }
      if (!inQuotes && (char === "\n" || char === "\r")) {
        if (char === "\r" && next === "\n") index += 1;
        row.push(value);
        rows.push(row);
        row = [];
        value = "";
        index += 1;
        continue;
      }
      value += char;
      index += 1;
    }
    if (value.length || row.length) {
      row.push(value);
      rows.push(row);
    }
    return rows.filter((item) => item.some((cell) => String(cell || "").trim()));
  }
  async function readEmployeeBatchCsv(file) {
    const text = await file.text();
    const rows = parseCsvRows(text.replace(/^\uFEFF/, ""));
    if (!rows.length) return [];
    const headers = rows[0].map((item) => normalizeImportCell(item));
    return rows.slice(1).map((row) => headers.reduce((acc, header, index) => {
      acc[header] = normalizeImportCell(row[index]);
      return acc;
    }, {}));
  }
  function collectEmployeeInputFromCreateForm() {
    const hireOrgPathText = buildOrgPathText([
      $("#createHireHq").value || $("#createHq").value,
      $("#createHireOffice").value || $("#createOffice").value,
      $("#createHireTeam").value || $("#createTeam").value,
      $("#createHirePart").value || $("#createPart").value
    ]);
    return {
      id: $("#createId").value.trim(),
      name: $("#createName").value || "신규사원",
      hq: $("#createHq").value,
      office: $("#createOffice").value,
      team: $("#createTeam").value,
      part: $("#createPart").value,
      hireHq: $("#createHireHq").value || $("#createHq").value,
      hireOffice: $("#createHireOffice").value || $("#createOffice").value,
      hireTeam: $("#createHireTeam").value || $("#createTeam").value,
      hirePart: $("#createHirePart").value || $("#createPart").value,
      grade: $("#createGrade").value,
      hireGrade: $("#createHireGrade").value || $("#createGrade").value,
      title: $("#createTitle").value,
      jobFamily: $("#createFamily").value,
      employeeType: $("#createEmployeeType").value,
      contractPeriod: $("#createContractPeriod").value,
      birthDate: $("#createBirthDate").value,
      hireDate: $("#createHireDate").value,
      phone: $("#createPhone").value,
      companyPhone: $("#createCompanyPhone").value,
      companyEmail: $("#createCompanyEmail").value,
      personalEmail: $("#createPersonalEmail").value,
      address: $("#createAddress").value,
      education: $("#createEducation").value,
      status: $("#createStatus").value,
      retireDate: $("#createRetireDate").value,
      careerMonths: $("#createCareerMonths").value,
      assignmentDate: $("#createAssignmentDate").value,
      memo: $("#createMemo").value,
      groupwareId: $("#createGroupwareId").value,
      residentNumber: $("#createResidentNumber").value,
      maritalStatus: $("#createMaritalStatus").value,
      hireEmployeeType: $("#createHireEmployeeType").value || $("#createEmployeeType").value,
      hireJobFamily: $("#createHireFamily").value || $("#createFamily").value,
      hireOrgPathText,
      leaveItems: normalizeLeaveRows(collectRepeatableRows(createModal.body, "createLeave", 4)),
      educationItems: collectRepeatableRows(createModal.body, "createEducation", 4).map((row) => [row[1], `${row[0]} ${row[2]}`.trim()]),
      careerHistory: collectRepeatableRows(createModal.body, "createCareer", 4).map((row) => [row[1], row[2] || row[3] || ""]),
      familyItems: collectRepeatableRows(createModal.body, "createFamilyRows", 3),
      certificateItems: collectRepeatableRows(createModal.body, "createCertificate", 3).map((row) => ["자격증", row[0], row[1], row[2]]),
      awardItems: [],
      photoDataUrl: createModal.body.dataset.photoDataUrl || "",
      historyLabel: "신규 등록",
      promotionLabel: "신규 입사"
    };
  }
  function buildEmployeeFromInput(rawInput = {}) {
    const input = {
      ...rawInput,
      id: normalizeImportCell(rawInput.id),
      name: normalizeImportCell(rawInput.name) || "신규사원",
      hq: normalizeImportCell(rawInput.hq),
      office: normalizeImportCell(rawInput.office),
      team: normalizeImportCell(rawInput.team),
      part: normalizeImportCell(rawInput.part),
      hireHq: normalizeImportCell(rawInput.hireHq || rawInput.hq),
      hireOffice: normalizeImportCell(rawInput.hireOffice || rawInput.office),
      hireTeam: normalizeImportCell(rawInput.hireTeam || rawInput.team),
      hirePart: normalizeImportCell(rawInput.hirePart || rawInput.part),
      grade: normalizeImportCell(rawInput.grade),
      hireGrade: normalizeImportCell(rawInput.hireGrade || rawInput.grade),
      title: normalizeImportCell(rawInput.title),
      jobFamily: normalizeImportCell(rawInput.jobFamily),
      employeeType: normalizeImportCell(rawInput.employeeType),
      contractPeriod: completePeriodInput(rawInput.contractPeriod || ""),
      birthDate: completeDateInput(rawInput.birthDate || ""),
      hireDate: completeDateInput(rawInput.hireDate || ""),
      phone: formatPhoneInput(rawInput.phone || ""),
      companyPhone: formatPhoneInput(rawInput.companyPhone || ""),
      companyEmail: normalizeImportCell(rawInput.companyEmail),
      personalEmail: normalizeImportCell(rawInput.personalEmail),
      address: normalizeImportCell(rawInput.address),
      education: normalizeImportCell(rawInput.education),
      status: normalizeImportCell(rawInput.status) || "재직",
      retireDate: completeDateInput(rawInput.retireDate || ""),
      careerMonths: normalizeImportCell(rawInput.careerMonths) || "0",
      assignmentDate: completeDateInput(rawInput.assignmentDate || rawInput.hireDate || ""),
      memo: normalizeImportCell(rawInput.memo),
      groupwareId: normalizeImportCell(rawInput.groupwareId),
      residentNumber: formatResidentNumber(rawInput.residentNumber || ""),
      maritalStatus: normalizeImportCell(rawInput.maritalStatus) || "미혼",
      hireEmployeeType: normalizeImportCell(rawInput.hireEmployeeType || rawInput.employeeType),
      hireJobFamily: normalizeImportCell(rawInput.hireJobFamily || rawInput.jobFamily),
      hireOrgPathText: normalizeImportCell(rawInput.hireOrgPathText),
      leaveItems: normalizeLeaveRows(rawInput.leaveItems || []),
      educationItems: (rawInput.educationItems || []).filter((row) => row?.some?.((value) => String(value || "").trim())),
      careerHistory: (rawInput.careerHistory || []).filter((row) => row?.some?.((value) => String(value || "").trim())),
      familyItems: (rawInput.familyItems || []).filter((row) => row?.some?.((value) => String(value || "").trim())),
      certificateItems: (rawInput.certificateItems || []).filter((row) => row?.some?.((value) => String(value || "").trim())),
      awardItems: rawInput.awardItems || [],
      photoDataUrl: rawInput.photoDataUrl || "",
      historyLabel: rawInput.historyLabel || "신규 등록",
      promotionLabel: rawInput.promotionLabel || "신규 입사"
    };
    const leaveValidationMessage = validateLeaveRows(input.leaveItems);
    if (leaveValidationMessage) throw new Error(leaveValidationMessage);
    if (!input.id) throw new Error("사원번호를 입력해 주세요.");
    if (!input.hq) throw new Error("본부를 입력해 주세요.");
    if (!input.grade || !gradeCodes.includes(input.grade)) throw new Error("유효한 직급을 입력해 주세요.");
    if (!input.title || !titleCodes.includes(input.title)) throw new Error("유효한 직책을 입력해 주세요.");
    if (!input.jobFamily || !familyCodes.includes(input.jobFamily)) throw new Error("유효한 직군을 입력해 주세요.");
    if (!input.employeeType || !employeeTypes.includes(input.employeeType)) throw new Error("유효한 직원유형을 입력해 주세요.");
    if (!["재직", "휴직", "퇴직"].includes(input.status)) throw new Error("재직상태는 재직, 휴직, 퇴직 중 하나여야 합니다.");
    if (!input.hireDate) throw new Error("입사일을 입력해 주세요.");
    if (!input.birthDate) throw new Error("생년월일을 입력해 주세요.");
    if (!getOrgCodeByPath(input.hq, input.office, input.team, input.part)) throw new Error("조직코드에 없는 본부/실/팀/파트 조합입니다.");
    if (input.status === "퇴직" && !input.retireDate) throw new Error("퇴직 처리 시 퇴사일을 입력해 주세요.");
    if (input.status === "휴직" && !input.leaveItems.length) throw new Error("휴직 상태를 선택한 경우 휴직사항을 한 건 이상 입력해 주세요.");
    const employee = {
      id: input.id,
      name: input.name,
      hq: input.hq,
      office: input.office,
      team: input.team,
      part: input.part,
      hireHq: input.hireHq,
      hireOffice: input.hireOffice,
      hireTeam: input.hireTeam,
      hirePart: input.hirePart,
      grade: input.grade,
      hireGrade: input.hireGrade,
      title: input.title,
      jobFamily: input.jobFamily,
      employeeType: input.employeeType,
      contractPeriod: input.contractPeriod,
      birthDate: input.birthDate,
      hireDate: input.hireDate,
      phone: input.phone,
      companyPhone: input.companyPhone || "",
      companyEmail: input.companyEmail || `${normalizedNameToken(input.name || "user")}.${input.id.toLowerCase()}@autoplus.co.kr`,
      personalEmail: input.personalEmail || `${normalizedNameToken(input.name || "user")}@gmail.com`,
      address: input.address || "서울특별시",
      education: input.education || "미입력",
      status: input.status,
      retireDate: input.retireDate,
      careerMonths: input.careerMonths || "0",
      assignmentDate: input.assignmentDate || input.hireDate,
      memo: input.memo || "신규 등록 사원",
      groupwareId: input.groupwareId || `${input.id.toLowerCase()}.${(input.name || "user").replace(/\s+/g, "")}`,
      residentNumber: input.residentNumber || `${(input.birthDate.replace(/\./g, "")).slice(2)}-1234567`,
      maritalStatus: input.maritalStatus,
      hireEmployeeType: input.hireEmployeeType,
      hireJobFamily: input.hireJobFamily,
      hireOrgPathText: input.hireOrgPathText || buildOrgPathText([input.hireHq, input.hireOffice, input.hireTeam, input.hirePart]),
      leaveItems: input.leaveItems,
      history: [[input.hireDate, input.historyLabel]],
      educationHistory: [],
      educationItems: input.educationItems,
      careerHistory: input.careerHistory,
      familyItems: input.familyItems,
      certificateItems: input.certificateItems,
      awardItems: input.awardItems,
      promotionItems: [["입사", input.hireDate, input.hireOrgPathText || buildOrgPathText([input.hireHq, input.hireOffice, input.hireTeam, input.hirePart]), input.hireGrade, input.title, input.promotionLabel]],
      assignmentItems: [["입사", input.hireDate, input.hireOrgPathText || buildOrgPathText([input.hireHq, input.hireOffice, input.hireTeam, input.hirePart]), input.hireJobFamily || input.jobFamily, input.hireEmployeeType || input.employeeType, input.hireGrade, input.title, input.historyLabel]],
      photoDataUrl: input.photoDataUrl
    };
    syncEmployeeLeaveSummary(employee);
    employee.status = computeCurrentEmploymentStatus(employee, input.status, input.retireDate);
    if (input.status === "퇴직" && input.retireDate) employee.history.unshift([input.retireDate, "퇴직 처리"]);
    appendLeaveHistoryEntries(employee, input.leaveItems);
    if (!employee.educationItems.length) employee.educationItems = [["2015.03 ~ 2019.02", employee.education || "학력 정보 미입력"]];
    if (!employee.careerHistory.length) employee.careerHistory = [["2024.01 ~ 2026.03", "인정경력 산정 전 기본값"]];
    return employee;
  }
  function downloadEmployeeBatchTemplate() {
    if (!window.XLSX) {
      downloadTextFile("사원일괄등록_양식.csv", buildBatchTemplateCsv(), "text/csv;charset=utf-8");
      return;
    }
    const workbook = window.XLSX.utils.book_new();
    const templateSheet = window.XLSX.utils.json_to_sheet([buildBatchTemplateSampleRow()], { header: batchImportColumns.map((column) => column.label) });
    const guideSheet = window.XLSX.utils.json_to_sheet(getBatchTemplateGuideRows());
    const codeSheet = window.XLSX.utils.json_to_sheet(getBatchTemplateCodeRows());
    window.XLSX.utils.book_append_sheet(workbook, templateSheet, "사원일괄등록");
    window.XLSX.utils.book_append_sheet(workbook, guideSheet, "작성가이드");
    window.XLSX.utils.book_append_sheet(workbook, codeSheet, "기준코드");
    window.XLSX.writeFile(workbook, "사원일괄등록_양식.xlsx");
  }
  async function readEmployeeBatchWorkbook(file) {
    if (String(file?.name || "").toLowerCase().endsWith(".csv")) {
      return readEmployeeBatchCsv(file);
    }
    if (!window.XLSX) throw new Error("엑셀 라이브러리를 불러오지 못했습니다. CSV 양식으로 저장한 뒤 업로드하거나 네트워크 연결을 확인해 주세요.");
    const buffer = await file.arrayBuffer();
    const workbook = window.XLSX.read(buffer, { type: "array" });
    const sheetName = workbook.SheetNames.find((name) => name === "사원일괄등록") || workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    if (!sheet) throw new Error("업로드한 파일에서 읽을 시트를 찾지 못했습니다.");
    return window.XLSX.utils.sheet_to_json(sheet, { defval: "" });
  }
  function convertBatchRowToInput(row) {
    const mapped = {};
    batchImportColumns.forEach((column) => {
      mapped[column.key] = normalizeImportCell(row[column.label]);
    });
    const leaveItems = normalizeLeaveRows([[mapped.leaveType, mapped.leaveStartDate, mapped.leaveEndDate, mapped.leaveNote]]);
    return {
      id: mapped.id,
      name: mapped.name,
      groupwareId: mapped.groupwareId,
      residentNumber: mapped.residentNumber,
      hq: mapped.hq,
      office: mapped.office,
      team: mapped.team,
      part: mapped.part,
      hireHq: mapped.hq,
      hireOffice: mapped.office,
      hireTeam: mapped.team,
      hirePart: mapped.part,
      grade: mapped.grade,
      hireGrade: mapped.grade,
      title: mapped.title || "팀원",
      jobFamily: mapped.jobFamily,
      employeeType: mapped.employeeType,
      status: mapped.status || "재직",
      hireDate: mapped.hireDate,
      birthDate: mapped.birthDate,
      retireDate: mapped.retireDate,
      phone: mapped.phone,
      companyPhone: mapped.companyPhone,
      companyEmail: mapped.companyEmail,
      personalEmail: mapped.personalEmail,
      maritalStatus: mapped.maritalStatus || "미혼",
      education: mapped.education || "미입력",
      contractPeriod: mapped.contractPeriod,
      careerMonths: mapped.careerMonths || "0",
      assignmentDate: mapped.assignmentDate || mapped.hireDate,
      address: mapped.address || "서울특별시",
      memo: mapped.memo || "엑셀 일괄등록",
      hireEmployeeType: mapped.employeeType,
      hireJobFamily: mapped.jobFamily,
      leaveItems,
      educationItems: [],
      careerHistory: [],
      familyItems: [],
      certificateItems: [],
      awardItems: [],
      historyLabel: "엑셀 일괄 등록",
      promotionLabel: "엑셀 일괄 등록"
    };
  }
  async function importEmployeesFromBatchFile(file) {
    const rows = await readEmployeeBatchWorkbook(file);
    const dataRows = rows.filter((row) => Object.values(row).some((value) => normalizeImportCell(value)));
    if (!dataRows.length) throw new Error("업로드 파일에 등록할 데이터가 없습니다.");
    const seenIds = new Set(state.employees.map((employee) => employee.id));
    const batchIds = new Set();
    const createdEmployees = [];
    dataRows.forEach((row, index) => {
      const rowNumber = index + 2;
      const input = convertBatchRowToInput(row);
      batchImportColumns.filter((column) => column.required).forEach((column) => {
        if (!normalizeImportCell(row[column.label])) throw new Error(`${rowNumber}행: ${column.label}은(는) 필수입니다.`);
      });
      if (seenIds.has(input.id)) throw new Error(`${rowNumber}행: 이미 존재하는 사원번호입니다. (${input.id})`);
      if (batchIds.has(input.id)) throw new Error(`${rowNumber}행: 업로드 파일 내 사원번호가 중복되었습니다. (${input.id})`);
      const employee = buildEmployeeFromInput(input);
      batchIds.add(employee.id);
      seenIds.add(employee.id);
      createdEmployees.push(employee);
    });
    if (!createdEmployees.length) throw new Error("등록할 사원이 없습니다.");
    state.employees.unshift(...createdEmployees.reverse());
    state.selectedId = createdEmployees[0].id;
    syncEmployeeCodeRefs();
    renderAll();
    showHrView("directory");
    return createdEmployees;
  }
  function getCompanyEmail(employee) {
    return employee.companyEmail || `${normalizedNameToken(employee.name)}.${employee.id.toLowerCase()}@autoplus.co.kr`;
  }
  function getPersonalEmail(employee) {
    return employee.personalEmail || `${normalizedNameToken(employee.name)}@gmail.com`;
  }
  function getCompanyPhone(employee) {
    if (employee.companyPhone) return employee.companyPhone;
    const digits = employee.id.replace(/\D/g, "").slice(-4).padStart(4, "0");
    return `02-6200-${digits}`;
  }
  function getAddress(employee) {
    return employee.address || `서울특별시 ${employee.hq || "오토플러스"} ${deepestDept(employee)} ${employee.id.slice(-2)}호`;
  }
  function getGroupwareId(employee) {
    return employee.groupwareId || `${normalizedNameToken(employee.name)}.${employee.id.toLowerCase()}`;
  }
  function getResidentNumber(employee) {
    if (employee.residentNumber) return employee.residentNumber;
    const birth = (employee.birthDate || "").replace(/\./g, "");
    const yy = birth.slice(2, 6);
    const tail = String((Number(employee.id.replace(/\D/g, "")) % 9000000) + 1000000);
    return `${yy}-${tail}`;
  }
  function getMaritalStatus(employee) {
    if (employee.maritalStatus) return employee.maritalStatus;
    const numeric = Number(employee.id.replace(/\D/g, "")) || 0;
    return numeric % 3 === 0 ? "기혼" : "미혼";
  }
  function getTenureText(employee) {
    const hire = parseDateParts(employee.hireDate);
    const current = parseDateParts(completeDateInput(String(getCurrentBaseDateValue())));
    if (!hire.year || !hire.month || !current.year || !current.month) return "-";
    let months = (current.year - hire.year) * 12 + (current.month - hire.month);
    if ((current.day || 1) < (hire.day || 1)) months -= 1;
    if (months < 0) months = 0;
    return `${Math.floor(months / 12)}년 ${months % 12}개월`;
  }
  function getPrimaryDuty(employee) {
    const latestCareer = getCareerHistory(employee)[0]?.[1];
    return latestCareer || employee.memo || `${deepestDept(employee)} 담당`;
  }
  function getLeaveType(employee) {
    const entry = getMostRelevantLeaveEntry(employee);
    if (entry?.[0]) return entry[0];
    if (employee.leaveType) return employee.leaveType;
    const numeric = Number(employee.id.replace(/\D/g, "")) || 0;
    return ["육아휴직", "질병휴직", "가사휴직", "학업휴직"][numeric % 4];
  }
  function getLeaveStartDate(employee) {
    const entry = getMostRelevantLeaveEntry(employee);
    if (entry?.[1]) return entry[1];
    if (employee.leaveStartDate) return employee.leaveStartDate;
    if (employee.status !== "휴직") return "";
    return employee.assignmentDate || employee.hireDate;
  }
  function getLeaveEndDate(employee) {
    const entry = getMostRelevantLeaveEntry(employee);
    if (entry?.[2]) return entry[2];
    if (employee.leaveEndDate) return employee.leaveEndDate;
    if (employee.status !== "휴직") return "";
    const { year, month } = parseDateParts(getLeaveStartDate(employee));
    if (!year || !month) return "";
    const endMonth = ((month + 5 - 1) % 12) + 1;
    const carry = month + 5 > 12 ? 1 : 0;
    return `${year + carry}.${String(endMonth).padStart(2, "0")}.28`;
  }
  function getCareerHistory(employee) {
    if (employee.careerHistory?.length) return employee.careerHistory;
    const beforeHireYear = Math.max(parseDateParts(employee.hireDate).year - 1, 2010);
    return [
      [`${beforeHireYear}.01 ~ ${beforeHireYear}.12`, `${employee.jobFamily} 경력 인정 (${employee.careerMonths}개월)`],
      [`${beforeHireYear - 2}.03 ~ ${beforeHireYear - 1}.12`, `${employee.jobFamily} 유관업무 수행`]
    ];
  }
  function getEducationEntries(employee) {
    if (employee.educationItems?.length) return employee.educationItems;
    const base = employee.education || "학력 정보 미입력";
    const [school = "", major = ""] = base.split(" ");
    return [
      [`2012.03 ~ 2016.02`, `${school} ${major}`.trim()],
      [`2009.03 ~ 2012.02`, "고등학교 졸업"]
    ];
  }
  function getFamilyEntries(employee) {
    if (employee.familyItems?.length) return employee.familyItems;
    return [
      ["배우자", `${employee.name.slice(0, 1)}서연`, "1990.05.12"],
      ["자녀", `${employee.name.slice(0, 1)}하린`, "2019.09.21"]
    ];
  }
  function getCertificateEntries(employee) {
    if (employee.certificateItems?.length) return employee.certificateItems;
    return [
      ["직무 자격", `${employee.jobFamily} 전문 자격`, "한국산업인력공단", "2022.06.01"],
      ["공통 자격", "사무능력 인증", "민간기관", "2021.04.15"]
    ];
  }
  function getAwardEntries(employee) {
    if (employee.awardItems?.length) return employee.awardItems;
    return [
      ["포상", "우수사원", "2024.12.31", "성과 기여"],
      ["상벌", "무사고 근속", "2023.12.31", "근태 우수"]
    ];
  }
  function getPromotionEntries(employee) {
    if (employee.promotionItems?.length) return employee.promotionItems;
    return [
      ["정기승급", employee.assignmentDate, deepestDept(employee), employee.grade, employee.title, "정기 반영"],
      ["입사", employee.hireDate, employee.hq || "오토플러스", employee.hireGrade, employee.title, "신규 입사"]
    ];
  }
  function getAssignmentEntries(employee) {
    if (employee.assignmentItems?.length) return employee.assignmentItems.map((row) => [...row]);
    const historyRows = employee.history || [];
    return historyRows.map((item, index) => {
      const hireRow = index === historyRows.length - 1;
      return [
        hireRow ? "입사" : "발령",
        item[0],
        hireRow ? hireEmployeePath(employee) : employeePath(employee),
        hireRow ? employee.hireJobFamily || employee.jobFamily : employee.jobFamily,
        hireRow ? employee.hireEmployeeType || employee.employeeType : employee.employeeType,
        hireRow ? employee.hireGrade : employee.grade,
        employee.title,
        item[1]
      ];
    });
  }
  function inferAssignmentDeptFromText(text, fallback = "") {
    const note = String(text || "").trim();
    if (!note) return fallback;
    const resolveDeptLabel = (value) => {
      const label = String(value || "").trim();
      if (!label) return fallback;
      const exactRows = getActiveOrgRows().filter((row) => getOrgRowName(row) === label);
      if (exactRows.length === 1) return getOrgRowPath(exactRows[0]);
      return label;
    };
    const moved = note.match(/→\s*([^,()]+?)(?:\s+(?:이동|배치|승진|전환|발령)|$)/);
    if (moved?.[1]) return resolveDeptLabel(moved[1]);
    const assigned = note.match(/^(.+?)\s+(?:배치|승진|전환|발령)/);
    if (assigned?.[1]) return resolveDeptLabel(assigned[1]);
    const hired = note.match(/입사\s*\(([^)]+)\)/);
    if (hired?.[1]) return resolveDeptLabel(hired[1]);
    return fallback;
  }
  function inferAssignmentGradeFromText(text, fallback = "") {
    const note = String(text || "");
    const matched = gradeCodes.find((item) => note.includes(item));
    return matched || fallback;
  }
  function inferAssignmentTitleFromText(text, fallback = "") {
    const note = String(text || "");
    const matched = titleCodes.find((item) => note.includes(item));
    return matched || fallback;
  }
  function ensureAssignmentItemSnapshots(employee, currentSnapshot = {}) {
    const historyRows = employee.history || [];
    employee.assignmentItems = employee.assignmentItems || [];
    if (employee.assignmentItems.length >= historyRows.length) return;
    const fallbackSnapshot = {
      dept: currentSnapshot.dept || employeePath(employee) || "조직 없음",
      jobFamily: currentSnapshot.jobFamily || employee.jobFamily || "",
      employeeType: currentSnapshot.employeeType || employee.employeeType || "",
      grade: currentSnapshot.grade || employee.grade || "",
      title: currentSnapshot.title || employee.title || ""
    };
    const migrated = historyRows.map((item, index) => {
      const hireRow = index === historyRows.length - 1;
      const note = item?.[1] || "";
      if (hireRow) {
        return [
          "입사",
          item?.[0] || employee.hireDate || "",
          hireEmployeePath(employee),
          employee.hireJobFamily || employee.jobFamily || "",
          employee.hireEmployeeType || employee.employeeType || "",
          employee.hireGrade || employee.grade || "",
          employee.title || "",
          note
        ];
      }
      return [
        "발령",
        item?.[0] || "",
        inferAssignmentDeptFromText(note, fallbackSnapshot.dept),
        fallbackSnapshot.jobFamily,
        fallbackSnapshot.employeeType,
        inferAssignmentGradeFromText(note, fallbackSnapshot.grade),
        inferAssignmentTitleFromText(note, fallbackSnapshot.title),
        note
      ];
    });
    employee.assignmentItems = migrated;
  }
  function cloneMatrixRows(rows, columns = 0) {
    return (rows || [])
      .map((row) => Array.isArray(row) ? row.map((value) => String(value ?? "")) : [])
      .map((row) => {
        if (!columns) return row;
        const next = [...row];
        while (next.length < columns) next.push("");
        return next.slice(0, columns);
      });
  }
  function cloneEmployeeSnapshot(employee) {
    return {
      ...employee,
      history: cloneMatrixRows(employee.history, 2),
      educationHistory: cloneMatrixRows(employee.educationHistory, 2),
      educationItems: cloneMatrixRows(employee.educationItems, 2),
      careerHistory: cloneMatrixRows(employee.careerHistory, 2),
      familyItems: cloneMatrixRows(employee.familyItems, 3),
      certificateItems: cloneMatrixRows(employee.certificateItems, 4),
      awardItems: cloneMatrixRows(employee.awardItems, 4),
      promotionItems: cloneMatrixRows(employee.promotionItems, 6),
      assignmentItems: cloneMatrixRows(employee.assignmentItems, 8),
      leaveItems: cloneMatrixRows(employee.leaveItems, 4)
    };
  }
  function historyList(items, tone = "default") {
    return `<div class="codex-history-scroll">${items.map((item, index) => `<div class="hr-timeline-item"><div class="hr-timeline-dot ${tone === "education" ? "dot-education" : tone === "career" ? "dot-career" : ""}" style="${tone === "education" ? "" : tone === "career" ? "" : index === 1 ? "background:#7c5cfc" : index === 2 ? "background:#38d9a9" : ""}"></div><div class="hr-timeline-date">${item[0]}</div><div class="hr-timeline-text">${item[1]}</div></div>`).join("")}</div>`;
  }
  function previewGrid(headers, rows) {
    return `<div class="codex-sheet-preview"><table><thead><tr>${headers.map((header) => `<th>${header}</th>`).join("")}</tr></thead><tbody>${rows.map((row) => `<tr>${headers.map((_, index) => `<td>${row[index] || ""}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
  }
  function buildSheetSection(title, tabId, headers, rows, active = false) {
    return `<div class="codex-sheet-section ${active ? "is-active" : ""}"><div class="codex-sheet-side"><div>${title}</div><button type="button" class="codex-sheet-detail-btn" data-record-detail="${tabId}">상세보기</button></div><div class="codex-sheet-main">${previewGrid(headers, rows)}</div></div>`;
  }
  function sheetFieldTable(rows) {
    return `<div class="codex-sheet-focus"><table><tbody>${rows.map((row) => `<tr><th>${row[0] || ""}</th><td>${row[1] || ""}</td><th>${row[2] || ""}</th><td>${row[3] || ""}</td></tr>`).join("")}</tbody></table></div>`;
  }
  function renderLabeledValueList(items) {
    return `<div class="codex-hire-card-list">${items.map((item) => `<div class="codex-hire-card-item"><span class="codex-hire-card-label">${item[0]}</span><strong class="codex-hire-card-value">${item[1] || "-"}</strong></div>`).join("")}</div>`;
  }
  function renderHireInfoBlock(employee) {
    const currentEmployeeType = employee.employeeType || "-";
    const currentFamily = employee.jobFamily || "-";
    const hireEmployeeType = employee.hireEmployeeType || currentEmployeeType;
    const hireFamily = employee.hireJobFamily || currentFamily;
    const hirePath = hireEmployeePath(employee) || "-";
    return `<div class="codex-hire-card-grid">
      <section class="codex-hire-card">
        <div class="codex-hire-card-head">입사 기본정보</div>
        ${renderLabeledValueList([
          ["입사일", employee.hireDate],
          ["퇴사일", employee.retireDate || "-"],
          ["인정경력", `${employee.careerMonths}개월`],
          ["계약기간", currentEmployeeType === "계약직" ? employee.contractPeriod || "-" : "-"],
          ["그룹웨어 ID", employee.groupwareId || getGroupwareId(employee)]
        ])}
      </section>
      <section class="codex-hire-card codex-hire-card-accent">
        <div class="codex-hire-card-head">입사시 기준정보</div>
        ${renderLabeledValueList([
          ["입사시 소속", hirePath],
          ["입사시 직급", employee.hireGrade || employee.grade],
          ["입사시 직원유형", hireEmployeeType],
          ["입사시 직군", hireFamily]
        ])}
      </section>
    </div>`;
  }
  function serializeRows(rows) {
    return (rows || []).map((row) => (row || []).join(" | ")).join("\n");
  }
  function parseRows(text, columns) {
    return (text || "")
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => {
        const parts = line.split("|").map((part) => part.trim());
        while (parts.length < columns) parts.push("");
        return parts.slice(0, columns);
      });
  }
  function getRepeatableFieldConfig(key, index) {
    const configs = {
      createEducation: { 1: { format: "period" } },
      education: { 1: { format: "period" } },
      createCareer: { 1: { format: "period" } },
      career: { 1: { format: "period" } },
      createFamilyRows: {
        0: { type: "select", options: ["배우자", "부", "모", "자", "자녀", "형제", "자매", "기타"] },
        2: { format: "date" }
      },
      family: {
        0: { type: "select", options: ["배우자", "부", "모", "자", "자녀", "형제", "자매", "기타"] },
        2: { format: "date" }
      },
      createCertificate: { 2: { format: "date" } },
      certificate: { 2: { format: "date" } },
      createLeave: {
        0: { type: "select", options: ["육아휴직", "질병휴직", "가사휴직", "학업휴직", "출산휴가", "병가", "기타"] },
        1: { format: "date" },
        2: { format: "date" }
      },
      leave: {
        0: { type: "select", options: ["육아휴직", "질병휴직", "가사휴직", "학업휴직", "출산휴가", "병가", "기타"] },
        1: { format: "date" },
        2: { format: "date" }
      },
      award: { 2: { format: "date" } },
      promotion: { 1: { format: "date" } },
      assignmentHistory: { 1: { format: "date" } },
      history: { 0: { format: "date" } },
      training: { 1: { format: "date" }, 2: { format: "date" } }
    };
    return configs[key]?.[index] || {};
  }
  function repeatableFieldHtml(key, column, index, value = "") {
    const config = getRepeatableFieldConfig(key, index);
    if (config.type === "select") {
      return `<select data-repeatable-input="${key}" data-col-index="${index}"><option value="">${column}</option>${config.options.map((item) => `<option value="${item}" ${item === value ? "selected" : ""}>${item}</option>`).join("")}</select>`;
    }
    const formatAttr = config.format ? ` data-format="${config.format}"` : "";
    return `<input type="text" data-repeatable-input="${key}" data-col-index="${index}"${formatAttr} placeholder="${column}" value="${value || ""}">`;
  }
  function repeatableRowHtml(key, columns, values = []) {
    return `<div class="codex-repeatable-row" data-repeatable-row="${key}">${columns.map((column, index) => repeatableFieldHtml(key, column, index, values[index] || "")).join("")}<button type="button" class="hr-btn btn-outline codex-repeatable-remove" data-remove-repeatable="${key}">삭제</button></div>`;
  }
  function repeatableEditorHtml(title, key, columns, rows) {
    const safeRows = rows?.length ? rows : [new Array(columns.length).fill("")];
    return `<div class="codex-repeatable-editor span-2" data-repeatable-editor="${key}" data-columns="${columns.length}"><div class="codex-repeatable-head"><strong>${title}</strong><button type="button" class="hr-btn btn-outline" data-add-repeatable="${key}">행 추가</button></div><div class="codex-repeatable-columns">${columns.map((column) => `<span>${column}</span>`).join("")}<span>관리</span></div><div class="codex-repeatable-body">${safeRows.map((row) => repeatableRowHtml(key, columns, row)).join("")}</div></div>`;
  }
  function bindRepeatableEditors(root) {
    $$("[data-add-repeatable]", root).forEach((button) => {
      button.addEventListener("click", () => {
        const key = button.dataset.addRepeatable;
        const editor = $(`[data-repeatable-editor="${key}"]`, root);
        const columns = Number(editor?.dataset.columns || 0);
        const labels = $$(`.codex-repeatable-columns span`, editor).slice(0, columns).map((node) => node.textContent.trim());
        $(".codex-repeatable-body", editor)?.insertAdjacentHTML("beforeend", repeatableRowHtml(key, labels));
      });
    });
    root.addEventListener("click", (event) => {
      const remove = event.target.closest("[data-remove-repeatable]");
      if (!remove) return;
      const key = remove.dataset.removeRepeatable;
      const editor = $(`[data-repeatable-editor="${key}"]`, root);
      const rows = $$(`[data-repeatable-row="${key}"]`, editor);
      if (rows.length <= 1) {
        $$(`[data-repeatable-input="${key}"]`, rows[0]).forEach((input) => {
          input.value = "";
        });
        return;
      }
      remove.closest(`[data-repeatable-row="${key}"]`)?.remove();
    });
    root.addEventListener("input", (event) => {
      const input = event.target.closest("[data-repeatable-input][data-format]");
      if (!input) return;
      if (input.dataset.format === "date") input.value = formatDateInput(input.value);
      if (input.dataset.format === "period") input.value = formatPeriodInput(input.value);
    });
    root.addEventListener("blur", (event) => {
      const input = event.target.closest("[data-repeatable-input][data-format]");
      if (!input) return;
      if (input.dataset.format === "date") input.value = completeDateInput(input.value);
      if (input.dataset.format === "period") input.value = completePeriodInput(input.value);
    }, true);
  }
  function collectRepeatableRows(root, key, columns) {
    return $$(`[data-repeatable-row="${key}"]`, root).map((row) => Array.from({ length: columns }, (_, index) => $(`[data-repeatable-input="${key}"][data-col-index="${index}"]`, row)?.value.trim() || "")).filter((values) => values.some(Boolean));
  }
  function syncCreateHireFields() {
    syncOrgPicker(createModal.body, "createHire", {
      hq: $("#createHq", createModal.body)?.value || "",
      office: $("#createOffice", createModal.body)?.value || "",
      team: $("#createTeam", createModal.body)?.value || "",
      part: $("#createPart", createModal.body)?.value || ""
    });
    const mappings = [
      ["#createGrade", "#createHireGrade"],
      ["#createEmployeeType", "#createHireEmployeeType"],
      ["#createFamily", "#createHireFamily"],
      ["#createHq", "#createHireHq"],
      ["#createOffice", "#createHireOffice"],
      ["#createTeam", "#createHireTeam"],
      ["#createPart", "#createHirePart"]
    ];
    mappings.forEach(([sourceSelector, targetSelector]) => {
      const source = $(sourceSelector, createModal.body);
      const target = $(targetSelector, createModal.body);
      if (source && target) target.value = source.value;
    });
  }
  function bindCreateAutoSync() {
    ["#createGrade", "#createEmployeeType", "#createFamily", "#createHq", "#createOffice", "#createTeam", "#createPart"].forEach((selector) => {
      $(selector, createModal.body)?.addEventListener("input", syncCreateHireFields);
      $(selector, createModal.body)?.addEventListener("change", syncCreateHireFields);
    });
    syncCreateHireFields();
  }
  function bindPhotoUpload(root, inputSelector, previewSelector, initialValue = "") {
    root.dataset.photoDataUrl = initialValue || "";
    const preview = $(previewSelector, root);
    const renderPreview = (value) => {
      if (!preview) return;
      preview.innerHTML = value
        ? `<img src="${value}" alt="증명사진 미리보기">`
        : `<div class="codex-photo-placeholder">증명사진<br>미리보기</div>`;
    };
    renderPreview(root.dataset.photoDataUrl || "");
    $(inputSelector, root)?.addEventListener("change", (event) => {
      const file = event.target.files?.[0];
      if (!file) {
        renderPreview(root.dataset.photoDataUrl || "");
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        root.dataset.photoDataUrl = String(reader.result || "");
        renderPreview(root.dataset.photoDataUrl);
      };
      reader.readAsDataURL(file);
    });
  }
  function bindInputFormatters(root) {
    const bindDate = (selector) => {
      const input = $(selector, root);
      if (!input) return;
      input.addEventListener("input", () => { input.value = formatDateInput(input.value); });
      input.addEventListener("blur", () => { input.value = completeDateInput(input.value); });
    };
    const bindPhone = (selector) => {
      const input = $(selector, root);
      if (!input) return;
      input.addEventListener("input", () => { input.value = formatPhoneInput(input.value); });
    };
    const bindResident = (selector) => {
      const input = $(selector, root);
      if (!input) return;
      input.addEventListener("input", () => { input.value = formatResidentNumber(input.value); });
    };
    ["#createHireDate", "#createBirthDate", "#createAssignmentDate", "#createRetireDate", "#editHireDate", "#editBirthDate", "#editAssignmentDate", "#editRetireDate"].forEach(bindDate);
    ["#createPhone", "#createCompanyPhone", "#editPhone", "#editCompanyPhone"].forEach(bindPhone);
    ["#createResidentNumber", "#editResidentNumber"].forEach(bindResident);
  }
  function appendAssignmentDrivenHistory(employee, payload) {
    const { type, assignDate, reason, nextDept, nextGrade, nextTitle, nextStatus, previousSnapshot } = payload;
    employee.history = employee.history || [];
    employee.promotionItems = employee.promotionItems || [];
    employee.assignmentItems = employee.assignmentItems || [];
    employee.awardItems = employee.awardItems || [];
    ensureAssignmentItemSnapshots(employee, previousSnapshot || {});
    employee.history.unshift([assignDate, `${type} 반영 - ${reason}`]);
    employee.promotionItems.unshift([type === "승진" ? "승진" : "인사변동", assignDate, nextDept, nextGrade, nextTitle, reason]);
    employee.assignmentItems.unshift([type || "발령", assignDate, nextDept, employee.jobFamily || "", employee.employeeType || "", nextGrade, nextTitle, reason]);
    employee.awardItems.unshift([type === "승진" ? "포상" : "인사처리", `${type}${nextStatus === "휴직" ? " / 휴직전환" : ""}`, assignDate, reason]);
  }
  function getHireStatEmployees(mode) {
    return state.employees.filter((employee) => {
      const { year, month } = parseDateParts(employee.hireDate);
      if (!year || !month) return false;
      if (mode === "month") return year === state.hireStatYear && month === state.hireStatMonth;
      if (mode === "quarter") return year === state.hireStatYear && month >= ((state.hireStatQuarter - 1) * 3 + 1) && month <= (state.hireStatQuarter * 3);
      if (mode === "half") return year === state.hireStatYear && month >= (state.hireStatHalf === 1 ? 1 : 7) && month <= (state.hireStatHalf === 1 ? 6 : 12);
      return year === state.hireStatYear;
    });
  }
  function getRetireStatEmployees(mode) {
    return state.employees.filter((employee) => {
      const { year, month } = parseDateParts(employee.retireDate);
      if (!employee.retireDate || !year || !month) return false;
      if (mode === "month") return year === state.hireStatYear && month === state.hireStatMonth;
      if (mode === "quarter") return year === state.hireStatYear && month >= ((state.hireStatQuarter - 1) * 3 + 1) && month <= (state.hireStatQuarter * 3);
      if (mode === "half") return year === state.hireStatYear && month >= (state.hireStatHalf === 1 ? 1 : 7) && month <= (state.hireStatHalf === 1 ? 6 : 12);
      return year === state.hireStatYear;
    });
  }
  function getLeaveStatEvents(employee) {
    return getLeaveEntries(employee).flatMap((row) => {
      const type = row[0] || "휴직";
      const period = `${row[1] || "-"}${row[2] ? ` ~ ${row[2]}` : ""}`;
      const events = [];
      if (row[1]) events.push({ date: row[1], label: `${type} 시작 (${period})` });
      if (row[2]) events.push({ date: row[2], label: `${type} 종료 (${period})` });
      return events;
    });
  }
  function matchesPeriod(year, month, mode, selectedYear, selectedMonth, selectedQuarter, selectedHalf) {
    if (!year || !month) return false;
    if (mode === "month") return year === selectedYear && month === selectedMonth;
    if (mode === "quarter") return year === selectedYear && month >= ((selectedQuarter - 1) * 3) + 1 && month <= selectedQuarter * 3;
    if (mode === "half") return year === selectedYear && month >= (selectedHalf === 1 ? 1 : 7) && month <= (selectedHalf === 1 ? 6 : 12);
    return year === selectedYear;
  }
  function getLeaveStatEmployees(mode) {
    if (mode === "current") return state.employees.filter((employee) => isCurrentlyOnLeave(employee));
    return state.employees.filter((employee) => getLeaveStatEvents(employee).some((event) => {
      const { year, month } = parseDateParts(event.date);
      return matchesPeriod(year, month, mode, state.leaveStatYear, state.leaveStatMonth, state.leaveStatQuarter, state.leaveStatHalf);
    }));
  }
  function getHireStatLabel(mode) {
    if (mode === "month") return `${state.hireStatYear}년 ${state.hireStatMonth}월 기준`;
    if (mode === "quarter") return `${state.hireStatYear}년 ${state.hireStatQuarter}분기 기준`;
    if (mode === "half") return `${state.hireStatYear}년 ${state.hireStatHalf === 1 ? "상반기" : "하반기"} 기준`;
    return `${state.hireStatYear}년 연간 기준`;
  }
  function getLeaveStatLabel(mode) {
    if (mode === "current") return "현재 기준";
    if (mode === "month") return `${state.leaveStatYear}년 ${state.leaveStatMonth}월 기준`;
    if (mode === "quarter") return `${state.leaveStatYear}년 ${state.leaveStatQuarter}분기 기준`;
    if (mode === "half") return `${state.leaveStatYear}년 ${state.leaveStatHalf === 1 ? "상반기" : "하반기"} 기준`;
    return `${state.leaveStatYear}년 연간 기준`;
  }
  function renderEmployeeList(items, mode = "default") {
    if (!items.length) return `<div class="codex-note-box"><strong>대상자 없음</strong>선택한 조건에 해당하는 대상자가 없습니다.</div>`;
    if (mode === "leave") {
      return `<table><thead><tr><th>사번</th><th>성명</th><th>소속</th><th>휴직유형</th><th>휴직기간</th><th>휴직단계</th><th>재직상태</th></tr></thead><tbody>${items.map((employee) => { const leaveSummary = getEmployeeLeaveSummary(employee); return `<tr data-stat-employee="${employee.id}" class="${state.statModalSelection === employee.id ? "codex-table-selected" : ""}" style="cursor:pointer"><td>${employee.id}</td><td>${employee.name}</td><td>${employeePath(employee)}</td><td>${leaveSummary.type}</td><td>${leaveSummary.period}</td><td>${leaveSummary.phase}</td><td>${getDisplayStatus(employee)}</td></tr>`; }).join("")}</tbody></table>`;
    }
    if (mode === "retire") {
      return `<table><thead><tr><th>사번</th><th>성명</th><th>소속</th><th>직급</th><th>퇴사일</th><th>상태</th></tr></thead><tbody>${items.map((employee) => `<tr data-stat-employee="${employee.id}" class="${state.statModalSelection === employee.id ? "codex-table-selected" : ""}" style="cursor:pointer"><td>${employee.id}</td><td>${employee.name}</td><td>${employeePath(employee)}</td><td>${employee.grade}</td><td>${employee.retireDate || "-"}</td><td>${getDisplayStatus(employee)}</td></tr>`).join("")}</tbody></table>`;
    }
    return `<table><thead><tr><th>사번</th><th>성명</th><th>소속</th><th>직급</th><th>입사일</th><th>상태</th></tr></thead><tbody>${items.map((employee) => `<tr data-stat-employee="${employee.id}" class="${state.statModalSelection === employee.id ? "codex-table-selected" : ""}" style="cursor:pointer"><td>${employee.id}</td><td>${employee.name}</td><td>${employeePath(employee)}</td><td>${employee.grade}</td><td>${employee.hireDate}</td><td>${getDisplayStatus(employee)}</td></tr>`).join("")}</tbody></table>`;
  }
  function syncViewQuery(view) {
    const url = new URL(window.location.href);
    url.searchParams.set("view", view);
    url.searchParams.set("employeeId", state.selectedId);
    window.history.replaceState({}, "", url.toString());
  }
  function openRecordInNewTab(employeeId) {
    const url = new URL(window.location.href);
    url.searchParams.set("view", "record");
    url.searchParams.set("employeeId", employeeId);
    window.open(url.toString(), "_blank");
  }
  function getDirectoryFilteredEmployees() {
    const keyword = state.directorySearchText.trim().toLowerCase();
    const sourceEmployees = getCurrentDirectoryAccessibleEmployees();
    const scopedEmployees = state.directoryStatus === "퇴직"
      ? sourceEmployees.filter((employee) => getDisplayStatus(employee) === "퇴직")
      : sourceEmployees.filter((employee) => getDisplayStatus(employee) !== "퇴직");
    const filtered = scopedEmployees.filter((employee) => {
      const dept = deepestDept(employee);
      const deptPath = employeePath(employee);
      const hireDateValue = Number((employee.hireDate || "").replace(/\D/g, ""));
      const hireDateFrom = Number((state.directoryHireDateFrom || "").replace(/\D/g, ""));
      const hireDateTo = Number((state.directoryHireDateTo || "").replace(/\D/g, ""));
      const retireDateValue = Number((employee.retireDate || "").replace(/\D/g, ""));
      const retireDateFrom = Number((state.directoryRetireDateFrom || "").replace(/\D/g, ""));
      const retireDateTo = Number((state.directoryRetireDateTo || "").replace(/\D/g, ""));
      const textMatched = !keyword || [employee.id, employee.name, dept, deptPath, employee.grade, employee.title, getCompanyEmail(employee), employee.phone].filter(Boolean).join(" ").toLowerCase().includes(keyword);
      const deptMatched = !state.directoryDept.length || state.directoryDept.some((item) => deptPath.includes(item) || dept === item || employee.hq === item || employee.office === item || employee.team === item || employee.part === item);
      const gradeMatched = !state.directoryGrade.length || state.directoryGrade.includes(employee.grade);
      const statusMatched = !state.directoryStatus || getDisplayStatus(employee) === state.directoryStatus;
      const hireDateFromMatched = !hireDateFrom || (hireDateValue && hireDateValue >= hireDateFrom);
      const hireDateToMatched = !hireDateTo || (hireDateValue && hireDateValue <= hireDateTo);
      const retireDateFromMatched = !retireDateFrom || (retireDateValue && retireDateValue >= retireDateFrom);
      const retireDateToMatched = !retireDateTo || (retireDateValue && retireDateValue <= retireDateTo);
      return textMatched && deptMatched && gradeMatched && statusMatched && hireDateFromMatched && hireDateToMatched && retireDateFromMatched && retireDateToMatched;
    });
    if (!state.directorySorts.length) return filtered;
    const sorted = [...filtered].sort((a, b) => {
      for (const sortItem of state.directorySorts) {
        const factor = sortItem.order;
        const statusA = getDisplayStatus(a);
        const statusB = getDisplayStatus(b);
        let result = 0;
        if (sortItem.key === "id") result = a.id.localeCompare(b.id, "ko");
        else if (sortItem.key === "name") result = a.name.localeCompare(b.name, "ko");
        else if (sortItem.key === "dept") result = deepestDept(a).localeCompare(deepestDept(b), "ko");
        else if (sortItem.key === "grade") result = a.grade.localeCompare(b.grade, "ko");
        else if (sortItem.key === "hireDate") result = parseDateValue(a.hireDate) - parseDateValue(b.hireDate);
        else if (sortItem.key === "status") result = statusA.localeCompare(statusB, "ko");
        if (result !== 0) return factor * result;
      }
      return 0;
    });
    return sorted;
  }
  function chipHtml(items, type) {
    return items.length ? `<div class="codex-chip-input-row">${items.map((item) => `<button type="button" class="codex-chip-item" data-chip-remove="${type}" data-chip-value="${item}">${item}<span>×</span></button>`).join("")}</div>` : "";
  }
  function suggestionListHtml(items, type) {
    return items.length ? `<div class="codex-search-suggestions">${items.map((item) => `<button type="button" class="codex-search-suggestion" data-suggestion-type="${type}" data-suggestion-value="${item}">${item}</button>`).join("")}</div>` : "";
  }
  function formatDateInput(value) {
    const digits = (value || "").replace(/\D/g, "").slice(0, 8);
    if (digits.length <= 4) return digits;
    if (digits.length <= 6) return `${digits.slice(0, 4)}.${digits.slice(4)}`;
    return `${digits.slice(0, 4)}.${digits.slice(4, 6)}.${digits.slice(6, 8)}`;
  }
  function completeDateInput(value) {
    const digits = (value || "").replace(/\D/g, "").slice(0, 8);
    if (!digits) return "";
    if (digits.length <= 4) return `${digits.slice(0, 4)}.01.01`;
    if (digits.length <= 6) return `${digits.slice(0, 4)}.${digits.slice(4, 6).padEnd(2, "0")}.01`;
    return `${digits.slice(0, 4)}.${digits.slice(4, 6)}.${digits.slice(6, 8).padEnd(2, "0")}`;
  }
  function formatPhoneInput(value) {
    const digits = (value || "").replace(/\D/g, "").slice(0, 11);
    if (!digits) return "";
    if (digits.startsWith("02")) {
      if (digits.length <= 2) return digits;
      if (digits.length <= 5) return `${digits.slice(0, 2)}-${digits.slice(2)}`;
      if (digits.length <= 9) return `${digits.slice(0, 2)}-${digits.slice(2, digits.length - 4)}-${digits.slice(-4)}`;
      return `${digits.slice(0, 2)}-${digits.slice(2, 6)}-${digits.slice(6, 10)}`;
    }
    if (digits.length <= 3) return digits;
    if (digits.length <= 7) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
    return `${digits.slice(0, 3)}-${digits.slice(3, digits.length - 4)}-${digits.slice(-4)}`;
  }
  function formatResidentNumber(value) {
    const digits = (value || "").replace(/\D/g, "").slice(0, 13);
    if (digits.length <= 6) return digits;
    return `${digits.slice(0, 6)}-${digits.slice(6)}`;
  }
  function formatPeriodInput(value) {
    const digits = (value || "").replace(/\D/g, "").slice(0, 16);
    if (!digits) return "";
    if (digits.length <= 8) return formatDateInput(digits);
    return `${formatDateInput(digits.slice(0, 8))} ~ ${formatDateInput(digits.slice(8))}`;
  }
  function completePeriodInput(value) {
    const digits = (value || "").replace(/\D/g, "").slice(0, 16);
    if (!digits) return "";
    if (digits.length <= 8) return completeDateInput(digits);
    return `${completeDateInput(digits.slice(0, 8))} ~ ${completeDateInput(digits.slice(8))}`;
  }
  function getActiveOrgRows() {
    return state.orgBlueprint.filter((row) => row.active !== false && !isRootOrgRow(row));
  }
  function getUniqueSorted(values) {
    return Array.from(new Set(values.filter(Boolean))).sort((a, b) => a.localeCompare(b, "ko"));
  }
  function getOrgPickerOptions(hq = "", office = "", team = "") {
    const rows = getActiveOrgRows();
    const hqs = getUniqueSorted(rows.map((row) => row.hq));
    const offices = hq ? getUniqueSorted(rows.filter((row) => row.hq === hq).map((row) => row.office)) : [];
    const teams = hq && office ? getUniqueSorted(rows.filter((row) => row.hq === hq && row.office === office).map((row) => row.team)) : [];
    const parts = hq && office && team ? getUniqueSorted(rows.filter((row) => row.hq === hq && row.office === office && row.team === team).map((row) => row.part)) : [];
    return { hqs, offices, teams, parts };
  }
  function buildSelectOptions(options, current = "", placeholder = "선택") {
    const normalizedCurrent = (current || "").trim();
    const uniqueOptions = [...new Set(options.filter(Boolean))];
    const items = [`<option value="">${placeholder}</option>`];
    if (normalizedCurrent && !uniqueOptions.includes(normalizedCurrent)) {
      items.push(`<option value="${normalizedCurrent}" selected>${normalizedCurrent}</option>`);
    }
    uniqueOptions.forEach((option) => {
      items.push(`<option value="${option}" ${option === normalizedCurrent ? "selected" : ""}>${option}</option>`);
    });
    return items.join("");
  }
  function renderOrgPicker(prefix, values = {}, disabled = false, disabledClass = "") {
    const stateValues = {
      hq: values.hq || "",
      office: values.office || "",
      team: values.team || "",
      part: values.part || ""
    };
    const options = getOrgPickerOptions(stateValues.hq, stateValues.office, stateValues.team);
    const disabledAttr = disabled ? "disabled" : "";
    return `<label class="${disabledClass}"><span>본부</span><select id="${prefix}Hq" ${disabledAttr}>${buildSelectOptions(options.hqs, stateValues.hq)}</select></label>
<label class="${disabledClass}"><span>실</span><select id="${prefix}Office" ${disabledAttr}>${buildSelectOptions(options.offices, stateValues.office)}</select></label>
<label class="${disabledClass}"><span>팀</span><select id="${prefix}Team" ${disabledAttr}>${buildSelectOptions(options.teams, stateValues.team)}</select></label>
<label class="${disabledClass}"><span>파트</span><select id="${prefix}Part" ${disabledAttr}>${buildSelectOptions(options.parts, stateValues.part)}</select></label>`;
  }
  function syncOrgPicker(root, prefix, values = {}) {
    const hq = $(`#${prefix}Hq`, root)?.value || values.hq || "";
    const office = $(`#${prefix}Office`, root)?.value || values.office || "";
    const team = $(`#${prefix}Team`, root)?.value || values.team || "";
    const part = $(`#${prefix}Part`, root)?.value || values.part || "";
    const options = getOrgPickerOptions(hq, office, team);
    const hqSelect = $(`#${prefix}Hq`, root);
    const officeSelect = $(`#${prefix}Office`, root);
    const teamSelect = $(`#${prefix}Team`, root);
    const partSelect = $(`#${prefix}Part`, root);
    if (hqSelect) hqSelect.innerHTML = buildSelectOptions(options.hqs, hq);
    const nextOffice = options.offices.includes(office) ? office : "";
    const nextTeam = options.teams.includes(team) ? team : "";
    const nextPart = options.parts.includes(part) ? part : "";
    if (officeSelect) officeSelect.innerHTML = buildSelectOptions(options.offices, nextOffice);
    if (teamSelect) teamSelect.innerHTML = buildSelectOptions(options.teams, nextTeam);
    if (partSelect) partSelect.innerHTML = buildSelectOptions(options.parts, nextPart);
    if (officeSelect) officeSelect.value = nextOffice;
    if (teamSelect) teamSelect.value = nextTeam;
    if (partSelect) partSelect.value = nextPart;
  }
  function bindOrgPicker(root, prefix, onChange) {
    ["Hq", "Office", "Team"].forEach((suffix) => {
      $(`#${prefix}${suffix}`, root)?.addEventListener("change", () => {
        syncOrgPicker(root, prefix);
        if (typeof onChange === "function") onChange();
      });
    });
    $(`#${prefix}Part`, root)?.addEventListener("change", () => {
      if (typeof onChange === "function") onChange();
    });
    syncOrgPicker(root, prefix);
  }
  function getDeptSuggestions() {
    const query = state.directoryDeptQuery.trim().toLowerCase();
    if (!query) return [];
    const values = uniqueValues(state.employees.flatMap((employee) => [employee.hq, employee.office, employee.team, employee.part, employeePath(employee)]).filter(Boolean));
    return values.filter((item) => item.toLowerCase().includes(query) && !state.directoryDept.includes(item)).slice(0, 8);
  }
  function getGradeSuggestions() {
    const query = state.directoryGradeQuery.trim().toLowerCase();
    if (!query) return [];
    return gradeCodes.filter((item) => item.toLowerCase().includes(query) && !state.directoryGrade.includes(item)).slice(0, 8);
  }
  function addSearchChip(type, value) {
    const normalized = (value || "").trim();
    if (!normalized) return;
    if (type === "dept") {
      if (!state.directoryDept.includes(normalized)) state.directoryDept = [...state.directoryDept, normalized];
      state.directoryDeptQuery = "";
    } else {
      if (!state.directoryGrade.includes(normalized)) state.directoryGrade = [...state.directoryGrade, normalized];
      state.directoryGradeQuery = "";
    }
    renderDirectorySearchBar(type === "dept" ? "directoryDeptInput" : "directoryGradeInput");
  }
  function bindSuggestionButtons() {
    $$("[data-suggestion-type]", refs.searchBar).forEach((button) => {
      button.addEventListener("click", () => addSearchChip(button.dataset.suggestionType, button.dataset.suggestionValue));
    });
    $$("[data-chip-remove]", refs.searchBar).forEach((button) => {
      button.addEventListener("click", () => {
        const type = button.dataset.chipRemove;
        const value = button.dataset.chipValue;
        if (type === "dept") state.directoryDept = state.directoryDept.filter((item) => item !== value);
        else state.directoryGrade = state.directoryGrade.filter((item) => item !== value);
        renderDirectorySearchBar();
      });
    });
  }
  function updateSearchSuggestions(type) {
    const target = type === "dept" ? $("#directoryDeptSuggestions", refs.searchBar) : $("#directoryGradeSuggestions", refs.searchBar);
    if (!target) return;
    const items = type === "dept" ? getDeptSuggestions() : getGradeSuggestions();
    target.innerHTML = suggestionListHtml(items, type);
    bindSuggestionButtons();
  }
  function renderDirectorySearchBar(focusField = "") {
    const deptSuggestions = getDeptSuggestions();
    const gradeSuggestions = getGradeSuggestions();
    refs.searchBar.innerHTML = `<div class="codex-directory-search-main"><input id="directorySearchInput" class="hr-search-input" placeholder="사원번호, 성명, 부서, 직급, 이메일, 연락처 검색" value="${state.directorySearchText}" style="flex:1"><button type="button" class="hr-btn btn-outline codex-search-toggle ${state.directoryAdvancedOpen ? "is-open" : ""}" id="directoryDetailToggle">상세검색</button><button type="button" class="hr-btn btn-primary" id="directorySearchSubmit">검색</button><button type="button" class="hr-btn btn-outline" id="directorySearchReset">검색 초기화</button></div>${state.directoryAdvancedOpen ? `<div class="codex-directory-search-advanced"><label class="codex-search-field"><span>입사일</span><div class="codex-date-range"><input id="directoryHireDateFrom" class="hr-search-input" placeholder="YYYYMMDD" value="${state.directoryHireDateFrom}"><span>~</span><input id="directoryHireDateTo" class="hr-search-input" placeholder="YYYYMMDD" value="${state.directoryHireDateTo}"></div></label><label class="codex-search-field"><span>퇴사일</span><div class="codex-date-range"><input id="directoryRetireDateFrom" class="hr-search-input" placeholder="YYYYMMDD" value="${state.directoryRetireDateFrom || ""}"><span>~</span><input id="directoryRetireDateTo" class="hr-search-input" placeholder="YYYYMMDD" value="${state.directoryRetireDateTo || ""}"></div></label><label class="codex-search-field codex-search-field-multi"><span>부서</span><div class="codex-search-input-wrap"><input id="directoryDeptInput" class="hr-search-input" placeholder="부서명 입력 후 Enter" value="${state.directoryDeptQuery}"><div id="directoryDeptSuggestions" class="codex-search-overlay">${suggestionListHtml(deptSuggestions, "dept")}</div></div>${chipHtml(state.directoryDept, "dept")}</label><label class="codex-search-field codex-search-field-multi"><span>직급</span><div class="codex-search-input-wrap"><input id="directoryGradeInput" class="hr-search-input" placeholder="직급 입력 후 Enter" value="${state.directoryGradeQuery}"><div id="directoryGradeSuggestions" class="codex-search-overlay">${suggestionListHtml(gradeSuggestions, "grade")}</div></div>${chipHtml(state.directoryGrade, "grade")}</label><label class="codex-search-field"><span>재직상태</span><select id="directoryStatusFilter" class="hr-filter-select"><option value="">전체</option><option value="재직" ${state.directoryStatus === "재직" ? "selected" : ""}>재직</option><option value="휴직" ${state.directoryStatus === "휴직" ? "selected" : ""}>휴직</option><option value="퇴직" ${state.directoryStatus === "퇴직" ? "selected" : ""}>퇴직</option></select></label></div>` : ""}`;
    $("#directoryDetailToggle", refs.searchBar)?.addEventListener("click", () => {
      state.directoryAdvancedOpen = !state.directoryAdvancedOpen;
      renderDirectorySearchBar();
    });
    $("#directorySearchInput", refs.searchBar)?.addEventListener("input", (event) => {
      const input = event.target;
      const nextValue = input.value || "";
      const start = input.selectionStart ?? nextValue.length;
      const end = input.selectionEnd ?? nextValue.length;
      state.directorySearchText = nextValue;
      scheduleInputRefresh("directorySearchInput", () => {
        renderTable();
        const nextInput = $("#directorySearchInput", refs.searchBar);
        if (nextInput) {
          nextInput.focus({ preventScroll: true });
          nextInput.setSelectionRange(start, end);
        }
      });
    });
    $("#directorySearchInput", refs.searchBar)?.addEventListener("keydown", (event) => {
      if (event.key !== "Enter") return;
      renderTable();
    });
    $("#directoryHireDateFrom", refs.searchBar)?.addEventListener("input", (event) => {
      state.directoryHireDateFrom = formatDateInput(event.target.value);
      event.target.value = state.directoryHireDateFrom;
    });
    $("#directoryHireDateFrom", refs.searchBar)?.addEventListener("blur", (event) => {
      state.directoryHireDateFrom = completeDateInput(event.target.value);
      event.target.value = state.directoryHireDateFrom;
    });
    $("#directoryHireDateTo", refs.searchBar)?.addEventListener("input", (event) => {
      state.directoryHireDateTo = formatDateInput(event.target.value);
      event.target.value = state.directoryHireDateTo;
    });
    $("#directoryHireDateTo", refs.searchBar)?.addEventListener("blur", (event) => {
      state.directoryHireDateTo = completeDateInput(event.target.value);
      event.target.value = state.directoryHireDateTo;
    });
    $("#directoryRetireDateFrom", refs.searchBar)?.addEventListener("input", (event) => {
      state.directoryRetireDateFrom = formatDateInput(event.target.value);
      event.target.value = state.directoryRetireDateFrom;
    });
    $("#directoryRetireDateFrom", refs.searchBar)?.addEventListener("blur", (event) => {
      state.directoryRetireDateFrom = completeDateInput(event.target.value);
      event.target.value = state.directoryRetireDateFrom;
    });
    $("#directoryRetireDateTo", refs.searchBar)?.addEventListener("input", (event) => {
      state.directoryRetireDateTo = formatDateInput(event.target.value);
      event.target.value = state.directoryRetireDateTo;
    });
    $("#directoryRetireDateTo", refs.searchBar)?.addEventListener("blur", (event) => {
      state.directoryRetireDateTo = completeDateInput(event.target.value);
      event.target.value = state.directoryRetireDateTo;
    });
    $("#directoryDeptInput", refs.searchBar)?.addEventListener("input", (event) => {
      state.directoryDeptQuery = event.target.value;
      updateSearchSuggestions("dept");
    });
    $("#directoryDeptInput", refs.searchBar)?.addEventListener("keydown", (event) => {
      if (event.key !== "Enter") return;
      event.preventDefault();
      addSearchChip("dept", getDeptSuggestions()[0] || state.directoryDeptQuery);
    });
    $("#directoryGradeInput", refs.searchBar)?.addEventListener("input", (event) => {
      state.directoryGradeQuery = event.target.value;
      updateSearchSuggestions("grade");
    });
    $("#directoryGradeInput", refs.searchBar)?.addEventListener("keydown", (event) => {
      if (event.key !== "Enter") return;
      event.preventDefault();
      addSearchChip("grade", getGradeSuggestions()[0] || state.directoryGradeQuery);
    });
    $("#directoryStatusFilter", refs.searchBar)?.addEventListener("change", (event) => {
      state.directoryStatus = event.target.value;
    });
    bindSuggestionButtons();
    $("#directorySearchSubmit", refs.searchBar)?.addEventListener("click", () => {
      state.directoryHireDateFrom = completeDateInput(state.directoryHireDateFrom);
      state.directoryHireDateTo = completeDateInput(state.directoryHireDateTo);
      state.directoryRetireDateFrom = completeDateInput(state.directoryRetireDateFrom || "");
      state.directoryRetireDateTo = completeDateInput(state.directoryRetireDateTo || "");
      renderDirectorySearchBar();
      renderTable();
    });
    $("#directorySearchReset", refs.searchBar)?.addEventListener("click", () => {
      state.directorySearchText = "";
      state.directoryDept = [];
      state.directoryDeptQuery = "";
      state.directoryGrade = [];
      state.directoryGradeQuery = "";
      state.directoryStatus = "";
      state.directoryHireDateFrom = "";
      state.directoryHireDateTo = "";
      state.directoryRetireDateFrom = "";
      state.directoryRetireDateTo = "";
      state.directoryAdvancedOpen = false;
      renderDirectorySearchBar();
      renderTable();
    });
    if (focusField) {
      const target = $("#" + focusField, refs.searchBar);
      if (target) {
        requestAnimationFrame(() => {
          target.focus();
          const len = target.value.length;
          target.setSelectionRange?.(len, len);
        });
      }
    }
  }
  function getOrgSummary(rows = state.orgBlueprint) {
    const map = new Map();
    rows.forEach((row) => {
      const key = getOrgRowKey(row);
      const count = state.employees.filter((employee) => {
        if (row.part) return employee.hq === row.hq && employee.office === row.office && employee.team === row.team && employee.part === row.part;
        if (row.team) return employee.hq === row.hq && employee.office === row.office && employee.team === row.team && !employee.part;
        if (row.office) return employee.hq === row.hq && employee.office === row.office && !employee.team;
        return employee.hq === row.hq && !employee.office;
      }).length;
      map.set(key, {
        level: getOrgRowLevel(row),
        name: getOrgRowName(row),
        hq: row.hq || "",
        office: row.office || "",
        team: row.team || "",
        part: row.part || "",
        parent: getOrgRowParentName(row),
        key,
        code: row.code || "",
        active: row.active !== false,
        description: row.description || "",
        updatedAt: row.updatedAt || "2026.04.14 09:00",
        count
      });
    });
    return Array.from(map.values()).sort((a, b) => a.key.localeCompare(b.key, "ko"));
  }
  function getOrgUsageStats(orgKey, rows = state.orgBlueprint) {
    const row = getBlueprintRow(rows, orgKey);
    if (!row) return { currentCount: 0, hireCount: 0, childCount: 0, descendantCount: 0 };
    const children = getChildrenRows(rows, orgKey);
    const descendants = getDescendantKeys(rows, orgKey);
    const currentCount = state.employees.filter((employee) => employee.orgCode === row.code).length;
    const hireCount = state.employees.filter((employee) => employee.hireOrgCode === row.code).length;
    return {
      currentCount,
      hireCount,
      childCount: children.length,
      descendantCount: descendants.length
    };
  }
  function getMetaUsageStats(kind, code) {
    const currentPropMap = {
      grade: "gradeCode",
      title: "titleCode",
      family: "jobFamilyCode",
      type: "employeeTypeCode"
    };
    const hirePropMap = {
      grade: "hireGradeCode",
      title: "titleCode",
      family: "hireJobFamilyCode",
      type: "hireEmployeeTypeCode"
    };
    const currentProp = currentPropMap[kind];
    const hireProp = hirePropMap[kind];
    return {
      currentCount: state.employees.filter((employee) => employee[currentProp] === code).length,
      hireCount: state.employees.filter((employee) => employee[hireProp] === code).length
    };
  }
  function getLevelUsageStats(levelId) {
    return {
      orgCount: state.orgBlueprint.filter((row) => getOrgRowLevel(row) === levelId).length,
      codeCount: state.orgBlueprint.filter((row) => getOrgRowLevel(row) === levelId && row.code).length
    };
  }
  function getEmployeeNodeKey(employee) {
    if (employee.hq === "오토플러스" && !employee.office && !employee.team && !employee.part) return "ROOT";
    if (employee.part) return ["L4", employee.hq, employee.office, employee.team, employee.part].join("|");
    if (employee.team) return ["L3", employee.hq, employee.office, employee.team, ""].join("|");
    if (employee.office) return ["L2", employee.hq, employee.office, "", ""].join("|");
    if (employee.hq) return ["L1", employee.hq, "", "", ""].join("|");
    return "ROOT";
  }
  function buildOrgExplorerData() {
    const root = { key: "ROOT", label: "오토플러스", level: "ROOT", path: ["오토플러스"], children: [], members: [] };
    const nodeMap = new Map([["ROOT", root]]);
    const ensureNode = (parent, key, label, level) => {
      if (!nodeMap.has(key)) {
        const node = { key, label, level, path: [...parent.path, label], children: [], members: [] };
        nodeMap.set(key, node);
        parent.children.push(node);
      }
      return nodeMap.get(key);
    };
    state.orgBlueprint.forEach((row) => {
      let parent = root;
      if (row.hq && row.hq !== "오토플러스") {
        parent = ensureNode(parent, ["L1", row.hq, "", "", ""].join("|"), row.hq, "L1");
      }
      if (row.office) parent = ensureNode(parent, ["L2", row.hq, row.office, "", ""].join("|"), row.office, "L2");
      if (row.team) parent = ensureNode(parent, ["L3", row.hq, row.office, row.team, ""].join("|"), row.team, "L3");
      if (row.part) parent = ensureNode(parent, ["L4", row.hq, row.office, row.team, row.part].join("|"), row.part, "L4");
    });
    state.employees
      .filter((employee) => getEffectiveStatus(employee) !== "퇴직")
      .forEach((employee) => {
      const targetKey = getEmployeeNodeKey(employee);
      if (!nodeMap.has(targetKey)) {
        let parent = root;
        if (employee.hq && employee.hq !== "오토플러스") parent = ensureNode(parent, ["L1", employee.hq, "", "", ""].join("|"), employee.hq, "L1");
        if (employee.office) parent = ensureNode(parent, ["L2", employee.hq, employee.office, "", ""].join("|"), employee.office, "L2");
        if (employee.team) parent = ensureNode(parent, ["L3", employee.hq, employee.office, employee.team, ""].join("|"), employee.team, "L3");
        if (employee.part) parent = ensureNode(parent, ["L4", employee.hq, employee.office, employee.team, employee.part].join("|"), employee.part, "L4");
      }
      nodeMap.get(targetKey)?.members.push(employee);
      });
    return { root, nodeMap };
  }
  function collectOrgDescendants(node) {
    const results = [];
    node.children.forEach((child) => {
      results.push(child);
      results.push(...collectOrgDescendants(child));
    });
    return results;
  }
  function isOrgExpanded(key) {
    return state.orgExpandedKeys.includes(key);
  }
  function setOrgExpanded(key, expanded) {
    if (expanded) {
      if (!state.orgExpandedKeys.includes(key)) state.orgExpandedKeys.push(key);
      return;
    }
    state.orgExpandedKeys = state.orgExpandedKeys.filter((item) => item !== key || item === "ROOT");
  }
  function expandOrgAncestors(key, includeSelf = false) {
    if (!key || key === "ROOT") {
      setOrgExpanded("ROOT", true);
      return;
    }
    const [, hq = "", office = "", team = "", part = ""] = key.split("|");
    setOrgExpanded("ROOT", true);
    if (hq) setOrgExpanded(["L1", hq, "", "", ""].join("|"), true);
    if (office) setOrgExpanded(["L2", hq, office, "", ""].join("|"), true);
    if (team) setOrgExpanded(["L3", hq, office, team, ""].join("|"), true);
    if (includeSelf && part) setOrgExpanded(["L4", hq, office, team, part].join("|"), true);
  }
  function formatOrgMemberCountText(directCount, totalCount) {
    if (totalCount > directCount) return `직속 ${directCount}명 / 포함 ${totalCount}명`;
    return `${directCount}명`;
  }
  function getOrgLeaderCandidates(employees = []) {
    const leaderTitles = ["대표이사", "본부장", "실장", "센터장", "팀장", "파트장", "지점장"];
    return (employees || [])
      .filter((employee) => getEffectiveStatus(employee) !== "퇴직")
      .filter((employee) => leaderTitles.includes(employee.title))
      .sort((a, b) => leaderTitles.indexOf(a.title) - leaderTitles.indexOf(b.title) || String(a.name || "").localeCompare(String(b.name || ""), "ko"));
  }
  function getExpectedOrgLeaderTitle(node) {
    if (!node || node.key === "ROOT" || node.level === "ROOT") return "대표이사";
    if (node.level === "L1") return "본부장";
    if (node.level === "L2") return String(node.label || "").includes("센터") ? "센터장" : "실장";
    if (node.level === "L3") return "팀장";
    if (node.level === "L4") return "파트장";
    return "";
  }
  function getOrgLeaderDisplay(node, directEmployees = [], totalEmployees = []) {
    const expectedTitle = getExpectedOrgLeaderTitle(node);
    const directLeaders = getOrgLeaderCandidates(directEmployees);
    const totalLeaders = getOrgLeaderCandidates(totalEmployees);
    const matchedLeader = directLeaders.find((employee) => employee.title === expectedTitle)
      || totalLeaders.find((employee) => employee.title === expectedTitle)
      || directLeaders[0]
      || totalLeaders[0]
      || null;
    return {
      employee: matchedLeader,
      expectedTitle
    };
  }
  function buildOrgSummaryCard(node, keyword) {
    const descendants = collectOrgDescendants(node);
    const directEmployees = (node.members || []).filter((employee) => getEffectiveStatus(employee) !== "퇴직");
    const totalEmployees = [node, ...descendants].flatMap((item) => item.members || []).filter((employee) => getEffectiveStatus(employee) !== "퇴직");
    const leaveEmployees = totalEmployees.filter((employee) => getEffectiveStatus(employee) === "휴직");
    const leaderInfo = getOrgLeaderDisplay(node, directEmployees, totalEmployees);
    const searchedEmployees = keyword
      ? totalEmployees.filter((employee) => [employee.name, employee.id, employeePath(employee), employee.grade, employee.title].filter(Boolean).join(" ").toLowerCase().includes(keyword))
      : totalEmployees;
    const parentPath = node.path.length > 1 ? node.path.slice(0, -1).join(" > ") : "최상위 조직";
    const leaderText = leaderInfo.employee
      ? `${leaderInfo.employee.name} (${leaderInfo.employee.title}${leaderInfo.expectedTitle && leaderInfo.employee.title !== leaderInfo.expectedTitle ? `, 기준 ${leaderInfo.expectedTitle}` : ""})`
      : (leaderInfo.expectedTitle ? `${leaderInfo.expectedTitle} 공석` : "지정 인원 없음");
    return `<div class="codex-org-summary-card"><strong>${node.label}</strong><span>${formatOrgMemberCountText(directEmployees.length, totalEmployees.length)} · 휴직 ${leaveEmployees.length}명</span><span>조직장 ${leaderText}</span>${keyword ? `<span>검색 ${searchedEmployees.length}명</span>` : ""}${parentPath ? `<span>상위 ${parentPath}</span>` : ""}</div>`;
  }
  function renderOrgBoard(hqFilter = "") {
    const { root, nodeMap } = buildOrgExplorerData();
    const selected = nodeMap.get(state.currentOrgNode) || root;
    const keyword = state.orgSearch.trim().toLowerCase();
    const matchesEmployee = (employee) => {
      if (!keyword) return true;
      return [employee.name, employee.id, employeePath(employee), employee.grade, employee.title].filter(Boolean).join(" ").toLowerCase().includes(keyword);
    };
    const nodes = state.orgIncludeChildren ? [selected, ...collectOrgDescendants(selected)] : [selected];
    const scopedNodes = nodes.filter((node) => !hqFilter || node.path.includes(hqFilter) || node.key === "ROOT");
    const sections = scopedNodes
      .map((node) => {
        const members = node.members.filter(matchesEmployee);
        const totalMembers = [node, ...collectOrgDescendants(node)].reduce((sum, item) => sum + item.members.filter(matchesEmployee).length, 0);
        if (!members.length) return "";
        return `<div class="codex-org-section"><div class="codex-org-section-head"><div><div class="codex-org-section-title">${node.label} <span>${formatOrgMemberCountText(members.length, totalMembers)}</span></div><div class="codex-org-section-path">${node.path.join(" > ")}</div></div></div><div class="codex-org-card-grid">${members.map((employee) => `<button type="button" class="codex-org-employee" data-quick-profile="${employee.id}"><div class="codex-org-avatar">${employee.name[0]}</div><div class="codex-org-emp-name">${employee.name}</div><div class="codex-org-emp-meta">${employee.grade}</div><div class="codex-org-emp-meta">${employee.title}</div></button>`).join("")}</div></div>`;
      })
      .filter(Boolean)
      .join("");
    const totalMatchedMembers = scopedNodes.reduce((sum, node) => sum + node.members.filter(matchesEmployee).length, 0);
    const summaryCard = buildOrgSummaryCard(selected, keyword);
    expandOrgAncestors(selected.key, false);
    const renderTreeNode = (node) => {
      const selectedClass = node.key === state.currentOrgNode ? " selected" : "";
      const expanded = isOrgExpanded(node.key) || isAncestorOrgKey(node.key, state.currentOrgNode);
      const hasChildren = node.children.length > 0;
      return `<div class="codex-org-tree-node level-${node.level.toLowerCase()}${selectedClass}${expanded ? " is-open" : ""}" data-tree-node="${node.key}"><div class="codex-org-tree-row is-simple-row"><button type="button" class="codex-org-tree-toggle-btn ${hasChildren ? "" : "is-leaf"}" data-org-toggle="${node.key}" ${hasChildren ? `aria-expanded="${expanded}"` : "disabled"}>${hasChildren ? (expanded ? "−" : "+") : "·"}</button><button type="button" class="codex-org-tree-btn" data-org-node="${node.key}"><span class="codex-org-tree-label">${node.label}</span></button></div>${hasChildren && expanded ? `<div class="codex-org-tree-children">${node.children.map(renderTreeNode).join("")}</div>` : ""}</div>`;
    };
    return `<div class="codex-org-explorer"><div class="codex-org-side"><div class="codex-org-side-head"><div class="codex-org-side-title">조직도</div><div class="codex-org-side-sub">내 정보</div></div><div class="codex-org-tree">${renderTreeNode(root)}</div></div><div class="codex-org-main"><div class="codex-org-toolbar"><input class="codex-org-search" id="orgSearchInput" placeholder="이름, ID, 소속명, 이메일, 연락처 검색" value="${state.orgSearch}"><div class="codex-admin-selection-meta"><strong>${selected.label}</strong><span>검색 결과 ${totalMatchedMembers}명</span></div>${summaryCard}<button type="button" class="codex-org-toggle-btn2 ${state.orgIncludeChildren ? "active" : ""}" id="orgIncludeChildrenToggle" aria-pressed="${state.orgIncludeChildren}">하위조직 ${state.orgIncludeChildren ? "ON" : "OFF"}</button></div><div class="codex-org-content">${sections || `<div class="codex-note-box"><strong>검색 결과 없음</strong>선택 조직 또는 하위조직에서 검색 조건에 맞는 인원이 없습니다.</div>`}</div></div></div>`;
  }
  function buildModal(id, title) {
    const backdrop = document.createElement("div");
    backdrop.id = id;
    backdrop.className = "codex-modal-backdrop";
    backdrop.innerHTML = `<div class="codex-modal"><div class="codex-modal-head"><h3>${title}</h3><button type="button" class="hr-btn btn-outline" data-role="close">닫기</button></div><div data-role="body"></div><div class="codex-modal-actions"><button type="button" class="hr-btn btn-outline" data-role="cancel">취소</button><button type="button" class="hr-btn btn-primary" data-role="save">저장</button></div></div>`;
    document.body.appendChild(backdrop);
    const close = () => backdrop.classList.remove("open");
    backdrop.querySelector('[data-role="close"]').addEventListener("click", close);
    backdrop.querySelector('[data-role="cancel"]').addEventListener("click", close);
    return { root: backdrop, body: backdrop.querySelector('[data-role="body"]'), save: backdrop.querySelector('[data-role="save"]'), open() { backdrop.classList.add("open"); }, close };
  }
  const createModal = buildModal("codexCreateModal", "신규 사원 등록");
  const editModal = buildModal("codexEditModal", "인사기록카드 수정");
  const batchImportModal = buildModal("codexBatchImportModal", "사원 엑셀 일괄 등록");
  const statsModal = buildModal("codexStatsModal", "인원 현황 상세");
  const quickProfileModal = buildModal("codexQuickProfileModal", "사원 기본정보");
  const recordDetailModal = buildModal("codexRecordDetailModal", "인사기록카드 상세");
  const codeOrgModal = buildModal("codexCodeOrgModal", "조직코드 편집");
  const adminHistoryModal = buildModal("codexAdminHistoryModal", "관리자 권한 변경 상세");
  codeOrgModal.root.classList.add("codex-code-modal");
  adminHistoryModal.root.querySelector('[data-role="cancel"]').classList.add("codex-hidden");
  adminHistoryModal.save.textContent = "확인";
  const modalStack = [createModal, editModal, batchImportModal, statsModal, quickProfileModal];
  modalStack.push(recordDetailModal, codeOrgModal, adminHistoryModal);
  quickProfileModal.root.classList.add("codex-quick-modal-wrap");
  quickProfileModal.root.querySelector(".codex-modal").classList.add("codex-quick-modal");
  quickProfileModal.save.textContent = "확인";
  quickProfileModal.root.querySelector('[data-role="cancel"]').classList.add("codex-hidden");
  recordDetailModal.root.querySelector('[data-role="cancel"]').classList.add("codex-hidden");
  recordDetailModal.save.textContent = "확인";
  const quickHeadButton = document.createElement("button");
  quickHeadButton.type = "button";
  quickHeadButton.className = "codex-quick-head-button";
  quickHeadButton.textContent = "인사기록카드";
  quickProfileModal.root.querySelector(".codex-modal-head").insertBefore(quickHeadButton, quickProfileModal.root.querySelector('[data-role="close"]'));
  function openQuickProfileModal(employeeId) {
    const employee = state.employees.find((item) => item.id === employeeId);
    if (!employee) return;
    state.selectedId = employee.id;
    quickProfileModal.body.innerHTML = `<div class="codex-quick-card"><div class="codex-quick-header"><div class="codex-quick-avatar">${employee.name[0]}</div><div class="codex-quick-header-body"><div class="codex-quick-name-row"><div class="codex-quick-name">${employee.name}</div></div><div class="codex-quick-role">${employee.grade}</div><div class="codex-quick-role">${employee.title || "팀원"}</div></div></div><div class="codex-quick-orgpath">${employeePath(employee)}</div><div class="codex-quick-divider"></div><div class="codex-quick-info-list"><div class="codex-quick-info-row"><div class="codex-quick-info-label">직책</div><div class="codex-quick-info-value">${employee.title || "팀원"}</div></div><div class="codex-quick-info-row"><div class="codex-quick-info-label">근속년월</div><div class="codex-quick-info-value">${getTenureText(employee)}</div></div><div class="codex-quick-info-row"><div class="codex-quick-info-label">이메일</div><div class="codex-quick-info-value">${getCompanyEmail(employee)}</div></div><div class="codex-quick-info-row"><div class="codex-quick-info-label">회사 전화</div><div class="codex-quick-info-value">${getCompanyPhone(employee)}</div></div><div class="codex-quick-info-row"><div class="codex-quick-info-label">휴대 전화</div><div class="codex-quick-info-value">${employee.phone}</div></div><div class="codex-quick-info-row"><div class="codex-quick-info-label">입사일</div><div class="codex-quick-info-value">${employee.hireDate.replaceAll(".", "-")}</div></div><div class="codex-quick-info-row"><div class="codex-quick-info-label">사번</div><div class="codex-quick-info-value">${employee.id}</div></div><div class="codex-quick-info-row"><div class="codex-quick-info-label">생년월일</div><div class="codex-quick-info-value">${employee.birthDate.replaceAll(".", "-")}</div></div>${getLeaveEntries(employee).length ? `<div class="codex-quick-info-row"><div class="codex-quick-info-label">휴직내역</div><div class="codex-quick-info-value">${getLeaveEntries(employee).map((row) => `${row[0] || "휴직"} / ${row[1] || "-"} ~ ${row[2] || "미정"} / ${getLeavePhase(row)}${row[3] ? ` / ${row[3]}` : ""}`).join("<br>")}</div></div>` : ""}<div class="codex-quick-info-row"><div class="codex-quick-info-label">주소</div><div class="codex-quick-info-value">${getAddress(employee)}</div></div></div></div>`;
    const goRecord = () => {
      if (!canCurrentAccessEmployeeRecord(employee)) return;
      quickProfileModal.close();
      statsModal.close();
      state.currentRecordTab = "overview";
      showHrView("record");
    };
    quickProfileModal.save.onclick = () => quickProfileModal.close();
    quickHeadButton.onclick = goRecord;
    quickHeadButton.classList.toggle("codex-hidden", !canCurrentAccessEmployeeRecord(employee));
    quickProfileModal.open();
  }
  statsModal.body.addEventListener("click", (event) => {
    const row = event.target.closest("[data-stat-employee]");
    if (!row) return;
    state.statModalSelection = row.dataset.statEmployee;
    openQuickProfileModal(state.statModalSelection);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    const opened = modalStack.filter((modal) => modal.root.classList.contains("open"));
    const target = opened[opened.length - 1];
    if (!target) return;
    target.close();
  });
  function ensurePanels() {
    if (panels.codes && panels.assignment && panels.admin) return;
    const codeMenu = document.createElement("div");
    codeMenu.className = "hr-sidebar-item codex-sidebar-extra";
    codeMenu.innerHTML = '<span class="hr-sidebar-icon">🗂</span> 코드관리';
    refs.hrSidebar.appendChild(codeMenu);
    const adminMenu = document.createElement("div");
    adminMenu.className = "hr-sidebar-item codex-sidebar-extra";
    adminMenu.innerHTML = '<span class="hr-sidebar-icon">🛡</span> 관리자';
    refs.hrSidebar.appendChild(adminMenu);
      refs.sideItems = $$(".hr-sidebar-item");
      refs.sideItems[1]?.classList.add("codex-hidden");
      refs.sideItems[6]?.classList.add("codex-hidden");
      refs.sideItems[7]?.classList.add("codex-hidden");
      const sidebarSections = $$(".hr-sidebar-section", refs.hrSidebar);
      sidebarSections[2] && (sidebarSections[2].textContent = "시스템관리");
      const codePanel = document.createElement("div");
    codePanel.className = "codex-panel codex-hidden";
    codePanel.id = "codexCodesPanel";
    refs.hrContent.appendChild(codePanel);
    const assignmentPanel = document.createElement("div");
    assignmentPanel.className = "codex-panel codex-hidden";
    assignmentPanel.id = "codexAssignmentPanel";
    refs.hrContent.appendChild(assignmentPanel);
    const adminPanel = document.createElement("div");
    adminPanel.className = "codex-panel codex-hidden";
    adminPanel.id = "codexAdminPanel";
    refs.hrContent.appendChild(adminPanel);
    panels.codes = codePanel;
    panels.assignment = assignmentPanel;
    panels.admin = adminPanel;
    panels.codeMenu = codeMenu;
    panels.adminMenu = adminMenu;
    codeMenu.addEventListener("click", () => showHrView("codes"));
    adminMenu.addEventListener("click", () => showHrView("admin"));
    refs.topItems[3]?.addEventListener("click", () => showHrView("assignment"));
    refs.sideItems[3]?.addEventListener("click", () => showHrView("assignment"));
  }
  function renderStats() {
    const visibleEmployees = getCurrentDirectoryAccessibleEmployees();
    const visibleIds = new Set(visibleEmployees.map((employee) => employee.id));
    const hireItems = getHireStatEmployees(state.hireStatMode).filter((employee) => visibleIds.has(employee.id));
    const retireItems = getRetireStatEmployees(state.hireStatMode).filter((employee) => visibleIds.has(employee.id));
    const values = [visibleEmployees.length, visibleEmployees.filter((employee) => getDisplayStatus(employee) === "재직").length, getLeaveStatEmployees("current").filter((employee) => visibleIds.has(employee.id)).length, hireItems.length + retireItems.length];
    $$(".hr-stat-value", refs.stats).forEach((node, index) => { if (values[index] !== undefined) node.textContent = String(values[index]); });
    const subTexts = [
      `▲ ${Math.max(1, Math.floor(visibleEmployees.length / 20) || 1)}명 (이번 달)`,
      `정규직 ${visibleEmployees.filter((employee) => employee.employeeType === "정규직" && getDisplayStatus(employee) === "재직").length} · 계약직 ${visibleEmployees.filter((employee) => employee.employeeType === "계약직" && getDisplayStatus(employee) === "재직").length} · 임원 ${visibleEmployees.filter((employee) => employee.employeeType === "임원" && getDisplayStatus(employee) === "재직").length}`,
      "육아·병가 포함",
      `입사 ${hireItems.length} · 퇴사 ${retireItems.length} · ${getHireStatLabel(state.hireStatMode)}`
    ];
    $$(".hr-stat-sub", refs.stats).forEach((node, index) => { if (subTexts[index] !== undefined) node.textContent = subTexts[index]; });
    $$(".hr-stat-card", refs.stats).forEach((card, index) => {
      card.dataset.statType = ["all", "active", "leave", "hire"][index];
      card.classList.toggle("codex-stat-action", index >= 2);
    });
  }
  function renderTable() {
    const employees = getDirectoryFilteredEmployees();
    const tbody = $("tbody", refs.tableWrap);
    const headerRow = $("thead tr", refs.tableWrap);
    if (headerRow) {
      headerRow.innerHTML = `
        <th><button type="button" class="codex-sort-button" data-directory-sort="id">사원번호${getDirectorySortIndicator("id")}</button></th>
        <th><button type="button" class="codex-sort-button" data-directory-sort="name">성명${getDirectorySortIndicator("name")}</button></th>
        <th><button type="button" class="codex-sort-button" data-directory-sort="dept">부서${getDirectorySortIndicator("dept")}</button></th>
        <th><button type="button" class="codex-sort-button" data-directory-sort="grade">직급${getDirectorySortIndicator("grade")}</button></th>
        <th><button type="button" class="codex-sort-button" data-directory-sort="hireDate">입사일${getDirectorySortIndicator("hireDate")}</button></th>
        <th><button type="button" class="codex-sort-button" data-directory-sort="status">재직상태${getDirectorySortIndicator("status")}</button></th>
        <th>관리</th>
      `;
      $$("[data-directory-sort]", headerRow).forEach((button) => {
        button.addEventListener("click", () => {
          cycleDirectorySort(button.dataset.directorySort);
          renderTable();
        });
      });
    }
    tbody.innerHTML = employees.map((employee) => `<tr data-employee-id="${employee.id}"><td><button type="button" class="codex-link-button codex-id-button" data-quick-profile="${employee.id}" style="font-family:'IBM Plex Mono',monospace;font-size:11px;color:#9095b0">${employee.id}</button></td><td><button type="button" class="codex-link-button emp-name" data-quick-profile="${employee.id}">${employee.name}</button></td><td>${deepestDept(employee)}</td><td>${employee.grade}</td><td>${employee.hireDate}</td><td>${statusBadge(getDisplayStatus(employee))}</td><td><a href="#" data-action="detail" style="font-size:11px;color:#4f8ef7;text-decoration:none">상세보기</a></td></tr>`).join("");
    tbody.onclick = (event) => {
      if (event.target.closest('[data-action="detail"]')) return;
      if (event.target.closest('[data-quick-profile]')) return;
      const row = event.target.closest("tr[data-employee-id]");
      if (!row) return;
      openQuickProfileModal(row.dataset.employeeId);
    };
    $(".hr-table-header div", refs.tableWrap).textContent = `총 ${employees.length}명 · 1-${employees.length} 표시`;
  }
  function renderOrg() {
    expandOrgAncestors(state.currentOrgNode, false);
    refs.orgWrap.innerHTML = renderOrgBoard();
    $$("[data-org-toggle]", refs.orgWrap).forEach((button) => {
      button.addEventListener("click", (event) => {
        event.stopPropagation();
        const key = button.dataset.orgToggle;
        if (!key || button.classList.contains("is-leaf")) return;
        setOrgExpanded(key, !isOrgExpanded(key));
        renderOrg();
      });
    });
    $$("[data-org-node]", refs.orgWrap).forEach((button) => {
      button.addEventListener("click", () => {
        state.currentOrgNode = button.dataset.orgNode;
        expandOrgAncestors(state.currentOrgNode, true);
        renderOrg();
      });
    });
    bindDeferredTextInput(() => refs.orgWrap, "#orgSearchInput", "orgSearchInput", (value) => {
      state.orgSearch = value;
    }, () => {
      renderOrg();
    });
    $("#orgIncludeChildrenToggle", refs.orgWrap)?.addEventListener("click", (event) => {
      event.preventDefault();
      state.orgIncludeChildren = !state.orgIncludeChildren;
      renderOrg();
    });
    const treeWrap = $(".codex-org-tree", refs.orgWrap);
    const selectedNode = $('[data-org-node="' + state.currentOrgNode + '"]', refs.orgWrap);
    if (treeWrap && selectedNode) {
      const offsetTop = selectedNode.offsetTop - 14;
      treeWrap.scrollTo({ top: Math.max(0, offsetTop), behavior: "auto" });
    }
  }
  function uniqueValues(items) {
    return Array.from(new Set(items.filter(Boolean)));
  }
  function getOrgOptions(level, filters = {}) {
    const rows = state.orgBlueprint.filter((row) => {
      if (filters.hq && row.hq !== filters.hq) return false;
      if (filters.office && row.office !== filters.office) return false;
      if (filters.team && row.team !== filters.team) return false;
      return true;
    });
    if (level === "hq") return uniqueValues(rows.map((row) => row.hq));
    if (level === "office") return uniqueValues(rows.map((row) => row.office));
    if (level === "team") return uniqueValues(rows.map((row) => row.team));
    return uniqueValues(rows.map((row) => row.part));
  }
  function fillSelectOptions(selector, options, selectedValue, allowBlank = false) {
    const select = $(selector);
    if (!select) return;
    const list = allowBlank ? ["", ...options] : options;
    select.innerHTML = list.map((item) => `<option value="${item}" ${item === selectedValue ? "selected" : ""}>${item || "없음"}</option>`).join("");
  }
  function syncAssignmentOrgFields(sourceEmployee) {
    const selectedHq = $("#assignNextHq")?.value || sourceEmployee.hq || "";
    fillSelectOptions("#assignNextOffice", getOrgOptions("office", { hq: selectedHq }), $("#assignNextOffice")?.value || sourceEmployee.office || "", true);
    const selectedOffice = $("#assignNextOffice")?.value || sourceEmployee.office || "";
    fillSelectOptions("#assignNextTeam", getOrgOptions("team", { hq: selectedHq, office: selectedOffice }), $("#assignNextTeam")?.value || sourceEmployee.team || "", true);
    const selectedTeam = $("#assignNextTeam")?.value || sourceEmployee.team || "";
    fillSelectOptions("#assignNextPart", getOrgOptions("part", { hq: selectedHq, office: selectedOffice, team: selectedTeam }), $("#assignNextPart")?.value || sourceEmployee.part || "", true);
  }
  function getLevelDepth(level) {
    return Number(String(level || "").replace("L", "")) || 0;
  }
  function getLevelLabel(level) {
    return (state.codeDraft?.levelDefs || levelDefs).find((item) => item.id === level)?.name || level;
  }
  function getMetaKindConfig(kind) {
    if (kind === "grade") return { label: "직급", prefix: "GRD" };
    if (kind === "title") return { label: "직책", prefix: "POS" };
    if (kind === "family") return { label: "직군", prefix: "JOB" };
    return { label: "직원유형", prefix: "EMP" };
  }
  function getNextMetaCode(kind, registry = null) {
    const { prefix } = getMetaKindConfig(kind);
    const target = registry || getMetaRegistry(kind);
    return buildSeqCode(prefix, target.length + 1);
  }
  function getNextOrgCode(level, rows = state.orgBlueprint) {
    const count = rows.filter((row) => getOrgRowLevel(row) === level).length + 1;
    return buildOrgCode(level, count);
  }
  function getMetaRecords(kind) {
    return getMetaRegistry(kind).map((item) => ({ ...item }));
  }
  function currentMetaRecords() {
    return getMetaRecords(state.currentMetaSelection);
  }
  function currentMetaLabel() {
    return getMetaKindConfig(state.currentMetaSelection).label;
  }
  function getOrgParentCandidates(level, excludeKey = "", rows = state.orgBlueprint) {
    const targetDepth = getLevelDepth(level);
    if (targetDepth <= 1) return [{ key: "ROOT", label: "ROOT (최상위)" }];
    return rows
      .filter((row) => getLevelDepth(getOrgRowLevel(row)) < targetDepth && getOrgRowKey(row) !== excludeKey)
      .map((row) => ({
        key: getOrgRowKey(row),
        label: `${getOrgRowPath(row)} (${getLevelLabel(getOrgRowLevel(row))})`
      }));
  }
  function buildOrgRowFromCodeDraft(draft) {
    const level = draft.level;
    const parent = parseOrgKey(draft.parentKey);
    const name = draft.name.trim();
    if (level === "L1") return { hq: name, office: "", team: "", part: "" };
    if (level === "L2") return { hq: parent.hq, office: name, team: "", part: "" };
    if (level === "L3") return { hq: parent.hq, office: parent.level === "L2" ? parent.office : "", team: name, part: "" };
    if (level === "L4") return { hq: parent.hq, office: parent.level === "L2" ? parent.office : parent.office || "", team: parent.level === "L3" ? parent.team : "", part: name };
    return { hq: name, office: "", team: "", part: "" };
  }
  function buildPreviewBlueprintForCodeDraft(draft) {
    const sourceRows = getCodeDraftOrgBlueprint();
    const nextRow = {
      ...buildOrgRowFromCodeDraft(draft),
      code: draft.code,
      active: draft.active,
      description: draft.description,
      sourceKey: draft.mode === "edit" ? draft.originalKey : `NEW|${draft.code}`,
      displayOrder: sourceRows.length + 1,
      createdAt: "2026.04.15 16:10",
      updatedAt: "2026.04.15 16:10"
    };
    const rows = cloneOrgBlueprint(sourceRows);
    if (draft.mode === "edit") {
      const index = rows.findIndex((row) => getOrgRowKey(row) === draft.originalKey);
      if (index >= 0) rows[index] = { ...rows[index], ...nextRow };
    } else {
      rows.push(nextRow);
    }
    return normalizeBlueprint(rows);
  }
  function renderCodeOrgPreview(rows, focusKey) {
    const renderNode = (key) => {
      const children = getChildrenRows(rows, key);
      const label = key === "ROOT" ? "오토플러스" : getOrgRowName(getBlueprintRow(rows, key) || {});
      const selected = key === focusKey;
      return `<div class="codex-code-preview-node ${selected ? "is-focus" : ""}" data-code-preview-key="${key}"><div class="codex-code-preview-label">${label}</div>${children.length ? `<div class="codex-code-preview-children">${children.map((child) => renderNode(getOrgRowKey(child))).join("")}</div>` : ""}</div>`;
    };
    return `<div class="codex-code-preview-tree">${renderNode("ROOT")}</div>`;
  }
  function createCodeOrgDraft(mode, orgKey = "") {
    const rows = getCodeDraftOrgBlueprint();
    const row = orgKey ? getBlueprintRow(rows, orgKey) : null;
    const level = row ? getOrgRowLevel(row) : "L1";
    return {
      mode,
      originalKey: orgKey,
      level,
      parentKey: row ? getParentKeyForRow(row) : "ROOT",
      name: row ? getOrgRowName(row) : "",
      code: row?.code || getNextOrgCode(level, rows),
      active: row?.active !== false,
      description: row?.description || ""
    };
  }
  function syncCodeOrgModalBody() {
    const draft = state.codeOrgModalDraft;
    if (!draft) return;
    const parentSelect = $("#codeOrgParentKey", codeOrgModal.body);
    const codeInput = $("#codeOrgCode", codeOrgModal.body);
    const preview = $("#codeOrgPreview", codeOrgModal.body);
    const levelBadge = $("#codeOrgLevelText", codeOrgModal.body);
    const draftRows = getCodeDraftOrgBlueprint();
    const parentOptions = getOrgParentCandidates(draft.level, draft.originalKey, draftRows);
    if (draft.level === "L1") draft.parentKey = "ROOT";
    else if (!parentOptions.some((item) => item.key === draft.parentKey)) draft.parentKey = parentOptions[0]?.key || "ROOT";
    if (parentSelect) {
      parentSelect.innerHTML = parentOptions.map((item) => `<option value="${item.key}" ${item.key === draft.parentKey ? "selected" : ""}>${item.label}</option>`).join("");
      parentSelect.disabled = draft.level === "L1";
    }
    if (!draft.code) draft.code = getNextOrgCode(draft.level, draftRows);
    if (codeInput && !codeInput.dataset.locked) codeInput.value = draft.code;
    if (levelBadge) levelBadge.textContent = `${draft.level} · ${getLevelLabel(draft.level)}`;
    if (preview) {
      const previewRows = buildPreviewBlueprintForCodeDraft(draft);
      const previewKey = getOrgRowKey(buildOrgRowFromCodeDraft(draft));
      preview.innerHTML = renderCodeOrgPreview(previewRows, previewKey);
      requestAnimationFrame(() => {
        const focusNode = $(`[data-code-preview-key="${previewKey}"]`, preview);
        if (focusNode) {
          const top = Math.max(0, focusNode.offsetTop - 80);
          preview.scrollTo({ top, behavior: "auto" });
        }
      });
    }
  }
  function bindCodeOrgModal() {
    const draft = state.codeOrgModalDraft;
    if (!draft) return;
    $("#codeOrgLevel", codeOrgModal.body)?.addEventListener("change", (event) => {
      draft.level = event.target.value;
      draft.code = getNextOrgCode(draft.level, getCodeDraftOrgBlueprint());
      syncCodeOrgModalBody();
    });
    $("#codeOrgParentKey", codeOrgModal.body)?.addEventListener("change", (event) => {
      draft.parentKey = event.target.value;
      syncCodeOrgModalBody();
    });
    $("#codeOrgName", codeOrgModal.body)?.addEventListener("input", (event) => {
      draft.name = event.target.value;
      syncCodeOrgModalBody();
    });
    $("#codeOrgCode", codeOrgModal.body)?.addEventListener("input", (event) => {
      draft.code = event.target.value.trim();
    });
    $("#codeOrgDescription", codeOrgModal.body)?.addEventListener("input", (event) => {
      draft.description = event.target.value;
    });
    $("#codeOrgActive", codeOrgModal.body)?.addEventListener("change", (event) => {
      draft.active = event.target.value === "Y";
    });
  }
  function openCodeOrgModal(mode, orgKey = "") {
    state.codeOrgModalDraft = createCodeOrgDraft(mode, orgKey);
    const draft = state.codeOrgModalDraft;
    $("h3", codeOrgModal.root).textContent = mode === "edit" ? "조직코드 편집" : "신규 조직 추가";
    codeOrgModal.body.innerHTML = `<div class="codex-code-modal-layout"><div class="codex-code-modal-form"><div class="codex-form-grid"><label><span>레벨</span><select id="codeOrgLevel">${levelDefs.map((item) => `<option value="${item.id}" ${item.id === draft.level ? "selected" : ""}>${item.id} · ${item.name}</option>`).join("")}</select></label><label><span>상위조직</span><select id="codeOrgParentKey"></select></label><label class="span-2"><span>조직명</span><input id="codeOrgName" value="${draft.name}"></label><label><span>코드값</span><input id="codeOrgCode" value="${draft.code}"></label><label><span>사용여부</span><select id="codeOrgActive"><option value="Y" ${draft.active ? "selected" : ""}>사용</option><option value="N" ${draft.active ? "" : "selected"}>중지</option></select></label><label class="span-2"><span>설명</span><textarea id="codeOrgDescription" rows="4">${draft.description}</textarea></label></div><div class="codex-note-box"><strong id="codeOrgLevelText"></strong>상위조직을 바꾸거나 레벨을 바꾸면 우측 미리보기에 바로 반영됩니다.</div></div><div class="codex-code-modal-preview"><div class="codex-panel"><h4>조직도 미리보기</h4><div id="codeOrgPreview"></div></div></div></div>`;
    syncCodeOrgModalBody();
    bindCodeOrgModal();
    codeOrgModal.save.onclick = () => saveCodeOrgModal();
    codeOrgModal.open();
  }
  function saveCodeOrgModal() {
    const draft = state.codeOrgModalDraft;
    if (!draft || !draft.name.trim()) return;
    const codeDraft = ensureCodeDraft();
    const baseRows = codeDraft.orgBlueprint;
    const nextRowBase = buildOrgRowFromCodeDraft(draft);
    const nextKey = getOrgRowKey(nextRowBase);
    if (draft.mode === "add" && baseRows.some((row) => getOrgRowKey(row) === nextKey)) return;
    const nextRow = {
      ...nextRowBase,
      code: draft.code || getNextOrgCode(draft.level, baseRows),
      active: draft.active,
      description: draft.description.trim(),
      sourceKey: draft.mode === "edit" ? (getBlueprintRow(baseRows, draft.originalKey)?.sourceKey || draft.originalKey) : `NEW|${draft.code || nextKey}`,
      displayOrder: baseRows.length + 1,
      createdAt: draft.mode === "edit" ? (getBlueprintRow(baseRows, draft.originalKey)?.createdAt || "2023.08.16 00:00") : "2026.04.15 16:10",
      updatedAt: "2026.04.15 16:10"
    };
    if (draft.mode === "edit") {
      const oldRow = getBlueprintRow(baseRows, draft.originalKey);
      codeDraft.orgBlueprint = normalizeBlueprint(baseRows.map((row) => getOrgRowKey(row) === draft.originalKey ? { ...row, ...nextRow } : row));
      state.currentCodeSelection = nextKey;
      upsertPendingOrgChange({
        section: "조직코드",
        view: "org-edit",
        action: "수정",
        targetKey: oldRow?.sourceKey || draft.originalKey || nextKey,
        detail: `${oldRow ? getOrgRowPath(oldRow) : "-"} → ${getOrgRowPath(nextRow)}`,
        payload: { mode: "edit", originalKey: draft.originalKey, row: { ...nextRow } }
      });
    } else {
      codeDraft.orgBlueprint = normalizeBlueprint([...baseRows, nextRow]);
      state.currentCodeSelection = nextKey;
      upsertPendingOrgChange({
        section: "조직코드",
        view: "org-edit",
        action: "신규",
        targetKey: nextRow.sourceKey || nextKey,
        detail: getOrgRowPath(nextRow),
        payload: { mode: "add", originalKey: "", row: { ...nextRow } }
      });
    }
    codeOrgModal.close();
    renderCodes();
  }
  function saveLevelCode() {
    const draftStore = ensureCodeDraft();
    const draftLevels = draftStore.levelDefs;
    const selected = draftLevels.find((item) => item.id === state.currentLevelSelection);
    const levelId = ($("#levelId")?.value || selected?.id || "").trim();
    if (!levelId) return;
    const payload = {
      id: levelId,
      parent: ($("#levelParent")?.value || "-").trim() || "-",
      name: ($("#levelName")?.value || "").trim() || levelId,
      desc: ($("#levelDesc")?.value || "").trim()
    };
    const existingIndex = draftLevels.findIndex((item) => item.id === levelId);
    if (existingIndex >= 0) {
      draftLevels.splice(existingIndex, 1, payload);
      const changeKey = `level|${levelId}`;
      const existing = getPendingOrgChanges().find((item) => item._key === changeKey);
      upsertPendingOrgChange({
        section: "레벨관리",
        view: "level-edit",
        action: "수정",
        targetKey: levelId,
        detail: `${existing?.payload?.level?.name || selected?.name || levelId} → ${payload.name}`,
        payload: { kind: "level", mode: "edit", level: { ...payload } }
      });
    } else {
      draftLevels.push(payload);
      upsertPendingOrgChange({
        section: "레벨관리",
        view: "level-edit",
        action: "신규",
        targetKey: levelId,
        detail: payload.desc || "레벨 정의 추가",
        payload: { kind: "level", mode: "add", level: { ...payload } }
      });
    }
    state.currentLevelSelection = levelId;
    renderCodes();
  }
  function openNewLevelForm() {
    state.currentLevelSelection = "NEW";
    renderCodes();
  }
  function saveMetaCode() {
    const draftStore = ensureCodeDraft();
    const code = ($("#metaCode")?.value || "").trim();
    const name = ($("#metaName")?.value || "").trim();
    if (!code || !name) return;
    const description = ($("#metaDesc")?.value || "").trim();
    const active = ($("#metaActive")?.value || "Y") === "Y";
    const target = draftStore.metaRegistry[state.currentMetaSelection] || [];
    const existingIndex = target.findIndex((item) => item.code === code);
    const payload = { code, name, description, active, updatedAt: "2026.04.15 16:10" };
    if (existingIndex >= 0) {
      target.splice(existingIndex, 1, payload);
      upsertPendingOrgChange({
        section: `${currentMetaLabel()}코드`,
        view: "meta-edit",
        action: "수정",
        targetKey: code,
        detail: description || "기준코드 수정",
        payload: { kind: "meta", metaKind: state.currentMetaSelection, mode: "edit", codeRecord: { ...payload } }
      });
    } else {
      target.push(payload);
      upsertPendingOrgChange({
        section: `${currentMetaLabel()}코드`,
        view: "meta-edit",
        action: "신규",
        targetKey: code,
        detail: description || "기준코드 추가",
        payload: { kind: "meta", metaKind: state.currentMetaSelection, mode: "add", codeRecord: { ...payload } }
      });
    }
    draftStore.metaRegistry[state.currentMetaSelection] = target;
    state.currentMetaCodeSelection = code;
    renderCodes();
  }
  function openStatModal(type) {
    statsModal.save.style.display = "none";
    const cancelButton = $('[data-role="cancel"]', statsModal.root);
    if (cancelButton) cancelButton.textContent = "닫기";
    const visibleIds = new Set(getCurrentDirectoryAccessibleEmployees().map((employee) => employee.id));
    if (type === "leave") {
      const modes = [
        { id: "current", label: "현재 기준" },
        { id: "month", label: "월별" },
        { id: "quarter", label: "분기별" },
        { id: "half", label: "반기별" },
        { id: "year", label: "년도별" }
      ];
      const years = uniqueValues(state.employees.flatMap((employee) => [
        parseDateParts(employee.assignmentDate).year,
        ...getLeaveStatEvents(employee).map((event) => parseDateParts(event.date).year)
      ]).filter(Boolean)).sort((a, b) => b - a);
      if (!years.length) years.push(new Date().getFullYear());
      const items = getLeaveStatEmployees(state.leaveStatMode).filter((employee) => visibleIds.has(employee.id));
      if (!state.statModalSelection && items[0]) state.statModalSelection = items[0].id;
      if (state.statModalSelection && !items.some((item) => item.id === state.statModalSelection)) state.statModalSelection = items[0]?.id || "";
      const periodControl = state.leaveStatMode === "month"
        ? `<select id="leaveStatMonth">${Array.from({ length: 12 }, (_, index) => index + 1).map((month) => `<option value="${month}" ${month === state.leaveStatMonth ? "selected" : ""}>${month}월</option>`).join("")}</select>`
        : state.leaveStatMode === "quarter"
          ? `<select id="leaveStatQuarter">${[1, 2, 3, 4].map((quarter) => `<option value="${quarter}" ${quarter === state.leaveStatQuarter ? "selected" : ""}>${quarter}분기</option>`).join("")}</select>`
          : state.leaveStatMode === "half"
            ? `<select id="leaveStatHalf"><option value="1" ${state.leaveStatHalf === 1 ? "selected" : ""}>상반기</option><option value="2" ${state.leaveStatHalf === 2 ? "selected" : ""}>하반기</option></select>`
            : state.leaveStatMode === "year"
              ? `<input value="연간 기준" readonly>`
              : `<input value="현재 휴직자" readonly>`;
      statsModal.body.innerHTML = `<div class="codex-stack"><div class="codex-secondary-actions">${modes.map((mode) => `<button type="button" class="hr-btn ${state.leaveStatMode === mode.id ? "btn-primary" : "btn-outline"}" data-leave-mode="${mode.id}">${mode.label}</button>`).join("")}</div><div class="codex-form-grid">${state.leaveStatMode === "current" ? `<label class="span-2"><span>조회 기준</span><input value="현재 휴직 상태 기준" readonly></label>` : `<label><span>기준 연도</span><select id="leaveStatYear">${years.map((year) => `<option value="${year}" ${year === state.leaveStatYear ? "selected" : ""}>${year}년</option>`).join("")}</select></label><label><span>세부 기준</span>${periodControl}</label>`}</div><div class="codex-note-box"><strong>휴직 대상자</strong>${getLeaveStatLabel(state.leaveStatMode)} ${state.leaveStatMode === "current" ? "휴직 상태로 분류된 사원 목록입니다." : "휴직 전환 이력 또는 휴직 시작일 기준 대상자 목록입니다."}</div>${renderEmployeeList(items, "leave")}</div>`;
      $$("[data-leave-mode]", statsModal.body).forEach((button) => {
        button.addEventListener("click", () => {
          state.leaveStatMode = button.dataset.leaveMode;
          openStatModal("leave");
        });
      });
      $("#leaveStatYear", statsModal.body)?.addEventListener("change", (event) => {
        state.leaveStatYear = Number(event.target.value);
        openStatModal("leave");
      });
      $("#leaveStatMonth", statsModal.body)?.addEventListener("change", (event) => {
        state.leaveStatMonth = Number(event.target.value);
        openStatModal("leave");
      });
      $("#leaveStatQuarter", statsModal.body)?.addEventListener("change", (event) => {
        state.leaveStatQuarter = Number(event.target.value);
        openStatModal("leave");
      });
      $("#leaveStatHalf", statsModal.body)?.addEventListener("change", (event) => {
        state.leaveStatHalf = Number(event.target.value);
        openStatModal("leave");
      });
      statsModal.open();
      return;
    }
    if (type === "hire") {
      $("h3", statsModal.root).textContent = "입퇴사 현황";
      const modes = [
        { id: "month", label: "월별" },
        { id: "quarter", label: "분기별" },
        { id: "half", label: "반기별" },
        { id: "year", label: "년도별" }
      ];
      const years = uniqueValues(state.employees.flatMap((employee) => [parseDateParts(employee.hireDate).year, parseDateParts(employee.retireDate).year]).filter(Boolean)).sort((a, b) => b - a);
      const hireItems = getHireStatEmployees(state.hireStatMode).filter((employee) => visibleIds.has(employee.id));
      const retireItems = getRetireStatEmployees(state.hireStatMode).filter((employee) => visibleIds.has(employee.id));
      const items = [...hireItems, ...retireItems];
      if ((!state.statModalSelection || !items.some((item) => item.id === state.statModalSelection)) && items[0]) state.statModalSelection = items[0].id;
      const periodControl = state.hireStatMode === "month"
        ? `<select id="hireStatMonth">${Array.from({ length: 12 }, (_, index) => index + 1).map((month) => `<option value="${month}" ${month === state.hireStatMonth ? "selected" : ""}>${month}월</option>`).join("")}</select>`
        : state.hireStatMode === "quarter"
          ? `<select id="hireStatQuarter">${[1, 2, 3, 4].map((quarter) => `<option value="${quarter}" ${quarter === state.hireStatQuarter ? "selected" : ""}>${quarter}분기</option>`).join("")}</select>`
          : state.hireStatMode === "half"
            ? `<select id="hireStatHalf"><option value="1" ${state.hireStatHalf === 1 ? "selected" : ""}>상반기</option><option value="2" ${state.hireStatHalf === 2 ? "selected" : ""}>하반기</option></select>`
            : "";
      statsModal.body.innerHTML = `<div class="codex-stack"><div class="codex-secondary-actions">${modes.map((mode) => `<button type="button" class="hr-btn ${state.hireStatMode === mode.id ? "btn-primary" : "btn-outline"}" data-hire-mode="${mode.id}">${mode.label}</button>`).join("")}</div><div class="codex-form-grid"><label><span>기준 연도</span><select id="hireStatYear">${years.map((year) => `<option value="${year}" ${year === state.hireStatYear ? "selected" : ""}>${year}년</option>`).join("")}</select></label><label><span>세부 기준</span>${periodControl || `<input value="연간 기준" readonly>`}</label></div><div class="codex-note-box"><strong>입퇴사 현황</strong>${getHireStatLabel(state.hireStatMode)} 기준 입사자와 퇴사자 현황을 함께 확인합니다.</div><div class="codex-stack"><div><h4 style="font-size:13px;color:#1e3a5f;margin:0 0 8px">입사 현황 (${hireItems.length})</h4>${renderEmployeeList(hireItems)}</div><div><h4 style="font-size:13px;color:#1e3a5f;margin:0 0 8px">퇴사 현황 (${retireItems.length})</h4>${renderEmployeeList(retireItems, "retire")}</div></div></div>`;
      $$("[data-hire-mode]", statsModal.body).forEach((button) => {
        button.addEventListener("click", () => {
          state.hireStatMode = button.dataset.hireMode;
          renderStats();
          openStatModal("hire");
        });
      });
      $("#hireStatYear", statsModal.body)?.addEventListener("change", (event) => {
        state.hireStatYear = Number(event.target.value);
        renderStats();
        openStatModal("hire");
      });
      $("#hireStatMonth", statsModal.body)?.addEventListener("change", (event) => {
        state.hireStatMonth = Number(event.target.value);
        renderStats();
        openStatModal("hire");
      });
      $("#hireStatQuarter", statsModal.body)?.addEventListener("change", (event) => {
        state.hireStatQuarter = Number(event.target.value);
        renderStats();
        openStatModal("hire");
      });
      $("#hireStatHalf", statsModal.body)?.addEventListener("change", (event) => {
        state.hireStatHalf = Number(event.target.value);
        renderStats();
        openStatModal("hire");
      });
      statsModal.open();
    }
  }
  function renderRecord() {
    let employee = selectedEmployee();
    if (!canCurrentAccessEmployeeRecord(employee)) {
      employee = getFirstAccessibleRecordEmployee();
      if (employee) state.selectedId = employee.id;
    }
    refs.cardWrap.style.gridTemplateColumns = "minmax(0, 1fr)";
    refs.cardWrap.style.width = "100%";
    if (!employee || !canCurrentAccessEmployeeRecord(employee)) {
      refs.cardWrap.innerHTML = `<div class="codex-note-box"><strong>열람 권한 없음</strong>현재 계정으로 열람 가능한 인사기록카드가 없습니다.</div>`;
      return;
    }
    const tab = state.currentRecordTab;
    const tabs = [
      ["overview", "기본정보"],
      ["hire", "입사정보"],
      ["personal", "신상정보"],
      ["education", "학력"],
      ["career", "경력"],
      ["assignment", "발령내역"],
      ["training", "교육"],
      ["leave", "휴직"],
      ["memo", "메모"]
    ];
    const focusSections = {
      overview: sheetFieldTable([
        ["사원번호", employee.id, "그룹웨어 ID", employee.groupwareId || getGroupwareId(employee)],
        ["직급", employee.grade, "직책", employee.title],
        ["직군", employee.jobFamily, "재직상태", getDisplayStatus(employee)],
        ["소속", employeePath(employee), "회사 이메일", getCompanyEmail(employee)]
      ]),
      hire: renderHireInfoBlock(employee),
      personal: sheetFieldTable([
        ["주민등록번호", employee.residentNumber || getResidentNumber(employee), "결혼여부", employee.maritalStatus || getMaritalStatus(employee)],
        ["생년월일", employee.birthDate, "휴대전화", employee.phone],
        ["개인 이메일", getPersonalEmail(employee), "회사 전화", getCompanyPhone(employee)],
        ["주소", getAddress(employee), "", ""]
      ]),
        leave: previewGrid(["휴직유형", "시작일", "종료일", "진행상태", "비고"], getLeaveEntries(employee).map((row) => [row[0], row[1], row[2], getLeavePhase(row), row[3]])),
      education: previewGrid(["학교명", "재학기간", "전공", "비고"], getEducationEntries(employee).map((item) => [item[1].split(" ")[0] || item[1], item[0], item[1].split(" ").slice(1).join(" "), ""])),
      career: previewGrid(["회사명", "기간", "담당업무", "비고"], getCareerHistory(employee).map((item) => [deepestDept(employee), item[0], item[1], ""])),
      assignment: previewGrid(["발령구분", "발령일", "발령부서", "직급", "직책", "비고"], getAssignmentEntries(employee).map((row) => [row[0], row[1], row[2], row[5], row[6], row[7]])),
      training: previewGrid(["교육명", "시작일", "종료일", "교육기관", "비고"], employee.educationHistory.map((item) => [item[1], item[0], item[0], "사내/외 교육", ""])),
      memo: `<div class="codex-sheet-memo">${employee.memo}</div>`
    };
    const assignmentRows = getAssignmentEntries(employee);
    const infoPreview = `<div class="codex-sheet-top"><div class="codex-sheet-logo">AUTOPLUS</div><div class="codex-sheet-top-main"><table><tbody><tr><th>부서</th><td>${employeePath(employee)}</td><th>성명</th><td>${employee.name}</td></tr><tr><th>직급</th><td>${employee.grade}</td><th>직책</th><td>${employee.title}</td></tr><tr><th>주민등록번호</th><td>${employee.residentNumber || getResidentNumber(employee)}</td><th>입사일</th><td>${employee.hireDate}</td></tr><tr><th>생년월일</th><td>${employee.birthDate}</td><th>직군</th><td>${employee.jobFamily}</td></tr><tr><th>직전승급일</th><td>${employee.assignmentDate}</td><th>근속년수</th><td>${Math.floor(Number(employee.careerMonths || 0) / 12)}년 ${Number(employee.careerMonths || 0) % 12}개월</td></tr><tr><th>내선번호</th><td>${getCompanyPhone(employee)}</td><th>결혼여부</th><td>${employee.maritalStatus || getMaritalStatus(employee)}</td></tr><tr><th>연락처</th><td>${employee.phone}</td><th>E-Mail</th><td>${getCompanyEmail(employee)}</td></tr><tr><th>그룹웨어 ID</th><td>${employee.groupwareId || getGroupwareId(employee)}</td><th>개인 이메일</th><td>${getPersonalEmail(employee)}</td></tr><tr><th>주소</th><td colspan="3">${getAddress(employee)}</td></tr></tbody></table></div></div>`;
const detail = `<div class="codex-record-detail"><div class="codex-record-sheet"><div class="codex-record-sheet-head"><div class="codex-record-sheet-title">인사정보카드</div></div>${infoPreview}${buildSheetSection("학력사항", "education", ["학교명", "재학기간", "전공", "비고"], getEducationEntries(employee).map((item) => [item[1].split(" ")[0] || item[1], item[0], item[1].split(" ").slice(1).join(" "), ""]), tab === "education")}${buildSheetSection("경력사항", "career", ["회사명", "기간", "담당업무", "비고"], getCareerHistory(employee).map((item) => [deepestDept(employee), item[0], item[1], ""]), tab === "career")}${buildSheetSection("가족사항", "family", ["관계", "성명", "생년월일"], getFamilyEntries(employee), tab === "family")}${buildSheetSection("자격증", "certificate", ["자격증명", "발급기관", "취득일"], getCertificateEntries(employee).map((item) => [item[1], item[2], item[3]]), tab === "certificate")}${buildSheetSection("상벌사항", "award", ["상벌구분", "상벌명", "발생일", "사유"], getAwardEntries(employee), tab === "award")}${buildSheetSection("승급사항", "promotion", ["승급구분", "승급일", "소속부서", "직급", "직책", "비고"], getPromotionEntries(employee), tab === "promotion")}${buildSheetSection("발령사항", "assignment", ["발령구분", "발령일", "발령부서", "직군", "직원유형", "직급", "직책", "비고"], assignmentRows, tab === "assignment")}${buildSheetSection("교육사항", "training", ["교육명", "시작일", "종료일", "교육기관", "비고"], employee.educationHistory.map((item) => [item[1], item[0], item[0], "사내/외 교육", ""]), tab === "training")}${buildSheetSection("휴직사항", "leave", ["휴직유형", "시작일", "종료일", "진행상태", "비고"], getLeaveEntries(employee).map((row) => [row[0], row[1], row[2], getLeavePhase(row), row[3]]), tab === "leave")}</div></div>`;
    refs.cardWrap.innerHTML = `<div class="codex-record-shell" style="grid-template-columns:minmax(0,1fr)">${detail}</div>`;
  }
  function escapePrintHtml(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }
  function buildPrintRows(rows, headers) {
    const bodyRows = (rows && rows.length ? rows : [Array(headers.length).fill("-")]).map((row) => `<tr>${headers.map((_, index) => `<td>${escapePrintHtml(row[index] ?? "-")}</td>`).join("")}</tr>`).join("");
    return `<table class="print-table"><thead><tr>${headers.map((header) => `<th>${escapePrintHtml(header)}</th>`).join("")}</tr></thead><tbody>${bodyRows}</tbody></table>`;
  }
  function getGenderText(employee) {
    const resident = getResidentNumber(employee);
    const marker = (resident.split("-")[1] || "").charAt(0);
    if (["1", "3", "5", "7", "9"].includes(marker)) return "남";
    if (["2", "4", "6", "8", "0"].includes(marker)) return "여";
    return "";
  }
  function splitPeriodRange(periodText) {
    const value = String(periodText || "").replace(/\s+/g, " ").trim();
    const match = value.split("~").map((part) => part.trim());
    return {
      start: match[0] || "",
      end: match[1] || ""
    };
  }
  function fitRows(rows, length, width) {
    const normalized = (rows || []).map((row) => {
      const clone = Array(width).fill("");
      (row || []).slice(0, width).forEach((value, index) => {
        clone[index] = value ?? "";
      });
      return clone;
    });
    while (normalized.length < length) normalized.push(Array(width).fill(""));
    return normalized.slice(0, length);
  }
  function renderFixedRows(rows, width) {
    return rows.map((row) => `<tr>${Array.from({ length: width }).map((_, index) => `<td>${escapePrintHtml(row[index] || "")}</td>`).join("")}</tr>`).join("");
  }
  function getCareerPrintRows(employee) {
    if (employee.careerCompanyItems?.length) {
      return employee.careerCompanyItems.map((item) => {
        const range = splitPeriodRange(item[1] || "");
        return [item[0] || "", range.start, range.end, item[2] || "", item[3] || "", item[4] || ""];
      });
    }
    return getCareerHistory(employee).map((item) => {
      const range = splitPeriodRange(item[0]);
      return ["", range.start, range.end, `${employee.grade}/${employee.title}`, item[1] || "", ""];
    });
  }
  function splitEducationEntry(entryText) {
    const value = String(entryText || "").trim();
    if (!value) return { school: "", major: "", location: "" };
    const parts = value.split(" ");
    if (parts.length === 1) return { school: parts[0], major: "", location: "" };
    return {
      school: parts[0],
      major: parts.slice(1).join(" "),
      location: ""
    };
  }
  function buildRecordPrintHtml(employee) {
    const educationRows = fitRows(getEducationEntries(employee).map((item) => {
      const parsed = splitEducationEntry(item[1]);
      return [item[0], parsed.school, parsed.major, parsed.location, "", item[1]?.includes("고등학교") ? "졸업" : "졸업"];
    }), 5, 6);
    const careerRows = fitRows(getCareerPrintRows(employee), 8, 6);
    const familyRows = fitRows(getFamilyEntries(employee).map((item) => [item[0], item[1], item[2]]), 6, 3);
    const certificateRows = fitRows(getCertificateEntries(employee).map((item) => [item[1], item[2], item[3]]), 6, 3);
    const languageRows = fitRows([], 5, 4);
    const emergency = familyRows[0] || ["", "", ""];
    const photoCell = employee.photoDataUrl
      ? `<img src="${escapePrintHtml(employee.photoDataUrl)}" alt="증명사진" class="print-photo-img">`
      : `<div class="print-photo-placeholder">사진</div>`;
    return `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${escapePrintHtml(employee.name)} 인사정보카드</title>
<style>
  @page { size: A4 portrait; margin: 5mm; }
  * { box-sizing: border-box; }
  body { margin: 0; font-family: 'Malgun Gothic', 'Noto Sans KR', sans-serif; color: #152238; background: #fff; }
  .print-page { width: 200mm; min-height: 287mm; margin: 0 auto; }
  table { width: 100%; border-collapse: collapse; table-layout: fixed; }
  td, th { border: 1px solid #5f7088; padding: 0; text-align: center; vertical-align: middle; font-size: 9.5px; line-height: 1.12; word-break: keep-all; }
  .sheet-title { color: #0b35d2; font-size: 25px; font-weight: 800; letter-spacing: 7px; text-decoration: underline; text-underline-offset: 4px; }
  .logo-cell { width: 126px; height: 48px; font-size: 26px; font-weight: 800; color: #1f4fa6; }
  .logo-cell span { color: #04a1e8; }
  .section-label { width: 126px; background: #dbe7f5; font-size: 15px; font-weight: 700; letter-spacing: 2px; color: #18355b; }
  .field-head { background: #edf4fd; font-size: 9.5px; font-weight: 700; color: #18355b; }
  .field-cell { padding: 3px 5px; text-align: left; font-size: 9.5px; }
  .photo-wrap { height: 142px; }
  .print-photo-placeholder, .print-photo-img { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; }
  .print-photo-placeholder { color: #d40000; font-size: 13px; }
  .print-photo-img { object-fit: cover; }
  .body-row td { height: 23px; }
  .career-row td { height: 22px; }
  .mini-row td { height: 21px; }
  .watermark { color: rgba(36, 53, 82, 0.12); font-size: 56px; text-align: center; font-weight: 300; letter-spacing: 2px; }
  .dense { letter-spacing: 0; }
</style>
</head>
<body>
  <div class="print-page">
    <table>
      <colgroup>
        <col style="width:128px">
        <col style="width:122px">
        <col style="width:98px">
        <col style="width:122px">
        <col style="width:92px">
        <col style="width:122px">
        <col style="width:116px">
      </colgroup>
      <tr>
        <td class="logo-cell">AUTO<span>PLUS</span></td>
        <td colspan="6" class="sheet-title">인사기록카드</td>
      </tr>
      <tr>
        <td rowspan="5" class="photo-wrap">${photoCell}</td>
        <th class="field-head">성 명</th>
        <td class="field-cell" colspan="2">${escapePrintHtml(employee.name)}</td>
        <th class="field-head">주민등록번호</th>
        <td class="field-cell" colspan="2">${escapePrintHtml(getResidentNumber(employee))}</td>
      </tr>
      <tr>
        <th class="field-head">성 별</th>
        <td class="field-cell" colspan="2">${escapePrintHtml(getGenderText(employee))}</td>
        <th class="field-head">입 사 일</th>
        <td class="field-cell" colspan="2">${escapePrintHtml(employee.hireDate)}</td>
      </tr>
      <tr>
        <th class="field-head">결혼여부</th>
        <td class="field-cell" colspan="2">${escapePrintHtml(getMaritalStatus(employee))}</td>
        <th class="field-head">E - Mail</th>
        <td class="field-cell" colspan="2">${escapePrintHtml(getCompanyEmail(employee))}</td>
      </tr>
      <tr>
        <th class="field-head">연 락 처</th>
        <td class="field-cell" colspan="2">${escapePrintHtml(employee.phone)}</td>
        <th class="field-head">긴급연락처</th>
        <td class="field-cell">${escapePrintHtml(emergency[1] || "")}</td>
        <th class="field-head">관계</th>
        <td class="field-cell">${escapePrintHtml(emergency[0] || "")}</td>
      </tr>
      <tr>
        <th class="field-head">현 주 소</th>
        <td class="field-cell" colspan="5">${escapePrintHtml(getAddress(employee))}</td>
      </tr>
      <tr>
        <td rowspan="6" class="section-label">학 력</td>
        <th class="field-head" colspan="2">기간</th>
        <th class="field-head">학교명</th>
        <th class="field-head">전공</th>
        <th class="field-head">소재지</th>
        <th class="field-head">졸업구분</th>
      </tr>
      ${renderFixedRows(educationRows.map((row) => [row[0], "", row[1], row[2], row[3], row[4], row[5]]), 7).replaceAll("<tr>", '<tr class="body-row">')}
      <tr>
        <td rowspan="10" class="section-label">경력사항</td>
        <th class="field-head" colspan="2">회사명</th>
        <th class="field-head">근무기간(시작)</th>
        <th class="field-head">근무기간(종료)</th>
        <th class="field-head">직위/직책</th>
        <th class="field-head">담당업무</th>
      </tr>
      ${renderFixedRows(careerRows.map((row) => [row[0], "", row[1], row[2], row[3], row[4], row[5]]), 7).replaceAll("<tr>", '<tr class="career-row">')}
      <tr>
        <td colspan="7" class="watermark">1 페이지</td>
      </tr>
      <tr>
        <td rowspan="7" class="section-label">가족사항</td>
        <th class="field-head">관 계</th>
        <th class="field-head">성 명</th>
        <th class="field-head">생년월일</th>
        <td rowspan="7" class="section-label">자격증</td>
        <th class="field-head">자격증명</th>
        <th class="field-head">발급기관</th>
        <th class="field-head">취득일자</th>
      </tr>
      ${Array.from({ length: 6 }).map((_, index) => `<tr class="mini-row"><td>${escapePrintHtml(familyRows[index]?.[0] || "")}</td><td>${escapePrintHtml(familyRows[index]?.[1] || "")}</td><td>${escapePrintHtml(familyRows[index]?.[2] || "")}</td><td>${escapePrintHtml(certificateRows[index]?.[0] || "")}</td><td>${escapePrintHtml(certificateRows[index]?.[1] || "")}</td><td>${escapePrintHtml(certificateRows[index]?.[2] || "")}</td></tr>`).join("")}
      <tr>
        <td rowspan="6" class="section-label">외 국 어</td>
        <th class="field-head" colspan="2">공인시험명</th>
        <th class="field-head">언어구분</th>
        <th class="field-head" colspan="2">주관기관</th>
        <th class="field-head">취득일자</th>
      </tr>
      ${renderFixedRows(languageRows.map((row) => [row[0], "", row[1], row[2], "", row[3]]), 6).replaceAll("<tr>", '<tr class="mini-row">')}
    </table>
  </div>
</body>
</html>`;
  }
  function openRecordPrintView() {
    const employee = selectedEmployee();
    const printWindow = window.open("", "_blank", "width=1280,height=900");
    if (!printWindow) return;
    printWindow.document.open();
    printWindow.document.write(buildRecordPrintHtml(employee));
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
    }, 250);
  }
  function renderQuickRecord() {
    const employee = selectedEmployee();
    refs.cardWrap.style.gridTemplateColumns = "minmax(0, 1fr)";
    refs.cardWrap.style.width = "100%";
    refs.cardWrap.innerHTML = `<div class="codex-record-shell" style="grid-template-columns:minmax(0,1fr)"><div class="codex-record-detail"><div class="codex-record-section"><h4>기본 프로필</h4><div class="codex-record-grid"><div class="codex-record-field"><span class="label">사원번호</span><span class="value">${employee.id}</span></div><div class="codex-record-field"><span class="label">성명</span><span class="value">${employee.name}</span></div><div class="codex-record-field"><span class="label">직급</span><span class="value">${employee.grade}</span></div><div class="codex-record-field"><span class="label">직책</span><span class="value">${employee.title}</span></div><div class="codex-record-field"><span class="label">직군</span><span class="value">${employee.jobFamily}</span></div><div class="codex-record-field"><span class="label">직원유형</span><span class="value">${employee.employeeType}</span></div><div class="codex-record-field full"><span class="label">소속</span><span class="value">${employeePath(employee)}</span></div></div></div><div class="codex-record-section"><h4>기본 인사정보</h4><div class="codex-record-grid"><div class="codex-record-field"><span class="label">입사일</span><span class="value">${employee.hireDate}</span></div><div class="codex-record-field"><span class="label">퇴사일</span><span class="value">${employee.retireDate || "-"}</span></div><div class="codex-record-field"><span class="label">생년월일</span><span class="value">${employee.birthDate}</span></div><div class="codex-record-field"><span class="label">연락처</span><span class="value">${employee.phone}</span></div><div class="codex-record-field"><span class="label">최종학력</span><span class="value">${employee.education}</span></div><div class="codex-record-field"><span class="label">재직상태</span><span class="value">${statusBadge(getEffectiveStatus(employee))}</span></div><div class="codex-record-field"><span class="label">부서배정일</span><span class="value">${employee.assignmentDate}</span></div></div></div><div class="codex-record-section"><h4>안내</h4><div class="codex-record-note">이 화면은 통계 상세에서 여는 기본정보 전용 탭입니다. 경력, 발령이력, 교육이력 등 전체 내용은 상단의 인사기록카드 버튼을 통해 확인합니다.</div></div></div></div>`;
  }
  function openRecordDetailModal(tabId) {
    const employee = selectedEmployee();
    const titleMap = {
      overview: "기본정보 상세",
      hire: "입사정보 상세",
      personal: "신상정보 상세",
      leave: "휴직사항 상세",
      education: "학력사항 상세",
      career: "경력사항 상세",
      family: "가족사항 상세",
      certificate: "자격증 상세",
      award: "상벌사항 상세",
      promotion: "승급사항 상세",
      assignment: "발령사항 상세",
      training: "교육사항 상세",
      memo: "메모 상세"
    };
    const bodies = {
      overview: sheetFieldTable([
        ["사원번호", employee.id, "그룹웨어 ID", employee.groupwareId || getGroupwareId(employee)],
        ["직급", employee.grade, "직책", employee.title],
        ["직군", employee.jobFamily, "재직상태", getDisplayStatus(employee)],
        ["회사 이메일", getCompanyEmail(employee), "회사 전화", getCompanyPhone(employee)],
        ["소속", employeePath(employee), "", ""]
      ]),
      hire: renderHireInfoBlock(employee),
      personal: sheetFieldTable([
        ["주민등록번호", employee.residentNumber || getResidentNumber(employee), "결혼여부", employee.maritalStatus || getMaritalStatus(employee)],
        ["생년월일", employee.birthDate, "휴대전화", employee.phone],
        ["개인 이메일", getPersonalEmail(employee), "회사 전화", getCompanyPhone(employee)],
        ["주소", getAddress(employee), "", ""]
      ]),
      leave: previewGrid(["휴직유형", "시작일", "종료일", "진행상태", "비고"], getLeaveEntries(employee).map((row) => [row[0], row[1], row[2], getLeavePhase(row), row[3]])),
      education: previewGrid(["학교명", "재학기간", "전공", "비고"], getEducationEntries(employee).map((item) => [item[1].split(" ")[0] || item[1], item[0], item[1].split(" ").slice(1).join(" "), ""])),
      career: previewGrid(["회사명", "기간", "담당업무", "비고"], getCareerHistory(employee).map((item) => [deepestDept(employee), item[0], item[1], ""])),
      family: previewGrid(["관계", "성명", "생년월일"], getFamilyEntries(employee)),
      certificate: previewGrid(["자격증명", "발급기관", "취득일"], getCertificateEntries(employee).map((item) => [item[1], item[2], item[3]])),
      award: previewGrid(["상벌구분", "상벌명", "발생일", "사유"], getAwardEntries(employee)),
      promotion: previewGrid(["승급구분", "승급일", "소속부서", "직급", "직책", "비고"], getPromotionEntries(employee)),
      assignment: previewGrid(["발령구분", "발령일", "발령부서", "직군", "직원유형", "직급", "직책", "비고"], getAssignmentEntries(employee)),
      training: previewGrid(["교육명", "시작일", "종료일", "교육기관", "비고"], employee.educationHistory.map((item) => [item[1], item[0], item[0], "사내/외 교육", ""])),
      memo: `<div class="codex-sheet-memo">${employee.memo}</div>`
    };
    $("h3", recordDetailModal.root).textContent = titleMap[tabId] || "인사기록카드 상세";
    recordDetailModal.body.innerHTML = `<div class="codex-record-detail-modal-body">${bodies[tabId] || bodies.overview}</div>`;
    recordDetailModal.save.onclick = () => recordDetailModal.close();
    recordDetailModal.open();
  }
  function renderPendingOrgPanel(scope = "") {
    const pending = getPendingOrgChanges().filter((item) => !scope || item.view === scope);
    const label = scope === "org-edit" ? "조직코드 변경 예정" : scope === "level-edit" ? "레벨 변경 예정" : scope === "meta-edit" ? "기준코드 변경 예정" : "변경 예정 내역";
    const renderName = (item) => {
      if (item.payload?.kind === "org" && item.payload.row) return getOrgRowName(item.payload.row);
      if (item.payload?.kind === "level" && item.payload.level) return item.payload.level.name;
      if (item.payload?.kind === "meta" && item.payload.codeRecord) return item.payload.codeRecord.name;
      return item.itemName || "-";
    };
    return `<div class="codex-panel codex-panel-compact"><div class="codex-code-head"><h4>${label}</h4><div class="codex-secondary-actions"><button type="button" class="hr-btn btn-primary btn-xs" id="codeDraftApplyBtn" ${getPendingOrgChanges().length ? "" : "disabled"}>변경 적용</button><button type="button" class="hr-btn btn-outline btn-xs" id="codeDraftResetBtn" ${getPendingOrgChanges().length ? "" : "disabled"}>전체 취소</button></div></div>${pending.length ? `<div class="codex-code-history-mini">${pending.map((item) => `<div class="codex-note-box codex-note-box-compact codex-pending-item ${state.currentPendingChangeKey === item._key ? "is-selected" : ""}" data-pending-item="${item._key}"><div class="codex-pending-head"><strong>${item.action} · ${renderName(item)}</strong><div class="codex-secondary-actions"><button type="button" class="hr-btn btn-outline btn-xs" data-pending-open="${item._key}">수정</button><button type="button" class="hr-btn btn-outline btn-xs" data-pending-cancel="${item._key}">취소</button></div></div><div class="codex-pending-body">${item.detail || "-"}</div></div>`).join("")}</div>` : `<div class="codex-note-box codex-note-box-compact">아직 확정 전 변경 내역이 없습니다.</div>`}</div>`;
  }
  function renderCodes() {
    const orgRows = state.currentCodeView === "org-edit" ? getCodeDraftOrgBlueprint() : state.orgBlueprint;
    const orgSummary = getOrgSummary(orgRows);
    const draftLevelDefs = getCodeDraftLevelDefs();
    const draftMetaRegistry = state.codeDraft?.metaRegistry || state.metaRegistry;
    if (!state.currentCodeSelection && orgSummary[0]) state.currentCodeSelection = orgSummary[0].key;
    const historyRows = state.codeHistory.slice(0, 12);
    const selectedOrg = orgSummary.find((item) => item.key === state.currentCodeSelection) || orgSummary[0];
    const selectedOrgUsage = selectedOrg ? getOrgUsageStats(selectedOrg.key, orgRows) : { currentCount: 0, hireCount: 0, childCount: 0, descendantCount: 0 };
    const currentMeta = JSON.parse(JSON.stringify(draftMetaRegistry[state.currentMetaSelection] || []));
    if (!state.currentMetaCodeSelection && currentMeta[0]) state.currentMetaCodeSelection = currentMeta[0].code;
    const selectedMeta = currentMeta.find((item) => item.code === state.currentMetaCodeSelection) || currentMeta[0];
    const selectedMetaUsage = selectedMeta ? getMetaUsageStats(state.currentMetaSelection, selectedMeta.code) : { currentCount: 0, hireCount: 0 };
    const selectedLevel = state.currentLevelSelection === "NEW"
      ? { id: "", name: "", parent: "L1", desc: "" }
      : (draftLevelDefs.find((item) => item.id === state.currentLevelSelection) || draftLevelDefs[0]);
    const selectedLevelUsage = selectedLevel?.id ? getLevelUsageStats(selectedLevel.id) : { orgCount: 0, codeCount: 0 };
    const historyFilterOptions = [
      { id: "all", label: "전체" },
      { id: "조직코드", label: "조직코드" },
      { id: "레벨관리", label: "레벨관리" },
      { id: "직급코드", label: "직급코드" },
      { id: "직책코드", label: "직책코드" },
      { id: "직군코드", label: "직군코드" },
      { id: "직원유형코드", label: "직원유형코드" }
    ];
    const filteredHistoryRows = state.currentCodeHistoryFilter === "all"
      ? historyRows
      : historyRows.filter((item) => item.section === state.currentCodeHistoryFilter);
    const codeActions = `<div class="codex-secondary-actions"><button type="button" class="hr-btn btn-outline" data-code-view="overview">코드 현황</button><button type="button" class="hr-btn btn-outline" data-code-view="org-edit">조직코드 수정</button><button type="button" class="hr-btn btn-outline" data-code-view="level-edit">레벨관리</button><button type="button" class="hr-btn btn-outline" data-code-view="meta-edit">기준코드 수정</button><button type="button" class="hr-btn btn-outline" data-code-view="history">코드변경 이력</button></div>`;
    if (state.currentCodeView === "overview") {
      panels.codes.innerHTML = `<div class="hr-table-header" style="padding:0 0 14px;border-bottom:1px solid #eef2f7"><div><h3>코드관리</h3><div style="font-size:11px;color:#9095b0">조직, 직급, 직책, 직군, 직원유형 기준코드를 통합 관리합니다.</div></div>${codeActions}</div><div class="codex-grid-2-tight" style="margin-top:16px"><div class="codex-panel"><h4 style="font-size:13px;color:#1e3a5f;margin-bottom:12px">조직코드 현황</h4><div class="codex-code-table-wrap"><table><thead><tr><th>레벨</th><th>코드</th><th>조직</th><th>상위조직</th><th>사용</th><th>인원</th></tr></thead><tbody>${orgSummary.map((item) => `<tr><td>${item.level}</td><td>${item.code}</td><td>${item.name}</td><td>${item.parent}</td><td>${item.active ? "Y" : "N"}</td><td>${item.count}명</td></tr>`).join("")}</tbody></table></div></div><div class="codex-stack"><div class="codex-panel codex-panel-compact"><h4 style="font-size:13px;color:#1e3a5f;margin-bottom:12px">레벨 정의</h4>${draftLevelDefs.map((level) => `<div class="codex-note-box codex-note-box-compact"><strong>${level.id} · ${level.name}</strong>상위레벨: ${level.parent} · ${level.desc}</div>`).join("")}</div><div class="codex-panel codex-panel-compact"><h4 style="font-size:13px;color:#1e3a5f;margin-bottom:12px">기준코드 현황</h4>${["grade", "title", "family", "type"].map((kind) => `<div class="codex-note-box codex-note-box-compact"><strong>${getMetaKindConfig(kind).label}</strong>${(draftMetaRegistry[kind] || []).map((item) => `${item.code} ${item.name}`).join(" / ")}</div>`).join("")}</div><div class="codex-panel codex-panel-compact"><h4 style="font-size:13px;color:#1e3a5f;margin-bottom:12px">최근 코드변경 이력</h4><div class="codex-code-history-mini">${historyRows.length ? historyRows.map((item) => `<div class="codex-note-box codex-note-box-compact"><strong>${item.section} · ${item.action}</strong>${item.changedAt} · ${item.itemCode} · ${item.itemName}${item.detail ? `<br>${item.detail}` : ""}</div>`).join("") : `<div class="codex-note-box codex-note-box-compact">아직 저장된 코드 변경 이력이 없습니다.</div>`}</div></div></div></div>`;
    } else if (state.currentCodeView === "org-edit") {
      panels.codes.innerHTML = `<div class="hr-table-header" style="padding:0 0 14px;border-bottom:1px solid #eef2f7"><div><h3>조직코드 수정</h3><div style="font-size:11px;color:#9095b0">조직명/레벨/상위조직/코드값/사용여부를 관리합니다.</div></div>${codeActions}</div><div class="codex-grid-2" style="margin-top:16px"><div class="codex-panel"><div class="codex-code-head"><h4>조직코드 목록</h4><button type="button" class="hr-btn btn-primary" id="codeOrgNewBtn">신규 조직 추가</button></div><div class="codex-note-box codex-note-box-compact" style="margin-bottom:12px"><strong>운영 방식</strong>편집 내용은 우측 <em>변경 예정 내역</em>에 먼저 적재되고, <em>변경 적용</em> 시점에만 실제 기준정보에 반영됩니다.</div><div class="codex-code-table-wrap"><table><thead><tr><th>레벨</th><th>코드</th><th>조직</th><th>상위조직</th><th>사용</th><th>인원</th><th>편집</th></tr></thead><tbody>${orgSummary.map((item) => `<tr class="${item.key === state.currentCodeSelection ? "codex-table-selected" : ""}" data-org-select-row="${item.key}"><td>${item.level}</td><td>${item.code}</td><td>${item.name}</td><td>${item.parent}</td><td>${item.active ? "Y" : "N"}</td><td>${item.count}명</td><td><button type="button" class="hr-btn btn-outline btn-xs" data-org-edit-open="${item.key}">편집</button></td></tr>`).join("")}</tbody></table></div></div><div class="codex-stack"><div class="codex-panel codex-panel-compact"><div class="codex-code-head"><h4>선택 조직 정보</h4>${selectedOrg ? `<button type="button" class="hr-btn btn-outline btn-xs" data-org-edit-open="${selectedOrg.key}">편집</button>` : ""}</div>${selectedOrg ? `<div class="codex-form-grid"><label><span>조직명</span><input value="${selectedOrg.name}" readonly></label><label><span>코드값</span><input value="${selectedOrg.code}" readonly></label><label><span>레벨</span><input value="${selectedOrg.level} · ${getLevelLabel(selectedOrg.level)}" readonly></label><label><span>상위조직</span><input value="${selectedOrg.parent}" readonly></label><label><span>사용여부</span><input value="${selectedOrg.active ? "사용" : "중지"}" readonly></label><label><span>최종수정일</span><input value="${selectedOrg.updatedAt}" readonly></label><label class="span-2"><span>설명</span><textarea readonly rows="2">${selectedOrg.description || "-"}</textarea></label></div>` : `<div class="codex-note-box">조직을 선택하면 코드 정보를 볼 수 있습니다.</div>`}</div><div class="codex-panel codex-panel-compact"><h4>연계 정보</h4>${selectedOrg ? `<div class="codex-note-grid"><div class="codex-note-box codex-note-box-compact"><strong>현재 조직 사용 인원</strong>${selectedOrgUsage.currentCount}명</div><div class="codex-note-box codex-note-box-compact"><strong>입사시 기준 사용 인원</strong>${selectedOrgUsage.hireCount}명</div><div class="codex-note-box codex-note-box-compact"><strong>직계/전체 하위조직</strong>${selectedOrgUsage.childCount}개 / ${selectedOrgUsage.descendantCount}개</div><div class="codex-note-box codex-note-box-compact"><strong>사용처</strong>사원명부 · 인사기록카드 · 조직도 · 조직관리 · 발령입력</div></div><div class="codex-note-box codex-note-box-compact"><strong>운영 권장안</strong>코드값은 타 시스템 연계 키로 사용하고, 조직명/설명은 화면 표시용으로 운영합니다.</div>` : `<div class="codex-note-box">선택 조직 정보가 없습니다.</div>`}</div>${renderPendingOrgPanel("org-edit")}</div></div>`;
    } else if (state.currentCodeView === "level-edit") {
      panels.codes.innerHTML = `<div class="hr-table-header" style="padding:0 0 14px;border-bottom:1px solid #eef2f7"><div><h3>레벨관리</h3><div style="font-size:11px;color:#9095b0">조직 레벨 정의와 허용 상위 레벨 규칙을 관리합니다.</div></div>${codeActions}</div><div class="codex-grid-2-tight" style="margin-top:16px"><div class="codex-panel"><div class="codex-code-head"><h4>레벨 목록</h4><button type="button" class="hr-btn btn-primary" id="codeLevelNewBtn">신규 레벨 추가</button></div><div class="codex-note-box codex-note-box-compact" style="margin-bottom:12px"><strong>운영 방식</strong>레벨 정의 변경도 즉시 반영되지 않고, 우측 <em>레벨 변경 예정</em>에 적재된 후 <em>변경 적용</em> 시점에만 전체 기준에 반영됩니다.</div><table><thead><tr><th>레벨 ID</th><th>레벨명</th><th>상위레벨</th><th>설명</th></tr></thead><tbody>${draftLevelDefs.map((level) => `<tr class="${level.id === state.currentLevelSelection ? "codex-table-selected" : ""}" data-level-select-row="${level.id}"><td>${level.id}</td><td>${level.name}</td><td>${level.parent}</td><td>${level.desc}</td></tr>`).join("")}</tbody></table></div><div class="codex-stack"><div class="codex-panel"><h4>레벨 편집</h4><div class="codex-form-grid"><label><span>레벨 ID</span><input id="levelId" value="${selectedLevel.id || ""}" ${selectedLevel.id ? "readonly" : ""}></label><label><span>상위레벨</span><select id="levelParent"><option value="-">-</option>${["L1","L2","L3","L4"].map((item) => `<option value="${item}" ${item === (selectedLevel.parent || "-") ? "selected" : ""}>${item}</option>`).join("")}</select></label><label><span>레벨명</span><input id="levelName" value="${selectedLevel.name || ""}"></label><label><span>설명</span><input id="levelDesc" value="${selectedLevel.desc || ""}"></label></div><div class="codex-modal-actions"><button type="button" class="hr-btn btn-primary" id="levelSaveBtn">변경 예정 추가</button></div><div class="codex-note-box"><strong>적용 영향</strong>조직코드 생성 규칙, 상위조직 후보, 조직관리 이동 규칙에 공통 반영됩니다.</div><div class="codex-note-box"><strong>현재 사용 현황</strong>${selectedLevel.id ? `${selectedLevelUsage.orgCount}개 조직 · ${selectedLevelUsage.codeCount}개 코드` : `신규 레벨 정의`}</div></div><div class="codex-panel"><h4>최근 레벨 변경 이력</h4>${historyRows.filter((item) => item.section === "레벨관리").length ? historyRows.filter((item) => item.section === "레벨관리").map((item) => `<div class="codex-note-box"><strong>${item.action}</strong>${item.changedAt} · ${item.itemCode} · ${item.itemName}</div>`).join("") : `<div class="codex-note-box">레벨 변경 이력이 없습니다.</div>`}</div>${renderPendingOrgPanel("level-edit")}</div></div></div>`;
    } else if (state.currentCodeView === "history") {
      panels.codes.innerHTML = `<div class="hr-table-header" style="padding:0 0 14px;border-bottom:1px solid #eef2f7"><div><h3>코드변경 이력</h3><div style="font-size:11px;color:#9095b0">조직코드, 레벨관리, 기준코드의 변경 이력을 확인합니다.</div></div>${codeActions}</div><div class="codex-panel" style="margin-top:16px"><div class="codex-secondary-actions" style="margin-bottom:12px">${historyFilterOptions.map((item) => `<button type="button" class="hr-btn ${state.currentCodeHistoryFilter === item.id ? "btn-primary" : "btn-outline"}" data-code-history-filter="${item.id}">${item.label}</button>`).join("")}</div><table><thead><tr><th>변경시각</th><th>구분</th><th>처리</th><th>코드값</th><th>코드명</th><th>상세</th></tr></thead><tbody>${filteredHistoryRows.length ? filteredHistoryRows.map((item) => `<tr><td>${item.changedAt}</td><td>${item.section}</td><td>${item.action}</td><td>${item.itemCode}</td><td>${item.itemName}</td><td>${item.detail || "-"}</td></tr>`).join("") : `<tr><td colspan="6">선택한 조건의 코드 변경 이력이 없습니다.</td></tr>`}</tbody></table></div>`;
    } else {
      panels.codes.innerHTML = `<div class="hr-table-header" style="padding:0 0 14px;border-bottom:1px solid #eef2f7"><div><h3>기준코드 수정</h3><div style="font-size:11px;color:#9095b0">직급 / 직책 / 직군 / 직원유형 기준코드를 관리합니다.</div></div>${codeActions}</div><div class="codex-grid-2-tight" style="margin-top:16px"><div class="codex-panel"><div class="codex-code-head"><h4>기준코드 목록</h4><button type="button" class="hr-btn btn-primary" id="metaNewBtn">신규 코드 추가</button></div><div class="codex-note-box codex-note-box-compact" style="margin-bottom:12px"><strong>운영 방식</strong>기준코드도 수정 즉시 반영되지 않고, 우측 <em>${currentMetaLabel()} 변경 예정</em>에 적재된 뒤 <em>변경 적용</em> 시점에만 반영됩니다.</div><div class="codex-secondary-actions" style="margin-bottom:12px">${["grade", "title", "family", "type"].map((kind) => `<button type="button" class="hr-btn ${state.currentMetaSelection === kind ? "btn-primary" : "btn-outline"}" data-meta-select="${kind}">${getMetaKindConfig(kind).label}</button>`).join("")}</div><table><thead><tr><th>코드값</th><th>코드명</th><th>사용</th><th>설명</th></tr></thead><tbody>${currentMeta.map((item) => `<tr class="${item.code === state.currentMetaCodeSelection ? "codex-table-selected" : ""}" data-meta-code-row="${item.code}"><td>${item.code}</td><td>${item.name}</td><td>${item.active ? "Y" : "N"}</td><td>${item.description || "-"}</td></tr>`).join("")}</tbody></table></div><div class="codex-stack"><div class="codex-panel"><h4>${currentMetaLabel()} 편집</h4><div class="codex-form-grid"><label><span>코드값</span><input id="metaCode" value="${selectedMeta?.code || getNextMetaCode(state.currentMetaSelection, currentMeta)}" ${selectedMeta ? "readonly" : ""}></label><label><span>사용여부</span><select id="metaActive"><option value="Y" ${selectedMeta?.active !== false ? "selected" : ""}>사용</option><option value="N" ${selectedMeta?.active === false ? "selected" : ""}>중지</option></select></label><label class="span-2"><span>코드명</span><input id="metaName" value="${selectedMeta?.name || ""}"></label><label class="span-2"><span>설명</span><textarea id="metaDesc" rows="4">${selectedMeta?.description || ""}</textarea></label></div><div class="codex-modal-actions"><button type="button" class="hr-btn btn-primary" id="metaSaveBtn">변경 예정 추가</button></div><div class="codex-note-box"><strong>적용 영향</strong>신규등록, 인사기록카드, 조직관리, 인사발령 입력값은 이 기준코드를 참조합니다.</div><div class="codex-note-box"><strong>현재 사용 현황</strong>현재 기준 ${selectedMetaUsage.currentCount}명 · 입사시 기준 ${selectedMetaUsage.hireCount}명</div></div><div class="codex-panel"><h4>${currentMetaLabel()} 변경 예정</h4>${renderPendingOrgPanel("meta-edit")}</div></div></div>`;
    }
    $$("[data-code-view]", panels.codes).forEach((button) => {
      button.classList.toggle("btn-primary", button.dataset.codeView === state.currentCodeView);
      button.classList.toggle("btn-outline", button.dataset.codeView !== state.currentCodeView);
      button.addEventListener("click", () => {
        state.currentCodeView = button.dataset.codeView;
        renderCodes();
        renderNotesByView();
      });
    });
    $$("[data-org-select-row]", panels.codes).forEach((row) => {
      row.addEventListener("click", () => {
        state.currentCodeSelection = row.dataset.orgSelectRow;
        renderCodes();
      });
    });
    $$("[data-org-edit-open]", panels.codes).forEach((button) => {
      button.addEventListener("click", (event) => {
        event.stopPropagation();
        openCodeOrgModal("edit", button.dataset.orgEditOpen);
      });
    });
    $("#codeOrgNewBtn", panels.codes)?.addEventListener("click", () => openCodeOrgModal("add"));
    $("#codeDraftApplyBtn", panels.codes)?.addEventListener("click", applyCodeDraft);
    $("#codeDraftResetBtn", panels.codes)?.addEventListener("click", () => {
      discardCodeDraft();
      renderCodes();
    });
    $$("[data-pending-item]", panels.codes).forEach((item) => {
      item.addEventListener("click", () => {
        state.currentPendingChangeKey = item.dataset.pendingItem;
        renderCodes();
      });
    });
    $$("[data-pending-open]", panels.codes).forEach((button) => {
      button.addEventListener("click", (event) => {
        event.stopPropagation();
        const change = getPendingOrgChanges().find((item) => item._key === button.dataset.pendingOpen);
        if (!change) return;
        if (change.payload?.kind === "org") openCodeOrgModalFromPending(button.dataset.pendingOpen);
        else if (change.payload?.kind === "level") openLevelDraftFromPending(button.dataset.pendingOpen);
        else if (change.payload?.kind === "meta") openMetaDraftFromPending(button.dataset.pendingOpen);
      });
    });
    $$("[data-pending-cancel]", panels.codes).forEach((button) => {
      button.addEventListener("click", (event) => {
        event.stopPropagation();
        removePendingOrgChange(button.dataset.pendingCancel);
      });
    });
    $$("[data-level-select-row]", panels.codes).forEach((row) => {
      row.addEventListener("click", () => {
        state.currentLevelSelection = row.dataset.levelSelectRow;
        renderCodes();
      });
    });
    $("#codeLevelNewBtn", panels.codes)?.addEventListener("click", openNewLevelForm);
    $$("[data-meta-select]", panels.codes).forEach((button) => {
      button.addEventListener("click", () => {
        state.currentMetaSelection = button.dataset.metaSelect;
        state.currentMetaCodeSelection = getMetaRegistry(state.currentMetaSelection)[0]?.code || "";
        renderCodes();
      });
    });
    $$("[data-meta-code-row]", panels.codes).forEach((row) => {
      row.addEventListener("click", () => {
        state.currentMetaCodeSelection = row.dataset.metaCodeRow;
        renderCodes();
      });
    });
    $("#metaNewBtn", panels.codes)?.addEventListener("click", () => {
      state.currentMetaCodeSelection = "";
      renderCodes();
    });
    $$("[data-code-history-filter]", panels.codes).forEach((button) => {
      button.addEventListener("click", () => {
        state.currentCodeHistoryFilter = button.dataset.codeHistoryFilter;
        renderCodes();
      });
    });
    $("#levelSaveBtn", panels.codes)?.addEventListener("click", saveLevelCode);
    $("#metaSaveBtn", panels.codes)?.addEventListener("click", saveMetaCode);
  }
  function createAssignmentFlow() {
    return {
      stage: 1,
      changeDate: "2026.04.14",
      mode: "auto",
      orgDraft: cloneOrgBlueprint(state.orgBlueprint),
      baseRows: cloneOrgBlueprint(state.orgBlueprint),
      baseEmployees: state.employees.map((employee) => ({ ...employee })),
      editingRecordDate: "",
      selectedBeforeOrg: "ROOT",
      selectedAfterOrg: "ROOT",
      selectedPersonnelOrg: "ROOT",
      beforeExpandedKeys: ["ROOT"],
      afterExpandedKeys: ["ROOT"],
      personnelExpandedKeys: ["ROOT"],
      editingAfterOrgKey: "",
      dragAfterOrgKey: "",
      dragAfterDropMode: "",
      dragAfterDropTarget: "",
      orgSummary: { created: [], updated: [], deleted: [] },
      personnelActions: [],
      personnelInitialized: false,
      personnelPickerSelectedIds: [],
      personnelSearch: "",
      personnelOrgSuggestions: {},
      createdSourceKeys: [],
      deletedSourceKeys: [],
      movedSourceKeys: [],
      afterScrollToKey: ""
    };
  }
  function ensureAssignmentFlow() {
    if (!state.assignmentFlow) state.assignmentFlow = createAssignmentFlow();
    return state.assignmentFlow;
  }
  function getFlowBaseRows(flow) {
    return flow?.baseRows || state.orgBlueprint;
  }
  function getFlowBaseEmployees(flow) {
    return flow?.baseEmployees || state.employees;
  }
  function parseOrgKey(key) {
    if (!key || key === "ROOT") return { level: "ROOT", hq: "", office: "", team: "", part: "" };
    const [level, hq = "", office = "", team = "", part = ""] = key.split("|");
    return { level, hq, office, team, part };
  }
  function normalizeBlueprint(rows) {
    return normalizeSiblingOrders(completeBlueprintHierarchy(rows
        .filter((row) => row.hq)
        .map((row) => {
          const normalized = { ...row, hq: row.hq || "", office: row.office || "", team: row.team || "", part: row.part || "" };
          normalized.sourceKey = row.sourceKey || getOrgRowKey(normalized);
          normalized.displayOrder = row.displayOrder ?? 0;
          return normalized;
        }))
        .map((row, index) => ({
          ...row,
          code: row.code || buildOrgCode(getOrgRowLevel(row), index + 1),
          active: row.active !== false,
          description: row.description || "",
          createdAt: row.createdAt || "2023.08.16 00:00",
          updatedAt: row.updatedAt || "2026.04.14 09:00"
        })));
  }
  function getBlueprintRow(rows, key) {
    return rows.find((row) => getOrgRowKey(row) === key);
  }
  function getChildrenRows(rows, parentKey) {
    const sorter = (a, b) => (a.displayOrder ?? 0) - (b.displayOrder ?? 0) || getOrgRowName(a).localeCompare(getOrgRowName(b), "ko");
    if (parentKey === "ROOT") return rows.filter((row) => row.hq && !row.office).sort(sorter);
    const parent = parseOrgKey(parentKey);
    if (parent.level === "L1") return rows.filter((row) => row.hq === parent.hq && row.office && !row.team).sort(sorter);
    if (parent.level === "L2") return rows.filter((row) => row.hq === parent.hq && row.office === parent.office && row.team && !row.part).sort(sorter);
    if (parent.level === "L3") return rows.filter((row) => row.hq === parent.hq && row.office === parent.office && row.team === parent.team && row.part).sort(sorter);
    return [];
  }
  function getDescendantKeys(rows, key) {
    const directChildren = getChildrenRows(rows, key);
    return directChildren.flatMap((row) => [getOrgRowKey(row), ...getDescendantKeys(rows, getOrgRowKey(row))]);
  }
  function isAncestorOrgKey(ancestorKey, targetKey) {
    if (!ancestorKey || !targetKey) return false;
    if (ancestorKey === "ROOT") return true;
    const ancestor = parseOrgKey(ancestorKey);
    const target = parseOrgKey(targetKey);
    if (!ancestor.level || !target.level) return false;
    if (ancestor.hq !== target.hq) return false;
    if (ancestor.level === "L1") return true;
    if (ancestor.office !== target.office) return false;
    if (ancestor.level === "L2") return true;
    if (ancestor.team !== target.team) return false;
    if (ancestor.level === "L3") return true;
    return ancestor.part === target.part;
  }
  function getEmployeesInOrgKey(key, includeChildren = false, rows = state.orgBlueprint, employees = state.employees) {
    if (key === "ROOT") return employees.slice();
    const keys = includeChildren ? [key, ...getDescendantKeys(rows, key)] : [key];
    return employees.filter((employee) => keys.includes(getEmployeeNodeKey(employee)));
  }
  function summarizeOrgChanges(baseRows, nextRows) {
    const baseSourceMap = new Map(baseRows.map((row) => [row.sourceKey || getOrgRowKey(row), row]));
    const nextSourceMap = new Map(nextRows.map((row) => [row.sourceKey || getOrgRowKey(row), row]));
    const created = nextRows.filter((row) => !baseSourceMap.has(row.sourceKey || getOrgRowKey(row)));
    const deleted = baseRows.filter((row) => !nextSourceMap.has(row.sourceKey || getOrgRowKey(row)));
    const updated = nextRows
      .map((row) => {
        const before = baseSourceMap.get(row.sourceKey || getOrgRowKey(row));
        return before && getOrgRowPath(before) !== getOrgRowPath(row) ? { before, after: row } : null;
      })
      .filter(Boolean);
    return { created, updated, deleted };
  }
  function summarizeOrgChangesForFlow(baseRows, nextRows, flow) {
    const baseSourceMap = new Map(baseRows.map((row) => [row.sourceKey || getOrgRowKey(row), row]));
    const nextSourceMap = new Map(nextRows.map((row) => [row.sourceKey || getOrgRowKey(row), row]));
    const createdKeys = new Set((flow?.createdSourceKeys || []).filter(Boolean));
    const deletedKeys = new Set((flow?.deletedSourceKeys || []).filter(Boolean));
    const created = Array.from(createdKeys).map((key) => nextSourceMap.get(key)).filter(Boolean);
    const deleted = Array.from(deletedKeys).map((key) => baseSourceMap.get(key)).filter(Boolean);
    const updatedMap = new Map();
    nextRows
      .map((row) => {
        const sourceKey = row.sourceKey || getOrgRowKey(row);
        if (createdKeys.has(sourceKey)) return null;
        const before = baseSourceMap.get(sourceKey);
        if (!before || deletedKeys.has(sourceKey)) return null;
        return getOrgRowPath(before) !== getOrgRowPath(row) ? { before, after: row } : null;
      })
      .filter(Boolean)
      .forEach((item) => updatedMap.set(item.before.sourceKey || getOrgRowKey(item.before), item));
    (flow?.movedSourceKeys || []).forEach((sourceKey) => {
      if (createdKeys.has(sourceKey) || deletedKeys.has(sourceKey)) return;
      const before = baseSourceMap.get(sourceKey);
      const after = nextSourceMap.get(sourceKey);
      if (!before || !after) return;
      if (getOrgRowPath(before) === getOrgRowPath(after)) return;
      updatedMap.set(sourceKey, { before, after });
    });
    return { created, updated: Array.from(updatedMap.values()), deleted };
  }
  function markMovedSourceKeys(flow, previousRows, nextRows, sourceKeys) {
    const prevBySource = new Map(previousRows.map((row) => [row.sourceKey || getOrgRowKey(row), row]));
    const nextBySource = new Map(nextRows.map((row) => [row.sourceKey || getOrgRowKey(row), row]));
    const moved = new Set(flow.movedSourceKeys || []);
    (sourceKeys || []).forEach((sourceKey) => {
      const before = prevBySource.get(sourceKey);
      const after = nextBySource.get(sourceKey);
      if (!before || !after) return;
      if (getOrgRowPath(before) !== getOrgRowPath(after)) moved.add(sourceKey);
    });
    flow.movedSourceKeys = Array.from(moved);
  }
  function applyAssignmentAfterScroll() {
    const flow = state.assignmentFlow;
    if (!flow?.afterScrollToKey || flow.stage !== 2) return;
    const wrap = $(".codex-assignment-tree-wrap.is-after-wrap", panels.assignment);
    const target = $(`[data-assignment-org-node="${flow.afterScrollToKey}"]`, panels.assignment)?.closest(".codex-org-tree-node");
    if (!wrap || !target) return;
    wrap.scrollTop = Math.max(0, target.offsetTop - 12);
    flow.afterScrollToKey = "";
  }
  function cloneAssignmentRecord(record) {
    return {
      ...record,
      orgSummary: {
        created: (record.orgSummary?.created || []).map((row) => ({ ...row })),
        updated: (record.orgSummary?.updated || []).map((item) => ({ before: { ...item.before }, after: { ...item.after } })),
        deleted: (record.orgSummary?.deleted || []).map((row) => ({ ...row }))
      },
      personnelActions: (record.personnelActions || []).map((item) => ({ ...item, types: [...(item.types || [])] })),
      afterRows: cloneOrgBlueprint(record.afterRows || []),
      beforeRows: cloneOrgBlueprint(record.beforeRows || []),
      beforeEmployees: (record.beforeEmployees || []).map((item) => cloneEmployeeSnapshot(item)),
      afterEmployees: (record.afterEmployees || []).map((item) => cloneEmployeeSnapshot(item))
    };
  }
  function getProjectedEmployees(flow) {
    const nextRows = flow?.orgDraft || state.orgBlueprint;
    const baseRows = getFlowBaseRows(flow);
    const baseEmployees = getFlowBaseEmployees(flow);
    const nextBySource = new Map(nextRows.map((row) => [row.sourceKey || getOrgRowKey(row), row]));
    const currentByKey = new Map(baseRows.map((row) => [getOrgRowKey(row), row]));
    return baseEmployees.map((employee) => {
      const currentRow = currentByKey.get(getEmployeeNodeKey(employee));
      const projectedRow = currentRow ? nextBySource.get(currentRow.sourceKey || getOrgRowKey(currentRow)) : null;
      return projectedRow ? { ...employee, hq: projectedRow.hq, office: projectedRow.office, team: projectedRow.team, part: projectedRow.part } : { ...employee };
    });
  }
  function ensurePersonnelAction(flow, employee) {
    let action = flow.personnelActions.find((item) => item.employeeId === employee.id);
    if (!action) {
      action = {
        employeeId: employee.id,
        types: ["부서 이동"],
        targetOrgKey: getEmployeeNodeKey(employee),
        targetTitle: employee.title,
        targetGrade: employee.grade,
        note: "",
        enabled: true,
        removed: false,
        manual: false
      };
      flow.personnelActions.push(action);
    }
    return action;
  }
  function getActivePersonnelActions(flow) {
    return (flow.personnelActions || []).filter((item) => item.enabled !== false && item.removed !== true);
  }
  function hasPersonnelType(action, type) {
    return Array.isArray(action.types) ? action.types.includes(type) : action.type === type;
  }
  function setPersonnelTypeEnabled(action, type, enabled) {
    const nextTypes = new Set(Array.isArray(action.types) ? action.types : (action.type ? [action.type] : []));
    if (enabled) nextTypes.add(type);
    else nextTypes.delete(type);
    action.types = Array.from(nextTypes);
    if (!action.types.length) action.types = ["부서 이동"];
  }
  function syncPersonnelActionsForStage(flow) {
    const projectedEmployees = getProjectedEmployees(flow);
    const currentEmployees = new Map(state.employees.map((employee) => [employee.id, employee]));
    const affectedIds = new Set(projectedEmployees.filter((employee) => {
      const current = currentEmployees.get(employee.id);
      return current && getEmployeeNodeKey(current) !== getEmployeeNodeKey(employee);
    }).map((employee) => employee.id));
    projectedEmployees.forEach((employee) => {
      if (!affectedIds.has(employee.id)) return;
      const action = ensurePersonnelAction(flow, employee);
      action.removed = false;
    });
    flow.personnelActions.forEach((action) => {
      if (action.manual) return;
      action.removed = !affectedIds.has(action.employeeId);
    });
  }
  function getPersonnelEmployee(flow, employeeId) {
    const projected = getProjectedEmployees(flow).find((employee) => employee.id === employeeId);
    return projected || state.employees.find((employee) => employee.id === employeeId) || null;
  }
  function getPersonnelBaseEmployee(flow, employeeId) {
    return getFlowBaseEmployees(flow).find((employee) => employee.id === employeeId)
      || state.employees.find((employee) => employee.id === employeeId)
      || null;
  }
  function getPersonnelOrgOptions(flow) {
    return flow.orgDraft.map((row) => ({ key: getOrgRowKey(row), path: getOrgRowPath(row) }));
  }
  function getPersonnelInputValue(flow, action) {
    return action.targetOrgText ?? getPersonnelTargetPath(flow, action);
  }
  function buildPersonnelTypeOptions(employeeId, action) {
    const items = [
      ["부서 이동", "이동"],
      ["소속 제외", "제외"],
      ["책임자 임면", "임면"],
      ["승급", "승급"]
    ];
    return items.map(([value, label]) => {
      const checked = hasPersonnelType(action, value);
      return `<label class="codex-assignment-type-option ${checked ? "is-active" : ""}" title="${value}"><input type="checkbox" data-personnel-type="${employeeId}" data-personnel-type-value="${value}" ${checked ? "checked" : ""}><span>${label}</span></label>`;
    }).join("");
  }
  function getPersonnelOrgSuggestions(flow, action) {
    const keyword = (action.targetOrgText ?? "").trim().toLowerCase();
    if (!keyword) return [];
    const exactMatch = getPersonnelOrgOptions(flow).find((item) => item.path.toLowerCase() === keyword);
    if (exactMatch) return [];
    return getPersonnelOrgOptions(flow)
      .filter((item) => item.path.toLowerCase().includes(keyword))
      .slice(0, 8);
  }
  function renderPersonnelOrgSuggestionList(flow, employeeId, fieldRoot) {
    const employee = getPersonnelEmployee(flow, employeeId);
    const listNode = $(".codex-org-suggest-list", fieldRoot);
    if (!employee || !listNode) return;
    const action = ensurePersonnelAction(flow, employee);
    const suggestions = getPersonnelOrgSuggestions(flow, action);
    listNode.innerHTML = suggestions
      .map((item) => `<button type="button" class="codex-org-suggest-item" data-personnel-org-pick="${employee.id}" data-personnel-org-key="${item.key}"><span>${item.path}</span></button>`)
      .join("");
    listNode.classList.toggle("is-open", suggestions.length > 0);
    $$("[data-personnel-org-pick]", listNode).forEach((button) => button.addEventListener("click", () => {
      const targetRow = getBlueprintRow(flow.orgDraft, button.dataset.personnelOrgKey);
      if (!targetRow) return;
      action.targetOrgKey = button.dataset.personnelOrgKey;
      action.targetOrgText = getOrgRowPath(targetRow);
      const input = $('[data-personnel-org-text]', fieldRoot);
      if (input) {
        input.value = action.targetOrgText;
        input.focus();
      }
      renderPersonnelOrgSuggestionList(flow, employeeId, fieldRoot);
      renderAssignment();
    }));
  }
  function getPersonnelTargetPath(flow, action) {
    const targetRow = getBlueprintRow(flow.orgDraft, action.targetOrgKey);
    return targetRow ? getOrgRowPath(targetRow) : "조직 없음";
  }
  function getAssignmentExpandedKeys(prefix) {
    const flow = state.assignmentFlow;
    if (!flow) return state.orgExpandedKeys || ["ROOT"];
    if (prefix === "before") return flow.beforeExpandedKeys || ["ROOT"];
    if (prefix === "after") return flow.afterExpandedKeys || ["ROOT"];
    if (prefix === "personnel") return flow.personnelExpandedKeys || ["ROOT"];
    return state.orgExpandedKeys || ["ROOT"];
  }
  function setAssignmentExpanded(prefix, key, expanded) {
    const flow = state.assignmentFlow;
    if (!flow || !["before", "after", "personnel"].includes(prefix)) {
      setOrgExpanded(key, expanded);
      return;
    }
    const prop = prefix === "before" ? "beforeExpandedKeys" : prefix === "after" ? "afterExpandedKeys" : "personnelExpandedKeys";
    const list = new Set(flow[prop] || ["ROOT"]);
    if (expanded) list.add(key);
    else if (key !== "ROOT") list.delete(key);
    flow[prop] = Array.from(list);
  }
  function expandAssignmentAncestors(prefix, key) {
    if (!["before", "after", "personnel"].includes(prefix)) {
      expandOrgAncestors(key, false);
      return;
    }
    if (!key || key === "ROOT") {
      setAssignmentExpanded(prefix, "ROOT", true);
      return;
    }
    const [, hq = "", office = "", team = "", part = ""] = key.split("|");
    setAssignmentExpanded(prefix, "ROOT", true);
    if (hq) setAssignmentExpanded(prefix, ["L1", hq, "", "", ""].join("|"), true);
    if (office) setAssignmentExpanded(prefix, ["L2", hq, office, "", ""].join("|"), true);
    if (team) setAssignmentExpanded(prefix, ["L3", hq, office, team, ""].join("|"), true);
    if (part) setAssignmentExpanded(prefix, ["L4", hq, office, team, part].join("|"), true);
  }
  function getOrgDepthByKey(key) {
    if (!key || key === "ROOT") return 0;
    const row = parseOrgKey(key);
    if (row.level === "L1") return 1;
    if (row.level === "L2") return 2;
    if (row.level === "L3") return 3;
    if (row.level === "L4") return 4;
    return 0;
  }
  function getDepthClassByKey(key) {
    return `depth-${getOrgDepthByKey(key)}`;
  }
  function getNextLevelByParentKey(parentKey) {
    const depth = getOrgDepthByKey(parentKey);
    return ["L1", "L2", "L3", "L4"][depth] || "";
  }
  function buildRowForParent(parentKey, name) {
    const parent = parseOrgKey(parentKey || "ROOT");
    const level = getNextLevelByParentKey(parentKey);
    if (!level) return null;
    if (level === "L1") return { hq: name, office: "", team: "", part: "" };
    if (level === "L2") return { hq: parent.hq, office: name, team: "", part: "" };
    if (level === "L3") return { hq: parent.hq, office: parent.office, team: name, part: "" };
    return { hq: parent.hq, office: parent.office, team: parent.team, part: name };
  }
  function buildRowForLevel(parentKey, name, desiredDepth) {
    const parent = parseOrgKey(parentKey || "ROOT");
    if (desiredDepth <= 1) return { hq: name, office: "", team: "", part: "" };
    if (desiredDepth === 2) return { hq: parent.hq, office: name, team: "", part: "" };
    if (desiredDepth === 3) {
      const office = parent.level === "L2" ? parent.office : "";
      return { hq: parent.hq, office, team: name, part: "" };
    }
    const office = parent.level === "L2" ? parent.office : parent.office || "";
    const team = parent.level === "L3" ? parent.team : parent.team || "";
    return { hq: parent.hq, office, team, part: name };
  }
  function getSubtreeDepth(rows, key) {
    const children = getChildrenRows(rows, key);
    if (!children.length) return 1;
    return 1 + Math.max(...children.map((child) => getSubtreeDepth(rows, getOrgRowKey(child))));
  }
  function getNextSiblingOrder(rows, parentKey) {
    const siblings = getChildrenRows(rows, parentKey);
    return siblings.length ? Math.max(...siblings.map((row) => row.displayOrder ?? 0)) + 1 : 1;
  }
  function remapExpandedKeysBySource(previousRows, previousExpandedKeys, nextRows) {
    const previousByKey = new Map(previousRows.map((row) => [getOrgRowKey(row), row]));
    const nextBySource = new Map(nextRows.map((row) => [row.sourceKey || getOrgRowKey(row), getOrgRowKey(row)]));
    const nextExpanded = new Set(["ROOT"]);
    (previousExpandedKeys || []).forEach((key) => {
      if (key === "ROOT") return;
      const row = previousByKey.get(key);
      if (!row) return;
      const remapped = nextBySource.get(row.sourceKey || getOrgRowKey(row));
      if (remapped) nextExpanded.add(remapped);
    });
    return Array.from(nextExpanded);
  }
  function renameOrgInDraft(orgKey, nextName) {
    const flow = ensureAssignmentFlow();
    const row = getBlueprintRow(flow.orgDraft, orgKey);
    if (!row || !nextName) return;
    const previousRows = cloneOrgBlueprint(flow.orgDraft);
    const previousExpandedKeys = [...(flow.afterExpandedKeys || ["ROOT"])];
    const previous = { ...row };
    if (previous.part) row.part = nextName;
    else if (previous.team) row.team = nextName;
    else if (previous.office) row.office = nextName;
    else row.hq = nextName;
    flow.orgDraft.forEach((item) => {
      if (item === row) return;
      if (previous.hq && item.hq === previous.hq) item.hq = row.hq;
      if (previous.office && item.office === previous.office) item.office = row.office || item.office;
      if (previous.team && item.team === previous.team) item.team = row.team || item.team;
      if (previous.part && item.part === previous.part) item.part = row.part || item.part;
    });
    flow.orgDraft = normalizeBlueprint(flow.orgDraft);
    flow.orgSummary = summarizeOrgChangesForFlow(getFlowBaseRows(flow), flow.orgDraft, flow);
    flow.afterExpandedKeys = remapExpandedKeysBySource(previousRows, previousExpandedKeys, flow.orgDraft);
    flow.selectedAfterOrg = getOrgRowKey(flow.orgDraft.find((item) => (item.sourceKey || getOrgRowKey(item)) === (row.sourceKey || orgKey)) || flow.orgDraft[0] || { hq: "" }) || "ROOT";
    flow.editingAfterOrgKey = "";
  }
  function moveOrgInDraft(orgKey, targetParentKey, position = "into") {
    const flow = ensureAssignmentFlow();
    if (!orgKey || orgKey === "ROOT" || !targetParentKey || orgKey === targetParentKey) return;
    if (isAncestorOrgKey(orgKey, targetParentKey)) return;
    const sourceRow = getBlueprintRow(flow.orgDraft, orgKey);
    if (!sourceRow) return;
    const previousRows = cloneOrgBlueprint(flow.orgDraft);
    const previousExpandedKeys = [...(flow.afterExpandedKeys || ["ROOT"])];
    let targetRow = targetParentKey === "ROOT" ? null : getBlueprintRow(flow.orgDraft, targetParentKey);
    let resolvedPosition = position;
    let resolvedTargetKey = targetParentKey;
    let nextParentKey = (resolvedPosition === "before" || resolvedPosition === "after")
      ? (targetRow ? getParentKeyForRow(targetRow) : "ROOT")
      : targetParentKey;
    let nextLevel = getNextLevelByParentKey(nextParentKey);
    if (!nextLevel) return;
    const subtreeKeys = [orgKey, ...getDescendantKeys(flow.orgDraft, orgKey)];
    const subtreeSourceKeys = flow.orgDraft
      .filter((row) => subtreeKeys.includes(getOrgRowKey(row)))
      .map((row) => row.sourceKey || getOrgRowKey(row));
    const subtreeRows = flow.orgDraft.filter((row) => subtreeKeys.includes(getOrgRowKey(row))).map((row) => ({ ...row }));
    const outsideRows = flow.orgDraft.filter((row) => !subtreeKeys.includes(getOrgRowKey(row))).map((row) => ({ ...row }));
    const sourceMap = new Map(subtreeRows.map((row) => [getOrgRowKey(row), row]));
    const rebuilt = [];
    const sourceRootDepth = getOrgDepthByKey(orgKey);
    const targetRootDepth = getOrgDepthByKey(nextParentKey) + 1;
    const rebuildNode = (currentKey, parentKey, ancestorTrail = []) => {
      const current = sourceMap.get(currentKey);
      if (!current) return;
      const sourceDepth = getOrgDepthByKey(currentKey);
      const desiredDepth = Math.max(1, Math.min(4, targetRootDepth + (sourceDepth - sourceRootDepth)));
      const fallbackParent = { key: nextParentKey, depth: getOrgDepthByKey(nextParentKey) };
      const resolvedParent = [...ancestorTrail].reverse().find((item) => item.depth < desiredDepth) || fallbackParent;
      const nextRow = buildRowForLevel(resolvedParent.key, getOrgRowName(current), desiredDepth);
      if (!nextRow) return;
      nextRow.sourceKey = current.sourceKey || currentKey;
      nextRow.displayOrder = current.displayOrder ?? 0;
      rebuilt.push(nextRow);
      const childParentKey = getOrgRowKey(nextRow);
      const nextTrail = [...ancestorTrail, { key: childParentKey, depth: desiredDepth }];
      getChildrenRows(subtreeRows, currentKey).forEach((child) => rebuildNode(getOrgRowKey(child), childParentKey, nextTrail));
    };
    rebuildNode(orgKey, nextParentKey, []);
    const movedRoot = rebuilt.find((row) => (row.sourceKey || getOrgRowKey(row)) === (sourceRow.sourceKey || orgKey));
    if (movedRoot) {
      if (resolvedPosition === "before" && targetRow) movedRoot.displayOrder = (targetRow.displayOrder ?? 0) - 0.5;
      else if (resolvedPosition === "after" && targetRow) movedRoot.displayOrder = (targetRow.displayOrder ?? 0) + 0.5;
      else movedRoot.displayOrder = getNextSiblingOrder(outsideRows, nextParentKey);
    }
    flow.orgDraft = normalizeBlueprint([...outsideRows, ...rebuilt]);
    markMovedSourceKeys(flow, previousRows, flow.orgDraft, subtreeSourceKeys);
    flow.orgSummary = summarizeOrgChangesForFlow(getFlowBaseRows(flow), flow.orgDraft, flow);
    flow.afterExpandedKeys = remapExpandedKeysBySource(previousRows, previousExpandedKeys, flow.orgDraft);
    const moved = flow.orgDraft.find((row) => (row.sourceKey || getOrgRowKey(row)) === (sourceRow.sourceKey || orgKey));
    flow.selectedAfterOrg = moved ? getOrgRowKey(moved) : "ROOT";
    flow.afterScrollToKey = flow.selectedAfterOrg;
    expandAssignmentAncestors("after", flow.selectedAfterOrg);
    if (flow.selectedAfterOrg && flow.selectedAfterOrg !== "ROOT") setAssignmentExpanded("after", flow.selectedAfterOrg, true);
  }
  function cancelOrgChange(type, sourceKey) {
    const flow = ensureAssignmentFlow();
    const baseRows = getFlowBaseRows(flow);
    if (!sourceKey) return;
    const previousRows = cloneOrgBlueprint(flow.orgDraft);
    const previousExpandedKeys = [...(flow.afterExpandedKeys || ["ROOT"])];
    if (type === "created") {
      const current = flow.orgDraft.find((row) => (row.sourceKey || getOrgRowKey(row)) === sourceKey);
      if (!current) return;
      const deleteKeys = [getOrgRowKey(current), ...getDescendantKeys(flow.orgDraft, getOrgRowKey(current))];
      flow.createdSourceKeys = flow.createdSourceKeys.filter((key) => {
        const row = flow.orgDraft.find((item) => (item.sourceKey || getOrgRowKey(item)) === key);
        return row && !deleteKeys.includes(getOrgRowKey(row));
      });
      flow.orgDraft = normalizeBlueprint(flow.orgDraft.filter((row) => !deleteKeys.includes(getOrgRowKey(row))));
      flow.selectedAfterOrg = "ROOT";
      flow.afterScrollToKey = "ROOT";
    } else if (type === "deleted") {
      const base = baseRows.find((row) => (row.sourceKey || getOrgRowKey(row)) === sourceKey);
      if (!base) return;
      flow.deletedSourceKeys = flow.deletedSourceKeys.filter((key) => key !== sourceKey);
      flow.orgDraft = normalizeBlueprint([...flow.orgDraft, { ...base }]);
      const restored = flow.orgDraft.find((row) => (row.sourceKey || getOrgRowKey(row)) === sourceKey);
      flow.selectedAfterOrg = restored ? getOrgRowKey(restored) : flow.selectedAfterOrg;
      flow.afterScrollToKey = flow.selectedAfterOrg;
    } else if (type === "updated") {
      const base = baseRows.find((row) => (row.sourceKey || getOrgRowKey(row)) === sourceKey);
      const current = flow.orgDraft.find((row) => (row.sourceKey || getOrgRowKey(row)) === sourceKey);
      if (!base || !current) return;
      const previous = { ...current };
      current.hq = base.hq;
      current.office = base.office;
      current.team = base.team;
      current.part = base.part;
      current.displayOrder = base.displayOrder ?? current.displayOrder;
      flow.orgDraft.forEach((row) => {
        if (row === current) return;
        if (previous.hq && row.hq === previous.hq) row.hq = base.hq;
        if (previous.office && row.office === previous.office) row.office = base.office || row.office;
        if (previous.team && row.team === previous.team) row.team = base.team || row.team;
        if (previous.part && row.part === previous.part) row.part = base.part || row.part;
      });
      flow.orgDraft = normalizeBlueprint(flow.orgDraft);
      const restored = flow.orgDraft.find((row) => (row.sourceKey || getOrgRowKey(row)) === sourceKey);
      flow.selectedAfterOrg = restored ? getOrgRowKey(restored) : flow.selectedAfterOrg;
      flow.afterScrollToKey = flow.selectedAfterOrg;
    }
    flow.orgSummary = summarizeOrgChangesForFlow(getFlowBaseRows(flow), flow.orgDraft, flow);
    flow.afterExpandedKeys = remapExpandedKeysBySource(previousRows, previousExpandedKeys, flow.orgDraft);
    if (flow.selectedAfterOrg && flow.selectedAfterOrg !== "ROOT") expandAssignmentAncestors("after", flow.selectedAfterOrg);
    renderAssignment();
  }
  function buildTreeFromBlueprint(rows, selectedKey, includeControls = false, prefix = "landing") {
    const expandedKeys = new Set(["ROOT", ...(getAssignmentExpandedKeys(prefix) || [])]);
    const renderNode = (key, label) => {
      const children = getChildrenRows(rows, key);
      const hasChildren = children.length > 0;
      const expanded = expandedKeys.has(key) || (selectedKey && selectedKey !== key && isAncestorOrgKey(key, selectedKey));
      const selected = selectedKey === key;
      const selectedRow = key === "ROOT" ? null : getBlueprintRow(rows, key);
      const flow = state.assignmentFlow;
      const isAfterTree = prefix === "after";
      const isEditing = isAfterTree && flow?.editingAfterOrgKey === key;
      const dragHandle = isAfterTree
        ? (key !== "ROOT"
          ? `<button type="button" class="codex-org-row-handle" draggable="true" data-org-drag="${key}" title="끌어서 위치 변경">⋮⋮</button>`
          : `<span class="codex-org-row-handle codex-org-row-handle-placeholder" aria-hidden="true"></span>`)
        : "";
      const controls = ((includeControls && key !== "ROOT") || (isAfterTree && key !== "ROOT"))
        ? `<div class="codex-assignment-tree-actions"><button type="button" class="codex-icon-btn" data-org-inline-edit="${key}" title="부서명 변경">✎</button><button type="button" class="codex-icon-btn" data-org-delete="${key}" title="삭제">🗑</button></div>`
        : "";
      const codeHtml = isAfterTree && selectedRow?.code ? `<span class="codex-assignment-tree-code">${selectedRow.code}</span>` : "";
      const labelHtml = isEditing
        ? `<input class="codex-org-inline-input" data-org-inline-input="${key}" value="${label}">`
        : `<span class="codex-org-tree-label">${label}</span>${codeHtml}`;
      const buttonHtml = isEditing
        ? `<div class="codex-org-tree-btn is-editing-field">${labelHtml}</div>`
        : `<button type="button" class="codex-org-tree-btn" data-assignment-org-node="${key}" data-assignment-org-prefix="${prefix}">${labelHtml}</button>`;
      const dropAttrs = isAfterTree ? ` data-org-drop="${key}"` : "";
      const rowClass = isAfterTree ? "codex-org-tree-row is-after-row" : "codex-org-tree-row is-simple-row";
      const beforeLine = isAfterTree ? `<div class="codex-org-drop-line" data-org-drop-line="${key}" data-org-drop-position="before"></div>` : "";
      const afterLine = isAfterTree ? `<div class="codex-org-drop-line" data-org-drop-line="${key}" data-org-drop-position="after"></div>` : "";
      return `<div class="codex-org-tree-node ${selected ? "selected" : ""} ${expanded ? "is-open" : ""} ${isEditing ? "is-editing" : ""} ${isAfterTree ? "is-after-tree" : ""} ${getDepthClassByKey(key)}" data-org-depth="${getOrgDepthByKey(key)}">${beforeLine}<div class="${rowClass}"${dropAttrs}><button type="button" class="codex-org-tree-toggle-btn ${hasChildren ? "" : "is-leaf"}" data-org-toggle="${key}" data-org-toggle-prefix="${prefix}" ${hasChildren ? `aria-expanded="${expanded}"` : "disabled"}>${hasChildren ? (expanded ? "−" : "+") : "·"}</button>${dragHandle}${buttonHtml}${controls}</div>${hasChildren && expanded ? `<div class="codex-org-tree-children">${children.map((child) => renderNode(getOrgRowKey(child), getOrgRowName(child))).join("")}</div>` : ""}${afterLine}</div>`;
    };
    return renderNode("ROOT", "오토플러스");
  }
  function renderAssignmentLanding() {
    const { root, nodeMap } = buildOrgExplorerData();
    const selected = nodeMap.get(state.currentOrgNode) || root;
    const keyword = (state.assignmentLandingSearch || "").trim().toLowerCase();
    const selectedMembers = getEmployeesInOrgKey(selected.key, true).filter((employee) => {
      if (getEffectiveStatus(employee) === "퇴직") return false;
      if (!keyword) return true;
      return [employee.name, employee.id, employee.title, employeePath(employee)].join(" ").toLowerCase().includes(keyword);
    });
    const selectedRow = selected.key === "ROOT" ? null : getBlueprintRow(state.orgBlueprint, selected.key);
    const infoRows = selected.key === "ROOT"
      ? [["부서명", "오토플러스"], ["부서 코드", "ROOT"], ["부서 레벨", "ROOT"], ["최근 수정일", "2026.04.14 09:00"]]
      : [["부서명", getOrgRowName(selectedRow)], ["부서 코드", selectedRow?.code || "-"], ["부서 레벨", getOrgRowLevel(selectedRow)], ["최근 수정일", selectedRow?.updatedAt || "-"]];
    const memberRows = selectedMembers.map((employee) => `<tr><td>${employee.name}</td><td>${employee.id}</td><td>${employee.title}</td><td>${getDisplayStatus(employee)}</td></tr>`).join("");
    const historyRows = state.assignmentRecords.map((record) => `<tr><td><button type="button" class="codex-link-btn" data-assignment-history="${record.date}">${record.date}</button></td><td>${record.orgSummary.created.length + record.orgSummary.updated.length + record.orgSummary.deleted.length}건</td><td>${record.personnelActions.length}건</td><td>${record.mode === "auto" ? "자동" : "수동"}</td><td>${record.status || "완료"}</td><td><div class="codex-inline-actions"><button type="button" class="hr-btn btn-xs btn-outline" data-assignment-history-edit="${record.date}" ${hasCurrentPermission("assignment_execute") ? "" : "disabled"}>수정</button><button type="button" class="hr-btn btn-xs btn-outline" data-assignment-history-cancel="${record.date}" ${record.status === "취소" || !hasCurrentPermission("history_cancel") ? "disabled" : ""}>취소</button></div></td></tr>`).join("");
    const deletedRows = state.deletedOrgArchive.map((item) => `<tr><td>${item.date}</td><td>${item.path}</td></tr>`).join("");
    const tabs = `<div class="codex-assignment-tabs"><button type="button" class="codex-assignment-tab ${state.assignmentLandingTab === "org" ? "active" : ""}" data-assignment-tab="org">조직도</button><button type="button" class="codex-assignment-tab ${state.assignmentLandingTab === "history" ? "active" : ""}" data-assignment-tab="history">조직개편/인사발령 이력</button><button type="button" class="codex-assignment-tab ${state.assignmentLandingTab === "deleted" ? "active" : ""}" data-assignment-tab="deleted">삭제된 조직 목록</button></div>`;
    const body = state.assignmentLandingTab === "history"
      ? `<div class="codex-panel"><table><thead><tr><th>인사발령일</th><th>조직개편</th><th>인사발령</th><th>처리방식</th><th>상태</th><th>관리</th></tr></thead><tbody>${historyRows || `<tr><td colspan="6">이력이 없습니다.</td></tr>`}</tbody></table></div>`
      : state.assignmentLandingTab === "deleted"
        ? `<div class="codex-panel"><table><thead><tr><th>일자</th><th>삭제 조직</th></tr></thead><tbody>${deletedRows || `<tr><td colspan="2">삭제 이력이 없습니다.</td></tr>`}</tbody></table></div>`
        : `<div class="codex-assignment-landing-grid"><div class="codex-panel"><div class="codex-assignment-section-head"><h4>조직도</h4><div></div></div><div class="codex-assignment-tree-wrap">${buildTreeFromBlueprint(state.orgBlueprint, state.currentOrgNode, false, "landing")}</div></div><div class="codex-stack"><div class="codex-panel"><div class="codex-assignment-section-head"><h4>부서 정보</h4><button type="button" class="hr-btn btn-primary" id="startAssignmentWizardBtn" ${hasCurrentPermission("assignment_execute") ? "" : "disabled"}>조직개편/인사발령</button></div><table><tbody>${infoRows.map((row) => `<tr><th>${row[0]}</th><td>${row[1]}</td></tr>`).join("")}</tbody></table></div><div class="codex-panel"><div class="codex-assignment-section-head"><h4>구성원 정보</h4><div class="codex-admin-selection-meta"><strong>${selected.label}</strong><span>검색 결과 ${selectedMembers.length}명</span></div></div><input class="hr-search-input" id="assignmentLandingSearch" value="${state.assignmentLandingSearch || ""}" placeholder="이름, ID 검색"><table><thead><tr><th>이름</th><th>ID</th><th>직위</th><th>재직 상태</th></tr></thead><tbody>${memberRows || `<tr><td colspan="4">구성원이 없습니다.</td></tr>`}</tbody></table></div></div></div>`;
    panels.assignment.innerHTML = `<div class="codex-assignment-shell"><div class="hr-table-header" style="padding:0 0 14px;border-bottom:1px solid #eef2f7"><div><h3>조직 관리</h3><div style="font-size:11px;color:#9095b0">조직도, 조직개편/인사발령 이력, 삭제 조직 이력 조회</div></div></div>${tabs}<div class="codex-note-box" style="margin-top:16px"><strong>TIP</strong>조직개편/인사발령을 예약하면 해당 일자 기준으로 조직도와 인사정보가 함께 반영됩니다.</div><div style="margin-top:16px">${body}</div></div>`;
  }
  function getCurrentAdminCategory() {
    const categories = getAdminCategoriesSource();
    return categories.find((category) => category.id === state.currentAdminCategory) || categories[0];
  }
  function adminCategorySupportsViewer(category = getCurrentAdminCategory()) {
    return !!category && category.id !== "all_admin";
  }
  function getCurrentAdminMembers(category = getCurrentAdminCategory(), role = state.currentAdminRoleTab) {
    if (!category) return [];
    if (role === "viewer" && !adminCategorySupportsViewer(category)) return [];
    return role === "viewer" ? (category.viewers || []) : (category.managers || []);
  }
  function getCurrentAdminManager() {
    const members = getCurrentAdminMembers();
    return members.find((manager) => manager.id === state.currentAdminManagerId) || members[0] || null;
  }
  function ensureAdminSelection() {
    const category = getCurrentAdminCategory();
    if (state.currentAdminRoleTab === "viewer" && !adminCategorySupportsViewer(category)) {
      state.currentAdminRoleTab = "manager";
    }
    const members = getCurrentAdminMembers();
    if (!members.some((manager) => manager.id === state.currentAdminManagerId)) {
      state.currentAdminManagerId = members[0]?.id || "";
    }
  }
  function getAdminEmployeeCandidates(query) {
    const q = (query || "").trim().toLowerCase();
    if (!q) return state.employees.slice(0, 12);
    return state.employees.filter((employee) => {
      const org = getCurrentOrgLabel(employee);
      return [employee.name, getEmployeeLoginId(employee), employee.id, org].some((value) => String(value || "").toLowerCase().includes(q));
    }).slice(0, 12);
  }
  function getAdminRoleLabel(role = state.currentAdminRoleTab) {
    return role === "viewer" ? "열람자" : "관리자";
  }
  function getCurrentOrgLabel(employee) {
    return [employee.hq, employee.office, employee.team, employee.part].filter(Boolean).join(" > ") || "미지정";
  }
  function getAdminExpandedKeys() {
    return new Set(["ROOT", ...(state.adminExpandedKeys || ["ROOT"])]);
  }
  function setAdminExpanded(key, expanded) {
    const next = new Set(state.adminExpandedKeys || ["ROOT"]);
    if (expanded) next.add(key);
    else if (key !== "ROOT") next.delete(key);
    state.adminExpandedKeys = Array.from(next);
  }
  function expandAdminAncestors(key) {
    if (!key || key === "ROOT") {
      setAdminExpanded("ROOT", true);
      return;
    }
    const [, hq = "", office = "", team = "", part = ""] = key.split("|");
    setAdminExpanded("ROOT", true);
    if (hq) setAdminExpanded(["L1", hq, "", "", ""].join("|"), true);
    if (office) setAdminExpanded(["L2", hq, office, "", ""].join("|"), true);
    if (team) setAdminExpanded(["L3", hq, office, team, ""].join("|"), true);
    if (part) setAdminExpanded(["L4", hq, office, team, part].join("|"), true);
  }
  function buildAdminOrgTree(selectedKey) {
    const expandedKeys = getAdminExpandedKeys();
    const renderNode = (key, label) => {
      const children = getChildrenRows(state.orgBlueprint, key);
      const hasChildren = children.length > 0;
      const expanded = expandedKeys.has(key) || (selectedKey && selectedKey !== key && isAncestorOrgKey(key, selectedKey));
      const selected = selectedKey === key;
      return `<div class="codex-org-tree-node ${selected ? "selected" : ""} ${expanded ? "is-open" : ""}">
        <div class="codex-org-tree-row is-simple-row">
          <button type="button" class="codex-org-tree-toggle-btn ${hasChildren ? "" : "is-leaf"}" data-admin-org-toggle="${key}" ${hasChildren ? `aria-expanded="${expanded}"` : "disabled"}>${hasChildren ? (expanded ? "−" : "+") : "·"}</button>
          <button type="button" class="codex-org-tree-btn" data-admin-org-node="${key}"><span class="codex-org-tree-label">${label}</span></button>
        </div>
        ${hasChildren && expanded ? `<div class="codex-org-tree-children">${children.map((child) => renderNode(getOrgRowKey(child), getOrgRowName(child))).join("")}</div>` : ""}
      </div>`;
    };
    return `<div class="codex-admin-org-tree">${renderNode("ROOT", "오토플러스")}</div>`;
  }
  function getAdminOrgEmployees(query) {
    const employees = getEmployeesInOrgKey(state.currentAdminOrgKey || "ROOT", true)
      .filter((employee) => getEffectiveStatus(employee) !== "퇴직");
    const q = (query || "").trim().toLowerCase();
    if (!q) return employees;
    return employees.filter((employee) =>
      [employee.name, getEmployeeLoginId(employee), employee.id, getCurrentOrgLabel(employee)]
        .some((value) => String(value || "").toLowerCase().includes(q))
    );
  }
  function isViewerRole() {
    return state.currentAdminRoleTab === "viewer";
  }
  function getAdminRoleNote(category, role = state.currentAdminRoleTab) {
    if (category?.id === "all_admin") {
      return "전체 운영 관리자는 전 메뉴와 운영 기능을 총괄하는 전사 관리자입니다. 열람 전용 계정은 두지 않고 관리자만 운영합니다.";
    }
    if (role === "viewer") {
      if (category?.id === "directory_admin") return "열람자는 사원명부와 인사기록카드를 본인 / 전체 / 일부 범위로 함께 관리합니다. 일부 열람은 조직 또는 개별 구성원을 지정해 부여합니다.";
      return "열람자는 조회 권한 중심으로만 부여되며, 수정/반영 기능은 사용할 수 없습니다.";
    }
    return "관리자는 해당 메뉴의 전체 열람과 수정/반영 기능을 함께 수행할 수 있습니다.";
  }
  function getAdminCategoryDisplayName(category) {
    if (!category) return "관리자";
    const map = {
      all_admin: "전체 운영 관리자",
      directory_admin: "사원정보 운영",
      record_admin: "사원정보 운영",
      org_admin: "조직도 운영",
      assignment_admin: "조직관리 운영",
      code_admin: "기준코드 운영",
      auth_admin: "권한관리 운영"
    };
    return map[category.id] || category.label || "관리자";
  }
  function getAdminPermissionGroupsForCategory(category, role = state.currentAdminRoleTab) {
    const allowedIds = new Set(getAdminCategoryPermissionIds(category?.id || "", role));
    return adminPermissionGroups
      .map((group) => ({ ...group, items: group.items.filter((item) => allowedIds.has(item.id)) }))
      .filter((group) => group.items.length);
  }
  function getAllAdminMembers(categories = getAdminCategoriesSource()) {
    return (categories || []).flatMap((category) => [
      ...(category.managers || []).map((member) => ({ ...member, categoryId: category.id, categoryName: getAdminCategoryDisplayName(category) })),
      ...(category.viewers || []).map((member) => ({ ...member, categoryId: category.id, categoryName: getAdminCategoryDisplayName(category) }))
    ]);
  }
  function getAdminCopyCandidates(query, currentMember, category = getCurrentAdminCategory(), role = state.currentAdminRoleTab) {
    const q = String(query || "").trim().toLowerCase();
    return getAllAdminMembers()
      .filter((member) => member.id !== currentMember?.id)
      .filter((member) => {
        const haystack = [member.name, member.loginId, member.org, member.categoryName, member.role === "viewer" ? "열람자" : "관리자"].join(" ").toLowerCase();
        return !q || haystack.includes(q);
      })
      .filter((member) => role !== "viewer" || member.permissions?.menu_directory || member.permissions?.menu_record || member.permissions?.directory_view_self || member.permissions?.directory_view_all || member.permissions?.directory_view_partial)
      .slice(0, 16);
  }
  function buildCopiedPermissionPayload(category, role, sourceMember, currentMember) {
    const allowedIds = new Set(getAdminCategoryPermissionIds(category?.id || "", role));
    const enabled = Object.entries(sourceMember?.permissions || {})
      .filter(([permissionId, enabledFlag]) => enabledFlag && allowedIds.has(permissionId))
      .map(([permissionId]) => permissionId);
    const permissions = createPermissionMap(enabled);
    let viewScope = currentMember?.viewScope || "self";
    let viewTargets = [];
    if (role === "viewer" && category?.id === "directory_admin") {
      viewScope = sourceMember?.viewScope || (sourceMember?.permissions?.directory_view_all ? "all" : sourceMember?.permissions?.directory_view_partial ? "partial" : "self");
      viewTargets = viewScope === "partial" ? normalizeAdminViewTargets(sourceMember?.viewTargets || []) : [];
      permissions.directory_view_self = viewScope === "self";
      permissions.directory_view_all = viewScope === "all";
      permissions.directory_view_partial = viewScope === "partial";
    }
    return { permissions, viewScope, viewTargets };
  }
  function getAdminPreviewData(category, member, role = state.currentAdminRoleTab) {
    if (!category || !member) return null;
    const permissions = member.permissions || {};
    const menuLabels = adminPermissionGroups.find((group) => group.id === "menus")?.items.filter((item) => permissions[item.id]).map((item) => item.label) || [];
    const actionLabels = adminPermissionGroups
      .filter((group) => group.id === "actions" || group.id === "control")
      .flatMap((group) => group.items.filter((item) => permissions[item.id]).map((item) => item.label));
    const employee = member.employeeId ? state.employees.find((item) => item.id === member.employeeId) : null;
    let directoryScope = "사원정보 접근 없음";
    let directoryCount = 0;
    if (permissions.menu_directory) {
      if (permissions.directory_view_all || member.viewScope === "all") {
        directoryCount = state.employees.length;
        directoryScope = `전체 열람 (${directoryCount}명)`;
      } else if (permissions.directory_view_partial || member.viewScope === "partial") {
        directoryCount = getVisibleEmployeesFromTargets(member.viewTargets || []).length;
        directoryScope = `일부 열람 (${directoryCount}명)`;
      } else {
        directoryCount = employee ? 1 : 0;
        directoryScope = `본인 열람 (${directoryCount}명)`;
      }
    }
    let recordScope = "인사기록카드 접근 없음";
    let recordPolicy = "기록카드 미사용";
    if (permissions.menu_record) {
      recordScope = directoryScope === "사원정보 접근 없음" ? "사원정보 범위 미지정" : directoryScope;
      recordPolicy = permissions.employee_edit ? "기록카드 조회 및 수정" : "기록카드 조회만 가능";
    }
    return {
      menus: menuLabels,
      actions: actionLabels,
      employeeScope: directoryScope,
      directoryScope,
      recordScope,
      recordPolicy,
      viewTargetSummary: role === "viewer" && category.id === "directory_admin" ? getAdminViewTargetSummary(member) : "",
      activePermissionCount: Object.values(permissions).filter(Boolean).length
    };
  }
  function getAdminCompareSnapshot(category, member, role = state.currentAdminRoleTab) {
    if (!category || !member) return null;
    const allowedPermissionIds = new Set(getAdminCategoryPermissionIds(category.id, role));
    const labelById = new Map(adminPermissionGroups.flatMap((group) => group.items.map((item) => [item.id, item.label])));
    const enabledIds = Object.entries(member.permissions || {})
      .filter(([permissionId, enabled]) => enabled && allowedPermissionIds.has(permissionId))
      .map(([permissionId]) => permissionId);
    return {
      member,
      enabledIds,
      labels: enabledIds.map((permissionId) => labelById.get(permissionId) || permissionId).sort((a, b) => a.localeCompare(b, "ko")),
      directoryScope: category.id === "directory_admin" && role === "viewer" ? getAdminViewTargetSummary(member) : "",
      preview: getAdminPreviewData(category, member, role)
    };
  }
  function getAdminCompareDiff(category, currentMember, compareMember, role = state.currentAdminRoleTab) {
    const current = getAdminCompareSnapshot(category, currentMember, role);
    const compare = getAdminCompareSnapshot(category, compareMember, role);
    if (!current || !compare) return null;
    const currentSet = new Set(current.enabledIds);
    const compareSet = new Set(compare.enabledIds);
    const labelById = new Map(adminPermissionGroups.flatMap((group) => group.items.map((item) => [item.id, item.label])));
    const added = [...compareSet].filter((id) => !currentSet.has(id)).map((id) => labelById.get(id) || id).sort((a, b) => a.localeCompare(b, "ko"));
    const removed = [...currentSet].filter((id) => !compareSet.has(id)).map((id) => labelById.get(id) || id).sort((a, b) => a.localeCompare(b, "ko"));
    const shared = [...currentSet].filter((id) => compareSet.has(id)).map((id) => labelById.get(id) || id).sort((a, b) => a.localeCompare(b, "ko"));
    return {
      current,
      compare,
      added,
      removed,
      shared,
      sameDirectoryScope: current.directoryScope === compare.directoryScope
    };
  }
  function getAdminMemberPendingChange(category, role, memberId) {
    if (!category || !memberId) return null;
    const key = `perm|${category.id}|${role}|${memberId}`;
    return getAdminPendingChanges().find((item) => item._key === key) || null;
  }
  function getAdminChangeDraftValues(category, role, member) {
    const pending = getAdminMemberPendingChange(category, role, member?.id);
    return {
      changeReason: String(pending?.changeReason || member?.changeReason || "").trim(),
      expiresAt: completeDateInput(pending?.expiresAt || member?.expiresAt || "")
    };
  }
  function getAdminChangeMetaFromInputs() {
    const reasonInput = $("#adminChangeReason", panels.admin);
    const expireInput = $("#adminChangeExpireAt", panels.admin);
    return {
      changeReason: String(reasonInput?.value || "").trim(),
      expiresAt: completeDateInput(expireInput?.value || "")
    };
  }
  function getAdminAddMetaFromInputs() {
    const reasonInput = $("#adminAddReason", panels.admin);
    const expireInput = $("#adminAddExpireAt", panels.admin);
    return {
      changeReason: String(reasonInput?.value || "").trim(),
      expiresAt: completeDateInput(expireInput?.value || "")
    };
  }
  function isAdminReasonRequired(category, actionType) {
    if (!category) return false;
    if (category.id === "all_admin") return true;
    return ["copy", "add", "remove", "reset"].includes(actionType);
  }
  function ensureAdminChangeReason(category, actionType, reason, actionLabel) {
    if (!isAdminReasonRequired(category, actionType)) return true;
    if (String(reason || "").trim()) return true;
    window.alert(`${actionLabel}에는 변경 사유 입력이 필요합니다.`);
    const target = actionType === "add" ? $("#adminAddReason", panels.admin) : $("#adminChangeReason", panels.admin);
    target?.focus();
    return false;
  }
  function isAdminMemberExpired(member) {
    const value = parseDateValue(member?.expiresAt || "");
    return !!value && value < getCurrentBaseDateValue();
  }
  function getAdminMemberStatusLabel(member) {
    if (!member?.expiresAt) return "상시";
    return isAdminMemberExpired(member) ? `만료 (${member.expiresAt})` : `사용중 (${member.expiresAt})`;
  }
  function getAdminDaysUntilExpiry(member) {
    const expiryValue = parseDateValue(member?.expiresAt || "");
    const baseValue = getCurrentBaseDateValue();
    if (!expiryValue || !baseValue) return null;
    const diff = Math.round((expiryValue.getTime() - baseValue.getTime()) / 86400000);
    return Number.isFinite(diff) ? diff : null;
  }
  function getExpiringAdminMembers(days = 7) {
    return getAllAdminMembers()
      .map((member) => ({
        ...member,
        daysUntilExpiry: getAdminDaysUntilExpiry(member)
      }))
      .filter((member) => member.expiresAt && member.daysUntilExpiry !== null && member.daysUntilExpiry >= 0 && member.daysUntilExpiry <= days)
      .sort((a, b) => (a.daysUntilExpiry - b.daysUntilExpiry) || String(a.name || "").localeCompare(String(b.name || ""), "ko"));
  }
  function getAdminCleanupNotes(category) {
    if (!category) return [];
    const common = [
      "권한 화면에는 이 메뉴에서 실제 쓰는 권한만 노출합니다.",
      "메뉴 접근, 조회 범위, 수정/반영, 이력/통제 권한을 분리해 혼선을 줄입니다."
    ];
    if (category.id === "all_admin") {
      return [
        "전체 운영 관리자는 관리자만 두고 열람 전용 계정은 제거합니다.",
        "조직관리, 코드관리, 관리자 권한 관리는 전체 운영 관리자만 담당합니다.",
        "전사 운영/통제 역할이므로 권한 축약 없이 전체 권한을 일괄 부여합니다.",
        ...common
      ];
    }
    if (category.id === "directory_admin") {
      return [
        "사원정보 운영은 열람자 범위를 본인, 전체, 일부 열람으로 세분화합니다.",
        "일부 열람은 조직 단위와 개별 인원을 함께 저장할 수 있게 유지합니다.",
        ...common
      ];
    }
    return common;
  }
  function getAdminViewScopeLabel(member) {
    if (!member) return "-";
    if (member.viewScope === "all") return "전체 열람";
    if (member.viewScope === "partial") return "일부 열람";
    return "본인 열람";
  }
  function getAdminViewTargetSummary(member) {
    if (!member || member.viewScope !== "partial") return getAdminViewScopeLabel(member);
    const targets = normalizeAdminViewTargets(member.viewTargets || []);
    if (!targets.length) return "일부 열람(대상 미지정)";
    const orgCount = targets.filter((target) => target.type === "org").length;
    const employeeCount = targets.filter((target) => target.type === "employee").length;
    const counts = [orgCount ? `조직 ${orgCount}` : "", employeeCount ? `개별 ${employeeCount}` : ""].filter(Boolean).join(" · ");
    const preview = targets.slice(0, 3).map((target) => target.label).join(", ");
    return counts ? `${counts}${preview ? ` · ${preview}` : ""}` : preview;
  }
  function renderAdmin() {
    if (!panels.admin) return;
    ensureAdminSelection();
    const adminCategories = getAdminCategoriesSource();
    const category = getCurrentAdminCategory();
    const viewerSupported = adminCategorySupportsViewer(category);
    const currentManager = getCurrentAdminManager();
    const currentMembers = getCurrentAdminMembers(category);
    const canAdminEdit = hasCurrentPermission("admin_edit");
    const allMembers = adminCategories.flatMap((item) => [...(item.managers || []), ...(item.viewers || [])]);
    const duplicateLogin = !!(state.adminCandidateSelection || []).length && (state.adminCandidateSelection || []).some((employeeId) => {
      const employee = state.employees.find((item) => item.id === employeeId);
      return employee && allMembers.some((member) => member.loginId === getEmployeeLoginId(employee));
    });
    const candidateRows = getAdminOrgEmployees(state.adminAddQuery);
    const sectionGroups = adminCategories.reduce((acc, item) => {
      if (!acc[item.section]) acc[item.section] = [];
      acc[item.section].push(item);
      return acc;
    }, {});
    const roleSummary = `${getAdminRoleLabel()} ${currentMembers.length}명`;
    const selectedOrgRow = state.currentAdminOrgKey === "ROOT" ? null : getBlueprintRow(state.orgBlueprint, state.currentAdminOrgKey);
    const selectedOrgLabel = selectedOrgRow ? getOrgRowPath(selectedOrgRow) : "오토플러스";
    const selectedOrgMembers = getEmployeesInOrgKey(state.currentAdminOrgKey || "ROOT", true).filter((employee) => getEffectiveStatus(employee) !== "퇴직");
    const filteredScopeMembers = selectedOrgMembers.filter((employee) => !(state.adminScopeQuery || "") || [employee.name, employee.id, getEmployeeLoginId(employee)].join(" ").toLowerCase().includes((state.adminScopeQuery || "").toLowerCase()));
    const selectedCandidateEmployees = (state.adminCandidateSelection || []).map((employeeId) => state.employees.find((item) => item.id === employeeId)).filter(Boolean);
    const selectedScopeEmployees = (state.adminScopeSelection || []).map((employeeId) => state.employees.find((item) => item.id === employeeId)).filter(Boolean);
    const currentScopeTargets = normalizeAdminViewTargets(currentManager?.viewTargets || []);
    const pendingChanges = getAdminPendingChanges();
    const showViewerScope = state.currentAdminRoleTab === "viewer" && category?.id === "directory_admin";
    const permissionGroups = getAdminPermissionGroupsForCategory(category, state.currentAdminRoleTab);
    const cleanupNotes = getAdminCleanupNotes(category);
    const copyCandidates = getAdminCopyCandidates(state.adminCopyQuery, currentManager, category, state.currentAdminRoleTab);
    const copySourceMember = getAllAdminMembers().find((member) => member.id === state.adminCopySourceId) || null;
    const compareCandidates = getAdminCopyCandidates(state.adminCompareQuery, currentManager, category, state.currentAdminRoleTab);
    const compareSourceMember = getAllAdminMembers().find((member) => member.id === state.adminCompareSourceId) || null;
    const compareDiff = getAdminCompareDiff(category, currentManager, compareSourceMember, state.currentAdminRoleTab);
    const previewData = getAdminPreviewData(category, currentManager, state.currentAdminRoleTab);
    const changeDraftValues = getAdminChangeDraftValues(category, state.currentAdminRoleTab, currentManager);
    const expiringMembers = getExpiringAdminMembers(7);
    const adminActions = `<div class="codex-secondary-actions">${hasPendingAdminChanges() ? `<button type="button" class="hr-btn btn-outline" id="adminDraftResetBtn" ${canAdminEdit ? "" : "disabled"}>전체 취소</button><button type="button" class="hr-btn btn-primary" id="adminDraftApplyBtn" ${canAdminEdit ? "" : "disabled"}>변경 적용 (${pendingChanges.length})</button>` : `<button type="button" class="hr-btn btn-outline" disabled>변경 예정 없음</button>`}</div>`;
    const pendingPanel = `<div class="codex-panel"><div class="codex-code-head"><h4>변경 예정 내역</h4><span class="codex-admin-sub">${pendingChanges.length}건</span></div>${pendingChanges.length ? pendingChanges.map((item) => `<div class="codex-note-box codex-note-box-compact ${item._key === state.currentAdminPendingKey ? "is-selected" : ""}" data-admin-pending-row="${item._key}"><strong>${item.categoryLabel || getAdminCategoryDisplayName(findAdminCategoryIn(adminCategories, item.categoryId) || { id: item.categoryId, label: item.categoryId })} · ${item.role === "viewer" ? "열람자" : "관리자"} · ${item.kind === "add-members" ? "추가" : item.kind === "remove-members" ? "제거" : "권한 변경"}</strong>${item.changedAt}${item.summary ? `<br>${item.summary}` : ""}${item.changeReason ? `<br>사유: ${item.changeReason}` : ""}${item.expiresAt ? `<br>만료일: ${item.expiresAt}` : ""}<div class="codex-inline-actions"><button type="button" class="hr-btn btn-outline btn-xs" data-admin-pending-edit="${item._key}">수정</button><button type="button" class="hr-btn btn-outline btn-xs" data-admin-pending-cancel="${item._key}">취소</button></div></div>`).join("") : `<div class="codex-note-box">저장 전 검토할 관리자 변경이 없습니다.</div>`}</div>`;
    const expiringPanel = `<div class="codex-panel"><div class="codex-code-head"><h4>만료 예정 권한</h4><span class="codex-admin-sub">7일 이내 ${expiringMembers.length}건</span></div>${expiringMembers.length ? expiringMembers.map((member) => `<div class="codex-note-box codex-note-box-compact"><strong>${member.name} (${member.loginId})</strong><br>${member.categoryName || getAdminCategoryDisplayName(findAdminCategoryIn(adminCategories, member.categoryId) || { id: member.categoryId, label: member.categoryId })} · ${member.role === "viewer" ? "열람자" : "관리자"} · ${member.org}<br>만료일: ${member.expiresAt} ${member.daysUntilExpiry === 0 ? "(오늘)" : `(${member.daysUntilExpiry}일 남음)`}${member.changeReason ? `<br>사유: ${member.changeReason}` : ""}</div>`).join("") : `<div class="codex-note-box">7일 이내 만료 예정 권한이 없습니다.</div>`}</div>`;
    const historyPanel = `<div class="codex-panel"><div class="codex-code-head"><h4>관리자 권한 변경 이력</h4><span class="codex-admin-sub">${state.adminHistory.length}건</span></div>${renderAdminHistoryTable()}</div>`;
    const permissionRows = permissionGroups.map((group) => `
      <div class="codex-admin-perm-group">
        <div class="codex-admin-perm-head">
          <div class="codex-admin-perm-title">${group.label}</div>
          <div class="codex-secondary-actions">
            <button type="button" class="hr-btn btn-outline btn-xs" data-admin-group-enable="${group.id}" ${currentManager && !isViewerRole() && canAdminEdit ? "" : "disabled"}>전체 선택</button>
            <button type="button" class="hr-btn btn-outline btn-xs" data-admin-group-disable="${group.id}" ${currentManager && !isViewerRole() && canAdminEdit ? "" : "disabled"}>전체 해제</button>
          </div>
        </div>
        ${group.items.map((item) => `
          <label class="codex-admin-perm-item">
            <input type="checkbox" data-admin-permission="${item.id}" ${currentManager?.permissions?.[item.id] ? "checked" : ""} ${currentManager && !isViewerRole() && canAdminEdit ? "" : "disabled"}>
            <div>
              <strong>${item.label}</strong>
              <span>${item.desc}</span>
            </div>
          </label>
        `).join("")}
      </div>
    `).join("");
    panels.admin.innerHTML = `
      <div class="hr-table-header" style="padding:0 0 14px;border-bottom:1px solid #eef2f7">
        <div>
          <h3>관리자 권한 설정</h3>
          <div style="font-size:11px;color:#9095b0">실제 운영 메뉴 기준으로 관리자와 열람자를 나누고, 조회범위와 수정권한을 세밀하게 관리합니다.</div>
        </div>
        ${adminActions}
      </div>
      <div class="codex-admin-layout" style="margin-top:16px">
        <div class="codex-panel codex-admin-side">
          ${Object.entries(sectionGroups).map(([section, items]) => `
            <div class="hr-sidebar-section codex-admin-section">${section}</div>
            ${items.map((item) => `
              <button type="button" class="codex-admin-category ${item.id === category?.id ? "active" : ""}" data-admin-category="${item.id}">
                <span>${getAdminCategoryDisplayName(item)}</span>
                <em>${adminCategorySupportsViewer(item) ? `관 ${item.managers.length} / 열 ${item.viewers?.length || 0}` : `관 ${item.managers.length}`}</em>
              </button>
            `).join("")}
          `).join("")}
        </div>
        <div class="codex-stack">
          <div class="codex-panel">
            <div class="codex-code-head">
              <div>
                <h4>${getAdminCategoryDisplayName(category)}</h4>
                <div class="codex-admin-sub">${category?.desc || ""}</div>
              </div>
              <button type="button" class="hr-btn btn-primary" id="adminAddToggleBtn" ${canAdminEdit ? "" : "disabled"}>${getAdminRoleLabel()} 일괄 추가</button>
            </div>
            <div class="codex-admin-role-tabs">
              <button type="button" class="codex-admin-role-tab ${state.currentAdminRoleTab === "manager" ? "active" : ""}" data-admin-role="manager">관리자</button>
              ${viewerSupported ? `<button type="button" class="codex-admin-role-tab ${state.currentAdminRoleTab === "viewer" ? "active" : ""}" data-admin-role="viewer">열람자</button>` : `<button type="button" class="codex-admin-role-tab" disabled>열람자 미운영</button>`}
            </div>
            <div class="codex-admin-summary">
              <div class="codex-note-box codex-note-box-compact">
                <strong>${getAdminCategoryDisplayName(category)}</strong> · ${roleSummary} · 전체 등록 인원 ${allMembers.length}명
              </div>
              <div class="codex-note-box codex-note-box-compact">${getAdminRoleNote(category)}</div>
              ${cleanupNotes.length ? `<div class="codex-note-box codex-note-box-compact"><strong>현재 운영 원칙</strong><br>${cleanupNotes.join("<br>")}</div>` : ""}
            </div>
              <div class="codex-admin-add ${state.adminAddOpen ? "is-open" : ""}">
                <div class="codex-admin-add-layout is-structured">
                  <div class="codex-admin-picker codex-panel">
                    <div class="codex-admin-picker-head">
                      <div>
                        <strong>${getAdminRoleLabel()} 추가 대상 선택</strong>
                        <span>조직을 먼저 고른 뒤 구성원을 선택하고, 우측 추가 예정 목록에서 일괄 반영합니다.</span>
                      </div>
                    </div>
                    <div class="codex-admin-org-layout">
                      <div class="codex-admin-org-column">
                        <div class="codex-admin-org-title">조직 선택</div>
                        <div class="codex-assignment-tree-wrap codex-admin-org-wrap">${buildAdminOrgTree(state.currentAdminOrgKey || "ROOT")}</div>
                      </div>
                      <div class="codex-admin-org-column">
                        <div class="codex-admin-org-title">구성원 선택</div>
                        <div class="codex-admin-org-toolbar">
                          <input id="adminAddQuery" class="hr-search-input" value="${state.adminAddQuery || ""}" placeholder="선택 조직 내 이름, 아이디, 사번 검색">
                          <div class="codex-form-grid" style="grid-template-columns:repeat(2,minmax(0,1fr))">
                            <label><span>부여 사유</span><input id="adminAddReason" class="hr-search-input" placeholder="예: 인사팀 운영 대행"></label>
                            <label><span>임시 만료일</span><input id="adminAddExpireAt" class="hr-search-input" placeholder="YYYYMMDD"></label>
                          </div>
                          <div class="codex-admin-selection-meta">
                            <strong>${selectedOrgLabel}</strong>
                            <span>대상 ${selectedOrgMembers.length}명 · 검색 결과 ${candidateRows.length}명</span>
                          </div>
                        </div>
                        ${candidateRows.length ? `<div class="codex-admin-candidates is-table">${candidateRows.map((employee) => `
                          <label class="codex-admin-candidate">
                            <input type="checkbox" data-admin-candidate-check="${employee.id}" ${(state.adminCandidateSelection || []).includes(employee.id) ? "checked" : ""}>
                            <div>
                              <strong>${employee.name}</strong>
                              <span>${getEmployeeLoginId(employee)} · ${getCurrentOrgLabel(employee)}</span>
                              <em>${employee.grade} · ${employee.title || "팀원"} · ${getDisplayStatus(employee)}</em>
                            </div>
                          </label>
                        `).join("")}</div>` : `<div class="codex-note-box codex-note-box-compact">선택한 조직에 표시할 대상자가 없습니다.</div>`}
                      </div>
                    </div>
                  </div>
                  <div class="codex-admin-selected codex-panel">
                    <div class="codex-admin-selected-title">추가 예정 ${getAdminRoleLabel()} <span>${selectedCandidateEmployees.length}명</span></div>
                    ${(state.adminCandidateSelection || []).length ? `
                      <div class="codex-admin-selected-list">
                        ${selectedCandidateEmployees.map((employee) => `
                          <div class="codex-admin-selected-item">
                            <div>
                              <strong>${employee.name}</strong>
                              <span>${getCurrentOrgLabel(employee)}</span>
                            </div>
                            <button type="button" class="hr-btn btn-outline btn-xs" data-admin-chip-remove="${employee.id}">제외</button>
                          </div>
                        `).join("")}
                      </div>
                    ` : `<div class="codex-note-box codex-note-box-compact">조직도에서 조직을 선택하고 구성원을 체크하면 여기에 추가 예정 인원이 쌓입니다.</div>`}
                  </div>
                </div>
                ${duplicateLogin ? `<div class="codex-warning-text">선택한 대상 중 이미 관리자/열람자로 등록된 사용자가 포함되어 있습니다. 중복 등록은 제외됩니다.</div>` : ""}
                <div class="codex-modal-actions">
                  <button type="button" class="hr-btn btn-outline" id="adminAddCancelBtn">취소</button>
                <button type="button" class="hr-btn btn-primary" id="adminAddSaveBtn" ${!(state.adminCandidateSelection || []).length ? "disabled" : ""}>선택 인원 추가</button>
              </div>
            </div>
            <div class="codex-admin-list-actions">
              <button type="button" class="hr-btn btn-outline btn-xs" id="adminSelectAllMembersBtn" ${currentMembers.length ? "" : "disabled"}>현재 목록 전체 선택</button>
              <button type="button" class="hr-btn btn-outline btn-xs" id="adminBulkRemoveBtn" ${state.adminMemberSelection.length ? "" : "disabled"}>${getAdminRoleLabel()} 일괄 제거</button>
            </div>
            <table class="codex-admin-table">
              <thead><tr><th style="width:38px"></th><th>이름(아이디)</th><th>소속</th>${state.currentAdminRoleTab === "viewer" ? "<th>열람 범위</th>" : ""}<th>상태</th><th>등록일</th><th>관리</th></tr></thead>
              <tbody>
                ${currentMembers.map((manager) => `
                  <tr class="${manager.id === currentManager?.id ? "codex-table-selected" : ""}" data-admin-manager-row="${manager.id}">
                    <td><input type="checkbox" data-admin-member-check="${manager.id}" ${(state.adminMemberSelection || []).includes(manager.id) ? "checked" : ""}></td>
                    <td>${manager.name} <span class="codex-admin-login">(${manager.loginId})</span>${manager.changeReason ? `<div class="codex-admin-meta">사유: ${manager.changeReason}</div>` : ""}</td>
                    <td>${manager.org}</td>
                    ${state.currentAdminRoleTab === "viewer" ? `<td>${getAdminViewTargetSummary(manager)}</td>` : ""}
                    <td><span class="codex-admin-status ${isAdminMemberExpired(manager) ? "is-expired" : ""}">${getAdminMemberStatusLabel(manager)}</span></td>
                    <td>${manager.registeredAt}</td>
                    <td><button type="button" class="hr-btn btn-outline btn-xs" data-admin-remove="${manager.id}">삭제</button></td>
                  </tr>
                `).join("") || `<tr><td colspan="${state.currentAdminRoleTab === "viewer" ? "7" : "6"}">등록된 ${getAdminRoleLabel()}가 없습니다.</td></tr>`}
              </tbody>
            </table>
          </div>
          <div class="codex-panel">
            <div class="codex-code-head">
              <h4>권한 설정</h4>
              <div class="codex-secondary-actions">
                <button type="button" class="hr-btn btn-outline btn-xs" id="adminCopyToggleBtn" ${currentManager && canAdminEdit ? "" : "disabled"}>${state.adminCopyOpen ? "복사 닫기" : "권한 복사"}</button>
                <button type="button" class="hr-btn btn-outline btn-xs" id="adminCompareToggleBtn" ${currentManager ? "" : "disabled"}>${state.adminCompareOpen ? "비교 닫기" : "권한 비교"}</button>
                <button type="button" class="hr-btn btn-outline btn-xs" id="adminPermissionResetBtn" ${currentManager && !isViewerRole() && canAdminEdit ? "" : "disabled"}>권한 초기화</button>
              </div>
            </div>
            ${currentManager ? `<div class="codex-note-box codex-note-box-compact" style="margin-bottom:14px"><strong>${currentManager.name}(${currentManager.loginId})</strong> · ${currentManager.org} · 활성 권한 ${previewData?.activePermissionCount || 0}개${isViewerRole() ? ` · 현재 범위: ${getAdminViewScopeLabel(currentManager)}` : ""}${changeDraftValues.expiresAt ? ` · 만료일 ${changeDraftValues.expiresAt}` : ""}${changeDraftValues.changeReason ? `<br>최근 사유: ${changeDraftValues.changeReason}` : ""}</div><div class="codex-panel" style="margin-bottom:14px"><div class="codex-code-head"><h4>권한 변경 설정</h4><span class="codex-admin-sub">변경 사유와 임시 권한 만료일을 함께 기록합니다.</span></div><div class="codex-form-grid" style="grid-template-columns:repeat(2,minmax(0,1fr))"><label><span>권한 변경 사유</span><input id="adminChangeReason" value="${changeDraftValues.changeReason}" placeholder="예: 인사팀 대체 운영"></label><label><span>임시 만료일</span><input id="adminChangeExpireAt" value="${changeDraftValues.expiresAt}" placeholder="YYYYMMDD"></label></div></div>${state.adminCopyOpen ? `<div class="codex-panel" style="margin-bottom:14px"><div class="codex-code-head"><h4>권한 복사</h4><span class="codex-admin-sub">다른 관리자/열람자의 현재 설정을 그대로 가져옵니다.</span></div><input id="adminCopyQuery" class="hr-search-input" value="${state.adminCopyQuery || ""}" placeholder="이름, 아이디, 소속, 카테고리 검색" style="margin-bottom:12px">${copyCandidates.length ? `<div class="codex-admin-candidates is-table">${copyCandidates.map((member) => `<label class="codex-admin-candidate"><input type="radio" name="adminCopySource" data-admin-copy-source="${member.id}" ${state.adminCopySourceId === member.id ? "checked" : ""}><div><strong>${member.name}</strong><span>${member.loginId} · ${member.categoryName}</span><em>${member.org} · ${member.role === "viewer" ? "열람자" : "관리자"}</em></div></label>`).join("")}</div>` : `<div class="codex-note-box codex-note-box-compact">복사 가능한 권한 보유 사용자가 없습니다.</div>`}${copySourceMember ? `<div class="codex-note-box codex-note-box-compact" style="margin-top:12px"><strong>복사 원본</strong><br>${copySourceMember.name} (${copySourceMember.categoryName} / ${copySourceMember.role === "viewer" ? "열람자" : "관리자"})${copySourceMember.viewScope ? `<br>열람 범위: ${getAdminViewTargetSummary(copySourceMember)}` : ""}</div>` : ""}<div class="codex-modal-actions" style="margin-top:12px"><button type="button" class="hr-btn btn-outline" id="adminCopyCancelBtn">취소</button><button type="button" class="hr-btn btn-primary" id="adminCopyApplyBtn" ${copySourceMember && canAdminEdit ? "" : "disabled"}>현재 사용자에 복사</button></div></div>` : ""}${state.adminCompareOpen ? `<div class="codex-panel" style="margin-bottom:14px"><div class="codex-code-head"><h4>권한 비교</h4><span class="codex-admin-sub">현재 사용자와 다른 권한 보유자의 차이를 바로 확인합니다.</span></div><input id="adminCompareQuery" class="hr-search-input" value="${state.adminCompareQuery || ""}" placeholder="이름, 아이디, 소속, 카테고리 검색" style="margin-bottom:12px">${compareCandidates.length ? `<div class="codex-admin-candidates is-table">${compareCandidates.map((member) => `<label class="codex-admin-candidate"><input type="radio" name="adminCompareSource" data-admin-compare-source="${member.id}" ${state.adminCompareSourceId === member.id ? "checked" : ""}><div><strong>${member.name}</strong><span>${member.loginId} · ${member.categoryName}</span><em>${member.org} · ${member.role === "viewer" ? "열람자" : "관리자"}</em></div></label>`).join("")}</div>` : `<div class="codex-note-box codex-note-box-compact">비교 가능한 권한 보유 사용자가 없습니다.</div>`}${compareDiff ? `<div class="codex-note-box codex-note-box-compact" style="margin-top:12px"><strong>비교 결과</strong><br>비교 대상: ${compareSourceMember.name} (${compareSourceMember.categoryName})<br>추가 필요 권한: ${compareDiff.added.length ? compareDiff.added.join(", ") : "없음"}<br>현재만 가진 권한: ${compareDiff.removed.length ? compareDiff.removed.join(", ") : "없음"}<br>공통 권한: ${compareDiff.shared.length ? compareDiff.shared.join(", ") : "없음"}${showViewerScope ? `<br>열람 범위 비교: ${compareDiff.sameDirectoryScope ? "동일" : `${compareDiff.current.directoryScope || "-"} ↔ ${compareDiff.compare.directoryScope || "-"}`}` : ""}</div>` : ""}<div class="codex-modal-actions" style="margin-top:12px"><button type="button" class="hr-btn btn-outline" id="adminCompareCancelBtn">닫기</button></div></div>` : ""}${showViewerScope ? `<div class="codex-admin-scope-box"><div class="codex-code-head"><h4>사원정보 열람 범위</h4><button type="button" class="hr-btn btn-outline btn-xs" id="adminScopeOpenBtn" ${canAdminEdit ? "" : "disabled"}>${state.adminScopeOpen ? "대상 닫기" : "대상 편집"}</button></div><div class="codex-admin-scope-options"><label><input type="radio" name="adminViewScope" value="self" ${currentManager.viewScope !== "all" && currentManager.viewScope !== "partial" ? "checked" : ""} ${canAdminEdit ? "" : "disabled"}> 본인 열람</label><label><input type="radio" name="adminViewScope" value="all" ${currentManager.viewScope === "all" ? "checked" : ""} ${canAdminEdit ? "" : "disabled"}> 전체 열람</label><label><input type="radio" name="adminViewScope" value="partial" ${currentManager.viewScope === "partial" ? "checked" : ""} ${canAdminEdit ? "" : "disabled"}> 일부 열람</label></div><div class="codex-note-box codex-note-box-compact" style="margin-bottom:12px">현재 대상: ${getAdminViewTargetSummary(currentManager)}</div><div class="codex-note-box codex-note-box-compact" style="margin-bottom:12px"><strong>저장된 열람 대상</strong>${currentScopeTargets.length ? currentScopeTargets.map((target) => `<div class="codex-admin-selected-item"><div><strong>${target.type === "org" ? "조직" : "개별"}</strong><span>${target.label}</span></div><button type="button" class="hr-btn btn-outline btn-xs" data-admin-scope-target-remove="${getAdminViewTargetKey(target)}" ${canAdminEdit ? "" : "disabled"}>제외</button></div>`).join("") : `<div class="codex-admin-scope-empty">아직 지정된 열람 대상이 없습니다.</div>`}</div>${currentManager.viewScope === "partial" ? `<div class="codex-admin-add ${state.adminScopeOpen ? "is-open" : ""}"><div class="codex-admin-add-layout is-structured"><div class="codex-admin-picker codex-panel"><div class="codex-admin-picker-head"><div><strong>열람 대상 선택</strong><span>조직 단위로 추가하거나, 선택 조직 안에서 일부 구성원만 골라 열람 범위를 지정합니다.</span></div></div><div class="codex-admin-org-layout"><div class="codex-admin-org-column"><div class="codex-admin-org-title">조직 선택</div><div class="codex-assignment-tree-wrap codex-admin-org-wrap">${buildAdminOrgTree(state.currentAdminOrgKey || "ROOT")}</div><button type="button" class="hr-btn btn-outline btn-xs" id="adminScopeAddOrgBtn" style="margin-top:10px" ${canAdminEdit ? "" : "disabled"}>선택 조직 추가</button></div><div class="codex-admin-org-column"><div class="codex-admin-org-title">구성원 선택</div><div class="codex-admin-org-toolbar"><input id="adminScopeQuery" class="hr-search-input" value="${state.adminScopeQuery || ""}" placeholder="선택 조직 내 이름, 아이디, 사번 검색"><div class="codex-admin-selection-meta"><strong>${selectedOrgLabel}</strong><span>대상 ${selectedOrgMembers.length}명 · 검색 ${filteredScopeMembers.length}명</span></div></div>${selectedOrgMembers.length ? `<div class="codex-admin-candidates is-table">${filteredScopeMembers.map((employee) => `<label class="codex-admin-candidate"><input type="checkbox" data-admin-scope-check="${employee.id}" ${(state.adminScopeSelection || []).includes(employee.id) ? "checked" : ""} ${canAdminEdit ? "" : "disabled"}><div><strong>${employee.name}</strong><span>${getEmployeeLoginId(employee)} · ${getCurrentOrgLabel(employee)}</span><em>${employee.grade} · ${employee.title || "팀원"}</em></div></label>`).join("")}</div>` : `<div class="codex-note-box codex-note-box-compact">선택한 조직에 표시할 대상자가 없습니다.</div>`}</div></div></div><div class="codex-admin-selected codex-panel"><div class="codex-admin-selected-title">추가 예정 열람 대상 <span>${selectedScopeEmployees.length}명</span></div>${selectedScopeEmployees.length ? `<div class="codex-admin-selected-list">${selectedScopeEmployees.map((employee) => `<div class="codex-admin-selected-item"><div><strong>${employee.name}</strong><span>${getCurrentOrgLabel(employee)}</span></div><button type="button" class="hr-btn btn-outline btn-xs" data-admin-scope-chip-remove="${employee.id}" ${canAdminEdit ? "" : "disabled"}>제외</button></div>`).join("")}</div>` : `<div class="codex-note-box codex-note-box-compact">조직 전체를 추가하거나 일부 구성원을 체크해 열람 대상으로 지정할 수 있습니다.</div>`}<div class="codex-modal-actions" style="margin-top:12px"><button type="button" class="hr-btn btn-outline" id="adminScopeCancelBtn" ${canAdminEdit ? "" : "disabled"}>취소</button><button type="button" class="hr-btn btn-primary" id="adminScopeSaveBtn" ${canAdminEdit ? "" : "disabled"}>대상 저장</button></div></div></div>` : `<div class="codex-note-box codex-note-box-compact">열람 범위를 <strong>일부 열람</strong>으로 선택하면 여기서 조직과 인원을 지정할 수 있습니다.</div>`}</div>` : ""}<div class="codex-note-box codex-note-box-compact" style="margin-bottom:14px"><strong>권한 미리보기</strong><br>보이는 메뉴: ${previewData?.menus?.length ? previewData.menus.join(", ") : "없음"}<br>사원정보 범위: ${previewData?.employeeScope || "-"}<br>기록카드 사용: ${previewData?.recordPolicy || "-"}<br>실행 가능 기능: ${previewData?.actions?.length ? previewData.actions.join(", ") : "없음"}${previewData?.viewTargetSummary ? `<br>일부 열람 대상: ${previewData.viewTargetSummary}` : ""}</div>${permissionRows}` : `<div class="codex-note-box">${getAdminRoleLabel()}를 선택하면 권한을 확인할 수 있습니다.</div>`}
          </div>
          ${pendingPanel}
          ${expiringPanel}
          ${historyPanel}
        </div>
      </div>
    `;
  }
  function bindAdmin() {
    if (!panels.admin || state.currentHrView !== "admin") return;
    const canAdminEdit = hasCurrentPermission("admin_edit");
    $$("[data-admin-category]", panels.admin).forEach((button) => button.addEventListener("click", () => {
      state.currentAdminCategory = button.dataset.adminCategory;
      state.currentAdminManagerId = "";
      state.adminMemberSelection = [];
      renderAdmin();
      bindAdmin();
    }));
    $$("[data-admin-role]", panels.admin).forEach((button) => button.addEventListener("click", () => {
      const category = getCurrentAdminCategory();
      if (button.dataset.adminRole === "viewer" && !adminCategorySupportsViewer(category)) return;
      state.currentAdminRoleTab = button.dataset.adminRole;
      state.currentAdminManagerId = "";
      state.adminMemberSelection = [];
      renderAdmin();
      bindAdmin();
    }));
    $$("[data-admin-manager-row]", panels.admin).forEach((row) => row.addEventListener("click", (event) => {
      if (!event.target.closest("button")) {
        const memberId = row.dataset.adminManagerRow;
        const current = new Set(state.adminMemberSelection || []);
        if (!event.target.closest("input")) {
          if (current.has(memberId)) current.delete(memberId);
          else current.add(memberId);
          state.adminMemberSelection = [...current];
        }
      }
      state.currentAdminManagerId = row.dataset.adminManagerRow;
      renderAdmin();
      bindAdmin();
    }));
    $$("[data-admin-remove]", panels.admin).forEach((button) => button.addEventListener("click", (event) => {
      event.stopPropagation();
      if (!canAdminEdit) return;
      const category = getCurrentAdminCategory();
      const key = getAdminRoleBucket(state.currentAdminRoleTab);
      const removedMember = (category[key] || []).find((manager) => manager.id === button.dataset.adminRemove);
      if (!removedMember) return;
      const changeMeta = getAdminChangeMetaFromInputs();
      if (!ensureAdminChangeReason(category, "remove", changeMeta.changeReason, "관리자 제거")) return;
      upsertAdminPendingChange({
        key: `remove|${category.id}|${state.currentAdminRoleTab}|${removedMember.id}`,
        kind: "remove-members",
        categoryId: category.id,
        categoryLabel: getAdminCategoryDisplayName(category),
        role: state.currentAdminRoleTab,
        memberIds: [removedMember.id],
        memberNames: [removedMember.name],
        changeReason: changeMeta.changeReason,
        expiresAt: changeMeta.expiresAt,
        summary: `${removedMember.name} 제거`
      });
      rebuildAdminDraftFromPending();
      state.adminMemberSelection = (state.adminMemberSelection || []).filter((id) => id !== button.dataset.adminRemove);
      renderAdmin();
      bindAdmin();
    }));
    $("#adminAddToggleBtn", panels.admin)?.addEventListener("click", () => {
      if (!canAdminEdit) return;
      state.adminAddOpen = !state.adminAddOpen;
      state.adminCandidateSelection = state.adminAddOpen ? (state.adminCandidateSelection || []) : [];
      if (state.adminAddOpen) expandAdminAncestors(state.currentAdminOrgKey || "ROOT");
      renderAdmin();
      bindAdmin();
    });
    $("#adminAddCancelBtn", panels.admin)?.addEventListener("click", () => {
      if (!canAdminEdit) return;
      state.adminAddOpen = false;
      state.adminCandidateSelection = [];
      renderAdmin();
      bindAdmin();
    });
    $("#adminCopyToggleBtn", panels.admin)?.addEventListener("click", () => {
      if (!canAdminEdit) return;
      state.adminCopyOpen = !state.adminCopyOpen;
      if (!state.adminCopyOpen) {
        state.adminCopyQuery = "";
        state.adminCopySourceId = "";
      }
      renderAdmin();
      bindAdmin();
    });
    $("#adminCompareToggleBtn", panels.admin)?.addEventListener("click", () => {
      state.adminCompareOpen = !state.adminCompareOpen;
      if (!state.adminCompareOpen) {
        state.adminCompareQuery = "";
        state.adminCompareSourceId = "";
      }
      renderAdmin();
      bindAdmin();
    });
    $("#adminCopyCancelBtn", panels.admin)?.addEventListener("click", () => {
      if (!canAdminEdit) return;
      state.adminCopyOpen = false;
      state.adminCopyQuery = "";
      state.adminCopySourceId = "";
      renderAdmin();
      bindAdmin();
    });
    $("#adminCompareCancelBtn", panels.admin)?.addEventListener("click", () => {
      state.adminCompareOpen = false;
      state.adminCompareQuery = "";
      state.adminCompareSourceId = "";
      renderAdmin();
      bindAdmin();
    });
    $("#adminCopyQuery", panels.admin)?.addEventListener("input", (event) => {
      const input = event.target;
      const nextValue = input.value || "";
      const start = input.selectionStart ?? nextValue.length;
      const end = input.selectionEnd ?? nextValue.length;
      state.adminCopyQuery = nextValue;
      scheduleInputRefresh("adminCopyQuery", () => {
        renderAdmin();
        bindAdmin();
        const nextInput = $("#adminCopyQuery", panels.admin);
        if (nextInput) {
          nextInput.focus({ preventScroll: true });
          nextInput.setSelectionRange(start, end);
        }
      });
    });
    $("#adminCompareQuery", panels.admin)?.addEventListener("input", (event) => {
      const input = event.target;
      const nextValue = input.value || "";
      const start = input.selectionStart ?? nextValue.length;
      const end = input.selectionEnd ?? nextValue.length;
      state.adminCompareQuery = nextValue;
      scheduleInputRefresh("adminCompareQuery", () => {
        renderAdmin();
        bindAdmin();
        const nextInput = $("#adminCompareQuery", panels.admin);
        if (nextInput) {
          nextInput.focus({ preventScroll: true });
          nextInput.setSelectionRange(start, end);
        }
      });
    });
    $$("[data-admin-copy-source]", panels.admin).forEach((input) => input.addEventListener("change", () => {
      state.adminCopySourceId = input.dataset.adminCopySource || "";
      renderAdmin();
      bindAdmin();
    }));
    $$("[data-admin-compare-source]", panels.admin).forEach((input) => input.addEventListener("change", () => {
      state.adminCompareSourceId = input.dataset.adminCompareSource || "";
      renderAdmin();
      bindAdmin();
    }));
    $("#adminCopyApplyBtn", panels.admin)?.addEventListener("click", () => {
      if (!canAdminEdit) return;
      const category = getCurrentAdminCategory();
      const manager = getCurrentAdminManager();
      const sourceMember = getAllAdminMembers().find((member) => member.id === state.adminCopySourceId);
      if (!category || !manager || !sourceMember) return;
      const copied = buildCopiedPermissionPayload(category, state.currentAdminRoleTab, sourceMember, manager);
      const changeMeta = getAdminChangeMetaFromInputs();
      if (!ensureAdminChangeReason(category, "copy", changeMeta.changeReason, "권한 복사")) return;
      upsertAdminPendingChange({
        key: `perm|${category.id}|${state.currentAdminRoleTab}|${manager.id}`,
        kind: "set-permissions",
        categoryId: category.id,
        categoryLabel: getAdminCategoryDisplayName(category),
        role: state.currentAdminRoleTab,
        memberId: manager.id,
        memberName: manager.name,
        permissions: copied.permissions,
        viewScope: copied.viewScope,
        viewTargets: copied.viewTargets,
        changeReason: changeMeta.changeReason,
        expiresAt: changeMeta.expiresAt,
        summary: `${manager.name} 권한을 ${sourceMember.name} 기준으로 복사`
      });
      rebuildAdminDraftFromPending();
      state.adminCopyOpen = false;
      state.adminCopyQuery = "";
      state.adminCopySourceId = "";
      renderAdmin();
      bindAdmin();
    });
    $("#adminAddQuery", panels.admin)?.addEventListener("input", (event) => {
      const input = event.target;
      const nextValue = input.value || "";
      const start = input.selectionStart ?? nextValue.length;
      const end = input.selectionEnd ?? nextValue.length;
      state.adminAddQuery = nextValue;
      scheduleInputRefresh("adminAddQuery", () => {
        renderAdmin();
        bindAdmin();
        const nextInput = $("#adminAddQuery", panels.admin);
        if (nextInput) {
          nextInput.focus({ preventScroll: true });
          nextInput.setSelectionRange(start, end);
        }
      });
    });
    $$("[data-admin-org-toggle]", panels.admin).forEach((button) => button.addEventListener("click", (event) => {
      event.stopPropagation();
      const key = button.dataset.adminOrgToggle;
      const expanded = !getAdminExpandedKeys().has(key);
      setAdminExpanded(key, expanded);
      renderAdmin();
      bindAdmin();
    }));
    $$("[data-admin-org-node]", panels.admin).forEach((button) => button.addEventListener("click", () => {
      const key = button.dataset.adminOrgNode || "ROOT";
      if (state.currentAdminOrgKey === key) {
        const expanded = !getAdminExpandedKeys().has(key);
        setAdminExpanded(key, expanded);
      } else {
        state.currentAdminOrgKey = key;
        expandAdminAncestors(key);
      }
      renderAdmin();
      bindAdmin();
    }));
    $$("[data-admin-candidate-check]", panels.admin).forEach((input) => input.addEventListener("change", (event) => {
      const employeeId = input.dataset.adminCandidateCheck;
      const current = new Set(state.adminCandidateSelection || []);
      if (input.checked) current.add(employeeId); else current.delete(employeeId);
      state.adminCandidateSelection = [...current];
      event.stopPropagation();
      renderAdmin();
      bindAdmin();
    }));
    $$("[data-admin-chip-remove]", panels.admin).forEach((button) => button.addEventListener("click", () => {
      if (!canAdminEdit) return;
      state.adminCandidateSelection = (state.adminCandidateSelection || []).filter((id) => id !== button.dataset.adminChipRemove);
      renderAdmin();
      bindAdmin();
    }));
    $("#adminAddSaveBtn", panels.admin)?.addEventListener("click", () => {
      if (!canAdminEdit) return;
      const selectedIds = state.adminCandidateSelection || [];
      if (!selectedIds.length) return;
      const category = getCurrentAdminCategory();
      const role = state.currentAdminRoleTab;
      const addMeta = getAdminAddMetaFromInputs();
      if (!ensureAdminChangeReason(category, "add", addMeta.changeReason, `${getAdminRoleLabel()} 추가`)) return;
      const existingLoginIds = new Set(getAdminCategoriesSource().flatMap((item) => [...(item.managers || []), ...(item.viewers || [])]).map((member) => member.loginId));
      const added = selectedIds.map((employeeId, index) => {
        const employee = state.employees.find((item) => item.id === employeeId);
        if (!employee || existingLoginIds.has(getEmployeeLoginId(employee))) return null;
        const idPrefix = role === "viewer" ? "ADV" : "ADM";
        return buildAdminMemberFromEmployee(employee, `${idPrefix}-${String(Date.now() + index).slice(-5)}`, getAdminCategoryPermissionIds(category.id, role), "2026.04.16", role, addMeta);
      }).filter(Boolean);
      if (!added.length) return;
      upsertAdminPendingChange({
        key: `add|${category.id}|${role}|${added.map((member) => member.employeeId).join(",")}`,
        kind: "add-members",
        categoryId: category.id,
        categoryLabel: getAdminCategoryDisplayName(category),
        role,
        members: added,
        changeReason: addMeta.changeReason,
        expiresAt: addMeta.expiresAt,
        summary: `${added.map((member) => member.name).join(", ")} 추가`
      });
      rebuildAdminDraftFromPending();
      state.currentAdminManagerId = added[0]?.id || getCurrentAdminMembers(category, role)[0]?.id || "";
      state.adminAddOpen = false;
      state.adminAddQuery = "";
      state.adminCandidateSelection = [];
      renderAdmin();
      bindAdmin();
    });
    $$('input[name="adminViewScope"]', panels.admin).forEach((input) => input.addEventListener("change", () => {
      if (!canAdminEdit) return;
      const category = getCurrentAdminCategory();
      const manager = getCurrentAdminManager();
      if (!category || !manager) return;
      const nextScope = input.value;
      const changeMeta = getAdminChangeMetaFromInputs();
      if (!ensureAdminChangeReason(category, "set", changeMeta.changeReason, "열람 범위 변경")) return;
      const nextPermissions = { ...(manager.permissions || {}) };
      nextPermissions.directory_view_self = nextScope === "self";
      nextPermissions.directory_view_all = nextScope === "all";
      nextPermissions.directory_view_partial = nextScope === "partial";
      upsertAdminPendingChange({
        key: `perm|${category.id}|${state.currentAdminRoleTab}|${manager.id}`,
        kind: "set-permissions",
        categoryId: category.id,
        categoryLabel: getAdminCategoryDisplayName(category),
        role: state.currentAdminRoleTab,
        memberId: manager.id,
        memberName: manager.name,
        permissions: nextPermissions,
        viewScope: nextScope,
        viewTargets: nextScope === "partial" ? normalizeAdminViewTargets(manager.viewTargets || []) : [],
        changeReason: changeMeta.changeReason,
        expiresAt: changeMeta.expiresAt,
        summary: `${manager.name} 열람 범위 ${nextScope === "self" ? "본인" : nextScope === "all" ? "전체" : "일부"}`
      });
      rebuildAdminDraftFromPending();
      state.adminScopeOpen = nextScope === "partial" ? state.adminScopeOpen : false;
      state.adminScopeSelection = [];
      renderAdmin();
      bindAdmin();
    }));
    $("#adminScopeOpenBtn", panels.admin)?.addEventListener("click", () => {
      if (!canAdminEdit) return;
      state.adminScopeOpen = !state.adminScopeOpen;
      state.adminScopeSelection = [];
      renderAdmin();
      bindAdmin();
    });
    $("#adminScopeQuery", panels.admin)?.addEventListener("input", (event) => {
      const input = event.target;
      const nextValue = input.value || "";
      const start = input.selectionStart ?? nextValue.length;
      const end = input.selectionEnd ?? nextValue.length;
      state.adminScopeQuery = nextValue;
      scheduleInputRefresh("adminScopeQuery", () => {
        renderAdmin();
        bindAdmin();
        const nextInput = $("#adminScopeQuery", panels.admin);
        if (nextInput) {
          nextInput.focus({ preventScroll: true });
          nextInput.setSelectionRange(start, end);
        }
      });
    });
    $$("[data-admin-scope-check]", panels.admin).forEach((input) => input.addEventListener("change", () => {
      const employeeId = input.dataset.adminScopeCheck;
      const current = new Set(state.adminScopeSelection || []);
      if (input.checked) current.add(employeeId); else current.delete(employeeId);
      state.adminScopeSelection = [...current];
      renderAdmin();
      bindAdmin();
    }));
    $$("[data-admin-scope-chip-remove]", panels.admin).forEach((button) => button.addEventListener("click", () => {
      if (!canAdminEdit) return;
      state.adminScopeSelection = (state.adminScopeSelection || []).filter((id) => id !== button.dataset.adminScopeChipRemove);
      renderAdmin();
      bindAdmin();
    }));
    $$("[data-admin-scope-target-remove]", panels.admin).forEach((button) => button.addEventListener("click", () => {
      if (!canAdminEdit) return;
      const category = getCurrentAdminCategory();
      const manager = getCurrentAdminManager();
      if (!category || !manager) return;
      const nextTargets = normalizeAdminViewTargets((manager.viewTargets || []).filter((target) => getAdminViewTargetKey(target) !== button.dataset.adminScopeTargetRemove));
      const changeMeta = getAdminChangeMetaFromInputs();
      if (!ensureAdminChangeReason(category, "set", changeMeta.changeReason, "일부 열람 대상 조정")) return;
      upsertAdminPendingChange({
        key: `perm|${category.id}|${state.currentAdminRoleTab}|${manager.id}`,
        kind: "set-permissions",
        categoryId: category.id,
        categoryLabel: getAdminCategoryDisplayName(category),
        role: state.currentAdminRoleTab,
        memberId: manager.id,
        memberName: manager.name,
        permissions: { ...(manager.permissions || {}), directory_view_self: false, directory_view_all: false, directory_view_partial: true },
        viewScope: "partial",
        viewTargets: nextTargets,
        changeReason: changeMeta.changeReason,
        expiresAt: changeMeta.expiresAt,
        summary: `${manager.name} 일부 열람 대상 조정`
      });
      rebuildAdminDraftFromPending();
      renderAdmin();
      bindAdmin();
    }));
    $("#adminScopeAddOrgBtn", panels.admin)?.addEventListener("click", () => {
      if (!canAdminEdit) return;
      const category = getCurrentAdminCategory();
      const manager = getCurrentAdminManager();
      const row = state.currentAdminOrgKey === "ROOT" ? null : getBlueprintRow(state.orgBlueprint, state.currentAdminOrgKey);
      if (!category || !manager) return;
      const nextTargets = normalizeAdminViewTargets([...(manager.viewTargets || []), { type: "org", key: state.currentAdminOrgKey || "ROOT", label: row ? getOrgRowPath(row) : "오토플러스" }]);
      const changeMeta = getAdminChangeMetaFromInputs();
      if (!ensureAdminChangeReason(category, "set", changeMeta.changeReason, "일부 열람 조직 추가")) return;
      upsertAdminPendingChange({
        key: `perm|${category.id}|${state.currentAdminRoleTab}|${manager.id}`,
        kind: "set-permissions",
        categoryId: category.id,
        categoryLabel: getAdminCategoryDisplayName(category),
        role: state.currentAdminRoleTab,
        memberId: manager.id,
        memberName: manager.name,
        permissions: { ...(manager.permissions || {}), directory_view_self: false, directory_view_all: false, directory_view_partial: true },
        viewScope: "partial",
        viewTargets: nextTargets,
        changeReason: changeMeta.changeReason,
        expiresAt: changeMeta.expiresAt,
        summary: `${manager.name} 일부 열람 대상 변경`
      });
      rebuildAdminDraftFromPending();
      renderAdmin();
      bindAdmin();
    });
    $("#adminScopeCancelBtn", panels.admin)?.addEventListener("click", () => {
      if (!canAdminEdit) return;
      state.adminScopeOpen = false;
      state.adminScopeSelection = [];
      state.adminScopeQuery = "";
      renderAdmin();
      bindAdmin();
    });
    $("#adminScopeSaveBtn", panels.admin)?.addEventListener("click", () => {
      if (!canAdminEdit) return;
      const category = getCurrentAdminCategory();
      const manager = getCurrentAdminManager();
      if (!category || !manager) return;
      const changeMeta = getAdminChangeMetaFromInputs();
      if (!ensureAdminChangeReason(category, "set", changeMeta.changeReason, "일부 열람 대상 저장")) return;
      const nextTargets = [...(manager.viewTargets || [])];
      (state.adminScopeSelection || []).forEach((employeeId) => {
        const employee = state.employees.find((item) => item.id === employeeId);
        if (!employee) return;
        nextTargets.push({ type: "employee", employeeId: employee.id, label: `${employee.name} (${getCurrentOrgLabel(employee)})` });
      });
      upsertAdminPendingChange({
        key: `perm|${category.id}|${state.currentAdminRoleTab}|${manager.id}`,
        kind: "set-permissions",
        categoryId: category.id,
        categoryLabel: getAdminCategoryDisplayName(category),
        role: state.currentAdminRoleTab,
        memberId: manager.id,
        memberName: manager.name,
        permissions: { ...(manager.permissions || {}), directory_view_self: false, directory_view_all: false, directory_view_partial: true },
        viewScope: "partial",
        viewTargets: normalizeAdminViewTargets(nextTargets),
        changeReason: changeMeta.changeReason,
        expiresAt: changeMeta.expiresAt,
        summary: `${manager.name} 일부 열람 대상 저장`
      });
      rebuildAdminDraftFromPending();
      state.adminScopeOpen = false;
      state.adminScopeSelection = [];
      state.adminScopeQuery = "";
      renderAdmin();
      bindAdmin();
    });
    $$("[data-admin-member-check]", panels.admin).forEach((input) => input.addEventListener("click", (event) => {
      event.stopPropagation();
      const memberId = input.dataset.adminMemberCheck;
      const current = new Set(state.adminMemberSelection || []);
      if (input.checked) current.add(memberId); else current.delete(memberId);
      state.adminMemberSelection = [...current];
      renderAdmin();
      bindAdmin();
    }));
    $("#adminSelectAllMembersBtn", panels.admin)?.addEventListener("click", () => {
      state.adminMemberSelection = getCurrentAdminMembers().map((member) => member.id);
      renderAdmin();
      bindAdmin();
    });
    $("#adminBulkRemoveBtn", panels.admin)?.addEventListener("click", () => {
      if (!canAdminEdit) return;
      const category = getCurrentAdminCategory();
      const selected = new Set(state.adminMemberSelection || []);
      const key = getAdminRoleBucket(state.currentAdminRoleTab);
      const removedMembers = (category[key] || []).filter((member) => selected.has(member.id));
      if (!removedMembers.length) return;
      const changeMeta = getAdminChangeMetaFromInputs();
      if (!ensureAdminChangeReason(category, "remove", changeMeta.changeReason, `${getAdminRoleLabel()} 일괄 제거`)) return;
      upsertAdminPendingChange({
        key: `remove|${category.id}|${state.currentAdminRoleTab}|${removedMembers.map((member) => member.id).join(",")}`,
        kind: "remove-members",
        categoryId: category.id,
        categoryLabel: getAdminCategoryDisplayName(category),
        role: state.currentAdminRoleTab,
        memberIds: removedMembers.map((member) => member.id),
        memberNames: removedMembers.map((member) => member.name),
        changeReason: changeMeta.changeReason,
        expiresAt: changeMeta.expiresAt,
        summary: `${removedMembers.length}명 일괄 제거`
      });
      rebuildAdminDraftFromPending();
      state.currentAdminManagerId = getCurrentAdminMembers(category, state.currentAdminRoleTab)[0]?.id || "";
      state.adminMemberSelection = [];
      renderAdmin();
      bindAdmin();
    });
    $$("[data-admin-permission]", panels.admin).forEach((input) => input.addEventListener("change", () => {
      if (!canAdminEdit) return;
      const manager = getCurrentAdminManager();
      if (!manager || isViewerRole()) return;
      const nextPermissions = { ...(manager.permissions || {}), [input.dataset.adminPermission]: input.checked };
      const category = getCurrentAdminCategory();
      const changeMeta = getAdminChangeMetaFromInputs();
      if (!ensureAdminChangeReason(category, "set", changeMeta.changeReason, "권한 변경")) return;
      upsertAdminPendingChange({
        key: `perm|${category.id}|${state.currentAdminRoleTab}|${manager.id}`,
        kind: "set-permissions",
        categoryId: category.id,
        categoryLabel: getAdminCategoryDisplayName(category),
        role: state.currentAdminRoleTab,
        memberId: manager.id,
        memberName: manager.name,
        permissions: nextPermissions,
        changeReason: changeMeta.changeReason,
        expiresAt: changeMeta.expiresAt,
        summary: `${manager.name} 권한 변경`
      });
      rebuildAdminDraftFromPending();
      renderAdmin();
      bindAdmin();
    }));
    $$("[data-admin-group-enable]", panels.admin).forEach((button) => button.addEventListener("click", () => {
      if (!canAdminEdit) return;
      const manager = getCurrentAdminManager();
      const group = adminPermissionGroups.find((item) => item.id === button.dataset.adminGroupEnable);
      if (!manager || !group || isViewerRole()) return;
      const nextPermissions = { ...(manager.permissions || {}) };
      group.items.forEach((item) => { nextPermissions[item.id] = true; });
      const category = getCurrentAdminCategory();
      const changeMeta = getAdminChangeMetaFromInputs();
      if (!ensureAdminChangeReason(category, "set", changeMeta.changeReason, "권한 일괄 선택")) return;
      upsertAdminPendingChange({
        key: `perm|${category.id}|${state.currentAdminRoleTab}|${manager.id}`,
        kind: "set-permissions",
        categoryId: category.id,
        categoryLabel: getAdminCategoryDisplayName(category),
        role: state.currentAdminRoleTab,
        memberId: manager.id,
        memberName: manager.name,
        permissions: nextPermissions,
        changeReason: changeMeta.changeReason,
        expiresAt: changeMeta.expiresAt,
        summary: `${manager.name} 권한 일괄 선택`
      });
      rebuildAdminDraftFromPending();
      renderAdmin();
      bindAdmin();
    }));
    $$("[data-admin-group-disable]", panels.admin).forEach((button) => button.addEventListener("click", () => {
      if (!canAdminEdit) return;
      const manager = getCurrentAdminManager();
      const group = adminPermissionGroups.find((item) => item.id === button.dataset.adminGroupDisable);
      if (!manager || !group || isViewerRole()) return;
      const nextPermissions = { ...(manager.permissions || {}) };
      group.items.forEach((item) => { nextPermissions[item.id] = false; });
      const category = getCurrentAdminCategory();
      const changeMeta = getAdminChangeMetaFromInputs();
      if (!ensureAdminChangeReason(category, "set", changeMeta.changeReason, "권한 일괄 해제")) return;
      upsertAdminPendingChange({
        key: `perm|${category.id}|${state.currentAdminRoleTab}|${manager.id}`,
        kind: "set-permissions",
        categoryId: category.id,
        categoryLabel: getAdminCategoryDisplayName(category),
        role: state.currentAdminRoleTab,
        memberId: manager.id,
        memberName: manager.name,
        permissions: nextPermissions,
        changeReason: changeMeta.changeReason,
        expiresAt: changeMeta.expiresAt,
        summary: `${manager.name} 권한 일괄 해제`
      });
      rebuildAdminDraftFromPending();
      renderAdmin();
      bindAdmin();
    }));
    $("#adminPermissionResetBtn", panels.admin)?.addEventListener("click", () => {
      if (!canAdminEdit) return;
      const manager = getCurrentAdminManager();
      const category = getCurrentAdminCategory();
      if (!manager || isViewerRole()) return;
      const nextPermissions = createPermissionMap(getAdminCategoryPermissionIds(category.id, "manager"));
      const changeMeta = getAdminChangeMetaFromInputs();
      if (!ensureAdminChangeReason(category, "reset", changeMeta.changeReason, "권한 초기화")) return;
      upsertAdminPendingChange({
        key: `perm|${category.id}|${state.currentAdminRoleTab}|${manager.id}`,
        kind: "set-permissions",
        categoryId: category.id,
        categoryLabel: getAdminCategoryDisplayName(category),
        role: state.currentAdminRoleTab,
        memberId: manager.id,
        memberName: manager.name,
        permissions: nextPermissions,
        changeReason: changeMeta.changeReason,
        expiresAt: changeMeta.expiresAt,
        summary: `${manager.name} 권한 초기화`
      });
      rebuildAdminDraftFromPending();
      renderAdmin();
      bindAdmin();
    });
    $$("[data-admin-pending-cancel]", panels.admin).forEach((button) => button.addEventListener("click", () => {
      removeAdminPendingChange(button.dataset.adminPendingCancel);
    }));
    $("#adminDraftApplyBtn", panels.admin)?.addEventListener("click", () => {
      if (!canAdminEdit) return;
      applyAdminDraft();
    });
    $("#adminDraftResetBtn", panels.admin)?.addEventListener("click", () => {
      if (!canAdminEdit) return;
      discardAdminDraft();
      renderAdmin();
      bindAdmin();
    });
    $$("[data-admin-history-row]", panels.admin).forEach((row) => row.addEventListener("click", (event) => {
      if (event.target.closest("button")) return;
      openAdminHistoryModal(row.dataset.adminHistoryRow);
    }));
    $$("[data-admin-history-detail]", panels.admin).forEach((button) => button.addEventListener("click", () => {
      openAdminHistoryModal(button.dataset.adminHistoryDetail);
    }));
    $$("[data-admin-pending-row]", panels.admin).forEach((row) => row.addEventListener("click", (event) => {
      if (event.target.closest("button")) return;
      state.currentAdminPendingKey = row.dataset.adminPendingRow || "";
      renderAdmin();
      bindAdmin();
    }));
    $$("[data-admin-pending-edit]", panels.admin).forEach((button) => button.addEventListener("click", () => {
      openAdminPendingChange(button.dataset.adminPendingEdit);
    }));
  }
  function renderAssignmentStepOne(flow) {
    panels.assignment.innerHTML = `<div class="codex-assignment-wizard"><div class="codex-assignment-wizard-head"><div><h3>조직개편 및 인사발령</h3><div class="codex-assignment-sub">조직개편 및 인사발령일과 처리 방식을 입력합니다.</div></div><div class="codex-stepper"><span class="active">1단계</span><span>2단계</span><span>3단계</span></div></div><div class="codex-panel" style="margin-top:16px"><div class="codex-form-grid"><label><span>조직개편 및 인사발령일</span><input id="wizardChangeDate" value="${flow.changeDate}" placeholder="YYYY.MM.DD"></label><label><span>처리 방식</span><div class="codex-inline-radio"><label><input type="radio" name="wizardMode" value="auto" ${flow.mode === "auto" ? "checked" : ""}>자동</label><label><input type="radio" name="wizardMode" value="manual" ${flow.mode === "manual" ? "checked" : ""}>수동</label></div></label><div class="codex-note-box span-2"><strong>자동</strong>입력한 날짜에 조직도와 임직원 정보가 자동 업데이트됩니다.</div><div class="codex-note-box span-2"><strong>수동</strong>관리자가 완료 시점에 직접 확정합니다.</div></div></div><div class="codex-assignment-footer"><button type="button" class="hr-btn btn-outline" id="cancelAssignmentWizardBtn">취소</button><button type="button" class="hr-btn btn-primary" id="assignmentNextStepBtn">다음 단계</button></div></div>`;
  }
  function renderOrgSummaryTable(flow) {
    const cancelCell = (type, sourceKey) => `<td class="codex-summary-action"><button type="button" class="codex-icon-btn codex-summary-trash" data-cancel-org-change="${type}" data-cancel-source="${sourceKey}" title="이 변경 취소">🗑</button></td>`;
    const createdRows = flow.orgSummary.created.map((row) => `<tr><td>${getOrgRowPath(row)}</td>${cancelCell("created", row.sourceKey || getOrgRowKey(row))}</tr>`).join("");
    const updatedRows = flow.orgSummary.updated.map((item) => `<tr><td>${getOrgRowPath(item.before)}</td><td>${getOrgRowPath(item.after)}</td>${cancelCell("updated", item.before.sourceKey || getOrgRowKey(item.before))}</tr>`).join("");
    const deletedRows = flow.orgSummary.deleted.map((row) => `<tr><td>${getOrgRowPath(row)}</td>${cancelCell("deleted", row.sourceKey || getOrgRowKey(row))}</tr>`).join("");
    return `<div class="codex-panel"><h4>조직개편</h4><div class="codex-summary-group"><h5>신설</h5><table><thead><tr><th>조직명</th><th></th></tr></thead><tbody>${createdRows || `<tr><td colspan="2">신설 없음</td></tr>`}</tbody></table></div><div class="codex-summary-group"><h5>변경</h5><table><thead><tr><th>변경 전</th><th>변경 후</th><th></th></tr></thead><tbody>${updatedRows || `<tr><td colspan="3">변경 없음</td></tr>`}</tbody></table></div><div class="codex-summary-group"><h5>폐지</h5><table><thead><tr><th>조직명</th><th></th></tr></thead><tbody>${deletedRows || `<tr><td colspan="2">폐지 없음</td></tr>`}</tbody></table></div></div>`;
  }
  function renderAssignmentStepTwo(flow) {
    const selectedAfter = getBlueprintRow(flow.orgDraft, flow.selectedAfterOrg) || null;
    const orgSummary = flow.orgSummary || { created: [], updated: [], deleted: [] };
    panels.assignment.innerHTML = `<div class="codex-assignment-wizard"><div class="codex-assignment-wizard-head"><div><h3>조직개편 및 인사발령</h3><div class="codex-assignment-sub">Before / After 조직을 비교하며 명칭 변경, 이동, 신설, 폐지를 편집합니다.</div></div><div class="codex-stepper"><span class="done">1단계</span><span class="active">2단계</span><span>3단계</span></div></div><div class="codex-note-box" style="margin-top:16px"><strong>현재 편집 요약</strong><br>신설 ${orgSummary.created.length}건 · 변경 ${orgSummary.updated.length}건 · 폐지 ${orgSummary.deleted.length}건${selectedAfter ? `<br>현재 선택 조직: ${getOrgRowPath(selectedAfter)}` : ""}</div><div class="codex-assignment-before-after"><div class="codex-panel"><div class="codex-assignment-section-head"><h4>Before</h4><div></div></div><div class="codex-assignment-tree-wrap">${buildTreeFromBlueprint(state.orgBlueprint, flow.selectedBeforeOrg, false, "before")}</div></div><div class="codex-panel"><div class="codex-assignment-section-head"><h4>After</h4><div class="codex-inline-actions"><button type="button" class="hr-btn btn-outline" data-org-add-under="${flow.selectedAfterOrg || "ROOT"}" ${hasCurrentPermission("assignment_execute") ? "" : "disabled"}>추가</button><button type="button" class="hr-btn btn-outline" ${selectedAfter ? `data-org-edit="${flow.selectedAfterOrg}"` : "disabled"} ${hasCurrentPermission("assignment_execute") ? "" : "disabled"}>수정</button><button type="button" class="hr-btn btn-outline" ${selectedAfter ? `data-org-delete="${flow.selectedAfterOrg}"` : "disabled"} ${hasCurrentPermission("assignment_execute") ? "" : "disabled"}>삭제</button></div></div><div class="codex-assignment-tree-wrap is-after-wrap">${buildTreeFromBlueprint(flow.orgDraft, flow.selectedAfterOrg, false, "after")}</div></div></div><div style="margin-top:16px">${renderOrgSummaryTable(flow)}</div><div class="codex-assignment-footer"><button type="button" class="hr-btn btn-outline" id="assignmentPrevStepBtn">이전 단계</button><div class="codex-inline-actions"><button type="button" class="hr-btn btn-outline" id="assignmentOrgEditDoneBtn" ${hasCurrentPermission("assignment_execute") ? "" : "disabled"}>편집 완료</button><button type="button" class="hr-btn btn-primary" id="assignmentOrgNextStepBtn" ${hasCurrentPermission("assignment_execute") ? "" : "disabled"}>다음 단계</button></div></div></div>`;
  }
  function renderPersonnelSummary(flow) {
    const actions = getActivePersonnelActions(flow).map((action) => {
      const beforeEmployee = getPersonnelBaseEmployee(flow, action.employeeId);
      const targetRow = getBlueprintRow(flow.orgDraft, action.targetOrgKey);
      const actionTypes = Array.isArray(action.types) ? action.types : (action.type ? [action.type] : []);
      return {
        beforeEmployee,
        action,
        actionTypes,
        beforeOrg: beforeEmployee ? employeePath(beforeEmployee) : "-",
        afterOrg: targetRow ? getOrgRowPath(targetRow) : "조직 없음"
      };
    });
    const rows = actions.map((item) => `<tr><td>${item.beforeEmployee?.name || "-"}</td><td>${item.beforeEmployee?.id || "-"}</td><td>${item.beforeOrg}</td><td>${item.beforeEmployee?.title || "-"}</td><td>${item.beforeEmployee?.grade || "-"}</td><td>${item.actionTypes.join(", ")}</td><td>${hasPersonnelType(item.action, "소속 제외") ? "조직 없음" : item.afterOrg}</td><td>${item.action.targetTitle || item.beforeEmployee?.title || "-"}</td><td>${item.action.targetGrade || item.beforeEmployee?.grade || "-"}</td><td>${item.action.note || "-"}</td></tr>`).join("");
    return `<div class="codex-panel"><h4>인사발령</h4><div class="codex-summary-group"><h5>반영 예정 내역</h5><table><thead><tr><th>이름</th><th>ID</th><th>발령 전 조직</th><th>발령 전 직책</th><th>발령 전 직급</th><th>처리 유형</th><th>발령 후 조직</th><th>발령 후 직책</th><th>발령 후 직급</th><th>비고</th></tr></thead><tbody>${rows || `<tr><td colspan="10">해당 내역이 없습니다.</td></tr>`}</tbody></table></div></div>`;
  }
  function renderAssignmentStepThree(flow) {
    syncPersonnelActionsForStage(flow);
    const projectedEmployees = getProjectedEmployees(flow);
    const keyword = (flow.personnelSearch || "").trim().toLowerCase();
    const pickerMembers = getEmployeesInOrgKey(flow.selectedPersonnelOrg || "ROOT", false, flow.orgDraft, projectedEmployees).filter((employee) => {
      if (getEffectiveStatus(employee) === "퇴직") return false;
      if (!keyword) return true;
      return [employee.name, employee.id, employee.title, employeePath(employee)].join(" ").toLowerCase().includes(keyword);
    });
    const activeActions = getActivePersonnelActions(flow);
    const actionTypeSummary = activeActions.reduce((acc, action) => {
      (Array.isArray(action.types) ? action.types : []).forEach((type) => { acc[type] = (acc[type] || 0) + 1; });
      return acc;
    }, {});
    const pickerRows = pickerMembers.map((employee) => {
      const checked = (flow.personnelPickerSelectedIds || []).includes(employee.id) ? "checked" : "";
      return `<label class="codex-personnel-picker-row"><input type="checkbox" data-personnel-pick="${employee.id}" ${checked}><span>${employee.name}</span><span>${employee.id}</span><span>${employee.title}</span></label>`;
    }).join("");
    const memberRows = activeActions.map((action) => {
      const employee = getPersonnelEmployee(flow, action.employeeId);
      const beforeEmployee = getPersonnelBaseEmployee(flow, action.employeeId);
      if (!employee || !beforeEmployee) return "";
      const suggestions = getPersonnelOrgSuggestions(flow, action);
      const suggestionRows = suggestions.map((item) => `<button type="button" class="codex-org-suggest-item" data-personnel-org-pick="${employee.id}" data-personnel-org-key="${item.key}"><span>${item.path}</span></button>`).join("");
      return `<tr><td><button type="button" class="codex-icon-btn" data-personnel-remove="${employee.id}" title="목록에서 제외">🗑</button></td><td>${beforeEmployee.name}</td><td>${beforeEmployee.id}</td><td>${employeePath(beforeEmployee)}</td><td>${beforeEmployee.title}</td><td>${beforeEmployee.grade}</td><td><div class="codex-assignment-type-cell">${buildPersonnelTypeOptions(employee.id, action)}</div></td><td><div class="codex-assignment-target-cell"><div class="codex-org-suggest-field"><input data-personnel-org-text="${employee.id}" data-personnel-org-default="${getPersonnelTargetPath(flow, action)}" value="${getPersonnelInputValue(flow, action)}" placeholder="발령 후 조직 검색"><div class="codex-org-suggest-list ${suggestionRows ? "is-open" : ""}">${suggestionRows || ""}</div></div></div></td><td><div class="codex-assignment-select-cell"><select data-personnel-title="${employee.id}">${titleCodes.map((item) => `<option value="${item}" ${item === action.targetTitle ? "selected" : ""}>${item}</option>`).join("")}</select></div></td><td><div class="codex-assignment-select-cell"><select data-personnel-grade="${employee.id}">${gradeCodes.map((item) => `<option value="${item}" ${item === (action.targetGrade || beforeEmployee.grade) ? "selected" : ""}>${item}</option>`).join("")}</select></div></td><td><div class="codex-assignment-note-cell"><input data-personnel-note="${employee.id}" value="${action.note || ""}" placeholder="비고"></div></td></tr>`;
    }).join("");
    panels.assignment.innerHTML = `<div class="codex-assignment-wizard"><div class="codex-assignment-wizard-head"><div><h3>조직개편 및 인사발령</h3><div class="codex-assignment-sub">변동 조직 인원은 자동 반영되고, 필요한 인원은 좌측 조직도에서 추가할 수 있습니다.</div></div><div class="codex-stepper"><span class="done">1단계</span><span class="done">2단계</span><span class="active">3단계</span></div></div><div class="codex-note-box" style="margin-top:16px"><strong>현재 편집 요약</strong><br>발령 대상 ${activeActions.length}명 · 검색 후보 ${pickerMembers.length}명${Object.keys(actionTypeSummary).length ? `<br>${Object.entries(actionTypeSummary).map(([type, count]) => `${type} ${count}건`).join(" · ")}` : ""}</div><div class="codex-assignment-before-after codex-assignment-stage3-layout"><div class="codex-assignment-stage3-sidebar"><div class="codex-panel"><div class="codex-assignment-section-head"><h4>조직도</h4><div></div></div><div class="codex-assignment-tree-wrap">${buildTreeFromBlueprint(flow.orgDraft, flow.selectedPersonnelOrg || "ROOT", false, "personnel")}</div></div><div class="codex-panel codex-assignment-stage3-picker-panel"><div class="codex-assignment-section-head"><h4>구성원 선택</h4><button type="button" class="hr-btn btn-outline" id="personnelAddSelectedBtn" ${hasCurrentPermission("assignment_execute") ? "" : "disabled"}>선택 추가</button></div><div class="codex-assignment-stage3-meta"><div class="codex-admin-selection-meta"><strong>${flow.selectedPersonnelOrg === "ROOT" ? "오토플러스" : (getBlueprintRow(flow.orgDraft, flow.selectedPersonnelOrg || "ROOT") ? getOrgRowPath(getBlueprintRow(flow.orgDraft, flow.selectedPersonnelOrg || "ROOT")) : "오토플러스")}</strong><span>검색 결과 ${pickerMembers.length}명</span></div></div><input class="hr-search-input" id="personnelSearchInput" value="${flow.personnelSearch || ""}" placeholder="이름, ID 검색"><div class="codex-personnel-picker">${pickerRows || `<div class="codex-note-box">해당 조직에 구성원이 없습니다.</div>`}</div></div></div><div class="codex-panel codex-assignment-stage3-main"><div class="codex-assignment-section-head"><h4>구성원 정보</h4><div class="codex-assignment-stage3-main-hint">처리 유형을 선택한 뒤 발령 후 조직, 직책, 직급, 비고를 입력합니다.</div></div><div class="codex-assignment-table-wrap"><table class="codex-assignment-member-table"><thead><tr><th></th><th>이름</th><th>ID</th><th>발령 전 조직</th><th>발령 전 직책</th><th>발령 전 직급</th><th>처리 유형</th><th>발령 후 조직</th><th>발령 후 직책</th><th>발령 후 직급</th><th>비고</th></tr></thead><tbody>${memberRows || `<tr><td colspan="11">발령 대상자가 없습니다.</td></tr>`}</tbody></table></div></div></div><div style="margin-top:16px">${renderPersonnelSummary(flow)}</div><div class="codex-assignment-footer"><button type="button" class="hr-btn btn-outline" id="assignmentPrevStepBtn">이전 단계</button><div class="codex-inline-actions"><button type="button" class="hr-btn btn-outline" id="assignmentPersonnelDoneBtn" ${hasCurrentPermission("assignment_execute") ? "" : "disabled"}>편집 완료</button><button type="button" class="hr-btn btn-primary" id="assignmentFinishBtn" ${hasCurrentPermission("assignment_execute") ? "" : "disabled"}>완료</button></div></div></div>`;
  }
  function openOrgEditModal(mode, orgKey = "ROOT") {
    const flow = ensureAssignmentFlow();
    const selected = orgKey === "ROOT" ? null : getBlueprintRow(flow.orgDraft, orgKey);
    const currentLevel = selected ? getOrgRowLevel(selected) : (getNextLevelByParentKey(orgKey) || "L1");
    const defaultParentKey = mode === "add"
      ? orgKey
      : selected?.part
        ? ["L3", selected.hq, selected.office, selected.team, ""].join("|")
        : selected?.team
          ? ["L2", selected.hq, selected.office, "", ""].join("|")
          : selected?.office
            ? ["L1", selected.hq, "", "", ""].join("|")
            : "ROOT";
    const currentAddLevel = mode === "add" ? (getNextLevelByParentKey(defaultParentKey) || "") : currentLevel;
    const parentOptions = [`<option value="ROOT" ${defaultParentKey === "ROOT" ? "selected" : ""}>오토플러스</option>`]
      .concat(flow.orgDraft
        .filter((row) => mode === "add" || getOrgRowKey(row) !== orgKey)
        .map((row) => {
          const key = getOrgRowKey(row);
          return `<option value="${key}" ${defaultParentKey === key ? "selected" : ""}>${getOrgRowPath(row)}</option>`;
        }))
      .join("");
    createModal.root.querySelector("h3").textContent = mode === "add" ? "조직 신설" : "조직 편집";
    createModal.body.innerHTML = `<div class="codex-form-grid"><label><span>조직명</span><input id="wizardOrgName" value="${selected ? getOrgRowName(selected) : ""}"></label><label><span>레벨</span>${mode === "add" ? `<input id="wizardOrgLevelAuto" value="${currentAddLevel || "추가 불가"}" readonly>` : `<select id="wizardOrgLevel">${["L1", "L2", "L3", "L4"].map((level) => `<option value="${level}" ${level === currentLevel ? "selected" : ""}>${level}</option>`).join("")}</select>`}</label><label class="span-2"><span>상위조직</span><select id="wizardOrgParent">${parentOptions}</select></label><div class="codex-note-box span-2"><strong>안내</strong>상위 조직을 바꾸면 하위 부서 경로도 함께 이동하고, 편집 완료 시 부서코드가 자동 재부여됩니다.${mode === "add" ? " 신설 시 레벨은 선택한 상위조직 기준으로 자동 결정됩니다." : ""}</div></div>`;
    if (mode === "add") {
      const syncAddLevel = () => {
        const parentKey = $("#wizardOrgParent", createModal.body)?.value || "ROOT";
        const nextLevel = getNextLevelByParentKey(parentKey);
        const levelInput = $("#wizardOrgLevelAuto", createModal.body);
        if (levelInput) levelInput.value = nextLevel || "추가 불가";
        if (!nextLevel) createModal.save.disabled = true;
        else createModal.save.disabled = false;
      };
      $("#wizardOrgParent", createModal.body)?.addEventListener("change", syncAddLevel);
      syncAddLevel();
    }
    createModal.save.onclick = () => {
      const flowRef = ensureAssignmentFlow();
      const name = $("#wizardOrgName", createModal.body)?.value?.trim();
      const parentKey = $("#wizardOrgParent", createModal.body)?.value || "ROOT";
      const level = mode === "add" ? (getNextLevelByParentKey(parentKey) || "") : ($("#wizardOrgLevel", createModal.body)?.value || "L2");
      const parent = parseOrgKey(parentKey);
      if (!name) return;
      if (mode === "add") {
        if (!level) return;
        const row = buildRowForParent(parentKey, name);
        if (!row) return;
        row.sourceKey = `NEW|${Date.now()}|${Math.random().toString(36).slice(2, 8)}`;
        row.displayOrder = getNextSiblingOrder(flowRef.orgDraft, parentKey);
        flowRef.orgDraft.push(row);
        flowRef.createdSourceKeys.push(row.sourceKey);
        flowRef.afterScrollToKey = getOrgRowKey(row);
      } else if (selected) {
        const previous = { ...selected };
        if (level === "L1") { selected.hq = name; selected.office = ""; selected.team = ""; selected.part = ""; }
        if (level === "L2") { selected.hq = parent.hq || selected.hq; selected.office = name; selected.team = ""; selected.part = ""; }
        if (level === "L3") { selected.hq = parent.hq; selected.office = parent.office; selected.team = name; selected.part = ""; }
        if (level === "L4") { selected.hq = parent.hq; selected.office = parent.office; selected.team = parent.team; selected.part = name; }
        flowRef.orgDraft.forEach((row) => {
          if (row === selected) return;
          if (previous.hq && row.hq === previous.hq) row.hq = selected.hq;
          if (previous.office && row.office === previous.office) row.office = selected.office || row.office;
          if (previous.team && row.team === previous.team) row.team = selected.team || row.team;
        });
      }
      flowRef.orgDraft = normalizeBlueprint(flowRef.orgDraft);
      flowRef.orgSummary = summarizeOrgChangesForFlow(getFlowBaseRows(flowRef), flowRef.orgDraft, flowRef);
      flowRef.afterScrollToKey = flowRef.selectedAfterOrg;
      createModal.close();
      renderAssignment();
    };
    createModal.open();
  }
  function deleteOrgFromDraft(orgKey) {
    const flow = ensureAssignmentFlow();
    const deleteKeys = [orgKey, ...getDescendantKeys(flow.orgDraft, orgKey)];
    const deletingRows = flow.orgDraft.filter((row) => deleteKeys.includes(getOrgRowKey(row)));
    deletingRows.forEach((row) => {
      const sourceKey = row.sourceKey || getOrgRowKey(row);
      if (String(sourceKey).startsWith("NEW|")) flow.createdSourceKeys = flow.createdSourceKeys.filter((item) => item !== sourceKey);
      else if (!flow.deletedSourceKeys.includes(sourceKey)) flow.deletedSourceKeys.push(sourceKey);
    });
    flow.orgDraft = normalizeBlueprint(flow.orgDraft.filter((row) => !deleteKeys.includes(getOrgRowKey(row))));
    flow.orgSummary = summarizeOrgChangesForFlow(getFlowBaseRows(flow), flow.orgDraft, flow);
    flow.selectedAfterOrg = "ROOT";
    renderAssignment();
  }
  function startAssignmentHistoryEdit(date) {
    const record = state.assignmentRecords.find((item) => item.date === date);
    if (!record) return;
    const target = cloneAssignmentRecord(record);
    state.assignmentFlow = createAssignmentFlow();
    state.assignmentFlow.stage = 3;
    state.assignmentFlow.changeDate = target.date;
    state.assignmentFlow.mode = target.mode;
    state.assignmentFlow.orgDraft = cloneOrgBlueprint(target.afterRows || state.orgBlueprint);
    state.assignmentFlow.baseRows = cloneOrgBlueprint(target.beforeRows || state.orgBlueprint);
    state.assignmentFlow.baseEmployees = (target.beforeEmployees || state.employees).map((item) => ({ ...item }));
    state.assignmentFlow.personnelActions = (target.personnelActions || []).map((item) => ({ ...item, types: [...(item.types || [])], removed: false, enabled: true }));
    state.assignmentFlow.editingRecordDate = target.date;
    state.assignmentFlow.selectedPersonnelOrg = "ROOT";
    showHrView("assignment");
  }
  function cancelAssignmentHistory(date) {
    const record = state.assignmentRecords.find((item) => item.date === date);
    if (!record || record.status === "취소") return;
    record.status = "취소";
    state.orgBlueprint = cloneOrgBlueprint(record.beforeRows || state.orgBlueprint);
    state.employees = (record.beforeEmployees || state.employees).map((item) => ({ ...item }));
    renderAll();
    showHrView("assignment");
  }
  function openAssignmentHistoryDetail(date) {
    const record = state.assignmentRecords.find((item) => item.date === date);
    if (!record) return;
    $("h3", recordDetailModal.root).textContent = `${date} 인사발령 상세`;
    const activeActions = (record.personnelActions || []).map((item) => ({ ...item, enabled: true, removed: false }));
    recordDetailModal.body.innerHTML = `${renderOrgSummaryTable({ orgSummary: record.orgSummary })}${renderPersonnelSummary({ personnelActions: activeActions, orgDraft: record.afterRows || state.orgBlueprint })}<div class="codex-inline-actions" style="margin-top:16px"><button type="button" class="hr-btn btn-outline" id="assignmentHistoryEditBtn" ${hasCurrentPermission("assignment_execute") ? "" : "disabled"}>수정</button><button type="button" class="hr-btn btn-outline" id="assignmentHistoryCancelBtn" ${record.status === "취소" || !hasCurrentPermission("history_cancel") ? "disabled" : ""}>취소</button></div>`;
    recordDetailModal.save.onclick = () => recordDetailModal.close();
    recordDetailModal.open();
    $("#assignmentHistoryEditBtn", recordDetailModal.body)?.addEventListener("click", () => {
      if (!hasCurrentPermission("assignment_execute")) return;
      recordDetailModal.close();
      startAssignmentHistoryEdit(date);
    });
    $("#assignmentHistoryCancelBtn", recordDetailModal.body)?.addEventListener("click", () => {
      if (!hasCurrentPermission("history_cancel")) return;
      recordDetailModal.close();
      cancelAssignmentHistory(date);
    });
  }
  function resolveFallbackOrgRow(rows, currentRow) {
    if (!currentRow) return null;
    const candidates = [
      currentRow.part ? ["L3", currentRow.hq, currentRow.office, currentRow.team, ""].join("|") : "",
      currentRow.team ? ["L2", currentRow.hq, currentRow.office, "", ""].join("|") : "",
      currentRow.office ? ["L1", currentRow.hq, "", "", ""].join("|") : ""
    ].filter(Boolean);
    for (const key of candidates) {
      const row = getBlueprintRow(rows, key);
      if (row) return row;
    }
    return null;
  }
  function applyEmployeeOrgFromRow(employee, row) {
    if (!employee) return;
    if (!row) {
      employee.hq = "오토플러스";
      employee.office = "";
      employee.team = "";
      employee.part = "";
      return;
    }
    employee.hq = row.hq;
    employee.office = row.office;
    employee.team = row.team;
    employee.part = row.part;
  }
  function applyAssignmentFlow(flow) {
    syncPersonnelActionsForStage(flow);
    const nextBlueprint = normalizeBlueprint(flow.orgDraft);
    const previousBlueprint = state.orgBlueprint.map((row) => ({ ...row }));
    const previousByKey = new Map(previousBlueprint.map((row) => [getOrgRowKey(row), row]));
    const nextBySource = new Map(nextBlueprint.map((row) => [row.sourceKey || getOrgRowKey(row), row]));
    const explicitActionIds = new Set(getActivePersonnelActions(flow).map((item) => item.employeeId));
    state.orgBlueprint = nextBlueprint;
    state.employees.forEach((employee) => {
      const currentRow = previousByKey.get(getEmployeeNodeKey(employee));
      const remappedRow = currentRow ? nextBySource.get(currentRow.sourceKey || getOrgRowKey(currentRow)) : null;
      const fallbackRow = !remappedRow && currentRow ? resolveFallbackOrgRow(nextBlueprint, currentRow) : null;
      const nextRow = remappedRow || fallbackRow;
      if (nextRow || currentRow) {
        const beforeSnapshot = {
          dept: employeePath(employee) || "조직 없음",
          jobFamily: employee.jobFamily || "",
          employeeType: employee.employeeType || "",
          grade: employee.grade || "",
          title: employee.title || ""
        };
        const beforePath = employeePath(employee);
        applyEmployeeOrgFromRow(employee, nextRow);
        if (beforePath !== employeePath(employee) && !explicitActionIds.has(employee.id)) {
          employee.assignmentDate = flow.changeDate;
          appendAssignmentDrivenHistory(employee, { type: "조직개편", assignDate: flow.changeDate, reason: remappedRow ? "조직개편 반영" : "삭제 조직 상위 조직으로 자동 재배치", nextDept: employeePath(employee) || "조직 없음", nextGrade: employee.grade, nextTitle: employee.title, nextStatus: employee.status, previousSnapshot: beforeSnapshot });
        }
      }
    });
    getActivePersonnelActions(flow).forEach((action) => {
      const employee = state.employees.find((item) => item.id === action.employeeId);
      const beforeEmployee = getPersonnelBaseEmployee(flow, action.employeeId);
      const beforeRow = beforeEmployee ? previousByKey.get(getEmployeeNodeKey(beforeEmployee)) : null;
      if (!employee) return;
      const beforeSnapshot = {
        dept: employeePath(employee) || "조직 없음",
        jobFamily: employee.jobFamily || "",
        employeeType: employee.employeeType || "",
        grade: employee.grade || "",
        title: employee.title || ""
      };
      const targetRow = getBlueprintRow(state.orgBlueprint, action.targetOrgKey);
      if (hasPersonnelType(action, "소속 제외")) {
        applyEmployeeOrgFromRow(employee, null);
      } else if (hasPersonnelType(action, "부서 이동") && targetRow) {
        applyEmployeeOrgFromRow(employee, targetRow);
      } else if (hasPersonnelType(action, "부서 이동") && !targetRow) {
        applyEmployeeOrgFromRow(employee, resolveFallbackOrgRow(state.orgBlueprint, beforeRow));
      }
      if (hasPersonnelType(action, "책임자 임면")) employee.title = action.targetTitle || employee.title;
      if (hasPersonnelType(action, "승급")) employee.grade = action.targetGrade || employee.grade;
      employee.assignmentDate = flow.changeDate;
      appendAssignmentDrivenHistory(employee, { type: action.types.join(", "), assignDate: flow.changeDate, reason: action.note || "조직개편/인사발령 반영", nextDept: employeePath(employee) || "조직 없음", nextGrade: employee.grade, nextTitle: employee.title, nextStatus: employee.status, previousSnapshot: beforeSnapshot });
    });
    const recordPayload = { date: flow.changeDate, mode: flow.mode, status: "완료", orgSummary: flow.orgSummary, personnelActions: getActivePersonnelActions(flow).map((item) => ({ ...item, types: [...(item.types || [])] })), afterRows: cloneOrgBlueprint(state.orgBlueprint), beforeRows: cloneOrgBlueprint(getFlowBaseRows(flow)), beforeEmployees: getFlowBaseEmployees(flow).map((item) => cloneEmployeeSnapshot(item)), afterEmployees: state.employees.map((item) => cloneEmployeeSnapshot(item)) };
    if (flow.editingRecordDate) {
      const index = state.assignmentRecords.findIndex((item) => item.date === flow.editingRecordDate);
      if (index >= 0) state.assignmentRecords[index] = recordPayload;
      else state.assignmentRecords.unshift(recordPayload);
    } else {
      state.assignmentRecords.unshift(recordPayload);
    }
    flow.orgSummary.deleted.forEach((row) => state.deletedOrgArchive.unshift({ date: flow.changeDate, path: getOrgRowPath(row) }));
    state.assignmentFlow = null;
    renderAll();
    showHrView("assignment");
  }
  function bindAssignmentShell() {
    $$(".codex-assignment-tab", panels.assignment).forEach((button) => button.addEventListener("click", () => { state.assignmentLandingTab = button.dataset.assignmentTab; renderAssignment(); }));
    $$("[data-org-toggle]", panels.assignment).forEach((button) => button.addEventListener("click", (event) => {
      event.stopPropagation();
      const key = button.dataset.orgToggle;
      const prefix = button.dataset.orgTogglePrefix || "landing";
      if (!key || button.classList.contains("is-leaf")) return;
      const isExpanded = getAssignmentExpandedKeys(prefix).includes(key);
      setAssignmentExpanded(prefix, key, !isExpanded);
      renderAssignment();
    }));
    $("#startAssignmentWizardBtn", panels.assignment)?.addEventListener("click", () => {
      if (!hasCurrentPermission("assignment_execute")) return;
      state.assignmentFlow = createAssignmentFlow();
      renderAssignment();
    });
    bindDeferredTextInput(() => panels.assignment, "#assignmentLandingSearch", "assignmentLandingSearch", (value) => {
      state.assignmentLandingSearch = value;
    }, () => {
      renderAssignment();
    });
    $("#cancelAssignmentWizardBtn", panels.assignment)?.addEventListener("click", () => { state.assignmentFlow = null; renderAssignment(); });
    $("#wizardChangeDate", panels.assignment)?.addEventListener("input", (event) => {
      const flow = ensureAssignmentFlow();
      flow.changeDate = formatDateInput(event.target.value);
      event.target.value = flow.changeDate;
    });
    $("#wizardChangeDate", panels.assignment)?.addEventListener("blur", (event) => {
      const flow = ensureAssignmentFlow();
      flow.changeDate = completeDateInput(event.target.value);
      event.target.value = flow.changeDate;
    });
    $("#assignmentNextStepBtn", panels.assignment)?.addEventListener("click", () => { const flow = ensureAssignmentFlow(); flow.changeDate = $("#wizardChangeDate")?.value || flow.changeDate; flow.mode = document.querySelector('input[name="wizardMode"]:checked')?.value || flow.mode; flow.stage = 2; renderAssignment(); });
    $("#assignmentPrevStepBtn", panels.assignment)?.addEventListener("click", () => { const flow = ensureAssignmentFlow(); flow.stage = Math.max(1, flow.stage - 1); renderAssignment(); });
    $("#assignmentOrgEditDoneBtn", panels.assignment)?.addEventListener("click", () => { if (!hasCurrentPermission("assignment_execute")) return; const flow = ensureAssignmentFlow(); flow.orgSummary = summarizeOrgChangesForFlow(getFlowBaseRows(flow), flow.orgDraft, flow); renderAssignment(); });
    $("#assignmentOrgNextStepBtn", panels.assignment)?.addEventListener("click", () => { if (!hasCurrentPermission("assignment_execute")) return; const flow = ensureAssignmentFlow(); flow.orgSummary = summarizeOrgChangesForFlow(getFlowBaseRows(flow), flow.orgDraft, flow); flow.stage = 3; renderAssignment(); });
    $("#assignmentPersonnelDoneBtn", panels.assignment)?.addEventListener("click", () => renderAssignment());
    $("#assignmentFinishBtn", panels.assignment)?.addEventListener("click", () => { if (!hasCurrentPermission("assignment_execute")) return; applyAssignmentFlow(ensureAssignmentFlow()); });
    bindDeferredTextInput(() => panels.assignment, "#personnelSearchInput", "personnelSearchInput", (value) => {
      ensureAssignmentFlow().personnelSearch = value;
    }, () => {
      renderAssignment();
    });
    $$("[data-assignment-history]", panels.assignment).forEach((button) => button.addEventListener("click", () => openAssignmentHistoryDetail(button.dataset.assignmentHistory)));
    $$("[data-assignment-history-edit]", panels.assignment).forEach((button) => button.addEventListener("click", () => startAssignmentHistoryEdit(button.dataset.assignmentHistoryEdit)));
    $$("[data-assignment-history-cancel]", panels.assignment).forEach((button) => button.addEventListener("click", () => cancelAssignmentHistory(button.dataset.assignmentHistoryCancel)));
     $$("[data-assignment-org-node]", panels.assignment).forEach((button) => button.addEventListener("click", () => {
       const flow = state.assignmentFlow;
       const prefix = button.dataset.assignmentOrgPrefix;
       const key = button.dataset.assignmentOrgNode;
       if (!flow) {
         if (state.currentOrgNode === key) setOrgExpanded(key, !isOrgExpanded(key));
         else {
           state.currentOrgNode = key;
           expandOrgAncestors(key, false);
         }
         renderAssignment();
         return;
       }
       if (prefix === "before") {
         if (flow.selectedBeforeOrg === key) setAssignmentExpanded("before", key, !getAssignmentExpandedKeys("before").includes(key));
         else {
           flow.selectedBeforeOrg = key;
           expandAssignmentAncestors("before", key);
         }
       } else if (prefix === "after") {
         if (flow.selectedAfterOrg === key) setAssignmentExpanded("after", key, !getAssignmentExpandedKeys("after").includes(key));
         else {
           flow.selectedAfterOrg = key;
           expandAssignmentAncestors("after", key);
         }
       } else if (prefix === "personnel") {
         if (flow.selectedPersonnelOrg === key) setAssignmentExpanded("personnel", key, !getAssignmentExpandedKeys("personnel").includes(key));
         else {
           flow.selectedPersonnelOrg = key;
           expandAssignmentAncestors("personnel", key);
         }
       }
       renderAssignment();
     }));
     $$("[data-org-add-under]", panels.assignment).forEach((button) => button.addEventListener("click", () => openOrgEditModal("add", button.dataset.orgAddUnder)));
     $$("[data-org-edit]", panels.assignment).forEach((button) => button.addEventListener("click", () => openOrgEditModal("edit", button.dataset.orgEdit)));
     $$("[data-org-inline-edit]", panels.assignment).forEach((button) => button.addEventListener("click", (event) => {
       event.stopPropagation();
       const flow = ensureAssignmentFlow();
       flow.editingAfterOrgKey = button.dataset.orgInlineEdit;
       renderAssignment();
       const input = $(`[data-org-inline-input="${button.dataset.orgInlineEdit}"]`, panels.assignment);
       input?.focus();
       input?.select();
     }));
     $$("[data-org-inline-input]", panels.assignment).forEach((input) => {
       input.addEventListener("click", (event) => event.stopPropagation());
       input.addEventListener("keydown", (event) => {
         if (event.key === "Enter") {
           event.preventDefault();
           renameOrgInDraft(input.dataset.orgInlineInput, input.value.trim());
           renderAssignment();
         }
         if (event.key === "Escape") {
           ensureAssignmentFlow().editingAfterOrgKey = "";
           renderAssignment();
         }
       });
       input.addEventListener("blur", () => {
         const value = input.value.trim();
         if (value) renameOrgInDraft(input.dataset.orgInlineInput, value);
         else ensureAssignmentFlow().editingAfterOrgKey = "";
         renderAssignment();
       });
     });
     $$("[data-org-delete]", panels.assignment).forEach((button) => button.addEventListener("click", () => deleteOrgFromDraft(button.dataset.orgDelete)));
     $$("[data-cancel-org-change]", panels.assignment).forEach((button) => button.addEventListener("click", () => cancelOrgChange(button.dataset.cancelOrgChange, button.dataset.cancelSource)));
     $$("[data-org-drag]", panels.assignment).forEach((button) => {
       button.addEventListener("dragstart", (event) => {
         const flow = ensureAssignmentFlow();
         flow.dragAfterOrgKey = button.dataset.orgDrag;
         flow.dragAfterDropMode = "";
         flow.dragAfterDropTarget = "";
         event.dataTransfer.effectAllowed = "move";
         event.dataTransfer.setData("text/plain", button.dataset.orgDrag);
       });
       button.addEventListener("dragend", () => {
         const flow = ensureAssignmentFlow();
         flow.dragAfterOrgKey = "";
         flow.dragAfterDropMode = "";
         flow.dragAfterDropTarget = "";
         $$("[data-org-drop]", panels.assignment).forEach((row) => row.classList.remove("is-drop-target"));
         $$("[data-org-drop-line]", panels.assignment).forEach((line) => line.classList.remove("is-active"));
       });
     });
     $$("[data-org-drop]", panels.assignment).forEach((row) => {
       row.addEventListener("dragover", (event) => {
         const dragKey = ensureAssignmentFlow().dragAfterOrgKey;
         if (!dragKey) return;
         event.preventDefault();
         const flow = ensureAssignmentFlow();
         const rect = row.getBoundingClientRect();
         const offsetY = event.clientY - rect.top;
         const isTopZone = offsetY <= rect.height * 0.28;
         const isBottomZone = offsetY >= rect.height * 0.72;
         const targetKey = row.dataset.orgDrop;
         $$("[data-org-drop-line]", panels.assignment).forEach((line) => line.classList.remove("is-active"));
         if (isTopZone || isBottomZone) {
           flow.dragAfterDropMode = isTopZone ? "before" : "after";
           flow.dragAfterDropTarget = targetKey;
           row.classList.remove("is-drop-target");
           const activeLine = $(`[data-org-drop-line="${targetKey}"][data-org-drop-position="${flow.dragAfterDropMode}"]`, panels.assignment);
           activeLine?.classList.add("is-active");
         } else {
           flow.dragAfterDropMode = "into";
           flow.dragAfterDropTarget = targetKey;
           row.classList.add("is-drop-target");
         }
       });
       row.addEventListener("dragenter", (event) => {
         const dragKey = ensureAssignmentFlow().dragAfterOrgKey;
         if (!dragKey) return;
         event.preventDefault();
       });
       row.addEventListener("dragleave", () => row.classList.remove("is-drop-target"));
       row.addEventListener("drop", (event) => {
         event.preventDefault();
         row.classList.remove("is-drop-target");
         const flow = ensureAssignmentFlow();
         const dragKey = flow.dragAfterOrgKey || event.dataTransfer.getData("text/plain");
         const targetKey = flow.dragAfterDropTarget || row.dataset.orgDrop;
         const mode = flow.dragAfterDropMode || "into";
         flow.dragAfterOrgKey = "";
         flow.dragAfterDropMode = "";
         flow.dragAfterDropTarget = "";
         $$("[data-org-drop-line]", panels.assignment).forEach((line) => line.classList.remove("is-active"));
         moveOrgInDraft(dragKey, targetKey, mode);
         renderAssignment();
       });
     });
     $$("[data-org-drop-line]", panels.assignment).forEach((line) => {
       line.addEventListener("dragenter", (event) => {
         const flow = ensureAssignmentFlow();
         if (!flow.dragAfterOrgKey) return;
         event.preventDefault();
         flow.dragAfterDropMode = line.dataset.orgDropPosition;
         flow.dragAfterDropTarget = line.dataset.orgDropLine;
         $$("[data-org-drop]", panels.assignment).forEach((row) => row.classList.remove("is-drop-target"));
         $$("[data-org-drop-line]", panels.assignment).forEach((item) => item.classList.remove("is-active"));
         line.classList.add("is-active");
       });
       line.addEventListener("dragover", (event) => {
         const flow = ensureAssignmentFlow();
         if (!flow.dragAfterOrgKey) return;
         event.preventDefault();
         flow.dragAfterDropMode = line.dataset.orgDropPosition;
         flow.dragAfterDropTarget = line.dataset.orgDropLine;
         $$("[data-org-drop]", panels.assignment).forEach((row) => row.classList.remove("is-drop-target"));
         $$("[data-org-drop-line]", panels.assignment).forEach((item) => item.classList.remove("is-active"));
         line.classList.add("is-active");
       });
       line.addEventListener("dragleave", () => line.classList.remove("is-active"));
       line.addEventListener("drop", (event) => {
         event.preventDefault();
         const flow = ensureAssignmentFlow();
         const dragKey = flow.dragAfterOrgKey || event.dataTransfer.getData("text/plain");
         const targetKey = line.dataset.orgDropLine;
         const mode = line.dataset.orgDropPosition;
         flow.dragAfterOrgKey = "";
         flow.dragAfterDropMode = "";
         flow.dragAfterDropTarget = "";
         $$("[data-org-drop-line]", panels.assignment).forEach((item) => item.classList.remove("is-active"));
         moveOrgInDraft(dragKey, targetKey, mode);
         renderAssignment();
       });
     });
    $$("[data-personnel-pick]", panels.assignment).forEach((input) => input.addEventListener("change", () => {
      const flow = ensureAssignmentFlow();
      const set = new Set(flow.personnelPickerSelectedIds || []);
      if (input.checked) set.add(input.dataset.personnelPick);
      else set.delete(input.dataset.personnelPick);
      flow.personnelPickerSelectedIds = Array.from(set);
    }));
    $("#personnelAddSelectedBtn", panels.assignment)?.addEventListener("click", () => {
      const flow = ensureAssignmentFlow();
      const projectedEmployees = getProjectedEmployees(flow);
      (flow.personnelPickerSelectedIds || []).forEach((id) => {
        const employee = projectedEmployees.find((item) => item.id === id) || state.employees.find((item) => item.id === id);
        if (!employee) return;
        const action = ensurePersonnelAction(flow, employee);
        action.manual = true;
        action.removed = false;
      });
      flow.personnelPickerSelectedIds = [];
      renderAssignment();
    });
    $$("[data-personnel-remove]", panels.assignment).forEach((button) => button.addEventListener("click", () => {
      const flow = ensureAssignmentFlow();
      const action = flow.personnelActions.find((item) => item.employeeId === button.dataset.personnelRemove);
      if (action) action.removed = true;
      renderAssignment();
    }));
    $$("[data-personnel-type]", panels.assignment).forEach((input) => input.addEventListener("change", () => {
      const flow = ensureAssignmentFlow();
      const employee = getPersonnelEmployee(flow, input.dataset.personnelType);
      if (!employee) return;
      const action = ensurePersonnelAction(flow, employee);
      setPersonnelTypeEnabled(action, input.dataset.personnelTypeValue, input.checked);
      renderAssignment();
    }));
    $$("[data-personnel-org-text]", panels.assignment).forEach((input) => input.addEventListener("input", () => {
      const flow = ensureAssignmentFlow();
      const employee = getPersonnelEmployee(flow, input.dataset.personnelOrgText);
      if (!employee) return;
      const action = ensurePersonnelAction(flow, employee);
      action.targetOrgText = input.value;
      const match = getPersonnelOrgOptions(flow).find((item) => item.path === input.value.trim());
      if (match) action.targetOrgKey = match.key;
      else if (input.value.trim()) action.targetOrgKey = "";
      renderPersonnelOrgSuggestionList(flow, input.dataset.personnelOrgText, input.closest(".codex-org-suggest-field"));
    }));
    $$("[data-personnel-org-text]", panels.assignment).forEach((input) => input.addEventListener("focus", () => {
      window.requestAnimationFrame(() => input.select());
    }));
    $$("[data-personnel-org-text]", panels.assignment).forEach((input) => input.addEventListener("click", () => {
      window.requestAnimationFrame(() => input.select());
    }));
    $$("[data-personnel-org-text]", panels.assignment).forEach((input) => input.addEventListener("keydown", (event) => {
      if (event.key !== "Enter") return;
      const fieldRoot = input.closest(".codex-org-suggest-field");
      const firstSuggestion = $(".codex-org-suggest-item", fieldRoot);
      if (!firstSuggestion) return;
      event.preventDefault();
      firstSuggestion.click();
    }));
    $$("[data-personnel-org-text]", panels.assignment).forEach((input) => input.addEventListener("blur", () => {
      const flow = ensureAssignmentFlow();
      const employee = getPersonnelEmployee(flow, input.dataset.personnelOrgText);
      if (!employee) return;
      const action = ensurePersonnelAction(flow, employee);
      const typed = input.value.trim();
      if (typed) {
        input.dataset.personnelOrgDefault = getPersonnelInputValue(flow, action);
        return;
      }
      action.targetOrgText = getPersonnelTargetPath(flow, action);
      input.dataset.personnelOrgDefault = action.targetOrgText;
      input.value = action.targetOrgText;
      renderPersonnelOrgSuggestionList(flow, input.dataset.personnelOrgText, input.closest(".codex-org-suggest-field"));
    }));
    $$("[data-personnel-org-pick]", panels.assignment).forEach((button) => button.addEventListener("click", () => {
      const flow = ensureAssignmentFlow();
      const employee = getPersonnelEmployee(flow, button.dataset.personnelOrgPick);
      if (!employee) return;
      const action = ensurePersonnelAction(flow, employee);
      const targetRow = getBlueprintRow(flow.orgDraft, button.dataset.personnelOrgKey);
      if (!targetRow) return;
      action.targetOrgKey = button.dataset.personnelOrgKey;
      action.targetOrgText = getOrgRowPath(targetRow);
      renderAssignment();
    }));
    $$("[data-personnel-title]", panels.assignment).forEach((select) => select.addEventListener("change", () => {
      const flow = ensureAssignmentFlow();
      const employee = getPersonnelEmployee(flow, select.dataset.personnelTitle);
      if (!employee) return;
      ensurePersonnelAction(flow, employee).targetTitle = select.value;
      renderAssignment();
    }));
    $$("[data-personnel-grade]", panels.assignment).forEach((select) => select.addEventListener("change", () => {
      const flow = ensureAssignmentFlow();
      const employee = getPersonnelEmployee(flow, select.dataset.personnelGrade);
      if (!employee) return;
      ensurePersonnelAction(flow, employee).targetGrade = select.value;
      renderAssignment();
    }));
    $$("[data-personnel-note]", panels.assignment).forEach((input) => input.addEventListener("input", () => {
      const flow = ensureAssignmentFlow();
      const employee = getPersonnelEmployee(flow, input.dataset.personnelNote);
      if (!employee) return;
      ensurePersonnelAction(flow, employee).note = input.value;
    }));
  }
  function renderAssignment() {
    if (!state.assignmentFlow) renderAssignmentLanding();
    else if (state.assignmentFlow.stage === 1) renderAssignmentStepOne(state.assignmentFlow);
    else if (state.assignmentFlow.stage === 2) renderAssignmentStepTwo(state.assignmentFlow);
    else renderAssignmentStepThree(state.assignmentFlow);
    bindAssignment();
    requestAnimationFrame(() => applyAssignmentAfterScroll());
  }
  function bindContractToggle(typeSelector, fieldSelector) {
    const typeEl = $(typeSelector);
    const field = $(fieldSelector)?.closest("label");
    if (!typeEl || !field) return;
    const sync = () => {
      const contract = typeEl.value === "계약직";
      field.style.display = contract ? "grid" : "none";
    };
    typeEl.addEventListener("change", sync);
    sync();
  }
  function bindAssignment() {
    bindAssignmentShell();
  }
  function fillCreateForm() {
    const educationRows = [["", "", "", ""]];
    const careerRows = [["", "", "", ""]];
    const familyRows = [["", "", ""]];
    const certificateRows = [["", "", ""]];
    const leaveRows = [["", "", "", ""]];
    createModal.body.innerHTML = `<div class="codex-form-grid"><div class="codex-photo-field span-2"><span>증명사진</span><div class="codex-photo-upload"><div class="codex-photo-preview" id="createPhotoPreview"></div><label class="codex-photo-input"><input id="createPhotoFile" type="file" accept="image/*">사진 업로드</label></div></div><label><span>사원번호</span><input id="createId" placeholder="예: EMP-0101"></label><label><span>사원명</span><input id="createName"></label><label><span>그룹웨어 ID</span><input id="createGroupwareId" placeholder="예: hong.gildong"></label><label><span>주민등록번호</span><input id="createResidentNumber" placeholder="예: 950101-1234567"></label>${renderOrgPicker("create", { hq: "경영관리본부", office: "경영지원실", team: "인사팀", part: "" })}<label><span>직급</span><select id="createGrade">${gradeCodes.map((item) => `<option value="${item}">${item}</option>`).join("")}</select></label><label><span>직책</span><select id="createTitle">${titleCodes.map((item) => `<option value="${item}">${item}</option>`).join("")}</select></label><label><span>직군</span><select id="createFamily">${familyCodes.map((item) => `<option value="${item}">${item}</option>`).join("")}</select></label><label><span>직원유형</span><select id="createEmployeeType">${employeeTypes.map((item) => `<option value="${item}">${item}</option>`).join("")}</select></label><label><span>재직상태</span><select id="createStatus"><option value="재직">재직</option><option value="휴직">휴직</option><option value="퇴직">퇴직</option></select></label><label><span>퇴사일</span><input id="createRetireDate" placeholder="YYYYMMDD"></label><label><span>입사일</span><input id="createHireDate" value="2026.04.13"></label><label><span>생년월일</span><input id="createBirthDate" value="1995.01.01"></label><label><span>결혼여부</span><select id="createMaritalStatus"><option>미혼</option><option>기혼</option></select></label><label><span>연락처</span><input id="createPhone" value="010-0000-0000"></label><label><span>회사 전화</span><input id="createCompanyPhone" value="02-6200-0000"></label><label><span>회사 이메일</span><input id="createCompanyEmail" placeholder="example@autoplus.co.kr"></label><label><span>개인 이메일</span><input id="createPersonalEmail" placeholder="example@gmail.com"></label><label class="span-2"><span>주소</span><input id="createAddress" value="서울특별시"></label><label><span>최종학력</span><input id="createEducation" value="미입력"></label><label class="codex-disabled-field"><span>입사시 직급</span><input id="createHireGrade" readonly></label><label class="codex-disabled-field"><span>입사시 직원유형</span><input id="createHireEmployeeType" readonly></label><label class="codex-disabled-field"><span>입사시 직군</span><input id="createHireFamily" readonly></label>${renderOrgPicker("createHire", { hq: "경영관리본부", office: "경영지원실", team: "인사팀", part: "" }, true, "codex-disabled-field")}<label><span>계약기간</span><input id="createContractPeriod" placeholder="계약직인 경우 입력"></label><label><span>인정경력(개월)</span><input id="createCareerMonths" value="0"></label><label><span>부서배정일</span><input id="createAssignmentDate" value="2026.04.13"></label><label class="span-2"><span>인사 메모</span><textarea id="createMemo" rows="3">신규 등록 사원</textarea></label><div class="codex-note-box span-2"><strong>신규입사 기준</strong>입사시 정보는 신규 등록 시 현재 입력한 인사정보를 자동 상속합니다. 별도 수정이 필요하면 저장 후 인사기록카드 수정에서 변경합니다.</div>${repeatableEditorHtml("휴직사항", "createLeave", ["휴직유형", "시작일", "종료일", "비고"], leaveRows)}${repeatableEditorHtml("학력사항", "createEducation", ["학교명", "재학기간", "전공", "비고"], educationRows)}${repeatableEditorHtml("경력사항", "createCareer", ["회사명", "기간", "담당업무", "비고"], careerRows)}${repeatableEditorHtml("가족사항", "createFamilyRows", ["관계", "성명", "생년월일"], familyRows)}${repeatableEditorHtml("자격증", "createCertificate", ["자격증명", "발급기관", "취득일"], certificateRows)}</div>`;
    bindOrgPicker(createModal.body, "create", syncCreateHireFields);
    bindContractToggle("#createEmployeeType", "#createContractPeriod");
    bindRepeatableEditors(createModal.body);
    bindCreateAutoSync();
    bindInputFormatters(createModal.body);
    bindPhotoUpload(createModal.body, "#createPhotoFile", "#createPhotoPreview", "");
  }
  function fillEditForm() {
    const employee = selectedEmployee();
    const educationRows = getEducationEntries(employee).map((item) => [item[1].split(" ")[0] || item[1], item[0], item[1].split(" ").slice(1).join(" "), ""]);
    const careerRows = getCareerHistory(employee).map((item) => [deepestDept(employee), item[0], item[1], ""]);
    const familyRows = getFamilyEntries(employee);
    const certificateRows = getCertificateEntries(employee).map((item) => [item[1], item[2], item[3]]);
    const awardRows = getAwardEntries(employee);
    const promotionRows = getPromotionEntries(employee);
    const assignmentRows = getAssignmentEntries(employee);
    const trainingRows = employee.educationHistory.map((item) => [item[1], item[0], item[0], "사내/외 교육", ""]);
    const leaveRows = getLeaveEntries(employee);
    editModal.body.innerHTML = `<div class="codex-form-grid"><div class="codex-photo-field span-2"><span>증명사진</span><div class="codex-photo-upload"><div class="codex-photo-preview" id="editPhotoPreview"></div><label class="codex-photo-input"><input id="editPhotoFile" type="file" accept="image/*">사진 업로드</label></div></div><label><span>사원번호</span><input value="${employee.id}" readonly></label><label><span>사원명</span><input id="editName" value="${employee.name}"></label><label><span>그룹웨어 ID</span><input id="editGroupwareId" value="${employee.groupwareId || getGroupwareId(employee)}"></label><label><span>주민등록번호</span><input id="editResidentNumber" value="${employee.residentNumber || getResidentNumber(employee)}"></label>${renderOrgPicker("edit", { hq: employee.hq || "", office: employee.office || "", team: employee.team || "", part: employee.part || "" })}<label><span>직급</span><select id="editGrade">${gradeCodes.map((item) => `<option value="${item}" ${item === employee.grade ? "selected" : ""}>${item}</option>`).join("")}</select></label><label><span>직책</span><select id="editTitle">${titleCodes.map((item) => `<option value="${item}" ${item === employee.title ? "selected" : ""}>${item}</option>`).join("")}</select></label><label><span>직군</span><select id="editFamily">${familyCodes.map((item) => `<option value="${item}" ${item === employee.jobFamily ? "selected" : ""}>${item}</option>`).join("")}</select></label><label><span>직원유형</span><select id="editEmployeeType">${employeeTypes.map((item) => `<option value="${item}" ${item === employee.employeeType ? "selected" : ""}>${item}</option>`).join("")}</select></label><label><span>계약기간</span><input id="editContractPeriod" value="${employee.contractPeriod || ""}"></label><label><span>재직상태</span><select id="editStatus"><option value="재직" ${getDisplayStatus(employee) === "재직" ? "selected" : ""}>재직</option><option value="휴직" ${getDisplayStatus(employee) === "휴직" ? "selected" : ""}>휴직</option><option value="퇴직" ${getDisplayStatus(employee) === "퇴직" ? "selected" : ""}>퇴직</option></select></label><label><span>퇴사일</span><input id="editRetireDate" value="${employee.retireDate || ""}" placeholder="YYYYMMDD"></label><label><span>생년월일</span><input id="editBirthDate" value="${employee.birthDate}"></label><label><span>입사일</span><input id="editHireDate" value="${employee.hireDate}"></label><label><span>결혼여부</span><select id="editMaritalStatus"><option ${((employee.maritalStatus || getMaritalStatus(employee)) === "미혼") ? "selected" : ""}>미혼</option><option ${((employee.maritalStatus || getMaritalStatus(employee)) === "기혼") ? "selected" : ""}>기혼</option></select></label><label><span>연락처</span><input id="editPhone" value="${employee.phone}"></label><label><span>회사 전화</span><input id="editCompanyPhone" value="${getCompanyPhone(employee)}"></label><label><span>회사 이메일</span><input id="editCompanyEmail" value="${getCompanyEmail(employee)}"></label><label><span>개인 이메일</span><input id="editPersonalEmail" value="${getPersonalEmail(employee)}"></label><label class="span-2"><span>주소</span><input id="editAddress" value="${getAddress(employee)}"></label><label><span>최종학력</span><input id="editEducation" value="${employee.education}"></label><label><span>입사시 직급</span><select id="editHireGrade">${gradeCodes.map((item) => `<option value="${item}" ${item === employee.hireGrade ? "selected" : ""}>${item}</option>`).join("")}</select></label><label><span>입사시 직원유형</span><select id="editHireEmployeeType">${employeeTypes.map((item) => `<option value="${item}" ${(item === (employee.hireEmployeeType || employee.employeeType)) ? "selected" : ""}>${item}</option>`).join("")}</select></label><label><span>입사시 직군</span><select id="editHireFamily">${familyCodes.map((item) => `<option value="${item}" ${(item === (employee.hireJobFamily || employee.jobFamily)) ? "selected" : ""}>${item}</option>`).join("")}</select></label><label class="span-2"><span>입사시 소속</span><input id="editHireOrgPathText" value="${hireEmployeePath(employee)}" placeholder="예: 본부 > 실 > 팀 > 파트"></label><label><span>인정경력(개월)</span><input id="editCareerMonths" value="${employee.careerMonths}"></label><label class="span-2"><span>인사 메모</span><textarea id="editMemo" rows="3">${employee.memo}</textarea></label><div class="codex-note-box span-2"><strong>이력 입력 방식</strong>입사시 소속은 당시 기준 텍스트 스냅샷으로 저장되어 조직개편 이후에도 그대로 유지됩니다. 발령사항은 발령 당시 스냅샷 기준으로 유지되며, 승급사항과 분리하여 관리합니다.</div>${repeatableEditorHtml("휴직사항", "leave", ["휴직유형", "시작일", "종료일", "비고"], leaveRows)}${repeatableEditorHtml("학력사항", "education", ["학교명", "재학기간", "전공", "비고"], educationRows)}${repeatableEditorHtml("경력사항", "career", ["회사명", "기간", "담당업무", "비고"], careerRows)}${repeatableEditorHtml("가족사항", "family", ["관계", "성명", "생년월일"], familyRows)}${repeatableEditorHtml("자격증", "certificate", ["자격증명", "발급기관", "취득일"], certificateRows)}${repeatableEditorHtml("상벌사항", "award", ["상벌구분", "상벌명", "발생일", "사유"], awardRows)}${repeatableEditorHtml("승급사항", "promotion", ["승급구분", "승급일", "소속부서", "직급", "직책", "비고"], promotionRows)}${repeatableEditorHtml("발령사항", "assignmentHistory", ["발령구분", "발령일", "발령부서", "직군", "직원유형", "직급", "직책", "비고"], assignmentRows)}${repeatableEditorHtml("교육사항", "training", ["교육명", "시작일", "종료일", "교육기관", "비고"], trainingRows)}</div>`;
    bindOrgPicker(editModal.body, "edit");
    bindContractToggle("#editEmployeeType", "#editContractPeriod");
    bindRepeatableEditors(editModal.body);
    bindInputFormatters(editModal.body);
    bindPhotoUpload(editModal.body, "#editPhotoFile", "#editPhotoPreview", employee.photoDataUrl || "");
  }
  function openBatchImportModal() {
    batchImportModal.body.innerHTML = `<div class="codex-stack"><div class="codex-note-box"><strong>사용 순서</strong>1. 아래 버튼으로 엑셀 양식을 내려받습니다.<br>2. <em>사원일괄등록</em> 시트에 사원 정보를 입력합니다.<br>3. 저장한 파일을 업로드하면 신규 사원이 한 번에 등록됩니다.</div><div class="codex-note-box"><strong>등록 기준</strong>본부/실/팀/파트, 직급, 직책, 직군, 직원유형은 현재 화면의 기준코드와 일치해야 합니다. 휴직은 휴직유형과 휴직시작일을 함께 입력하고, 퇴직은 퇴사일을 입력해 주세요.<br>네트워크가 제한된 경우에는 CSV 양식으로도 동일하게 업로드할 수 있습니다.</div><div class="codex-inline-actions"><button type="button" class="hr-btn btn-outline" id="employeeBatchTemplateDownloadBtn">양식 다운로드</button></div><label><span>업로드 파일</span><input id="employeeBatchFile" type="file" accept=".xlsx,.xls,.csv"></label><div class="codex-note-box codex-note-box-compact"><strong>필수 컬럼</strong>${batchImportColumns.filter((column) => column.required).map((column) => column.label).join(", ")}</div></div>`;
    batchImportModal.save.textContent = "일괄 등록";
    $("#employeeBatchTemplateDownloadBtn", batchImportModal.body)?.addEventListener("click", () => downloadEmployeeBatchTemplate());
    batchImportModal.open();
  }
  function saveCreate() {
    if (!hasCurrentPermission("employee_create")) {
      window.alert("신규 사원 등록 권한이 없습니다.");
      return;
    }
    const manualId = $("#createId").value.trim();
    if (!manualId) {
      window.alert("사원번호를 입력해 주세요.");
      $("#createId")?.focus();
      return;
    }
    if (state.employees.some((employee) => employee.id === manualId)) {
      window.alert("이미 존재하는 사원번호입니다.");
      $("#createId")?.focus();
      return;
    }
    let employee;
    try {
      employee = buildEmployeeFromInput(collectEmployeeInputFromCreateForm());
    } catch (error) {
      window.alert(error.message || "신규 사원 정보를 확인해 주세요.");
      return;
    }
    state.employees.unshift(employee);
    state.selectedId = employee.id;
    syncEmployeeCodeRefs();
    createModal.close();
    renderAll();
    showHrView("record");
  }
  function saveEdit() {
    const employee = selectedEmployee();
    if (!hasCurrentPermission("employee_edit") || !canCurrentAccessEmployeeRecord(employee)) {
      window.alert("인사기록카드 수정 권한이 없습니다.");
      return;
    }
    const selectedStatus = $("#editStatus").value;
    const retireDate = completeDateInput($("#editRetireDate").value);
    if (selectedStatus === "퇴직" && !retireDate) {
      window.alert("퇴직 처리 시 퇴사일을 입력해 주세요.");
      $("#editRetireDate")?.focus();
      return;
    }
    const leaveRows = normalizeLeaveRows(collectRepeatableRows(editModal.body, "leave", 4));
    const leaveValidationMessage = validateLeaveRows(leaveRows);
    if (leaveValidationMessage) {
      window.alert(leaveValidationMessage);
      return;
    }
    if (selectedStatus === "휴직" && !leaveRows.length) {
      window.alert("휴직 상태를 선택한 경우 휴직사항을 한 건 이상 입력해 주세요.");
      return;
    }
    employee.name = $("#editName").value;
    employee.groupwareId = $("#editGroupwareId").value.trim();
    employee.residentNumber = formatResidentNumber($("#editResidentNumber").value.trim());
    employee.hq = $("#editHq").value.trim();
    employee.office = $("#editOffice").value.trim();
    employee.team = $("#editTeam").value.trim();
    employee.part = $("#editPart").value.trim();
    employee.grade = $("#editGrade").value;
    employee.title = $("#editTitle").value;
    employee.jobFamily = $("#editFamily").value;
    employee.employeeType = $("#editEmployeeType").value;
    employee.contractPeriod = employee.employeeType === "계약직" ? $("#editContractPeriod").value : "";
    employee.maritalStatus = $("#editMaritalStatus").value;
    employee.birthDate = completeDateInput($("#editBirthDate").value);
    employee.hireDate = completeDateInput($("#editHireDate").value);
    employee.phone = formatPhoneInput($("#editPhone").value);
    employee.companyPhone = formatPhoneInput($("#editCompanyPhone").value.trim());
    employee.companyEmail = $("#editCompanyEmail").value.trim();
    employee.personalEmail = $("#editPersonalEmail").value.trim();
    employee.address = $("#editAddress").value.trim();
    employee.education = $("#editEducation").value;
    const retireDateValue = parseDateValue(retireDate);
    employee.status = retireDateValue
      ? (retireDateValue <= getCurrentBaseDateValue() ? "퇴직" : (selectedStatus === "퇴직" ? "재직" : selectedStatus))
      : (selectedStatus === "휴직" && leaveRows.some((row) => parseDateValue(row[1]) <= getCurrentBaseDateValue() && (!parseDateValue(row[2]) || parseDateValue(row[2]) >= getCurrentBaseDateValue())) ? "휴직" : selectedStatus);
    employee.retireDate = retireDate;
    employee.hireGrade = $("#editHireGrade").value;
    employee.hireEmployeeType = $("#editHireEmployeeType").value;
    employee.hireJobFamily = $("#editHireFamily").value;
    employee.hireOrgPathText = $("#editHireOrgPathText").value.trim() || hireEmployeePath(employee);
    employee.careerMonths = $("#editCareerMonths").value;
    employee.assignmentDate = employee.hireDate;
    employee.leaveItems = leaveRows;
    employee.educationItems = collectRepeatableRows(editModal.body, "education", 4).map((row) => [row[1], `${row[0]} ${row[2]}`.trim()]);
    employee.careerHistory = collectRepeatableRows(editModal.body, "career", 4).map((row) => [row[1], row[2] || row[3] || ""]);
    employee.familyItems = collectRepeatableRows(editModal.body, "family", 3);
    employee.certificateItems = collectRepeatableRows(editModal.body, "certificate", 3).map((row) => ["자격증", row[0], row[1], row[2]]);
      employee.awardItems = collectRepeatableRows(editModal.body, "award", 4);
      employee.promotionItems = collectRepeatableRows(editModal.body, "promotion", 6);
      employee.assignmentItems = collectRepeatableRows(editModal.body, "assignmentHistory", 8);
      employee.educationHistory = collectRepeatableRows(editModal.body, "training", 5).map((row) => [row[1], row[0]]);
      employee.memo = $("#editMemo").value;
    employee.photoDataUrl = editModal.body.dataset.photoDataUrl || employee.photoDataUrl || "";
    syncEmployeeLeaveSummary(employee);
    employee.status = computeCurrentEmploymentStatus(employee, selectedStatus, retireDate);
    if (employee.status === "퇴직" && retireDate && !(employee.history || []).some((row) => row?.[0] === retireDate && String(row?.[1] || "").includes("퇴직"))) {
      employee.history.unshift([retireDate, "퇴직 처리"]);
    }
    appendLeaveHistoryEntries(employee, leaveRows);
    employee.history.unshift(["2026.04.13", "인사기록카드 수정"]);
    editModal.close();
    renderAll();
    state.currentRecordTab = "overview";
    showHrView("record");
  }
  createModal.save.addEventListener("click", saveCreate);
  editModal.save.addEventListener("click", saveEdit);
  batchImportModal.save.addEventListener("click", async () => {
    if (!hasCurrentPermission("employee_create")) {
      window.alert("사원 일괄 등록 권한이 없습니다.");
      return;
    }
    const fileInput = $("#employeeBatchFile", batchImportModal.body);
    const file = fileInput?.files?.[0];
    if (!file) {
      window.alert("업로드할 엑셀 파일을 선택해 주세요.");
      fileInput?.focus();
      return;
    }
    try {
      const createdEmployees = await importEmployeesFromBatchFile(file);
      batchImportModal.close();
      window.alert(`${createdEmployees.length}명의 사원이 일괄 등록되었습니다.`);
    } catch (error) {
      window.alert(error.message || "엑셀 일괄 등록 중 오류가 발생했습니다.");
    }
  });
  function setPageTitle(title, description) { $("h2", refs.pageTitle).textContent = title; $("p", refs.pageTitle).textContent = description; }
  function updatePrimaryAction(view) {
    const primaryButton = refs.pagePrimaryButton;
    const secondaryButton = refs.pageSecondaryButton;
    if (!primaryButton) return;
    if (view === "directory") {
      primaryButton.textContent = "➕ 신규 등록";
      primaryButton.style.display = hasCurrentPermission("employee_create") ? "inline-flex" : "none";
      if (secondaryButton) {
        secondaryButton.textContent = "📥 엑셀 일괄 등록";
        secondaryButton.style.display = hasCurrentPermission("employee_create") ? "inline-flex" : "none";
      }
    } else if (view === "assignment") {
      primaryButton.style.display = "none";
      if (secondaryButton) secondaryButton.style.display = "none";
    } else if (view === "quick") {
      primaryButton.textContent = "인사기록카드 보기";
      primaryButton.style.display = "inline-flex";
      if (secondaryButton) secondaryButton.style.display = "none";
    } else if (view === "admin") {
      primaryButton.style.display = "none";
      if (secondaryButton) secondaryButton.style.display = "none";
    } else {
      primaryButton.style.display = "none";
      if (secondaryButton) secondaryButton.style.display = "none";
    }
  }
  function setMenus(view) {
    refs.topItems.forEach((item, index) => item.classList.toggle("active", (view === "directory" && index === 0) || (view === "record" && index === 1) || (view === "org" && index === 2) || (view === "assignment" && index === 3)));
    refs.sideItems.forEach((item, index) => { const active = (view === "directory" && index === 0) || (view === "record" && index === 1) || (view === "org" && index === 2) || (view === "assignment" && index === 3); item.classList.toggle("active", active); });
    panels.codeMenu?.classList.toggle("active", view === "codes");
    panels.adminMenu?.classList.toggle("active", view === "admin");
  }
  function toggleBaseSections(directory, record, org) {
    refs.searchBar.style.display = directory ? "block" : "none";
    refs.stats.style.display = directory ? "grid" : "none";
    refs.tableWrap.style.display = directory ? "block" : "none";
    refs.orgWrap.style.display = org ? "block" : "none";
    refs.cardWrap.style.display = record ? "grid" : "none";
    if (panels.codes) panels.codes.classList.toggle("codex-hidden", state.currentHrView !== "codes");
    if (panels.assignment) panels.assignment.classList.toggle("codex-hidden", state.currentHrView !== "assignment");
    if (panels.admin) panels.admin.classList.toggle("codex-hidden", state.currentHrView !== "admin");
  }
  function showHrView(view) {
    const nextView = canAccessView(view) ? view : getFallbackView();
    if (nextView !== view) view = nextView;
    state.currentHrView = view;
    setMenus(view);
    if (view === "directory") { setPageTitle("사원명부", "전체 사원 정보를 조회하고 관리합니다"); toggleBaseSections(true, false, false); }
    else if (view === "record") { setPageTitle("인사기록카드", "선택한 사원의 상세 인사정보와 발령이력을 조회합니다"); toggleBaseSections(false, true, false); renderRecord(); }
    else if (view === "quick") { setPageTitle("사원 기본정보", "별도 탭에서 기본 인사정보만 빠르게 조회합니다"); toggleBaseSections(false, true, false); renderQuickRecord(); }
    else if (view === "org") { setPageTitle("조직도", "사원 배정 정보 기반으로 조직 구성을 조회합니다"); toggleBaseSections(false, false, true); }
    else if (view === "codes") { setPageTitle("코드관리", "조직코드와 기준코드를 조회하는 화면입니다"); toggleBaseSections(false, false, false); renderCodes(); }
    else if (view === "assignment") { setPageTitle("조직 관리", "조직개편 및 인사발령을 단계별로 편집하고 이력을 관리합니다"); toggleBaseSections(false, false, false); renderAssignment(); }
    else if (view === "admin") { setPageTitle("관리자 권한 설정", "전체관리자와 기능별 관리자 계정 및 메뉴 권한을 관리합니다"); toggleBaseSections(false, false, false); renderAdmin(); bindAdmin(); }
    syncViewQuery(view);
    updatePrimaryAction(view);
    renderNotesByView();
  }
  function renderAll() { syncLegacyMetaArraysFromRegistry(); syncEmployeeCodeRefs(); renderDirectorySearchBar(); renderStats(); renderTable(); renderOrg(); renderRecord(); renderCodes(); renderAssignment(); renderAdmin(); syncAccessControlledMenus(); if (state.currentHrView === "admin") bindAdmin(); }
  function bindCoreActions() {
    refs.topItems[0]?.addEventListener("click", () => showHrView("directory"));
    refs.topItems[1]?.addEventListener("click", () => showHrView("record"));
    refs.topItems[2]?.addEventListener("click", () => showHrView("org"));
    refs.sideItems[0]?.addEventListener("click", () => showHrView("directory"));
    refs.sideItems[1]?.addEventListener("click", () => showHrView("record"));
    refs.sideItems[2]?.addEventListener("click", () => showHrView("org"));
    $(".hr-top-user", refs.hrSystem)?.addEventListener("click", () => showHrView("admin"));
    document.addEventListener("click", (event) => { const detail = event.target.closest('[data-action="detail"]'); if (detail) { event.preventDefault(); const row = detail.closest("tr"); const id = row?.dataset.employeeId; if (id) { const employee = state.employees.find((item) => item.id === id); if (!canCurrentAccessEmployeeRecord(employee)) return; state.selectedId = id; state.currentRecordTab = "overview"; renderRecord(); showHrView("record"); } } });
    document.addEventListener("click", (event) => {
      const recordDetail = event.target.closest("[data-record-detail]");
      if (!recordDetail) return;
      event.preventDefault();
      state.currentRecordTab = recordDetail.dataset.recordDetail;
      openRecordDetailModal(recordDetail.dataset.recordDetail);
    });
    document.addEventListener("click", (event) => {
      const quickTrigger = event.target.closest("[data-quick-profile]");
      if (!quickTrigger) return;
      event.preventDefault();
      openQuickProfileModal(quickTrigger.dataset.quickProfile);
    });
    const primaryButton = $(".btn-primary", refs.pageTitle);
    const pageActionWrap = $(".hr-page-title > div:last-child", refs.hrSystem);
    const recordEditButton = document.createElement("button");
    recordEditButton.className = "hr-btn btn-outline codex-hidden";
    recordEditButton.textContent = "✎ 기록카드 수정";
    const recordPrintButton = document.createElement("button");
    recordPrintButton.className = "hr-btn btn-outline codex-hidden";
    recordPrintButton.textContent = "🖨 인쇄";
    pageActionWrap?.prepend(recordPrintButton);
    pageActionWrap?.prepend(recordEditButton);
    const syncRecordActionButtons = () => {
      const visible = state.currentHrView === "record" && hasCurrentPermission("employee_edit") && canCurrentAccessEmployeeRecord(selectedEmployee());
      recordEditButton.classList.toggle("codex-hidden", !visible);
      recordPrintButton.classList.toggle("codex-hidden", !visible);
    };
    const observer = new MutationObserver(syncRecordActionButtons);
    observer.observe(refs.pageTitle, { childList: true, subtree: true });
    recordEditButton.addEventListener("click", () => {
      if (!hasCurrentPermission("employee_edit")) return;
      if (!canCurrentAccessEmployeeRecord(selectedEmployee())) return;
      fillEditForm();
      editModal.open();
    });
    recordPrintButton.addEventListener("click", () => openRecordPrintView());
    syncRecordActionButtons();
    $$(".hr-stat-card", refs.stats).forEach((card) => {
      card.addEventListener("click", () => {
        if (card.dataset.statType === "leave") openStatModal("leave");
        if (card.dataset.statType === "hire") openStatModal("hire");
      });
    });
    primaryButton?.addEventListener("click", (event) => {
      if (state.currentHrView === "directory") { event.preventDefault(); if (hasCurrentPermission("employee_create")) { fillCreateForm(); createModal.open(); } }
      else if (state.currentHrView === "assignment") { event.preventDefault(); $("#assignApplyBtn")?.click(); }
      else if (state.currentHrView === "quick") { event.preventDefault(); if (canCurrentAccessEmployeeRecord(selectedEmployee())) showHrView("record"); }
    }, true);
    refs.pageSecondaryButton?.addEventListener("click", (event) => {
      if (state.currentHrView !== "directory") return;
      event.preventDefault();
      if (!hasCurrentPermission("employee_create")) return;
      openBatchImportModal();
    }, true);
  }
  function renderNotesByView() {
    if (typeof annotations === "undefined" || !refs.annoList || state.currentSystem !== 1) return;
    const map = { directory: ["topbar", "sidebar", "searchbar", "stats", "emptable", "pagetitle"], record: ["topbar", "sidebar", "pagetitle", "hrcard"], org: ["topbar", "sidebar", "pagetitle", "orgchart"], codes: ["topbar", "sidebar", "pagetitle"], assignment: ["topbar", "sidebar", "pagetitle"], admin: ["topbar", "sidebar", "pagetitle"] };
    const currentRegions = map[state.currentHrView] || ["topbar", "sidebar", "pagetitle"];
    const base = (annotations[1] || []).filter((item) => currentRegions.includes(item.region));
    const overrides = {
      directory: {
        topbar: {
          title: "상단 공통 프레임",
          desc: "인사시스템 전체 공통 프레임으로 시스템명, 최상위 메뉴, 사용자 진입점을 제공한다.",
          detail: [["주요 기능", "시스템 레벨 메뉴 전환, 현재 위치 인지, 우측 사용자 액션 노출"], ["연계", "사원정보관리 / 인사기록카드 / 조직도 / 발령·이동 / 보고서"], ["개발 포인트", "화면 전환 시 활성 메뉴 유지, 공통 버튼 충돌 방지"]]
        },
        sidebar: {
          title: "2차 업무 메뉴",
          desc: "현재 도메인 내 세부 기능 진입 영역이다. 화면에 따라 보이는 메뉴 구성이 달라질 수 있다.",
          detail: [["주요 기능", "사원명부, 인사기록카드, 조직도, 발령입력, 코드관리 이동"], ["연계", "선택 화면의 본문 렌더 및 상단 버튼 구성"], ["개발 포인트", "현재 화면 하이라이트, 미구현 메뉴 숨김 처리 기준 정의"]]
        },
        searchbar: {
          title: "사원 검색 및 조건 필터",
          desc: "사원명부 조회 조건 입력 영역으로 검색어와 조건값에 따라 하단 목록이 즉시 갱신된다.",
          detail: [["입력 데이터", "통합검색어, 입사일/퇴사일 기간, 부서 다중토큰, 직급 다중토큰, 재직상태"], ["처리 로직", "기본 목록은 퇴직 제외, 재직상태를 퇴직으로 선택한 경우에만 퇴직자 검색 포함, 날짜는 불완전 입력값 자동완성"], ["연계", "사원명부 테이블, 통계 카드, 기본정보 팝업"], ["검토 포인트", "토큰 입력/추천검색어/퇴직상태 선택 후 결과 건수가 정확해야 함"]]
        },
        stats: {
          title: "인사 현황 요약 통계",
          desc: "전체 인원, 재직, 휴직, 신규입사 수치를 요약하고 클릭 시 상세 대상자 팝업을 연다.",
          detail: [["주요 기능", "카드 클릭 시 상세 팝업, 대상자 선택, 기본정보 팝업 진입"], ["처리 로직", "사원 등록/수정/발령 반영 후 수치 즉시 재계산"], ["연계", "휴직 팝업, 신규입사 기간 필터, 인사기록카드"], ["검토 포인트", "현재 기준/기간 기준 대상자와 카드 수치가 일치해야 함"]]
        },
        emptable: {
          title: "사원명부 조회 결과",
          desc: "조건에 맞는 사원 목록을 보여주며 성명/사번은 기본정보 팝업, 상세보기는 인사기록카드로 연결된다.",
          detail: [["주요 기능", "행 선택, 기본정보 팝업, 인사기록카드 상세 이동"], ["표시 데이터", "사번, 성명, 조직, 직급, 재직상태, 입사일"], ["연계", "신규등록, 기록카드 수정, 발령입력 반영 결과 즉시 반영"], ["검토 포인트", "저장 후 목록 재렌더와 클릭 동작이 유지되는지 확인"]]
        },
        pagetitle: {
          title: "사원명부 화면 액션",
          desc: "사원명부 전용 주요 작업 버튼 영역이다. 현재는 신규 등록과 엑셀 내보내기 흐름을 포함한다.",
          detail: [["주요 기능", "신규등록 팝업, 내보내기 액션"], ["연계", "신규등록 저장 후 명부/통계/조직도/기록카드 동기화"], ["개발 포인트", "이 화면에서만 신규등록 노출, 타 화면에서는 버튼 구성이 달라야 함"]]
        }
      },
      record: {
        topbar: {
          title: "상단 공통 프레임",
          desc: "기록카드 화면도 동일한 공통 프레임을 사용하므로 도메인 전환 후 선택 사원 정보가 유지되어야 한다.",
          detail: [["연계", "사원명부에서 넘어온 선택 사원 유지"], ["검토 포인트", "기록카드에서 다른 화면 이동 후 복귀 시 선택 대상 유지 여부"]]
        },
        sidebar: {
          title: "기록카드 관련 세부 메뉴",
          desc: "사원명부에서 상세보기로 진입한 뒤에도 좌측 메뉴를 통해 다른 HR 화면으로 이동할 수 있다.",
          detail: [["주요 기능", "사원명부, 인사기록카드, 조직도, 발령입력, 코드관리 이동"], ["연계", "현재 선택 사원 유지"], ["검토 포인트", "기록카드 수정 후 다른 메뉴 이동 시 저장 반영 여부"]]
        },
        pagetitle: {
          title: "기록카드 전용 액션",
          desc: "인사기록카드 전용 상단 작업 영역이다. 선택한 사원을 기준으로만 동작해야 한다.",
          detail: [["주요 기능", "기록카드 수정, 화면별 보조 액션"], ["연계", "수정 팝업 저장 후 명부/조직도/통계 동기화"], ["개발 포인트", "사원 미선택 상태 방어, 버튼 노출 조건 분리"]]
        },
        hrcard: {
          title: "인사기록카드 본문",
          desc: "기본 인사정보와 이력성 데이터를 통합 조회하는 상세 화면이다. 상단은 기본 정보, 하단은 학력/경력/가족/자격/상벌/승급/발령/교육 이력으로 구성된다.",
          detail: [["표시 데이터", "기본정보, 신상정보, 입사정보, 조직정보, 이력성 항목 전체"], ["처리 로직", "이력 항목은 상세보기 팝업과 수정 팝업에서 동일 데이터셋 사용"], ["연계", "사원명부 상세보기, 기본정보 팝업의 인사기록카드 버튼, 발령입력 자동 이력"], ["검토 포인트", "신규등록 시 비어야 하는 이력과 발령 기반 자동 생성 이력이 구분되는지 확인"]]
        }
      },
      org: {
        topbar: {
          title: "상단 공통 프레임",
          desc: "조직도 화면도 공통 프레임을 사용하며 조직 선택 상태와 검색 상태가 우측 콘텐츠에 영향을 준다.",
          detail: [["연계", "전역 메뉴 전환 후 조직도 복귀 시 선택 조직 유지"], ["검토 포인트", "조직 선택 상태와 검색어 유지 정책 확인"]]
        },
        sidebar: {
          title: "조직 관련 세부 메뉴",
          desc: "조직도는 좌측 업무 메뉴와 조직 트리 두 개의 내비게이션을 동시에 사용한다.",
          detail: [["주요 기능", "업무 메뉴 이동 + 조직 트리 탐색"], ["연계", "발령입력, 코드관리"], ["검토 포인트", "업무 메뉴와 조직 트리 선택 상태가 서로 충돌하지 않아야 함"]]
        },
        pagetitle: {
          title: "조직도 전용 액션",
          desc: "조직도 화면 상단 작업 영역으로 조직도 조회 전용 동작만 노출되어야 한다.",
          detail: [["주요 기능", "조직도 조회 보조 액션"], ["개발 포인트", "사원명부용 신규등록 버튼이 이 화면에 노출되지 않아야 함"], ["검토 포인트", "화면별 버튼 분기 정확성 확인"]]
        },
        orgchart: {
          title: "조직 트리 및 배치 현황",
          desc: "좌측 조직 트리와 우측 선택 조직 구성원 패널로 이루어진 탐색형 조직도 화면이다.",
          detail: [["주요 기능", "조직 선택, +/− 펼침, 하위조직 ON/OFF, 검색, 기본정보 팝업"], ["처리 로직", "좌측 선택 시 우측 조직 범위 재계산, 선택 조직은 좌측 스크롤 상단 근처로 정렬"], ["연계", "사원 기본정보 팝업, 인사기록카드, 발령입력 반영 결과"], ["검토 포인트", "ROOT 선택 시 전체 조직이 표시되는지, 하위조직 OFF 시 선택 조직만 보이는지 확인"]]
        }
      },
      codes: {
        topbar: {
          title: "상단 공통 프레임",
          desc: "코드관리도 공통 프레임 안에서 동작하며, 운영 기준코드의 진입 화면 역할을 한다.",
          detail: [["연계", "조직도, 신규등록, 기록카드 수정, 발령입력"], ["검토 포인트", "기준코드 변경이 입력 화면에 재반영되는지 확인"]]
        },
        sidebar: {
          title: "코드관리 관련 세부 메뉴",
          desc: "코드관리 진입용 사이드 메뉴이다. 조직/직급/직책/직군/직원유형 기준 흐름과 연결된다.",
          detail: [["주요 기능", "코드관리 화면 진입"], ["연계", "조직도, 신규등록, 기록카드 수정 드롭다운"], ["검토 포인트", "코드 저장 후 참조 화면 재렌더 여부"]]
        },
        pagetitle: {
          title: "코드관리 진입 및 수정 액션",
          desc: "코드 현황 중심 화면에서 조직코드 수정, 레벨관리, 기준코드 수정을 진입시키는 상단 작업 영역이다.",
          detail: [["주요 기능", "현황 조회, 수정화면 진입"], ["처리 로직", "코드 수정 후 관련 드롭다운과 조직도 프리뷰 갱신"], ["검토 포인트", "조직코드와 메타코드의 영향 범위가 문서화되어야 함"]]
        }
      },
      assignment: {
        topbar: {
          title: "조직관리 공통 프레임",
          desc: "조직개편 및 인사발령은 단계형 편집 흐름이므로 현재 단계, 편집 상태, 완료 시점이 명확하게 보여야 한다.",
          detail: [["주요 기능", "조직관리 메인, 3단계 위저드, 이력 조회 화면 공통 프레임"], ["연계", "조직도, 코드관리, 사원명부, 인사기록카드"], ["검토 포인트", "단계 전환 후 편집 상태와 임시데이터가 유실되지 않아야 함"]]
        },
        sidebar: {
          title: "조직/인사처리 진입 메뉴",
          desc: "조직 관리, 인사발령, 코드관리 등 상호 의존 기능으로 이동하는 영역이다.",
          detail: [["주요 기능", "조직관리 진입, 다른 HR 기능과의 왕복"], ["연계", "조직도, 코드관리, 인사기록카드"], ["검토 포인트", "조직개편 중 다른 화면으로 이동했다 복귀해도 상태 정책이 명확해야 함"]]
        },
        pagetitle: {
          title: "조직개편/인사발령 메인 액션",
          desc: "메인 화면에서 조직개편/인사발령 위저드를 시작하고, 단계별 완료 버튼으로 흐름을 진행한다.",
          detail: [["주요 기능", "위저드 시작, 단계별 다음/이전, 편집완료, 최종 완료"], ["처리 로직", "최종 완료 시 조직도/사원정보/코드관리/이력 전부 갱신"], ["검토 포인트", "중간 단계 저장 전에는 본 데이터와 임시데이터가 분리되어야 함"]]
        }
      },
      admin: {
        topbar: {
          title: "상단 공통 프레임",
          desc: "관리자 권한 설정 화면도 공통 프레임 안에서 동작하며, 관리자 범주를 바꿔도 현재 시스템 컨텍스트는 유지되어야 한다.",
          detail: [["연계", "사원정보관리, 조직관리, 코드관리와 같은 운영 화면과 동일한 공통 헤더 사용"], ["검토 포인트", "관리자 화면 진입/복귀 시 현재 시스템 상태와 사용자 영역 표시가 흔들리지 않아야 함"]]
        },
        sidebar: {
          title: "관리자 기능 진입 메뉴",
          desc: "좌측 사이드 메뉴에서 관리자 권한 설정 화면으로 진입하며, 현재 단계에서 불필요한 통계 메뉴는 숨김 처리되어야 한다.",
          detail: [["주요 기능", "사원명부, 조직도, 조직관리, 코드관리, 관리자 권한 설정 이동"], ["연계", "권한 설정 결과는 메뉴/기능 접근 제어 기준으로 사용"], ["검토 포인트", "불필요 메뉴 비노출, 관리자 메뉴 활성 하이라이트 정확성 확인"]]
        },
        pagetitle: {
          title: "관리자 권한 설정 본문",
          desc: "전체관리자와 기능별 관리자 목록을 관리하고, 메뉴/기능별 접근 권한을 설정하는 운영 화면이다.",
          detail: [["주요 기능", "관리자 추가/삭제, 분류별 관리자 전환, 권한 체크박스 설정"], ["표시 데이터", "이름, 아이디, 소속, 등록일, 권한 그룹"], ["연계", "향후 메뉴별 접근 제어, 시스템 운영 권한 관리"], ["검토 포인트", "카테고리 전환, 관리자 선택, 권한 수정이 한 화면에서 자연스럽게 이어져야 함"]]
        }
      }
    };
    const filtered = base.map((item) => ({ ...item, ...(overrides[state.currentHrView]?.[item.region] || {}) }));
    const extras = {
      directory: [
        {
          num: "08",
          region: "emptable",
          title: "성명/사번 클릭 기본정보 팝업",
          desc: "사원명부에서 성명 또는 사번 클릭 시 전체 화면 이동 없이 기본정보 팝업이 열려야 한다.",
          detail: [
            ["주요 기능", "작은 상세 팝업에서 연락처, 이메일, 입사일, 사번, 주소, 휴직정보 조회"],
            ["연계", "우측 상단 인사기록카드 버튼으로 전체 기록카드 이동"],
            ["검토 포인트", "상세보기 버튼과 동작이 달라야 하며, 명부 화면 작업 흐름이 끊기지 않아야 함"]
          ],
          tag: "action",
          tagLabel: "팝업/연계"
        },
        {
          num: "09",
          region: "stats",
          title: "통계 상세 대상자 팝업",
          desc: "휴직 중, 신규 입사 카드를 누르면 대상자 목록 팝업이 열리고 대상자 클릭 시 기본정보 팝업으로 이어져야 한다.",
          detail: [
            ["주요 기능", "현재기준/기간기준 대상자 목록 조회, 대상자 선택"],
            ["연계", "기본정보 팝업, 인사기록카드, 휴직/입사 기간 필터"],
            ["검토 포인트", "카드 숫자와 팝업 대상자 수가 일치해야 함"]
          ],
          tag: "action",
          tagLabel: "팝업/연계"
        }
      ],
      record: [
        {
          num: "06",
          region: "hrcard",
          title: "이력 항목 상세보기 팝업",
          desc: "학력, 경력, 가족, 자격, 상벌, 승급, 발령, 교육 구역의 상세보기는 별도 팝업으로 전체 이력을 보여줘야 한다.",
          detail: [
            ["주요 기능", "본문은 요약/스크롤, 팝업은 전체 행 확인"],
            ["연계", "기록카드 수정 팝업의 동일 데이터셋 사용"],
            ["검토 포인트", "본문 요약과 상세 팝업 내용이 불일치하면 안 됨"]
          ],
          tag: "view",
          tagLabel: "상세 팝업"
        },
        {
          num: "07",
          region: "pagetitle",
          title: "기록카드 수정 팝업",
          desc: "기록카드 수정 버튼 클릭 시 기본정보와 이력성 데이터를 수정하는 팝업이 열려야 한다.",
          detail: [
            ["주요 기능", "기본정보 수정, 다건 이력 행 추가/삭제, 저장"],
            ["연계", "사원명부, 조직도, 통계, 발령 이력"],
            ["검토 포인트", "신규등록에서 비워야 하는 항목과 수정에서만 관리하는 항목 구분"]
          ],
          tag: "input",
          tagLabel: "수정 팝업"
        }
      ],
      org: [
        {
          num: "06",
          region: "orgchart",
          title: "조직도 인원 카드 기본정보 팝업",
          desc: "조직도 우측 인원 카드 클릭 시 현재 화면을 유지한 채 기본정보 팝업이 열려야 한다.",
          detail: [
            ["주요 기능", "조직 배치 인원의 기본 프로필 조회"],
            ["연계", "기본정보 팝업, 인사기록카드 버튼"],
            ["검토 포인트", "조직 탐색 상태를 유지한 채 팝업만 열려야 함"]
          ],
          tag: "action",
          tagLabel: "팝업/연계"
        }
      ]
      ,
      assignment: [
        {
          num: "06",
          region: "pagetitle",
          title: "조직관리 메인 화면",
          desc: "조직도 탭, 조직개편/인사발령 이력 탭, 삭제된 조직 목록 탭을 전환하며 현재 조직과 구성원을 조회한다.",
          detail: [
            ["주요 기능", "좌측 조직트리, 우측 부서정보/구성원정보, 이력 조회"],
            ["연계", "조직개편/인사발령 위저드 시작, 날짜별 이력 상세 팝업"],
            ["검토 포인트", "현재 조직 선택 상태와 이력 탭 전환이 충돌하지 않아야 함"]
          ],
          tag: "view",
          tagLabel: "메인 화면"
        },
        {
          num: "07",
          region: "pagetitle",
          title: "1단계: 발령일자 및 처리방식",
          desc: "조직개편 및 인사발령 적용일과 자동/수동 처리방식을 입력하고 다음 단계로 넘어간다.",
          detail: [
            ["입력 데이터", "조직개편/인사발령일, 처리방식"],
            ["처리 로직", "입력값은 이후 조직개편 및 인사발령 이력의 기준일자로 사용"],
            ["검토 포인트", "동일 날짜 중복 처리와 미입력 방어가 필요"]
          ],
          tag: "input",
          tagLabel: "1단계"
        },
        {
          num: "08",
          region: "orgchart",
          title: "2단계: Before / After 조직개편 편집",
          desc: "기존 조직을 Before로 보여주고, After 조직에서 신설/수정/이동/폐지를 편집한 뒤 조직개편 요약을 확인한다.",
          detail: [
            ["주요 기능", "조직 신설, 조직명 변경, 상위조직 이동, 조직 삭제"],
            ["처리 로직", "상위조직 이동 시 하위조직 경로도 함께 이동, 편집완료 시 부서코드 자동 재부여"],
            ["연계", "코드관리 조직코드, 3단계 인사발령 대상 조직"],
            ["검토 포인트", "신설/변경/폐지 내역이 요약 테이블과 일치해야 함"]
          ],
          tag: "action",
          tagLabel: "2단계"
        },
        {
          num: "09",
          region: "orgchart",
          title: "3단계: 인사발령 편집",
          desc: "조직개편 이후 조직 기준으로 구성원을 조회하고 부서이동, 소속제외, 책임자 임면, 승급을 함께 입력한다.",
          detail: [
            ["주요 기능", "구성원 선택, 처리유형 지정, 발령 후 조직/직책 설정, 비고 입력"],
            ["처리 로직", "완료 시 조직개편 적용 결과와 합쳐 사원정보/발령이력 자동 갱신"],
            ["연계", "사원명부, 인사기록카드 발령사항, 휴직/재직 통계, 조직도"],
            ["검토 포인트", "조직개편으로 바뀐 AFTER 조직 기준으로 대상자가 보여야 함"]
          ],
          tag: "action",
          tagLabel: "3단계"
        },
        {
          num: "10",
          region: "pagetitle",
          title: "인사발령/조직개편 이력",
          desc: "완료된 발령은 날짜 기준으로 누적되고, 날짜 클릭 시 해당 조직개편/인사발령 상세내역을 확인해야 한다.",
          detail: [
            ["주요 기능", "날짜별 행 누적, 상세 팝업"],
            ["연계", "삭제 조직 목록, 발령 후 반영 결과 검증"],
            ["검토 포인트", "당일 여러 건 처리 시 구분 방식과 상세내역 보존 여부 확인"]
          ],
          tag: "view",
          tagLabel: "이력"
        }
      ]
    };
    const combined = [...filtered, ...((extras[state.currentHrView] || []))];
    refs.annoList.innerHTML = "";
    combined.forEach((item) => {
      const div = document.createElement("div");
      div.className = "anno-item";
      div.dataset.region = item.region;
      div.innerHTML = `<div class="anno-num">${item.num}</div><div class="anno-title">${item.title}</div><div class="anno-desc">${item.desc}</div>${item.detail ? `<div class="codex-anno-detail">${item.detail.map((row) => `<div class="codex-anno-row"><div class="codex-anno-key">${row[0]}</div><div class="codex-anno-value">${row[1]}</div></div>`).join("")}</div>` : ""}<span class="anno-tag ${tagMap[item.tag]}">${item.tagLabel}</span>`;
      div.addEventListener("mouseenter", () => {
        const regionMap = {
          searchbar: refs.searchBar,
          stats: refs.stats,
          emptable: refs.tableWrap,
          orgchart: refs.orgWrap,
          hrcard: refs.cardWrap,
          pagetitle: refs.pageTitle,
          sidebar: refs.hrSidebar,
          topbar: $(".hr-topbar", refs.hrSystem)
        };
        const el = regionMap[item.region] || getRegionEl(item.region);
        if (!el) return;
        clearHighlight();
        div.classList.add("hovered");
        const overlay = $("#highlightOverlay");
        const labelEl = $("#highlightLabel");
        const inner = $("#demoInner");
        const panel = $("#demoPanel");
        const elRect = el.getBoundingClientRect();
        const innerRect = inner.getBoundingClientRect();
        const top = elRect.top - innerRect.top + panel.scrollTop - 3;
        const left = elRect.left - innerRect.left - 3;
        overlay.style.top = `${top}px`; overlay.style.left = `${left}px`; overlay.style.width = `${elRect.width + 6}px`; overlay.style.height = `${elRect.height + 6}px`; overlay.classList.add("visible"); labelEl.textContent = item.title;
      });
      div.addEventListener("mouseleave", clearHighlight);
      refs.annoList.appendChild(div);
    });
  }
  ensurePanels();
  bindCoreActions();
  renderAll();
  const params = new URLSearchParams(window.location.search);
  const employeeFromUrl = params.get("employeeId");
  if (employeeFromUrl && state.employees.some((employee) => employee.id === employeeFromUrl)) {
    state.selectedId = employeeFromUrl;
  }
  const viewFromUrl = params.get("view");
  const assignmentTabFromUrl = params.get("assignmentTab");
  const assignmentStageFromUrl = params.get("assignmentStage");
  const codeViewFromUrl = params.get("codeView");
  const adminAddFromUrl = params.get("adminAdd");
  const adminRoleFromUrl = params.get("adminRole");
  if (assignmentTabFromUrl && ["org", "history", "deleted"].includes(assignmentTabFromUrl)) {
    state.assignmentLandingTab = assignmentTabFromUrl;
  }
  if (codeViewFromUrl && ["overview", "org-edit", "level-edit", "meta-edit", "history"].includes(codeViewFromUrl)) {
    state.currentCodeView = codeViewFromUrl;
  }
  if (adminRoleFromUrl && ["manager", "viewer"].includes(adminRoleFromUrl)) {
    state.currentAdminRoleTab = adminRoleFromUrl;
  }
  if (adminAddFromUrl === "1" || adminAddFromUrl === "true") {
    state.adminAddOpen = true;
  }
  if (viewFromUrl === "assignment" && assignmentStageFromUrl && ["1", "2", "3"].includes(assignmentStageFromUrl)) {
    state.assignmentFlow = createAssignmentFlow();
    state.assignmentFlow.stage = Number(assignmentStageFromUrl);
  }
  if (viewFromUrl === "record") showHrView("record");
  else if (viewFromUrl === "quick") showHrView("quick");
  else if (viewFromUrl === "org") showHrView("org");
  else if (viewFromUrl === "codes") showHrView("codes");
  else if (viewFromUrl === "assignment") showHrView("assignment");
  else if (viewFromUrl === "admin") showHrView("admin");
  else showHrView("directory");
  const tab1 = $("#tab1");
  const tab2 = $("#tab2");
  tab1?.addEventListener("click", () => { state.currentSystem = 1; renderNotesByView(); }, true);
  tab2?.addEventListener("click", () => { state.currentSystem = 2; }, true);
})();
