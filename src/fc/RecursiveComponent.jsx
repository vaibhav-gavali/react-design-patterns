import React from 'react';

const isObject = (x) => typeof x === 'object' && x != null;

const RecursiveComponent = ({ data }) => {
  const pairs = Object.entries(data);
  console.log('pairs', pairs);

  return (
    <>
      {pairs.map(([key, value]) => {
        return (
          <li key={key}>
            {key}:
            {!isObject(value) ? (
              <span>{value}</span>
            ) : (
              <ul>
                <RecursiveComponent data={value} />
              </ul>
            )}
          </li>
        );
      })}
    </>
  );
};

export default RecursiveComponent;

// const nestedObject = {
//   a: 1,
//   b: {
//     b1: 4,
//     b2: {
//       b23: 'Hello',
//     },
//     b3: {
//       b31: {
//         message: 'Hi',
//       },
//       b32: {
//         message: 'Hi',
//       },
//     },
//   },
//   c: {
//     c1: 2,
//     c2: 3,
//   },
// };

// <RecursiveComponent data={nestedObject} />;
