import { redirect } from "@sveltejs/kit";

export function load({ locals }) {
    throw redirect(301, `/${locals.prefix}`);
}
