import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Search_icon(props) {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path
        d="M8.553 17.106c1.898 0 3.74-.636 5.235-1.805l4.7 4.7L20 18.49l-4.7-4.7a8.502 8.502 0 001.806-5.236C17.106 3.837 13.269 0 8.553 0 3.837 0 0 3.837 0 8.553c0 4.716 3.837 8.553 8.553 8.553zm0-14.968a6.421 6.421 0 016.415 6.415 6.421 6.421 0 01-6.415 6.415 6.421 6.421 0 01-6.415-6.415 6.421 6.421 0 016.415-6.415z"
        fill="#0071FF"
      />
    </Svg>
  );
}

export default Search_icon;
