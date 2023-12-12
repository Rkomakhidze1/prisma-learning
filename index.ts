import { PrismaClient } from "@prisma/client";

const main = async () => {
  const prisma = new PrismaClient();

  await prisma.user.create({
    data: { name: "name", email: "email", isAuthor: false },
  });

  await prisma.user.findFirst({ where: { id: "lasnda" } });
};

main().catch((e) => {
  console.error(e);
});
