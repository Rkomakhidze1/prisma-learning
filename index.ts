import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  await prisma.user.deleteMany();

  const userOne = await prisma.user.create({
    data: {
      name: "name",
      email: "email",
      isAuthor: false,
      age: 19,
      books: { create: { rating: 5, title: "my book 1" } },
    },
    include: { books: true },
  });
  await prisma.user.create({
    data: {
      name: "another",
      email: "email@email.com",
      isAuthor: true,
      age: 29,
    },
  });

  // Return only age
  await prisma.user.findFirst({
    where: { id: "lasnda" },
    select: { age: true },
  });
  await prisma.user.findFirst({ where: { age: 5 } });

  console.log(userOne);
};

main().catch((e) => {
  console.error(e);
});
