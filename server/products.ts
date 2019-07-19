import Photon from "@generated/photon";

const photon = new Photon();

export async function products(call: any, callback: any) {
    const products = await photon.products.findMany();
    callback(null, {products});
}
