import { useState, useEffect, useMemo } from "react";
import svgPaths from "@/imports/svg-4csgexenem";
import imgMembers from "@/assets/2d2d4de26d16019c939c7468d658dc71ae4fb8f0.png";
import imgMembers1 from "@/assets/18ce5dd32b29293835b5ed37e9daa6be03009f96.png";
import imgMembers2 from "@/assets/af653292c77a2fe70e1975968fc1e683de087b18.png";
import imgNubankLogo from "@/assets/104735c9164e2efb4290fa655bd47ea2b28be0e7.png";
import imgInterLogo from "@/assets/9947ddd88ee4489faa5d8ed9b00e21de304ef2db.png";
import imgNubankLogo1 from "@/assets/26d52142a70858c0b396955ffc0a8d5d4f15c755.png";
import { AddTransactionDialog } from "@/app/components/AddTransactionDialog";
import { BudgetCard } from "@/app/components/BudgetCard";
import { CashFlowChart } from "@/app/components/CashFlowChart";
import { AccountCard } from "@/app/components/AccountCard";
import { UpcomingExpense } from "@/app/components/UpcomingExpense";
import { AnimatedNumber } from "@/app/components/AnimatedNumber";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import { Plus, Search, SlidersHorizontal, Calendar, ChevronLeft, ChevronRight, ArrowUp, ArrowDown, Menu, X } from "lucide-react";

interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  category: string;
  type: "income" | "expense";
  account: string;
  installments?: string;
  isPaid?: boolean;
}

const INITIAL_TRANSACTIONS: Transaction[] = [
  {
    id: "1",
    date: "2026-01-17",
    description: "Conta de água",
    amount: 150.0,
    category: "Manutenção",
    type: "expense",
    account: "Conta corrente",
  },
  {
    id: "2",
    date: "2026-01-17",
    description: "Conta de Luz",
    amount: 150.0,
    category: "Manutenção",
    type: "expense",
    account: "Conta corrente",
  },
  {
    id: "3",
    date: "2026-01-17",
    description: "Passeio no parque",
    amount: 750.0,
    category: "Lazer",
    type: "expense",
    account: "Cartão XP",
    installments: "1/1",
  },
  {
    id: "4",
    date: "2026-01-15",
    description: "Salário",
    amount: 12000.0,
    category: "Salário",
    type: "income",
    account: "Conta corrente",
  },
  {
    id: "5",
    date: "2026-01-10",
    description: "Aluguel Janeiro",
    amount: 4000.0,
    category: "Aluguel",
    type: "expense",
    account: "Conta corrente",
  },
  {
    id: "6",
    date: "2026-01-08",
    description: "Mercado",
    amount: 850.0,
    category: "Mercado",
    type: "expense",
    account: "Nubank",
  },
  {
    id: "7",
    date: "2026-01-05",
    description: "Restaurante",
    amount: 450.0,
    category: "Alimentação",
    type: "expense",
    account: "Inter",
  },
  {
    id: "8",
    date: "2026-01-03",
    description: "Academia",
    amount: 120.0,
    category: "Academia",
    type: "expense",
    account: "Picpay",
  },
];

const UPCOMING_EXPENSES: Transaction[] = [
  {
    id: "u1",
    date: "2026-01-21",
    description: "Conta de Luz",
    amount: 154.0,
    category: "Manutenção",
    type: "expense",
    account: "Crédito Nubank **** 5897",
    isPaid: false,
  },
  {
    id: "u2",
    date: "2026-01-21",
    description: "Conta de Luz",
    amount: 154.0,
    category: "Manutenção",
    type: "expense",
    account: "Crédito Nubank **** 5897",
    isPaid: false,
  },
  {
    id: "u3",
    date: "2026-01-21",
    description: "Conta de Luz",
    amount: 154.0,
    category: "Manutenção",
    type: "expense",
    account: "Crédito Nubank **** 5897",
    isPaid: false,
  },
  {
    id: "u4",
    date: "2026-01-21",
    description: "Conta de Luz",
    amount: 154.0,
    category: "Manutenção",
    type: "expense",
    account: "Crédito Nubank **** 5897",
    isPaid: false,
  },
  {
    id: "u5",
    date: "2026-01-21",
    description: "Conta de Luz",
    amount: 154.0,
    category: "Manutenção",
    type: "expense",
    account: "Crédito Nubank **** 5897",
    isPaid: false,
  },
];

const BUDGET_CATEGORIES = [
  { name: "Aluguel", allocated: 4000 },
  { name: "Alimentação", allocated: 2000 },
  { name: "Mercado", allocated: 1500 },
  { name: "Academia", allocated: 120 },
];

export default function App() {
  const [transactions, setTransactions] = useState<Transaction[]>(INITIAL_TRANSACTIONS);
  const [upcomingExpenses, setUpcomingExpenses] = useState<Transaction[]>(UPCOMING_EXPENSES);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Calculate financial data
  const financialData = useMemo(() => {
    const totalIncome = transactions
      .filter((t) => t.type === "income")
      .reduce((sum, t) => sum + t.amount, 0);
    
    const totalExpenses = transactions
      .filter((t) => t.type === "expense")
      .reduce((sum, t) => sum + t.amount, 0);
    
    const balance = totalIncome - totalExpenses;

    // Calculate budget spending
    const budgetSpending = BUDGET_CATEGORIES.map((budget) => {
      const spent = transactions
        .filter((t) => t.type === "expense" && t.category === budget.name)
        .reduce((sum, t) => sum + t.amount, 0);
      return { ...budget, spent };
    });

    // Calculate monthly cash flow
    const monthlyData = [
      { month: "JAN", receitas: 12000, despesas: 8000 },
      { month: "FEV", receitas: 12500, despesas: 9500 },
      { month: "MAR", receitas: 13000, despesas: 11000 },
      { month: "ABR", receitas: 12000, despesas: 10500 },
      { month: "MAI", receitas: 14000, despesas: 9000 },
      { month: "JUN", receitas: 12500, despesas: 10000 },
      { month: "JUL", receitas: 12000, despesas: 8500 },
      { month: "AGO", receitas: 13500, despesas: 9500 },
      { month: "SET", receitas: 12000, despesas: 10000 },
      { month: "OUT", receitas: 12500, despesas: 8000 },
      { month: "NOV", receitas: 13000, despesas: 9000 },
      { month: "DEZ", receitas: totalIncome, despesas: totalExpenses },
    ];

    return {
      totalIncome,
      totalExpenses,
      balance,
      budgetSpending,
      monthlyData,
    };
  }, [transactions]);

  const handleAddTransaction = (newTransaction: Omit<Transaction, "id">) => {
    const transaction: Transaction = {
      ...newTransaction,
      id: Date.now().toString(),
    };
    setTransactions([transaction, ...transactions]);
  };

  const handleToggleExpensePaid = (id: string) => {
    setUpcomingExpenses(
      upcomingExpenses.map((expense) =>
        expense.id === id ? { ...expense, isPaid: !expense.isPaid } : expense
      )
    );
  };

  // Filter transactions based on search
  const filteredTransactions = useMemo(() => {
    if (!searchQuery) return transactions;
    return transactions.filter(
      (t) =>
        t.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [transactions, searchQuery]);

  return (
    <div className="flex h-screen bg-[#F9FAFB] overflow-hidden">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <>
          {/* Overlay for mobile */}
          <div 
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
          
          {/* Sidebar */}
          <div className="bg-white fixed lg:relative lg:w-[300px] w-[280px] h-full border-r border-[#E5E7EB] p-[24px] lg:p-[32px] flex flex-col justify-between shrink-0 z-50 transition-transform">
            {/* Logo */}
            <div className="flex flex-col gap-[40px] lg:gap-[56px]">
              <div className="h-[29.818px] w-[139.648px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 139.648 29.8184">
                  <g>
                    <path d={svgPaths.p2d732980} fill="#060A11" />
                    <path d={svgPaths.p2590a480} fill="#060A11" />
                    <path d={svgPaths.p3cad3300} fill="#060A11" />
                    <path d={svgPaths.p5133700} fill="#060A11" />
                    <path d={svgPaths.p23415d40} fill="#060A11" />
                    <path d={svgPaths.p1113c900} fill="#060A11" />
                    <path d={svgPaths.pbb75a40} fill="#060A11" />
                  </g>
                </svg>
              </div>

              {/* Menu */}
              <div className="flex flex-col gap-[8px]">
                <button className="bg-[#d7ff00] rounded-[100px] flex items-center gap-[8px] px-[16px] py-[12px] w-full">
                  <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                    <path d={svgPaths.pf7ed600} fill="#080B12" />
                  </svg>
                  <span className="font-semibold text-[18px] text-[#080b12]">Home</span>
                </button>
                <button className="rounded-[100px] flex items-center gap-[8px] px-[16px] py-[12px] w-full hover:bg-[#F3F4F6]">
                  <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                    <path d={svgPaths.p320ad300} fill="#080B12" />
                    <path d={svgPaths.p2e706500} fill="#080B12" />
                  </svg>
                  <span className="font-semibold text-[18px] text-[#080b12]">Cartões</span>
                </button>
              </div>
            </div>

            {/* User info */}
            <div className="flex flex-col gap-[12px]">
              <img src={imgMembers} alt="User" className="size-[24px] rounded-full" />
              <div>
                <p className="font-semibold text-[16px] text-[#080b12]">Lucas Marte</p>
                <p className="text-[14px] text-[#080b12] truncate">lucasmarte@gmail.com</p>
              </div>
            </div>

            {/* Toggle button - Desktop only */}
            <button
              onClick={() => setSidebarOpen(false)}
              className="absolute bg-white -right-[12px] top-[35px] p-[4px] rounded-full shadow-lg border border-[#E5E7EB] hidden lg:block"
            >
              <ChevronLeft className="size-[16px]" />
            </button>
            
            {/* Close button - Mobile only */}
            <button
              onClick={() => setSidebarOpen(false)}
              className="absolute top-[24px] right-[24px] p-[4px] lg:hidden"
            >
              <X className="size-[20px]" />
            </button>
          </div>
        </>
      )}

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-[16px] sm:p-[24px] lg:p-[32px] max-w-[1400px] mx-auto">
          {/* Navbar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-[16px] mb-[24px] lg:mb-[32px]">
            {/* Left side - Search and filters */}
            <div className="flex items-center gap-[8px] w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0">
              {/* Menu button - shows when sidebar is closed */}
              {!sidebarOpen && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSidebarOpen(true)}
                  className="shrink-0"
                >
                  <Menu className="size-[20px]" />
                </Button>
              )}
              
              {/* Search */}
              <div className="flex items-center gap-[8px] px-[16px] sm:px-[24px] py-[12px] border border-[#9CA3AF] rounded-[100px] min-w-[140px] sm:w-[175px] shrink-0 transition-all duration-300 focus-within:border-[#2a89ef] focus-within:ring-2 focus-within:ring-[#2a89ef]/20 hover:border-[#6B7280]">
                <Search className="size-[16px] shrink-0 transition-colors duration-300 text-[#6B7280] group-focus-within:text-[#2a89ef]" />
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Pesquisar"
                  className="border-0 p-0 h-auto focus-visible:ring-0 text-[14px] w-full bg-transparent"
                />
              </div>

              {/* Filter button */}
              <Button variant="ghost" size="icon" className="shrink-0 transition-all duration-300 hover:scale-110 hover:bg-gray-100 active:scale-95">
                <SlidersHorizontal className="size-[16px] transition-transform duration-300 hover:rotate-90" />
              </Button>

              {/* Date selector - Hidden on mobile */}
              <div className="hidden md:flex items-center gap-[8px] px-[24px] py-[12px] border border-[#9CA3AF] rounded-[100px] shrink-0 transition-all duration-300 hover:border-[#2a89ef] hover:bg-[#2a89ef]/5 cursor-pointer">
                <Calendar className="size-[16px] transition-colors duration-300 text-[#6B7280] group-hover:text-[#2a89ef]" />
                <span className="text-[14px] whitespace-nowrap">01 Jan - 31 Jan 2026</span>
              </div>

              {/* Members - Hidden on small screens */}
              <div className="hidden lg:flex items-center gap-[8px] ml-[8px] shrink-0">
                <img src={imgMembers1} alt="" className="size-[44px] rounded-full border-2 border-white" />
                <img src={imgMembers2} alt="" className="size-[44px] rounded-full border-2 border-white" />
                <button className="size-[44px] rounded-full bg-[#D1D5DB] border-2 border-white flex items-center justify-center">
                  <Plus className="size-[24px]" />
                </button>
              </div>
            </div>

            {/* Add transaction button */}
            <Button
              onClick={() => setIsDialogOpen(true)}
              className="bg-[#080b12] hover:bg-[#080b12]/90 text-white rounded-[100px] px-[16px] py-[12px] gap-[8px] w-full sm:w-auto shrink-0 transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
            >
              <Plus className="size-[16px] transition-transform duration-300 group-hover:rotate-90" />
              <span className="font-semibold text-[16px] sm:text-[18px]">Nova transação</span>
            </Button>
          </div>

          {/* Budget Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[12px] sm:gap-[18px] mb-[20px] sm:mb-[30px]">
            {financialData.budgetSpending.map((budget, index) => (
              <BudgetCard
                key={budget.name}
                category={budget.name}
                spent={budget.spent}
                allocated={budget.allocated}
                index={index}
              />
            ))}
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-[16px] sm:gap-[20px] mb-[20px] sm:mb-[30px]">
            {/* Total Balance */}
            <div className="bg-white rounded-[20px] border border-[#E5E7EB] p-[20px] sm:p-[24px] flex flex-col justify-center gap-[24px] sm:gap-[32px] transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:border-[#2a89ef]/20 animate-in fade-in slide-in-from-bottom-4">
              <div className="size-[24px] transition-transform duration-300 hover:scale-110">
                <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M3 8C3 6.89543 3.89543 6 5 6H19C20.1046 6 21 6.89543 21 8V16C21 17.1046 20.1046 18 19 18H5C3.89543 18 3 17.1046 3 16V8Z"
                    stroke="#080B12"
                    strokeWidth="2"
                  />
                  <path d="M7 6V4" stroke="#080B12" strokeWidth="2" strokeLinecap="round" />
                  <path d="M17 6V4" stroke="#080B12" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="12" cy="12" r="2" fill="#080B12" />
                </svg>
              </div>
              <div>
                <p className="text-[16px] sm:text-[18px] text-[#080b12] mb-[4px]">Saldo total</p>
                <p className="text-[24px] sm:text-[28px] font-bold text-[#2a89ef]">
                  <AnimatedNumber value={financialData.balance} duration={1500} />
                </p>
              </div>
            </div>

            {/* Income */}
            <div className="bg-white rounded-[20px] border border-[#E5E7EB] p-[20px] sm:p-[24px] flex flex-col justify-center gap-[24px] sm:gap-[32px] transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:border-[#15BE78]/20 animate-in fade-in slide-in-from-bottom-4 delay-75">
              <ArrowDown className="size-[24px] text-[#15BE78] transition-transform duration-300 hover:scale-110" />
              <div>
                <p className="text-[16px] sm:text-[18px] text-[#080b12] mb-[4px]">Receitas</p>
                <p className="text-[24px] sm:text-[28px] font-bold text-[#080b12]">
                  <AnimatedNumber value={financialData.totalIncome} duration={1500} />
                </p>
              </div>
            </div>

            {/* Expenses */}
            <div className="bg-white rounded-[20px] border border-[#E5E7EB] p-[20px] sm:p-[24px] flex flex-col justify-center gap-[24px] sm:gap-[32px] transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:border-[#E61E32]/20 animate-in fade-in slide-in-from-bottom-4 delay-150">
              <ArrowUp className="size-[24px] text-[#E61E32] transition-transform duration-300 hover:scale-110" />
              <div>
                <p className="text-[16px] sm:text-[18px] text-[#080b12] mb-[4px]">Despesas</p>
                <p className="text-[24px] sm:text-[28px] font-bold text-[#080b12]">
                  <AnimatedNumber value={financialData.totalExpenses} duration={1500} />
                </p>
              </div>
            </div>
          </div>

          {/* Chart and Cards Section */}
          <div className="grid grid-cols-1 xl:grid-cols-[1fr_400px] gap-[20px] sm:gap-[30px] mb-[20px] sm:mb-[30px]">
            {/* Cash Flow Chart */}
            <CashFlowChart data={financialData.monthlyData} />

            {/* Cards & Accounts */}
            <div className="bg-white rounded-[20px] border border-[#E5E7EB] p-[20px] sm:p-[24px]">
              <div className="flex items-center justify-between mb-[24px]">
                <div className="flex items-center gap-[8px]">
                  <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 20 20">
                    <rect x="2" y="5" width="16" height="10" rx="2" stroke="#080B12" strokeWidth="1.5" />
                    <path d="M2 8h16" stroke="#080B12" strokeWidth="1.5" />
                  </svg>
                  <h3 className="text-[16px] sm:text-[18px] font-semibold text-[#080b12]">Cards & contas</h3>
                </div>
                <div className="flex gap-[8px]">
                  <Button variant="ghost" size="icon" className="h-[24px] w-[24px]">
                    <Plus className="size-[16px]" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-[24px] w-[24px]">
                    <ChevronRight className="size-[16px]" />
                  </Button>
                </div>
              </div>
              <div className="space-y-[4px]">
                <AccountCard
                  name="Nubank"
                  balance={120.0}
                  dueDate="Vence dia 10"
                  lastDigits="5897"
                  logo={imgNubankLogo}
                  color="#8A05BE"
                />
                <AccountCard
                  name="Inter"
                  balance={2300.0}
                  dueDate="Vence dia 21"
                  lastDigits="5897"
                  logo={imgInterLogo}
                  color="#FF7A00"
                />
                <AccountCard
                  name="Picpay"
                  balance={17000.0}
                  dueDate="Vence dia 12"
                  lastDigits="5897"
                  logo={imgNubankLogo1}
                  color="#21C25E"
                />
              </div>
            </div>
          </div>

          {/* Upcoming Expenses */}
          <div className="bg-white rounded-[20px] border border-[#E5E7EB] p-[20px] sm:p-[24px] mb-[20px] sm:mb-[30px]">
            <div className="flex items-center justify-between mb-[24px]">
              <div className="flex items-center gap-[8px]">
                <Calendar className="size-[20px]" />
                <h3 className="text-[16px] sm:text-[18px] font-semibold text-[#080b12]">Próximas despesas</h3>
              </div>
              <Button variant="ghost" size="icon" className="h-[24px] w-[24px]">
                <Plus className="size-[16px]" />
              </Button>
            </div>
            <div className="space-y-[0px]">
              {upcomingExpenses.slice(0, 5).map((expense) => (
                <UpcomingExpense
                  key={expense.id}
                  description={expense.description}
                  amount={expense.amount}
                  dueDate={`Vence dia ${expense.date.split("-")[2]}/01`}
                  account={expense.account}
                  isPaid={expense.isPaid || false}
                  onTogglePaid={() => handleToggleExpensePaid(expense.id)}
                />
              ))}
            </div>
          </div>

          {/* Transaction Table */}
          <div className="bg-white rounded-[20px] border border-[#E5E7EB] p-[16px] sm:p-[24px]">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-[16px] mb-[24px]">
              <div className="flex items-center gap-[8px]">
                <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 20 20">
                  <path
                    d="M3 5h14M3 10h14M3 15h14"
                    stroke="#080B12"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                <h3 className="text-[16px] sm:text-[18px] font-semibold text-[#080b12]">Extrato detalhado</h3>
              </div>
              <div className="flex items-center gap-[8px] sm:gap-[16px] w-full sm:w-auto">
                <div className="hidden sm:flex items-center gap-[8px] px-[16px] py-[8px] border border-[#E5E7EB] rounded-[8px]">
                  <Search className="size-[16px]" />
                  <span className="text-[14px] text-[#6B7280]">Buscar lançamentos</span>
                </div>
                <Button variant="outline" size="sm" className="w-full sm:w-auto">
                  Despesas
                </Button>
              </div>
            </div>

            {/* Table - Scrollable on mobile */}
            <div className="overflow-x-auto -mx-[16px] sm:mx-0">
              <div className="inline-block min-w-full align-middle">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#E5E7EB]">
                      <th className="text-left py-[12px] px-[8px] sm:px-[16px] text-[12px] sm:text-[14px] font-semibold text-[#6B7280] hidden sm:table-cell">
                        Membro
                      </th>
                      <th className="text-left py-[12px] px-[8px] sm:px-[16px] text-[12px] sm:text-[14px] font-semibold text-[#6B7280]">
                        Data
                      </th>
                      <th className="text-left py-[12px] px-[8px] sm:px-[16px] text-[12px] sm:text-[14px] font-semibold text-[#6B7280]">
                        Descrição
                      </th>
                      <th className="text-left py-[12px] px-[8px] sm:px-[16px] text-[12px] sm:text-[14px] font-semibold text-[#6B7280] hidden lg:table-cell">
                        Categorias
                      </th>
                      <th className="text-left py-[12px] px-[8px] sm:px-[16px] text-[12px] sm:text-[14px] font-semibold text-[#6B7280] hidden md:table-cell">
                        Conta/cartão
                      </th>
                      <th className="text-left py-[12px] px-[8px] sm:px-[16px] text-[12px] sm:text-[14px] font-semibold text-[#6B7280] hidden xl:table-cell">
                        Parcelas
                      </th>
                      <th className="text-right py-[12px] px-[8px] sm:px-[16px] text-[12px] sm:text-[14px] font-semibold text-[#6B7280]">
                        Valor
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredTransactions.slice(0, 10).map((transaction, index) => (
                      <tr key={transaction.id} className="border-b border-[#E5E7EB] last:border-0">
                        <td className="py-[12px] px-[8px] sm:px-[16px] hidden sm:table-cell">
                          <img
                            src={index % 3 === 0 ? imgMembers : index % 3 === 1 ? imgMembers1 : imgMembers2}
                            alt=""
                            className="size-[32px] rounded-full"
                          />
                        </td>
                        <td className="py-[12px] px-[8px] sm:px-[16px] text-[12px] sm:text-[14px] text-[#080b12]">
                          {new Date(transaction.date).toLocaleDateString("pt-BR", { day: '2-digit', month: '2-digit' })}
                        </td>
                        <td className="py-[12px] px-[8px] sm:px-[16px]">
                          <div className="flex items-center gap-[6px] sm:gap-[8px]">
                            {transaction.type === "income" ? (
                              <ArrowDown className="size-[14px] sm:size-[16px] text-[#15BE78] shrink-0" />
                            ) : (
                              <ArrowUp className="size-[14px] sm:size-[16px] text-[#E61E32] shrink-0" />
                            )}
                            <span className="text-[12px] sm:text-[14px] text-[#080b12] truncate max-w-[120px] sm:max-w-none">{transaction.description}</span>
                          </div>
                        </td>
                        <td className="py-[12px] px-[8px] sm:px-[16px] text-[12px] sm:text-[14px] text-[#080b12] hidden lg:table-cell">
                          {transaction.category}
                        </td>
                        <td className="py-[12px] px-[8px] sm:px-[16px] text-[12px] sm:text-[14px] text-[#080b12] hidden md:table-cell truncate max-w-[120px]">
                          {transaction.account}
                        </td>
                        <td className="py-[12px] px-[8px] sm:px-[16px] text-[12px] sm:text-[14px] text-center text-[#080b12] hidden xl:table-cell">
                          {transaction.installments || "-"}
                        </td>
                        <td className="py-[12px] px-[8px] sm:px-[16px] text-[12px] sm:text-[14px] text-right font-semibold text-[#080b12] whitespace-nowrap">
                          R$ {transaction.amount.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Pagination */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-[16px] mt-[24px] pt-[16px] border-t border-[#E5E7EB]">
              <p className="text-[12px] sm:text-[14px] text-[#6B7280]">
                Mostrando 1 a {Math.min(10, filteredTransactions.length)} de {filteredTransactions.length}
              </p>
              <div className="flex items-center gap-[8px]">
                <Button variant="outline" size="icon" className="h-[32px] w-[32px]">
                  <ChevronLeft className="size-[16px]" />
                </Button>
                {[1, 2, 3, 4, 5].map((page) => (
                  <Button
                    key={page}
                    variant={page === 1 ? "default" : "outline"}
                    size="icon"
                    className="h-[32px] w-[32px] hidden sm:flex"
                  >
                    {page}
                  </Button>
                ))}
                <span className="sm:hidden text-[14px] text-[#6B7280]">1 / 5</span>
                <Button variant="outline" size="icon" className="h-[32px] w-[32px]">
                  <ChevronRight className="size-[16px]" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Transaction Dialog */}
      <AddTransactionDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        onAddTransaction={handleAddTransaction}
      />
    </div>
  );
}