import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main()
{
    await prisma.user.create({
        data : {
            email : "vibhorphalke" , 
            name : "Vibhor PHalke"
        }
    })
}

main().then(async () => {
    await prisma.$disconnect();
}).catch(async (e) => {
    console.error(e)
    await prisma.$disconnect();
    process.exit(1);
})