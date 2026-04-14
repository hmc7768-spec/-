(function () {
  const employeeSeed = [
    { id: "EMP-0024", name: "김지원", hq: "경영관리본부", office: "경영지원실", team: "인사팀", part: "", grade: "대리", hireGrade: "사원", title: "팀장", jobFamily: "관리", employeeType: "정규직", contractPeriod: "", birthDate: "1992.05.14", hireDate: "2021.03.02", phone: "010-4521-7788", education: "한양대학교 컴퓨터공학과", status: "재직", careerMonths: "24", assignmentDate: "2024.01.01", memo: "인사기획 및 제도 운영 담당", history: [["2024.01.01", "인사팀 대리 승진"], ["2022.07.01", "경영기획팀 → 인사팀 이동"], ["2021.03.02", "입사 (인사팀 사원)"]], educationHistory: [["2023.08", "인사관리 실무교육 이수"], ["2022.03", "직무교육 이수 (40h)"]] },
    { id: "EMP-0031", name: "이승훈", hq: "영업본부", office: "영업본부 직속", team: "김포지점", part: "김포지점 판매파트", grade: "과장", hireGrade: "대리", title: "지점장", jobFamily: "영업(판매)", employeeType: "정규직", contractPeriod: "", birthDate: "1988.09.10", hireDate: "2018.07.15", retireDate: "2025.02.28", phone: "010-2213-8932", education: "국민대학교 경영학과", status: "퇴직", careerMonths: "48", assignmentDate: "2023.03.01", memo: "김포지점 판매 운영 총괄", history: [["2025.02.28", "퇴직 처리"], ["2023.03.01", "김포지점 판매파트 배치"], ["2021.01.01", "광주지점 → 김포지점 이동"], ["2018.07.15", "입사 (영업본부)"]], educationHistory: [["2024.01", "영업관리 리더십 과정"], ["2022.09", "성과평가 과정 이수"]] },
    { id: "EMP-0045", name: "박민서", hq: "경영관리본부", office: "디지털사업실", team: "서비스기획팀", part: "UX파트", grade: "사원", hireGrade: "사원", title: "파트장", jobFamily: "관리(성과)", employeeType: "계약직", contractPeriod: "2026.01.01 ~ 2026.12.31", birthDate: "1997.11.21", hireDate: "2023.01.09", phone: "010-7211-4452", education: "서울여자대학교 시각디자인과", status: "휴직", leaveType: "육아휴직", leaveStartDate: "2026.02.01", leaveEndDate: "2026.07.31", careerMonths: "8", assignmentDate: "2026.02.01", memo: "서비스 UX 개선 프로젝트 참여", history: [["2026.02.01", "육아휴직 전환"], ["2024.06.01", "UX파트 배치"], ["2023.01.09", "입사 (서비스기획팀)"]], educationHistory: [["2024.02", "UX 리서치 교육"], ["2023.10", "서비스기획 워크숍"]], awardItems: [["인사처리", "육아휴직", "2026.02.01", "육아휴직 승인"]] },
    { id: "EMP-0012", name: "최현우", hq: "서비스본부", office: "오토케어사업실", team: "신차물류팀", part: "용인물류", grade: "차장", hireGrade: "과장", title: "팀장", jobFamily: "물류", employeeType: "정규직", contractPeriod: "", birthDate: "1985.01.03", hireDate: "2015.04.20", phone: "010-8121-1189", education: "인하대학교 물류학과", status: "재직", careerMonths: "60", assignmentDate: "2022.02.01", memo: "수도권 물류센터 운영 담당", history: [["2022.02.01", "용인물류 배치"], ["2019.01.01", "탁송팀 → 신차물류팀 이동"], ["2015.04.20", "입사 (오토케어사업실)"]], educationHistory: [["2023.11", "물류관리사"], ["2021.06", "현장안전교육 이수"]] },
    { id: "EMP-0067", name: "정다은", hq: "BPO사업본부", office: "금융사업실", team: "반납운영팀", part: "", grade: "사원", hireGrade: "사원", title: "팀장", jobFamily: "관리", employeeType: "정규직", contractPeriod: "", birthDate: "1999.07.09", hireDate: "2024.02.26", phone: "010-9831-6721", education: "경희대학교 경제학과", status: "재직", careerMonths: "3", assignmentDate: "2024.02.26", memo: "반납 프로세스 운영 지원", history: [["2024.02.26", "입사 (반납운영팀)"]], educationHistory: [["2024.03", "금융상품 운영교육"]] }
  ];
  const gradeCodes = ["사장", "부사장", "전무이사", "상무이사", "이사", "부장", "차장", "과장", "대리", "사원"];
  const titleCodes = ["대표이사", "본부장", "실장", "센터장", "팀장", "파트장", "지점장"];
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
      const status = index % 17 === 0 && employeeType !== "임원" ? "휴직" : "재직";
      const hireYear = 2014 + (index % 13);
      const hireMonth = String((index % 12) + 1).padStart(2, "0");
      const hireDay = String((index % 27) + 1).padStart(2, "0");
      const birthYear = 1982 + (index % 18);
      const birthMonth = String(((index + 4) % 12) + 1).padStart(2, "0");
      const birthDay = String(((index + 9) % 27) + 1).padStart(2, "0");
      const deepest = row.part || row.team || row.office || row.hq;
      const assignmentDate = `${Math.max(hireYear + 1, 2020)}.${hireMonth}.${hireDay}`;
      const leaveType = status === "휴직" ? ["육아휴직", "질병휴직", "가사휴직", "학업휴직"][index % 4] : "";
      const leaveStartDate = status === "휴직" ? `${Math.max(hireYear + 2, 2025)}.${hireMonth}.${hireDay}` : "";
      const leaveEndMonth = String((((Number(hireMonth) + 5) - 1) % 12) + 1).padStart(2, "0");
      const leaveEndYear = status === "휴직" ? Math.max(hireYear + 2, 2025) + (Number(hireMonth) + 5 > 12 ? 1 : 0) : "";
      const leaveEndDate = status === "휴직" ? `${leaveEndYear}.${leaveEndMonth}.28` : "";
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
        leaveType,
        leaveStartDate,
        leaveEndDate,
        careerMonths: String(6 + (index % 72)),
        assignmentDate: status === "휴직" ? leaveStartDate : assignmentDate,
        groupwareId: `${surnames[index % surnames.length].toLowerCase?.() || "user"}${index + 1}`,
        residentNumber: `${String(birthYear).slice(2)}${birthMonth}${birthDay}-${index % 2 === 0 ? "1" : "2"}******`,
        maritalStatus: index % 3 === 0 ? "기혼" : "미혼",
        hireEmployeeType: employeeType,
        hireJobFamily: inferJobFamily(row),
        companyEmail: `${normalizedNameToken(`${surnames[index % surnames.length]}${given[index % given.length]}`)}.emp-${String(index + 1).padStart(4, "0").toLowerCase()}@autoplus.co.kr`,
        personalEmail: `${normalizedNameToken(`${surnames[index % surnames.length]}${given[index % given.length]}`)}@gmail.com`,
        companyPhone: `02-6200-${String(index + 1).padStart(4, "0")}`,
        address: `서울특별시 ${row.hq || "오토플러스"} ${deepest} ${String(index + 1).padStart(2, "0")}호`,
        memo: `${deepest} 조직 기준 더미 사원 데이터`,
        history: [
          ...(status === "휴직" ? [[leaveStartDate, `${leaveType} 전환`]] : []),
          [assignmentDate, `${deepest} 배치`],
          [`${hireYear}.${hireMonth}.${hireDay}`, `입사 (${deepest})`]
        ],
        educationHistory: [[`${Math.max(hireYear + 1, 2020)}.${hireMonth}`, "직무 기본교육 이수"], [`${Math.max(hireYear + 2, 2021)}.${hireMonth}`, "공통 역량교육 이수"]],
        educationItems: [[`${hireYear - 4}.03 ~ ${hireYear}.02`, `${schools[index % schools.length]} ${majors[index % majors.length]}`], [`${hireYear - 7}.03 ~ ${hireYear - 4}.02`, "고등학교 졸업"]],
        careerHistory: [[`${hireYear - 2}.01 ~ ${hireYear - 1}.12`, `${inferJobFamily(row)} 유관 경력`], [`${hireYear - 3}.03 ~ ${hireYear - 2}.12`, "프로젝트 참여 및 실무 수행"]],
        awardItems: status === "휴직" ? [["인사처리", leaveType, leaveStartDate, `${leaveType} 승인`]] : []
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
  function getOrgRowLevel(row) {
    if (row.part) return "L4";
    if (row.team) return "L3";
    if (row.office) return "L2";
    return "L1";
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
      if (!row.hq) return;
      const normalized = {
        hq: row.hq || "",
        office: row.office || "",
        team: row.team || "",
        part: row.part || "",
        sourceKey: preferred.sourceKey || row.sourceKey || getOrgRowKey(row),
        createdAt: preferred.createdAt || row.createdAt || "2023.08.16 00:00",
        updatedAt: preferred.updatedAt || row.updatedAt || "2026.04.14 09:00"
      };
      map.set(getOrgRowKey(normalized), { ...(map.get(getOrgRowKey(normalized)) || {}), ...normalized });
    };
    rows.forEach((row) => {
      pushRow(row);
      if (row.hq) pushRow({ hq: row.hq, office: "", team: "", part: "" }, { sourceKey: getOrgRowKey({ hq: row.hq, office: "", team: "", part: "" }) });
      if (row.office) pushRow({ hq: row.hq, office: row.office, team: "", part: "" }, { sourceKey: getOrgRowKey({ hq: row.hq, office: row.office, team: "", part: "" }) });
      if (row.team) pushRow({ hq: row.hq, office: row.office, team: row.team, part: "" }, { sourceKey: getOrgRowKey({ hq: row.hq, office: row.office, team: row.team, part: "" }) });
    });
    return Array.from(map.values()).sort((a, b) => getOrgRowKey(a).localeCompare(getOrgRowKey(b), "ko"));
  }
  function createOrgBlueprint(rows) {
    return completeBlueprintHierarchy(rows.map((row, index) => ({
      hq: row.hq,
      office: row.office,
      team: row.team,
      part: row.part,
      sourceKey: getOrgRowKey(row),
      code: `${getOrgRowLevel(row)}-${String(index + 1).padStart(3, "0")}`,
      createdAt: "2023.08.16 00:00",
      updatedAt: "2026.04.14 09:00"
    }))).map((row, index) => ({ ...row, code: `${getOrgRowLevel(row)}-${String(index + 1).padStart(3, "0")}` }));
  }
  function cloneOrgBlueprint(rows) {
    return rows.map((row) => ({ ...row }));
  }
  const baseOrgBlueprint = createOrgBlueprint(orgRows);
  const state = { employees: fullEmployeeSeed.map((employee) => ({ ...employee })), orgBlueprint: cloneOrgBlueprint(baseOrgBlueprint), assignmentRecords: [], deletedOrgArchive: [], assignmentFlow: null, assignmentLandingTab: "org", assignmentLandingSearch: "", selectedId: "EMP-0001", currentHrView: "directory", currentSystem: 1, currentCodeView: "overview", currentCodeSelection: "", currentLevelSelection: "L1", currentMetaSelection: "grade", currentOrgNode: "ROOT", orgIncludeChildren: true, orgSearch: "", orgExpandedKeys: ["ROOT"], directorySearchText: "", directoryAdvancedOpen: false, directoryDept: [], directoryDeptQuery: "", directoryGrade: [], directoryGradeQuery: "", directoryStatus: "", directoryHireDateFrom: "", directoryHireDateTo: "", directoryRetireDateFrom: "", directoryRetireDateTo: "", hireStatMode: "month", hireStatYear: 2026, hireStatMonth: 4, hireStatQuarter: 2, hireStatHalf: 1, leaveStatMode: "current", leaveStatYear: 2026, leaveStatMonth: 4, leaveStatQuarter: 2, leaveStatHalf: 1, statModalSelection: "", currentRecordTab: "overview" };
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const refs = { hrSystem: $("#hrSystem"), evalSystem: $("#evalSystem"), pageTitle: $(".hr-page-title"), searchBar: $('[data-region="searchbar"]'), stats: $('[data-region="stats"]'), tableWrap: $('[data-region="emptable"]'), orgWrap: $("#orgChartWrap"), cardWrap: $("#hrCardGrid"), hrContent: $(".hr-content"), hrSidebar: $(".hr-sidebar"), topItems: $$(".hr-top-item"), sideItems: $$(".hr-sidebar-item"), annoList: $("#annoList") };
  if (!refs.hrSystem || !refs.tableWrap || !refs.cardWrap) return;
  refs.pageActions = $(".hr-page-title > div:last-child", refs.hrSystem);
  refs.pageSecondaryButton = refs.pageActions?.querySelector(".btn-outline") || null;
  refs.pagePrimaryButton = refs.pageActions?.querySelector(".btn-primary") || null;
  const panels = {};
  function employeePath(employee) { return [employee.hq, employee.office, employee.team, employee.part].filter(Boolean).join(" > "); }
  function hireEmployeePath(employee) {
    return [employee.hireHq || employee.hq, employee.hireOffice || employee.office, employee.hireTeam || employee.team, employee.hirePart || employee.part].filter(Boolean).join(" > ");
  }
  function deepestDept(employee) { return employee.part || employee.team || employee.office || employee.hq; }
  function selectedEmployee() { return state.employees.find((employee) => employee.id === state.selectedId) || state.employees[0]; }
  if (state.currentOrgNode === "ROOT") state.currentOrgNode = getEmployeeNodeKey(selectedEmployee());
  function statusBadge(status) { return `<span class="status-badge ${status === "재직" ? "status-active" : "status-leave"}">${status}</span>`; }
  function parseDateParts(value) {
    const parts = (value || "").split(".");
    return { year: Number(parts[0] || 0), month: Number(parts[1] || 0), day: Number(parts[2] || 0) };
  }
  function normalizedNameToken(name) {
    return (name || "").replace(/\s+/g, "").toLowerCase();
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
    return `${yy}-${tail.slice(0, 1)}******`;
  }
  function getMaritalStatus(employee) {
    if (employee.maritalStatus) return employee.maritalStatus;
    const numeric = Number(employee.id.replace(/\D/g, "")) || 0;
    return numeric % 3 === 0 ? "기혼" : "미혼";
  }
  function getLeaveType(employee) {
    if (employee.leaveType) return employee.leaveType;
    const numeric = Number(employee.id.replace(/\D/g, "")) || 0;
    return ["육아휴직", "질병휴직", "가사휴직", "학업휴직"][numeric % 4];
  }
  function getLeaveStartDate(employee) {
    if (employee.leaveStartDate) return employee.leaveStartDate;
    if (employee.status !== "휴직") return "";
    return employee.assignmentDate || employee.hireDate;
  }
  function getLeaveEndDate(employee) {
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
  function repeatableRowHtml(key, columns, values = []) {
    return `<div class="codex-repeatable-row" data-repeatable-row="${key}">${columns.map((column, index) => `<input type="text" data-repeatable-input="${key}" data-col-index="${index}" placeholder="${column}" value="${values[index] || ""}">`).join("")}<button type="button" class="hr-btn btn-outline codex-repeatable-remove" data-remove-repeatable="${key}">삭제</button></div>`;
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
  }
  function collectRepeatableRows(root, key, columns) {
    return $$(`[data-repeatable-row="${key}"]`, root).map((row) => Array.from({ length: columns }, (_, index) => $(`[data-repeatable-input="${key}"][data-col-index="${index}"]`, row)?.value.trim() || "")).filter((values) => values.some(Boolean));
  }
  function syncCreateHireFields() {
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
  function appendAssignmentDrivenHistory(employee, payload) {
    const { type, assignDate, reason, nextDept, nextGrade, nextTitle, nextStatus } = payload;
    employee.history = employee.history || [];
    employee.promotionItems = employee.promotionItems || [];
    employee.awardItems = employee.awardItems || [];
    employee.history.unshift([assignDate, `${type} 반영 - ${reason}`]);
    employee.promotionItems.unshift([type === "승진" ? "승진" : "인사변동", assignDate, nextDept, nextGrade, nextTitle, reason]);
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
  function getLeaveStatEvents(employee) {
    const events = [];
    const leaveStartDate = getLeaveStartDate(employee);
    (employee.awardItems || []).forEach((item) => {
      const date = item?.[2];
      const label = `${item?.[0] || ""} ${item?.[1] || ""} ${item?.[3] || ""}`;
      if (label.includes("휴직")) events.push({ date, label });
    });
    if (employee.status !== "재직" && leaveStartDate) {
      events.push({ date: leaveStartDate, label: `${getLeaveType(employee)} (${getLeaveStartDate(employee)} ~ ${getLeaveEndDate(employee) || "미정"})` });
    }
    return events;
  }
  function matchesPeriod(year, month, mode, selectedYear, selectedMonth, selectedQuarter, selectedHalf) {
    if (!year || !month) return false;
    if (mode === "month") return year === selectedYear && month === selectedMonth;
    if (mode === "quarter") return year === selectedYear && month >= ((selectedQuarter - 1) * 3) + 1 && month <= selectedQuarter * 3;
    if (mode === "half") return year === selectedYear && month >= (selectedHalf === 1 ? 1 : 7) && month <= (selectedHalf === 1 ? 6 : 12);
    return year === selectedYear;
  }
  function getLeaveStatEmployees(mode) {
    if (mode === "current") return state.employees.filter((employee) => employee.status !== "재직");
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
      return `<table><thead><tr><th>사번</th><th>성명</th><th>소속</th><th>휴직유형</th><th>휴직기간</th><th>상태</th></tr></thead><tbody>${items.map((employee) => `<tr data-stat-employee="${employee.id}" class="${state.statModalSelection === employee.id ? "codex-table-selected" : ""}" style="cursor:pointer"><td>${employee.id}</td><td>${employee.name}</td><td>${employeePath(employee)}</td><td>${getLeaveType(employee)}</td><td>${getLeaveStartDate(employee) || "-"}${getLeaveEndDate(employee) ? ` ~ ${getLeaveEndDate(employee)}` : ""}</td><td>${employee.status}</td></tr>`).join("")}</tbody></table>`;
    }
    return `<table><thead><tr><th>사번</th><th>성명</th><th>소속</th><th>직급</th><th>입사일</th><th>상태</th></tr></thead><tbody>${items.map((employee) => `<tr data-stat-employee="${employee.id}" class="${state.statModalSelection === employee.id ? "codex-table-selected" : ""}" style="cursor:pointer"><td>${employee.id}</td><td>${employee.name}</td><td>${employeePath(employee)}</td><td>${employee.grade}</td><td>${employee.hireDate}</td><td>${employee.status}</td></tr>`).join("")}</tbody></table>`;
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
    const scopedEmployees = state.directoryStatus === "퇴직" ? state.employees.filter((employee) => employee.status === "퇴직") : state.employees.filter((employee) => employee.status !== "퇴직");
    return scopedEmployees.filter((employee) => {
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
      const statusMatched = !state.directoryStatus || employee.status === state.directoryStatus;
      const hireDateFromMatched = !hireDateFrom || (hireDateValue && hireDateValue >= hireDateFrom);
      const hireDateToMatched = !hireDateTo || (hireDateValue && hireDateValue <= hireDateTo);
      const retireDateFromMatched = !retireDateFrom || (retireDateValue && retireDateValue >= retireDateFrom);
      const retireDateToMatched = !retireDateTo || (retireDateValue && retireDateValue <= retireDateTo);
      return textMatched && deptMatched && gradeMatched && statusMatched && hireDateFromMatched && hireDateToMatched && retireDateFromMatched && retireDateToMatched;
    });
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
      state.directorySearchText = event.target.value;
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
  function getOrgSummary() {
    const map = new Map();
    state.orgBlueprint.forEach((row) => {
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
        count
      });
    });
    return Array.from(map.values()).sort((a, b) => a.key.localeCompare(b.key, "ko"));
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
    state.employees.forEach((employee) => {
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
        if (!members.length) return "";
        return `<div class="codex-org-section"><div class="codex-org-section-head"><div><div class="codex-org-section-title">${node.label} <span>${members.length}</span></div><div class="codex-org-section-path">${node.path.join(" > ")}</div></div></div><div class="codex-org-card-grid">${members.map((employee) => `<button type="button" class="codex-org-employee" data-quick-profile="${employee.id}"><div class="codex-org-avatar">${employee.name[0]}</div><div class="codex-org-emp-name">${employee.name}</div><div class="codex-org-emp-meta">${employee.grade}</div><div class="codex-org-emp-meta">${employee.title}</div></button>`).join("")}</div></div>`;
      })
      .filter(Boolean)
      .join("");
    expandOrgAncestors(selected.key, false);
    const renderTreeNode = (node) => {
      const selectedClass = node.key === state.currentOrgNode ? " selected" : "";
      const expanded = isOrgExpanded(node.key);
      const hasChildren = node.children.length > 0;
      return `<div class="codex-org-tree-node level-${node.level.toLowerCase()}${selectedClass}${expanded ? " is-open" : ""}" data-tree-node="${node.key}"><div class="codex-org-tree-row"><button type="button" class="codex-org-tree-toggle-btn ${hasChildren ? "" : "is-leaf"}" data-org-toggle="${node.key}" ${hasChildren ? `aria-expanded="${expanded}"` : "disabled"}>${hasChildren ? (expanded ? "−" : "+") : "·"}</button><button type="button" class="codex-org-tree-btn" data-org-node="${node.key}"><span class="codex-org-tree-label">${node.label}</span></button></div>${hasChildren && expanded ? `<div class="codex-org-tree-children">${node.children.map(renderTreeNode).join("")}</div>` : ""}</div>`;
    };
    return `<div class="codex-org-explorer"><div class="codex-org-side"><div class="codex-org-side-head"><div class="codex-org-side-title">조직도</div><div class="codex-org-side-sub">내 정보</div></div><div class="codex-org-tree">${renderTreeNode(root)}</div></div><div class="codex-org-main"><div class="codex-org-toolbar"><input class="codex-org-search" id="orgSearchInput" placeholder="이름, ID, 소속명, 이메일, 연락처 검색" value="${state.orgSearch}"><label class="codex-org-toggle"><input type="checkbox" id="orgIncludeChildren" ${state.orgIncludeChildren ? "checked" : ""}><span>하위조직</span></label></div><div class="codex-org-content">${sections || `<div class="codex-note-box"><strong>검색 결과 없음</strong>선택 조직 또는 하위조직에서 검색 조건에 맞는 인원이 없습니다.</div>`}</div></div></div>`;
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
  const statsModal = buildModal("codexStatsModal", "인원 현황 상세");
  const quickProfileModal = buildModal("codexQuickProfileModal", "사원 기본정보");
  const recordDetailModal = buildModal("codexRecordDetailModal", "인사기록카드 상세");
  const modalStack = [createModal, editModal, statsModal, quickProfileModal];
  modalStack.push(recordDetailModal);
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
    quickProfileModal.body.innerHTML = `<div class="codex-quick-card"><div class="codex-quick-header"><div class="codex-quick-avatar">${employee.name[0]}</div><div class="codex-quick-header-body"><div class="codex-quick-name-row"><div class="codex-quick-name">${employee.name}</div></div><div class="codex-quick-role">${employee.grade}</div><div class="codex-quick-role">${employee.title || "팀원"}</div></div></div><div class="codex-quick-orgpath">${employeePath(employee)}</div><div class="codex-quick-divider"></div><div class="codex-quick-info-list"><div class="codex-quick-info-row"><div class="codex-quick-info-label">이메일</div><div class="codex-quick-info-value">${getCompanyEmail(employee)}</div></div><div class="codex-quick-info-row"><div class="codex-quick-info-label">회사 전화</div><div class="codex-quick-info-value">${getCompanyPhone(employee)}</div></div><div class="codex-quick-info-row"><div class="codex-quick-info-label">개인 이메일</div><div class="codex-quick-info-value">${getPersonalEmail(employee)}</div></div><div class="codex-quick-info-row"><div class="codex-quick-info-label">휴대 전화</div><div class="codex-quick-info-value">${employee.phone}</div></div><div class="codex-quick-info-row"><div class="codex-quick-info-label">입사일</div><div class="codex-quick-info-value">${employee.hireDate.replaceAll(".", "-")}</div></div><div class="codex-quick-info-row"><div class="codex-quick-info-label">사번</div><div class="codex-quick-info-value">${employee.id}</div></div><div class="codex-quick-info-row"><div class="codex-quick-info-label">생년월일</div><div class="codex-quick-info-value">${employee.birthDate.replaceAll(".", "-")}</div></div>${employee.status === "휴직" ? `<div class="codex-quick-info-row"><div class="codex-quick-info-label">휴직유형</div><div class="codex-quick-info-value">${getLeaveType(employee)}</div></div><div class="codex-quick-info-row"><div class="codex-quick-info-label">휴직기간</div><div class="codex-quick-info-value">${getLeaveStartDate(employee).replaceAll(".", "-")} ~ ${getLeaveEndDate(employee).replaceAll(".", "-")}</div></div>` : ""}<div class="codex-quick-info-row"><div class="codex-quick-info-label">주소</div><div class="codex-quick-info-value">${getAddress(employee)}</div></div></div></div>`;
    const goRecord = () => {
      quickProfileModal.close();
      statsModal.close();
      state.currentRecordTab = "overview";
      showHrView("record");
    };
    quickProfileModal.save.onclick = () => quickProfileModal.close();
    quickHeadButton.onclick = goRecord;
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
    if (panels.codes && panels.assignment) return;
    const codeMenu = document.createElement("div");
    codeMenu.className = "hr-sidebar-item codex-sidebar-extra";
    codeMenu.innerHTML = '<span class="hr-sidebar-icon">🗂</span> 코드관리';
    refs.hrSidebar.appendChild(codeMenu);
    refs.sideItems = $$(".hr-sidebar-item");
    const codePanel = document.createElement("div");
    codePanel.className = "codex-panel codex-hidden";
    codePanel.id = "codexCodesPanel";
    refs.hrContent.appendChild(codePanel);
    const assignmentPanel = document.createElement("div");
    assignmentPanel.className = "codex-panel codex-hidden";
    assignmentPanel.id = "codexAssignmentPanel";
    refs.hrContent.appendChild(assignmentPanel);
    panels.codes = codePanel;
    panels.assignment = assignmentPanel;
    panels.codeMenu = codeMenu;
    codeMenu.addEventListener("click", () => showHrView("codes"));
    refs.topItems[3]?.addEventListener("click", () => showHrView("assignment"));
    refs.sideItems[3]?.addEventListener("click", () => showHrView("assignment"));
  }
  function renderStats() {
    const values = [state.employees.length, state.employees.filter((employee) => employee.status === "재직").length, state.employees.filter((employee) => employee.status !== "재직").length, getHireStatEmployees(state.hireStatMode).length];
    $$(".hr-stat-value", refs.stats).forEach((node, index) => { if (values[index] !== undefined) node.textContent = String(values[index]); });
    const subTexts = [
      `▲ ${Math.max(1, Math.floor(state.employees.length / 20))}명 (이번 달)`,
      `정규직 ${state.employees.filter((employee) => employee.employeeType === "정규직" && employee.status === "재직").length} · 계약직 ${state.employees.filter((employee) => employee.employeeType === "계약직" && employee.status === "재직").length}`,
      "육아·병가 포함",
      getHireStatLabel(state.hireStatMode)
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
    tbody.innerHTML = employees.map((employee) => `<tr data-employee-id="${employee.id}"><td><input type="checkbox"></td><td><button type="button" class="codex-link-button codex-id-button" data-quick-profile="${employee.id}" style="font-family:'IBM Plex Mono',monospace;font-size:11px;color:#9095b0">${employee.id}</button></td><td><button type="button" class="codex-link-button emp-name" data-quick-profile="${employee.id}">${employee.name}</button></td><td>${deepestDept(employee)}</td><td>${employee.grade}</td><td>${employee.hireDate}</td><td>${statusBadge(employee.status)}</td><td><a href="#" data-action="detail" style="font-size:11px;color:#4f8ef7;text-decoration:none">상세보기</a></td></tr>`).join("");
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
    $("#orgSearchInput", refs.orgWrap)?.addEventListener("input", (event) => {
      state.orgSearch = event.target.value;
      renderOrg();
    });
    $("#orgIncludeChildren", refs.orgWrap)?.addEventListener("change", (event) => {
      state.orgIncludeChildren = event.target.checked;
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
  function saveOrgCode() {
    const summary = getOrgSummary();
    const selected = summary.find((item) => item.key === state.currentCodeSelection);
    if (!selected) return;
    const nextName = $("#codeOrgName")?.value?.trim();
    if (!nextName) return;
    state.orgBlueprint.forEach((row) => {
      if (selected.level === "L1" && row.hq === selected.hq) row.hq = nextName;
      if (selected.level === "L2" && row.hq === selected.hq && row.office === selected.office) row.office = nextName;
      if (selected.level === "L3" && row.hq === selected.hq && row.office === selected.office && row.team === selected.team) row.team = nextName;
      if (selected.level === "L4" && row.hq === selected.hq && row.office === selected.office && row.team === selected.team && row.part === selected.part) row.part = nextName;
      row.updatedAt = "2026.04.14 09:00";
    });
    state.employees.forEach((employee) => {
      if (selected.level === "L1" && employee.hq === selected.hq) employee.hq = nextName;
      if (selected.level === "L2" && employee.hq === selected.hq && employee.office === selected.office) employee.office = nextName;
      if (selected.level === "L3" && employee.hq === selected.hq && employee.office === selected.office && employee.team === selected.team) employee.team = nextName;
      if (selected.level === "L4" && employee.hq === selected.hq && employee.office === selected.office && employee.team === selected.team && employee.part === selected.part) employee.part = nextName;
    });
    renderAll();
    renderCodes();
  }
  function saveLevelCode() {
    const level = levelDefs.find((item) => item.id === state.currentLevelSelection);
    if (!level) return;
    level.name = $("#levelName")?.value?.trim() || level.name;
    level.parent = $("#levelParent")?.value?.trim() || level.parent;
    level.desc = $("#levelDesc")?.value?.trim() || level.desc;
    renderCodes();
  }
  function currentMetaArray() {
    if (state.currentMetaSelection === "grade") return gradeCodes;
    if (state.currentMetaSelection === "title") return titleCodes;
    if (state.currentMetaSelection === "family") return familyCodes;
    return employeeTypes;
  }
  function currentMetaLabel() {
    if (state.currentMetaSelection === "grade") return "직급";
    if (state.currentMetaSelection === "title") return "직책";
    if (state.currentMetaSelection === "family") return "직군";
    return "직원유형";
  }
  function saveMetaCode() {
    const nextValues = ($("#metaValues")?.value || "")
      .split(/\r?\n|,/)
      .map((item) => item.trim())
      .filter(Boolean);
    if (!nextValues.length) return;
    const target = currentMetaArray();
    target.splice(0, target.length, ...nextValues);
    renderAll();
    renderCodes();
  }
  function openStatModal(type) {
    statsModal.save.textContent = "기본정보 상세";
    statsModal.save.onclick = () => {
      if (!state.statModalSelection) return;
      openQuickProfileModal(state.statModalSelection);
    };
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
      const items = getLeaveStatEmployees(state.leaveStatMode);
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
      const modes = [
        { id: "month", label: "월별" },
        { id: "quarter", label: "분기별" },
        { id: "half", label: "반기별" },
        { id: "year", label: "년도별" }
      ];
      const years = uniqueValues(state.employees.map((employee) => parseDateParts(employee.hireDate).year)).sort((a, b) => b - a);
      const items = getHireStatEmployees(state.hireStatMode);
      if ((!state.statModalSelection || !items.some((item) => item.id === state.statModalSelection)) && items[0]) state.statModalSelection = items[0].id;
      const periodControl = state.hireStatMode === "month"
        ? `<select id="hireStatMonth">${Array.from({ length: 12 }, (_, index) => index + 1).map((month) => `<option value="${month}" ${month === state.hireStatMonth ? "selected" : ""}>${month}월</option>`).join("")}</select>`
        : state.hireStatMode === "quarter"
          ? `<select id="hireStatQuarter">${[1, 2, 3, 4].map((quarter) => `<option value="${quarter}" ${quarter === state.hireStatQuarter ? "selected" : ""}>${quarter}분기</option>`).join("")}</select>`
          : state.hireStatMode === "half"
            ? `<select id="hireStatHalf"><option value="1" ${state.hireStatHalf === 1 ? "selected" : ""}>상반기</option><option value="2" ${state.hireStatHalf === 2 ? "selected" : ""}>하반기</option></select>`
            : "";
      statsModal.body.innerHTML = `<div class="codex-stack"><div class="codex-secondary-actions">${modes.map((mode) => `<button type="button" class="hr-btn ${state.hireStatMode === mode.id ? "btn-primary" : "btn-outline"}" data-hire-mode="${mode.id}">${mode.label}</button>`).join("")}</div><div class="codex-form-grid"><label><span>기준 연도</span><select id="hireStatYear">${years.map((year) => `<option value="${year}" ${year === state.hireStatYear ? "selected" : ""}>${year}년</option>`).join("")}</select></label><label><span>세부 기준</span>${periodControl || `<input value="연간 기준" readonly>`}</label></div><div class="codex-note-box"><strong>신규 입사 대상자</strong>${getHireStatLabel(state.hireStatMode)} 기준 입사자 목록입니다. 월별 / 분기별 / 반기별 / 년도별 기준으로 직접 선택해 확인할 수 있습니다.</div>${renderEmployeeList(items)}</div>`;
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
    const employee = selectedEmployee();
    refs.cardWrap.style.gridTemplateColumns = "minmax(0, 1fr)";
    refs.cardWrap.style.width = "100%";
    const tab = state.currentRecordTab;
    const tabs = [
      ["overview", "기본정보"],
      ["hire", "입사정보"],
      ["personal", "신상정보"],
      ["education", "학력"],
      ["career", "경력"],
      ["assignment", "발령내역"],
      ["training", "교육"],
      ["memo", "메모"]
    ];
    const focusSections = {
      overview: sheetFieldTable([
        ["사원번호", employee.id, "그룹웨어 ID", employee.groupwareId || getGroupwareId(employee)],
        ["직급", employee.grade, "직책", employee.title],
        ["직군", employee.jobFamily, "재직상태", employee.status],
        ["소속", employeePath(employee), "회사 이메일", getCompanyEmail(employee)]
      ]),
      hire: sheetFieldTable([
        ["입사일", employee.hireDate, "입사시 직급", employee.hireGrade],
        ["인정경력", `${employee.careerMonths}개월`, "초기 배치일", employee.assignmentDate],
        ["계약기간", employee.employeeType === "계약직" ? employee.contractPeriod || "-" : "-", "그룹웨어 ID", employee.groupwareId || getGroupwareId(employee)]
      ]),
      personal: sheetFieldTable([
        ["주민등록번호", employee.residentNumber || getResidentNumber(employee), "결혼여부", employee.maritalStatus || getMaritalStatus(employee)],
        ["생년월일", employee.birthDate, "휴대전화", employee.phone],
        ["개인 이메일", getPersonalEmail(employee), "회사 전화", getCompanyPhone(employee)],
        ["주소", getAddress(employee), "", ""]
      ]),
      education: previewGrid(["학교명", "재학기간", "전공", "비고"], getEducationEntries(employee).map((item) => [item[1].split(" ")[0] || item[1], item[0], item[1].split(" ").slice(1).join(" "), ""])),
      career: previewGrid(["회사명", "기간", "담당업무", "비고"], getCareerHistory(employee).map((item) => [deepestDept(employee), item[0], item[1], ""])),
      assignment: previewGrid(["발령구분", "발령일", "발령부서", "직급", "직책", "비고"], employee.history.map((item, index) => [index === employee.history.length - 1 ? "입사" : "발령", item[0], deepestDept(employee), employee.grade, employee.title, item[1]])),
      training: previewGrid(["교육명", "시작일", "종료일", "교육기관", "비고"], employee.educationHistory.map((item) => [item[1], item[0], item[0], "사내/외 교육", ""])),
      memo: `<div class="codex-sheet-memo">${employee.memo}</div>`
    };
    const assignmentRows = employee.history.map((item, index) => {
      const hireRow = index === employee.history.length - 1;
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
    const infoPreview = `<div class="codex-sheet-top"><div class="codex-sheet-logo">AUTOPLUS</div><div class="codex-sheet-top-main"><table><tbody><tr><th>부서</th><td>${employeePath(employee)}</td><th>성명</th><td>${employee.name}</td></tr><tr><th>직급</th><td>${employee.grade}</td><th>직책</th><td>${employee.title}</td></tr><tr><th>주민등록번호</th><td>${employee.residentNumber || getResidentNumber(employee)}</td><th>입사일</th><td>${employee.hireDate}</td></tr><tr><th>생년월일</th><td>${employee.birthDate}</td><th>직군</th><td>${employee.jobFamily}</td></tr><tr><th>직전승급일</th><td>${employee.assignmentDate}</td><th>근속년수</th><td>${Math.floor(Number(employee.careerMonths || 0) / 12)}년 ${Number(employee.careerMonths || 0) % 12}개월</td></tr><tr><th>내선번호</th><td>${getCompanyPhone(employee)}</td><th>결혼여부</th><td>${employee.maritalStatus || getMaritalStatus(employee)}</td></tr><tr><th>연락처</th><td>${employee.phone}</td><th>E-Mail</th><td>${getCompanyEmail(employee)}</td></tr><tr><th>그룹웨어 ID</th><td>${employee.groupwareId || getGroupwareId(employee)}</td><th>개인 이메일</th><td>${getPersonalEmail(employee)}</td></tr><tr><th>주소</th><td colspan="3">${getAddress(employee)}</td></tr></tbody></table></div></div>`;
    const detail = `<div class="codex-record-detail"><div class="codex-record-sheet"><div class="codex-record-sheet-head"><div class="codex-record-sheet-title">인사정보카드</div></div>${infoPreview}${buildSheetSection("학력사항", "education", ["학교명", "재학기간", "전공", "비고"], getEducationEntries(employee).map((item) => [item[1].split(" ")[0] || item[1], item[0], item[1].split(" ").slice(1).join(" "), ""]), tab === "education")}${buildSheetSection("경력사항", "career", ["회사명", "기간", "담당업무", "비고"], getCareerHistory(employee).map((item) => [deepestDept(employee), item[0], item[1], ""]), tab === "career")}${buildSheetSection("가족사항", "family", ["관계", "성명", "생년월일"], getFamilyEntries(employee), tab === "family")}${buildSheetSection("자격증", "certificate", ["자격증명", "발급기관", "취득일"], getCertificateEntries(employee).map((item) => [item[1], item[2], item[3]]), tab === "certificate")}${buildSheetSection("상벌사항", "award", ["상벌구분", "상벌명", "발생일", "사유"], getAwardEntries(employee), tab === "award")}${buildSheetSection("승급사항", "promotion", ["승급구분", "승급일", "소속부서", "직급", "직책", "비고"], getPromotionEntries(employee), tab === "promotion")}${buildSheetSection("발령사항", "assignment", ["발령구분", "발령일", "발령부서", "직군", "직원유형", "직급", "직책", "비고"], assignmentRows, tab === "assignment")}${buildSheetSection("교육사항", "training", ["교육명", "시작일", "종료일", "교육기관", "비고"], employee.educationHistory.map((item) => [item[1], item[0], item[0], "사내/외 교육", ""]), tab === "training")}</div></div>`;
    refs.cardWrap.innerHTML = `<div class="codex-record-shell" style="grid-template-columns:minmax(0,1fr)">${detail}</div>`;
  }
  function renderQuickRecord() {
    const employee = selectedEmployee();
    refs.cardWrap.style.gridTemplateColumns = "minmax(0, 1fr)";
    refs.cardWrap.style.width = "100%";
    refs.cardWrap.innerHTML = `<div class="codex-record-shell" style="grid-template-columns:minmax(0,1fr)"><div class="codex-record-detail"><div class="codex-record-section"><h4>기본 프로필</h4><div class="codex-record-grid"><div class="codex-record-field"><span class="label">사원번호</span><span class="value">${employee.id}</span></div><div class="codex-record-field"><span class="label">성명</span><span class="value">${employee.name}</span></div><div class="codex-record-field"><span class="label">직급</span><span class="value">${employee.grade}</span></div><div class="codex-record-field"><span class="label">직책</span><span class="value">${employee.title}</span></div><div class="codex-record-field"><span class="label">직군</span><span class="value">${employee.jobFamily}</span></div><div class="codex-record-field"><span class="label">직원유형</span><span class="value">${employee.employeeType}</span></div><div class="codex-record-field full"><span class="label">소속</span><span class="value">${employeePath(employee)}</span></div></div></div><div class="codex-record-section"><h4>기본 인사정보</h4><div class="codex-record-grid"><div class="codex-record-field"><span class="label">입사일</span><span class="value">${employee.hireDate}</span></div><div class="codex-record-field"><span class="label">생년월일</span><span class="value">${employee.birthDate}</span></div><div class="codex-record-field"><span class="label">연락처</span><span class="value">${employee.phone}</span></div><div class="codex-record-field"><span class="label">최종학력</span><span class="value">${employee.education}</span></div><div class="codex-record-field"><span class="label">재직상태</span><span class="value">${statusBadge(employee.status)}</span></div><div class="codex-record-field"><span class="label">부서배정일</span><span class="value">${employee.assignmentDate}</span></div></div></div><div class="codex-record-section"><h4>안내</h4><div class="codex-record-note">이 화면은 통계 상세에서 여는 기본정보 전용 탭입니다. 경력, 발령이력, 교육이력 등 전체 내용은 상단의 인사기록카드 버튼을 통해 확인합니다.</div></div></div></div>`;
  }
  function openRecordDetailModal(tabId) {
    const employee = selectedEmployee();
    const titleMap = {
      overview: "기본정보 상세",
      hire: "입사정보 상세",
      personal: "신상정보 상세",
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
        ["직군", employee.jobFamily, "재직상태", employee.status],
        ["회사 이메일", getCompanyEmail(employee), "회사 전화", getCompanyPhone(employee)],
        ["소속", employeePath(employee), "", ""]
      ]),
      hire: sheetFieldTable([
        ["입사일", employee.hireDate, "입사시 직급", employee.hireGrade],
        ["인정경력", `${employee.careerMonths}개월`, "초기 배치일", employee.assignmentDate],
        ["계약기간", employee.employeeType === "계약직" ? employee.contractPeriod || "-" : "-", "그룹웨어 ID", employee.groupwareId || getGroupwareId(employee)]
      ]),
      personal: sheetFieldTable([
        ["주민등록번호", employee.residentNumber || getResidentNumber(employee), "결혼여부", employee.maritalStatus || getMaritalStatus(employee)],
        ["생년월일", employee.birthDate, "휴대전화", employee.phone],
        ["개인 이메일", getPersonalEmail(employee), "회사 전화", getCompanyPhone(employee)],
        ["주소", getAddress(employee), "", ""]
      ]),
      education: previewGrid(["학교명", "재학기간", "전공", "비고"], getEducationEntries(employee).map((item) => [item[1].split(" ")[0] || item[1], item[0], item[1].split(" ").slice(1).join(" "), ""])),
      career: previewGrid(["회사명", "기간", "담당업무", "비고"], getCareerHistory(employee).map((item) => [deepestDept(employee), item[0], item[1], ""])),
      family: previewGrid(["관계", "성명", "생년월일"], getFamilyEntries(employee)),
      certificate: previewGrid(["자격증명", "발급기관", "취득일"], getCertificateEntries(employee).map((item) => [item[1], item[2], item[3]])),
      award: previewGrid(["상벌구분", "상벌명", "발생일", "사유"], getAwardEntries(employee)),
      promotion: previewGrid(["승급구분", "승급일", "소속부서", "직급", "직책", "비고"], getPromotionEntries(employee)),
      assignment: previewGrid(["발령구분", "발령일", "발령부서", "직군", "직원유형", "직급", "직책", "비고"], employee.history.map((item, index) => {
        const hireRow = index === employee.history.length - 1;
        return [hireRow ? "입사" : "발령", item[0], hireRow ? hireEmployeePath(employee) : employeePath(employee), hireRow ? employee.hireJobFamily || employee.jobFamily : employee.jobFamily, hireRow ? employee.hireEmployeeType || employee.employeeType : employee.employeeType, hireRow ? employee.hireGrade : employee.grade, employee.title, item[1]];
      })),
      training: previewGrid(["교육명", "시작일", "종료일", "교육기관", "비고"], employee.educationHistory.map((item) => [item[1], item[0], item[0], "사내/외 교육", ""])),
      memo: `<div class="codex-sheet-memo">${employee.memo}</div>`
    };
    $("h3", recordDetailModal.root).textContent = titleMap[tabId] || "인사기록카드 상세";
    recordDetailModal.body.innerHTML = `<div class="codex-record-detail-modal-body">${bodies[tabId] || bodies.overview}</div>`;
    recordDetailModal.save.onclick = () => recordDetailModal.close();
    recordDetailModal.open();
  }
  function renderCodes() {
    const orgSummary = getOrgSummary();
    if (!state.currentCodeSelection && orgSummary[0]) state.currentCodeSelection = orgSummary[0].key;
    const codeActions = `<div class="codex-secondary-actions"><button type="button" class="hr-btn btn-outline" data-code-view="overview">코드 현황</button><button type="button" class="hr-btn btn-outline" data-code-view="org-edit">조직코드 수정</button><button type="button" class="hr-btn btn-outline" data-code-view="level-edit">레벨관리</button><button type="button" class="hr-btn btn-outline" data-code-view="meta-edit">기준코드 수정</button></div>`;
    if (state.currentCodeView === "overview") {
      panels.codes.innerHTML = `<div class="hr-table-header" style="padding:0 0 14px;border-bottom:1px solid #eef2f7"><div><h3>코드관리</h3><div style="font-size:11px;color:#9095b0">조직코드 / 레벨관리 / 직급 / 직책 / 직군 / 직원유형 현황</div></div>${codeActions}</div><div class="codex-grid-2-tight" style="margin-top:16px"><div class="codex-panel"><h4 style="font-size:13px;color:#1e3a5f;margin-bottom:12px">조직코드 현황</h4><table><thead><tr><th>레벨</th><th>조직</th><th>상위조직</th><th>인원수</th></tr></thead><tbody>${orgSummary.map((item) => `<tr><td>${item.level}</td><td>${item.name}</td><td>${item.parent}</td><td>${item.count}명</td></tr>`).join("")}</tbody></table></div><div class="codex-stack"><div class="codex-panel"><h4 style="font-size:13px;color:#1e3a5f;margin-bottom:12px">레벨 현황</h4>${levelDefs.map((level) => `<div class="codex-note-box"><strong>${level.id} · ${level.name}</strong>상위레벨: ${level.parent} · ${level.desc}</div>`).join("")}</div><div class="codex-panel"><h4 style="font-size:13px;color:#1e3a5f;margin-bottom:12px">기준코드 현황</h4><div class="codex-note-box"><strong>직급</strong>${gradeCodes.join(" / ")}</div><div class="codex-note-box"><strong>직책</strong>${titleCodes.join(" / ")}</div><div class="codex-note-box"><strong>직군</strong>${familyCodes.join(" / ")}</div><div class="codex-note-box"><strong>직원유형</strong>${employeeTypes.join(" / ")}</div></div></div></div>`;
    } else if (state.currentCodeView === "org-edit") {
      const selected = orgSummary.find((item) => item.key === state.currentCodeSelection) || orgSummary[0];
      if (selected && selected.key !== state.currentCodeSelection) state.currentCodeSelection = selected.key;
      panels.codes.innerHTML = `<div class="hr-table-header" style="padding:0 0 14px;border-bottom:1px solid #eef2f7"><div><h3>조직코드 수정</h3><div style="font-size:11px;color:#9095b0">현황 화면에서 진입한 후 조직 구조를 검토하고 수정하는 화면</div></div>${codeActions}</div><div class="codex-grid-2" style="margin-top:16px"><div class="codex-panel"><h4 style="font-size:13px;color:#1e3a5f;margin-bottom:12px">조직코드 목록</h4><table><thead><tr><th>선택</th><th>레벨</th><th>조직</th><th>상위조직</th><th>인원수</th></tr></thead><tbody>${orgSummary.map((item) => `<tr class="${item.key === state.currentCodeSelection ? "codex-table-selected" : ""}"><td><button type="button" class="hr-btn btn-outline" data-org-select="${item.key}">선택</button></td><td>${item.level}</td><td>${item.name}</td><td>${item.parent}</td><td>${item.count}명</td></tr>`).join("")}</tbody></table></div><div class="codex-stack"><div class="codex-panel"><h4 style="font-size:13px;color:#1e3a5f;margin-bottom:12px">조직코드 편집</h4>${selected ? `<div class="codex-form-grid"><label><span>레벨</span><input value="${selected.level}" readonly></label><label><span>상위조직</span><input value="${selected.parent}" readonly></label><label class="span-2"><span>조직명</span><input id="codeOrgName" value="${selected.name}"></label><label><span>본부</span><input value="${selected.hq || "-"}" readonly></label><label><span>실</span><input value="${selected.office || "-"}" readonly></label><label><span>팀</span><input value="${selected.team || "-"}" readonly></label><label><span>파트</span><input value="${selected.part || "-"}" readonly></label></div><div class="codex-modal-actions"><button type="button" class="hr-btn btn-primary" id="codeOrgSaveBtn">코드 저장</button></div>` : `<div class="codex-note-box">수정할 조직을 선택하세요.</div>`}</div><div class="codex-panel"><h4 style="font-size:13px;color:#1e3a5f;margin-bottom:12px">본부 기준 조직도 미리보기</h4>${selected ? renderOrgBoard(selected.hq) : `<div class="codex-note-box">선택된 조직이 없습니다.</div>`}</div></div></div>`;
    } else if (state.currentCodeView === "level-edit") {
      const selectedLevel = levelDefs.find((item) => item.id === state.currentLevelSelection) || levelDefs[0];
      panels.codes.innerHTML = `<div class="hr-table-header" style="padding:0 0 14px;border-bottom:1px solid #eef2f7"><div><h3>레벨관리</h3><div style="font-size:11px;color:#9095b0">조직 레벨 정의와 상하위 관계를 관리하는 화면</div></div>${codeActions}</div><div class="codex-grid-2-tight" style="margin-top:16px"><div class="codex-panel"><h4 style="font-size:13px;color:#1e3a5f;margin-bottom:12px">레벨 목록</h4>${levelDefs.map((level) => `<div class="codex-note-box ${level.id === state.currentLevelSelection ? "codex-note-selected" : ""}"><strong>${level.id} · ${level.name}</strong>상위레벨: ${level.parent} · ${level.desc}<div style="margin-top:8px"><button type="button" class="hr-btn btn-outline" data-level-select="${level.id}">선택</button></div></div>`).join("")}</div><div class="codex-panel"><h4 style="font-size:13px;color:#1e3a5f;margin-bottom:12px">레벨 편집</h4><div class="codex-form-grid"><label><span>레벨 ID</span><input value="${selectedLevel.id}" readonly></label><label><span>상위레벨</span><input id="levelParent" value="${selectedLevel.parent}"></label><label><span>레벨명</span><input id="levelName" value="${selectedLevel.name}"></label><label><span>설명</span><input id="levelDesc" value="${selectedLevel.desc}"></label></div><div class="codex-modal-actions"><button type="button" class="hr-btn btn-primary" id="levelSaveBtn">레벨 저장</button></div><div class="codex-note-box"><strong>적용 영향</strong>조직도 표시, 조직코드 유효성, 신규등록/발령입력 선택 구조에 공통 반영</div></div></div>`;
    } else {
      panels.codes.innerHTML = `<div class="hr-table-header" style="padding:0 0 14px;border-bottom:1px solid #eef2f7"><div><h3>기준코드 수정</h3><div style="font-size:11px;color:#9095b0">직급 / 직책 / 직군 / 직원유형 기준을 관리하는 화면</div></div>${codeActions}</div><div class="codex-grid-2-tight" style="margin-top:16px"><div class="codex-panel"><h4 style="font-size:13px;color:#1e3a5f;margin-bottom:12px">기준코드 분류</h4><div class="codex-stack"><button type="button" class="hr-btn ${state.currentMetaSelection === "grade" ? "btn-primary" : "btn-outline"}" data-meta-select="grade">직급 코드</button><button type="button" class="hr-btn ${state.currentMetaSelection === "title" ? "btn-primary" : "btn-outline"}" data-meta-select="title">직책 코드</button><button type="button" class="hr-btn ${state.currentMetaSelection === "family" ? "btn-primary" : "btn-outline"}" data-meta-select="family">직군 코드</button><button type="button" class="hr-btn ${state.currentMetaSelection === "type" ? "btn-primary" : "btn-outline"}" data-meta-select="type">직원유형 코드</button></div><div class="codex-note-box" style="margin-top:12px"><strong>현재 코드</strong>${currentMetaArray().join(" / ")}</div></div><div class="codex-panel"><h4 style="font-size:13px;color:#1e3a5f;margin-bottom:12px">${currentMetaLabel()} 편집</h4><label style="display:grid;gap:6px;font-size:12px;color:#6f7e93"><span>한 줄에 하나씩 입력</span><textarea id="metaValues" rows="10">${currentMetaArray().join("\n")}</textarea></label><div class="codex-modal-actions"><button type="button" class="hr-btn btn-primary" id="metaSaveBtn">기준코드 저장</button></div><div class="codex-note-box"><strong>적용 영향</strong>신규등록, 인사기록카드, 발령입력 드롭다운에 즉시 반영</div></div></div>`;
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
    $$("[data-org-select]", panels.codes).forEach((button) => {
      button.addEventListener("click", () => {
        state.currentCodeSelection = button.dataset.orgSelect;
        renderCodes();
      });
    });
    $$("[data-level-select]", panels.codes).forEach((button) => {
      button.addEventListener("click", () => {
        state.currentLevelSelection = button.dataset.levelSelect;
        renderCodes();
      });
    });
    $$("[data-meta-select]", panels.codes).forEach((button) => {
      button.addEventListener("click", () => {
        state.currentMetaSelection = button.dataset.metaSelect;
        renderCodes();
      });
    });
    $("#codeOrgSaveBtn", panels.codes)?.addEventListener("click", saveOrgCode);
    $("#levelSaveBtn", panels.codes)?.addEventListener("click", saveLevelCode);
    $("#metaSaveBtn", panels.codes)?.addEventListener("click", saveMetaCode);
  }
  function createAssignmentFlow() {
    return {
      stage: 1,
      changeDate: "2026.04.14",
      mode: "auto",
      orgDraft: cloneOrgBlueprint(state.orgBlueprint),
      selectedBeforeOrg: "ROOT",
      selectedAfterOrg: "ROOT",
      selectedPersonnelOrg: "ROOT",
      orgSummary: { created: [], updated: [], deleted: [] },
      personnelActions: [],
      personnelSearch: ""
    };
  }
  function ensureAssignmentFlow() {
    if (!state.assignmentFlow) state.assignmentFlow = createAssignmentFlow();
    return state.assignmentFlow;
  }
  function parseOrgKey(key) {
    if (!key || key === "ROOT") return { level: "ROOT", hq: "", office: "", team: "", part: "" };
    const [level, hq = "", office = "", team = "", part = ""] = key.split("|");
    return { level, hq, office, team, part };
  }
  function normalizeBlueprint(rows) {
    return completeBlueprintHierarchy(rows
      .filter((row) => row.hq)
      .map((row) => {
        const normalized = { ...row, hq: row.hq || "", office: row.office || "", team: row.team || "", part: row.part || "" };
        normalized.sourceKey = row.sourceKey || getOrgRowKey(normalized);
        return normalized;
      }))
      .sort((a, b) => getOrgRowKey(a).localeCompare(getOrgRowKey(b), "ko"))
      .map((row, index) => ({ ...row, code: `${getOrgRowLevel(row)}-${String(index + 1).padStart(3, "0")}`, createdAt: row.createdAt || "2023.08.16 00:00", updatedAt: "2026.04.14 09:00" }));
  }
  function getBlueprintRow(rows, key) {
    return rows.find((row) => getOrgRowKey(row) === key);
  }
  function getChildrenRows(rows, parentKey) {
    if (parentKey === "ROOT") return rows.filter((row) => row.hq && !row.office);
    const parent = parseOrgKey(parentKey);
    if (parent.level === "L1") return rows.filter((row) => row.hq === parent.hq && row.office && !row.team);
    if (parent.level === "L2") return rows.filter((row) => row.hq === parent.hq && row.office === parent.office && row.team && !row.part);
    if (parent.level === "L3") return rows.filter((row) => row.hq === parent.hq && row.office === parent.office && row.team === parent.team && row.part);
    return [];
  }
  function getDescendantKeys(rows, key) {
    const directChildren = getChildrenRows(rows, key);
    return directChildren.flatMap((row) => [getOrgRowKey(row), ...getDescendantKeys(rows, getOrgRowKey(row))]);
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
  function getProjectedEmployees(flow) {
    const nextRows = flow?.orgDraft || state.orgBlueprint;
    const nextBySource = new Map(nextRows.map((row) => [row.sourceKey || getOrgRowKey(row), row]));
    const currentByKey = new Map(state.orgBlueprint.map((row) => [getOrgRowKey(row), row]));
    return state.employees.map((employee) => {
      const currentRow = currentByKey.get(getEmployeeNodeKey(employee));
      const projectedRow = currentRow ? nextBySource.get(currentRow.sourceKey || getOrgRowKey(currentRow)) : null;
      return projectedRow ? { ...employee, hq: projectedRow.hq, office: projectedRow.office, team: projectedRow.team, part: projectedRow.part } : { ...employee };
    });
  }
  function ensurePersonnelAction(flow, employee) {
    let action = flow.personnelActions.find((item) => item.employeeId === employee.id);
    if (!action) {
      action = { employeeId: employee.id, type: "부서 이동", targetOrgKey: getEmployeeNodeKey(employee), targetTitle: employee.title, note: "", enabled: true };
      flow.personnelActions.push(action);
    }
    return action;
  }
  function buildTreeFromBlueprint(rows, selectedKey, includeControls = false, prefix = "landing") {
    const expandedKeys = new Set(["ROOT", ...(state.orgExpandedKeys || [])]);
    const renderNode = (key, label) => {
      const children = getChildrenRows(rows, key);
      const hasChildren = children.length > 0;
      const expanded = expandedKeys.has(key) || selectedKey === key;
      const selected = selectedKey === key;
      const selectedRow = key === "ROOT" ? null : getBlueprintRow(rows, key);
      const controls = includeControls && key !== "ROOT"
        ? `<div class="codex-assignment-tree-actions"><button type="button" class="codex-icon-btn" data-org-edit="${key}">✎</button><button type="button" class="codex-icon-btn" data-org-delete="${key}">🗑</button></div>`
        : includeControls ? `<button type="button" class="hr-btn btn-outline codex-tree-add-btn" data-org-add-under="${key}">＋ 추가</button>` : "";
      return `<div class="codex-org-tree-node ${selected ? "selected" : ""} ${expanded ? "is-open" : ""}"><div class="codex-org-tree-row"><button type="button" class="codex-org-tree-toggle-btn ${hasChildren ? "" : "is-leaf"}" data-org-toggle="${key}" ${hasChildren ? `aria-expanded="${expanded}"` : "disabled"}>${hasChildren ? (expanded ? "−" : "+") : "·"}</button><button type="button" class="codex-org-tree-btn" data-assignment-org-node="${key}" data-assignment-org-prefix="${prefix}"><span class="codex-org-tree-label">${label}</span>${selectedRow?.code ? `<span class="codex-assignment-tree-code">${selectedRow.code}</span>` : ""}</button>${controls}</div>${hasChildren && expanded ? `<div class="codex-org-tree-children">${children.map((child) => renderNode(getOrgRowKey(child), getOrgRowName(child))).join("")}</div>` : ""}</div>`;
    };
    return renderNode("ROOT", "오토플러스");
  }
  function renderAssignmentLanding() {
    const { root, nodeMap } = buildOrgExplorerData();
    const selected = nodeMap.get(state.currentOrgNode) || root;
    const keyword = (state.assignmentLandingSearch || "").trim().toLowerCase();
    const selectedMembers = getEmployeesInOrgKey(selected.key, true).filter((employee) => {
      if (!keyword) return true;
      return [employee.name, employee.id, employee.title, employeePath(employee)].join(" ").toLowerCase().includes(keyword);
    });
    const selectedRow = selected.key === "ROOT" ? null : getBlueprintRow(state.orgBlueprint, selected.key);
    const infoRows = selected.key === "ROOT"
      ? [["부서명", "오토플러스"], ["부서 코드", "ROOT"], ["부서 레벨", "ROOT"], ["최근 수정일", "2026.04.14 09:00"]]
      : [["부서명", getOrgRowName(selectedRow)], ["부서 코드", selectedRow?.code || "-"], ["부서 레벨", getOrgRowLevel(selectedRow)], ["최근 수정일", selectedRow?.updatedAt || "-"]];
    const memberRows = selectedMembers.map((employee) => `<tr><td>${employee.name}</td><td>${employee.id}</td><td>${employee.title}</td><td>${employee.status}</td></tr>`).join("");
    const historyRows = state.assignmentRecords.map((record) => `<tr><td><button type="button" class="codex-link-btn" data-assignment-history="${record.date}">${record.date}</button></td><td>${record.orgSummary.created.length + record.orgSummary.updated.length + record.orgSummary.deleted.length}건</td><td>${record.personnelActions.length}건</td><td>${record.mode === "auto" ? "자동" : "수동"}</td></tr>`).join("");
    const deletedRows = state.deletedOrgArchive.map((item) => `<tr><td>${item.date}</td><td>${item.path}</td></tr>`).join("");
    const tabs = `<div class="codex-assignment-tabs"><button type="button" class="codex-assignment-tab ${state.assignmentLandingTab === "org" ? "active" : ""}" data-assignment-tab="org">조직도</button><button type="button" class="codex-assignment-tab ${state.assignmentLandingTab === "history" ? "active" : ""}" data-assignment-tab="history">조직개편/인사발령 이력</button><button type="button" class="codex-assignment-tab ${state.assignmentLandingTab === "deleted" ? "active" : ""}" data-assignment-tab="deleted">삭제된 조직 목록</button></div>`;
    const body = state.assignmentLandingTab === "history"
      ? `<div class="codex-panel"><table><thead><tr><th>인사발령일</th><th>조직개편</th><th>인사발령</th><th>처리방식</th></tr></thead><tbody>${historyRows || `<tr><td colspan="4">이력이 없습니다.</td></tr>`}</tbody></table></div>`
      : state.assignmentLandingTab === "deleted"
        ? `<div class="codex-panel"><table><thead><tr><th>일자</th><th>삭제 조직</th></tr></thead><tbody>${deletedRows || `<tr><td colspan="2">삭제 이력이 없습니다.</td></tr>`}</tbody></table></div>`
        : `<div class="codex-assignment-landing-grid"><div class="codex-panel"><div class="codex-assignment-section-head"><h4>조직도</h4><div></div></div><div class="codex-assignment-tree-wrap">${buildTreeFromBlueprint(state.orgBlueprint, state.currentOrgNode, false, "landing")}</div></div><div class="codex-stack"><div class="codex-panel"><div class="codex-assignment-section-head"><h4>부서 정보</h4><button type="button" class="hr-btn btn-primary" id="startAssignmentWizardBtn">조직개편/인사발령</button></div><table><tbody>${infoRows.map((row) => `<tr><th>${row[0]}</th><td>${row[1]}</td></tr>`).join("")}</tbody></table></div><div class="codex-panel"><div class="codex-assignment-section-head"><h4>구성원 정보</h4><input class="hr-search-input" id="assignmentLandingSearch" value="${state.assignmentLandingSearch || ""}" placeholder="이름, ID 검색"></div><table><thead><tr><th>이름</th><th>ID</th><th>직위</th><th>재직 상태</th></tr></thead><tbody>${memberRows || `<tr><td colspan="4">구성원이 없습니다.</td></tr>`}</tbody></table></div></div></div>`;
    panels.assignment.innerHTML = `<div class="codex-assignment-shell"><div class="hr-table-header" style="padding:0 0 14px;border-bottom:1px solid #eef2f7"><div><h3>조직 관리</h3><div style="font-size:11px;color:#9095b0">조직도, 조직개편/인사발령 이력, 삭제 조직 이력 조회</div></div></div>${tabs}<div class="codex-note-box" style="margin-top:16px"><strong>TIP</strong>조직개편/인사발령을 예약하면 해당 일자 기준으로 조직도와 인사정보가 함께 반영됩니다.</div><div style="margin-top:16px">${body}</div></div>`;
  }
  function renderAssignmentStepOne(flow) {
    panels.assignment.innerHTML = `<div class="codex-assignment-wizard"><div class="codex-assignment-wizard-head"><div><h3>조직개편 및 인사발령</h3><div class="codex-assignment-sub">조직개편 및 인사발령일과 처리 방식을 입력합니다.</div></div><div class="codex-stepper"><span class="active">1단계</span><span>2단계</span><span>3단계</span></div></div><div class="codex-panel" style="margin-top:16px"><div class="codex-form-grid"><label><span>조직개편 및 인사발령일</span><input id="wizardChangeDate" value="${flow.changeDate}" placeholder="YYYY.MM.DD"></label><label><span>처리 방식</span><div class="codex-inline-radio"><label><input type="radio" name="wizardMode" value="auto" ${flow.mode === "auto" ? "checked" : ""}>자동</label><label><input type="radio" name="wizardMode" value="manual" ${flow.mode === "manual" ? "checked" : ""}>수동</label></div></label><div class="codex-note-box span-2"><strong>자동</strong>입력한 날짜에 조직도와 임직원 정보가 자동 업데이트됩니다.</div><div class="codex-note-box span-2"><strong>수동</strong>관리자가 완료 시점에 직접 확정합니다.</div></div></div><div class="codex-assignment-footer"><button type="button" class="hr-btn btn-outline" id="cancelAssignmentWizardBtn">취소</button><button type="button" class="hr-btn btn-primary" id="assignmentNextStepBtn">다음 단계</button></div></div>`;
  }
  function renderOrgSummaryTable(flow) {
    const createdRows = flow.orgSummary.created.map((row) => `<tr><td>${getOrgRowPath(row)}</td></tr>`).join("");
    const updatedRows = flow.orgSummary.updated.map((item) => `<tr><td>${getOrgRowPath(item.before)}</td><td>${getOrgRowPath(item.after)}</td></tr>`).join("");
    const deletedRows = flow.orgSummary.deleted.map((row) => `<tr><td>${getOrgRowPath(row)}</td></tr>`).join("");
    return `<div class="codex-panel"><h4>조직개편</h4><div class="codex-summary-group"><h5>신설</h5><table><thead><tr><th>조직명</th></tr></thead><tbody>${createdRows || `<tr><td>신설 없음</td></tr>`}</tbody></table></div><div class="codex-summary-group"><h5>변경</h5><table><thead><tr><th>변경 전</th><th>변경 후</th></tr></thead><tbody>${updatedRows || `<tr><td colspan="2">변경 없음</td></tr>`}</tbody></table></div><div class="codex-summary-group"><h5>폐지</h5><table><thead><tr><th>조직명</th></tr></thead><tbody>${deletedRows || `<tr><td>폐지 없음</td></tr>`}</tbody></table></div></div>`;
  }
  function renderAssignmentStepTwo(flow) {
    const selectedAfter = getBlueprintRow(flow.orgDraft, flow.selectedAfterOrg) || null;
    panels.assignment.innerHTML = `<div class="codex-assignment-wizard"><div class="codex-assignment-wizard-head"><div><h3>조직개편 및 인사발령</h3><div class="codex-assignment-sub">Before / After 조직을 비교하며 명칭 변경, 이동, 신설, 폐지를 편집합니다.</div></div><div class="codex-stepper"><span class="done">1단계</span><span class="active">2단계</span><span>3단계</span></div></div><div class="codex-assignment-before-after"><div class="codex-panel"><div class="codex-assignment-section-head"><h4>Before</h4><div></div></div><div class="codex-assignment-tree-wrap">${buildTreeFromBlueprint(state.orgBlueprint, flow.selectedBeforeOrg, false, "before")}</div></div><div class="codex-panel"><div class="codex-assignment-section-head"><h4>After</h4><div class="codex-inline-actions"><button type="button" class="hr-btn btn-outline" data-org-add-under="${flow.selectedAfterOrg || "ROOT"}">추가</button><button type="button" class="hr-btn btn-outline" ${selectedAfter ? `data-org-edit="${flow.selectedAfterOrg}"` : "disabled"}>수정</button><button type="button" class="hr-btn btn-outline" ${selectedAfter ? `data-org-delete="${flow.selectedAfterOrg}"` : "disabled"}>삭제</button></div></div><div class="codex-assignment-tree-wrap">${buildTreeFromBlueprint(flow.orgDraft, flow.selectedAfterOrg, true, "after")}</div></div></div><div style="margin-top:16px">${renderOrgSummaryTable(flow)}</div><div class="codex-assignment-footer"><button type="button" class="hr-btn btn-outline" id="assignmentPrevStepBtn">이전 단계</button><div class="codex-inline-actions"><button type="button" class="hr-btn btn-outline" id="assignmentOrgEditDoneBtn">편집 완료</button><button type="button" class="hr-btn btn-primary" id="assignmentOrgNextStepBtn">다음 단계</button></div></div></div>`;
  }
  function renderPersonnelSummary(flow) {
    const actions = flow.personnelActions.filter((item) => item.enabled !== false).map((action) => {
      const employee = state.employees.find((item) => item.id === action.employeeId);
      const targetRow = getBlueprintRow(flow.orgDraft, action.targetOrgKey);
      return {
        employee,
        action,
        beforeOrg: employee ? employeePath(employee) : "-",
        afterOrg: targetRow ? getOrgRowPath(targetRow) : "조직 없음"
      };
    });
    const moveRows = actions
      .filter((item) => ["부서 이동", "조직장 임명"].includes(item.action.type))
      .map((item) => `<tr><td>${item.employee?.name || "-"}</td><td>${item.employee?.grade || "-"}</td><td>${item.beforeOrg}</td><td>${item.action.type}</td><td>${item.afterOrg}</td><td>${item.action.targetTitle || "-"}</td><td>${item.action.note || "-"}</td></tr>`)
      .join("");
    const removeRows = actions
      .filter((item) => item.action.type === "소속 제외")
      .map((item) => `<tr><td>${item.employee?.name || "-"}</td><td>${item.employee?.grade || "-"}</td><td>${item.beforeOrg}</td><td>${item.action.note || "-"}</td></tr>`)
      .join("");
    const titleRows = actions
      .filter((item) => item.action.type === "직위 변경")
      .map((item) => `<tr><td>${item.employee?.name || "-"}</td><td>${item.beforeOrg}</td><td>${item.employee?.title || "-"}</td><td>${item.action.targetTitle || "-"}</td><td>${item.action.note || "-"}</td></tr>`)
      .join("");
    return `<div class="codex-panel"><h4>인사발령</h4><div class="codex-summary-group"><h5>부서 이동 및 조직장 임명</h5><table><thead><tr><th>이름</th><th>직위</th><th>발령 전 조직</th><th>유형</th><th>발령 후 조직</th><th>직책</th><th>비고</th></tr></thead><tbody>${moveRows || `<tr><td colspan="7">해당 내역이 없습니다.</td></tr>`}</tbody></table></div><div class="codex-summary-group"><h5>소속 제외</h5><table><thead><tr><th>이름</th><th>직위</th><th>발령 전 조직</th><th>비고</th></tr></thead><tbody>${removeRows || `<tr><td colspan="4">해당 내역이 없습니다.</td></tr>`}</tbody></table></div><div class="codex-summary-group"><h5>직위 변경</h5><table><thead><tr><th>이름</th><th>소속 조직</th><th>발령 전 직책</th><th>발령 후 직책</th><th>비고</th></tr></thead><tbody>${titleRows || `<tr><td colspan="5">해당 내역이 없습니다.</td></tr>`}</tbody></table></div></div>`;
  }
  function renderAssignmentStepThree(flow) {
    const projectedEmployees = getProjectedEmployees(flow);
    const members = getEmployeesInOrgKey(flow.selectedPersonnelOrg || "ROOT", false, flow.orgDraft, projectedEmployees).filter((employee) => {
      const keyword = (flow.personnelSearch || "").trim().toLowerCase();
      if (!keyword) return true;
      return [employee.name, employee.id, employee.title, employeePath(employee)].join(" ").toLowerCase().includes(keyword);
    });
    const orgOptions = flow.orgDraft.map((row) => `<option value="${getOrgRowKey(row)}">${getOrgRowPath(row)}</option>`).join("");
    const memberRows = members.map((employee) => {
      const action = ensurePersonnelAction(flow, employee);
      return `<tr><td><input type="checkbox" ${action.enabled !== false ? "checked" : ""} data-personnel-enable="${employee.id}"></td><td>${employee.name}</td><td>${employee.id}</td><td>${employee.grade}</td><td><select data-personnel-type="${employee.id}"><option ${action.type === "부서 이동" ? "selected" : ""}>부서 이동</option><option ${action.type === "소속 제외" ? "selected" : ""}>소속 제외</option><option ${action.type === "조직장 임명" ? "selected" : ""}>조직장 임명</option><option ${action.type === "직위 변경" ? "selected" : ""}>직위 변경</option></select></td><td><select data-personnel-org="${employee.id}"><option value="">조직 없음</option>${orgOptions.replace(`value="${action.targetOrgKey}"`, `value="${action.targetOrgKey}" selected`)}</select></td><td><select data-personnel-title="${employee.id}">${titleCodes.map((item) => `<option value="${item}" ${item === action.targetTitle ? "selected" : ""}>${item}</option>`).join("")}</select></td><td><input data-personnel-note="${employee.id}" value="${action.note || ""}" placeholder="비고"></td></tr>`;
    }).join("");
    panels.assignment.innerHTML = `<div class="codex-assignment-wizard"><div class="codex-assignment-wizard-head"><div><h3>조직개편 및 인사발령</h3><div class="codex-assignment-sub">구성원의 부서 이동, 소속 제외, 조직장 임명, 직위 변경을 설정합니다.</div></div><div class="codex-stepper"><span class="done">1단계</span><span class="done">2단계</span><span class="active">3단계</span></div></div><div class="codex-assignment-before-after"><div class="codex-panel"><div class="codex-assignment-section-head"><h4>조직도</h4><div></div></div><div class="codex-assignment-tree-wrap">${buildTreeFromBlueprint(flow.orgDraft, flow.selectedPersonnelOrg || "ROOT", false, "personnel")}</div></div><div class="codex-panel"><div class="codex-assignment-section-head"><h4>구성원 정보</h4><input class="hr-search-input" id="personnelSearchInput" value="${flow.personnelSearch || ""}" placeholder="이름, ID 검색"></div><table><thead><tr><th></th><th>이름</th><th>ID</th><th>직위</th><th>처리 유형</th><th>발령 후 조직</th><th>직책</th><th>비고</th></tr></thead><tbody>${memberRows || `<tr><td colspan="8">해당 조직에 구성원이 없습니다.</td></tr>`}</tbody></table></div></div><div style="margin-top:16px">${renderPersonnelSummary(flow)}</div><div class="codex-assignment-footer"><button type="button" class="hr-btn btn-outline" id="assignmentPrevStepBtn">이전 단계</button><div class="codex-inline-actions"><button type="button" class="hr-btn btn-outline" id="assignmentPersonnelDoneBtn">편집 완료</button><button type="button" class="hr-btn btn-primary" id="assignmentFinishBtn">완료</button></div></div></div>`;
  }
  function openOrgEditModal(mode, orgKey = "ROOT") {
    const flow = ensureAssignmentFlow();
    const selected = orgKey === "ROOT" ? null : getBlueprintRow(flow.orgDraft, orgKey);
    const currentLevel = selected ? getOrgRowLevel(selected) : "L2";
    const defaultParentKey = mode === "add"
      ? orgKey
      : selected?.part
        ? ["L3", selected.hq, selected.office, selected.team, ""].join("|")
        : selected?.team
          ? ["L2", selected.hq, selected.office, "", ""].join("|")
          : selected?.office
            ? ["L1", selected.hq, "", "", ""].join("|")
            : "ROOT";
    const parentOptions = [`<option value="ROOT" ${defaultParentKey === "ROOT" ? "selected" : ""}>오토플러스</option>`]
      .concat(flow.orgDraft
        .filter((row) => mode === "add" || getOrgRowKey(row) !== orgKey)
        .map((row) => {
          const key = getOrgRowKey(row);
          return `<option value="${key}" ${defaultParentKey === key ? "selected" : ""}>${getOrgRowPath(row)}</option>`;
        }))
      .join("");
    createModal.root.querySelector("h3").textContent = mode === "add" ? "조직 신설" : "조직 편집";
    createModal.body.innerHTML = `<div class="codex-form-grid"><label><span>조직명</span><input id="wizardOrgName" value="${selected ? getOrgRowName(selected) : ""}"></label><label><span>레벨</span><select id="wizardOrgLevel">${["L1", "L2", "L3", "L4"].map((level) => `<option value="${level}" ${level === currentLevel ? "selected" : ""}>${level}</option>`).join("")}</select></label><label class="span-2"><span>상위조직</span><select id="wizardOrgParent">${parentOptions}</select></label><div class="codex-note-box span-2"><strong>안내</strong>상위 조직을 바꾸면 하위 부서 경로도 함께 이동하고, 편집 완료 시 부서코드가 자동 재부여됩니다.</div></div>`;
    createModal.save.onclick = () => {
      const flowRef = ensureAssignmentFlow();
      const name = $("#wizardOrgName", createModal.body)?.value?.trim();
      const level = $("#wizardOrgLevel", createModal.body)?.value || "L2";
      const parent = parseOrgKey($("#wizardOrgParent", createModal.body)?.value || "ROOT");
      if (!name) return;
      if (mode === "add") {
        const row = { hq: "", office: "", team: "", part: "" };
        if (level === "L1") row.hq = name;
        if (level === "L2") { row.hq = parent.hq || name; row.office = name; }
        if (level === "L3") { row.hq = parent.hq; row.office = parent.office; row.team = name; }
        if (level === "L4") { row.hq = parent.hq; row.office = parent.office; row.team = parent.team; row.part = name; }
        row.sourceKey = `NEW|${Date.now()}|${Math.random().toString(36).slice(2, 8)}`;
        flowRef.orgDraft.push(row);
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
      flowRef.orgSummary = summarizeOrgChanges(state.orgBlueprint, flowRef.orgDraft);
      createModal.close();
      renderAssignment();
    };
    createModal.open();
  }
  function deleteOrgFromDraft(orgKey) {
    const flow = ensureAssignmentFlow();
    const deleteKeys = [orgKey, ...getDescendantKeys(flow.orgDraft, orgKey)];
    flow.orgDraft = normalizeBlueprint(flow.orgDraft.filter((row) => !deleteKeys.includes(getOrgRowKey(row))));
    flow.orgSummary = summarizeOrgChanges(state.orgBlueprint, flow.orgDraft);
    flow.selectedAfterOrg = "ROOT";
    renderAssignment();
  }
  function openAssignmentHistoryDetail(date) {
    const record = state.assignmentRecords.find((item) => item.date === date);
    if (!record) return;
    $("h3", recordDetailModal.root).textContent = `${date} 인사발령 상세`;
    recordDetailModal.body.innerHTML = `${renderOrgSummaryTable({ orgSummary: record.orgSummary })}${renderPersonnelSummary({ personnelActions: record.personnelActions, orgDraft: record.afterRows || state.orgBlueprint })}`;
    recordDetailModal.save.onclick = () => recordDetailModal.close();
    recordDetailModal.open();
  }
  function applyAssignmentFlow(flow) {
    const nextBlueprint = normalizeBlueprint(flow.orgDraft);
    const previousBlueprint = state.orgBlueprint.map((row) => ({ ...row }));
    const previousByKey = new Map(previousBlueprint.map((row) => [getOrgRowKey(row), row]));
    const nextBySource = new Map(nextBlueprint.map((row) => [row.sourceKey || getOrgRowKey(row), row]));
    const explicitActionIds = new Set(flow.personnelActions.filter((item) => item.enabled !== false).map((item) => item.employeeId));
    state.orgBlueprint = nextBlueprint;
    state.employees.forEach((employee) => {
      const currentRow = previousByKey.get(getEmployeeNodeKey(employee));
      const remappedRow = currentRow ? nextBySource.get(currentRow.sourceKey || getOrgRowKey(currentRow)) : null;
      if (remappedRow) {
        const beforePath = employeePath(employee);
        employee.hq = remappedRow.hq;
        employee.office = remappedRow.office;
        employee.team = remappedRow.team;
        employee.part = remappedRow.part;
        if (beforePath !== employeePath(employee) && !explicitActionIds.has(employee.id)) {
          employee.assignmentDate = flow.changeDate;
          appendAssignmentDrivenHistory(employee, { type: "조직개편", assignDate: flow.changeDate, reason: "조직개편 반영", nextDept: employeePath(employee) || "조직 없음", nextGrade: employee.grade, nextTitle: employee.title, nextStatus: employee.status });
        }
      }
    });
    flow.personnelActions.filter((action) => action.enabled !== false).forEach((action) => {
      const employee = state.employees.find((item) => item.id === action.employeeId);
      if (!employee) return;
      const targetRow = getBlueprintRow(state.orgBlueprint, action.targetOrgKey);
      if (action.type !== "직위 변경") {
        if (action.type === "소속 제외") {
          employee.hq = "오토플러스";
          employee.office = "";
          employee.team = "";
          employee.part = "";
        } else if (targetRow) {
          employee.hq = targetRow.hq;
          employee.office = targetRow.office;
          employee.team = targetRow.team;
          employee.part = targetRow.part;
        }
      }
      if (action.type === "조직장 임명" || action.type === "직위 변경") employee.title = action.targetTitle || employee.title;
      employee.assignmentDate = flow.changeDate;
      appendAssignmentDrivenHistory(employee, { type: action.type, assignDate: flow.changeDate, reason: action.note || "조직개편/인사발령 반영", nextDept: employeePath(employee) || "조직 없음", nextGrade: employee.grade, nextTitle: employee.title, nextStatus: employee.status });
    });
    state.assignmentRecords.unshift({ date: flow.changeDate, mode: flow.mode, orgSummary: flow.orgSummary, personnelActions: flow.personnelActions.filter((item) => item.enabled !== false).map((item) => ({ ...item })), afterRows: cloneOrgBlueprint(state.orgBlueprint) });
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
      if (!key || button.classList.contains("is-leaf")) return;
      setOrgExpanded(key, !isOrgExpanded(key));
      renderAssignment();
    }));
    $("#startAssignmentWizardBtn", panels.assignment)?.addEventListener("click", () => { state.assignmentFlow = createAssignmentFlow(); renderAssignment(); });
    $("#assignmentLandingSearch", panels.assignment)?.addEventListener("input", (event) => { state.assignmentLandingSearch = event.target.value; renderAssignment(); });
    $("#cancelAssignmentWizardBtn", panels.assignment)?.addEventListener("click", () => { state.assignmentFlow = null; renderAssignment(); });
    $("#assignmentNextStepBtn", panels.assignment)?.addEventListener("click", () => { const flow = ensureAssignmentFlow(); flow.changeDate = $("#wizardChangeDate")?.value || flow.changeDate; flow.mode = document.querySelector('input[name="wizardMode"]:checked')?.value || flow.mode; flow.stage = 2; renderAssignment(); });
    $("#assignmentPrevStepBtn", panels.assignment)?.addEventListener("click", () => { const flow = ensureAssignmentFlow(); flow.stage = Math.max(1, flow.stage - 1); renderAssignment(); });
    $("#assignmentOrgEditDoneBtn", panels.assignment)?.addEventListener("click", () => { const flow = ensureAssignmentFlow(); flow.orgSummary = summarizeOrgChanges(state.orgBlueprint, flow.orgDraft); renderAssignment(); });
    $("#assignmentOrgNextStepBtn", panels.assignment)?.addEventListener("click", () => { const flow = ensureAssignmentFlow(); flow.orgSummary = summarizeOrgChanges(state.orgBlueprint, flow.orgDraft); flow.stage = 3; renderAssignment(); });
    $("#assignmentPersonnelDoneBtn", panels.assignment)?.addEventListener("click", () => renderAssignment());
    $("#assignmentFinishBtn", panels.assignment)?.addEventListener("click", () => applyAssignmentFlow(ensureAssignmentFlow()));
    $("#personnelSearchInput", panels.assignment)?.addEventListener("input", (event) => { ensureAssignmentFlow().personnelSearch = event.target.value; renderAssignment(); });
    $$("[data-assignment-history]", panels.assignment).forEach((button) => button.addEventListener("click", () => openAssignmentHistoryDetail(button.dataset.assignmentHistory)));
    $$("[data-assignment-org-node]", panels.assignment).forEach((button) => button.addEventListener("click", () => { const flow = state.assignmentFlow; const prefix = button.dataset.assignmentOrgPrefix; if (!flow) state.currentOrgNode = button.dataset.assignmentOrgNode; else if (prefix === "before") flow.selectedBeforeOrg = button.dataset.assignmentOrgNode; else if (prefix === "after") flow.selectedAfterOrg = button.dataset.assignmentOrgNode; else if (prefix === "personnel") flow.selectedPersonnelOrg = button.dataset.assignmentOrgNode; renderAssignment(); }));
    $$("[data-org-add-under]", panels.assignment).forEach((button) => button.addEventListener("click", () => openOrgEditModal("add", button.dataset.orgAddUnder)));
    $$("[data-org-edit]", panels.assignment).forEach((button) => button.addEventListener("click", () => openOrgEditModal("edit", button.dataset.orgEdit)));
    $$("[data-org-delete]", panels.assignment).forEach((button) => button.addEventListener("click", () => deleteOrgFromDraft(button.dataset.orgDelete)));
    $$("[data-personnel-enable]", panels.assignment).forEach((input) => input.addEventListener("change", () => { const action = ensureAssignmentFlow().personnelActions.find((item) => item.employeeId === input.dataset.personnelEnable); if (action) action.enabled = input.checked; }));
    $$("[data-personnel-type]", panels.assignment).forEach((select) => select.addEventListener("change", () => { const employee = state.employees.find((item) => item.id === select.dataset.personnelType); ensurePersonnelAction(ensureAssignmentFlow(), employee).type = select.value; renderAssignment(); }));
    $$("[data-personnel-org]", panels.assignment).forEach((select) => select.addEventListener("change", () => { const employee = state.employees.find((item) => item.id === select.dataset.personnelOrg); ensurePersonnelAction(ensureAssignmentFlow(), employee).targetOrgKey = select.value; }));
    $$("[data-personnel-title]", panels.assignment).forEach((select) => select.addEventListener("change", () => { const employee = state.employees.find((item) => item.id === select.dataset.personnelTitle); ensurePersonnelAction(ensureAssignmentFlow(), employee).targetTitle = select.value; }));
    $$("[data-personnel-note]", panels.assignment).forEach((input) => input.addEventListener("input", () => { const employee = state.employees.find((item) => item.id === input.dataset.personnelNote); ensurePersonnelAction(ensureAssignmentFlow(), employee).note = input.value; }));
  }
  function renderAssignment() {
    if (!state.assignmentFlow) renderAssignmentLanding();
    else if (state.assignmentFlow.stage === 1) renderAssignmentStepOne(state.assignmentFlow);
    else if (state.assignmentFlow.stage === 2) renderAssignmentStepTwo(state.assignmentFlow);
    else renderAssignmentStepThree(state.assignmentFlow);
    bindAssignment();
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
    createModal.body.innerHTML = `<div class="codex-form-grid"><label><span>사원번호</span><input value="자동생성" readonly></label><label><span>사원명</span><input id="createName"></label><label><span>그룹웨어 ID</span><input id="createGroupwareId" placeholder="예: hong.gildong"></label><label><span>주민등록번호</span><input id="createResidentNumber" placeholder="예: 950101-1******"></label><label><span>본부</span><input id="createHq" value="경영관리본부"></label><label><span>실</span><input id="createOffice" value="경영지원실"></label><label><span>팀</span><input id="createTeam" value="인사팀"></label><label><span>파트</span><input id="createPart"></label><label><span>직급</span><select id="createGrade">${gradeCodes.map((item) => `<option value="${item}">${item}</option>`).join("")}</select></label><label><span>직책</span><select id="createTitle">${titleCodes.map((item) => `<option value="${item}">${item}</option>`).join("")}</select></label><label><span>직군</span><select id="createFamily">${familyCodes.map((item) => `<option value="${item}">${item}</option>`).join("")}</select></label><label><span>직원유형</span><select id="createEmployeeType">${employeeTypes.map((item) => `<option value="${item}">${item}</option>`).join("")}</select></label><label><span>입사일</span><input id="createHireDate" value="2026.04.13"></label><label><span>생년월일</span><input id="createBirthDate" value="1995.01.01"></label><label><span>결혼여부</span><select id="createMaritalStatus"><option>미혼</option><option>기혼</option></select></label><label><span>연락처</span><input id="createPhone" value="010-0000-0000"></label><label><span>회사 전화</span><input id="createCompanyPhone" value="02-6200-0000"></label><label><span>회사 이메일</span><input id="createCompanyEmail" placeholder="example@autoplus.co.kr"></label><label><span>개인 이메일</span><input id="createPersonalEmail" placeholder="example@gmail.com"></label><label class="span-2"><span>주소</span><input id="createAddress" value="서울특별시"></label><label><span>최종학력</span><input id="createEducation" value="미입력"></label><label class="codex-disabled-field"><span>입사시 직급</span><input id="createHireGrade" readonly></label><label class="codex-disabled-field"><span>입사시 직원유형</span><input id="createHireEmployeeType" readonly></label><label class="codex-disabled-field"><span>입사시 직군</span><input id="createHireFamily" readonly></label><label class="codex-disabled-field"><span>입사시 본부</span><input id="createHireHq" readonly></label><label class="codex-disabled-field"><span>입사시 실</span><input id="createHireOffice" readonly></label><label class="codex-disabled-field"><span>입사시 팀</span><input id="createHireTeam" readonly></label><label class="codex-disabled-field"><span>입사시 파트</span><input id="createHirePart" readonly></label><label><span>계약기간</span><input id="createContractPeriod" placeholder="계약직인 경우 입력"></label><label><span>인정경력(개월)</span><input id="createCareerMonths" value="0"></label><label><span>부서배정일</span><input id="createAssignmentDate" value="2026.04.13"></label><label class="span-2"><span>인사 메모</span><textarea id="createMemo" rows="3">신규 등록 사원</textarea></label><div class="codex-note-box span-2"><strong>신규입사 기준</strong>입사시 정보는 신규 등록 시 현재 입력한 인사정보를 자동 상속합니다. 별도 수정이 필요하면 저장 후 인사기록카드 수정에서 변경합니다.</div>${repeatableEditorHtml("학력사항", "createEducation", ["학교명", "재학기간", "전공", "비고"], educationRows)}${repeatableEditorHtml("경력사항", "createCareer", ["회사명", "기간", "담당업무", "비고"], careerRows)}${repeatableEditorHtml("가족사항", "createFamilyRows", ["관계", "성명", "생년월일"], familyRows)}${repeatableEditorHtml("자격증", "createCertificate", ["자격증명", "발급기관", "취득일"], certificateRows)}</div>`;
    bindContractToggle("#createEmployeeType", "#createContractPeriod");
    bindRepeatableEditors(createModal.body);
    bindCreateAutoSync();
  }
  function fillEditForm() {
    const employee = selectedEmployee();
    const educationRows = getEducationEntries(employee).map((item) => [item[1].split(" ")[0] || item[1], item[0], item[1].split(" ").slice(1).join(" "), ""]);
    const careerRows = getCareerHistory(employee).map((item) => [deepestDept(employee), item[0], item[1], ""]);
    const familyRows = getFamilyEntries(employee);
    const certificateRows = getCertificateEntries(employee).map((item) => [item[1], item[2], item[3]]);
    const awardRows = getAwardEntries(employee);
    const promotionRows = getPromotionEntries(employee);
    const historyRows = employee.history;
    const trainingRows = employee.educationHistory.map((item) => [item[1], item[0], item[0], "사내/외 교육", ""]);
    editModal.body.innerHTML = `<div class="codex-form-grid"><label><span>사원번호</span><input value="${employee.id}" readonly></label><label><span>사원명</span><input id="editName" value="${employee.name}"></label><label><span>그룹웨어 ID</span><input id="editGroupwareId" value="${employee.groupwareId || getGroupwareId(employee)}"></label><label><span>주민등록번호</span><input id="editResidentNumber" value="${employee.residentNumber || getResidentNumber(employee)}"></label><label><span>본부</span><input id="editHq" value="${employee.hq || ""}"></label><label><span>실</span><input id="editOffice" value="${employee.office || ""}"></label><label><span>팀</span><input id="editTeam" value="${employee.team || ""}"></label><label><span>파트</span><input id="editPart" value="${employee.part || ""}"></label><label><span>직급</span><select id="editGrade">${gradeCodes.map((item) => `<option value="${item}" ${item === employee.grade ? "selected" : ""}>${item}</option>`).join("")}</select></label><label><span>직책</span><select id="editTitle">${titleCodes.map((item) => `<option value="${item}" ${item === employee.title ? "selected" : ""}>${item}</option>`).join("")}</select></label><label><span>직군</span><select id="editFamily">${familyCodes.map((item) => `<option value="${item}" ${item === employee.jobFamily ? "selected" : ""}>${item}</option>`).join("")}</select></label><label><span>직원유형</span><select id="editEmployeeType">${employeeTypes.map((item) => `<option value="${item}" ${item === employee.employeeType ? "selected" : ""}>${item}</option>`).join("")}</select></label><label><span>계약기간</span><input id="editContractPeriod" value="${employee.contractPeriod || ""}"></label><label><span>재직상태</span><select id="editStatus"><option ${employee.status === "재직" ? "selected" : ""}>재직</option><option ${employee.status === "휴직" ? "selected" : ""}>휴직</option></select></label><label><span>생년월일</span><input id="editBirthDate" value="${employee.birthDate}"></label><label><span>입사일</span><input id="editHireDate" value="${employee.hireDate}"></label><label><span>결혼여부</span><select id="editMaritalStatus"><option ${((employee.maritalStatus || getMaritalStatus(employee)) === "미혼") ? "selected" : ""}>미혼</option><option ${((employee.maritalStatus || getMaritalStatus(employee)) === "기혼") ? "selected" : ""}>기혼</option></select></label><label><span>연락처</span><input id="editPhone" value="${employee.phone}"></label><label><span>회사 전화</span><input id="editCompanyPhone" value="${getCompanyPhone(employee)}"></label><label><span>회사 이메일</span><input id="editCompanyEmail" value="${getCompanyEmail(employee)}"></label><label><span>개인 이메일</span><input id="editPersonalEmail" value="${getPersonalEmail(employee)}"></label><label class="span-2"><span>주소</span><input id="editAddress" value="${getAddress(employee)}"></label><label><span>최종학력</span><input id="editEducation" value="${employee.education}"></label><label><span>입사시 직급</span><select id="editHireGrade">${gradeCodes.map((item) => `<option value="${item}" ${item === employee.hireGrade ? "selected" : ""}>${item}</option>`).join("")}</select></label><label><span>입사시 직원유형</span><select id="editHireEmployeeType">${employeeTypes.map((item) => `<option value="${item}" ${(item === (employee.hireEmployeeType || employee.employeeType)) ? "selected" : ""}>${item}</option>`).join("")}</select></label><label><span>입사시 직군</span><select id="editHireFamily">${familyCodes.map((item) => `<option value="${item}" ${(item === (employee.hireJobFamily || employee.jobFamily)) ? "selected" : ""}>${item}</option>`).join("")}</select></label><label><span>입사시 본부</span><input id="editHireHq" value="${employee.hireHq || employee.hq || ""}"></label><label><span>입사시 실</span><input id="editHireOffice" value="${employee.hireOffice || employee.office || ""}"></label><label><span>입사시 팀</span><input id="editHireTeam" value="${employee.hireTeam || employee.team || ""}"></label><label><span>입사시 파트</span><input id="editHirePart" value="${employee.hirePart || employee.part || ""}"></label><label><span>인정경력(개월)</span><input id="editCareerMonths" value="${employee.careerMonths}"></label><label><span>부서배정일</span><input id="editAssignmentDate" value="${employee.assignmentDate}"></label><label class="span-2"><span>인사 메모</span><textarea id="editMemo" rows="3">${employee.memo}</textarea></label><div class="codex-note-box span-2"><strong>이력 입력 방식</strong>각 항목은 칸에 맞게 입력하고, 필요한 경우 행 추가로 여러 건을 관리합니다.</div>${repeatableEditorHtml("학력사항", "education", ["학교명", "재학기간", "전공", "비고"], educationRows)}${repeatableEditorHtml("경력사항", "career", ["회사명", "기간", "담당업무", "비고"], careerRows)}${repeatableEditorHtml("가족사항", "family", ["관계", "성명", "생년월일"], familyRows)}${repeatableEditorHtml("자격증", "certificate", ["자격증명", "발급기관", "취득일"], certificateRows)}${repeatableEditorHtml("상벌사항", "award", ["상벌구분", "상벌명", "발생일", "사유"], awardRows)}${repeatableEditorHtml("승급사항", "promotion", ["승급구분", "승급일", "소속부서", "직급", "직책", "비고"], promotionRows)}${repeatableEditorHtml("발령사항", "history", ["발령일", "비고"], historyRows)}${repeatableEditorHtml("교육사항", "training", ["교육명", "시작일", "종료일", "교육기관", "비고"], trainingRows)}</div>`;
    bindContractToggle("#editEmployeeType", "#editContractPeriod");
    bindRepeatableEditors(editModal.body);
  }
  function saveCreate() {
    const nextId = `EMP-${String(1000 + state.employees.length + 1).slice(1)}`;
    const employee = {
      id: nextId,
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
      companyEmail: $("#createCompanyEmail").value || `${normalizedNameToken($("#createName").value || "user")}.${nextId.toLowerCase()}@autoplus.co.kr`,
      personalEmail: $("#createPersonalEmail").value || `${normalizedNameToken($("#createName").value || "user")}@gmail.com`,
      address: $("#createAddress").value,
      education: $("#createEducation").value,
      status: "재직",
      careerMonths: $("#createCareerMonths").value,
      assignmentDate: $("#createAssignmentDate").value,
      memo: $("#createMemo").value,
      groupwareId: $("#createGroupwareId").value || `${nextId.toLowerCase()}.${($("#createName").value || "user").replace(/\s+/g, "")}`,
      residentNumber: $("#createResidentNumber").value || `${($("#createBirthDate").value || "1995.01.01").replace(/\./g, "").slice(2)}-1******`,
      maritalStatus: $("#createMaritalStatus").value,
      hireEmployeeType: $("#createHireEmployeeType").value || $("#createEmployeeType").value,
      hireJobFamily: $("#createHireFamily").value || $("#createFamily").value,
      history: [["2026.04.13", "신규 등록"]],
      educationHistory: [],
      educationItems: collectRepeatableRows(createModal.body, "createEducation", 4).map((row) => [row[1], `${row[0]} ${row[2]}`.trim()]),
      careerHistory: collectRepeatableRows(createModal.body, "createCareer", 4).map((row) => [row[1], row[2] || row[3] || ""]),
      familyItems: collectRepeatableRows(createModal.body, "createFamilyRows", 3),
      certificateItems: collectRepeatableRows(createModal.body, "createCertificate", 3).map((row) => ["자격증", row[0], row[1], row[2]]),
      awardItems: [],
      promotionItems: [["입사", $("#createHireDate").value || "2026.04.13", [$("#createHireHq").value || $("#createHq").value, $("#createHireOffice").value || $("#createOffice").value, $("#createHireTeam").value || $("#createTeam").value, $("#createHirePart").value || $("#createPart").value].filter(Boolean).join(" > "), $("#createHireGrade").value || $("#createGrade").value, $("#createTitle").value, "신규 입사"]]
    };
    if (!employee.history.length) employee.history = [["2026.04.13", "신규 등록"]];
    if (!employee.educationItems.length) employee.educationItems = [["2015.03 ~ 2019.02", $("#createEducation").value || "학력 정보 미입력"]];
    if (!employee.careerHistory.length) employee.careerHistory = [["2024.01 ~ 2026.03", "인정경력 산정 전 기본값"]];
    state.employees.unshift(employee);
    state.selectedId = employee.id;
    createModal.close();
    renderAll();
    showHrView("record");
  }
  function saveEdit() {
    const employee = selectedEmployee();
    employee.name = $("#editName").value;
    employee.groupwareId = $("#editGroupwareId").value.trim();
    employee.residentNumber = $("#editResidentNumber").value.trim();
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
    employee.birthDate = $("#editBirthDate").value;
    employee.hireDate = $("#editHireDate").value;
    employee.phone = $("#editPhone").value;
    employee.companyPhone = $("#editCompanyPhone").value.trim();
    employee.companyEmail = $("#editCompanyEmail").value.trim();
    employee.personalEmail = $("#editPersonalEmail").value.trim();
    employee.address = $("#editAddress").value.trim();
    employee.education = $("#editEducation").value;
    employee.status = $("#editStatus").value;
    employee.hireGrade = $("#editHireGrade").value;
    employee.hireEmployeeType = $("#editHireEmployeeType").value;
    employee.hireJobFamily = $("#editHireFamily").value;
    employee.hireHq = $("#editHireHq").value.trim();
    employee.hireOffice = $("#editHireOffice").value.trim();
    employee.hireTeam = $("#editHireTeam").value.trim();
    employee.hirePart = $("#editHirePart").value.trim();
    employee.careerMonths = $("#editCareerMonths").value;
    employee.assignmentDate = $("#editAssignmentDate").value;
    employee.educationItems = collectRepeatableRows(editModal.body, "education", 4).map((row) => [row[1], `${row[0]} ${row[2]}`.trim()]);
    employee.careerHistory = collectRepeatableRows(editModal.body, "career", 4).map((row) => [row[1], row[2] || row[3] || ""]);
    employee.familyItems = collectRepeatableRows(editModal.body, "family", 3);
    employee.certificateItems = collectRepeatableRows(editModal.body, "certificate", 3).map((row) => ["자격증", row[0], row[1], row[2]]);
    employee.awardItems = collectRepeatableRows(editModal.body, "award", 4);
    employee.promotionItems = collectRepeatableRows(editModal.body, "promotion", 6);
    employee.history = collectRepeatableRows(editModal.body, "history", 2);
    employee.educationHistory = collectRepeatableRows(editModal.body, "training", 5).map((row) => [row[1], row[0]]);
    employee.memo = $("#editMemo").value;
    employee.history.unshift(["2026.04.13", "인사기록카드 수정"]);
    editModal.close();
    renderAll();
    state.currentRecordTab = "overview";
    showHrView("record");
  }
  createModal.save.addEventListener("click", saveCreate);
  editModal.save.addEventListener("click", saveEdit);
  function setPageTitle(title, description) { $("h2", refs.pageTitle).textContent = title; $("p", refs.pageTitle).textContent = description; }
  function updatePrimaryAction(view) {
    const primaryButton = refs.pagePrimaryButton;
    const secondaryButton = refs.pageSecondaryButton;
    if (!primaryButton) return;
    if (view === "directory") {
      primaryButton.textContent = "➕ 신규 등록";
      primaryButton.style.display = "inline-flex";
      if (secondaryButton) {
        secondaryButton.textContent = "📤 Excel 내보내기";
        secondaryButton.style.display = "inline-flex";
      }
    } else if (view === "assignment") {
      primaryButton.style.display = "none";
      if (secondaryButton) secondaryButton.style.display = "none";
    } else if (view === "quick") {
      primaryButton.textContent = "인사기록카드 보기";
      primaryButton.style.display = "inline-flex";
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
  }
  function toggleBaseSections(directory, record, org) {
    refs.searchBar.style.display = directory ? "block" : "none";
    refs.stats.style.display = directory ? "grid" : "none";
    refs.tableWrap.style.display = directory ? "block" : "none";
    refs.orgWrap.style.display = org ? "block" : "none";
    refs.cardWrap.style.display = record ? "grid" : "none";
    if (panels.codes) panels.codes.classList.toggle("codex-hidden", state.currentHrView !== "codes");
    if (panels.assignment) panels.assignment.classList.toggle("codex-hidden", state.currentHrView !== "assignment");
  }
  function showHrView(view) {
    state.currentHrView = view;
    setMenus(view);
    if (view === "directory") { setPageTitle("사원명부", "전체 사원 정보를 조회하고 관리합니다"); toggleBaseSections(true, false, false); }
    else if (view === "record") { setPageTitle("인사기록카드", "선택한 사원의 상세 인사정보와 발령이력을 조회합니다"); toggleBaseSections(false, true, false); renderRecord(); }
    else if (view === "quick") { setPageTitle("사원 기본정보", "별도 탭에서 기본 인사정보만 빠르게 조회합니다"); toggleBaseSections(false, true, false); renderQuickRecord(); }
    else if (view === "org") { setPageTitle("조직도", "사원 배정 정보 기반으로 조직 구성을 조회합니다"); toggleBaseSections(false, false, true); }
    else if (view === "codes") { setPageTitle("코드관리", "조직코드와 기준코드를 조회하는 화면입니다"); toggleBaseSections(false, false, false); }
    else if (view === "assignment") { setPageTitle("조직 관리", "조직개편 및 인사발령을 단계별로 편집하고 이력을 관리합니다"); toggleBaseSections(false, false, false); }
    syncViewQuery(view);
    updatePrimaryAction(view);
    renderNotesByView();
  }
  function renderAll() { renderDirectorySearchBar(); renderStats(); renderTable(); renderOrg(); renderRecord(); renderCodes(); renderAssignment(); }
  function bindCoreActions() {
    refs.topItems[0]?.addEventListener("click", () => showHrView("directory"));
    refs.topItems[1]?.addEventListener("click", () => showHrView("record"));
    refs.topItems[2]?.addEventListener("click", () => showHrView("org"));
    refs.sideItems[0]?.addEventListener("click", () => showHrView("directory"));
    refs.sideItems[1]?.addEventListener("click", () => showHrView("record"));
    refs.sideItems[2]?.addEventListener("click", () => showHrView("org"));
    document.addEventListener("click", (event) => { const detail = event.target.closest('[data-action="detail"]'); if (detail) { event.preventDefault(); const row = detail.closest("tr"); const id = row?.dataset.employeeId; if (id) { state.selectedId = id; state.currentRecordTab = "overview"; renderRecord(); showHrView("record"); } } });
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
    const recordEditButton = document.createElement("button");
    recordEditButton.className = "hr-btn btn-outline codex-hidden";
    recordEditButton.textContent = "✎ 기록카드 수정";
    $(".hr-page-title > div:last-child", refs.hrSystem)?.prepend(recordEditButton);
    const observer = new MutationObserver(() => { recordEditButton.classList.toggle("codex-hidden", state.currentHrView !== "record"); });
    observer.observe(refs.pageTitle, { childList: true, subtree: true });
    recordEditButton.addEventListener("click", () => { fillEditForm(); editModal.open(); });
    $$(".hr-stat-card", refs.stats).forEach((card) => {
      card.addEventListener("click", () => {
        if (card.dataset.statType === "leave") openStatModal("leave");
        if (card.dataset.statType === "hire") openStatModal("hire");
      });
    });
    primaryButton?.addEventListener("click", (event) => {
      if (state.currentHrView === "directory") { event.preventDefault(); fillCreateForm(); createModal.open(); }
      else if (state.currentHrView === "assignment") { event.preventDefault(); $("#assignApplyBtn")?.click(); }
      else if (state.currentHrView === "quick") { event.preventDefault(); showHrView("record"); }
    }, true);
  }
  function renderNotesByView() {
    if (typeof annotations === "undefined" || !refs.annoList || state.currentSystem !== 1) return;
    const map = { directory: ["topbar", "sidebar", "searchbar", "stats", "emptable", "pagetitle"], record: ["topbar", "sidebar", "pagetitle", "hrcard"], org: ["topbar", "sidebar", "pagetitle", "orgchart"], codes: ["topbar", "sidebar", "pagetitle"], assignment: ["topbar", "sidebar", "pagetitle"] };
    const base = (annotations[1] || []).filter((item) => map[state.currentHrView].includes(item.region));
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
          desc: "조직개편 이후 조직 기준으로 구성원을 조회하고 부서이동, 소속제외, 조직장 임명, 직위변경을 입력한다.",
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
  if (viewFromUrl === "record") showHrView("record");
  else if (viewFromUrl === "quick") showHrView("quick");
  else showHrView("directory");
  const tab1 = $("#tab1");
  const tab2 = $("#tab2");
  tab1?.addEventListener("click", () => { state.currentSystem = 1; renderNotesByView(); }, true);
  tab2?.addEventListener("click", () => { state.currentSystem = 2; }, true);
})();
