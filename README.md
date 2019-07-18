# gRPC Server Example with Prisma2

This example shows how to implement a **gRPC API with TypeScript** using Prisma2.

## How to use

### 1. Download example & install dependencies

Clone the repository
Install Node dependencies:

```sh
cd prisma2-grpc-test
npm install
```

### 2. Install the Prisma 2 CLI

To run the example, you need the [Prisma 2 CLI](https://github.com/prisma/prisma2/blob/master/docs/prisma-2-cli.md):

```sh
npm install -g prisma2
```

### 3. Set up database
First, create a dev.db file in the prisma folder.
```jshint
touch dev.db
```

Set up your database, run:

```sh
prisma2 lift save --name 'init'
prisma2 lift up
```

You can now use the [SQLite Browser](https://sqlitebrowser.org/) to view and edit your data in the `./prisma/dev.db` file that was created when you ran `prisma2 lift up`.

### 4. Generate Photon (type-safe database client)

Run the following command to generate [Photon JS](https://photonjs.prisma.io/):

```sh
prisma2 generate
```

Now you can seed your database using the `seed` script from `package.json`:

```sh
npm run seed
```

### 5. Start the gRPC server

```sh
npm run start
```

The server is now running on `0.0.0.0:50051`.

### 6. Using the gRPC API

To use the gRPC API, you need a gRPC client. We provide several client scripts inside the [`./client`](./client) directory. Each script is named according to the operation it performs against the gRPC API (e.g. the [`farmers.ts`](./client/farmers.ts) script sends the [`Farmers`](./service.proto) operation). Each script can be invoked by running the corresponding NPM script defined in [`package.json`](./package.json), e.g. `npm run farmers`.

In case you prefer a GUI client, we recommend [BloomRPC](https://github.com/uw-labs/bloomrpc):

![Screenshot of BloomRPC](https://imgur.com/0EiIo03.png)