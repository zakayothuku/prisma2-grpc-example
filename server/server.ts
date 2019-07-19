import chalk from 'chalk'
import * as protoLoader from '@grpc/proto-loader'
import * as grpc from 'grpc'
import {farmers} from "./farmers";

const PROTO_PATH = __dirname + '/../service.proto';

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
});

const {farm} = grpc.loadPackageDefinition(packageDefinition) as any;

const server = new grpc.Server();

server.addService(farm.Farm.service, {
    farmers,
});

server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());

const message = `The gRPC server is being started on ${chalk.bold(`0.0.0.0:50051`,)}.`;
console.log(message);

server.start();