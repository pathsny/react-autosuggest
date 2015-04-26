'use strict';

import React, { Component } from 'react';
import utils from '../utils';
import Autosuggest from '../../../src/Autosuggest';
import SourceCodeLink from '../SourceCodeLink/SourceCodeLink';
import countries from 'json!./countries.json';

function getSuggestions(input, callback) {
  let escapedInput = utils.escapeRegexCharacters(input.trim());
  let lowercasedInput = input.trim().toLowerCase();
  let countryMatchRegex = new RegExp('\\b' + escapedInput, 'i');
  let suggestions = countries
    .filter( country => countryMatchRegex.test(country) )
    .slice(0, 7);

  // 'suggestions' will be an array of strings, e.g.:
  //   ['New Caledonia', 'New Zealand', 'Papua New Guinea']

  callback(null, suggestions);
}

export default class BuildCollection extends Component {
  render() {
    let inputAttributes = {
      id: 'build-collection',
      placeholder: 'Where have you been?'
    };

    return (
      <div>
        <Autosuggest suggestions={getSuggestions}
                     inputAttributes={inputAttributes}
                     ref={ () => { document.getElementById('build-collection').focus(); } } />
        <SourceCodeLink file="examples/src/BuildCollection/BuildCollection.js" />
      </div>
    );
  }
}
