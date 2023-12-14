import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main()
{
    const user = prisma.post.findMany({
        take : 5 , // This is LIMIT keyword in SQL query
        skip : 1 // This is OFFSET keyword in SQL query
    })

    console.log(user)
}

main().then(async () => {
    await prisma.$disconnect();
}).catch(async (e) => {
    console.error(e)
    await prisma.$disconnect();
    process.exit(1);
})