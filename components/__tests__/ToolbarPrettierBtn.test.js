import React from 'react';
import renderer from 'react-test-renderer';
import ToolbarPrettierBtn from '../ToolbarPrettierBtn';

test('ToolbarPrettierBtn snapshot', () => {
  const dummyRef = React.createRef();
  const component = renderer.create(
    <ToolbarPrettierBtn graphiqlRef={dummyRef} />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
