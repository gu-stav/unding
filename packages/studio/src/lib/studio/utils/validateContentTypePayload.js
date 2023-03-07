import { z } from "zod";

const attributeTypeZodPrimitiveMapping = {
    'richtext': 'string',
    'text': 'string',
    'number': 'number'
};

function buildZodSchema(contentType) {
    const shape = contentType.attributes.reduce((acc, attribute) => {
        const zodType = attributeTypeZodPrimitiveMapping[attribute.type];
        const FieldSchema = z.coerce[zodType]();

        if (zodType === 'string') {
            FieldSchema.trim();

            if (attribute.required) {
                FieldSchema.min(1);
            } else {
                FieldSchema.nullable();
            }
        }

        // .validate() callback
        if (attribute.validate) {
            FieldSchema.refine(val => attribute.validate(val));
        }

        acc[attribute.name] = FieldSchema;

        return acc;
    }, {});

    return z.object(shape).required();
}

export function validateContentTypePayload(payload, contentType) {
    const zodSchema = buildZodSchema(contentType);
    const result = zodSchema.safeParse(payload);

    if (!result.success) {
        return result.error.issues;
    }

    return [];
}
