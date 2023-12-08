// import { getProventos } from './status-invest-repository.js'
import { buildDividendYieldUC } from './build-dividend-yield.uc.js'
import { formatToBRL } from 'brazilian-values';

async function start() {
  // console.log(formatToBRL(0.59))
  buildDividendYieldUC()
  // try {
  //   const proventos = await getProventos('sapr11')
  //   console.log(
  //     proventos
  //   )
  // } catch (error) {
  //   console.error(error)
  // }
}

start()


