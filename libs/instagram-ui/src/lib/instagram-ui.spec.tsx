import { render } from '@testing-library/react';

import InstagramUi from './instagram-ui';

describe('InstagramUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<InstagramUi />);
    expect(baseElement).toBeTruthy();
  });
});
