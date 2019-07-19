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
    console.log({farmer1, farmer2})
}

main()
    .catch(e => console.error(e))
    .finally(async () => {
        await photon.disconnect()
    });
