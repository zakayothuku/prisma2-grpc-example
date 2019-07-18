import chalk from 'chalk'
import Photon from '@generated/photon'
import * as protoLoader from '@grpc/proto-loader'
import * as grpc from 'grpc'

const PROTO_PATH = __dirname + '/../service.proto';

const photon = new Photon();

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
});

const {farm} = grpc.loadPackageDefinition(packageDefinition) as any;

async function farmers(call: any, callback: any) {
    const feed = await photon.farmers.findMany();
    callback(null, {feed})
}

const server = new grpc.Server();

server.addService(farm.Farm.service, {
    farmers,
});

server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
const message = `
The gRPC server is being started on ${chalk.bold(
    `0.0.0.0:50051`,
)}. You now can invoke any client script by its name, e.g.:

${chalk.bold(`$ npm run feed`)}
or
${chalk.bold(`$ npm run signupUser`)}

See ${chalk.bold(
    `package.json`,
)} for a list of all available scripts or use ${chalk.bold(
    `BloomRPC`,
)} if you prefer a GUI client (download: ${chalk.bold(
    `https://github.com/uw-labs/bloomrpc`,
)}).`;

console.log(message);

server.start();