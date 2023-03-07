import { z } from 'zod';

import { VALID_ATTRIBUTE_TYPES } from './constants.js';

function normalizeAttributes(contentType) {
    return contentType.attributes.map((attribute) => {
        return {
            ...attribute,
            required: attribute?.required ?? false,
            readOnly: attribute?.readOnly ?? false
        }
    });
}

function validate(contentType) {
    const AttributeSchema = z.object({
        description: z.string(),
        label: z.string().min(1),
        name: z.string().min(1),
        required: z.boolean(),
        readOnly: z.boolean(),
        type: z.enum(VALID_ATTRIBUTE_TYPES),
        // TODO: remove
        width: z.number()
    }).partial();

    const ContentTypeSchema = z.object({
        name: z.object({
            singular: z.string(),
            plural: z.string(),
            display: z.string()
        }),

        attributes: z.array(AttributeSchema).nonempty(),
    }).required();

    return ContentTypeSchema.parse(contentType);
}

export function defineSchema(contentTypes) {
    return () => ({
        validate() {
            return contentTypes.map((contentType) => {
               return validate(contentType);
            })
        },

        getContentTypes: () => {
            return contentTypes.map((contentType) => {
                return {
                    ...contentType,
                    attributes: normalizeAttributes(contentType)
                };
            })
        }
    })
}
