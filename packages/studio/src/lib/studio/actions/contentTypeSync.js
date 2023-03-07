import { enhance } from '$app/forms';

export function contentTypeSync(node, { contentType }) {
    return enhance(node, (({ form, data, action, cancel }) => {
        return async ({ result, update }) => {
          update();

          const { data: { errors, input } } = result;
          contentType.setFieldErrors(errors);
          contentType.updateValues(input);
      }}));
}
