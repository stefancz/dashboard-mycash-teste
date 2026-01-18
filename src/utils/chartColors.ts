// Utilitário para cores de gráficos usando tokens CSS
// Converte valores hex do Figma para tokens CSS

export const chartColors = {
  // Cores principais do design system
  lime: 'var(--lime-500)',      // #A7FF00 - Receitas, ativo
  red: 'var(--red-500)',        // #FF0000 - Despesas
  blue: 'var(--blue-500)',      // #007BFF - Info
  green: 'var(--green-500)',    // #28A745 - Sucesso
  orange: 'var(--orange-500)',  // #FF9800 - Inter
  purple: 'var(--purple-500)',  // #9C27B0 - Nubank
  
  // Cores de fundo e borda
  gray100: 'var(--gray-100)',   // #E5E5E5 - Grid, bordas
  gray600: 'var(--gray-600)',   // #666666 - Texto secundário em gráficos
  
  // Helper para obter cor via getComputedStyle (para SVG)
  getLime: () => getComputedStyle(document.documentElement).getPropertyValue('--lime-500').trim() || '#A7FF00',
  getRed: () => getComputedStyle(document.documentElement).getPropertyValue('--red-500').trim() || '#FF0000',
  getBlue: () => getComputedStyle(document.documentElement).getPropertyValue('--blue-500').trim() || '#007BFF',
  getGreen: () => getComputedStyle(document.documentElement).getPropertyValue('--green-500').trim() || '#28A745',
  getOrange: () => getComputedStyle(document.documentElement).getPropertyValue('--orange-500').trim() || '#FF9800',
  getPurple: () => getComputedStyle(document.documentElement).getPropertyValue('--purple-500').trim() || '#9C27B0',
  getGray100: () => getComputedStyle(document.documentElement).getPropertyValue('--gray-100').trim() || '#E5E5E5',
  getGray600: () => getComputedStyle(document.documentElement).getPropertyValue('--gray-600').trim() || '#666666',
}
