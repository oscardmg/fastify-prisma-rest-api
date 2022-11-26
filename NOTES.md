## dependencies

yarn add @prisma/client fastify fastify-zod zod zod-to-json-schema fastify-jwt
fastify-swagger

## devDependencies

yarn add ts-node-dev typescript @types/node --dev

## Initialise prisma

npx prisma init --datasource-provider postgresql

### Migrate the schema

npx prisma migrate dev --name init

### Docker potgress

docker run --name postgresql -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=admin
-p 5432:5432 -v ./data:/var/lib/postgresql/data -d postgres
