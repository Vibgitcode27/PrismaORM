import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({log: ['info' , 'query']}); // this argument gives logs query used by prisma in terminal

async function main()
{
    await prisma.post.create({
        data : {
            title : "This is the second title" ,
            content : "This is content 2" ,
            authorId : 1
            // author: {
            //     connect : {
            //         id : 1
            //     }
            // }
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