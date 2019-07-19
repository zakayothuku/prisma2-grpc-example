import Photon from '@generated/photon'

const photon = new Photon();

async function main() {
    const farmer1 = await photon.farmers.create({
        data: {
            firstName: "John",
            lastName: "Doe",
            farmerId: "JD1"
        },
    });
    const farmer2 = await photon.farmers.create({
        data: {
            firstName: "Jane",
            lastName: "Doe",
            farmerId: "JD2"
        },
    });
    const product1 = await photon.products.create({
        data: {
            productName: "Red Berries",
            productType: "BERRIES",
            qrCode: "19013830139",
            plantedOn: new Date("12-12-2018"),
            harvestedOn: new Date("06-07-2019"),
            farmer: {
                connect: {
                    id: farmer1.id
                }
            }
        },
    });
    const product2 = await photon.products.create({
        data: {
            productName: "Blue Berries",
            productType: "BERRIES",
            qrCode: "19243830139",
            plantedOn: new Date("10-10-2018"),
            harvestedOn: new Date("01-05-2019"),
            farmer: {
                connect: {
                    id: farmer2.id
                }
            }
        },
    });
    console.log({farmer1, farmer2, product1, product2})
}

main()
    .catch(e => console.error(e))
    .finally(async () => {
        await photon.disconnect()
    });
