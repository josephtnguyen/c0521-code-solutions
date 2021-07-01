select "countries"."name" as "country",
       count("cities"."name")
  from "countries"
  join "cities" using ("countryId")
group by "countries"."name";
