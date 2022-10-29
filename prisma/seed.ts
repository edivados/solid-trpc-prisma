import { client } from "~/lib/prisma/client";

async function main() {
  await client.counter.create({ data: { id: 1, count: 0 } });
}

main()
  .then(async () => {
    await client.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await client.$disconnect();
    process.exit(1);
  });
