import { useState, useMemo } from "react";
import { Layout } from "../components/Layout";
import { Button } from "../components/ui/button";
import { Plus, ArrowUp, ArrowDown } from "lucide-react";
import { AnimatedNumber } from "../components/AnimatedNumber";

interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  category: string;
  type: "income" | "expense";
  account: string;
  installments?: string;
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

export function Transactions() {
  const [searchQuery, setSearchQuery] = useState("");
  const [transactions] = useState<Transaction[]>(INITIAL_TRANSACTIONS);

  const filteredTransactions = useMemo(() => {
    if (!searchQuery) return transactions;
    return transactions.filter(
      (t) =>
        t.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [transactions, searchQuery]);

  const financialData = useMemo(() => {
    const totalIncome = transactions
      .filter((t) => t.type === "income")
      .reduce((sum, t) => sum + t.amount, 0);

    const totalExpenses = transactions
      .filter((t) => t.type === "expense")
      .reduce((sum, t) => sum + t.amount, 0);

    return {
      totalIncome,
      totalExpenses,
      balance: totalIncome - totalExpenses,
    };
  }, [transactions]);

  return (
    <Layout
      title="Transações"
      searchQuery={searchQuery}
      onSearchChange={setSearchQuery}
      actionButton={
        <Button
          onClick={() => console.log("Adicionar transação")}
          className="bg-[#080b12] hover:bg-[#080b12]/90 text-white rounded-[100px] px-[16px] py-[12px] gap-[8px] w-full sm:w-auto shrink-0 transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
        >
          <Plus className="size-[16px] transition-transform duration-300 group-hover:rotate-90" />
          <span className="font-semibold text-[16px] sm:text-[18px]">Nova transação</span>
        </Button>
      }
    >
      <div className="space-y-[20px] sm:space-y-[24px]">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-[16px] sm:gap-[20px]">
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

        {/* Transaction Table */}
        <div className="bg-white rounded-[20px] border border-[#E5E7EB] p-[16px] sm:p-[24px] animate-in fade-in slide-in-from-bottom-4 delay-300">
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
              <h3 className="text-[16px] sm:text-[18px] font-semibold text-[#080b12]">
                Extrato detalhado
              </h3>
            </div>
            <div className="flex items-center gap-[8px] sm:gap-[16px] w-full sm:w-auto">
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
                  {filteredTransactions.map((transaction, index) => (
                    <tr
                      key={transaction.id}
                      className="border-b border-[#E5E7EB] last:border-0 transition-all duration-300 hover:bg-gray-50/50 animate-in fade-in slide-in-from-left-4"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <td className="py-[12px] px-[8px] sm:px-[16px] text-[12px] sm:text-[14px] text-[#080b12]">
                        {new Date(transaction.date).toLocaleDateString("pt-BR", {
                          day: "2-digit",
                          month: "2-digit",
                        })}
                      </td>
                      <td className="py-[12px] px-[8px] sm:px-[16px]">
                        <div className="flex items-center gap-[6px] sm:gap-[8px]">
                          {transaction.type === "income" ? (
                            <ArrowDown className="size-[14px] sm:size-[16px] text-[#15BE78] shrink-0" />
                          ) : (
                            <ArrowUp className="size-[14px] sm:size-[16px] text-[#E61E32] shrink-0" />
                          )}
                          <span className="text-[12px] sm:text-[14px] text-[#080b12] truncate max-w-[120px] sm:max-w-none">
                            {transaction.description}
                          </span>
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
              Mostrando 1 a {Math.min(10, filteredTransactions.length)} de{" "}
              {filteredTransactions.length}
            </p>
            <div className="flex items-center gap-[8px]">
              <Button variant="outline" size="icon" className="h-[32px] w-[32px] transition-all duration-300 hover:scale-110">
                ←
              </Button>
              {[1, 2, 3, 4, 5].map((page) => (
                <Button
                  key={page}
                  variant={page === 1 ? "default" : "outline"}
                  size="icon"
                  className="h-[32px] w-[32px] hidden sm:flex transition-all duration-300 hover:scale-110"
                >
                  {page}
                </Button>
              ))}
              <Button variant="outline" size="icon" className="h-[32px] w-[32px] transition-all duration-300 hover:scale-110">
                →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
