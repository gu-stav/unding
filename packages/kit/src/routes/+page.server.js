import { redirect } from "@sveltejs/kit";
import { createUrlPath } from "@unding/studio/shared/utils";

export function load({ locals }) {
    throw redirect(301, createUrlPath(locals.prefix, 'studio/content-types'));
}
