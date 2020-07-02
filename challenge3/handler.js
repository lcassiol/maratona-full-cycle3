"use strict";

/*
module.exports.sum = function (event, context, callback) {
  const { a, b } = event.queryStringParameters;
  const sumResult = (Number(a) + Number(b)).toFixed(2);
  const response = {
    statusCode: 200,
    body: JSON.stringify({ result: Number(sumResult) }),
  };

  callback(null, response);
};
*/

function soma(params) {
  const { a, b } = params;
  const sumResult = (Number(a) + Number(b)).toFixed(2);
  return {
    resultado: Number(sumResult),
  };
}

exports.soma = soma;
