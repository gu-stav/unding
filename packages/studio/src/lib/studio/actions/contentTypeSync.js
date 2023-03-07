import { enhance } from '$app/forms';

export function contentTypeSync(node, contentTypeStore) {
    return enhance(node, (({ form, data, action, cancel }) => {
        return async ({ result, update }) => {
          update();

          const { data: { errors } } = result;
          contentTypeStore.setFieldErrors(errors)
      }}));
}
