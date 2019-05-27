"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Deal",
    embedded: false
  },
  {
    name: "Admin",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://us1.prisma.sh/wjdgustn15-c9cd71/DBHW/dev`
});
exports.prisma = new exports.Prisma();
