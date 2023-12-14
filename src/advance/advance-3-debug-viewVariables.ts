import { PrismaClient } from "@prisma/client";
import { on } from "events";

const prisma = new PrismaClient({
    log: [
        {
            emit: "event" ,
            level: "query",
        },
    ]
});

async function main()
{
    const user = prisma.post.findMany({
        take : 5 , // This is LIMIT keyword in SQL query
    })

    console.log(user)
}

prisma.$on("query" , async(e) => {
    console.log(`${e.query} ${e.params}`);
})

main().then(async () => {
    await prisma.$disconnect();
}).catch(async (e) => {
    console.error(e)
    await prisma.$disconnect();
    process.exit(1);
})
  