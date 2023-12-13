import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  await prisma.user.deleteMany();

  await prisma.user.create({
    data: { name: "name", email: "email", isAuthor: false },
  });
  await prisma.user.create({
    data: { name: "another", email: "email@email.com", isAuthor: true },
  });

  await prisma.user.findFirst({ where: { id: "lasnda" } });
};

main().catch((e) => {
  console.error(e);
});
