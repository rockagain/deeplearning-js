import { map } from 'lodash';
import Array2D from "../data/Array2D";
import broadcasting from './broadcasting';

function multiply(
  left: Array2D,
  right: Array2D,
): Array2D {
  const afterBroadcasting = broadcasting(left, right);
  const broadcastedLeft = afterBroadcasting.left;
  const broadcastedRight = afterBroadcasting.right;

  const leftValues: Array<number> = broadcastedLeft.values;
  const rightValues: Array<number> = broadcastedRight.values;
  const values = map(leftValues, (num: number, idx) => (
    num * rightValues[idx]
  ));

  return new Array2D(broadcastedLeft.shape, values);
}

export default multiply;
