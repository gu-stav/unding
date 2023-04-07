import { redirect } from "@sveltejs/kit";

export function load({ locals, params }) {
    if (!params.content_type_id) {
        throw redirect(301, `/${locals.prefix}/studio/content-types/${locals.schema[0].name.plural}`);
    }

    return {
        schema: locals.schema.map(({ load, ...contentType }) => {
            contentType.isOpen = params.content_type_id == contentType.name.plural;
            return contentType;
        }, {})
    }
}
