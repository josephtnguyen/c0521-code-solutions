select "firstName" as "First",
       "lastName" as "Last"
  from "customers"
  join "rentals" using ("customerId")
  join "inventory" using ("inventoryId")
  join "films" using ("filmId")
 where "films"."title" = 'Magic Mallrats';
