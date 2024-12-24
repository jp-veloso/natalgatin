export const getPasswordHint = (attempts: number): string => {
  if (attempts < 2) return '';
  if (attempts < 3) return 'Dica: É um apelido carinhoso';
  if (attempts < 4) return 'Dica: É como você me chama...';
  return 'Dica: n*n*m';
};