select "films"."title" as "Title",
       "films"."replacementCost" as "Cost",
       sum("payments"."amount") as "Return",
       sum("payments"."amount") - "films"."replacementCost" as "Profit"
  from "films"
  join "inventory" using ("filmId")
  join "rentals" using ("inventoryId")
  join "payments" using ("rentalId")
group by "Title", "Cost"
order by "Profit" desc
 limit 5;
