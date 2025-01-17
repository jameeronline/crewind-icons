export default {
  plugins: [
    {
      name: "removeAttrs",
      params: {
        attrs: ["class", "className"], // Removes both `class` and `className` attributes
      },
    },
  ],
};
