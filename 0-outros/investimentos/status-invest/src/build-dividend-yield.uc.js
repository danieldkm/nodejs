import fs from 'node:fs';

import { formatToNumber } from 'brazilian-values';
import { getProventos } from './status-invest-repository.js'

const tickersPath = new URL('../tickers.json', import.meta.url);


function compare( a, b ) {
  if ( a.created_at > b.created_at ){
    return -1;
  }
  if ( a.created_at < b.created_at ){
    return 1;
  }
  return 0;
}

function formatToCSV(data) {
  const proventos = data.proventos
    .sort(compare)
    .reduce((acc, curr) => {
      if (curr.created_at < 2023) {
        acc.push(curr)
        if (acc.length > 10) {
          acc.pop()
        }
      }
      return acc
    }, [])


  const {total, qtTotal, totalMaxSix, qtTotalMaxSix} = proventos.reduce((acc, curr, idx) => {
    if (idx < 6) {
      acc.totalMaxSix += curr.price
      acc.qtTotalMaxSix += 1
    }
    acc.total += curr.price
    acc.qtTotal += 1
    return acc
  }, {
    total: 0,
    qtTotal: 0,
    totalMaxSix: 0,
    qtTotalMaxSix: 0
  })

  // const result = `${data.ticker};${formatToBRL(total/qtTotal)};${formatToBRL(totalMaxSix/qtTotalMaxSix)}${proventos.reduce((acc,curr) => (acc += `;${formatToBRL(curr.price)}`), '')}`
  const result = `${data.ticker};${proventos.reduce((acc,curr) => (acc += `;${formatToNumber(curr.price)}`), '')}`
  console.log(result)
  return result
}

export const buildDividendYieldUC = async () => {
  let rawdata = fs.readFileSync(tickersPath)
  const tickers = JSON.parse(rawdata)

  const resultmap = tickers.map(async (ticker) => {
    const response = await getProventos(ticker)
    return response
  })
  const results = await Promise.all(resultmap)
  results.forEach(result => formatToCSV(result))

}