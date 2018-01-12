import { map } from 'lodash';
import softmax from './softmax';
import Array2D from '../data/Array2D';

function softmaxBackward(
  dA: Array2D,
  cache: Array2D,
) {
  const softmaxCache = softmax(cache);
  const values = map(softmaxCache.A.values, (num, idx) => (
    dA.values[idx] * num * (1 - num)
  ));

  return new Array2D(cache.shape, values);
}

export default softmaxBackward;
