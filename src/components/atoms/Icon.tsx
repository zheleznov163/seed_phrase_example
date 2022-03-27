import React from 'react';
import {SvgCss, XmlProps} from 'react-native-svg';
import {COLOR} from '../../utils';
import {icons} from '../../assets';

type Props = Omit<XmlProps, 'xml'> & {
  fill?: COLOR;
  size: number;
  name: keyof typeof icons;
};
export default ({size, name, ...props}: Props) => {
  const style = {
    width: size,
    height: size,
  };
  return <SvgCss {...props} {...style} xml={icons[name]} style={[style, props.style]} />;
};
