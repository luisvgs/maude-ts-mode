/// <reference types="tree-sitter-cli/dsl" />
// @ts-check
export default grammar({
  name: "maude",

  word: $ => $.identifier,

  extras: $ => [/\s/],

  rules: {
    source_file: $ => repeat($._token),

    _token: $ => choice(
      $.module_entry,
      $.keyword,
      $.op_attr,
      $.base_type,
      $.identifier,
      $.other
    ),

    module_entry: $ => seq(
      $.module_type,
      $.identifier,
      "is",
      repeat($._token),
      $.module_end
    ),

    keyword: $ => choice(
      "including", "pr", "protecting",
      "op", "sort", "sorts", "eq", "rl", "is", "var", "vars"
    ),

    op_attr: $ => choice("assoc", "comm"),
    module_type: $ => choice("fmod", "omod", "mod"),
    module_end: $ => choice("endfm", "endm", "endom"),
      base_type: $ => choice("Nat", "NAT", "Bool", "BOOL", "FLOAT", "Float", "STRING", "String", "INT", "Int"),
    identifier: $ => /[a-zA-Z_][a-zA-Z0-9_]*/,
    other: $ => /[^\s]+/,
  }
});
