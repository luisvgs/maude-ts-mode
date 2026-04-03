/// <reference types="tree-sitter-cli/dsl" />
// @ts-check
export default grammar({
  name: "maude",

  word: $ => $.identifier,

  extras: $ => [/\s/],

  rules: {
    source_file: $ => repeat($._token),
      _token: $ => choice(
        $.keyword,
        $.op_attr,
        $.identifier,
        $.other,
        $.base_type
      ),
    op_attr: $ => choice("assoc", "comm"),
    keyword: $ => choice(
    "fmod", "endfm", "mod", "endm", "including",
        "op", "sort", "eq", "rl", "is", "var", "vars"
    ),
    base_type: $ => choice("Nat", "Bool", "STRING", "String"),
    identifier: $ => /[a-zA-Z_][a-zA-Z0-9_]*/,
    other: $ => /[^\s]+/,
  }
});
