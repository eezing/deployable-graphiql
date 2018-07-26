const CodeMirror = require('codemirror');

window['jsonlint'] = require('jsonlint-mod');

CodeMirror.registerHelper('lint', 'json', function(text) {
  const found = [];

  if (!window.jsonlint) {
    if (window.console) {
      window.console.error(
        'Error: window.jsonlint not defined, CodeMirror JSON linting cannot run.'
      );
    }
    return found;
  }

  const jsonlint = window.jsonlint.parser;

  jsonlint.parseError = function(str, hash) {
    let loc = hash.loc;

    found.push({
      from: CodeMirror.Pos(loc.first_line - 1, loc.first_column),
      to: CodeMirror.Pos(loc.last_line - 1, loc.last_column),
      message: str
    });
  };

  try {
    jsonlint.parse(text);
    return found;
  } catch (error) {
    return found;
  }
});
