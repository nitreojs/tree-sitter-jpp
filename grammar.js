const IDENTIFIER = /[A-Za-z_\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/g
const EMOJI = /[\u{203c}\u{2049}\u{2122}\u{2139}\u{2194}-\u{2199}\u{21a9}-\u{21aa}\u{231a}-\u{231b}\u{2328}\u{23cf}\u{23e9}-\u{23f3}\u{23f8}-\u{23fa}\u{24c2}\u{25aa}-\u{25ab}\u{25b6}\u{25c0}\u{25fb}-\u{25fe}\u{2600}-\u{2604}\u{260e}\u{2611}\u{2614}-\u{2615}\u{2618}\u{261d}\u{2620}\u{2622}-\u{2623}\u{2626}\u{262a}\u{262e}-\u{262f}\u{2638}-\u{263a}\u{2640}\u{2642}\u{2648}-\u{2653}\u{265f}-\u{2660}\u{2663}\u{2665}-\u{2666}\u{2668}\u{267b}\u{267e}-\u{267f}\u{2692}-\u{2697}\u{2699}\u{269b}-\u{269c}\u{26a0}-\u{26a1}\u{26a7}\u{26aa}-\u{26ab}\u{26b0}-\u{26b1}\u{26bd}-\u{26be}\u{26c4}-\u{26c5}\u{26c8}\u{26ce}-\u{26cf}\u{26d1}\u{26d3}-\u{26d4}\u{26e9}-\u{26ea}\u{26f0}-\u{26f5}\u{26f7}-\u{26fa}\u{26fd}\u{2702}\u{2705}\u{2708}-\u{270d}\u{270f}\u{2712}\u{2714}\u{2716}\u{271d}\u{2721}\u{2728}\u{2733}-\u{2734}\u{2744}\u{2747}\u{274c}\u{274e}\u{2753}-\u{2755}\u{2757}\u{2763}-\u{2764}\u{2795}-\u{2797}\u{27a1}\u{27b0}\u{27bf}\u{2934}-\u{2935}\u{2b05}-\u{2b07}\u{2b1b}-\u{2b1c}\u{2b50}\u{2b55}\u{3030}\u{303d}\u{3297}\u{3299}\u{1f004}\u{1f0cf}\u{1f170}-\u{1f171}\u{1f17e}-\u{1f17f}\u{1f18e}\u{1f191}-\u{1f19a}\u{1f1e6}-\u{1f1ff}\u{1f201}-\u{1f202}\u{1f21a}\u{1f22f}\u{1f232}-\u{1f23a}\u{1f250}-\u{1f251}\u{1f300}-\u{1f321}\u{1f324}-\u{1f393}\u{1f396}-\u{1f397}\u{1f399}-\u{1f39b}\u{1f39e}-\u{1f3f0}\u{1f3f3}-\u{1f3f5}\u{1f3f7}-\u{1f4fd}\u{1f4ff}-\u{1f53d}\u{1f549}-\u{1f54e}\u{1f550}-\u{1f567}\u{1f56f}-\u{1f570}\u{1f573}-\u{1f57a}\u{1f587}\u{1f58a}-\u{1f58d}\u{1f590}\u{1f595}-\u{1f596}\u{1f5a4}-\u{1f5a5}\u{1f5a8}\u{1f5b1}-\u{1f5b2}\u{1f5bc}\u{1f5c2}-\u{1f5c4}\u{1f5d1}-\u{1f5d3}\u{1f5dc}-\u{1f5de}\u{1f5e1}\u{1f5e3}\u{1f5e8}\u{1f5ef}\u{1f5f3}\u{1f5fa}-\u{1f64f}\u{1f680}-\u{1f6c5}\u{1f6cb}-\u{1f6d2}\u{1f6d5}-\u{1f6d7}\u{1f6dd}-\u{1f6e5}\u{1f6e9}\u{1f6eb}-\u{1f6ec}\u{1f6f0}\u{1f6f3}-\u{1f6fc}\u{1f7e0}-\u{1f7eb}\u{1f7f0}\u{1f90c}-\u{1f93a}\u{1f93c}-\u{1f945}\u{1f947}-\u{1f9af}\u{1f9b4}-\u{1f9ff}\u{1fa70}-\u{1fa74}\u{1fa78}-\u{1fa7c}\u{1fa80}-\u{1fa86}\u{1fa90}-\u{1faac}\u{1fab0}-\u{1faba}\u{1fac0}-\u{1fac5}\u{1fad0}-\u{1fad9}\u{1fae0}-\u{1fae7}\u{1faf0}-\u{1faf6}]/ug 
const DIGIT = /\d/
const NUMBER_BASE = repeat1(DIGIT)

module.exports = grammar({
  name: 'jpp',

  extras: $ => [/\s/, $.COMMENT],
  word: $ => $.identifier,

  rules: {
    source_file: $ => repeat($._expression),
    
    identifier: $ => token(
      repeat1(
        choice(
          IDENTIFIER,
          EMOJI
        )
      )
    ),
    _integer: $ => token(
      repeat1(DIGIT)
    ),
    _float: $ => token(
      seq(optional(NUMBER_BASE), '.', NUMBER_BASE)
    ),
    number: $ => choice(
      $._integer,
      $._float
    ),
    string: $ => choice(
      seq(
        '"',
        repeat(choice(
          alias($.unescaped_double_string_fragment, $.string_fragment),
          $.escape_sequence
        )),
        '"'
      ),
      seq(
        "'",
        repeat(choice(
          alias($.unescaped_single_string_fragment, $.string_fragment),
          $.escape_sequence
        )),
        "'"
      )
    ),
    array: $ => seq(
      '[',
      repeat(
        seq(
          $._expression,
          optional(',')
        )
      ),
      ']'
    ),

    // INFO: string helpers; from tree-sitter-javascript
    unescaped_double_string_fragment: $ =>
      token.immediate(prec(1, /[^"\\]+/)),

    unescaped_single_string_fragment: $ =>
      token.immediate(prec(1, /[^'\\]+/)),
    
    escape_sequence: $ => token.immediate(seq(
      '\\',
      choice(
        /[^xu0-7]/,
        /[0-7]{1,3}/,
        /x[0-9a-fA-F]{2}/,
        /u[0-9a-fA-F]{4}/,
        /u{[0-9a-fA-F]+}/
      )
    )),

    _semicolon: $ => ';',

    true: $ => choice(
      'true',
      'yes'
    ),
    false: $ => choice(
      'false',
      'no'
    ),
    maybe: $ => 'maybe',
    null: $ => 'null',

    nothing: $ => 'nothing',
    continue: $ => 'continue',

    COMMENT: $ => seq('#', /.*/),

    COMP_OP: $ => /[=!]=|[><]=?/,
    SUM_OP: $ => /[+-]/,
    MUL_OP: $ => /[*/%]/,
    POW_OP: $ => '**',
    UNARY_OP: $ => /not|\+|-|!/,

    _primitive_value: $ => choice(
      $.true,
      $.false,
      $.maybe,
      $.null,

      $.number,
      $.string,
    ),

    _value: $ => prec(
      1,
      choice(
        $._primitive_value,

        $.nothing,
        $.continue,

        $.call_expr,
        $.subscript_expr,
        $.member_expr,

        $.identifier,
        $.array,

        $._semicolon
      )
    ),

    _expression: $ => choice(
      $._value,

      $._declaration,

      $.assignment_expr,
      $.please_expr,
      $.range_expr,
      $.fuck_expr,
      $.return_expr,
      $.parenthesized_expr,

      $.if_expr,
      $.for_expr,
      $.while_expr,
      $.break_expr,

      $.import_expr,
      $.export_expr,

      $.unary_expr,
      $._binary_expr,

      $.block
    ),

    _declaration: $ => choice(
      $.variable_decl,
      $.function_decl,
      $.class_decl,
    ),

    predefined_type: $ => choice(
      'int',
      'bool',
      'float',
      'string',
      'nothing',
      'number'
    ),

    array_type: $ => seq(
      $._type,
      '[',
      ']'
    ),

    nullable_type: $ => seq(
      $._type,
      '?'
    ),

    literal_type: $ => choice(
      $.string,
      $.number,
      $.true,
      $.false
    ),

    _type: $ => choice(
      $.predefined_type,
      $.array_type,
      $.nullable_type,
      alias($.identifier, $.type_identifier),
    ),

    block: $ => seq(
      '{',
      repeat($._expression),
      '}'
    ),

    variable_decl: $ => prec.right(
      seq(
        choice('let', 'const'),
        field('variable', $.identifier),
        optional(
          seq(
            choice('=', 'be', 'is'),
            field('value', $._expression)
          )
        )
      )
    ),

    assignment_target: $ => choice(
      $.identifier,
      $.subscript_expr,
      $.member_expr
    ),

    assignment_expr: $ => seq(
      field('left', $.assignment_target),
      choice(
        '=',
        seq('is', 'now')
      ),
      field('right', $._expression)
    ),

    type_annotation: $ => seq(
      choice(':', 'as'),
      choice($._type, $.literal_type)
    ),

    function_decl_args: $ => seq(
      '(',
      repeat(seq(
        field('name', $.identifier),
        field('type', $.type_annotation)
      )),
      ')'
    ),

    type_parameter: $ => seq(
      field('name', alias($.identifier, $.type_identifier))
    ),

    _type_parameter_decl: $ => seq(
      $.type_parameter,
      repeat(seq(',', $.type_parameter))
    ),

    type_parameters: $ => choice(
      seq('[', $._type_parameter_decl, ']'),
      seq('<', $._type_parameter_decl, '>')
    ),

    _function_signature: $ => seq(
      optional(field('type_parameters', $.type_parameters)),
      field('arguments', $.function_decl_args),
      optional(field('return_type', $.type_annotation)),
      choice(
        field('body', $.block),
        seq('->', field('body', $._expression))
      )
    ),

    function_decl: $ => seq(
      optional('async'),
      'fn',
      optional(field('name', $.identifier)),
      $._function_signature
    ),

    accessibility_modifier: $ => choice(
      'private',
      'public'
    ),

    operator_overload: $ => seq(
      seq('operator', field('operator', choice($.COMP_OP, $.SUM_OP, $.MUL_OP, $.POW_OP, $.UNARY_OP))),
      $._function_signature
    ),

    class_function_definition: $ => seq(
      optional($.accessibility_modifier),
      optional(choice('get', 'set')),
      field('name', $.identifier),
      $._function_signature
    ),

    class_body: $ => seq(
      '{',
      repeat(choice(
        $.class_function_definition,
        $.operator_overload
      )),
      '}'
    ),

    class_decl: $ => seq(
      'class',
      field('name', $.identifier),
      $.class_body
    ),

    please_expr: $ => prec.right(
      seq(
        'please',
        field('expression', $._expression)
      )
    ),

    call_args: $ => seq(
      '(',
      repeat(
        seq(
          $._expression,
          optional(choice(',', 'and'))
        )
      ),
      ')'
    ),

    subscript_expr: $ => prec(
      99,
      seq(
        field('object', $._value),
        '[',
        field('index', $._expression),
        ']'
      )
    ),

    member_expr: $ => prec(
      99,
      seq(
        field('object', $._value),
        '.',
        field('property', alias($.identifier, $.property_identifier))
      )
    ),

    call_expr: $ => prec(
      1,
      seq(
        field('function', $._expression),
        field('arguments', $.call_args)
      )
    ),

    range_expr: $ => prec.right(
      5,
      seq(
        field('from', $._expression),
        choice('->', '->>'),
        field('to', $._expression),
        optional(
          seq(
            '..',
            field('step', $._expression)
          )
        )
      )
    ),

    comp_expr: $ => prec.left(
      1,
      seq(
        field('left', $._expression),
        $.COMP_OP,
        field('right', $._expression)
      )
    ),

    sum_expr: $ => prec.left(
      2,
      seq(
        field('left', $._expression),
        $.SUM_OP,
        field('right', $._expression)
      )
    ),

    mul_expr: $ => prec.left(
      3,
      seq(
        field('left', $._expression),
        $.MUL_OP,
        field('right', $._expression)
      )
    ),

    pow_expr: $ => prec.left(
      4,
      seq(
        field('left', $._expression),
        $.POW_OP,
        field('right', $._expression)
      )
    ),

    unary_percent: $ => prec.left(
      6,
      seq($._value, '%')
    ),

    unary_expr: $ => prec.left(
      6,
      choice(
        seq($.UNARY_OP, $._expression),
        $.unary_percent
      )
    ),

    and_expr: $ => prec.left(
      1,
      seq(
        $._expression,
        'and',
        $._expression
      )
    ),

    or_expr: $ => prec.left(
      1,
      seq(
        $._expression,
        'or',
        $._expression
      )
    ),

    if_expr: $ => prec.left(
      seq(
        'if',
        field('condition', $._expression),
        'then',
        field('consequence', $._expression),
        optional(
          seq(
            'else',
            field('alternative', $._expression)
          )
        )
      )
    ),

    parenthesized_expr: $ => seq(
      '(',
      $._expression,
      ')'
    ),

    _do_expr_or_block: $ => choice(
      seq(
        'do',
        field('body', $._expression)
      ),
      field('body', $.block)
    ),

    for_expr: $ => seq(
      'for',
      field('left', $.identifier),
      'in',
      field('right', $._expression),
      $._do_expr_or_block
    ),

    while_expr: $ => seq(
      'while',
      field('condition', $._expression),
      $._do_expr_or_block
    ),

    is_expr: $ => prec.right(
      seq(
        field('left', $._value),
        'is',
        optional('not'),
        field('right', choice(
          $._type,
          $._primitive_value
        ))
      )
    ),

    break_expr: $ => prec.right(
      seq(
        'break',
        optional($._expression)
      )
    ),

    _import_path: $ => seq($._import_ident, repeat(seq('/', $._import_ident))),
    _import_ident: $ => prec.right(
      repeat1(choice('-', $.identifier, '.'))
    ),

    import_expr: $ => seq(
      'take',
      optional(seq($.identifier, 'from')), // TODO: destructurization?
      field('source', $._import_path)
    ),

    export_expr: $ => seq(
      'give',
      choice(
        field('declaration', $._declaration),
        field('identifier', $.identifier)
      )
    ),

    fuck_expr: $ => seq(
      'fuck',
      field('value', $._expression)
    ),

    return_expr: $ => seq(
      'return',
      field('value', $._expression)
    ),
    
    _binary_expr: $ => choice(
      $.comp_expr,
      $.sum_expr,
      $.mul_expr,
      $.pow_expr,

      $.and_expr,
      $.or_expr,

      $.is_expr
    )
  }
})
