import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main()
{
    await prisma.user.create({
        data:{
            email : "vibhorphalke2" ,
            name : "Vibhor Phalke" ,
            posts : {
                create : [
                    {
                    title : "New title 1" ,
                    content : "New title 1 content 1",
                    published : true
                } ,
            {
                title : "New title 2" ,
                content : "New title 2 content 1",
                published : true 
            }
        ]
        }
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