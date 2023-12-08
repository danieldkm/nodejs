import fs from 'node:fs';

export const getProventos = async (ticker) => {
  const response = await fetch(`https://investidor10.com.br/api/dividendos/chart/${ticker}/3650/ano`, 
  {
    method: 'GET',
  })
  const data = await response.text()
  return {
      ticker: ticker.toUpperCase(),
      proventos: JSON.parse(data)
  }
}