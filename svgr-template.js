const template = (
  { imports, interfaces, componentName, props, jsx, exports },
  { tpl }
) => {
  const displayName = `Ab${componentName
    .replace(/\d+/g, "")
    .replace("Svg", "")}`;

  return tpl`
    ${imports};

    ${interfaces};

    const ${displayName} = (${props}) => (
      ${jsx}
    );

  export default ${displayName};
  `;
};

export default template;
