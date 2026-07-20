/**
 * Smart Household Budget Ledger Application Logic
 * Pure ES6+ Vanilla JavaScript
 */

// --- 1. i18n Translations Dictionary ---
const I18N = {
  ko: {
    app_title: "스마트 가계부",
    lang_toggle: "English",
    card_total_balance: "총 잔액",
    card_total_balance_sub: "초기 자산({initial}) + 누적 수입-지출",
    card_monthly_income: "이번 달 총 수입",
    card_income_count: "{count}건의 수입 내역",
    card_monthly_expense: "이번 달 총 지출",
    card_daily_avg: "일평균 지출: {avg}",
    card_budget: "목표 예산 소진율",
    card_budget_sub: "월 목표 예산 {budget} 기준",
    chart_category_title: "카테고리별 지출",
    chart_channel_title: "결제 수단/경로별 지출",
    tx_history_title: "거래 내역",
    ph_search: "내역/메모 검색...",
    filter_type_all: "전체 구별",
    filter_type_expense: "지출만 (-)",
    filter_type_income: "수입만 (+)",
    filter_channel_all: "전체 결제수단",
    btn_add_tx: "+ 수입/지출 추가",
    modal_add_title: "수입 / 지출 내역 입력",
    modal_edit_title: "수입 / 지출 내역 수정",
    modal_initial_balance_title: "초기 자산 설정",
    label_initial_balance: "시작 자산 금액 (원)",
    ph_initial_balance: "예: 1000000",
    hint_initial_balance: "가계부 시작 전 통장/현금에 보유 중인 초기 자산 금액입니다. 총 잔액에 더해집니다.",
    btn_edit_initial: "초기 자산 설정",
    toast_initial_updated: "초기 자산 금액이 저장되었습니다.",
    label_type: "거래 구분",
    btn_type_expense: "지출 (-)",
    btn_type_income: "수입 (+)",
    label_amount: "금액 (원)",
    ph_amount: "0",
    label_title: "항목명 / 사용처",
    ph_title: "예: 스타벅스 커피, 월급",
    label_category: "카테고리",
    label_channel: "입출금 / 결제 경로",
    label_date: "날짜",
    label_memo: "메모 (선택)",
    ph_memo: "상세 내용을 입력하세요",
    btn_cancel: "취소",
    btn_save: "저장하기",
    nav_home: "홈",
    nav_analytics: "분석",
    nav_add: "입력",
    nav_settings: "설정",
    no_tx_found: "등록된 거래 내역이 없습니다.",
    no_chart_data: "분석할 지출 데이터가 없습니다.",
    toast_added: "새 거래 내역이 저장되었습니다.",
    toast_updated: "거래 내역이 수정되었습니다.",
    toast_deleted: "거래 내역이 삭제되었습니다.",
    toast_settings_info: "스마트 가계부 v1.0 - 데이터가 브라우저 및 클라우드에 자동 저장됩니다.",
    confirm_delete: "이 내역을 삭제하시겠습니까?",

    // Auth & Supabase DB Keys
    modal_auth_title: "Supabase 클라우드 동기화",
    tab_login: "로그인",
    tab_signup: "회원가입",
    tab_api_key: "🔑 API 키 설정 (보안)",
    label_email: "이메일 계정",
    label_password: "비밀번호",
    label_supabase_url: "Supabase Project URL",
    label_supabase_key: "Supabase Anon / Publishable API Key",
    hint_supabase_key: "API 키는 브라우저 로컬 환경에 보관되며 소스코드에 공개 노출되지 않고 안전하게 연결됩니다.",
    btn_login: "로그인",
    btn_signup: "회원가입 완료",
    btn_save_key: "연동 API 키 저장 및 연결 검증",
    btn_logout: "로그아웃",
    toast_login_success: "성공적으로 로그인되었습니다. 클라우드 데이터와 동기화됩니다.",
    toast_signup_success: "회원가입 신청이 완료되었습니다! 메일함에서 확인을 클릭해 주세요.",
    toast_logout_success: "로그아웃되었습니다. 로컬 오프라인 모드로 전환됩니다.",
    toast_key_saved: "Supabase API 연동 키가 안전하게 저장되었습니다.",
    toast_auth_error: "오류: {error}",
    
    // Categories
    cat_salary: "월급/보너스",
    cat_allowance: "용돈/부수입",
    cat_food: "식비/카페",
    cat_transport: "교통/차량",
    cat_housing: "주거/통신",
    cat_shopping: "패션/쇼핑",
    cat_leisure: "문화/여가",
    cat_medical: "의료/건강",
    cat_education: "교육/육아",
    cat_other: "기타",

    // Channels
    channel_credit_card: "신용카드",
    channel_debit_card: "체크카드",
    channel_cash: "현금",
    channel_bank: "계좌이체",
    channel_kakao_pay: "카카오페이",
    channel_naver_pay: "네이버페이",
    channel_toss: "토스",
    channel_other: "기타 경로"
  },
  en: {
    app_title: "Smart Budget",
    lang_toggle: "한국어",
    card_total_balance: "Total Balance",
    card_total_balance_sub: "Initial ({initial}) + Net Income-Expense",
    card_monthly_income: "Monthly Income",
    card_income_count: "{count} income transactions",
    card_monthly_expense: "Monthly Expense",
    card_daily_avg: "Daily Avg: {avg}",
    card_budget: "Budget Usage",
    card_budget_sub: "Based on monthly limit {budget}",
    chart_category_title: "Expense by Category",
    chart_channel_title: "Expense by Payment Channel",
    tx_history_title: "Transaction History",
    ph_search: "Search description/memo...",
    filter_type_all: "All Types",
    filter_type_expense: "Expenses Only (-)",
    filter_type_income: "Income Only (+)",
    filter_channel_all: "All Payment Methods",
    btn_add_tx: "+ Add Transaction",
    modal_add_title: "Add Income / Expense",
    modal_edit_title: "Edit Transaction",
    modal_initial_balance_title: "Set Initial Balance",
    label_initial_balance: "Starting Capital / Funds",
    ph_initial_balance: "e.g., 1000000",
    hint_initial_balance: "Your starting funds before using this ledger. Added to total balance.",
    btn_edit_initial: "Edit Initial Balance",
    toast_initial_updated: "Initial balance updated successfully.",
    label_type: "Transaction Type",
    btn_type_expense: "Expense (-)",
    btn_type_income: "Income (+)",
    label_amount: "Amount ($ / ₩)",
    ph_amount: "0",
    label_title: "Title / Payee",
    ph_title: "e.g., Starbucks Coffee, Salary",
    label_category: "Category",
    label_channel: "Payment Channel / Account",
    label_date: "Date",
    label_memo: "Memo (Optional)",
    ph_memo: "Add extra note...",
    btn_cancel: "Cancel",
    btn_save: "Save",
    nav_home: "Home",
    nav_analytics: "Analytics",
    nav_add: "Add",
    nav_settings: "Settings",
    no_tx_found: "No transactions found.",
    no_chart_data: "No expense data for analysis.",
    toast_added: "Transaction saved successfully.",
    toast_updated: "Transaction updated.",
    toast_deleted: "Transaction deleted.",
    toast_settings_info: "Smart Budget Ledger v1.0 - Auto saved in browser & cloud.",
    confirm_delete: "Are you sure you want to delete this item?",

    // Auth & Supabase DB Keys
    modal_auth_title: "Supabase Cloud Sync",
    tab_login: "Log In",
    tab_signup: "Sign Up",
    tab_api_key: "🔑 API Keys (Secure)",
    label_email: "Email Account",
    label_password: "Password",
    label_supabase_url: "Supabase Project URL",
    label_supabase_key: "Supabase Anon / Publishable API Key",
    hint_supabase_key: "API keys are stored securely in local browser environment and not exposed in source code.",
    btn_login: "Log In",
    btn_signup: "Complete Sign Up",
    btn_save_key: "Save API Key & Verify",
    btn_logout: "Log Out",
    toast_login_success: "Successfully logged in. Syncing with cloud...",
    toast_signup_success: "Sign up requested! Please check your email inbox to confirm.",
    toast_logout_success: "Logged out. Switched to offline local mode.",
    toast_key_saved: "Supabase API key saved securely.",
    toast_auth_error: "Error: {error}",
    
    // Categories
    cat_salary: "Salary / Bonus",
    cat_allowance: "Allowance / Side",
    cat_food: "Food & Dining",
    cat_transport: "Transport",
    cat_housing: "Housing & Telecom",
    cat_shopping: "Shopping",
    cat_leisure: "Entertainment",
    cat_medical: "Medical & Health",
    cat_education: "Education",
    cat_other: "Other",

    // Channels
    channel_credit_card: "Credit Card",
    channel_debit_card: "Debit Card",
    channel_cash: "Cash",
    channel_bank: "Bank Transfer",
    channel_kakao_pay: "Kakao Pay",
    channel_naver_pay: "Naver Pay",
    channel_toss: "Toss Pay",
    channel_other: "Other Route"
  }
};

// --- Category Data Config ---
const CATEGORY_CONFIG = {
  expense: [
    { id: "cat_food", icon: "restaurant", color: "#f59e0b" },
    { id: "cat_transport", icon: "directions_bus", color: "#3b82f6" },
    { id: "cat_housing", icon: "home", color: "#8b5cf6" },
    { id: "cat_shopping", icon: "shopping_bag", color: "#ec4899" },
    { id: "cat_leisure", icon: "sports_esports", color: "#10b981" },
    { id: "cat_medical", icon: "local_hospital", color: "#ef4444" },
    { id: "cat_education", icon: "school", color: "#06b6d4" },
    { id: "cat_other", icon: "more_horiz", color: "#64748b" }
  ],
  income: [
    { id: "cat_salary", icon: "payments", color: "#059669" },
    { id: "cat_allowance", icon: "card_giftcard", color: "#10b981" },
    { id: "cat_other", icon: "savings", color: "#0d9488" }
  ]
};

// Payment channels mapping
const CHANNEL_CONFIG = {
  credit_card: { icon: "credit_card", badgeClass: "badge-card" },
  debit_card: { icon: "credit_card_off", badgeClass: "badge-card" },
  cash: { icon: "payments", badgeClass: "badge-cash" },
  bank: { icon: "account_balance", badgeClass: "badge-bank" },
  kakao_pay: { icon: "qr_code_2", badgeClass: "badge-pay" },
  naver_pay: { icon: "account_balance_wallet", badgeClass: "badge-pay" },
  toss: { icon: "send_money", badgeClass: "badge-pay" },
  other: { icon: "more_horiz", badgeClass: "badge-other" }
};

// Initial Sample Data (if empty)
const SAMPLE_DATA = [
  { id: "1", type: "income", amount: 3500000, title: "7월 정기 월급", category: "cat_salary", channel: "bank", date: "2026-07-10", memo: "주식회사 계좌 입금" },
  { id: "2", type: "expense", amount: 68000, title: "이마트 장보기", category: "cat_food", channel: "credit_card", date: "2026-07-12", memo: "주말 식재료 구매" },
  { id: "3", type: "expense", amount: 14500, title: "스타벅스 커피", category: "cat_food", channel: "kakao_pay", date: "2026-07-15", memo: "아메리카노 2잔" },
  { id: "4", type: "expense", amount: 125000, title: "주통신비 (SKT)", category: "cat_housing", channel: "credit_card", date: "2026-07-16", memo: "자동이체" },
  { id: "5", type: "expense", amount: 55000, title: "주유소 기쁨주유", category: "cat_transport", channel: "naver_pay", date: "2026-07-18", memo: "휘발유 완충" },
  { id: "6", type: "expense", amount: 89000, title: "여름 의류 구입", category: "cat_shopping", channel: "credit_card", date: "2026-07-19", memo: "반팔 셔츠" },
  { id: "7", type: "income", amount: 200000, title: "중고거래 부수입", category: "cat_allowance", channel: "toss", date: "2026-07-20", memo: "모니터 판매" }
];

// --- 2. Application State ---
class BudgetApp {
  constructor() {
    this.currentLang = localStorage.getItem("budget_ledger_lang") || "ko";
    this.monthlyBudget = 2500000; // Default 2.5 Million KRW budget
    this.initialBalance = Number(localStorage.getItem("budget_ledger_initial_balance")) || 0;
    
    // Supabase State - Connected to bohobndspbnrusdjdsap
    this.spUrl = "https://bohobndspbnrusdjdsap.supabase.co";
    this.spKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJvaG9ibmRzcGJucnVzZGpkc2FwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ1MzYzNTIsImV4cCI6MjEwMDExMjM1Mn0.Z7CqvQiZTFHB9rrO0unSaoIiKFNyLW8QjeGmSE0IGkM";
    localStorage.setItem("budget_ledger_sp_url", this.spUrl);
    localStorage.setItem("budget_ledger_sp_key", this.spKey);
    this.supabase = null;
    this.currentUser = null;

    // Current date state
    const today = new Date();
    this.selectedYear = today.getFullYear();
    this.selectedMonth = today.getMonth() + 1; // 1-12

    // Filter states
    this.searchQuery = "";
    this.typeFilter = "all";
    this.channelFilter = "all";

    // Modal state
    this.currentTxType = "expense";
    this.editingId = null;

    // Load data from LocalStorage or use sample
    this.transactions = this.loadTransactions();

    // DOM Elements
    this.initDOMElements();
    // Bind Event Listeners
    this.bindEvents();
    // Initialize Supabase Client & Auth Session
    this.initSupabase();
    // Initialize Language & Render
    this.updateLanguageUI();
    this.render();
  }

  loadTransactions() {
    const saved = localStorage.getItem("budget_ledger_data");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Failed to parse saved transactions", e);
      }
    }
    // Save sample data if first time
    localStorage.setItem("budget_ledger_data", JSON.stringify(SAMPLE_DATA));
    return SAMPLE_DATA;
  }

  saveTransactions() {
    localStorage.setItem("budget_ledger_data", JSON.stringify(this.transactions));
  }

  initDOMElements() {
    this.elLangToggleBtn = document.getElementById("langToggleBtn");
    this.elLangLabel = document.getElementById("langLabel");
    
    this.elPrevMonthBtn = document.getElementById("prevMonthBtn");
    this.elNextMonthBtn = document.getElementById("nextMonthBtn");
    this.elCurrentMonthLabel = document.getElementById("currentMonthLabel");

    // Stat cards & Initial Balance
    this.elTotalBalanceVal = document.getElementById("totalBalanceVal");
    this.elTotalBalanceSub = document.getElementById("totalBalanceSub");
    this.elEditInitialBalanceBtn = document.getElementById("editInitialBalanceBtn");
    this.elMonthlyIncomeVal = document.getElementById("monthlyIncomeVal");
    this.elIncomeCountSub = document.getElementById("incomeCountSub");
    this.elMonthlyExpenseVal = document.getElementById("monthlyExpenseVal");
    this.elDailyAvgSub = document.getElementById("dailyAvgSub");
    this.elBudgetUsagePercent = document.getElementById("budgetUsagePercent");
    this.elBudgetProgressBar = document.getElementById("budgetProgressBar");
    this.elBudgetSub = document.getElementById("budgetSub");

    // Charts
    this.elCategoryChartContainer = document.getElementById("categoryChartContainer");
    this.elCategoryLegend = document.getElementById("categoryLegend");
    this.elChannelChartContainer = document.getElementById("channelChartContainer");
    this.elChannelLegend = document.getElementById("channelLegend");

    // Transactions list & controls
    this.elSearchInput = document.getElementById("searchInput");
    this.elTypeFilter = document.getElementById("typeFilter");
    this.elChannelFilter = document.getElementById("channelFilter");
    this.elAddTxBtnDesktop = document.getElementById("addTxBtnDesktop");
    this.elFabBtn = document.getElementById("fabBtn");
    this.elTxListContainer = document.getElementById("txListContainer");

    // Modal
    this.elTxModal = document.getElementById("txModal");
    this.elModalTitle = document.getElementById("modalTitle");
    this.elCloseModalBtn = document.getElementById("closeModalBtn");
    this.elCancelModalBtn = document.getElementById("cancelModalBtn");
    this.elTxForm = document.getElementById("txForm");
    this.elTxIdInput = document.getElementById("txIdInput");
    this.elTypeExpenseBtn = document.getElementById("typeExpenseBtn");
    this.elTypeIncomeBtn = document.getElementById("typeIncomeBtn");
    this.elAmountInput = document.getElementById("amountInput");
    this.elTitleInput = document.getElementById("titleInput");
    this.elCategorySelect = document.getElementById("categorySelect");
    this.elChannelSelect = document.getElementById("channelSelect");
    this.elDateInput = document.getElementById("dateInput");
    this.elMemoInput = document.getElementById("memoInput");

    // Initial Balance Modal Elements
    this.elInitialBalanceModal = document.getElementById("initialBalanceModal");
    this.elCloseInitialModalBtn = document.getElementById("closeInitialModalBtn");
    this.elCancelInitialModalBtn = document.getElementById("cancelInitialModalBtn");
    this.elInitialBalanceForm = document.getElementById("initialBalanceForm");
    this.elInitialBalanceInput = document.getElementById("initialBalanceInput");

    // Auth & Supabase Modal Elements
    this.elAuthBtn = document.getElementById("authBtn");
    this.elAuthBtnLabel = document.getElementById("authBtnLabel");
    this.elAuthModal = document.getElementById("authModal");
    this.elCloseAuthModalBtn = document.getElementById("closeAuthModalBtn");
    this.elTabLoginBtn = document.getElementById("tabLoginBtn");
    this.elTabSignupBtn = document.getElementById("tabSignupBtn");
    this.elLoginForm = document.getElementById("loginForm");
    this.elSignupForm = document.getElementById("signupForm");
    this.elLoginEmailInput = document.getElementById("loginEmailInput");
    this.elLoginPasswordInput = document.getElementById("loginPasswordInput");
    this.elSignupEmailInput = document.getElementById("signupEmailInput");
    this.elSignupPasswordInput = document.getElementById("signupPasswordInput");

    // Mobile nav
    this.elNavHome = document.getElementById("navHome");
    this.elNavAnalytics = document.getElementById("navAnalytics");
    this.elNavAdd = document.getElementById("navAdd");
    this.elNavAuthMobile = document.getElementById("navAuthMobile");
    this.elNavAuthIcon = document.getElementById("navAuthIcon");
    this.elNavAuthLabel = document.getElementById("navAuthLabel");
    this.elToast = document.getElementById("toast");
  }

  bindEvents() {
    // Auth Button & Modal Events
    if (this.elAuthBtn) {
      this.elAuthBtn.addEventListener("click", () => {
        if (this.currentUser) {
          this.handleLogout();
        } else {
          this.openAuthModal();
        }
      });
    }

    if (this.elCloseAuthModalBtn) {
      this.elCloseAuthModalBtn.addEventListener("click", () => this.closeAuthModal());
    }

    // Mobile bottom nav auth button
    if (this.elNavAuthMobile) {
      this.elNavAuthMobile.addEventListener("click", () => {
        if (this.currentUser) {
          this.handleLogout();
        } else {
          this.openAuthModal();
        }
      });
    }

    if (this.elTabLoginBtn) this.elTabLoginBtn.addEventListener("click", () => this.switchAuthTab("login"));
    if (this.elTabSignupBtn) this.elTabSignupBtn.addEventListener("click", () => this.switchAuthTab("signup"));

    if (this.elLoginForm) {
      this.elLoginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        this.handleLogin();
      });
    }

    if (this.elSignupForm) {
      this.elSignupForm.addEventListener("submit", (e) => {
        e.preventDefault();
        this.handleSignup();
      });
    }

    // Edit Initial Balance Button
    if (this.elEditInitialBalanceBtn) {
      this.elEditInitialBalanceBtn.addEventListener("click", () => this.openInitialModal());
    }

    if (this.elCloseInitialModalBtn) {
      this.elCloseInitialModalBtn.addEventListener("click", () => this.closeInitialModal());
    }

    if (this.elCancelInitialModalBtn) {
      this.elCancelInitialModalBtn.addEventListener("click", () => this.closeInitialModal());
    }

    if (this.elInitialBalanceForm) {
      this.elInitialBalanceForm.addEventListener("submit", (e) => {
        e.preventDefault();
        this.handleInitialFormSubmit();
      });
    }

    // Language Toggle
    this.elLangToggleBtn.addEventListener("click", () => {
      this.currentLang = this.currentLang === "ko" ? "en" : "ko";
      localStorage.setItem("budget_ledger_lang", this.currentLang);
      this.updateLanguageUI();
      this.render();
    });

    // Month Navigation
    this.elPrevMonthBtn.addEventListener("click", () => this.changeMonth(-1));
    this.elNextMonthBtn.addEventListener("click", () => this.changeMonth(1));

    // Filters
    this.elSearchInput.addEventListener("input", (e) => {
      this.searchQuery = e.target.value.toLowerCase();
      this.renderTxList();
    });

    this.elTypeFilter.addEventListener("change", (e) => {
      this.typeFilter = e.target.value;
      this.renderTxList();
    });

    this.elChannelFilter.addEventListener("change", (e) => {
      this.channelFilter = e.target.value;
      this.renderTxList();
    });

    // Add buttons
    this.elAddTxBtnDesktop.addEventListener("click", () => this.openModal());
    this.elFabBtn.addEventListener("click", () => this.openModal());

    // Modal Events
    this.elCloseModalBtn.addEventListener("click", () => this.closeModal());
    this.elCancelModalBtn.addEventListener("click", () => this.closeModal());

    this.elTypeExpenseBtn.addEventListener("click", () => this.setModalType("expense"));
    this.elTypeIncomeBtn.addEventListener("click", () => this.setModalType("income"));

    this.elTxForm.addEventListener("submit", (e) => {
      e.preventDefault();
      this.handleFormSubmit();
    });

    // Mobile Navigation buttons
    this.elNavHome.addEventListener("click", () => {
      this.setActiveNav(this.elNavHome);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    this.elNavAnalytics.addEventListener("click", () => {
      this.setActiveNav(this.elNavAnalytics);
      document.querySelector(".analytics-section").scrollIntoView({ behavior: "smooth" });
    });
    this.elNavAdd.addEventListener("click", () => {
      this.setActiveNav(this.elNavAdd);
      this.openModal();
    });
    this.elNavSettings.addEventListener("click", () => {
      this.setActiveNav(this.elNavSettings);
      this.showToast(this.t("toast_settings_info"));
    });
  }

  setActiveNav(selectedBtn) {
    [this.elNavHome, this.elNavAnalytics, this.elNavAdd, this.elNavSettings].forEach(btn => {
      btn.classList.remove("active");
    });
    selectedBtn.classList.add("active");
  }

  t(key, params = {}) {
    let str = (I18N[this.currentLang] && I18N[this.currentLang][key]) || key;
    for (const p in params) {
      str = str.replace(new RegExp(`\\{${p}\\}`, "g"), params[p]);
    }
    return str;
  }

  updateLanguageUI() {
    this.elLangLabel.textContent = this.currentLang === "ko" ? "English" : "한국어";

    // Text translations
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      el.textContent = this.t(key);
    });

    // Placeholders
    document.querySelectorAll("[data-i18n-ph]").forEach(el => {
      const key = el.getAttribute("data-i18n-ph");
      el.placeholder = this.t(key);
    });

    // Populate Modal Category Dropdown
    this.populateCategoryOptions();
  }

  populateCategoryOptions() {
    const categories = CATEGORY_CONFIG[this.currentTxType] || [];
    this.elCategorySelect.innerHTML = categories.map(cat => `
      <option value="${cat.id}">${this.t(cat.id)}</option>
    `).join("");
  }

  changeMonth(delta) {
    this.selectedMonth += delta;
    if (this.selectedMonth < 1) {
      this.selectedMonth = 12;
      this.selectedYear -= 1;
    } else if (this.selectedMonth > 12) {
      this.selectedMonth = 1;
      this.selectedYear += 1;
    }
    this.render();
  }

  // --- Calculations Engine ---
  getFilteredMonthTransactions() {
    const yStr = String(this.selectedYear);
    const mStr = String(this.selectedMonth).padStart(2, "0");
    const prefix = `${yStr}-${mStr}`;
    return this.transactions.filter(tx => tx.date.startsWith(prefix));
  }

  calculateTotals() {
    // Total lifetime balance
    let lifetimeIncome = 0;
    let lifetimeExpense = 0;

    this.transactions.forEach(tx => {
      const amt = Number(tx.amount) || 0;
      if (tx.type === "income") lifetimeIncome += amt;
      else if (tx.type === "expense") lifetimeExpense += amt;
    });

    const totalBalance = Number(this.initialBalance) + lifetimeIncome - lifetimeExpense;

    // Selected Month Totals
    const monthTx = this.getFilteredMonthTransactions();
    let monthlyIncome = 0;
    let monthlyExpense = 0;
    let incomeCount = 0;

    monthTx.forEach(tx => {
      const amt = Number(tx.amount) || 0;
      if (tx.type === "income") {
        monthlyIncome += amt;
        incomeCount++;
      } else if (tx.type === "expense") {
        monthlyExpense += amt;
      }
    });

    const today = new Date();
    const daysInMonth = new Date(this.selectedYear, this.selectedMonth, 0).getDate();
    const isCurrentMonth = today.getFullYear() === this.selectedYear && (today.getMonth() + 1) === this.selectedMonth;
    const daysElapsed = isCurrentMonth ? Math.min(today.getDate(), daysInMonth) : daysInMonth;

    const dailyAvg = daysElapsed > 0 ? Math.round(monthlyExpense / daysElapsed) : 0;
    const budgetPercent = Math.min(Math.round((monthlyExpense / this.monthlyBudget) * 100), 100);

    return {
      totalBalance,
      monthlyIncome,
      monthlyExpense,
      incomeCount,
      dailyAvg,
      budgetPercent
    };
  }

  // --- Rendering UI ---
  render() {
    // Update Month Label
    const monthFormatted = `${this.selectedYear}.${String(this.selectedMonth).padStart(2, "0")}`;
    this.elCurrentMonthLabel.textContent = monthFormatted;

    // Calculate & Render Stat Cards
    const stats = this.calculateTotals();

    this.elTotalBalanceVal.textContent = this.formatCurrency(stats.totalBalance);
    this.elTotalBalanceSub.textContent = this.t("card_total_balance_sub", { initial: this.formatCurrency(this.initialBalance) });

    this.elMonthlyIncomeVal.textContent = this.formatCurrency(stats.monthlyIncome);
    this.elIncomeCountSub.textContent = this.t("card_income_count", { count: stats.incomeCount });

    this.elMonthlyExpenseVal.textContent = this.formatCurrency(stats.monthlyExpense);
    this.elDailyAvgSub.textContent = this.t("card_daily_avg", { avg: this.formatCurrency(stats.dailyAvg) });

    this.elBudgetUsagePercent.textContent = `${stats.budgetPercent}%`;
    this.elBudgetProgressBar.style.width = `${stats.budgetPercent}%`;

    // Progress bar color alert logic
    this.elBudgetProgressBar.className = "progress-bar-fill";
    if (stats.budgetPercent >= 90) {
      this.elBudgetProgressBar.classList.add("danger");
    } else if (stats.budgetPercent >= 75) {
      this.elBudgetProgressBar.classList.add("warning");
    }

    this.elBudgetSub.textContent = this.t("card_budget_sub", { budget: this.formatCurrency(this.monthlyBudget) });

    // Render Charts
    this.renderCategoryChart();
    this.renderChannelChart();

    // Render Transactions List
    this.renderTxList();
  }

  formatCurrency(val) {
    if (this.currentLang === "en") {
      // Show as approx USD or formatted
      return `$ ${val.toLocaleString()}`;
    }
    return `₩ ${val.toLocaleString()}`;
  }

  // --- Donut SVG Chart Generator for Categories ---
  renderCategoryChart() {
    const monthTx = this.getFilteredMonthTransactions().filter(tx => tx.type === "expense");
    const totalExpense = monthTx.reduce((sum, tx) => sum + Number(tx.amount), 0);

    if (totalExpense === 0) {
      this.elCategoryChartContainer.innerHTML = `<div class="empty-state" style="padding:20px;"><div class="empty-icon">pie_chart</div><p>${this.t("no_chart_data")}</p></div>`;
      this.elCategoryLegend.innerHTML = "";
      return;
    }

    // Group expenses by category
    const catMap = {};
    monthTx.forEach(tx => {
      catMap[tx.category] = (catMap[tx.category] || 0) + Number(tx.amount);
    });

    const categoryList = Object.keys(catMap).map(catId => {
      const conf = CATEGORY_CONFIG.expense.find(c => c.id === catId) || { color: "#94a3b8", icon: "help" };
      return {
        id: catId,
        amount: catMap[catId],
        percent: Math.round((catMap[catId] / totalExpense) * 100),
        color: conf.color
      };
    }).sort((a, b) => b.amount - a.amount);

    // Create SVG Donut Chart
    const size = 180;
    const strokeWidth = 24;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;

    let cumulativePercent = 0;
    const slices = categoryList.map(item => {
      const strokeDasharray = `${(item.percent / 100) * circumference} ${circumference}`;
      const strokeDashoffset = -((cumulativePercent / 100) * circumference);
      cumulativePercent += item.percent;

      return `<circle 
        cx="${size / 2}" 
        cy="${size / 2}" 
        r="${radius}" 
        fill="transparent" 
        stroke="${item.color}" 
        stroke-width="${strokeWidth}" 
        stroke-dasharray="${strokeDasharray}" 
        stroke-dashoffset="${strokeDashoffset}" 
        transform="rotate(-90 ${size / 2} ${size / 2})"
        style="transition: stroke-dashoffset 0.4s ease;"
      />`;
    }).join("");

    this.elCategoryChartContainer.innerHTML = `
      <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
        ${slices}
        <text x="50%" y="46%" dominant-baseline="middle" text-anchor="middle" font-size="12" fill="var(--text-muted)">${this.t("card_monthly_expense")}</text>
        <text x="50%" y="60%" dominant-baseline="middle" text-anchor="middle" font-size="14" font-weight="700" fill="var(--text-primary)">${this.formatCurrency(totalExpense)}</text>
      </svg>
    `;

    // Render Legend
    this.elCategoryLegend.innerHTML = categoryList.map(item => `
      <div class="legend-item">
        <div class="legend-info">
          <span class="legend-color" style="background-color:${item.color};"></span>
          <span>${this.t(item.id)}</span>
        </div>
        <div>
          <span class="legend-percent">${item.percent}%</span>
          <span style="font-size:12px; color:var(--text-muted); margin-left:4px;">(${this.formatCurrency(item.amount)})</span>
        </div>
      </div>
    `).join("");
  }

  // --- Payment Channel Breakdown Chart ---
  renderChannelChart() {
    const monthTx = this.getFilteredMonthTransactions().filter(tx => tx.type === "expense");
    const totalExpense = monthTx.reduce((sum, tx) => sum + Number(tx.amount), 0);

    if (totalExpense === 0) {
      this.elChannelChartContainer.innerHTML = `<div class="empty-state" style="padding:20px;"><div class="empty-icon">credit_card</div><p>${this.t("no_chart_data")}</p></div>`;
      this.elChannelLegend.innerHTML = "";
      return;
    }

    const channelMap = {};
    monthTx.forEach(tx => {
      const ch = tx.channel || "other";
      channelMap[ch] = (channelMap[ch] || 0) + Number(tx.amount);
    });

    const channelList = Object.keys(channelMap).map(chKey => {
      const percent = Math.round((channelMap[chKey] / totalExpense) * 100);
      const conf = CHANNEL_CONFIG[chKey] || CHANNEL_CONFIG.other;
      return {
        key: chKey,
        amount: channelMap[chKey],
        percent,
        icon: conf.icon,
        badgeClass: conf.badgeClass
      };
    }).sort((a, b) => b.amount - a.amount);

    this.elChannelChartContainer.innerHTML = "";

    this.elChannelLegend.innerHTML = channelList.map(item => `
      <div class="legend-item" style="flex-direction:column; align-items:stretch; gap:4px; padding:6px 0;">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <div class="legend-info">
            <span class="badge ${item.badgeClass}">
              <span class="material-symbols-outlined" style="font-size:14px;">${item.icon}</span>
              ${this.t(`channel_${item.key}`)}
            </span>
          </div>
          <div>
            <span class="legend-percent">${item.percent}%</span>
            <span style="font-size:12px; color:var(--text-muted); margin-left:4px;">${this.formatCurrency(item.amount)}</span>
          </div>
        </div>
        <div class="progress-bar-container" style="height:4px; margin-top:2px;">
          <div class="progress-bar-fill" style="width:${item.percent}%; background:var(--primary-light);"></div>
        </div>
      </div>
    `).join("");
  }

  // --- Transactions List Rendering ---
  renderTxList() {
    let list = this.getFilteredMonthTransactions();

    // Type filter
    if (this.typeFilter !== "all") {
      list = list.filter(tx => tx.type === this.typeFilter);
    }

    // Channel filter
    if (this.channelFilter !== "all") {
      list = list.filter(tx => tx.channel === this.channelFilter);
    }

    // Search query
    if (this.searchQuery) {
      list = list.filter(tx => 
        tx.title.toLowerCase().includes(this.searchQuery) ||
        (tx.memo && tx.memo.toLowerCase().includes(this.searchQuery))
      );
    }

    // Sort descending by date
    list.sort((a, b) => new Date(b.date) - new Date(a.date));

    if (list.length === 0) {
      this.elTxListContainer.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">receipt_long</div>
          <p>${this.t("no_tx_found")}</p>
        </div>
      `;
      return;
    }

    this.elTxListContainer.innerHTML = list.map(tx => {
      const catConfList = CATEGORY_CONFIG[tx.type] || CATEGORY_CONFIG.expense;
      const catConf = catConfList.find(c => c.id === tx.category) || { icon: "receipt", color: "#64748b" };
      const chConf = CHANNEL_CONFIG[tx.channel] || CHANNEL_CONFIG.other;

      const isExpense = tx.type === "expense";
      const amountSign = isExpense ? "-" : "+";
      const amountClass = isExpense ? "expense" : "income";

      return `
        <div class="tx-item" data-id="${tx.id}">
          <div class="tx-left">
            <div class="tx-category-icon" style="background-color:${catConf.color}15; color:${catConf.color};">
              <span class="material-symbols-outlined">${catConf.icon}</span>
            </div>
            <div class="tx-details">
              <div class="tx-title-row">
                <span class="tx-name">${this.escapeHtml(tx.title)}</span>
                <span class="badge ${chConf.badgeClass}">
                  <span class="material-symbols-outlined" style="font-size:12px;">${chConf.icon}</span>
                  ${this.t(`channel_${tx.channel}`)}
                </span>
              </div>
              <div class="tx-meta">
                <span>${tx.date}</span>
                <span>•</span>
                <span>${this.t(tx.category)}</span>
                ${tx.memo ? `<span>• ${this.escapeHtml(tx.memo)}</span>` : ""}
              </div>
            </div>
          </div>
          <div class="tx-right">
            <div class="tx-amount ${amountClass}">
              ${amountSign}${this.formatCurrency(Number(tx.amount))}
            </div>
            <div class="tx-actions">
              <button class="btn-icon edit-tx-btn" onclick="app.editTx('${tx.id}')" title="수정">
                <span class="material-symbols-outlined">edit</span>
              </button>
              <button class="btn-icon delete delete-tx-btn" onclick="app.deleteTx('${tx.id}')" title="삭제">
                <span class="material-symbols-outlined">delete</span>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join("");
  }

  escapeHtml(str) {
    if (!str) return "";
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  // --- Modal Logic ---
  openModal(editingTx = null) {
    if (editingTx) {
      this.editingId = editingTx.id;
      this.elModalTitle.textContent = this.t("modal_edit_title");
      this.setModalType(editingTx.type);
      this.elAmountInput.value = editingTx.amount;
      this.elTitleInput.value = editingTx.title;
      this.elCategorySelect.value = editingTx.category;
      this.elChannelSelect.value = editingTx.channel || "credit_card";
      this.elDateInput.value = editingTx.date;
      this.elMemoInput.value = editingTx.memo || "";
    } else {
      this.editingId = null;
      this.elModalTitle.textContent = this.t("modal_add_title");
      this.setModalType("expense");
      this.elAmountInput.value = "";
      this.elTitleInput.value = "";
      this.elDateInput.value = new Date().toISOString().split("T")[0];
      this.elMemoInput.value = "";
    }

    this.elTxModal.classList.add("active");
  }

  closeModal() {
    this.elTxModal.classList.remove("active");
  }

  setModalType(type) {
    this.currentTxType = type;
    if (type === "expense") {
      this.elTypeExpenseBtn.classList.add("active");
      this.elTypeIncomeBtn.classList.remove("active");
    } else {
      this.elTypeIncomeBtn.classList.add("active");
      this.elTypeExpenseBtn.classList.remove("active");
    }
    this.populateCategoryOptions();
  }

  handleFormSubmit() {
    const amount = Number(this.elAmountInput.value);
    const title = this.elTitleInput.value.trim();
    const category = this.elCategorySelect.value;
    const channel = this.elChannelSelect.value;
    const date = this.elDateInput.value;
    const memo = this.elMemoInput.value.trim();

    if (!amount || amount <= 0 || !title || !date) return;

    if (this.editingId) {
      // Edit
      const index = this.transactions.findIndex(t => t.id === this.editingId);
      if (index !== -1) {
        this.transactions[index] = {
          ...this.transactions[index],
          type: this.currentTxType,
          amount,
          title,
          category,
          channel,
          date,
          memo
        };
        this.syncCloudTransaction(this.transactions[index], "upsert");
        this.showToast(this.t("toast_updated"));
      }
    } else {
      // Add
      const newTx = {
        id: Date.now().toString(),
        type: this.currentTxType,
        amount,
        title,
        category,
        channel,
        date,
        memo
      };
      this.transactions.push(newTx);
      this.syncCloudTransaction(newTx, "upsert");
      this.showToast(this.t("toast_added"));
    }

    this.saveTransactions();
    this.closeModal();
    this.render();
  }

  editTx(id) {
    const tx = this.transactions.find(t => t.id === id);
    if (tx) {
      this.openModal(tx);
    }
  }

  deleteTx(id) {
    if (confirm(this.t("confirm_delete"))) {
      this.transactions = this.transactions.filter(t => t.id !== id);
      this.saveTransactions();
      this.syncCloudTransaction({ id }, "delete");
      this.render();
      this.showToast(this.t("toast_deleted"));
    }
  }

  openInitialModal() {
    if (this.elInitialBalanceInput) {
      this.elInitialBalanceInput.value = this.initialBalance || 0;
    }
    if (this.elInitialBalanceModal) {
      this.elInitialBalanceModal.classList.add("active");
    }
  }

  closeInitialModal() {
    if (this.elInitialBalanceModal) {
      this.elInitialBalanceModal.classList.remove("active");
    }
  }

  handleInitialFormSubmit() {
    const val = Number(this.elInitialBalanceInput.value) || 0;
    this.initialBalance = val;
    localStorage.setItem("budget_ledger_initial_balance", val);
    this.syncCloudInitialBalance();
    this.closeInitialModal();
    this.render();
    this.showToast(this.t("toast_initial_updated"));
  }

  // --- Supabase Engine & Cloud Sync Methods ---
  initSupabase() {
    if (window.supabase && this.spUrl && this.spKey) {
      try {
        this.supabase = window.supabase.createClient(this.spUrl, this.spKey);
        this.checkAuthSession();
      } catch (e) {
        console.error("Supabase client init failed", e);
      }
    }
  }

  async checkAuthSession() {
    if (!this.supabase) return;
    try {
      const { data: { session } } = await this.supabase.auth.getSession();
      if (session && session.user) {
        this.currentUser = session.user;
        this.updateAuthUI();
        await this.fetchCloudData();
      } else {
        this.currentUser = null;
        this.updateAuthUI();
      }
    } catch (e) {
      console.error("Auth session check error", e);
    }
  }

  updateAuthUI() {
    if (this.currentUser) {
      const shortEmail = this.currentUser.email.split("@")[0];
      // Desktop header button
      if (this.elAuthBtnLabel) this.elAuthBtnLabel.textContent = `${shortEmail} (${this.t("btn_logout")})`;
      if (this.elAuthBtn) {
        this.elAuthBtn.classList.remove("btn-secondary");
        this.elAuthBtn.classList.add("btn-primary");
      }
      // Mobile bottom nav
      if (this.elNavAuthLabel) this.elNavAuthLabel.textContent = shortEmail;
      if (this.elNavAuthIcon) this.elNavAuthIcon.textContent = "account_circle";
      if (this.elNavAuthMobile) this.elNavAuthMobile.classList.add("logged-in");
    } else {
      // Desktop header button
      if (this.elAuthBtnLabel) this.elAuthBtnLabel.textContent = this.t("btn_login");
      if (this.elAuthBtn) {
        this.elAuthBtn.classList.remove("btn-primary");
        this.elAuthBtn.classList.add("btn-secondary");
      }
      // Mobile bottom nav
      if (this.elNavAuthLabel) this.elNavAuthLabel.textContent = "로그인";
      if (this.elNavAuthIcon) this.elNavAuthIcon.textContent = "login";
      if (this.elNavAuthMobile) this.elNavAuthMobile.classList.remove("logged-in");
    }
  }

  openAuthModal() {
    this.switchAuthTab("login");
    this.elAuthModal.classList.add("active");
  }

  closeAuthModal() {
    this.elAuthModal.classList.remove("active");
  }

  switchAuthTab(tab) {
    [this.elTabLoginBtn, this.elTabSignupBtn].forEach(btn => btn && btn.classList.remove("active"));
    [this.elLoginForm, this.elSignupForm].forEach(form => form && (form.style.display = "none"));

    if (tab === "login") {
      if (this.elTabLoginBtn) this.elTabLoginBtn.classList.add("active");
      if (this.elLoginForm) this.elLoginForm.style.display = "flex";
    } else if (tab === "signup") {
      if (this.elTabSignupBtn) this.elTabSignupBtn.classList.add("active");
      if (this.elSignupForm) this.elSignupForm.style.display = "flex";
    }
  }

  async handleLogin() {
    const email = this.elLoginEmailInput.value.trim();
    const password = this.elLoginPasswordInput.value;
    if (!email || !password || !this.supabase) return;

    try {
      const { data, error } = await this.supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      this.currentUser = data.user;
      this.updateAuthUI();
      this.closeAuthModal();
      this.showToast(this.t("toast_login_success"));
      await this.fetchCloudData();
    } catch (err) {
      this.showToast(this.t("toast_auth_error", { error: err.message }));
    }
  }

  async handleSignup() {
    const email = this.elSignupEmailInput.value.trim();
    const password = this.elSignupPasswordInput.value;
    if (!email || !password || !this.supabase) return;

    try {
      const { data, error } = await this.supabase.auth.signUp({ email, password });
      if (error) throw error;

      // Auto login immediately after signup
      const loginRes = await this.supabase.auth.signInWithPassword({ email, password });
      if (loginRes.data && loginRes.data.user) {
        this.currentUser = loginRes.data.user;
        this.updateAuthUI();
        this.closeAuthModal();
        this.showToast(this.t("toast_login_success"));
        await this.fetchCloudData();
      } else {
        this.closeAuthModal();
        this.showToast(this.t("toast_signup_success"));
      }
    } catch (err) {
      this.showToast(this.t("toast_auth_error", { error: err.message }));
    }
  }

  async handleLogout() {
    if (this.supabase) {
      await this.supabase.auth.signOut();
    }
    this.currentUser = null;
    this.updateAuthUI();
    this.showToast(this.t("toast_logout_success"));
    this.render();
  }

  // --- Cloud Database Data Syncing ---
  async fetchCloudData() {
    if (!this.supabase || !this.currentUser) return;

    try {
      // 1. Fetch transactions
      const { data: txData, error: txError } = await this.supabase
        .from("transactions")
        .select("*")
        .eq("user_id", this.currentUser.id);

      if (!txError && txData && txData.length > 0) {
        this.transactions = txData.map(tx => ({
          id: tx.id,
          type: tx.type,
          amount: Number(tx.amount),
          title: tx.title,
          category: tx.category,
          channel: tx.channel,
          date: tx.date,
          memo: tx.memo
        }));
        this.saveTransactions();
      }

      // 2. Fetch user settings (initial balance & budget)
      const { data: settingsData, error: settingsError } = await this.supabase
        .from("user_settings")
        .select("*")
        .eq("user_id", this.currentUser.id)
        .single();

      if (!settingsError && settingsData) {
        this.initialBalance = Number(settingsData.initial_balance) || 0;
        localStorage.setItem("budget_ledger_initial_balance", this.initialBalance);
      }

      this.render();
    } catch (e) {
      console.error("Failed to fetch cloud data", e);
    }
  }

  async syncCloudTransaction(tx, action = "upsert") {
    if (!this.supabase || !this.currentUser) return;

    try {
      if (action === "upsert") {
        await this.supabase.from("transactions").upsert({
          id: tx.id,
          user_id: this.currentUser.id,
          type: tx.type,
          amount: tx.amount,
          title: tx.title,
          category: tx.category,
          channel: tx.channel,
          date: tx.date,
          memo: tx.memo
        });
      } else if (action === "delete") {
        await this.supabase.from("transactions").delete().eq("id", tx.id);
      }
    } catch (e) {
      console.error("Cloud transaction sync error", e);
    }
  }

  async syncCloudInitialBalance() {
    if (!this.supabase || !this.currentUser) return;

    try {
      await this.supabase.from("user_settings").upsert({
        user_id: this.currentUser.id,
        initial_balance: this.initialBalance,
        updated_at: new Date().toISOString()
      });
    } catch (e) {
      console.error("Cloud initial balance sync error", e);
    }
  }

  showToast(msg) {
    this.elToast.textContent = msg;
    this.elToast.classList.add("show");
    setTimeout(() => {
      this.elToast.classList.remove("show");
    }, 2500);
  }
}

// Global App Instance
let app;
document.addEventListener("DOMContentLoaded", () => {
  app = new BudgetApp();
});
