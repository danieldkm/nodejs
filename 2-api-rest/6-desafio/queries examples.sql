-- SQLite
select
  count(id) qtd_total,
  count(case when on_diet = true then 1 end) qt_on_diet,
  count(case when on_diet = false then 1 end) qt_off_diet
from meals
where user_id = '8b444e29-dcde-4d90-b9ef-27421ae445ec'


with t as (
  select row_number() over(order by fed_on) rownum, meals.*
   from meals
  where user_id = '8b444e29-dcde-4d90-b9ef-27421ae445ec'
)
select count(t.id) qtd_total,
  count(case when t.on_diet = true then 1 end) qt_on_diet,
  count(case when t.on_diet = false then 1 end) qt_off_diet,
  sum(case when nex.fed_on - prev.fed_on is not null then 1 end) ok
from t
left join t prev on prev.rownum = t.rownum - 1
left join t nex on nex.rownum = t.rownum + 1

with t as (
  select row_number() over(order by fed_on) rownum, fed_on,name, on_diet
   from meals
    where user_id = '8b444e29-dcde-4d90-b9ef-27421ae445ec'
)
select nex.fed_on - t.fed_on, t.*, prev.fed_on, nex.fed_on,
CASE WHEN nex.fed_on - t.fed_on IS NOT NULL AND T.on_diet = true THEN 1 ELSE 0 END TESTE
from t
left join t prev on prev.rownum = t.rownum - 1
left join t nex on nex.rownum = t.rownum + 1

