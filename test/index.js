var expect = require('chai').expect;
var githubToSO = require('../js/github-to-so');

describe("githubToSO", function() {
  beforeEach(function () {

this.githubMarkdown = `
This is how to solve your problem:

\`\`\`
[1, 2, 3].map { |x| x**2 }
puts "the #{solution}"
\`\`\`

Let me know if you have any questions about how that works.
`;

this.stackoverflowMarkdown = `
This is how to solve your problem:

    [1, 2, 3].map { |x| x**2 }
    puts "the #{solution}"

Let me know if you have any questions about how that works.
`;

  });

  it("converts GitHub style code blocks to Stack Overflow style", function() {
    const converted = githubToSO(this.githubMarkdown);
    expect(converted).to.equal(this.stackoverflowMarkdown);
  });
});
