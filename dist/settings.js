"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REDIS_HOST = '127.0.0.1';
exports.REDIS_PORT = 6379;
/**
 * Requets interval in ms
 */
exports.REQUEST_INTERVAL = 60 * 1000 / 30; // 30 requests per minute
/**
 * Min date of last push to repository
 */
exports.MIN_PUSH_DATE = new Date(2016, 0, 1);
/**
 * Min repository size in KB
 */
exports.MIN_REPOSITORY_SIZE = 1;
/**
 * The list of languages
 */
exports.languages = [
    '1C Enterprise',
    'ABAP',
    'ABNF',
    'ActionScript',
    'Ada',
    'Agda',
    'AGS Script',
    'Alloy',
    'Alpine Abuild',
    'AMPL',
    'Ant Build System',
    'ANTLR',
    'ApacheConf',
    'Apex',
    'API Blueprint',
    'APL',
    'Apollo Guidance Computer',
    'AppleScript',
    'Arc',
    'Arduino',
    'AsciiDoc',
    'ASN.1',
    'ASP',
    'AspectJ',
    'Assembly',
    'ATS',
    'Augeas',
    'AutoHotkey',
    'AutoIt',
    'Awk',
    'Batchfile',
    'Befunge',
    'Bison',
    'BitBake',
    'Blade',
    'BlitzBasic',
    'BlitzMax',
    'Bluespec',
    'Boo',
    'Brainfuck',
    'Brightscript',
    'Bro',
    'C',
    'C#',
    'C++',
    'C-ObjDump',
    'C2hs Haskell',
    'Cap\'n Proto',
    'CartoCSS',
    'Ceylon',
    'Chapel',
    'Charity',
    'ChucK',
    'Cirru',
    'Clarion',
    'Clean',
    'Click',
    'CLIPS',
    'Clojure',
    'CMake',
    'COBOL',
    'CoffeeScript',
    'ColdFusion',
    'ColdFusion CFC',
    'COLLADA',
    'Common Lisp',
    'Component Pascal',
    'Cool',
    'Coq',
    'Cpp-ObjDump',
    'Creole',
    'Crystal',
    'CSON',
    'Csound',
    'Csound Document',
    'Csound Score',
    'CSS',
    'CSV',
    'Gherkin',
    'Cuda',
    'Cycript',
    'Cython',
    'D',
    'D-ObjDump',
    'Darcs Patch',
    'Dart',
    'desktop',
    'Diff',
    'DIGITAL Command Language',
    'DM',
    'DNS Zone',
    'Dockerfile',
    'Dogescript',
    'DTrace',
    'Dylan',
    'E',
    'Eagle',
    'EBNF',
    'eC',
    'Ecere Projects',
    'ECL',
    'ECLiPSe',
    'edn',
    'Eiffel',
    'EJS',
    'Elixir',
    'Elm',
    'Emacs Lisp',
    'EmberScript',
    'EQ',
    'Erlang',
    'F#',
    'Factor',
    'Fancy',
    'Fantom',
    'Filebench WML',
    'Filterscript',
    'fish',
    'FLUX',
    'Formatted',
    'Forth',
    'Fortran',
    'FreeMarker',
    'Frege',
    'G-code',
    'Game Maker Language',
    'GAMS',
    'GAP',
    'GCC Machine Description',
    'GDB',
    'GDScript',
    'Genie',
    'Genshi',
    'Gentoo Ebuild',
    'Gentoo Eclass',
    'Gettext Catalog',
    'Gherkin',
    'GLSL',
    'Glyph',
    'GN',
    'Gnuplot',
    'Go',
    'Golo',
    'Gosu',
    'Grace',
    'Gradle',
    'Grammatical Framework',
    'Graph Modeling Language',
    'GraphQL',
    'Graphviz (DOT)',
    'Groovy',
    'Groovy Server Pages',
    'Hack',
    'Haml',
    'Handlebars',
    'Harbour',
    'Haskell',
    'Haxe',
    'HCL',
    'HLSL',
    'HTML',
    'HTML+Django',
    'HTML+ECR',
    'HTML+EEX',
    'HTML+ERB',
    'HTML+PHP',
    'HTTP',
    'Hy',
    'HyPhy',
    'IDL',
    'Idris',
    'IGOR Pro',
    'Inform 7',
    'INI',
    'Inno Setup',
    'Io',
    'Ioke',
    'IRC log',
    'Isabelle',
    'Isabelle ROOT',
    'J',
    'Jasmin',
    'Java',
    'Java Server Pages',
    'JavaScript',
    'JFlex',
    'Jolie',
    'JSON',
    'JSON5',
    'JSONiq',
    'JSONLD',
    'JSX',
    'Julia',
    'Jupyter Notebook',
    'KiCad',
    'Kit',
    'Kotlin',
    'KRL',
    'LabVIEW',
    'Lasso',
    'Latte',
    'Lean',
    'Less',
    'Lex',
    'LFE',
    'LilyPond',
    'Limbo',
    'Linker Script',
    'Linux Kernel Module',
    'Liquid',
    'Literate Agda',
    'Literate CoffeeScript',
    'Literate Haskell',
    'LiveScript',
    'LLVM',
    'Logos',
    'Logtalk',
    'LOLCODE',
    'LookML',
    'LoomScript',
    'LSL',
    'Lua',
    'M',
    'M4',
    'M4Sugar',
    'Makefile',
    'Mako',
    'Markdown',
    'Mask',
    'Mathematica',
    'Matlab',
    'Maven POM',
    'Max',
    'MAXScript',
    'MediaWiki',
    'Mercury',
    'Meson',
    'Metal',
    'MiniD',
    'Mirah',
    'Modelica',
    'Modula-2',
    'Module Management System',
    'Monkey',
    'Moocode',
    'MoonScript',
    'MQL4',
    'MQL5',
    'MTML',
    'MUF',
    'mupad',
    'Myghty',
    'NCL',
    'Nemerle',
    'nesC',
    'NetLinx',
    'NetLinx+ERB',
    'NetLogo',
    'NewLisp',
    'Nginx',
    'Nim',
    'Ninja',
    'Nit',
    'Nix',
    'NL',
    'NSIS',
    'Nu',
    'NumPy',
    'ObjDump',
    'Objective-C',
    'Objective-C++',
    'Objective-J',
    'OCaml',
    'Omgrofl',
    'ooc',
    'Opa',
    'Opal',
    'OpenCL',
    'OpenEdge ABL',
    'OpenRC runscript',
    'OpenSCAD',
    'OpenType Feature File',
    'Org',
    'Ox',
    'Oxygene',
    'Oz',
    'P4',
    'Pan',
    'Papyrus',
    'Parrot',
    'Parrot Assembly',
    'Parrot Internal Representation',
    'Pascal',
    'PAWN',
    'Perl',
    'Perl6',
    'PHP',
    'Pic',
    'Pickle',
    'PicoLisp',
    'PigLatin',
    'Pike',
    'PLpgSQL',
    'PLSQL',
    'Pod',
    'PogoScript',
    'Pony',
    'PostScript',
    'POV-Ray SDL',
    'PowerBuilder',
    'PowerShell',
    'Processing',
    'Prolog',
    'Propeller Spin',
    'Protocol Buffer',
    'Public Key',
    'Pug',
    'Puppet',
    'Pure Data',
    'PureBasic',
    'PureScript',
    'Python',
    'Python console',
    'Python traceback',
    'QMake',
    'QML',
    'R',
    'Racket',
    'Ragel',
    'RAML',
    'Rascal',
    'Raw token data',
    'RDoc',
    'REALbasic',
    'Reason',
    'Rebol',
    'Red',
    'Redcode',
    'Ren\'Py',
    'RenderScript',
    'reStructuredText',
    'REXX',
    'RHTML',
    'RMarkdown',
    'RobotFramework',
    'Roff',
    'Rouge',
    'RPM Spec',
    'Ruby',
    'RUNOFF',
    'Rust',
    'Sage',
    'SaltStack',
    'SAS',
    'Sass',
    'Scala',
    'Scaml',
    'Scheme',
    'Scilab',
    'SCSS',
    'Self',
    'ShaderLab',
    'Shell',
    'ShellSession',
    'Shen',
    'Slash',
    'Slim',
    'Smali',
    'Smalltalk',
    'Smarty',
    'SMT',
    'SourcePawn',
    'SPARQL',
    'Spline Font Database',
    'SQF',
    'SQL',
    'SQLPL',
    'Squirrel',
    'SRecode Template',
    'Stan',
    'Standard ML',
    'Stata',
    'STON',
    'Stylus',
    'Sublime Text Config',
    'SubRip Text',
    'SuperCollider',
    'SVG',
    'Swift',
    'SystemVerilog',
    'Tcl',
    'Tcsh',
    'Tea',
    'Terra',
    'TeX',
    'Text',
    'Textile',
    'Thrift',
    'TI Program',
    'TLA',
    'TOML',
    'Turing',
    'Turtle',
    'Twig',
    'TXL',
    'TypeScript',
    'Unified Parallel C',
    'Unity3D Asset',
    'Unix Assembly',
    'Uno',
    'UnrealScript',
    'UrWeb',
    'Vala',
    'VCL',
    'Verilog',
    'VHDL',
    'Vim script',
    'Vim script',
    'Visual Basic',
    'Volt',
    'Vue',
    'Wavefront Material',
    'Wavefront Object',
    'Web Ontology Language',
    'WebIDL',
    'wisp',
    'World of Warcraft Addon Data',
    'X10',
    'xBase',
    'XC',
    'XCompose',
    'XML',
    'Xojo',
    'XPages',
    'XProc',
    'XQuery',
    'XS',
    'XSLT',
    'Xtend',
    'Yacc',
    'YAML',
    'YANG',
    'Zephir',
    'Zimpl'
];