(function () {
  const employeeSeed = [
    { id: "EMP-0024", name: "김지원", hq: "경영관리본부", office: "경영지원실", team: "인사팀", part: "", grade: "대리", hireGrade: "사원", title: "팀장", jobFamily: "관리", employeeType: "정규직", contractPeriod: "", birthDate: "1992.05.14", hireDate: "2021.03.02", phone: "010-4521-7788", education: "한양대학교 컴퓨터공학과", status: "재직", careerMonths: "24", assignmentDate: "2024.01.01", memo: "인사기획 및 제도 운영 담당", history: [["2024.01.01", "인사팀 대리 승진"], ["2022.07.01", "경영기획팀 → 인사팀 이동"], ["2021.03.02", "입사 (인사팀 사원)"]], educationHistory: [["2023.08", "인사관리 실무교육 이수"], ["2022.03", "직무교육 이수 (40h)"]] },
    { id: "EMP-0031", name: "이승훈", hq: "영업본부", office: "영업본부 직속", team: "김포지점", part: "김포지점 판매파트", grade: "과장", hireGrade: "대리", title: "지점장", jobFamily: "영업(판매)", employeeType: "정규직", contractPeriod: "", birthDate: "1988.09.10", hireDate: "2018.07.15", phone: "010-2213-8932", education: "국민대학교 경영학과", status: "재직", careerMonths: "48", assignmentDate: "2023.03.01", memo: "김포지점 판매 운영 총괄", history: [["2023.03.01", "김포지점 판매파트 배치"], ["2021.01.01", "광주지점 → 김포지점 이동"], ["2018.07.15", "입사 (영업본부)"]], educationHistory: [["2024.01", "영업관리 리더십 과정"], ["2022.09", "성과평가 과정 이수"]] },
    { id: "EMP-0045", name: "박민서", hq: "경영관리본부", office: "디지털사업실", team: "서비스기획팀", part: "UX파트", grade: "사원", hireGrade: "사원", title: "파트장", jobFamily: "관리(성과)", employeeType: "계약직", contractPeriod: "2026.01.01 ~ 2026.12.31", birthDate: "1997.11.21", hireDate: "2023.01.09", phone: "010-7211-4452", education: "서울여자대학교 시각디자인과", status: "휴직", careerMonths: "8", assignmentDate: "2024.06.01", memo: "서비스 UX 개선 프로젝트 참여", history: [["2024.06.01", "UX파트 배치"], ["2023.01.09", "입사 (서비스기획팀)"]], educationHistory: [["2024.02", "UX 리서치 교육"], ["2023.10", "서비스기획 워크숍"]] },
    { id: "EMP-0012", name: "최현우", hq: "서비스본부", office: "오토케어사업실", team: "신차물류팀", part: "용인물류", grade: "차장", hireGrade: "과장", title: "팀장", jobFamily: "물류", employeeType: "정규직", contractPeriod: "", birthDate: "1985.01.03", hireDate: "2015.04.20", phone: "010-8121-1189", education: "인하대학교 물류학과", status: "재직", careerMonths: "60", assignmentDate: "2022.02.01", memo: "수도권 물류센터 운영 담당", history: [["2022.02.01", "용인물류 배치"], ["2019.01.01", "탁송팀 → 신차물류팀 이동"], ["2015.04.20", "입사 (오토케어사업실)"]], educationHistory: [["2023.11", "물류관리사"], ["2021.06", "현장안전교육 이수"]] },
    { id: "EMP-0067", name: "정다은", hq: "BPO사업본부", office: "금융사업실", team: "반납운영팀", part: "", grade: "사원", hireGrade: "사원", title: "팀장", jobFamily: "관리", employeeType: "정규직", contractPeriod: "", birthDate: "1999.07.09", hireDate: "2024.02.26", phone: "010-9831-6721", education: "경희대학교 경제학과", status: "재직", careerMonths: "3", assignmentDate: "2024.02.26", memo: "반납 프로세스 운영 지원", history: [["2024.02.26", "입사 (반납운영팀)"]], educationHistory: [["2024.03", "금융상품 운영교육"]] }
  ];
  const gradeCodes = ["사장", "부사장", "전무이사", "상무이사", "이사", "부장", "차장", "과장", "대리", "사원"];
  const titleCodes = ["대표이사", "본부장", "실장", "센터장", "팀장", "파트장", "지점장"];
  const familyCodes = ["임원", "관리", "관리(성과)", "물류", "정비", "별정", "영업(판매)", "영업(매입)", "순회"];
  const employeeTypes = ["정규직", "계약직", "임원"];
  const levelDefs = [
    { id: "L1", name: "본부", parent: "-", desc: "최상위 조직 단위" },
    { id: "L2", name: "실", parent: "L1", desc: "본부 하위 실 단위" },
    { id: "L3", name: "팀", parent: "L2", desc: "실 하위 팀 단위" },
    { id: "L4", name: "파트", parent: "L3", desc: "팀 하위 파트 단위" }
  ];
  const state = { employees: employeeSeed.map((employee) => ({ ...employee })), selectedId: "EMP-0024", currentHrView: "directory", currentSystem: 1, currentCodeView: "overview", currentCodeSelection: "", currentLevelSelection: "L1", currentMetaSelection: "grade", currentOrgNode: "ROOT", orgIncludeChildren: true, orgSearch: "" };
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const refs = { hrSystem: $("#hrSystem"), evalSystem: $("#evalSystem"), pageTitle: $(".hr-page-title"), searchBar: $('[data-region="searchbar"]'), stats: $('[data-region="stats"]'), tableWrap: $('[data-region="emptable"]'), orgWrap: $("#orgChartWrap"), cardWrap: $("#hrCardGrid"), hrContent: $(".hr-content"), hrSidebar: $(".hr-sidebar"), topItems: $$(".hr-top-item"), sideItems: $$(".hr-sidebar-item"), annoList: $("#annoList") };
  if (!refs.hrSystem || !refs.tableWrap || !refs.cardWrap) return;
  const panels = {};
  function employeePath(employee) { return [employee.hq, employee.office, employee.team, employee.part].filter(Boolean).join(" > "); }
  function deepestDept(employee) { return employee.part || employee.team || employee.office || employee.hq; }
  function selectedEmployee() { return state.employees.find((employee) => employee.id === state.selectedId) || state.employees[0]; }
  function statusBadge(status) { return `<span class="status-badge ${status === "재직" ? "status-active" : "status-leave"}">${status}</span>`; }
  function getOrgSummary() {
    const map = new Map();
    state.employees.forEach((employee) => {
      const entries = [
        { level: "L1", name: employee.hq || "", hq: employee.hq || "", office: "", team: "", part: "", parent: "오토플러스" },
        { level: "L2", name: employee.office || "", hq: employee.hq || "", office: employee.office || "", team: "", part: "", parent: employee.hq || "오토플러스" },
        { level: "L3", name: employee.team || "", hq: employee.hq || "", office: employee.office || "", team: employee.team || "", part: "", parent: employee.office || employee.hq || "오토플러스" },
        { level: "L4", name: employee.part || "", hq: employee.hq || "", office: employee.office || "", team: employee.team || "", part: employee.part || "", parent: employee.team || employee.office || employee.hq || "오토플러스" }
      ].filter((item) => item.name);
      entries.forEach((entry) => {
        const key = [entry.level, entry.hq, entry.office, entry.team, entry.part].join("|");
        if (!map.has(key)) {
          map.set(key, { ...entry, key, count: 0 });
        }
        map.get(key).count += 1;
      });
    });
    return Array.from(map.values()).sort((a, b) => a.key.localeCompare(b.key, "ko"));
  }
  function getEmployeeNodeKey(employee) {
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
    state.employees.forEach((employee) => {
      let parent = root;
      if (employee.hq) parent = ensureNode(parent, ["L1", employee.hq, "", "", ""].join("|"), employee.hq, "L1");
      if (employee.office) parent = ensureNode(parent, ["L2", employee.hq, employee.office, "", ""].join("|"), employee.office, "L2");
      if (employee.team) parent = ensureNode(parent, ["L3", employee.hq, employee.office, employee.team, ""].join("|"), employee.team, "L3");
      if (employee.part) parent = ensureNode(parent, ["L4", employee.hq, employee.office, employee.team, employee.part].join("|"), employee.part, "L4");
      nodeMap.get(getEmployeeNodeKey(employee))?.members.push(employee);
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
        return `<div class="codex-org-section"><div class="codex-org-section-head"><div><div class="codex-org-section-title">${node.label} <span>${members.length}</span></div><div class="codex-org-section-path">${node.path.join(" > ")}</div></div></div><div class="codex-org-card-grid">${members.map((employee) => `<div class="codex-org-employee"><div class="codex-org-avatar">${employee.name[0]}</div><div class="codex-org-emp-name">${employee.name}</div><div class="codex-org-emp-meta">${employee.grade}</div><div class="codex-org-emp-meta">${employee.title}</div></div>`).join("")}</div></div>`;
      })
      .filter(Boolean)
      .join("");
    const renderTreeNode = (node) => {
      const selectedClass = node.key === state.currentOrgNode ? " selected" : "";
      return `<div class="codex-org-tree-node level-${node.level.toLowerCase()}${selectedClass}"><button type="button" class="codex-org-tree-btn" data-org-node="${node.key}"><span class="codex-org-tree-toggle">${node.children.length ? "⊕" : "•"}</span><span class="codex-org-tree-label">${node.label}</span></button>${node.children.length ? `<div class="codex-org-tree-children">${node.children.map(renderTreeNode).join("")}</div>` : ""}</div>`;
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
    const values = [state.employees.length, state.employees.filter((employee) => employee.status === "재직").length, state.employees.filter((employee) => employee.status !== "재직").length, state.employees.filter((employee) => employee.hireDate >= "2024.01.01").length];
    $$(".hr-stat-value", refs.stats).forEach((node, index) => { if (values[index] !== undefined) node.textContent = String(values[index]); });
  }
  function renderTable() {
    const tbody = $("tbody", refs.tableWrap);
    tbody.innerHTML = state.employees.map((employee) => `<tr data-employee-id="${employee.id}"><td><input type="checkbox"></td><td style="font-family:'IBM Plex Mono',monospace;font-size:11px;color:#9095b0">${employee.id}</td><td><span class="emp-name">${employee.name}</span></td><td>${deepestDept(employee)}</td><td>${employee.grade}</td><td>${employee.hireDate}</td><td>${statusBadge(employee.status)}</td><td><a href="#" data-action="detail" style="font-size:11px;color:#4f8ef7;text-decoration:none">상세보기</a></td></tr>`).join("");
    $(".hr-table-header div", refs.tableWrap).textContent = `총 ${state.employees.length}명 · 1-${state.employees.length} 표시`;
  }
  function renderOrg() {
    if (state.currentOrgNode === "ROOT") {
      state.currentOrgNode = getEmployeeNodeKey(selectedEmployee());
    }
    refs.orgWrap.innerHTML = renderOrgBoard();
    $$("[data-org-node]", refs.orgWrap).forEach((button) => {
      button.addEventListener("click", () => {
        state.currentOrgNode = button.dataset.orgNode;
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
  }
  function uniqueValues(items) {
    return Array.from(new Set(items.filter(Boolean)));
  }
  function getOrgOptions(level, filters = {}) {
    const employees = state.employees.filter((employee) => {
      if (filters.hq && employee.hq !== filters.hq) return false;
      if (filters.office && employee.office !== filters.office) return false;
      if (filters.team && employee.team !== filters.team) return false;
      return true;
    });
    if (level === "hq") return uniqueValues(employees.map((employee) => employee.hq));
    if (level === "office") return uniqueValues(employees.map((employee) => employee.office));
    if (level === "team") return uniqueValues(employees.map((employee) => employee.team));
    return uniqueValues(employees.map((employee) => employee.part));
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
  function renderRecord() {
    const employee = selectedEmployee();
    refs.cardWrap.innerHTML = `<div class="codex-record-shell"><div class="codex-record-summary"><div class="codex-record-card"><div class="codex-record-head"><div class="hr-profile-avatar">${employee.name[0]}</div><div class="hr-card-name">${employee.name}</div><div class="codex-record-subtitle">${employee.id} · ${employee.grade} · ${employee.title}</div><div class="codex-record-subtitle">${employeePath(employee)}</div></div><div class="codex-record-block"><h5>기본 정보</h5><div class="codex-record-list"><div class="codex-record-item"><div class="label">생년월일</div><div class="value">${employee.birthDate}</div></div><div class="codex-record-item"><div class="label">입사일</div><div class="value">${employee.hireDate}</div></div><div class="codex-record-item"><div class="label">연락처</div><div class="value">${employee.phone}</div></div><div class="codex-record-item"><div class="label">최종학력</div><div class="value">${employee.education}</div></div></div></div><div class="codex-record-block"><h5>조직 정보</h5><div class="codex-record-list"><div class="codex-record-item"><div class="label">본부</div><div class="value">${employee.hq || "-"}</div></div><div class="codex-record-item"><div class="label">실</div><div class="value">${employee.office || "-"}</div></div><div class="codex-record-item"><div class="label">팀</div><div class="value">${employee.team || "-"}</div></div><div class="codex-record-item"><div class="label">파트</div><div class="value">${employee.part || "-"}</div></div></div></div><div class="codex-record-block"><h5>인사 속성</h5><div class="codex-record-list"><div class="codex-record-item"><div class="label">직군</div><div class="value">${employee.jobFamily}</div></div><div class="codex-record-item"><div class="label">직원유형</div><div class="value">${employee.employeeType}</div></div><div class="codex-record-item"><div class="label">재직상태</div><div class="value">${statusBadge(employee.status)}</div></div><div class="codex-record-item"><div class="label">계약기간</div><div class="value">${employee.employeeType === "계약직" ? employee.contractPeriod || "-" : "-"}</div></div></div></div></div><div class="codex-record-detail"><div class="codex-record-section"><h4>인사기본정보</h4><div class="codex-record-grid"><div class="codex-record-field"><span class="label">사원번호</span><span class="value">${employee.id}</span></div><div class="codex-record-field"><span class="label">직급</span><span class="value">${employee.grade}</span></div><div class="codex-record-field"><span class="label">직책</span><span class="value">${employee.title}</span></div><div class="codex-record-field"><span class="label">입사시 직급</span><span class="value">${employee.hireGrade}</span></div><div class="codex-record-field"><span class="label">인정경력</span><span class="value">${employee.careerMonths}개월</span></div><div class="codex-record-field"><span class="label">부서배정일</span><span class="value">${employee.assignmentDate}</span></div></div></div><div class="codex-record-section"><h4>발령이력</h4><div class="hr-timeline">${employee.history.map((item, index) => `<div class="hr-timeline-item"><div class="hr-timeline-dot" style="${index === 1 ? "background:#7c5cfc" : index === 2 ? "background:#38d9a9" : ""}"></div><div class="hr-timeline-date">${item[0]}</div><div class="hr-timeline-text">${item[1]}</div></div>`).join("")}</div></div><div class="codex-record-section"><h4>자격/교육이력</h4><div class="hr-timeline">${employee.educationHistory.map((item) => `<div class="hr-timeline-item"><div class="hr-timeline-dot" style="background:#f5a623"></div><div class="hr-timeline-date">${item[0]}</div><div class="hr-timeline-text">${item[1]}</div></div>`).join("")}</div></div><div class="codex-record-section"><h4>인사 메모</h4><div class="codex-record-note">${employee.memo}</div></div></div></div>`;
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
  function renderAssignment() {
    const employee = selectedEmployee();
    const hqOptions = getOrgOptions("hq");
    panels.assignment.innerHTML = `<div class="hr-table-header" style="padding:0 0 14px;border-bottom:1px solid #eef2f7"><h3>발령입력</h3><div style="font-size:11px;color:#9095b0">대상자 선택 → 변경내용 검토 → 발령 반영</div></div><div class="codex-grid-2" style="margin-top:16px"><div class="codex-stack"><div class="codex-panel"><h4 style="font-size:13px;color:#1e3a5f;margin-bottom:12px">발령 기본정보</h4><div class="codex-form-grid" id="codexAssignmentForm"><label><span>대상자</span><select id="assignEmployee">${state.employees.map((item) => `<option value="${item.id}" ${item.id === employee.id ? "selected" : ""}>${item.name} (${item.id})</option>`).join("")}</select></label><label><span>발령유형</span><select id="assignType"><option>조직이동</option><option>승진</option><option>직무변경</option><option>휴직전환</option></select></label><label class="span-2"><span>현재 조직</span><input id="assignCurrentDept" value="${employeePath(employee)}" readonly></label><label><span>현재 직급</span><input id="assignCurrentGrade" value="${employee.grade}" readonly></label><label><span>현재 재직상태</span><input id="assignCurrentStatus" value="${employee.status}" readonly></label></div></div><div class="codex-panel"><h4 style="font-size:13px;color:#1e3a5f;margin-bottom:12px">변경 내용 입력</h4><div class="codex-form-grid"><label><span>변경 본부</span><select id="assignNextHq">${hqOptions.map((item) => `<option value="${item}" ${item === employee.hq ? "selected" : ""}>${item}</option>`).join("")}</select></label><label><span>변경 실</span><select id="assignNextOffice"></select></label><label><span>변경 팀</span><select id="assignNextTeam"></select></label><label><span>변경 파트</span><select id="assignNextPart"></select></label><label><span>변경 직급</span><select id="assignNextGrade">${gradeCodes.map((item) => `<option value="${item}" ${item === employee.grade ? "selected" : ""}>${item}</option>`).join("")}</select></label><label><span>변경 직책</span><select id="assignNextTitle">${titleCodes.map((item) => `<option value="${item}" ${item === employee.title ? "selected" : ""}>${item}</option>`).join("")}</select></label><label><span>재직상태</span><select id="assignStatus"><option ${employee.status === "재직" ? "selected" : ""}>재직</option><option ${employee.status === "휴직" ? "selected" : ""}>휴직</option></select></label><label><span>발령일</span><input id="assignDate" value="2026.04.14"></label><label class="span-2"><span>발령사유</span><input id="assignReason" value="조직 운영상 이동"></label></div><div class="codex-modal-actions"><button type="button" class="hr-btn btn-outline" id="assignPreviewBtn">미리보기</button><button type="button" class="hr-btn btn-primary" id="assignApplyBtn">발령 반영</button></div></div></div><div class="codex-stack"><div class="codex-panel"><h4 style="font-size:13px;color:#1e3a5f;margin-bottom:12px">발령 반영 미리보기</h4><div id="assignPreviewBox"></div></div><div class="codex-panel"><h4 style="font-size:13px;color:#1e3a5f;margin-bottom:12px">개발 포인트</h4><div class="codex-note-box"><strong>연동 범위</strong>발령 반영 시 사원명부, 인사기록카드, 조직도, 평가대상 기준이 함께 갱신되어야 합니다.</div><div class="codex-note-box"><strong>검증 규칙</strong>조직 변경 시 본부-실-팀-파트 위계 검증과 직급/직책 코드 유효성 검사가 필요합니다.</div></div></div></div>`;
    syncAssignmentOrgFields(employee);
    bindAssignment();
    renderAssignmentPreview();
  }
  function renderAssignmentPreview() {
    const employee = state.employees.find((item) => item.id === $("#assignEmployee")?.value) || selectedEmployee();
    const nextDept = [$("#assignNextHq")?.value, $("#assignNextOffice")?.value, $("#assignNextTeam")?.value, $("#assignNextPart")?.value].filter(Boolean).join(" > ");
    const nextGrade = $("#assignNextGrade")?.value || employee.grade;
    const nextTitle = $("#assignNextTitle")?.value || employee.title;
    const nextStatus = $("#assignStatus")?.value || employee.status;
    const reason = $("#assignReason")?.value || "조직 운영상 이동";
    const assignDate = $("#assignDate")?.value || "2026.04.14";
    $("#assignPreviewBox").innerHTML = `<div class="codex-note-box"><strong>대상자</strong>${employee.name} (${employee.id})</div><div class="codex-note-box"><strong>변경 전</strong>${employeePath(employee)} / ${employee.grade} / ${employee.title} / ${employee.status}</div><div class="codex-note-box"><strong>변경 후</strong>${nextDept} / ${nextGrade} / ${nextTitle} / ${nextStatus}</div><div class="codex-note-box"><strong>발령일 / 사유</strong>${assignDate} / ${reason}</div>`;
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
    $("#assignEmployee")?.addEventListener("change", () => { state.selectedId = $("#assignEmployee").value; renderAssignment(); });
    $("#assignNextHq")?.addEventListener("change", () => { syncAssignmentOrgFields(selectedEmployee()); renderAssignmentPreview(); });
    $("#assignNextOffice")?.addEventListener("change", () => { syncAssignmentOrgFields(selectedEmployee()); renderAssignmentPreview(); });
    $("#assignNextTeam")?.addEventListener("change", () => { syncAssignmentOrgFields(selectedEmployee()); renderAssignmentPreview(); });
    ["#assignNextPart", "#assignNextGrade", "#assignNextTitle", "#assignStatus", "#assignReason", "#assignDate"].forEach((selector) => { $(selector)?.addEventListener("input", renderAssignmentPreview); $(selector)?.addEventListener("change", renderAssignmentPreview); });
    $("#assignPreviewBtn")?.addEventListener("click", renderAssignmentPreview);
    $("#assignApplyBtn")?.addEventListener("click", () => { const employee = selectedEmployee(); employee.hq = $("#assignNextHq").value || employee.hq; employee.office = $("#assignNextOffice").value || ""; employee.team = $("#assignNextTeam").value || ""; employee.part = $("#assignNextPart").value || ""; employee.grade = $("#assignNextGrade").value; employee.title = $("#assignNextTitle").value; employee.status = $("#assignStatus").value; employee.assignmentDate = $("#assignDate").value || "2026.04.14"; employee.history.unshift([employee.assignmentDate, `${$("#assignType").value} 반영 - ${$("#assignReason").value}`]); renderAll(); showHrView("org"); });
  }
  function fillCreateForm() {
    createModal.body.innerHTML = `<div class="codex-form-grid"><label><span>사원명</span><input id="createName"></label><label><span>직원유형</span><select id="createEmployeeType">${employeeTypes.map((item) => `<option value="${item}">${item}</option>`).join("")}</select></label><label><span>본부</span><input id="createHq" value="경영관리본부"></label><label><span>실</span><input id="createOffice" value="경영지원실"></label><label><span>팀</span><input id="createTeam" value="인사팀"></label><label><span>파트</span><input id="createPart"></label><label><span>직급</span><select id="createGrade">${gradeCodes.map((item) => `<option value="${item}">${item}</option>`).join("")}</select></label><label><span>직책</span><select id="createTitle">${titleCodes.map((item) => `<option value="${item}">${item}</option>`).join("")}</select></label><label><span>직군</span><select id="createFamily">${familyCodes.map((item) => `<option value="${item}">${item}</option>`).join("")}</select></label><label><span>입사일</span><input id="createHireDate" value="2026.04.13"></label><label><span>생년월일</span><input id="createBirthDate" value="1995.01.01"></label><label><span>연락처</span><input id="createPhone" value="010-0000-0000"></label><label><span>최종학력</span><input id="createEducation" value="미입력"></label><label><span>입사시 직급</span><select id="createHireGrade">${gradeCodes.map((item) => `<option value="${item}">${item}</option>`).join("")}</select></label><label><span>계약기간</span><input id="createContractPeriod" placeholder="계약직인 경우 입력"></label><label><span>인정경력(개월)</span><input id="createCareerMonths" value="0"></label><label><span>부서배정일</span><input id="createAssignmentDate" value="2026.04.13"></label><label class="span-2"><span>인사 메모</span><textarea id="createMemo" rows="3">신규 등록 사원</textarea></label></div>`;
    bindContractToggle("#createEmployeeType", "#createContractPeriod");
  }
  function fillEditForm() {
    const employee = selectedEmployee();
    editModal.body.innerHTML = `<div class="codex-form-grid"><label><span>사원번호</span><input value="${employee.id}" readonly></label><label><span>사원명</span><input id="editName" value="${employee.name}"></label><label><span>본부</span><input id="editHq" value="${employee.hq || ""}"></label><label><span>실</span><input id="editOffice" value="${employee.office || ""}"></label><label><span>팀</span><input id="editTeam" value="${employee.team || ""}"></label><label><span>파트</span><input id="editPart" value="${employee.part || ""}"></label><label><span>직급</span><select id="editGrade">${gradeCodes.map((item) => `<option value="${item}" ${item === employee.grade ? "selected" : ""}>${item}</option>`).join("")}</select></label><label><span>직책</span><select id="editTitle">${titleCodes.map((item) => `<option value="${item}" ${item === employee.title ? "selected" : ""}>${item}</option>`).join("")}</select></label><label><span>직군</span><select id="editFamily">${familyCodes.map((item) => `<option value="${item}" ${item === employee.jobFamily ? "selected" : ""}>${item}</option>`).join("")}</select></label><label><span>직원유형</span><select id="editEmployeeType">${employeeTypes.map((item) => `<option value="${item}" ${item === employee.employeeType ? "selected" : ""}>${item}</option>`).join("")}</select></label><label><span>계약기간</span><input id="editContractPeriod" value="${employee.contractPeriod}"></label><label><span>생년월일</span><input id="editBirthDate" value="${employee.birthDate}"></label><label><span>입사일</span><input id="editHireDate" value="${employee.hireDate}"></label><label><span>연락처</span><input id="editPhone" value="${employee.phone}"></label><label><span>최종학력</span><input id="editEducation" value="${employee.education}"></label><label><span>재직상태</span><select id="editStatus"><option ${employee.status === "재직" ? "selected" : ""}>재직</option><option ${employee.status === "휴직" ? "selected" : ""}>휴직</option></select></label><label><span>입사시 직급</span><select id="editHireGrade">${gradeCodes.map((item) => `<option value="${item}" ${item === employee.hireGrade ? "selected" : ""}>${item}</option>`).join("")}</select></label><label><span>인정경력(개월)</span><input id="editCareerMonths" value="${employee.careerMonths}"></label><label><span>부서배정일</span><input id="editAssignmentDate" value="${employee.assignmentDate}"></label><label class="span-2"><span>인사 메모</span><textarea id="editMemo" rows="3">${employee.memo}</textarea></label></div>`;
    bindContractToggle("#editEmployeeType", "#editContractPeriod");
  }
  function saveCreate() {
    const nextId = `EMP-${String(1000 + state.employees.length + 1).slice(1)}`;
    const employee = { id: nextId, name: $("#createName").value || "신규사원", hq: $("#createHq").value, office: $("#createOffice").value, team: $("#createTeam").value, part: $("#createPart").value, grade: $("#createGrade").value, hireGrade: $("#createHireGrade").value, title: $("#createTitle").value, jobFamily: $("#createFamily").value, employeeType: $("#createEmployeeType").value, contractPeriod: $("#createContractPeriod").value, birthDate: $("#createBirthDate").value, hireDate: $("#createHireDate").value, phone: $("#createPhone").value, education: $("#createEducation").value, status: "재직", careerMonths: $("#createCareerMonths").value, assignmentDate: $("#createAssignmentDate").value, memo: $("#createMemo").value, history: [["2026.04.13", "신규 등록"]], educationHistory: [["2026.04", "초기 데이터 생성"]] };
    state.employees.unshift(employee);
    state.selectedId = employee.id;
    createModal.close();
    renderAll();
    showHrView("record");
  }
  function saveEdit() {
    const employee = selectedEmployee();
    employee.name = $("#editName").value;
    employee.hq = $("#editHq").value.trim();
    employee.office = $("#editOffice").value.trim();
    employee.team = $("#editTeam").value.trim();
    employee.part = $("#editPart").value.trim();
    employee.grade = $("#editGrade").value;
    employee.title = $("#editTitle").value;
    employee.jobFamily = $("#editFamily").value;
    employee.employeeType = $("#editEmployeeType").value;
    employee.contractPeriod = employee.employeeType === "계약직" ? $("#editContractPeriod").value : "";
    employee.birthDate = $("#editBirthDate").value;
    employee.hireDate = $("#editHireDate").value;
    employee.phone = $("#editPhone").value;
    employee.education = $("#editEducation").value;
    employee.status = $("#editStatus").value;
    employee.hireGrade = $("#editHireGrade").value;
    employee.careerMonths = $("#editCareerMonths").value;
    employee.assignmentDate = $("#editAssignmentDate").value;
    employee.memo = $("#editMemo").value;
    employee.history.unshift(["2026.04.13", "인사기록카드 수정"]);
    editModal.close();
    renderAll();
    showHrView("record");
  }
  createModal.save.addEventListener("click", saveCreate);
  editModal.save.addEventListener("click", saveEdit);
  function setPageTitle(title, description) { $("h2", refs.pageTitle).textContent = title; $("p", refs.pageTitle).textContent = description; }
  function setMenus(view) {
    refs.topItems.forEach((item, index) => item.classList.toggle("active", (view === "directory" && index === 0) || (view === "record" && index === 1) || (view === "org" && index === 2) || (view === "assignment" && index === 3)));
    refs.sideItems.forEach((item, index) => { const active = (view === "directory" && index === 0) || (view === "record" && index === 1) || (view === "org" && index === 2) || (view === "assignment" && index === 3); item.classList.toggle("active", active); });
    panels.codeMenu?.classList.toggle("active", view === "codes");
  }
  function toggleBaseSections(directory, record, org) {
    refs.searchBar.style.display = directory ? "flex" : "none";
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
    else if (view === "record") { setPageTitle("인사기록카드", "선택한 사원의 상세 인사정보와 발령이력을 조회합니다"); toggleBaseSections(false, true, false); }
    else if (view === "org") { setPageTitle("조직도", "사원 배정 정보 기반으로 조직 구성을 조회합니다"); toggleBaseSections(false, false, true); }
    else if (view === "codes") { setPageTitle("코드관리", "조직코드와 기준코드를 조회하는 화면입니다"); toggleBaseSections(false, false, false); }
    else if (view === "assignment") { setPageTitle("발령입력", "대상자별 조직/직급 변경을 미리 확인하고 반영합니다"); toggleBaseSections(false, false, false); }
    renderNotesByView();
  }
  function renderAll() { renderStats(); renderTable(); renderOrg(); renderRecord(); renderCodes(); renderAssignment(); }
  function bindCoreActions() {
    refs.topItems[0]?.addEventListener("click", () => showHrView("directory"));
    refs.topItems[1]?.addEventListener("click", () => showHrView("record"));
    refs.topItems[2]?.addEventListener("click", () => showHrView("org"));
    refs.sideItems[0]?.addEventListener("click", () => showHrView("directory"));
    refs.sideItems[1]?.addEventListener("click", () => showHrView("record"));
    refs.sideItems[2]?.addEventListener("click", () => showHrView("org"));
    document.addEventListener("click", (event) => { const detail = event.target.closest('[data-action="detail"]'); if (detail) { event.preventDefault(); const row = detail.closest("tr"); const id = row?.dataset.employeeId; if (id) { state.selectedId = id; renderRecord(); showHrView("record"); } } });
    const primaryButton = $(".btn-primary", refs.pageTitle);
    const recordEditButton = document.createElement("button");
    recordEditButton.className = "hr-btn btn-outline codex-hidden";
    recordEditButton.textContent = "✎ 기록카드 수정";
    $(".hr-page-title > div:last-child", refs.hrSystem)?.prepend(recordEditButton);
    const observer = new MutationObserver(() => { recordEditButton.classList.toggle("codex-hidden", state.currentHrView !== "record"); });
    observer.observe(refs.pageTitle, { childList: true, subtree: true });
    recordEditButton.addEventListener("click", () => { fillEditForm(); editModal.open(); });
    primaryButton?.addEventListener("click", (event) => { if (state.currentHrView === "directory") { event.preventDefault(); fillCreateForm(); createModal.open(); } else if (state.currentHrView === "assignment") { event.preventDefault(); $("#assignApplyBtn")?.click(); } }, true);
  }
  function renderNotesByView() {
    if (typeof annotations === "undefined" || !refs.annoList || state.currentSystem !== 1) return;
    const map = { directory: ["topbar", "gnb", "sidebar", "searchbar", "stats", "emptable", "pagetitle"], record: ["topbar", "gnb", "sidebar", "pagetitle", "hrcard"], org: ["topbar", "gnb", "sidebar", "pagetitle", "orgchart"], codes: ["topbar", "gnb", "sidebar", "pagetitle"], assignment: ["topbar", "gnb", "sidebar", "pagetitle"] };
    const base = (annotations[1] || []).filter((item) => map[state.currentHrView].includes(item.region));
    const overrides = {
      directory: {
        searchbar: { title: "사원 검색 및 조건 필터", desc: "사번, 성명, 부서 기준 통합 검색과 재직상태/직급 필터를 제공하는 영역. 검색 실행 시 하단 사원명부 목록과 건수, 페이징 기준이 함께 갱신되어야 함." },
        stats: { title: "인사 현황 요약 통계", desc: "전체 인원, 재직/휴직, 최근 입사자 수를 요약하는 카드 영역. 사원 등록, 수정, 발령 반영 시 숫자가 즉시 재계산되어야 함." },
        emptable: { title: "사원명부 조회 결과", desc: "선택 조건에 따른 사원 목록 표시 영역. 상세보기 클릭 시 인사기록카드로 이동하고, 신규 등록 및 수정 결과가 즉시 반영되어야 함." },
        pagetitle: { title: "사원명부 주요 액션", desc: "신규 등록, 엑셀 내보내기 등 현재 화면에서 수행 가능한 주요 작업 버튼 영역. 화면별로 버튼 구성이 달라져야 함." }
      },
      record: {
        hrcard: { title: "인사기록카드 상세 정보", desc: "선택한 사원의 기본정보, 조직정보, 인사속성, 발령이력, 교육이력, 메모를 확인하는 상세 화면. 수정 저장 시 명부/조직도와 함께 동기화되어야 함." },
        pagetitle: { title: "기록카드 화면 액션", desc: "기록카드 수정, 원본 복원 등 상세화면 전용 액션 버튼 영역. 선택 사원 기준으로만 동작해야 함." }
      },
      org: {
        orgchart: { title: "조직도 및 배치 현황", desc: "본부-실-팀-파트 계층과 각 조직의 배치 인원을 확인하는 영역. 발령 반영 또는 코드 변경 시 즉시 재구성되어야 함." },
        pagetitle: { title: "조직도 화면 액션", desc: "조직도 새로고침, 발령입력 이동 등 조직도 화면 전용 작업 버튼 영역." }
      },
      codes: {
        pagetitle: { title: "코드관리 진입 액션", desc: "코드 현황 조회와 각 수정 화면으로 진입하는 상단 액션 영역. 현황 중심에서 수정 화면으로 이동하는 흐름이 중요함." }
      },
      assignment: {
        pagetitle: { title: "발령입력 액션", desc: "발령 반영, 미리보기 등 발령 업무 전용 주요 버튼 영역. 저장 시 관련 화면이 함께 갱신되어야 함." }
      }
    };
    const filtered = base.map((item) => ({ ...item, ...(overrides[state.currentHrView]?.[item.region] || {}) }));
    refs.annoList.innerHTML = "";
    filtered.forEach((item) => {
      const div = document.createElement("div");
      div.className = "anno-item";
      div.dataset.region = item.region;
      div.innerHTML = `<div class="anno-num">${item.num}</div><div class="anno-title">${item.title}</div><div class="anno-desc">${item.desc}</div><span class="anno-tag ${tagMap[item.tag]}">${item.tagLabel}</span>`;
      div.addEventListener("mouseenter", () => {
        const regionMap = {
          searchbar: refs.searchBar,
          stats: refs.stats,
          emptable: refs.tableWrap,
          orgchart: refs.orgWrap,
          hrcard: refs.cardWrap,
          pagetitle: refs.pageTitle,
          sidebar: refs.hrSidebar,
          gnb: $(".hr-top-menu", refs.hrSystem),
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
  showHrView("directory");
  const tab1 = $("#tab1");
  const tab2 = $("#tab2");
  tab1?.addEventListener("click", () => { state.currentSystem = 1; renderNotesByView(); }, true);
  tab2?.addEventListener("click", () => { state.currentSystem = 2; }, true);
})();
