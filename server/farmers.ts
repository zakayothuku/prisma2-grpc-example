import Photon from "@generated/photon";

const photon = new Photon();

export async function farmers(call: any, callback: any) {
    const farmers = await photon.farmers.findMany();
    callback(null, {farmers});
}
