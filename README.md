# Setup

1. Copy the `.env` variables into the root directory of this project
2. Install Docker Desktop and run `docker compose up` in a separate terminal
3. Install all the dependencies using `npm i`
4. Run `npx prisma migrate dev` to update the database changes to your local Postgres database running in Docker
5. Run `npm run dev` and visit localhost to see if the website works