import { z } from 'zod'

import { knex } from '../database'

export async function summaryUC(userId: string) {
  const schema = z.object({
    user_id: z.string().uuid(),
  })

  const { user_id } = schema.parse(userId)

  const mealsWithDiffDays = await knex.raw(
    `
    with t as (
      select row_number() over(order by fed_on) rownum, fed_on,on_diet
        from meals
       where user_id = ?
    )
    select nex.fed_on - t.fed_on
          ,nex.fed_on
          ,CASE WHEN nex.fed_on - t.fed_on IS NOT NULL AND T.on_diet = true THEN 1 ELSE 0 END isOneDayDiff
      from t
      left join t nex on nex.rownum = t.rownum + 1
  `,
    [user_id],
  )
  const [summary] = await knex.raw(
    `
    select count(id) total
          ,count(case when on_diet = true then 1 end) total_on_diet
          ,count(case when on_diet = false then 1 end) total_off_diet
      from meals
     where user_id = ?
  `,
    [user_id],
  )

  // console.log({
  //   mealsWithDiffDays,
  // })
  const { max: maxDaysOnDiet } = mealsWithDiffDays.reduce(
    (acc, curr) => {
      if (curr.isOneDayDiff) {
        acc.current = acc.current + 1
        if (acc.current > acc.max) {
          acc.max = acc.current
        }
      } else {
        acc.current = 0
      }
      return acc
    },
    {
      current: 0,
      max: 0,
    },
  )
  console.log({
    maxDaysOnDiet,
    summary,
  })
  return {
    ...summary,
    maxDaysOnDiet,
  }
}
