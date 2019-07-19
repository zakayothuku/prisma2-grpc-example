import Photon from "@generated/photon";

export async function farmers(photon: Photon, call: any, callback: any) {
    const farmers = await photon.farmers.findMany();
    callback(null, {farmers});
}