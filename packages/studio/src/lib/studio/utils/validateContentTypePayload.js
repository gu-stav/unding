import { z } from "zod";

const attributeTypeZodPrimitiveMapping = {
    'text': 'string',
    'number': 'number'
};

function buildZodSchema(contentType) {
    let Schema = z.object();

    contentType.attributes.forEach(attribute => {
        const FieldSchema = z[attributeTypeZodPrimitiveMapping[attribute.type]]();

        if (!attribute.required) {
            FieldSchema.nullable();
        }

        Schema = Schema.extend({
            [attribute.name]: FieldSchema
        });
    })

    return Schema;
}

export function validateContentTypePayload(payload, contentType) {
    const zodSchema = buildZodSchema(contentType);
    const result = zodSchema.safeParse(payload);

    if (!result.success) {
        return result.error.issues;
    }

    return [];
}
