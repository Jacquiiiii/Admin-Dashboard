## PSQL steps

- Access psql locally in your terminal: ```psql -d databaseName```
- Run the schema: ```\i db/schema/schema.sql;```
- Seed the database: ```\i db/seeds/userSeeds.sql; \i db/seeds/bookSeeds.sql; \i db/seeds/reviewSeeds.sql;```
- Exit psql: ```\q```
