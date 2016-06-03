import React from 'react';
import DefaultInput from '../DefaultInput';

/**
 * Class representing a SearchInput.
 * @author radu.ciocan@drivetribe.com
 */

const SearchInput = (props) => (
  <DefaultInput
    type="search"
    placeholder="Range"
    {...props}
  />
);

export default SearchInput;
