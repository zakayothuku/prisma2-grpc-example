import Photon from "@generated/photon";

const photon = new Photon();

export async function createFarmer(call: any, callback: any) {
    const {firstName, lastName, farmerId} = call.request;
    const farmer = await photon.farmers.create({
        data: {
            firstName,
            lastName,
            farmerId
        }
    });
    callback(null, {farmer});
}
