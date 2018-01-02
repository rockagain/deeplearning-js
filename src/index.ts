import {
  initializeParameters,
  forwardPropagation,
  backPropagation,
  updateParameters,
  train,
} from './model';
import {
  quadraticCost,
  crossEntropyCost,
} from './math';
import { Normalization } from './preprocess';
import Array2D from './data/Array2D';
import Scalar from './data/Scalar';
import convertArray2DToArray1D from './utils/convertArray2DToArray1D';

export {
  // data model
  Array2D,
  Scalar,
  // preprocess
  Normalization,
  // model training
  initializeParameters,
  forwardPropagation,
  backPropagation,
  updateParameters,
  train,
  // cost function
  quadraticCost,
  crossEntropyCost,
  // helpers
  convertArray2DToArray1D,
};
