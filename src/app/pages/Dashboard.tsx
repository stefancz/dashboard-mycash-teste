import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "../components/Layout";
import { AddTransactionDialog } from "../components/AddTransactionDialog";
import { AddCardDialog } from "../components/AddCardDialog";
import { BudgetCard } from "../components/BudgetCard";
import { CashFlowChart } from "../components/CashFlowChart";
import { AccountCard } from "../components/AccountCard";
import { UpcomingExpense } from "../components/UpcomingExpense";
import { AnimatedNumber } from "../components/AnimatedNumber";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Plus, Search, SlidersHorizontal, Calendar, ChevronLeft, ChevronRight, ArrowUp, ArrowDown, Menu, X } from "lucide-react";
import svgPaths from "@/imports/svg-4csgexenem";
import imgMembers1 from "@/assets/18ce5dd32b29293835b5ed37e9daa6be03009f96.png";
import imgMembers2 from "@/assets/af653292c77a2fe70e1975968fc1e683de087b18.png";
import imgNubankLogo from "@/assets/104735c9164e2efb4290fa655bd47ea2b28be0e7.png";
import imgInterLogo from "@/assets/9947ddd88ee4489faa5d8ed9b00e21de304ef2db.png";
import imgNubankLogo1 from "@/assets/26d52142a70858c0b396955ffc0a8d5d4f15c755.png";

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
    amount: 100,
    category: "Manutenção",
    type: "expense",
    account: "Conta corrente",
  },
  {
    id: "2",
    date: "2026-01-17",
    description: "Conta de Luz",
    amount: 150,
    category: "Manutenção",
    type: "expense",
    account: "Conta corrente",
  },
  {
    id: "3",
    date: "2026-01-17",
    description: "Passeio no parque",
    amount: 750,
    category: "Lazer",
    type: "expense",
    account: "Cartão XP",
    installments: "1/1",
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

export function Dashboard() {
  const navigate = useNavigate();
  const [transactions, setTransactions] = useState<Transaction[]>(INITIAL_TRANSACTIONS);
  const [upcomingExpenses, setUpcomingExpenses] = useState<Transaction[]>(UPCOMING_EXPENSES);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isCardDialogOpen, setIsCardDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [transactionFilter, setTransactionFilter] = useState<"all" | "expense" | "income">("all");
  const [filters, setFilters] = useState<{
    category?: string;
    type?: "income" | "expense" | "all";
    account?: string;
  }>({});
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

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

  // Filter transactions based on search and filters
  const filteredTransactions = useMemo(() => {
    let filtered = transactions;

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (t) =>
          t.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          t.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply type filter (Despesas button)
    if (transactionFilter !== "all") {
      filtered = filtered.filter((t) => t.type === transactionFilter);
    }

    // Apply advanced filters
    if (filters.type && filters.type !== "all") {
      filtered = filtered.filter((t) => t.type === filters.type);
    }
    if (filters.category) {
      filtered = filtered.filter((t) => t.category === filters.category);
    }
    if (filters.account) {
      filtered = filtered.filter((t) => t.account === filters.account);
    }

    return filtered;
  }, [transactions, searchQuery, transactionFilter, filters]);

  const [cards, setCards] = useState([
    {
      id: "1",
      name: "Nubank",
      balance: 120.0,
      dueDate: "Vence dia 10",
      lastDigits: "5897",
      logo: imgNubankLogo,
      color: "#8A05BE",
    },
    {
      id: "2",
      name: "Inter",
      balance: 2300.0,
      dueDate: "Vence dia 21",
      lastDigits: "5897",
      logo: imgInterLogo,
      color: "#FF7A00",
    },
    {
      id: "3",
      name: "Picpay",
      balance: 17000.0,
      dueDate: "Vence dia 12",
      lastDigits: "5897",
      logo: imgNubankLogo1,
      color: "#21C25E",
    },
  ]);

  const handleAddCard = (newCard: {
    name: string;
    brand: string;
    lastDigits: string;
    amount: number;
    dueDate: string;
  }) => {
    const logoMap: { [key: string]: string } = {
      nubank: imgNubankLogo,
      inter: imgInterLogo,
      picpay: imgNubankLogo1,
    };
    const colorMap: { [key: string]: string } = {
      nubank: "#8A05BE",
      inter: "#FF7A00",
      picpay: "#21C25E",
      xp: "#000000",
      outro: "#6B7280",
    };

    const card = {
      id: Date.now().toString(),
      name: newCard.name,
      balance: newCard.amount,
      dueDate: `Vence dia ${newCard.dueDate}`,
      lastDigits: newCard.lastDigits,
      logo: logoMap[newCard.brand] || imgNubankLogo1,
      color: colorMap[newCard.brand] || "#6B7280",
    };
    setCards([...cards, card]);
  };

  const handleFilterChange = (newFilters: {
    category?: string;
    type?: "income" | "expense" | "all";
    account?: string;
  }) => {
    setFilters(newFilters);
  };

  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);
  const paginatedTransactions = filteredTransactions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Layout
      searchQuery={searchQuery}
      onSearchChange={setSearchQuery}
      onFilterChange={handleFilterChange}
      actionButton={
        <Button
          onClick={() => setIsDialogOpen(true)}
          className="bg-[#080b12] hover:bg-[#080b12]/90 text-white rounded-[100px] px-[16px] py-[12px] gap-[8px] w-full sm:w-auto shrink-0 transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
        >
          <Plus className="size-[16px] transition-transform duration-300 group-hover:rotate-90" />
          <span className="font-semibold text-[16px] sm:text-[18px]">Nova transação</span>
        </Button>
      }
    >
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
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-[24px] w-[24px] transition-all duration-300 hover:scale-110 hover:bg-gray-100 active:scale-95"
                onClick={() => setIsCardDialogOpen(true)}
                aria-label="Adicionar cartão"
              >
                <Plus className="size-[16px]" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-[24px] w-[24px] transition-all duration-300 hover:scale-110 hover:bg-gray-100 active:scale-95"
                onClick={() => navigate("/cartoes")}
                aria-label="Ver todos os cartões"
              >
                <ChevronRight className="size-[16px]" />
              </Button>
            </div>
          </div>
          <div className="space-y-[4px]">
            {cards.map((card) => (
              <AccountCard
                key={card.id}
                name={card.name}
                balance={card.balance}
                dueDate={card.dueDate}
                lastDigits={card.lastDigits}
                logo={card.logo}
                color={card.color}
              />
            ))}
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
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-[24px] w-[24px] transition-all duration-300 hover:scale-110 hover:bg-gray-100 active:scale-95"
            onClick={() => setIsDialogOpen(true)}
            aria-label="Adicionar despesa"
          >
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
            <Button 
              variant={transactionFilter === "expense" ? "default" : "outline"} 
              size="sm" 
              className="w-full sm:w-auto transition-all duration-300 hover:scale-105 active:scale-95"
              onClick={() => setTransactionFilter(transactionFilter === "expense" ? "all" : "expense")}
            >
              {transactionFilter === "expense" ? "Todas" : "Despesas"}
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
                {paginatedTransactions.map((transaction, index) => (
                  <tr key={transaction.id} className="border-b border-[#E5E7EB] last:border-0">
                    <td className="py-[12px] px-[8px] sm:px-[16px] hidden sm:table-cell">
                      <img
                        src={index % 3 === 0 ? imgMembers1 : index % 3 === 1 ? imgMembers1 : imgMembers2}
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
                      <AnimatedNumber value={transaction.amount} duration={1200} />
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
            Mostrando {(currentPage - 1) * itemsPerPage + 1} a {Math.min(currentPage * itemsPerPage, filteredTransactions.length)} de {filteredTransactions.length}
          </p>
          <div className="flex items-center gap-[8px]">
            <Button 
              variant="outline" 
              size="icon" 
              className="h-[32px] w-[32px] transition-all duration-300 hover:scale-110 active:scale-95"
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="size-[16px]" />
            </Button>
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              const page = i + 1;
              return (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  size="icon"
                  className="h-[32px] w-[32px] hidden sm:flex transition-all duration-300 hover:scale-110 active:scale-95"
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </Button>
              );
            })}
            <span className="sm:hidden text-[14px] text-[#6B7280]">{currentPage} / {totalPages}</span>
            <Button 
              variant="outline" 
              size="icon" 
              className="h-[32px] w-[32px] transition-all duration-300 hover:scale-110 active:scale-95"
              onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="size-[16px]" />
            </Button>
          </div>
        </div>
      </div>

      {/* Add Transaction Dialog */}
      <AddTransactionDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        onAddTransaction={handleAddTransaction}
      />

      {/* Add Card Dialog */}
      <AddCardDialog
        open={isCardDialogOpen}
        onOpenChange={setIsCardDialogOpen}
        onAddCard={handleAddCard}
      />
    </Layout>
  );
}
