import { prisma } from '../src/lib/prisma'

async function  seed() {
    await prisma.event.create({
        data: {
            id: '3f09614f-b3d0-4815-b70d-1847412c50e6',
            title: 'Unite Summit',
            slug: 'unite-summit',
            details: 'Um evento para devs apaixonados(as) por códigos!',
            maximumAttendees: 120
        }
    })
}


seed().then(() => {
    console.log('Database seeded!')
})