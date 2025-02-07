import swaggerJSDoc from "swagger-jsdoc";
import { OpenAPIV3 } from "openapi-types";
import rawSchemas from "./generated/scema.json";

type Schemas = { [schema: string]: OpenAPIV3.SchemaObject };
const schemas: Schemas = rawSchemas.definitions as unknown as Schemas;

const replaceRefs = (obj: any) => {
    if (typeof obj != 'object' || obj === null) return;
}