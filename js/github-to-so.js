;(function () {
  function githubToSO(githubMarkdown) {
    var convertedMarkdown = githubMarkdown.replace(/^```.*\n((?:.*?\n)+?)```[\t ]*$/gm, function (whole, inner) {
      inner = inner.slice(0, inner.length - 1);
      var indentedCode = inner.split("\n").map(function (line, i) {
        return '    ' + line;
      }).join("\n");
      return indentedCode;
    });

    return convertedMarkdown;
  }

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = githubToSO;
  } else {
    window.githubToSO = githubToSO;
  }
}());
