import React from 'react';
import renderer from 'react-test-renderer';
import ToolbarHistoryBtn from '../ToolbarHistoryBtn';

test('ToolbarHistoryBtn snapshot', () => {
  const dummyRef = React.createRef();
  const component = renderer.create(
    <ToolbarHistoryBtn graphiqlRef={dummyRef} />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
