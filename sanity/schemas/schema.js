// src/studio/schemas/schema.js
import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import contact from "./contact";
// import contact from "./contact";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([contact]),
});
