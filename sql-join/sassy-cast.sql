select "firstName" as "First",
       "lastName" as "Last"
  from "actors"
  join "castMembers" using ("actorId")
  join "films" using ("filmId")
 where "films"."title" = 'Jersey Sassy';
