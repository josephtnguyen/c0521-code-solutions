select "customers"."firstName" as "First",
       "customers"."lastName" as "Last",
       sum("payments"."amount") as "Total Amount Paid"
  from "customers"
  join "payments" using ("customerId")
group by "First", "Last"
order by "Total Amount Paid" desc;
