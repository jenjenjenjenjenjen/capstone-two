import {render} from '@testing-library/react';
import Description from './Description';

it('renders without crashing', function() {
    render(<Description name='spirit' />);
});

it('matches snapshot', function() {
    const {asFragment} = render(<Description name='spirit' />);
    expect(asFragment()).toMatchSnapshot();
})