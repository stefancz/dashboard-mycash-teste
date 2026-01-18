import { useState } from "react";
import { Layout } from "../components/Layout";
import { AccountCard } from "../components/AccountCard";
import { Button } from "../components/ui/button";
import { Plus } from "lucide-react";
import imgNubankLogo from "@/assets/104735c9164e2efb4290fa655bd47ea2b28be0e7.png";
import imgInterLogo from "@/assets/9947ddd88ee4489faa5d8ed9b00e21de304ef2db.png";
import imgNubankLogo1 from "@/assets/26d52142a70858c0b396955ffc0a8d5d4f15c755.png";

const CARDS = [
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
];

export function Cards() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCards = CARDS.filter((card) =>
    card.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout
      title="Cartões"
      searchQuery={searchQuery}
      onSearchChange={setSearchQuery}
      showDatePicker={false}
      actionButton={
        <Button
          onClick={() => console.log("Adicionar cartão")}
          className="bg-[#080b12] hover:bg-[#080b12]/90 text-white rounded-[100px] px-[16px] py-[12px] gap-[8px] w-full sm:w-auto shrink-0 transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
        >
          <Plus className="size-[16px] transition-transform duration-300 group-hover:rotate-90" />
          <span className="font-semibold text-[16px] sm:text-[18px]">Novo cartão</span>
        </Button>
      }
    >
      <div className="space-y-[16px]">
        {/* Summary */}
        <div className="bg-white rounded-[20px] border border-[#E5E7EB] p-[20px] sm:p-[24px] animate-in fade-in slide-in-from-bottom-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-[16px]">
            <div>
              <p className="text-[14px] text-[#6B7280] mb-[4px]">Total em cartões</p>
              <p className="text-[24px] sm:text-[28px] font-bold text-[#080b12]">
                R$ {CARDS.reduce((sum, card) => sum + card.balance, 0).toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                })}
              </p>
            </div>
            <div className="text-right">
              <p className="text-[14px] text-[#6B7280] mb-[4px]">Cartões ativos</p>
              <p className="text-[24px] sm:text-[28px] font-bold text-[#080b12]">
                {CARDS.length}
              </p>
            </div>
          </div>
        </div>

        {/* Cards List */}
        <div className="bg-white rounded-[20px] border border-[#E5E7EB] p-[20px] sm:p-[24px] animate-in fade-in slide-in-from-bottom-4 delay-75">
          <div className="flex items-center justify-between mb-[24px]">
            <div className="flex items-center gap-[8px]">
              <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 20 20">
                <rect
                  x="2"
                  y="5"
                  width="16"
                  height="10"
                  rx="2"
                  stroke="#080B12"
                  strokeWidth="1.5"
                />
                <path d="M2 8h16" stroke="#080B12" strokeWidth="1.5" />
              </svg>
              <h3 className="text-[16px] sm:text-[18px] font-semibold text-[#080b12]">
                Meus cartões
              </h3>
            </div>
            <div className="flex gap-[8px]">
              <Button variant="ghost" size="icon" className="h-[24px] w-[24px] transition-all duration-300 hover:scale-110">
                <Plus className="size-[16px]" />
              </Button>
            </div>
          </div>
          <div className="space-y-[4px]">
            {filteredCards.length > 0 ? (
              filteredCards.map((card, index) => (
                <div
                  key={card.id}
                  className="animate-in fade-in slide-in-from-left-4"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <AccountCard
                    name={card.name}
                    balance={card.balance}
                    dueDate={card.dueDate}
                    lastDigits={card.lastDigits}
                    logo={card.logo}
                    color={card.color}
                  />
                </div>
              ))
            ) : (
              <div className="text-center py-[40px]">
                <p className="text-[14px] text-[#6B7280]">Nenhum cartão encontrado</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
