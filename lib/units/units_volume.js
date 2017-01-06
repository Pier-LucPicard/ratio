'use strict';

exports.millilitre = {
  name: 'Mililitre',
  symbole: 'ml',
  conversion_formula: (millilitre) => millilitre,
  reverse_conversion: (millilitre) => millilitre,
  type: 'volume'
};

exports.us_legal_cup = {
  name: 'U.S. Legal Cup',
  symbole: 'U.S. legal cup',
  conversion_formula: (cup) => cup * 240,
  reverse_conversion: (millilitre) => millilitre / 240,
  type: 'volume'
};

exports.us_cup = {
  name: 'U.S. Cup',
  symbole: 'u.s. cup',
  conversion_formula: (cup) => cup * 237,
  reverse_conversion: (millilitre) => millilitre / 237,
  type: 'volume'
};

exports.metric_cup = {
  name: 'Metric Cup',
  symbole: 'metric cup',
  conversion_formula: (cup) => cup * 250,
  reverse_conversion: (millilitre) => millilitre / 250,
  type: 'volume'
};

exports.imperial_cup = {
  name: 'Imperial Cup',
  symbole: 'imp. cup',
  conversion_formula: (cup) => cup * 284,
  reverse_conversion: (millilitre) => millilitre / 284,
  type: 'volume'
};

exports.litre = {
  name: 'litre',
  symbole: 'L',
  conversion_formula: (litre) => litre * 1000,
  reverse_conversion: (millilitre) => millilitre / 1000,
  type: 'volume'
};

exports.us_tablespoon = {
  name: 'U.S. Tablespoon',
  symbole: 'u.s. tbs',
  conversion_formula: (tablespoon) => tablespoon * 14.7867648,
  reverse_conversion: (millilitre) => millilitre / 14.7867648,
  type: 'volume'
};

exports.imperial_tablespoon = {
  name: 'Imperial Tablespoon',
  symbole: 'imp. tbs',
  conversion_formula: (tablespoon) => tablespoon * 17.758164,
  reverse_conversion: (millilitre) => millilitre / 17.758164,
  type: 'volume'
};

exports.metric_tablespoon = {
  name: 'Metric Tablespoon',
  symbole: 'metric tbs',
  conversion_formula: (tablespoon) => tablespoon * 15,
  reverse_conversion: (millilitre) => millilitre / 15,
  type: 'volume'
};

exports.australia_tablespoon = {
  name: 'Australian Tablespoon',
  symbole: 'aust. tbs',
  conversion_formula: (tablespoon) => tablespoon * 20,
  reverse_conversion: (millilitre) => millilitre / 20,
  type: 'volume'
};

exports.metric_teaspoon = {
  name: 'Metric Teaspoon',
  symbole: 'metric ts',
  conversion_formula: (teaspoon) => teaspoon * 5,
  reverse_conversion: (millilitre) => millilitre / 5,
  type: 'volume'
};

exports.us_teaspoon = {
  name: 'U.S. ts',
  symbole: 'u.s. ts',
  conversion_formula: (teaspoon) => teaspoon * 4.928921598877499,
  reverse_conversion: (millilitre) => millilitre / 4.928921598877499,
  type: 'volume'
};

exports.imperial_teaspoon = {
  name: 'Imperial Teaspoon',
  symbole: 'imp. ts',
  conversion_formula: (teaspoon) => teaspoon * 5.919388020822801,
  reverse_conversion: (millilitre) => millilitre / 5.919388020822801,
  type: 'volume'
};

exports.decilitre = {
  name: 'Decilitre',
  symbole: 'dl',
  conversion_formula: (decilitre) => decilitre * 100,
  reverse_conversion: (millilitre) => millilitre / 100,
  type: 'volume'
};

exports.centilitre = {
  name: 'Centilire',
  symbole: 'cl',
  conversion_formula: (centilitre) => centilitre * 10,
  reverse_conversion: (millilitre) => millilitre / 10,
  type: 'volume'
};

exports.decalitre = {
  name: 'Declitre',
  symbole: 'dal',
  conversion_formula: (decalitre) => decalitre * 10000,
  reverse_conversion: (millilitre) => millilitre / 10000,
  type: 'volume'
};

exports.hectolitre = {
  name: 'Hectolire',
  symbole: 'hl',
  conversion_formula: (hectolitre) => hectolitre * 100000,
  reverse_conversion: (millilitre) => millilitre / 100000,
  type: 'volume'
};

exports.kilolitre = {
  name: 'Kilolitre',
  symbole: 'kl',
  conversion_formula: (kilolitre) => kilolitre * 1000000,
  reverse_conversion: (millilitre) => millilitre / 1000000,
  type: 'volume'
};