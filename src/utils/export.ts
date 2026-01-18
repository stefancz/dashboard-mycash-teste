import { Transaction } from '@/types'
import { formatCurrency, formatDate } from './formatters'

/**
 * Exporta transações para CSV
 */
export function exportToCSV(transactions: Transaction[], filename: string = 'transacoes') {
  const headers = ['Data', 'Descrição', 'Tipo', 'Categoria', 'Conta/Cartão', 'Parcelas', 'Valor']
  
  const csvContent = [
    headers.join(','),
    ...transactions.map((t) => {
      const row = [
        formatDate(t.date),
        `"${t.description}"`,
        t.type === 'income' ? 'Receita' : 'Despesa',
        `"${t.category}"`,
        `"${t.card || t.account || '-'}"`,
        `"${t.installments || '-'}"`,
        formatCurrency(t.amount),
      ]
      return row.join(',')
    }),
  ].join('\n')

  const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' })
  const link = document.createElement('a')
  const url = URL.createObjectURL(blob)

  link.setAttribute('href', url)
  link.setAttribute('download', `${filename}_${new Date().toISOString().split('T')[0]}.csv`)
  link.style.visibility = 'hidden'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

/**
 * Gera relatório em texto para PDF
 */
export function generateReportText(transactions: Transaction[]) {
  const totalIncome = transactions
    .filter((t) => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0)

  const totalExpense = transactions
    .filter((t) => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0)

  const balance = totalIncome - totalExpense

  let report = 'RELATÓRIO DE TRANSAÇÕES\n'
  report += '='.repeat(50) + '\n\n'
  report += `Período: ${formatDate(transactions[0]?.date || '')} a ${formatDate(transactions[transactions.length - 1]?.date || '')}\n`
  report += `Total de transações: ${transactions.length}\n\n`
  report += '='.repeat(50) + '\n\n'

  report += 'RESUMO FINANCEIRO\n'
  report += '-'.repeat(50) + '\n'
  report += `Total de Receitas: ${formatCurrency(totalIncome)}\n`
  report += `Total de Despesas: ${formatCurrency(totalExpense)}\n`
  report += `Saldo: ${formatCurrency(balance)}\n\n`

  report += '='.repeat(50) + '\n\n'
  report += 'TRANSAÇÕES DETALHADAS\n'
  report += '-'.repeat(50) + '\n\n'

  transactions.forEach((t, index) => {
    report += `${index + 1}. ${formatDate(t.date)} - ${t.description}\n`
    report += `   Tipo: ${t.type === 'income' ? 'Receita' : 'Despesa'}\n`
    report += `   Categoria: ${t.category}\n`
    report += `   Valor: ${formatCurrency(t.amount)}\n`
    if (t.card || t.account) {
      report += `   ${t.card ? 'Cartão' : 'Conta'}: ${t.card || t.account}\n`
    }
    report += '\n'
  })

  return report
}

/**
 * Exporta relatório para PDF (gera texto que pode ser copiado e colado em um gerador de PDF)
 */
export function exportToPDF(transactions: Transaction[], filename: string = 'relatorio') {
  const reportText = generateReportText(transactions)
  
  // Para um PDF real, seria necessário uma biblioteca como jsPDF
  // Por enquanto, geramos um arquivo de texto que pode ser convertido
  const blob = new Blob([reportText], { type: 'text/plain;charset=utf-8;' })
  const link = document.createElement('a')
  const url = URL.createObjectURL(blob)

  link.setAttribute('href', url)
  link.setAttribute('download', `${filename}_${new Date().toISOString().split('T')[0]}.txt`)
  link.style.visibility = 'hidden'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)

  // Em uma implementação completa, usaríamos jsPDF:
  // import jsPDF from 'jspdf'
  // const doc = new jsPDF()
  // doc.text(reportText, 10, 10)
  // doc.save(`${filename}.pdf`)
}
