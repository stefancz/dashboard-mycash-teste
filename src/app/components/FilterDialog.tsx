import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "./ui/dialog";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Checkbox } from "./ui/checkbox";

interface FilterDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onApplyFilters: (filters: {
    category?: string;
    type?: "income" | "expense" | "all";
    account?: string;
    minAmount?: number;
    maxAmount?: number;
  }) => void;
}

export function FilterDialog({ open, onOpenChange, onApplyFilters }: FilterDialogProps) {
  const [category, setCategory] = useState<string>("");
  const [type, setType] = useState<"income" | "expense" | "all">("all");
  const [account, setAccount] = useState<string>("");

  const handleApply = () => {
    onApplyFilters({
      category: category || undefined,
      type: type !== "all" ? type : undefined,
      account: account || undefined,
    });
    onOpenChange(false);
  };

  const handleReset = () => {
    setCategory("");
    setType("all");
    setAccount("");
    onApplyFilters({});
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Filtrar transações</DialogTitle>
        </DialogHeader>
        <div className="space-y-[24px] py-[16px]">
          <div className="space-y-[8px]">
            <Label htmlFor="type">Tipo</Label>
            <Select value={type} onValueChange={(value) => setType(value as "income" | "expense" | "all")}>
              <SelectTrigger id="type">
                <SelectValue placeholder="Selecione o tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="income">Receitas</SelectItem>
                <SelectItem value="expense">Despesas</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-[8px]">
            <Label htmlFor="category">Categoria</Label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger id="category">
                <SelectValue placeholder="Selecione a categoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Todas</SelectItem>
                <SelectItem value="Aluguel">Aluguel</SelectItem>
                <SelectItem value="Alimentação">Alimentação</SelectItem>
                <SelectItem value="Mercado">Mercado</SelectItem>
                <SelectItem value="Academia">Academia</SelectItem>
                <SelectItem value="Lazer">Lazer</SelectItem>
                <SelectItem value="Manutenção">Manutenção</SelectItem>
                <SelectItem value="Salário">Salário</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-[8px]">
            <Label htmlFor="account">Conta/Cartão</Label>
            <Select value={account} onValueChange={setAccount}>
              <SelectTrigger id="account">
                <SelectValue placeholder="Selecione a conta" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Todas</SelectItem>
                <SelectItem value="Conta corrente">Conta corrente</SelectItem>
                <SelectItem value="Nubank">Nubank</SelectItem>
                <SelectItem value="Inter">Inter</SelectItem>
                <SelectItem value="Picpay">Picpay</SelectItem>
                <SelectItem value="Cartão XP">Cartão XP</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter className="gap-[8px]">
          <Button variant="outline" onClick={handleReset}>
            Limpar
          </Button>
          <Button onClick={handleApply} className="bg-[#080b12] hover:bg-[#080b12]/90">
            Aplicar filtros
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
