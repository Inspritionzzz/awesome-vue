import * as tf from '@tensorflow/tfjs';

// 1.数组
const a = tf.data.array([{'item': 1}, {'item': 2}, {'item': 3}]);
await a.forEachAsync(e => console.log(e));

const b = tf.data.array([4, 5, 6]);
await b.forEachAsync(e => console.log(e));

// Pass an array of values to create a vector.
tf.tensor([1, 2, 3, 4]).print();

// Pass a nested array of values to make a matrix or a higher
// dimensional tensor.
tf.tensor([[1, 2], [3, 4]]).print();

// Pass a flat array and specify a shape yourself.
tf.tensor([1, 2, 3, 4], [2, 2]).print();

tf.scalar(3.14).print();

tf.tensor1d([1, 2, 3]).print();

// Create a buffer and set values at particular indices.
const buffer = tf.buffer([2, 2]);
buffer.set(3, 0, 0);
buffer.set(5, 1, 0);

// Convert the buffer back to a tensor.
buffer.toTensor().print();

const x = tf.tensor1d([1, 2, 3, 4]);

tf.diag(x).print();

const y = tf.tensor2d([1, 2, 3, 4, 5, 6, 6, 8], [4, 2])

tf.diag(y).print();
