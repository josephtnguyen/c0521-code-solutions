select "categories"."name" as "Category",
       count("films"."title") as "Film Count"
  from "actors"
  join "castMembers" using ("actorId")
  join "films" using ("filmId")
  join "filmCategory" using ("filmId")
  join "categories" using ("categoryId")
 where "actors"."firstName" = 'Lisa' and "actors"."lastName" = 'Monroe'
group by "Category";
