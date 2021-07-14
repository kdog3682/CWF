function ShuntCallsToBottom()
    let regex = '^(\(|console.log|print)|^const .{-} require'
    let base = line('$')
    let threefourth = base * 0.95
    let start = float2nr(round(threefourth))
    ec start
    let lines = getline(start, '$')
    for i in Ranger(lines)
        if Test(lines[i], regex)
            call setline(i + start, '')
            call append('$', lines[i])
        endif
    endfor

endfunction

function FixTheLineViaTemplate(indexes, arg)
    call GetSetLines(a:indexes, {s -> Replace(a:arg, '\$1', trim(s))}, 0)
endfunction


function GoHtmlBackward()
   let lineindex = line('.')
   let line = CurrentLine()
   let index = match(line, '""')
   "ec line[28]
   "ec line[29]
   "ec index
   call cursor(lineindex, index + 2)
endfunction

function GoHtmlForward()
   let lineindex = line('.')
   let line = CurrentLine()
   let index = match(line, '>')
   call cursor(lineindex, index + 2)
endfunction



function AddErrorDebugForTheThing(indexes) 
    let lines = ['try {',
    \'catch(e) {',
     \   'console.log(e)',
      \  'console.log(s)',
       \ 'throw "error"',
       \ '}'
    ]
    let [a,b] = a:indexes
    let spaces = CurrentSpaces()
    call IndentAll([a,b])
    call append(a - 1, spaces . lines[0])
    call append(b + 1, IndentAll(lines[1:], spaces))
    call cursor(b + 3, 100)
endfunction

function AddFileToFileDict(s)   
    let [a,b] = SplitOnce(a:s)
    let index = search('\v^ *"\\ *''file-dict-start''', '')
    let p = DictEntry(a, Quotify(b))
    call SmartAppend(index, p)
endfunction

" We are in the beta right now. Something that you've never seen before. 


function SmartNav()
    ec 'hi'
endfunction
function SaveToIndex()
    call WriteFile('index.html', readfile(
endfunction



function PrintToScreen(indexes)
    ec join(GetLines(a:indexes), "\n") . "\n\n"
endfunction

function ArchiveContents(indexes)
    let lang = expand('%:t')
    let name = 'archive' . lang
    call AppendFile(name,  GetLines(a:indexes))
    call DeleteLines(a:indexes)
    ec ReadFile(name)
endfunction

function SaveFunctionToList()
    let lang = FileLang()
    let fn = GetFunctionName()
    call ThrowGetter(lang, fn)
    let s = lang . ' ' . fn
    call AppendFile('myfunctions.txt', s)
    ec ReadFile('myfunctions.txt')
endfunction

function SaveFileToList()
    call AppendFile('myfiles.txt', FileTail())
    ec ReadFile('myfiles.txt')
endfunction

function FileLang()
    return expand('%:e')
endfunction

function FileTail()
    return expand('%:t')
endfunction


function IsIndexes(lines)
    return len(a:lines) == 2 && IsNumber(a:lines[0]) && IsNumber(a:lines[1])
endfunction
function ReadFile(file)
    ec join(readfile(a:file), "\n")
endfunction

function SmartTextFix()
    let line = CurrentLine()
    let items = [
      \[  '\{\w+,? \w+.{-}\}', {t -> Sub(t[0], '\w+', {x -> Quotify(x[0]) . ': ' . x[0] .                (Test(t[0], ',') ? '' : ', ')      })}],
    \]

    "store.append({'id': id, 'question': question, 'choices': choices, 'answer': answer})

    if 1 || GetLang() == 'py'
        for [regex, Replacement] in items
            ec regex
            if Test(line, regex)
                ec 'hi'
                let product = Replace(line, regex, Replacement)
                ec product
                return setline('.', product)
            endif
        endfor
    endif

endfunction


nnoremap 5 /^\.

function Pugify()
    let match = Match(GetFunctionLine(), '\w+\ze \=')
    ec match
    call setline('.', 'pug(' . match . ')')
endfunction

function LookForFiles(s)
    if Test(a:s, '^\w+$')
        if Test(a:s, 'mp3|jpg|svg|png|js|py|txt|html|pdf|css')
            ec globpath('.', '*' . a:s)
        else
            ec globpath('.', a:s . '*')
        endif
        return 
    endif
    let [dir, query] = SplitOnce(a:s)
    ec [dir, query]
    ec globpath(dir, query)
endfunction
function Latest(s)
    ec globpath('.', '*' . a:s)
endfunction
"06-09-2021 05:53:39 /
iab gd '/mnt/chromeos/GoogleDrive/MyDrive/CWF/'
iab mgd '/mnt/chromeos/GoogleDrive/MyDrive/CWF/'

nnoremap zv /^Vue.prototype.

    let g:jspydict = {
        \ 'bash': {
            \ 'function': '',
            \ 'p1': '',
            \ 'p2': ' {',
            \ 'suffix': ' }',
        \ },
        \ 'js': {
            \ 'clbr': 'console.log("*******************************************")', 
            \ 'lbr': '/****************************************************/', 
            \ 'expand': 'javascript', 
            \ 'libfile': 'javascript.lib', 
            \ 'sdelimiter': '`', 
            \ 'else': 'else {', 
            \ 'stry': 'try {', 
            \ 'scatch': ['}', 'catch(e) {', '    ', '}'],
            \ 'try': ['try {', '    ', '}', 'catch(e) {', '    ', '}'],
            \ 'ift': ['if (', ') {'],
            \ 'eft': ['else if (', ') {'],
            \ 'if': ['if (', ') {'],
            \ 'ef': ['else if (', ') {'],
            \ 'o': 'isObject',
            \ 'classparam': '',
            \ 'classp1': '',
            \ 'a': 'isArray',
            \ 'n': 'isNumber',
            \ 's': 'isString',
            \ 'testfunc': 'test',
            \ 'commentPrefix': '//',
            \ 'commentSuffix': '',
            \ 'comment': '//',
            "\ 'commentfn': CommentJS,
            \ 'consolefn': {s -> 'console.log(' . s . ')'},
            \ 'function': 'function',
            \ 'p1': 'function',
            \ 'p2': ' {',
            \ 'suffix': '}',
            \ 'capitalize': 0,
            \ 'runtime': 'node',
            \ 'prettier': 'prettier --write ',
            \ 'variablePrefix': 'const ',
            \ 'consoleStart': 'console.log(',
            \ 'consoleEnd': ')',
            \ 'logicsuffix': '}',
        \ }, 
        \ 'vim': {
            \ 'lbr': '"""""""""""""""""""""""""""""""""""""""""""""""""""""""', 
            \ 'else': 'else', 
            \ 'stry': 'try', 
            \ 'scatch': ['catch', '        ', 'endtry'],
            \ 'try': ['try', '    ', 'catch', '    ', 'endtry'],
            \ 'o': 'IsObject',
            \ 'a': 'IsArray',
            \ 'classparam': 'self',
            \ 'classp1': '',
            \ 'n': 'IsNumber',
            \ 'logicsuffix': '',
            \ 's': 'IsString',
            \ 'if': ['if ', ''],
            \ 'ef': ['elseif ', ''],
            \ 'ift': ['if ', ''],
            \ 'eft': ['elseif ', ''],
            \ 'testfunc': 'Test',
            \ 'commentPrefix': '"',
            \ 'commentSuffix': '',
            \ 'comment': '"',
            \ 'function': 'function',
            \ 'p1': 'function',
            \ 'p2': '',
            \ 'suffix': 'endfunction',
            \ 'capitalize': 1,
            \ 'variablePrefix': 'let ',
            \ 'consoleStart': 'echom ',
            \ 'consoleEnd': '',
            \ 'consolefn': {s -> 'echo ' . s},
        \ },
        \ 'html': {
            \ 'commentPrefix': '<!--',
            \ 'commentSuffix': ' -->',
        \ },
        \ 'css': {
            \ 'lbr': '/*********************************************************/',
            \ 'commentPrefix': '/*',
            \ 'commentSuffix': ' */',
        \ },
        \ 'py': {
            \ 'lbr': '#######################################################', 
            \ 'expand': 'python', 
            \ 'libfile': 'combine.py.lib', 
            \ 'sdelimiter': '''''''', 
            \ 'else': 'else:', 
            \ 'stry': 'try:', 
            \ 'scatch': ['except Exception as e:', '        '],
            \ 'classp1': 'def ',
            \ 'classparam': 'self',
            \ 'try': ['try:', '    ', 'except Exception as e:', '    '],
            \ 'o': 'isObject',
            \ 'logicsuffix': '',
            \ 'a': 'isArray',
            \ 'n': 'isNumber',
            \ 's': 'isString',
            \ 'prettier': 'black ',
            \ 'if': ['if ', ':'],
            \ 'ef': ['elif ', ':'],
            \ 'ift': ['if ', ':'],
            \ 'eft': ['elif ', ':'],
            \ 'testfunc': 'test',
            \ 'commentPrefix': '#',
            \ 'commentSuffix': '',
            \ 'function': 'def',
            \ 'comment': '#',
            \ 'p1': 'def',
            \ 'p2': ':',
            \ 'suffix': '',
            \ 'capitalize': 0,
            \ 'run': 'python3',
            \ 'runtime': 'python3',
            \ 'variablePrefix': '',
            \ 'consoleStart': 'print(',
            \ 'consoleEnd': ')',
            \ 'consolefn': {s -> 'print(' . s . ')'},
        \ }
    \}
  let g:filedict = {
      "\ 'file-dict-start': 'foo',
      \    'ss': 'scrapescript.py',
      \ 'i': 'index.html',
      \ 'mk': 'makescript.js',
      \ 'g': 'githubscript.py',
      \ 'th': 'thursday.html',
      \ 'm': 'main.js',
      \ 'st': 'styles.css',
      \ 'c': 's.css',
      "\ 'q': 'questions.txt',
      \  'n': 'notes.txt',
      \  'red': 'redditscript.py',
      \  'em': 'emailscript.py',
      \  'r': 'r.py',
      \  'ft': 'filetracker.txt',
      \  't': 't.html',
      \  'd': 'derived.py',
      \  's': 'storage.py',
      \  'sh': 'shortcuts.py',
      \  'h': 'helpers.js',
      \  'vh': 'vuehelpers.js',
      \  'u': 'utils.py',
      \  'uj': 'utils.js',
   \  'isss': 'vuecm3.html',
   \  'ii': 'vuecm5.html',
 \  'ex': 'ex1.html',
      \  'vim': '~/.vimrc',
      \  'vimrc': '~/.vimrc',
      \  'bash': '~/.bash_aliases',
  \ }
let g:cabmap = {
    \ 'center': "display: flex; align-items: center; justify-content: center;",
    \ 'b': "border: 0.5px solid blue;",
\ }

"05-31-2021 06:44:56 
"05-29-2021 17:06:08 tossed bananas because they were completely soft.  toss corn because it was slimey. i had only bought it for a few days.  toss crutons because i dont like crutons.  tossed the black highlighter sharpie bc it went out of ink really fast. 

function OpenCurrentFiles()
    let files = ['vuecm5.html', 'vuehelpers.js']
    for file in files
        call OpenBuffer(file)
    endfor
endfunction
function WriteDebugMessage()
    let message = '/* ' . toupper(g:debug) . ' */  '
    call ReplaceLine(line('.'), '^ *\zs', message)
endfunction

let g:prepfiledict = {
    \'py': [
        \ "from storage import *",
        "\ "import regex as re",
        \ "",
        \ "",
    \],
\}
" a superpack of 9 fotl underwears is $15.98, while a 6 pack of hanes underwear is 9.98. wts the better deal
let g:snippetdict = {
    \ 'bar': 'baz',
    \ 'eater': "<left><Left><C-R>=Eatchar('\s')<CR>",
\}



func Eatchar(pat)
  let c = nr2char(getchar(0))
  return (c =~ a:pat) ? '' : c
endfunc

fun CopyGetter(regex)
  let @/ = a:regex
  ec
  let repl = expand("<cword>")
  //s//\=repl
endfun

iab cmsetup this.codemirror = CodeMirror.fromTextArea(this.$refs.codemirror, options)
iabbrev <silent> tcm this.codemirror<C-R>=Eatchar('\s')<CR>
iabbrev <silent> gv getValue<C-R>=Eatchar('\s')<CR>
iabbrev <silent> sv setValue<C-R>=Eatchar('\s')<CR>
inoremap 90 ()<left>
"iabbrev <silent> <~/.vimrc> if if ()<Left><C-R>=Eatchar('\s')<CR>
"iabbrev  <silent> 90 ()<left><C-R>=Eatchar('\s')<CR>
"iabbrev  <silent> sw startsWith('')<Left><left><C-R>=Eatchar('\s')<CR>
"iabbrev  <silent> ift if (test())<left><Left><C-R>=Eatchar('\s')<CR>
"iabbrev  <silent> l90 () =>
"iab ls (s) =>
"iab lkv (k,v) =>
"iab l console.log()<Left><C-R>=Eatchar('\s')<CR>
"iab asdf daf
"iab vimeat \<left>\<Left>\<C-R>=Eatchar('\s')\<CR>
"iab efe else if (exists())<Left><Left><C-R>=Eatchar('\s')<CR>
"iab efs else if (isString())<Left><Left><C-R>=Eatchar('\s')<CR>
"iab efo else if (isObject())<Left><Left><C-R>=Eatchar('\s')<CR>
"iab efn else if (!)<Left><C-R>=Eatchar('\s')<CR>
"iab efa else if (isArray())<Left><Left><C-R>=Eatchar('\s')<CR>
"iab ife if (exists())<Left><Left><C-R>=Eatchar('\s')<CR>
"iab ifs if (isString())<Left><Left><C-R>=Eatchar('\s')<CR>
"iab ifo if (isObject())<Left><Left><C-R>=Eatchar('\s')<CR>
"iab ifn if (!)<Left><C-R>=Eatchar('\s')<CR>
"iab ifa if (isArray())<Left><Left><C-R>=Eatchar('\s')<CR>





inoremap w. <esc>A {<esc>o}<esc><s-o>
inoremap <expr> w, EnterBlockExpression()

let g:pyactualpydict = {
 \   'ifn': "if not $0:\n    $c",
 \   'ift': "if test($2, $1):\n    $c",
 \   'ifo': "if isObject($1):\n    $c",
 \   'ifs': "if isString($1):\n    $c",
 \   'ifa': "if isArray($1):\n    $c",
 \   'iff': "if isFunction($1):\n    $c",
 \
 \
 \   'class': "class ${Capitalize($1)}:\n    def __init__(self${AddParams($2)}$c):",
 \   'enter': "def __enter__(self):\n    return self\ndef __exit__(self, error, *args):\n    $c",
\ }

"//pdicfs

function UseHelper(s)
    let s = a:s
    if Test(s, 'fetch')
        return "const fetch = require('node-fetch')"
    elseif Test(s, 'fs') 
        return "const fs = require('fs')"
    elseif Test(s, 'css$')
        return '<link rel="stylesheet" type="text/css" href="./' . s . '" />'
    elseif Test(s, 'style')
        return '<link rel="stylesheet" type="text/css" href="./styles.css" />'
    else
        return '<script src="' . s . '"></script>'
    endif
endfunction

let g:pydict = {
    \ 'script': "<script>$c</script>",
    \ 'jshint': "const JSHINT = require('./jshint.js')",
    \ 'prom': "return new Promise((resolve) => {\n    $c\n})",
    \ 'u': "${UseHelper($1)}",
    \ 'use': "${UseHelper($1)}",
    \ 'vuediv': "<div id=\"app\">\n    $c\n</div>",
    \ 'katex': '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css" integrity="sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc" crossorigin="anonymous"><script src="https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.js" integrity="sha384-YNHdsYkH6gMx9y3mRkmcJ2mFUjTd0qNQQvY9VYZgQd7DcN7env35GzlmFaZ23JGp" crossorigin="anonymous"></script>',
    \ 'kf': "${KeyFramer($0)}",
    \ 'computed': "computed: {\n    computed${Capitalize($1)}() {\n        $c\n    },\n},",
    \ 'writer': "from storage import write\nwrite('temp.txt', $1)",
    "\ 'vmo': "mounted() {\n    $c\n}",
    \ 'vuen': "const ${Capitalize($1)}Component = {\n    props: ['value'],\n    template: `$c`,\n        \n    data() {\n        return {\n            message: 'hi',\n        }\n    },\n\n}",
    \'fetch': "const fetch = require('node-fetch')",
    \ 'vueno': "Vue.component('${Capitalize($1)}Component', {\n    props: ['value'],\n    template: `$c`,\n        \n    data() {\n        return {\n            message: 'hi',\n        }\n    },\n})",
    \ 'vuer': "const ${Capitalize($1)}Component = {\n    props: ['value'],\n    render(h) {\n        $c\n    },\n\n}",
    \ 'vueco': "const ${tolower($1)}template = `\n\ndiv {\n    $c\n}\n\n`\n\nconst ${Capitalize($1)} = {\n    template: simplepug(${tolower($1)}template),\n    props: ['abcdefg'],\n\n\n}",
    \ 'vuec': "const $1template = `\n\n$c\\nn`\n\nVue.component('$1', {\n    template: $1template,\n    props: ['abcdefg'],\n\n\n})",
    \ 'rpw': "def parser(data):\n    $c\n\nrpwo('$1', parser)",
    \ 'cs': "class: '$c',",
    \ 'dir':    "directives: [\n    {\n        name: $c\n        value: \n    },\n],",
    \ 'center': "display: flex; align-items: center; justify-content: center;$c",
    \ 'b': "border: 0.5px solid blue;$c",
    \ 'wh100': "width: 100%; height: 100%;$c",
    \
    \
    \
\    'a'  : "const $1 = [\n    $c\n]",
\    'd'  : "const $1 = {\n    $c\n}",
\    'vp'  : "Vue.prototype.$$1 = function($2) {\n    $c\n}",
 \   'rpwo': "rpwo('$1', (s) => {\n    $c\n})",
 \   'switch': "switch ($1) {\n    $c\n}",
 \   'vprop': "props: ${ArrayExpand($0)},",
 \   'wae': "window.addEventListener('keydown', $1)",
 \   'vmo': "mounted() {\n    $c\n},",
 \   'vm': "methods: {\n    $c\n},",
 \   'st': "setTimeout(() => {\n    $c\n}, $0)",
 \   'vt': "template: `\n    $c\n`,",
 \   'vd': "data() {\n    return {\n        $c\n    }\n},",
 \   'data': "function data() {\n    return {\n        $c\n    }\n}",
 \   'rc': "Vue.component('$1', {\n    render(h) {,\n        $c\n    }\n})",
 \   'cc': "Vue.component('$1', {\n    render(h) {\n    $c\n    }\n})",
 \   'cidfgdc':  "Vue.component('$1', {\n    data() {\n        return {\n            $c\n        }\n    },\n    methods: {\n\n    },\n    computed: {\n\n    },\n    watch: {\n\n    },\n    mounted() {\n\n    },\n    render(h) {\n\n    }\n}",
 \   'vc':  "const $1 = {\n    template: ${tolower($1)}template,\n    data() {\n        return {\n            $c\n        }\n    },\n    methods: {\n\n    },\n    computed: {\n\n    },\n    mounted() {\n\n    },\n}",
 \   'fori': "for (let i = 0; i < $1; i++) {\n    $c\n}",
 \   'for2': "for (let i = 0; i + 1 < $1; i += 2) {\n    $c\n}",
 \   'forkv': "for (let [k, v] of Object.entries($1)) {\n    $c\n}",
 \   'for': "for (let ${ZoopBar($1)} of $1) {\n    $c\n}",
 \   'if':  "if ($0) {\n    $c\n}",
 \   'ef':  "if ($0) {\n    $c\n}",
 \   'ife': "if (exists($0) {\n    $c\n}",
 \   'ifn': "if (!$0) {\n    $c\n}",
 \   'ift': "if (test($2, $1)) {\n    $c\n}",
 \   'iff': "if (isFunction($1)) {\n    $c\n}",
 \   'ifa': "if (isArray($1)) {\n    $c\n}",
 \   'ifo': "if (isObject($1)) {\n    $c\n}",
 \   'ifs': "if (isString($1)) {\n    $c\n}",
 \   'ifnum': "if (isNumber($1)) {\n    $c\n}",
 \   'efn': "else if (!($0) {\n    $c\n}",
 \   'eft': "else if (test($2, $1)) {\n    $c\n}",
 \   'eff': "else if (isFunction($1)) {\n    $c\n}",
 \   'efa': "else if (isArray($1)) {\n    $c\n}",
 \   'efo': "else if (isObject($1)) {\n    $c\n}",
 \   'efs': "else if (isString($1)) {\n    $c\n}",
 \   'efnum': "else if (isNumber($1)) {\n    $c\n}",
 \   'class': "class ${Capitalize($1)} {\n    constructor($c) {\n    }\n\n}",
\ }

function PySnippetTemplater(match, parts, line)
    "let match = IsArray(a:match) ? a:match[1] : a:match
    let match = a:match[1]
    let parts = a:parts
    let line = a:line

    if match == 'c'
        return ''
    elseif Test(match, '^\d+')
        if match == '0'
            return line
        elseif match - 1 < len(parts)
            return parts[match - 1]
        else
            return ''
        endif

    ec match
    elseif match =~ '^{'
        let match = match[1:-2]
        "let match = Sub(match, '\$(\d+)', {s -> function('P99')(s, parts, line)})
        ec 'howdyddd'
        let match = Sub(match, '\$(\d+)', {s -> function('Quotify')(function('PySnippetTemplater')(s, parts, line))})
        return eval(match)

        map
    endif
endfunction

function PySnippet()
    let [spaces, tag, line, parts] = GetSpacesTagLineAndParts()

    if !has_key(g:pydict, tag)
        if !Test(line, ':$')
            let line .= ':'
        endif
        call setline('.', spaces . tag . ' ' . line)
        call append('.', spaces . '    ')
        call cursor(line('.') + 1, 100)
        return
    endif

    let snippet = get(g:pydict, tag)
    let regex = '\$(\{.{-}\}|\d+)'
    let Parser89 = {x -> function('PySnippetTemplater')(x, parts, line)}
    let snippet = Sub(snippet, regex, Parser89)
    let cursorpos = GetCursorFromStringSnippet(snippet)
    let snippet = Replace(snippet, '\$c', '')
    call TextPlacement(SplitLines(snippet), spaces)
    call SetCursor(cursorpos, spaces)
        

endfunction

function GetCursorFromStringSnippet(snippet)
    let lines = split(a:snippet, "\n")
    for [i, line] in Enumerate(lines)
        if line =~ '\$c'
            let ch = match(line, '\$c')
            return [Relative(i), ch]
        endif
    endfor
endfunction


    let jsdict = {
    \   "div":  {'template': "<div>$c</div>"       , 'cursor': 'smart', 'suffix': ''},
    \   "vt":  {'template': "template: `\n    \n`,"       , 'suffix': ''},
    \   "vd":  {'template': "data() {\n    return {\n        %c\n    }\n},"       , 'suffix': ''},
    \   "vm":  {'template': "methods: {\n    \n},"        , 'suffix': ''},
    \   "vc":  {'template': "computed: {\n    \n},"       , 'suffix': ''},
    \   "props":  {'snippet': "props: $0,", 'functions': 'ArrayExpand', 'noappend': 1},
    \   "else":  "else {",
    \   "m":  "method $0($1) {",
    \   "border":  "border: 0.5px solid red;",
    \   "mo":  "mounted() {",
    \   "st":  {'snippet': "setTimeout(() => {\n    %c\n}, $0)"},
    \   "vp":  "Vue.prototype.$$0 = function($1) {",
    \   "lbr":  "$$JSPY('comment')$$ --------------------------",
    \   "len":  "print('length of $0:', len($0))",
    \   "forkjiii":  "",
    \   "forkijiii":  "",
    \   "fork":  "for (let key of Object.keys($0) {",
    \   "forv":  "for (let value of Object.values($0) {",
    \   "forkv":  "for (let [k, v] of Object.entries($0)) {",
    \   "fori":   "for (let i = 0; i < $0; i++) {", 
    \   "for":   [1, "for (let $a of $0) {", {s -> s[:-2]}],
    \   "ef":     "else if ($0) {",
    \   "efs":    "else if (isString($0)) {",
    \   "efo":    "else if (isObject($0)) {",
    \   "efa":    "else if (isArray($0)) {",
    \   "efn":    "else if (!$0) {",
    \   "class":  {
            \ 'snippet': "class $0 {\n    constructor($1) {\n    }", 
            \ 'functions': ['Capitalize', 'Identity'],
    \},  
    \   "if":     "if ($0) {",
    \   "ifs":    "if (isString($0)) {",
    \   "ifo":    "if (isObject($0)) {",
    \   "ifa":    "if (isArray($0)) {",
    \   "ifn":    "if (!$0) {",
    \   "ift":    "if (test($0)) {",
    \   "eft":    "else if (test($0)) {",
    \   "while": "while {\n}",
    \   "try": "try {\n}\ncatch(e) {",
    \   "dict": "const dict = {", 
    \   "obj": "const obj = {", 
    \   "arr": "const arr = [", 
    \   "items": "const items = [", 
    \ }

let g:logicdict = {'js': jsdict, 'vim': jsdict, 'py': jsdict}
let g:htmldict = {
\    'div': 'div',
\    'section': 'section',
\}
    


"05-17-2021 08:07:30 extreme hunger pain. happened after waking up. i felt fine, then i did a lot of kitchen actions, then, i was swamped by hunger. hunger like i have never really felt. it lasted for quite some time. even now, some 2 hours later, the hunger is persisting. eating some mentos helped a little bit. is it from seaweed parasite. is it from low blood sugar. why did it happen. i have no idea. maybe bc ive been on a protein deficit for awhile. maybe i shud eat 2 breakfasts.  threw away hoison sauce. tossed all the green beans. they were all dirty. shud i be writing notes here...
"05-16-2021 09:17:10 appendbelow's final argument is usespaces which is active by default. to deactivate, press 1.
iab ifmain if __name__ != '__main__': return

function WriteVimIab(s)
    let cmd = 'iab ' . a:s
    AppendFile('~/.vimrc', cmd, 0)
endfunction

iab ssp s.split('\n')

nnoremap sh :call ShuntBlock('/home/kdog3682/CWF/helpers.js')<cr>
nnoremap sb :call ShuntBlock()<cr>

function JsonGetter(file, key)
    data = ReadJson(FuzzyFileFinder(a:file))
    if IsNumber(key)
       kjhkjkj 
    endif 
endfunction

hi Error ctermfg=Red guifg=Red

"05-12-2021 11:18:52 all of these sentences should be aggregated away. the resultant file should be parsed. 
"05-12-2021 10:07:53 the comparisons are necessary. give them constant reinforcement for how the student is doing. You have to consider the history of 1000s of years. 
"05-12-2021 09:34:51 when mom talks to me, she often references me as a young child. 'you're a good kid.' 'you're a good boy.' she talks to me as if i am a child. she rarely seems to hear what im saying. she likes to make assumptions and judgments. 'you are like this, or you are like that.' I don't enjoy the conversation. I find myself saying rediculous things. 'I love lists. I have thousands of lists.'  

"05-12-2021 07:16:28 how do you install the :py command  for reference, I am running vim 8.1 on linux via chromebook. When checking :version, I see that both :python and python3 have are not installed with the build. I have been googling, 'add python3 support to vim' but thus far, haven't been able to find an answer. Any ideas on what I might try? thx.

"05-11-2021 10:13:54 istaw to have the cursor always start at the bttom of a file instead of the start of a file  i noticed the first thing that i do in almost every file is to type G to get to the bttom of the file. i feel like there is probably a way to automatically bring the cursor down?
"05-11-2021 09:43:14 is there a way to auto capitalize text in command mode  For instance, my vimrc has a command 'Tick' which activates call Ticker(). But in order for me to access this function, I have to type a capitalized 'T' for Tick. Hence, I'm wondering if there is a way to autocapitalize, so that I can write 'tick' instead of having to write 'Tick.'
"05-10-2021 16:27:12 why does vim have a lot of 'gotchas' when it comes to single and double quotes  so many times i will be bashing my head over a regex or an execute command and the final debugging solution comes down to i shudve used single quotes or i shudve used double quotes. as a beginner, im really starting to enjoy scripting with vim, but these gotchas have been really aggrevating to say the least. Are there any cut and cold guidelines for when u shud basically always use sq vs dq and vice versa? 
"05-10-2021 07:06:47 is there a way to have multiple vimrcs  for example, when i am using the js vimrc, ec should expand into console.log.  when using the python vimrc, ec should expand into print
"05-09-2021 09:09:07 leaderf can be used 2 ways. the first is when a;s has '/'. this will activate normal find and replace global. the second way is to use it without a space. this will search for the function if it exists, otherwise, the fn will be settled to the bottom of the file.
"05-09-2021 09:03:59 til you have to double the quotes if you want to escape them 
"05-09-2021 08:46:21 how do you incorporate regex into split function  fex, id lk 2 split on period, on space, or on slash.
"05-09-2021 07:27:35 hi
set hidden
nnoremap ze :call FileOpener()<cr>

set scrolloff=3 " Keep 3 lines below and above the cursor

"05-08-2021 15:51:34 what is the purpose of setting a mapleader or localmapleader  i recently discovered that commands can be multiple characters. for example, someething like this

nnoremap < :call SmartIndent()<cr>
function QuestionShifter()
    let lang = GetLang()
    call OpenBuffer('questions.txt', 1)
    call append('.', lang)
    return
    if GetFile() == 'questions.txt' 
        execute "edit #"
    else
        call OpenBuffer('questions.txt', 1)
        call append('.', lang)
    endif
endfunction

nnoremap zs :call ShuntManager('')<left><left>
nnoremap za :call QuestionShifter('')<left><left>
nnoremap zn :call WriteNote('')<left><left>
nnoremap za :call QuestionShifter()<cr>
"nnoremap zd :call delete(expand('%')) | bdelete!
nnoremap zi :call AddImportStatement('')<cr>
nnoremap zg :call ShuntAndGoTo('')<left><left>
nnoremap zr :call Replacer("")<left><left>
nnoremap z0 :! python3 foo.py<cr>
nnoremap zm :! python3 foo.py<cr>
"inoremap zb <esc>:call SayHi()<cr>

"in this case, the 'z' is kind of acting like my mapleader. I'm curious, what benefit is derived by expliciting saying 'let mapleader = z' versus, doing it the way that im currently doing itqm
"
"how do you programmatically delete a line  currently, i use cs call setline('.', '') ce but this doesnt actually dellte the line. ur left with a blank line. istaw a to have this blank also not be there i have tried using cs normal D ce but the problem with this is that i cant control the line index the way that you can with setline.
"
"hdu run a script a single time  id like to run script.py when vim is loaded / sourced, but it should only be run, if it is the first time. otherwise, nothing should happen.

function ShuntToReddit()
    let store = []
    let start = 0
    let end = line('.')
    for i in range(start, end)
        call add(store, getline(i)
        call DeleteLine(i)
    endfor
endfunction

iab rf findall

function SetLines(lines)
    let spaces = CurrentSpaces()
    let lines = map(lines, {i, line -> spaces . line})
    call append('.', lines)
endfunction

function GetVariable()
    return 's'
endfunction

function Finder(r)
    let index = search(a:r, 'bn')
    return Match(getline(index), a:r)
endfunction

function Prf()
    let r = '^ *\zs\w+\ze ='
    let r = Finder(r)
    let s = GetVariable()
    call SetLines('matches = findall(' . r . ', ' . s . ')', Logger('matches'))
endfunction
function Logger(s, ...)
    let lang = a:0 == 1 ? a:1 : GetLang()
    if lang == 'js'
        return 'console.log' . Parens(a:s)

    elseif lang == 'py'
        return 'print' . Parens(a:s)

    elseif lang == 'vim'
        return 'echo ' . a:s
    endif
endfunction
"ask: how do you rename a file  for example, the buffer that i have opened is a.txt. i have a file in my directory called b.txt. i would like to rename b.txt to c.txt. i came up with kind of a convoluted soln, and im wondering if there might be a better way.
"05-07-2021 18:31:26: When using subsitution on a line, is there a way to remove the trailing newline as well?    

function Foo(...)
    echom a:000
endfunction

function FunctionManager(x)
    if Getlang() == 'vimrc'
        call VimrcFunctionManager(a:x)
        return
    endif
    let items = split(a:x)
    let key = items[0]
    let args = items[1:]
    call call(function(Capitalize(key)), args)
endfunction

function CharPos(n)
    let [a,b,c,d] = getpos('.')
    return [a,b, c + a:n, d]

endfunction
function ReplaceWordUnderCursor(replacement)
    let word = WordUnderCursor()
    execute '%s/\v<' . word . '>/' . a:replacement . '/g'
endfunction

function CurrentWord()
    return expand('<cword>')
endfunction

function Boundary(s)
    return '<' . a:s . '>'
endfunction
function FunctionRange()
    let r = GetCodeIndexes()
    return range(r[0], r[1], 1)
endfunction

function GetSetLines(indexes, fn, ...)
    let spaces = a:0 >= 1 ? '' : GetSpaces(getline(a:indexes[0]))

    if IsNumber(a:indexes) || (IsString(a:indexes) && a:indexes == '.')
            let index = a:indexes
            let line = getline(index)
            let spaces = GetSpaces(line)
            let product = FunctionGetter(a:fn)(Strip(line))
            if empty(product)
                let product = line
            else
                let product = spaces . product
            endif
            call setline(index, product)
            return 
    endif

    for index in range(a:indexes[0], a:indexes[1])
        let line = Strip(getline(index))
        let product = a:fn(line)
        if empty(product)
            let product = line
        else
            let product = spaces . product
        endif
        call setline(index, product)
    endfor
endfunction

function GetSet(index, fn)
    if IsNumber(a:index) || Test(a:index, '[.$^]')
        let line = a:fn(getline(a:index))
        call setline(a:index, line)
    else
        call setline('.', a:fn(a:index))
    endif

endfunction

function FasdfileGetter(file)
  let dict = {
      \ 'q': 'questions.txt',
      \  'n': 'notes.txt',
      \  'r': 'r.py',
      \  't': 'today.py',
      \  'd': 'derived.py',
      \  's': 'storage.py',
      \  'sh': 'shortcuts.py',
      \  'h': 'helpers.py',
      \  'u': 'utils.py',
      \  'vim': '~/.vimrc',
      \  'vimrc': '~/.vimrc',
      \  'bash': '~/.bash_aliases',
  \ }
  let match = get(dict, a:file)
  return match
    let file = a:file
    if Not(file)
        if Not('b:buffer')
            let b:buffer = 'today.py'
        endif
        let file = b:buffer
    endif

    let dict = {
        \ "sc": 'shortcuts',
        \ "s": 'storage',
        \ "h": 'helpers',
    \ }

    let file = get(dict, file, file)
    if Not(HasExtension(file))
        let file += '.' . CurrentExtension()
    endif
    return PathFix(file)
endfunction

function HasExtension(file)
    return Test(a:file, '\.\w+$')
endfunction
nnoremap zq :call ShuntFunction()<left><left>
function ShuntAndGoTo(s)
    call ShuntManager(a:s)
    call ChooseBuffer(a:s)
endfunction
let b:deleterange = 1

function ShuntManager(s)
    let [file, options] = ForceSplit(a:s, '/')
    let options = split(options, '\zs') 
    let gotobuffer = 0
    let keeprange = 0
    for option in options
        if option == 'd'
            let b:deleterange = 1
        elseif option == 'k'
            let keeprange = 1
        elseif option == 'g'
            let gotobuffer = 1
        endif
    endfor
    let file = FileGetter(file)
    let insertion = 0
    if Not(file)
        let insertion = GetLine()
        if IsConstant(insertion)
            let file = 'r.py'
        endif
    else
        let range = GetCodeIndexes()
        let insertion = GetLines(range)
        let lang = GetLang(file)
        let regex = '\v^ *(const|let) ' 
        if lang == 'py' && insertion[0] =~ regex
            let insertion[0] = Replace(insertion[0], regex, '')
        endif
    endif

    ec 'Shunting to file: ' . file
    call AppendLines(insertion, file)

    if Not(keeprange)
        call DeleteRange(range)
    endif

    if gotobuffer
        call OpenBuffer(file)
    endif
endfunction

function ShuntFunction(...)
    let file = a:0 == 1 ? a:1 : '' 
    let file = FileGetter(file)
    let lines = GetFunction()
    if file =~ '.'
        call DeleteRange(range)
    endif
    call AppendLines(lines, file)
endfunction

function DeleteLine(i)
    call deletebufline('%', a:i)
    "call setline(a:i, '')
endfunction

function DeleteRange(indexes)
    let [a,b] = a:indexes
    call deletebufline('%', a, b)
endfunction

function AppendLines(lines, destination)
    call add(a:lines, '')
    call writefile(a:lines, a:destination, 'a')
endfunction

nnoremap cf :call CreateFunctionFromLine()<cr>A
nnoremap cu :call Cleanup()<cr>

iab cr9 <cr>()

let g:dotu = '.{-}'

function Count(s, el)
    let matches = matchlist(a:s, Regexed('\ze' . a:el))
    ec matches
endfunction

function CreateFunctionFromLine()
    let line = CurrentLine()
    let currentword = CurrentWord()
    let wordindex = match(line, currentword . '(')
    if wordindex > -1
        let line = line[wordindex:]
    endif
    let line = Replace(line, 'a:', '', 'g')
    let match = Strip(Match(line, '\w+\([a-zA-Z, ]+\)'))
    if empty(match)
        let match = Strip(matchstr(line, '\v\w*\ze\('))
    else
        let match = Replace(match, '''''', 's')
    endif
    call CreateFunctionBlock('bottom', match)
endfunction
"05-07-2021 12:08:17: i learned that it is mch mr conv 2 uz \v mode. u can directly use exprs lk '%subsitute'. u can rit lambda fncs. it is ezier to create anew than 2 edit. keeping function params to a bare minimum is extremely imp. folo th etiquit of th romans. u can append 2 othr buffers. it will be an endless hole to continue down.
function IsHtml()
    return GetLang() == 'html'
endfunction


function ToggleKeyBindings()
    execute ''
endfunction


"inoremap w[ <esc> IsHtml() ? ":call EnterBlock() <cr>a" : ":call HtmlHandler()) <cr>a"
function TextPlacement(lines, ...)
    let spaces = a:0 == 2 ? a:1 : CurrentSpaces()
    let lines = map(a:lines, {pos, line -> spaces . line})
    call setline('.', lines[0])
    call append('.', lines[1:])
endfunction

function Quotify(s, ...)
    let dq = a:0 >= 1 ? a:1 : 0
    if Exists(dq) 
        return '"' . a:s . '"'
    endif
    return '''' . a:s . ''''
endfunction
function OptionGetter(args, flags)
    let store = []
    let flags = split(a:flags, '\zs')
    for i in range(0, len(flags) - 1)
        "if i < len(a:args) && a:args[i] == flags[i]
        if i < len(a:args)
            call add(store, a:args[i])
        else
            call add(store, 0)
        endif
    endfor
    return store
endfunction

function HtmlHandler()

    let spaces = CurrentSpaces()
    let word = CurrentWord()
    ec word


    let predict = {
        \ 's': '<br style="margin-top:10px"/>',
        \ 'spacer': '<br style="margin-top:10px"/>',
    \ }
    let match = get(predict, word)
    if Exists(match)
        call setline('.', spaces . match)
        call cursor('.', 100)
        return
    endif


    let worddict = {
    \    'd': 'div',
    \    'b': 'button',
    \ }
    let word = get(worddict, word, word)
    let attrdict = {
    \    'button': '@click=""',
    \ }
    let s = ToOpeningTag(word, get(attrdict, word)) . ToClosingTag(word)
    call setline('.', spaces . s)
    call cursor('.', strlen(spaces) + strlen(word) + 2)
endfunction


function DictionaryExpand(line)
   let parts = split(a:line) 
   return Mapped(parts, function('DollarReplace'))
endfunction

function MakeArray(line)
    let parts = split()
endfunction

function ArrayExpand(line)
   let parts = split(a:line) 
   let s = Mapped(parts, 'DollarReplace')
   return '[' . join(s, ', ') . ']'
endfunction

function SuperDollar(s)
    if IsNumber(a:s)
        return a:s
    return Quotify(a:s)
endfunction
function SuperObjectExpand(line)
   let parts = split(a:line, '  ')
   let parts = Mapped(parts, {s -> split(s, ' ')})
   let Parser = {part -> Quotify(part[0]) . ': ' . DollarReplace(part[1]) }
   let parts = Mapped(parts, Parser)
   return '{' . join(parts, ', ') . '}'
endfunction


function ObjectExpand(line)
   let parts = split(a:line) 
   let Parser = {part -> Quotify(part) . ': ' . part }
   let parts = Mapped(parts, Parser)
   return '{' . join(parts, ', ') . '}'
endfunction

function LogicManager()
    let [spaces, line] = GetSpacesAndLine()
    let lang = GetLang()
    let [tag, parts, line] = TagAndPartsAndLine(line)

    let dict = get(g:logicdict, lang)
    let innerdict = get(dict, tag, 0)

    if empty(innerdict)
        ec 'done'
        return 0
    endif


    let [conditionlength, snippet, Innerparser] = [100, innerdict, 0]
    if IsArray(innerdict)
        let [conditionlength, snippet, Innerparser] = innerdict 
    elseif IsObject(innerdict)
        call LogicManagerObjectHandler(parts, innerdict)
        return 1
    endif

    if len(parts) > conditionlength
        ec 'surpasses conditionlength'
        return 
    endif

    if Test(snippet, '\$1')
        if !Test(snippet, '\$2')
            let parts = [parts[0], join(parts[1:], ', ')]
        endif
        for [i, part] in Enumerate(parts)
            let Parser = function('Identity') 
            let snippet = Replace(snippet, '\$' . i, Parser(part), 'g')
        endfor
        let snippet = Replace(snippet, '\$\d', '', 'g')
    else
        let snippet = Replace(snippet, '\$0', line,  'g')
        if IsFunction(Innerparser)
            let snippet = Replace(snippet, '\$a', Innerparser(parts[0]), 'g')
        endif
    endif
    if Test(snippet, '\$\$')
        let snippet = Replace(snippet, '\$\$(.{-})\$\$', {s -> eval(s[1])})
    endif

    call SnippetMaker(snippet)
    return 1
    
endfunction
function ExpansionActions()
    let [spaces, line] = GetSpacesAndLine()
    "let line = 'let foo = { bye high}'
    "let line = 'options = {  foo bar bye  }'
    let items = [
    \     {
            \ 'regex': '\w+ \S+  .{-}\ze\)?$',
            \ 'mediator': {s -> Replace(s[0], '^\{ *| *\} *$', '', 'g')},
            \ 'replace': 'SuperObjectExpand', 
            \ 'pos': 1, 
    \     },
    \     {
            \ 'regex': '\= \zs\{.+', 
            \ 'mediator': {s -> Replace(s[0], '^\{ *| *\} *$', '', 'g')},
            \ 'replace': 'ObjectExpand', 
            \ 'pos': 1, 
    \     },
    \     {
            \ 'regex': '(\w{-}s \= )\zs.+',
            \ 'mediator': {s -> Replace(s[0], '^[\[\{]|[\]\}]$', '', 'g')},
            \ 'replace': 'ArrayExpand',
            \ 'pos': 1, 
    \     },
    \ ]

    "let line = 'let foo = abc def  a b)'
    for item in items
        if Test(line, item.regex)
            ec 'sup'

            if Exists(get(item, 'fn'))
                let line = function(item.fn)(line)

            elseif Exists(get(item, 'replace'))
              let Mediator = IsFunction(get(item, 'mediator')) ? item.mediator : {s -> s[0]} 
              let line = Replace(line, item.regex, {s -> function(item.replace)(Mediator(s))})
            endif
            "return ec line

            if Exists(line)
                call setline('.', spaces . line)
                if Exists(get(item, 'pos'))
                    if IsNumber(get(item, 'pos'))
                        call cursor(Relative(get(item, 'pos')), 1000)
                    else
                        execute "normal! " . get(item, 'pos')
                    endif
                endif
            endif
            return
        endif
    endfor


endfunction


function EnterBlockWithSnippet()
    let [spaces, line] = GetSpacesAndLine()
    let [tag, val] = ForceSplit(line)
    let newdict = {
    \    'd': {
            \ 'fn': 'TemplateDitto', 
            \ 'args': ['line', 'upline'],
    \     },
    \}

    let innerdict = get(newdict, tag)
    if empty(innerdict)
        ec ' nope at snppetblock'
        return 0
    elseif Exists(innerdict)
            let args = []
            for arg in innerdict.args
                if arg == 'line'
                   call add(args, val) 
                elseif arg == 'upline'
                   call add(args, UpLine()) 
                elseif arg == 'spaces'
                   call add(args, spaces)
                endif
            endfor
            let Fn = ToFunction(innerdict.fn)
            let product = ''
            if len(args) == 0
                let product =  Fn()
            elseif len(args) == 1
                let product =  Fn(args[0])
            elseif len(args) == 2
                let product =  Fn(args[0], args[1])
            endif

            if Exists(product) && Exists(get(innerdict, 'setline'))
                call setline('.', spaces . product) 
            endif
        endif
        return 1
    endif
    return 0

endfunction

function CurrentWordHandler()
    let [spaces, line] = GetSpacesAndLine()
endfunction
let currentworddict = {
 \   'reduce': "((acc, item, i) => {\n    %c\n}, accumulator})"
\}
function EnterBlock(...)

    let [spaces, line] = GetSpacesAndLine()
    let [tag, val] = ForceSplit(line)
    let dict = {
        \'^v': {s -> '<' . s . '/>'}
    \ }

    for [key, Value] in items(dict)
        if Test(tag, key)
            let product = Value(tag)
            call setline('.', spaces . product)
            return 
        endif
    endfor

    if EnterBlockWithSnippet() == 1
        ec 'snip'
        return
    elseif LogicManager() == 1
        ec 'sup'
        return
    elseif tag =~ '^v'
        let lines = readfile('template.vue')
        let cursorpos = GetCursorFromSnippet(copy(lines))
        for i in range(0, len(lines) - 1)
            let line = lines[i]
            if lines[i] =~ '%c'
                let lines[i] = Replace(line, '\%c', '')
                break
            endif
        endfor
        let lines[0] = Templater(lines[0], tag)
        call SnippetMaker(lines, '', 1, cursorpos)
    else
        let line = JSPY('variablePrefix') . line . ' = '
        if tag =~ 's$'
            call SnippetMaker(line . '[', ']')
        else
            call SnippetMaker(line . '{', '}')
        endif
    endif
    return

    let lang = GetLang()
    let spaces = CurrentSpaces()
    let firstword = FirstWord(line) 
    let lines = []
    let middle = '    '

    if Has(g:htmldict, firstword)
            let firstword = get(g:htmldict, firstword)
            let lines = [
             \   firstword . ' {',
             \    middle,
             \    '}'
            \]

    elseif firstword == 'try'
            let lines = JSPY('try')
    elseif firstword == 'ditto'
        let parts = split(line)[1:]
        let upline = Strip(UpLine())
        if Test(upline, '^[a-zA-Z]+$')
            call setline(Relative(-1), '')
            call add(parts, upline)
            for part in parts
                let s = Quotify(part) . ': ' . part . ','
                call add(lines, s)
            endfor
        elseif Test(upline, '= { *$')
            for part in parts
                let s = Quotify(part) . ': ' . part . ','
                call add(lines, s)
            endfor
        else
            lines = DittoCopy(parts, upline)
        endif

    elseif line =~ '\v^[ie]f(t|sw|ew|s|o|a|n)'
        ec line
        let end = ''
        let start = ''
        if line =~ '^[ie]fsw'
            let line = Replace(line, 'sw', 't', '')
            let start = '^'
        elseif line =~ '^[ie]few'
            let line = Replace(line, 'ew', 't', '')
            let end = '$'

        elseif line =~ '\v^[ie]f[soan]'
            let [key, rest] = SplitOnce(line)
            let [key, fnkey] = ForceSplit(key, 2)
            let [logic, suffix, fn] = JSPY(key, 'logicsuffix', fnkey)
            let [logicstart, logicend] = logic
            let keyword = Exists(rest) ? rest : GetPrecedingKeyWord(rest)
            let first = logicstart . StringFunc(fn, keyword) . logicend
            let lines = [first, middle, suffix]
            call TextPlacement(lines)
            return
        endif

        let [key, rest] = SplitOnce(line)
        let regex = ''
        let keyword = ''
        if IsTwoWords(rest)
            ec 'suppers'
            let [regex, keyword] = split(rest)
            ec regex
            ec keyword
        else
            ec ' nope'
            let keyword = GetPrecedingKeyWord()
            let regex = CreateRegex(rest, start, end)
        endif
        let [logic, suffix, testfunc] = JSPY(key, 'suffix', 'testfunc')
        let [logicstart, logicend] = logic
        let first = logicstart . StringFunc(testfunc, regex, keyword) . logicend
        if suffix == 'endfunction'
            let suffix = 'end' . logicstart
        endif
        let lines = [first, middle, suffix]
        "cc

    elseif Test(line, ' |^(else)$')
        let first = ''
        let [p2, suffix] = JSPY('p2', 'suffix')
        if lang == 'js' && !Test(line, '^(else)$')
            let [jslogic, jsrest] = SplitOnce(line)
            let negation = ''
            let jslogic = Replace(jslogic, 'elif|ef', 'else if')

            if Test(jsrest[0:1], '1')
                let jsrest = Replace(jsrest, '1', '')
                let negation = '!'
            endif

            if IsSingleWord(jsrest)
                let keyword = GetPrecedingKeyWord(CurrentSpaces())
                if HasQuotes(jsrest)
                    let jsrest = StringFunc('test', keyword, jsrest)
                else
                    let jsrest = StringFunc(jsrest, keyword)
                endif
            elseif IsTwoWords(jsrest)
               let parts = split(jsrest) 
               if parts[0] == 'not'
                   let negation = '!'
                   let jsrest = parts[1]
                endif
            endif

            if !StartsWith(jsrest, '(')
                let jsrest = Parens(jsrest)
            endif
            let first = jslogic . ' ' . negation . jsrest . p2
        else
            let first = line . p2
        endif

        "comeback
        if suffix == 'endfunction'
            let suffix = 'end' . Match(line, '\w+')
        endif
        if wrap && BelowLineOccupied()
            call SetPos(1)
            let indexes = GetContiguousIndexesIBM('.')
            call setline('.', first)
            call GetSetLines(indexes, {s -> '    ' . s})
            call append(indexes[1], spaces . suffix)
            return
        else
            let lines = [first, middle, suffix]
        endif
    elseif line =~ '^(else)'
        let lines = [first, middle, suffix]
    elseif firstword =~ '\v(lines|data|obj|items|dict)$'
        let [da, db] = firstword =~ '\v(obj|data|dict)$' ? ['{', '}'] : ['[', ']']

        let const = JSPY('variablePrefix')
        let suffix = lang == 'vim' ? '\ ' . db : db
        let adjust = lang == 'vim' ? '\' : ''
        let lines = [const . line . ' = ' . da, adjust . middle, suffix]
    endif

    if IsString(lines)
        let lines = [lines, middle, suffix]
    endif
    if Not(lines)
        ec ' no lines'
        return
    endif
    
    call TextPlacement(lines)
endfunction

iab =- =~

function Mod(n,m)
  return ((a:n % a:m) + a:m) % a:m
endfunction

function PParser(x)
    ec a:x
    return 'boooo!'
endfunction

inoremap --s1 sys.argv[1]
inoremap --s2 ' '.join(sys.argv[2:])
inoremap --f __file__
function ReplaceSpaces(s)
    return Replace(a:s, ' ', '\\ ', 'g')
endfunction
function ClearScreen()
    !clear
endfunction
function ExecuteFile(...)
    let file = a:0 >= 1 ? a:1 : CurrentFile() 
    let file = file == 'self' ? CurrentFile() : file
    let arg = a:0 >= 2 ? a:2 : ''
    let runtime = JSPY(file, 'runtime')
    if Not(runtime)
        let runtime = 'python3'
    endif
    let command = "normal! :!" . runtime . " " . file . " " . arg . "\<cr>"
    ec command 
    execute command
endfunction

function Execute(file, ...)
    let arg = a:0 >= 1 ? a:1 : ''
    let runtime = JSPY(a:file, 'runtime')
    let command = "normal! :!" . runtime . " " . a:file . " " . arg . "\<cr>"
    execute command
endfunction

function Vim()
    return '/home/kdog3682/.vimrc'
endfunction
function FullFileName()
    let p = expand('%')
    echom 'current file: ' . p
    return p
endfunction

function ExecuteSelf(file, args)
    let cmd = a:0 == 1 ? ' ' . Replace(a:1, '["'' ]', '\\' . '\0', 'g') : ''
    call Execute(a:file, FullFileName() . cmd)
endfunction

function Replacer(cmd)
    call ExecuteSelf('replacer.py', a:cmd)
endfunction

function Rt()
    return
    let file = 'replacer.py'
    call Execute('replacer.py', Self() . ' ' . cmd)
    return

    let command = "normal! :!python3 replacer.py " . CurrentLine() . "\<cr>"
    ec command
    ec 'hii'
    execute command

    return
"zz    ec substitute('ENV_REDDIT_INFO ENV_FOO env_NO', '\vENV\w+', PParser, 'g')
    "ec 'hi'
    return
  call AppendFile(Self(), ['"hi'])
  normal! :e<cr>gg
  echom 'done'
  return
  echom (5%2)
  echom (5%3)
  echom (5%4)
  return
  let failed = appendbufline(8, 0, "# THE START")
  echom failed
endfunction

function ToBuffer(buffer, lines)
    call writefile(a:lines, PathFix(a:buffer), 'a')
endfunction

function Regex(dict)
    let items = keys(a:dict)
    let combine = join(items, '|')
    let p = Parens(combine)
    let p = '(' . combine . ')'
    return p
endfunction

let g:count = 0

function Filtered(items, ...)
    let query = a:0 >= 1 ? a:1 : 0
    let store = []
    if query
        call filter(a:items, {item -> Test(item, query)})
        return a:items
    endif
    for item in a:items
        if Exists(item)
            call add(store, item)
        endif
    endfor
    return store
endfunction

function NameFix(name)
    let namedict = {'a': 'zoop'}
    return Dreplace(name, namedict, '<', '>')
endfunction

function Sub(s, regex, replacement)
    return substitute(a:s, Regexed(a:regex), a:replacement, 'g')
endfunction

function Dreplace(s, dict, ...)
    let ba = a:0 >= 1 ? a:1 : ''
    let bb = a:0 >= 2 ? a:2 : ''
    let regex = ba . Regex(a:dict) . bb
    let Parser = {s -> get(a:dict, s[0])}
    return Sub(a:s, regex, Parser)
endfunction

let g:vimrc = '~/.vimrc'
function CreateVimCommansdfgdfgd(s)
    let dict = {
    \    'i': 'inoremap',
    \    'n': 'nnoremap',
    \ }
endfunction

function SetVisualSelection(indexes)
     let [a,b] = a:indexes
     call cursor(a, 0)
     execute "normal! V" . (a - b - 1) . "\<down>"
     "call cursor(a, 0)
     "execute "normal! 3\<up>V3\<down>"
     "execute "normal! gv" . jump . "j"
endfunction


function VisualSelect(indexes)
     let [a,b] = a:indexes
     call cursor(a, 0)
     execute "normal! V" . (a - b - 1) . "\<down>"
     "execute "normal! 3\<up>V3\<down>"
     "execute "normal! gv" . jump . "j"
endfunction

function QuoteRunner(line)
   let product = JSPY('variablePrefix') .  'placeholder' . ' = "\0"'
   return Replace(a:line, '\S+', product)
endfunction

function VisualQuotify(indexes)
    call GetSetLines(a:indexes, function('QuoteRunner'))
endfunction

function CreateVisualIab(lineindex, s)
   if IsArray(a:lineindex)
       let lines = Mapped(GetLines(a:lineindex), {s -> '\<CR> ' . s})
       call insert(lines, 'iab ' . a:s )
       call AppendVim(lines, '^')
       return 
   endif
   let s = Strip(getline(a:lineindex)) 
   let cmd = Join('iab', a:s, s)
   ec cmd
   call AppendVim(cmd)
   execute cmd
endfunction

function CreateNormalCommand(s)
   let [key, fn] = SplitOnce(a:s)
   let cmd = Join('nnoremap', key, ':call', fn . '()<cr>')
   ec cmd
   call AppendVim(cmd)
endfunction

function CreateIab(...)
   let s = a:0 >= 1 ? a:1 : 'iab ' . StripLine()
   if Test(s, 'iab')
       call AppendVim(cmd)
       execute cmd
       return 
   endif
   let cmd = Test(s, ' ') ? Join('iab', s) : Join('iab', s, StripLine())
   ec cmd
   call AppendVim(cmd)
   execute cmd
endfunction
function CreateCommand(s)
    let [binding, expr, options] = split(s)
    echo [binding, expr, options]
    return
    let type = get(dict, type, type)

    let key = ''
    let name = ''
    let cmd = ''
    let silent = ''
    let items = ['nnoremap', silent, a:name, a:command]
    let s = join(items, ' ')
    call append('$', s)
    call cursor('$', 100)
endfunction
vnoremap xb :call ShuntVisualSelectionToBuffer()<cr>
vnoremap x1 <esc>:call SetBuffer('storage.py')<cr>

function VariableManager(val)
    let b:buffer = a:val
    echom 'setting shunt buffer to ' . a:val
endfunction

function GetBuffer()
    let buffermap = {
        \ 't': 'today.py',
        \ 'iit': 'today.py',
        \ 'tii': 'today.py',
    \ }
    let fallback = 'today'
    let buffer = exists('b:buffer') ? get(buffermap, b:buffer) : fallback
    if Not(buffer)
        let buffer = fallback
    endif
    let buffer = ExtensionFix(buffer)
    return buffer
endfunction

function SetBuffer(val)
    let b:buffer = a:val
endfunction

function Parser234(x, replacement)
    let cap = IsCapitalized(a:x[0])
    return cap ? Capitalize(a:replacement) : a:replacement
endfunction

function GetScreenIndexes()
    return [line('w0'), line('w$')]
endfunction
vnoremap s :<c-u>call ReplaceContiguousOrScreen('')<left><left>
vnoremap q :<c-u>call AskQuestion('')<left><left>
inoremap wq <esc> :call AskQuestion()<cr>
function ReplaceLines(lines, s, ...)
    let boundary = a:0 == 1 ? a:1 : 0 
    let [regex, replacement] = SplitOnce(a:s, '/')
    let regex = Regexed(regex, boundary)
    return Mapped(a:lines, {line -> substitute(line, regex, {x -> Parser234(x, replacement)}, "g")})
endfunction

function ReplaceRange(a, b, s, ...)
    let boundary = a:0 == 1 ? a:1 : 0 
    let [regex, replacement] = SplitOnce(a:s, '/')
    let regex = Regexed(regex, boundary)

    for i in Ranger(a:a, a:b)
        call GetSet(i, {line -> substitute(line, regex, {x -> Parser234(x, replacement)}, "g")})
    endfor

endfunction

function DedentAll()
    call GetSetLines(GetContiguousIndexes(), {s -> Replace(s, '^ *', '')})
endfunction
function GetContiguousIndexes(...)
    let normalize = a:0 >= 1 ? 1 : 0
    let a = '^ *$'
    let b = '^ *$'
    let current = line('.')
    let up = search(a, 'bn') + 1
    let down = search(b, 'n') - 1
    if normalize
        if current - up > 10
            echo 'normalizing up'
            let up = current - 3
        endif
        if down - current > 10
            echo 'normalizing down'
            let down = current + 3
        endif
    endif
    if down < up
        let down = line('$')
    endif
    return [up, down]
endfunction

function GetClosestName()
    let true = 1
    let r = \w+\ze(\(| =)'
    let upindex = line('.') - 1
    let downindex = line('.') + 1
    let count = 0
    while true
        let upmatch = Match(getline(upindex), r)
        if Exists(upmatch)
            return upmatch
        endif

        let downmatch = Match(getline(downindex), r)
        if Exists(downmatch)
            return downmatch
        endif
        let upindex -= 1
        let downindex += 1
        let count += 1
        if count == 20
            break
        endif
    endwhile
endfunction

function ShuntVisualSelectionToBuffer()
    let buffer = GetBuffer()
    let indexes = GetVisualIndexes()
    if indexes[0] == indexes[1]
        let indexes = GetCodeBlockIndexes()
    endif
    let lines = Dedent(GetLines(indexes))
    if buffer == 'today.py'
        call StringWrap(lines, GetLang(buffer))
    endif
    call ToBuffer(buffer, lines)
    call DeleteLines(indexes)
endfunction

function RemoveLines(indexes)
    let [a,b] = a:indexes
    for i in range(a,b)
        call DeleteLine(a)
    endfor
endfunction

function DeleteLines(indexes)
    return RemoveLines(a:indexes)
    let [a,b] = a:indexes
    for i in range(a,b)
        call DeleteLine(i)
    endfor
endfunction

function Match(s, regex)
    return matchstr(a:s, Regexed(a:regex))    
endfunction

function Dedent(lines)
    let spaces = Match(a:lines[0], '^ *')
    return map(a:lines, {pos, line -> Replace(line, spaces, '')})
endfunction

nnoremap <silent> xp :call PasteBlock()<cr>

function GetFunction()
   let lines = GetLines(GetCodeIndexes())
   return lines
endfunction

function CopyFunctionBlock()
   let lines = GetLines(GetCodeIndexes())
   let length = len(lines)
   call AppendBottom(lines, -length)
endfunction
function GetIndexes(...)
    let name = a:0 == 1 ? a:1 : ''
    let adjust = GetLang() == 'py' ? 1 : 0
    let a = search('^\v(function|def|class|const) ' . name . '|\w+ \= \{ *$')
    let b = search('^\v(endfunction|\}|\]|def|class|function|\w+)') - adjust
    if adjust && Test(getline(b), '}|\]')
        let b += 1
    endif
    if b < a
        let b = line('$')
    endif
    return [a,b]
endfunction


function Rpwo()
    let file = 'helpers.js'
    call ExecuteFile(file, CurrentFile())
endfunction
function IsComment(s)
    return Test(a:s, '^ *(linebreak|console|tl|echom?|ec |"|#|p+rint|//)')
endfunction

function LineRunner(indexes, ...)
    let Condition = a:0 == 2 ? a:1 : 0
    let Runner = a:0 == 2 ? a:2 : a:1
    if IsString(Runner)
        let Runner = function(Runner)
    endif
    if IsString(Condition)
        let Condition = function(Condition)
    endif

    if empty(Condition) 
        if Runner == function('DeleteLine')
            let amount = a:indexes[1] - a:indexes[0]

            for i in Ranger(amount)
                call Runner(a:indexes[0])
            endfor

            return 
        endif
        for i in Ranger(a:indexes)
            call Runner(i)
        endfor
    else

        for i in Ranger(a:indexes)
            if Exists(Condition(getline(i)))
                call Runner(i)
            else
            endif
        endfor
    endif
endfunction


inoremap <expr> 3 ThreeOrHash()
inoremap <expr> lbr LineBreakExpression()
inoremap <expr> 2 TwoOrAt()
function IsSplitWindow()
    return len(getwininfo()) > 1
endfunction
function GetDictIndexes()
    let up = search('\v^    \w.{-}\{ *$', 'bn')
    let down = search('\v^    \}$', 'n')
    return [up, down]
endfunction

function TransformDict(key)
    let key = a:key
   let lines = GetLines(GetDictIndexes())
   let lines[0] = '{'
   let s = join(lines)
   let dict = js_decode(s)
   "for [k,v] in get(dict, key)
       "store[k][key] = v

   ec dict
endfunction

function GetCodeIndexes(...)
    let name = a:0 == 1 ? a:1 : ''
    let lang = GetLang()
    let a = SprawlIndex('\v^(function|def|class|const) ' . name . '|^\w+ \= [\{\[] *$|^\w+\.\w+\.')
    let b = 0
    if lang == 'py'
        call cursor(a + 1, 0)
        let b = search('^\S', 'nWc')

        if !Test(getline(b), '[\]\}]')
            let b -= 1
        endif
    else
        let b = search('\v^(endfunction|\}\)?|\]|def|class|function|\w+)', 'nW') 
    endif

    if b < a
        let b = line('$')
    endif
    return [a,b]
endfunction

function GetLines(...)
    let indexes = a:0 == 1 ? a:1 : 0 
    if Not(indexes)
        return getline(1, '$')
    endif
    let [a,b] = indexes
   return getbufline(bufnr('%'), a, b)
endfunction

function PasteBlock()
    let range = GetCodeIndexes()
    let lines = GetLines(range)
    call add(lines, '')
    call writefile(lines, "/home/kdog3682/CWF/storage.py", "a")
endfunction

function MoveBack()
    edit #
endfunction

nnoremap 0 :call MoveBack()<cr>
nnoremap 9 :w<cr>:bd<cr>
inoremap zl :call TestFunction()<cr>


function FunctionRunner3(name)
    let lang = GetExtension(name)
    echom lang

    execute 'normal! :! python3 asd.py\<cr>' " Doesnt Work
endfunction

function CommentOutDecorators()
    echom 'adf'
    normal /^@/# @/g
endfunction
function SprawlToNearbyFunction()
    return
endfunction

function DateStampFunctionName()
    return
endfunction
function TestFunction()
    let item = 'a'
    if exists('s:store')
        call add(s:store, item)
        echom s:store
    else
        let s:store = [item]
    endif
endfunction

" inoremap pl <space>+
inoremap zb '\\b'
inoremap zp '|'
inoremap zp '|'
inoremap zpe <space>+=<space>

nnoremap <silent> db :call DeleteBlock()<cr>
" 05-06-2021 08:57:23: spilled water on keyboard. must keep water and liquids away from the computer at all costs.  made a fettucinni type dish with milk and cheese and parseley. it tasted pretty good.  when not loud sound, dont use music.  i need to trick myself into brushing my teeth because i keep omitting it. or, put the toothbrush in my room.  
inoremap <F5> <esc>:call TopComment()<cr>A 
"START


let g:shuntbuffer = 'storage.py'
function ShuntBlock(...)
    let destination = a:0 >= 1 ? a:1 : 0
    if g:shuntbuffer == 'self'
        call InternalShunt()
        return 
    endif

    let indexes = GetCodeIndexes()
    let lines = GetLines(indexes)

    if Not(destination)
        if exists('g:shuntbuffer')
            let destination = g:shuntbuffer
            "call DeleteBlock(indexes)
        else
            let destination = DetermineDestination(lines)
        endif
    endif

    call InvivoAppend(destination, lines)
endfunction

function CopyBlock()
    let [a,b] = GetCodeIndexes()
    let lines = GetLines(GetCodeIndexes())
    call AppendSelf(lines)
endfunction

"barperk
nnoremap zt :%s/\n"fooyum//g<cr>
nnoremap zt :%s/\n\ze\n\n//g<cr>

command T call TrimWhiteSpace()
function TrimWhiteSpace()
    execute "normal! :%s\/\nfooyum\/perk\<cr>"
endfunction

function DeleteBlock(...)
    let [a,b] = a:0 >= 1 ? a:1 : GetCodeIndexes()
    let text = TextGetter(a, b)
    call ToPasteBuffer(text)
    call deletebufline('%', a, b)
endfunction

nnoremap <c-n> /^\(function\\|def\\|class\)<cr><down><down><down><down>

function TopComment()
    let s = CommentLine(GetDate())
    call AppendTop(s, 1)

endfunction
function AutoComplete()
    let fline = GetFunctionLine()
    let param = GetFunctionParam(fline)
    let line =  GetCurrentLine()
    let line = '    elif str'
    let param = 'foo'
    echom line
    let match = matchstr(line, '\(elif\|if\) \zs\(str\|list\|num\|arr\|a\|obj\|o\)$')
    echom match

endfunction

" nnoremap cl :call AnotherTextTransform()<cr>
"nnoremap cl :call CleanupText()<cr>
nnoremap cl :call ConsoleLogTheLine()<cr>
function Append(s)
    let index = line('.')
    call append(index, a:s)    
    call cursor(index + 1, 1000)
endfunction
iab iw call append('.', 'it works')
nmap <C-c> :call FunctionRunner()<cr>
function GetFunctionParam(line)
    return Match(a:line, '^(function|def|class) \w+\(\zs\w*')
endfunction


function DocTesto()
    let line = GetFunctionLine()
    let name = GetFunctionName(line)
    let param = GetFunctionParam(line)
    let product = ConsoleLog(name . Parens(param))
    call append('$', [CreateParam(param), product])
    call cursor(line('$') - 1, 100)
endfunction

nnoremap <silent> to :call DocTesto()<cr>
nnoremap <silent> tp :call DocTest()<cr>
nnoremap <silent> tt :call DocTest()<cr>
iab merf matches = re.findall(r, s, flags=0)

iab zook boo
let abcRE = 'asdfasdf'
"nnoremap <c-f10> :call ReloadVim()<cr>:w<cr>:source ~/.vimrc<cr>
"nmap <c-f8> :w<cr>:source ~/.vimrc<cr>:call FunctionCaller()<cr>
nmap <f8> :w<cr>:call FunctionCaller()<cr>
imap <f8> :w<cr>:call FunctionCaller()<cr>
nmap <f9> :w<cr>:source ~/.vimrc<cr>
imap <f9> <esc>:w<cr>:source ~/.vimrc<cr>
nnoremap <f10> :w<cr>:source ~/.vimrc<cr>

iab boo booooo

" inoremap wf <esc>:call CreateFunctionBlock()<cr><down>A
inoremap wf <esc>:call CreateFunctionBlock()<cr>A

function SprawlLine(r)
    let index = SprawlIndex(a:r)
    return getline(index)
endfunction

function SprawlIndex(r)
    if Exists(matchstr(getline('.'), a:r))
        return line('.')
    else
        let index = search(a:r, 'bnW')
        return index
    endif
endfunction

function JSPY(...)
    let lang = ''
    let keys = ''

    if Test(a:1, '^(js|py)$|\.\w+$')
        let lang = GetLang(a:1)
        let keys = a:000[1:]
    else
        let lang = GetLang()
        let keys = a:000
    endif
    let dict = g:jspydict[lang]
    return DictGetter(dict, keys)
endfunction

function DictGetter(dict, items)
    let store = []
    for item in a:items
        call add(store, get(a:dict, item, 0))
    endfor
    return len(store) == 1 ? store[0] : store
endfunction

function NotEndsWith(el, s)
    return EndsWith(a:s, a:el) ? 0 : 1
endfunction

function Uncapitalize(s)
    return tolower(a:s[0]) . a:s[1:]
endfunction

function Capitalize(s)
    return toupper(a:s[0]) . a:s[1:]
endfunction

function RelativeAppend(n, s)
    if a:n == 0
        call setline('.', a:s)
    else
        let index = line('.') + a:n
        call append(index, a:s)
    endif
endfunction

function InsertBelowCurrent(s)
    let index = line('.')
    call append(index, a:s)
endfunction

function LogicParse(line)
    return a:line
    let lang = GetLang()
    if lang == 'js'
        if Not(m)
            return a:line
        else
            let product = m[0] . Parens(rest)
            return product
        endif
    else
        return a:line
    endif
endfunction

function Not(x)
   return Exists(a:x) ? 0 : 1
endfunction

function FileString()
    let lineList = getline(1,'$')
    let fileString = join(lineList, "\n")
    return fileString
endfunction

nnoremap <leader>f :call LeaderF('')<left><left>

function SetCursor(cursorpos, ...)
    if Not(a:cursorpos)
        return 
    endif
    let spaces = a:0 >= 1 ? ToInteger(a:1) : 0
    let [a,b] = a:cursorpos
    let b += spaces
    "ec [a,b]
    call cursor(a, b)
endfunction

function RegexTest()
    let line = 'function Cfun(foo)'
    let regex = '^(function|def|class) ' . 'Cfun'
    echom Match(line, regex) 
endfunction

function LeaderF(s)
    let dict = {
       \ 'rc': 'ReplaceContiguous',
       \ 'lf': 'LeaderF',
       \ 'vh': 'vuehelpermap',
    \ }
    if Exists(get(dict, a:s))
        let name = get(dict, a:s)
        let prefix = "\\(function\\|class\\|def\\|const\\|async function\\)"
        let prefix = 'function'
        let prefix = "(function|class|def|const|async function)"
        "let extra = Multiply("\<down>", 6)
        "let extra = ''
        let cmd = "/^\\v" . prefix . " " . name . "\<cr>"
        ec cmd
        execute "normal! " . cmd
        return 
    elseif a:s =~ '^//'
        let word = WordUnderCursor()
        execute "%s/\\v<" . a:s[2:] . ">/" . word . "/g"
    elseif a:s =~ '^/'
        call ReplaceWordUnderCursor(a:s[1:])
    elseif a:s =~ '/\w$'
        let [name, options] = split(a:s, '/')
        call Cfun(name, options)
    elseif a:s =~ '/'
        call FindAndReplace(a:s)
    else
        call Cfun(a:s)
    endif
endfunction

"os.expanduser
"foo(expand(foo))
"foo(expand(foo))

function AddImportStatement()
    let line = CurrentLine()
    let importmatch = Match(line, g:importre)
    if Exists(importmatch)
        ec importmatch
        let line = g:importdict[importmatch]
        call append('^', line)
    else
        ec 'no import match'
    endif
    return

    let dict = {
    \    'l': 'import lorem',
    \    'p': 'import praw',
    \    'i': 'import inspect',
    \    'dt': 'import datetime',
    \    'wb': 'import webbrowser',
    \    'a': 'from storage import *\nfrom shortcuts import *',
    \    '': 'from storage import *\nfrom shortcuts import *',
    \ }
    let lines = split(get(dict, a:s, ''), '\\n')
    call append('^', lines)
endfunction

function SensitiveSearch(s)
    call NormalEnter('/\v' . '<' . a:s. '>')
endfunction
command Fix call Fixer()
nnoremap <localleader>cs :call CreateScript()<cr>
nnoremap <localleader>fix :call Fixer()<cr>
"nnoremap <localleader>ais :call AddImportStatement('')<left><left>
"nnoremap <localleader>ais :call AddImportStatement('')<left><left>
"nnoremap <localleader>ais :call AddImportStatement('')<left><left>
nnoremap <localleader>mv :call MoveItemsToNewLocation('')<left><left>
nnoremap <localleader>lp :call MarkLastPosition()<cr>
"nnoremap <localleader>slp :call SetLastPosition()<cr>
nnoremap <localleader>gt :call GoTo()<cr>
nnoremap <localleader>s :call SnippetManager('')<left><left>

function SetLastPosition()
    try
        ec g:lastposition
        ec b:lastposition
        let pos = b:lastposition
        call cursor(pos[1], pos[2])
    endtry
endfunction
function MarkLastPosition()
    let pos = getpos('.')
    let g:lastposition = pos
    let b:lastposition = pos
endfunction

function MoveItemsToNewLocation(s)
    let destination
    let target
    let s = a:s
    if Test(s, '  ')
        let items = split(s, '  ')
        let s = 
    elif Test(s, ' ')

    else
        let destination = items[0]
        let target = items[0] . '\w*'

endfunction
function FindAndReplace(s)
    let regex = ":%s/\\v(\\.|\\w)@<!"
    call ExecuteNormal(regex . a:s)
    normal <c-o>
endfunction
function CurrentLineAndSpaces()
    let line = CurrentLine()
    let spaces = Match(line, '^ *')
    return [line, spaces]
endfunction
function QuoteHelper()
    let [line, spaces] = CurrentLineAndSpaces()
    let name = 'regex'
    let regex = '[''"]....*["'']'
    let match = Match(line, regex)
    if Exists(match)
        let second = Replace(line, regex, name, '')
        let prefix = JSPY('variablePrefix')
        let first = prefix . name . ' = ' . match
        call setline('.', second)
        call append(line('.') - 1, spaces . first)
    else
        ec 'no match at quotehelper'
    endif
endfunction
function Cfun(name, ...)
    let options = a:0 == 1 ? a:1 : 0
    let boundary = 0
    if options == 'b'
        let boundary = 1
    endif
    let rname = boundary ? Boundary(a:name) : a:name
    let text = FileString()
    let regex = '(function|def|class) ' . rname
    if Test(text, regex)
        call SetCursor(Regexed(regex))
    else
        call CreateFunctionBlock('bottom', a:name)
        return
        echom 'hi'
        echom expand('<cword>')
        let wordUnderCursor = expand("<cword>")
        echom wordUnderCursor
    endif
endfunction

function Camelize(s)
    return Sub(a:s, '-', '_')
endfunction
function CreateFunctionBlock(...)
    let mode = a:0 >= 1 ? a:1 : ''
    let line = a:0 >= 2 ? a:2 : Strip(GetLine())

    let line = Camelize(line)
    if Not(line)
        return
    endif

    let suffix = JSPY('suffix')
    let currentSpaces = CurrentSpaces()
    let appendbottom = mode == 'bottom'

    if strlen(currentSpaces) > 0  && !appendbottom
        "let [p1, p2, suffix, classparam] = JSPY('classp1', 'p2', 'suffix', 'classparam')
        "let a = CreateClassName(line, p1, p2, classparam)

        let a = NameMaker(line)
        let b = '    '
        let c = suffix
        call TextPlacement([a,b,c])
        call cursor(Relative(1), 100)
        return
    endif

    let start = NameMaker(line)
    if appendbottom
        call append('^', [start, '    ', suffix])
        call cursor(line('^') + 1, 100)
    elseif SomeStuffBelow()
        let indexes = GetContiguousIndexesIBM()    
        let [a,b] = indexes
        call setline(a, start)
        for i in range(a + 1, b)
            call GetSet(i, function('IndentLine')
        endfor
        call append(b, suffix)
    else
        call setline('.', start)
        call append('.', ['    ', suffix])
        call cursor(line('.') + 1, 100)
    endif
endfunction

" let indexes = GetCurrentFunctionBlock()
" endfunction

function NextLine()
    return line('.') + 1
endfunction

function ThisLine()
    return line('.')
endfunction

function Paster()
    let word = GetWord(line, -1)
    let cmd = JSPY('variablePrefix') . ' = ' . word
    execute 'normal! O' . cmd . '<esc>p'
endfunction

function GetWord(s, n)
    let parts = split(Strip(a:s))
    let p = parts[a:n]
    return p
endfunction

iabbrev cdf '(function\|def\|class)
iabbrev sdf '^(function\|def\|class)

function SearchBackwards(r, ...)
    let stopindex = a:0 == 1 ? CurrentIndex() - a:1 : 0 
    let p = search('\v' . a:r, 'bnW', stopindex)
    return p
endfunction

function GetFunctionIndex(...)
    let flags = a:0 >= 1 ? a:1 : 'bnWc'
    let r = '^\v(function|def|class|const) ' . '\w+' . '|^\w+ \= \{ *$'
    let index = search(r, flags)
    ec index
    return index < 1 ? line('$') : index
endfunction

function GetFunctionLine()
    return getline(GetFunctionIndex())
endfunction

function Caller(name)
    let suffix = EndsWith(a:name, ')') ? '' : '()'
    let command = ':call ' . a:name . suffix
    echom command
    execute command
endfunction

function FunctionCaller()
    call Caller(GetFunctionName())
endfunction

function LookBehind(s, ...)
    let query = a:0 >= 1 ? a:1 : '.*'
    return '\v' . a:s . '\zs(' . query . ')'
endfunction

function GetFunctionName(...)
    let line = a:0 == 1 ? a:1 : GetFunctionLine()
    let r = '(function|def|class) \zs\w+'
    return Match(line, r)
endfunction

" vnoremap l $yGoconsole.log(<esc>pA) SIMPLE

function Pos()
    return getpos(".")
endfunction

function IndentLine(s)
    return '    ' . a:s
endfunction

function Blockify(indexes)
    let startItem = a:0 >= 1 ? a:1 : 'div {'
    let endItem = a:0   >= 2 ? a:2 : '}'

    let [start, end] = a:indexes
    let indentation = GetSpaces(getline(start))

    call GetSetLines(a:indexes, function('IndentLine'))

    let firstline = indentation . startItem
    call append(start - 1, firstline)
    call append(end + 1, indentation . endItem)
    call setpos("'a", [0, end + 2, 100, 0])
    call cursor(start, strlen(firstline))
endfunction

"vim: how might i modify this function such that empty lines are included in the range  as it currently stands, the searching will break if an empty line is encountered. im wondering, how might you edit the function to allow for empty lines to be included?  the source for this function comes from: https://developer.ibm.com/technologies/linux/tutorials/l-vim-script-2/#combining-named-and-variadic-parameters
function FindIndexes()
    let indent_pat = '^' . matchstr(getline('.'), '^\s*') . '\S'
    let si  = search('^\%('. indent_pat . '\)\@!','bnW') + 1
    let ei   = search('^\%('. indent_pat . '\)\@!', 'nW') - 1
    echom [si, ei]
endfunction

function HasVisual()
    let line = line('.')
    let a = getpos("'<")[1]
    let b = getpos("'>")[1]
    return line >= a && line <= b
endfunction

function GetVisualIndexes(...)
    let flag = a:0 >= 1 ? 1 : 0
    let a = getpos("'<")
    let b = getpos("'>")
    if empty(flag)
        return [a[1], b[1]]
    else
       let flag = a[1] == b[1] && a[2] == b[2]
       return [[a[1], b[1]], flag]
    endif
endfunction

function GetFullVisualIndexes(...)
    ec a:000
    let flag = a:0 >= 1 ? a:1 : 'null'
    ec flag
    let a = getpos("'<")
    let b = getpos("'>")
    if flag == 'keep' 
        return [a[1], b[1]]
    endif

    if a[1] == b[1] && a[2] == b[2]
        if flag == 'block'
            return GetSmartBlockIndexes()
        endif
        return [0,0]
    endif

    return [a[1], b[1]]
endfunction

function GasdfhsdetVisualIndexes()
    " echom getpos("'<")
    " echom getpos("'>")
    let startIndex = getpos("'<")[1]
    let endIndex = getpos("'>")[1]
    return [startIndex, endIndex]
endfunction

function Deleter()
    echom 'deleting'
    let line = getline('.')
    let p = substitute(line, '\w\+(\(.*\))$', '\1', '')
    call setline('.', p)
endfunction
nnoremap <silent> dm :call Deleter()<cr>

" nnoremap <c-f> echom 'hi'

nnoremap <f3> :call LineCommenter()<cr><down>

function CountParameters(line)
    return count(a:line, ',') + 1
endfunction

function FunctionAutoTest()
    let flineIndex = SprawlIndex('^' . JSPY('function'))
    let commentIndex = flineIndex + 1
    let fline = getline(flineIndex)
    let name = GetFunctionName(fline)
    let line = matchstr(getline(commentIndex), '["/#] \zs.*')
    " echom fline
    " echom line
    let params = ''
    if Exists(line)
        let params = split(line, '  ')
    else
        let params = 0
    endif
    if Exists(name) && Exists(params)
        let expression = CreateFunctionCall(name, params)
        let lastline = getline('$')
        if Exists(matchstr(lastline, '^print\|^console\|^echom'))
            echom 'replacing'
            call setline('$', expression)
        else
            echom 'appending'
            call append('$', expression)
        endif

        call setpos(flineIndex, 0)
        normal ma

    else
        echom name
        echom params
        echom 'doesnt exist'
    endif
    return
endfunction

function GetFunctionParameters(line)
    let s = matchstr(a:line, '^ *\(def\|class\|function\) \w*(\zs.*\ze)')
    let p = split(s, ', ')
    return p
endfunction
function CreateSampleParams(line)
    let params = GetFunctionParameters(a:line)
    return

endfunction
function CreateFunctionCall(name, params)
    let [cs, ce] = JSPY('consoleStart', 'consoleEnd')    
    return cs . a:name . Parens(join(a:params, ', ')) . ce
endfunction

function FunctionRunner()
    let file = CurrentFile()
    let dict = {
        \ ".vimrc": 'vimmer.py',
        \ "reddit": 'REDDIT.PY',
        \ "wooo": 'REDDIT.PY',
    \ }
    if has_key(dict, file)
        let item = get(dict, file)
        let command = ':! python3 ' . item
        echom command
        execute command
    else
        echom 'no command'
    endif

endfunction

function CurrentFile()
    let name = expand('%:p')
    return name
endfunction
inoremap <c-l> <esc>:call SmartConsoleLog()<cr>A<left>

function XXXGetLangItem(target, ...)
    let phrase = a:0 >= 1 ? a:1 : ''
    let lang = GetLang()
    let dict = {
        \ 'js': {
            \ 'console': 'console.log',
        \ }, 
        \ 'vim': {
            \ 'console': '"print',
        \ },

        \ 'py': {
            \ 'console': 'print',
        \ }
    \}
    let start = dict[lang][target] 
    if exists(phrase) 
        return start . '(' . phrase . ')'
    else
        return start
    endif
endfunction

function CurrentLineNumber()
    return line('.') 
endfunction

function SmartConsoleLog()
    " let statement = CurrentSpaces() . GetLangItem('console', CurrentLineNumber()) 
    let statement = CurrentSpaces() . 'console.log(' . CurrentLineNumber() . ',  )'

    echom strlen(CurrentSpaces())
    call setline('.', statement)
    return
    if empty(CurrentLine())
        call setline('.', statement)
        call cursor(line('.'), strlen(CurrentLine()) - 1)
    else
        let length = strlen(GetLine(-1)) - 1
        call append(index, statement)
        call cursor(index - 1, length)
    endif

endfunction

function LineIndex(n)
    let index = line('.') + a:n
    echom index
    return index
endfunction

function GetRange()
    call ExecuteRegex('/^function')
    echom 's'
endfunction

function MyVertBlock(line1, line2, column1, column2)
    let select_command = a:line1 . 'G' . a:column1 . '|'
    let select_command .= "\<C-V>"
    let select_command .= a:line2 . 'G' . a:column2 . '|'
    execute 'normal!' select_command
endfunction
    
" iab ` `<cr><cr>`<up><up>

nmap <c-k><c-m> :call ToggleKeyMap()
imap <c-c> <esc>:call AddText('')<left><left>

function AddText(s)
    normal /}<cr>o<esc>
    let spaces = CurrentSpaces()
    call setline('.', [spaces . a:s . ' {', spaces . '}'])
endfunction

inoremap <silent> <c-p> <esc>:call adsfIfController()<cr>

function LookBehind2(r)
    let regex = '\(' . a:r . '\)\@<='
    return regex
endfunction

function LineSearch(regex, ...)
    let start = a:0 >= 1 ? a:1 : ''
    let end = a:0 >= 2 ? a:2 : ''
    if start
        let start = LookBehind('^ *')
        " let start = '\(^ *\)\@<='
    endif

    let r  = start . a:regex . end
    " echom r
    return Search(CurrentLine(), r)
endfunction

function IfController()
    let spaces = CurrentSpaces()
    let ending = EndsWith(CurrentLine(), ' ')
    " echom strlen(spaces)
    " echom ending
    " echom 'match::'
    " echom match 
    let list = ['if']
    for regex in list
        let match  = LineSearch(regex, 'startingLookAheadSpaces = true')
        if match
            echom match
endfunction 

function ToggleKeyMap()
    echom 'toggle keymap'
    let extension = GetExtension()
    if extension == 'js'
        echom 'Toggling extension for : ' . extension
        :iab if if( )<left><left>
        :iab elif else if( )<left><left>
        :iab and &&
        :iab or \|\|
    else
        echom removing keymaps
        try
            :una if
        endtry
        try
            :una elif 
        endtry

        try
            :una and 
        endtry

        try
            :una or 
        endtry
    endif
endfunction

iab cmsv cm.setValue
iab cmgv cm.getValue
iab gv getValue()
" docnotes: 04-18-2021 20:06:31: /docnot
" nmap <C-c> :call FunctionController('')<left><left>

"nmap <silent>  <C-k>  :w<cr>:source ~/.vimrc<cr>:call SaveBackup()<CR>
" testing

function Search(r, ...)
    let flags     = a:0 >= 1 ? a:1 : ''
    let threshold = a:0 >= 2 ? a:2 : 0
    if flags =~ 'b' && Not(threshold)
        let threshold = -10
    endif
    if abs(threshold) == 10
        let threshold = getline('.') + threshold
    endif
    return search(Regexed(a:r), flags, threshold)
endfunction

function SsdfSearch(s, r)
    let product = matchstr(a:s, a:r)
    " call Logger(product)
    return product
endfunction

function SpaceMatch(s)
    let product = matchstr(a:s, '\S.*$')
    echom product
    return product
endfunction

function FunctionController(s)
    let command = a:s
    if command == 'rcl'
        call RemoveConsoleLog()

    elseif command == 'tc'
        let match = matchstr(CurrentLine(), '\S.*$')
        echom match
        let spaces = '    '
        call setline('.', [spaces . 'try {', spaces . spaces . match, spaces . '} catch(e) {', spaces . spaces . 'throw new MyError(e)', spaces . '}'])

    else
        echom 'adfasdfasdfa'
    endif
endfunction

function RemoveConsoleLog()
    execute 'normal! :%s\/fzoo\/bar\<cr>'
    "fzoo
    " call NormalCommand(':%!tail -1/^console.log/\/\/ console.log\<cr>')
endfunction

function NameFile()
    let cwf = "/mnt/chromeos/GoogleDrive/MyDrive/CWF/"
    let name = expand('%:t')
    let outpath = cwf . name . DateStamp()
    echom outpath
    return outpath
endfunction

function RenameFile (from, to)
    let from = PathFix(a:from)
    let to = PathFix(a:to)
    call writefile(readfile(from, to))
endfunction

function SaveBackup ()
    call writefile(getline(1,'$'), NameFile())
endfunction

function CheckFile()
   let name = NameFile()
   if filereadable(name)
       echo name . ' exists!'
   else
       echo name . ' doesnt exist'
   endif
endfunction

nmap <silent>  <C-B>  /?
nmap <silent>  <C-s>  :call SaveBackup()<CR>

function Parens(s, ...)
    let key = a:0 >= 1 ? a:1 : 'parens'
    let dict = {
    \    'parens': ['(', ')'],
    \    'braces': ['[', ']'],
    \ }
    let [a,b] = get(dict, key)
    return a . a:s . b
endfunction

function SetLine(replacement)
   if exists(a:replacement)
       call setline('.', a:replacement)
   endif
endfunction

function AnotherTextTransform()
   let line = CurrentLine() 
   let replacement = 'console.log' . Parens(line)
   call SetLine(replacement)
endfunction

" inoremap tf :call TextTransform()<cr>

" function TextTransform()
    
" endfunction

iab ceditor const editor = new LineEdit4(s)
" inoremap a <esc>:call SetBookMarks('doodle')<cr>

function ExecuteRegex(r)
    execute 'normal! ' . a:r . '\<cr>'
endfunction

function Rescape(s)
    let s = Sub(a:s, '\=', {x -> '\' . x[0]} )
    return Test(s, '^\v') ? s : '\v' . s
endfunction

function SetMark(mark, line)
    ec 'setting mark'
    call setpos("'" . a:mark, [0, a:line, 0, 0])
endfunction
function SetMarks()
    let query = 'const finishTemplate'
    let query = Rescape(query)
    ec query
    let index = search(query, 'bn')
    ec index
    if Exists(index)
        call SetMark('t', index)
    endif
    return 


endfunction




function SetBookMarks(namespace)
    echom 'namespace: ' . a:namespace
    let comment = GetCommentDelimiter()
    let dict = {
        \ 'le': [
            \ 'lineedit4',
            \ 'run',
            \ 'on',
            \ 'getset',
        \ ]
    \ }
    let items = dict[a:namespace]
    let command = ''

    for item in items
        let command = 
        \ command . '/^ *' . '\/\/' . 
        \ a:namespace . '\.' . item . '\<cr>' . 'm' . item[0]
    endfor

    echom command
    echom 'calling'
    call ExecuteNormal(command)
    echom 'done'
    return

endfunction

"inoremap ig item.get('')<left><left>
" inoremap p[ <esc>A:<cr>

" docnotes: 04-14-2021 07:35:56: a function which will correctly select the surronding textblock. 

nnoremap <leader>p :call Prettier()<cr>
nnoremap <leader>m :call TextSelect('')<left><left>

function Prettier(...)
    let file = a:0 == 1 ? a:1 : Self()
    let command = JSPY(file, 'prettier') . file
    ec command
    execute "!" . command
endfunction

function ExecRegex(s)
  " execute 'normal! /' . a:s . '\<cr>'
    return
endfunction

function DotSplit(s)
    return split(a:s, '\.')
endfunction

function TextSelect(s)
    let s = a:s
    let file = GetFile()
    let lang = GetLang()
    let args = DotSplit(s)

    if len(args) == 2
        let a = args[0]
        let b = args[1]
        echom a b
        if lang == 'vim'
            let ra = '^const __' . a
            let rb = b
            execute "normal! gg/" . ra . "\<cr>"
            " execute "normal! /" . rb . "\<cr>"
        endif

    else
        echo 'bye'
    endif

endfunction

function TextSelect2()
    echom 'calling textslect'
    let lang = GetLang()
    let spaces = CurrentSpaces()
    let dict = {'vim': 'endfunction', 'js': '}', 'py': '\(def\)\@='}
    "normal <esc>?^\n\(function\\|def\\|class\)\@=<cr>O
    normal V/endfunction<cr>
    " execute '^V/endfunction<cr>'
    " execute 'normal ^V/^' . spaces . dict[lang] . '<cr>'
endfunction

iab sadd __store__.add
iab teststr s=`function test(re, s, flags = '') {<cr>return prepareRegex(re, flags).test(s)<cr>}`

"nnoremap w /^\(lineedit2.prototype.\\|    \)
"nnoremap wd ^/`<<cr>a<div><esc>/>`<cr></div><left><left><left><left>
" docnotes: 04-12-2021: what i have to do now is transfer the questions to a website. and upload the website as well. maybe watch minreport later.  

" docnotes: 04-10-2021: dropped my computer on to the groun with a harsh BANG. i went to sleep and ... i slept near the electric cord. i even had half a mind that it was going to happen. god i feel so angry at myself. i promised this wouldnt happen. i fucking ... i disrpesected ... AKJSDAS.
vnoremap D <esc>O<div><esc><down>o</div>
vnoremap h <esc>H/^\(def\\|function\) \w*/e<cr>adep<esc>
"goes to first function and adds dep

vnoremap x <esc>H:.,$s/^console/\/\/console<cr>
" clears out console logs

iab rrr return replace(regex, parser, s)
vnoremap m <esc>H/^\(def\\|function\) \w*/e<cr><left>yiwGos=`<cr><cr>`.trim()<cr>console.log(<esc>pa(s))<up><up><up>
" turns the function into a console log.

nmap <f1> :w<CR>:!clear;node %<CR>
imap <f1> <esc>:w<CR>:!clear;node %<CR>

nmap <f2> :w<CR>:!clear;node %<CR>
imap <f2> <esc>:w<CR>:!clear;node %<CR>
" vnoremap l $yGoconsole.log(<esc>pA) SIMPLE
"vnoremap l /.*\($\\|)\)\@=yGoconsole.log(<esc>pA)

"used for finding where i am. it will copy the item down.

" used for scrolling down through functions.

"lookahead
vnoremap t <esc>?^\n\(\w\)\@=<cr>Iyeet = `<esc>/^\n\\|\%$/e<cr>i`<esc>
"vnoremap y <esc>?^\n<cr>V/^\n<cr>

"JS
inoremap sj s = `<cr><cr>`<up>

vnoremap c <esc>?^console<cr>

iab rfa re.findall(regex, s, flags=re.M)
iab trs this.rootState
iab vdata data() {<esc>oreturn {<esc>o<esc>o}<esc>o}<up><up>

iab definit def __init__(self):
iab asm @staticmethod
iab openconfig openFile('config.json')
iab readconfig read('config.json').get( )<left><left>
iab ld os.listdir(os.getcwd())

function SnippetManager(...)
    let s = a:0 == 1 ? a:1 : Strip(GetLine())
    let [rest, tag] = ReverseSplit(s)
    let lines = 0
    let dict = {
    \    'fori'  : [
    \ "for (let i = 0; i < "
    \  "    ",
    \ "}",
    \],
    \    'forkv'  : [
    \ "for (let [k, v] of Object.entries(dict)) {"
    \  "    ",
    \ "}",
    \],
    \    'argv'   : [
      \   'args = sys.argv[1:]' ,
    \],
    \    'issssss'   : [
      \  
      \  
    \],
    \    'isss'   : [
      \  "from storage import *",
      \  "import r",
      \  "import sys",
    \],
    \    'is'   : [
      \  "from storage import *",
      \  "import r",
      \  "import sys",
    \],
    \    'dots' : [
            \ "let placeholder = a:0 >= 1 ? a:1 : ", 
         \],
    \    'newp' : [
            \ "new Promise((res, rej) => {",
            \ "    ",
            \ "})",
         \],
    \    'dotss' : [
            \ "let placeholder = a:0 >= 1 ? a:1 : ", 
            \ "let placeholder = a:0 >= 2 ? a:2 : ",
         \]
    \ }

    let match = get(dict, tag)
    if Exists(match)
        let rest .= ''
        let match[0] = rest . match[0]
        let lines = match
    elseif tag == 'with'
        let lines = [
            \ 'class ' . name . ':',
            \ '    def __init__(self):',
            \ '    ',
            \ '    def __enter__(self):',
            \ '    ',
            \ '    def __exit__(self, *args):',
            \ '    ',
        \]
    elseif tag == 'class' 
        let lines = [
            \ 'class ' . name . ':',
            \ '    def __init__(self):',
            \ '    ',
        \]

    elseif tag == 'class' 
        let lines = [
            \ 'class ' . name . ':',
            \ '    def __init__(self):',
            \ '    ',
        \]
    endif
    return LineSet(lines)
endfunction
" ask: how do you set conditional key shortcuts  for example, if it is a jsfile, i would like cl to expand into console.log, but if it is a py file, i would like it to expand into print and if it is a vim file, i would like it to expand into echom

" ask: a few unrelated vim questions  i would like to use 'q' in normal-mode, but it brings up a weird error screen. is there anyway to get around this  does echom do anything which echo does not  my saved marks keep disappearing. how do you persist your marks  i have a lot of functions in my vimrc file. i would like to move these functions to a vimhelper file and have .vimrc source the helper so that it is not as cluttered. how do you do this

function ReplaceStart(input_string, replacement)
    let p = substitute(a:input_string, '^\s*\zs', a:replacement, '')
    echom p
    return p
endfunction

function Appender(s)
    let spaces = CurrentSpaces()
    call append('.', spaces . a:s)
endfunction

function AppendTop(s, ...)
    let index = 0
    let movecursor = a:0 == 1 ? a:1 : 0
    call append(index, Strip(a:s))
    if movecursor
        call cursor(index + 1, 100)
    endif
endfunction

function SmartAdd()
    let line = CurrentLine()

    let match = matchstr(line, "\\w*RE = '.\\{-\\}'")
    if Exists(match)
        let description = 'Internal regex variable Match. Shunting the variable to the top of the file. Replacing the internal regex content with empty string.'
        echom description 
        let regex = "'.\\{-\\}'"
        let product = substitute(line, 'RE\zs = ' . regex, '', '')
        call setline('.', product)
        let item = JSPY('variablePrefix') . match
        call AppendTop(item)
        return
    endif

    let name = GetOptionalSpacesVariableDeclaration(line)
    echom 'adsfasdf'
    echom name
    if Exists(name)
        if name == 'r'
            echom 'smart adding re.findall'
            " let arg = GetFunctionParameters(GetFunctionLine())
            let flags = '0'
            Appender('re.findall(r, s, flags=' . flags . ')')
        else
            echom 'smart adding console log info and return statement'
            Appender('echom ' . name)
            Appender('return ' . name)
            let r = 'adf'
        endif
    else
        return
    endif
endfunction

function GetOptionalSpacesVariableDeclaration(s)
    return matchstr(a:s, '^ *\(let|const\) \w+ =')
endfunction

function GetVariableDeclaration(s)
    return matchstr(a:s, '\v^ *(\w\{1,\}) =') 
endfunction

function NotExists(s)
    return a:s ==# ''
endfunction

function SmartFix()
    let lang = GetLang()
    if lang == 'py'
        return
    else
        let [start, end] = GetVisualIndexes()
        let line = getline(start)
        let match = GetVariableDeclaration(line)
        echom match
        if NotExists(match)
            echom 'no exist'
            return
        else
            for i in range(start, end, 1)
                call setline(i, ReplaceStart(i, 'let '))
            endfor
        endif
    endif

endfunction

function OneRunner()
    let lang = GetLang()
    let runtime = JSPY(lang, 'runtime')
    ec runtime
    if lang == 'py'|| lang == 'js'
        ec 'sup'
        ec 'fooooo'
        execute "normal! :w\<cr>:!" . runtime . " %"
    else
        echom 'not a commander file'
    endif
endfunction

nmap 1 :call OneRunner()<CR>
nnoremap 1 :w<CR>:!clear;python3 %<CR>
nnoremap a :call DocNotes('ask')<cr>A
" docnotes: 04-16-2021 14:44:28: d for docnotes
" vnoremap 1 <esc>:call Filer()<cr>
" docnotes: 

function DocRun()
    let lang = GetLang()
    "let dict = {'vim': ':w !bash', 'js': ':! node %', 'py': ':! python3 %'}
    let dict = {'py': '<Esc>:w<CR>:!clear;python3 %<CR>','vim': 'gg<cr>'}
    let cmd  = 'normal! ' . dict[lang]
    echo cmd
    execute cmd
endfunction

function Exists(s)
    if IsNumber(a:s)
        return a:s != 0
    elseif IsString(a:s)
        return strlen(a:s) > 0
    elseif IsArray(a:s)
        return len(a:s) > 0
    elseif IsObject(a:s)
        return len(a:s) > 0
    endif
endfunction

function CurrentLine()
    return getline('.')
endfunction

iab dots a:0 >= 1 ? a:1 : 
function GetSpaces(...)
    let line = a:0 >= 1 ? a:1 : CurrentLine()
    return matchstr(line, '^ *')
endfunction

function CurrentSpaces(...)
    return matchstr(CurrentLine(), ' *')
endfunction

let g:importdict = {
    \"contextmanager": "from contextlib import contextmanager",
    \"pprint": "from pprint import pprint",
    \"re": "import regex as re",
    \"urllib": "import urllib.request",
    \"math": "import math",
    \"webbrowser": "import webbrowser",
    \"requests": "import requests",
    \"traceback": "import traceback",
    \"StringIO": "from io import StringIO",
    \"FPDF": "from fpdf import FPDF",
    \"fbchat": "import fbchat",
    \"sys": "import sys",
    \"praw": "import praw",
    \"subprocess": "import subprocess",
    \"shutil": "import shutil",
    \"socket": "import socket",
    \"inspect": "import inspect",
    \"datetime": "import datetime",
    \"time": "import time",
    \"json": "import json",
    \"os": "import os",
    \"random": "import random",
    \"unicodedata": "import unicodedata",
\ }

let g:importre = '<(sys|praw|default_timer|difflib|urllib|itertools|html|requests|subprocess|shutil|socket|inspect|datetime|time|json|sys|re|os)\ze\.|<(black|FPDF|fbchat|pprint)\ze\('

function DocTest()
    let lang   = GetLang()
    if IsLastLine()
        call GetSet('.', function('Logger'))
        return
    endif
    let line   = CurrentLine()
    
    let spaces = CurrentSpaces()
    let [variablePrefix, cs, ce] = JSPY('variablePrefix', 'consoleStart', 'consoleEnd')

    let content = matchstr(line, '\w*\ze =')
    if Exists(content) 
        call AppendBelow('.', Logger(content))
        return
    endif
    ec 'adfadf'

    let content = matchstr(line, '\(^ *if (.\{-})\)\@<=.*$')
    " GetLogicItem
    " Doesnt seem to work.
    if Exists(content)
        let replacement = spaces . dict[lang] . '(' . content . ')'
        normal O
        call setline('.', replacement)
        return
    endif

    let content = matchstr(line, '\v^(def|class|function) \zs\w+')
    " GetFunction And Append to Bottom.
    if Exists(content)
        call AppendBottom(Logger(content . '()', lang))
        return
    endif

    let content = matchstr(line, '^ *return \zs.*')
    if Exists(content)
        ec 'sup'
        let a = substitute(Strip(line), 'return ', variablePrefix . 'p = ', '')
        ec a
        let b = cs . 'p' . ce
        let c = 'return p'
        let items = [a,b,c]
        call TextPlacement(items, spaces)
        return
    endif

    let content = matchstr(line, '\(function \)\@<=[a-zA-Z0-9]*')
    echo content
    if Exists(content) 
        echo 'func'
        let replacement = spaces . dict2[lang] . '(' . content . '(s))'
        normal G
        let line = CurrentLine()
        echo line
        if Test(line, 'console')
            call setline('.', replacement)
        else
            normal o
            call setline('.', replacement)
        endif
        return
    endif

    let content = matchstr(line, '^class \S*')
    
    "nongreedy .\{-\}
    let content = matchstr(line, '^adsfaodsfaods\S*')
    if Exists(content) 
        call setline('.', ConsoleLog(line))
        return
    endif

    " The final Thing going on. OFten causes an error.
    let replacement = substitute(line, '\( *\)\(\S*\)', '\1console.log(\2)', '')
    call setline('.', replacement)

    echo ' doctest no match'
endfunction

function ContentPlacement(...)
    let spaces = '    '
    for i in range(0, a:0 - 1, 1)
        let item = spaces . a:000[i]
        if i == a:0 - 1
            call setline('.', item)
        else
            call foo()
        endif
        " call RelativeAppend(-1, currentSpaces . LogicParse(Strip(line)) . p2)
        " call setline('.', currentSpaces . '    ')
        " call RelativeAppend(0, currentSpaces . suffix)
        " echom i
        " echom a:000[i]
    endfor
endfunction

function ConsoleLog(s)
    let prefix = GetLang() == 'js' ? 'console.log' : 'pprint'
    return prefix . Parens(a:s)
endfunction

function Test(line, regex)
    return a:line =~ Regexed(a:regex)
endfunction

" docnotes: 04-15-2021 15:35:01: why does it feel like hollywood so much better at making movies than the entire rest of the world  ofc there are many many exceptions. but it seems that on a macro scale, great movies are mostly american hollywood movies.
" docnotes: 04-15-2021 15:34:30: hard to write comments in css and html files ... so perhaps dont do it. 

function CssComment(x)
    return '/* ' . x . '*/' 
endfunction

function HtmlComment(x)
    return '<!-- ' . x . '-->' 
endfunction

function GetCommentDelimiter()
    let lang = GetLang()
    echom lang
    let dict = {'0': '// ', 'html': '', 'css': '', 'vim': '" ', 'js': '// ', 'py': '# '}
    return dict[lang]
endfunction

function DateStamp()
    let strife = '%m%d%Y'
    let date = strftime(strife)
    return date
endfunction

function UpLine()
    return getline(line('.') - 1)
endfunction

function GetDate()
    let date = strftime('%m-%d-%Y %I:%M:%S%p')
    return date
endfunction

iab <expr> dts strftime('%m-%d-%Y %I:%M:%S%p') . ' - Howdy!'

function DocNotes(mode)
    let line = getline('.')
    let commentValue = 'ask'
    if a:mode == 'date'
        let commentValue = 'docnotes: ' . GetDate()
    endif

    let text = CommentLine(commentValue) . ': '
    let replacement = CurrentSpaces() . text
    if empty(line)
        let replacement = GetSpaces(UpLine()) . text
    else
        execute 'normal! O'
    endif
    call setline('.', replacement)
endfunction
function AppendToFile(file, lines)
    call writefile(readfile(a:file)+a:lines, a:file)
endfunction

function GetLine(...)
    let n = a:0 >= 1 ? Relative(a:0) : '.'
    return getline(n)
endfunction

function CurrentExtension()
    return expand('%:e')
endfunction

function GetExtension()
    return expand('%:e')
endfunction

" it's not working.
function SmartComment()
    let extension = GetExtension()
    echom extension
    let line  = GetLine()
    let regex = '^ *\("\|//\|<!--\|#\)'
    let start = matchstr(line, regex)
    let dict = {'': '"', 'js': '//', 'py': '#'}
    let product = ''
    echom start
    if start
        let replacement = dict[extension]
        let regex = ' *\zs'
        let product = substitute(line, regex, replacement, '')
    else
        let replacement = ''
        let regex = '\(" \|// \|<!-- \|# \)'
        let product = substitute(line, regex, replacement, '')
    endif
    echom 'product'
    echom product
    call SetLine(product)
endfunction

function StripEnd(input_string)
    return substitute(a:input_string, '\(.\{-}\)\s*$', '\1', '')
endfunction

function Strip(input_string)
    return substitute(a:input_string, '^\s*\(.\{-}\)\s*$', '\1', '')
endfunction
let g:randomlist = []
function LineCommenter()
    let line = CurrentLine()
    if Exists(g:grabmode)
        let regex = ': \zs[''"].{-}[''"]'
        let match = Match(line, regex)
        call add(g:randomlist, match)
        return 
    endif
    let regex = '^ *\zs("|//|<!--|#|/\*|\*/)'

    if Test(line, regex)
        call UnCommentLine('.')
    else
        call CommentLine()
    endif
    return

    if Test(line, regex)
        call UnCommentLine('.')
        let n = 1
        while 1
            let line = getline(Relative(n))
            if Test(line, regex)
                call UnCommentLine(Relative(n))
                let n += 1
            else
                break
            endif
        endwhile

        ec 'down'
        let n = -1
        while 1
            let line = getline(Relative(n))
            ec line
            if Test(line, regex)
                call UnCommentLine(Relative(n))
                let n -= 1
            else
                break
            endif
        endwhile
    else
        call CommentLine()
    endif
endfunction

    
function IsNumber(x)
    return type(a:x) == 0
endfunction

function IsString(x)
    return type(a:x) == 1
endfunction

function IsFunction(x)
    return type(a:x) == 2
endfunction

function IsObject(x)
    return type(a:x) == 4
endfunction

function IsArray(x)
    return type(a:x) == 3
endfunction

function CommentLine(...)
    let lang = GetLang()
    let val = a:0 == 1 ? a:1 : 0
    let [prefix, suffix] = JSPY('commentPrefix', 'commentSuffix')

    if empty(val)
        let line  = CurrentLine()
        let spaces = CurrentSpaces()
        let product = spaces . prefix . Strip(line) . suffix 
        call setline('.', product)
    else
        return prefix . val . suffix
    endif
endfunction

function Filer2()
    let filetype = &filetype
    let full_file_path = @%
    let file  = expand('%:t')
    let extension = matchstr(file, '\(js\|py\)$')
    let line  = getline('.')
    let regex = '^ *\("\|//\|<!--\|#\)'
    let start = matchstr(line, regex)
    let dict = {'js': '// ', 'py': '#  |# '}
    if start == ''
        if file == '.vimrc'
            " echom file
            let replacement = '" '
        elseif file == 'utils.py'
            let replacement = '# '
        elseif file == 'utils.js'
            " echom file
            let replacement = '// '
        elseif file == 'vuecm2.html'
            " echom file
            let replacement = '<!-- '
        else
            let regex2 = '^ *\zs\(const\|foo\)'
            let start = matchstr(line, regex2)
            if start == ''
                let replacement = '# '
            else
                let replacement = '// '
            endif
        endif
        
        let regex = ' *\zs'
        let product = substitute(line, regex, replacement, '')
    else
        " echom 'removing comment'
        let replacement = ''
        let regex = '\(" \|// \|<!-- \|# \)'
        let product = substitute(line, regex, replacement, '')
    endif
    call setline('.', product)
    echom 'done'
endfunction

function NormalEnter(s)
    return
    execute "normal! " . a:s . '\<cr>'
endfunction

function Normal(s)
    execute "normal! " . a:s
endfunction

function ShuntLine()
    call append(1, getline('.'))
    call Normal('dd')
endfunction

function UnCommentLine(...)
    let index = a:0 >= 1 ? a:1 : '.'
    let regex = '^ *\zs\("\|//\|<!--\|#\) *'
    call GetSet(index, {line -> substitute(line, regex, '', 'g')})
endfunction

function CommentIt ()
  if &filetype == "vim"
    vmap +# :s/^/"/<CR>
    vmap -# :s/^"//<CR>
  elseif &filetype == "tcl"
    vmap +# :s/^/#/<CR>
    vmap -# :s/^#//<CR>
  elseif &filetype == "c"
    vmap +# I/*<Esc>gv<End><Esc>a*/<Esc>
    vmap -# I<Esc>2xgv$<Esc>h2x<Esc>
  elseif &filetype == "cpp"
    vmap +# A<End><CR><Esc>gv:s/^/ *<CR>gvI<Esc>ko<Home>/*<Esc>gvA<Esc>ji */
    vmap -# :s/^..//<CR>gvI<Esc>ddgvA<Esc>dd
  elseif &filetype == "dosbatch"
    vmap +# :s/^/rem /<CR>
    vmap -# :s/^rem //<CR>
  endif
endfunction

" autocmd BufEnter * call CommentIt ()

":nnoremap <silent><expr> gcc match(getline('.'), '^Hey') > -1 ? ":s/^Hey//\<cr>" : ":s/^/Hey/\<cr>"

":vnoremap gcc :norm gcc<cr>
vnoremap 0 <esc>:w<cr>:e utils.js<cr>
vnoremap 9 <esc>:w<cr>:e utils.py<cr>
vnoremap 8 <esc>:w<cr>:e utils.js<cr>
vnoremap 7 <esc>:w<cr>:e q.txt<cr>
vnoremap 8 <esc>:w<cr>:e utils.js<cr>
vnoremap 8 <esc>:w<cr>:e asdf<cr>

"nnoremap <leader>u :! python3 utils.py expand('%:p')
nnoremap <leader>u :! python3 update.py 

iab ctr constructor
vnoremap [ ?^\(def\\|class\\|async\\|function\)<cr>
"vnoremap ] /^\(}\)<cr>
"vnoremap ] <esc>^V/^\(\/\/\\|def\\|function\)\@=<cr>

"vnoremap ] <esc>?^\(\n\w\)\@=<cr> --brings u to the start
vnoremap ] <esc>?^function<cr>v/^}<cr>
"v/^\n\\|\%$<cr>

vnoremap p /\n\(\w\)\@=<cr>
nnoremap h 'ho
" inoremap wl ((x) => {<cr>})<esc><s-o>
inoremap w0 <c-o>${<cr>})<esc><s-o>
inoremap w[ <c-o>${<cr>}<esc><s-o>
"inoremap <expr> w[ IsHtml() ? '<c-o>${<cr>}<esc><s-o>' : ':call EnterBlock()<cr>'


inoremap ww <esc>:call InsertFixer()<cr>a
inoremap w] <esc>:call HtmlHandler()<cr>a
"inoremap w] <esc>:call HuntForReplacement()<cr>A



iab vuep Vue.prototype
"start 

function DisplayName(name)
  echom "Hello!  My name is"
  echom a:name
endfunction

command Ujs :e ~/CWF/utils.js
command Upy :e ~/CWF/utils.py

"set clipboard=unnamed
"----------------------------
" Sunday, 01-24-2021, 10:51 AM
"----------------------------

set viminfo='1000,f1

iab DRIVE /mnt/chromeos/GoogleDrive/MyDrive/
iab osc os.system('clear')
iab ray raise Exception('ray')
iab readcat <esc>:! cat stdout.log
inoremap <C-x> ^i<Right><Right><Right><bs><bs><bs><esc>
inoremap <F4> <esc>yyp
inoremap <f10> <esc>:wa<cr>
inoremap <leader>x (s) {<esc>o}<esc><s-o>
let mapleader=","

nnoremap f dd
nmap j :m +1<CR>
nmap k :m -2<CR>
nmap q bi'<esc>ea'<esc>

nnoremap <F4> yyp
"nnoremap <Leader>y Da
nnoremap <a-d> VGx
nnoremap <f10> :wa<cr>
nnoremap <leader>r diwi
nnoremap <leader>v :w<cr>:e ~/.vimrc<cr>
nnoremap <leader>p :w<cr>:e ~/CWF/storage.py<cr>
nnoremap <leader>d :w<cr>:e ~/CWF/derived.py<cr>
nnoremap <s-f> gg<s-o>
"nnoremap [ :call Check()<cr>
noremap 6 /^    \(def \)\=\w*\><left><left><left><left><left>
noremap 7 :w<cr>:e ./

set autoindent
set clipboard=unnamed
set expandtab
set ignorecase
set laststatus=2
set mouse=a
set nocompatible
set noswapfile
set number
set shiftwidth=4
set showcmd
set smartindent 
set smarttab
set softtabstop=4
set statusline=%F
set tabstop=4
vnoremap <s-c> y<s-o><esc>P
vnoremap <s-f> dggP
vnoremap B ^/}\zs\(\n\|,\)<cr>oV
"vnoremap v /\n\zs}<cr>
"nnoremap e :!

function FunctionRunner2()
    let file = expand('%:t')
    let extension = matchstr(file, '\(js\|py\)$')
    if empty(extension)
        let extension = 'js'
    endif
    echo extension
    " let dict = {
        'js': 'node',
        'py': 'python3',
    system(dict[extension] . '%')
endfunction

function GetFile()
    return expand('%:t')
endfunction

function GetLang(...)
    let file  = a:0 == 1 ? a:1 : expand('%:t')
    let match =  Match(file, '(css|html|vue|js|json|py|vim\zerc|bash\ze(rc|_aliases)|sh|txt)$')
    let dict = {
    \    'vue': 'js',
    \    'html': 'js',
    \    'txt': 'js',
    \ }
    return get(dict, match, match)
endfunction

function StartsWith(s, el)
    return a:s =~ '^' . a:el
endfunction

function EndsWith(s, el)
    return a:s =~ a:el . '$'
endfunction

function BoundaryReplace(s, regex, replacement)
    return substitute(a:s, Regexed('<' . a:regex . '>'), a:replacement, '')
endfunction

function Replace(s, regex, replacement, ...)
    let flags = a:0 == 1 ? a:1 : ''
    return substitute(a:s, Regexed(a:regex), a:replacement, flags)
endfunction

function Regexed(regex, ...)
    let boundary = a:0 == 1 ? a:1 : 0
    let magic = a:regex =~ '^\\v' ? '' : '\v'
    let bs = ''
    let be = ''
    if boundary
        let bs = '<'
        let be = '>'
    endif
    let regex = bs . a:regex . be
    return magic . regex

endfunction
function Namechanger(s)
    let pairs = CreatePairs(split(a:s))
    for [a,b] in pairs
        call ExecuteReplace('[''"]\zs' . a . '\ze[''"]', b)
        call Commander('cp', a, b)
    endfor
endfunction
function ExecuteReplace(a, b, ...)
    let sensitive = a:0 >= 1 ? 1 : 0
    let flags = "/g"
    if sensitive
        let sensitive = '\C'
        "let flags .= 'I'
    else
        let sensitive = ''
    endif

    let cmd =  "%substitute/\\v" . a:a . sensitive . "/" . a:b . flags
    ec cmd
    execute cmd
endfunction
function GlobalReplace(words)
   let pairs = CreatePairs(split(a:words))
   for pair in pairs
       let [a,b] = pair
       execute "%substitute/\\v<" . a . ">/" . b . "/g"
   endfor
   return

endfunction

function CreatePairs(items)
    let items = a:items
    let store = []
    for i in range(0, len(items) - 1, 2)
        call add(store, [items[i], items[i + 1]])
    endfor
    return store
endfunction

function IsOdd(count)
   return a:count % 2 == 1     
endfunction

function PathFix(file)
    let root = '/home/kdog3682/'
    let base = '/home/kdog3682/CWF/'
    if Test(a:file, '^[~/]')
        return a:file
    elseif a:file =~ 'vimrc'
        return root . a:file
    else
        return base . a:file
    endif
endfunction

function SwapVariables()
    return
endfunction
    
function CreateClassName(line, p1, p2, param)
    if Has(a:line, '\(')
        return a:line
    endif
    
    let parts = split(Strip(a:line))
    if Exists(a:param)
        call insert(parts, a:param, 1)
    endif
    let first = parts[0]

    let rest = '()'

    if len(parts) > 1
        let rest = '(' . join(parts[1:], ', ') . ')'
    endif

    return p1 . first . rest . a:p2
endfunction
function CreateName(line, capitalize)
    if Has(a:line, '\(')
        if Exists(a:capitalize)
            return Capitalize(a:line)
        endif
        return a:line
    endif
    
    let parts = split(Strip(a:line))
    let first = parts[0]

    let rest = '()'

    if len(parts) > 1
        let rest = '(' . join(parts[1:], ', ') . ')'
    endif

    if a:capitalize
        let first = Capitalize(first)
    endif
    
    return first . rest
endfunction

function Has(s, el)
    if IsObject(a:s)
       return has_key(a:s, a:el)
    endif

    if IsArray(a:s)
       return index(a:s, a:el) > -1
    endif
    return a:s =~ Regexed(a:el)
endfunction

function Cleanup()
   echom 'cleaning'
   %s/\v^ *(console.log|print|#|\/\/).*\n//g
endfunction

function OpenNpmFile(s)
    let [dir, query] = SplitOnce(a:s)
    let dir = '/home/kdog3682/CWF/node_modules/' . dir
    let files = split(globpath(dir, query . '*'), "\n")
    call OpenFiles(files)

endfunction
function IsFile(file)
   let p = filereadable(a:file)
   echom p
   return p
endfunction

function GetName(line)
    return Match(a:line, '(def|function|const|class) \zs\w+')
endfunction
function CreateFile()
   let lines = GetTextChunk() 
   call insert(lines, 's = \'\'\'')
   call add(lines, '\'\'\'')
   AppendFile('strings.py', lines)

endfunction
function AppendFile(file, lines, ...)
    let extralines = a:0 >= 1 ? a:1 : 0
    let lines = IsString(a:lines) ? [a:lines] : a:lines
    if IsIndexes(lines)
        let lines = GetLines(lines)
    endif
    let file = PathFix(a:file)
    if Exists(extralines)
        call insert(lines, '')
    endif
    call writefile(lines, file, 'a')
    ec 'Appending lines to file: ' . file
endfunction

function EditFile(file)
    echo expand('%:e')
    echo @%                |" directory/name of file
    echo expand('%:t')     |" name of file ('tail')
    echo expand('%:p')     |" full path
    echo expand('%:ph')    |" directory containing file ('head')
    return
    execute 'edit ' . PathFix(a:file)
endfunction

"nnoremap n :w<cr>:source ~/.vimrc<cr>:call FunctionManager('')<left><left>
nnoremap zfm :call FunctionManager('')<left><left>
nnoremap zvm :call VariableManager('')<left><left>
function Resetasd()
    normal 1,$d
    let a = 'from storage import *'
    let b = 'from shortcuts import *'
    let lines = [a,b,'', '', '']
    call setline('.', lines)
endfunction

function WriteImportStatement()
    call setline('.', ['from storage import *', 'from shortcuts import *', '', ''])
endfunction
function Reset()
    let file = 'derived.py'
    call AppendFile(file, getline(1, '$'))
    execute "normal! :1,$d\<cr>"
    call WriteImportStatement()
    call cursor(100, 0)
endfunction
function Resetasdfasd()
    let file = 'derived.py'
    let store = []
    let lines = getline(1,'$')
    for i in range(0, len(lines) -1)
        let line = lines[i]
        if StartsWith(line, 'from')
            continue
        else
            call add(store, line)
            call DeleteLine(i)
        endif
    endfor
    call AppendFile(file, store)
    "call cursor(100, 0)
    "call OpenFile(file)
"
endfunction
function OpenFile(file)
    normal :w<cr>
    execute 'edit ' . PathFix(a:file)
endfunction
function VimrcFunctionManager(x)
    if a:x =~ 'cap'
        normal :%s/\(^function\)\(\w*\)/<\U\1/g<cr>
    endif
endfunction
function NormalSub(regex, replacement)
    execute 'normal !'
endfunction
function StringWrap(lines, lang)
    let a = a:lang == 'js' ? 's = `' : 's = \'\'\''
    let b = a:lang == 'js' ? '`': '\'\'\''
    call insert(lines, a)
    call add(lines, b)
endfunction
function ExtensionFix(buffer)
    let lang = 'py'
    if a:buffer =~ '\v\.\w+$'
        return a:buffer
    else
        return a:buffer . '.' . lang
    endif
endfunction
function AppendBottom(lines, ...)
    let relativeCursor = a:0 == 1 ? line('.') + a:1 : '$'
    call append('$', a:lines)
    call cursor(relativeCursor, 0)
endfunction
function TryCatcher(indexes)
    let [a,b] = a:indexes
    let [stry, scatch] = JSPY('stry', 'scatch')
    let spaces = GetSpaces(getline(a))

    call IndentAll([a,b])
    call append(a - 1, spaces . stry)
    call append(b + 1, IndentAll(scatch, spaces))
    call cursor(b + 3, 100)
endfunction
function IndentAll(x, ...)
    let spaces = a:0 >= 1 ? a:1 : 0

    let Parser = 0
    if Exists(spaces)
        let regex = '^' . ' ' . RegexNumber(0, spaces)
        let Parser = {s -> Replace(s, regex, spaces)}
    else
        let Parser = {s -> '    ' . s}
    endif

    if IsIndex(a:x)
        call GetSetLines(a:x, Parser)
    else
        return Mapped(a:x, Parser)
    endif
endfunction
function IsIndex(x)
    return IsNumber(a:x[0])
endfunction
function StringSurround(indexes)
    let sdelimiter = JSPY('sdelimiter')
    let a = 's = ' . sdelimiter 
    let b = sdelimiter
    call WrapChange(a:indexes, a, b)
endfunction
function ReshapeParameter(index)
   call GetSet(index, {s -> Replace(s, ', .+', ') {'})
   call cursor(index, RelativeLineChar(-2))
   return 
endfunction
function ReplaceContiguousOrScreen(s)
    if Test(a:s, '  ')
        let indexes = GetIndexesHelper('line')
        let line = getline(indexes)
        let pairs = split(a:s, '  ')
        for pair in pairs
            let [a,b] = split(pair, '/')
            let a = strlen(a) == 1 ? '<' . a . '>' : a
            let line = Replace(line, a, b, 'g')
        endfor
        call setline(indexes, line)
        return 
    endif

    if !Test(a:s, '/')
        let dict = {
        "\    'vs-start': 'booga',
        \    'fix': {'fn': function('FixTheLineViaTemplate'), 'i': 'code'},
        \    'aed': {'fn': function('AddErrorDebugForTheThing'), 'i': 'code'},
        \    'ws': {'fn': function('ToWorkspace'), 'i': 'code'},
        \    'print': {'fn': function('PrintToScreen'), 'i': 'code'},
        \    'archive': {'fn': function('ArchiveContents'), 'i': 'code'},
        \    ']': {'fn': function('VisualSelect'), 'i': 'code'},
        \    'bc': {'fn': function('BlockComment'), 'i': 'contiguous'},
        \    'o': {'fn': function('VisualSelect'), 'i': 'smartobject'},
        \    'f': {'fn': function('FunctionizeBlock'), 'i': 'contiguous'},
        \    'rac': {'fn': function('RemoveAllComments'), 'i': 'code'},
        \    't2': {'fn': function('Trial2'), 'i': 'contiguous'},
        \    'dq': {'replacer': ['''', '"', 'g'], 'i': 'code'},
        \    'bug': {'fn': function('DebugBlock'), 'i': 'code'},
        \    'cul': {'fn': function('CopyUpLine'), 'i': 'code'},
        \    'function': {'fn': function('Functionize'), 'i': 'block'},
        \    'tc': {'fn': function('TryCatcher'), 'i': 'trycatchindex'},
        \    'tdc': {'fn': function('TryCatcher'), 'i': 'block'},
        \    'pyfix': {'fn': function('PyFix'), 'i': 'nolinebreak'},
        \    'zzzzzzzzz': {'fn': function('TryCatcher'), 'i': 'nolinebreak'},
        \    'dsb': {'fn': [0, 'DeleteLine'], 'i': 'nolinebreak'},
        \    'dp': {'fn': 'ReshapeParameter', 'i': 'line'},
        \    'rc': {'fn': ['IsComment', 'DeleteLine'], 'i': 'code'},
        \    'iab': {'fn': function('CreateVisualIab'), 'i': 'line', 'args': 1},
        \    'q': {'fn': function('VisualQuotify'), 'i': 'block', 'args': 1},
        \    's': {'fn': function('StringSurround'), 'i': ''},
        \    'b': {'fn': function('Blockify'), 'i': 'block'},
        \    '': {'fn': function('VisualSelect'), 'i': 'contiguous'},
        \    'trial': {'gs': function('Trialify'), 'i': 'contiguous'},
        \    'vs': {'fn': function('SetVisualSelection'), 'i': 'smartcontiguous'},
        \    'sh': {'gs': function('SuperHelperHelper'), 'i': 'nolinebreak', 'spaces': 1},
        \    'az': {'gs': function('ReplaceArgsZero'), 'i': 'line', 'spaces': 1},
        \    'ditto': {'fn': function('LineDitto'), 'i': 'null'},
        \ }

        let [key, arg] = ForceSplit(a:s)
        let innerdict = get(dict, key)
        let Fn = get(innerdict, 'fn')
        let mode = 'fn'
        if empty(Fn)
            let Fn = get(innerdict, 'gs')
            let mode = 'gs'
        endif
        let indexmode = get(innerdict, 'i')

        let indexes = GetIndexesHelper(indexmode)
        if IsString(Fn)
            let Fn = function(Fn)
        endif

        if IsFunction(Fn)
            if mode == 'gs'
                if Exists(arg)
                    call GetSetLines(indexes, {s -> Fn(s, arg)})
                else
                    call GetSetLines(indexes, Fn)
                endif
            elseif indexmode == 'null'
                if Exists(arg)
                    call Fn(arg)
                else
                    call Fn()
                endif
            else
                if Exists(arg)
                    call Fn(indexes, arg)
                else
                    call Fn(indexes)
                endif
            endif

        elseif IsArray(Fn)
            let [condition, runner] = Fn     
            ec indexes
            for i in range(indexes[0], indexes[1] - 1)
                let line = getline(i)
                if Exists(function(condition)(line))
                    call function(runner)(i)
                endif
            endfor
            "call LineRunner(indexes, condition, runner)

        else
            let replacer = innerdict.replacer
            if IsArray(replacer)
                let [regex, replacement, flags] = replacer
                let P = {i -> ReplaceLine(i, regex, replacement, flags)}
                call LineRunner(indexes, P)
            endif
        endif
        return
    endif

    let flag = 'fn'
    let boundary = 0
    let s = a:s

    if s =~ '^/'
        let regex = '/[bc]+$'
        let s = s[1:]
        let boundary = 0
        let sensitive = 0
        if Test(s, regex)
            let match = Match(s, regex)
            let s = s[0:-strlen(match)]
            if match =~ 'b'
                let boundary = 1
            endif
            if match =~ 'c'
                let sensitive = 1
            endif
        endif
        let [a,b] = SmartSplit(s, '//')
        if boundary
            let a = Boundary(a)
        endif
        call ExecuteReplace(a, b, sensitive)
        return 
    endif

    if s =~ '^,'
        let s = s[1:]
        let boundary = 1
    endif

    if s == '"'
        let s = '" '''
    elseif s == ''''
        let s = ''' "'
    endif
    let s = AddBackSlashes(s)

    let [a,b] = GetIndexesHelper('')
    call ReplaceRange(a,b, s, boundary)

endfunction

function GetCSIndexes()
    let [a,b] = GetFullVisualIndexes()
    if a == 0 && b == 0
        let [a,b] = GetContiguousIndexesIBM()
    return [a,b]
endfunction

function GetSmartIndexes()
    let true = 1
    let upindex = line('.') - 1
    let downindex = line('.') + 1
    let count = 0
    let previndent = GetIndent(getline('.'))
    while true
        let indent = GetIndent(getline(upindex))
        if indent != previndent
            let upindex += 1
            break
        else
            let upindex -= 1
            let previndent = indent
        endif
    endwhile

    let previndent = GetIndent(getline('.'))
    while true
        let indent = GetIndent(getline(downindex))
        if indent > 0 and indent < previndent
            let upindex -= 1
            break
        else
            let upindex += 1
            let previndent = indent
        endif
    endwhile

    return [upindex, downindex]
endfunction

function Asdf()
    let a = 'hi'
    if a
        echo 'a exists'
    else
        echo 'a doesnt exist'
    "ask: why does the result of this function say a doesnt exist?  basically, how do you check for the existance of a value? 
    endif
endfunction
function FileOpener()
    edit aa.py
    edit bb.py
endfunction

nnoremap 6 :call ResetToStandardBuffers()<cr>
nnoremap 7 :e!<cr>
nnoremap 8 :call ChooseBuffer('')<left><left>
nnoremap 9 :bp<CR>
nnoremap 0 :bn<CR>
nnoremap - :w<cr>:bd<CR>
nnoremap = :e#<CR>
let maplocalleader = '`'

function ResetToStandardBuffers()

    for buffer in GetVisibleBuffers()
        call CloseBuffer(buffer)
    endfor

    let lang = 'py'
    let standardbuffers = ['today', 'storage']
    let standardbuffers = map(standardbuffers, "~/CWF/" . 'v:val . "." . lang')

    for buffer in standardbuffers
        call OpenBuffer(buffer)
        if name =~ 'vimrc|utils|helpers|storage'
            call store(add, name)
        else
            execute 'bd ' name
        endif
    endfor
endfunction

"nnoremap <leader>u :e ./utils.py<cr>
"nnoremap <leader>t :e ./today.py<cr>
"nnoremap <leader>v :e ~/.vimrc<cr>
"nnoremap <leader>h :e ./helpers.py<cr>
nnoremap ls :buffers<cr>

function OpenBasdjfhasdjfuffer(patetrn)
  let bufcount = bufnr("$")
  echom buffers
  let currbufnr = 1
  let nummatches = 0
  let firstmatchingbufnr = 0
  while currbufnr <= bufcount
    if(bufexists(currbufnr))
      let currbufname = bufname(currbufnr)
      if(match(currbufname, a:pattern) > -1)
        echo currbufnr . ": ". bufname(currbufnr)
        let nummatches += 1
        let firstmatchingbufnr = currbufnr
      endif
    endif
    let currbufnr = currbufnr + 1
  endwhile
  if(nummatches == 1)
    execute ":buffer ". firstmatchingbufnr
  elseif(nummatches > 1)
    let desiredbufnr = input("Enter buffer number: ")
    if(strlen(desiredbufnr) != 0)
      execute ":buffer ". desiredbufnr
    endif
  else
    echo "No matching buffers"
  endif
endfunction

function GetVisibleBuffers()
  let buffers = filter(range(1, bufnr('$')), 'buflisted(v:val)')
  return buffers
endfunction

function BufRange()
    return range(1, bufnr('$'))
endfunction

function Self()
    return GetFile()
endfunction
function Force(a, n)
    if len(a:a) > a:n
        return [a:a[0], join(a:a[1:])]
    endif
            
    while len(a:a) < a:n
        call add(a:a, '')
    endwhile
    return a:a
endfunction
function ForceSplit(s, ...)
    if a:s == ''
        return ['', '']
    endif
    let delimiter = a:0 >= 1 ? a:1 : ' '
    let fallback = a:0 >= 2 ? a:2 : ''
    if IsNumber(delimiter)
        let parts = [a:s[0:delimiter - 1], a:s[delimiter:]]
        ec parts
        return parts
    endif

    let parts = split(a:s, delimiter)
    if len(parts) == 2
        return parts
    elseif len(parts) == 1
        return [parts[0], fallback]
    else
        return [parts[0], join(parts[1:], delimiter)]
endfunction

let g:grabbuffer = 'utils.py'

function MakeHtml()
    call ExecuteFile('makescript.js', CurrentFile())
    call OpenLocalFile('template.html')
endfunction
function OpenLocalFile(...)
    "let file = a:0 >= 1 ? a:1 : Match(CurrentLine(), '''\zs.{-}\ze''')
    let file = a:0 >= 1 ? a:1 : 0
    if Not(file)
        let file = CurrentFile()
        w
    elseif !filereadable(file)
        ec 'not filereadable: ' . file
        return 
    endif


    ec file
    "if file == 'foo.html'
        "call ExecuteFile('foohelper.js')
    "endif

    execute "!xdg-open " . file
endfunction
function CreateFileFromLine()
    let line = CurrentLine()
    let match = Match(line, '["'']\zs\w+\.(js|py|html|css)\ze["'']')
    call ChooseBuffer(match)
endfunction

let g:debug = 'DEBUG'

function SetGlobalVariable(s)
    let [key, value] = SplitOnce(a:s)
    call Exec("let g:" . key . " = " . Quotify(value))
endfunction
function SetCurrentFileAsShuntDestination(...)
    let file = a:0 >= 1 ? FileGetter(a:1) : CurrentFile()
    let variable = a:0 >= 2 ? a:2 : 'shuntbuffer'
    if Not(file)
        let file = a:1
    endif
    if variable == 'shuntbuffer'
        let g:shuntbuffer = file

    elseif variable == 'debug'
        let g:debug = file
    endif
    ec 'Setting ' . variable . ' to element: ' . file
endfunction

let g:grabmode = 0

function SetModeToGrab()
    let g:grabmode = g:grabmode ? 0 : 1
endfunction

function IabEat(s)
   let cmd = Join("iab", "<silent>", a:s . "<C-R>=Eatchar('\\s')<CR>")
   ec cmd
   call AppendVim(cmd)
   execute cmd
endfunction
iabbrev <silent> gv getValue
function LibraryLoader()
    let g:fnlib = ReadJson('javascript.lib')
endfunction
function ToggleLibraries()
    try
        call ExecuteReplace('^const (fs|jshint)', '\/\/ \0')
    catch
        try
            call ExecuteReplace('^\/\/ ?\zeconst (fs|jshint)', '\/\/ ')
        catch
            return 
            call ExecuteReplace('\/\/ ?\zeconst (fs|jshint)', '')
        endtry
    endtry
endfunction


    "ldrm
function LeaderManager(s)
   let [key, arg] = SplitOnce(a:s)
   if has_key(g:ldrdict, key)
       if empty(arg)
           call g:ldrdict[key]()
       else
           call g:ldrdict[key](arg)
       endif
       return
   endif

   let key = a:s[0]
   let s   = a:s[1:]
   let dict = {
       \    'v': function('SetVariable'),
       \    'r': function('Read'),
   \}
   if has_key(dict, key)
       call dict[key](s)
   else
       ec key . ' not in dict.'
   endif
endfunction

function SetVariable(s)
    let s = EverythingToSlashes(a:s)
    let parts = split(s, '/')
    length = len(parts)
    let namespace = 'b'
    let variable = 'x'
    let value = 'abc'
    if len == 1
        let value = parts[0]
    elseif len == 2
        let [variable, value] = parts
    endif
    elseif len == 3
        let [variable, value, namespace] = parts
    endif
    let command = "let " . namespace . variable . " = " . value
    ec command
    exec command
endfunction
function EverythingToSlashes(s)
    return Replace(a:s, '[. ]', '/', 'g')
endfunction
function Identity(s)
    return a:s
endfunction

function GetLibItems(keys, lib)
    return map(a:keys, 'ToLines(get(a:lib, v:val))')
endfunction

function Flat(list, ...)
  if IsString(a:list)
      return a:list
  endif
  let spacing = a:0 == 1 ? a:1 : 0
  let store = []
  for elem in a:list
    if IsArray(elem)
      call extend(store, elem)
    else
      call add(store, elem)
    endif
    if spacing
        call add(store, '')
    endif
    unlet elem
  endfor
  return store
endfunction
function Grabsecond(s, ...)
    let preview = a:0 == 1 ? a:1 : 0 
    let keys = split(a:s)
    let items = GetLibItems(keys)
    let lines = Flat(items, 1)
    if Exists(preview)
        ec join(lines, "\n")
    else
        call AppendSelf(lines, 'cursor')
    endif
endfunction

function SpaceWrap(lines)
    if IsArray(a:lines)
        call add(a:lines, '')
        call insert(a:lines, '')
    endif
    return a:lines
endfunction

let g:defaultlib = 'combine.py.lib'
let g:defaultlib = 'javascript.lib'
function Grab(s)
    if a:s[0] == '/'
        call GrabLocal(a:s[1:])
        return 
    endif


    let keys = split(a:s)
    let items = []
    let lang = GetLang()
    if lang == 'py'
        if !exists('g:pylib')
            let g:pylib = ReadJson('combine.py.lib')
        endif
        let items = GetLibItems(keys, g:pylib)

    elseif lang == 'js'
        if !exists('g:fnlib') || !Exists(g:fnlib)
            let g:fnlib = ReadJson('/home/kdog3682/CWF/javascript.lib')
            ec 'js library loaded'
        endif
        let items = GetLibItems(keys, g:fnlib)
    endif

    if Exists(items)
        let lines = SpaceWrap(Flat(items, 1))
        call append('.', lines)
    else
        ec 'items dont exist'
        ec keys
    endif
endfunction

function ToLines(x)
    if Not(a:x)
        return []
    elseif IsArray(a:x)
        let store = []
        for item in a:x
            call extend(store, split(item, "\n"))
        endfor
        return store
    else
        return split(a:x, "\n")
    endif
endfunction
function Grabold(s)
    let [s, file] = ForceSplit(a:s, g:grabbuffer)
    let file = PathFix(file)
    let a = '\v^(class|function|def)' . ' ' . a:s . '>'
    let b = '\v^(class|end|function|def|}|\])'

    let lines = readfile(file)
    let lines = SearchBetween(lines, a,b)
    if Exists(lines)
        call AppendFile(Self(), lines)
    else
        ec s . ' doesnt exist in file ' . file
    endif

endfunction
function Ranger(list, ...)
    let secondindex = a:0 == 1 ? a:1 : 0 
    if Exists(secondindex)
        return range(a:list, secondindex)
    elseif len(a:list) == 2 && IsNumber(a:list[0])
        return range(a:list[0], a:list[1], 1)
    elseif IsNumber(a:list)
        return range(0, a:list)
    else
        return range(0, len(a:list) - 1, 1)
    endif
endfunction
function SearchBetween(lines, a, b)
    let firstindex = -100
    let secondindex = -1
    let store = []
    for i in Ranger(a:lines)
        let line = a:lines[i]
        if firstindex == -100
            if line =~ Regexed(a:a)
                let firstindex = i
                call add(store, line)
            endif
        else
            if line =~ Regexed(a:b)
                let secondindex = i
                if line =~ '\vendfunction|\}|\]'
                    call add(store, line)
                endif
                break
            else
                call add(store, line)
            endif
        endif
    endfor
    return store
endfunction
noremap <leader>r <esc>diwi

function DeleteFile(...)
    let file = a:0 >= 1 ? a:1 : CurrentFile()
    execute "bd! " . file 
    ec 'deleting file: ' . file
    call delete(fnameescape(file))
endfunction

function IsEmptyFile(file)
    return len(readfile(a:file)) < 2
endfunction
function FileGetter(s)
  let match = GetFileFromCache(a:s)
  if Exists(match)
      return match

  elseif Test(a:s, '^\~')
      return a:s


  elseif Exists(a:s)
      let buffers = map(GetVisibleBuffers(), 'Basename(bufname(v:val))')
      ec 'asfd'
      let buffer = FindItem(buffers, '^' . a:s)
      if Exists(buffer)
          return buffer
      elseif HasExtension(a:s)
          ec 'adsfasdf'
          return a:s
      else
          ec ' nothing here'
      endif
  endif
endfunction

nnoremap <leader>m :messages<cr>
inoremap <leader>l \<leader\>

let g:tempfiles = []

function ChooseBuffer(s)
    let file = ''
    if a:s =~ '^all'
        let query = '*/' . a:s[4:]
        ec query
        let file = FuzzyFileFinder(query)
        ec file
        return
    elseif IsStringNumber(a:s)
        call OpenBuffer(a:s)
        return 
    elseif a:s =~ '^cp'
        let file = trim(a:s[2:])
        let [from, to] = SplitOnce(file)
        call CopyFile(from, to)
        return 
    elseif a:s =~ '^@s'
        let file = a:s[2:]
        let g:shuntbuffer = file
        call add(g:tempfiles, file)
        call WriteImports(file)
        return
    elseif a:s =~ '^/'
       if Not(filereadable(a:s[1:]))
           let file = FuzzyFileFinder(a:s[1:] . '')
       else
           let file = a:s[1:]
       endif
       call OpenBuffer(file)
    else
        try
            let file = FileGetter(a:s)
        catch
            ec 'error'
        endtry
    endif

    if Exists(file)
        if !filereadable(file)
            call PrepareFileForCreation(file)
        endif
        call OpenBuffer(file)
    else
        ec a:s
    endif
endfunction

function Basename(name)
    let parts = split(a:name, '/')
    try
        return parts[-1]
    catch
        return a:name
    endtry
endfunction
function Join(...)
    return join(a:000, ' ')
endfunction
function OpenBuffer(buffer, ...)
    if Not(a:buffer)
        ec ' not a buffer '
        ec a:buffer
        return
    endif
    let name = IsStringNumber(a:buffer) ? bufname(str2nr(a:buffer)) : a:buffer
    let command = a:0 >= 1 ? "vsplit" : "edit"
    execute Join(command, name)
endfunction
set splitright

function ExecuteNormal(s)
    execute "normal! " . a:s . "\<cr>"
endfunction

function WordUnderCursor()
    let word = CurrentWord()
    if strlen(word) == 1
        call setpos('.', CharPos(-1))
        let word = CurrentWord()
    endif
    return word

endfunction

"pork
function CloseBuffer(buffer)
    let name = IsStringNumber(a:buffer) ? bufname(str2nr(a:buffer)) : a:buffer
    execute "bd " . name
endfunction
function WriteConsoleLog()
    let Fn = JSPY('consolefn')
    let s = Fn('')
    call SetLineWithSpaces(s)
endfunction
function SetLineWithSpaces(s)
    call setline('.', CurrentSpaces() . a:s)
endfunction

nnoremap <leader>n :call WriteNote("")<left><left>
nnoremap <leader>g :call Grab('')<left><left>

function AskQuestion(...)
    if IsSplitWindow()
        execute "wq"
        call ExecuteFile('redditscript.py')
        return 
    endif

    let s = a:0 >= 1 ? a:1 : 0
    let lang = GetLang()

    if Not(s)
        call OpenBuffer('questions.txt', 'vsplit')
        execute "normal! G"
        return
        execute "normal! Go" . lang . '      '
    endif
    "let text = join(lines, "\\n")
    "let text = EscapeForTerminalArg(text)
    "ec text
    "execute ":!python3 reddit.py " . text

    let indexes = GetCSIndexes()
    let lines = GetLines(indexes)
    "let lines = Indent(lines)
    "call add(lines)
    "let dict = {
    "\  "input": a:s,
    "\  "excerpt": Join(lines),
    "\  "lang": GetLang(),
    "\}

    call insert(lines, GetLang() . ' ' . a:s)
    call WriteFile('temp.txt', s)
    execute "!python3 reddit.py temp.txt"
    return

    call add(g:questionlist, GetLang() . ' ' . a:s)
    if len(g:questionlist) == 5
        ec 'posting to reddit'
        WriteFile('temp.txt', Stringify(g:questionlist))
        execute ":!python3 reddit.py temp.txt"
        let g:questionlist = []
    endif
    return
    let lines = GetIndent() == 0 ? Indent(CurrentLine()) : Indent(GetFunction())
    let lang = GetLang()
    let [question, body] = ForceSplit(a:s, '  ')
    let s = '@' . lang . ' ' . question
    call insert(lines, '')
    call insert(lines, s)
    call add(lines, '')
    call add(lines, body)
    ec lines
    AppendFile('questions.txt', lines)
endfunction
"set iskeyword=@,48-57,_,192-255,.

"forcesplit = 'let \[.*?\] = \w*Split.*?, \S*?\)'
function ToDictEntry(s)
    let [name, key] = ForceSplit(a:s, '/')
    let [start, end] = GetCodeIndexes(name)    
    let dictindex = search('\v\w+ = [\{\[]', '', end)
    if Not(dictindex)
        ec 'no dict'
        return
    endif
    call AppendBelow(dictindex, insertion)
endfunction

nnoremap <leader>. :call LeaderManager('')<left><left>

function GetLastWriteFile(f)
    let f = 0
    if exists('g:lastwritefile') && Not(a:f)
        let f = g:lastwritefile
    endif
    return f
endfunction

function GetFileFromCache(f)
  let match = get(g:filedict, a:f)
  return match
endfunction

function Read(f)
    let f = GetLastWriteFile(a:f)
    "if Not(f)
        "let f = GetFileFromCache(a:f)
    "endif
    if Not(f)
        let f = FileGetter(a:f)
    endif

    if filereadable(f) 
       if exists('g:filetrackerlist')
           call add(g:filetrackerlist, f)
       else
           let g:filetrackerlist = [f]
       endif
       execute ":vsplit " . f 
    else
        ec f . ' is not a file.'
    endif
endfunction


function Indent(x)
    if IsArray(a:x)
        return map(a:x, {i, line -> '    ' . line})
    else
        return '    ' . a:x
    endif
endfunction

function MatchReplace(regex)
    let store = []
    let lines = GetLines()
    for i in Ranger(lines)
        let line = lines[i]
        if Test(line, a:regex)
            call DeleteLine(i)
            call add(store, line)
        endif
    endfor
    return store
endfunction
function Shuntnope(s)
    let key = a:s
    let destination = ''
    let lines = ''
    if key == 'variables' || key == 'v'
        let lines = MatchReplace('^\S+ =.*')
        let destination = 'r.py'
    endif

    call AppendFile(destination, lines)
endfunction

function Shuntdoesntwork(s)
   let dict = {
   \    'variables': SayHi,
   \ }
   echom dict
   echom a:s
   let Fn = get(dict, a:s, SayHi)
   let result = Fn()
   ec result
endfunction

function SayHi()
    return 'foo'
endfunction

function IsVim()
    return GetLang() == 'vim'
endfunction

function Reader()
   if Exists(g:lastbuffer)
       ec join(readfile(g:lastbuffer), "\n")
   endif
   let g:lastbuffer = 0
endfunction

let g:lastbuffer = 0

function AddSpaces(lines, proceed)
    if Exists(a:proceed)
        let spaces = CurrentSpaces()
        return map(a:lines, {i, line -> spaces . line})
    else
        return a:lines
    endif
endfunction

function LineSet(lines, ...)
    if Not(a:lines)
        return 0
    endif
    let spaces = a:0 == 1 ? a:1 : 0 
    let spaces = 1
    let writeover = 1
    let lines = AddSpaces(a:lines, spaces)
    if writeover
        call setline('.', lines[0])
        call append('.', lines[1:])
        call cursor(line('.') + len(lines) - 1, 100)
    else
        call append('.', lines)
    endif
    return 1
endfunction
function ActionManager(s)
    ec 'Calling Action Manager'
    if strlen(a:s) > 10
        "let items = matchlist(a:s, '\v(\w+) (.*)')
        "let [a,b] = [items[1], items[2]]
        "i
        "ec a
        "ec b
        let lang = GetLang()
        let statement = lang . ' ' . a:s
        let statement = ReplaceSpaces(statement)
        ec statement
        call Execute('reddit.py', statement)
        return
    endif
    let key = a:s
    if key =~ 'pret'
        execute "normal! :!prettier --write " . Self() . "\<cr>"
    elseif key == 'foo'
        execute "normal! :ec " . "'" . Self() . "'" . "\<cr>"
    endif
endfunction

function ReadJson(file)
    let data = IsString(a:file) ? readfile(a:file) : a:file
    try
        return js_decode(join(data))
    catch
        return {}
    endtry
    
endfunction


function Preview(s)
    call Grab(a:s, 1)
endfunction

function AppendSelf(items, ...)
    let location = a:0 == 1 ? a:1 : '$'
    let lines = SpaceWrap(Flat(a:items, 1))
    call append(location, lines)
endfunction

function Cursor(s, ...)
    let chpos = a:0 == 1 ? a:1 : 100
    if a:s == 'bottom'
        call cursor('$', chpos)
    else
        call cursor(line('$') + a:s, chpos)
    endif
endfunction

nnoremap <leader>b :e ~/.bash_aliases<cr>

function MatchSearch(r, ...)
    let options = a:0 >= 1 ? 'n' . a:1 : ''
    let threshold = a:0 >= 2 ? line('.') + a:2 : 0
    let index = search(Regexed(a:r), options, threshold)
    ec index
    if index > 0
        return Match(getline(index), a:r)
    endif
endfunction



function GetPrecedingKeyWord(...)
    let spaces = a:0 >= 1 ? '^' . a:1 : ''
    let fallback = a:0 >= 2 ? a:2 : 's'
    let index = GetFunctionIndex()
    let r = '' . '(let ){-}' . '\zs\w+\ze \='
    let r = '\w+\ze \='
    let index = search(Regexed(r), 'bn', Relative(-10))
    let match = ''

    if Exists(index)
        let match = Match(getline(index), r)
    endif

    if Exists(match)
        return match
    endif

    let param = GetFunctionParam(getline(index))
    if Not(param)
        if Exists(Strip(fallback))
            ec ' returning fallback'
            return fallback
        else
            ec ' really no match'
            return 's'
        endif
    endif
    return param
endfunction
function CurrentIndex()
    return line('.')
endfunction
function SplitOnce(line, ...)
    if Not(a:line)
        return ['', '']
    endif
    let delimiter = a:0 == 1 ? a:1 : ' '
    let parts = split(a:line, delimiter)
    let length = len(parts)
    if length == 1
        return [parts[0], '']
    elseif length == 2
        return parts
    else
        return [parts[0], join(parts[1:], delimiter)]
    endif
endfunction

function StringFunc(name, ...)
    let rest = join(a:000, ', ')
    return a:name . Parens(rest)
endfunction

function CreateRegex(s, ...)
    let dict = {
    \    'dotu': '.*?',
    \    'dot': '.*',
    \    'cwp': '\w+',
    \    'plb': '(?<=',
    \    'nlb': '(?<!',
    \    'pla': '(?=',
    \    'nla': '(?!',
    \    'ncg': '(?:',
    \    'az': '[a-zA-Z]',
    \    '3': '#',
    \    '2': '@',
    \    '4': '$',
    \    '6': '^',
    \    '8': '*',
    \    '9': '(',
    \    '0': ')',
    \ }
    let presetdict = {
    \    'ss': '''^    ''',
    \    'spaces': '''^    ''',
    \    'cdf': '''^(function|def|class) ''',
    \ }
    let s = a:s
    if Test(s, '^r\.')
        return s
    endif
    let match = get(presetdict, s)
    if Exists(match)
        return match
    endif
    if Unquoted(s)
        let s = Quotify(s)
    endif
    let s = Dreplace(s, dict)
    return s
endfunction

function Unquoted(s)
    return a:s !~ '^[''"]'
endfunction

let g:dict = {'a': 1, 'b': 2}

function Ncg(s)
    return '(?:' . s . ')'
endfunction

let s:counter = 0
function MyCounter()
  let s:counter = s:counter + 1
  echo s:counter
endfunction
command Tick call MyCounter()

function Enumerate(list)
    let list = IsArray(a:list) ? copy(a:list) : split(a:list, "\n")
    return map(list, {k,v -> [k,v]})
endfunction

function LineRun(...)
    let indexes = []
    let condition = ''
    let Fn = ''

    if a:0 == 2
        let b:linerunstore = []
        let indexes = [0, '$']
        let condition = a:1
        let Fn = a:2
    elseif a:0 == 3
        let indexes = a:1
        let condition = a:2
        let Fn = a:3
    elseif a:0 == 4
        let indexes = [a:1, a:2]
        let condition = a:3
        let Fn = a:4
    endif
        
    for index in Ranger(indexes)
        let line = getline(index)
        if Test(line, condition)
            call setline(index, Fn(line))
            if a:0 == 2
                call add(b:linerunstore, index)
            endif
        endif
    endfor
endfunction

function ToggleComment()

    let go = 0
    if go != 0 && exists('b:linerunstore') && Exists(b:linerunstore)
        let comment = JSPY('comment')
        let comment = '# '
        for index in b:linerunstore
            call GetSet(index, {line -> comment . line})
        endfor
        unlet b:linerunstore
        return
    endif

    call LineRun(r, {line -> Replace(line, r, '')})
    return

endfunction

    let g:commentre = '^(#|//|") ?'
function HasComment(s)
    return Test(a:s, g:commentre)
endfunction
function UnCommentComment(s)
    return Replace(a:s, g:commentre, '')
endfunction

command TC call ToggleComment()
command ASK :! python3 reddit.py
"command -nargs=1 P call Prettier(<args>)
command P call Prettier()
command -nargs=1 Pre call Preview(<args>)
iab ret return

function GetContext()
    let r = '^(function|def|class)|\= \{ *$'
    let match = MatchSearch(r, 'b')
    if match =~ '\v\='
        let match = 'dict'
    endif
    return match
endfunction

function CursorNearBottom()
    let index = line('.')
    let end = line('$')
    let threshold = 10
    return index >= end - threshold
endfunction
function Fixer()

    let indexes = GetCodeIndexes()
    let P = {line -> Replace(line, '    *\zs\w+\ze *:', '''\0''')}
    call GetSetLines(indexes, P)
    return

    let context = GetContext()

    let indexes = GetContiguousIndexesIBM()
    for i in Ranger(indexes)
        ec i
        let n = GetIndent(getline(i))
        ec n
    endfor
    return

    let lang = GetLang()
    if lang == 'vim' && context == 'dict'
        call GetSetLines(GetCodeIndexes(), {s -> Replace(s, '^(}|    )\zs', '\')})
    elseif lang == 'json'
        call Execute('replacer.py', CurrentFile() . ' jsonquotes')

    elseif lang == 'py'
        if context == 'dict' && Test(CurrentLine(), '^ +\w')
            let P = {line -> Replace(line, '    *\zs\w+\ze *:', '''\0''')}
            for index in Ranger(GetCodeIndexes())
                call GetSet(index, P)
            endfor
        elseif CursorAtLineStart() || CursorNearBottom()
            let index = Search('((function|def|class).*\)|else|while)$', 'b')
            if Exists(index)
                call GetSet(index, {line -> line . ':'})
            else
                ec ' no match'
            endif
        elseif context == 'class'
            call InjectSelf()
        else
            let index = SearchBackWards('(function|def|class) .{-}[)]$')
            call GetSet(index, {line -> line . ':'})
        endif
    endif
endfunction

function InjectSelf()
    let indexes = GetCodeIndexes()
    let condition = 'def \w+\(\zs' . Nla('self')
    let FnExtra = {l -> Test(l, '\(\)') ? '' : ', '}
    let Parser = {line -> Replace(line, condition, 'self' . FnExtra(line))}
    call LineRun(indexes, condition, Parser)
endfunction

function Pla(s)
    return Parens(a:s) . '@!='
endfunction

function Plb(s)
    return Parens(a:s) . '@<='
endfunction

function Nla(s)
    return Parens(a:s) . '@!'
endfunction

function Nlb(s)
    return Parens(a:s) . '@<!'
endfunction

iab lorempyclass class foo:<cr>    def foobar(x):<cr>        return x
iab lorempyclass class foo:<cr>    def foobar(x):<cr>        return x
iab lpc class foo:<cr>    def foobar(x):<cr>        return x<cr>    def woobar():<cr>        return x

function AddBackSlashes(s)
    return Replace(a:s, '[\[\]\(\)\*\{\}]', '\\\0', 'g')
    return Replace(a:s, '[\=\[\]\(\)\*\:\{\}]', '\\\0', 'g')
endfunction

function SpaceToSlash(s)
    let s = substitute(a:s, '/', ' ', '')
    return s
endfunction
function GetPos(...)
    let pos = a:0 == 1 ? a:1 : '.'
    try
        return getpos(pos)[1:-1]
    endtry
    return 0
endfunction

function ReplaceAcrossFiles(s)
    return
endfunction

function CreateScript()
    ec GetPos()
    let index = search('\v    (from|import)', ')
    if index <= 0
        ec 'not found'
        return
    else
        ec index
    endif

    ec GetPos()
     
endfunction

nnoremap zfc :call FunctionCaller()<CR>
nnoremap zcs :call SensitiveSearch('')<left><left>
nnoremap zcs /\v<>\C<left><left><left>
nnoremap <leader>s :call SmartShunt()<CR>

command Copy call Copy()

function Copy()
    let lines = GetFunction()
    let namespot = GetNameSpot(lines[0])
    let length = len(lines)
    call AppendSelf(lines)
    call Cursor(-length, namespot)
endfunction

function GetNameSpot(s)
    return match(a:s, Regexed('^(function|def|class) \zs\w+')) + 1
endfunction

function CreateVimCommand()
   let name = GetFunctionName() 
   let items = ['command', name, 'call', name . '()', ' |"@generated']
   let s = join(items)
   AppendSelf(s, 'bottom')
endfunction

command CC call CreateVimCommand()
function EmptyNext(index, direction)
    let line = getline(a:index + a:direction)
    return Test(line, '^(endfunction|}|\]|$)')
endfunction
function IsEmptyLine(line)
    return a:line !~ '[^\s]'
endfunction

function DoubleEmpty(index, ...)
    let direction = a:0 == 1 ? a:1 : 'up'
    if direction == 'up'
        let direction = -1
    elseif direction == 'down'
        let direction = 1
    endif
    return IsEmptyLine(getline(a:index)) && IsEmptyLine(getline(a:index + direction))
endfunction
function StartsWithSpace(s)
    return Test(a:s, '^ ')
endfunction
function Sprawler(upregex, downregex)
    let upindex = line('.') - 1
    let downindex = line('.') + 1
    while 1 
        let line = getline(upindex)
        let upmatch = Test(line, a:upregex)
        if Exists(upmatch)
            if Not(StartsWithSpace(line))
                break
            elseif EmptyNext(upindex, -1)
                break
            endif
        elseif DoubleEmpty(upindex, 'up')
            let upindex += 1
            break
        endif
        let upindex -= 1
    endwhile

    while 1
        let downmatch = Test(getline(downindex), a:downregex)
        if Exists(downmatch) 
            break
        elseif DoubleEmpty(downindex, 'down')
            let downindex -= 1
            break
        endif
        let downindex += 1
    endwhile
    return [upindex, downindex]
endfunction

function SmartBlockIndexes()
    let upregex = '(function |def |class |\w+ \=)'
    let downregex = '^(const|function|class|def|endfunction| *}| *\])'
    let [upindex, downindex] = Sprawler(upregex, downregex)
    ec upindex
    ec downindex
    return [upindex, downindex]
endfunction
function NoSymbols(s)
    return a:s =~ ']\|}'
endfunction
function SmartShunt()
    let indexes = SmartBlockIndexes()
    let lines = GetLines(indexes)

    while 1
        if NoSymbols(lines[-1]) && GetIndent(lines[-1]) > GetIndent(lines[0])
            call remove(lines, -1)
        else
            break
        endif
    endwhile

    let dest = DetermineDestination(lines)
    if Exists(dest)
        call DeleteRange(indexes)
        call AppendFile(dest, lines)
        if dest == 'r.py'
            call NormalSub(GetName(lines[0]), 'r.' . name, 'b')
        endif
    endif
endfunction

function ReplaceWithinLine()
    let line = CurrentLine()
    let ch = GetChar() - 1
    ec ch
    ec line[ch]
    ec '---'
    return
    you can type whatever you want
    and you dont really need comments because the return key ends it.
    sdfsdfsdf
        sdfsdfsd
        destination = iterativesearch(item, options.get('destinations'), mode='values')
    let parts = split(line, ' = |, ')
    for part in parts
        if Test(part, '\(\w+$')
            continue
        elseif Test(part, '^\w+$')
            continue
        elseif Test(part, '\(\w+$')
            continue
        endif
    endfor
    "(foo, adfjasdkfal.asdfasdf[sdfadf])

    let rightindex = match(line, '\v[\]''"\}\)]\ze($|,)')
    let item = line[rightindex]
    let partner = GetCounterPart(item)
    let leftindex = rightindex - 1
    while 1
        if Test(line[leftindex], partner)
            if partner =~ ' '
                let leftindex += 1
                break
            elseif partner =~ '('
                ec 'hiii'
                let leftindex -= 1
                while 1
                    if Test(line[leftindex], ' |\(')
                        let leftindex += 1
                        break
                    else
                        let leftindex -= 1
                    endif
                endwhile
            endif
            break
        elif leftindex == 0
            break
        else
            let leftindex -= 1 
        endif
    endwhile

    let name = 'placeholder'
    
    let placeholder = line[leftindex:rightindex]
    let value = placeholder
    call AppendAbove(CreateVariable(name, value), 'move')
    call GetSet('.', {line -> Replace(line, Escape(value), name)})
endfunction

function ReplaceWithinLine2()
    let foo = 'asdfasdfasdf'
    let ch = GetChar()
    let line = CurrentLine()
    let leftindex = ch
    let rightindex = ch + 3
    let match = 0
    while 1
        if leftindex == 0
            return
        elseif Test(line[leftindex], '\[|\(|\{|''|"')
            let match = Match(line[leftindex], '\[|\(|\{|''|"')
            let match = GetCounterPart(match)
            break
        else
            let leftindex -= 1
        endif
    endwhile
    while 1
        if line[rightindex] == match
            if line[rightindex + 1] == ','
                break
            endif
            break
        elseif rightindex > 200
            break
        else
            let rightindex += 1
        endif

    endwhile
    ec 'asdasdf'
    ec line
    ec line[rightindex]
    ec line[leftindex]
    let value = line[rightindex:leftindex]
    ec value
    ec 'hi'
    return
    let name = 'placeholder'
    call AppendAbove(CreateVariable(name, value))
    call GetSet('.', {line -> Replace(line, Escape(value), name)})
endfunction
function AppendAbove(s, ...)
    let move = a:0 == 1 ? a:1 : 0 
    let index = line('.') - 1
    call append(index, a:s)
    if Exists(move)
        call cursor(index, 100)
    endif
endfunction
function CreateVariable(name, value)
    let spaces = CurrentSpaces()
    let prefix = JSPY('variablePrefix')
    return spaces . prefix . a:name . ' = ' . a:value
endfunction

function ToSpaces(n)
    let s = ''
    for i in range(0, a:n - 1)
        ec 'hi'
        let s .= ' '
    endfor
    return s
endfunction
function SmartDedent(...)
    let input = 0 == 1 ? 1 : 0 
    if input
        let lines = input
        let indent = GetIndent(lines[0])
        if indent > 0
            let spaces = ToSpaces(indent)
            call map(lines, {i, line -> Replace(line, '^' . spaces, '')})
        endif
        return lines
    else
        let indexes = SmartBlockIndexes()
    endif
endfunction

function GetIndent(s)
    return match(a:s, '\S')
endfunction

let g:variableRE = '^(const|\w+ \=)'
let g:functionRE = '^(function|def|class) '

let g:fnlib = {}
function DetermineDestination(x)
    let first = IsArray(a:x) ? a:x[0] : a:x

    let dict = {
    \    g:variableRE: 'r.py',
    \    g:functionRE: 'storage.py',
    \ }

    let destination = IterativeSearch(first, dict, 0)
    return destination
endfunction

function IterativeSearch(s, dict, ...)
    let fallback = a:0 == 1 ? a:1 : 0 
	for [key, value] in items(a:dict)
        if Test(a:s, key)
            return value
        endif
    endfor
    return fallback
endfunction
function GetChar()
    let p = getpos('.')[2]
    return p
endfunction
function GetCounterPart(match)
    let dict = {
    \    '[': ']',
    \    ']': '[',
    \    '}': '{',
    \    '{': '}',
    \    '(': ')',
    \    ')': '(',
    \    '"': '"',
    \    '''': '''',
    \ }

    let dict = {
    \    ']': ' |\(',
    \    ')': '\(',
    \    '"': '"',
    \    '''': '''',
    \ }
    return get(dict, a:match)
endfunction

function Escape(str)
  return escape(a:str, '^$.*?/\[]()' . '"' . "'")
endfunction
function IsLastLine()
    return line('$') == line('.')
endfunction

function CursorAtLineStart()
    return getpos('.')[2] == 0
endfunction

function CursorAtLineEnd()
    return getpos('.')[2] == len(getline('.')
endfunction

"function foo():

"nnoremap zp :-4s,+4s?\\<placeholder\\>/bar/<cr>

function ReplaceForwards(...)
    let replacement = ''
    let target = 'placeholder'
    let regex = '\v<' . target . '>'
    let index = search(regex)
    call GetSet(index, {line -> Replace(line, regex, replacement, '')})
endfunction

function ReplaceBackwards(...)
    let replacement = ''
    let target = 'placeholder'
    let regex = '\v<' . target . '>'
    let index = search(regex, 'bc')
    call GetSet(index, {line -> Replace(line, regex, replacement, '')})
endfunction
"nnoremap zp :call ReplaceBackwards('')<left><left>
nnoremap <silent> zp :call ReplaceBackwards()<cr>i
"inoremap <tab> <esc>:call NextSnippet()<cr>a
"nnoremap <tab> :call NextSnippet()<cr>a

function NextSnippet()
    if Not(exists('b:snippetcount'))
        return
    elseif b:snippetcount == 0
        return
    else
        let b:snippetcount -= 1
        call ReplaceForwards()
endfunction

let s:completions = []
function AddCompletion (left, right, completion, restore)
    call insert(s:completions, [a:left, a:right, a:completion, a:restore])
endfunction

command AA call AlignAssignments()

function AlignAssignments()
    ec 'hi'
    let ASSIGN_OP   = '[-+*/%|&]\?=\@<!=[=~:]\@!'
    let ASSIGN_LINE = '^\(.\{-}\)\s*\(' . ASSIGN_OP . '\)\(.*\)$'

    let dicsdfsdft = {
    \}

    let [firstline, lastline] = GetContiguousIndexesIBM()
    ec [firstline, lastline]
    let lines = []
    for linetext in getline(firstline, lastline)
        let fields = matchlist(linetext, ASSIGN_LINE)
        ec fields
        call add(lines, fields[1:3])
    endfor
    return

    " Determine maximal lengths of lvalue and operator...
    let op_lines = filter(copy(lines),'!empty(v:val)')
    let max_lval = max( map(copy(op_lines), 'strlen(v:val[0])') ) + 1
    let max_op   = max( map(copy(op_lines), 'strlen(v:val[1])'  ) )
    ec max_lval
    ec max_op

    " Recompose lines with operators at the maximum length...
    let linenum = firstline
    for line in lines
        ec line
        if !empty(line)
            let newline
            \    = printf("%-*s%*s%s", max_lval, line[0], max_op, line[1], line[2])
            ec newline
            call setline(linenum, newline)
        endif
        let linenum += 1
    endfor
endfunction

" Implement smart completion magic...
function LastWord(s)
    return Match(a:s, '\w+\ze *$')
endfunction

function TabCompletion ()
    let dict = {
    \    'py': {
            \ 'i': ['import sys\nfrom storage import *', 'import boba'],
          \ },
    \    'vim': {
            \ 'i': ['import sys\nfrom storage import *', 'import boba'],
          \ }
    \ }

    let dict= {
        \ 'i': ['mport sys\<CR>from storage import *', 'mport boba'],
    \ }
    

    let line = getline('.')
    let currentchar = GetChar()
    let pospat = '\%' . currentchar . 'c'

    if line =~ '^\s*' . pospat
        return "\<TAB>"
    endif

    let word = LastWord(line)
    let match = get(dict, word)

    if Exists(match)
        return Test(line, '^' . word . ' *$') ? match[0] : match[1]
    else
        return "\<TAB>"
    endif
endfunction

" Remap <TAB> for smart completion on various characters...
"inoremap <silent> <TAB>    <C-R>=TabCompletion()<CR>

command -nargs=1 Mv call Rename(<args>)
function GetContiguousIndexesIBM(...)

    let indent_pat = '^' . matchstr(getline('.'), '^\s*') . '\S'
    let firstline  = search('^\%('. indent_pat . '\)\@!','bnW') + 1
    let lastline   = search('^\%('. indent_pat . '\)\@!', 'nW') - 1
    if lastline < 0
        let lastline = line('$')
    endif
    return [firstline, lastline]
    " INSERTION

    let firstboundary = a:0 >= 1 ? a:1 : 0
    let indent_pat = '^' . matchstr(getline('.'), '^\s*') . '\S'
    let firstline  = line(firstboundary)
    if firstboundary
        let firstline  = search('^\%('. indent_pat . '\)\@!','bnW') + 1
    endif
    let lastline   = search('^\%('. indent_pat . '\)\@!', 'nW') - 1
    if lastline < 0
        let lastline = line('$')
    endif
    return [firstline, lastline]
endfunction

function Rename(s)
   let [a, b] = ForceSplit(a:s, '/')

   call ExecuteBash('mv', a, b)
endfunction

function ExecuteBash(...)
    let cmd = ":! " . join(a:000)
    ec cmd
    execute cmd
endfunction

function Mapped3(items, fn)
    return map(a:items, {i, v -> FunctionGetter(a:fn)(v)})
endfunction
function CombineFiles(s)
    let files = Mapped(split(a:s), 'FileGetter')
    for file in files
        if !filereadable(file)
            continue
        endif
        call extend(store, readfile(file))
        if file != files[0]
            call DeleteFile(file)
        endif
    endfor
    call WriteFile(files[0], store)
endfunction

function WriteFile(file, lines)
    if Exists(a:lines)
        call writefile(a:lines, a:file, 'w')
    else
        ec 'lines are empty. no write'
    endif
endfunction

function AppendBelow(index, insertion, ...)
    let usespaces = a:0 >= 1 ? 0 : 1
    let spaces = ''
    if usespaces
        let line = getline(a:index)
        let spaces = GetSpaces(line)
        if line =~ '\v[\{\[]$|^ *(if|else|elif|function|class|def|while)'
            let spaces += '    '
        endif
    endif
    call append(a:index, spaces . a:insertion)
endfunction

function Findall(r, s)
    let lines = IsArray(a:s) ? a:s : [a:s]
    let store = []
    for line in lines
        let match = Match(line, a:r)
        if Exists(match)
            call add(store, match)
        endif
    endfor
    return store
    return Filtered(matchlist(a:s, Regexed(a:r)))
endfunction

function CreateDictFromArray(items, fn, ...)
    let reverse = a:0 == 1 ? a:1 : 0 
    let dict = {}
    for item in a:items
        if reverse
            dict[a:fn(item)] = item
        else
            dict[item] = a:fn(item)
        endif
    endfor
    return dict
endfunction

let g:funcnamere = '^(function|def|class) \zs\w+'

function ClearFile(file)
    call writefile([''], a:file, 'w')
    ec 'the file ' . a:file . ' has been cleared'
endfunction

function PrintReadFile(file)
    let s = trim(join(readfile(a:file), "\n"))
    if Not(s)
        ec a:file . ' is empty!'
    else
        ec s
    endif
endfunction
function WriteNote(s, ...)
    let outpath = a:0 >= 1 ? a:1 : 'notes.txt'
    let s = DateStamp() . ': ' . a:s
    call AppendFile(outpath, s)
    return 



    "let delimiter = ' --- '
    "let chunk = GetLineOrName()
    "let s = chunk . delimiter. a:s
    return
    call add(g:notelist, s)
    if len(g:notelist) == 5
        call AppendFile('codingnotes.txt', g:notelist)
    endif
    return
    let dict = {
    \    'symbol': {
            \ 'destination': 'notes.txt'
          \ }
    \}
    options = get(dict, name, {})
    destination = get(options, 'destination')
    if Exists(destination)
        call AppendFile(destination, chunk)
    else
        ec destination
    endif
endfunction
function GetShortName(name)
    function ShortNameHelper(x)
        return a:x[1]
    endfunction
    return Replace(a:name, '(\u)[a-z]*\C', function('ShortNameHelper'), 'g')
endfunction

"source ~/CWF/helpers.vim
"ec g:abc
"let g:namedict = CreateDictFromArray(Findall(g:funcnamere, GetLines()), function('GetShortName'), 1)
"ec g:namedict
function GetLineOrName()
    let line = CurrentLine()
    if Test(line, '^( |function|def|class|endfunction)')
        return Parens(GetFunctionName(), 'braces')
    else
        return line
    endif
    return
    if Test(line, '^(\w* )?\w+ \=')
        return [line, 'variable']

    elseif Test(line, '^( |function|def|class|endfunction)')
        return [GetFunctionName(), 'name']

    elseif Test(line, '^\w')
        return [line, 'prose']

    else
        ec 'sup'
        return [line, 'symbol']
    endif
endfunction
let zoop = 'hi'
let r = '\w+\ze \='

function ConditionalComment(s)
    let comment = JSPY('comment')
    if a:s =~ Escape(comment)
        return a:s
    else
        return comment . a:s
    endif
endfunction
nnoremap zr :call Read('')<left><left>
let g:notelist = []
let g:questionlist = []
function ReloadVim()
    ec 'Reloading Vim'
    if Exists(g:notelist)
        let s = CommentLine(GetDate())
        call insert(g:notelist, s)
        call AppendFile('notes.txt', g:notelist)
    endif

    if Exists(g:questionlist)
        call AppendFile('questions.txt', g:questionlist)
        let s = Stringify(g:questionlist)
        call ExecuteFile('redditscript.py', s)
    endif
endfunction
function BufferScrape(r)
    lines = readfile(PathFix('s'))
    return FindAll(a:r, lines)
endfunction
function Stringify(s)
    let s = a:s
    if IsArray(s)
        let s = join(s, "\n")
    endif 
    return s
endfunction
function EscapeSpaces(s)
    let s = Replace(a:s, ' ', '\\ ', 'g')
    let s = Replace(s, '\n', '\\\\n', 'g')
    return s
endfunction

"ec EscapeSpaces(Stringify(['foo cakes', 'bar']))

function Relative(n)
    return line('.') + a:n
endfunction
function DittoCopy(parts, upline)
    let store = []
    let targetword = Match(a:upline, '\w+\ze =')
    for part in a:parts
        let part = CopyCapitalization(part, targetword)
        let s = Replace(upline, targetword, part)
        call add(store, s)
    endfor
    return store
endfunction
function CopyCapitalization(s, ref)
    if Test('^[A-Z]', a:ref)
        return Capitalize(a:s)
    endif 
    return a:s
endfunction

function FindFile(extension)
    let glob = globpath('.', '*' . a:extension)
    ec glob
    return glob
    return split(glob, "\n")[0:n]
endfunction

function GetFiles(...)
    let query = a:0 >= 1 ? a:1 : '*'
    let n = a:0 >= 2 ? a:2 : 30
    let glob = globpath('.', query)
    return split(glob, "\n")[0:n]
endfunction

"call WriteFile('temp.txt', ['a', "b\nc", 'd\ne'])

function GetSetFile(file, fn)
    let lines = readfile(a:file)
    let product = a:fn(lines)
    call writefile(product, a:file, 'w')
endfunction

function MergeJson(s)
    let [from, name, to] = SlashSplit(a:s)
    let lines = ReadJson(FileGetter(from))
    let to = FileGetter(to)

    let a = '\v^(class|function|def|const)' . ' ' . name . '>|' . name . ' \= \{$'
    let b = '\v^(class|end|function|def|}|\])'
    let jsonA = SearchBetween(lines, a,b)
    let jsonB = ReadJson(to)
    call extend(jsonA, jsonB)
    WriteJson(to, jsonA)

    call GetSetFile(to, {lines -> lines[0:-2]  + inlines[1:]}) 
endfunction
function SlashSplit(s)
    return Force(split(a:s, '/'), 2)
endfunction
function Wrap()
    let d = JSPY('stringdelimiter')
    let indexes = GetContiguousIndexes()
    call add(lines, d)
    call insert(lines, d)

endfunction
function WriteJson(file, data)
    let encoded = json_encode(a:data)
    call writefile(split(encoded, "\n"), a:file, 'w')
endfunction

nnoremap zc :! python3 foo.py

function Renamer(name, bang)
    let l:curfile = expand("%:p")
    let l:curfilepath = expand("%:p:h")
    let l:newname = l:curfilepath . "/" . a:name
    let v:errmsg = ""
    let outpath = a:bang . " " . l:newname
    ec outpath
    return
    silent! exe "saveas" . outpath
    if v:errmsg =~# '^$\|^E329'
        if expand("%:p") !=# l:curfile && filewritable(expand("%:p"))
            silent exe "bwipe! " . l:curfile
            if delete(l:curfile)
                echoerr "Could not delete " . l:curfile
            endif
        endif
    else
        echoerr v:errmsg
    endif
endfunction

function GetCurrentBuffers()
    return map(GetVisibleBuffers(), 'bufname(v:val)')
endfunction

let g:buffergrouplist = []

function Iterate(list, fn)
    for item in a:list
        call a:fn(item)
    endfor
endfunction

function CloseBuffersByQuery(query)
    let targetbuffers = Filtered(GetCurrentBuffers(), a:query)
    ec targetbuffers
    call Iterate(targetbuffers, function('CloseBuffer'))
endfunction
function RevertBufferGroup()
    execute ":wa"
    if Not(exists('g:buffergrouplist')) || len(g:buffergrouplist) == 0
        ec 'no buffergrouplist'
        return
    endif
    let currentbuffers = GetCurrentBuffers()
    call Iterate(currentbuffers, function('CloseBuffer'))
    let newbuffers = remove(g:buffergrouplist, -1)
    call Iterate(newbuffers, function('OpenBuffer'))
endfunction
function OpenBufferGroup(query)
    let newbuffers = IsArray(a:query) ? a:query : GetFiles(a:query, 5)
    if len(newbuffers) < 2
        ec newbuffers
        return
    endif
    execute ":wa"
    let currentbuffers = GetCurrentBuffers()
    call add(g:buffergrouplist, currentbuffers)
    call Iterate(currentbuffers, function('CloseBuffer'))
    call Iterate(newbuffers, function('OpenBuffer'))
endfunction

function SomeStuffBelow()
    return 0
    let downline = getline(Relative(1))
    return strlen(downline) > 3 && Not(Test(downline, '(function|def|class|const) '))
endfunction
function SmartIndent()
    let a = GetIndent(CurrentLine())
    let indexes = GetContiguousIndexesIBM()
    if a >= 8
        call GetSet(indexes, function('DedentLine'))

    else
        call GetSet(indexes, function('IndentLine'))
    endif
endfunction

let g:globaltabwidth = '    '
function DedentLine(s)
    return Replace(a:s, '^' . g:globaltabwidth, '')
endfunction

function DedentLines(lines)
    let spaces = GetSpaces(a:lines[0])
    return Mapped(a:lines, {s -> Replace(s, '^' . spaces, '')})
endfunction

nnoremap <C-L> <C-W><C-L>G
nnoremap <C-H> <C-W><C-H>G

function FindItem(items, target)
    for item in a:items
        if Test(item, a:target)
            return item
        endif
    endfor
    return 0
endfunction
function FuzzyFileFinder(query)
    let file = FindItem(g:tempfiles, a:query)
    if Exists(file)
        return file
    endif

    let dict = {
    \    'h': 'html',
    \    'p': 'py',
    \    'c': 'cs',
    \    'j': 'js',
    \}

    let parts = split(a:query, '/')
    let parts[-1] = get(dict, parts[-1], parts[-1])
    let query = join(parts, '*')
    if Test(query, '^\*')
        let query = query[1:]
    endif
    if Not(Test(query, '\*'))
        let query .= '*'
    endif

    if Exists(query)
        let files = GetFiles(query) 
        if Exists(files)
            return files[0]
        endif
    endif
endfunction

nnoremap <localleader>a :call AddImportStatement()<cr>
nnoremap zi :call AddImportStatement()<cr>
function SmartIndexFinder()
    let index = 
endfunction
function JumpToNextBlock()
    let index = FindBlockLine()    
    ec index
    let indent = GetIndent(getline(index))
    let below = getline(index + 1)
    if Empty(below)
        call setline(index + 1, ToSpaces(indent + 4))
    endif
    call cursor(index + 1, indent + 4)
endfunction

function FindBlockLine(...)
    let flags = a:0 >= 1 ? a:1 : ''
    let index = Search('^   *(if|elif|else|while|catch|def|function|\w+\()', flags)
    return index
endfunction

function Empty(s)
    return Not(Strip(a:s))
endfunction

function EscapeForTerminalArg(text)
    let regex = '[\\ \(\)\{\}\[\]''"]'
    let replacement = '\\\0'
    let p = Replace(a:text, regex, replacement, 'g')
    return p
endfunction

function WriteImports(file)
    if !filereadable(a:file)
        let mode = 'w'
    endif

    let lines = [
        \ 'from storage import *',
        \ '',
    \]
    if a:file =~ 'script$'
        call add(lines, 'import sys')
    endif
    call WriteFile(a:file, lines)
endfunction

function BelowLineOccupied()
    return strlen(Strip(getline(Relative(1)))) > 0
endfunction
function SetPos(n)
    call setpos(Relative(a:n), 0)
endfunction

function SetPosition(line)
    call setpos('.', [0, a:line, 0, 0])
endfunction

autocmd! bufwritepost ~/.vimrc source %

function RegexNumber(a,b)
    let a = IsNumber(a:a) ? a:a : strlen(a:a)
    let b = IsNumber(a:b) ? a:b : strlen(a:b)
    return '{' . a . ',' . b . '}'
endfunction
function AppendVim(lines, ...)
   let location = a:0 >= 1 ? a:1 : '$'
   call appendbufline('~/.vimrc', location, a:lines)
endfunction
function IsCapitalized(s)
    return Test(a:s, '^[A-Z]\C')
endfunction

function LineDitto(s)
    let line = CurrentLine()
    let quotable = GetQuotable(line)
    if empty(quotable)
        ec 'empty'
        let quotable = GetFirstWord(line)
    endif
    let product = Parser233(line, quotable, a:s)
    call AppendBelow('.', product, 1)
endfunction

function GetFirstElement(s)
    return Match(a:s, '\S+')
endfunction

function GetFirstWord(s)
    return Match(a:s, '\w+')
endfunction

function GetQuotable(s)
    return Match(a:s, '[''"]\zs\w+')
endfunction

function Parser233(line, regex, replacement, ...)
    let flags = a:0 >= 1 ? a:1 : 'g'
    return Replace(a:line, a:regex, {x -> Parser234(x, a:replacement)}, flags)
endfunction
function IsSingleWord(s)
    return Test(a:s, '^[a-zA-Z]+$')
endfunction

function HasQuotes(s)
    return Test(a:s, '^[''"]')
endfunction

function Mapped(items, fn)
    let store = []
    for item in a:items
        call add(store, FunctionGetter(a:fn)(item))
    endfor
    return store
endfunction
function LineGetter(...)
    return Mapped2(a:000, {item -> getline(line('.') + item)})
endfunction
function TemplateDitto(line, upline)
    let [line, upline] = [a:line, a:upline]
    let match = Match(upline, '\w+\ze \= ')
    if Not(match)
        let [match, line] = SplitOnce(line)
    endif

   
    let flags = 'g'
    let counter = 0
    let items = split(line)
    for item in items
        ec item
        let replacement = Parser233(upline, match, item, flags)
        if counter == 0
            call setline('.', replacement)
        else
            call append(Relative(counter - 1),  replacement)
        endif
        let counter += 1
    endfor
    call cursor(Relative(len(items) - 1), 100)
endfunction
function DittoAction(s)
    let indexes = 0
    if !HasVisual() 
        let indexes = GetLogicIndexes()
    else
        let indexes = GetFullVisualIndexes()
        if NoVisualSelection(indexes)
            let indexes = GetLogicIndexes()
        endif
    endif

    ec indexes
    return
    if Test(getline(indexes[0]), '^ *(if|else|elif|while)')
        call BlockDitto(indexes, tag, rest)
    else
        call LineDitto(a:s)
    endif 
endfunction

function BlockDitto(tag, rest)
    let lines = ReplaceLines(GetLines(indexes), a:rest)
    "if tag == 'else'
        "let lines[0] = GetSpaces(lines[0]) . JSPY('else')
    "endif
    call append(indexes[1], lines)
endfunction
function GetLogicIndexes()
    let up = search('\v^ *(if|else|elif|while)', 'bnc')
    let down = search('\v^ *(end|\})', 'nc')
    return [up, down]
endfunction

function NoVisualSelection(indexes)
    "ajsdfhakjsdfkds.foo
    return a:indexes[0] == 0 && a:indexes[1] == 1
endfunction
function SmartDittoSnippet()
    let r = '\w{5,}\ze\.'
    let match = MatchSearch(r, 'b', -5)
    return match
endfunction
function GetSpacesAndLine()
    let line = CurrentLine()
    let spaces = GetSpaces(line)
    return [spaces, Strip(line)]
    let parts = split(line, '^ *\zs\ze\S')
    if len(parts) == 0
        return ['', '']
    elseif len(parts) == 1
        return ['']
endfunction
function IsTwoWords(jsrest)
    return Test(a:jsrest, '^\S+ \S+')
endfunction

function HuntForReplacement2()
    let word = CurrentWord()
    ec word
    if Exists(get(g:snippetdict, word))
        return get(g:snippetdict, word)
    endif

    let regex = '<' . '[' . word[0] . toupper(word[0]) . ']' 
    if strlen(word) > 1
        let chars = SplitChars(word[1:])
        for char in chars
            let regex .= '[a-z]{-}' . toupper(char)
        endfor
    endif
    let regex .= '\w+\(?\C'

    let replacement = MatchSearch(regex, 'bnW', -20)
    if Not(replacement)
        let replacement = MatchSearch(regex, 'nW', 10)
    endif
    if Not(replacement)
        return ' '
    endif

    return replacement
    let replacement = ConditionalAdd(replacement, ')', '\($')
    return replacement

endfunction


function HuntForReplacement()
    let word = CurrentWord()
    if IsSymbol(word)
        call MoveCursorToNextBlock()
        return
    endif

    let regex = '<' . '[' . word[0] . toupper(word[0]) . ']' 
    if strlen(word) > 1
        let chars = SplitChars(word[1:])
        for char in chars
            let regex .= '[a-z]{-}' . toupper(char)
        endfor
    endif
    let regex .= '\w+\(?\C'
    ec regex

    let replacement = MatchSearch(regex, 'bnW', -20)
    if empty(replacement)
        let replacement = MatchSearch(regex, 'nW', 10)
    endif
    if empty(replacement)
        return
    endif

    let replacement = ConditionalAdd(replacement, ')', '\($')

    call ReplaceLine('.', word, replacement)
    call cursor('.', RelativeChar(-1))
endfunction


function ReplaceLine(index, regex, replacement, ...)
    let flags = a:0 >= 1 ? a:1 : ''
    call GetSet(a:index, {s -> Replace(s, a:regex, a:replacement, flags)})
endfunction

function IsSymbol(word)
    return Test(a:word, '^\W')
endfunction
function MoveCursorToNextBlock()
    let index = search('\v^ *(\}|\]|end)', '', Relative(10))
    normal o
endfunction

function SplitChars(s)
    return split(a:s, '\zs')
endfunction

function WrapChange(indexes, a, b)
    let a = a:a
    let b = a:b
    let [top, bottom] = a:indexes
    call append(top - 1, a)
    call append(bottom + 1, b)
endfunction

function String(lines)
    return join(a:lines, "\n")
endfunction
function ConditionalAdd(s, addition, condition)
    if Test(a:condition, a:s)
        return a:s . a:addition
    else
        return a:s
    endif
endfunction
function LoadLibrary(...)
    let libtype = a:0 >= 1 ? a:1 : 'js'
    let file = JSPY(libtype, 'libfile')
    let g:fnlib = ReadJson(file)
    ec file . ' has been loaded.'
endfunction

function PlaceAt(location, lines)
    call append('$', a:lines)
    return
    let index = DoubleEmpty(line('.')) ? line('.') : GetFunctionIndex('W')
    ec index
    "call insert(a:lines, '')
    call append(index, a:lines)
    call cursor(index, 100)
endfunction





nnoremap <leader>o :call OpenBufferGroup('')<left><left>
nnoremap <leader>o :call OpenLocalFile()<cr>
inoremap <leader>o <esc>:call OpenLocalFile()<cr>
function ToClosingTag(word)
    return '</' . a:word . '>'
endfunction

function ToOpeningTag(word, ...)
    let attrs = a:0 >= 1 ? a:1 : ''
    if Not(attrs)
        let attrs = ''
    else
        let attrs = ' ' . attrs
    endif
    return '<' . a:word . attrs . '>'
endfunction
function SpaceAppend(s)
    call setline('.', CurrentSpaces() . a:s)
endfunction


function CursorMover()
    return
endfunction

function FirstWord(s)
    let match = Match(a:s, '^\w+')
    return match
endfunction


function DictAction(line, dict)
    for [k,V] in items(a:dict)
        if Test(a:line, k)
            call V(line)
            return 1
        endif 
    endfor
    return 0
endfunction

function DA1(line)
    let snippet = SmartDittoSnippet()
    call GetSet(line, {s -> spaces . Replace(s, 'd\ze\.', snippet)})
    return
endfunction


function DA2(line)
    let s = a:line[2:]
    call GetSet(Relative(-1), {s -> Replace(Replace(s, '\w\zs\ze\)', ', '), '\ze\)', s)})
    call setline('.', GetSpaces())
endfunction


function GetSmartBlockIndexes()
    return GetContiguousIndexesIBM()
    let start = line('.')
    let currentspaces = CurrentSpaces()
    let upindex = start
    let downindex = start + 1

    if GreaterSpaces(upindex)
        let index = SpaceSearch(currentspaces, 'b')
    endif
endfunction
function BufLoad(destination)
    if !bufloaded(a:destination)
        execute "buffer " . a:destination
        execute "buffer #"
    endif 
endfunction
function InsertFixer()
    function ParserA(x)
        let s = a:x[0]
        let items = split(s, '\v(, ?| )')
        let output = ''
        for item in items
            let output .= DictLine(item, item) . ', '
        endfor
        return output[:-3]
    endfunction
    call ReplaceLine('.', '\{\zs\w+.{-}\ze\}', function('ParserA'))
endfunction
function DictLine(a, b)
    return Quotify(a:a) . ': ' . a:b 
endfunction
function NameMaker(line)
    let [p1, p2, suffix, capitalize] = JSPY('p1', 'p2', 'suffix', 'capitalize')
    let namestatement = CreateName(a:line, capitalize)
    let start = namestatement . p2
    if Not(StartsWith(namestatement, 'func'))
        let start = p1 . ' ' . namestatement . p2
    endif
    return start
endfunction
function GrepFinder(s)
    let [extension, query] = SplitOnce(a:s)
    let cmd = "grep " . "'" . query . "' " . "*." . extension
    ec cmd
    let raw = systemlist(cmd)
    let files = Mapped(raw, {s -> Match(s, '\S*\ze:')})
    ec files
    return 
    if open
        call OpenBufferGroup(files)
    endif
endfunction
function Commander(method, ...)
    let method = a:method
    let args = a:000
    let cmd = method . ' '
    if method == 'cp'
        let cmd .= args[0] . ' ' . args[0] 
    elseif method == 'cp'
        let cmd .= args[0] . ' ' . args[0] 
    elseif method == 'cp'
        let cmd .= args[0] . ' ' . args[0] 
    elseif method == 'cp'
        let cmd .= args[0] . ' ' . args[0] 
    endif
    execute cmd
endfunction
iab pp from pprint import pprint

function EditDict(s)
    let dict = ReadJson('known.json')
    let newdict = CreateDictFromString(a:s)
    call extend(dict, newdict)
    call WriteJson('known.json', dict)
endfunction
function CreateDictFromString(s)
    let dict = {}
    let parts = split(a:s, '  ')
    for item in parts
        let [a,b] = SplitOnce(item)
        let dict[a] = b
    endfor
    return dict
endfunction

function TwoOrAt()
    return '2'
    if CurrentExtension() == 'txt'
        return '2'
    endif
    return GetChar() == 1 ? '@' : '2'
endfunction

function LineBreaker()
    let lang = CurrentExtension()
    if lang == 'js'
        return '/* -------------------------------------- */'
    elif lang == 'py'
        return '# -------------------------------------- #'
    endif
endfunction


function ThreeOrHash()
    return '3'
    if CurrentExtension() == 'txt' || CurrentExtension() == 'js'
        return '3'
    endif
    return GetChar() == 1 ? '#' : '3'
endfunction

function ToPasteBuffer(s)
    let @" = a:s
endfunction


set autoread
function Createabrev(s)
    let line = Strip(CurrentLine())
    let s = Join('iab', a:s, line)
    call AppendVim(s)
endfunction
function Varialize(indexes)
    function Parser(s)
        
    endfunction
    call GetSetLines(a:indexes, function('Parser'))
    
endfunction
iab -f __file__
function GetIndexesHelper(indexmode)

   let [indexes, flag] = GetVisualIndexes('flag')
   if empty(flag)
       return indexes
   endif

   if a:indexmode == 'code'
       return GetCodeIndexes()
   elseif a:indexmode == 'smartobject'
       return GetSmartObjectIndexes()
   elseif a:indexmode == 'trycatchindex'
       return GetTryCatchIndexes()
   elseif a:indexmode == ''
       return GetCodeIndexes()
   elseif a:indexmode == 'nolinebreak'
       return GetNolinebreakIndexes()

   elseif a:indexmode == 'smartcontiguous'
       return GetSmartContiguousIndexes()

   elseif a:indexmode == 'contiguous'
       return GetContiguousIndexesIBM()
   elseif a:indexmode == 'smart'
       return GetSmartIndexes()
   elseif a:indexmode == 'line'
       return line('.')
   else
       return GetFullVisualIndexes(a:indexmode)
endfunction

function InvivoAppend(destination, lines)
    call BufLoad(a:destination)
    "ec 'Appending to: ' . a:destination
    call appendbufline(a:destination, '^', a:lines)
endfunction
nnoremap <leader>h :help 
nnoremap <leader>m :messages 
function AlwaysTrue(...)
    return 1
endfunction
function TextGetter(a, b)
   let a = a:a
   let b = a:b
   return join(getbufline(bufnr('%'), a, b), "\n")
endfunction


function GetNolinebreakIndexes()
    let up = search('\v^ *$', 'bnW')
    let down = search('\v^ *$', 'nW')
    let up += 1
    if down < 1
        let down = line('$')
    else
        let down-= 0
    endif
    return [up, down]
endfunction

function ToFunction(fn)
    return IsFunction(a:fn) ? fn : function(a:fn)
endfunction

function ArgHandler(arr)
    function P(item)
        let item = a:item
        if item == 'upline'
            return getline(Relative(-1))

        elseif item == 'line'
            return CurrentLine()

        elseif item == 'downline'
            return getline(Relative(1))

        elseif item == 'pos'
            return CurrentLine()
        endif
    endfunction
    return Mapped2(a:arr, P)
endfunction

function ConditionHandler(condition, line)
    let line = a:line
    if IsString(a:condition)
        return Test(line, a:condition)
    else
        return a:condition(line)
    endif
endfunction

function IsObjectBlock()
    return Test(CurrentLine(), ':$')
endfunction
set backspace=indent,eol,start


inoremap \] <esc> :call GoBackwards()<cr>a
inoremap ]\ <esc> :call GoForwards()<cr>a
function EnterBlockExpression()
    let start = CurrentLine() =~ " $" ? "" : " "
    let obj  = "{\<esc>o},\<esc>\<s-o>"
    let objcomma  = "{\<esc>o})\<esc>\<s-o>"
    let norm = "{\<esc>o}\<esc>\<s-o>"
    let arr = "[\<esc>o]\<esc>\<s-o>"
    let par = "{\<esc>o})\<esc>\<s-o>"
    "let newp = "\<esc><left>xi Promise((resolve, reject) => {\<esc>o})\<esc>\<s-o>"
    "let smap = "\<esc><left>xi Promise((resolve, reject) => {\<esc>o})\<esc>\<s-o>"


    "let dict = {
        "\ 'map': "(${$1[0:-2]} => {\n})",
    "\ }
    let s = ''

    let line = Strip(CurrentLine())
    "let match = CurrentWord()
    "ec line
    "ec match
    "let dollar = 'items'
    "if !has_key(dict, match)
        "let regex = 'foooo'
        "let match = Match(line, regex)
        "if Not(match)
            "ec 'no match'
            "return
        "endif
    "endif
"
    "let snippet = get(dict, match)
    "let snippet = Replace(snippet, "\n", "\\<esc>o")
    "let args = [dollar]
    "let regex = '\$(\{.{-}\}|\d+)'
    "let Parser89 = {x -> function('PySnippetTemplater')(x, args, '')}
    "let snippet = Sub(snippet, regex, Parser89)
    "ec snippet
    "return snippet

    if Test(line, 'red *$')
        let reds = uce
        let reds = "uce((acc, item) => {\<esc>o}, {})\<esc>\<s-o>"
        let s = reds
    endif

    if Test(line, '\=\> *$')
        let s = par 

    elseif Test(line, ', *$')
        let s = objcomma 

    elseif Test(line, '\) *$')
        let s = norm 

    elseif Test(line, ': *$')
        let s = obj
    elseif expand('%:e') == 'vue'
        let s = norm
    elseif Test(line, '^\w{-}s>')
        if !Test(line, '\=')
            let start .= '= '
        endif
        let s = arr
    else
        let s = norm
    endif
    return start . s
endfunction




function ReverseSplit(s)
    let parts = split(Strip(a:s))
    if len(parts) == 0
        return ['', '']
    elseif len(parts) == 1
        return ['', parts[0]]
    else 
        return [join(parts[0:-2]), parts[-1]]
    endif
endfunction




let g:z = {
    \ 'ffoo': {
        \'a': 'b',
    \ }
\}
    

function GoForwards()
    let index = search('\v\}\)?,? *$', '', Relative(3))
    if index == 0
        ec getpos('.')
        if EndOfLine()
            return 
        else
            call cursor(Relative(0), 1000)
        endif
        return
    endif
    let spaces = CurrentSpaces()
    let newindex = Relative(1)
    let line = getline(index + 1)

    if strlen(Strip(line)) == 0
        call setline(newindex, spaces)
        call cursor(newindex, 1000)
    else
       call append(index, spaces)
       call cursor(newindex, 1000)
    endif
endfunction

function GoBackwards()
    let index = search('\v\}\)?,? *$', 'b', Relative(-3))

    if index == 0
        ec getpos('.')
        if EndOfLine()
            return 
        else
            call cursor(Relative(0), 1000)
        endif
        return
    endif
    let spaces = CurrentSpaces() . '    '
    let newindex = Relative(-1)
    let line = getline(newindex)
    if strlen(Strip(line)) == 0
       call setline(newindex, spaces)
        call cursor(newindex, 1000)
    else
       call append(newindex, spaces)
        call cursor(index, 1000)
    endif
endfunction

nnoremap zx :call VueManager('')<cr>
function VueManager(s)
   let dict = {
   \    'm': 'ShuntToMounted,
   \    'f': 'ShuntToMethods,
   \    'c': 'ShuntToComputed,
   \    'd': 'ShuntToData',
   \ }

   let match = get(dict, key)
   let indexes = GetVueIndexes()
   let s = ''
   if !empty(match)
       let s = function(match)(indexes)
   endif

   if !empty(s)
       call move it
   endif
endfunction
function TagAndPartsAndLine(line)
    let parts = split(a:line, '\v(\=)@<! (\=)@!')
    if len(parts) == 1
        call add(parts, '')
    endif
    return [parts[0], parts[1:], join(parts[1:])]
endfunction
function LogicManagerObjectHandler(parts, dict)
    let noappend = 0 
    if has_key(a:dict, 'snippet')
        let snippet = a:dict.snippet
        let suffix = '}'
        let cursorpos = 0
        let index = 0
        if has_key(a:dict, 'noappend')
            let noappend = 1 
            let suffix = ''
        endif

        if !has_key(a:dict, 'functions')
            let a:dict.functions = 'Identity'
        endif
        if IsString(a:dict.functions)
            let replacement = FunctionGetter(a:dict.functions)(join(a:parts))
            let snippet = Replace(snippet, '\$' . index, replacement)
        else
            for fn in a:dict.functions
                let part = index < len(a:parts) ? a:parts[index] : ''
                let replacement = FunctionGetter(fn)(part)
                let snippet = Replace(snippet, '\$' . index, replacement)
                let index += 1
            endfor
        endif
    elseif has_key(a:dict, 'template')
      let snippet = a:dict.template
      let suffix = a:dict.suffix
      let cursorpos = has_key(a:dict, 'cursor') ? a:dict.cursor : 'null'
    endif

      if snippet =~ '%c'
          let cursorpos = GetCursorFromSnippet(snippet)
          let snippet = Replace(snippet, '\%c', '')
      endif
    ec cursorpos
    call SnippetMaker(snippet, suffix, noappend, cursorpos)
    return 1
endfunction
function FunctionGetter(s)
    return IsFunction(a:s) ? a:s : function(a:s)
endfunction

function SnippetMaker(snippet, ...)
    let suffix = a:0 >= 1 ? a:1 : '}'
    let noappend = a:0 >= 2 ? a:2 : 0
    let cursorpos = a:0 >= 3 ? a:3 : 0
    let suffix = IsString(a:snippet) && a:snippet =~ '{$' ? '}' : ''
    let lines = IsArray(a:snippet) ? a:snippet : split(a:snippet, "\n")
    if len(lines) == 1 && Not(noappend)
        call insert(lines, '    ', 1)
    endif
        
    if Exists(suffix)
        call add(lines, suffix)
    endif
    call TextPlacement(lines)
    if Exists(cursorpos)
        if IsArray(cursorpos)
            call cursor(cursorpos[0], cursorpos[1])
        else
            call cursor(line('.'), match(lines[0], '>') + 1)
        endif
    else
        call cursor(line('.') + 1, 100)
    endif
endfunction

function AppendMyShortCuts(s)
    let items = split(a:s)
    let s = ''
    for i in range(0, len(items) - 1, 2)
        let [a,b] = [items[i], items[i + 1]]
        let s .= '    ' . Quotify(a, 'dq') . ': ' . Quotify(b, 'dq') . ",\n"
    endfor
    let s = s[:-2] . "\n}"
    let s = split(s, "\n")
    call setbufline('myshortcuts.json', '$', s)

endfunction

function GrabTextFromFile()
    let lines = readfile('grab.txt')
    call ToPasteBuffer(lines)
endfunction

function ChangeDir(...)
    let tag = a:0 >= 1 ? a:1 : 'cwf'
    let dict = {
    \    'downloads': "/mnt/chromeos/MyFiles/Downloads",
    \    'save': "/mnt/chromeos/GoogleDrive/MyDrive/CWF",
    \    'drive': "/mnt/chromeos/GoogleDrive/MyDrive/",
    \    'cwf': '/home/kdog3682/CWF',
    \}
    let dir = get(dict, tag, get(dict, 'cwf'))
    execute "cd " . dir
endfunction

function BringToRoot()
    saveas! ~/CWF/root.js
endfunction
function RelativeLineChar(n)
    let line = CurrentLine()
    let length = strlen(line)
    return length + a:n
endfunction
function GrabLocal(s)
    return 
endfunction

function SuperHelperHelper(s)
    let a = ''
    let b = ''
    if empty(a:s)
        return ''
    elseif Test(a:s, '\w+ \w+')
        let [a, b] = SplitOnce(a:s)
        if a == 'def'
            return a:s
        elseif a == 'args'
            let b = ArrayExpand(b)
        else
            let b = Quotify(b)
        endif
    elseif Test(a:s, '^\w+$')
        let a = a:s
        let b = 'True'
    elseif Test(a:s, '^\w+ \=')
        return a:s
    else
        let [tag, rest] = SplitOnce(a:s)
        if tag == 'regex'
            let a = tag
            let b = Quotify(rest)
        endif
    endif
    return 'h.' . a . ' = ' . b
endfunction

function DollarReplace(el)
    let s = a:el
    if Test(s, '^\d+$')
        return s
    elseif Test(s, '^\$')
        let s = s[1:]
    else
        return Quotify(s)
    endif
endfunction
iab tl tl( )<left><left>

function MoveCursor()
    
endfunction
function ZBack()
    
endfunction


function Multiply(s, ...)
    let s = a:s
    let n = a:0 >= 1 ? a:1 : 2
    for i in range(0, n - 2)
        let s .= s
    endfor
    return s
endfunction



"inoremap w] <esc>:call JumpToNextBlock()<cr>i
"inoremap w] <esc>:call HtmlHandler()<cr>a
inoremap w] <esc>:call ExpansionActions()<cr>a
nnoremap <leader>e :call EditManager('')<left><left>

function EditManager(s)
    let [a,b] = SlashSplit(a:s)
    call ExecuteReplace(a, b)    
endfunction


function Functionize(indexes, arg)
    call GetSetLines(a:indexes, {s -> '    ' . s})
    call append(a:indexes[1], '}')
    call append(a:indexes[0] - 1, 'function ' . a:arg . '() {')
endfunction



" Implement smart completion magic...
function SmartComplete ()
    " Remember where we parked...
    let cursorpos = getpos('.')
    let cursorcol = cursorpos[2]
    let curr_line = getline('.')

    let curr_pos_pat = '\%' . cursorcol . 'c'
    "ec curr_pos_pat
    "ec matchstr(curr_line, '\k' . curr_pos_pat)
    ec HuntForReplacement2()
    "ec hfraa bar eater
    return HuntForReplacement2()

    " Tab as usual at the left margin...
    if curr_line =~ '^\s*' . curr_pos_pat
        return "\<TAB>"
    endif

    " How to restore the cursor position...
    let cursor_back = "\<C-O>:call setpos('.'," . string(cursorpos) . ")\<CR>"

    " If a matching smart completion has been specified, use that...
    for [left, right, completion, restore] in s:completions
        let pattern = left . curr_pos_pat . right
        if curr_line =~ pattern
            " Code around bug in setpos() when used at EOL...
            if cursorcol == strlen(curr_line)+1 && strlen(completion)==1
                let cursor_back = "\<LEFT>"
            endif

            " Return the completion...
            return completion . (restore ? cursor_back : "")
        endif
    endfor

    " If no contextual match and after an identifier, do keyword completion...
    if curr_line =~ '\k' . curr_pos_pat
        return HuntForReplacement2()
    else
        return "\<TAB>"
    endif
endfunction

"inoremap <silent> <TAB>   <C-R>=SmartComplete()<CR>



let s:NONE = ""

"call AddCompletion(  '{',   s:NONE,  "}",                      1    )
"call AddCompletion(  '{',   '}',     "\<CR>\<C-D>\<ESC>O",     0    )
"call AddCompletion(  '\[',  s:NONE,  "]",                      1    )
"call AddCompletion(  '\[',  '\]',    "\<CR>\<ESC>O\<TAB>",     0    )
"call AddCompletion(  '(',   s:NONE,  ")",                      1    )
"call AddCompletion(  '(',   ')',     "\<CR>\<ESC>O\<TAB>",     0    )
"call AddCompletion(  '<',   s:NONE,  ">",                      1    )
"call AddCompletion(  '<',   '>',     "\<CR>\<ESC>O\<TAB>",     0    )
"call AddCompletion(  '"',   s:NONE,  '"',                      1    )
"call AddCompletion(  '"',   '"',     "\\n",                    1    )
"call AddCompletion(  "'",   s:NONE,  "'",                      1    )
"call AddCompletion(  "'",   "'",     s:NONE,                   0    )

function GetCursorFromSnippet(snippet)
    let lines = IsArray(a:snippet) ? a:snippet : split(a:snippet, "\n")
    for [i, line] in Enumerate(lines)
        if line =~ '%c'
            let ch = match(line, '%c')
            "ec i + 1
            "ec ch
            return [Relative(i), ch]
        endif
    endfor
endfunction

function InternalShunt()
    let indexes = GetInternalBlockIndexes()
    ec indexes
    let lines = DedentLines(GetLines(indexes))
    call DeleteLines(indexes)
    call append('^', lines)
endfunction
function GetInternalBlockIndexes()
    let up = search('\v \= [\[\{]$', 'bn')
    let spaces = GetSpaces(getline(up))
    let down = search('\v^' . spaces . '[\}\]]', 'n')
    return [up, down]
endfunction

function CssMaker(s)
    let parts = split(a:s, '\v  +|, *')
    let store = []
    for part in parts
        let [a,b] = SplitOnce(part)
        call add(store, CssGetter(a) . ': ' . b)
    endfor
    return store
endfunction
function CssHandler()
    if GetLang() == 'py'
        return 
    endif
    let [spaces, line] = GetSpacesAndLine()
    let parts = split(line, '\v  +')
    let store = []
    for part in parts
        let [a,b] = SplitOnce(part)
        let product = spaces . CssGetter(a) . ': ' . b . ';'
        call add(store, product)
    endfor

    call setline('.', store[0])
    call append('.', store[1:])
    call cursor('.', 100)
endfunction
inoremap <leader>c <esc>:call CssHandler()<cr>

function VimChromeBookmarks(s)
   if !exists('g:bookmarkdict')
       let g:bookmarkdict = ReadJson('vimbookmarks.json')
    endif
      let bookmark = g:bookmarkdict[a:s]
      execute "!xdg-open " . bookmark
endfunction

function CssGetter(s)
   if !exists('g:cssdict')
       let g:cssdict = ReadJson('css-abrev.json')
    endif
   if has_key(g:cssdict, a:s)
       return g:cssdict[a:s]
    else
        return a:s
    endif
endfunction


function Templater(template, val)
    if IsArray(a:val)
        return Replace(a:template, '\$(\d+)', {x -> a:val[x[1]]}, 'g')
    endif
    return Replace(a:template, '\$0', a:val, '')
endfunction



function GetTryCatchIndexes()
    let spaces = strlen(CurrentSpaces())
    let a = spaces - 4
    let b = 0
    let c = 1
    let d = spaces - 4
    let up = search('\v' . '^' . RegexSpaces(a,b) . '\S', 'bn') + 1
    let down = search('\v' . '^' . RegexSpaces(c,d) . '\S', '') - 1
    return [up, down]

endfunction

function RegexSpaces(a,b)
    if a:b == 0
        return ' {' . a:a . ',' . a:a . '}'
    endif
    return ' {' . a:a . ',' . a:b . '}'
endfunction
iab aobj {"a": 1, "b": 2, "c": 3}
iab bobj {"d": 44, "a": 11, "b": 22, "c": 33}
iab ifmain if __name__ == "__main__":

function PyFix(i)
    let start = a:i[0]
    let lines = GetLines(a:i)
    for i in Ranger(lines)
        let line = lines[i]
        if Test(line, '^ *(elif|while|if|for)') && !Test(line, ':$')
            let lines[i] = line . ':'
        elseif Test(line, '^ *foooooo')
            let lines[i] = ''
            for i in Ranger(lines)
                let lines[i] = IndentLine(lines[i])
            endfor
            call insert(lines, Match(line, 'foo\zs\w+') . '():'
        endif
    endfor
        
    let text = join(lines, "\n")
    let dict = { 
     \   'less than': '<',
     \   '\bis\b': '==',
    \ }
    let fndict = {
        \'for kv(\w+)': 'for k,v in $1.items()',
        \'(\S+) has (\S+)\ze[\n:]': "test('$2', $1)",
        \'(\w+)\.(\w+)\ze[,\n\]\)\} \:]': "$1.get('$2')",
    \}

    let text = Dreplace(text, dict)
    let text = Freplace(text, fndict)
    call setline(start, SplitLines(text))
endfunction

function SplitLines(s)
    return split(a:s, "\n")
endfunction
function GetText(i)
    return join(GetLines(a:i), "\n")
endfunction
function Freplace(s, dict)
    let s = a:s
    for [k,v] in items(a:dict)
        let s = Sub(s, k, {x -> function('Templater')(v, x)})
    endfor
    return s
endfunction


inoremap wp <esc>:call PySnippet()<cr>a
function GetSpacesTagLineAndParts()
    let [spaces, line] = GetSpacesAndLine()
    let [tag, line] = SplitOnce(line)
    let parts = []
    if Exists(line)
        let parts = split(line)
    endif
    return [spaces, tag, line, parts]
endfunction
function StandardTemplater(s, parts)
    return Sub(a:s, '\$(\d+)', {s -> s[1] == '0' ? function('Quotify')(join(a:parts)) : function('Quotify')(a:parts[s[1]])})
endfunction
function ToInteger(x)
    return IsNumber(a:x) ? a:x : strlen(a:x)
endfunction


function P99(s, parts, line)
    ec a:s
    let s = a:s[1]
    ec s
    if s == '0'
        return Quotify(a:line)
    elseif s - 1 < len(a:parts)
        ec a:parts
        return Quotify(a:parts[s - 1])
    else
        return ''
    endif
endfunction

function AddParams(s)
    if Exists(a:s)
        return ', ' . a:s
    else
        return ''
    endif
endfunction
function PrepareFileForCreation(file)
    let lang = GetLang(a:file)
    let lines = get(g:prepfiledict, lang)
    call WriteFile(a:file, lines)
endfunction
function StyleShunt(s)
    let [name, val] = SplitOnce(a:s)
    let store = CssMaker(val)
    "let name = Match(CurrentLine(), "class: '\zs[\w-]+\ze'")
    "if Not(name)
        "let name = 'sam'
    "endif

    let store = Brackify('.' . name, store)
    ec store
    call AppendFile('styles2.css', store)
    
endfunction
function CopyFile(file, to)
   let file = FileGetter(a:file)
   let to = Exists(a:to) ? a:to : IncrementFileNumber(file)
   let lines = readfile(file) 
   call WriteFile(to, lines)
   call OpenBuffer(to)
endfunction
function IncrementFileNumber(s)
    let p = Replace(a:s, '\d+', {x -> x[0] + 1})
    if p == a:s
        let p = a:s . '1'
    endif
    return p
endfunction


nnoremap <f6> :w<cr> :call EnterBlockExpression()<cr>
function PreviousWord(line)
    
endfunction

function Brackify(name, items)
    let items = IndentAll(a:items)
    call insert(items, a:name . ' {')
    call add(items, '}')
    return items
endfunction

function F6ify(s)
    let name = GetFunctionName()
    let command = 'nnoremap <f7> :w<cr>:call ' . name . '(''' . a:s . ''')' . '<cr>'
    call AppendVim(command)
endfunction
nnoremap <f6> :call F6ify('')<left><left>
nnoremap <f7> :w<cr>:call StyleShunt('d grid  gtc 1fr')<cr>
function Setter(s)
    let [key, val] = SplitOnce(a:s)
    if key == 'lib'
        if !Test(val, 'lib$')
            let val .= '.lib'
        endif
        let g:fnlib = ReadJson(val)
        ec 'Setting g:fnlib to ' . val
    endif
endfunction
iabbrev <silent> cl console.log()<left><C-R>=Eatchar('\s')<CR>
iabbrev <silent> pr print()<left><C-R>=Eatchar('\s')<CR>
iabbrev <silent> thr throw ""<left><C-R>=Eatchar('\s')<CR>

let g:lastworddict = {
  \  'lx': "$0 (x) => {\n    $c\n})",
  \  'aasadf': "",
  \  'aasdaaf': "",
  \  'hc': "$0<!-- $c -->",
  \  'redkv': "$0reduce((acc, [k,v], i) => {\n    $c\n    return acc\n}, {})", 
  \  'redabo': "$0reduce((acc, [a,b], i) => {\n    $c\n    return acc\n}, {})", 
  \  'redabddo': "$0reduce((acc, [a,b], i) => {\n    $c\n    return acc\n}, {})",
  \  'redo': "$0reduce((acc, ${$1[:-2]}, i) => {\n    $c\n    return acc\n}, {})",
  \  'red': "$0reduce((acc, item) => {\n    $c\n    return acc\n}, {})",
  \  'map': "$0map((item) => {\n    $c\n})",
  \  'div': "$0<div class=\"\">$c</div>", 
  \  'p': "$0<p class=\"\">$c</p>", 
  \  'button': "$0<button @click=\"\">$c</button>", 
  \  'filter': "$0filter((acc, item) => {\n    $c\n})",
  \  'reds': "$0reduce((acc, ${$1[:-2]}, i) => {\n    $c\n    return acc\n}, '')",
  \  'redst': "$0reduce((acc, item, i) => {\n    $c\n    return acc\n}, new SimpleStorage())",
  \  ':'     : "$0 {\n    $c\n},",
  \  ','     : "$0() {\n    $c\n},",
  \  ',.'     : "$0 {\n    $c\n},",
  \  'default'     : "$0 {\n    $c\n}",
  \  'ls'     : "$0 (s) => {\n    $c\n})",
  \  'lkv'     : "$0 (k, v) => {\n    $c\n})",
\ }

function LastWordManager()
    let [spaces, line] = GetSpacesAndLine()
    let parts = Filtered2(split(line, '\v\d+|\W+'))
    let lastword = CurrentWord()
    let sline = line[0: -1 * (strlen(lastword) + 1)]
    let args = len(parts) > 1 ? [parts[-2]] : []
    let result = SuperTemplater(spaces, lastword, g:lastworddict, args, sline)
    if result > - 1
        return
    endif

    let lastElement = trim(line)[-1:-1]
    let args = ['boop', 'bop']
    let result = SuperTemplater(spaces, lastElement, g:lastworddict, args, line)
    if result > -1
        return
    endif

    let result = SuperTemplater(spaces, 'default', g:lastworddict, args, line)

endfunction




function DebugBlock(indexes)
    for i in Ranger(a:indexes)
        let line = getline(i)
        let match = Match(line, '(\w+|\[.{-}\])\ze \=')
        let spaces = GetSpaces(line)
        if Exists(match)
            let message = spaces . Logger('"Debugging ' . match . ': ' . (i  + 1). '", ' . match)
            call append(i, message)
        endif
    endfor
endfunction
function DebugLine()
    let index = Relative(-1)
    let spaces = CurrentSpaces()
    let message = spaces . JSPY('consoleStart') . '"Debugging on line ' . (index + 1) . '."' . JSPY('consoleEnd')
    call append(index, message)
endfunction

function Filtered2(items, ...)
    let Parser = a:0 >= 1 ? a:1 : 'Exists'
    return filter(a:items, Parser . '(v:val)')
endfunction

function SuperTemplater(spaces, key, dict, parts, line)
    let snippet = get(a:dict, a:key)
    if Not(snippet)
        return -1
    endif
    let regex = '\$(\{.{-}\}|\d+)'
    let Parser89 = {x -> function('PySnippetTemplater')(x, a:parts, trim(a:line))}
    let snippet = Sub(snippet, regex, Parser89)
    let cursorpos = GetCursorFromStringSnippet(snippet)
    let snippet = Replace(snippet, '\$c', '')
    call TextPlacement(SplitLines(snippet), a:spaces)
    call SetCursor(cursorpos, a:spaces)
endfunction
inoremap w, <esc>:call LastWordManager()<cr>a

iab <silent> okeys Object.keys()<left><C-R>=Eatchar('\s')<CR>
iab <silent> ovals Object.values()<left><C-R>=Eatchar('\s')<CR>
iab <silent> oents Object.entries()<left><C-R>=Eatchar('\s')<CR>
iab snsn '\n\n\'
iab snsn + '\n\n' +
nnoremap b :call DebugLine()<cr>
function ZoopBar(arg)
   return Match(a:arg, '\w{-}\zes?$')
endfunction


function ReplaceArgsZero(line, replacement)
    return Sub(a:line, '\.\.\.args|args\[\d+\]', a:replacement)
endfunction

function IsStringNumber(s)
    return Test(a:s, '^\d+$')
endfunction
"function ReplaceLine(i, regex, replacement)
    "call GetSet(a:i, {s -> Replace(s, regex, replacement)})
"endfunction

nnoremap <f5> :call WriteDebugMessage()<cr><down>
iab <silent> cmsv cm.setValue()<left><C-R>=Eatchar('\s')<CR>
iab cmgl const line = cm.getLine(cm.getCursor().line)
iab cmgli let index = cm.getCursor().line
function OpenFiles(files)
    for file in a:files
        ec file
        execute "!xdg-open " . file
   endfor 
endfunction

function CloseAllExcept(...)
    let query = a:0 >= 1 ? a:1 : 'vuecm5|helpers.js'
    for buffer in GetVisibleBuffers()
        if Test(buffer, query)
            continue
        endif
        call CloseBuffer(buffer)
    endfor
endfunction
iab <silent> msg () => this.message = "",<left><left><C-R>=Eatchar('\s')<CR>
function SmartSplit(s, ...)
    let delimiter = a:0 >= 1 ? a:1 : '  '
    if Test(a:s, delimiter)
        return split(a:s, delimiter)
    else
        return SplitOnce(a:s, delimiter[0])
    endif
endfunction


function EndOfLine()
    let pos = '.'
    let p = getpos(pos)[2] == strlen(getline(pos))
    return p
endfunction



nnoremap l :call SmartConsoleLog()<cr>A<left>
nnoremap l :call TopComment()<cr>A 
iab <silent> sn '\\n'<C-R>=Eatchar('\s')<CR>
iab <silent> sn '\n'<C-R>=Eatchar('\s')<CR>
iab <silent> snsn '\n\n'<C-R>=Eatchar('\s')<CR>
iab <silent> vimf "/home/kdog3682/.vimrc"<C-R>=Eatchar('\s')<CR>


    let g:fdict = {
        \ 'foo': 'howd',
        \ 'search': 'match',
        \ 'findall': 'matches',
        \ 'mreplace': '[text, store]',
    \}


function ConsoleLogTheLine()
    let prefix = 'let '
    "console.log(foo)
    let line = getline('.')
    if Test(line, '^ *console\.log') 
        let line = Replace(line, '^ *\zsconsole\.log.{-}(\w+)', {x -> prefix . get(g:fdict, x[1], 'product') . ' = ' . x[1]})[:-2]
        call setline('.', line)
    else
        call GetSetLines('.', 'Logger')
    endif
endfunction
iab flib const fetch = require("node-fetch")
iab hlib const JSHINT = require("./jshint.js")
function GetSmartContiguousIndexes()
    let upindex = SprawlIndex('[\(\[\{] *$')
    let spaces = GetSpaces(getline(upindex))

    let spaces = GetSpaces(getline(upindex))
    let indent_pat = '^' . matchstr(getline(upindex), '^\s*') . '\S'
    let downindex = search('\v^' . spaces . '\S', 'nW')
    if downindex < 0
        let downindex = line('$')
    endif
    return [upindex, downindex]

endfunction
function SimpleTrialify(s)
    let prefix = '() => '
    let suffix = ''
    return prefix . a:s . suffix
    return BeforeAndAfter(a:s, prefix, suffix)
endfunction

function Trialify(s)
    let prefix = 'trial(() => '
    let suffix = ')'
    return prefix . a:s . suffix

    "let suffix = ', ' . Quotify(a:s) . ' )'
    return BeforeAndAfter(a:s, prefix, suffix)
endfunction
function Tradfialify(indexes)

    let prefix = 'trial( () => '
    let suffix = ' )'
    call GetSetLines(a:indexes, {s -> function('BeforeAndAfter')(s, before, after)})
endfunction
function BeforeAndAfter(s, a, b)
    return a:a . a:s . a:b
endfunction




function CopyBlock2(...)
    let [a,b] = a:0 >= 1 ? a:1 : GetCodeIndexes()
    let text = TextGetter(a, b)
    call ToPasteBuffer(text)
endfunction


function AddToLdrDict(...)
    if CurrentFile() != '/home/kdog3682/.vimrc'
        ec 'not vim'
        return
    endif
    let [a,b] = a:0 >= 1 ? SplitOnce(a:1) : ['', '']  
    let name = GetFunctionName()
    if Exists(name)
        let b = name
    endif

    if Not(a)
        ec name
        let a = tolower(Replace(name, '[a-z]\C', '', 'g'))
    endif

    let b = "function('" . b . "')"
    let index = search('\v^ *"\\ *''ldr-start''', '')
    call SmartAppend(index, DictEntry(a, b))
    w
endfunction

function AddToVSDict(...)
    let [a,b] = a:0 >= 1 ? SplitOnce(a:1) : ['', '']  
    let name = GetFunctionName()
    if Exists(name)
        let b = name
    endif
    if Not(a)
        ec name
        let a = tolower(Replace(name, '[a-z]\C', '', 'g'))
    endif

    let b = "{'fn': function('" . b . "'), 'i': 'code'}"
    let index = search('\v^ *"\\ *''vs-start''', '')
    ec index
    call SmartAppend(index, DictEntry(a, b))
endfunction

function DictEntry(a, b)
    return '\    ' . Quotify(a:a) . ': ' . a:b . ","
endfunction

function SmartAppend(i, v)
    let spaces = GetSpaces(getline(a:i))
    call append(a:i, spaces . a:v)
endfunction

function SetSearchContext(s)
    if Exists(a:s)
        ec 'Setting Search contect as: ' . a:s
        let b:searchcontext = a:s
    else
        let b:searchcontext = 0
    endif
endfunction

function FuncRegex(s)
    let regex = '(const|def|class|async function|function) ' . a:s 
    return regex
endfunction
let g:qdict = {
    \ 'c': '    constructor\(',
    \ 'r': '    run\(',
    \ 'vl': 'class vuelines',
    \ 'le': 'class LineEdit',
    \ 'rsdf': '    run\(',
    \ 'cii': '    constructor\(',
\}
function FourSearch(...)

    "if exists('b:searchcontext') && Exists(b:searchcontext)
        "let startingIndex = search(FuncRegex(b:searchcontext))
        "if startingIndex <= 0
            "ec 'no starting index'
            "return
        "endif
    "endif

    
    let query = a:0 >= 1 ? a:1 : 'foursearch' 
    if Not(query)
        let query = ''
        return
    endif
    let query = Sub(query, '\(', '\\(')
    let query = get(g:qdict, query, FuncRegex(query))
    "let query = '^ *let Cmd = "'
    "let extra = '/eI'

    let extra = ''
    let query = Sub(query, '\=', '\\=')
    ec query
    let cmd = "normal! /\\v^ *" . query . extra . "\<cr>"
    try 
        execute cmd
    catch
        ec 'asdf'
    endtry
endfunction

function Trial2(indexes)
    let spaces = GetSpaces(getline(a:indexes[0]))
    let icount = 0
    let store = []
    let lines = GetLines(a:indexes)
    for line in lines
        call add(store, spaces . '    ' . Quotify(trim(line))  . ',' )
        call add(store, spaces . '    ' . SimpleTrialify(trim(line)) . ',' )
    endfor
    call add(store, spaces . ')')
    call insert(store, spaces . 'trial(')

    for i in Ranger(a:indexes)
       call deletebufline('%', a:indexes[0])
    endfor

    call append(a:indexes[0] - 1, store)


endfunction
nnoremap 4 :call FourSearch('')<left><left>

function CopyUpLine(...)
    let [spaces, line] = GetSpacesAndLine()
    let template = getline(Relative(-1))
    let parts = split(line)
    let regex = split(parts[0], '/')
    let items = parts[1:]
    let store = []
    let product = ''
    for item in items
        let product = template
        let parts = split(item, '/')
        for i in range(len(parts))
            let product = Parser233(product, regex[i], parts[i], 'g')
        endfor
        call add(store, product)
    endfor
    call setline('.', store[0])
    call append('.', store[1:])
    return 
endfunction



function RemoveAllComments(indexes)
    for i in Ranger(a:indexes)
        if IsComment(getline(i))
            call DeleteLine(i)
        endif
    endfor
endfunction


function NewDocTest()
    let [spaces, line] = GetSpacesAndLine()
    let line = getline('.')
endfunction

function GetSmartObjectIndexes()
    let upindex = search('\v[\{\[] *$', 'bnc')
    let spaces = GetSpaces(getline(upindex))
    let downindex = search('\v^' . spaces . '[\}\]]', 'n')
    return [upindex, downindex]
endfunction



"https://github.com/maylynnml/maylynnml.github.io"

let g:vuedict = {
    \ 'methodRE': 'methods\: \{',
    \ 'dataRE': 'const vueData \= \{',
\}
function AppendToVueMethods()
    let name = GetFunctionName()
    call SetPosition(line('$') - 400)
    let index = Search('^ *' . g:vuedict.methodRE)
    let spaces = GetSpaces(getline(index)) . '    '
    call append(index, spaces . name . ',')
endfunction

function AppendToVueData(...)
    let s = a:0 >= 1 ? Replace(a:1, ' ', ': ') : GetImplicitVueData() 
    call SetPosition(line('$') - 200)
    let index = Search('^ *' . g:vuedict.dataRE)
    ec index
    let spaces = GetSpaces(getline(index)) . '    '
    call append(index, spaces . s . ',')
endfunction


" it is safer to be underwhelming at the start. a butchered version. how many idols can a nation sustain? 

" give an utterly underwhelming product. 

" practice. like cats. you cant go too close.




noremap 4 /^\(const\\|def\\|class\\|async function\\|function\) 


function FunctionizeBlock(indexes, s)
    let first = NameMaker(a:s)
    let last = JSPY('suffix')
    call IndentAll(a:indexes)
    call append(a:indexes[0] - 1, first)
    call append(a:indexes[1] + 1, last)
endfunction



function BlockComment(indexes)
   let lang = expand('%:e')   
   ec lang
   if lang == 'html' || lang =~ 'vimrc'
       if Test(getline(a:indexes[0]), '<!--')
           call DeleteAboveAndBelow(a:indexes)
        else
            call AppendAboveAndBelow(a:indexes, '<!--', '-->')
        endif
   endif
endfunction

function AppendAboveAndBelow(indexes, above, below)
    let [a,b] = a:indexes
    call append(a - 1, a:above)
    call append(b + 1, a:below)
endfunction
function DeleteAboveAndBelow(indexes)
    let [a,b] = a:indexes
    call setline(a, '')
    call setline(b, '')
endfunction
function StripLine()
    return trim(getline('.'))
endfunction
iab alist alist = ['a', 'b', 'c', 'd', 'e']
iab alistt alist = ['a', 'b', 'c', 'd', 'e']

function LsFiles(...)
    let query = a:0 >= 1 ? ' ' . a:1 : ''
    let amount = 3
    let dir = '/mnt/chromeos/GoogleDrive/MyDrive'
    let cmd = "ls " . dir . " -t" . query . " | head " . " -" . amount
    ec cmd
    let raw = systemlist(cmd)
    ec Numbered(raw)
    let answer = GetInput('choose file to copy')
    if Not(answer)
        return
    endif
    let file = raw[answer]
    ec file
    ec 'error here'
    return 
    call BashCopy(file, 'copy.pdf')
endfunction
function CopyLastDriveFile()
    let dir = '/mnt/chromeos/GoogleDrive/MyDrive/'
    let cmd = "ls " . dir . " -t" . "" . " | head " . " -" . "1" 
    let raw = systemlist(cmd)
    let file = raw[0]
    let cmd = "!cp " . dir . shellescape(file) . " " . "copy.pdf"
    ec cmd
    execute cmd
endfunction

function BrowseFiles(...)
   let query = a:0 >= 1 ? a:1 : 'aops'
   let files = GlobIt()
   let answer = GetInput('choose file index')
   if Not(answer)
    ec 'no answer'
    return
   let file = files[answer]
   ec ''
   ec file
   ec 'i-'
   call OpenBuffer(file)
endfunction
function Numbered(s)
    let s = a:s
    for [i, item] in Enumerate(s)
        ec i  . '. ' . item
    endfor 
endfunction

function GetInput(...)
  let message = a:0 >= 1 ? a:1 : 'Awaiting'
  let message = Capitalize(message) . ': '
  call inputsave()
  let name = input(message)
  call inputrestore()
  return name
endfunction
function BashCopy(file, name)
    let cmd = "cp " . NameEscape(a:file) . " " . a:name
    ec cmd
    execute cmd
endfunction

function NameEscape(file)
    let p = Sub(a:file, '[\(\) ]', {s -> '\' . s[0]})
    return p
endfunction


function AddToken(s)
    let s = Replace(a:s, '[""'']', '', 'g')
    let s = Replace(s, ' ', ' = ''') . ''''
    call AppendFile('env.py', s)
endfunction
function LineBreakExpression()
    return JSPY('clbr')
endfunction

function AddImports(s)
    let index = search('\v^from storage import', 'bn')
    call GetSet(index, {text -> text . ', ' . s})
endfunction

nnoremap H :call MovementManager()<cr>a









function MovementManager()
    let line = GetFunctionIndex()
    call append(line - 1, ['', '', ''])
    call cursor(line + 1, 0)
endfunction
function GlobIt(...)
   let query = a:0 >= 1 ? a:1 : 'aops'
   let filestring = globpath('.', '*' . query . '*') 
   ec Numbered(filestring)
   let files = split(filestring, "\n")
   call ToPasteBuffer(Quotify(files[0]))
   return files
endfunction

function CssSearch(s)
    execute "normal! /" . "\." . a:s . "\<cr>"
endfunction


   let g:ldrdict = {
      "\    'ldr-dict': 'booga',
      "\    'ldr-start': 'booga',
      \    'sctb': function('ShuntCallsToBottom'),
      \    'af': function('AddFileToFileDict'),
      \    'sff': function('SaveFunctionToList'),
      \    'sf': function('SaveFileToList'),
      \    'r': function('ReadFile'),
      \    'stf': function('SmartTextFix'),
      \    'pug': function('Pugify'),
      \    'latest': function('Latest'),
      \    'look': function('LookForFiles'),
      \    '/': function('CssSearch'),
      \    'sgv': function('SetGlobalVariable'),
      \    'sm': function('SetMarks'),
      \    'glob': function('GlobIt'),
      \    'p': function('PrintReadFile'),
      \    'at': function('AddToken'),
      \    'b': function('BrowseFiles'),
      \    'vd': function('AppendToVueData'),
      \    'm': function('AppendToVueMethods'),
      \    'vs': function('AddToVSDict'),
      \    'ssc': function('SetSearchContext'),
       \    'ldr': function('AddToLdrDict'),
       \    'tgl': function('ToggleLibraries'),
       \    'ocf': function('OpenCurrentFiles'),
       \    'cae': function('CloseAllExcept'),
       \    'npm': function('OpenNpmFile'),
       "\    'aaaaaa': function('aaaa'),
       \    'isf': function('IsFile'),
       \    'ljs': function('LibraryLoader'),
       \    'nc': function('CreateNormalCommand'),
       \    'eat': function('IabEat'),
       \    'ss': function('StyleShunt'),
       \    'set': function('Setter'),
       \    'f6': function('F6ify'),
       \    'bm': function('VimChromeBookmarks'),
       \    'root': function('BringToRoot'),
       \    'g': function('SetModeToGrab'),
       \    'o': function('OpenLocalFile'),
       \    'open': function('OpenLocalFile'),
       \    'cd': function('ChangeDir'),
       "\    'pretty': function('Prettier'),
       \    'msc': function('AppendMyShortCuts'),
       \    'load': function('LoadLibrary'),
       \    'edit': function('EditDict'),
       \    'df': function('DeleteFile'),
       \    'find': function('GrepFinder'),
       \    'cb': function('CloseBuffersByQuery'),
       \    'sb': function('SetCurrentFileAsShuntDestination'),
       \    'rev': function('RevertBufferGroup'),
       \    'rb': function('RevertBufferGroup'),
       \    'ob': function('OpenBufferGroup'),
       \
       \
       \    'dd': function('DedentAll'),
       \    'iab': function('CreateIab'),
       \    'make': function('MakeHtml'),
       \
       \
       \    'cf': function('CreateFileFromLine'),
       \
       \
       \    'run':    {arg -> ExecuteFile('self', arg)},
       \    'print':  {arg -> ExecuteFile('printscript.py', arg)},
       \    'email':  {arg -> ExecuteFile('emailscript.py', arg)},
       \    'reddit': {    -> ExecuteFile('redditscript.py')},
       \    'reply': {    -> ExecuteFile('redditscript.py', 'reply')},
       \    'create': {    -> ExecuteFile('createproject.py', arg)},
       \    'github': {arg  -> ExecuteFile('githubscript.py', arg)},
       \    'pretty': {  -> ExecuteFile('prettyscript.js')},
       \    'scrape': {  -> ExecuteFile('scrapescript.py')},
       \    'cleanup': {  -> ExecuteFile('cleanupscript.py')},
   \ }


function Ck()
    let [spaces, line] = GetSpacesAndLine()
    let product = spaces . 'console.log("' . line . '")'
    ec product
    call append(Relative(-1), product)
endfunction

nnoremap ck :call Ck()<cr>
function GetImplicitVueData()
    let line = getline('.')
    let match = Match(line, '\w+\ze \=')
    let p = match . ': ' . 'null'
    echom p
    if Not(p)
        ec 'no result'
        return ''
    endif
    return p
endfunction
function KeyFramer(s)
    let [name, rest] = SplitOnce(trim(a:s))
    let trait = Sub(name, '\d+', '')
    let parts = split(rest, '  ')
    let s = '@keyframes ' . name . " {\n"
    for part in parts
        let [offset, value] = SplitOnce(part)
        let spaces = ToSpaces(4 - strlen(offset))
        let s .= '    ' . offset . "% " . spaces . "{" . " " . trait . ': ' . value . " }\n"
    endfor
    let s .= '}'
    return s


endfunction
iab <silent> wallu [\w\W]+?<C-R>=Eatchar('\s')<CR>
function Exec(s)
    ec a:s
    execute a:s
endfunction

inoremap w[ <esc>:call EnterBlock()<cr>a
nnoremap <localleader>qh :call QuoteHelper()<cr>
nnoremap <leader>q :call AskQuestion()<cr>


nnoremap N :call Goto()<cr>

function Goto(...)
    let arg = a:0 >= 1 ? a:1 : ''
    let dict = {
    \    'storage.py': 'if __name__',
    \    '.vimrc': 'indexsearch',
    \    'maths2.py': '#init',
    \    'math3.py': '#init',
    \    'helpers.js': {
        \
        \
        \
    \ }
    \}
    let match = get(dict, Basename(CurrentFile()))
    call ThrowGetter(match)
    if IsString(match) 
        let index = IndexSearch(match)
        ec index
    elseif IsObject(match)
        ec 'setting bookmarks'
        call SetBookMarks(match)
    endif

endfunction

function ThrowGetter(...)
    for item in a:000
        if Not(item)
            throw 'no value @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@Item'
        endif
    endfor 
endfunction
function IndexSearch(regex, ...)
    let flags = a:0 >= 1 ? a:1 : '' 
    return search(Regexed(a:regex), flags)
endfunction

iab al alist,
nnoremap <leader>w :call Wrap()<cr>
nnoremap e :e! ./



iab mydl /mnt/chromeos/MyFiles/Downloads/
nnoremap 6 :call SmartNav()<cr>
noremap 3 /^ \+\(:\|(\)<left><left><left><left><left><left><left><left>
noremap 3 /^    def 
inoremap <expr> lbr LineBreaker()

function ToWorkspace(indexes)
    let file = 'workspace.txt'
    let lines = GetLines(a:indexes)
    call AppendFile(file, lines)
    call deletebufline('%', a:indexes[0], a:indexes[1])
endfunction

function ShuntAndDelete()
    let indexes = GetCodeIndexes()
    let [a,b] = indexes
    let lines = GetLines(indexes)
    let destination = g:shuntbuffer
    call InvivoAppend(destination, lines)
    call deletebufline('%', a, b)
endfunction

"noremap dv :call ShuntAndDelete()<cr>

nnoremap gb :call GoHtmlBackward()<cr>i
nnoremap gf :call GoHtmlBackward()<cr>i
