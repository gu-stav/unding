import { redirect } from "@sveltejs/kit";
import { createUrlPath } from "@unding/studio/shared/utils";

export function load({ locals, params }) {
    if (!params.content_type_id) {
        throw redirect(301, createUrlPath(locals.prefix, `studio/content-types/${locals.schema[0].name.plural}`));
    }

    return {
        schema: locals.schema.map(({ load, ...contentType }) => {
            contentType.isOpen = params.content_type_id == contentType.name.plural;
            return contentType;
        }, {})
    }
}
