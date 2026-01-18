import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/app/components/ui/dialog";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select";

interface AddCardDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAddCard: (card: {
    name: string;
    brand: string;
    lastDigits: string;
    amount: number;
    dueDate: string;
  }) => void;
}

export function AddCardDialog({ open, onOpenChange, onAddCard }: AddCardDialogProps) {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [lastDigits, setLastDigits] = useState("");
  const [amount, setAmount] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !brand || !lastDigits || !amount || !dueDate) {
      return;
    }

    onAddCard({
      name,
      brand,
      lastDigits,
      amount: parseFloat(amount),
      dueDate,
    });

    // Reset form
    setName("");
    setBrand("");
    setLastDigits("");
    setAmount("");
    setDueDate("");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Adicionar cartão</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-[20px]">
          <div className="space-y-[8px]">
            <Label htmlFor="name">Nome do cartão</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ex: Nubank"
              className="border-[#9CA3AF] rounded-[8px]"
              required
            />
          </div>

          <div className="space-y-[8px]">
            <Label htmlFor="brand">Bandeira</Label>
            <Select value={brand} onValueChange={setBrand}>
              <SelectTrigger id="brand" className="border-[#9CA3AF] rounded-[8px]">
                <SelectValue placeholder="Selecione a bandeira" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nubank">Nubank</SelectItem>
                <SelectItem value="inter">Inter</SelectItem>
                <SelectItem value="picpay">Picpay</SelectItem>
                <SelectItem value="xp">XP</SelectItem>
                <SelectItem value="outro">Outro</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-[8px]">
            <Label htmlFor="lastDigits">Últimos 4 dígitos</Label>
            <Input
              id="lastDigits"
              value={lastDigits}
              onChange={(e) => setLastDigits(e.target.value.replace(/\D/g, "").slice(0, 4))}
              placeholder="5897"
              maxLength={4}
              className="border-[#9CA3AF] rounded-[8px]"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-[16px]">
            <div className="space-y-[8px]">
              <Label htmlFor="amount">Saldo atual</Label>
              <Input
                id="amount"
                type="number"
                step="0.01"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0,00"
                className="border-[#9CA3AF] rounded-[8px]"
                required
              />
            </div>

            <div className="space-y-[8px]">
              <Label htmlFor="dueDate">Vencimento (dia)</Label>
              <Input
                id="dueDate"
                type="number"
                min="1"
                max="31"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                placeholder="10"
                className="border-[#9CA3AF] rounded-[8px]"
                required
              />
            </div>
          </div>

          <DialogFooter className="gap-[8px] mt-[24px]">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancelar
            </Button>
            <Button type="submit" className="bg-[#080b12] hover:bg-[#080b12]/90">
              Adicionar cartão
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
