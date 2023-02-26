export const actions = {
    create: async ({ cookies, request }) => {
      const data = await request.formData();

      return { success: true };
    }
};
