// @flow
import { type Node } from 'react';

type ParagraphTypes = 'light' | 'medium' | 'bold';

export type ParagraphProps = {
  extraClassName: ?string,
  children: Node,
  type: ParagraphTypes,
};
