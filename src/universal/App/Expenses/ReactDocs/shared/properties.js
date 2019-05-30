/* eslint-disable max-len */
export default {
  children: data => ({
    prop: 'children',
    propType: 'React.node',
    required: false,
    defaultValue: 'null',
    desc: 'React node',
    ...data,
  }),
  node: data => (
    {
      propType: 'React.node',
      required: false,
      defaultValue: 'null',
      desc: 'React node, same as children',
      ...data,
    }
  ),
  className: data => ({
    prop: 'className',
    propType: 'String',
    required: false,
    defaultValue: 'null',
    desc: 'className, e.g. "my-custom-styling"',
    ...data,
  }),
  cls: data => ({
    prop: 'className',
    propType: 'String',
    required: false,
    defaultValue: 'null',
    desc: 'className, e.g. "my-custom-styling"',
    ...data,
  }),
  Component: data => ({
    prop: 'Component',
    propType: 'React.ElementType',
    required: false,
    desc: `Renders the component with a given react element. By default, the component renders <${data.defaultValue.replace(/"/g, '')} />. This is usefull when you want to use a same style but render a different HTML element or your custom component. React more __TODO`,
    ...data,
  }),
  rest: data => ({
    prop: '...rest',
    propType: 'any',
    required: false,
    desc: 'Other properties are passed down to the wrapping element',
    ...data,
  }),
  childProps: data => ({
    propType: 'Object',
    required: false,
    defaultValue: '{}',
    ...data,
  }),
}
