const cssreset = `
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
`

const defaultAnimationOptions = {
    duration: 2
}
function toNumber(x) {
    return isNumber(x) ? Number(x) : x
}


const DEFAULT_BUFFER = 'cwf'
const SNIPPET_BUFFER = 'snippets'
const BUFFERS = [DEFAULT_BUFFER, SNIPPET_BUFFER]

const opacitykfstring = `@keyframes opac {
  0%   { opacity: 0; }
  100% { opacity: 1; }
}
`
const preparevuedict = {
        cont: 'container',
        '(?<=\\s)cmtextarea(?=\\s)': 'textarea ref=codemirror',
        '(?<=\\s|\\.)cm(?=\\s)': 'CodeMirror',
        ct: 'container',
        sent: 'sentence',
        cls: 'class',
        lst: 'list',
        ' gt ': ' > ',
        ' lt ': ' < ',
        'qm\\b': '?',
        ';': ':',
        '`': '~',
        '^33': '##',
        '(?<=[a-z][a-z])1\\b': '!',
        '(?<=[a-z][a-z])0(?![a-z])': ')',
        // '(?<=[a-z][a-z])0\\b': ')',
        '(?<!he)lp': '(',
        '(?<![aeiou])rp\\b': ')',
        '\\b9(?=[a-zA-Z])(?!am)': '(',
        '\\b3(?=[a-zA-Z])': '#',
        '\\b4(?!evr|get|got)(?=[a-zA-Z])': '$',
        '\\b5(?=[a-zA-Z])': '%',
        '(?<=[^\\d\\s])8(?!\\d)': '*',
        '^m\\b': 'methods',
    }
/*

animationName
animationDuration
animationTimingFunction
animationDelay
animationIterationCount
animationDirection

*/

const fadestring = `

.fade-enter-active {
    transition: opacity 2s
}

.fade-leave-active { transition: opacity 1s; } 
.fade-enter, .fade-leave-to { opacity: 0; }

`
const zombiesong = 'Zombie Nation - Kernkraft 400 (HQ)-trS2nrkN0_k.mp3'

        const JSONBIN_VERSION_ID = '5e9cf5c82940c704e1db3606'
        const JSONBIN_NO_VERSION_ID = '5f30ae36dddf413f95c101d3'

    const JSONBIN_SECRET_KEY = '$2b$10$RpyRq6D2g4SIaVl.vix5W.vq33VVnyQgzeCev0fLf2pJo2LUVf8DC'
const snippetDelimiter = 'X'
const globalTabWidth = 4
const humzlemap = {
    'january': 0,
    'february': 1,
    'march': 2,
    'april': 3,
    'may': 4,
    'june': 5,
    'july': 6,
    'august': 7,
    'september': 8,
    'october': 9,
    'november': 10,
    'december': 11,
    'sunday': 0,
    'monday': 1,
    'tuesday': 2,
    'wednesday': 3,
    'thursday': 4,
    'friday': 5,
    'saturday': 6,
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine',
    '10': 'ten',
    '11': 'eleven',
    '12': 'twelve',
    '13': 'thirteen',
} 

let scriptString = `<script src="./utils.js"></script>`
const hljsString = '<link rel="stylesheet" href="https://unpkg.com/@highlightjs/cdn-assets@10.5.0/styles/default.min.css">\n<script src="https://unpkg.com/@highlightjs/cdn-assets@10.5.0/highlight.min.js"></script>\n<script>hljs.initHighlightingOnLoad();</script>'
const vuejs = '<script src="./vue.js"></script>'
const hibye = 'hello good sir.\nAnd now it is time to say goodbye.'
const paragraph = 'this is sentence 1.\nthis is sentence 2.'
const GLOBAL_DATA = {}
// this is a hacky utility...
// today i need to get the animation elements up.
// there is also the element of createpage.
// 
    examplefiddlestring = `{
          html: "<div id=\\"demo\\">\\n  <h1\\n    :class=\\"{\\'bounce animated\\': animated}\\"\\n    @animationend=\\"animated = false\\"\\n  >\\n    Animate Test\\n  <\\/h1>\\n  <button @click=\\"animate\\">\\n    Animate\\n  <\\/button>\\n<\\/div>\\n",
          js:   "var demo = new Vue({\\n  el: \\'#demo\\',\\n  data: {\\n  	animated: false\\n  },\\n	methods: {\\n  	animate () {\\n      this.animated = true\\n    }\\n  }\\n})\\n",
          css:  ""
        }`
let match
//
function logspeak(s) {
    console.log(s )
    if (isBrowser()) speak(s)
}

function listmod(list, content, options) {
    if (!list) return
}
const cm_mount_str = 'this.codemirror = CodeMirror.fromTextArea(this.$refs.textarea, {value: \'hello world\', mode: \'javascript\'})'
const alwaysclose = ['textarea']

const firstelementmap = {
        'element': /\S+/,
        'word': /[a-zA-Z]+/,
        'html': /[-a-zA-Z]+/,
        'css': /[-a-zA-Z]+/,
        'smart': /(?:function |def |class )?([a-zA-Z.]+)/,
        '': /[a-zA-Z]+/,
        '': /\S+/,
}
const doubleSpaceSplitRE = /(?=\w)  (?=\w)/

        // let regex = / (?=\w+ ?=|[\.:]\w)|(?<== ?\w+|:\w+) /
        let htmlSplitRE = /(?<!=) (?!=)/
const biglbr = '\n\n-----------------------------------------------\n\n'

// make it easy for other people to do work. 


s = `

// who you start with is incredibly important
// help students with their endeavors
// the answer is no
// the answer is grow from within
// a person who can deeply believe that something will work
// we traditionally do not help each other ... 
// so my efforts will probably lose. 1% chance of victroy

Hey Justin - Do you have any interest in working on a learning program?

Website: 
    - studentcircles.org

Plan:
    - make test prep and summer learning programs @ students.
    - make educational software @ tutoring agencies / school districts.

Let me know if this idea potentially tickles your fancy.

Best,
Kevin

`


const cssaliasmap = {
    'easein': ['easing', 'ease-in'],
    'easeout': ['easing', 'ease-out'],
    'easeinout': ['easing', 'ease-in-out'],
    bg: 'background',
    times: 'iterations',    
    o: 'opacity',
    'r': 'right',
    'l': 'left',
    't': 'top',
    'b': 'bottom',
    'pos': 'position',
    'pb': 'padding-bottom',
}
const inferredcssattrmap = {
    'left': ['position', 'absolute'],
    'right': ['position', 'absolute'],
    'top': ['position', 'absolute'],
    'bottom': ['position', 'absolute'],
}

const defaultunitmap = {
   'border': '1px', 
   width: 'px',
}


const presetClasses = ['centered']
const terminalobj = {
    dim: '\x1b[2m',
    underscore: '\x1b[4m',
    blink: '\x1b[5m',
    reverse: '\x1b[7m',
    hidden: '\x1b[8m',
    fgblack: '\x1b[30m',
    fgred: '\x1b[31m',
    red: '\x1b[31m',
    fggreen: '\x1b[32m',
    reset: '\x1b[0m',
    bright: '\x1b[1m',
    fgyellow: '\x1b[33m',
    fgblue: '\x1b[34m',
    reset: '\x1b[0m',
    fgmagenta: '\x1b[35m',
    fgcyan: '\x1b[36m',
    fgwhite: '\x1b[37m',
    bgblack: '\x1b[40m',
    Red: '\x1b[41m',
    bggreen: '\x1b[42m',
    bgyellow: '\x1b[43m',
    bgblue: '\x1b[44m',
    bgmagenta: '\x1b[45m',
    bgcyan: '\x1b[46m',
    bgwhite: '\x1b[47m',
}
const lookbehindIsCommentRE = '(?<=(?:(?<!:)//|#))'

    const istypemap = {
        str: 'isString',
        fn: 'isFunction',
        dict: 'isObject',
        obj: 'isObject',
        list: 'isArray',
        arr: 'isArray',
        int: 'isNumber',
        num: 'isNumber',
    }
    const questionsprefixdict = {
        shud: 'question should',
        who: 'question who',
        what: 'question what',
        where: 'question where',
        when: 'question when',
        why: 'question why',
        how: 'question how',
        should: 'question should',
        could: 'question could',
        do: 'question do',
        is: 'question is',
        have: 'question have',
        has: 'question has',
        does: 'question does',
        are: 'question are',
        might: 'question might',
        for: 'question for',
    }
    const accumulateprefixdict = {
        g: 'google',
        pr: 'print',
        r: 'reddit',
        fb: 'fbchat',
        d: 'def',
        f: 'function',
        ev: 'event',
        e: 'edits',
        n: 'notes',
        m: '#methods',
        d: '#data',
        w: '#watch',
        t: '#template',
        c: '#computed',
    }


GLOBAL_STORE = []

const rescapeitems = [
    '.',
    '|',
    '[',
    ']',
    '/',
    '+',
    '*',
    '?',
    '(',
    ')',
    '{',
    '}',
    '^',
    '$',
]

const lineeditcommands = ['upd', 'upe', 'upf', 'upb', 'ditto', 'upt', 'le']

const blocks = ['if', 'else', 'while', 'function', 'block']
const logicblocks = ['else if', 'elif', 'else', 'if', 'while', 'for']

const lineedittrackermap = {
    k: 'fn',
    m: 'fn',
    'js function': 'fn',
    def: 'fn',
    cef: 'fn',
    jcf: 'fn',
    pcf: 'fn',
    f: 'fn',
    'py class': 'class',
    'js class': 'class',
    'py def': 'fn',
}

const siftmap = {
    identifiers: ['WORKS'],
}

function guotieSifter(s) {
    for (let [k, v] of Object.entries(siftmap)) {
        if (k == 'identifiers') {
            // maybe it would be better to jsut sort the thing.
        }
    }
}
const time = {
    sleep(ms) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve()
            }, ms)
        })
    },
}
const iconsole = {
    log() {
        return
    },
}
function merp(s) {
    // used to preview the cm cursor thing.
    console.log('-'.repeat(s.length * 2))
    console.log(s.split('').join(' '))
    console.log(
        s.split('').reduce((acc, el, i) => {
            if (i > 9) i = str(i).slice(0, 1)
            return (acc += i + ' ')
        }, '')
    )

    console.log(
        s.split('').reduce((acc, el, i) => {
            if (i > 9) {
                i = str(i).slice(1)
            } else {
                i = ' '
            }

            return (acc += i + ' ')
        }, '')
    )

    console.log('-'.repeat(s.length * 2))
}

function gr(...args) {
    util.colored('green')(args)
}
const eltPreMatchObject = {
    // '^<': el,
    // '\\.css$': '<link rel="stylesheet" href="' + el + '"/>',
    // '\\.js$': '<script src="' + el + '"></script>',
}

const iadsfpsum = 'asdfasdf\nsdfasdf\nasdfszzcxvxcxzvxcv   \nasdfasd\n\nadf'
keepaccstring = `

f createlibmap(o = [[]]) {
    if 
'skulpt prettier vue vuerouter vuex codemirror utils styles highlight katex video'

/home/kdog3682/.local/lib/python3.7/site-packages
git remote set-url origin git@github.com:kdog3682/kevinlee.git
pip freeze > r.txt
pip install PyPDF2
pip install fbchat
pip install fbchat --upgrade
pip install html5print
pip install pyspellchecker
pip install pywebcopy
pip install selenium
pip install webdriver-manager
pip show praw
pip show pyspellchecker
pip show spellchecker

pip3 install fbchat --upgrade
pip3 install mutagen
pip3 install youtube_dl
rm -rf kdog3682.github.io
sudo apt-get install chromium-browser
sudo apt-get install ffmpeg
sudo discoveryutil udnsflushcaches;sudo discoveryutil
sudo dscacheutil -flushcache;sudo killall -HUP mDNSResponder
sudo killall
sudo killall -HUP mDNSResponder
sudo netstat
sudo netstat -ap
sudo netstat -ap | grep :4447
sudo netstat -ap | grep :5000
sudo netstat -tulpn | grep LISTEN
sudo pdnsd-ctl empty-cache
sudo pip install fbchat
sudo ss -tulwn | grep LISTEN
vim /home/kdog3682/.local/lib/python3.7/site-packages/fbchat/_state.py

r.github wt does this error message imply {
    'error: the following file has changes staged in the index: base.py'

    my goal was to change b.py to base.py (renaming the file)
    when i check github, the file has been correctly renamed.
    im wondering if this error message is just a polite notification, or if theres anything else that i might need to check.
r.vim how wud u perform this task {

    i wud lk 2 write a function and map it to iab 'check'.
    when i type check, and then enter, the function shoud read my current text block.
    if the block has the word 'hello', the first hello should be turned into 'hello!' and every other 'hello', should be turned into 'hi!'
    if no match, at the end of the textblock, the words 'no matches for hello' should be appended.
    
}




`
globalize()
const functionInfoRE = '(?:function|def) (\\w+)\\((.*?)\\)(?::| {)\\n([^]+?)(?:\\n}|\\s*$)'

function modifyArrayExtend(arr, x) {
    if (isArray(x)) {
        x.forEach((item) => arr.push(item))
    } else {
        arr.push(x)
    }
}
function modifyArray(arr, index, callback) {
    if (index < 0) index = arr.length + index
    arr[index] = isFunction(callback) ? callback(arr[index]) : callback
}

function trace(label) {
    return (value) => {
        if (isFunction(label)) {
            console.log( value )
            return label(value)
        }
        else {
            console.log(`${label}: ${stringify(value)}`)
            return value
        }
    }
}

const compose = (...fns) => (x) => fns.reduceRight((acc, f) => f(acc), x)
const alert = console.log

const nbspASSET = '\n\n&nbsp;\n\n'

// const accumulatorRE = '(?:^|\\n)(?:(\\w+)\\W([^]+?)(?=\\n[\\w#]|$)|#(\\w+)\\s*([^]+?)(?=\\n[\\n#]|$))'
const keyorsector = '(?:(\\w+)[.](\\w+)|(\\w+))'

// const accumulatorRE = '(?<=^|\\n)(?:(?:(\\w+)[.](\\w+)|(\\w+)) ([^]+?)(?=\\n[\\w#]|$)|#(?:(\\w+)[.](\\w+)|(\\w+))\\s([^]+?)(?=$|\\n\\w+\\.\\w+|\\n\\n\\n[^\\t ]|\\n#|\\nend))'

const accumulatorRE =
    '(?<=^|\\n)(?:(?:(\\w+)[.](\\w+)|(\\w+)) ([^]+?)(?=\\n[\\w#]|$)' +
    '|' +
    '#(?:(\\w+)[.](\\w+)|(\\w+))\\s([^]+?)(?=$|\\n\\w+\\.\\w+ |\\n\\n\\n[^\\t ]|\\n#|\\nend))'

accumulatorteststring = `


r.js does function composition have a downside of making things run slower  ive recently started to use a lot of function composition/piping/functions returning functions 2 or 3 or 4 layers deep. as a result, ive noticed that things r running slower. im wondering if u guys have experienced something similar, 

r.js how wud u name a function like this  ifntargeted ive currently named the function as 'targeted', which isnt a very descriptive name. wt the function does is, if the k is in the list, then the function should be returned. Otherwise, return (ilfnph)  in general, ive exped that naming helper functions like this to be kind of hard since the names r usly vry generalized.
n this is a note
n this is also a note  and this one, but this stays with it. 
n {
    these r also notes
}
3r.js why do these 3 calls all produce the same result?
cs
function sayhi(...args) {
    console.log('saying hi! to my friends: ', args)
}

sayhi.call(null, 'jon')
sayhi.call(this, 'jon')
sayhi.call('sara', 'jon')
ce
wt do u guys thnk about thisqm

r.js wt is the difference btwn passing a class, and supering a class  say for instance u hv a class ifnSimpleStorage What would be the best way to give it the additional ability of incrementingqm something along the lines of: cs increment() {
    console.log('The last item added to this.store')
}
    ce
    i know that this can be solved by hardcoding in an additional method, along with the necessary variables, but im trying to approach it in such a way that i would be able to easily drop this 'increment' method into any class that im working with. 
    t4th

3template i like shoes
3foo i like shoes foobar
3boo.foo boooffofofofofoffo
3blog
do u want the world to go far js
dgs

sdfsdf
sdfds

sdfsdf
dfgsdfg
foo
r.s supsup sup sup sup
n {
    asdf
    dsaf
    asdf
    sdf
}
3boo
i want to go home
end
3stew lets go to the game


r wts the best way to do this js{
    dsf
    sdf
}
r.js r u at the store
a
a
a
a

r.js wt is the best way 2 do this

3zoo lets go to the zoo
tomorow
and sunday
and forever
3xcv xxxxxxxxxx

dog what about this
    and this

cat and yeah cat

pig {
    eats
    a
    b
    c
}
these are messy notes and they go.  for a long rime
a new ection of rhe mesy noes
`
function isRegExp(re) {
    return re.constructor.name == 'RegExp'
}
function testFactory(regex, mode = null) {
    if (mode == 'endswith') return (s) => s.endsWith(regex)
    if (mode == 'startswith') return (s) => s.startsWith(regex)
    if (isRegExp(regex)) {
        return (s) => regex.test(s)
    }
    return (s) => test(regex, s)
}

const hasNoUnits = testFactory(/\d$/)
const isQuoted = testFactory('[\'"].*?[\'"]')
const hasExtension = testFactory(/\.\w+$/)
const hasSeparatedCaptureGroups = testFactory(/\(\?:(?:.*?\([^?].*?\)){1,}\|.*?\([^?]/)

function binaryAction(condition, action) {
    //date=[Jan 20, 2021
    return (s) => {
        if (condition(s)) return action(s)
        return s
    }
}
const sliceQuotes = binaryAction(isQuoted, (x) => x.slice(1, -1))

function getErrorInfo(e) {
    // green(e.stack.toString())
    return search('.*?\\n.*?\\n *at (\\S+) .*?:(\\d+)', e.stack)
}
function debugLine(message) {
    // also quite interesting
    let e = new Error()
    let frame = e.stack.split('\n')[2]
    console.log(frame)
    let lineNumber = frame.split(':')[1]
    let functionName = frame.split(' ')[5]
    return functionName + ':' + lineNumber + ' ' + message
}

function getWindowFunction(name) {
    if (isBrowser()) {
        return window[name].toString()
    } else {
        const localwindow = {
            test: isString,
            ph: ph,
        }
        if (!(name in localwindow)) {
            console.log(name, 'not in window')
            name = 'test'
        }
        const product = localwindow[name].toString()
        return product
    }
}

if (isBrowser()) {
    global = {}
}
function globalize() {
    if (isNode()) {
        global.Error.stackTraceLimit = 3
        Object.defineProperty(global, '__stack', {
            get: function () {
                var orig = Error.prepareStackTrace
                Error.prepareStackTrace = function (_, stack) {
                    return stack
                }
                var err = new Error()
                Error.captureStackTrace(err, arguments.callee)
                var stack = err.stack
                Error.prepareStackTrace = orig
                return stack
            },
        })

        Object.defineProperty(global, '__line', {
            get: function () {
                return __stack[2].getLineNumber()
            },
        })

        Object.defineProperty(global, '__function', {
            get: function () {
                let el = __stack[2].getFunctionName()
                if (el) el = '[Function]: ' + el
                else el = ''
                return el
            },
        })
    } else if (isBrowser()) {
        window.Error.stackTraceLimit = 3
        Object.defineProperty(window, '__stack', {
            get: function () {
                var orig = Error.prepareStackTrace
                Error.prepareStackTrace = function (_, stack) {
                    return stack
                }
                var err = new Error()
                Error.captureStackTrace(err, arguments.callee)
                var stack = err.stack
                Error.prepareStackTrace = orig
                return stack
            },
        })

        Object.defineProperty(window, '__line', {
            get: function () {
                return __stack[2].getLineNumber()
            },
        })

        Object.defineProperty(window, '__function', {
            get: function () {
                let el = __stack[2].getFunctionName()
                if (el) el = '[Function]: ' + el
                else el = ''
                return el
            },
        })
    }
}

let rl, el
if (isNode()) {

            let red = terminalobj['fg' + 'red']
            let blue = terminalobj['fg' + 'blue']
            let green = terminalobj['fg' + 'green']
            let yellow = terminalobj['fg' + 'yellow']
            let b = terminalobj['bright']
            let c = terminalobj['reset']
    const old = console.log
    console.log = (...args) => {
        if (!isNumber(args[0])) old(__line, __function)
        old(...args)
    }
     console.print = (x) => {
       old(stringify(x)) 
    }

     console.visible = (x) => {
         old(visible(x))
     }

     console.announce = (x) => {
        old('ANNOUNCEMENT:', x)
     }
     console.question = (x) => {
        old('QUESTION', x )
     }
     console.blank = (...args) => {
        old(...args)
     }


     console.visible = (x) => {
         old(visible(x))
     }
     console.forward = (s) => {
         const product = s.replace(/\\[\/n\'\"]/g, (x) => {
         switch(x) {
             case '\\n': return '\n'
             case '\\\'': return '\''
             case '\\\"': return '\"'
             case '\\/': return '/'
         }
     })
         old(product)
         return product
     }

     console.reverse = (s) => s.replace(/\n|\'|\"|\\/g, (x) => {
         switch(x) {
             case '\n': return '\\n'
             case '\'': return '\\\''
             case '\"': return '\\\"'
             case '\\': return '\\\\'
         }
     })

     console.string = (s) => old(stringify(s))
     console.red = (...args) => {
        old(__line, red, b, args.join('\n\n------------------\n\n'), c)
     }

     console.error = (...args) => {
        old(__line, red, b)
        old(...args, c)
        throw 'console error' 
    }

     console.ph = () => {
        return
     }

     console.blue = (...args) => {
        old(__line, blue, b, args, c)
    }

     console.green = (...args) => {
        old(__line, green, b, ...args, c)
    }

     console.yellow = (...args) => {
        old(__line, yellow, b, ...args, c)
    }
}
else {
    console.question = (x) => console.log('%c QUESTION: ' + x, 'background: red; color: blue; font-size: 14px;')
 
    console.green =   (x) => console.log('%c' + x, 'color: green; font-size: 16px;')
    console.blue =  (x) =>   console.log('%c' + stringify(x), 'color: blue; font-size: 16px;')

    console.string = (s) => console.log(stringify(s))
    console.modal =  (...args) =>  {
        console.log('%c' + args.join(sn), 'color: black; font-weight: bold; font-size: 14px;')
        return ''
    }


     console.visible = (x) => {
         if (x) console.log(visible(x))
            else {
                old('the value doesnt exist')
            }
     }

     console.announce = (x) => {
        console.log('ANNOUNCEMENT:', x)
     }
    console.red =  (...args) =>  {
        let x = args.join('\n------\n')
        console.log('%c' + x, 'color: red; font-size: 16px;')
        return ''
    }
}

const util = {
    log(...args) {
        if (args.length == 1 && isObject(args[0])) {
            if (isNestedObject(args[0])) {
                console.log(stringify(args[0]))
            } else {
                console.log(args[0])
            }
        }
    },
    display(x, mode = '') {
        const map = {
            '':
                'padding-y: 5px; border-top: 1px solid black; border-bottom: 1px solid black; font-family: system-ui; font-size: 1rem;',
        }
        const css = map[mode]
        console.log('%c' + x, css)
    },
    colored(x) {
        return (...args) => {
            console.log(
                __line,
                terminalobj['fg' + x],
                terminalobj['bright'],
                ...args,
                terminalobj['reset']
            )
        }
    },
    red: (s) => console.log(terminalobj['fgred'], s, terminalobj['reset']),
    green: (s) => console.log(terminalobj['fggreen'], s, terminalobj['reset']),
    blue: (s) => console.log(terminalobj['fgblue'], s, terminalobj['reset']),
}

const globalclasslist = ['maxout']
function toVisible(name) {
    function runner(s) {
        const product = visible(s)
        updateStorage('visiblestrings.txt', createVariable(name, parens(product)))
    }
    navigator.clipboard.readText().then(runner)
}

const testobj = { a: 'a', b: 'b', c: { d: 'e' } }
// (createReplacer('hi $a. my name is $b!')('jon', 'sam'))

// console.log( testobj.a.b?.c)

function createReplacer(s, extraArgs = 1) {
    const parts = s.split(/\$\w/)
    const args = ['a', 'b', 'c', 'd', 'e'].slice(0, parts.length - 1)
    const returnString = parts.reduce((acc, part, i) => {
        const ending = isLast(i, parts) ? '' : parens(args[i], ' + ')
        return (acc += parens(part, 'sq') + ending)
    }, 'return ')

    if (extraArgs) {
        for (let i = 0; i < extraArgs; i++) {
            args.unshift('_'.repeat(i + 1))
        }
    }
    const evaluator = new Function(...args, returnString)
    // console.log( String(evaluator))
    return evaluator
}

const seriesFactory = (i, dict) => (match) => dict[match](i)

function seriesReplacerB(ii) {
    let s = ''
    for (let i = ii; i > 0; i--) {
        s += String(i)
    }
    return s
}

function seriesReplacer(ii) {
    let s = ''
    for (let i = 1; i <= ii; i++) {
        s += String(i)
    }
    return s
}
function normalizeSpacesFactory(s) {
    function product(x) {
        return parens(s, ' ')
    }
    return product
}

function prepareCaptureGroupFn(fn) {
    return (s) => fn(s.slice(1, -1))
}

function lambdaMaker(i) {
    function product(s) {
        // console.log( s)
        const result = s.replace(/i/g, i)
        // console.log( result)
        return eval(result)
    }
    return prepareCaptureGroupFn(product)
}
function createPattern(i) {
    let s = ''
    for (let j = 1; j <= i; j++) {
        s += j
    }
    return s
}
const createi = (n, operator) => parens('i ' + operator + ' ' + n, [])

function tryval(x) {
    try {
        return eval(x)
    } catch {
        return x
    }
}

function createMathNumber({
    parser = null,
    reverse = false,
    useI = true,
    expr = null,
    start = 0,
    end = 4,
} = {}) {
    let s = []
    function product(i) {
        if (reverse) {
            for (let j = start; j >= end; j--) {
                s.push(j)
            }
        } else {
            for (let j = start; j < end; j++) {
                s.push(j)
            }
        }

        let result = s.join('')
        return result
    }

    return product
}
const ipa = createMathNumber()

function iterateIParser2(i) {
    return 2
}
function iterateIParser(i) {
    let s = ''
    for (let j = 3; j >= i; j--) {
        s += createi(j, '-')
    }

    return s
}
function convertToLambdaFunction(...names) {
    // this is drepp9001 or 9002 or 9000 or 8999 or grm ... but defly not drep.
    //
}

function txl(...args) {
    console.log('TXL')
    console.log('caller:', __function, '. line: ', __line)
    throw 'txl'
}

function tl(...args) {
    if (isBrowser()) return
    console.log('caller:', __function, '. line: ', __line)
    throw 'red'
}
// console.log( createDictionaryFromString(terminalstring))
terminalstring = `
FgBlack = "\\x1b[30m"
FgRed = "\\x1b[31m"
FgGreen = "\\x1b[32m"
FgYellow = "\\x1b[33m"
FgBlue = "\\x1b[34m"
FgMagenta = "\\x1b[35m"
FgCyan = "\\x1b[36m"
FgWhite = "\\x1b[37m"

BgBlack = "\\x1b[40m"
BgRed = "\\x1b[41m"
BgGreen = "\\x1b[42m"
BgYellow = "\\x1b[43m"
BgBlue = "\\x1b[44m"
BgMagenta = "\\x1b[45m"
BgCyan = "\\x1b[46m"
BgWhite = "\\x1b[47m"
`

let GLOBAL_OFFSET_VARIABLE = null
function prepareCaptureGroup(el) {
    if (test('^\\$', el)) return el.slice(1)
    if (test('^{|^\\[', el)) return el.slice(1, -1)
    return el
}
function cmEmpty(cm) {
    const line = cml(cm)
    return !exists(line)
}
const lucasSequence = [2, 1, 3, 4, 7, 11, 18, 29, 47, 76, 123, 199, 322, 521, 843, 1364, 2207]
const skiponacciSequence = [1, 1, 1, 2, 2, 3, 4, 5, 7, 9, 12, 16, 21, 28, 37]
const fibonacciSequence = [
    0,
    1,
    1,
    2,
    3,
    5,
    8,
    13,
    21,
    34,
    55,
    89,
    144,
    233,
    377,
    610,
    987,
    1597,
    2584,
    4181,
    6765,
    10946,
    17711,
    28657,
    46368,
    75025,
    121393,
    196418,
    317811,
]
const triangularSequence = [
    0,
    1,
    3,
    6,
    10,
    15,
    21,
    28,
    36,
    45,
    55,
    66,
    78,
    91,
    105,
    120,
    136,
    153,
    171,
    190,
    210,
    231,
    253,
    276,
    300,
    325,
    351,
    378,
    406,
    435,
    465,
    496,
    528,
    561,
    595,
    630,
    666,
]
function createDivisibilityProblemFactory(fn) {
    return [numerator, denominator]
}
const fixmoneyobj = {
    '(?<=costs )[\\d.]+': (x) => '$' + x,
    'costs [\\d.]+': (x) => 'costs $' + x.slice(6),
    'costs ([\\d.]+)': (_, x) => 'costs $' + x,
}

const isDecimal = createTest('^0\\.', (x) => x > -1 && x < 1)
const Option = {
    reverse: 'reverse',
}

// example
// const coinobj = transmuteObject(
    // 'penny 1  nickel 5  dime 10  quarter 25  half-dollar 50  dollar 100  fiver 500',
    // Option.reverse
// )
// console.log( coinobj)

function transmuteObject(s, reverse = null) {
    return toDictionary(getLineInfoMAPS(s), reverse)
}

const primeNumbers = [
    2,
    3,
    5,
    7,
    11,
    13,
    17,
    19,
    23,
    29,
    31,
    37,
    41,
    43,
    47,
    53,
    59,
    61,
    67,
    71,
    73,
    79,
    83,
    89,
    97,
    101,
    103,
    107,
    109,
    113,
    127,
    131,
    137,
    139,
    149,
    151,
    157,
    163,
    167,
    173,
    179,
    181,
    191,
    193,
    197,
    199,
    211,
    223,
    227,
    229,
    233,
    239,
    241,
    251,
    257,
    263,
    269,
    271,
    277,
    281,
    283,
    293,
    307,
    311,
    313,
    317,
    331,
    337,
    347,
    349,
    353,
    359,
    367,
    373,
    379,
    383,
    389,
    397,
    401,
    409,
    419,
    421,
    431,
    433,
    439,
    443,
    449,
    457,
    461,
    463,
    467,
    479,
    487,
    491,
    499,
    503,
    509,
    521,
    523,
    541,
    547,
    557,
    563,
    569,
    571,
    577,
    587,
    593,
    599,
    601,
    607,
    613,
    617,
    619,
    631,
    641,
    643,
    647,
    653,
    659,
    661,
    673,
    677,
    683,
    691,
    701,
    709,
    719,
    727,
    733,
    739,
    743,
    751,
    757,
    761,
    769,
    773,
    787,
    797,
    809,
    811,
    821,
    823,
    827,
    829,
    839,
    853,
    857,
    859,
    863,
    877,
    881,
    883,
    887,
    907,
    911,
    919,
    929,
    937,
    941,
    947,
    953,
    967,
    971,
    977,
    983,
    991,
    997,
]
const indentfour = '    '
cssstring = `
body {
  background: #e2e1e0;
  text-align: center;
}

.card {
  background: #fff;
  border-radius: 2px;
  display: inline-block;
  height: 300px;
  margin: 1rem;
  position: relative;
  width: 300px;
}

.bsa {
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}

.bsb {
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}

.bsc {
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}

.bsd {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

.bse {
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
}
`
function reduced2(items, parser, acc) {
    return items.reduce(parser, acc)
}
let block_end_delimiter_js = '}'
let block_end_delimiter_py = ''
let block_start_delimiter_js = ' {'
let block_start_delimiter_py = ':'
let GLOBAL_TIMEOUT_ID = null
function clampedArrayValue(array, index) {
    myIndex = Math.min(array.length - 1, Math.max(0, index))
    return array[myIndex]
}

function getFunctionActionName(action) {
    return action.name || action.toString().match(/\w.+?\(.*?\)/)[0]
}
const abcde = ['a', 'b', 'c', 'd', 'e']

function textSprawl9000(items, start, { direction = 'forward', join = '\n' } = {}) {
    let store = []
    let line

    if (direction == 'backward' || direction == 'both') {
        if (items.length > 1) {
            while (isEmpty(items[start]) || isEmpty(items[start + 1])) {
                start += 1
            }
        }
        for (let i = start - 1; ; i--) {
            line = items[i]

            if (line && line.trim()) {
                store.push(line)
            } else {
                break
            }
        }

        store.reverse()
    }

    if (direction == 'forward' || direction == 'both') {
        for (let i = start; ; i++) {
            line = items[i]

            if (line && line.trim()) {
                store.push(line)
            } else {
                break
            }
        }
    }
    return store.join(join)
}
function cmLineSprawl(cm, n = 1) {
    let { line, ch } = cm.getCursor()
    while (!test('^\\w', this.codemirror.getLine(line))) {
        n--
    }
    return n
}
function cmWordUnderCursor(cm) {
    const word = cm.findWordAt(cm.getCursor())
    console.log(word, 'word')
    const range = cm.getRange(word.anchor, word.head)
    console.log('range', range)
    return range
}

const nestedobj = { a: { b: { c: 'd' } } }
const aa = [[[1, 2, 3], 'hi']]

const transmute = (aa) => {
    return aa.map((item) => {
        let last = item.pop()
        return [item, last]
    })
}
function getDateInfo() {
    const date = new Date()
    return {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
    }
}
function getCurrentMonth() {
    return new Date().getMonth()
}

function getCurrentYear(mode = '') {
    const product = new Date().getFullYear()
    return (mode == 'string' || mode == String) ? String(product) : product
}
function getHoursAndAmpm(date) {
    hours = date.getHours()
    let ampm
    if (hours > 12) {
        hours -= 12
        ampm = 'PM'
    } else {
        ampm = 'AM'
    }

    const minutes = padder(date.getMinutes())
    const seconds = padder(date.getSeconds())
    return [padder(hours), ampm, minutes, seconds]
}

const padder = (s) => String(s).padStart(2, '0')

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
function getParserHandler(x) {
    let parserHandler
    if (isString(x)) {
        parserHandler = () => x
    } else {
        parserHandler = x
    }
    return parserHandler
}
function modifyObjectInPlace(obj, listOrString, val) {
    if (isArray(listOrString)) {
        for (let item of listOrString) {
            obj[item] = val
        }
    } else {
        obj[listOrString] = val
    }
}

function formatDate(s) {
    // console.log( s)
    return s + 'foo'
    if (test('-\\d-', s)) {
        return s.replace(/(?<=^|-)\d(?=-)/g, (x) => '0' + x)
    }
    if (test('^\\d{4}$', s)) {
        return s.slice(0, 2) + '-' + s.slice(2, 4) + '-' + getYear()
    } else {
        return s
    }
}

const numberBoundaryREGEX = /(?<=\D)(?=\d)|(?<=\d)(?=\D)/
const allmonthnames = [
    'jan',
    'feb',
    'mar',
    'march',
    'apr',
    'april',
    'may',
    'jun',
    'june',
    'jul',
    'july',
    'aug',
    'august',
    'sep',
    'september',
    'oct',
    'october',
    'nov',
    'november',
    'dec',
    'december',
    'january',
    'februrary',
]
const shortmonthnames = [
    'jan',
    'feb',
    'march',
    'apr',
    'may',
    'june',
    'july',
    'aug',
    'sep',
    'oct',
    'nov',
    'dec',
    'today',
    'time',
    'full',
    'putmoreinhere',
]
const namefixobject = {
    'zz[\\w-]+': (x) => x.slice(2).replace(/-/g, ' ').toUpperCase(),
    '\\bz(?!eb|en)[\\w-]+': (x) => capitalize(x.slice(1)),
    // 'z(?!eb|en)(\\w+)': (_, a) => capitalize(a),
}
const datefixobject = {
    [Regex2(shortmonthnames, { capture: true }) + ' ?(\\d+)']: (_, month, day) => {
        if (month == 'today') return datestamp('%M-%D-%Y')
        if (month == 'time') return datestamp('time')
        if (month == 'time') return datestamp('full')
        month = shortmonthnames.indexOf(month) + 1
        return datestamp('%M-%D-%Y', month, day)
    },
}

const dicta = { a: 'a', b: 'boo' }
const dictb = { b: 'b' }
const dictc = { c: 'c' }
function rewriteAccentGraves(s) {
    return parens(
        s.replace(/`.*?`/g, (x) => {
            return x
                .slice(1, -1)
                .replace(/\'/g, "\\'")
                .replace(/\${.*?}/g, (y) => {
                    return "' + " + y.slice(2, -1) + " + '"
                })
        }),
        'sq'
    )
}

function rpwo(file, parser, outpath) {
    write(outpath, parser(read(file)))
}

function PRETTIER(file = 'utils.js') {
    rpwo(file, prettify)
}
function prettify(s) {
    const prettier = require('prettier')
    const options = {
        arrowParens: 'always',
        bracketSpacing: true,
        printWidth: 100,
        parser: 'babel',
        tabWidth: 4,
        semi: false,
        singleQuote: true,
    }
    return prettier.format(s, options)
}
const pyBlockRE =
    '^\\w+ *= *((?<!\\\\)"""[\\W\\w]+?(?<!\\\\)"""|(?<!\\\\)\'\'\'[\\w\\W]+?(?<!\\\\)\'\'\'.*)\\n*'
const pyCommentRE = '^ *# *(.*)\\n*'

function isBetween(a, b, value) {
    return value >= a && value <= b
}
function toPercentage(numerator, denominator) {
    return 100 * (numerator / denominator)
}
function rounded(numerator, denominator, breakpoint = 25) {
    const p = toPercentage(numerator, denominator)
    for (let n = 1; ; n++) {
        if (p < breakpoint * n) {
            return breakpoint * n
        }
    }
}

const plogs = [(...args) => console.log('success', args), (...args) => console.log('fail', args)]
function stringInsert(s, index, content) {
    if (index > 0) {
        return s.substring(0, index) + content + s.substr(index)
    }
    return content + s
}

const looksLikeShortGreetingRE = '^(?:howdy|hola|bonjour|hi|hello)[\\w \'".?]{0,15}$'
const looksLikeHolidayGreetingRE = 'merry christmas|happy thanksgiving'
const looksLikeExcerptRE = 'asdfjsdafiasdf'
const looksLikeBlockQuoteRE = '[\'"].*?[\'"] - [\\w \'".]+$'

const looksLikeTitleRE = '\\w+ \\w+.*?:$'
const hasMultipleSentencesRE = '(?<=\\w)  (?=\\w)|\\n|(?:\\w.*?[?.,!] ){2,}'

function createCapitals(arr) {
    const store = []
    for (let item of arr) {
        store[item] = capitalize(item)
    }
    return store
}

const pmwb = {
    sug: 'suggestion',
    sugs: 'suggestions',
    stfuf: 'stuff',
    myfiddle: 'https://jsfiddle.net/gh/get/library/pure/kdog3682/codesnippets/tree/master/Demo/',
    alu: 'aluminum',
    usly: 'usually',
    exped: 'experienced',
    aytap: 'appreciate your tips and advice',
    lets: "let's",
    t4yh: 'thanks for your help',
    t4yi: 'thanks for your input',
    ael: 'addEventListener',
    pls: 'please',
    intrd: 'interested',
    bable: 'be able',
    prob: 'problem',
    probs: 'problems',
    lks: 'likes',
    prog: 'progress',
    jst: 'just ',
    bst: 'best',
    ck: 'cook',
    stl: 'still',
    wich: 'which',
    thsi: 'this',
    oft: 'often',
    sv: 'save',
    svs: 'saves',
    wrd: 'word',
    wrds: 'words',
    bndry: 'boundary',
    bndries: 'boundaries',
    wrds: 'words',
    abt: 'about',
    lang: 'language',
    '2gethr': 'together',
    wknd: 'weekend',
    wknds: 'weekends',
    shct: 'shortcut',
    shcts: 'shortcuts',
    bt: 'but',
    wrk: 'work',
    estabd: 'established',
    estab: 'establish',
    prsn: 'person',
    prsns: 'persons',
    lk: 'like',
    grnd: 'ground',
    cssrem: 'rem',
    t4yr: 'thanks for your reply',
    lmk: 'let me know',
    q: 'question',
    mite: 'might',
    tfyhas: 'thanks for your help and support',
    t4yhas: 'thanks for your help and support',
    tfyhasitm: 'thanks for your help and support in this matter',
    t4yhasitm: 'thanks for your help and support in this matter',
    alilbit: 'a little bit',
    ntbi: 'not the best idea',
    hm: 'how much',
    algos: 'algorithms',
    algo: 'algorithm',
    org: 'organize',
    chld: 'child',
    wil: 'will',
    whr: 'where',
    wheres: "where's",
    ezier: 'easier',
    absrb: 'absorb',
    "// '4": 'for',
    tyvm: 'Thank you very much',
    ty: 'thanks',
    thx: 'thanks',
    thot: 'thought',
    thots: 'thoughts',
    evone: 'everyone',
    wrt: 'with respect to',
    lrnd: 'learned',
    mch: 'much',
    frm: 'from',
    fbafw: 'for better and for worse',
    alwd: 'allowed',
    tkn: 'taken',
    tken: 'taken',
    insts: 'instances',
    serches: 'searches',
    iisc: 'it is correct',
    acheve: 'achieve',
    justinyan: 'Justin Yan',
    queyr: 'query',
    fut: 'future',
    gens: 'generations',
    '2gthr': 'together',
    cur: 'current',
    inc: 'include',
    info: 'information',
    'b/c': 'because',
    pri: 'priority',
    acs: 'access',
    bc: 'because',
    freq: 'frequent',
    freqly: 'frequently',
    freqcy: 'frequency',
    wnt: 'want',
    srs: 'serious',
    c: 'c',
    isc: 'is correct',
    isinc: 'is incorrect',
    'w/': 'with',
    vry: 'very',
    alw: 'allow',
    strt: 'start',
    ltrs: 'letters',
    shtct: 'shortcut',
    tht: 'that',
    posble: 'possible',
    posbly: 'possibly',
    src: 'source',
    thn: 'then',
    thts: 'thats',
    imdly: 'immediately',
    otherwse: 'otherwise',
    kev: 'Kev',
    colab: 'collaboration',
    rsns: 'reasons',
    infrnt: 'infront',
    althou: 'although',
    althgh: 'although',
    thr: 'there',
    bel: 'believe',
    exprsd: 'expressed',
    td: 'today',
    '2d': 'to do',
    anyo: 'anyone nemor anymore',
    comp: 'computer',
    buildup: 'build-up',
    whl: 'while',
    dich: 'dichotomy',
    whil: 'while',
    evning: 'evening',
    evnings: 'evenings',
    strng: 'strong',
    frc: 'force',
    kp: 'keep',
    grw: 'grow',
    grwing: 'growing',
    grws: 'grows',
    posibl: 'possible',
    svd: 'saved',
    ctina: 'Christina',
    azn: 'Asian',
    hpns: 'happens',
    hpn: 'happen',
    vm: 'very much',
    lern: 'learn',
    lerning: 'learning',
    supp: 'suppose',
    stuf: 'stuff',
    ltly: 'lately',
    drp: 'drop',
    drping: 'dropping',
    occ: 'occassion',
    occs: 'occassions',
    stmch: 'stomach',
    fls: 'feels',
    rn: 'right now',
    dunno: "don't know",
    y: 'why',
    mtr: 'matter',
    mtrd: 'mattered',
    mtrs: 'matters',
    arnd: 'around',
    goin: 'going',
    efrt: 'effort',
    arnt: "aren\\'t",
    dir: 'directory',
    val: 'value',
    '4evr': 'forever',
    dng: 'doing',
    ev: 'every',
    chngs: 'changes',
    chng: 'change',
    comf: 'comfortable',
    suprt: 'support',
    sprt: 'sport',
    imd: 'immediate',
    hap: 'happen',
    aprox: 'approximately',
    wts: "what's",
    ez: 'easy',
    undrstnding: 'understanding',
    lst: 'list',
    whte: 'white',
    hoisauce: 'Hoisin Sauce',
    hoisinsauce: 'Hoisin Sauce',
    sbs: 'slowly, but surely',
    isnc: 'it is incorrect',
    mayo: 'mayonaise',
    actuly: 'actually',
    basicly: 'basically',
    prply: 'properly',
    alumin: 'aluminum',
    frds: 'friends',
    frd: 'friend',
    pls: 'please',
    u: 'you',
    'chkpt/s': 'checkpoint',
    reqd: 'required',
    lazzefair: 'laizze-faire',
    emc: 'EMC Learning Center',
    loc: 'location',
    evn: 'even',
    'folo/s': 'follow',
    cr8: 'create',
    delish: 'delicious',
    delishh: 'delish',
    'msg/s': 'message',
    brg: 'bring',
    srcs: 'sources',
    hvnt: "haven't",
    nethg: 'anything',
    slping: 'sleeping',
    nds: 'needs',
    wo: 'without',
    bu: 'back-up',
    thxus: 'than-yous',
    cnt: "can\\'t",
    cn: 'cannot',
    thnking: 'thinking',
    '4ward': 'forward',
    lrg: 'large',
    lrgr: 'larger',
    hrd: 'hard',
    hardr: 'harder',
    hrdr: 'harder',
    mks: 'makes',
    mk: 'make',
    transltn: 'translation',
    cmpnt: 'component',
    '2m': 'too much',
    erlier: 'earlier',
    xchg: 'exchange',
    xchng: 'exchange',
    mself: 'myself',
    fl8: 'feeling',
    'mser/s': 'middle school student',
    'hser/s': 'high school student',
    '7': 'and',
    diffly: 'differently',
    wrld: 'world',
    chldrn: 'children',
    awa: 'as well as',
    ne: 'any',
    'gv/s': 'give',
    aea: 'appreciate everyone’s advice on this',
    chg: 'change',
    absly: 'absolutely',
    ull: "you'll",
    chi: 'Chinese',
    nthg: 'nothing',
    gdrive: 'Google Drive',
    '2day': 'today',
    '2mrw': 'tomorrow',
    ans: 'answer',
    on2: 'onto',
    tgether: 'together',
    '2gether': 'together',
    adverts: 'advertisements',
    stdnts: 'students',
    cb: 'Challenge Basketball',
    brk: 'break',
    wrg: 'wrong',
    sm: 'some',
    wimsies: 'whimsies',
    diffs: 'difficulties',
    nvr: 'never',
    speces: 'species',
    alota: 'a lot of',
    eff: 'effect',
    becom: 'become',
    mor: 'more',
    mems: 'memories',
    mem: 'memory',
    mech: 'mechanism',
    rem: 'remember',
    lving: 'living',
    hnging: 'hanging',
    mightve: "might've",
    wudve: "would've",
    cudve: "could've",
    wndr: 'wonder',
    diss: 'this is',
    dese: 'of these',
    abrevs: 'abbreviations',
    abrev: 'abbreviation',
    helthy: 'healthy',
    gon: 'going to',
    dnt: "don't",
    nec: 'necessary',
    pert: 'pertinent',
    uncomf: 'uncomfortable',
    fing: "f'ing",
    asp: 'aspect',
    deving: 'developing',
    dev: 'Devin',
    lifecy: 'lifecycle',
    rly: 'really',
    adv: 'advantage',
    nxt: 'next',
    lvl: 'level',
    ty4g: 'Thanks for your guidance',
    tyfg: 'thanks for your guidance',
    somehow: 'some how',
    opp: 'opportunity',
    def: 'definitely',
    defly: 'definitely',
    '2b': 'to be',
    smo: 'someone',
    essen: 'essentially',
    essly: 'essentially',
    sig: 'significant',
    sigly: 'significantly',
    twoc: 'The Way of China',
    twoa: 'The Way of America',
    ist: 'is to',
    spk: 'speak',
    tangi: 'tangible',
    cc: 'chit-chat',
    dled: 'downloaded',
    dl: 'download',
    popu: 'population',
    leggo: "Let's go",
    smtimes: 'sometimes',
    ppls: "people's",
    ppl: 'people',
    istaw: 'is there a way',
    imo: 'in my opinion',
    alrdy: 'already',
    facetime: 'FaceTime',
    btwn: 'between',
    waterb: 'waterbottle',
    esq: 'esque',
    imp: 'important',
    '4ever': 'forever',
    ftham: 'Fort Hamilton',
    fav: 'favorite',
    yamisuke: 'Yami Sukehiro',
    incorec: 'incorrect',
    corec: 'correct',
    nye: "New Year's Eve",
    envs: 'environments',
    bball: 'basketball',
    yr: 'year',
    aong: 'along',
    tpofgr: 'the path of greatest resistance',
    rslts: 'results',
    rslt: 'result',
    tpoflr: 'the path of least resistance',
    ctown: 'C-Town',
    bingo: 'Bingo',
    advs: 'advantages',
    dec: 'December',
    mar: 'March',
    feb: 'Februrary',
    jan: 'January',
    noness: 'nonessential',
    recs: 'recommends',
    drei: 'Andrei',
    anythg: 'anything',
    esp: 'especially',
    viet: 'Vietnamese',
    ese: 'else',
    fe: 'for example',
    xtra: 'extra',
    nding: 'needing',
    yt: 'Youtube',
    evplace: 'every place',
    whenev: 'whenever',
    lrn: 'learn',
    gv: 'give',
    fl: 'feel',
    ephemeraly: 'ephemerally',
    evwhere: 'everywhere',
    hving: 'having',
    lkd: 'liked',
    alwys: 'always',
    ml: 'Maylynn',
    fam: 'family',
    ralph: 'Ralph',
    lauren: 'Lauren',
    utube: 'YouTube',
    jayden: 'Jayden',
    darren: 'Darren',
    beleve: 'believe',
    thou: 'though',
    thru: 'through',
    bobby: 'Bobby',
    evt: 'everything',
    ur: 'your',
    thnk: 'think',
    ssp: 'Sunset Park',
    b: 'be',
    itic: "I think it's correct",
    folo: 'follow',
    mygithubvimrc: 'https://raw.githubusercontent.com/kdog3682/backup/master/.vimrc',
    mygithubbashrc: 'https://raw.githubusercontent.com/kdog3682/backup/master/.bashrc',
    mypersonalwebsite: 'https://zzsdfidsfsfdasdf',
    myemail: 'kdog3682@gmail.com',
    ayga: 'Appreciate your advice',
    ubiq: 'ubiquitous',
    ubiqitis: 'ubiquitous',
    t4yh: 'Thanks for your help',
    aygaot: "Appreciate your guys's advice on this",
    ayaot: 'Appreciate your advice on this',
    tyvm4th: 'Thank you very much for the help',
    tis: 'this is',
    hw: 'homework',
    tfth: 'Thanks for the help',
    t4th: 'Thanks for the help',
    gonna: 'going to',
    st: 'start',
    wanna: 'want to',
    w: 'with',
    abble: 'able',
    dne: '!=',
    wasnt: "wasn't",
    lking: 'looking',
    didnt: "didn't",
    evr: 'ever',
    fevr: 'forever',
    hapd: 'happened',
    hapn: 'happen',
    np: 'No Problem',
    npaa: 'No problem at all!',
    purp: 'purpose',
    ts: 'this',
    t: 'the',
    ot: 'of this',
    cls: 'class',
    mny: 'money',
    isto: 'is to',
    tpo: 'the purpose of',
    prp: 'purpose',
    receve: 'receive',
    evo: 'everyone',
    tu: 'thank you',
    wen: 'when',
    nd: 'need',
    thgs: 'things',
    simp: 'simple',
    diff: 'difference',
    diffi: 'difficulty',
    xmas: 'Christmas',
    thxgiving: 'Thanksgiving',
    mxmas: 'Merry Christmas',
    sry: 'sorry',
    receved: 'received',
    haneka: 'Hanukkah',
    lbrphone: '----------',
    lbr: '----------',
    ty4th: 'Thanks for the help!',
    im: "I'm",
    evthg: 'everything',
    wd: 'would',
    sd: 'should',
    wt: 'what',
    Thx: 'Thanks',
    thg: 'thing',
    smth: 'something',
    doesnt: "doesn't",
    whats: "what's",
    euivalent: 'equivalent',
    ive: "I've",
    b4: 'before',
    tmrw: 'tomorrow',
    mv: 'move',
    hv: 'have',
    ny: 'New York',
    bklyn: 'Brooklyn',
    wa: 'Washington',
    i: 'I',
    its: "it's",
    itz: 'its',
    r: 'are',
    theyre: "they're",
    hasnt: "hasn't",
    wud: 'would',
    youre: "you're",
    arent: "aren't",
    wudnt: "wouldn't",
    shud: 'should',
    shudve: "should've",
    shudnt: "shouldn't",
    becky: 'Becky',
    maylynn: 'Maylynn',
    obs: 'observation',
    obss: 'observations',
    exp: 'experience',
    exps: 'experiences',
    reg: 'regular',
    eo: 'everyone',
    tm: 'tomorrow',
    prep: 'prepare',
    cud: 'could',
    cudnt: "couldn't",
    gm: 'Good morning',
    prbly: 'probably',
    dont: "don't",
    wont: "won't",
    dis: 'this',
    gud: 'good',
    isnt: "isn't",
    couldnt: "couldn't",
    shouldnt: "shouldn't",
    wouldnt: "wouldn't",
    cant: "can't",
    hey: 'Hey',
    ex: 'example',
    exs: 'examples',
    thats: "that's",
    diffclty: 'difficulty',
    diffclt: 'difficulty',
}
const nameswapdict = {
    Regex: 'Regex2',
    mrep2: 'mreplace',
}
const myabc = ['a', 'b', 'c', 'd', 'e']
const abc = 'a b c'

const borderBottomRE = '(b[trbl](?!ue))(\\d*)(px|em)?(solid|dotted)?([a-z]\\d*)'
const mymap = {
mynumber:'425-381-0608',
myphonenumber:'425-381-0608',
mypn: '425-381-0608',
    craigslistinfo:
        'Hello,\nIf this room is still available,\nI am interested in taking a look.\n\nThanks,\nKevin\n\nPersonal Information\nSeeking to move in for:  January 1st, 2021\nAge: 30\nSex: Male\nOccupation: Web Design\nPhone: 425-381-0608\nFree times to view the room: (Weekends after 2pm, Weekdays after 5pm)',
}

const snsn = '\n\n'
const snsnsn = '\n\n\n'

function read(file, parse = true) {
    const fs = require('fs')
    file = __dirname + '/' + file
    let text = fs.readFileSync(file, 'utf8')
    // console.log( text )
    return parse ? parseJSON(text) : text
}

const enderbracketcomma = '},\n\n'
const vuekeys = ['mounted', 'components', 'props', 'template', 'data', 'methods', 'computed', 'watch']
const masterStore = {}

function tryHandler(fn) {
    try {
        return fn()
    } catch (e) {
        return { error: e.message }
    }
}
function jsPrintStatementParser(s) {
    if (test('\\w+\\.\\w+', s)) return 'console.log(' + s + ')'
    if ((test('\\w+ \\w+|hi|abc|hello'), s)) return "console.log('" + s + "')"
    else return 'console.log(' + s + ')'
}

function pyPrintStatementParser(s) {
    return 'print(' + s + ')'
}

function getBracketChunks(s) {
    const regex = '[^]+?\n}'
    return findall(regex, s)
}
function createInVivoDocs(s) {
    console.log([s])
    const getDocName = (s) => {
        const firstWord = getFirstWord(s)
        if (['for', 'if'].includes(firstWord)) {
            return firstWord
        } else {
            return 'humzle'
        }
    }
    const store = new Store()
    const chunks = getBracketChunks(s)
    chunks.forEach((item) => {
        const name = getDocName(item)
        const js = tryHandler(() => checkjs(betterText(item, 'js')))
        const py = tryHandler(() => betterText(item, 'py'))
        product = { js, py, original: item }
        store.add(name, product)
    })
    return store.value
}

const notetags = ['422', '972', '726', '1119']
const greetingdict = {
    morning: [
        'Greatest of mornings to thee.',
        'Ahoy matey! What a delectable surprise to see you so early.', 
    ],
}




function getTimeOfDay() {
    const hours = new Date().getHours()
    if (hours == 0) return 'midnight'
    if (hours < 4) return 'wee-hours'
    if (hours < 7) return 'early-morning'
    if (hours < 11) return 'morning'
    if (hours == 12) return 'noon'
    if (hours < 16) return 'afternoon'
    if (hours < 20) return 'evening'
    if (hours < 24) return 'late-evening'
}
async function personalAssistant({
    weather = true,
    date = true,
    reddit = false,
    todos = false,
    messages = false,
    user = 'Kevin',
} = {}) {}

function readmeParser(s) {}
function cmCursorForward(cm) {
    let start = cm.getCursor().line
    let peek

    for (let i = start + 1; i <= cm.lastLine(); i++) {
        line = cm.getLine(i)
        if (!line.trim()) {
            cm.setCursor({ line: i, ch: 1000 })
            break
        }

        peek = cm.getLine(i + 1).trim()

        if (!peek) {
            cm.setCursor({ line: i, ch: 1000 })
        }
    }
}

function letterToNumber(letter) {
    return letter.charCodeAt(0) - 96
    return String.fromCharCode(97 + n)
    return alphabet.indexOf(letter) + 1
}
function cmCursorBack(cm) {
    const { line } = cm.getCursor()
    try {
        cm.setCursor({ line: line - 1, ch: cm.getLine(line - 1).length - 1 })
    } catch (e) {
        console.log(e)
    }
}
const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
]

const ALPHABET = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
]

const _ = null

const smartCapitalizeRE =
    '(?<!www\\.|babel\\.|this\\.|codemirror\\.)(?!txt|js|css|com|net|org|io)(?<=^|\\n|\\? |\\.nl ?|nb |qm |\\. ?|! |1 |\\) ?)(?!vimrc|bashrc|bash|py|js|css|html)[a-zA-Z]'
function colonCapitalizer(s) {
    s = s.replace(/-/g, ' ')

    if (s.startsWith('::')) {
        return s.slice(2).toUpperCase()
    }
    return capitalize(s.slice(1))
}

const capQuestionRE = '(?<=[a-z])\\? ?[a-z]'

const toPercentageRE = '\\b\\d\\d+p\\b'
const colonCapitalizeRE = ':+[a-zA-Z-]+'
const addParensRE = '9[a-zA-Z].*?[a-z.!]0'

function capOrPeriod(s, index, original) {
    const offset = original[index - 1]
    console.log(offset)
    if (offset && offset.trim()) return s + '.'
    return capitalize(s)
}

const capPeriodRE =
    '^[a-z]|(?<!www|babel|this|codemirror)(?:\\?|\\.)(?!bashrc|vimrc|bash|py|txt|js|css|com|net|org|io) ?[a-z]|[a-z]$'

const grammarObject = {
    [addParensRE]: (x) => '(' + x.slice(1, -1) + ')', //add parens
    [colonCapitalizeRE]: colonCapitalizer,
    [toPercentageRE]: (x) => x.replace('p', '%'), // give percentage
    [capPeriodRE]: (x, offset, original) => {
        if (offset == 0) return capitalize(x)
        if (x.length == 1 && original[offset - 1] == '\n') {
            if (original[offset - 3] == '.') return capitalize(x)
            // console.log( original[offset-1])
            // console.log( original[offset-2])
            // console.log( original[offset-3])
            // console.log( original[offset-4])
            return capitalize(x)
        }
        if (x.length == 3) {
            return x.slice(0, 2) + capitalize(x.charAt(2))
        }
        let match = search('[.?]', x)
        if (match) {
            return match + ' ' + capitalize(x.slice(1))
        } else {
            return x + '.'
        }
    },
}

const simpleAttrRE = '(\\S+) ?= ?(\\S+)'
const startingAttrRE = '^(\\S+)=(\\S+)'
const advancedAttrRE = '(\\S+)=(.*?)(?=  |$)'
function visible2(s) {
    return s.replace(/\s/g, (x) => {
        switch(x) {
            case ' ':  return '*'
            case '\n': return '\\n'
            case '\t': return '\\t'
        }
    })
}

function visible(s) {
    let product
    if (isArray(s)) {
        product = s.join(lbr('break'))
    } else {
        try {
            // s = s.trim()
            if (test('\\\\n', s)) return s.replace(/\\n/g, '\n')
            product = s.replace(/\n/g, '\\n')
        } catch {
            product = s
        }
    }
    product = product.replace(/ /g, '*')
    // console.log(product)
    return product
}
function grammarcheck(text) {
    return textsplitter(allrep(text, grammarObject), fixline)
}
function prosecheck(text) {
    text = spellcheck(text)
    text = grammarcheck(text)
    return text
}
function attrgetter(s) {
    const [text, store] = mreplace(simpleAttrRE, s)
    if ('author' in store) store.author = capitalize(store.author, 'author')
    if ('quote' in store) store.quote = capitalize(store.quote, 'author')
    store.text = prosecheck(text)
    return store
}
function posterParser(s) {
    if (!test('div |container ', s)) return attrgetter(s)
    else {
        const toWordDict = (s) => {
            return toLines(s.trim()).reduce((acc, item, i) => {
                acc[alphabet[i]] = item
                return acc
            }, {})
        }

        let [wordItems, lines] = splitOnce(s, '\n\n')
        const wordDict = toWordDict(wordItems)

        const addWordsIn = (s) => {
            return toLines(s)
                .map((line) => {
                    let match = getFirstWord(line)
                    if (match in wordDict) {
                        return replace(
                            '^( *)' + match,
                            (_, spaces) =>
                                spaces + 'div .' + match.repeat(2) + ' ' + wordDict[match],
                            line,
                            ''
                        )
                    }
                    return line
                })
                .join('\n')
        }

        const html = addWordsIn(lines)
        return htmlParser(html)
    }
}
function blogParser(s) {
    s = spellcheck(s)
    const lines = s.split('\n')
}
const guidelinewords = {
    start: 'no try always do                ',
    end: 'no try                ',
    default: 'no try                ',
}

const reflectionwords = {
    start: '                ',
    end: '               ',
    default: 'correct mistake               ',
}

const todowords = {
    start: '                ',
    end: '               ',
    default: 'need               ',
}

function wordDictToRegex(dict) {
    return Object.entries(dict)
        .reduce((acc, [k, v]) => {
            product = Regex(v.trim().split(' '), k)
            if (product) acc.push(product)
            return acc
        }, [])
        .join('|')
}

function argParser(args, arr) {
    const entry = arr[args.length - 1]
    if (!entry) return args
    if (isArray(entry)) {
        return entry.reduce((acc, item, i) => {
            if (item === true) acc.push(args.shift())
            else {
                acc.push(item)
            }
            return acc
        }, [])
    }

    if (isObject(entry)) {
        return Object.entries(entry).reduce((acc, [k, v], i) => {
            if (v === true) acc[k] = args.shift()
            else {
                acc[k] = v
            }
            return acc
        }, {})
    }
}

function toVueComponent(...args) {
    let [name, val, mode] = argParser(args, [
        ['', true, 'root'],
        [true, true, 'component'],
    ])

    if (isObject(val)) {
        val = createVueStringFromObject(val)
    }
    if (mode == 'root' || name == 'root') {
        return 'new Vue(' + val + ').$mount("#app")'
    }
    if (mode == 'component') {
        return 'Vue.component(' + parens(name, 'dq') + ', ' + val + ')'
    }
    if (mode == 'official') return 'dfd not yet '
}

function downloadStorage(key = null) {
    if (!key) {
        return download('localstorage.json', stringify(localStorage))
    }
    const store = {}
    const keys = getStorageKeys(lambdaAction(key))
    const outpath = key ? key : 'localStorage.json'

    for (let k of keys) {
        store[k] = getStorage(k)
    }

    download(outpath, toString(store))
}
// How would you rewrite this to the same effect, without using eval?

function evaluator(s) {
    function runner(s) {
    try {
       return eval(s)
    } catch (e) {
        return e
    }
    }
    return stringify(runner(s))
}


const dmap = { x: ['left', 'right'], y: ['top', 'bottom'] }
function checkOverflow() {
    var docWidth = document.documentElement.offsetWidth

    const { forEach } = []
    forEach.call(document.querySelectorAll('*'), function (el) {
        if (el.offsetWidth > docWidth) {
            console.log(el, 'exceeds width')
            console.log(el.offsetWidth, docWidth)
        }
    })
}

function cmScrollIntoView(cm) {
    cm.scrollIntoView(cm.getCursor())
}
function cmAppendContent(cm, content = '') {
    cm.replaceRange('\n' + content, { line: cm.lastLine(), ch: 10000 })
}

function cmDeleteLine(cm, content = '') {
    cm.replaceRange(content, ...cmRangeHelper(cm))
}
function vueBrackify(s) {
    return parens(indent(s), 'brackify')
}

function browserPrettierAll(s) {
    console.log('starting prettier for all')
    let result
    const options = {
        tabWidth: 4,
        semi: false,
        singleQuote: true,
        printWidth: 120,
        parser: 'babylon',
    }
    const map = [
        { inclusive: true, parser: 'html', startRE: '<html>', endRE: '</html>' },
        { inclusive: false, parser: 'babylon', startRE: '<script>\n', endRE: '\n</script>' },
        { parser: 'css', startRE: '<style>', endRE: '</style>' },
    ]
    const regex = map
        .map((item) => parens(captureBetween(item.startRE, item.endRE, item.inclusive)))
        .join('|')

    return replace(
        regex,
        (_, a, b, c) => {
            let parser, x
            if (a) {
                parser = 'html'
                x = a
            } else if (b) {
                parser = 'babylon'
                x = b
            } else if (c) {
                parser = 'css'
                x = c
            }
            try {
                return prettier
                    .format(x, { ...options, ...{ parser: parser } })
                    .replace(/;<script/g, '<script')
            } catch (e) {
                console.log(e.message)
                console.log(x)
                throw 'error at pp'
                return x
            }
        },
        s
    )
}
function isUrl(s) {
    return test('^http|\\.(?:www|com|net|io|org)', s)
}

const PRETTIER_OPTIONS = {
    arrowParens: 'always',
    bracketSpacing: true,
    printWidth: 100,
    parser: 'babel',
    tabWidth: 4,
    semi: false,
    singleQuote: true,
}

function cssprettier(s) {
    if (!isBrowser()) prettier = require('prettier')
    return prettier.format(s, { ...PRETTIER_OPTIONS, ['parser']: 'css' })
}

function jsprettier(s) {
    try {
        return prettier.format(s, PRETTIER_OPTIONS)
    } catch {
        return s
    }
}
function unminifyParser(s) {
    let lang = 'js'
    let name = 'unminified.'
    const callback = (s) => {
        const product = browserPrettier(s)
        downloadFile(name + lang, product)
    }

    if (isUrl(s)) {
        requestSync(s, callback)
    }
}

const datelib = {
    isEaster: function (date) {
        var easterSundays = [new Date(2020, 3, 12), new Date(2021, 3, 4), new Date(2022, 3, 17)]

        var timestamp = date.getTime()
        for (var i = 0; i < easterSundays.length; i++) {
            var easterSunday = easterSundays[i]
            var oneDay = 24 * 60 * 60 * 1000
            var minDay = easterSunday.getTime() - 7 * oneDay
            var maxDay = easterSunday.getTime() + oneDay
            if (timestamp >= minDay && timestamp < maxDay) {
                return true
            }
        }
        return false
    },
    isHalloween: function (date) {
        return date.getDate() >= 28 && date.getDate() <= 31 && date.getMonth() == 9
    },
    isValentinesDay: function (date) {
        r
        return date.getDate() === 14 && date.getMonth() === 1
    },
    isXmas: function (date) {
        return date.getMonth() == 11 && date.getDate() >= 6 && date.getDate() <= 26
    },

    isThanksgiving: function (date) {
        var SUNDAY = 0
        var THURSDAY = 4
        var NOVEMBER = 10 //JavaScript's stupid 0-based month count
        var ONE_DAY = 24 * 60 * 60 * 1000
        var d = date
        if (d.getDay() !== SUNDAY && d.getDay() < THURSDAY) {
            return false
        }
        for (var i = 0; i < 4; i++) {
            if (d.getDay() === THURSDAY) {
                break
            } else {
                d = new Date(d - ONE_DAY)
            }
        }
        return d.getDate() >= 22 && d.getDate() <= 28 && d.getMonth() === NOVEMBER //ourth Thursday of November
    },
}
function cmDeleteToEndOfLine(cm) {
    cm.replaceRange('', ...cmRangeHelper(cm, 'cursor', 'end'))
}
function asdjfhsdjzxcvzx(cm, key) {
    let p
    switch (key) {
        case 'start':
            p = { line: 0, ch: 0 }
            break
        case 'end':
            p = { line: 1000, ch: 1000 }
            break
        case 'middle':
            let line = Math.floor(cm.lastLine() * 0.5)
            while (line >= 0 && cm.getLine(line).trim() !== '') line--
            p = { line: line, ch: 1000 }
            break
    }
    cm.setCursor(p)
    console.log(key)
    if (key == 'start') {
        console.log('adding newline')
        cm.replaceRange('\n', p)
    }
}

function countStoreItem(store, key) {
    if (isDefined(store[key])) {
        store[key] += 1
    } else {
        store[key] = 0
    }
}
function codeluntStoreItem(store, key) {
    if (store.hasOwnProperty(key)) {
        store[key] += 1
    } else {
        Object.defineProperty(store, key, 0)
    }
}
class Tracked {
    constructor(keys, limit = 2) {
        this.store = {}
        this.keys = keys
        this.previousKey = null
        this.currentKey = null
        this.count = 0
        this.limit = limit
        this.currentTime = 0
        this.previousTime = 0
    }

    add(key) {
        if (isDefined(store[key])) {
            this.store[key] += 1
        } else {
            this.store[key] = 0
        }
    }
    reset() {
        this.previousTime = null
        this.previousKey = null
        this.count = 0
    }

    trackKeyDown(e) {
        this.track(e.key)
        this.trackTimeStamp(e.timeStamp)
    }
    track(key) {
        if (!key) return
        this.previousKey = this.currentKey
        this.currentKey = key
        if (this.previousKey === this.currentKey) {
            this.count += 1
        } else {
            this.count = 0
        }
        // console.log( this.count, key, this.previousKey )
    }
    trackTimeStamp(time) {
        this.previousTime = this.currentTime
        this.currentTime = time
        // u can make it even more successive, to watch conecutive keys.
    }
    track2(key) {
        if (!this.keys.includes(key)) return
        this.currentKey = key
        countStoreItem(this.store, key)
    }
    increment() {
        this.store[this.currentKey] += 1
        return this.value
    }
    get value() {
        if (this.count === this.limit) {
            const delta = Math.round(this.currentTime - this.previousTime)
            if (delta < 2500) {
                this.reset()
                return true
            }
        }
        // console.log( this.store )
        return this.store[this.currentKey] > 1
        return this.store[this.currentKey] % 2 == 0
    }
}
function cmToLine(cm, line) {
    cm.setCursor({ line: line - 1, ch: 1000 })
}

function cmAdvancedRangeHelper(cm, o) {}
function cmasdTextEdit(cm, key) {
    const map = {
        d2s: {
            start: { line: 0, ch: 0 },
            end: { line: cmCursorLine(cm) - 1, ch: 1000 },
        },
        d2e: {
            start: { line: cmCursorLine(cm), ch: 0 },
            end: { line: cm.lastLine(), ch: 1000 },
        },
    }
    cm.replaceRange('', map[key].start, map[key].end)
}

function splitFirst(s) {
    return searcher('(.*?)[\\s]([^]+)', s)
}
function linebreak(s) {
    return s + '\n' + '-'.repeat(s.length)
}

function listed(
    s,
    {
        listDelimiter = '.',
        tag = '',
        extraTitleNewLine = '',
        title = false,
        spacing = ' ',
        skipEmptyLines = true,
        mode = null,
        numbered = false,
    } = {}
) {
    let lines = split(s, 'dsn')
    if (skipEmptyLines) lines = lines.filter((x) => x)
    const product = lines
        .map((x, i, arr) => {
            return createTag(tag, i) + capitalize(x)
        })
        .join('\n')

    return title ? capitalize(title + ':', 'title') + '\n' + extraTitleNewLine + product : product

    function createTag(tag, i) {
        let spaces = ''
        let prefix = ''
        if (mode == 'numbers') prefix = i + 1
        else if (mode == 'bullets') {
            prefix = '*'
            listDelimiter = ''
        }

        if (tag) tag = capitalize(tag) + ' '

        tag += prefix
        tag += listDelimiter
        tag += ' '.repeat(spacing.length)

        return '  ' + tag
    }
}

const numberToParensObject = {
    '(?<=\\s)9[a-zA-Z]': (x) => '(' + capitalize(x.slice(1)),
    '(?<=[a-z])0\\b': ')',
    '(?<=[a-z])1\\b': '!',
}
class StringParser {
    constructor(text) {
        this.text = text
        this.parts = []
    }
    run() {
        for (let regex of this.regexes) {
            this.eat(regex)
            this.store[k] = this.eat(v)
        }
    }
    eat(regex) {
        let match = searcher(regex, this.text)
        if (match) {
            this.parts.push(match)
            this.text.slice(match.length)
        }
    }
    match(regex) {
        return searcher(regex, this.text)
    }
    trim() {}
}

function errorRunner(e, fn = getErrorStack) {
    try {
        eval("''.join('')")
    } catch (e) {
        fn(e)
    }
}
function getErrorStack(e) {
    console.log(e.stack)
    return
    const items = findall(regex, e.stack)
    console.log(items)
}

const htmlBaseMeta =
    '<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<meta http-equiv="X-UA-Compatible" content="ie=edge">'

function getDefault(o, key) {
    const item = o[key]
    delete o[key]
    return item
}

function stringManager(s, o) {
    fallback = getDefault(o)
    for (let [k, v] of Object.entries(o)) {
        if (test(k, s)) {
            return lambdaReplace(v)(s)
        }
    }
    return fallback
}

const globalActionMap = {
    '^r\\b': redditParser,
}
class Controller {
    constructor(map = globalActionMap) {
        this.map = map
    }

    relegate(text) {
        for (let [k, v] of Object.entries(this.map)) {
            if (test(k, text)) {
                return v(text)
            }
        }
    }
}
function toSimpleAttr(delimiter, { allowStartingSpaces = false } = {}) {
    let startRegex = '(\\S+)'
    if (isArray(delimiter)) {
        delimiter = Regex(delimiter)
        startRegex = '(\\S+?)'
    }

    const start = allowStartingSpaces ? '^ *' : ''
    const regex = start + startRegex + delimiter + '(\\S+)'
    return regex
}

function toLocal(s) {
    if (s.includes('./')) return s
    return './' + s
}
function toAbsolute(s) {
    return 'adszzzzzzzzzf' + s
}

const extensionToCssMap = {
    css: 'foooooooooooooooo',
}

function useFileAttributor(s) {
    const action = true ? toLocal : toAbsolute
    return linkParser(action(s))
}

function attributor(a, b) {
    const map = {
        link: ph,
        script: ph,
        addclass: cssAttributor,
        add: cssAttributor,
        css: cssAttributor,
        css: cssAttributor,
        use: useFileAttributor,
    }
    return [a, map[a](b)]
}

function cssAttributor(s, generate = true) {
    const map = {
        reset: {
            name: '*',
            values: {
                padding: 0,
                margin: 0,
                'box-sizing': 'border-box',
                outline: 'none',
                resize: 'none',
            },
        },
        textarea: {
            name: 'textarea',
            values: {
                padding: 0,
                margin: 0,
            },
        },
        precode: {
            name: ['pre', 'code'],
            values: {
                'white-space': 'normal',
            },
        },
    }
    const item = map[s]
    if (!item) return ''
    const product = [item.name, item.values]
    return !isFalse(generate) ? createClass(...product) : product
}

function configureAttributes(s, delimiter = '=') {
    const dict = {
        [toSimpleAttr(delimiter, { allowStartingSpaces: true })]: {
            replace: '',
            store: attributor,
        },
        '^2([\\w.]+)': {
            replace: '',
            store: (x) => {
                if (x.endsWith('js')) return ['script', ['script', '', x]]
                if (x.endsWith('css')) return ['link', ['link', '', x]]
            },
        },
    }
    testproduct = mreplace3(s, dict, { announce: true })
    return testproduct
}

function replaceFirstLetter(s, fn) {
    return s.replace(/[a-zA-Z]/, lambdaReplace(fn))
}
function removeEmptyLines(s) {
    return s.replace(/^ *\n/gm, '')
}
function smartDedent(s) {
    s = removeEmptyLines(s)
    return replace('^' + getSpaces(s), '', s)
}
function itemSplit(s, conditions = []) {
    conditions = [
        {
            enter: (items, i) => count("'", items[i]) == 1,
            includePop: true,
            exit: (next) => count("'", next) == 1,
        },
        {
            enter: (items, i) => i > 0 && items[i] == 'span',
            includePop: false,
            exit: (next) => next == 'end',
        },
    ]

    let items = s.split(' ')
    for (let i = 0; i < items.length; i++) {
        for (let condition of conditions) {
            if (condition.enter(items, i)) {
                while (true) {
                    const next = pop(items, i + 1)
                    if (condition.includePop) {
                        items[i] += ' ' + next
                    }
                    if (condition.exit(next)) {
                        break
                    }
                    if (!condition.includePop) {
                        items[i] += ' ' + next
                    }
                }
                break
            }
        }
    }
    return items
}
function visibleNewLines(s) {
    return s.replace(/\\n/g, '\n')
}
const edits = {
    'index.html': {
        'v-on:': '@',
    },
    z: {},
}

function downloadAccumulate(product) {
    download('accumulate.jsontest', Accumulate(product))
}
function objectify(acc, [a, b]) {
    acc[a] = b
}

function axrgParserolder(args) {
    let match
    return args.reduce((acc, item) => {
        if ((match = search(simpleAttrRE, item))) {
            objectify(acc, match)
        }
        return acc
    }, {})
}

function swapped(a,b) {
    let temp = b
    b = a
    a = b
    return [a,b]
}

function sortFactory(runner, {reverse = false} = {}) {
    console.log( runner.toString() )
    return (a, b) => {
        console.log( a,b )
        a = runner(a)
        b = runner(b)
        if (reverse) {
            console.log( 'reversing' )
            ;[a,b] = swapped(a,b)
        }
        console.log( a,b )
        if (isNumber(a) && isNumber(b)) return a - b
    }
}

if (isNode()) {
    localStorage = {
        '12-18-20': 'a',
        '12-17-20': 'a',
        '1-18-20': 'a',
        setItem() {
            return
        },
    }
}
function looksLikeDate(x) {
    return test('\\d+[-/]\\d+[-/]\\d+|\\d{4}', x)
}


function findStorage(key, options = { reverse: false, delete: false }) {

    const sortByDate = sortFactory((x) => new Date(x).getTime())
    let keys = Object.keys(localStorage)
    let k
    if (key == 'date') {
        keys = keys.filter(looksLikeDate)
        keys.sort(sortByDate)
        if (options.reverse) keys.reverse()
        k = first(keys)
    } else if (isFunction(key)) {
        k = keys.find(key)
    }

    if (k) {
        const product = getStorage(k)
        if (options.delete) {
            setStorage('temp', product)
            deleteStorage(k)
        }
        return product
    }
}
function injectActions(fn, actions) {
    return (...args) => {
        const product = fn(...args)
        actions.forEach((action) => action(product))
        return product
    }
}

function guotieParser(variableName, rawString, callable) {
    if (test('\\b' + variableName + '\\b', callable)) {
        return [callable, rawString]
    }
    return null
}

const videoOptions = {
    autoplay: true,
    controls: true,
    sources: [
        {
            src: './video1.mp4',
            type: 'video/mp4',
        },
    ],
}

function cmBetterTab(cm) {
    if (cm.somethingSelected()) {
        cm.indentSelection('add')
    } else {
        cm.replaceSelection(
            cm.getOption('indentWithTabs') ? '\t' : Array(cm.getOption('indentUnit') + 1).join(' '),
            'end',
            '+input'
        )
    }
}

function isLast(i, arr) {
    return i == arr.length - 1
}

function last(arr, n = 1) {
    return arr[arr.length - n]
}

function first(arr) {
    return arr[0]
}

function clone(arr) {
    return JSON.parse(JSON.stringify(arr))
}

function shuffle(arr) {
    let ret = Array.from ? Array.from(arr) : arr.slice()
    let m = arr.length
    while (m) {
        let i = ~~(Math.random() * m--)
        let t = ret[m]
        ret[m] = ret[i]
        ret[i] = t
    }
    return ret
}
const is = {
    white_space(c) {
        return /[\s\n\t]/.test(c)
    },
    line_break(c) {
        return /\n/.test(c)
    },
    number(n) {
        return !isNaN(n)
    },
    pair(n) {
        return ['"', '(', ')', "'"].includes(n)
    },
    pair_of(c, n) {
        return { '"': '"', "'": "'", '(': ')' }[c] == n
    },
}

function cmGetterSetter(cm, parser, { mode = 'document' }) {
    try {
        if (mode == 'document') cm.setValue(parser(cm.getValue()))
        else if (mode == 'line') {
            const line = cml(cm)
            cm.replaceRange(parser(line), ...cmRangeHelper(cm))
        }
    } catch (e) {
        console.log(e)
        return
    }
}
function editClipboardContent() {
    const parser = drep
    navigator.clipboard.readText().then((data) => {
        navigator.clipboard.writeText(parser(data, ...args))
    })
}

function checkClipboard(x = 'readText') {
    let mode = x == 'readText' || !x ? 'readText' : 'writeText'
    navigator.clipboard[mode](x).then(...plogs)
}

function cmReplaceAtIndicator(cm, indicator = 'cp', copyable = '') {
    if (copyable) {
        runner(copyable)
    } else {
        navigator.clipboard.readText().then(runner)
    }

    function runner(copyable) {
        cmGetterSetter(
            cm,
            (cmtext) => {
                const isCode = looksLikeCode(copyable)
                const spaces = getSpaces(cmtext)
                const extraSpaces = isCode ? indentfour : ''
                const product = indent(copyable + '\n\n', spaces + extraSpaces)
                return isCode ? product.slice(0, -4) : product
            },
            { mode: 'line' }
        )
    }
}

class DynamicStorage {
    reset() {
        this.listStore = []
        this.dictStore = {}
        this.keyedStore = {}
    }

    constructor({ allowDestination = true } = {}) {
        this.listStore = []
        this.dictStore = {}
        this.keyedStore = {}
        this.allowDestination = allowDestination
    }

    add(val, destination = null) {
        if (!val) {
            return
        }
        if (!this.allowDestination && val.length == 3) val.pop()

        if (destination) {
            let child = this.keyedStore[destination]

            if (!child) {
                if (isArray(val) && val.length == 2) this.keyedStore[destination] = {}
                else this.keyedStore[destination] = []
            }
            if (isArray(val) && val.length == 2) {
                this.keyedStore[destination][val[0]] = val[1]
            } else {
                if (isArray(val) && val.length == 1) val = val[0]
                this.keyedStore[destination].push(val)
            }
        } 

        else if (isNestedArray(val)) {
            val.forEach(item => this.listStore.push(item))
        }
        else if (isArray(val) && val.length == 2) {
            this.dictStore[val[0]] = val[1]
        }
        else {
            this.listStore.push(val)
        }
    }
    get value() {
        for (let key of Object.keys(this)) {
            if (!isPrimitive(this[key]) && exists(this[key])) {
                return this[key]
            }
        }
        return {}
        const s = getChild(this.constructor.toString(), 'constructor')
        const props = findall('^ *this.(.*?) =', s)
        console.log( props )
        for (let prop of props) {
            if (this[prop] && exists(this[prop])) return this[prop]
        }
        return null
    }
}

function switcher(query, obj, ...args) {
    // console.red( [query, obj, args] )
    if (!query) {
        return lambdaReplace(obj.default)(...args)
    } else if (obj[query]) {
        return obj[query]
    } else {
        return query
    }

    if (x == '') return query
    if (x == undefined) {
        if (obj.default) {
            return isString(obj.default) ? obj.default : obj.default(...args)
        } else {
            return query
        }
    }
    return x
}

const mediamap2 = {
    sm: '@media only screen and (min-width: 700px)',
    md: '@media only screen and (min-width: 700px)',
    lg: '@media only screen and (min-width: 1000px)',
}

const mediamap = {
    sm: '@media only screen and (min-width: 700px) {',
    md: '@media only screen and (min-width: 700px) {',
    lg: '@media only screen and (min-width: 1000px) {',
}
class Nickname {
    constructor({ regex = null, setter = ph } = {}) {
        this.store = {}
        this.regex = regex
        this.setter = setter
    }

    getShortName(val) {
        if (val in this.store) {
            val = this.store[val]
        } else if (test(this.regex, val)) {
            this.store[this.setter(abbreviated(val))] = val
        }
        return val
    }
}
function cmGetViewport(editor) {
    const charWidth = editor.defaultCharWidth()
    const scrollArea = editor.getScrollInfo()
    const { scrollLeft } = editor.doc
    const rect = editor.getWrapperElement().getBoundingClientRect()

    const topVisibleLine = editor.lineAtHeight(rect.top, 'window')
    const bottomVisibleLine = editor.lineAtHeight(rect.bottom, 'window')
    return [topVisibleLine, bottomVisibleLine]

    const leftColumn = Math.floor(scrollLeft > 0 ? scrollLeft / charWidth : 0)
    const rightPosition = scrollLeft + (scrollArea.clientWidth - 30)
    const rightColumn = Math.floor(rightPosition / charWidth)
    return {
        start: {
            line: topVisibleLine,
            column: leftColumn,
        },
        end: {
            line: bottomVisibleLine,
            column: rightColumn,
        },
    }
}

function cmSprawlRange(cm) {
    let topRegex = '}$'
    let downRegex = '3|{$'
    let store = []
    let start = cm.getCursor().line
    let [downLimit, topLimit] = [0, cm.lastLine()]
    let line
    let count = 0

    for (let i = start; i >= downLimit; i--) {
        // going up
        line = cm.getLine(i)
        store.push(line)
        if (test(downRegex, line)) {
            if (line.endsWith('{')) topRegex = '^' + getSpaces(line) + '(?=\\S).*?}$'
            break
        } else if (i == downLimit) return cm.getLine(start)
    }

    store.reverse()

    if (test(topRegex, cm.getLine(start))) return store.join('\n')

    for (let i = start + 1; i <= topLimit; i++) {
        line = cm.getLine(i)
        store.push(line)
        if (test(topRegex, line)) {
            break
        } else if (line.trim() == '') {
            count++
            if (count == 3) break
        }

        if (i == topLimit) return cm.getLine(start)
    }
    return exists(store) ? store.join('\n').trim() : cm.getLine(start)
}

function printDocumentParser(s) {
    const [text, attrs] = mreplace(simpleAttrRE, s)
    const store = { text }
    for (let [k, v] of Object.entries(attrs)) {
        if (k == v) {
            console.log('dsf')
        }
    }
    return store
}
function readRunner(mode, cmtext) {
    const map = {
        block: '',
    }
}

function abbreviated(s) {
    return findall('(?<=^| |\\.|-)\\w', s).join('')
}

function getSavedStorage(name) {
    const result = getStorage('saved')
    let product
    if (name in result) product = name[result]
    else {
        const key = Object.keys(result).find((k) => abbreviated(k) == name)
        product = result[key]
    }

    updateClipboard(product)
}
function saveasRunner(name, cmtext) {
    updateStorage('saved', { [name]: cmtext })
}

function pathjoin(...args) {
    for (let i = 0; i < args.length; i++) {
        if (!args[i]) args[i] = ''
        args[i] = args[i].endsWith('/') ? args[i].slice(0, -1) : args[i]
    }
    return args.join('/')
}
function getLastWord(line) {
    return searcher('[a-zA-Z]+$', line)
}
function smartCapitalizer(s) {
    return allrep(s, {
        'ac\\w+': (x) => x.toUpperCase(),
        'cc\\w+': capitalize,
    })
}
function actionParser(s) {
    const product = s.split(' ').reduce(
        (acc, item, i, arr) => {
            if (i == 0) {
                acc['action'] = item
            } else {
                acc['args'].push(item)
            }

            if (i == arr.length - 1 && !exists(acc.args)) {
                if (acc.action == 'cleandir') acc.args.push('drive')
            }
            return acc
        },
        { args: [], action: '' }
    )

    return product
}

function resubmit() {}
function cmSetSelection(e, prev) {
    let a, b
    const { line, ch } = e.getCursor()
    const LINE = e.getLine(line)
    if (!LINE[ch] || LINE.charAt(ch - 1) == ' ' || test('\\W', LINE[ch])) return
    ;[a, b] = sprawlRunner(ch, LINE, (L, S) => L[S] && L[S] != ' ')
    let val = e.getRange({ line: line, ch: a + 1 }, { line: line, ch: b })
    if (prev == val) {
        ;[a, b] = sprawlRunner(ch, LINE, (L, S) => L[S] && test('\\w', L[S]))
    }

    e.setSelection({ line: line, ch: a + 1 }, { line: line, ch: b })
    return val
}
function sprawlRunner(start, line, parser) {
    let a = start
    let b = start
    let bb = new Breaker(100)

    while (parser(line, a)) {
        a--
        bb.next(a)
    }

    while (parser(line, b)) {
        b++
        bb.next(b)
    }
    return [a, b]
}

function cmSetSelectsdfsdion(cm) {
    const { line, ch } = cm.getCursor()
    const LINE = cm.getLine(line)

    console.log(LINE, 'line')
    console.log(line, ch)
    let a = ch - 1
    let b = ch
    console.log(a, b)
    while (LINE[a] && LINE[a] != ' ') {
        console.log(a, LINE[a])
        a--
    }

    while (LINE[b] && LINE[b] != ' ') {
        console.log(b, LINE[b])
        b++
    }
    console.log(a + 1, b - 1, LINE)
    cm.doc.setSelection({ line: LINE, ch: a + 1 }, { line: LINE, ch: b - 1 })
}

function reformatDivAttributes(s) {
    return s
}
function addQuotesToObjectKey(s) {
    s = drep(s, { '[': '{', ']': '}' }, { escape: true, style: '' })
    return s.includes('-') ? s.replace(/[\w-]+(?=:)/, (s) => parens(s, 'sq')) : s
}
function formatHtmlString(s, indentation = 4) {
    s = '\n\n' + s.replace(/\\n/g, '\n') + '\n\n'
    return indent(s, indentation)
}

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

// console.log( months.map(x => x.slice(0, 3).toLowerCase() ))
function toi18(s) {
    return '{{ $t("' + s + '") }}'
}
class JsonMaker {
    constructor(text) {
        this.text = text
        this.store = new Store()
        this.item = ''
        this.items = []
        this.holder = {}
    }
    getItem(name, regex, parser = null) {
        ;[this.text, this.item] = mreplace(regex, this.text, { once: true })
        if (parser) this.item = parser(this.item)
        this[name] = this.item
    }
    split(delimiter, runner = null) {
        this.items = this.text.split(delimiter)
        if (runner) {
            this.items.forEach(runner)
        }
    }
}

const getNavigatorLanguage = () => {
    let product
    if (navigator.languages && navigator.languages.length) {
        product = navigator.languages[0]
    } else {
        product = navigator.userLanguage || navigator.language || navigator.browserLanguage || 'en'
    }
    return product.match(/\w{2}/)[0]
}
function i18maker(s) {
    const map = {
        // en: englishParser,
        // fr: frenchParser,
        // cn: chineseParser,
        // spanish: spanishParser,
    }

    let [text, config] = mreplace('config=(.*)', s, { once: true })
    config = config.split(' ').map((x) => map[x] || x)
    const store = []
    text.split(/\n\n+/).forEach(runner)

    function runner(x) {
        const content = x.split('\n')
        const product = config.reduce((acc, lang, i) => {
            acc[lang] = content[i]
            return acc
        }, {})
        store.push(product)
    }
    return store
}

function blogEntry(s) {
    const path = '~/websites/kdog3682'
}
function asker(s) {
    const targetmap = {
        code: ['reddit', 'stackoverflow'],
        misc: ['google', 'reddit'],
        snippet: ['jsfiddle', 'jsbin'],
    }
    if (isSelfQuestion(s)) {
    }
}
function globalDocumentEdit(s) {
    const dict = {
        eli5: 'ELI5',
        cont: 'container',
        ct: 'container',
        sent: 'sentence',
        cls: 'class',
        lst: 'list',
        ' gt ': ' > ',
        ' lt ': ' < ',
        'qm\\b': '?',
        ';': ':',
        '`': '~',
        '^33': '##',
        '(?<=[a-z][a-z])1\\b': '!',
        '(?<=[a-z][a-z])0\\b': ')',
        '(?<!he)lp': '(',
        '(?<![aeiou])rp\\b': ')',
        '\\b9(?=[a-zA-Z])(?!am)': '(',
        '\\b3(?=[a-zA-Z])': '#',
        '\\b4(?!evr|get|got)(?=[a-zA-Z])': '$',
        '\\b5(?=[a-zA-Z])': '%',
        '(?<=[^\\d\\s])8(?!\\d)': '*',
        ...datefixobject,
        ...namefixobject,
    }

    // s = dddrep(s, dict)
    s = drep9002(s, dict)
    return s
}

function changeDate(by) {
    let date
    if (isNumber(by)) {
        date = new Date()
        date.setDate(date.getDate() - by)
    } else if (by == 'week') {
        let target = 'monday'
        date = getPreviousDay(target)
    }
    return datestamp('%date', date)
}

function getPreviousDay(s) {
    const target = days.findIndex((x) => x.toLowerCase() == s)
    const d = new Date()
    return d.setDate(d.getDate() - ((d.getDay() + (7 - target)) % 7))
}

function eventParserdislike(s) {
    let text, amount
    try {
        ;[text, amount] = search('(.*?) -(\\w+)$', s)
    } catch {
        text = s
        amount = 0
    }
    let time = changeDate(amount)
    let product = datedEvent(time, text)
    return [product]
}

function datedEvent(time, text) {
    return formatDate(time) + ': ' + text
}

function getPreviousDay2(s) {
    let target = days.findIndex((x) => x.toLowerCase() == s)
    console.log(target)
    var date = new Date()
    var day = date.getDay()
    var prevMonday = new Date()
    var today = date.getDate()

    prevMonday.setDate(today - day + target - 7)
    return prevMonday
    if (date.getDay() == target) {
        prevMonday.setDate(date.getDate() - 7)
    } else {
        prevMonday.setDate(today - day + target)
    }

    return prevMonday
}

function convertDataURIToBinary(dataURI) {
    var BASE64_MARKER = ';base64,'
    var base64Index = dataURI.indexOf(BASE64_MARKER) + BASE64_MARKER.length
    var base64 = dataURI.substring(base64Index)
    var raw = window.atob(base64)
    var rawLength = raw.length
    var array = new Uint8Array(new ArrayBuffer(rawLength))

    for (i = 0; i < rawLength; i++) {
        array[i] = raw.charCodeAt(i)
    }
    return array
}
const attrRE = '(\\w+)=(.*?)(?=\\s*\\w+=|$)'
function gridItemParser(s) {
    const items = smartSplit(s)
    const indentation = '    '
    return items
        .reduce((acc, item, i) => {
            return (acc += indentation + divify('span', item) + '' + '\n')
            return (acc +=
                indentation + divify('span', item, { class: 'col-' + (i + 1) }) + '' + '\n')
        }, '')
        .trim()
}

function openingTag(el, dict) {
    const attrs = exists(dict)
        ? ' ' + Object.entries(dict).reduce((acc, [k, v]) => k + '="' + v + '"', '')
        : ''
    return '<' + el + attrs + '>'
}

function removeBackslashes(s) {
    return s.replace(/\\/g, '')
}
const colornamesmap = {
    b: 'blue',
    r: 'red',
    y: 'yellow',
    g: 'green',
    o: 'orange',
    bl: 'black',
}
const lgRE = '^(lg|gtc|gtr|gc|gr)(.+)'
const gtcrepeat = 'grid-template-columns: repeat(auto-fill, minmax(100%, $maxWidth))'
const gtcminmax = 'grid-template-columns: repeat(auto-fill, minmax(100%, $maxWidth))'
const gtc = 'grid-template-columns: repeat(auto-fill, minmax(100%, $maxWidth))'
ssdfsdf =
    'some things should not be abstracted. u cant deny that the external phenotype will match. am i shallow. sure. but it is also our nature. '

function combineHtmlCssJs(html, css, js) {
    return stringElt('html', [
        [
            'head',
            [
                ['title', '%title'],
                ['style', css, '', { newlines: true }],
            ],
        ],

        [
            'body',
            [
                ['', html, '', { self: true }],
                ['script', js, '', { newlines: true }],
            ],
        ],
    ])
}

function createRE(mode) {
    const map = {
        jsfiddle: [
            'value: {\\s*html:\\s*"\\s*', //START
            '\\s*",\\s*js:\\s*"\\s*',
            '\\s*"\\s*,\\s*css:\\s*"\\s*',
            '\\s*"\\s*},\\s*fiddle: {', //END
        ],
    }
    const captureGroup = '([\\w\\W]+?)'
    return captureGroup.join(map[mode])
}

function getTouchPosition(event) {
    var touchobj = event.changedTouches[0]
    var x = touchobj.pageX
    var y = touchobj.pageY
    return {
        x: x,
        y: y,
    }
}

function getPosition(event) {
    event = event ? event : event ? event : null
    var left = 0
    var top = 0
    if (event.pageX) {
        left = event.pageX
        top = event.pageY
    } else if (typeof document.documentElement.scrollLeft != undefined) {
        left = event.clientX + document.documentElement.scrollLeft
        top = event.clientY + document.documentElement.scrollTop
    } else {
        left = event.clientX + document.body.scrollLeft
        top = event.clientY + document.body.scrollTop
    }
    return {
        x: left,
        y: top,
    }
}

function getCookie2(name, defaultValue) {
    defaultValue = typeof defaultValue === 'undefined' ? null : defaultValue
    var re = new RegExp(name + '=([^;]+)')
    var value = re.exec(document.cookie)
    return value != null ? unescape(value[1]) : defaultValue
}

function setCookie2(name, value) {
    var date = new Date()
    date.setTime(new Date().getTime() + 1000 * 60 * 60 * 24 * 365)
    document.cookie = escape(name) + '=' + escape(value) + ';expires=' + date.toGMTString()
}
function setCookie(name, value, days = 'midnight') {
    var expires = ''
    if (days) {
        var date = new Date()
        if (days == 'midnight') {
            date.setHours(23, 59, 59, 0)
        } else {
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
        }

        expires = '; expires=' + date.toUTCString()
    }
    document.cookie = name + '=' + (value || '') + expires + '; path=/'
}
function getCookie(name) {
    var nameEQ = name + '='
    var ca = document.cookie.split(';')
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i]
        while (c.charAt(0) == ' ') c = c.substring(1, c.length)
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length)
    }
    return null
}
function eraseCookie(name) {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
}
function parserawquestions(s) {
    let delimiter = '-'
    let match
    let answerMarker = 'correct|answer'
    const format = letterParser

    const items = s
        .trim()
        .split(/(?:^|(?:\n *)+)(?:(?:p|q) )/)
        .filter((x) => x)
        .map((x) => {
            let question = search('([^]+?)\\s+' + delimiter + '\\s+', x)
            question = format(question)

            let choices = findall(delimiter + ' (.*?(?= ?' + delimiter + ' |$))', x)
            choices = choices.map((choice) => {
                let correct = false
                let text = choice
                if ((match = search('(?:' + answerMarker + ')$', choice))) {
                    text = choice.slice(0, -match.length)
                    correct = true
                }
                return { correct, text: format(text) }
            })
            return { question, choices }
        })
    return items
}
class StringEdit {
    constructor(text) {
        this.text = text
        this.store = ''
        this.current = ''
        this.temp = ''
    }
    forEachLetter(fn) {
        this.text.split('').forEach((letter, index) => {
            this.temp = fn(letter, index)
        })
    }
    enter() {
        this.current = '<div>' + this.current
    }

    exit() {
        this.current += '</div>'
    }
}
function lambdaFactory(fn) {
    return isFunction(fn) ? (...args) => fn(...args) : () => console.log('no action')
}

function injectFunctionMod(fn) {
    return (s) => {
        if (s.length > 1) {
            return fn(s)
            let items = s.split('//')
            return fn
        }
        return fn
    }
}

function isLongMathExpression(s) {
    return true
    return count(rescape(['+', '-', '*']), s)
}

        const mathParser3RE = / ?[dtp\-\=] ?|sqrt\w+|\w+?e[\w\(\)]+/g
        function mathParser3Helper(x) {
            if (x.startsWith('sqrt')) return 'Math.sqrt(' + x.slice(4) + ')'
            if (test('e', x)) return 'Math.pow(' + x.split('e').join(', ') + ')'
            x = x.trim()
            switch (x) {
                case 'd': return ' ÷ '
                case 't': return ' * '
                case 'p': return ' + '
                default:  return ' ' + x + ' '
            }
        }
function mathParser3(s) {
        return s.replace(mathParser3RE, mathParser3Helper)
}

function mathParser(s) {
    let count = 0

    function mathFractionParser(_, s) {
        let items
        if (test('//', s)) {
            items = s.split('//')
            // console.log( items )
            return items.map(runner).join(' / ')
        }
    }

    function runner(s) {
        if (count++ > 0 && isLongMathExpression(s)) s = parens(s)

        let fractionStatus = false
        // s = drep(s, symboltonumberdict, {escape: true})
        s = superReplace(s, {
            'frac(\\S+)': mathFractionParser,
            p: '%',
            ' ?= ?': normalizeSpacesFactory('='),
            ' ?d ?': normalizeSpacesFactory('÷'),
            ' ?t ?': normalizeSpacesFactory('*'),
            ' ?- ?': normalizeSpacesFactory('-'),
            // ' ?/ ?': normalizeSpacesFactory('/'),
            ' ?pl ?': normalizeSpacesFactory('+'),
            '(\\d+)\\^([\\w\\(\\)]+)': createReplacer('Math.pow($a, $b)'),
        })
        return s
    }
    return runner(s)
}

function sdfsdfmasdfthdsfParser(text) {
    let store = ''
    let enter = false
    let exit = false
    const s = new StringEdit(text)
    s.forEachLetter((el) => {
        if (el == '[') s.enter()
        if (el == ']') s.exit()
    })
    text.split('').forEach((el) => {
        console.log(el)
        if (el == '[') enter = true
        if (el == ']') exit = true
    })
}

function mathParser2(s) {
    s = replace('(?![pted])[a-z](?=\\d)', (x) => x + 'e', s)
    const TIMES = ' * '
    const PLUS = ' + '
    const EXPONENT = '^'
    const DIVIDE = ' / '

    const dict = {
        div: DIVIDE,
        t: TIMES,
        p: PLUS,
        e: EXPONENT,
        '[': '(',
        ']': ')',
    }

    const product = drep(s, dict, { style: '', escape: true })
    return product
}

function googleParser(s) {
    return s
}
function createCssClass(className, product) {
    if (isArray(className)) className = className.join(', ')
    if (isObject(product)) {
        product = Object.entries(product)
            .reduce((acc, [k, v]) => {
                return (acc += k + ': ' + v + ';\n')
            }, '')
            .trimEnd()
        product = indent(alignEquals(product, ':'))
    }
    let prefix = isStandardHtml(className) || className.startsWith('.') ? '' : '.'
    testproduct = prefix + className + ' {\n' + product + '\n}'
    return testproduct
}
function createFileParser(s, key) {
    let match
    if ((match = search('as ([^]+)', s))) {
        return { file: key, instructions: match }
    }

    const type = getExtension(key)
    switch (type) {
        case 'css':
            return cssParser(s)
        case 'html':
            return cssFileParser(s)
        case 'vue':
            return cssFileParser(s)
        case 'js':
            return cssFileParser(s)
        case 'pdf':
            return cssFileParser(s)
        case 'py':
            return cssFileParser(s)
        case 'math':
            return cssFileParser(s)
    }
}

function cssFileParser(s) {}
function smartReplace(s, dict) {
    const regex = Object.keys(dict)
        .map((key) => {
            return '( *)' + parens(key)
        })
        .join('|')

    function action(...args) {
        let spaces, content
        if (args.length == 2) {
            spaces = args[0]
            content = args[1]
        } else {
            content = args[0]
        }
        const val = dict[content]
        return spaces ? indent(val, spaces) : val
    }

    function parser(...args) {
        args = args.filter((x) => x).slice(1, -2)

        console.log(args)
        return action(...args)
    }

    return replace(regex, parser, s)
}
const noclosers = ['input', 'hr', 'br', 'link']
function viewString(s) {
    return s.replace(/\\n/g, '\n')
}

const tailwind = {
    charcoal: '#36454f',
    none: 'transparent',
    olive: '',
    strawberry: '',
    tomato: '',
    black1: 'asd',
    black2: 'asd',
    black3: 'asd',
    black4: 'asd',
    black5: 'asd',
    black: '#111',
    black6: 'asd',
    black7: 'asd',
    black8: '#111',
    black9: 'asd',
    gray1: '#f7fafc',
    gray2: '#edf2f7',
    gray3: '#e2e8f0',
    gray4: '#cbd5e0',
    gray5: '#a0aec0',
    gray: '#a0aec0',
    gray6: '#718096',
    gray7: '#4a5568',
    gray8: '#2d3748',
    gray9: '#1a202c',
    red1: '#fff5f5',
    red2: '#fed7d7',
    red3: '#feb2b2',
    red4: '#fc8181',
    red5: '#f56565',
    red6: '#e53e3e',
    red7: '#c53030',
    red8: '#9b2c2c',
    red9: '#742a2a',
    orange1: '#fffaf0',
    orange2: '#feebc8',
    orange3: '#fbd38d',
    orange4: '#f6ad55',
    orange5: '#ed8936',
    orange: '#ed8936',
    orange6: '#dd6b20',
    orange7: '#c05621',
    orange8: '#9c4221',
    orange9: '#7b341e',
    yellow1: '#fffff0',
    yellow2: '#fefcbf',
    yellow3: '#faf089',
    yellow4: '#f6e05e',
    yellow5: '#ecc94b',
    yellow: '#ecc94b',
    yellow6: '#d69e2e',
    yellow7: '#b7791f',
    yellow8: '#975a16',
    yellow9: '#744210',
    green1: '#f0fff4',
    green2: '#c6f6d5',
    green3: '#9ae6b4',
    green4: '#68d391',
    green5: '#48bb78',
    green: '#48bb78',
    green6: '#38a169',
    green7: '#2f855a',
    green8: '#276749',
    green9: '#22543d',
    teal1: '#e6fffa',
    teal2: '#b2f5ea',
    teal3: '#81e6d9',
    teal4: '#4fd1c5',
    teal5: '#38b2ac',
    teal: '#38b2ac',
    teal6: '#319795',
    teal7: '#2c7a7b',
    teal8: '#285e61',
    teal9: '#234e52',
    blue1: '#ebf8ff',
    blue2: '#bee3f8',
    blue3: '#90cdf4',
    blue4: '#63b3ed',
    blue5: '#4299e1',
    blue: '#4299e1',
    blue6: '#3182ce',
    blue7: '#2b6cb0',
    blue8: '#2c5282',
    blue9: '#2a4365',
    indigo1: '#ebf4ff',
    indigo2: '#c3dafe',
    indigo3: '#a3bffa',
    indigo4: '#7f9cf5',
    indigo5: '#667eea',
    indigo: '#667eea',
    indigo6: '#5a67d8',
    indigo7: '#4c51bf',
    indigo8: '#434190',
    indigo9: '#3c366b',
    purple1: '#faf5ff',
    purple2: '#e9d8fd',
    purple3: '#d6bcfa',
    purple4: '#b794f4',
    purple5: '#9f7aea',
    purple: '#9f7aea',
    purple6: '#805ad5',
    purple7: '#6b46c1',
    purple8: '#553c9a',
    purple9: '#44337a',
    pink1: '#fff5f7',
    pink2: '#fed7e2',
    pink3: '#fbb6ce',
    pink4: '#f687b3',
    pink5: '#ed64a6',
    pink: '#ed64a6',
    pink6: '#d53f8c',
    pink7: '#b83280',
    pink8: '#97266d',
    pink9: '#702459',
}
function createCssPseudoElement(cssName, line) {
    const [type, s] = search('2(\\w+) (.*)', line)
    const name = cssName + csscolonmap[type] + type
    return createClass(name, s)
}

function cssdoublecolon(currentLine, prevLine) {
    let name, startingName, stuff
    let [el, text] = split(currentLine.slice(1))
    let m = search('<(\\w+)(?:.*?class="(.*?)")?', prevLine)
    if (!m) {
        let className = search('.*?(?=  )|(?:\\w+ [>.] ?)*\\w+', prevLine)
        className += ':' + el
        let product = text.split(' ').map(runCss).flat()
        return createClass(className, product)
    }
    if (m.length == 2) {
        name =
            m[0] +
            m1
                .split(' ')
                .map((x) => '.' + x)
                .join('')
    } else {
        name = m[0]
    }
    name += '::' + el

    return createClass(name, css)
}
const csscolonmap = {
    focus: ':',
    hover: ':',
    before: '::',
    after: '::',
}
function fixCssClassName(s) {
    const csspseudomap = {
        '.focus': ':focus',
        '.hover': ':hover',
        '.before': '::before',
        '.after': '::after',
        'ntype[^\\s.]+': (x) => 'nth-of-type(' + x + ')',
        'nchild[^\\s.]+': (x) => 'nth-child(' + x + ')',
    }
    return allrep(s, classnamemap)
}

function slicer(s, { from = '', to = '', inclusive = false } = {}) {
    let body = inclusive ? '[^]+?' : '([^]+?)'
    if (to) regex = body + to
    else if (from) regex = from + '[^]+'
    return searcher(regex, s)
}
const numberRE = '\\d+'
const fractionRE = '\\d+//'
const nestedFractionRE = '\\d+//'
const pmwhNumberRE =
    '^(o|z|fw|br|bw|lh|gg(?:x|y)?|top|left|right|bot(?:tom)?|fs|wh|(?:min|max)?(?:w|h)|(?:p|m)(?:x|y|t|l|r|b)?)(calc.+|-?[\\d-.]+)(p|vh|r?em|px|vw)?'

// everything should go thru runCss.
function cssRunner(item, comments = true) {
    let css = []
    let store = []
    let match, result, a, b, getDimension, unit

    if (match = search(colorsRE, item)) {
        a = cmap[match[0]]
        b = tailwind[fixColorName(match[1])]
        if (isTrue(comments)) b += comment(match[1], 'block')

        if (a == 'border-color') {
            css.push(['border-style', 'solid'])
            css.push(['border-weight', '1px'])
        }

        css.push([a, b])
    } 
    
    else if ((match = search(borderBottomRE, item))) {

        let [position, weight, unit, style, color] = argfix(
            match,
            [
                [true, true, '1px', 'solid', true],
                [true, true, true, 'solid', true],
            ],
            [(position) => cmap[position], '', '', '', (color) => tailwind[color]]
        )
    } else if ((match = search(namedColorsRE, item))) {
        // console.red( match )
        b = tailwind[match] 
        if (isTrue(comments)) b += comment(match, 'block')
        css.push(['color', b])
    }

    if (false) {
    } else if ((match = search(lgRE + '', item))) {
        a = match[0]
        b = match[1]
        console.log(a, b, '--')
        if (a == 'lg') {
            result =
                cmap[a] +
                parens(
                    b
                        .split('-')
                        .map((x) => tailwind[x])
                        .join(', ')
                )
            css.push(['background', result])
        }

        if (a == 'gtc' || a == 'gtr') {
            console.log('asdfsdf')
            if (isNumber(b)) {
                b = 'repeat(' + b + ', 1fr)'
            } else if (b == '') {
                b = 'boooooga'
            } else {
                b = dashToSpace(b)
            }

            css.push([cmap[a], b])
        } else if (a == 'gr' || a == 'gc') {
            css.push([cmap[a], b])
        }
    } else if ((match = search(pmwhNumberRE, item))) {
        a = match[0]
        b = match[1]
        // console.red( a,b, match[2] )
        unit = switcher(match[2], { vw: '', vh: '', lh: '', fw: '', p: '%', default: 'px' })
        // console.red( unit )

        if (b.startsWith('calc')) {
        } else {
            b += unit
        }

        if ((getDimension = search('(?<!gg)(?:x|y)$', a))) {
            a = cmap[a.slice(0, -1)]
            for (let dimension of dmap[getDimension]) {
                css.push([a + '-' + dimension, b])
            }
        } else if (['top', 'left', 'bottom', 'right'].includes(a)) {
            css.push([a, b])
        } else {
            a = cmap[a]
            if (isArray(a)) {
                a.forEach((el) => css.push([el, b]))
            } else {
                css.push([a, b])
            }
        }
    } else if (cabmap[item]) {
        if (isArray(cabmap[item]) && isString(cabmap[item][0])) {
            css.push(cabmap[item])
        } else if (isArray(cabmap[item])) {
            cabmap[item].forEach((el) => css.push(el))
        } else if (isString(cabmap[item])) {
            css.push([cabmap[item], item])
        } else if (isObject(cabmap[item])) {
            css.push(cabmap[item].a, cabmap[item].b)
        }
    } else if (test('(?:px|asd|%|\\d)$', item)) {
        let [a, b] = split(item, 'css')
        css.push([a, b])
    }
    if (exists(css)) return css
    return null
}

function runCss(item, comments = true) {
    if (item.length == 1) return null
    let css = []
    let store = []
    let match, result, a, b, getDimension, unit

    if ((match = search(colorsRE, item))) {
        a = cmap[match[0]]
        b = tailwind[fixColorName(match[1])]
        if (isTrue(comments)) b += comment(match[1], 'block')

        if (a == 'border-color') {
            css.push(['border-style', 'solid'])
            css.push(['border-weight', '1px'])
        }

        css.push([a, b])
    } else if ((match = search(borderBottomRE, item))) {

        let [position, weight, unit, style, color] = argfix(
            match,
            [
                [true, true, '1px', 'solid', true],
                [true, true, true, 'solid', true],
            ],
            [(position) => cmap[position], '', '', '', (color) => tailwind[color]]
        )
    } else if ((match = search(namedColorsRE, item))) {
        // console.red( match )
        b = tailwind[match] 
        if (isTrue(comments)) b += comment(match, 'block')
        css.push(['color', b])
    }

    if (false) {
    } else if ((match = search(lgRE + '', item))) {
        a = match[0]
        b = match[1]
        console.log(a, b, '--')
        if (a == 'lg') {
            result =
                cmap[a] +
                parens(
                    b
                        .split('-')
                        .map((x) => tailwind[x])
                        .join(', ')
                )
            css.push(['background', result])
        }

        if (a == 'gtc' || a == 'gtr') {
            console.log('asdfsdf')
            if (isNumber(b)) {
                b = 'repeat(' + b + ', 1fr)'
            } else if (b == '') {
                b = 'boooooga'
            } else {
                b = dashToSpace(b)
            }

            css.push([cmap[a], b])
        } else if (a == 'gr' || a == 'gc') {
            css.push([cmap[a], b])
        }
    } else if ((match = search(pmwhNumberRE, item))) {
        a = match[0]
        b = match[1]
        // console.red( a,b, match[2] )
        unit = switcher(match[2], { vw: '', vh: '', lh: '', fw: '', p: '%', default: 'px' })
        // console.red( unit )

        if (b.startsWith('calc')) {
        } else {
            b += unit
        }

        if ((getDimension = search('(?<!gg)(?:x|y)$', a))) {
            a = cmap[a.slice(0, -1)]
            for (let dimension of dmap[getDimension]) {
                css.push([a + '-' + dimension, b])
            }
        } else if (['top', 'left', 'bottom', 'right'].includes(a)) {
            css.push([a, b])
        } else {
            a = cmap[a]
            if (isArray(a)) {
                a.forEach((el) => css.push([el, b]))
            } else {
                css.push([a, b])
            }
        }
    } else if (cabmap[item]) {
        if (isArray(cabmap[item]) && isString(cabmap[item][0])) {
            css.push(cabmap[item])
        } else if (isArray(cabmap[item])) {
            cabmap[item].forEach((el) => css.push(el))
        } else if (isString(cabmap[item])) {
            css.push([cabmap[item], item])
        } else if (isObject(cabmap[item])) {
            css.push(cabmap[item].a, cabmap[item].b)
        }
    } else if (test('(?:px|asd|%|\\d)$', item)) {
        let [a, b] = split(item, 'css')
        css.push([a, b])
    }
    if (exists(css)) return css
    return null
}

const template =
    '{\n    template: ``,\n    props: [],\n    data() {\n        return {\n        }\n    },\n    methods: {\n\n    },\n    mounted() {\n\n    },\n    watch: {\n\n    },\n}'
const templatewc =
    '{\n    template: ``,\n    components: {},\n    props: [],\n    data() {\n        return {\n        }\n    },\n    methods: {\n\n    },\n    mounted() {\n\n    },\n    watch: {\n\n    },\n}'
function removeHtmlEntities(s) {
    return drep(s, htmlEntities, { style: '', end: ';?' })
}

function parseReddit(s) {
    let a = '<div class="usertext-body may-blank-within md-container " ><div class="md"><p>'
    let b = '</p>'
    a = '<p class="_.*?">'
    let items = findallBetween(a, b, s).slice(1)
    return items
}

function fixndalxxlBetween(a, b, s) {
    return findall(a + '([^]+?)' + b, s)
}

const names = ['testa', 'jim', 'sarah', 'sam', 'kayla']
function splitHtml(s) {
    let [html, js] = s.split(/\n(?=<script>\n)/)
    return [html, js]
}

function selectFormat(re, s, fn, { start = '', end = '' } = {}) {
    function parser(...args) {
        let item
        if (countParentheses(re) == 1) item = args[1]
        else item = args[0]
        return start + '\n' + fn(item) + '\n' + end
    }
    return replace(re, parser, s, '')
}
function prepareHtmlSpeech(s) {
    let regex = '<script>\n([^]+?)</script>'
    s = selectFormat(regex, s, prepareCodeSpeech, { start: 'script' })
    s = deleter3(s, ['<head>[^]+?</head>', '</.*?>', '>', '<', ';', '}\\)', '^ *\\W{1,2}\\n'])
    return s
}

function pauseOrResume() {
    if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume()
    } else if (window.speechSynthesis.speaking) {
        window.speechSynthesis.pause()
    }
}

function lbr(s = null) {
    if (!s) return '-'.repeat(40)
    if (s == 'break') return '\n\n' + '-'.repeat(40) + '\n\n'
    const linebreak = '-'.repeat(s.length * 2)
    const ma = '-'.repeat(s.length * 0.25) + ' '.repeat(s.length * 0.25)
    const mb = ' '.repeat(s.length * 0.25) + '-'.repeat(s.length * 0.25)
    const sn = '\n'
    return sn + linebreak + sn + ma + s + mb + sn + linebreak + sn
}
function endfn(x) {
    return false
}

class Timer {
    constructor() {
        this.count = 0
        this.timerID = null
        this.callback = endfn
        this._end = false
        this._start = false
        this.resumeDelay = 0
    }

    action() {
        this.count++
        console.log('count: ' + this.count)
    }
    runner() {
        this.timerID = setTimeout(() => {
            if (this.isResuming) {
                console.log('We are resuming!')
                this.isResuming = false
            }

            let finished = this.action()

            if (finished || this._end || this.callback(this.count)) {
                setTimeout(() => {
                    this.onfinish()
                    clearTimeout(this.timerID)
                }, 0)
            } else {
                this.runner()
            }
        }, this.delay)
    }
    get delay() {
        return this.count == 0 ? 250 : 1000
    }
    reset() {
        console.log('calling reset')
        this.isPaused = false
        this.isResuming = false
        this._end = false
        this.count = 0
        this.timerID = null
        this.callback = endfn
    }
    start() {
        this.runner()
    }
    pause(n = 0) {
        this.isPaused = true
        clearTimeout(this.timerID)
        this.resumeDelay = 1000 * n
    }
    resume() {
        this.isResuming = true
        this.runner()
    }

    end(fn = null) {
        if (isFunction(fn)) this._end = fn(this.count)
        else {
            this._end = true
        }
    }
    onfinish() {
        console.log(lbr('finished'))
    }
}

async function google(query, domain = '') {
    const map = {
        wsj: 'net',
        jsfiddle: 'net',
        codepen: 'io',
        wikipedia: 'org',
        sdfwikipedia: 'org',
        wiksdfxipedia: 'org',
    }

    let regex = 'href=".*?(https://.*?)(?:&amp;|")'
    query = query.replace(/ /g, '+')

    if (domain) {
        let suffix = map[domain] || 'com'
        query += '&&as_sitesearch=' + domain + '.' + suffix
    }

    const baseUrl = 'https://google.com/search?as_q=' + query
    const text = await request(baseUrl)

    const store = setify(
        findall(regex, text).filter((link) => {
            return test('https://(?:www\\.)?' + domain, link)
        })
    )
    return store
}
async function readClipboard() {
    return navigator.clipboard.readText()
}

function pop(arr, index) {
    const target = isNumber(index) ? index : arr.indexOf(index)
    return arr.splice(target, 1)[0]
}
function popPrint(text, { lineNumbers = false, lineHeight = 1.2 } = {}) {
    console.log(text)
    let title = ''
    let styles =
        'pre {font-family: times; color: black; line-height: ' + lineHeight + '; margin: 1}'
    styles += `
        @page
    {
        size: auto;   /* auto is the initial value */
        margin: 0mm;  /* this affects the margin in the printer settings */
    }
    body {
        margin: 0.25in;
    }
    `
    if (!text.trim()) {
        return console.log('textarea is empty')
    }
    let stuffs = '^ *}\n|^ *\n'
    let content = replace(stuffs, '', text)
    content = divify('pre', lineNumbers ? numbered(content) : content)

    console.log(content)

    my_window = window.open('', 'mywindow', 'status=0,width=700,height=700')
    my_window.document.write(
        '<html><head><title>' +
            title +
            '</title><style>' +
            styles +
            '</style></head><body onafterprint="self.close()">' +
            content +
            '</body></html>'
    )
    my_window.print()
}

function deleter3(s, items) {
    const regex = simple(items) + '\\n?'
    return replace(regex, '', s)
}

async function clipPrint() {
    let text = await readCLipboard()
    text = deleter3(text, ['DOCTYPE.*', '<head>[^]+?</head>'])
    console.log(text)
    popPrint(numbered(text))
}

function asdfslkdfcipboardlipboard() {
    navigator.permissions.query({ name: 'clipboard-read' }).then((result) => {
        if (result.state == 'granted' || result.state == 'prompt') {
            navigator.clipboard.read().then((data) => {
                for (let i = 0; i < data.items.length; i++) {
                    if (data.items[i].type != 'image/png') {
                        alert('Clipboard contains non-image data. Unable to access it.')
                    } else {
                        const blob = data.items[i].getType('image/png')
                        imgElem.src = URL.createObjectURL(blob)
                    }
                }
            })
        }
    })
}

function subtract(a, b) {
    return a - b
}
function splitSpaces(s) {
    return s.split(' ')
}

function mreplaceAdvanced(re, s) {
    const regex = Regex(re)
    const storage = new SimpleStorage()

    function parser(...args) {
        args = args.filter((x) => x)

        for (let [k, v] of Object.entries(re)) {
            if (test(removeLookAroundSimple(k), args[0])) {
                let replacement = lambdaAction(v.replace, args)
                let destination = lambdaAction(v.destination, args)
                let storeParser = v.store
                let product = storeParser(...args)

                storage.add(destination, product)
                return replacement
            }
        }
    }
    s = s.replace(RegExp(regex, 'gm'), parser).trim()
    return [s, storage.value]
}

function mreplace(...args) {
    const parsers = [(s) => ['', s], (_, s) => ['', s], (_, a, b) => ['', [a, b]]]

    const flagDeterminer = (...innerArgs) => {
        let regex = isTrue(innerArgs[0]) ? args[0] : innerArgs[0]
        return getRegexFlag(regex)
    }

    const defaultParser = (...innerArgs) => {
        let regex = isTrue(innerArgs[0]) ? args[0] : innerArgs[0]
        let count = countParentheses(regex)
        return parsers[count]
    }

    const [regex, parser, s, flags] = argfix(args, [
        [simpleAttrRE, defaultParser, true, 'gm'],
        [true, defaultParser, true, flagDeterminer],
        [true, defaultParser, true, true],
    ])

    const [original, store] = mrep2(regex, parser, s, flags)
    return store ? [original, store.length == 1 ? store[0] : store] : [original, []]
}

function mrep2(regex, parser, s, flags = 'g') {
    //YES
    if (!parser) parser = (_, a, b) => [a, [a, b]]
    const store = new DynamicStorage()

    function parserHandler(...args) {
        let [replaceValue, storeValue] = parser(...args)
        store.add(storeValue)
        return replaceValue
    }

    s = replace(regex, parserHandler, s, flags).trim()
    return [s, store.value]
}

function preAccumulate(s, dict = mrepworddict) {
    // console.log( dict)
    let [text, store] = grm(s, dict)
    if (isBrowser() && exists(store)) {
        updateStorage('pmap', store)
    } else if (exists(store)) {
        console.log(store)
    }
    return text
}

function psdfhjreAccumulate2(s) {
    const dict = {
        '^(pmap|cmap)( |=)(.*)': {
            replace: '',
            store: (_, a, b) => simpleMapParser(b),
            destination: (_, a, b) => a,
        },

        '(?<![:|\\[|\\d]):[a-zA-Z-]{3,}': {
            replace: (x) => capitalizeColons(x.slice(1)),
            store: (x) => [dashToSpace(x.slice(1)), capitalizeColons(x.slice(1))],
            destination: 'pmap',
        },
        "([a-zA-Z]{2,})(?:5|%|\\\\)([a-zA-Z-']{3,})": {
            replace: (_, a, b) => dashToSpace(smartCapitalizer(b)),
            store: (_, a, b) => [a, dashToSpace(smartCapitalizer(b))],
            destination: 'pmap',
        },
    }

    let [text, store] = mreplaceAdvanced(dict, s)
    if (store.cmap && isBrowser()) {
        updateStorage('cmap', toDictionary(store.cmap))
    }
    if (store.pmap && isBrowser()) {
        updateStorage('pmap', toDictionary(store.pmap))
    }
    return text
}

function logged(s) {
    console.log(s)
}
const captureNcgRE = '\\(\\?:(?:\\w+\\|)*\\w+\\)'
function getFirstRegexWord(s) {
    return searcher('#|(?<!\\|)  |\\\\\\.|(?<!\\?):+|\\(\\?:(?:\\w+\\|)*\\w+\\)|(?<!\\\\)\\w+', s)
}
function allrep(s, map) {
    let { regex, dict } = Object.entries(map).reduce(
        (acc, [k, v], i) => {
            if (isFunction(v)) {
                let seen = false
                const match = getFirstRegexWord(k)
                if (match.startsWith('(?:')) {
                    words = getWords(match)
                    for (let word of words) {
                        seen = runner(word, k, v, false, seen)
                    }
                } else {
                    runner(match, k, v, true)
                }

                function runner(match, k, v, sliceStart, seen) {
                    const wrapped = regexWrapify(k)
                    if (isUndefined(sliceStart)) {
                        sliceStart = wrapped.startsWith('(')
                    }
                    const sliceLength = sliceStart ? match.length : 0

                    acc.dict[match] = (x) => {
                        return v(x.slice(sliceLength))
                    }

                    if (!seen) acc.regex.nb.push(wrapped)
                    return true
                }
            } else {
                acc.dict[removeEverythingSuper(k)] = v

                if (true == false) {
                } else if (/\(\?/.test(k)) {
                    acc.regex.default.push(k)
                } else if (test('[\'"]', v)) {
                    acc.regex.wb.push(rescape(k))
                } else if (test('^\\\\b\\w+\\\\b$', k)) {
                    acc.regex.wb.push(k.slice(1, -1))
                } else if (test('^\\W|\\W$', k)) {
                    acc.regex.nb.push(rescape(k))
                } else if (test('[, ]', v)) {
                    acc.regex.wb.push(rescape(k))
                } else if (test('\\W', v)) {
                    acc.regex.nb.push(rescape(k))
                } else {
                    acc.regex.wb.push(k)
                }
            }
            return acc
        },
        { regex: { wb: [], nb: [], default: [] }, dict: {} }
    )

    regex = Object.entries(regex)
        .reduce((acc, [k, v]) => {
            if (exists(v)) acc += simple(v, k) + '|'
            return acc
        }, '')
        .slice(0, -1)
    function parser(...args) {
        let [x, tag] = args.filter((x) => x).slice(0, 2)

        if (x in dict) {
            return dict[x]
        } else if (tag in dict) {
            return dict[tag](x)
        } else {
            let match
            if ((match = search('^\\. ?', x))) {
                return (
                    (match.endsWith(' ') ? match : match + ' ') + capitalize(x.slice(match.length))
                )
            }
            console.log('errror at allrep')
            console.log({ x, tag })
        }
    }

    return replace(regex, parser, s)
}

function type(x) {
    if (isFunction(x)) {
        try {
            x()
            return 'function'
        } catch (e) {
            if (e.message.startsWith('Class')) return 'class'
            return 'function'
        }
    }
    return Object.prototype.toString.call(x).slice(8, -1).toLowerCase()
}

const sn = '\n'
const ERROR_DESTINATION = 'errors'
const lorem = 'Hi. This is Lorem.\nIpsum.Good bye.'
if (typeof window === undefined) {
}

function isCapitalized(s) {
    return test('^[A-Z]', s)
}

const oldlog = console.log.bind(console)
console.foo = (...args) => {
    args = args.map((x) => (isObject(x) ? stringify(x) : x))
    oldlog(...args)
}
const testjs =
    "r.eli5 how does google's search algorithm know shud means 'should' and 'prezeidnt' means president?"
function jst() {
    console.log(Accumulate(testjs))
}
const datakey = '    data() {\\n        return {'
const methodskey = '    methods: {'
const computedkey = '    computed: {'
const mountedkey = '    mounted() {'
const watchkey = '    watch: {'
const propskey = '    props: ['
const componentskey = '    components: {'
const templatekey = "    template: '"
const templatetildakey = '    template: `'
const htmlEntities = {
    '\\u003c': '<',
    '\\u003e': '>',
    '\\\\\\': '',
    '’': "'",
    amp: '&',
    apos: "'",
    '#x27': "'",
    '#x2F': '/',
    '#39': "'",
    '#47': '/',
    lt: '<',
    gt: '>',
    nbsp: ' ',
    quot: '"',
}
const DATE_STAMP = 'datestamp'

function delta(a, b) {
    return Math.abs(a - b)
}

function prepareUrl(s) {
    s = s.replace(/view-source:/, '')
    if (!test('^https://', s)) s = 'https://' + s
    return s
}

function prepareLink(s) {
    if (!test('^https://', s)) s = 'https://' + s
    cors = 'https://cors-anywhere.herokuapp.com/'
    return cors + s
}

function decodeHtml(input) {
    return srep(input, htmlEntities).replace(/&#(\d+);/gi, (_, a) =>
        String.fromCharCode(parseInt(a, 10))
    )
}

function toCors(url) {
    url = url.replace(/view-source:/, '')
    url = 'https://cors-anywhere.herokuapp.com/' + url
    return url
}

function isJsonResponse(response) {
    const contentType = response.headers.get('content-type')
    if (contentType && contentType.indexOf('application/json') !== -1) return true
    return false
}

async function useApi(url, options) {}
async function requestAsync(url) {
    url = prepareUrl(url)
    const response = await fetch(url)
    return isJsonResponse(response) ? response.json() : response.text()
}

//how do u make a specific get requestwith fetch?
//according to the api @ https://github.com/lukePeavey/quotable#list-tags, to get a list of tags
function requestSync(url) {
    const options = {
        // method: 'GET'
    }
    return fetch(prepareUrl(url, options)).then((response) => {
        return isJsonResponse(response) ? response.json() : response.text()
    })
}

const quotablelist = [
    'business',
    'education',
    'faith',
    'famous-quotes',
    'friendship',
    'future',
    'happiness',
    'history',
    'inspirational',
    'life',
    'love',
    'nature',
    'politics',
    'proverb',
    'religion',
    'science',
    'success',
    'technology',
    'wisdom',
]

async function food() {
    let q = await requestAsync('api.quotable.io/random?tags=inspirational')
    console.log(q)
}

async function request(url) {
    if (isBrowser()) url = toCors(url)
    if (!url) {
        throw 'error no url'
    }
    console.log('accessing url: ' + url)
    // const performance = new Performance()
    // console.log( 'asdfasdfasdfasdfasdfasdfasdfasdfsdfsadfsadf' )
    try {
        // performance.start()
        const r = await fetch(url)
        // performance.end()
        
        return isJsonResponse(r) ? await r.json() : await r.text()
        // if (isJsonResponse(response)) {
            // data = await response.json()
        // } else {
            // data = await response.text()
        // }
        // console.log('data type: ' + getTypeOf(data))
        // return data
    } catch (e) {
        console.warn('ERROR at request')
        throw new Error(e)
    }
}

function captureBetween(start, end, inclusive = true) {
    return inclusive ? start + '[^]+?' + end : `(?<=${start})[^]+?(?=${end})`
}

function findhtml(query, text, options = {}) {
    let start,
        end,
        regex = '',
        classes,
        attrs = '',
        matches
    if (isArray(query)) {
        for (let item of query) {
            start = '<' + query
            end = toClosingTag(query)
            regex += captureBetween(start, end) + '|'
        }
        matches = findall(regex.slice(0, -1), text)
    }
    if (isString(query)) {
        let extra = '\\s*<ul>\\s*<li>[^]*?</ul>'
        start = '<' + query

        end = toClosingTag(query) + extra
        regex = captureBetween(start, end)
        matches = findall(regex, text)
        return matches ? matches : 'ERROR'
    } else if (isObject(query)) {
        for (let [k, v] of Object.entries(options)) {
            attrs += k + '="' + v + '"' + ' '
        }
    }
}

function smartscrape(re) {
    let start = re
    let end = toClosingTag(getFirstWord(re))
    return captureBetween(start, end)
}
async function getHtmlParagraphs(url) {
    const map = {
        wikipedia: {
            base: 'https://en.wikipedia.org/wiki/',
            heading: '<h1 id="firstHeading"',
            toc: '<span class="toctext">',
        },
    }
    url = prepareUrl(url)
    const text = await axios(url)
    const product = findhtml('p', text)
    return await product
}

class Performance {
    constructor() {
        this.startTime = null
        this.endTime = null
    }
    start() {
        this.startTime = performance.now()
    }
    end() {
        if (!this.startTime) return
        this.endTime = performance.now()
        let product = this.endTime - this.startTime
        console.log( product )
        let seconds = Math.round(product / 1000)
        // console.log('recieved response object from request.')
        // console.log('The wait time was ' + seconds + ' seconds.')
        this.startTime = null
    }
}

const performer = new Performance()
function getSpeechDelay(s) {
    let match
    if (s.endsWith(',')) return 250
    else {
        return 2000
    }
}
class RegexHelper {
    constructor(type) {
        this.type = type
        this.schemas = [
            'wb-back',
            'wb-front',
            'wb-both',
            'space-back',
            'space-front',
            'space-both',
            'word-front',
            'word-back',
            'word-both',
        ]
        this.map = {
            'wb-front': (x) => x + '\\b',
            'wb-back': (x) => x + '\\b',
            'wb-both': (x) => '\\b' + x + '\\b',
            'wb-both': (x) => '(?<=asd)' + '\\b',
            'wb-both': (x) => x + '\\b',
            'wb-both': (x) => x + '\\b',
            'wb-both': (x) => x + '\\b',
            'wb-both': (x) => x + '\\b',
            'wb-front': (x) => x + '(?=\\w)',
        }
    }
    add(s, type) {
        transformer = this.schemas[type]
        product = transformer(s)
        this.store.add(type, product)
    }
}

function toCodeSpeechTranscript(s) {
    const newlines = {
        '(\\w+\\(){1,}[\\w.\\[\\]]+': (x) => x.replace(/\(/g, '\n'),
    }
    const map = {
        def: 'function',
        '.': 'dot',
        '(': ' ',
        ')': ' ',
        '||': 'or',
        '&&': 'and',
        ' {': '\n',
        '==': 'equals',
        '===': 'deep equals',
        '>': 'is greater than',
        '>=': 'is greater than or equal to',
        '<': 'is less than',
        '<=': 'is less than or equal to',
        '+=': 'plus equal',
        '-=': 'minus equal',
        '++': 'plus equal one',
        '--': 'minus equal one',
        '[]': 'new array',
        '{}': 'new object',
        elif: 'else if',
        js: 'javascript',
        py: 'python',
        dir: 'deer',
        '=': 'equals',
        '+': 'plus',
        '!': 'not ',
        '@': 'atttt',
        '#': 'hashtag',
        $: 'dollar',
        '%': 'percent',
        '\\': 'backslash',
        arr: 'array',
        ext: 'extension',
        "' '": 'string space',
    }
    const allmap = {
        '[\\[\\(]w+[\\]\\)]': replaceParentheses,
        '(?<=^ *(?:else if|if|while).*?)(?<=\\S)': '\n',
        '[:|{]$': '\n',
    }
    const deletes = ["'", '"', '_', ',', '()']
}

function getSplitDelimiter(s) {
    let delimiter = ' '
    let match
    if ((match = search(',,|  ', s))) delimiter = match
    else if ((match = search(', ?', s))) delimiter = match
    return delimiter
}
class SpeechRecognitionController {
    constructor({
        continuous = false,
        lang = 'en-US',
        interimResult = false,
        maxAlternatives = 1,
    } = {}) {
        var grammar = '#JSGF V1.0'
        var recognition = new SpeechRecognition()
        var speechRecognitionList = new SpeechGrammarList()
        speechRecognitionList.addFromString(grammar, 1)
        recognition.grammars = speechRecognitionList
        recognition.continuous = false
        recognition.lang = 'en-US'
        recognition.interimResults = false
        recognition.maxAlternatives = 1
    }
    start() {
        this.recognition.start()
    }
}

function rngArrayItem(arr) {
    return Math.floor(Math.random() * arr.length)
}

function modulusIncrement(i, max) {
    i++
    if (i == max - 1) i = 0
}

function createNumberRange(n, { negative = true } = {}) {
    const store = []
    const start = negative ? -n : 0
    for (let i = start; i <= n; i++) {
        store.push(i)
    }
    return store
}

function createDirectionalityVectors() {
    const numberRange = createNumberRange(1)
    const store = []
    for (let x of numberRange) {
        for (let y of numberRange) {
            store.push({ x, y })
        }
    }
    return store
}
const dirs = [
    { x: -1, y: -1 },
    { x: -1, y: 0 },
    { x: -1, y: 1 },
    { x: 0, y: -1 },
    { x: 0, y: 1 },
    { x: 1, y: -1 },
    { x: 1, y: 0 },
    { x: 1, y: 1 },
]

function sto(s) {
    if (isString(s)) {
        const product = s.split(/(?<=-?\d)/)
        if (product.length == 2) return { x: Number(product[0]), y: Number(product[1]) }
    } else {
        return String(s.x) + String(s.y)
    }
}
class Position {
    constructor(position = { x: 0, y: 0 }) {
        this.x = position.x || 0
        this.y = position.y || 0
    }
    setPosition(...args) {
        if (args.length == 2) {
            this.x = args[0]
            this.y = args[1]
        } else {
            if (isObject(args[0])) {
                this.x = args[0]['x']
                this.y = args[0]['y']
            } else if (isString(args[0])) {
                let [x, y] = stringToNumber(args[0])
                this.sum(x, y)
            }
        }
    }
    sum({ x, y }) {
        this.x += x
        this.y += y
        return this.value
    }
    get pos() {
        return this.value
    }
    get value() {
        return { x: this.x, y: this.y }
    }
    get string() {
        return String(this.x) + String(this.y)
    }
}
class GameState {
    hasFriendlyNeighborAt(dir) {
        return this.boardState[sto(this.pos.sum(dir))] == this.activePlayer
        return this.boardState.get(sto(this.pos.sum(dir))) == this.activePlayer
        return this.boardState[sto(this.pos.sum(dir))]
    }
    get val() {
        return this.pos.value
    }
    chk() {
        return [sto(this.pos.value) in this.boardState, this.pos.value, this.boardState]
    }
    countForwards(dir) {
        count = 0
        while (this.hasFriendlyNeighborAt(dir)) {
            count += 1
        }
        return count
    }
    getState(player) {
        return Object.entries(this.boardState).reduce(
            (acc, [a, b]) => (b == player ? acc.concat(a) : acc),
            []
        )
    }
    checkSurroundings(location) {
        location = sto(location)
        this.pos.setPosition(location)
        for (let dir of this.dirs) {
            let count = this.countForwards(dir)
            if (count >= this.winLength) {
                this.winningDirection = dir
                return true
            }
        }
        return false
    }
    move(location) {
        if (this.gameStatus == 'VICTORY') {
            console.log('game is finished, no more moves taken')
        }
        let player = this.activePlayer
        this.store.push({ player, location })
        this.moves++
        if (this.boardState[location]) {
            console.log('moves:', this.moves, 'error:', location + ' is taken')
            return null
        } else {
            this.boardState[location] = player
        }
        let victory = this.checkSurroundings(location)
        if (victory) {
            console.log(
                'location',
                location,
                'moves:',
                this.moves,
                'victory:',
                victory,
                'winningdirection:',
                this.winningDirection,
                'boardstate',
                this.boardState,
                'winningPlayer',
                this.activePlayer,
                'store',
                this.store
            )
            this.gameStatus = 'VICTORY'
        } else {
            this.toggleIndex(this.players)
        }
    }
    toggleIndex(list) {
        return
        this.index = ++this.index % list.length
    }
    constructor(dimensions, players = ['bob', 'mei'], winLength = 3, options = null) {
        this.moves = 0
        this.players = players
        this.winLength = winLength
        this.dirs = dirs
        this.pos = new Position()
        this.boardState = new Map()
        this.boardState = {}
        this.winningDirection = null
        this.gameStatus = ''
        this.index = 0
        this.store = []
    }
    get activePlayer() {
        return this.players[this.index]
    }
}

function createBoard(x, y, z = null, { negative = false } = {}) {
    const store = {}
    let startX = negative ? -x : 0
    let startY = negative ? -y : 0
    let startZ = negative ? -z : 0
    if (z) {
        for (let a = startX; a < x; a++) {
            for (let b = startY; b < y; b++) {
                for (let c = startZ; c < z; c++) {
                    const product = String(a) + String(b) + String(c)
                    store[product] = null
                }
            }
        }
    } else {
        for (let a = startX; a < x; a++) {
            for (let b = startY; b < y; b++) {
                const product = String(a) + String(b)
                store[product] = null
            }
        }
    }
    console.log(Object.keys(store).length)
    return store
}

const proseItemsRE = '(\\S+)\\\\(\\S+)'
const vueAttributeSortingPreset = ['class', 'v-for', ':key']

function rigidSort(
    arr,
    {
        parser = (x) => getFirstAnything(getFirstElement(x)),
        preset = vueAttributeSortingPreset,
    } = {}
) {
    const store = []
    const rest = []
    for (let item of arr) {
        const index = preset.indexOf(parser(item))
        if (index < 0) {
            rest.push(item)
        } else {
            store[index] = item
        }
    }
    return store.concat(rest)
}

function vueComponentAttributeSort(a, b) {
    return b.length - a.length
}

function changeExtension(s, val) {
    return replace('(?<=\\.)\\w+$', val, s)
}

function StorageArrayToFlatArray(dict) {
    let regex
    const store = []
    for (let [k, v] of Object.entries(dict)) {
        store.push({ ...v, [key]: k })
    }
    return store
}

function getHtmlcss(s) {
    regex = '([^]+?)\\s+?\\n@([^]*)'
    return mapped2(search(regex, s), parseHtml, parseCss) //C
}

function colorParser(re, s, parser) {
    const store = {}
    const items = findall(re, s)
    for (let [color, shade, hex] of items) {
        const key = parser(color, shade)
        store[key] = hex
        if (key.endsWith('5')) store[key.slice(0, -1)] = hex
    }
    return store
}
const tailwindColorRE = '(\\w+)-(\\d+): (#\\w+)'

function tailwindParser(color, shade) {
    return color + shade[0]
}

function editLine(s, n) {
    function parser(s) {
        if (cat == 'delete') return ''
        if (cat == 'comment') return '// ' + s
    }
    regex = '(?<=(?:.*\\n){' + (n - 1) + '})).*\\n'
    return replace(regex, parser, s)
}
const hlist = [
'textarea',
    'slideshow',
    'title',
    'h2',
    'h1',
    'h3',
    'h4',
    'h5',
    'h6',
    'style',
    'script',
    'head',
    'html',
    'body',
    'quote',
    'blockquote',
    'code',
    'pre',
    'img',
    'nav',
    'header',
    'footer',
    'textarea',
    'input',
    'body',
    'html',
    'li',
    'ul',
    'p',
    'div',
    'h',
    'main',
    'section',
    'span',
    'a',
]
class Editor {
    constructor(text) {
        this.lines = text.split('\n')
        this.tracker = {}
        this.index = 0
        this.indent = 0
        this.indentWidth = 4
    }
    get indentation() {
        return ' '.repeat(this.indent * this.indentWidth)
    }
    forEach(parser) {
        this.lines.forEach((line, i) => {
            this.index = i
            try {
                parser(line, i, this.lines[i - 1])
            } catch (e) {
                throw e
                console.log(e)
                throw 'error at line edit perhaps'
            }
        })
    }
    setLine(val, n) {
        this.lines[n] = val
    }
    deleteLine(n) {
        console.log(n)
        this.lines[n] = null
    }
    getLine(n) {
        return this.lines[n]
    }
    get line() {
        return this.getLine(this.index)
    }
    get upline() {
        return this.getLine(this.index - 1)
    }
    get value() {
        return this.lines.filter((el) => el !== null).join('\n')
    }
    replaceLine(regex, replacement, n) {
        this.editLine((s) => replace(regex, replacement, s), n)
    }
    editLine(action, n = this.index) {
        let line = this.getLine(n)
        let spaces = getSpaces(line)
        this.setLine(spaces + action(line.trim(), spaces), n)
    }
    insertLineAbove(content, n) {
        this.editLine((line, spaces) => {
            return content + '\n' + spaces + line
        }, n)
    }
    insertLineBelow(content, n) {
        this.editLine((line, spaces) => {
            return line + '\n' + spaces + content
        }, n)
    }
    run(parser) {
        this.forEach(parser)
    }
}

const namedColorsRE = '(?:red|blue|gray|yellow|orange|black|violet|green|indigo|pink)\\d*'
const colorsRE = '^(bg|bc|fc|border)(\\w+)'


cssitems = `
padding
px
py
pt
pb
pl
pr
p

mx
my
mt
mb
ml
mr
m
margin

color
background
shadow
circular
rounded
gradient
border
h
w
height
width
wh
font
size
media
flex
grid
anime
transition
centered
`



const cabmap = {
    times:['font-family', 'Times'],
    georgia:['font-family', 'Georgia'],
    times:['font-family', 'Tim,'],
    times:['font-family', 'Times'],
    circle: (x) => {
        const product = [
            ['width', x],
            ['height', x],
            ['border-radius', '50%'],
        ]
        return product
    },
// background: linear-gradient(0deg, rgba(251, 91, 83, 0.1) 33%, rgba(251, 91, 83, 1) 100%);
  // animation: 'spin3D 2.2s linear 0s infinite'
    mhauto: ['margin', '0 auto'],
    mauto: ['margin', 'auto'],
    posa: ['position', 'absolute'],
    posr: ['position', 'relative'],
    fullscreen: [
        ['width', '100vw'],
        ['height', '100vh'],
    ],
    full: [
        ['width', '100vw'],
        ['height', '100vh'],
    ],
    caps: ['text-transform', 'uppercase'],
    underline: ['border-bottom', '1px solid currentColor'],
    georgia: ['font-family', 'Georgia'],
    lh: ['line-height', '1.4'],
    bold: ['font-weight', '700'],
    superbold: ['font-weight', '900'],
    flex: ['display', 'flex'],
    flexc: [
        ['display', 'flex'],
        ['flex-direction', 'column'],
    ],

    flexcol: [
        ['display', 'flex'],
        ['flex-direction', 'column'],
    ],

    gmail: ['font', 'small/ 1.5 Arial,Helvetica,sans-serif'],
    geist: [
        ['flex', '1'],
        ['justify-content', 'flex-start'],
        ['align-items', 'stretch'],
    ],
    antialiased: [
        ['text-rendering', 'optimizeLegibility'],
        ['-webkit-font-smoothing', 'asdflxxanzztzzizzzaliased'],
    ],

    ol: [
        ['text-rendering', 'optimizeLegibility'],
        ['-webkit-font-smoothing', 'antialiased'],
    ],

    round: ['border-radius', '50%'],
    shadow: {
        a: 'box-shadow',
        b: '',
    },

    bsa: { a: 'box-shadow', b: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)' },
    bsb: { a: 'box-shadow', b: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)' },
    bsc: { a: 'box-shadow', b: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)' },
    bsd: { a: 'box-shadow', b: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)' },
    bse: { a: 'box-shadow', b: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)' },
    shadowa: {
        a: 'box-shadow',
        b: '',
    },

    shadowb: {
        a: 'box-shadow',
        b: '',
    },
    'shadow-md': { a: 'box-shadow', b: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)' },
    grid: { a: 'display', b: 'grid' },
    transparent: { a: 'background-color', b: 'transparent' },
    tac: { a: 'text-align', b: 'center' },
    ta: { a: 'text-align', b: 'center' },
    ilb: { a: 'display', b: 'inline-block' },
    block: { a: 'display', b: 'block' },
    radial: { a: 'border-radius', b: '50%' },
    flexc: [
        ['display', 'flex'],
        ['flex-direction', 'column'],
    ],
    abs: ['position', 'absolute'],
    rel: ['position', 'relative'],
    sans: [
        'font-family',
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
    ],
    serif: ['font-family', 'Georgia'],
    garamond: ['font-family', 'Garamond'],
    monospace: ['font-family', 'monospace'],
    codestack: ['font-family', '"Source Code Pro", Consolas, Monaco, Menlo, Consolas, monospace'],
    mono: [
        'font-family',
        'Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace',
    ],
    code: ['font-family', 'monospace'],
    hidden: ['overflow', 'hidden'],
    cursive: ['font-family', 'relative'],
    mathfont: ['font-family', 'relative'],
    flatwhite: ['color', '#EAEAEA'],
    flatblack: ['color', '#333'],
    flatblacksocketio: ['color', '#555'],
    flatblack2d: ['color', '#2d2d2d'],
    flatblack24: ['color', '#242424'],
    charcoal: ['color', '#333'],
    gtc: ['grid-template-columns', 'repeat(3, 1fr)'],
    gtr: ['grid-template-rows', 'repeat(3, 1fr)'],
    grid: 'display',
    grid: ['grid-template-columns', 'repeat(3, 1fr)'],
}
const vmap = {
    ref: 'ref',
    show: 'v-show',
    click: '@click',
    // vifor: 'v-for',
    tg: 'transition-group',
    t: 'transition',
    if: 'v-if',
    elif: 'v-else-if',
    else: 'v-else',
    for: 'v-for',
    // vfor: 'v-for',
    ':class': ':class',
    // c: ':class',
    model: 'v-model',

}
const cmap = {
    border: 'border-color',
    gc: 'grid-column',
    gr: 'grid-row',
    b: 'border',
    bb: 'border-bottom',
    bl: 'border-left',
    br: 'border-right',
    bt: 'border-top',
    z: 'z-index',
    o: 'opacity',
    fw: 'font-weight',
    br: 'border-radius',
    bw: 'border-weight',
    lh: 'line-height',
    gg: 'grid-gap',
    ggx: 'row-gap',
    ggy: 'column-gap',
    lg: 'linear-gradient',
    wh: ['width', 'height'],
    bg: 'background-color',
    bc: 'border-color',
    fc: 'font-color',
    fs: 'font-size',
    minw: 'min-width',
    minh: 'min-height',
    maxw: 'max-width',
    maxh: 'max-height',
    gtc: 'grid-template-columns',
    gtr: 'grid-template-rows',
    w: 'width',
    h: 'height',
    p: 'padding',
    m: 'margin',
    pb: 'padding-bottom',
    pt: 'padding-top',
    pl: 'padding-left',
    pr: 'padding-right',
    mb: 'margin-bottom',
    mt: 'margin-top',
    ml: 'margin-left',
    mr: 'margin-right',
}

function toFlatDictionary(obj) {
    const acc = {}
    for (let [k, v] of Object.entries(obj)) {
        for (let item of v) {
            acc[item] = k
        }
    }
    return acc
}

function smartNoteParser(s) {
    const store = new Storage()
    const lines = s.split('\n')
    prenotemap = {}
    prenotemap['self'] = ['me', 'i']
    prenotemap['questions'] = [
        'who',
        'what',
        'where',
        'when',
        'why',
        'how',
        'could',
        'would',
        'should',
        'have',
        'does',
        'is',
    ]
    prenotemap['teaching'] = [
        'student',
        'school',
        'child',
        'kid',
        'teacher',
        'elementary',
        'young',
        'science',
        'chemistry',
        'math',
        'physics',
        'reading',
        'book',
        'english',
        'learn',
        'teach',
        'question',
        'future',
        'grow',
        'progress',
        'report',
        'homework',
        'mrli',
        'match',
        'equal',
        'ms.christy',
        'emc',
        'learning center',
    ]
    prenotemap['family'] = [
        'dad',
        'mom',
        'maylynn',
        'cousin',
        'uncle',
        'aunt',
        'family',
        'sister',
        'brother',
        'yeye',
        'grandpa',
        'grandma',
    ]
    prenotemap['tracker'] = ['buy', 'purchase']
    prenotemap['chinese'] = ['culture', 'china', 'chinese', 'piety', 'sunsetPark']
    prenotemap['rules'] = ['do', 'no']
    const dict = prenotemap
    const regex = Regex(Object.values(dict).flat())
    const map = toFlatDictionary(dict)
    for (let line of lines) {
        const match = search(regex, line)
        store.add(map[match], line)
    }
    return store.value
}

function parseCssLine(s) {
    // doesnt sm 2 be used
    const chunks = getChunks(s)
    return chunks.map(parser).join('\n\n')
    function parser(chunk) {
        let [names, items] = split(chunk, [getNonSpaceWords, getNonSpaceWords], '\\s')
        console.log(items)
        return createCssChunk(names, items.map(parseCss))
    }
}

function firstItemLength(a, b) {
    return a[0].length - b[0].length
}

function getNonSpaceWords(s) {
    return findall('\\S+', s)
}

function createCssChunk(names, items) {
    // not used maybe
    function fixCssName(name) {
        if (map[name]) return map[name]
        return '.' + name
    }
    const map = {
        html: 'html',
        body: 'body',
        section: 'section',
        p: 'p',
        main: 'main',
        root: '*',
        rootall: '*, *, *::before, *::after',
    }
    names = names.sort().map(fixCssName).join(', ')
    const content = indent(items.join(''))
    return names + ' {\n' + content + '}'
}

function cssColorParser(match) {
    a = cmap[match[0]]
    b = tailwind[match[1]]
    return [a, b]
}

function pmwhParser(match) {
    const dmap = { x: ['left', 'right'], y: ['top', 'bottom'] }
    let store = []
    let a, b
    let getDimension, unit
    switch (match[2]) {
        case 'p':
            unit = '%'
            break
        case 'vh':
            unit = 'vh'
            break
        default:
            unit = 'px'
            break
    }
    b = match[1] + unit
    if ((getDimension = search('(?:x|y)$', match[0]))) {
        a = cmap[match[0].slice(0, -1)]
        for (let dimension of dmap[getDimension]) {
            store.push([a + '-' + dimension, b])
        }
    } else {
        a = cmap[match[0]]
        if (isArray(a)) {
            for (let item of a) {
                store.push([item, b])
            }
        }
    }
    if (exists(store)) return store.reduce((acc, [a, b]) => acc + a + ': ' + b + ';\n', '')
    else {
        return [a, b]
    }
}

function lineParserHTML(line) {
    let dataItems = []
    let styles
    let s,
        cssName,
        cssChunk,
        spaces,
        content,
        enter,
        exit,
        vfor,
        transition,
        transitionElement,
        transitionValue,
        a,
        b,
        text = '',
        product = '',
        isComponent,
        match
    let componentInfo = []
    // let componentInfo = {'props':[]}
    let props = []
    let css = []
    let cssNameStore = []
    let attrs = []

    ;[s, spaces] = trimAndGetSpaces(line)
    if (s.startsWith('2')) return
    if (s == '}') return { spaces, exit: true }
    if (s.endsWith(' {')) {
        enter = true
        s = s.slice(0, -2)
    }
    const items = itemSplit(s) // this is to get the quoted items together as well
    let [el, parts] = split(items)

    if (true == false) {
    } else if (el == 'line') {
        el = 'hr'
    } else if (el.startsWith('.')) {
        cssName = el.slice(1)
        el = 'div'
        cssNameStore.push(cssName)
    } else if (el == 'title') {
        cssNameStore.push(el)
        el = 'h2'
    } else if (test('square|box', el)) {
        cssName = el + rng(100000)
        css.push(['width', '100px'])
        css.push(['height', '100px'])
        css.push(['background-color', tailwind['charcoal']])
        el = 'div'
        cssNameStore.push(cssName)
    } else if (test('circle', el)) {
        cssName = el + rng(100000)
        el = 'div'
        css.push(['border-radius', '50%'])
        css.push(['width', '100px'])
        css.push(['height', '100px'])
        css.push(['background-color', 'green'])
        cssNameStore.push(cssName)
    } else if (test('container', el)) {
        cssName = el
        el = 'div'
    } else if (isCapitalized(el)) {
        isComponent = true
    } else if ((match = search('^(?::|-|c(?!ontainer|lass))', el))) {
        el = el.slice(match.length)
        isComponent = true
    } else {
        // cssNameStore.push(el)
        // el = 'div'
    }
    for (let item of parts) {
        // blue(item)
        if (item == 'br') {
            if (text.endsWith(' ')) text = text.slice(0, -1)
            text += '<br>'
        } else if (globalclasslist.includes(item)) {
            attrs.push(['class', item])
        } else if ((match = search('(span|asd) (.*)', item))) {
            text += divify(...match)
        } else if ((match = search('\\$[\\w.]+', item))) {
            text += '{{' + match.slice(1) + '}} '
            dataItems.push(getFirstWord(match.slice(1)))
        } else if ((match = search("(@.*?)=((?<=').*?(?=')|\\w+)", item))) {
            if (test('class', match[0])) {
                match = [':' + match[0].slice(1), addQuotesToObjectKey(match[1])]
            }
            attrs.push(match)
        } else if ((match = search('\\bt\\..*', item))) {
            text += toi18(match.slice(2))
            dataItems.push(getFirstWord(match.slice(2)))
        } else if ((match = search('^\\.[\\w-.]+', item))) {
            let names = match.slice(1).split('.')
            names.forEach((name) => cssNameStore.push(name))
        } else if ((match = search('^:\\w+', item))) {
            props.push(match.slice(1))
            a = match
            b = match.slice(1)
            attrs.push([a, b])
        } else if ((match = search("(\\w+)=('[^]+?'|\\S+)", item))) {
            // green(match)
            a = vmap[match[0]] || match[0]
            b = match[1]
            let unit = 'px'

            if (a == 'posx') {
                css.push(['left', b + unit])
                css.push(['position', 'absolute'])
            } else if (a == 'posy') {
                css.push(['bottom', b + unit])
                css.push(['position', 'absolute'])
            } else if (a == 'pos') {
                let [xval, yval] = b.split(',').map((item) => item + unit)
                css.push(['left', xval])
                css.push(['bottom', yval])
                css.push(['position', 'absolute'])
            } else if (a.startsWith('transition')) {
                transitionElement = a
                transitionValue = b
            } else if (a == 'k' || a == 'key') {
                dataItems.push(getFirstWord(b))
                // attrs.push([':key', b])
                // props.push([':key', b])
                componentInfo.push([':key', b])
            } else if (a == 'p') {
                let propString = ''
                b = sliceQuotes(b)
                b.split(' ').forEach((item) => {
                    // props.push(item)
                    // attrs.push([':' + item, item])
                    componentInfo.push([':' + item, item])
                })

            } else if (a == 'v-for') {
                vfor = true
                b = stringManager(b, {
                    default: (x) => 'item in ' + x,
                    $s: (x) => x.slice(0, -1) + ' in ' + x,
                    in: (x) => x.replace(/in/, ' in '),
                })
                attrs.push([a, b])
            } else {
                attrs.push([a, b])
            }
        } else if ((match = search(colorsRE, item))) {
            a = cmap[match[0]]
            b = tailwind[fixColorName(match[1])]

            if (a == 'border-color') {
                css.push(['border-style', 'solid'])
                css.push(['border-weight', '1px'])
            }

            // tl(b)
            b += comment(match[1], 'block')
            css.push([a, b])
        } else if ((match = search(borderBottomRE, item))) {
            let [position, weight, unit, style, color] = argfix(
                match,
                [
                    [true, 1, 'px', 'solid', true],
                    [true, true, 'px', 'solid', true],
                    [true, true, true, 'solid', true],
                ],
                [(position) => cmap[position], '', '', '', (color) => tailwind[fixColorName(color)]]
            )
            a = position
            b = weight + unit + ' ' + style + ' ' + color
            css.push([a, b])
        } else if ((match = search(lgRE, item))) {
            a = match[0]
            b = match[1]
            if (a == 'lg') {
                result =
                    cmap[a] +
                    parens(
                        b
                            .split('-')
                            .map((x) => tailwind[x])
                            .join(', ')
                    )
                css.push(['background', result])
            }

            if (a == 'gtc' || a == 'gtr') {
                if (isNumber(b)) {
                    b = 'repeat(' + b + ', 1fr)'
                } else if (b == '') {
                    b = 'boooooga'
                } else {
                    b = dashToSpace(b)
                }

                css.push([cmap[a], b])
            } else if (a == 'gr' || a == 'gc') {
                css.push([cmap[a], b])
            }
        } else if ((match = search(namedColorsRE, item))) {
            a = 'color'
            b = tailwind[match] + comment(match, 'block')
            css.push([a, b])
        } else if ((match = search(pmwhNumberRE, item))) {
            a = match[0]
            if (a == 'bot') a == 'bottom'

            switch (match[2]) {
                case 'p':
                    unit = '%'
                    break
                case 'vh':
                    unit = 'vh'
                    break
                case 'em':
                    unit = 'em'
                    break
                case 'rem':
                    unit = 'rem'
                    break
                default:
                    if (a == 'lh' || a == 'fw') {
                        unit = ''
                    } else {
                        unit = 'px'
                    }
            }

            b = match[1] + unit

            if ((getDimension = search('(?:x|y)$', a))) {
                a = cmap[a.slice(0, -1)]
                for (let dimension of dmap[getDimension]) {
                    css.push([a + '-' + dimension, b])
                }
            } else if (['top', 'left', 'bottom', 'right'].includes(a)) {
                css.push([a, b])
            } else {
                a = cmap[a]
                if (isArray(a)) {
                    a.forEach((el) => css.push([el, b]))
                } else {
                    css.push([a, b])
                }
            }
        } else if (cabmap[item]) {
            if (isArray(cabmap[item]) && isString(cabmap[item][0])) {
                css.push(cabmap[item])
            } else if (isArray(cabmap[item])) {
                cabmap[item].forEach((el) => css.push(el))
            } else if (isString(cabmap[item])) {
                css.push([cabmap[item], item])
            } else if (isObject(cabmap[item])) {
                css.push([cabmap[item].a, cabmap[item].b])
            }
        } else if (['keepalive'].includes(item)) {
            transitionElement = item
            transitionValue = ''
        } else {
            text += item + ' '
        }
    }

    if (!exists(cssNameStore) && exists(css)) {
        styles = css
    } else {
        cssChunk = createClass(cssNameStore[0], css)
        cssName = cssNameStore.join(' ')
    }

    let div = createDiv(spaces, el, cssName, attrs, text.trim(), enter, styles)
    // if (exists(props)) {
    // componentInfo.props = props
    // }

    const finalProduct = {
        enter,
        div,
        cssChunk,
        props,
        vfor,
        spaces,
        el,
        transitionElement,
        transitionValue,
        isComponent,
        componentInfo,
        dataItems,
    }
    return finalProduct
}

function isStandardHtml(el) {
    return el.startsWith('*') || hlist.includes(getFirstWord(el))
}

function stringReduction(
    attributes,
    {
        mode = null,
        brackify = false,
        alignment = null,
        reverse = false,
        once = true,
        slice = true,
        parser = null,
        delimiter = '=',
        ending = ' ',
        trim = true,
        indented = false,
        start = '',
        end = '',
        reducer = null,
        kt = null,
        vt = null,
        join = '',
    } = {}
) {


    if (mode == 'attrs') {
        start = ' '
        vt = quotify
        delimiter = '='
        join = ' '
    }

    else if (mode == 'styles') {
        start = ''
        // vt = quotify
        delimiter = ': '
        join = '; '
    }

    else if (mode == 'html') {
        kt =(x) => '.' + x
        brackify =false
        join ='\n\n'
        delimiter =' '
    }

    else if (mode == 'css') {
        kt =(x) => '.' + x
        brackify =false
        join ='\n\n'
        delimiter =' '
    }
    if (brackify) {
        start = '{\n'
        indented = true
        end = '\n}'
    }

    if (exists(attributes)) {
        attributes = toArray(attributes)
    } else {
        // console.log( 'returning empy string from stringreduction' )
        return ''
    }
    let seen = []
    if (reverse) attributes.reverse()
    let product = ''
    if (isNestedArray(attributes)) {
        product = attributes.reduce((acc, item) => {
            if (!item) return acc
            let [a,b] = item

            if (isEmpty(b)) {
                return acc
            }
            if (once && seen.includes(a)) return acc
            seen.push(a)

            if (kt) a = kt(a)
            if (vt) b = vt(b)
            if (parser) b = parser(b)
            return acc += a + delimiter + b + join
        }, '')
    } 

    if (isEmpty(product)) {
        return ''
    }

    if (slice && join)  product = product.slice(0, -1 * join.length)
    if (trim)           product = product.trim()
    if (alignment)      product = alignEquals3(product, alignment)
    if (indented)       product = indent(product, indented)

    const final =  start + product + end
    return final
}

function isClosingTag(x) {
    if (noclosers.includes(x)) {
        return false
    } else if (hlist.includes(x)) {
        return true
    } else {
        return false
    }
}

function toClosingTag(x) {
    if (!x) return ''

    if (isArray(x)) {
        x.reverse()
        return x.map(item => '</' + item + '>').join('')
    }
    let close = false 

    if (noclosers.includes(x)) {
        close = false
    }

    else if (hlist.includes(x)) {
        close = true 
    } 
    return close ? '</' + x + '>' : ''
}

function addDotSlash(link) {
    if (!test('/', link)) link = './' + link
    return link
}

    function createDefaultAttrs(el, attrs = null) {
        let mode
        if (attrs) {
            if (el == 'script') {
                mode = 'src'
                attrs = addDotSlash(attrs)
            } else if (el == 'a') mode = 'href'
            else if (el == 'link') {
                mode = 'rel="stylesheet" type="text/css" href'
                attrs = addDotSlash(attrs)
            } else {
                return ' ' + attrs
            }
            return ' ' + mode + '="' + attrs + '"'
        } else {
            return ''
        }
    }
function toOpeningTag(x, attrs = null) {
    // console.red( x, attrs )
    if (!x) return ''

    if (isArray(x)) {
        return x.map(item => '<' + item + '>').join('')
    }

    if (exists(attrs)) {
        if (isString(attrs)) {
            if (x == 'script' || x == 'link') {
                attrs = createDefaultAttrs(x, attrs) 
            }
            else {
                attrs = ' class="' + attrs +'"'
            }
        }

        else if (isObject(attrs)) {
            attrs = stringReduction(attrs, htmlStringReductionObject)
        }
    }

    else {
        attrs = ''
    }
    const ending = hlist.includes(x) ? '>' : '/>'
    return '<' + x + attrs + ending
}

function createCssAttrs(attrs) {
    if (exists(attrs)) {
        if (isString(attrs)) return ' ' + attrs
        if (isObject(attrs)) return stringReduction(attrs, { start: ' ' })
    }
    return ''
}
function createCssAttr(name, val) {
    return name + '="' + val + '"'
}
function createDiv(spaces, el, className = '', attrs = '', text = '', enter = null, styles = '') {
    if (styles) {
        styles = ' ' + createCssAttr('style', createStyles(styles))
    }

    lia = false
    if (!el) {
        console.log('no el')
        return ''
    }
    if (el == 'lia') {
        lia = split(text)
        el = 'li'
    }

    let registeredClassName = false
    if (exists(attrs)) {
        attrs =
            ' ' +
            rigidSort(attrs)
                .reduce((acc, [a, b], i) => {
                    if (a == 'class') {
                        // console.log(a, b)
                        if (b.startsWith("'")) b = b.slice(1, -1)
                        if (i == 0 && className) {
                            registeredClassName = true
                            b = className + ' ' + b
                        }
                    }
                    return (acc += a + '="' + b + '"' + ' ')
                }, '')
                .trimEnd()
    }

    if (exists(className) && !registeredClassName) {
        className = ' class="' + className + '"'
    } else {
        className = ''
    }
    let ending = enter ? '' : toClosingTag(el)
    let closer = '>'
    if (['input', 'hr', 'br'].includes(el)) {
        text = ''
        ending = ''
        closer = '/>'
    }
    if (lia) {
        text = '<a href="' + lia[0] + '">' + lia[1] + '</a>'
    }
    const product = spaces + '<' + el + className + styles + attrs + closer + text + ending
    return product
}

function mapped(fn) {
    return (x) => {
        if (isArray(x)) {
            if (x.length == 0) return null
            if (x.length == 1) return fn(x)
            return x.map(fn)
        }
        return fn(x)
    }
}

function mapped2(input, mapper, join = null) {
    if (isArray(mapper)) {
        for (let i = 0; i < input.length; i++) {
            input[i] = mapper[i](input[i])
        }
        return input
    }

    if (isArray(input)) {
        const product = input.map(mapper)
        return join ? product.join(join) : product
    }
    return mapper(input)
}

function toCssName(name) {
    return (isStandardHtml(name) || name.startsWith('.') ? '' : '.') + name
}

function createStyles(css) {
    return stripComments(
        stringReduction(css, {
            parser: null,
            delimiter: ':',
            join: ';',
            slice: false,
            once: true,
            reverse: true,
            indented: false,
        })
    )
}

const htmlStringReductionObject = {
        once: true,
        delimiter: '=',
        vt: quotify,
        join: ' ',
        start: ' ',
}

const cssChunkStringReductionObject = {
        once: true,
        alignment: ':',
        delimiter: ': ',
        join: ';\n',
        slice: false,
        reverse: true,
        indented: true,
}


function createClass(name, css) {
    if (!exists(css)) return
    if (isString(css)) {
        css = css.split(' ').map(runCss).flat()
    }
    let product = stringReduction(css, cssChunkStringReductionObject)
    return brackify(toCssName(name), product)
}

function rngClassName() {
    let store = []
    let s = ''
    let alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('')
    let length = alphabet.length - 1
    for (let i = 0; i < 6; i++) {
        let product = alphabet[rng(0, length)]
        if (store.includes(product)) product = alphabet[rng(0, length)]
        store.push(product)
    }
    return store.join('')
}

const pmwhRE = '^(fs|wh|(?:min|max)?(?:w|h)|(?:p|m)(?:x|y|t|l|r|b)?)([\\d-]+)(p|vh)?'

function parseCss(s) {
    let tailwind
    let a
    let b
    let product = ''

    if ((match = search(colorsRE, s))) {
        a = cmap[match[0]]
        b = tailwind[match[1]]
    } else if ((match = search(namedColorsRE, s))) {
        console.log('asucollloorrrs')
        a = 'color'
        b = tailwind[match[1]]
    } else if ((match = search(pmwhRE, s))) {
        ;[a, b] = pmwhParser(match)
    } else if ((match = search("^(\\w+)=('[^]*?'|\\w+)", s))) {
        a = vmap[match[0]]
        b = parens(match[1], 'dq')
    } else {
        a = cabmap[s]['a']
        b = cabmap[s]['b']
    }
    return a + ': ' + b + ';\n'
}
const ignoreWORDS = ['is', 'in', 'a', 'as', 'an', 'the', 'between', 'of', 'to']
const BUTTON_KEY = '<div class="buttons">'
const DATA_KEY = '    data() {\n        return {'
const DATA_FKEY = ' '
const MOUNTED_FKEY = ' '
const LINKS_FKEY = '<!-- flinks -->'

function timestamp() {
    let date = new Date()
    let seconds = date.getSeconds()
    let minutes = date.getMinutes()
    console.log(minutes + ' : ' + seconds)
}

function timer(start = 0, { end = null } = {}) {
    let count = 0
    let timerID
    function runner() {
        timerID = setTimeout(() => {
            if (end) {
                clearTimeout(timerID)
                return count
            }
            count++
            timestamp()
            runner()
        }, 1000)
    }
    runner()
}

function doubleAction(a = null, b = null) {
    console.log('hi from double')
    let actionA, actionB, delayA, delayB
    if (isArray(a)) {
        ;[actionA, delayA] = a
        ;[actionB, delayB] = b
    } else {
        actionA = a
        actionB = b
        delayA = 2000
        delayB = 4000
    }

    timer()
    setTimeout(() => {
        console.log(' first action')
        console.log('timestamp', timestamp())
        if (actionA) actionA()
        setTimeout(() => {
            console.log('second action')
            console.log('timestamp', timestamp())
            if (actionB) actionB()
        }, delayB)
    }, delayA)
}

function pageReload(fn, ...args) {
    console.log('page reload')
    if (fn(...args) === true) location.reload()
}

class Breaker {
    constructor(max = 20) {
        this.max =max 
        this.count = 0
    }
    next(el) {
        if (el) console.log(el)
        this.count++
        if (this.count > this.max) {
            throw 'breaker'
        }
    }
}
function printCounter() {
    console.log(count)
    count++
    if (count <= max) {
        setTimeout(printCounter, 100)
    } else {
        return 'finished'
    }
}

function multiply(a, b) {
    return a * b
}
function addition(a, b) {
    return a + b
}
async function myFunc(before, during, after, ...args) {
    let a = before(...args)
    console.log(a)
    let answer = await new Promise((resolve) => {
        console.log('waiting')
        setTimeout(() => {
            resolve(during(a))
        }, 2500)
    })
    console.log(answer)
    console.log('------')
    console.log(after(answer))
    return 'boooo'
}

function xrunner(tryCount, ...args) {
    return new Promise(function (resolve, reject) {
        if (tryCount == 0) reject(false)
        var isDone = false
        if (!isDone) {
            console.log('unsidsfsdfsduccessful')
            setTimeout(() => {
                resolve(runner(tryCount - 1, ...args))
            }, 500)
        } else resolve(true)
    })
}

function useIt(...args) {
    runner(3, ...args)
        .then((...x) => {
            console.log(x)
        })
        .catch((x) => console.log(x))
}
var setIntervalSync = function (func, delay, ...args) {
    var intervalFunction, timeoutId, clear
    clear = function () {
        clearTimeout(timeoutId)
    }
    intervalFunction = function () {
        func(...args)
        timeoutId = setTimeout(intervalFunction, delay)
    }
    timeoutId = setTimeout(intervalFunction, delay)
    return clear
}

function isActiveTab() {
    let isTabActive = true
    let count = 0
    let intervalID
    window.onfocus = function () {
        isTabActive = true
        intervalID = setInterval(function () {
            console.log(count++)
        }, 1000)
    }
    window.onblur = function () {
        isTabActive = false
        clearInterval(intervalID)
    }
    intervalID = setInterval(function () {
        if (!document.hidden) console.log(count++)
    }, 1000)
}

function documentHidden() {
    return document.hidden
}

function beforeUnload(x) {
    window.onbeforeunload = function () {
        console.log(x)
        const store = []
        for (let i = 0; i < 10; i++) {
            store.push(rng(1, 10))
        }
        const product = sum(store)
        console.log(store)
        if (product > x) {
            console.log(product)
            return ''
        }
    }
}

function smallify(list) {
    return list.length == 1 ? list[0] : list
}

function getDocNotes(s, key) {
    const keymap = { py: 'py-function', js: 'js-function', m: 'vue-method', methods: 'vuemethods' }
    let [original, store] = mreplace('#?docs?\\s+([^]+?)(?:\\bend(?=\\n)|\\n *\\n)', s)
    let text = dedent(toString(store))
    key = keymap[key] || key
    let name = datestamp('concise') + ' | ' + key + ': ' + search('[a-zA-Z]+(?=\\d|\\(| {)', s)
    let docs = { name, text }
    return [original, docs]
}

function hasDocs(s) {
    return test('docs?\\b', s)
}
function looksLikeCodeBlock(s) {
    const items = ['function', 'this.', 'self.', 'def', '{', '}', 'class', '=', '[', ']']
    return test(Regex2(items, { escape: true }))
}

function looksLikeCode(s) {
    const looksLikeCodeRE = '{$|^ *}$|try {|^ *(?:except|if|for)'
    return test(looksLikeCodeRE, s)
}

function looksLikeCodeBlock(s) {
    return test('^(?:function|def|method|m|f|class)\\b', s)
}
function isCodeFile(s) {
    return test('(?:js|css|py|html)$', s)
}

function isUtf(s) {
    if (isCodeFile(s)) return true
    if (isProseFile(s)) return true
}

function isProse(file) {
    return test('(?:txt|docx|csv)$', file)
}

function remove(file) {
    console.log('removing: ' + file)
    fs.unlinkSync(file)
}

function rename(file) {
    fs.renameSync(file)
}

function cleandir(dir, ...maps) {
    let keep, removal
    const store = {}
    ;[keep, removal] = createKeepRemovalRegex(...maps)
    for (let file of absdir(dir)) {
        const name = basename(file)
        if (isDir(file)) continue
        else if (test(keep, name)) continue
        else if (isBigFile(file)) continue
        else if (test(removal, name)) remove(file)
        else {
            console.log(file)
            store[file] = smallify(file)
        }
    }
    write('object.js', createVariable('object', stringify(store)))
    console.log(read('object.js'))
}

function isBigFile(file) {
    return size(file) > 5000
}

function isSmallFile(file) {
    return size(file) < 20
}

function regexFromDict(dict) {
    const map = {
        sw: { start: '^', end: '', cat: '' },
        ew: { start: '', end: '$', cat: '' },
        inc: { start: '', end: '', cat: '' },
        lib: { start: '', end: '', cat: '' },
    }
    const store = []
    for (let [k, v] of Object.entries(dict)) {
        const product = map[k]['start'] + Regex(v, 'filenames') + map[k]['end']
        store.push(product)
    }
    return store.join('|')
}

function size(file) {
    return fs.lstatSync(file).size
}

function createKeepRemovalRegex(...items) {
    const base = {
        keep: {
            sw: ['.', '_', '$'],
            ew: ['pyc'],
            lib: [
                '.bash_aliases',
                '.vimrc',
                '.bashrc',
                'codemirror.js',
                'jshint.js',
                'skulptlib.js',
                'skulptmin.js',
                'vue.js',
                'vuex.js',
                'docs.css',
                'codemirror.css',
                'stdout.log',
            ],
        },
        remove: {
            ew: ['zip', 'mhtml', 'gsheet', 'pdf', 'json'],
            inc: ['\\(\\d+\\)', 'test'],
            lib: ['typo.js', 'report.js', 'new.jscopy', 'fixjs.js', 'foo.pdf', 'foo.jscopy'],
        },
    }
    const dict = recursiveDeepMerge(base, ...items)
    return Object.values(dict).map(regexFromDict)
}

function getFileEncoding(f) {
    var d = new Buffer.alloc(5, [0, 0, 0, 0, 0])
    var fd = fs.openSync(f, 'r')
    fs.readSync(fd, d, 0, 5, 0)
    fs.closeSync(fd)
    var e = false
    if (!e && d[0] === 0xef && d[1] === 0xbb && d[2] === 0xbf) e = 'utf8'
    if (!e && d[0] === 0xfe && d[1] === 0xff) e = 'utf16be'
    if (!e && d[0] === 0xff && d[1] === 0xfe) e = 'utf16le'
    if (!e) e = 'ascii'
    return e
}
const myfiles = {
    vimrc: '~/.vimrc',
    bashaliases: '~/.bash_aliases',
}

function prepareSentence(s) {
    let text = periodify(s)
    let author
    if (s.startsWith("'")) {
        if ((match = search("'(.*?) ?- ?((?:\\w+ )*?\\w+$)", s))) {
            ;[text, author] = match
            author = capitalize(author, 'title')
        } else {
            text = text.slice(1)
            author = 'me'
        }
    }
    return author ? text + ' - ' + author : text
}

function getWord(s, n = 1) {
    const trace = '\\w+.*?'
    return search(trace.repeat(n - 1) + '(\\w+)', s)
}

function periodify(s) {
    s = s.trim()
    s = addQuestionMarkOrPeriod(s)
    return capitalize(s, 'start')
}

function getYear() {
    return new Date().getFullYear().toString().slice(2)
}

function toDatestamp(s) {
    let month, day, year
    if (s.length == 4) {
        ;[month, day] = split(s, 2)
        year = getYear()
    } else {
        ;[month, day, year] = findall('\\d\\d', s)
    }
    return [month, day, year].join('-')
    return { month, day, year }
}
const updatedict = {
    '::?([a-zA-Z]+)': (_, a) => (_.startsWith('::') ? allCaps(a) : capitalize(a)),
    '(\\S+)\\\\(\\S+)': (_, __, a) => dashToSpace(a),
}

function dashToSpace(s) {
    return s.replace(/-/g, ' ')
}

function removeEverythingSuper(s) {
    return removeLookAround(s).replace(/\$|\^|(?:\\\w|\\\S|\[.*?])[\*\+]?|\\(?=\W)/, '')
}

const wrapifyregexlist = [


    '\\(\\?:(?:\\w+\\|)+\\w+\\)',    // foo
    '^\\([\\w\\|]+?\\)',             // foo
    '\\w+(?:\\|\\w+)*',        // getting all of it (circle|square|box)
    '^\\w+\\?',                      // foo

    '#',                                // hash
    '`',                                // tilda

    // '\\\\\\]',                       // brace
    // '\\\\\\[',                       // brace
    // '\\\\\\.',                       // period
    '\\\\(?:\\.|\\]|\\[)',           // (COMBINE)

    '(?<!:)\\\\\\^',                 // foo

    // '(?<!\\?)<',                     // foo
    // '(?<!\\?)>',                     // foo
    '(?<!\\?)[<>]',                     // (COMBINE)

    '(?<!<)=',                       // foo
    '(?<=\\w{2,})\\\\+(?=\\w{2,})',  // WHAT IS THIS
    '(?<!:)/+',                      // foo
    '(?<!\\|)  ',                    // foo
    '(?<!\\?):+',                    // foo
    // '(?<!\\\\)\\w+(?=[^ \\w]|$)'  // (1a)
       '(?<!\\\\)\\w+(?! \\w)',      // (1b)  // the replacement of 1a
]
function regexWrapifyAndSaveGRM(s) {

const wrapifyregexlist = [

    '#',                                // hash
    '`',                                // tilda

    // '\\\\\\]',                       // brace
    // '\\\\\\[',                       // brace
    // '\\\\\\.',                       // period
    '\\\\(?:\\.|\\]|\\[)',           // (COMBINE)

    '^\\w+\\?',                      // foo
    '^\\([\\w\\|]+?\\)',             // foo
    '(?<!:)\\\\\\^',                 // foo

    // '(?<!\\?)<',                     // foo
    // '(?<!\\?)>',                     // foo
    '(?<!\\?)[<>]',                     // (COMBINE)

    '(?<!<)=',                       // foo
    '(?<=\\w{2,})\\\\+(?=\\w{2,})',  // foo
    '(?<!:)/+',                      // foo
    '(?<!\\|)  ',                    // foo
    '(?<!\\?):+',                    // foo
    '\\(\\?:(?:\\w+\\|)+\\w+\\)',    // foo
    // '(?<!\\\\)\\w+(?=[^ \\w]|$)'  // (1a)
       '(?<!\\\\)\\w+(?! \\w)',      // (1b)  // the replacement of 1a
]
      const regex = wrapifyregexlist.join('|')

    let tag = null
    const parser = (x) => {
        tag = x
        // console.red( x )

        // tl(tag)
        // if (test('^\\w+|\\w+', x)) {
            // tag = tag.split('|')
            // return parens(x)
        // }
        if (test('^\\w+\\?', x)) {
            tag = tag.slice(0, -2)
        } else if (x.startsWith('(?:')) {
            tag = x.slice(3, -1).split('|')
            return '(' + x.slice(3)
        } else if (x.startsWith('(')) {
            console.red( 'asdfasdfasdfasdfa' )
            tag = x.slice(1, -1).split('|')
            return x
        } else if (test('^\\\\', x)) {
            // for the case of \\[.*?\\]
            tag = x.replace(/\\/g, '')
            // console.log( tag)
        }
        return parens(x)
    }
    let result = replace(regex, parser, s, '')
    if (!tag) {
        tag = s.replace(/[ ?]/g, '')
    }
    return [tag, result]
}

function regexWrapifyAndSave(s) {
    // ^\\w+\\? this is for regex = 'seriesb?'
    // \\\\\\] comes from [.*?] forregex of integer capturing. [2^i] for example
    // (?<=\\w)\\\\^ is for [2^x]
    // CHANGE: (?=[^ \\w]|$) for mrepcssdict TO '(?! \\w)'

    // const regex = '(?<!:)\\\\\\^|\\\\\\]|\\\\\\[|^\\w+\\?|^\\([\\w|]+?\\)|`|(?<!\\?)<|(?<!\\?)>|(?<!<)=|(?<=\\w{2,})\\\\+(?=\\w{2,})|(?<!:)/+|#|(?<!\\|)  |\\\\\\.|(?<!\\?):+|\\(\\?:(?:\\w+\\|)+\\w+\\)|(?<!\\\\)\\w+(?=[^ \\w]|$)'
      // const regex =  '(?<!:)\\\\\\^|\\\\\\]|\\\\\\[|^\\w+\\?|^\\([\\w|]+?\\)|`|(?<!\\?)<|(?<!\\?)>|(?<!<)=|(?<=\\w{2,})\\\\+(?=\\w{2,})|(?<!:)/+|#|(?<!\\|)  |\\\\\\.|(?<!\\?):+|\\(\\?:(?:\\w+\\|)+\\w+\\)|(?<!\\\\)\\w+(?! \\w)'

      const regex = wrapifyregexlist.join('|')

    let tag = null
    const parser = (x) => {
        tag = x
        // console.red( x )

        // tl(tag)
        if (test('^\\w+|\\w+', x)) {
            tag = tag.split('|')
            return parens(x)
        }
        else if (test('^\\w+\\?', x)) {
            tag = tag.slice(0, -2)
        } else if (x.startsWith('(?:')) {
            tag = x.slice(3, -1).split('|')
            return '(' + x.slice(3)
        } else if (x.startsWith('(')) {
            console.red( 'asdfasdfasdfasdfa' )
            tag = x.slice(1, -1).split('|')
            return x
        } else if (test('^\\\\', x)) {
            // for the case of \\[.*?\\]
            tag = x.replace(/\\/g, '')
            // console.log( tag)
        }
        return parens(x)
    }
    let result = replace(regex, parser, s, '')
    if (!tag) {
        tag = s.replace(/[ ?]/g, '')
    }
    return [tag, result]
}

function regexWrapify(s) {
    const regex =
        '(?<!tps)/+(?!:)|#|(?<!\\|)  |\\\\\\.|(?<!\\?):+|\\(\\?:(?:\\w+\\|)+\\w+\\)|(?<!\\\\)\\w+'
    const parser = (x) => (x.startsWith('(?:') ? '(' + x.slice(3) : parens(x))
    return replace(regex, parser, s, '')
}
function letterParser(s) {
    const cmap = {
        '^(?:dear|hello|hi there).*': (s) => s + ',\n',
        '^(?:sincerely|best|formally yours)$': (s) => s + ',',
        '\\w+:\\n[^]*?(?=\\n *\\n)': listParserNew,
        '(?:mr|mrs|miss|dr|Mr|Mrs|Miss|Dr) ?\\w+': doctorify,
        '\\bty$': '.Thanks!',
    }

    const ldicta = {
        '.*[\\S]': addPeriodAndCapitalize,
    }

    text = proser(s)
    text = creplace(text, cmap)
    text = irep(text, pmnb, pmwb)
    text = frep(text, ldicta)
    return text
}

function removeAllComments(code) {
    const product = code.replace(/\/\/.*|\/\*[^]*?\*\//g, '')
    return product
}

function writeParser(s) {
    let file, text
    ;[file, text] = split(s, [pathParser, singleLineCodeParser])
    return { file, text }
}

function printParser(s) {
    return pathParser(s)
}

function singleLineCodeParser(s) {
    const dollarshortcutmap = {
        $mdrive: '/users/harfunmaterials/Google Drive',
        $gdrive: '/mnt/chromeos/GoogleDrive/MyDrive',
        $v: '.vimrc',
        $bh: '.bash_history',
    }
    return srep(s, dollarshortcutmap)
}

function isMacbook() {
    return window['navigator']['userAgent'] == 'asd'
}

function getFirstWords(s) {
    return setify(findall('^\\w+', s)).sort()
}

function postClean(s) {
    const consoleMessageASSET = 'console.log("Success")'
    const dict = {
        "Browser'\\)\\n}": "Browser')\n}\n\n\n\n\n\n",
        '.*$': consoleMessageASSET,
    }
    const regex = Regex(dict)
    const keys = Object.keys(dict)
    const parsers = Object.values(dict)
    const store = []
    let count = 0
    function par(x) {
        for (let [key, val] of Object.entries(dict)) {
            if (test(key, x)) {
                if (store.includes(key)) return x
                store.push(key)
                return isString(val) ? val : val(x)
            }
        }
        return x
    }
    function parser(x) {
        if (store.includes(x)) {
            return x
        }
        store.push(keys[count])
        let action = parsers[count++]
        let result = isString(action) ? action : action(x)
        return result
    }
    return replace(Regex(dict), par, s, 'g')
}

function placeHolderFunction(...args) {
    return
}

function readLines(s, n) {
    return s.split('\n').slice(0, n).join('\n')
}

function cleanText(s) {
    const a = nodePrettier(s, 'babel')
    const b = deleter(a)
    return nodePrettier(b, 'babel')
}

function csvToMaiDELtrixArray(s) {
    let y, x
    y = 0
    x = 0
    const width = count(',', getFirstLine(s))
    const height = count('\n', s)
    const store = []
    const items = s.split(/, |\n/)
    for (let item of items) {
        if (x == width) {
            x = 0
            y += 1
        }
        store[y * width + x]
        x += 1
    }
    return { width, height, store }
}

function csvToMatrix(s) {
    let y, x
    y = 0
    x = 0
    const width = count(',', getFirstLine(s)) + 1
    const height = count('\n', s) + 1
    const store = []
    const items = s.split(/, ?|\n/)
    for (let item of items) {
        if (x == width) {
            x = 0
            y += 1
        }
        store[y * width + x] = item
        x += 1
    }
    return { width, height, store }
}

function isCSV(s) {
    return count(',', getFirstLine(s)) > 2
}
class Matrix {
    constructor(s, width = null, height = null, store = []) {
        if (!width) {
            let { width, height, store } = csvToMatrix(s)
            this.width = width
            this.height = height
            this.store = store
        } else {
            this.width = width
            this.store = s
            this.height = Math.floor(this.store.length / width)
        }
    }
    get(x, y) {
        return this.store[y * this.width + x]
    }
    get rows() {
        let count = 0
        let bigstore = []
        for (let y = 0; y < this.height; y++) {
            let store = []
            for (let x = 0; x < this.width; x++) {
                count++
                store.push({ count, value: this.get(x, y) })
            }
            bigstore.push(store)
        }
        return bigstore
    }
    get columns() {
        let count = 0
        let bigstore = []
        for (let x = 0; x < this.width; x++) {
            let store = []
            for (let y = 0; y < this.height; y++) {
                count++
                store.push({ count, value: this.get(x, y) })
            }
            bigstore.push(store)
        }
        return bigstore
    }
    get zipColumns() {
        const bigstore = []
        for (let col = 0; col < this.columns.length; col += 2) {
            bigstore.push(zip(this.columns[col], this.columns[col + 1]))
        }
        return bigstore
    }
    get value() {
        return this.matrix
    }
}

function stripComments(code) {
    return code.replace(/ *\/\/.*| *\/\*[^]*\*\/ */g, '')
}

function removeJavascriptComments(s) {
  return s.replace(/ *(?:\/\/.*|\/\*[^]*?\*\/ *)/g, "");
}

function removeComments(s, lang = '', startingCaret = '') {
    let items = ['//', '#']
    if (lang == 'js') items.pop()
    else if (lang == 'py') items.shift()
    else {
        try {
            lang = getLang(s)
            return removeComments(s, lang)
        }
        catch {
            return s
        }
    }
    const bigCommentRE = startingCaret + ' *' + Regex(items) + '.*\\n?'
    return replace(bigCommentRE, '', s)
}
const bigCommentRE = ' *(?://|#).*'

function fixExpected(s) {
    const map = { undefined: undefined, null: null, true: true, false: false }
    return map[s] ? map[s] : s
}

function partitionArray(items) {
    return items.reduce(
        (acc, [a, b]) => {
            acc[0].push(a)
            acc[1].push(b)
            return acc
        },
        [[], []]
    )
}

function getBrowserTestStrings(s) {
    if (test('// t', s)) {
        const items = findall('(?<=// t(?:est)? )...*?(?= ?// t(?:est)?|$)', s)
        return items
    }
}

function getTestStrings(s) {
    let store
    if (test('//t', s)) {
        const items = findall('(?<=//t ).{3,}(?= ?//t|$)', s).map((x) => x.split(/ ?x= ?/))
        const [expressions, expected] = partitionArray(items)
        return [expressions, expected.map(fixExpected)]
    }
    return [null, null]
    return null
}

function compareAnswer(answer, answerkey) {
    if (isArray(answer)) {
        return parens(answer.toString(), 'braces') === answerkey
    }

    answerkey = eval(answerkey)
    if (isArray(answer)) {
        for (let i = 0; i < answer.length; i++) {
            if (answer[i] === answerkey[i]) continue
            return false
        }
        return true
    } else if (isString(answer)) {
        return answer === answerkey
    } else if (isObject(answer)) {
        return JSON.stringify(answer) === JSON.stringify(answerkey)
    }
}

function runBrowserTest(s) {
    const items = getBrowserTestStrings(s)
    if (!items) return
    const answerkey = search('// answer (.*)', s)

    const name = getFunctionName(s)
    const store = []
    for (let item of items) {
        const expr = createFunctionCall(name, item)
        const code = s + '\n' + createFunctionCall(name, item)
        const answer = eval(code)
        const result = answerkey ? compareAnswer(answer, answerkey) : null
        store.push({ args: item, answer: answer, result })
    }
    console.log('---------\n', stringify(store))
    return store
}
var localStorageSpace = function () {
    var data = ''
    console.log('Current local storage: ')
    for (var key in window.localStorage) {
        if (window.localStorage.hasOwnProperty(key)) {
            data += window.localStorage[key]
            console.log(
                key +
                    ' = ' +
                    ((window.localStorage[key].length * 16) / (8 * 1024)).toFixed(2) +
                    ' KB'
            )
        }
    }
    console.log(
        data
            ? '\n' + 'Total space used: ' + ((data.length * 16) / (8 * 1024)).toFixed(2) + ' KB'
            : 'Empty (0 KB)'
    )
    console.log(
        data
            ? 'Approx. space remaining: ' +
                  (5120 - ((data.length * 16) / (8 * 1024)).toFixed(2)) +
                  ' KB'
            : '5 MB'
    )
}

function estimateLocalStorageData() {
    let total = 0
    for (let x in localStorage) {
        var amount = (localStorage[x].length * 2) / 1024 / 1024
        if (!isNaN(amount) && localStorage.hasOwnProperty(x)) {
            total += amount
        }
    }
    return total.toFixed(2)
}

function runTests(s, lib) {
    const [items, expected] = getTestStrings(s)
    const name = getFunctionName(s)
    if (!exists(items)) return [name, true]
    store = []
    items.forEach((item, i) => {
        const expr = createFunctionCall(name, item)
        const answer = feval(expr, lib)
        const matched = expected[i] ? expected[i] == answer : null
        if (matched !== null)
            store.push({ args: item, result: answer, matched, expected: expected[i] })
        else store.push({ args: item, result: answer })
    })
    return { name, text: removeComments(s), store: store }
    return [name, store]
}

function checkFunctions(arr) {
    const lib = toString(arr)
    const store = new Storage()
    for (let item of arr) {
        let product = runTests(item, lib)
        if (product) store.extend(product)
    }
    return store.value
}

function packParser(s) {
    const attrRE = "(\\w+)=('[^]*?'|\\[.*?\\]|\\w+)|(\\w+)"
    const kmap = { a: 'alias', p: 'parent', i: 'indent', j: 'join', d: 'destination' }
    const vmap = {}
    const items = smartFindall(attrRE, s)
    console.log(items)
    const key = items.shift()
    store = {}
    for (let [a, b] of items) {
        a = kmap[a] || a
        b = vmap[b] || b.replace(/\n/g, '\\n').replace(/\.\//, '\\\\./')
        store[a] = b
    }
    if (!store['parser']) store['parser'] = key + 'Parser'
    return createStringDictionaryEntry(store, { string: true, singleLine: true, key })
}

function createStringDictionary(s) {
    if (isString(s)) {
        return parens(indent(s), 'brackify')
    }
}
function createStringDictionaryEntry(store, { string = true, singleLine = true, key = null }) {
    let delimiter = singleLine ? ', ' : ',\n'
    let s = ''
    if (key) s += key + ': '
    s += '{ '
    for (let [k, v] of Object.entries(store)) {
        s += "'" + k + "'" + ': ' + dollarCapture(v) + delimiter
    }
    s += '}' + ''
    return s
}

function createVariable2(val, name) {
    if (isObject(val)) {
        val = toStringDictionary(Object.entries(val)).trimEnd()
    }
    return brackify('const ' + name + ' =', val)
}

function createVariable(name, val) {
    return 'const ' + name + ' = ' + val
}

function toJsonFactory(parser, name) {
    const parsed = (x) => stringify(zip(parser(x)))
    if (name) {
        return (s) => {
            return createVariable(name, parsed(s))
        }
    }
    return (x) => parsed(x)
}
const cssToJson = toJsonFactory((x) => findall('(\\S+)(?: |\\\\t)(.*)', x), 'cssdict')

function isDoubleArray(x) {
    return isArray(x) && isArray(x[0])
}

function zip(a, b = null) {
    if (isDoubleArray(a)) {
        b = a[1]
        a = a[0]
    }
    const store = {}
    for (let i = 0; i < a.length; i++) {
        store[a[i]] = b[i]
    }
    return store
}

function glie(s) {
    let match, cat, store
    if ((match = search('delf|delfun', s))) {
        return { cat: 'delf' }
    }
    if ((match = search('([^\\s:{}]{4,}).*?xp', s))) {
        if (test('xp|if|while|else|while|function', match)) {
            return { cat: 'xp', replacement: null }
        }
        if ((match = search('(?<=xp)[a-z]', s))) {
            return { cat: 'xp', replacement: match[0] }
        }

        const lineEditRE =
            '((?<=^ *)d|(?<=\\b(?:up(?!date)))[a-zA-Z-]+|\\b(?:le|lea|xg))(\\d*) (.*)'
        let [a, n, b] = search(lineEditRE, s, 3)
        if (!a || a.startsWith('date')) return
        if (a == 'd' || a == 'r' || a == 'le') {
            return { cat: a, dict: Dict(b, 'escape') }
        }
        if (test('^(?:w|c|f|m|p|lea|t)', a)) {
            return { cat: a, n: n, content: b }
        }
        if (test('^xg|^m', a)) {
            if (n) n = parseInt(n)
            return { cat, n, items: b.split(' ') }
        }
        if (a == 'e') {
            let [regex, replacement] = toRegexReplacement(b)
        } else {
            let [regex, replacement] = toRegexReplacement(b)
            return { cat: a, regex, replacement }
        }
    }
}
class LineEditError extends Error {
    constructor(key, val) {
        super()
        this.key = key
        this.val = val
    }
}
const ERRORMAP = {
    "Cannot read property 'replace' of null": 'replace',
}

function conditionalRescape(s) {
    if (test('[()\\[\\]*.^$]', s)) {
        if (s.includes('\\') || s.includes('.*?')) return s
        console.log(s + ' : escaping')
        return rescapeOld(s)
    }
    return s
}
class CreateError {
    constructor(limit = 20) {
        this.count = 0
        this.limit = limit
    }
    increment(input) {
        this.count += 1
        if (this.count == this.limit) {
            throw new Error(input)
        }
    }
}

function displayErrorLog(dict) {
    const linebreak = '-'.repeat(20)
    const product = Object.entries(dict).reduce((acc, [k, v]) => (acc += k + ': ' + v + '\n'), '')
    return linebreak + '\n' + product + '\n' + linebreak
}
var special = [
    'zeroth',
    'first',
    'second',
    'third',
    'fourth',
    'fifth',
    'sixth',
    'seventh',
    'eighth',
    'ninth',
    'tenth',
    'eleventh',
    'twelfth',
    'thirteenth',
    'fourteenth',
    'fifteenth',
    'sixteenth',
    'seventeenth',
    'eighteenth',
    'nineteenth',
]
var deca = ['twent', 'thirt', 'fort', 'fift', 'sixt', 'sevent', 'eight', 'ninet']

function stringifyNumber(n) {
    if (n < 20) return special[n]
    if (n % 10 === 0) return deca[Math.floor(n / 10) - 2] + 'ieth'
    return deca[Math.floor(n / 10) - 2] + 'y-' + special[n % 10]
}

function sortDictionary(dict) {
    const items = Object.entries(dict)
    items.sort((a, b) => {
        if (isNumber(a)) return b[1] - a[1]
        return a[1] - b[1]
    })
    return Dict(items)
}
const library = [
    'skulptmin.js',
    'skulptlib.js',
    'jshint.js',
    'codemirror.css',
    'docs.css',
    'codemirror.js',
    'vue.js',
    'vuex.js',
    'vuerouter.js',
]

function replaceStrings(s) {
    return replace('(?<!\\\\)[\'"`][a-zA-Z].*? .*?[a-zA-Z](?<!\\\\)[\'"`]', '', s)
}

function getFileStats(s) {
    s = replaceStrings(s)
    let words = getWords(s)
    const tally = new Tally(words)
    return tally.value
}
const jsobjmethods = [
    'concat',
    'copyWithin',
    'entries',
    'every',
    'fill',
    'filter',
    'find',
    'findIndex',
    'forEach',
    'from',
    'includes',
    'indexOf',
    'isArray',
    'join',
    'keys',
    'lastIndexOf',
    'map',
    'pop',
    'push',
    'reduce',
    'reduceRight',
    'reverse',
    'shift',
    'slice',
    'some',
    'sort',
    'splice',
    'toString',
    'unshift',
    'valueOf',
    'charAt',
    'charCodeAt',
    'concat',
    'endsWith',
    'fromCharCode',
    'includes',
    'indexOf',
    'lastIndexOf',
    'localeCompare',
    'match',
    'repeat',
    'replace',
    'search',
    'slice',
    'split',
    'startsWith',
    'substr',
    'substring',
    'toLocaleLowerCase',
    'toLocaleUpperCase',
    'toLowerCase',
    'toString',
    'toUpperCase',
    'trim',
    'valueOf',
]
const jskeywords = [
    'abstract',
    'arguments',
    'await',
    'boolean',
    'break',
    'byte',
    'case',
    'catch',
    'char',
    'class',
    'const',
    'continue',
    'debugger',
    'default',
    'delete',
    'do',
    'double',
    'else',
    'enum',
    'eval',
    'export',
    'extends',
    'false',
    'final',
    'finally',
    'float',
    'for',
    'function',
    'goto',
    'if',
    'implements',
    'import',
    'in',
    'instanceof',
    'int',
    'interface',
    'let',
    'long',
    'native',
    'new',
    'null',
    'package',
    'private',
    'protected',
    'public',
    'return',
    'short',
    'static',
    'super',
    'switch',
    'synchronized',
    'this',
    'throw',
    'throws',
    'transient',
    'true',
    'try',
    'typeof',
    'var',
    'void',
    'volatile',
    'while',
    'with',
    'yield',
]

function parasdseObject(x) {
    return isString(x) ? x : stringify(x)
}

function append(file, content) {
    if (isFile(file)) {
        const prev = read(file)
        const next = merge(prev, content)
        write(file, next)
    } else {
        write(file, content)
    }
}

function replaceDollar(s, a, b) {
    return replace('\\$' + a, b, s)
}

function getDependencies(s) {
    matches = findall(allVariablesRE, s)
    ignore = [
        'result',
        'product',
        'items',
        'item',
        'matches',
        'match',
        'a',
        'b',
        'c',
        's',
        'dict',
        'map',
        'maps',
        'dicts',
        'i',
        'el',
        'x',
        ...jskeywords,
    ]
    return setify(difference(matches, ignore))
}

function resolvePath(filepath) {
    if (filepath[0] === '~') {
        return path.join(process.env.HOME, filepath.slice(1))
    }
    return filepath
}

function listdir(dir = __dirname) {
    return fs.readdirSync(dir)
}

function abspath(file, dir) {
    return path.resolve(dir, file)
}

function absdir(dir) {
    return listdir(dir).map((file) => abspath(file, dir))
}

function convertDate(date) {
    date = new Date(date).toISOString()
    return search('^\\d+-(\\d+)-(\\d+)', date).join('')
}

function absname(file) {
    if (path.isAbsolute(file)) return file
    return path.join(__dirname, file)
}

function isAbsolute(file) {
    return path.isAbsolute(file)
}

function basename(s) {
    return s.match(/(?<=\/)S+$/)[0]
}

function getFileInfo(file) {
    const info = fs.lstatSync(file)
    return {
        mdate: convertDate(info.mtime),
        size: info.size,
        name: basename(file),
        path: absname(file),
    }
}

function getHost() {
    var os = require('os')
    var hostname = os.hostname()
    return hostname
}

function commander(x) {
    console.log(x)
    let command, a, b
    if (x.endsWith('.pdf')) {
        command = 'python3 Print.py ' + x
    } else {
        ;[a, b] = x.split(' ')
        if (a == 'print') command = 'python3 Print.py ' + b
    }
    const { exec } = require('child_process')
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`)
            return
        }
        console.log(`stdout: ${stdout}`)
        console.error(`stderr: ${stderr}`)
    })
}

function commander2(x) {
    const { execFile } = require('child_process')
    const child = execFile('node', ['--version'], (error, stdout, stderr) => {
        if (error) {
            throw error
        }
        console.log(stdout)
    })
    const childProcess = require('child_process')
    childProcess.execFileSync(__dirname + '/' + 'a.py')
}

function expandUser(filepath) {
    if (filepath[0] === '~') {
        return path.join(process.env.HOME, filepath.slice(1))
    }
    return filepath
}

function pathway(file) {
    if (file.startsWith('~')) return expandUser(file)
    if (file.startsWith('drive')) return file
    return file
}

function filereader(e) {
    // changed readfile to filereader
    const file = e.target.files[0]
    console.log(file.name, file.type, file.size, file.getAsDataURL())
    return
    const reader = new FileReader()
    reader.readAsText(file)

    reader.onload = function (e) {
        const content = e.target.result
        console.log(content)
        console.log(foo)
        console.log('finished')
    }
}

function write(file, content, join = '\n') {
    const fs = require('fs')
    const path = require('path')
    file = path.join(__dirname, file)
    if (isArray(content)) content = content.join(join)
    else if (!isString(content)) {
        content = stringify(content)
    }
    fs.writeFileSync(file, content)
    console.log('writing:', file)
}

function isBrowser() {
    return !isNode()
}

function isNode() {
    return typeof window === 'undefined'
}

function isFile(file) {
    if (file.length > 100) return false
    return fs.lstatSync(file).isFile()
}

function isDir(dir) {
    return fs.lstatSync(dir).isDirectory()
}

function mdate(file) {
    const date = fs.lstatSync(file).mtimeMs
    return date
    return new Date(date).toISOString().replace(/T/, ' ').replace(/\..+/, '')
}

function cdate(file) {
    const date = fs.lstatSync(file).birthtime
    return new Date(date).toISOString().replace(/T/, ' ').replace(/\..+/, '')
}

function prettierAction(s) {
    const actions = [{ parser: nodePrettier }, { parser: cleanup }, { parser: nodePrettier }]
    for (let i = 0; i < actions.length; i++) {
        let action = actions[i]
        try {
            s = action.parser(s, ...action.args)
            console.log('successful on count ' + i)
        } catch (e) {
            console.log(e.message)
            console.log('failed on count ' + i + ': parser = ' + action.parser.name)
            return
        }
    }
    return s
}

function dollarReplace(s, dict, delimiter = '$') {
    const regex = Regex(dict, { dollar: delimiter })
    function parser(x) {
        return dict['$' + x]
    }
    return replace(regex, parser, s)
}

function rpg(file, parser) {
    return parser(read(file))
}

function getText(file) {
    file = expandUser(file)
    return isFile(file) ? read(file) : file
}

function rpw(file, parser, outpath = null) {
    if (!isNode()) return
    const name = outpath ? outpath : file
    try {
        const text = getText(file)
        let product = parser(text)
        if (isObject(product)) product = stringify(product)
        if (outpath && outpath.endsWith('.jsc')) {
            let objectName = outpath.split('.')[0]
            write(changeExtension(outpath, 'js'), createVariable(objectName, product))
        } else if (outpath) {
            console.log('rpw action:')
            write(outpath, product)
            if (outpath.endsWith('.pdf')) {
                commander(outpath)
            }
        } else {
            console.log(product)
            return product
        }
    } catch (e) {
        console.log(e)
        if (e == 'x') {
            console.log(e)
            console.log(parser)
            try {
                if (outpath) {
                    write(outpath, parser())
                    if (outpath.endsWith('.pdf')) {
                        commander(outpath)
                    }
                } else {
                    console.log(parser())
                }
            } catch (e) {
                console.log(e.message)
                console.log('error')
            }
        } else {
            console.log(e)
        }
    }
}

function organizer(s) {
    const map = {
        function: { indent: 2 },
        def: { indent: 2 },
        class: { indent: 2 },
    }
    const store = Object.entries(aggregateAll(s, 'store'))
    store.sort((a, b) => String(a[0]) - String(b[0]))
    for (let [k, v] of store) {
        join = '\n'.repeat(map[k] && map[k]['indent'] ? map[k]['indent'] : '\n')
        s += v.sort().join(join) + '\n\n'
    }
    return s
}

function fpParser(s) {
    return createFunction('parser', 's', s, 'py')
}

function pcfParser(s) {
    return betterText('cef ' + s, 'py')
}

function jcfParser(s) {
    if (test('^{', s)) throw new Error('forgot to split jcf')
    return betterText(s)
}

function labParser(s) {
    return '(a,b) => ' + s + ')'
}

function splitChunks(s) {
    return s.split(/\n+(?=\w)/)
}
const ifRE = '(?<=^ *)(?:if|elif|else if|while) .*'
const addBracesRE = '(?<=^ *)(?:\\w+, ?){1,}\\w+(?= =)'

function addBracesParser(s) {
    return '[' + s + ']'
}
const jspyMethodRE = '(\\w+)\\.(filter|map|forEach|reduce)\\((.*)'

const jspyBigMethodRE =
    "^ *(return )?(\\w+)\\.(map)\\((.*?) => (?:(\\w.*)|{([\\w\\W]+?}(?:, (?:''|0|\\[\\]|\\{}))?\\)))"

function tally(el, s) {
    return findall(el, s).length
}

function counter(el, s) {
    return findall(el, s).length
}
function literal(s) {
    return '(?<!\\\\)' + s
}
function unbalancedParentheses(s) {
    const regex = literal('[()]')
    return counter(regex, s)
}
function jspyMethodParser(_, name, method, s) {
    let match
    let extra = ''
    if (unbalancedParentheses(s)) s = s.slice(0, -1)
    if (method == 'reduce') {
    } else {
        if ((match = search('^(\\w+)\\)$', s))) {
            return '[ ' + match + '(x) for x in ' + name + extra + ' ]'
        } else if (test('=> (?! })', s)) {
            let [params, action] = s.split(' => ')

            if (method == 'filter') {
                extra = ' if ' + action
            }

            return '[ ' + action + ' for ' + params + ' in ' + name + extra + ' ]'
        } else {
        }
    }
}
const classMethodRE = '(    |  |\\t\\t|\\t)(\\w+\\(.*?\\)) {'

function classMethodParser(_, spaces, params) {
    const dict = { '()': '(self)', '(': '(self, ' }
    return spaces + 'def ' + srep(params, dict, 'escape') + ':'
}
const jspyifRE = '(else if|if|while|for|function|def) (.*)'

const regexpRE = '(\\w+)\\.(\\w+)\\(RegExp\\((\\w+)\\)\\)'

function regexpTransformer(_, a, b, c) {
    const map = { search: 'search', match: 'search' }
    return 're.' + map[b] + '(' + c + ', ' + a + ')'
}

function jspyifParser(_, tag, s) {
    if (tag.startsWith('def')) return tag + ' ' + s.replace(/ ?{/, ':')

    if (s.startsWith('(')) s = s.slice(1)
    s = ' ' + s
    if (s.includes('RegExp')) {
        s = replace(regexpRE, regexpTransformer, s)
    }
    if (s.endsWith(') {')) s = s.slice(0, -3) + ':'
    else s = s.replace(/\) (?!and|or|&|\|)/, ': ')
    if (tag == 'else if') tag = 'elif'
    return tag + s.replace('!', 'not ')
}

function sleepclock({
        onend = () => 1000,
        condition = () => null,
        onstart = console.log,
        ontick = console.log,
        duration = 3000,
        increment = 1000,
        count = 0,
        id = null,
        gift = 'abc',
        context = null,
        bind = false,
        immediate = true} = {}) {

    if (bind) {
        ontick = ontick.bind(this)
    }
    const ticker = () => {
    }

    return new Promise((resolve) => {
        const runner = () => {
            id = setTimeout(() => {
                ticker()

                count += increment
                ontick(count, duration)

                if (count < duration) {
                    runner()
                } else {
                    clearTimeout(id)
                    console.log( 'finishing' )
                    resolve(gift)
                }
            }, increment)
        }

        runner()
    })
}

function toMilliseconds(n) {
    return (n * 1).toFixed(3)
}

function sleep(ms = 3000) {
    if (ms < 10) ms *= 1000
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('finished sleep')
            resolve()
        }, ms)
    })
}

function toMilliseconds(n) {
    return (n * 1).toFixed(3)
}

function sleepier(ms) {
    return function (x) {
        return new Promise((resolve) => setTimeout(() => resolve(x), ms))
    }
}

function delayed(fn, ms, ...args) {
    setTimeout(() => fn(...args), ms)
}

function createDelay(ms) {
    setTimeout(() => {}, ms)
}
async function handler() {
    let delayed = await delay()
    return 'hi'
}
async function parenter() {
    await delay()
    let foo = await handler()
    console.log(foo)
}

function interval(
    mutator = console.log,
    {
        onstart = null,
        ontick = null,
        onend = null,
        achievedPatience = false,
        count = 0,
        modulus = null,
        cancel = () => {},
        delay = 1,
        endingDelay = 1000,
        duration = 2,
        immediate = true,
    } = {},
    ...args
) {
    const info = {
        duration,
    }
    if (onstart) {
        onstart(...args)
        console.log('onstart action')
    }
    let id, terminate
    function runner() {
        id = setTimeout(() => action(...args), delay * 1000)
    }
    immediate ? action(...args) : runner()
    achievedPatience = true
    function action(...args) {
        if (ontick) {
            terminate = ontick(count, duration)
        }
        if (modulus) {
            if (count % modulus === 0 && achievedPatience) {
                terminate = mutator({ count }, ...args)
            }
        } else {
            terminate = mutator({ count }, ...args)
        }
        if (terminate === true || cancel(count, ...args) === true || ++count == duration) {
            setTimeout(() => {
                if (onend) {
                    console.log('onend action')
                    onend(count, ...args)
                }
                clearTimeout(id)
                return
            }, delay * endingDelay)
            return
        }
        runner()
    }
}

function cl(x) {
    return () => console.log('hohoho')
    console.log(x)
}

function flagParser(z, a, b) {
    if (b == "''") b = '0'
    if (b.includes('m')) b = 're.M'
    return a + b
}

function pyCatchParser(_, s) {
    if (s.includes('(e)')) return 'except Exception as e:'
    return 'except:'
}

function doctorify(s) {
    let [a, b] = s.split(' ')
    return capitalize(a) + '. ' + capitalize(b)
}

function addPeriodAndCapitalize(s) {
    let [a, delimiter, b] = s.split(/(  |\n)/)
    if (!a && !b) return '\n'
    if (!a && b) return delimiter + capitalize(b)
    return a + '.' + delimiter + capitalize(b)
}

function isLetter(s) {
    return test('[a-zA-Z]', s)
}

function isLowerCase(s) {
    return test('[a-z]', s)
}
function addPeriodAndCapitalize(s) {
    let start = s.slice(1)
    let end = s.slice(-1)
    if (isLowerCase(start)) s = capitalize(s)
    if (isLetter(end)) s += '.'
    return s
}

function addQuestionMark(s) {
    return s + '?'
}

function applyUpdatedDictionary(s) {
    let [text, store] = frepm(s, updatedict)
    let dict = merge(pmwb, ustorage('pmwb', store))
    text = srep(text, dict, 'wb')
    text = srep(text, pmmisc, 'nb')
    return text
}

function proser(s) {
    let regex = '([a-z]+)\\\\(\\S+)'
    let [text, store] = mreplace(regex, s, {
        replacement: (_, a, b) => b.replace(/-/g, ' '),
        storeParser: 'same',
    })

    console.log(store)
    if (exists(store)) ustorage('quicksnippet', store)
    return text
}

function quickSnippet(text, snippetDelimiter = '\\t') {
    let store
    let regex = '([a-z]+)' + snippetDelimiter + '(.*?)' + snippetDelimiter

    ;[text, store] = mr(
        regex,
        (_, a, b) => b,
        text,
        'gm',
        (x) => x.replace(/\\/g, '\\\\')
    )

    if (exists(store)) ustorage('quicksnippet', store)
    return text
}

function matchStorageReplace(s) {
    let [text, store] = mr(proseItemsRE, (_, a, b) => b, s)
    if (exists(store)) ustorage('matchReplaceDictionary', store)
    return text
}

function proseParser(text) {
    const shortCodeDelimiter = 'c'
    const predict = {
        ['\\b' + shortCodeDelimiter + ' .*? ' + shortCodeDelimiter + '\\b']: (s) =>
            parens(s.slice(shortCodeDelimiter.length, -1 * shortCodeDelimiter.length), '```|```'),
        '(?:blist|nlist)\\s[^]+?(?:\\n *\\n|end\\n)': listParserNew,
        thanks$: '\nThanks!',
    }
    const fdict = {
        '\\.\n': '.\n\n',
        ' nb ': nbspASSET,
        ';': ':',
        '(?:mr|mrs|miss|dr|Mr|Mrs|Miss|Dr) \\w+': doctorify,
        '^hi': 'Hi',
        '(?<=^|\\? )\\w': capitalize,
    }
    text = replace(deleterProseRE, '', text)
    text = matchStorageReplace(text)
    text = irep(text, pmnb, pmwb)
    text = frep(text, predict)
    text = frep(text, fdict)
    return text
}

function boldify(s) {
    return '**' + s + '**'
}
function proseSnippet(s) {
    let capitalizationDelimiter = '(?<!\\w)[z:](?!(?:ero|enith))'
    capitalizationDelimiter = '(?:' + capitalizationDelimiter + '|(?<!:):)'
    let [text, store] = mreplace(
        {
            '([a-zA-Z]+)(?:%)(\\S+)\\t?': null,
            [capitalizationDelimiter + '([a-zA-Z]{3,})']: (_, a) => capitalize(a.slice(1)),
        },
        s,
        {
            combine: (acc, item) => {
                acc[item] = capitalize(item)
                return acc
            },
        }
    )
    if (exists(store)) ustorage('matchReplaceDictionary', store)
    return text
}

function determineDate(s) {
    regex = Regex(months, 'wb')
    match = search(regex, s)
    let month = match ? months.indexOf(match) + 1 : ''
    return match ? String(month).padStart(2, '0') + '/' + s.slice(0, 4) : s.slice(0, 4)
}

function fixline(s) {
    if (test('^20\\d\\d', s)) {
        date = determineDate(s)
        s = '#' + date + ':' + s.slice(4)
    }

    let term = '.'
    function parser(x) {
        term = test(Regex(questionWORDS), x, 'i') ? '?' : '.'
        return capitalize(x)
    }
    return s
        .trim()
        .replace(/[a-zA-Z]+/, parser)
        .replace(/\w$/, '$&' + term)
}

function simpleMapParser(s) {
    s = s.replace(/:[\w-]+/g, (x) => capitalizeColons(x.slice(1)))
    product = getLineInfoMAPS(s)
    return product
}

function mapParser(s) {
    let tag, product
    if ((tag = search('^cmap|^pmap', s))) {
        s = s.slice(5)
    }
    s = s.replace(/:[\w-]+/g, (x) => capitalizeColons(x.slice(1)))
    product = getLineInfoMAPS(s)
    return tag ? { [tag]: product } : product
}

function createObject(...args) {
    let k
    return args.reduce((acc, item, i) => {
        if (isEven(i)) k = item
        else {
            acc[k] = item
        }
        return acc
    }, {})

    const store = {}
    for (let i = 0; i < args.length; i++) {
        if (isEven(i)) k = args[i]
        else {
            store[k] = args[i]
        }
    }
    return store
}
function namer(x) {
    x = x.slice(1)
    let val = capitalizeColons(x)
    return createObject(x, val)
}
function pdsfjsdreAccumulate3(s) {
    const dict = {
        '^(?:cmap |pmap ).*': {
            replace: '',
            store: (x) => mapParser(x),
        },
        ':[\\w-]+': {
            replace: (x) => capitalizeColons(x.slice(1)),
            store: (x) => [x.slice(1), capitalizeColons(x.slice(1))],
        },
    }
    let [text, store] = mreplace(dict, s)
    let cmap = {}
    let pmap = {}
    if (isArray(store)) {
        for (let item of store) {
            if (isObject(item)) {
                if (item.cmap) {
                    item.cmap.forEach(([a, b]) => (cmap[a] = b))
                } else if (item.pmap) {
                    item.pmap.forEach(([a, b]) => (pmap[a] = b))
                } else {
                    if (isObject(item)) pmap = merge(pmap, item)
                }
            } else if (isArray(item)) {
                pmap[item[0]] = item[1]
            }
        }

        return { text, cmap, pmap }
    }
    return [text, store]
}

function capitalizeColons(s) {
    return capitalize(s.replace(/-\w/g, (x) => ' ' + capitalize(x.slice(1))))
}

function nnoteParser(text) {
    const fdict = {
        '(?<=  |\\.)(?:bog|log) (?:[\\w,\'"?/]+ )*\\w+': (x) => '#' + x,
        '#\\w+ \\w+': (x) => split(x, (a, b) => '#' + a + ' ' + capitalize(b)),
        ...grammarObject,
    }

    text = spellcheck(text)
    text = frepnew(text, fdict)

    const delimiter = text.includes('\n') ? /(?<=\S)  +(?=\S)|\n+/ : /[ \t]{2,}/
    text = text.split(delimiter).map(fixline)
    return text
}

function textsplitter(text, parser, delimiter = '  ') {
    return text.split(delimiter).map(parser).join(delimiter)
}

function spellcheck(s, extra = { wb: {}, nb: {} }) {
    const wb = { ...pmwb, ...getStorage('pmap'), ...extra.wb }
    const nb = { ...pmnb, ...extra.nb }
    const dict = { ...wb, ...nb }
    const regex = Regex([Regex2(nb, { escape: true, mode: 'nb' }), Regex(wb, 'prose')])
    return replaced(regex, dict, s.trim())
}

const doctorifyRE = '(?:mr|mrs|miss|dr|Mr|Mrs|Miss|Dr) \\w+'
function listParser2(s) {
    let match
    let start
    if ((match = searcher('^[nb]list', s))) {
        start = ''
        s = s.slice(match.length)
    } else {
        start = ':\n'
        s = s.slice(2)
    }

    if (s.endsWith('end')) s = s.slice(0, -3)
    else if (s.endsWith('\n')) s = s.trim()

    let mode = match == 'blist' ? 'bullets' : 'numbers'
    return start + listed(s, { mode: mode }) + '\n\n'
}

function sliced(s, {delimiter = null}) {
    if (delimiter) return s.replace(RegExp('^' + '.*?' + delimiter))
}
function slicedArgFactory(x) {
    return (fn) => (s) => fn(s.slice(x))
}
function slicedAndFormattedReplace(s, dict) {
    const store = {}
    const parse = (re) => {
        const tag = search('(?<!\\\\)[a-z ]+', re)
        return tag
    }

    for (let [k, v] of Object.entries(dict)) {
        let tag = removeEverythingSuper(k)
        store[tag] = v
    }

    const parser = (...args) => {
        const tag = args.find((arg) => arg in store)
        blue(tag)
        return store[tag](args[0].slice(tag.length))
    }

    const regex = Regex2(dict)
    // console.log( regex, store)
    // the initial aspect would not be findable.
    return replace(regex, parser, s)
}
function noteParser(text, { spacing = '\n\n', doubleSpacing = false } = {}) {
    const tally = new Tally()

    const predict = {
        'ilfn(\\w+)': (x) => {
            return toLambdaFunction(getWindowFunction(x.slice(4)))
        },
        'ifn(\\w+) ': (x) => {
            return (
                x.slice(3, -1) + ':' + spacing + indent(getWindowFunction(x.slice(3, -1))) + spacing
            )
        },
        'phonetitle (.*)': (x) => parens(x, '~~ | ~~'),
        '^(?:example|case)': caseCountParser,
        '\\bc .*? c\\b': (s) => parens(s.slice(2, -2), '```|```'),
        [doctorifyRE]: doctorify,
        '(?:(?<=\\w+):\\n|[nb]list)[^]+?(?:end$|\\n *\\n)': listParser2,
    }

    function caseCountParser(s, a) {
        let name = capitalize(getFirstWord(s))
        let count = a ? a : tally.count(name)
        return boldify(name + ' ' + count + ':')
    }

    text = spellcheck(text, { nb: { 'nb ': nbspASSET, ' nb ': nbspASSET } })
    text = frep(text, predict)
    // text = frepnew(text, predict)
    text = frep(text, grammarObject)
    return text
}

function isUndefined(x) {
    return x === undefined || x === null
}

function defaultMatchReplacement(_, a, b) {
    return b
}

function mreplacedep328(
    re,
    s,
    {
        dict = true,
        once = false,
        flags = 'gm',
        combine = null,
        replacement = '',
        mode = '',
        delimiter = '\\',
        storeParser = null,
    } = {}
) {
    if (once) flags = flags.replace('g', '')
    let regex
    if (mode == 'default') {
        regex = '([a-zA-Z]+)' + '(?:' + delimiter + ')' + '(\\S+)'
    } else {
        regex = isString(re) ? re : Regex(re)
    }

    const dictStore = {}
    const listStore = []
    const hasCaptureGroup = countParentheses(re) > 0

    function parser(...args) {
        args = args.slice(0, -2).filter((x) => x)
        const items = hasCaptureGroup ? args.slice(1) : args.slice()

        if (isObject(re)) {
            for (let [k, v] of Object.entries(re)) {
                if (test(k, args[0])) {
                    if (isObject(v)) {
                        replacement = v.replace
                        storeParser = v.store
                    } else {
                        replacement = isUndefined(v) ? defaultMatchReplacement : v
                        storeParser = null
                    }
                    break
                }
            }

            if (storeParser == 'same') {
                storeParser = (x) => replacement('', '', x)
            }
            if (storeParser) {
                let el = items[items.length - 1]
                items[items.length - 1] = storeParser(el)
            }
        }

        items.length == 2 && dict ? (dictStore[items[0]] = items[1]) : listStore.push(items[0])

        return isString(replacement) ? replacement : replacement(...args)
    }
    s = s.replace(RegExp(regex, flags), parser).trim()

    if (combine && exists(listStore)) {
        const obj = listStore.reduce(combine, {})
        return [s, merge(dictStore, obj)]
    }

    const product = exists(dictStore) ? dictStore : smallify(listStore)

    return [s, product]
}

function mr(re, replacement, s, flags = 'gm', storeParser = null) {
    const store = new Storage(storeParser, {})
    const p = countParentheses(re)
    function parser(_, a, b, c) {
        if (p == 0) store.extend(_)
        if (p == 1) store.extend(a)
        if (p == 2) store.update(a, b)
        if (p == 3) store.extend([a, b, c])
        return isString(replacement) ? replacement : replacement(_, a, b, c)
    }
    s = s.replace(RegExp(re, flags), parser)
    return [s.trim(), store.value]
}

function redditParser(s, sub = null) {
    let title, subreddit, body
    if (!sub || sub == 'reddit') {
        ;[title, subreddit, body] = search('(.*?) (ljs|js|lp|py|nsq|vue|2\\w+)(?:\\s([^]+))?', s)
        if (!body) body = ''
    } else {
        subreddit = sub
        ;[title, body] = split(s, 'once', '(?:\\n|  )')
    }

    const lang = ['js', 'py'].includes(subreddit) ? subreddit : null
    subreddit = subreddit.startsWith('2') ? subreddit.slice(1) : subreddit
    subreddit = subredditmap[subreddit] || subreddit
    title = toSimpleTitle(title)
    if (subreddit == 'ELI5') title = 'ELI5: ' + title
    if (body) body = redditBodyParser(body, lang)
    return { title, subreddit, body }
}

function deleteStorage(key, ...children) {
    if (!children) {
        delete localStorage[key]
        return
    }
    const obj = getStorage(key)
    children.forEach((child) => delete obj[child])
    setStorage(key, obj)
    return obj
}

function createFunctionLibrary(s, cat = '') {
    let items = searchall(fnLibraryRE, s, 'g')
    if (cat == 'detailed') items = items.map(([a, b]) => [a, getFunctionInfo0120(b, cat)])
    return Dict(items)
}

function searchall(re, s, flags = 'gm') {
    const store = []
    let regex = new RegExp(re, flags)
    while ((match = regex.exec(s)) !== null) {
        store.push([match[1], match[0]])
    }
    return store
}

function updateObject(obj, k, v) {
    obj[k] = v
}

function isOdd(n) {
    return n % 2 == 1
}

function isEven(n) {
    return n % 2 == 0
}

class Regexer {
    static captureBetween(start, end, inclusive = true) {
        return inclusive ? start + '[^]+?' + end : `(?<=${a})[^]+?(?=${b})`
    }
    static accumulate(...items) {
        if (items.length == 0) items = '(\\S+)'
        else items = Regexer.create(items, 'nb', true)
        return '(?<=^|\\n)' + items + '(.*?(?:{\\n[^]+?(?=\\n\\w)|[^{]*(?=\\n\\w|$)))'
    }
    static create(input, cat = 'nb', capture = false) {
        if (isObject(input)) input = Object.keys(input)
        if (cat == 'each') return input.map((x) => '(' + x + ')').join('|')
        if (cat == 'test') return input.map((x) => x).join('|')
        if (cat == 'accumulate') {
            let items
            if (!input) items = '(\\S+)'
            else items = '(' + input.split(' ').join('|') + ')'
            return '(?<=^|\\n)' + items + '(.*?(?:{\\n[^]+?(?=\\n\\w)|[^{]*(?=\\n|$)))'
        }
        input = input.join('|')
        if (cat == 'nb') input = escapeRegex(input)
        if (capture) input = '(' + input + ')'
        else {
            input = '(?:' + input + ')'
        }
        if (cat == 'bb') return '\\' + input
        if (cat == 'fb') return input + '\\b'
        if (cat == 'wb') return '\\b' + input + '\\b'
        if (cat == 'nb') return input
    }
}

function splitd(dict) {
    const a = {}
    const b = {}
    for (let [k, v] of Object.entries(dict)) {
        if (isString(v)) {
            b[k] = v
        } else {
            a[k] = v
        }
    }
    return [a, b]
}

function doubleReplace(s, cdicter, sdicter) {
    content = srep(content, sdicter)
    return content
}
const amap = {
    letters: "['a', 'b', 'c']",
    numbers: '[1,2,3]',
    string: "'greetings from teststring'",
    obj: '{a: 1}',
}

function creplace(s, dict) {
    dict = transformDictionary(dict, regexWrapify)
    const regex = Regex(dict)
    const parsers = Object.values(dict)
    function parser(...args) {
        let memory = args.shift()
        let index = args.findIndex((x) => x)
        let parser = parsers[index]
        return isFunction(parser) ? parser(memory) : parser
    }
    return replace(regex, parser, s)
}

function langFactory(fn, lang) {
    return (s) => fn(s, lang)
}

function formatDatum(s, lang = 'js') {
    const capitals = createCapitals(['parser', 'foobar'])
    const cdict = {
        '^\\/\\/ .*': langFactory(testParser, lang),
    }
    const sdict = {
        '9': '(',
        '0': ')',
        ...capitals,
    }
    return doubleReplace(s, cdict, sdict)
}

function frepg(text, map) {
    function parser(...args) {
        for (let [k, v] of Object.entries(map)) {
            if (test(k, args[0]) || test(replaceLookAround(k), args[0])) {
                let product = isString(v) ? v : v(...args)
                return product
            }
        }
    }
    return replace(Regex(map, 'each'), parser, text)
}

function frepm(text, map) {
    const store = {}
    function parser(...args) {
        for (let [k, v] of Object.entries(map)) {
            if (test(k, args[0]) || test(replaceLookAround(k), args[0])) {
                args = args.filter((x) => x)
                let key = args[1]
                let product = isString(v) ? v : v(...args)
                store[key] = product
                return product
            }
        }
    }
    return [replace(Regex(map, 'each'), parser, text), store]
}

function getRegexAndDictionary(dict, aggregator) {
    const store = {}
    let regexes = []

    for (let [k, v] of Object.entries(dict)) {
        let removedRegex = removeEverythingSuper(k)

        store[removedRegex] = v
        if (test('^\\W+$', k)) k = rescape(k)
        regexes.push(k)
    }
    if (aggregator) regexes = aggregator(regexes)
    return [regexes, store]
}

function transformRegexAndDictionary(dict) {
    const store = {}
    const regexes = []

    for (let [k, v] of Object.entries(dict)) {
        let removedRegex = removeLookAround(k)

        store[removedRegex] = v
        regexes.push(k)
    }
    const regex = Regex(regexes, 'each')
    return [regex, store]
}

function frepnew(text, prevdict) {
    const [regex, dict] = transformRegexAndDictionary(prevdict)
    // console.log( regex, dict)

    function parser(...args) {
        for (let [k, v] of Object.entries(dict)) {
            if (test(k, args[0])) {
                return isString(v) ? v : v(...args)
            }
        }
    }
    return replace(regex, parser, text)
}

function frep(text, dict) {
    function parser(...args) {
        for (let [k, v] of Object.entries(dict)) {
            if (test(replaceLookAround(k), args[0])) {
                return isString(v) ? v : v(...args.slice(0, -2).filter(isDefined))
            }
        }
    }
    const regex = Regex2(dict)
    return replace(regex, parser, text)
}

const questionWORDS = [
    'would',
    'can',
    'for',
    'will',
    'which',
    'whose',
    'shud',
    'who',
    'what',
    'where',
    'when',
    'why',
    'how',
    'should',
    'could',
    'do',
    'is',
    'have',
    'has',
    'does',
    'are',
    'might',
]

function seeTabs(s) {
    return s.replace(/\s/g, 'fasjdfhjdsfoo')
}

function replaceTabs(s) {
    console.log(seeTabs(s))
    return srep(s, { '\\t\\t': '\n\t', '\\t': '\n' })
}

function redditBodyParser(s, lang = 'js') {
    const items = s
        .trim()
        .split(/(?:\s|\b)(?:cs|ce)\s/)
        .filter((x) => x)

    const oddOrEven = s.trim().startsWith('cs') ? isOdd : isEven

    for (let i = 0; i < items.length; i++) {
        const parser = oddOrEven(i)
            ? functionmod(noteParser, { spacing: nbspASSET })
            : functionmod(indent, betterText, lang)

        items[i] = parser(items[i])
    }

    function versionFixer(s) {
        const regex = '^ *v *$'
        let count = 0
        const parser = (x) => {
            return '\n' + boldify('Version ' + ++count + ':') + nbspASSET
        }
        return replace(regex, parser, s)
    }

    const product = versionFixer(items.join(nbspASSET).trimEnd()).replace(/\n(?=\n\n)/g, '')
    return product
}

function addQuestionMarkOrPeriod(s) {
    if (test('\\w$', s)) {
        const guard = questionWORDS.includes(getWord(s, 1))
        s += guard ? '?' : '.'
    }
    return s
}

function cmMultipleCheckReplace(cm, dict, fallback) {
    let line = cml(cm)
    let regex = Regex(dict) + '$'
    let match
    if ((match = search(regex, cml(cm)))) {
        let slice = -1 * match.length
        let replacement = dict[match]
        cm.replaceRange(replacement, ...cmh(cm, slice))
    } else {
        cm.replaceSelection(fallback)
    }
}

function cmCursorChar(cm) {
    return cm.getCursor().ch
}

function cmDictReplaceComplicated(cm, dict, { replaceRange = true, fallback }) {
    const line = cml(cm).slice(0, cmCursorChar(cm))

    const toNcg = (x) => (test('\\|', x) ? '(?:' + x + ')' : x)
    const keys = Object.keys(dict).map(toNcg)

    for (let key of keys) {
        if (test(key + '$', line)) {
            if (replaceRange) {
                let matchLength = searcher(key, line).trim().length * -1
                if (isFunction(dict[key])) {
                    dict[key](cm)
                    cm.replaceRange('', ...cmh(cm, matchLength))
                } else {
                    cm.replaceRange(dict[key], ...cmh(cm, matchLength))
                }
            } else {
                cm.replaceSelection(dict[key])
            }
            return
        }
    }
    cm.replaceSelection(fallback)
}

function cmDictReplace(cm, dict, fallback) {
    let line = cml(cm)
    let regex = Regex(dict) + '$'
    let match
    if ((match = search(regex, cml(cm)))) {
        let slice = -1 * match.length
        let replacement = dict[match]
        cm.replaceRange(replacement, ...cmh(cm, slice))
    } else {
        cm.replaceSelection(fallback)
    }
}
const mdict = {
    foo: 'BOO',
    '^ *$': '#',
    '##': 'asdzzzzmdict',
}
const bdict = {
    outputvalue: ['', '(?:ing|ed)$'],
}
const spaceDict = {
    nihao: '你好',
    ni: '你',
    hao: '好',
    wo: '我',
    xihuan: '喜欢',
    gaoxing: '高兴',
    xin: '新',
}
const slashDict = {
    '^ *$': '// ',
    'return.*?\\W$': '//t ',
}
const threeDict = {
    '^': '#',
    '^ +': '# ',
    ds: 'adfthreedict',
}
const fdict = {
    sayhi: () => console.log('heello'),
    gtstart: () => this.goToLine('start'),
    gtend: () => this.goToLine('end'),
    gtmiddle: () => this.goToLine('middle'),
    rjson: () => this.requestJB('read'),
    wjson: () => this.requestJB(getStorage('pmap')),
}

function createKeyMapFactory(
    map,
    { fallback = ph, replaceRange = '', parser = ph, tag = capitalize } = {}
) {
    const product = Object.entries(map).reduce((acc, [k, v]) => {
        tag = tag(k)
        fallback = fallback(k)
        replaceRange = isFunction(replaceRange) ? replaceRange(k, v) : ''
        function runner(cm) {
            const line = cml(cm)
            const matchLength = searcher(k.slice(0, -1) + '$', line).trim().length * -1
            parser(cm)
            cm.replaceRange(replaceRange, ...cmh(cm, matchLength))
        }
        acc[tag] = parser
        return acc
    }, {})
}

function cmSearchLength(cm, k) {
    const length = searcher(k + '$', cml(cm)).trim().length * -1
    return length
}
function createFunctionalKeyMap2(map) {
    const store = {}
    const initial = Object.entries(map).reduce((acc, [k, v]) => {
        const last = k.slice(-1)
        const tag = capitalize(last)
        store[last.toLowerCase()] = last
        if (!acc[tag]) acc[tag] = {}
        const regex = k.slice(0, -1)
        acc[tag][regex] = v
        return acc
    }, {})

    const final = Object.entries(initial).reduce((acc, [k, v]) => {
        acc[k] = (cm) => parser(cm, store[k.toLowerCase()], v)
        return acc
    }, {})

    function parser(cm, k, v) {
        const line = cml(cm, 'cursor') //to the cursor
        const lastWord = getLastWord(line)
        const length = lastWord.length
        const runner = v[lastWord] || null
        if (runner) {
            cm.replaceRange('', ...cmh(cm, length))
            setTimeout(() => {
                runner(cm)
            }, 25)
        } else {
            cm.replaceSelection(k)
        }
    }
    return final
}
function createFunctionalKeyMap(map) {
    const product = Object.entries(map).reduce((acc, [k, v]) => {
        const tag = capitalize(k.slice(-1))

        function parser(cm) {
            const length = cmSearchLength(cm, k.slice(0, -1))
            if (length) {
                v(cm) // the dict value is a straight up function no shenangians.
                cm.replaceRange('', ...cmh(cm, length))
            } else {
                cm.replaceSelection(k.slice(-1))
            }
        }

        acc[tag] = parser
        return acc
    }, {})
    return product
}
function logd(x) {
    console.log(x)
    return x
}
const cmskeys = {
    f: { dict: fdict },
    '2': { re: '^ *$', rep: '@' },
    '3': { complicated: true, dict: threeDict },
    space: { complicated: true, dict: spaceDict, fallback: ' ' },
    '/': { complicated: true, dict: slashDict, replaceRange: false },
    n: { re: 'f$', rep: 'function', rr: true },
}

function createKeyMap(map) {
    let result = Object.entries(map).reduce((acc, [k, v]) => {
        const tag = capitalize(k)
        const fallback = v.fallback || k
        const replaceRange = v.replaceRange
        if (v.rr) {
            acc[tag] = (cm) => crr(cm, v.re, v.rep + ' ', fallback)
        } else if (v.re && v.re.startsWith('^')) {
            acc[tag] = (cm) => cmsh(cm, cml(cm), v.re, v.rep, fallback)
        } else if (v.multiple && v.dict) {
            acc[tag] = (cm) => cmMultipleCheckReplace(cm, v.dict, fallback)
        } else if (v.dict) {
            acc[tag] = (cm) => cmDictReplaceComplicated(cm, v.dict, { replaceRange, fallback })
        }
        return acc
    }, {})
    return result
}

function cmsKeyF(cm) {
    cmsh(cm, cml(cm), '^ *$', 'function', 'f')
}

function cmSpacedFn(cm, re, replacement, fallback, k) {
    if (!cml(cm).endsWith(' ')) {
        cm.replaceSelection(k)
        return
    }
    let line = cml(cm)
    line = line.slice(-10)
    let words = line.trim().split(/ +|\.\.\.|\.|,/)
    let zw = words[words.length - 1]
    let yw = words[words.length - 2]
    let xw = words[words.length - 3]
    cmsh(cm, zw, re, replacement, fallback)
}

function cmrTo(cm) {
    if (!cml(cm).endsWith(' ')) {
        cm.replaceSelection('2')
        return
    }
    let line = cml(cm)
    line = line.slice(-10)
    let words = line.trim().split(/ +|\.\.\.|\.|,/)
    let zw = words[words.length - 1]
    let yw = words[words.length - 2]
    let xw = words[words.length - 3]
    cmsh(cm, zw, 'ing|ed', 'to', 'too')
}

function argparser99(args, ...extra) {
    for (let i = args.length; i < extra.length; i++) {
        args.push(extra[i])
    }
    return args
}
function cmRangeHelper2(cm, ...args) {
    const [a, b, c, d] = argparser99(args, 0, 0, 0, 0)
    let { line, ch } = cm.getCursor()
    return [
        { line: line + d, ch: ch + a },
        { line: line + c, ch: ch + b },
    ]
}

function cmRangeHelpdel(cm, start, end) {
    let { line, ch } = cm.getCursor()
    return [
        { line, ch: ch + start },
        { line, ch: ch + end },
    ]
}

function cmRangeHelper(cm, a = '', b = null) {
    let { line, ch } = cm.getCursor()

    if (!a) a = 0
    else if (a == 'cursor') a = ch
    if (isUndefined(b) || b == 'end') b = cm.getLine(line).length
    else {
        a = ch + a
        b = ch + b
    }

    return [
        { line, ch: a },
        { line, ch: b },
    ]
}

function cmh(cm, a = 0, b = 0) {
    a = a * -1
    let { line, ch } = cm.getCursor()
    return [
        { line, ch: ch + a },
        { line, ch: ch + b },
    ]
}

function crr(cm, a, b, c) {
    let match
    if ((match = search(a, cml(cm)))) {
        console.log('matchlength: ', match.length)
        cm.replaceRange(b, ...cmh(cm, -1 * match.length, 0))
    } else {
        cm.replaceSelection(c)
    }
}

function cmsh(cm, query, a, b, c) {
    if (test(a, query)) {
        cm.replaceSelection(b)
    } else {
        cm.replaceSelection(c)
    }
}

function crs(cm, a, b, c) {
    if (test(a, cml(cm))) {
        cm.replaceSelection(b)
    } else {
        cm.replaceSelection(c)
    }
}

function cmr(cm) {
    return cm.getRange(...cmh(-2, 2))
}

function cmCursorLine(cm) {
    return cm.getCursor().line
}

function cmCursor(cm) {
    return cm.getCursor()
}
function cml(cm, to = '') {
    const cursor = cm.getCursor()
    const line = cm.getLine(cursor.line)
    if (to == 'cursor') return line.slice(0, cursor.ch)
    return line
}

function commentWrap(s, mark = '-') {
    const longest = s.split('\n').reduce((acc, x) => Math.max(acc, x.length), 0)
    const lbr = mark.repeat(longest)
    return lbr + '\n\n' + indent(s) + '\n\n' + lbr
}
const absamap = {
    $letters: "['a', 'b', 'c']",
    $numbers: '[1,2,3]',
    $ss: "'greetings from teststring'",
    $obj: '{a: 1}',
}

function reParser(s) {
    let [name, regex] = split(s, 'once')
    regex = srep(regex, srm)
    name += 'RE'
    if (s.startsWith('/')) {
        regex = removeExtraBackslashes(regex)
        name += 'GEX'
    } else {
        regex = "'" + regex + "'"
    }
    return toConstant(name, regex)
}

function toConstant(a, b) {
    return 'const ' + a + ' = ' + b
}

function removeExtraBackslashes(s) {
    return s.replace(/\\\\/g, '\\')
}
const symboltonumberdict = {
    '!': '1',
    '@': '2',
    '#': '3',
    $: '4',
    '%': '5',
    '^': '6',
    '&': '7',
    '*': '8',
    // '(': '9',
    // ')': '0',
}

const nsmap = {
    '!': '1',
    '@': '2',
    '#': '3',
    $: '4',
    '%': '5',
    '^': '6',
    '&': '7',
    '*': '8',
    '(': '9',
    ')': '0',
}
const wsmap = {
    five: '5',
    slh: '/',
    lp: '(',
    rp: ')',
    lb: '{',
    rb: '}',
    lbrace: '[',
    rbrace: ']',
    dot: '.',
    period: '.',
    space: ' ',
    dash: '-',
    eq: '=',
    bs: '\\\\',
    sq: "\\'",
    dq: '\\"',
    dollar: '$',
    percent: '%',
    caret: '^',
    aster: '*',
}
const fooo = '-------------'
const foooo = '--------------------------'
class Foo {
    constructor() {
        this.count = 0
        this.store = []
    }
    next() {
        this.count++
        console.log(this.count, 'sup from foo')
        return '-'.repeat(this.count * 2)
    }
}

function getParsers(lang) {
    let WBMAP,
        NBMAP,
        MISCMAP,
        forParser,
        isParser,
        singleItemParser,
        special,
        ispy,
        isjs,
        printStatementParser
    if (lang == 'py') {
        WBMAP = PYWBMAP
        NBMAP = PYNBMAP
        MISCMAP = { ...PYMISC, ...SHARED_MISCMAP }
        forParser = forParserPY
        isParser = isParserPY
        singleItemParser = singleItemParserPY
        special = specialPY
        ispy = true
        printStatementParser = pyPrintStatementParser
    } else {
        isjs = true
        NBMAP = JSNBMAP
        WBMAP = JSWBMAP
        forParser = forParserJS
        isParser = isParserJS
        MISCMAP = { ...JSMISC, ...SHARED_MISCMAP }
        singleItemParser = singleItemParserJS
        special = specialJS
        printStatementParser = jsPrintStatementParser
    }
    return [
        WBMAP,
        NBMAP,
        MISCMAP,
        forParser,
        isParser,
        singleItemParser,
        special,
        ispy,
        isjs,
        printStatementParser,
    ]
}

function ph(s) {
    if (isFunction(s)) return (x) => s(x)
    return s
}

function pluralize(s, x) {
    if (x == 1) return s
    return s + 's'
}

function timedPromise(s, delay = 1000) {
    return new Promise((result) => {
        setTimeout(() => result(s), delay)
    })
}

function resolvePromise(p, handler) {
    p.then(handler)
}

function speakChinese(text) {
    var utterance = new SpeechSynthesisUtterance(text)
    utterance.onstart = function () {
        console.log('succes')
    }
    utterance.onend = function () {
        console.log('end')
    }
    utterance.lang = 'cmn'
    utterance.voiceURI = 'eSpeak Chinese (Mandarin)'
    speechSynthesis.speak(utterance)
}

function bar() {
    console.log('hi')
}

function foobar() {
    console.log('hi')
}

function speakSuccess() {
    speak('success')
}

function speakError() {
    speak('error')
}

function logSuccess(m = 'success') {
    return (x) => console.log(m)
}

function logError() {
    console.log('error')
}

function updateClipboard(s) {
    console.log('updating clipboard')
    console.log('called by', updateClipboard.caller)

    s = toString(s)
    if (s) console.log(s)
    navigator.clipboard.writeText(s)
}

function browserPrettier(text) {
    console.log('browser prettier')
    const prettierOptions = {
        parser: 'babylon',
        tabWidth: 4,
        semi: false,
        singleQuote: true,
        plugins: prettierPlugins,
    }

    const product = prettier.format(text, prettierOptions)
    return product
}

function computedDatumToObject() {
    let object = { value: this.datum }
    return object
}

function clearStorage(name) {
    if (!name) return
    delete localStorage[name]
}

function CLEARSTORAGE() {
    localStorage.clear()
    speak('Storage has been cleared.')
}

function POSTJSONBIN() {
    const req = new XMLHttpRequest()
    req.open('POST', 'https://api.jsonbin.io/b', true)
    req.setRequestHeader('Content-Type', 'application/json')
    req.setRequestHeader('secret-key', this.secretkey)
    req.send(this.computedDatumToObject)
    req.onreadystatechange = () => {
        if (req.readyState == XMLHttpRequest.DONE) {
            this.responseText = JSON.parse(req.responseText)
        }
    }
}

function UPDATEJSONBIN() {
    updatePost(this.JSON_ID_MAP.updates, this.computedDatumToObject, this.secretkey)
}

function updateMountValue(name, transformer) {
    let item = getStorage(name) || 0
    let result = transformer(item)
    setStorage(name, result)
    return result
}

function UPDATEMOUNTVALUE() {
    updateMountValue(this.storageName, increment)
}

function TESTER2() {
    try {
        this.evalcode()
    } catch (e) {
        speak('error at test run')
    }
}

function TESTER3() {
    tester()
}

function TESTER4() {
    tester()
}

function START() {
    this.codemirror.focus()
    this.RESET()
    this.WHEREAMI()
}

function getFunction(zoop, text) {
    try {
        return text.match(/(?:function|def) (\w+)/)[1]
    } catch (e) {
        const [error, description] = e
            .toString()
            .match(/(\w+): (.*)/)
            .slice(1)
    }
}

function RESET() {
    this.codemirror.setValue('')
    this.codemirror.focus()
}

function FINISH() {
    if (this.mode !== 'letternotes') {
        this.datum = FixJavascript(this.datum, this.computedMap)
    }
    let name = getFunctionName(this.datum) + '.' + this.extension
    if (!name) name = 'TESTING'
    speak(name + ' has been downloaded')
    download(name, this.datum)
    this.RESET()
}

function WHEREAMI() {
    let { line, ch } = this.codemirror.getCursor()
    speak(line + ' ' + ch)
}

function adsfhasdkfjaks(n, category = '') {
    return ++n
}

function getType(x) {
    if (isObject(x)) return {}
    if (isArray(x)) return []
    if (isString(x) || isNumber(x)) return ''
    return {}
}

function uxpdateStoragxe(name, content, override = false, placeholder = null) {
    const prev = getStorage(name, placeholder ? placeholder : getType(content))
    const merged = merge(prev, content, override)
    setStorage(name, merged)
    return merged
}

function ustorage(name, content, cat = '') {
    if (isNode()) return {}
    console.log('updating storage')
    const prev = getStorage(name, getType(content))
    if (cat == 'deep') {
        merged = deepMerge(prev, content)
    } else {
        merged = objectMerge(prev, content)
    }
    setStorage(name, merged)
    return merged
}

function mergeStorage(name, content) {
    let prev = getStorage(name, getType(content))
    merged = deepMerge(prev, content)
    setStorage(name, merged)
}

function updateStorage(name, value) {
    const prev = getStorage(name, getType(value))
    const merged = merge(prev, value)
    setStorage(name, merged)
    return merged
}

function setStorage(key, value = '') {
    if (key == 'date') key = datestamp('%M-%d-%Y')
    console.log(
        'setstorage key: ' +
            key +
            '\n-----------------\n' +
            (isObject(value) ? stringify(value) : value)
    )
    if (value === '[object Object]') {
        throw 'setstorage error obj obj'
    }
    if (typeof value === 'object') value = JSON.stringify(value)
    if (typeof window === undefined) {
        return value
    }
    localStorage.setItem(key, value)
}

function getStorage(key, placeholder = '') {
    if (!(key in localStorage)) {
        console.log('no key at ' + key)
        return placeholder
    }
    let item = localStorage.getItem(key)
    if (item == null || item.includes('[object Object]')) return {}
    return parseJSON(item)
}

function downloadMedia(name, data) {
    const options = { type: 'audio/webm' }
    const blob = new Blob(data, options)
    const url = window.URL.createObjectURL(blob)
    var pom = document.createElement('a')
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text))
    pom.setAttribute('download', filename)
    pom.click()
    pom.remove()
    console.log('downloaded')
}

function downloadFile(filename, text) {
    if (filename.includes('json')) text = toString(text)
    const pom = document.createElement('a')
    const action = 'data:text/plain;charset=utf-8,' + encodeURIComponent(text)
    pom.setAttribute('href', action)
    pom.setAttribute('download', filename)
    pom.click()
    pom.remove()
}

function download(filename, text) {
    if (!filename) filename = 'untitled'
    if (filename.includes('json')) text = toString(text)
    const pom = document.createElement('a')
    const action = 'data:text/plain;charset=utf-8,' + encodeURIComponent(text)
    pom.setAttribute('href', action)
    pom.setAttribute('download', filename)
    pom.click()
    pom.remove()
}

function speakHandler(s, { onstart = cl, onend = cl, lang = 'en-US', rate = 1, pitch = 1 } = {}) {
    const utterances = []
    const audio = new SpeechSynthesisUtterance(phrase)
    audio.lang = lang
    audio.onerror = console.log
    audio.onboundary = console.log
    audio.onend = onstart
    audio.onpause = onpause
    audio.onresume = onresume
    speechSynthesis.speak(audio)
    utterances.push(audio)
}
async function Speak(
    s,
    {
        onboundary = null,
        onresume = null,
        onpause = null,
        onstart = cl,
        onend = cl,
        lang = 'en-US',
        rate = 1,
        pitch = 0.9,
    } = {}
) {
    let sentences = s.split('\n')
    const audio = new SpeechSynthesisUtterance()
    audio.lang = lang
    audio.rate = rate
    audio.pitch = pitch
    if (onerror) audio.onerror = onerror
    if (onboundary) audio.onboundary = onboundary
    if (onstart) audio.onstart = onstart
    if (onpause) audio.onpause = onpause
    if (onresume) audio.onresume = onresume
    function createOnEndFunction(s, i) {
        return (e) => {
            console.log(e.elapsedTime)
        }
    }
    let count = 0
    for (let sentence of sentences) {
        count++
        audio.onend = createOnEndFunction(sentence, count)
        audio.text = sentence
        window.speechSynthesis.speak(audio)
        console.log(sentence)
        await delay(2000)
    }
    window.speechSynthesis.cancel()
}

function todo() {
    for (let i = 0; i < sentences.length; i++) {
        let sentence = sentences[i]
        audio.text = sentence
        if (i == 0) delayDuration = 0
        else delayDuration = 2000
        setTimeout(() => {
            console.log(audio.text)
            window.speechSynthesis.speak(audio)
        }, delayDuration)
    }
    const mp3file =
        'https://cors-anywhere.herokuapp.com/https://www2.cs.uic.edu/~i101/SoundFiles/preamble10.wav'
    const audioContext = new (window.AudioContext || window.webkitAudioContext)()
    const request = new XMLHttpRequest()
    request.open('GET', mp3file, true)
    request.responseType = 'arraybuffer'
    request.onload = function () {
        audioContext.decodeAudioData(request.response, function (buffer) {
            let duration = buffer.duration
            console.log(duration)
        })
    }
    request.send()
    if (window.hasOwnProperty('webkitSpeechRecognition')) {
        console.log('yes it does')
    }
}

function audioSTART(e) {
    console.log(e)
    this.audioStatus = 'START'
}

function audioEND() {
    console.log(e)
    this.audioStatus = 'END'
}

function ssapeakItems(...args) {
    function action(s) {
        const utter = new SpeechSynthesisUtterance(s)
        utter.rate = 1
        utter.pitch = 0.9
        utter.onend = () => {
            setTimeout(() => {}, 1500)
        }
        window.speechSynthesis.speak(utter)
    }
    for (let arg of args) {
        console.log(arg)
        action(arg)
    }
}

function speaka(input, rate = 1) {
    if (rate < 0.1 || rate > 1 || !isNumber(rate)) rate = 1
    isArray(input) ? (input = input.join(' ')) : input
    const utter = new SpeechSynthesisUtterance()
    utter.rate = rate
    utter.pitch = 0.9
    utter.text = input.trimStart() || 'empty'
    utter.onsuccess = function () {
        console.log('successful speak')
    }
    utter.onerror = function (e) {
        console.log(e.error)
        console.log('error')
    }
    window.speechSynthesis.speak(utter)
}

function jsonbin(value, fn = null) {
    let type = value == 'read' ? 'GET' : 'PUT'
    let id = '5f30ae36dddf413f95c101d3'
    let public = true
    let version = ''
    const secretkey = '$2b$10$RpyRq6D2g4SIaVl.vix5W.vq33VVnyQgzeCev0fLf2pJo2LUVf8DC'
    const url = pathjoin('https://api.jsonbin.io/b', id, version)

    if (isString(value)) value = { value }
    value = JSON.stringify(value)

    const request = new XMLHttpRequest()
    const promise = new Promise((resolve, reject) => {
        request.onreadystatechange = () => {
            if (request.readyState == XMLHttpRequest.DONE) {
                if (request.status > 200) {
                    reject('Error, status code = ' + request.status)
                } else {
                    resolve(request.responseText)
                }
            }
        }

        request.open(type, url, true)
        request.setRequestHeader('public', public)
        request.setRequestHeader('secret-key', secretkey)
        request.setRequestHeader('Content-Type', 'application/json')
        request.setRequestHeader('versioning', boolean(version))
        request.send(value)
    })

    promise.then((response) => {
        console.log(response)
        updateClipboard(response)
        if (fn) fn(response)
    })
}

function jsonbinasdfsdfasdf2({mode = 'GET', value = null, versioning = false } = {}) {
    console.log( 'jsonbin2' )
    const version = versioning ? 'latest' : ''
    const id = versioning ? JSONBIN_VERSION_ID : JSONBIN_NO_VERSION_ID
    const url = pathjoin('https://api.jsonbin.io/b', id, version)
    console.log( url )
    const request = new XMLHttpRequest()

    const promise = new Promise((resolve, reject) => {
        request.onreadystatechange = () => {
            if (request.readyState == XMLHttpRequest.DONE) {
                if (request.status > 200) {
                    console.log( request )
                    reject('Error, status code = ' + request.status)
                } else {
                    resolve(request.responseText)
                }
            }
        }

        console.log( 'openig' )
        request.open(mode, url, true)
        request.setRequestHeader('secret-key', JSONBIN_SECRET_KEY)
        request.setRequestHeader('public', true)
        request.setRequestHeader('Content-Type', 'application/json')
        request.setRequestHeader('versioning', boolean(version))
        if (mode == 'PUT' || mode == 'POST') {
            console.blue( 'put or post' )
            if (value && !isPrimitive(value)) {
                value = JSON.stringify(value)
            }
            if (value == null) {
                console.blue( 'null to emptystr' )
                value = ''
            }
            request.send(value)
        }
        else {
            request.send()
        }
    })
}

function jsonbin2({value = null, mode = 'GET', secretkey = JSONBIN_SECRET_KEY, public = 'true', versioning = false, meta = false } = {}) {
    mode = mode.toUpperCase()
    const version = versioning ? 'latest' : ''
    const id = version ? JSONBIN_VERSION_ID : JSONBIN_NO_VERSION_ID
    const url = pathjoin('https://api.jsonbin.io/b', id, version)
    const request = new XMLHttpRequest()

    console.log( 'starting jsonbin' )
    return new Promise((resolve, reject) => {
        request.onreadystatechange = () => {
            if (request.readyState == XMLHttpRequest.DONE) {
                if (request.status == 400 || request.status > 401) {
                    const errorObject = {
                        id,
                        url,
                        version,
                        status: request.status
                    }
                    console.log( 'hi from error' )
                    // console.log(errorObject)
                    return
                } else {
                    console.log( 'hi from success' )
                    resolve(parseJSON(request.responseText))
                }
            }
        }

        if (value) {
            console.log( 'hi from value' )
            if (isPrimitive(value)) {
                value = {value}
            }
            if (meta) {
                value = {
                    meta: {
                        timeStamp: datestamp(Number),
                    },
                    value: value
                }
            }
            value = stringify(value)
        }

        request.open(mode, url, true)
        request.setRequestHeader('secret-key', secretkey)
        request.setRequestHeader('public', public)
        request.setRequestHeader('Content-Type', 'application/json')
        request.setRequestHeader('versioning', boolean(version))
        console.log( value )
        if (mode == 'GET') {
            request.send()
        }
        else {
            request.send(value)
        }

    })
}

function getAccumulateStatistics(store) {
    const dict = { js: 'javascript', py: 'python', 'errors.js': 'errors' }
    const imessage = store.keys.length + ' partitions in total.'
    console.log(store.keys)
    speak(imessage)
    store.forEach((k, v, i) => {
        k = dict[k] || k
        let message
        if (isString(v)) message = 'string'
        else message = len(v) + pluralize('item', len(v))
        speak(stringifyNumber(i + 1) + ' partition: ' + k + '! ' + message + '! ')
    })
}

function prepareEntries(x) {
    if (isObject(x)) x = Object.entries(x)
    return x
}

function prepareObject(x) {
    if (isObject(x)) x = Object.keys(x)
    return x
}

function len(x) {
    x = prepareObject(x)
    return x.length
}

function postAction(store) {
    let items = store.get('catchall')
    for (let item of items) {
        if (!exists(item)) continue
        const action = ['notes', 'placeholder'].includes(item.name) ? updateStorage : setStorage
        let product
        if (isArray(item.value)) {
            if (isString(item.value[0])) product = item.value.join('\n\n')
            else if (isObject(item.value[0])) {
                product = item.value.map(stringify).join('\n\n')
            }
        } else if (isString(item.value)) {
            product = item.value
        }
        action(item.name, product)
    }
}
class CustomError extends Error {
    constructor(obj) {
        super()
        this.obj = obj
    }
}
class CodeError extends Error {
    constructor(e, code) {
        super()
        let items
        if (e.stack) {
            items = search('(\\w+)[^]+?at (\\S+)', e.stack)
        }
        this.name = items[0]
        this.location = items[1] == 'Function' ? 'checkjs' : items[1]
        this.message = e.message
        this.code = code
        console.log(code)
    }
    createErrorMessageFunction(parser, extra, wrap) {
        this.fn = (parser, extra, wrap) => {
            message = '  ' + wrap(name + ': ' + message + extra)
            try {
                return replace('(?=\\n)', message, parser(code), '')
            } catch {
                return code
            }
        }
    }
}

function commentPY(s) {
    return '# ' + s
}

function commentJS(s) {
    return ' '
}
// const isRE = '\\S+ is [^\\s\\:\\)]+'
// const isRE = '[\w\[\]]+ i
class StringRegex {
    constructor() {
        this.regex = ''
    }

    add(x) {
        this.regex += x
    }

    nlb (x) {
        this.regex += parens(x, 'nlb')
    }

    plb(x) {
        this.regex += parens(x, 'plb')
    }

    pla(x) {
        this.regex += parens(x, 'pla')
    }

    nla(x) {
        this.regex += parens(x, 'nla')
    }
    items(...args) {
        if (args.length == 1 && isArray(args[0])) {
            args = args[0]
        }
        this.regex += Regex2(args)
    }
    capture(...items) {
        this.regex += Regex2(items, {capture: true})
    }
    add(x) {
        this.regex += x
    }
    get value() {
        return this.regex
    }
    create() {
        return this.regex
    }
    space(n = 1) {
        this.regex += ' '.repeat(n)
    }
}

const r = new StringRegex()
r.nla('\\(')
r.capture('\\S+')
r.space()
r.capture('is', 'fooba')
r.space()
r.capture('\\S+?')
r.pla(' &&| \\|\\||\\) {|$')
const inbetweenRE = r.create()
// console.log( inbetweenRE )


const wordsaround = {
    'New York': 'ny',
    'for example': 'ie',
    ')': 'rp',
}
const errfix = {
    yping: 'typing',
}

const pybigmap = {
    sw: 'startswith',
    ew: 'endswith',
}
const pmnb = {
    '  ': '\n\n',
    liek: 'like',
    ':l': '\n\n',
    '.nl': '.\n\n',
    ' nb ': '\n\n',
    ahjie: 'Ahjie',
    jinfei: 'Jinfei',
    lx: 'lambda x:',
    esmiley: '🤠',
    ecat: '😺',
    wk: 'week',
    eheart: '❤️',
    ecelebrate: '🎊🎉',
    emuscle: '💪',
    evy: 'every',
    thg: 'thing',
    ' i ': ' I ',
    be4: 'before',
    ' 2 ': ' to ',
    ' 7 ': ' and ',
    ' 4 ': ' for ',
    // ' b ': ' be ',
    gr8: 'great',
    cr8: 'create',
    qm: '?',
}

function nsdfsdfsdfsdfDELETEoteParsesdfsdfr(text) {
    let store
    const fdict = ({}[(text, store)] = asdf((_, a, b) => b, text, 'gm', null, true))
    if (exists(store)) ustorage('mrdict', store)
    text = irep(text, pmnb, pmwb)
    text = freplace(text, fdict)
    return text
}

function twoParser(s) {
    return s
}

async function runPythonSolo(code) {
    let store

    await Sk.misceval.asyncToPromise(() => {
        return Sk.importMainWithBody('<stdin>', false, code, true)
    })
    return store
}

function storeofstuff() {
    if ((lang = 'js')) {
        let results = runBrowserTest(result)
        if (results && results.some((x) => exists(x.result))) {
            console.log('great!')
        }
    }
    if ((lang = 'py')) result = text
}
function genericSuccessHandler() {
    console.log('success')
    speak('success')
}
function checkCodeAsync(code, lang) {
    if (lang == 'js') {
        return promiseEval(pprint(code))
    } else if (lang == 'py') {
        return checkpy(code)
    }
}
function checkpy(program) {
    Sk.configure({
        read: (x) => Sk.builtinFiles['files'][x],
    })
    return Sk.misceval.asyncToPromise(() => {
        return Sk.importMainWithBody('<stdin>', false, program, true)
    })
}

function runPython(program, output = null) {
    Sk.configure({
        output,
        read: (x) => Sk.builtinFiles['files'][x],
    })
    return Sk.misceval.asyncToPromise(() => {
        return Sk.importMainWithBody('<stdin>', false, program, true)
    })
}

function digitDivisibility(n) {
    const store = []
    for (let i = n; i < 9999; i++) {
        const first = Number(String(i).charAt(3))
        if (isDivisible(i, first)) {
            store.push(i)
        }
    }
    return store
}

function getWindowItem(x) {
    try {
        x = replace(CAPREGEX, capParser, x)
        return String(window[x])
    } catch {
        throw 'error at window item'
        return ''
    }
}

function prepareCodeRun(lib, datum, lang = 'js') {
    if (isArray(lib)) lib = lib.join('\n\n')
    console.log(lib)
    console.log(commentWrap(formatDatum(datum, lang)))
    return lib + '\n\n' + formatDatum(datum, lang)
}

function vuerunPython() {
    if (this.tempString) {
        const items = this.tempString.split(' ').map(getWindowItem).map(topy)
        this.pylib = items
    }
    const code = prepareCodeRun(this.pylib, this.gv(), 'py')
    runPython(code, this.stdout)
}

function stdout(x) {
    console.log(x)
    this.logs.push(x)
}


function dlineParser(s) {
    let regex = '(\\S+) (.*?)(?=(?<=\\S)  |$)'
    result = findall(regex, s)
        .map(([a, b]) => {
            a = escapeQuotes(a)
            b = escapeQuotes(b)
            return parens(a, 'sq') + ': ' + dollarCapture(b) + ','
        })
        .join(' ')
    return result
}

function dobjParser(s, mode = 'DICT-LINE') {
    const parser = ([a,b]) => parens(a, 'sq') + ': ' + dollarCapture(b) + ','
    const items = getLineInfoMAPS(s).map(parser)
    console.log( items )
    switch(mode) {
        case 'DICT-OBJ': return parens(indent(items.join('\n')), 'brackify')
        case 'DICT-LINE': return parens(items.join(' '), '{ | }')
    }
}

function doParser(s) {
    const delimiter = test('  ', s) ? '  ' : ' '
    const regex = '(?<=^|' + delimiter + ')(.*?) (.*?)(?=$|' + delimiter + ')'
    return parens(
        findall(regex, s)
            .map(([a, b]) => {
                a = srep(a, { spc: ' ', col: ':' })
                return parens(a, 'sq') + ': ' + dollarCapture(b) + ','
            })
            .join(' '),
        '{ | }'
    )
}

function dictionaryParser(s, cat = '') {
    let regex
    if (s.includes('  ')) regex = '(\\S+) (\\S+)(?=  |$)'
    else regex = '(\\S+) (\\S+)(?= |$)'
    result = findall(regex, s)
        .map(([a, b]) => parens(a, 'sq') + ': ' + dollarCapture(b) + ',')
        .join(' ')
        .replace(/--|-/g, (x) => bigmap[x])
    if (cat == 'dobj') return parens(result, '{ | }')
    return result
}

function abckeywordParser(s) {
    console.log('keywordparser', s)
    if (s.startsWith('g')) return fasterFunction(s)
    if (s.startsWith('f')) return fParser(s)
    let [tag, item] = split(s, 'once')
    const product = dictionaryParser(item, tag)
    return product
}

function hmm() {
    if (cat == 'fn') return '(?:^|\\n)(?:function|def) (?:' + x.join('|') + ')[^]+?(?=\\n\\w|$)'
    if (cat == 'getFunctionNames') return '(?<=^(?:function|def) )\\w+'
    if (cat == 'dtilda') return '\\nlet.*?`[\\w\\W]+?\\n`'
    if (cat == 'taggedFunction')
        return '(?:^|\\n)(?:function|def).*?(?::|{)\\n?[\\t ]*(?://|#)(.*)\\n[^]+?(?:\\n}|(?=\\n+\\w|$))'
}

function Regex(x, cat = '', escape = false) {
    if (isString(x)) return x
    if (isObject(x)) x = Object.keys(x)
    if (isEmpty(x)) return null

    if (escape) {
        console.log('escaping')
        x = x.map(rescape)
    }
    if (!cat) {
        return '(?:' + x.join('|') + ')'
    }

    if (isObject(cat)) {
        if (cat.dollar) return rescapeOld(cat.dollar) + '(?:' + x.join('|') + ')'
        if (cat.escape) x = x.map(rescape)
        if (cat.capture) {
            return '(' + x.join('|') + ')'
        }
        return
    }

    if (cat == 'la') {
        return x.join('|')
    }
    if (cat == 'allmap') {
        let destination
        let regex = x.reduce(
            (acc, item) => {
                if (test('^[a-zA-Z]+$', item)) {
                    destination = acc.wb
                } else if (/\(\?/.test(item)) {
                    destination = acc.la
                } else if ((test('^\\^\\w+|\\w+\\$$'), item)) {
                    destination = acc.nb
                } else if (test('^\\W|\\W$|\\\\b', item)) {
                    destination = acc.nb
                    item = rescape(item)
                } else {
                    destination = acc.wb
                }

                destination.push(item)
                return acc
            },
            { nb: [], wb: [], la: [] }
        )

        regex = Object.entries(regex)
            .reduce((acc, [k, v]) => {
                if (exists(v)) acc += simple(v, k) + '|'
                return acc
            }, '')
            .slice(0, -1)
        return regex
    }

    if (cat == 'conditional-escape') {
        let product = x.map(rescapeSmall).join('|')
        return product
    }

    if (cat == 'captureEach') return x.map((el) => '(' + el + ')').join('|')
    if (cat == 'each') return x.map((el) => '(?:' + el + ')').join('|')
    if (cat == 'escape') return ncgify(x, rescapeOld)
    if (cat == 'filenames') return ncgify(x, fileNameRescape)

    let regex = ncgify(x)

    if (cat == 'wb') return '(?<=\\b|\\\\n)' + regex + '(?=\\\\n|\\b)'
    if (cat == 'start') return '^' + regex + '\\b'
    if (cat == 'end') return '\\b' + regex + '$'
    if (cat == 'default') return '\\b' + regex + '\\b'

    if (cat == 'prose') return '\\b(?<!\\\\)' + regex + '(?=\\b|1)'
    if (cat == 'nb') return ncgify(x, rescapeOld, '')
    return ncgify(x, null, cat)
}

function printRegex(re) {
    print(re.replace(/\\/g, '\\\\'))
}

function ncgify(x, mapper = null, cat = '') {
    let el = ''
    switch (cat) {
        case 'pla':
            el = '='
            break
        case 'nla':
            el = '!'
            break
        case 'nlb':
            el = '<!'
            break
        case 'plb':
            el = '<='
            break
        default:
            el = ':'
            break
    }
    return '(?' + el + x.map(mapper || ph).join('|') + ')'
}

function rrParser(s) {
    return "replace('" + s + "', parser, s)"
}

function rayParser(s) {
    return "raise Exception('" + s + "')"
}

function rtParser(s) {
    return "test('" + s + "', s)"
}

function rfParser(s) {
    return "findall('" + s + "', s)"
}

function rsParser(s) {
    return "search('" + s + "', s)"
}

function FactoryItem(dict) {
    const regex = Regex(dict)
    const RE = reParser(regex)
    const parser = dict[key]
    return { [RE]: parser }
}

function trim(s, n) {
    let length = s.length
    return n > 0 ? s.slice(n) : s.slice(0, length - 1)
}

function getFunctionInfo(s) {
    const lambdaFunctionInfoRE = /\(?(.*?)\)? ?=> ?{? ?([^]+?)(?=\n}|$)/

    let [name, params, body] = searcher(functionInfoRE, s)
    if (!name) {
        ;[params, body] = searcher(lambdaFunctionInfoRE, s)
        params = params.split(/, ?/)
        name = ''
    }
    return { name, params, body }
}

function getFunctionInfo0120(s) {
    try {
        let [name, params, body] = search(
            '(?:function|def) (\\w+)\\((.*?)\\)(?::| {)\\n([^]*?)(?:\\n}|(?=\\n\\w|$))',
            s
        )
        params = getDetailedParams(params)
        let lines
        const text = removeAllComments(s.trim())
        let type, match, isDelete, isHelper
        if ((match = body.match(/\/\/(d|sh delete|h|tempoararyPlsdfholder) *\n/))) {
            if (match[1] == 'h') {
                type = 'library'
            } else {
                isDelete = true
            }
        }
        if ((match = name.match(/x.*?x/))) {
            isDelete = true
        } else if ((match = name.match(/get|parser/i))) {
            type = match[0].toLowerCase()
        } else if ((match = body.match(/RegExp\(/))) {
            type = 'library'
        }
        return { name, params, text, type, isDelete }
    } catch {
        try {
            let [name, isRegex, isAsset, isMap] = search(
                '^const (\\w+?)(re|RE)?(ASSET)? = ({\n)?',
                s
            )
            let type
            if (isRegex) type = 'regex'
            else if (isAsset) type = 'asset'
            else if (isMap) type = 'map'
            else type = 'normal'
            return { type, name, constant: true }
        } catch {
            if (s.startsWith('class')) {
                return { type: 'class', text: removeAllComments(s) }
            }
            console.log('doesnt apear to be constant, function, or class')
        }
    }
}

function constructFunction(...args) {
    if (args.length == 1) {
        let { name, params, body } = getFunctionInfo0120(args[0])
        params = params.split(/, ?/)
        return constructFunction(params, body)
    }
    if (args.length == 2) return new Function(...args[0], args[1])
    else {
        let [name, params, body] = args
        body = indent(body)
        const product = 'function ' + name + '(' + params + ') {\n' + body + '\n}'
        return product
    }
}

function removeWrappedQuotes(s) {
    return s.replace(/['"]/g, '')
}

function removeQuotes(s) {
    return replace('[\'"].*?[\'"]', '', s)
}

function revertFunctionWrap(s) {
    s = trim(s, -1)
    let [a, b] = s.split('(')
    return b + '.' + a
}
const postProcessRE = '(?<={\\n.*)(?:\\n)+|(?:\\n *)+(?=\\n *})'
const deleterProseRE = '^\\w+zzz$|.*?(?:dn|assbc|fisdfodsfo).*\\n?| \\w+?dwl| \\S+?dsl'
const deleterRE = '.*?dn.*\\n?|\\w+?dwl|\\S+?dsl|^(?:f|d)[^]*?(?:delfun|delf)'

function isWord(s) {
    return test('^[a-zA-Z]+$', s)
}
const SimpleCodeFix = betterText
const isSingleWord = testFactory(/^\w+$/)

// function isSingleWord(s) {
    // console.log( s )
    // return test('^\\w+$', s)
// }
// console.error(isSingleWord('span 21'))

function isSingleLine(s) {
    return !s.includes('\n')
}

function stringDictionary(s, join, indentation, trimmed) {
    s = toString(s)
    if (indentation === 0) {
        return trimmed ? s : s + join
    }
    const product = indent(s, indentation) + join
    return product
}
const abmap = {
    jdl: { a: "'\\n\\n'.join(", b: ')' },
    jl: { a: "'\\n'.join(", b: ')' },
    jsp: { a: "' '.join(", b: ')' },
    jp: { a: "'|'.join(", b: ')' },
    length: { a: 'len(', b: ')' },
    br: { a: "'{' + ", b: " + '}'" },
    braces: { a: "'[' + ", b: " + ']'" },
    parens: { a: "'(' + ", b: " + ')'" },
    lsq: { a: "'", b: "'" },
    ldq: { a: '"', b: '"' },
    sq: { a: '"\'" + ', b: ' + "\'"' },
    dq: { a: '""" + ', b: ' + """' },
}

function comment(s, cat = 'block') {
    if (cat == 'block') return ' /* ' + s + ' */ '
    return s.replace(/^/gm, '// ')
}

function Prettier(text) {
    const options = {
        tabWidth: 4,
        printWidth: 100,
        semi: false,
        singleQuote: true,
        parser: 'babylon',
        plugins: prettierPlugins,
    }
    if (test('^function|const', text)) {
        return prettier.format(text, options)
    }
    text = 'function ' + text
    const product = prettier.format(text, options)
    return product.slice(9)
}

function protoParser(s) {
    let [match, arg] = search('(\\w+)(?: (.*?))? {', s, 2)
    if (!arg) arg = ''
    return 'LineEdit.prototype.' + match + ' = function(' + arg + ') {'
}

function testingParser(s) {
    if (isSingleLine(s)) {
    }
    let items = findall('(\\w+) ?= ?(.*)', s)
    let parser = ''
    let args = []
    for (let [a, b] of items) {
        if (a == 'p' || a == 'parser') {
            parser = b
        } else {
            args.push(b)
        }
    }
    if (parser) {
        const expr = functionify(parser, args)
        const evaluation = evaluate(expr)
    } else {
    }
}

function getWords(s) {
    return s.match(/[a-zA-Z]+/g)
}

function awaitPromiseEval(s) {
    return new Promise((resolve, reject) => {
        try {
            resolve(feval(s))
        } catch (e) {
            reject(e.message)
        }
    })
}

function promiseEval(result) {
    return new Promise((resolve, reject) => {
        if (result instanceof Error) reject(result)
        else {
            resolve(result)
        }
    })
}

function shandler(a) {
    if (a) {
    } else {
        return 'undefined result'
    }
}

function ehandler(s) {
    console.log('ERROR: ' + s.message || s)
}

function feval(s, lib = '') {
    const product = eval(lib + '\n' + s)
    return product
    try {
        return new Function('return (' + s + ')')()
    } catch {
        return eval(s)
    }
    let a = Function(s)()
    if (a) {
        return a
    }
    let b = s.trim().replace(/(?<=\n)(?=.*$)/, 'return ')
    return Function(b)
}

function getEvaluation(s) {
    const code = replaceLastLine(s, (line) => 'return ' + line)
    return new Function(code)()
}

function functionalEval(string) {
    return Function(string)()
    return new Function('return (' + string + ')')()
}

function evaluate(code) {
    try {
        return functionalEval(code)
    } catch (e) {
        return e.message
    }
}

function hmmtestParser(s) {
    s = s.slice(3)
    let [a, b] = split(s, 'once')
    if (!b) return 'console.log(' + a + ')'
    b = parens(b.split(/, ?/).map(dollarCapture).join(', '))
    return 'console.log(' + a + b + ')'
}

function testParserPY(s) {
    s = srep(s, amap, 'wb')
    return jspymap[lang]['log'] + '(' + s.slice(3) + ')'
}

function testParserJS(s) {
    s = srep(s, amap, 'wb')
    return tmap['log']['js'] + '(' + s.slice(3) + ')'
}

function cp(file) {
    return file + 'copy'
}

function testParserprev(s, lang) {
    s = srep(s, amap, 'wb')
    return jspymap[lang]['log'] + '(' + s.slice(3) + ')'
}

function log2(x) {
    console.log(isObject(x) ? stringify(x) : x)
}

function isDivisible(big, small) {
    return big % small == 0
}

function logParser(s) {
    if (s == 'hi' || s == 'abc') s = parens(s, 'sq')
    return 'console.log(' + s + ')'
    if (s.includes('$')) {
        return 'console.log(' + tildaParser(s) + ')'
    }
    let item = hashCapture(s)
    let mark = item.startsWith("'") ? '' : "'" + escapeQuotes(item) + ": ' + "
    return 'console.log(' + mark + item + ')'
}

function toString(x, delimiter = '\n') {
    if (isString(x)) return x
    if (isObject(x)) return stringify(x)
    if (isArray(x)) {
        if (x[0].endsWith('\n')) delimiter = ''
        return x.join(delimiter)
    }
    return x
}

function getStrings(s) {
    return findall('(?<!\\\\)\'.*?(?<!\\\\)|(?<!\\\\)".*?(?<!\\\\)"', s)
}

function getStringsx(s) {
    return findall("(?<!\\\\)'[^\\d\\n]+?(?<!\\\\)'|\\d+", s)
}

function createFunctionCall(name, content) {
    let args = getStringsx(content)
    return name + parens(toString(args, ', '))

    if (test(', ', args)) {
        args = args.split(', ').map((x) => {
            return dollarCapture(x)
        })
        args = toString(args, ', ')
    }
    return name + parens(args)
}

function toConsoleLog(s) {
    return 'console.log(' + s + ')'
}

function logTestParser(s) {
    let [name, args] = split(s, [null, (x) => x.split('  ').map((x) => parens(x, 'sq'))])
    let expr = createFunctionCall(name, args)
    return toConsoleLog(expr)
}
const cleanupDICT = {
    extraNewLines: '\\n\\n(?=\\n)',
    extraNewLinesBelowDelimiters: '(?<=,|{|\\[|=|) *\\n *$',
    startingComments: '^ *// .*\n?',
    spacedConsoleLog: '^ *console.log\\( .*?\\) *\\n',
    multiLineLet: '^(?:let )?\\w+ = `[^]+?(?<!\\\\)`.*',
    singleLineLet: '^(?:let )?\\w+ = [^`\\n]+?\\n',
}

function deleternew(re, s) {
    return replace(re, '', s)
}
function deleter(s, items = null) {
    if (items) {
        const regex = isString(items) ? items : Regex(items)
        return replace(regex, '', s)
    }
    const deleterRE = Object.values(cleanupDICT).join('|')
    return replace(deleterRE, '', s)
}
const postCleanReformatDICT = {
    'this.gv()': 'this.codemirror.getValue()',
}

function checkjs(code) {
    try {
        eval(code)
        return code
    } catch (e) {
        if (e instanceof SyntaxError || e instanceof TypeError) {
            throw new CodeError(e, code)
        } else {
            return code
        }
    }
}

function check(code, html = false, recursive = false) {
    function parser(e, code) {
        let ref = e.message.match(/\w+/)[0]
        return check('let ' + ref + '\n' + code.replace(/$/, '\n//let ' + ref), true)
    }
    const result = html ? true : code
    try {
        functionalEval(code)
        return result
    } catch (e) {
        if (e.message == 'Illegal return statement') return result
        if (e instanceof ReferenceError) return recursive ? parser(e, code) : result
        throw new CodeError(e, code)
    }
}
const methodmap = {
    s2: 'slice(2)',
    s1: 'slice(1)',
    shift: 'shift()',
    pop: 'pop()',
    upper: 'toUpperCase()',
    lower: 'toLowerCase()',
    jl: "join('\\n')",
    jspaces: "join(' ')",
    jp: "join('|')",
    redab: 'reduce((acc, [a, b]) =>',
    redkv: 'reduce((acc, [key, val]) =>',
    redx: 'reduce((acc, x) =>',
    red: 'reduce((acc, item) =>',
    fex: 'forEach((x) =>',
    mapx: 'map((x) =>',
    fexi: 'forEach((x, i) =>',
    mapxi: 'map((x, i) =>',
    filterx: 'filter((x) =>',
    feab: 'forEach(([a, b]) =>',
    scomma: 'split(/, ?/)',
    stabs: "split('\\t')",
}
const abcblockregex = 'if.*'

function fasterFunctionPY(s) {
    let [name, params] = search('^g (\\S+)( {|.*? {)', s)
    params = params.slice(0, -2)
    if (!params) params = 's'
    return 'def ' + name + '(' + params + ') {'
}

function fasterFunction(lang) {
    return (s) => {
        let [name, params] = search('^(?:g|p) (\\S+)( {|.*? {)', s)
        params = params.slice(0, -2)
        if (!params) params = 's'
        return jspymap[lang]['function'] + name + '(' + params + ') {'
    }
}

function count(el, s) {
    try {
        return s.match(RegExp(el, 'g')).length
    } catch {
        return 0
    }
}
const jsbigmap = {
    inc: 'includes',
    sw: 'startsWith',
    inc: 'includes',
    ew: 'endsWith',
    entries: 'items',
}
const subredditmap = {
    mhw: 'cheatatmathhomework',
    ebs: 'explainbothsides',
    ck: 'cooking',
    ap: 'askprogramming',
    ljs: 'learnjavascript',
    lp: 'learnpython',
    me: 'mementomoriok',
    nsq: 'nostupidquestions',
    vue: 'vuejs',
    py: 'learnpython',
    js: 'learnjavascript',
    eli5: 'eli5',
}
const bigmap = {
    '-': ' ',
    '--': '-',
    ...jsbigmap,
    ...pybigmap,
}

function mergeObjects(...dicts) {
    return dicts.reduce((acc, item) => (item ? { ...acc, ...item } : acc), {})
}

function mergeRegexes(dicts, categories) {
    return dicts
        .map((dict, i) => {
            let cat = categories[i] ? categories[i] : 'wb'
            return dict ? Regex(dict, cat) : null
        })
        .filter((x) => x)
        .join('|')
}

function simpleFixProse(s) {
    return irep(s, {}, pmwb)
}

function proseMasterReplace(s) {
    const dict = { ...pmnb, ...pmwb, ...getStorage('pmap', {}) }
    return dddrep(s, dict)
}
function irep(s, ...dicts) {
    const storageDict = getStorage('matchReplaceDictionary', {})
    const dict = mergeObjects(...dicts, storageDict)
    const regex = mergeRegexes(dicts.concat(storageDict), ['nb'])
    return replaced(regex, dict, s)
}

function lreplace(regex, parser, s) {
    function handler(...args) {
        return isString(parser) ? parser : parser(...args)
    }
    return replace(regex, handler, s)
}

function ireplace(s, miscmapRE, nb, wb, mm) {
    const map = { ...wb, ...nb, ...mm }
    const extra = '(?::n|N)[!()\\d]+|8args'
    const regex =
        extra + '|' + Regexer.create(nb, 'nb') + '|' + Regexer.create(wb, 'wb') + '|' + miscmapRE
    return lreplace(
        regex,
        (x) => {
            if (map[x]) {
                return map[x]
            } else {
                console.log(x)
                if (x.startsWith(':n')) {
                    x = x.slice(2)
                } else if (x.startsWith('N')) {
                    x = x.slice(1)
                }
                return srep(x, nsmap, 'conditional-escape')
            }
        },
        s
    )
}

function finder(x, arr) {
    try {
        return arr.find((el) => getFirstWord(x) == getFirstWord(el))
    } catch {
        return ''
    }
}

function xxxreplace(s, dict) {
    const keys = Object.keys(dict)
    function parser(...args) {
        let x = args[0]
        const replacement = dict[x] || dict[finder(getFirstWord(x), keys)]
        return isString(replacement) ? replacement : replacement(...args)
    }
    return replace(keys.join('|'), parser, s)
}

function xxreplace(s, dict) {
    const keys = Object.keys(dict)
    function parser(...args) {
        x = args[0]
        y = args[1]
        if (y && isWord(y)) {
            return dict[keys.find((el) => test(parens(y), el))](...args)
        }
        const replacement = dict[x] || dict[finder(x, keys)] || ''
        return isString(replacement) ? replacement : replacement(...args)
    }
    return replace(keys.join('|'), parser, s)
}
const l = console.log
const str = stringify
const dotRE = '(?:\\S+\\.)+[a-zA-Z|]+?(?= |9|\\[|:|,|$)'
const ooo =
    '|::[a-zA-Z-]+|-[a-z]{2,}|(?<!\\?):[a-z]|(?<=[a-z])(?:(?<!Igno|igno|Sto|sto|aptu|whe)(?:re)(?!\\)|aker|ak|=ate|ror)\\b'

function testPrint(msg = '') {
    console.log(msg)
    throw 'TP'
}
const qwe = '|(?<! )index|(?<!in|\\bd)line|action|effect|handler|text|function|info|(?<!\\.)parser)'
const capmap = {
    '(?<=\\b(?:class |data|active|current|config|update|create|construct|to|has|generate|has|save|is|set|get|append|initial|final))[a-z](?=\\w\\w\\w)':
        'capitalize words that start with this',
    '(?<=[a-z])(?:(?<! )index|(?<!in|\\bd|\\.)line|file|array|object|string|number|action|effect|handler|(?<!ge)text|function|info|(?<!\\.)parser)':
        'capitalize words that end in this',
    '::[a-zA-Z-]+': 'allCaps',
    '-[a-z]{2,}': 'dashCaps',
    '(?<!\\(\\?):[a-z]': 'colonCaps, but not "(?:"',
}
const oldCAPREGEX =
    '(?<=\\b(?:class |generate|current|update|create|construct|to|has|generate|is|set|get|append|initial|final))[a-z]{3}' +
    ooo +
    qwe
const wb = {
    rrr: 'return replace(regex, parser, s)',
    deli: 'delimiter',
    pljson: 'package-lock.json',
    astore: 'store = []',
    dstore: 'store = {}',
    ms: 'match = search(',
    sdash: "split('-')",
    sdot: "split('.')",
    ifc: 'if cat is',
    sds: "split(' ')",
    ss: "split(' ')",
    sc: "split(', ')",
    sl: "split('\\n')",
    efc: 'elif cat is',
    pclass: 'class',
    tf: 'transformer',
    ct: 'content',
    pd: 'product',
    txsplit: "text.split('\\n')",
    ret: 'return',
    repl: 'replacement',
}

function dictionaryLine(s) {
    return getLineInfoMAPS(s.replace(/'/g, "\\'")).map(
        (x) => parens(x[0], 'sq') + ': ' + parens(x[1], 'sq')
    )
}

function conditionalTrimBlock(s) {
    if (s.startsWith('{')) return dedent(sliceEffect(s))
    return s
}
const parentmap = {
    pyedits: {},
    jsedits: {},
    vue: { indent: 8, name: 'vue', join: ',\n' },
    edits: {
        name: 'maps',
        split: true,
        parser: (s) => betterText(conditionalTrimBlock(s)),
        indent: 4,
        join: ',\n',
    },
    maps: {
        name: 'maps',
        parser: dictionaryLine,
        indent: 4,
        join: ',\n',
    },
}
const blockRE = '(?<=if|while|for) [^\\(].*?(?: {$|: )'
const aggRE = '^([a-zA-Z]+) ([a-zA-Z-.]+)'
const oldAccumulateRE = '(?<=^|\\n)(\\S+) (.*?(?:[^{](?=\\n)|[^]+?(?=\\n(?:\\w|#|\\/)|$)))'
const nare =
    '(?<=^|\\n)(?:# (\\S+)\\s*([^]*?)(?:\\bend\\b|(?=\\n#|$)|\\n *\\n *\\n)|([^\\s=]+) (.*))'
const accumulateRE = '(?<=^|\\n)(\\S+) ([^]*?)(?=\\n(?:\\w|# {)|$)'
const accChunkRE = '(?<=^|\\n)(\\S+) ([^]*?)(?=\\n\\w|$)'
const aggregateRE = '(?<=^|\\n)(\\S+) (?:.*?(?:[^{:](?=\\n)|[^]+?(?=\\n(\\w|#|\\/)|$)))'
const fnLibraryRE =
    '(?<=^|\\n)(?:const|function|def|class) (\\w+)(?:.*?(?:[^{](?=\\n)|[^]+?(?=\\n(\\w|#|\\/)|$)))'
const BLOCKS = [
    'g',
    'try',
    'catch',
    'except',
    'elif',
    'for',
    'f',
    'cef',
    'def',
    'class',
    'reduce',
    'map',
    'filter',
    'if',
    'else',
    'while',
    'function',
]
function asds(s) {
    if (s.startsWith(' ')) return ') {'
    else {
        return ') '
    }
}
const specialJS = {
    'new\\w+': (s) => 'new ' + capitalize(s.slice(3)),
    [addBracesRE]: addBracesParser,
    '\\(\\*': '(...',
    '(?<=^ *(?:else if|if|while).*?)(?<=\\S): ': ') ',
    '(?<!(?:do|try|catch|else|const|class|function|return|feab).*?)(?<!\\)) {$': ') {',
    '(?<=^ *(?:else if|if|while).*?) {(?!})': ') {',
    '(?<=^ *else if|^ *if|^ *while) (?!\\(|{)': ' (',
}
const sadsfpecialJS = {
    '\\(\\*': '(...',
    '(?<!{.*?)(?<=\\S)\\: ': ') ',
    '(?<!(?:else|const|class|function|return|feab).*?)(?<!\\)) {$': ') {',
    '(?<=^ *(?:else if|if|while)) (?!\\(|{)': ' (',
    '(?<=^ *(?:else if|if|while).*?) {': ') {',
}
const specialPY = {
    xget: '#xget',
    ' {$': ':',
    '(?<=\\n|\\s{2,})}$': '',
    '\\\\': '\\',
    'cef .*?(?= {)': cefParser,
}
const speechMap = {
    '\t': 'tab',
    '    ': 'indent 4',
    "'": 'quote',
    '"': 'quote',
    '?': 'q-mark',
    ' ': 'space ',
    '/': 'slash',
    '{': 'left-bracket',
    '}': 'right-bracket',
    '(': 'left-parentheses',
    ')': 'right-parentheses',
    '[': 'left-brace',
    ']': 'right-brace',
    '.': 'period',
    ',': 'comma',
    ';': 'semicolon',
    ':': 'colon',
    '^': 'caret',
    '*': 'asterisk',
    '-': 'dash',
    _: 'underscore',
    '=': 'equals',
    '+': 'plus',
    '!': 'exclam',
    '@': 'atttt',
    '#': 'hashtag',
    $: 'dollar',
    '%': 'percent',
    '\\': 'backslash',
    '|': 'pipe',
}
const symbolmap = speechMap
const pymiscregex = '|init\\('
const getParamsRE = '(?<=(?:function|\\.(?:map|reduce|filter)).*?\\().*?(?= =>| {|$)'
const jsrm = {
    nlaw: '\\\\n(?=\\\\w)',
    csp: '(\\\\S+)',
    wallu: '[^]+?',
    cwallu: '([^]+?)',
    cwall: '([^]*)',
    cwp: '(\\\\w+)',
    nwp: '\\\\w+',
    cdp: '(\\\\d+)',
}
const srm = {
    nlaw: '\\\\n(?=\\\\w)',
    respc: '(?<=^ *)',
    wallu: '[^]+?',
    cwallu: '([^]+?)',
    cwall: '([^]*)',
    cwp: '(\\\\w+)',
    cdp: '(\\\\d+)',
    '6': '^',
    '7': '0',
    '8': '*',
    '9': '(',
    '0': ')',
    nwp: '\\\\w+',
    ']]': '}',
    '[[': '{',
    ':[': '{',
    ':]': '}',
    'pi ': '|',
    ncg: '(?:',
    plb: '(?<=',
    nlb: '(?<!',
    nla: '(?!',
    cdotu: '(.*?)',
    dotu: '.*?',
    cdot: '(.*)',
    cdazp: '([-.a-zA-Z]+)',
    dazp: '[a-zA-Z-.]+',
    cazp: '([a-zA-Z]+)',
    azppp: '[a-zA-Z]{3,}',
    azp: '[a-zA-Z]+',
    restarter: '(?<=^|\\\\n)',
    renw: '(?=\\\\n\\\\w|$)',
    renn: '(?=\\\\n\\\\n|$)',
}
const rm = {
    nlaw: '\\\\n(?=\\\\w)',
    rword: '[a-zA-Z]+',
    ']]': '}',
    '[[': '{',
    ':[': '{',
    ':]': '}',
    'pi ': '|',
    ncg: '(?:',
    plb: '(?<=',
    nlb: '(?<!',
    nla: '(?!',
    cdotu: '(.*?)',
    dotu: '.*?',
    cdot: '(.*)',
    cdazp: '([-.a-zA-Z]+)',
    dazp: '[a-zA-Z-.]+',
    cazp: '([a-zA-Z]+)',
    azppp: '[a-zA-Z]{3,}',
    azp: '[a-zA-Z]+',
    restarter: '(?<=^|\\n)',
    reew: '(?=\\n\\w|$)',
    reen: '(?=\\n\\n|$)',
}
const nb = {
    // thou: '000',
    // ':gt': '>',
    // ':lt': '<',
    // ':qm': '?',
    // spacer: ' ',
    // dot: '.',
    // ' z ': ' 0 ',
    // ' z\n': ' 0\n',
    // qm: '?',
    // ecb: '\n}',
    // nlt: '\n    ',
    semi: ';',
    // asset: 'ASSET',
    e1: 'el[1]',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    nine: '9',
    zero: '0',
    eleven: '11',
    e2: 'el[2]',
    ez: 'el[0]',
    az: 'args[0]',
    '1h': '100',
    '11': '11',
    '22': '2',
    '33': '3',
    '44': '4',
    '55': '5',
    '66': '6',
    '77': '7',
    '88': '8',
    // zz: '0',
    dpl: "+ ': ' +",
    dc: "', '",
    semicolon: ';',
    psp: " + ' ' + ",
    mk: 'map[k]',
    psn: " + '\\n' + ",
    psq: " + '\\'' + ",
    // snsn: "'\\n\\n'",
    // '-ks': '_, k, s',
    // '-abc': '_, a, b, c',
    // '-ab': '_, a, b',
}

function replaceNumbers(s) {
    return sreplace(s, nsdict)
}

function splitSpaces(s) {
    return s.split(' ')
}

function simple(x, cat = '') {
    if (isObject(x)) x = Object.keys(x)
    let base = '(?:' + x.join('|') + ')'
    if (cat == 'wb') return parens(base, '\\b|\\b')
    if (cat == 'la') return base.slice(3, -1)
    if (cat == 'nb') return base
    if (cat == 'default') return base.slice(3, -1)
    if (cat == '') return base
}

function simpleCodeFix(s) {
    // console.log(replace(CAPREGEX, capParser, s))
    return replace(CAPREGEX, capParser, s)
}

function catActionParser(s) {
    let cat = getFirstWord(s)
    s = dedent(sliceEffect(s))
    return "else if (cat == '" + cat + "') {\n" + betterText(s) + '\n}'
}

function fwrap(k) {
    return ' '
}

function vueDataParser(s) {
    if (test('{|\\[', s)) {
        return s.replace(/ |=/, ': ')
    }
    return s
        .split('  ')
        .map((s) => split(simpleCodeFix(s), [null, dollarCapture]).join(': '))
        .join(',\n')
}
const foomap = {
    notes: 'a',
    pack: 'a',
}
const vuehelpermap = {
    mounted: {
        join: '\n',
        indentation: 4,
    },
    data: {
        join: ',\n',
        indentation: 8,
    },

    methods: {
        join: ',\n',
        indentation: 4,
    },

    computed: {
        join: ',\n',
        indentation: 4,
    },

    watch: {
        join: ',\n',
        indentation: 4,
    },

    props: {
        join: ', ',
        indentation: 4,
    },

    components: {
        join: ', ',
        indentation: 4,
    },
}
const vuemap = {
    componentInfo: { mode: 'data', parent: 'vue' },
    dataItems: { mode: 'data', parent: 'vue' },
    ev: { parser: catActionParser, parent: 'vue', split: true, kt: fwrap, join: '\n' },
    data: { parent: 'vue', join: ',\n', key: datakey, indent: 12, parser: vueDataParser },
    methods: {
        parent: 'vue',
        join: ',\n',
        indent: 8,
        key: methodskey,
        parser: (s) => {
            return bestText(s, 'js')
            return betterText(parenhack(s), 'js')
        },
    },

    method: {
        parent: 'vue',
        join: ',\n',
        indent: 8,
        key: methodskey,
        parser: (s) => {
            return betterText(parenhack(s), 'js')
        },
    },

    watch: {
        parent: 'vue',
        join: ',\n',
        indent: 8,
        key: watchkey,
        parser: (s) => {
            return replaceFirstElement(bestText(s), (x) => {
                if (x.endsWith('()')) x = x.slice(0, -2)
                return x + '(current, prev)'
            })
        },
    },
    mounted: {
        parent: 'vue',
        join: '\n',
        key: mountedkey,
        indent: 8,
        parser: bestText,
    },

    mount: {
        parent: 'vue',
        join: '\n',
        key: mountedkey,
        indent: 8,
        parser: (s) => betterText(s, 'js'),
    },
    keyup: { parent: 'vue', parser: vueKeyupParser, key: 'id="app"', join: '\n' },
    button: { parent: 'vue', parser: vueButton, key: BUTTON_KEY, join: '\n' },
    k: { parser: replaceNumbers, mi: ['methods.js', 'mnames', 'keyup'] },
    b: { parser: replaceNumbers, mi: ['methods.js', 'mnames', 'button'] },
    c: { parent: 'vue', parser: vueComputedParser, key: 'computed: {' },
    m: { parent: 'vue', parser: (s) => fixVueKeep(s).slice(9), key: 'methods: {' },
    'methods.js': { parser: fixVueKeep },
    mnames: { parser: getVueFunctionName, parent: 'vue', key: 'methods: {' },
    t: { alias: 'template' },
    template: {
        mode: 'multipleEntries',
        parent: 'vue',
        parser: htmlParser,
        key: templatetildakey,
        indent: 0,
        join: '',
    },
    props: { parent: 'vue', parser: propParser, key: propskey, indent: 0, join: ', ' },
    components: { parent: 'vue', parser: propParser, key: componentskey, indent: 0, join: ', ' },
    css: { parser: cssParser, parent: 'vue', indent: 0, join: '\n', trimmed: true },
    link: { parent: 'vue', join: '\n', indent: 4, key: LINKS_FKEY, parser: linkParser },
}

function questionParser(s) {
    return s
}
function codeEssayParser(s) {}

function createMap(s) {
    return toDictionary(getLineInfoMAPS(s))
}

function splitter2(s, sector) {
    return {
        merge: true,
        value: { [sector]: createMap(s) },
    }
}
const packmap2 = {
    config: splitter2,
    math: mathParser,
    print: ph,
    reddit: redditParser,
    notes: nnoteParser,
    function: fixjs,
    def: fixpy,
}

const packmap = {
    question: { parser: questionParser, mode: '' },
    invivo: { parser: createInVivoDocs },
    poster: { parser: posterParser },
    printd: { parser: printDocumentParser },
    action: { parser: ph },
    contact: { parser: contactParser, mode: 'allnotes' },
    // event: { parser: eventParser, mode: 'allnotes' },
    google: { parser: ph },
    notes: { parser: nnoteParser, mode: 'allnotes' },
    note: { parser: noteParser },
    essay: { parser: noteParser },
    createfile: { holder: 'files', parser: createFileParser, split: true, mode: 'singleton' },
    find: { parser: ph },
    test: { parser: testParser, infer: true },
    docs: { parser: proseParser, split: true, mode: 'string-object' },
    fbchat: { parser: proseParser, split: true, mode: 'string-object' },
    reddit: { parser: redditParser, name: 'reddit' },
    mv: { parser: ph },
    print: { parser: ph },
    bash: { parser: bashParser },
    js: { destination: 'js', parser: fixjs },
    py: { destination: 'py', parser: fixpy },
    edits: {
        mode: 'conditional-family',
        parser: editParser,
        parent: 'edits',
        split: 'conditional',
        join: '\n',
        indent: 4,
    },
    pack: { parent: 'maps', parser: packParser, key: 'packmap' },
    math: { mode: 'object', parent: 'math', parser: ph, [DATE_STAMP]: true },
    pcf: { mode: 'object', parent: 'pyedits', parser: pcfParser, split: true },
    jcf: { split: true, parent: 'jsedits', parser: jcfParser, mode: 'object' },
    ifc: { parent: 'ifc', split: true, parser: betterText, indent: 4, join: '\n' },
    pmwb: { parent: 'maps' },
    pmnb: { parent: 'maps' },
    jswb: { parent: 'maps' },
    jsnb: { parent: 'maps' },
    pywb: { parent: 'maps' },
    pynb: { parent: 'maps' },
    wb: { parent: 'maps' },
    nb: { parent: 'maps' },
    pyrm: { parent: 'maps' },
    jsrm: { parent: 'maps' },
    rm: { parent: 'maps' },
}
const SHARED_MISCMAP = {
    pla: '(?=',
    '8args': '...args',
    't.': 'this.',
    storage: 'Storage',
    nl: '\n',
    iz: 'items[0]',
    '\\p': '|',
    // '4': '$',
    // '6': '^',
    // '7': '0',
    // '8': '*',
    // '9': '(',
    // '0': ')',
}
const nsdict = {
    '6': '^',
    '7': '0',
    '8': '*',
    '9': '(',
    '0': ')',
}
const pyrm = {
    cdp: '(\\d+)',
    wallu: '[\\w\\W]+?',
    cwallu: '([\\w\\W]+?)',
    cwall: '([\\w\\W]*)',
    cwp: '(\\w+)',
}
const thisa =
    "\\\\p|(?<![^a-z]t)storage|nl(?!oad)|iz(?!e)|(?<!(?:woooo|ooo|ooo|: |obar|\\[|is |= ))0|\\[(?:0|9)\\]|:(?:\\[|\\])|pla(?!ce|te|y|ne)|(?<=^ *)(?:c|l)\\b|(?<=\\S)4|4(?=[a-zA-Z()])|6|7|8|9|(?<![a-zA-Z])(?<!\\\\)t(?!'|emp|ime|ext|est|xt|ab|hrow|hen|wice|rans|itle|ilda|racker|op|o|ally|ail|rue|ype|wo|ar|his|ag|rim|ry|\\s)(?=[a-z][a-z])"
const JSMISC = {
    c: 'const',
    l: 'let',
    // class: 'js class',
    // trim: 'trim()',
    lower: 'toLowerCase()',
    upper: 'toUpperCase()',
    // t: 'this.',
}
function isDatestamp(s) {
    return test('\\d+-\\d+-\\d+', s)
}
function findDatedStorage() {
    const datekeys = sorted(getStorageKeys(isDatestamp), strftime)
    let text
    function runner(n) {
        text = localStorage[datekeys[n]]
        if (n == datekeys.length) {
            throw 'error at searching for datedstorage'
        } else if (text.length < 500) {
            runner(n + 1)
        } else {
            return text
        }
    }
    return runner(0)
}

function strftime(s) {
    return new Date(s).getTime()
}
function sorted(arr, parser = null) {
    if (!parser) {
        arr.sort()
        return arr
    }
    arr.slice().sort((a, b) => {
        return parser(a) - parser(b)
    })
    return arr
}

function capslock(s) {
    return s.toUpperCase()
}
function boldcolon(s) {
    let [a, b] = s.split(/(?<=:)/)
    a = toTitle(a)
}

function maimonides(s) {}

function hasClosingTag(s) {
    const noClosingTag = ['line', 'hr']
    return !noClosingTag.includes(s)
}

const maimonidesdict = {
    'linebreak(.*)': (_, a) => div('hr', a),
    'ac(?!cu|co)\\w+': capslock,
    '[^\\n:]*?:[^\\n:]*?\\w': boldcolon,
}
function getStorageKeys(key = null) {
    const keys = Object.keys(localStorage)
    const parser = isFunction(key) ? key : (x) => test(key, x)
    return key ? keys.filter(parser) : keys
}
const jswb = {
    'ihtml': 'innerHTML',
    'ohtml': 'outerHTML',
    'doc': 'document',
    'dglbi': 'document.getClient',
    'elbyid': 'document.getElementById',
    'catch:': 'catch(e)',
    'not ': '!',
    ctr: 'constructor',
    jc: 'join(\', \')',
    // l: 'let',
    // c: 'const',
    cwdp: '[\\w.]+',
    csp: '(\\\\S+)',
    gs: 'groups()',
    reender: '(?=\\\\n|$)',
    feitem: 'forEach(item => ',
    foreach: 'forEach',
    sn: "'\\n'",
    comps: 'components',
    ray: "throw 'Early Exit'",
    ...methodmap,
    storep: 'store.push',
    indexof: 'indexOf',
    slines: "lines = s.split('\n')",
    lxi: '(a, b) =>',
    eab: '(_, a, b) =>',
    lab: '(a, b) =>',
    mf: 'matches = findall(',
    or: '||',
    and: '&&',
    okeys: 'Object.keys',
    elif: 'else if',
    not: '!',
    dollarcapture: 'dollarCapture',
    newstore: 'store = new Store()',
    newstorage: 'store = new Storage()',
    oents: 'Object.entries',
    ovals: 'Object.values',
    ls: '(s) =>',
    lx: '(x) =>',
    lxi: '(x, i) =>',
    lxab: '(_, a, b) =>',
    ctr: 'constructor',
    newpromise: 'new Promise',
    newdate: 'new Date',
    xcmgv: 'this.codemirror.getValue()',
    xcmsv: 'this.codemirror.setValue',
    xcmgl: 'this.getLine()',
}
const pywb = {
    storep: 'store.append',
    ray: "raise Exception('Early Exit')",
    rem: 're.M',
    rei: 're.I',
    ls: 'lambda (s):',
    null: 'None',
    none: 'None',
    split: 're.split',
    lix: 'lambda i,x:',
    lab: 'lambda a,b:',
    readfile: 'text = read(file)',
    readlines: "lines = read(file, 'lines')",
    '2sm': '@staticmethod',
    '.slice1': '[1:]',
    except: 'except Exception as e:',
    super: 'super().__init__(*args, **kwargs)',
    false: 'False',
    true: 'True',
    im: 'import',
    jspaces: "' '.join",
    osld: 'os.listdir',
    oexu: 'os.expanduser',
    ospj: 'os.path.join',
    ospj: 'os.path.join',
    osr: 'os.remove',
    ospb: 'basename',
    ospd: 'os.path.dirname',
    null: 'None',
    lx: 'lambda x:',
    rei: 're.IGNORECASE',
    rem: 're.MULTILINE',
    '.gz': '.group(0)',
    '.gs': '.groups()',
    '.g1': '.group(1)',
    '.g2': '.group(2)',
    break: "raise ValueError('test error')",
}
const PYMISC = {
    trim: 'strip()',
    lower: 'lower()',
    def: 'py def',
    upper: 'upper()',
    t: 'self.',
}

function createFunction(name, params, body, lang, ...args) {
    const map = {
        js: { start: 'function', middle: ' {', end: '\n}' },
        py: { start: 'def', middle: ':', end: '' },
        jc: { start: 'asd', middle: ' {', end: '\n}' },
        pc: { start: 'def', middle: ':', end: '' },
    }
    if (lang == 'pc') {
        if (params) params = 'self, ' + params
        else params = 'self'
    }
    function normalizeIndent(s) {
        return replace('^ *', '    ', s)
    }
    const extraText = args ? args.join('\n') : ''
    if (!body.startsWith('spc')) body = indent(body)
    return (
        map[lang]['start'] +
        ' ' +
        name +
        '(' +
        params +
        ')' +
        map[lang]['middle'] +
        normalizeIndent(body + extraText) +
        map[lang]['end']
    )
}
const jsnb = {
    // placeholder: 'placeholder',
    // '#parser': 'function parser(x) {',
    // 'catch {': 'catch {',
}
const pynb = {
    With: 'with',
    '.g)': '.group(0)',
    '.g!': '.group(1)',
    '.g2': '.group(2)',
    catch: 'except Exception as e',
    '#parser': 'def parser(x)',
}
const JSWBMAP = { ...jswb, ...wb }
const PYWBMAP = { ...pywb, ...wb }
const JSNBMAP = { ...rm, ...jsrm, ...jsnb, ...nb}
const PYNBMAP = { ...rm, ...pyrm, ...pynb, ...nb }

function copy(x) {
    return x.slice()
}

function isNull(x) {
    return x === null
}
function isNumber(s) {
    return typeof s == 'number' || test('^\\d+$', s)
}

function isPureNumber(s) {
    return !isNaN(s) && !isString(s)
}

function isBlock(s) {
    return /^\w+ {/.test(s)
}

function isArray(a) {
    return Array.isArray(a)
}

function getSpaces(s) {
    try {
        return s.match(/^ */)[0]
    } catch {
        return '' 
    }
}

function isString(s) {
    return typeof s === 'string'
}

function getParams(s) {
    return findall(getParamsRE, s)
}

function setify(arr) {
    return Array.from(new Set(arr))
}

function enumerated(el, idx = 0, offset = 1) {
    return `${idx + offset}. ${el}`
}

function enumerate(el, idx = 0, offset = 1) {
        return el.map((item, i) => [item, i + offset])
}

function sliceTo(s, x) {
    return s.slice(0, s.indexOf(x))
}

function isCodeBlock(s) {
    return test('^.*?\\(.*?\\)(?: {|:)$|^class', s)
}

function isCodeFunction(s) {
    return /^(?<!\)\w+\(\)/.test(s)
}

function hasRegexAsterisk(el) {
    return test('(?<!\\\\)\\*', el)
}

function functionify(outer, inner) {
    if (isArray(inner)) inner = inner.join(', ')
    return outer + parens(inner)
}

function getLets(s) {
    return s.match(/(?<=let |const )\w+/g) || []
}

function periodize(s) {
    return test('(?:[?.\'"]', s) ? s : s + '.'
}

function test(re, s, flags = '') {
    const regex = isRegExp(re) ? re : RegExp(re, flags)
    return regex.test(s)
}

function unique(a, b) {
    return a.filter((item) => !b.includes(item))
}

function XToNull(s) {
    return test('x|"x"|^x$|\\\'x\\\'') ? 'null' : s
}

function looksLikeHtmlElement(x) {
    return test('^<', x)
}
function scriptify(el) {
    if (looksLikeHtmlElement(el)) return el
    if (el.endsWith('js')) {
        return `<script src="${el}"></script>`
    }
    if (el.endsWith('css')) {
        return `<link rel="stylesheet" href="${el}"/>`
    }
}

function div99(el, content = '', attrs = '') {
    if (!attrs) attrs = 'default'
    if (hasClosingTag(el)) return `<${el} class="${attrs}>${content}<\/${el}>`
    else return `<${el} class="${attrs}"/>`
}

function createRE({
    trim = false,
    start = '',
    end = '',
    mode = 'captureBetween',
    inclusive = false,
}) {
    let regex
    let body = '[^]+?'
    if (trim) {
        start += '\\s*'
        end = '\\s*' + end
    }
    if (!inclusive) body = parens(body)
    if (mode == 'captureBetween') {
        regex = start + body + end
    }
    return regex
}

function stsdfringElt2(
    el,
    content = '',
    attrs = {},
    { internalPadding = false, externalPadding = false, newlines = false } = {}
) {
    let indentation = 4
    let level = 0

    let s = ''

    s += toOpeningTag(el, attrs)
    if (internalPadding) s += '\n'

    if (isArray(content)) {
        if (!internalPadding) s += '\n'
        let newLevel = level + 1
        for (let child of content) {
            if (!child) continue
            s += htmlIndent(stringElt(...child), indentation * newLevel) + '\n'
        }
    } else {
        s += newlines ? '\n' + htmlIndent(content, indentation) + '\n' : content
        if (internalPadding) s += '\n'
    }
    s += toClosingTag(el)
    if (externalPadding) s = '\n' + s + '\n'
    return htmlIndent(s, indentation * level)
}
function div(el, content = '', attrs = '', newlines = false, indentation = 0) {
    const format = newlines ? (x) => '\n' + indent(x, indentation) + '\n' : ph
    if (attrs) attrs = ' ' + attrs
    if (hasClosingTag(el)) return `<${el}${attrs}>${format(content)}<\/${el}>`
    else return `<${el}${attrs}"/>`
}

function divify(el, content = '', attrs = {}) {
    if (isArray(content)) {
        content = toString(content)
    }
    if (attrs && isString(attrs)) {
        attrs = ' class="' + attrs + '"'
    }
    else {
        attrs = stringReduction(attrs, { mode: 'attrs' })
    }
    const isClosing = isClosingTag(el)
    let s =
        '<' +
        el +
        attrs +
        (isClosing ? '>' : '/>') +
        (content.includes(sn) ? parens(content, 'newline-indent') : content) +
        (isClosing ? '</' + el + '>' : '')
    return s
}

function stringElt(
    el,
    content = '',
    {
        attrs = '',
        internalPadding = false,
        externalPadding = false,
        newlines = false,
        linegap = false,
    } = {}
) {
    if (!content) {
        if (el == 'script') {
            return scriptify(arguments[2])
        }
        return ''
    }
    let indentation = 4
    let level = 0

    if (el == null) {
        return content
    }
    if (el == 'styles') externalPadding = 'top'
    if (el == 'body') externalPadding = 'top'
    if (el == 'body') newlines = true
    if (isArray(content) && content.length > 1) newlines = true
    else if (isString(content) && hasMultipleSentences(content)) newlines = true

    if (el.includes('<')) {
        return htmlIndent(el, indentation * level)
    }

    let s = ''

    if (externalPadding && externalPadding != 'bottom') s += '\n'
    s += toOpeningTag(
        el,
        isString(attrs) ? attrs : objify(attrs, { quoteStyle: 'dq', delimiter: '=', join: ' ' })
    )

    if (internalPadding) s += '\n'

    if (isArray(content)) {
        s += '\n'
        let newLevel = level + 1
        for (let child of content) {
            if (!child) continue
            s += htmlIndent(stringElt(...child), indentation * newLevel) + '\n'
        }
    } else {
        s += newlines ? '\n' + htmlIndent(content, indentation) + '\n' : content
        if (internalPadding) s += '\n'
    }
    s += toClosingTag(el)
    if (externalPadding && externalPadding != 'top') s += '\n'
    return htmlIndent(s, indentation * level)
}
function div(el, content = '', attrs = '', newlines = false, indentation = 0) {
    const format = newlines ? ph : (x) => '\n' + indent(x, indentation) + '\n'
    if (attrs) attrs = ' ' + attrs
    if (hasClosingTag(el)) return `<${el}${attrs}>${format(content)}<\/${el}>`
    else return `<${el}${attrs}"/>`
}

function div2(el, content, { attrs = {}, newlines = false } = {}) {
    let end = ''

    if (isObject(el)) {
        const [options, usable] = getOptionsAndUsable(el, 'el')
        el = options.el || 'div'
        attrs = usable
    } else if (el.includes('<')) {
        // its already been formatted.
        end = drep9000(el, {
            '<': '</',
            ' \\w+=".*?"': '',
        })
        if (newlines) return el + parens(content, '\n') + end
        return el + content + end
    }

    const format = newlines ? (s) => parens(s, '\n') : ph
    attrs = createCssAttrs(attrs)
    if (hasClosingTag(el)) return `<${el}${attrs}>${format(content)}<\/${el}>`
    else return `<${el}${attrs}"/>`
}

function divifyi2(s, el) {
    return `<${el}>\n${indent(s, 2)}\n<\/${el}>`
}

function getVueFunctionName(s) {
    return search('^.*?(\\w+)(?:\\(| {)', s)
}

function getFunctionName(s) {
    let match = search('function (\\w+)', s)
    if (!match) match = search('^.*?(\\w+)\\(', s)
    return match
}

function getConstNames(s) {
    return findall('^(?:const) (\\w+)', s)
}

function getFunctionNames(s) {
    return findall('^(?:f|function|def) (\\w+)', s)
}

function toNumber(s) {
    if (isNaN(Number(s))) return s
    return Number(s)
}

function vuePropItems(s) {
    return (s) => s.split(' ').map((x) => "'" + x + "'")
}

function rng(min = 1, max = 10) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function rnga(min = 1, max = 10) {
    return Math.round(Math.random() * (max - min) + min)
}

function queryFilter(arr, ...queries) {
    return arr.filter((x) => queries.include(x))
}

function ordinal(n) {
    return [, 'st', 'nd', 'rd'][(n % 100 >> 3) ^ 1 && n % 10] || 'th'
}

function bashParser(s) {
    let [a, b] = split(s, 'once')
    if (a.endsWith('fn')) {
        return a.slice(0, -2) + '() {\n    ' + b.replace(/  /g, '\n    ') + '\n}'
    }
    return 'alias ' + a + "='" + b + "'"
}

function stringify(s) {
    if (typeof s == 'string') return s
    return JSON.stringify(s, null, 2)
}

function getFirstLine(s) {
    return s.match(/.+/)[0]
}

function dedent(s) {
    return replace('^ *', '', s)
}

function trimBlock(s) {
    const regex = /^(.*?) ?{\n([^]+?)\n}$/
    return s.replace(regex, (_, a, b) => {
        return a + '\n' + indent(b, 0)
    })
    let line = getFirstLine(s)
    if (line.endsWith('{')) {
        if (test('[9\\(].*?[0\\)]|^\\w{3,} {$', line)) {
            return s
        }
        return dedent(sliceEffect(s))
    }
    return s
}

function vueGlobalDataTransformer(s) {
    return replace('^(.*?) (.*)$', (_, a, b) => a + ': ' + b, s)
}

function vueDataTransformer(x) {
    let [a, b] = split(x, 'once')
    return a + ': ' + dollarCapture(b)
}

function getTypeOf(o) {
    return Object.prototype.toString.call(o).slice(8, -1).toLowerCase()
}

function getTypeof(o) {
    return Object.prototype.toString.call(o).slice(8, -1).toLowerCase()
}

function isObject(o) {
    return Object.prototype.toString.call(o).slice(8, -1).toLowerCase() === 'object'
}

function flatten(list) {
    return list.reduce((acc, item) => {
        return [...acc, ...item]
    }, [])
}

function sliceEffect(s, delimiter = '\n') {
    s = s.trim()
    if (!test(delimiter, s)) {
        delimiter = s.match(/, ?|foobar/)[0]
    }
    let a = s.indexOf(delimiter)
    let b = s.lastIndexOf(delimiter)
    if (a == b) throw Error('Slice Effect')
    return s.slice(a + 1, b)
}

function blockParser(s) {
    if (s.startsWith('try:')) return 'try {' + s.slice(4) + ' }'
    if (s.startsWith('for')) return forParserJS(s) + ' {'
    if (s.startsWith('if') || s.startsWith('else if')) {
        s = sreplace(s, { ':': ')', 'if ': 'if (', ' {': ') {' })
    }
    if (s.startsWith('else:')) {
        s = s.replace('else:', 'else')
    }
    return s
}

function isFunction(o) {
    return Object.prototype.toString.call(o).slice(8, -1).toLowerCase() === 'function'
}

function replace(re, replacement, s, flags = 'gm') {
    const regex = prepareRegex(re, flags)
    // console.error( regex )
    return s.replace(regex, replacement)
}

function replaceLookAround(s) {
    let result = s.replace(/\(\?\<?(?:=|!).*?(?<!\\)\)(?:\.\*\?\)|\))?/g, '')
    return result
}

function getIndent(s) {

    try {
        return s.match(/^ */)[0].length
    } catch {
        // console.log( 'catching' )
        return 0
    }

    if (isEmpty(s)) {
        return 0
    }
    let indent = s.search(/\S/)
    return indent >= 0 ? indent : 0
}

function vuexGetterTransformer(s) {
    let [a, b] = split(s, 'once')
    return a + '(state)' + parens(b, 'brackets')
}

function getSmartIndent(s) {
    let indent = s.search(/\S/)
    return s.trimEnd().endsWith('{') ? indent + 4 : indent
}

function parseStringJson(s) {
    return decodeURIComponent(JSON.parse(s))
}
function parseJSON(s) {
    s = s.trimStart()
    if (test('^[\'"]?[{\\[]', s)) {
        let product = JSON.parse(s)
        return s.startsWith('{"value') ? product.value : product
    }
    return s
}

function countAllParentheses(s) {
    try {
        return s.match(/(?<!(?<!\\)\\)\((?!\?)|(?<!\\)\)/g).length
    } catch {
        return 0
    }
}

function countParentheses(s) {
    try {
        return s.match(/(?<!(?<!\\)\\)\((?!\?)/g).length
    } catch {
        return 0
    }
}

function prepareDictionarySpeech(s, deletespaces = false, quoted = false) {
    if (s === true || s === false) s = s.toString()
    if (quoted) s = replace(`['"](.*?)['"]`, (_, x) => 'quoted ' + (speechMap[x] || x), s)
    s = s.trimStart()
    const regex = /(?=\W)|(?<=\W)/
    return s.split(regex).map((x) => {
        if (deletespaces && x == ' ') {
            return x
        }
        return speechMap[x] || x
    })
}

function sliceBetween(s, x) {
    const start = s.indexOf(x) + 1
    const end = s.lastIndexOf(x)
    return s.slice(start, end)
}

function vueKeyupParser(el) {
    console.log(el)
    const dict = {
        '#': '3',
        $: '4',
        '%': '5',
        "'][']": '.',
        "['": '.',
        "']": '',
        '!': '1',
    }
    let [name, keyup] = search('^.*?(\\w+)(?:\\(| {).*?// (\\S+)', el)
    return srep(`@keydown.${keyup}.prevent="${name}"`, dict, 'escape')
}

function roundToFours(n) {
    if (n < 2) return 0
    if (n < 6) return 4
    if (n < 10) return 8
    if (n < 14) return 12
    return n
}

function cancel() {
    window.speechSynthesis.cancel()
}

function resume() {
    window.speechSynthesis.resume()
}

function pause() {
    window.speechSynthesis.pause()
}

function isSpeaking() {
    return window.speechSynthesis.isSpeaking()
}

class SpeechController {
    constructor(fn) {
        this.sentences = []
        this.audio = new SpeechSynthesisUtterance()
        this.audio.rate = 1
        this.audio.pitch = 1
        this.audio.lang = 'en-AU'
        this.index = 0
        this.stop = false
        this.waited = false
        this.delay = 1000
        this.delimiter = 'b'
        this.timer = new Timer()

        this.normalstart = (e) => {
            console.log('starting')
        }

        this.normalend = (e) => {
            console.log('ending')
        }
        this.multistart = (e) => {
            if (this.index == -1) {
                cancel()
            } else {
            }
        }

        function helperA(s) {
            return isObject(s) ? s.value : s
        }

        function helperB(s) {
            try {
                return isObject(s) ? s.delay : getSpeechDelay(String(s))
            } catch (e) {
                console.log(e)
                console.log(s)
            }
        }

        this.multiend = (e) => {
            this.index++
            if (this.index == 0) {
                this.audio.text = helperA(this.sentences[0])
                fn(this.audio.text)
                window.speechSynthesis.cancel()
                console.log('speaking text from initila')
                window.speechSynthesis.speak(this.audio)
                return
            }
            if (this.index > this.sentences.length - 1) {
                console.log('finisheddddddddddd')
                this.audio.onend = this.normalstart
                this.audio.onstart = this.normalend
                this.timer.pause()
                cancel()
                return
            }

            this.audio.text = helperA(this.sentences[this.index])
            fn(this.audio.text)
            this.delay = helperB(this.sentences[this.index])

            setTimeout(() => {
                if (this.stop) {
                    console.log('canceling speech on index ' + this.index)
                    return
                }
                console.log('speaking text')
                window.speechSynthesis.speak(this.audio)
            }, this.delay)
        }
    }
    wait(ms) {
        this.delay = ms
        this.waited = true
    }
    get next() {
        return this.sentences[this.index + 1]
    }
    async speak(text, delay = null, options = null) {
        if (options) this.setOptions(options)
        this.audio.onstart = this.normalstart
        this.audio.onend = this.normalend
        this.audio.text = text
        window.speechSynthesis.speak(this.audio)
        if (delay) await sleep(delay)
    }
    setOptions(options) {
        if (options.volume) this.audio.volume = options.volume
        if (options.lang) this.audio.lang = options.lang
        if (options.pitch) this.audio.pitch = options.pitch
        if (options.rate) this.audio.rate = options.rate
    }
    async multiSpeak(list) {
        if (isString(list)) {
            if (test('<(?:div|html|p\\b|body)', list)) {
                list = prepareHtmlSpeech(list)
            }
            list = list.split('\n').filter((x) => x.trim())
        }
        this.stop = false
        this.index = -1
        this.audio.onstart = this.multistart
        this.audio.onend = this.multiend
        this.sentences = list
        this.audio.text = ''
        window.speechSynthesis.cancel()
        window.speechSynthesis.speak(this.audio)
    }
    cancel() {
        window.speechSynthesis.cancel()
        this.stop = true
    }
}

function prepareCodeSpeech(s) {
    if (isFunction(s)) s = s.toString()

    const allmap = {
        RegExp: 'regex constructor',
        '||': 'or',
        '&&': 'and',
        ' {': '\n',
        '===': 'deep equals',
        '==': 'equals',
        '>': 'is greater than',
        '>=': 'is greater than or equal to',
        '<': 'is less than',
        '<=': 'is less than or equal to',
        '+=': 'plus equal',
        '-=': 'minus equal',
        '++': 'plus equal one',
        '--': 'minus equal one',
        '[]': 'new array',
        '{}': 'new object',
        elif: 'else if',
        js: 'javascript',
        py: 'python',
        dir: 'deer',
        '=': 'equals',
        '+': 'plus',
        '!': 'not ',
        '@': 'at',
        '#': 'hashtag',
        $: 'dollar',
        '%': 'percent',
        '\\\\': 'backslash',
        arr: 'array',
        ext: 'extension',
        "''": 'empty-string',
        "' '": 'empty-string',
        '...': 'triple dots',
        '.': ' dot ',
    }
    const jsmap = {
        '(?<=(function)[^\\n=]+?){(?!$)': 'options-bracket',
        '\\w+(RE)\\b': 'regex-string',
        '(//).*': '',
    }

    return dddrep(s, allmap)
    s = replace('(?<=[a-z])(?=[A-Z])', ' ', s) //camelCase to split Words
    const lines = s.trim().split(/\n|\)\) |(?<=function \w+)\(/) //splitlines
    return lines
}

function speak(text, { volume = 1, lang = 'en-AU', rate = 1, pitch = 1 } = {}) {
    window.speechSynthesis.cancel()
    const audio = new SpeechSynthesisUtterance()
    audio.rate = rate
    audio.pitch = pitch
    audio.lang = lang
    audio.text = text
    window.speechSynthesis.speak(audio)
}
function regexEscape(s) {
    const temp = s.replace(/[.\\[*+?()|^$]/g, '\\$&')
    return temp
}

function smartRescape(s) {
    return s.replace(
        /\((?!\.|\[)|(?!\?|\*)\)|\.(?!\*)|(?<!\.|\])\*|(?<!\*)\?|\[(?!\^)|(?<!\^)\]|(?<!\[)\^|[/+$]/g,
        '\\$&'
    )
}

function rescape(s) {
    return s.replace(/[`.|[/+*?(){^$]/g, '\\$&')
}
function rescapeOld(s) {
    return s.replace(/[\\[*+?()|^$]/g, '\\$&')
}

function rescapeSmall(s) {
    return s.length < 3 ? s.replace(/[\].\[*+?()|^$]/g, '\\$&') : s
}

function fileNameRescape(s) {
    return s.replace(/[.()$]/g, '\\$&')
}

function escapeRegex(s, cat = 'partial') {
    if (cat == 'full') return s.replace(/[\\[*+?()|^$]/g, '\\$&')
    return s.replace(/[.\[\]{}()]/g, '\\$&')
}

function vueButton(el) {
    let name = search('(?<= )\\w+(?= |\\()', el)
    return `<button @click="${name}" class="">${name}<\/button>`
}

function pipe2(...functions) {
    return function (...args) {
        return functions.reduce((acc, fn) => {
            console.log(acc, 'acc')
            console.log(args, 'args')
            console.log(fn)
            const product = isArray(acc) ? fn(...acc) : fn(acc)
            console.log(product, 'azz')
            return product
        }, ...args)
    }
}
function fParser(s) {
    if (s.includes('$')) return tildaParser(s)
    return arraymaker(s)
}

function arraymaker(s) {
    let delimiter = /, ?|  /
    return parens(
        s
            .split(delimiter)
            .map((x) => parens(x, 'dq'))
            .join(', '),
        'braces'
    ).replace(/-/g, ' ')
}

function objectMerge(a, b) {
    if (isArray(a)) return a.concat(b)
    if (isObject(a) && isObject(b)) {
        return { ...a, ...b }
    }
}

function simpleMerge(a, b) {
    if (isArray(a)) return a.concat(b)
    if (isString(a)) a.trim() + '\n' + b.trim()
    if (isObject(a) && isObject(b)) return { ...a, ...b }
}

function mergeDicts(...dicts) {
    return Object.assign({}, ...dicts)
}
function prepareIterable(data, mode) {
    if (isObject(data)) {
        return Object[mode](data)
    }
    return data
}
function mergeInPlace(obj, data){
    if (isArray(obj)) {
        if (isArray(data)) {
            data.forEach((item) => obj.push(item))
        } else {
            obj.push(data)
        }
    }
    else if (isObject(obj)) {
        for (let [k,v] of prepareIterable(data, 'entries')) {
            obj[k] = v
        }
    }
    return obj
}

function merge(a, b) {
    if (isString(b) && isString(a)) return a.trim() + '\n' + b.trim()
    if (isObject(a) && isObject(b)) return { ...a, ...b }
    if (isArray(a)) return a.concat(b)
}

function exists(input) {
    if (input == null) return false
    if (isString(input)) return input.trim().length > 0
    if (isArray(input)) return input.length > 0
    if (isObject(input)) return Object.keys(input).length > 0
}

function IndexedClosure() {
    let index = 0
    return function (list) {
        return list[index++]
    }
}

function Increment() {
    let index = 0
    return () => index++
}

class Indexed {
    constructor(list = abcde, { mode = 'modulus', onChange = null } = {}) {
        this._product = null
        this.list = list
        this.mode = mode
        this.index = -1
        this.finished = false
        this.index = 0
        this.onChange = onChange
        this.tempValue = null
        this.init()
    }
    init(start) {
        // if (list) {
        // this.list = list
        // }
        this.index = start ? getStartingIndexFromValue(this.list, start) : 0
        this._product = this.list[this.index]
        return this._product
    }
    test() {
        console.log(foo, this.mode)
    }
    reset() {
        this.finished = false
        this._product = null
        this.init()
    }
    increment() {
        this.index += 1
        if (this.mode == 'modulus') {
            if (this.index == this.list.length) this.index = 0
            this.product = this.list[this.index]
        } else if (this.mode == 'once') {
            if (this.index == this.list.length) this.finished = true
            this.product = this.finished ? 'FINISHED' : this.list[this.index]
        }
        return this._product
    }
    setStartingValue(val) {
        this.index = this.list.indexOf(val)
    }
    set value(val) {
        let index = this.list.indexOf(val)
        if (index >= 0) {
            console.log('changing the index to', index)
            // this will be called anytime you do a this.actionmode.value = 'boo'
            this.index = index
        } else {
            this.tempValue = val
        }
    }

    setValue(val) {
        this.product = val
    }
    get value() {
        return this._product
        if (this.tempValue) {
            let temp = this.tempValue
            this.tempValue = null
            return temp
        }
    }

    decrement() {
        this.index -= 1
        if (this.mode == 'modulus') {
            if (this.index == -1) this.index = this.list.length - 1
            this.product = this.list[this.index]
        } else if (this.mode == 'once') {
            console.log('no decrement for once')
            return
        }
        return this._product
    }
    set product(val) {
        console.log(`changing from ${this._product} to ${val}`)
        this._product = val
    }
}

class Indexer {
    incrementOrDecrement(mode, list) {
        let name = list.toString()

        if (mode == 'decrement') {
            if (!(name in this.store && this.store[name] > 0)) return list[0]
            else this.store[name]--
        } else if (!this.modulus && this.store[name] == list.length - 1) {
            console.log('nope')
            return list[this.store[name]]
        } else if (mode == 'increment') {
            name in this.store ? this.store[name]++ : (this.store[name] = 0)
            if (this.store[name] == list.length - 1) {
                this.finished = true
                console.log('finished because store eual length')
            } else this.finished = false
        }

        let index = this.store[name] % list.length
        console.log(index)
        return list[index]
    }
    increment(list) {
        return this.incrementOrDecrement('increment', list)
    }

    decrement(list) {
        return this.incrementOrDecrement('decrement', list)
    }
}

function isEmpty(x) {
    if (x == null) return true
    if (isString(x)) return !x.trim()
    if (isArray(x)) return x.length == 0
    if (isObject(x)) return Object.keys(x).length == 0
}

function masdasdreplace(s, aa, flags = 'gm') {
    const map = new Map(aa)
    const regex = [...map.keys()].join('|')
    return replace(regex, (p) => map.get(p), s, flags)
}

function isJavascriptKeyword(s) {
    return s == 'null' || s == 'true' || s == 'false'
}

function hashCapture(s) {
    if (s.startsWith('#')) return s.slice(1)
    if (isNumber(s) || isJavascriptKeyword(s)) return s
    return parens(s, 'sq')
}

function dollarCapture(s, quoteStyle = 'sq') {
    if (isObject(s)) return '{}'
    if (isArray(s)) return '[]'
    if (isNumber(s) || isJavascriptKeyword(s)) return s
    if (s.startsWith("'") || s.endsWith('arser')) return s
    if (s.startsWith('$')) return s.slice(1)
    if (s.startsWith('self')) return s
    if (s.startsWith('this')) return s
    if (test('(?:-|\\s|\\\\)', s)) return parens(s, quoteStyle)
    if (test('^[a-zA-Z]', s) || s.length < 3) return parens(s, quoteStyle)
    return s
}

function Dict(input, cat = '') {
    if (isString(input)) {
        if (cat == 'escape') {
            input = rescapeOld(input)
        }
        input = getLineItems(input)
    }
    const store = {}
    for (let [a, b] of input) {
        store[a] = b
    }
    return store
}

function ziDELip(a, b) {
    const store = {}
    for (let [a, b] of input) {
        store[a] = b
    }
    return store
}

function includes(el, input) {
    if (isObject(input)) return Object.keys(input).includes(el)
    if (isArray(input)) return input.includes(el)
    if (isString(input)) return test(el, input)
}

function getLineItems(s) {
    const delimiter = search('  |, |\\t', s)
    if (delimiter) return findall('(\\S+) (.*?)(?=' + delimiter + '|$)', s, 'gm')
    return [search('(.*?) (.*)', s)]
}

function smartSplit(s) {
    const delimiter = search('  |, |\\t|\\n', s)
    return s.split(delimiter)
}

function getLineInfoMAPS(s) {
    const delimiter = search('  |, |\\t|\\n', s)
    let regex
    if (delimiter) {
        regex = '(?<=' + delimiter + '|^)' + '(\\S+) (.*?)(?=' + delimiter + '|$)'
    }
    else {
        regex = '(\\S+) (\\S+)'
    }
    return findall(regex, s, {flags: 'gm'})

    // return findall('(\\S+) (\\S+)', s).map(parser)
    return [search('(.*?) (.*)', s)]
}

function htmlIndent(s, n = 0) {
    if (n == 0) return s
    return s.replace(/^/gm, ' '.repeat(n))
}

function indent(s, n = 4, {mode = 'null'} = {}) {
    if (n === true) n = 4
    if (isObject(n)) { // WHEN WILL THIS EVER CAME UP!!!
        if (n.newlines) s = parens(s, '\n')
        if (n.tabWidth) n = n.tabWidth // what
        else {
            n = 4
        }
    }

    if (mode == 'replace') {
        return s.replace(/^ */gm, toSpaces(n))
    }

    if (mode == 'skipFirstLine') {
        return s.replace(/(?<=\n)/g, toSpaces(n))
    }

    if (mode == 'reset') {
        const currentIndentation = getIndent(s)
        // smth wrong here ... I believe
        return replace('^    ', ' '.repeat(n), s, 'gm')
    }

    if (mode == 'additive') {
        const current = getIndent(s)
        const delta = n - current
        if (delta < 0) {
            return replace('^' + ' '.repeat(Math.abs(delta)), '', s, 'gm')
        }
        return replace('^', ' '.repeat(n), s, 'gm')
    }

    if (n === 0) {
        let spaces = search('^ *', s) || '    '
        return replace('^' + spaces, '', s, 'gm')
    }
    if (isString(n)) {
        return replace('^', n, s)
    }
    if (n > 0) {
        // console.error( 'asdfiiiii' )
        // console.log( s )
        // console.error( s )
        return s.replace(/^/gm, ' '.repeat(n))
    } else {
        return replace('^' + ' '.repeat(-1 * n), '', s)
    }
}

function getFunctions(s, ...query) {
    if (isArray(query[0])) query = query[0].join('|')
    else query = query.join('|')
    return findall(
        '^(?:f|(?:async )?function|class|def) (?:' + query + ')\\b[^]*?(?:\\n}|(?=\\n\\w))',
        s,
        'gmi'
    )
}

function tildaParser(s) {
    const tildaItemRE = '\\$[a-zA-Z[\\].]+'
    s = s.replace(/['"]/g, '\\$&')
    s = replace(tildaItemRE, (x) => "' + " + x.slice(1) + " + '", s)
    console.log(s, foo)
    return parens(s, 'sq')
        .replace(/(?<!\\)'(?<!\\)' \+ | \+ (?<!\\)\'\'/gm, '')
        .replace(/\[\]\w+/g, (x) => " + '" + x.slice(2) + "'")
}

function cefParser(s) {
    let match
    if (test('^cef [a-zA-Z]+$', s))
        return s.replace('init', '__init__').replace('cef', 'def') + '(self)'
    else if ((match = search('^cef (\\w+) {$', s))) return '    def ' + match + '(self):'
    const dict = {
        cef: 'def',
        init: '__init__',
        '\\(0': '(self)',
        '\\(\\)': '(self)',
        '\\(': '(self, ',
        ak: '*args, **kwargs',
    }
    return frep(s, dict)
}

function isParserPY(s) {
    let items = s.split(' is ')
    if (['str', 'list', 'dict', 'int'].includes(items[1]))
        return 'type(' + items[0] + ") == '" + items[1] + "'"
    return items[0] + ' == ' + dollarCapture(items[1])
}

function recursiveDeepMerge(...objects) {
    let store = {}
    for (let obj of objects) {
        store = recursiveDeepMergeHandler(store, obj)
    }
    return store
}

function isPrimitive(s) {
    return isString(s) || isNumber(s)
}

function recursiveDeepMergeHandler(a, b) {
    if (isPrimitive(a)) {
        return [a].concat(b)
    }
    if (isArray(a)) {
        return a.concat(b)
    }
    if (isObject(b)) {
        const keys = Object.keys(b)
        for (let i = 0; i < keys.length; i++) {
            let key = keys[i]
            if (a[key]) a[key] = recursiveDeepMergeHandler(a[key], b[key])
            else a[key] = b[key]
        }
        return a
    }
    return a
}

function deepMerge(a, b, overwrite = false) {
    if (isUndefined(a)) a = {}
    if (isNumber(a) && isNumber(b)) {
        return a + b
    }
    if (isString(a) && isString(b)) {
        const delimiter = a.startsWith('\n') ? '' : '\n'
        return overwrite ? a.trimEnd() + delimiter + b.trimEnd() : a.trimEnd()
    }
    if (isArray(a) && isArray(b)) {
        return [...a, ...b]
    }
    if (isObject(b)) {
        const keys = Object.keys(b)
        for (let i = 0; i < keys.length; i++) {
            let key = keys[i]
            if (a[key]) a[key] = deepMerge(a[key], b[key], overwrite)
            else a[key] = b[key]
        }
        return a
    }
    return a
}

function toRegexReplacement(s) {
    let [regex, replacement] = split(s, 'once')
    regex = escapeRegex(regex)
    regex = srep(regex, {
        '--': '.*?',
        '-': ' ',
        '6': '^',
        '4': '$',
    })
    if (!replacement) replacement = ''
    return [regex, replacement]
}

function fxindall(re, s, flags = 'gm') {
    return Array.from(s.trim().matchAll(RegExp(re, flags))).map((el) => {
        const match = el.slice(1).filter((item) => item)
        return match.length == 1 ? match.toString() : match
    })
}

function addSpaces(line, cat = '') {
    let spaces
    try {
        spaces = line.match(/^ */m)[0]
    } catch {
        spaces = ''
    }
    if (cat == 'smart' && test('^ *(f|if|else|function).*?{$', line)) {
        return spaces + '    '
    }
    return spaces
}

function dklParser(s) {
    let [templateKeys, items] = split(s.split('  '), 'firstrest')
    const result = items.map((item) => {
        return createDictionaryEntry(null, templateKeys.split(' '), item.split(' '))
    })
    return parens(result.join(', '), '[ | ]').replace(/spc/g, ' ')
}

function createDictionaryEntry(parent, keys, vals) {
    let s = ''
    for (let i = 0; i < keys.length; i++) {
        s += parens(keys[i], 'sq') + ': ' + (vals[i] ? dollarCapture(vals[i]) : null) + ', '
    }
    const product = parent ? `${parens(parent, 'sq')} : { ${s}}` : `{ ${s}}`
    return product
}

function getBlock(key, s) {
    return search(key + '[^]+?(?=\\n\\w|$)', s)
}

function toSimpleTitle(s) {
    return capitalize(addQuestionMarkOrPeriod(spellcheck(s)))
}

function toTitle(s, ending = true) {
    const product = s
        .split(' ')
        .map((x, i) => {
            if (i == 0) return capitalize(x)
            if (ignoreWORDS.includes(x)) return x
            return capitalize(x)
        })
        .join(' ')
    return ending ? addQuestionMarkOrPeriod(product) : product
}

function allCaps(s) {
    return s.toUpperCase()
}

function capitalize(s, category = 'start') {
    if (!s) return ''
    if (category == 'title' || category == 'author') {
        const delimiter = !s.includes(' ') ? '-' : ' '
        const product = s
            .split(delimiter)
            .map((word, i) =>
                i == 0 ? capitalize(word) : ignoreWORDS.includes(word) ? word : capitalize(word)
            )
            .join(' ')
        if (category == 'title') return linebreak(product)
        return product
    }
    if (category == 'start') {
        return s.replace(/[a-z]/i, (x) => x.toUpperCase())
    }
    if (category == 'default') return s[0].toUpperCase() + s.slice(1)
    if (category == 'last') return s.slice(0, -1) + s.slice(-1).toUpperCase()
    if (category == 'caps') return s.toUpperCase()
    else {
        return capitalize(s, 'start')
    }
}

function generateExports(text, cat = 'vscode') {
    const matches = findall('^function (\\w+)', text, 'gm')
    return matches.reduce((acc, item) => {
        if (cat == 'vscode') return (acc += `exports.${item} = ${item}\n`)
        if (cat == 'require') return (acc += `module.exports.${item} = ${item}\n`)
    })
}

function isParser(a,b) {
    if (Object.keys(istypemap).includes(b)) {
        return `${istypemap[b]}(${a})`
    } else {
        return `${a} == ${dollarCapture(b)}`
    }
}


function isParserJS(s) {
    let [a, b] = s.split(' is ')
    if (['str', 'dict', 'list', 'arr'].includes(b)) {
        return `${isparsertypemap[b]}(${a})`
    } else {
        return `${a} == ${dollarCapture(b)}`
    }
}

function toStringDictionary(arr, o = {}) {
    const JOIN = o.join || ',\n'
    const INDENT = o.indent || 4
    const REGEX = o.regex || null
    const product = arr.reduce((acc, [a, b]) => {
        return (acc += ' '.repeat(INDENT) + parens(a, 'sq') + ': ' + dollarCapture(b) + JOIN)
    }, '')
    if (REGEX) {
        return regex + '\n' + product
    }
    return product
}

function ospj(...args) {
    return args.map((x) => (x.endsWith('/') ? x.slice(0, x.length - 1) : x)).join('/')
}

function forParserPY(s) {
    if (s.endsWith(':')) s = s.slice(0, -1)
    else if (s.endsWith(' {')) s = s.slice(0, -2)
    let product
    if (s.startsWith('range')) product = 'i in range(' + s.slice(5) + ')'
    if (s.startsWith('enum')) product = 'i,' + s.slice(4, -1) + ' in enumerate(' + s.slice(4) + ')'
    else if (s.includes(' in ')) product = s
    else if (s.endsWith('keys')) product = 'key in ' + s + '()'
    else if (s.endsWith('values')) product = 'item in ' + s + '()'
    else if (s.includes('in')) product = s.replace('in', ' in ')
    else if (s.startsWith('kv')) product = 'k,v in ' + s.slice(2) + '.items()'
    else if (s.endsWith('s')) product = s.slice(0, -1) + ' in ' + s
    else product = 'item in ' + s
    return 'for ' + product + ':'
}

function dictionaryReplace(s, dict, { flags = 'gm', escape = false, boundary = false } = {}) {
    let keys = Object.keys(dict)
    if (escape) {
        keys = keys.map(regexEscape)
        let values = Object.values(dict)
    }
    keys = '(?:' + keys.join('|') + ')'
    if (boundary) keys = '\\b' + keys + '(?=\\W)'
    return replace(
        keys,
        (x) => {
            return dict[x]
        },
        s
    )
}

function ssrep(s, dict, { flags = 'gm', end = '', start = '', cat = '' } = {}) {
    return replace(
        start + Regex(dict, cat) + end,
        (x) => {
            if (start) x = x.slice(start.length)
            if (end) x = x.slice(0, end.length * -1)
            return dict[x]
        },
        s
    )
}

function replaced(regex, dict, s) {
    return replace(
        regex,
        (x) => {
            return dict[x]
        },
        s
    )
}
function superReplace(s, dict) {
    return drep9002(s, dict)
}
function drep9001(s, ...dicts) {

    // merges the dicts and uses drep 9000
    // which is similar to grm, except it doesnt have the storage aspect.
    // drep9000 uses the regexwrapifyandsave
    // the d in all of the dreps stands for dictionaryReplace
    // datestamp uses drep as a good example
    dict = mergeDicts(...dicts)
    return drep9000(s, dict)
}

function drep(
    s,
    dict,
    {
        flags = null,
        sliceStart = '',
        sliceEnd = '',
        escape = false,
        mode = 'wb',
        start = '',
        end = '',
    } = {}
) {
    const regex = Regex2(dict, {
        mode,
        escape,
        start: start + sliceStart,
        end: sliceEnd + end,
    })
    if (isUndefined(flags)) flags = getRegexFlag(regex)

    let extra = ''
    if (end.endsWith('?')) {
        extra += end.slice(0, -1)
    }

    return replace(
        regex,
        (x) => {
            if (sliceStart) x = x.slice(sliceStart.length)
            if (sliceEnd) x = x.slice(0, sliceEnd.length * -1)
            if (x in dict) return dict[x]
            else if (extra && x.slice(0, -extra.length) in dict) {
                return dict[x.slice(0, -extra.length)]
            }
            else {
                console.log( 'asdfasdf' )
            }
        },
        s,
        flags
    )
}
function srep(s, dict, cat = '', flags = 'gm', extra = '') {
    return replace(extra + Regex(dict, cat), (x) => dict[x], s)
}

function sreplace(s, dict, flags = 'gm', cat = 'replacement', regex = '') {
    if (!regex) {
        regex = Object.keys(dict)
        if (regex.length == 0) throw 'error'
        regex = regex.join('|')
        if (cat == 'insertion') {
            regex = '(?<=' + regex + ')'
        }
    }
    return s.replace(RegExp(regex, flags), (x) => {
        return dict[x] || ''
    })
}

function dkeysParser(s) {
    let [templateKeys, items] = split(s, 'firstrest', '  ')
    const result = items.map((item) => {
        let [parentKey, childVals] = split(item)
        let dkeysDE = getSplitDelimiter(item)
        childVals = childVals.split(dkeysDE)
        return createDictionaryEntry(parentKey, templateKeys.split(' '), childVals)
    })
    product = parens(result.join(', '), '{ | }')
    product = product.replace(/-/g, ' ')
    return product
}

function capParser(s) {
    if (s.length == 1) return s.toUpperCase()
    if (s.startsWith('::')) return s.slice(2).toUpperCase().replace(/-/g, '_')
    if (s.startsWith('-')) return capitalize(s.slice(1))
    if (s.startsWith(':')) {
        return capitalize(s.slice(1))
    }
    if (s.endsWith('re')) {
        const ignore = ['capture', 'ignore', 'store', 'where']
        if (ignore.includes(s.toLowerCase())) return s
        return s.replace(/re$/, 'RE')
    } else {
        return capitalize(s)
    }
}

function generateDictionary(text) {
    const obj = {}
    const regex = /(\w+):\n([\w\W]+?)(?=\w+:|$)/g
    for (let matches of [...text.trim().matchAll(regex)]) {
        let [name, body] = matches.slice(1)
        let acc = {}
        acc['scope'] = 'javascript, python'
        acc['prefix'] = name
        acc['body'] = body.trim()
        obj[name] = acc
    }
    return obj
}

function dlistParser(s) {
    console.log('dlistparser')
    let [templateKeys, items] = split(getMapItems(s), 'firstrest')
    const result = items.map((item) => {
        console.log(item.split(' '))
        return createDictionaryEntry(
            null,
            templateKeys.split(' '),
            item.split(' ').map((x) => x.replace(/spc/g, ' '))
        )
    })
    return parens(result.join(', '), '[ | ]')
}

function singleItemParserPY(s) {
    if (s.startsWith('for')) return forParserPY(s)
}

function getRegexFlag(re) {
    if (test('[^$]', re)) {
        let startRegex = '\\(\\?<?[!:=](?:\\^\\|\\\\n|\\\\n\\|\\^)'
        let endRegex = '\\(\\?<?[!:=].*?\\$[|)]'
        return test(Regex2([startRegex, endRegex]), re) ? 'g': 'gm'
    }
    return 'g'
}
function matcher(re, s) {
    try {
        return s.match(RegExp(re)).slice()
    } catch {
        return null
    }
}

function searcher(re, s, flags = '') {
    const regex = isRegExp(re) ? re : RegExp(re, flags)
    let match = s.match(regex)
    // console.log( match )
    try {
        if (match.length == 2) return match[1]
        if (match.length > 1) return match.slice(1)
        return match[0]
    } catch {
        return ''
    }
}

function searcher99(re, s) {
    try {
        return s.match(RegExp(re))[0]
    } catch {
        return ''
    }
}

function search(re, s, {slice = true, flags = ''} = {}) {
    const regex = isRegExp(re) ? re : RegExp(re, flags)
    const match = s.match(regex)
    if (match) {
        const items = match.slice(0)
        if (slice) {
            if (items.length == 2) return items[1]
            if (items.length == 1) return items[0]
            return items.slice(1)
        }
        else {
            return items
        }
    }
    else {
        return null
    }
}
function searchOLD(re, s, n = null) {
    let item = s.match(RegExp(re))
    if (!n) {
        if (!item) return null
        item = item.filter((x) => x)
        if (item.length == 2) return item[1]
        if (item.length > 1) return item.slice(1)
        return item[0]
    } else {
        if (n === 0) {
            return item
        }
        if (!item) return Array(n).fill(null)
        if (item.length == 1) return [item[0], null]
        let store = item.slice(1)
        while (store.length < n) {
            store.push(null)
        }
        return store
    }
}

function findIndexes(re, s) {
    let store = []
    let regex = new RegExp(re, 'gmi')
    while ((match = regex.exec(s)) !== null) {
        store.push(match.index)
    }
    return store.map(indexToCursorObject)
}

function parseNumber(s) {
    return isNumber(s) ? parseInt(s) : s
}

function smartFindall(re, s, flags = 'gm') {
    let regex = new RegExp(re, flags)
    let match
    const store = []
    while ((match = regex.exec(s)) !== null) {
        let product = match.slice(1).filter((x) => x)
        if (product.length == 1) product = product[0]
        store.push(product)
    }
    return store
}

function filteredFindall(re, s, flags = 'gm') {
    let regex = new RegExp(re, flags)
    let match
    const store = []
    while ((match = regex.exec(s)) !== null) {
        store.push(match.slice(1).filter((x) => x))
    }
    return store
}

function prepareRegex(re, flags = null) {
    if (isRegExp(re)) {
        return re
    }
    else {
        if (flags == null) flags = getRegexFlag(re)
        return new RegExp(re, flags)
    }
}
function findall(re, s, { flags = null, sliced = true, filtered = false } = {}) {
    const store = []
    const regex = prepareRegex(re, flags)
    // const filtered = hasSeparatedCaptureGroups(regex.toString())
    const parenCount = countParentheses(regex.toString())
    s = s.trim()
    let match

    if (parenCount === 0) return s.match(regex)

    while ((match = regex.exec(s)) !== null) {
        // console.log( match )
        if (sliced) match = match.slice(1)
        const items = filtered ? match.filter(ph) : match
        store.push(items)
    }

    return parenCount === 1 ? store.flat() : store
}

function findall99(re, s, flags = 'gm', filtered = false) {
    const regex = new RegExp(re, flags)
    if (countParentheses(re) === 0) return s.match(regex)
    let match
    const store = []
    while ((match = regex.exec(s)) !== null) {
        if (filtered) {
            store.push(...match.slice(1).filter((x) => x))
        } else {
            store.push(match.slice(1))
        }
    }
    return store
}

function finalReplaceProse(text) {
    const regex = '(nlist|blist|placeholder)([^]+?)(?=\\n\\n)'
    function parser(_, k, s) {
        if (k == 'nlist' || k == 'blist') return listParser(k, s)
    }
    text = replace(regex, parser, text)
    return replace(
        '(:[a-z])|(?<=^|\\n|\\. )([a-z])|([a-z])$',
        (_, x, y, z) => {
            if (x) return x.slice(1).toUpperCase()
            if (y) return y.toUpperCase()
            if (z) return z + '.'
        },
        text
    )
}

function freplace(text, map) {
    if (isEmpty(map)) return text
    function parser(xargs) {
        for (let [k, v] of Object.entries(map)) {
            if (test(k, xargs) || test(replaceLookAround(k), xargs)) {
                if (xargs.startsWith('cef')) {
                }
                return isString(v) ? v : v(xargs)
            }
        }
        throw 'error at freplace'
    }
    return replace(Regexer.create(map, 'each'), parser, text)
}

function multipleReplace(s, ...args) {
    for (let item of args) {
        if (isObject(item)) {
            if (len(item) == 1) {
                let [re, rep] = Object.entries(item)[0]
                s = replace(re, rep, s)
            } else s = frep(s, item)
        }
    }
    return s
}

function singleItemParserJS(s) {
    if (s.startsWith('p ')) return `print('${s.slice(2)}: ' + ${s.slice(2)})`
    if (s.startsWith('cl ')) return `console.log(${s})`
    if (s.startsWith('clhi ')) return `console.log('hi')`
    if (s.startsWith('sw')) return `startsWith("${s.slice(3)}")`
    if (s.startsWith('ew')) return `endsWith("${s.slice(3)}")`
    if (s.startsWith('for')) return forParserJS()
    if (s.startsWith('inc')) return `includes(${dollarCapture(s.slice(4))})`
    G
}

function datestamp(mode = 'm-d-y', ...args) {
    if (mode == Number) {
        return Date.now()
    }
    const modemap = {
        time: '%h:%m%p',
        mdy: '%M/%d/%Y',
        'm-d-y': '%M-%d-%Y',
        full: '%month %day, %year: %h:%m:%s %p',
    }

    mode = modemap[mode] || mode

    let date
    let dayName
    let monthName
    let hours, ampm, minutes, seconds
    let { month, year } = getDateInfo()
    let n = args[0] || ''

    if (args.length <= 1) {
        if (isNumber(n) && String(number).length <= 10) {
            n *= 1000
            date = new Date(n)
        } else {
            date = new Date()
        }
        dayName = days[date.getDay()]
        monthName = months[date.getMonth()]
        monthNumber = padder(date.getMonth() + 1)
        dayNumber = padder(date.getDate())
        year = String(date.getFullYear())
        ;[hours, ampm, minutes, seconds] = getHoursAndAmpm(date)
    } else {
        // this kind of works, but not really.
        ;[monthNumber, dayNumber] = args.map(padder)
        let temp = monthNumber
        if (monthNumber != month) {
            if (month < 6) {
                if (month + 12 > monthNumber) {
                    year -= 1
                }
            }
        }
    }

    const dict = {
        time: hours + ':' + minutes,
        h: hours,
        m: minutes,
        s: seconds,
        D: dayNumber,
        d: dayNumber,
        // day: dayNumber + ordinal(dayNumber),
        M: monthNumber,
        Y: String(year),
        y: String(year),
        p: ampm,
        month: monthName,
        day: dayName,
        date: monthNumber + '-' + dayNumber + '-' + String(year).slice(-2),
        ordinal: dayNumber + ordinal(dayNumber),
    }
    // console.log( mode )
    product = drep(mode, dict, { mode: 'wb', sliceStart: '%' })
    return product

    const zones = { newyork: 'America/New_York' }
    const options = {
        hour12: true,
        month: '2-digit',
        day: 'numeric',
        minute: 'numeric',
        second: '2-digit',
        dateStyle: 'long',
        timeZone: zones[place],
        timeZoneName: 'long',
    }
    return new Date().toLocaleTimeString('en-US', options)
}

function isEmptyString(s) {
    return s === ''
}

function lowerCase(s) {
    return s[0].toLowerCase() + s.slice(1)
}

function forParserJS(s) {
    const endparen = ') {'
    const item = lowerCase(s).slice(0, -2)

    if (item.includes('range')) {
        let a = 'i'
        let [el, b] = search('(\\w+)range(\\w+)', item)
        return 'for (let ' + a + ' = ' + el + '; ' + a + ' < ' + b + '' + '; ' + a + '++' + endparen
    }
    if (item.includes('asdfhrnum')) {
        let a = 'i'
        let b = item.slice(5) + '.length'
        return (
            'for (let ' + a + ' = ' + '0' + '; ' + a + ' < ' + b + '' + '; ' + a + '++' + endparen
        )
    }
    if (item.includes('arnum')) {
        let [a, b] = item.split('arnum')
        b += '.length'
        if (isEmptyString(a)) a = 'i'
        return (
            'for (let ' + a + ' = ' + '0' + '; ' + a + ' < ' + b + '' + '; ' + a + '++' + endparen
        )
    }
    if (item.includes('inum')) {
        extra = ''
        let start = 0
        let [a, b] = item.split('inum')
        if (test('\\d$', a)) {
            ;[a, start] = a.split(/(?=\d)/)
        }
        if (test('\\d$', b)) {
            ;[b, extra] = b.split('-')
        }
        return (
            'for (let ' +
            a +
            ' = ' +
            start +
            '; ' +
            a +
            ' < ' +
            b +
            extra +
            '; ' +
            a +
            '++' +
            endparen
        )
    }
    if (item.includes('pp')) {
        let [a, b] = item.split('pp')
        return 'for (let ' + a + ' = 0; ' + a + ' < ' + b + '; ' + a + '++' + endparen
    }
    if (item.startsWith('enum'))
        return (
            'for (let i = 0; i < ' +
            item.slice(4) +
            '.length; i++' +
            endparen +
            '\n        let item' +
            ' = ' +
            item.slice(4) +
            '[i]' +
            '\n'
        )
    if (item.startsWith('anum'))
        return 'for (let i = 0; i < ' + item.slice(4) + '.length; i++' + endparen
    if (item.startsWith('kv'))
        return 'for (let [k, v] of Object.entries(' + item.slice(2) + ')' + endparen
    if (item.startsWith('k,v')) return 'for (let [k, v] of ' + item.slice(3) + endparen
    if (item.startsWith('ab')) return 'for (let [a, b] of ' + item.slice(2) + endparen
    if (item.includes(',')) {
        let [a, b] = item.split('in')
        a = parens(a.replace(/,/g, ', '), 'braces')
        return 'for (let ' + a + ' of ' + b + endparen
    }
    if (item.endsWith('s')) return 'for (let ' + item.slice(0, -1) + ' of ' + item + endparen
    if (item.includes('in')) {
        console.log(item)
        return 'for (let ' + item.replace(/in/, ' of ') + endparen
    }

    return 'for (let item of ' + item + endparen
    throw 'error in jsforparser'
}

function getLineInfoEDITS(s) {
    const commands = [
        'upd', //updelete
        'upe', //upedit
        'upf', //upfunction
        'upb', //upblock
        'ditto', //ditto
        'upt', // uptype
        'le', // lineedit
    ]
    const match = search(regex, s)
    return match ? { cat: match[0], content: match[1] } : null

    if ((match = searcher('\\b(upd)(\\d*)', s))) {
        return { cat: match[0], match: match[1] }
    }
    if ((match = search('(\\bup(?:al|gr|f|rc)\\b|(?:block)?ditto(?= ))(?!ated)(.+)', s))) {
        return { cat: match[0], match: match[1].trimStart() }
    }

    if ((match = search('uprc (\\w+)', s))) {
        return { cat: 'rc', name: match }
    }

    if ((match = search('del[fb]', s))) {
        return { cat: match }
    }
    if (test('\\bxp(?!p)', s)) {
        let replacement = search('([^\\s:{}]{4,}).*?xp', s)
        if (replacement && test('xp|if|while|else|while|function', replacement)) replacement = null
        let store = null
        if ((match = search('(?<=xp)[a-z]', s))) store = match[0]
        return { cat: 'xp', replacement: replacement, store }
    }
    const lineEditRE = '((?<=^ *)iddd|(?<=\\b(?:up))(?:(?!d)[a-z-]+)|\\b(?:le|lea|xg))(\\d*) (.*)'
    let [a, n, b] = search(lineEditRE, s, 3)
    if (!a || a.startsWith('date')) return
    let cat
    if (a == 'd' || a == 'r' || a == 'le') return { cat: a, dict: Dict(b, 'escape') }
    if (a == 'del') return { cat: a }
    if (test('^(?:w|c|f|elif|if|else|for|m|p|lea|t)', a)) {
        if (n) {
            return { cat: a, n: n, content: b }
        }
        return { cat: a, content: b }
    }
    if (test('^xg|^m', a)) {
        if (n) n = parseInt(n)
        return { cat, n, items: b.split(' ') }
    }
    if (a == 'e') {
        let [regex, replacement] = toRegexReplacement(b)
    }
    let [regex, replacement] = toRegexReplacement(b)
    return { cat: a, regex, replacement }
}

function listParserNew(text) {
    console.log(text)

    let regex = '(nlist|blist|casual) ?(.*?)(?: tag=(\\w+))?\\n([^]+?)(?:#end)?$'
    let [mode, title, tag, s] = text.match(RegExp(regex)).slice(1)
    mode = mode == 'nlist' ? 'numbers' : 'bullets'
    function zxcv() {
        let [s, mode, title, tag] = mreplace3(
            text,
            {
                '#end$': {
                    replace: '',
                },
                '^\\s*(nlist|blist) ?(.*?)(?: tag=(\\w+))?\\n': {
                    store: (a, b, c) => [a == 'nlist' ? 'numbers' : 'bullets', b, c],
                    replace: '',
                },
            },
            { flags: 'g', argMode: true }
        )
    }

    return listed(s, { mode, title, tag })
}

function lisstParser(k, s) {
    const options = { bullet: '* ', indent: '  ', decorator: '----' }
    const items = split(s, 'once', '\n', 0)
    let [tag, title] = matchReplace('tag=(\\w+)', items[0])
    title = title.trim()
    if (tag) tag = capitalize(tag)
    const indentation = title ? options.indent : ''
    console.log(k)
    const transformer =
        k == 'blist'
            ? (x) => indentation + options.bullet + capitalize(x)
            : (x, i) => indentation + tag + ' ' + enumerated(capitalize(x), i)
    const body = items[1].split('\n').map(transformer).join('\n')
    if (title) title = toTitle(title) + '\n\n'
    return '\n' + title + body
}

function matchReplace(re, replacement, s, flags = 'gm') {
    const store = []

    const regex = isRegExp(re) ? re : RegExp(re,flags)
    const p = countParentheses(re.toString())

    function parser(...args) {
        if (p == 0) store.push(args[0])
        else if (p == 1) store.push(args[1])
        else store.push(args.slice(1))
        return isString(replacement) ? replacement : replacement(...args)
    }

    s = s.replace(regex, parser)
    return [s, store]
}

function matchReplaceNotUsed(re, replacement, s, flags = 'gm', storeParser = null, deleter = false) {
    const deleterRE = '.*?dn.*\\n|\\w+?dwl|\\S+?dsl|[^]*?(?:delfun|delf)'
    let p = countParentheses(re)
    const store = new Storage(storeParser)
    if (deleter) re += '|' + deleterRE
    function parser(_, a, b, c) {
        if (test('dwl|dw|dn|dsl', _) && deleter) return ''
        if (p == 0) store.append(_)
        if (p == 1) store.append(a)
        if (p == 2) store.setItem(a, b)
        if (p == 3) store.append([a, b, c])
        return isString(replacement) ? replacement : replacement(_, a, b, c)
    }
    s = s.replace(RegExp(re, flags), parser)
    return [s, store.value]
}

function difference(a, b) {
    return a.filter((x) => !b.includes(x))
}

function addStoreStatement(s, lang = 'js') {
    if (test('^class', s)) return s
    let storageType = search('store.(s \\+=|add|push|append|\\[)', s)
    if (storageType) {
        const constKeyword = lang == 'js' ? 'const ' : ''
        storageType = '\n    ' + constKeyword + 'store = ' + jspymap[lang][storageType]
        return replaceFirstLine(s, (x) => x + storageType)
    }
    return s
}

function letConstParser(s) {
    s = s.trim()
    if (!s.startsWith('function')) return s
    let matches = findall('(?<=^ *)(\\[.*?\\]|\\w+) \\+?=', s, 'gm', true)
    const lets = []
    if (isEmpty(matches)) return s
    matches = matches
        .map((x) => {
            if (x.startsWith('[')) {
                let items = x.slice(1, -1).split(/, ?/)
                lets.push(...items)
                return items
            }
            return x
        })
        .flat()
    const secondaryParamActionRE = '(?<=^|, ?|\\()[a-zA-Z]+'
    let params = getParams(s) || []
    if (params) params = params.map((x) => findall(secondaryParamActionRE, x)).flat()

    const items = difference(matches, params).filter((x) => x)
    const tally = new Tally(items)
    tally.forEach(([el, count]) => {
        if (count > 1) lets.push(el)
        else {
            console.log('letconstparser: replacing' + el)
            s = replace(el + '(?= =)', 'const ' + el, s, '')
        }
    })
    s = createLetString(setify(lets), s)
    return s
}

function createLetString(lets, s) {
    const letString = lets.length > 0 ? 'let ' + lets.join(', ') : ''
    if (letString) return replace('^.+', (s) => s + '\n    ' + letString, s, '')
    return s
}

function generateDependencies(text, helperFiles = ['helpers.js', 'setup.js']) {
    const store = helperFiles.reduce((acc, file, idx) => {
        acc[file] = findall('^exports\\.(\\w+)', read(__dirname + '/' + file), 'gm')
        return acc
    }, {})

    const dependencies = findall('(?:^function )?([\\w+.$]+)\\(', text, 'gm').filter((item) => {
        if (/function|\.|require|print/.test(item)) return false
        return true
    })
    const nativeDependencies = setify(
        findall('(path)\\.|(fs)\\.|(placerholder)\\.|(opn)', text, 'g')
    )
        .map((item) => `const ${item} = require('${item}')\n`)
        .join('')
    const filteredDependencies = Object.entries(store).reduce((acc, [key, val]) => {
        let filtered = setify(dependencies.filter((el) => val.includes(el)))
        if (filtered.length === 0) return acc
        return (acc += `const {${filtered.join(', ')}} = require('./${key}')\n`)
    }, '')
    return nativeDependencies + filteredDependencies
}

function smartSearch(query, s, { start = true, flags = '' } = {}) {
    let regex
    if (isArray(query)) {
        regex = Regex(query)
        start ? (regex = '^' + regex) : regex
    }
    try {
        return s.match(RegExp(regex, flags))[0]
    } catch {
        return ''
    }
}

function getParent(k, v) {
    let name, lang
    if (k.endsWith('map')) name = 'maps'
    else if (k.startsWith('e')) name = 'edits'
    else if ((name = smartSearch(['def', 'function', 'class'], k, { start: true }))) {
        if (name == 'class') {
            let cef = search('cef', v)
            lang = cef ? 'py' : 'js'
        } else {
            lang = name == 'def' ? 'py' : 'js'
        }
        return [lang, name]
    }
    return name ? name : ''
}

function xAccumulate(text, map = packmap) {
    const items = findall(accumulateRE, text.trim())
    const store = new Store()
    const output = new Store()
    for (let [k, v] of items) {
        let KT = parent.kt
        let MT = parent.parser
        if (parent.split) {
            ;[location, content] = split(v, 'once')
            store.addDictionary(k, location, MT(content), parent.join, parent.indent)
        } else {
            store.add(k, MT(content))
        }
    }
    function action(k, v) {
        if (k == 'e' || k == 'r' || k == 'ev' || k == 'ec') {
            output.set(k, v)
            return
        } else {
            let content = copy(v)
            let parent = getParent(k, v)
            let join = parent.join
            if (parent.filter) content = content.filter(parent.filter)
            if (parent.mt) content = content.map(parent.mt)
            if (parent.join)
                content = parent.join.slice(1) + content.join(parent.join) + parent.join
            if (parent.indent) content = indent(content, parent.indent)
            if (parent.key || parent.kt) {
                output.add(parent.name, parent.key || parent.kt(k), content)
            } else {
                console.log(v)
            }
        }
    }
    for (let [k, v] of Object.entries(store.value)) {
        if (map[k] && map[k].mi) {
            v = map[k].parser(v)
            console.log(v)
            map[k].mi.forEach((item) => action(item, v))
            return
        } else {
            action(k, v)
        }
    }
    return output.value
}

function fdndndnoo() {
    const store = new Storage()
    for (let [k, v] of Object.entries(map)) {
        if (!input[k] || input[k].length == 0) continue
        let parser = v.mt || CM[v.parent]['parser']
        let content = parser ? input[k].map(parser) : input[k]
        if (isArray(content[0])) content = flatten(content)
        if (k == 'reddit' || k == 'print' || k == 'bsdsd') {
            store.setItem[k] = content
        } else if (v.mi) {
            for (const item of v.mi) {
                if (item.filter) {
                    content = content.filter(item.filter)
                }
                if (item.mt) {
                    content = content.map(item.mt)
                }
                if (item.toString) {
                    content = content.join(item.join || '\n')
                }
                if (item.dictionary) {
                    console.log
                    store.addDictionary(
                        item.parent || v.parent,
                        item.regex,
                        content,
                        item.join,
                        item.indent
                    )
                } else {
                    store.setItem(item.parent || v.parent, content)
                }
            }
        } else {
            store.addDictionary(
                v.parent || CM[v.parent]['parent'],
                v.regex || CM[v.parent]['regex'] || CM[v.parent]['kt'](k),
                content,
                v.join || CM[v.parent]['join'] || ',\n',
                v.indent || CM[v.parent]['indent'] || 4
            )
        }
    }
    console.log(stringify(store.value))
    return store.value
}

function getExtension(s) {
    return search('\\.(\\w+)$', s)
}
function getLang(s) {
    const jswords = []
    const pywords = []
    // console.log( s )
    let lang = searcher('^f|(?<!:)//|#|js|py|const|let|def|function|pc|cef|__init__|constructor', s, 'm')
    if (['def', 'cef', '__init__'].includes(lang)) return 'py'
    if (['f', '//', 'function', 'js', 'constructor'].includes(lang)) return 'js'
    return 'js'
}

function simplecheck(s) {
    return betterText(pedit(s))
}


function pedit(text) {
    text = deleternew('^//.*|.*?dn(?: *$|\\b.+)\\n?|\\w+?dwl|\\S+?dsl|(?<=  ).*?dts', text)
    text = LineEdit.format(text)
    text = replace('\\b(?:le|lea|up\\w{1,3})\\b.*', '', text) // postfix for lineedit
    text = fixRedditTags(text)
    text = drep(text, accumulateprefixdict, { start: '(?<=^3?)', end: '\\b' })
    text = globalDocumentEdit(text) // takes care of numbers and what not.
    return text
}

function a2pedit(text) {
    let store
    f[(text, store)] = adf((_, a, b) => b, text, 'gm', null, true)
    if (exists(store)) updateStorage('snippets', store)
    text = LineEdit.format(text)
    return text
}

function Fix(lang) {
    return function (text) {
        return betterText(text, lang)
    }
}

function prefixvue(s) {
    return s.replace(/(?<=^.*?)\w+(?= {)/, (x) => x + '()')
}

function lambdaAction(item = null, args = []) {
    console.log(item)
    console.log(args)
    if (!item) return ''
    return isFunction(item) ? item(...args) : item
}

function lambdaReplace(replacement) {
    // console.blue( replacement )
    return (...args) => (isString(replacement) ? replacement : replacement(...args))
}

function replaceFirstElement(s, replacement, mode = 'element') {
    const regex = firstelementmap[mode]
    return s.replace(regex, lambdaReplace(replacement))
}

function replaceFirstWord(s, replacement, mode = 'word') {
    return s.replace(regex, lambdaReplace(replacement))
}

function replaceLastLine(s, replacement) {
    return s.replace(/.*$/, lambdaReplace(replacement))
}

function replaceFirstLine(s, replacement) {
    return s.replace(/^.+/, (x) => {
        return isString(replacement) ? replacement : replacement(x)
    })
}

function addFunctionParentheses(s) {
    return s.replace(/(?<=^.*?)[a-zA-Z]+(?= {)/, (x) => x + '()')
}
function fixVueKeep(text) {
    let keyup = ''
    if (!test('^[-a-zA-Z\\d]+(?:\\(| {)', text)) {
        console.log('repalcing osmething')
        text = replace(
            '^(\\S+) (.+)',
            (_, a, b) => {
                return b + ' // ' + a
            },
            text,
            ''
        )
    }
    text = addFunctionParentheses(text)
    text = 'function ' + text
    checked = checkjs(betterText(text), 'js')
    return checked
}

function vueComputedParser(s) {
    let [name, body] = split(s, ' ')
    name = 'computed' + capitalize(name)
    if (!s.includes('\n')) return name + '() {\n    ' + betterText(body, 'js') + '\n}'
    else {
        return name + '()' + betterText(body, 'js')
    }
}

function FixVue(text) {
    text = replace('^\\w+\\.\\S+', '', text)
    if (!text.includes(') {')) {
        text = replace('(?<=^.*?)(?= {)', '()', text.trim(), '')
    }
    text = 'function ' + text
    checked = check(betterText(text), (html = false))
    return checked.slice(9)
}

function editParser(s) {
    s = trimBlock(s)
    let mode, lineNumber, val
    let items = split(s, 'ds').map((item) => {
        console.log(item)
        console.log('adsf')
        let [[a, b], second] = split(item, [(s) => split(s, 'number-letter')])
        console.log(a, b, second)
        if (isNumber(a)) lineNumber = a
        else if (isNumber(b)) lineNumber = b
        if (isString(a)) mode = a
        else if (isString(b)) mode = b
        if (mode == 'e') val = lineToDictionary(second)

        let n = lineNumber
        return { mode, n, val }
    })

    return items
    console.log(s)
    const checked = check(betterText('function a(){' + s + '}'))
    return checked.slice(13, -1)
}

function fixjs(code) {
    if (!test('^function|^class', code)) {
        code = 'function ' + code
    }
    if (!test('^.*?\\(', code)) {
        code = addFunctionParentheses(code)
    }
    try {
        code = betterText(code, 'js')
        return checkjs(code)
    } catch (e) {
        throw new CodeError(e, code)
    }
}

function FixJS(text) {
    return check(betterText(text, 'js'), (html = false))
}

function fixpy(code) {
    if (!code.startsWith('def')) code = 'def ' + code
    code = addFunctionParentheses(code)
    return betterText(code, 'py')
}

function FixPY(text) {
    return betterText(text, 'py')
}

function firstTwoLines(s) {
    return search('(?:.*\\n){2}', s)
}
// get this finished ... and then go for a run. 
// const CAPREGEX = Regex(capmap)
const CAPREGEX = /(?:(?<=\b(?:class |data|active|current|config|update|create|construct|to|has|generate|has|save|is|set|get|append|initial|final))[a-z](?=\w\w\w)|(?<=[a-z])(?:(?<! )index|(?<!in|\bd|\.)line|file|array|object|string|number|action|effect|handler|(?<!ge)text|function|info|(?<!\.)parser)|::[a-zA-Z-]+|-[a-z]{2,}|(?<!\(\?):[a-z])/ 

function testParser(s) {
    lang = getLang(s)
    text = betterText(s, lang)
    return [text, lang]
}
function betterText(text, lang = null) {
    if (!lang) {
        lang = search('def|function|cef', text)
        lang = ['def', 'cef'].includes(lang) ? 'py' : 'js'
    }

    let [
        WBMAP,
        NBMAP,
        MISCMAP,
        forParser,
        isParser,
        singleItemParser,
        special,
        ispy,
        isjs,
        printStatementParser,
    ] = getParsers(lang)

    const spacers = {
        fp: fpParser,
        lab: labParser,
        for: forParser,
        g: fasterFunction,
        f: fParser,
        dkeys: dkeysParser,
        p: printStatementParser,
        cl: printStatementParser,
        dobj: dobjParser,
        dline: dlineParser,
        do: doParser,
        nsdo: nsdoParser,
        rs: rsParser,
        rf: rfParser,
        rr: rrParser,
        rt: rtParser,
        ray: rayParser,

        proto: '%1.prototype.%2 = function(%3)',
        rr:    'replace(%1, %2, s)',
        rs:    'search(%1, s)',
        rf:    'findall(%1, s)',
        rt:    'test(%1, s)',
        ray:   'raise Exception(%1)',
        cl:    'console.log(%1)',
    }
    
    // const nospacers = {
        // '%': (a, b) => a + '(' + b + ')',
    // }
    // const nospaceRE = '\\S+?' + Regex(nospacers) + '\\S+'
    const spaceRE = '\\b' + Regex(spacers) + ' \\w.*?(?: f\\b|$)'

    function spaceParser(s) {
        let dict = spacers
        let [key, item] = split(s, 'once')
        if (item.endsWith(' f')) item = item.slice(0, -2)
        return dict[key](item)
    }
    function nospaceParser(s) {
        let key = search(Regex(nospacers), s)
        let items = s.split(key)
        const action = nospacers[key]
        return action(...items)
    }
    function dotParser(s) {
        let ignore = false
        if (test('(?:prototype|self|\\.\\.\\.)', s, 'i')) return s
        function parser(a, b) {
            if (!ignore && test('this', a)) {
                ignore = true
                return a + '.' + b
            }
            if (test('^fe|map|red|filter', b)) return a + '.' + methodmap[b]
            if (test('trim|lower|upper', b)) {
                if (b.includes('()')) return a + '.' + b
                return a + '.' + b + '()'
            }
            if (
                ['value', 'js', 'py', 'css', 'html', 'vue'].includes(b) ||
                test('add', b) ||
                test('console|Object|Array', a) ||
                a == 'console' ||
                a == 'Object'
            )
                return a + '.' + b
            if (b == 'value' || test('add', b) || a == 'console') return a + '.' + b
            if (b == 'log') return "console.log('" + a + ": ' + " + a + ')'
            if (b == 'pr') return "print('" + a + ": '" + a + ')'
            if (b == 'last') return a + '[' + a + '.length - 1]'
            if (b == 'len' && isjs) return a + '.length'
            if (b == 'values' && isjs) return 'Object.values(' + a + ')'
            if (b == 'len' && ispy) return 'len(' + a + ')'
            let match
            if ((match = search('^sw|ew|inc', b))) {
                let [method, item] = split(b, match.length)
                item = item.trim()
                item = srep(item, wsmap)
                if (item.includes('|')) {
                    let start = method == 'sw' ? '^' : ''
                    let end = method == 'ew' ? '$' : ''
                    return `test('${start}(?:${item})${end}', ${a})`
                } else {
                    let bigmap = ispy ? pybigmap : jsbigmap
                    return a + '.' + bigmap[method] + '(' + dollarCapture(item) + ')'
                }
            }
            if (abmap[b]) return abmap[b].a + a + abmap[b].b
            return a + "['" + b + "']"
        }
        let [store, items] = split(s, 'firstrest', /(?<!sw|ew|inc)\./)
        for (let i = 0; i < items.length; i++) {
            store = parser(store, items[i])
        }
        return store
    }
    const EXTRA = {
        [isRE]: isParser,
        [CAPREGEX]: capParser,
    }
    const FMAP = {
        [spaceRE]: spaceParser,
        // [dotRE]: dotParser,
        // [nospaceRE]: nospaceParser,
    }
    // const nineZeroDict = {
        // '(?<=[a-zA-Z])9': '(',
        // '(?<!\\[| =)0(?=0| {|\\.|\\[|,|placeholderabc)': ')',
    // }
    text = quickSnippet(text)
    WBMAP = merge(WBMAP, getStorage('quicksnippet', {}))
    // text = frep(text, nineZeroDict)
    text = ireplace(text, thisa, NBMAP, WBMAP, MISCMAP)
    text = frep(text, EXTRA)
    text = frep(text, { ...FMAP, ...special })
    text = letConstParser(text)
    text = addStoreStatement(text, ispy ? 'py' : 'js')
    return text
}
class xStore {
    get value() {
        return this.store
    }
    addDictionary(parent, regex, product, join, indent) {
        const STARTING_JOIN = join.slice(1)
        if (!this.store[parent]) this.store[parent] = {}
        if (!this.store[parent][regex]) this.store[parent][regex] = ''
        let stuff = ''
        if (isArray(product)) {
            stuff =
                STARTING_JOIN +
                product.reduce((acc, item) => {
                    return isArray(item)
                        ? (acc += ' '.repeat(indent) + item[0] + ': ' + item[1] + join)
                        : (acc += ' '.repeat(indent) + item + join)
                }, '')
        } else {
            stuff = STARTING_JOIN + ' '.repeat(indent) + product + join
        }
        this.store[parent][regex] = stuff
    }
    constructor() {
        this.store = {}
    }
    add(...args) {
        const length = args.length
        if (length == 2 || args[2] == 'fn') this.addList(...args)
        else this.addDict(...args)
    }
    addList(key, val, parser = null) {
        if (!this.store[key]) this.store[key] = []
        this.store[key] = this.store[key].concat(parser ? parser(val) : val)
    }
    addDict(parent, key, val, parser = null) {
        if (!this.store[parent]) this.store[parent] = {}
        this.store[parent][key] = parser ? parser(val) : val
    }
    set(k, v) {
        this.store[k] = v
    }
}
class Split {
    static nb(s) {
        return s.split(/(?<=[a-zA-Z])(?=[^\sa-zA-Z])/g)
    }
}
class Reasdgexer {
    static captureBetween(start, end, inclusive = true) {
        return inclusive ? start + '[^]+?' + end : `(?<=${a})[^]+?(?=${b})`
    }
    static accumulate(...items) {
        if (items.length == 0) items = '(\\S+)'
        else items = Regexer.create(items, 'nb', true)
        return '(?<=^|\\n)' + items + '(.*?(?:{\\n[^]+?(?=\\n\\w)|[^{]*(?=\\n\\w|$)))'
    }
    static create(input, cat = 'nb', capture = false) {
        if (isObject(input)) input = Object.keys(input)
        if (cat == 'each') return input.map((x) => '(' + x + ')').join('|')
        if (cat == 'test') return input.map((x) => x).join('|')
        if (cat == 'accumulate') {
            let items
            if (!input) items = '(\\S+)'
            else items = '(' + input.split(' ').join('|') + ')'
            return '(?<=^|\\n)' + items + '(.*?(?:{\\n[^]+?(?=\\n\\w)|[^{]*(?=\\n|$)))'
        }
        input = input.join('|')
        if (cat == 'nb') input = escapeRegex(input)
        if (capture) input = '(' + input + ')'
        else {
            input = '(?:' + input + ')'
        }
        if (cat == 'bb') return '\\' + input
        if (cat == 'fb') return input + '\\b'
        if (cat == 'wb') return '\\b' + input + '\\b'
        if (cat == 'nb') return input
    }
}

class Range {
    constructor() {}

    static from(a, b) {
        ;[a, b] = sorted([a, b])
        const store = []
        for (let i = a; i < b; i++) {
            store.push(i)
        }
        return store
    }
}

function valgetter(dict, ...args) {
    for (let arg of args) {
        if (dict[arg]) {
            return dict[arg]
        }
    }
}

class LineEdit {
    sprawlRange(
        start,
        regex,
        { direction = 'up', save = false, del = false, action = null, maxCount = 100 } = {}
    ) {
        let store = []
        let increment = direction == 'up' ? -1 : 1
        let line

        for (let i = start; ; i += increment) {
            line = this.getLine(i)
            store.push(line)
            if (action) action(line)
            if (del) this.deleteLine(i)
            if (test(regex, line) || i == 0 || delta(start, i) > maxCount) {
                if (i == 0) throw 'nothing was found from sprawlRange'
                break
            }
        }
        return (increment == -1 ? store.reverse() : store).join('\n')
    }
    static format(text) {
        const product = new LineEdit(text)
        // console.log( product.infostore )
        return product.value
    }
    mapEdit(map) {
        for (let info of map) {
            if (info.cat == 'insert') this.insertLineBelow(info.lineNumber, info.content)
            else if (info.cat == 'delete') this.deleteLine(info.lineNumber)
            else if (info.cat == 'edit')
                this.replaceLine(info.regex, info.replacement, info.lineNumber)
        }
    }
    lineDitto() {
        let match
        if (test('(?<!@)ditto', this.getLine())) {
            this.replaceLine('(?<!@)ditto', this.dittoValue, this.index)
        }
        if ((match = this.getLine().match(/(\S+) = @ditto/))) {
            this.dittoValue = match[1]
            this.replaceLine('@ditto', match[1], this.index)
        }
    }
    constructor(text, map = null) {
        this.original = text
        this.infostore = []
        this.globalAction = ''
        this.errors = []
        this.tabWidth = 4
        this.info = {}
        this.lines = text.split('\n')
        this.type = ''

        this.xp = ''
        this.xps = []
        this.xpa = ''
        this.index = 0
        this.dittoValue = ''
        this.tracker = {}
        map ? this.mapEdit(map) : this.action()
    }
    get upupline() {
        return this.getLine(this.index - 2)
    }
    get value() {
        const product = this.lines.filter((el) => el !== null).join('\n')
        if (this.globalAction) {
            const dict = Dict(this.globalAction)
            console.log(dict)
            return dictionaryReplace(product, dict, { boundary: true, escape: true })
        }
        return product
    }
    indexOf(el) {
        return this.getLine().search(RegExp('\\b' + el + '\\b'))
    }
    replaceLine(regex, replacement, n) {
        this.edit((s) => replace(regex, replacement, s), n)
    }
    insertLine(content, n) {
        this.lines[n] = this.getLine(n) + '\n' + getIndent(this.getLine(n)) + content
    }
    functionSprawl() {
        let start = this.index - 1
        let line

        const regex = '^    (def|cef)|^function|^def|^    \\w+\\(.*?\\) {$'
        for (let i = start; ; i--) {
            line = this.getLine(i)
            if (!line) break
            if (test(regex, line) || i == -1 || delta(start, i) > 100) {
                if (i == -1) throw 'nothing was found from sprawlRange'
                return i
            }
        }
    }
    sprawlTo(target, upwards = true) {
        console.log('sprawling to ' + target)
        if (!target.trim()) {
            throw 'error at sprawl !target.trim'
        }
        const createError = new CreateError(15)
        let a = this.index - 1
        console.log(this.index)
        console.log(target)
        console.log(this.lines[a])
        while (!this.lines[a] || !test('(?<!up)' + target, this.lines[a])) {
            upwards ? a-- : a++
            if (a < 0) throw Error('negative sprawl')
            createError.increment('surpassed sprawl limit')
        }
        return a
    }
    get errorObject() {
        return { line: this.line, index: this.index, cat: this.info.cat }
    }
    get tabSpaces() {
        return ' '.repeat(this.tabWidth)
    }
    edit(action, n = this.index) {
        let line = this.getLine(n)
        let spaces = getSpaces(line)
        this.setLine(spaces + action(line.trim()), n)
    }
    editLine(n, transformer) {
        if (n === undefined) n = 0
        let spaces = ''
        let line = this.getLine(n)
        let extraSpaces = test('{$', line) ? '   ' : ''
        if (line.startsWith(' ')) {
            ;[spaces, line] = line.split(/(?<=^ *)(?=\S)/)
        }
        this.setLine(spaces + transformer(line, spaces + extraSpaces), n)
    }
    upreplace(dict) {
        this.replaceLine(
            Object.keys(dict)
                .map((x) => '\\b' + x)
                .join('|'),
            (x) => dict[x],
            this.sprawlTo(Object.keys(dict).join('.*?'))
        )
    }
    upedit(regex, replacement) {
        this.replaceLine(regex, replacement, this.sprawlTo(regex))
    }
    upParam(replacement, append = false) {
        let index = this.functionLine
        let regex = '(?<=\\(|9).*?(?=\\)|0)'
        if (append) {
            regex = '(?=\\)|0)'
            replacement = ', ' + replacement
        }
        this.replaceLine(regex, replacement, index)
    }
    uptype(content, n = this.index - 2) {
        this.insertLineBelow(content, n)
    }
    cedit(content) {
        let regex = '^ *c )'
        let replacement = content
        let index = this.sprawlTo(regex)
        this.insertLineBelow(replacement, index)
    }
    insertLineBelow(content, n, extraSpaces = 0) {
        this.editLine(n, (line, spaces) => {
            if (n == 0) spaces = '    '
            if (content.includes(' ---- ')) {
                return (
                    line +
                    '\n' +
                    indent(content.replace(/ --- /g, '\n'), spaces + ' '.repeat(extraSpaces))
                )
            }
            return line + '\n' + spaces + ' '.repeat(extraSpaces) + content
        })
    }
    blockInsert(n, content) {
        this.insertLineBelow(content, n, 0)
    }
    get functionLine() {
        return this.tracker['fn'] || this.tracker['def'] || 0
    }
    updel(match) {
        let n = isNumber(match) ? parseInt(match) - 1 : this.sprawlTo(rescapeOld(match))
        this.deleteLine(n)
    }
    globalReplace(match) {
        const dict = Dict(match)
        return srep(this.value, dict)
    }
    action() {
        this.lines.forEach((line, idx) => {
            this.index = idx
            if (!line) return
            if (line.match(/updel/)) {
                this.deleteLine(idx)
                this.deleteLine(idx - 1)
                return
            }
            try {
                let match

                if (line.endsWith('{')) {
                    match = search(
                        '^ *' + Regex([...logicblocks, ...Object.keys(trackermap)]) + '|    (\\w+)',
                        line
                    )
                    this.tracker[lineedittrackermap[match] || match] = idx
                    this.tracker['blockstart'] = idx
                } else if (line.trim() == '}') {
                    this.tracker['blockend'] = idx
                    if (test('^}', line)) {
                        this.tracker['functionblockend'] = idx
                    }
                }
                let info = getLineInfoEDITS(line)
                if (!info) return

                if (info.cat == 'lea') this.appendCurrentLine(info.content)
                if (info.cat == 'le') this.editCurrentLine(info.dict)
                if (BLOCKS.includes(info.cat)) {
                    this.blockInsert(this.tracker[trackermap[info.cat] || info.cat], info.content)
                } else if (info.cat == 'pa') this.upParam(info.content, true)
                else if (info.cat == 'upgr') {
                    this.globalAction = info.match
                } else if (info.cat == 'upf') this.upfunction(info.match)
                else if (info.cat == 'ditto') this.superDitto(info.match)
                else if (info.cat == 'blockditto') this.blockDitto(info.match)
                else if (info.cat == 'delf' || info.cat == 'delb') this.delBlock(info.cat)
                else if (info.cat == 'upd') this.updel(info.match)
                else if (info.cat == 'upal') this.upAppend(info.match)
                else if (info.cat == 'uprc') this.replaceChunk(info.match)
                else if (info.cat == 'p') this.upParam(info.content)
                else if (info.cat == 'c') this.cedit(info.content)
                else if (info.cat == 'e') this.upedit(info.regex, info.replacement)
                else if (info.cat == 'del') this.deleteLine(idx - 1)
                else if (info.cat == 't') this.uptype(info.content)
                else if (info.cat == 'w') this.upwrap(info.content)
                else if (info.cat == 'd') this.dittoEffect(info.dict)
                else if (info.cat == 'r') this.upreplace(info.dict)
                else if (info.cat == 'xp') this.xpAction(info.replacement, info.store)
                else if (info.cat == 'delf') this.sprawlAction(this.functionLine, this.deleteLine)
                else if (info.cat == 'quotify') this.quotify()
            } catch (e) {
                throw e
                console.log(e)
                const message = e.message ? e.message : ''
                let line = srep(this.line, { up: 'UPEDIT: ', xp: 'XPEDIT: ', xg: 'XGEDIT: ' })
                this.setLine(line + '  //LineEditError: ' + message, this.index)
                return
            }
        })
    }
    delBlock(cat) {
        let start, end
        end = this.index
        if (cat == 'delb') {
            start = this.tracker.blockstart
        } else if (cat == 'delf') {
            start = this.functionLine
        }

        for (let i = start; i <= end; i++) {
            this.deleteLine(i)
        }
    }
    quotify() {
        this.edit((line) => parens(capitalize(line.slice(1)) + '.', 'dq'))
    }
    sprawlingAction(action) {
        let a = this.index
        let b = this.index
        while (this.getLine(--a).trim()) this[action]()
        while (this.getLine(++b).trim()) this[action]()
    }
    sprawlAction(n, action) {
        let a = this.index
        while (a > n - 1) {
            this.lines[a] = null
            a--
        }
    }
    getLineRange(start, end) {
        let s = ''
        for (let i = start; i <= end; i++) {
            s += this.getLine(i) + '\n'
        }
        return s
    }
    getLineRangex(n, spread = 1) {
        let s = ''
        for (let i = spread * -1; i < spread; i++) {
            s += this.getLine(n + i) + '\n'
        }
        return s
    }
    upmove(n) {
        this.setLine(this.line, n)
        this.deleteLine(this.index)
    }
    xpAction(replacement, store) {
        if (replacement) {
            this.xp = replacement
            if (!this.xps.includes(this.xp)) this.xps.push(this.xp)
        } else replacement = this.xp
        if (store == 'x') {
            return
        }
        const map = { a: 0, b: 1, c: 2, d: 3 }
        let i = map[store]
        this.replaceLine('xp\\w', this.xps[i], this.index)
        this.replaceLine('xp\\b', replacement, this.index)
    }
    dittoEffect(dict) {
        this.setLine(sreplace(this.upline, dict, 'g'))
    }
    getLineAndContent(match) {
        let [regex, content] = split(match, '  ')
        let n = this.sprawlTo(rescapeOld(regex))
        return [n, content]
    }
    upAppend(match) {
        console.log(match)
        let [n, content] = this.getLineAndContent(match)
        this.edit((line) => line + ' ' + content, n)
    }

    appendCurrentLine(content) {
        if (this.line.includes('= '))
            this.setLine(replace('(?<== )', content, this.line.slice(0, this.indexOf('lea ')), ''))
        else {
            this.setLine(content + ' ' + this.line)
        }
    }
    upwrap(content) {
        let index = this.sprawlTo('^\\w+ = ')
        console.log(index)
        this.editLine(index, (line) => {
            const [start, end] = content.startsWith("'")
                ? ["'", "'"]
                : [content + '(', ')'.repeat(count('(', product))]
            const product = replace('(?<== )', start, line) + end
            return product
        })
    }

    editCurrentLine(dict) {
        this.setLine(sreplace(this.line, dict, 'g'))
    }
    recursiveReplaceAttemp(dict) {
        if (len(dict) > 1) {
            this.setLine(sreplace(this.line, dict, 'g'))
        } else {
            let { regex, replacement } = dict
            try {
                this.replaceLine(regex, replacement, this.line)
            } catch (e) {
                let regexItems = regex.split(/\W+/)
                if (regexItems.some((x) => test(this.line, x))) {
                    let newRegex = regex.slice(0 - 1)
                    const parser = () => {
                        this.replaceLine(newRegex, replacement, this.line)
                    }
                    try {
                        parser()
                    } catch {
                        if (newRegex.length > 3) {
                            newRegex = newRegex.slice(0, -1)
                            parser()
                        } else {
                        }
                    }
                }
            }
        }
    }

    upfunction(match) {
        let n = this.functionSprawl()
        this.deleteLine(this.index)
        this.insertLineBelow(match, n)
    }
    replaceChunk(match) {
        let name = getFirstWord(match)
        let n = this.tracker[name]
        if (!n) {
            n = this.sprawlTo('^ *(?:cef |def |function )?' + name)
        }
        let prefix = search('^( *(?:cef |def ))(?=\\w)', this.getLine(n)) || '    '
        this.sprawlRange(n, '^ *}$', { direction: 'down', del: true })
        const content =
            prefix +
            this.sprawlRange(this.index, '^ *}$', {
                direction: 'down',
                del: true,
                save: true,
            }).slice(9)
        this.setLine(content, n)
    }

    getMostRecentBlock() {
        let start = this.tracker.blockstart
        let end = this.tracker.blockend
        let store = []
        for (let i = start; i <= end; i++) {
            store.push(this.getLine(i))
        }
        return store.join('\n')
    }
    blockDitto(s) {
        this.superDitto(s, this.getMostRecentBlock())
    }
    superDitto(s, template = '') {

        if (test('(?<!@)ditto', this.getLine())) {
            this.replaceLine('(?<!@)ditto', this.dittoValue, this.index)
        }
        if ((match = this.getLine().match(/(\S+) = @ditto/))) {
            this.dittoValue = match[1]
            this.replaceLine('@ditto', match[1], this.index)
        }
        let keys, items
        ;[keys, items] = split(s, 'fr', '  ', [splitSpaces, splitSpaces])
        if (!template) template = this.getSprawlLine(keys.join('.*?|'))
        let store = ''
        for (let item of items) {
            const dict = keys.reduce((acc, key, i) => {
                key = template.match(RegExp(key, 'i'))[0]
                const val = isCapitalized(key) ? capitalize(item[i]) : item[i]
                acc[key] = val
                return acc
            }, {})
            const product = srep(template, dict) + '\n'
            store += product
        }
        this.setLine(store.trimEnd())
    }
    getSprawlLine(regex) {
        let n = this.sprawlTo(regex)
        return this.getLine(n)
    }
}
class Tally {
    constructor(items = null) {
        this.store = {}
        if (items) items.forEach((item) => this.count(item))
    }
    forEach(parser) {
        Object.entries(this.store).forEach(parser)
    }
    get value() {
        return this.store
    }
    count(item) {
        item in this.store ? this.store[item]++ : (this.store[item] = 1)
        return this.store[item]
    }
}
function isNestedArray(v) {
    return isArray(v) && isArray(v[0])
}

class SimpleStorage {
    init(store) {
        if (!store) return
        if (isNestedArray(store)) {
            store.forEach(([a, b]) => this.add(a, b))
        }
        else if (isObject(store)) {
            this.store = store
        }
    }
    constructor(store = null) {
        this.store = {}
        this.init(store)
    }
    add(k, v) {
        if (this.store[k]) {
            if (isNestedArray(v)) {
                v.forEach((item) => this.store[k].push(item))
            } else {
                this.store[k].push(v)
            }
        } else {
            this.store[k] = isNestedArray(v) ? v : [v]
        }
    }

    set(k, v) {
        this.store[k] = v
    }

    get value() {
        return this.store
    }

    get(k) {
        return this.store[k]
    }
}


class AdvancedStorage extends SimpleStorage {
    addArray(item) {
        if (isNestedArray(item)) {
            for (let [a,b] of item) {
                this.store[a] = b
            }
        }
        else {
            this.store[item[0]] = item[1]
        }
    }
    reset() {
        this.store = {}
    }
    constructor() {
        super()
    }

    format(options) {
        for (let [k,v] of Object.entries( options )) {
            if (k in this.store) {
                if (v.delimiter) {
                    this.store[k] = this.store[k].join(v.delimiter)
                }
            }
        }
        const store = Object.entries(this.store)
        if (options.sort) {
            store.sort(options.sort)    
        }
        return store
    }
}

class Storage2 extends SimpleStorage {
    constructor({mode = Array, fallback = null} = {}) {
        super()
        this.mode = mode
        this.fallback = fallback
    }

    get (k) {
        return this.store[k || this.fallback]
    }

    add(k, v) {
        if (this.mode == String) return this.addString(k, v)
        if (this.mode == Number) return this.addNumber(k, v)
        if (this.mode == Array) return this.addList(k, v)
    }

    addNumber(k, v) {
        this.store[k] ? this.store[k] += v : this.store[k] = v
    }

    addString(k, v) {
        this.store[k] ? this.store[k] += snsn + v : this.store[k] = v
    }

    addArray(k, v) {
        if (isNestedArray(v)) {
            if (this.store[k]) {
                v.forEach(x => this.store[k].push(x))
            }
            else {
                this.store[k] = v
            }
        }
        else {
            if (this.store[k]) {
                this.store[k].push(v)
            }
            else {
                this.store[k] = [v]
            }
        }
    }
}

class Storage {
    forEach(parser) {
        Object.entries(this.store).forEach(([a, b], i) => parser(a, b, i))
    }
    constructor(input = null) {
        this.list = []
        this.dict = {}
        this.parser = null
        isObject(input) ? (this.dict = input) : (this.parser = input)
    }
    static create(aa) {
        for (let [k, v] of aa) {
            this.add(k, v)
        }
        return this.dict
    }
    itemValue(val) {
        console.log('hi')
        return this.parser ? this.parser(val) : val
    }
    update(key, val) {
        this.dict[key] = this.itemValue(val)
    }
    extend(val) {
        this.list.push(this.itemValue(val))
    }
    merge(val) {
        if (isObject(val)) {
            this.dict = deepMerge(this.dict, val)
        }
        if (isArray(val)) {
            this.extend(val)
        }
    }
    add(...args) {
        let parent
        let key = args[0]
        let val = args[1]
        if (args.length == 3) {
            parent = args[0]
            key = args[1]
            val = args[2]
            const product = this.itemValue(val)
            if (!this.dict[parent]) {
                this.dict[parent] = {}
            } else if (isArray(this.dict[parent])) {
                this.dict[parent] = { catchall: this.dict[parent] }
            }
            if (!this.dict[parent][key]) this.dict[parent][key] = []
            if (isArray(product)) this.dict[parent][key].push(...product)
            else this.dict[parent][key].push(product)
            return
        } else {
            const product = this.itemValue(val)
            if (isObject(this.dict[key])) {
                this.add(key, 'catchall', product.split('\n'))
            } else {
                if (!this.dict[key]) this.dict[key] = []
                if (isArray(product)) this.dict[key].push(...product)
                else this.dict[key].push(product)
            }
        }
    }
    get value() {
        if (this.list.length == 1) return this.list[0]
        return this.list.length > 0 ? this.list : this.dict
    }
}

function parens(s, type = 'parens') {
    if (isArray(type)) return '[' + s + ']'
    if (isObject(type)) return '{' + s + '}'
    if (type == 'asdfpython') return 'asdf=\'\'\'\n' + s + '\n\'\'\''
    if (type == 'asdf') return 'asdf=`\n' + s + '\n`'
    if (type == 'brackify') return '{\n' + s + '\n}'
    if (type == 'vue') return '{{ ' + s + ' }}'
    if (type == '\n') return '\n' + s + '\n'
    if (type == 'doublequotes') return '"' + s + '"'
    if (type == 'console.log') return 'console.log(' + s + ')'
    if (type == 'print') return 'print(' + s + ')'
    if (type == 'spaces') return ' ' + s + ' '
    if (type == 'b') return '\\b' + s + '\\b'
    if (type == '\\b') return '\\b' + s + '\\b'
    if (type == 'dq') return '"' + s + '"'
    if (type == 'singlequotes') return "'" + s + "'"
    if (type == 'sq') return "'" + s + "'"
    if (type == 'ncg') return '(?:' + s + ')'
    if (type == 'parens') return '(' + s + ')'
    if (type == 'la') return '(?=' + s + ')'
    if (type == 'lb') return '(?<=' + s + ')'
    if (type == 'pla') return '(?=' + s + ')'
    if (type == 'plb') return '(?<=' + s + ')'
    if (type == 'nlb') return '(?<!' + s + ')'
    if (type == 'nla') return '(?!' + s + ')'
    if (type == 'regexparens') return '\\\\(' + s + '\\\\\\)'
    if (type == 'curlybraces') return '{' + s + '}'
    if (type == 'brackets') return '{' + s + '}'
    if (type == 'tilda') return '`' + s + '`'
    if (type == 'braces') return '[' + s + ']'

    if (type == 'newline-indent') return '\n' + indent(toString(s)) + '\n'
    if (type == 'quine') return 'console.log("' + s + '")' + sn + 'console.log(' + s + ')'
    if (type == 'newline-indent-div') return '<div>\n' + indent(toString(s)) + '\n</div>'

    if (type == 'array') return 'const array = [\n' + indent(toString(s).trim()) + '\n]'
    if (type.includes('|')) {
        const [a, b] = type.split('|')
        return a + s + b
    } else {
        return type + s + type
    }
}

function split(s, cat = '\\s', delimiter = '\\s', parsers = null, starting = 1) {
    if (isArray(s)) return [s[0], s.slice(1)]
    if (isString(s)) s = s.trim()

    if (isRegExp(cat)) {
        let [a, ...b] = s.split(cat)
        let delimiter = search(cat, s)
        return [a, b.join(delimiter)]
    }

    if (isNumber(cat)) {
        return search('^' + '(.*?) '.repeat(cat) + '(.+)', s)
    }

    if (isArray(cat)) {
        return search('^(.*?) (.+)', s).map((x, i) => {
            return cat[i] ? cat[i](x) : x
        })
    }

    if (isObject(cat)) {
        if (s.trim()) {
            const items = s.split(' ')
            if (items.length < cat.default.length) {
                let index = items.length - 1
                for (let i = index; i < cat.default.length; i++) {
                    items.push(cat.default[i])
                }
                return items
            }
            else if (items.length == cat.default.length) {
                return items
            }

            else {
                const store = []
                let index = items.length - cat.default.length
                while (items.length > cat.default.length - 1) {
                    store.push(items.pop())
                }
                return [...items, store.reverse().join(' ')]
            }
                
        } else {
            return cat.default
        }
    }

    switch (cat) {
        case 'dsn':
            return s.split(/  |\n/)
        case 'EQUALS':
            return search('^(.*?= ?)(.*)', s)
        case 'smart':
            delimiter = search(', ?|\\n|\\t', s)
            if (!delimiter) delimiter = ' '
            else if (delimiter.startsWith(',')) delimiter = ', ?'
            return s.split(RegExp(delimiter))
        case 'last':
            return s.split(RegExp(delimiter + '(?=\\S+$)'))
        case 'number-letter':
            return s.split(/(?<=[a-zA-Z])(?=\d)|(?<=\d)(?=[a-zA-Z])/)
        case 'ds':
            return s.split(/  |\n/)
    }


    if (cat == 'list') {
        delimiter = search('  |,(?! )', s)
        if (!delimiter) delimiter = ' '
        return split(s, delimiter)
    }
    if (cat == 'frs') {
        if (parsers) {
            items = split(s, ' ')
            a = parsers[0](items[0])
            b = items[1].split(delimiter).map(parsers[1])
            return [a, b]
        }
    }
    if (cat == 'firstrest' || cat == 'fr') {
        if (parsers) {
            items = s.split(delimiter)
            a = parsers[0](items[0])
            b = items.slice(1).map(parsers[1])
            return [a, b]
        }
        if (isString(s)) {
            items = s.split(delimiter)
            return [items[0], items.slice(1)]
        } else {
            return [s[0], s.slice(1)]
        }
    }
    if (cat == 'doublespace') return findall('(\\S+) (.*?)(?=  |$)', s)
    if (cat == 'nb') return s.split(/(?<=[a-zA-Z])(?=\d)/)
    if (cat == 'css') return s.split(/(?<=[a-zA-Z])(?=\d|px|%|asdasd|azzz)/)

    if (cat == 'twice') {
        if (isArray(delimiter)) {
            delimiter = delimiter.map(rescape)
        } else {
            delimiter = [' ', ' ']
        }
        return search('(\\w+)' + delimiter[0] + '(\\w+)' + delimiter[1] + '([^]+)', s)
    }
    if (cat == 'once') {
        if (isArray(s)) return [s[0], s.slice(1)]

        try {
            if (delimiter.includes('|')) {
                delimiter = search(delimiter, s)
            }
            delimiter = delimiter.replace('^', '(?:\\n|^)')
            let regex = '(.*?)' + delimiter + '([^]+)'
            const product = searcher(regex, s)
            return product ? product : [s, '']
        } catch {
            // console.log('no match from splitting at once')
            return [s, '']
        }
    }
    if (cat == 'vue') {
        if (s.length == 1) return [s, '']
        if (s.startsWith('set ')) {
            return s.split(' ')
        }

        if (test('^run', s)) {
            return s.split(' ')
        }
        if (isSingleWord(s) && 'slu'.split('').includes(s[0])) {
            console.log('sluvuesplit')
            console.log(s)
            return [s.slice(0, 1), s.slice(1), '', '']
        }
        if (test('^fr|^gr', s)) return split(s, 'twice')
        else return [...split(s, 'once'), '', '']
    }
    if (looksLikeRegex(cat)) return s.split(RegExp(cat))
    if (cat) {
        return split(s, 'once', cat)
    }
}

function looksLikeRegex(s) {
    let ritems = [
        '(?:',
        '(?=',
        '(?<!',
        '(?!',
        '(?=',
        '[a-z]',
        'w+',
        's+',
        'S+',
        'n+',
        '.*',
        '.+',
        '[^]',
        '[\\w\\W]',
    ]
    return test(Regex(ritems, 'escape'), s)
}

function aggregate(re, text) {
    const items = findall(re, text.trim(), 'g')
    const store = new Storage()
    items.forEach((item) => store.add(...item))
    return store
}

function hasPeriod(s) {
    return test('\\.', s)
}

function getConditionalParentKeyParser(s) {
    const map = {
        list: simpleListParser,
    }
    let key, parent, parser
    let a = s.split('.')
    if (a.length == 1) key = a[0]
    else if (a.length == 2) {
        if (a[1] == 'list') {
            key = a[0]
            parser = map[a[1]]
        } else {
            key = a[1]
            parent = a[0]
        }
    } else if (a.length == 3) {
        parent = a[0]
        key = a[1]
        parser = map[a[2]]
    }
    return [parent, key, parser]
}

function gli(line) {
    let a, text, s, keys, key, parser, parent
    if (!line) return
    const map = { list: listParser }
    if ((match = search('^# ?(.*)', line))) {
        key = 'hash'
        text = match
        parser = null
    } else {
        ;[a, text] = split(line, [(x) => split(x, '.')])
        if (a.length == 1) key = a[0]
        else if (a.length == 2) {
            if (isArray(a[1])) {
                key = a[0]
                parser = map[a[1]]
            } else {
                key = a[1]
                parent = a[0]
            }
        } else if (a.length == 3) {
            parent = a[0]
            key = a[1]
            parser = map[a[2]]
        }
    }
    return { parent, key, text, parser }
}

function simpleListParser(s) {
    return split(s, 'list')
}

function getNoteKeys(s) {
    const [text, store] = mrep2(simpleAttrRE, '', s)
    return store
}

function messyNoteParser(s) {
    newStorage
    s = applyUpdatedDictionary(s)[(s, keys)] = getNoteKeys(s)
    const lines = s.split('\n')
    const date = lines.shift()
    for (let line of lines) {
        const info = gli(line)
        if (info['continue']) continue
        text = info['parser'] ? info.parser(info.text) : info['text']
        if (info['parent']) store.add(info['parent'], info['key'], text)
        else if (info['key']) store.add(info['key'], text)
    }
    return store
}

function expandDashes(s) {
    return replace('-', ' ', s)
}

function fixProse(text) {
    const pmap = {
        '9\\w.*?\\w0': (s) => parens(s.slice(1, -1)),
        '(dr|mrs|mr|miss) ?\\w+': doctorify,
        ' a (?=[aeiou])': (s) => ' an ',
        '(?:blist|nlist) [^]*?(?=\\n *\\n)': listParserNew,
    }
    const aio = { "^[a-zA-Z'].*": prepareSentence }
    text = multipleReplace(text, pmap, aio)
    return text
}

function hashfix(s) {
    s = s.replace(/^ *\n|^ *\S+(?: \S+)? *\n|# {\n|^ +/gm, '')
    return Accumulate(s, { testing: true })
}
function hashNoteParser(text, { asObject = false } = {}) {
    let storage
    ;[text, storage] = mrep2('(\\w+)\\\\(\\w+)', (_, a, b) => [b, [a, b]], text)

    text = spellcheck(text)
    text = allrep(text, grammarObject)
    text = trimBlock(text)

    const keys = {
        tl: 'timeline',
        nb: 'notebook',
    }

    const items = findall(nare, text, { filtered: true })
    const entryDate = search('(?<=^ *)\\d+', text) || datestamp()
    const store = new Storage({ date: toDatestamp(entryDate) })

    for (let [k, v] of items) {
        action(k, v)
    }
    return store.value
    function action(k, v) {
        v = v.replace(/(?<=\.) ?[a-z]/g, (s) =>
            s.startsWith(' ') ? s.toUpperCase() : ' ' + s.toUpperCase()
        )
        let parent, key, parser
        if (hasPeriod(k)) {
            ;[parent, k, parser] = getConditionalParentKeyParser(k)
        }
        if (k in keys) {
            k = keys[k]
        }
        if (parent in keys) {
            parent = keys[parent]
        }
        key = k
        splitlines = false
        let product = fixProse(v).trim().split('\n')
        if (parent == 'notes') {
            let updateDelimiter = ' upd '
            if (asObject) {
                product = product.map((line) => {
                    if (line.includes(updateDelimiter)) {
                        let [text, update] = line.split(updateDelimiter)
                        if (update.endsWith('?')) {
                            text += '?'
                            update = capitalize(update.slice(0, -1) + '.')
                        } else if (update.endsWith('.')) {
                            text += '.'
                        }
                    }
                })
            }
        } else {
            v = splitlines && v.includes('\n') ? v.trim().split('\n') : v
            product = parser ? parser(v) : v
        }
        if (parent) store.add(parent, key, product)
        else store.add(key, product)
    }
}

function createRegex({ mode = 'accumulate', delimiter = '#', tag = true } = {}) {
    tag = tag ? '(\\S+)' : ''
    if (mode == 'accumulate') {
        return (
            '(?:^|\\n)' +
            delimiter +
            '' +
            tag +
            '\\s*' +
            '([\\w\\W]+?)' +
            '(?=\\n' +
            delimiter +
            '|$)'
        )
    }
}
function changeDictKeys(dict) {
    return Object.entries(dict).reduce((acc, [k, v]) => {
        acc[k[0]] = v
        return acc
    }, {})
}
function Vaccumulate(s) {
    const product = Accumulate(s, { map: vuemap, preEdit: false, useDefaultKey: true })
    const dict = product.vue
    if (exists(dict.dataItems)) {
        if (!dict.data) {
            dict.data = ''
        }
        let selfData = findall('    (\\w+)', dict.data)
        let propItems = setify(dict.dataItems.filter((x) => !selfData.includes(x)))
        dict.props = propParser(propItems)
        // dict.props = propItems.join(', ')
    }
    return dict
}
function createConditionalFunction(fn, k, list) {
    return list.includes(k) ? fn : ph
}
function Accumulator2(s, map = packmap2) {
    const text = pedit(s)
    const regex = '\n+(?=^' + Regex2(map, { extend: '#' }) + '\\b)'
    const store = new Store({ datestamp: true })
    text.split(RegExp(regex, 'm')).forEach(runner)

    function runner(s) {
        if (!s) return
        let items = s.split(/(?<=^\w+(?:\.\w+)?)\W+/)
        let [k, sector, v] = argfix(items, [true, null, true])

        if (['reddit', 'notes'].includes(k)) {
            v = trimBlock(v)
        }

        const parser = map[k]?.parser || map[k]
        const product = parser ? parser(v, sector) : s
        const destination = parser ? map[k]['destination'] || k : null
        store.add(destination, product)
    }

    return store.string
}

function Accumulator(s, map = packmap2) {
    s = removeComments(s.trim(), 'js', '^')
    // this removal of comments isnt that good.
    const text = pedit(s)
    // txl(text)
    const regex = '\n+(?=^' + Regex2(map) + '\\b)'
    txl(regex)
    const items = text.split(RegExp(regex, 'm'))
    // const items = findall(accumulatorRE, text, {sliced: false})
    txl(items)
    const store = new Store({ datestamp: true })

    function action(elements) {
        const [original, k, sector, v] = argparse(elements, [0, 1, null, 2])
        const parser = map[k]?.parser || map[k]
        const prepare = createConditionalFunction(trimBlock, k, ['reddit', 'notes'])
        const product = parser ? parser(prepare(v), sector) : original
        const destination = parser ? map[k]['destination'] || k : 'catchall'

        typedAction(product, {
            merge: () => store.merge(destination, product.value),
            String: () => store.add(destination, product),
        })
    }

    items.forEach((elements) => action(elements))
    return store.value
}

function Accumulate(
    s,
    {
        map = packmap,
        useDefaultKey = false,
        targeted = null,
        preEdit = true,
        download = false,
        testing = false,
    } = {}
) {
    let text = preEdit ? pedit(s) : s
    targeted = targeted ? parens(Regex(targeted) + '\\S*') : '(\\S+)'
    let prevaccre = '(?<=^|\\n)' + targeted + ' ([^]+?)(?=\\n\\w|$)'
    let regex = test('^#', text, 'm') ? createRegex() : prevaccre
    // console.log( text)
    // console.log( regex)
    let items = findall(regex, text)
    // console.log( items)
    let store = new Store()
    let error = false
    let alias
    let key
    let content
    let grandchild
    let docs
    let asList
    let po = parentmap
    let dated = false
    let mi = []
    let memory = ''
    let cat = ''
    let parent = ''
    let sector

    for (let [k, v] of items) {
        action(k, v)
    }
    return store.value

    function action(k, v) {
        if (v.includes('LineEditError')) {
            error = true
            store.add('errors.js', k + ' ' + v)
            return
        } else if (error && mi.includes(k)) {
            if (memory != k) {
                memory = ''
                error = false
            }
            return
        } else {
            error = false
        }

        if (map[k] && map[k].alias) {
            if (map[k].alias in map) {
                k = map[k].alias
            } else alias = map[k].alias
        }

        if (test('\\.', k)) {
            ;[k, sector, asList] = k.split('.')
        } else {
            sector = null
            parent = getParent(k, v)
            if (!parent) parent = map[k] && map[k]['parent']

            if (parent == 'self') parent = k
            if (isArray(parent)) {
                k = parent[0]
                v = parent[1] + ' ' + v
                parent = null
            }
        }

        if (parent && !map[k]) {
            map[k] = {}
        } else if (map[k] && !parent) {
            po[parent] = {}
        } else if (!map[k] && !parent) {
            v = spellcheck(v)

            if (sector) {
                if (asList) {
                    v = split(v, 'smart')
                }
                store.add(k, sector, v)
            } else if (test('[^\\n]{10,}', v)) {
                store.add('allnotes', 'notes', k + ' ' + v, 'list')
            } else {
                store.addString('catchall', k + ' ' + v + '\n\n')
            }
            return
        }

        v = v.trimEnd()
        if (!['edits', 'py', 'js'].includes(k) && v.endsWith('}') && parent != 'vue') {
            v = trimBlock(v)
        }

        if (map[k]['infer']) {
            let [content, key] = map[k].parser(v)
            key = k + key
            store.add(key, content)
            return
        }

        if (map[k]['mi']) {
            mi = map[k].mi
            v = map[k].parser ? map[k].parser(v) : v
            map[k].mi.forEach((item, i) => {
                if (i == 0) v = action(item, v)
                else if (!error && v) action(item, v)
            })
        } else if (sector) {
            if (map[k][DATE_STAMP]) {
                store.datestamp()
                store.add(k, sector, map[k]['parser'](v), 'list')
            } else if (k == 'edits') {
                let mode = sector
                if (mode == 'setfile') {
                    store.add(k, mode, v)
                    return
                }

                let [parent, child] = split(getFirstElement(v, 'smart'), '\\.')

                if (mode == 'replace') {
                    if (test('^\\w+\\.', v)) {
                        let lang
                        v = v.slice(parent.length + 1)
                        ;[v, lang] = mreplace('\\b(?:js|py)\\b', addFunctionParentheses(v), {
                            once: true,
                        })
                        if (!lang) lang = 'js'
                        v = betterText(v, lang)
                    }
                    if (child) {
                        store.add(k, parent, child, v)
                    } else {
                        store.add(k, parent, v)
                    }
                    return
                }
                if (child) store.add(k, parent, child, mode)
                else {
                    store.add(k, v, mode, 'object')
                }
                return
            } else {
                store.add(k, map[k]['parser'](v, sector))
                return
            }
        } else {
            try {
                return accumulator(k, v)
            } catch (e) {
                throw e
                throw 'error at accumulator'
                if (testing) throw e
                console.log('error at accumulate', e)
                error = true
                let { name, message, code, location } = e
                if (e == 'e') message = 'self thrown e'

                try {
                    if (e.stack) location = search('at (\\w+)', e.stack.toString())
                    if (!location) location = 'During LineEdit'
                    else if (location == 'checkjs') location = 'AfterParsing, during checkjs'
                    let item = { name, location, message, code, key: k }
                    let errorMessage = name + ': ' + message
                    code = code.replace(
                        /^.+/,
                        (x) => x + '  ' + jspymap[k]['comment'] + ' ' + errorMessage
                    )
                    store.add(ERROR_DESTINATION, code)
                } catch {
                    store.add(ERROR_DESTINATION, k + ' : ' + v)
                }
            }
        }

        function getkv(k, v) {
            console.log(k, 'k', 'v', v, '---')
            let grandchild
            if (!map[k]) {
                // console.log( k , 'asdfzzsdf' )
            }
            if (map[k]['split'] == 'conditional') {
                if (test('\\w+\\.', v)) {
                    ;[key, grandchild, content] = split(v, 'twice', ['.', ' '])
                } else {
                    ;[key, content] = split(v, 'once')
                }
            } else if (map[k]['split']) {
                console.log('splitting once ')
                ;[key, content] = split(v, 'once')
            } else {
                ;[key, content] = [k, v]
            }
            return [key, content, grandchild]
        }

        function accumulator(k, v, normal = true, allowMultipleEntries = true) {
            if (k == 'edits') {
                let parent, child, lang
                ;[parent, child] = split(getFirstElement(v, 'smart'), '\\.')
                if (test('^\\w+\\.', v)) {
                    v = v.slice(parent.length + 1)
                }
                try {
                    lang = getExtension(store.get(k).setfile)
                } catch {
                    lang = 'js'
                }
                v = betterText(addFunctionParentheses(v), lang)

                if (child) {
                    store.add(k, parent, child, v)
                } else {
                    store.add(k, parent, v)
                }
                return
            }
            let [key, content, grandchild] = getkv(k, v)

            if (hasDocs(content)) {
                ;[content, docs] = getDocNotes(content, key)
                store.add('docs', docs.name, docs.text)
            }

            let parser = map[k]['parser'] || po[parent]['parser']
            let mode = map[k]['mode']
            if (mode == 'conditional-family' && map[k]['split']) {
                let [a, b] = split(content, '\\.')
                console.log(a, b)
                if (b) {
                    content = b
                    grandchild = a
                }
            }

            let product = normal ? parser(content, key) : content

            if (mode == 'allnotes') {
                store.add('allnotes', key, product, 'list')
                return
            }
            if (mode == 'multipleEntries' && allowMultipleEntries) {
                for (let [k, v] of Object.entries(product)) {
                    accumulator(k, v, false, false)
                }
                return
            }
            if (!normal && !map[k]['parent']) {
                store.add(alias || k, product)
                return
            }

            if (!normal && parent && mode == 'data') {
                store.add(parent, k, v, 'merge')
                return
            }

            if (map[k]['holder']) {
                if (isObject(product) && product.instructions) {
                    store.add('instructions', product)
                } else {
                    store.add(map[k]['holder'], key, product)
                }
                return
            }

            if (map[k]['kt']) key = map[k]['kt'](key)
            else if (map[k]['key']) key = map[k]['key']
            else if (map[k]['destination']) key = map[k]['destination']
            else if (po[parent]['kt']) key = po[parent]['kt'](key)

            let join = isDefined(map[k]['join']) ? map[k]['join'] : po[parent]['join']
            let indentation = map[k]['indent']
            let trimmed = map[k]['trimmed']
            if (indentation === undefined) indentation = po[parent]['indent']

            if (parent && mode == 'conditional-family') {
                if (grandchild) {
                    store.add(parent, key, grandchild, product)
                } else {
                    store.add(parent, key, product)
                }
            } else if (parent && mode == 'object') {
                console.log(parent, key, grandchild, product)
                if (!grandchild) grandchild = getFunctionName(product)
                store.add(parent, key, grandchild, product)
            } else if (parent && join != null && indentation != null) {
                if (key != 'css' && useDefaultKey) {
                    key = k
                    indentation -= 4
                }
                store.add(parent, key, product, join, indentation, trimmed)
            } else if (parent && mode == 'deep') {
                store.merge(parent, product)
            } else if (parent) {
                store.add(parent, key, product, mode)
            } else if (mode == 'string-object') {
                store.add(alias || k, key, product, mode)
            } else if (mode == 'singleton') {
                store.set(alias || key, product)
            } else {
                console.log('adding at store else block for accumulate.')
                console.log()
                store.add(alias || key, product)
            }

            return product
        }
    }
}
function keyMerge(acc, keys, val) {
    let current = acc
    do {
        let key = keys.shift()
        if (!current[key]) {
            if (keys.length == 0) {
                current[key] = val
            } else {
                acc[key] = {}
                current = acc[key]
            }
        }
    } while (keys.length > 0)
    return acc
}
function assign(obj, keys, value) {
    for (let i = 0; i < keys.length - 1; ++i) {
        key = keys[i]
        try {
            if (!(key in obj)) {
                obj[key] = {}
            }
            obj = obj[key]
        } catch {
            console.log('er')
            continue
        }
    }
    obj[keys[keys.length - 1]] = value
}
function assign2(base, names, value = '') {
    names = isString(names) ? names.split('.') : names
    if (!value) {
        value = names.pop()
    }
    for (var i = 0; i < names.length; i++) {
        const product = base[names[i]] || (i == names.length - 1 ? value : {})
        base = base[names[i]] = product
    }
}

function assign3(obj, path, val) {
    const keys = path.split('.')
    const lastKey = keys.pop()
    const lastObj = keys.reduce((obj, key) => (obj[key] = obj[key] || {}), obj)
    lastObj[lastKey] = val
    return obj
}

class Store {
    datestamp(k = null) {
        this.store.datestamp = datestamp()
    }
    get keys() {
        return Object.keys(this.store)
    }
    get values() {
        return Object.values(this.store)
    }
    get string() {
        return stringify(this.store)
    }
    merge(parent, val) {
        if (this.store[parent]) {
            this.store[parent] = deepMerge(this.store[parent], val, false)
            // false = overwrite
        } else {
            this.store[parent] = val
        }
    }
    delete(key) {
        if (key in this.store) delete this.store[key]
    }
    getKey(...args) {
        const len = args.length
        const map = [
            this.store[args[0]],
            this.store[args[0]][args[1]],
            this.store[args[0]][args[1]][args[2]],
        ]
        return map[len]
        if (len == 1) return this.store[args[0]]
        if (len == 2) return this.store[args[0]][args[1]]
        if (len == 3) return this.store[args[0]][args[1]][args[2]]
    }
    get(...keys) {
        if (keys.length == 1) return this.store[keys[0]]
        return keys
            .filter((key) => key in this.store)
            .map((key) => ({ name: key, value: this.store[key] }))
    }
    addString(key, val) {
        if (this.store[key]) this.store[key] += '\n' + val
        else this.store[key] = val
    }
    get isEmpty() {
        return isEmpty(this.store)
    }
    get empty() {
        if (isEmpty(this.store)) return true
        return false
    }
    forEach(parser) {
        Object.entries(this.store).forEach(([a, b], i) => parser(a, b, i))
    }
    constructor({ datestamp = false } = {}) {
        this.store = {}
        this.setDatestamp = datestamp
    }
    add(...args) {
        if (args.includes(null) || len(args) < 2) return
        if (len(args) == 2) this.addList(...args)
        else if (len(args) == 3 && args[2].includes('kt')) this.addList(...args)
        else if (len(args) == 3) {
            this.addDict(...args)
        } else if (args[3] == 'list') this.addStoreList(...args)
        else if (args[3] == 'string-object') this.addStringObject(...args)
        else if (args[3] == 'merge') this.addDict(...args)
        else if (len(args) == 4) this.addFamily(...args)
        else if (len(args) >= 5) this.addStringDict(...args)
    }
    addStoreList(parent, child, val) {
        if (!this.store[parent]) this.store[parent] = {}
        if (!this.store[parent][child]) this.store[parent][child] = []
        if (isArray(val)) {
            val.forEach((el) => this.store[parent][child].push(el))
        } else {
            this.store[parent][child].push(val)
        }
    }

    addFamily(parent, child, grandchild, content) {
        if (!this.store[parent]) this.store[parent] = {}
        if (!this.store[parent][child]) this.store[parent][child] = {}
        this.store[parent][child][grandchild] = content
    }
    addList(k, v) {
        if (!this.store[k]) this.store[k] = []
        if (isArray(v)) {
            this.store[k] = merge(this.store[k], v)
        } else {
            this.store[k].push(v)
        }
    }
    addStringObject(parent, key, val) {
        if (!this.store[parent]) this.store[parent] = {}
        if (this.store[parent][key]) {
            this.store[parent][key] += '\n' + val
        } else this.store[parent][key] = val
    }

    addDict(parent, key, val, cat = '') {
        if (!this.store[parent]) this.store[parent] = {}
        if (cat == 'deep') {
            if (this.store[parent][key]) {
                this.store[parent][key] = deepMerge(this.store[parent][key], val)
            } else {
                this.store[parent][key] = val
            }
        } else if (cat == 'merge') {
            if (this.store[parent][key]) {
                this.store[parent][key] = merge(this.store[parent][key], val)
            } else {
                this.store[parent][key] = val
            }
        } else {
            this.store[parent][key] = val
        }
    }
    addStringDict(parent, key, val, join, indent, trimmed = false) {
        const start = join.length == 1 && !trimmed ? join : join.slice(1)
        if (!this.store[parent]) this.store[parent] = {}
        if (!this.store[parent][key]) this.store[parent][key] = start
        this.store[parent][key] += stringDictionary(val, join, indent, trimmed)
    }
    get(key = null) {
        return key && key in this.store ? this.store[key] : this.store
    }

    get value() {
        if (this.setDatestamp) this.datestamp()
        return this.store
    }
    set(k, v) {
        this.store[k] = v
    }
}

function lasden(x) {
    return x.length
}

function fastestFunction(s) {
    let params = 's'
    let [name, body] = split(s, 'once')
    if (test('^(?:is|has)', s)) {
    }
    return 'js ' + constructFunction(name, params, body, 'string')
}

function xrep(s, dict) {
    const keys = Object.keys(dict)
    function parser(...args) {
        let x = args[0]
        if (args.length > 1) {
            for (let arg of args.slice(1)) {
                const key = keys.find((x) => x.includes(addBackslashes(arg)))
                return dict[key](...args)
            }
        }
    }
    return replace(keys.join('|'), parser, s)
}

function xreplace(s, dict) {
    const predict = {
        '!=': '!=',
        '!==': '!=',
        '!': 'not ',
        '...': '*',
        '(': '',
        ' {': ':',
        ')': ':',
    }
    let fn, a1, p1, replacement
    const keys = Object.keys(dict)
    function parser(...args) {
        args.pop()
        args.pop()
        args = args.filter((x) => x)
        let x = args[0]
        if (args.length > 1) {
            for (let arg of args.slice(1)) {
                const key = keys.find((x) => x.includes(addBackslashes(arg)))
                fn = dict[key]
                if (fn) return isString(fn) ? fn : fn(...args)
            }
            return ''
        }
        if (x in dict) {
            replacement = dict[x]
        } else if (x in predict) {
            console.log('predict from xreplace')
            replacement = predict[x]
        } else {
            a1 = keys.find((x) => x.includes(addBackslashes(replaceLookAround(x))))
            replacement = dict[a1]
        }
        return isString(replacement) ? replacement : replacement(...args)
    }
    return replace(keys.join('|'), parser, s)
}
const pyjs = {
    'try:': 'try {',
    'except Exception as e:': 'catch(e) {',
}
function jspyBigMethodParser(...args) {
    let _, ret, arr, method, params, body
    if (args.length == 6) [_, ret, arr, method, params, body] = args
    else [_, arr, method, params, body] = args

    const returnStatement = '[ lambdaParser(' + params + ') for ' + params + ' in ' + arr + ' ]'
    const extra = ret ? 'return ' + returnStatement : arr + ' = ' + returnStatement
    lambdaFunction = createFunction('lambdaParser', params, body, 'py')
    return indent(lambdaFunction) + '\n    ' + extra
}

const jspy = {
    '(\\.slice)\\((.*?)\\)': jspySliceParser,
    '(let|const) (\\w+|\\[.*?\\])': (_, tag, s) => (s.startsWith('[') ? s.slice(1, -1) : s),
    [jspyifRE]: jspyifParser,
    '(constructor)\\((.*?) {': (_, __, s) => {
        return '__init__(self' + (s.startsWith(')') ? s : ', ' + s) + ':'
    },
    [classMethodRE]: classMethodParser,
    "(flags = )('.*?')": flagParser,
    '\\.\\.\\.(?=[a-zA-Z])': '*',
    '(?<=\\n|  )}(?!\\))': '',
    '(class )(\\w+) {': (_, a, b) => a + b + ':',
    '(catch)(.*)': pyCatchParser,
    '\\[\\^\\]': '[\\w\\W]',
    '(\\w+)\\.(map)\\(\\(?(.*?)\\)? => (?!{)(.*?)\\)$': (_, a, b, c, d) =>
        '[ ' + d + ' for ' + c + ' in ' + a + ' ]',
    '(Object)\\.(keys|values|entries)\\((.*?)\\)': (_, __, a, b) =>
        b + '.' + (bigmap[a] || a) + '()',
}

const jspymap = {
    js: {
        const: 'const ',
        irm: {
            ff: 'function',
            boo: 'ffffffffffssss',
        },
        fsnippet: (name) => 'function ' + name + '(' + snippetDelimiter + ') {\n' + ' '.repeat(globalTabWidth),
        's +=': "let s = ''",
        function: 'function ',
        add: 'new Storage()',
        append: '[]',
        push: '[]',
        '[': '{}',
        comment: '//',
        log: 'console.log',
    },
    py: {
        const: '',
        irm: {
            ff: 'def',
        },


        log: 'print',
        's +=': "s = ''",
        function: 'def ',
        add: 'Storage()',
        append: '[]',
        push: '[]',
        '[': '{}',
        comment: '#',
    },
}

function topy(x) {
    let code = isFunction(x) ? String(x) : x.trim()
    code = replace('^ *//.*\\n', '', code)
    const jspywb = {
        'console.log': 'print',
        findall: 're.findall',
        re: 'regex',
        function: 'def',
        push: 'append',
        this: 'self',
        String: 'str',
        try: 'try:',
        trim: 'strip',
    }
    const jspynb = {
        '.filter((x) => x)': '[x for x in items if x]',
        's.match(RegExp(re))': 'search(re, s)',
        '===': '==',
        With: 'with',
        ' || ': 'or',
        ' && ': ' and ',
        "'gmi'": 're.M|re.I',
        null: 'None',
        '[^]': '[\\w\\W]',
        'try {': 'try:',
        'else {': 'else:',
        'else ': 'else: ',
        '\\\\': '\\',
    }
    const miscdict = {
        '!': { re: '(?<!<)!', rep: 'not ' },
        '`': { re: '(?<!\\\\)`', rep: "'''" },
    }

    const jspy2 = {
        [jspyBigMethodRE]: jspyBigMethodParser,
        '([\\w\\[\\]()]+)\\.(join|length|toString)\\((.*?)\\)': (_, a, b, c) => {
            if (b == 'length') return 'len' + parens(a)
            if (b == 'join') return c + '.join' + parens(a)
            if (b == 'toString') return 'str' + parens(a) + '()'
        },
    }
    try {
        code = edrep(code, miscdict, jspywb, jspynb)

        code = xreplace(code, jspy)
        code = xreplace(code, jspy2)
        code = xreplace(code, {
            '(}\\))': '',
            '(\\S+)\\.(length)': (_, a) => 'len(' + a + ')',
        })
        return code
    } catch (e) {
        console.log(e)
    }
}

function addBackslash(x) {
    return x.replace(/\n/g, '\\\\$&')
}

function addBackslashes(arg) {
    return arg.replace(/[().*?]/g, (x) => '\\' + x)
}

function asd() {}

function boo() {
    const fs = require('fs')
}

function superFastFunction(s) {
    return constructFunction(...split(s.slice(3), 'twice'))
}

function ac(s, b) {
    if (b || b === '' || b === null) return
    console.log(Accumulate(s))
}

function sc(s, b) {
    if (b || b === '' || b === null) return
    console.log(simplecheck(s))
}

function trimmed(s) {
    return s.replace(/[\t|\n]/g, 'z') + '\n---------------\n'
}

function toLines(s) {
    return s.split('\n')
}
function splitOnce(s, delimiter, parsers = null) {
    var i = s.indexOf(delimiter)
    var splits = [s.slice(0, i), s.slice(i + delimiter.length)]
    if (parsers) {
        return splits.map((item, i) => (parsers[i] ? parsers[i](item) : item))
    }
    return splits
}

function searched(re, s) {
    return s.search(RegExp(rescapeOld(re)))
}

function getLongest(lines, delimiter) {
    return lines.reduce((acc, item) => {
        const index = item.search(RegExp(rescape(delimiter)))
        return Math.max(acc, index)
    }, 0)
}

function linegetter(x) {
    return isArray(x) ? x : x.trim().split('\n')
}

function ezadd(s) {
    s = s.replace(/\\/g, '\\\\')
    return s
}
function alignEquals3(s, delimiter = '//') {
    const before = [')', ':']
    const after = ['=']
    const lines = linegetter(s)
    const longest = getLongest(lines, delimiter)
    let ending, product

    return lines.reduce((acc, item, i, arr) => {
        if (!test(rescape(delimiter), item)) {
            product = item + '\n'
            acc.push(product)
            return acc
        }

        let regex = '(.*?)' + rescape(delimiter) + '(.*?) *$'
        let [a,b] = searcher(regex, item) 
        let spaces = ' '.repeat(longest - a.length)

        if (before.includes(delimiter)) {
            ending = i == arr.length - 1 ? '' : '\n'
            product = a + delimiter + spaces + b + ending
        } else {
            product = a + spaces + delimiter + b + '\n'
        }

        acc.push(product)
        return acc
    }, []).join('')
}
function alignEquals(s, delimiter = '//') {
    const before = [')', ':']
    const after = ['=']
    const lines = linegetter(s)
    const longest = getLongest(lines, delimiter)

    return lines.reduce((acc, item, i, arr) => {
        if (!test(rescape(delimiter), item)) {
            acc += item + '\n'
            return acc
        }

        let [a,b] = searcher('(.*?)' + rescape(delimiter) + '( ?.*?) *$', item)
        // b = ' ' + b.trim()
        let spaces = ' '.repeat(longest - a.length)

        if (before.includes(delimiter)) {
            const ending = i == arr.length - 1 ? '' : '\n'
            acc += a + delimiter + spaces + b + ending
        }

        else {
            acc += a + spaces + delimiter + b + '\n'
            return acc
        }
    }, '')
}


function alignEquals2(s, delimiter = ')') {
    const delimiters = delimiter
        ? [delimiter]
        : setify(s.match(/(?<= )=(?= )|(?<=(?:if|elif|else).*?)(?:\)|:)/g))

    for (let delimiter of delimiters) {
        const lines = isArray(s) ? s : s.trim().split('\n')
        const longest = lines.reduce((acc, item) => Math.max(acc, searched(delimiter, item)), 0)
        s = lines.reduce((acc, item, i, arr) => {
            if (!test(rescapeOld(delimiter), item)) return (acc += item + '\n')
            let [a, b] = splitOnce(item, delimiter)
            b = ' ' + b.trim()
            let spaces = ' '.repeat(longest - a.length)
            if (test('\\)|:', delimiter))
                return (acc += a + delimiter + spaces + b + (i == arr.length - 1 ? '' : '\n'))
            if (test('=', delimiter)) return (acc += a + spaces + delimiter + b + '\n')
        }, '')
    }
    return s
}

function asdfppend(file, content, join = '\n\n') {
    if (isArray(content)) content = content.join(join)
    try {
        fs.appendFileSync(file, '\n\n' + content)
    } catch {
        console.log('error')
    }
}

function getSecondWord(s) {
    try {
        return s.match(/(?<=\w+ )[a-z]+/)[0]
    } catch {
        return ''
    }
}

function getFirstAnything(s) {
    try {
        return s.match(/^\S+/)[0]
    } catch {
        return ''
    }
}

function getFirstWord(s) {
    try {
        return s.match(/[a-zA-Z]+/)[0]
    } catch {
        return ''
    }
}

function nameEndsWith(el, query) {
    return getSecondWord(el).endsWith(query)
}

function orgasdfnize(file, outpath = null) {
    const text = cleanupJavascript(read(file))
    write(file, text)
    const store = {}
    const items = findall(accumulateRE, text, 'g')
    const result = items.reduce(
        (acc, item) => {
            if ('a' === 'b') console.log('this is a IF placeholder')
            else if (item.startsWith('const')) {
                if (test('^.*{', item)) {
                    acc.maps.push(item)
                } else {
                    acc.consts.push(item)
                }
            } else if (item.startsWith('function')) {
                acc.functions.push(item)
            } else acc.classes.push(item)
            return acc
        },
        {
            maps: [],
            consts: [],
            functions: [],
            classes: [],
        }
    )
    const maps = result.maps.sort().join('\n\n')
    const consts = result.consts.sort().join('\n')
    const functions = result.functions.sort(functionSorter).join('\n\n')
    const classes = (result.classes || []).join('\n\n')
    const output = joiner('\n\n', maps, consts, functions, classes)
    write(outpath ? outpath : file, output)
}

function mrpw(files, ...args) {
    if (files == null) files = listFiles('./', { ew: 'js' })
    const store = new Storage()
    for (let file of files) {
        store.merge(rpw(absname(file), ...args))
    }
    return store.value
}

function filtered(iterable, dict) {
    const items = prepareObject(iterable)
    const map = {
        sw: (x, v) => x.startsWith(v),
        ew: (x, v) => x.endsWith(v),
        inc: (x, v) => x.includes(v),
        len: (x, v) => x.length > v,
        n: (x, v) => {
            if (isString(v)) {
                return v == x
            } else {
                for (let item of v) {
                    if (item == x) return true
                }
                return false
            }
        },
    }
    function parserDict([a, b]) {
        for (let [k, v] of Object.entries(dict)) {
            if (map[k]) {
                const action = map[k]
                if (action(b, v) === true) return true
            }
        }
        return false
    }
    function parserList(x) {
        x = basename(x)
        if (library.includes(x)) return false
        for (let [k, v] of Object.entries(dict)) {
            if (map[k]) {
                const action = map[k]
                if (action(x, v) === true) return true
            }
        }
        return false
    }
    if (isObject(iterable)) {
        return Dict(items.filter(parserDict))
    } else {
        return items.filter(parserList)
    }
}

function listFiles(dir, dict) {
    return filtered(absdir(dir), dict)
}

function getDetailedParams(s) {
    console.log(s)
    return s.match(/(?<=^|, ?|\()[a-zA-Z]+(?= ?=|,|\)|$)/g)
}

function convertString(phrase) {
    var maxLength = 100
    var returnString = phrase.toLowerCase()
    returnString = returnString.replace(/ö/g, 'o')
    returnString = returnString.replace(/ç/g, 'c')
    returnString = returnString.replace(/ş/g, 's')
    returnString = returnString.replace(/ı/g, 'i')
    returnString = returnString.replace(/ğ/g, 'g')
    returnString = returnString.replace(/ü/g, 'u')
    returnString = returnString.replace(/[^a-z0-9\s-]/g, '')
    returnString = returnString.replace(/[\s-]+/g, ' ')
    returnString = returnString.replace(/^\s+|\s+$/g, '')
    if (returnString.length > maxLength) returnString = returnString.substring(0, maxLength)
    returnString = returnString.replace(/\s/g, '-')
    return returnString
}

function sum(items) {
    const start = isNumber(items[0]) ? 0 : ''
    return items.reduce((acc, item) => (acc += item), start)
}

function getChunks(s, re = '(?:\\n *)*\\n(?=\\w)') {
    const map = {
        newlines: '(?:\\n *)+',
        doublelines: '(?:\\n *){2,}',
    }
    re = mapgetter(re, map)
    testproduct = s
        .trim()
        .split(RegExp(re))
        .filter((x) => x)
    return testproduct
}

function writeFunctionList(arr) {
    g = new Matrix(arr, 3)
    let s = ''
    for (let column of g.rows) {
        for (let { count, value } of column) {
            value = String(value)
            count = String(count)
            let earlyLineBreak = false
            let startingSpaces = ' '.repeat(3 - count.length)
            let distance = 20 - value.length
            let spaces = distance < 1 ? '\n' : ' '.repeat(distance)
            s += count + '.' + startingSpaces + value + spaces
        }
        s += '\n'
    }
    return s
}

function createFunctionJSON(file, outpath) {
    rpw(
        file,
        (s) => {
            return stringify(getChunks(s).map(getFunctionInfo0120))
        },
        outpath
    )
}

function compare(a, b) {
    return a.localeCompare(b)
}

function createSortFunction(args) {
    return function (a, b) {
        for (let arg of args) {
            if (arg.if && !arg.if(a) && !arg.if(b)) continue
            try {
                if (arg.compare) {
                    if (!arg.parser) arg.parser = (x) => x
                    product = compare(arg.parser(a), arg.parser(b))
                } else {
                    product = arg.parser(a) - arg.parser(b)
                }
            } catch {
                product = null
            }
            if (!product) continue
            else return product
        }
        return a.localeCompare(b)
    }
}

function sorta(a, b) {
    return a.length - b.length || a.localeCompare(b)
    return b - a
    return a.toString() - b.toString()
    return a - b
}

function linecount(s) {
    return count('\n', s)
}
const compareItems = [
    { parser: linecount },
    { compare: true, parser: (x) => getWord(x, 3), if: (x) => x.startsWith('alias') },
]
const sortb = createSortFunction(compareItems)
const items = ['a\n', 'banana', 'b', 'perry', 'apple']

function getFunctionsFiltered(query, arr) {
    return arr.filter((x) => test('//' + query + '\\b', x))
}

function removeWhiteSpaces(s) {
    return s.replace(/\n/g, '\\n').replace(/\t/g, '    ')
}

function trimAndGetSpaces(s) {
    return [s.trim(), getSpaces(s)]
}

function htmlParser(s) {
    if (!test('{', s) && !s.length > 50) s = addTextBlockBrackets(s)
    return LineEditHtml.format(s)
}

function quotify(s) {
    return parens(s, 'dq')
}
function propParser(s) {
    return s.map(quotify).join(', ')
}
class LineEditHtml extends Editor {
    get chunks() {
        const components = exists(this.components) ? Object.keys(this.components) : null
        // tl(this.componentInfo)
        return {
            css: this.cssChunks,
            template: this.value.trim().replace(/\n/g, '\\n'),
            components,
            componentInfo: this.componentInfo,
            dataItems: this.dataItems,
            // componentInfo: this.components, //new edition
        }
    }
    static format(text) {
        const product = new LineEditHtml(text)
        console.log(product)
        return product.chunks
        // tl()
    }
    constructor(text) {
        super(text.trim())
        this.dataItems = []
        this.cssChunks = []
        this.extraNewLine = ''
        this.specialblock = ''
        this.componentInfo = []
        this.components = {}
        this.forEach((line, i, prevLine) => {
            this.parser(line, i, prevLine)
        })
    }

    parser(line, i, prevLine) {
        // console.log( line, '--')
        if (!line) return

        if (line.startsWith('css')) {
            return this.cssChunks.push(cssParser(line.slice(4)))
        }

        let info = lineParserHTML(line)
        // console.log( info )
        if (exists(info.dataItems)) this.dataItems.push(...info.dataItems)
        if (exists(info.componentInfo)) this.componentInfo = info.componentInfo
        // console.log( this.componentInfo )
        // this.componentInfo.key = info.key

        if (!info) {
            let name
            let el
            let css
            let m = search('<(\\w+)(?:.*?class="(.*?)")?', prevLine)
            if (m.length == 2) {
                name =
                    m[0] +
                    m1
                        .split(' ')
                        .map((x) => '.' + x)
                        .join('')
            } else {
                name = m[0]
            }
            name += '::' + el

            this.cssChunks.push(createClass(name, css))
            return
        }

        if (info.isComponent) this.components[info.el] = info.props
        let extra = ''

        if (info.transitionElement && !info.enter) {
            extra += openingTag(info.transitionElement, { name: info.transitionValue })
            info.div =
                extra +
                '\n    ' +
                this.indentation +
                info.div +
                '\n' +
                toClosingTag(info.transitionElement)
        }
        if (info.enter) {
            if (info.transitionElement) {
                extra += openingTag(info.transitionElement, { name: info.transitionValue })
                this.indent += 1
            }
            if (info.vfor) {
                extra += '\n' + this.indentation + '<ul class="vfor">'
                this.indent += 1
            }

            info.div = extra + this.indentation + info.div
            this.tracker[info.spaces] = info

            if (['grid', 'table', 'ul'].includes(info.el)) {
                this.specialblock = info.el
            }
        }
        if (info.exit) {
            this.specialblock = ''
            let { el, vfor, transitionElement, spaces } = this.tracker[info.spaces]
            let transition = transitionElement
            this.tracker[info.spaces] = null
            let content = this.indentation + spaces + toClosingTag(el) + this.extraNewLine
            if (vfor) {
                this.indent -= 1
                content += this.indentation + '</ul>' + '\n'
            }
            if (transition) {
                this.indent -= 1
                content += this.indentation + toClosingTag(transitionElement)
            }
            this.setLine(content, this.index)
        } else {
            let spaces = info.enter ? '' : this.indentation

            if (this.specialblock && !['ul', 'grid', 'table'].includes(info.el)) {
                const map = {
                    ul: (line) => divify('li', line),
                    grid: gridItemParser,
                    table: (line) => divify('li', line),
                }

                this.editLine(map[this.specialblock], this.index)
            } else {
                this.lines[this.index] = info.div
            }

            if (info.cssChunk) this.cssChunks.push(info.cssChunk)
        }
    }
}
const lhtml = LineEditHtml

function jspySliceParser(_, tag, val) {
    let items = val.split(',')
    if (items.length == 1) return '[' + items[0] + ':]'
    if (items.length == 2) {
        return '[' + items[0] + ':' + items[1] + ']'
    }
}

function ts(s) {
    return replace(CAPREGEX, capParser, s)
}

function writeJSON(name, content) {
    if (isObject(content)) content = stringify(content)
    write(name, content)
}

function linkParser(s) {
    if (s.endsWith('js')) return '<script src="./' + s + '"></script>'
    if (s.endsWith('css')) return '<link href="./' + s + '"></link>'
}

function bin() {
    let root = 'https://api.jsonbin.io/b/'
    let latest = '5e9cf5c82940c704e1db3606/latest'
    let overwrite = '5f30ae36dddf413f95c101d3'
    return root + latest
}

const deleterWikiItems = ['<a.*?>', '</a>', 'class=".*?"', '<sup[^]+?</sup>']

function edrep(s, miscdict, wbdict, nbdict) {
    const a = Regex(Object.values(miscdict).map((x) => x.re))
    const b = Regex(wbdict, 'wb')
    const c = Regex(nbdict, 'nb')
    const regex = [a, b, c].join('|')
    function parser(s) {
        if (miscdict[s]) return miscdict[s].rep
        if (wbdict[s]) return wbdict[s]
        if (nbdict[s]) return nbdict[s]
        else {
            console.log(s)
            throw '__ @ edrep ERROR__'
        }
    }
    return replace(regex, parser, s)
}

function createTestObject(...args) {
    const map = {
        string: 'hi, this is a test string',
        number: 4,
        array: [1, 2, 3, 4, 5],
        object: { a: 'b', c: 'd' },
    }
    let k
    return args.reduce((acc, arg, i) => {
        if (isFunction(arg)) {
            console.log('hi')
            arg = map[arg.name.toLowerCase()]
        }
        if (isEven(i)) {
            k = arg
        } else {
            acc[k] = arg
        }

        return acc
    }, {})
}

const list = [0, 1, 2, 3]

const vuedict = {
    [datakey]: 'asdfsddf',
    [methodskey]: 'adf',
    [mountedkey]: 'adf',
    [propskey]: 'adf',
    [computedkey]: 'adf',
    [componentskey]: 'adf',
    [watchkey]: 'adf',
    [templatekey]: 'adf',
}
function vueReplace(s, dict) {
    const regex = '(' + Object.keys(dict).map(rescape).join('|') + ')'
    return replace(regex, (_, x) => x + dict[x], s)
}

function parseQuotes(s) {
    const dasher = ' ?(?:&#x2013;|—|--?|–)(?:<\\w+>)? ?'
    const namer = "(?:[a-zA-Z,.'\"]+ ){1,}[a-zA-Z']+"
    const quoteRE =
        '(?:&#x201C;|(?<!\\w)\'|"|“)(.*?)(?:&#x201D;|(?<!\\w)\'|"|”)(?:' +
        dasher +
        '(' +
        namer +
        '))?'
    const items = findall(quoteRE, s)
    return items.map((x) => {
        if (isArray(x) && x.length == 2) return [removeHtml(x[0]), x[1]]
        if (isString(x)) return removeHtml(x)
        return x
    })
}

function removeHtml(s) {
    return replace('</?\\w+>', '', s)
}

function ppriiint(input) {
    if (isObject(input)) {
        for (let item of Object.values(input)) {
            console.log(item, foo)
            console.log(stringify(item))
        }
    }
}

function toVue(s) {
    return vueReplace(template, Vaccumulate(s))
}

class Storeold {
    constructor() {
        this.store = {}
    }
    add(parent, key, val, mode = 'list') {
        if (!this.store[parent]) this.store[parent] = {}
        let section = this.store[parent][key]

        if (mode == 'string') {
            if (!section) section = ''
            section += '\n' + val
        } else if (isArray(mode)) {
            if (!section) section = []
            if (isArray(val)) {
                val.forEach((item) => section.push(item))
            } else {
                section.push(item)
            }
        } else if (mode == 'object') {
            if (!section) section = {}
            for (let [k, v] of Object.entries(val)) {
                section[k] = v
            }
        }
    }
    addStringDict(parent, key, val, join, indent) {
        const start = join.length == 1 ? join : join.slice(1)
        if (!this.store[parent]) this.store[parent] = {}
        if (!this.store[parent][key]) this.store[parent][key] = start
        this.store[parent][key] += stringDictionary(val, join, indent)
    }
    get value() {
        return this.store
    }
    forEach(parser) {
        for (let [k, v] of Object.entries(tstore)) {
            parser(k, v)
        }
    }
}
function getPartitions(s, delimiter = '') {
    const regex = '(?<=^|\\n)' + '##(\\S+)\\s([^]+?)(?=\\n' + delimiter + '|$)'
    return findall(regex, s, 'g')
}
class StringBuilder {
    constructor({ delimiter = '\n\n', keyOrder = [] } = {}) {
        this.store = {}
        this.delimiter = delimiter
        this.keyOrder = keyOrder
        this.tracked = []
    }
    add(k, v) {
        if (!this.store[k]) this.store[k] = ''
        this.store[k] += v + this.delimiter
    }
    orderKeys(...keys) {
        this.keyOrder = keys
    }
    getValue(parser) {
        if (this.keyOrder) {
            return parser(
                ...this.keyOrder.map((key) => {
                    try {
                        return this.store[key].trim()
                    } catch {
                        return ''
                    }
                })
            )
        }
    }

    get(k, { ignore = null } = {}) {
        if (k == 'keys') {
            const keys = Object.keys(this.store)
            return ignore ? keys.filter((key) => !ignore.includes(key)) : keys
        }
        if (k == 'tracked') {
            return this.tracked
        }

        return this.store[k]
    }
    track(k) {
        this.tracked.push(k)
    }
}

function createHtmlTemplate({
    filler = false,
    doctype = false,
    head = false,
    vue = false,
    indentation = 4,
    meta = false,
    online = false,
    title = '',
    csslink = '',
    css = '',
    js = '',
    html = '%html',
    favico = '',
    libraries = '',
    vuex = '',
    vuerouter = '',
    printStatement = false,
    topLevelHtml = false,
    jsFiles = [],
    cssFiles = [],
} = {}) {
    const librarymap = {
        video: {
            js: 'https://vjs.zencdn.net/7.10.2/video.min.js',
            css: 'https://vjs.zencdn.net/7.10.2/video-js.css',
        },
    }

    const katex2 =
        '<script defer src="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.js" crossorigin="anonymous"></script>'
    const katex =
        '<link rel="preload" href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/fonts/KaTeX_Main-Regular.woff2" as="font" type="font/woff2" crossorigin="anonymous">\n<script src="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.js"></script>\n<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"/>'

    printStatement = printStatement ? 'onafterprint="self.close()"' : ''
    vueValue = online ? 'https://unpkg.com/vue' : './vue.js'

    function libraryReducer(acc, item) {
        let el = libmap[item]
        if (el.css) acc += stringElt('link', '', el.css) + '\n'
        if (el.js) acc += stringElt('script', '', el.js) + '\n'
        return acc
    }

    if (vue) topLevelHtml = true
    libraryFiles = null
    if (exists(jsFiles) || exists(cssFiles)) {
        topLevelHtml = true
    } else {
    }

    topLevelHtml = topLevelHtml ? 'html' : null
    header = topLevelHtml ? 'head' : null
    bodyTag = topLevelHtml ? 'body' : null
    vuex = vuex ? ['script', '', './vuex.js'] : null
    vuerouter = vuerouter ? ['script', '', './vuerouter.js'] : null
    title = title ? ['title', title, ''] : null
    csslink = csslink ? ['link', '', 'styles.css'] : null
    vue = vue ? ['script', '', vueValue] : null
    // console.log( vue, 'asdf' )
    css = css ? ['style', css, '', { newlines: true }] : null
    js = js
        ? ['script', js, '', { newlines: true, internalPadding: true, externalPadding: true }]
        : null
    html = html ? ['', html, '', { newlines: false }] : null
    favico = favico
        ? [
              '',
              '<link rel="icon" href="' + favico + '" type="image/png" />',
              '',
              { newlines: false },
          ]
        : null

    let s = ''
    if (doctype) s += '<!DOCTYPE html>\n'

    s += stringElt(topLevelHtml, [
        [header, [title, favico, ...jsFiles, ...cssFiles, vuerouter, vuex, vue, csslink, css]],

        [bodyTag, [html, js], printStatement],
    ])
    return topLevelHtml ? s : smartDedent(s)
}

function combine(arr) {
    const store = new SimpleStorage(arr)
    return store.value
}
function createHtmlPage(s) {
    let store
    let cssPresets = ''
    ;[s, store] = configureAttributes(s)

    store = combine(store)
    if (exists(store.css)) cssPresets += store.css.join('\n') + '\n\n'

    let [htmlText, cssStore] = mreplace3(s, {
        '^css[^]+?\\n\\n': {
            replace: '',
            store: (x) => cssParser(x.slice(3, -2)),
        },
    })
    const product = htmlParser(s)
    const html = visibleNewLines(product.template)
    const css = cssPresets + [...product.css, ...cssStore].join('\n\n')
    const libraries = []
    if (store.script) libraries.push(...store.script)
    if (store.link) libraries.push(...store.link)

    return htmlHelper({
        css,
        html,
        libraries,
    })

    const template = createHtmlTemplate({ html, css, jsFiles: store.script, cssFiles: store.link })
    return template
}

function prepareVueStringForCreatePage(s) {
    let cssStore
    ;[s, injectComponents] = mreplace(startingAttrRE, s)

    // ;[s, cssStore] = drep9002(s, {
    // '^\\w+ =.*': (s) => ['', cssParser2]
    // })
    // tl(s)
    ;[s, cssStore] = mreplace3(s, {
        '^\\w+ =.*': {
            replace: '',
            store: cssParser2,
        },
    })

    s = s.replace(/^root/m, '##root\n')

    if (test('^v', s, 'm')) {
        s = replace(
            '^v(\\w+) (.*)',
            (_, x, y) => '##' + x + '\n' + '#template' + ' container ' + y,
            s,
            'gm'
        )
    } else if (!test('^##', s)) {
        s = '##root\n#template\n' + s
    }
    return [s, cssStore, injectComponents]
}

function createVuePage(text, { injectComponents = false, title = 'Vueee Suuuuper App' } = {}) {
    text = removeComments(text.trim(), 'js')
    text = pedit(text)
    let [s, cssStore, injections] = prepareVueStringForCreatePage(text)

    const ss = new StringBuilder({
        delimiter: '\n\n',
        keyOrder: ['css', 'components', 'root'],
    })

    const store = {}
    let info = {}
    const [root, components] = split(getPartitions(s, '##'))
    const componentNames = components.map((x) => x[1])

    for (let [name, component] of components) {
        const dict = Vaccumulate(component)

        if (dict.css) {
            ss.add('css', dict.css)
        }
        store[name] = dict
    }
    // tl(store)

    for (let [k, v] of Object.entries(store)) {
        if (k == 'root') {
            continue
        } else {
            const component = toVueComponent(k, v)
            ss.track(k)
            ss.add('components', component)
            if (k.startsWith('v')) masterStore[k] = component
        }
    }

    if (store.root) {
        store.root.template = buildRootFromComponents(store)
        const component = toVueComponent('root', store.root)
        ss.add('root', component)
    }

    if (injectComponents) {
        for (let [k, v] of Object.entries(injectComponents)) {
            ss.add('components', toVueComponent(k, v))
            ss.track(k)
        }
    }

    if (!ss.get('root')) {
        const components = ss.get('tracked')
        const vueObject = {
            template: indent(createVueRootTemplateFromComponentList(components), {
                newlines: true,
            }),
        }

        ss.add('root', toVueComponent(vueObject))
    }

    console.log('hi')
    return cleanupVueString(
        ss.getValue((css, components, root) => {
            css = cssStore.join('') + css
            let js = components ? components + '\n\n' + root : root

            // const libraries = ['vue', 'codemirror', 'highlight', 'styles.css']
            // const product = smartHtmlHelper({js, css, template, libraries})
            // return product

            const baseTemplate = createHtmlTemplate({
                meta: false,
                doctype: false,
                head: true,
                vue: true,
                indentation: 4,
                js: js,
                css: css,
                title,
                html: '<div id="app"></div>',
            })
            return baseTemplate
        })
    )
}
const isHtmlElement = testFactory('<', 'startswith')
const isCssLink = testFactory('.css', 'endswith')
const isScriptLink = testFactory('.js', 'endswith')

function iterativeMatch(el, dict) {
    for (let [k, v] of Object.entries(dict)) {
        if (test(k, el)) return v
    }
    return null
}

function elt(el, content, attrs) {
    const initial = iterativeMatch(el, eltPreMatchObject)
    if (initial) return initial

    let s = toOpeningTag(el, attrs)
    if (hasNewLines(content)) {
        s += parens(content, 'newline-indent')
    } else {
        s += content || ''
    }
    s += toClosingTag(el)
    return s
}

function arraygetter(x) {
    return isArray(x) ? x : [x]
}

//r.js where am i going wrong with this html-string maker
// here is a fiddle
function runelt() {
    const [libraries, css, meta, template, js] = ['a', 'b', 'c', 'd', 'e']
    const object = {
        html: {
            head: {
                libraries: libraries,
                css: css,
                meta: meta,
            },
            body: {
                template: template,
                script: js,
            },
        },
    }

    let indentation = 0
    let s = ''

    function elt(el, content) {
        if (content.includes('\n')) {
            content = '\n' + content.replace(/^/g, ' '.repeat(4)) + '\n'
        }
        return `<${el}>${content}</${el}>`
    }

    function runner(x) {
        for (let [k, v] of Object.entries(x)) {
            if (isObject(v)) {
                return parser(k, v)
            } else if (isString(v)) {
                return v
            }
        }
    }
    function parser(k, v) {
        return elt(k, runner(v))
    }

    console.log(runner(object))
}

function eltRunner(el, children) {
    const [libraries, css, meta, template, js] = ['a', 'b', 'c', 'd', 'e', 'f']
    const object = {
        html: {
            head: {
                libraries: libraries,
                css: css,
                meta: meta,
            },
            body: {
                template: template,
            },
            script: js,
        },
    }
    function runner(x) {
        for (let [k, v] of Object.entries(x)) {
            if (isObject(v)) {
                s += eltString(k, runner(v))
            } else if (isString(v)) {
                s += v + sn
            }
        }
    }
    const format = (x, n = 0) => indent(arraygetter(children).join('\n'), n)
    if (!el) return format(children)
    if (el == 'html') return format(children, 4)

    let INDENTATION = 0
    let s = ''
}

function smartHtmlHelper(items) {
    const map = {
        libraries: (x) => x.map((el) => libmap[el]).join('\n'),
        css: (x) => elt('style', x),
        html: (x) => x,
        js: (x) => elt('script', x),
    }

    const product = Object.entries(items).reduce((acc, [k, v], i) => {
        if (k in map && exists(v)) {
            action = map[k]
            acc.push(action(v))
        }
        return acc
    }, [])

    return product.join('\n\n')
}

function Regex2(
    items,
    {
        map = null,
        extend = null,
        exceptions = null,
        start = '',
        end = '',
        after = '',
        mode = 'default',
        capture = false,
        escape = false,
        startingSpaces = false,
        join = '|',
    } = {}
) {
    
    // console.log( items, '--' )

    if (isString(items)) {
        if (capture) return parens(items)
        else {
            return items
        }
    }

    if (isArray(items) && items.length == 1) {
        if (capture) return parens(items[0])
        else {
            return items[0]
        }
    }

    items = prepareArray(items, 'keys')
    if (extend) {
        modifyArrayExtend(items, extend)
    }
    if (escape) items = items.map(rescape)
    if (capture == 'each') items = items.map((item) => parens(item))
    if (map) items = items.map(map)

    let parenMode = isTrue(capture) ? 'parens' : 'ncg'
    let regex 

     if (mode == 'plb' || mode == 'pla' || mode == 'nlb' || mode == 'nla') {
        regex = parens(items.join(join), mode)
    }
    else {
        regex = parens(items.join(join), parenMode)
    }

    if (mode == 'wb' || mode == 'prose') {
        regex = parens(regex, '\\b')
    } 

    else if (mode == 'wb') {
        regex = parens(regex, '\\b')
    }

    if (start) regex = start + regex
    if (startingSpaces) {
        if (capture) {
            startingSpaces = '^( *)'
        }
        else {
            startingSpaces = '^ *'
        }
        regex = startingSpaces + regex
    }
    if (end) regex += end
    if (after) regex += after
    if (exceptions) {
        regex = replace('\\|' + Regex2(exceptions), '', regex)
    }
    return regex
}

function cleanupVueString(s) {
    let a = ['props: [],', 'components: {},']
    let b = ['methods:', 'computed:', 'watch:', 'mounted\\(\\)']

    let regex =
        '^ *' +
        Regex([
            Regex2(a, { escape: true }),
            Regex2(b, { after: ' {\\s*},? *' }),
            'data\\(\\)\\s*{\\s*return\\s*{\\s*}\\s*}, *',
        ])

    return replace(regex, '', s)
}

function todayDate() {
    return datestamp('%M-%d-%Y')
}

function numbered(text) {
    let count = 0
    function parser(s) {
        count += 1
        return count + '  ' + s
    }
    return replace('^', parser, text)
}

function lineToDictionary(s) {
    return toDictionary(getLineInfoMAPS(s))
}
function removeEverything(s) {
    return removeLookAround(s).replace(/\^|\\\w[\*\+]?|\\(?=\W)/, '')
}
function removeLookAroundSimple(s) {
    return s.replace(/\(\?[^:].*?\)/g, '')
}

function removeLookAround(s) {
    function countParentheses(s) {
        return tally('(?<!\\\\)[()]', s)
    }
    let items = s.split(/(?=\(\?<?[!=])/)
    for (let i = 0; i < items.length; i++) {
        let item = items[i]
        if (/\(\?<?[!=]/.test(item)) {
            let count = 0
            for (;;) {
                item = item.replace(/.*?(?<!\\\\)\)/, '')
                even = isEven(countParentheses(item))
                if (even) break
                if (count++ > 5) throw 'error at splitting something'
            }

            items[i] = item
        }
    }

    return items.join('').replace(/\\b|\^|\\\w[\*\+]/g, '')
}

function dddrep(s, dict, cat = 'allmap') {
    const regex = Regex(dict, cat)
    const newdict = transformDictionary(dict, removeEverything)
    return replaced(regex, newdict, s)
}

function ddrep(s, dict) {
    const regex = Regex(dict)
    const newdict = transformDictionary(dict, removeLookAround)
    const parser = (x) => newdict[x]
    return replace(regex, parser, s)
}
function transformDictionary(dict, kt, vt) {
    const store = {}
    for (let [k, v] of Object.entries(dict)) {
        if (kt) {
            k = kt(k)
        }
        if (vt) {
            v = vt(v)
        }
        store[k] = v
    }
    return store
}

const dicter = {
    '(?<=[a-zA-Z9])9': '(',
}

function getFirstElement(s, mode = '', fallback = null) {
    if (isArray(s)) return s[0]
    if (isNumber(mode)) mode = 'html'
    const regex = firstelementmap[mode] 
    try {
        return s.match(regex)[0]
    }
    catch {
        return fallback 
    }
}

function vuesayhi(...args) {
    console.log(args)
    console.log('vue says hi to this.el', this.$el)
}

function sayhi(...args) {
    console.log('saying hi! to my friends: ', args)
}

function escapeQuotes(s) {
    return s.replace(/'|"/g, '\\$&')
}

function parseHtmlText(text) {
    let product = decodeHtml(deleter(text.trim(), deleterWikiItems))
    if (product.startsWith('<h')) {
        product = deleter(product, ['</?.*?>'])
    }
    product = deleter(product, ['\\[edit\\]', '</?.*?>'])
    return product
}

function ttl(...s) {
    const items = argGetter(s)
    if (isArray(items)) {
        product = items.map((el) => (isFunction(el) ? el.toString() : el))
    } else {
        product = [items, '---------']
    }
    console.log(product)
    throw 'end'
}

function greeting(name) {
    name = capitalize(name)
}

abcd = `
dear parents
we hv 3 goals for our students:
eat smart
run fast
play hard

sincerely
the teachers at sclp\\Student-Circles-Learning-Program
`

const bracketBlockRE = '.*?{[^]+?\n}'

function fixSpacesFactory(term) {
    return (x) => {
        let s = ''
        if (!x.startsWith('\1')) s += x[0] + '\1'
        else {
            s += '\1'
        }
        s += term

        if (!x.endsWith('\1')) {
            s += '\1' + x[x.length - 1]
        } else {
            s += '\1'
        }
        console.log(s)
        return s
    }
}
function cssParser2(text) {
    // console.log( text )
    if (!text.trim()) return ''
    text = drep9000(text, {
        '^ *//.*\n': '',
        ast: '*',
        '.pl.': fixSpacesFactory('+'),
        'lp(?=\\d)': '(',
        'rp\\b': ')',
        '.gt(?![rc]).': fixSpacesFactory('>'),
        '`': '~',
    })

    // console.error( text )
    const product = new CssLineEdit(text, runner94).value
    // console.error( product)
    return product
}

function cssParser(text) {
    if (!text.trim()) return ''
    text = drep9000(text, {
        '^ *//.*\n': '', //removes simple js comments
        ast: '*',
        '.pl.': fixSpacesFactory('+'),
        'lp(?=\\d)': '(',
        'rp\\b': ')',
        '.gt(?![rc]).': fixSpacesFactory('>'),
        '`': '~',
    })

    const nickname = new Nickname({ regex: '\\..*?-', setter: (x) => '.' + x })
    const lines = findall(bracketBlockRE + '|.+', text).map(trimBlock2)

    let s = ''
    let mq = false
    let match
    let count = 0
    lines.forEach((line, i) => {
        if (!line) {
            if (i == lines.length - 1 && mq) {
                s += '\n}'
            }
            if (mq) count++
            return
        }

        if (mq && count > 3) {
            mq = false
            s += '\n}\n\n'
            count = 0
            return
        }

        let indented = mq ? indent : ph
        if (test('^2', line)) s += indented(cssdoublecolon(line, lines[i - 1]) + '\n')
        else if ((match = search('^mq(sm|md|lg|end)', line))) {
            if (match == 'end') {
                mq = false
                s += '\n}\n\n'
            } else {
                if (mq) {
                    s += '\n}\n\n'
                }
                mq = true
                mode = match
                s += mediamap[mode] + '\n'
                count = 0
            }
        } else if ((match = search('^m(lg|md|sm) (.*)', line))) {
            s += mediamap[match[0]] + '\n'
            s += indent(parser(match[1]))
            s += '\n}\n'
        } else {
            s += indented(parser(line)) + '\n\n'
        }
    })

    return s.replace(/\1/g, ' ') //the product
    function parser(text, previous = '') {
        let className, s
        if (test('--', text)) {
            ;[className, s] = split(text, /--/)
        } else {
            let regex = '((?:[a-zA-Z.-]+)(?: (?:>|~|\\+) [a-zA-Z.-]+)*) (.*)'
            ;[className, s] = searcher(regex, text)
        }
        className = nickname.getShortName(className)

        let product = s
            .split(' ')
            .map(runCss)
            .flat()
            .reduce((acc, [k, v]) => {
                return acc + k + ': ' + v + ';\n'
            }, '')

        product = indent(alignEquals(product, ':'))
        return createCssClass(className, product)
    }
}

function ended(s, delimiter = 'end') {
    return s.match(RegExp('[^]+?(?=' + delimiter + '|$)'))[0].trim()
}
class MagicScript {
    constructor() {
        this.code = ''
    }
    wrapper() {
        try {
            this.run()
        } catch {
            console.log('sdf')
        }
    }
    run(s) {
        try {
            console.log(s)
            console.log('isdfsdfsdhi')
        } catch {
            console.log('asdf')
        }
    }
}

function iterate2(items, parser) {
    items.forEach((item, i) => {
        parser(item, i)
    })
}
function iterate(fn, n, ...args) {
    const store = []
    if (isNumber(n)) {
        for (let i = 0; i < n; i++) {
            let product = fn(...args)
            store.push(product)
        }
    }

    return store
}

function ascending(arr) {
    return arr.sort((a, b) => a - b)
}

function quantile(arr, q) {
    const sorted = ascending(arr)
    const pos = (sorted.length - 1) * q
    const base = Math.floor(pos)
    const rest = pos - base
    if (sorted[base + 1] !== undefined) {
        return sorted[base] + rest * (sorted[base + 1] - sorted[base])
    } else {
        return sorted[base]
    }
}
function eliminateOutliers(arr) {
    function runner(dir) {
        const median = quantile(arr, 0.5)
        const stdev = standardDeviation(arr)
        const parser =
            dir == 'upperBoundary'
                ? (x) => x < median + stdev * 1.5
                : (x) => x > median - stdev * 1.5

        arr = arr.filter(parser)
    }

    let copy = arr.slice()
    arr.sort(subtract)
    runner('upperBoundary')
    runner('lowerBoundary')
    return arr
}
function getSymmetricDifference(a, b) {
    ;[b, a] = sorted([a, b])
    const store = []
    for (let i = 0; i < a.length; i++) {
        if (!b.includes(a[i])) {
            store.push(a[i])
        }
    }
    return {
        original: a,
        filtered: b,
        outliers: store,
    }
}
function getOutliers(arr) {
    const filtered = eliminateOutliers(arr)
    return getSymmetricDifference(arr, filtered)
}

function swap(dict) {
    if (isArray(dict)) {
        return [dict[1], dict[0]]
    }
    return Object.entries(dict).reduce((acc, [a, b]) => {
        acc[b] = a
        return acc
    }, {})
}

// let arr = [1, 1, 4, 5, 6, 120, 9, 11, 12, 13, 14, 11, 12, 100, 140]

function withinStandardDeviatfhfghfghfgion(arr) {
    const std = standardDeviation(arr)
    const avg = average(arr)
    console.log(std, avg)
    return arr.map((item) => {
        let validity = item < Math.abs(avg - 3 * std)
        return { item, validity }
    })
}

function standardDeviation(values) {
    var avg = average(values)

    var squareDiffs = values.map(function (value) {
        var diff = value - avg
        var sqrDiff = diff * diff
        return sqrDiff
    })

    var avgSquareDiff = average(squareDiffs)

    var stdDev = Math.sqrt(avgSquareDiff)
    return stdDev
}

function averaged(data) {
    var avg = summed(data) / data.length
    return avg
}

function average(data) {
    var avg = summed(data) / data.length
    return avg
}

function summed(items) {
    return items.reduce((sum, item) => sum + item, 0)
}

function reduced(arr, parser, mode = 'object') {
    if (mode == 'object') {
        return arr.reduce((acc, item, i) => {
            let [k, v] = parser(item, i)
            acc[k] = v
            return acc
        }, {})
    }
}

function sreduce(x, p) {
    console.log(stringify(reduced(x, p)))
}

async function request2(url, fn) {
    url = 'https://cors-anywhere.herokuapp.com/' + url
    const { data } = await axios.get(url)
    return fn ? fn(data) : data
}

function speakAxios() {
    return ''
}

function checkjs99(file) {
    function getChunks(s, spacing = true) {
        let trimSpaces = spacing ? '(?:\\n *)*' : ''
        let re = trimSpaces + '\\n(?=\\w)'
        return s.trim().split(RegExp(re))
    }
    let count = 0
    const chunks = getChunks(deleter(null, textgetter(file)))
    for (let chunk of chunks) {
        count++
        try {
            eval(chunk)
        } catch (e) {
            if (e.message == 'Unexpected end of input') {
                console.log(e.name)
                console.log(e.message)
                console.log(numbered(chunk) + '\n\n')
                return false
            }
        }
    }
    return true
}
function parseHtmlArticle(s) {
    const [title, author] = getArticleInfo(s)
    const htmlitems = ['<p>.*', '&nbsp; ?', '<a>.*?</a>', '<.*?>', '</.*?>']
    let items = getParagraphs(deleteDivs(['figure', 'blockquote'], s))
    items = items.map((x) => deleter3(x, htmlitems)).filter((x) => x)

    return { title, author, items }
}

class TextCapture {
    action(obj) {
        const preset = ['text']
        const store = {}
        for (let [k, v] of Object.entries(ob)) {
            if (!preset.includes(k)) {
                store[k] = this.find(v)
            } else {
                if (k == 'text') {
                    if (v) this.setOptions(v)
                    store[k] = this.search()
                }
            }
        }
        return store
    }

    setOptions(o) {
        if (o.inclusive) this.inclusive = o.inclusive
        if (o.escape) this.escape = o.escape
        if (o.start) this.start = o.start
        if (o.end) this.end = o.end
        if (o.json) this.json = o.json
    }
    constructor(text) {
        this.text = text
        this.escape = false
        this.start = ''
        this.end = ''
        this.body = '[^]+?'
        this.inclusive = false
        this.json = false
    }
    set regex(val) {
        this.regex = val
    }

    get regex() {
        const start = this.escape ? rescape(this.start) : this.start
        const end = this.escape ? rescape(this.end) : this.end
        if (this.inclusive) {
            return start + this.body + end
        } else {
            return '(?<=' + start + ')' + this.body + '(?=' + end + ')'
        }
    }

    search() {
        const product = search(this.regex, this.text)
        return this.json ? parseStringJson(product) : product
    }

    find(regex) {
        regex = smartRescape(regex)
        return search(regex, this.text)
    }
}

function parseAtlantic(s) {
    end = '],"leadArt":'
    start = ',"htmlContentSections":['
    title = '<meta property="og:title" content="(.*?)"'
    author = '<meta name="author" content="(.*?)"/>'

    text = new TextCapture(s)
    return text.action({
        author: author,
        title: title,
        text: { start, end, escape: true, inclusive: false, json: true },
    })
}

function getArticleInfo(s) {
    let title
    let author
    if (!title) title = search('<meta property="og:title" content="(.*?)"', s)
    if (!title) title = search(div('title', '(.*?)'), s)
    if (!author) author = search('<meta name="author" content="(.*?)"', s)

    return [title, author]
}

function getParagraphs(s) {
    return findDiv('p', s)
}

function deleteDivs(items, s) {
    let re = simple(items.map((el) => div(el, '[^]+?', '\\b.*?')))
    return replace(re, '', s)
}

function findDiv(el, s) {
    const prohibitmap = {
        p: '(?!ath)',
    }
    const re = createRE({
        start: '<' + el + (prohibitmap[el] || '') + '.*?>',
        end: '</' + el + '>',
        mode: 'captureBetween',
        inclusive: false,
        trim: true,
    })
    return findall(re, s)
}
function deleteDivs(items, s) {
    let re = simple(items.map((el) => div(el, '[^]+?', '\\b.*?')))
    return replace(re, '', s)
}

class RE {
    static join(...items) {
        return argparse(items).join('.*?')
    }
}

function axrgparse(items) {
    if (items.length == 1 && isArray(items[0])) return items[0]
    return items
}

class Counter {
    constructor() {
        this.store = []
    }
    isFirst(val) {
        if (this.store.includes(val)) return false
        else {
            this.store.push(val)
            return true
        }
    }
}
function lineEditor(s, dict) {
    const count = new Counter()
    const lines = isArray(s) ? s : s.split('\n')
    let parser
    if (dict.on) {
        regex = '^ *' + Regex(dict.on)
        lines.forEach((line, i) => {
            match = search(regex, line)
            if (match) {
                innerdict = dict.on[match]
                let spaces = getSpaces(line)

                if (count.isFirst(match)) parser = innerdict.enter
                else if (test('^ *' + match, lines[i + 1])) parser = innerdict.during
                else parser = innerdict.exit

                lines[i] = spaces + parser(line.trim())
            }
        })
    }
    return lines.join('\n')
}

function transformhtml(s) {
    s = drep(s, { title: 'h1 ', line: 'hr', '-': 'li ' }, { style: '', start: '^' })
    return s
    return lineEditor(s, {
        on: {
            '-': {
                enter: (line) => '<ul>\n    ' + line,
                during: (line) => '    ' + line,
                exit: (line) => '    ' + line + '\n</ul>',
            },
        },
    })
}

function testhtmlparser(s) {
    const product = htmlParser(transformhtml(globalDocumentEdit(s)))
    console.log(product.css)
    console.log(viewString(product.template))
    return
}

function formatName(s) {
    return s.split(' ').map(capitalize).join(' ')
}
function contactParser(s) {
    let phone, attrs, name, rest
    ;[s, phone] = mreplace('(?<!=)\\d{3,}\\S+', s, { once: true })
    ;[s, attrs] = mreplace(attrRE, s)
    if (attrs.date) {
        attrs.date = formatDate(attrs.date)
    }
    name = formatName(s)
    return { name, phone, ...attrs }
}
function createi18(values) {
    const i18n = new VueI18n({
        locale: getNavigatorLanguage(),
        values: values,
    })
    return i18n
}

function googleAnalytics() {
    ;(function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r
        ;(i[r] =
            i[r] ||
            function () {
                ;(i[r].q = i[r].q || []).push(arguments)
            }),
            (i[r].l = 1 * new Date())
        ;(a = s.createElement(o)), (m = s.getElementsByTagName(o)[0])
        a.async = 1
        a.src = g
        m.parentNode.insertBefore(a, m)
    })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga')

    ga('create', 'UA-1438574-27', 'internetlivestats.com')
    ga('send', 'pageview')
}
function isFalse(x) {
    return x === false
}
function isTrue(x) {
    return x === true
}

function weeklyStorage(el, value) {
    let val = getStorage(el)
    if (isUndefined(val)) {
        setStorage(el, value)
    }
}
function daycookie(val) {
    if (getCookie(val)) return false
    setCookie(val)
    return true
}

function createTest(...args) {
    if (args.length == 1)
        return function (x) {
            return test(args[0], x)
        }

    if (args.length == 2)
        return function (x) {
            if (isString(x)) return test(args[0], x)
            if (isNumber(x)) return args[1](x)
        }
}

function isDefined(x) {
    return !isUndefined(x)
}

function gcd(a, b) {
    if (b < 0.0000001) return a // Since there is a limited precision we need to limit the value.

    return gcd(b, Math.floor(a % b)) // Discard any fractions due to limitations in precision.
}

function toFraction(decimal) {
    if (decimal.startsWith('.')) decimal = '0' + decimal
    var len = decimal.toString().length - 2
    var denominator = Math.pow(10, len)
    var numerator = decimal * denominator

    var divisor = gcd(numerator, denominator) // Should be 5
    console.log(divisor)

    numerator /= divisor // Should be 687
    denominator /= divisor // Should be 2000

    return Math.floor(numerator) + '/' + Math.floor(denominator)
}
function isInteger(n) {
    return Number.isInteger(Number(n))
}

function holde() {
    function run(fn, v) {
        return fn(v)
    }
    function sayhi(name) {
        return name
    }
    const value = 'john'

    const ctlr = {
        a: () => this.run(this.sayhi, this.value),
    }

    console.log(ctlr.a())
}

function thisParent() {
    const a = 'apple'
    console.log(this.a)
}

function uploadItem(x) {
    x = getStorage(x)
}

function downloadItem(x) {}

function boolean(x) {
    return !!x
}

function captureBetween2(start, end, s) {
    start = rescape(start)
    end = rescape(end)
    return search(start + '([^]+?)' + end, s)
}
function getParamNames(fn) {
    const s = fn.toString()

    try {
        if ((test('.*?=>'), s)) {
            return captureBetween2('(', ') =>', s).split(/, ?/)
        }

        return s
            .match(/.*?\((.*?)\) {/)[1]
            .split(/(?: = .*?)?, ?/)
            .filter((x) => x)
    } catch {
        return []
    }
}

const refixmap = {
    'experfor examplence': 'experience',
    "I'm(?! )": 'im',
    'aNew York': 'any',
}
class WebBuilder {
    constructor(text, { parser = 'html' } = {}) {
        const map = {
            html: htmlParser,
            css: cssParser,
            vue: createVuePage,
        }
        this.text = text
        this.parser = map[parser]
    }
    build() {}
}

s = 'n 3foo its a gud day to play lk 22p dis itz ok  oh yaeh ty'
const sqRE = "(?<!\\\\)'[^]+?(?<!\\\\)'"
const dqRE = '(?<!\\\\)"[^]+?(?<!\\\\)"'
const tildaRE = '(?<!\\\\)`[^]+?(?<!\\\\)`'
const eqRE = ' ?= ?'
const consoleLogRE = 'console\\.log\\((.*?)\\)$'

const guotieRE =
    '^(\\w+)' +
    eqRE +
    Regex([sqRE, dqRE, tildaRE], { capture: true }) +
    '\\s*' +
    '// ?' +
    consoleLogRE

function guotie(s) {
    const dict = {
        [guotieRE]: {
            replace: '',
            store: guotieParser,
        },
        ['^// ?' + consoleLogRE]: {
            replace: '',
            store: (x) => x,
        },
    }
    return mreplace3(s, dict)
}
s = 'zoop=\nhow do u do\n\n\n// console.log(testfunc(zoop))\n'
function mreplace3(s, dict, { argMode = false, announce = false, flags = 'gm' } = {}) {
    const store = []
    const regex = Regex(dict)

    function parser(...args) {
        args = args.slice(0, -2).filter((x) => x)

        for (let [k, v] of Object.entries(dict)) {
            if (test(k, args[0])) {
                const items = countParentheses(k) > 0 ? args.slice(1) : args.slice()
                if (v.mutate) v.mutate(...items)
                if (v.store) store.push(v.store(...items))
                return lambdaReplace(v.replace)(...items)
            }
        }
    }
    s = s.trim().replace(RegExp(regex, flags), parser).trim()
    return argMode ? [s, ...store.flat()] : [s, store]
}

function pipe3(...functions) {
    console.log(functions)
    return (...args) => {
        console.log(args)
        return functions.reduce(
            (acc, fn) => fn(acc),
            () => {}
        )
    }
}

function pipe4(...functions) {
    const _pipe = (acc, item) => (...args) => item(acc(...args))
    return functions.reduce(_pipe)
}

function replicate(x, n = 2) {
    return new Array(n).fill(x)
}

const incrementByOne = (x) => x + 1
// const multiplyThenReplicate = pipe(multiply, replicate, multiply)
function mathHeaper(numbers) {
    var Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    return HeapsPermutation(Numbers, Numbers.length)
}

function CheckForSolution(ListPermutation) {
    var Term1 = ListPermutation[0] + ListPermutation[3] - ListPermutation[5]
    var Term2 = (13 * ListPermutation[1]) / ListPermutation[2]
    var Term3 = 12 * ListPermutation[4]
    var Term4 = (ListPermutation[6] * ListPermutation[7]) / ListPermutation[8]

    var DecimalTerm1 = (13 * ListPermutation[1]) % ListPermutation[2]
    var DecimalTerm2 = (ListPermutation[6] * ListPermutation[7]) % ListPermutation[8]

    if (DecimalTerm1 != 0 || DecimalTerm2 != 0) return false

    if (Term1 + Term2 + Term3 + Term4 == 87) {
        console.log('Solution found: ' + ListPermutation)
        return true
    }

    return false
}

function HeapsPermutation(list, size) {
    if (size == 1) CheckForSolution(list)
    else {
        for (var i = 1; i <= size; i++) {
            HeapsPermutation(list, size - 1)

            if (size % 2) var j = 1
            else var j = i

            swap(list, j - 1, size - 1)
        }
    }
}

function woraHolicGrader() {
    var fs = require('fs')
    var debug = process.argv.some((value) => value.includes('debug'))

    fs.readFile('input.txt', 'utf8', function (err, data) {
        if (err) throw err
        var readingStudents
        var readingAnswer = false
        var answers = []
        var students = new Map()
        if (debug) {
            console.log('Reading file.')
        }
        splitChar = '\n'
        if (splitChar == '\r\n') {
            console.log('ERROR SPLITTING BY WINDOWS LINE ENDINGS')
        }
        data.split(splitChar).forEach((line) => {
            if (debug) {
                console.log(`Reading line: ${line}`)
            }
            if (line == '') {
                return
            }
            if (line.startsWith('Answer')) {
                readingAnswer = true
                return
            }
            if (line.startsWith('S1') && readingAnswer) {
                readingAnswer = false
                readingStudents = true
                line.split(/\s+/).forEach((value, index) => {
                    students.set(index, '')
                })
                return
            }
            if (readingAnswer) {
                answer = line.split(/\s+/)
                answers.push(answer)
                return
            }
            if (readingStudents) {
                let row = line.split(/\s+/)
                if (row.length != students.size) {
                    throw `Number of answers in the row  does not match the number of students.`
                }
                line.split(/\s+/).forEach((value, index) => {
                    students.set(index, students.get(index) + value)
                })
            }
        })

        if (debug) {
            console.log('Answers:')
            console.log(answers)
            console.log('Students:')
            console.log(students)
        }

        students.forEach((value, key, map) => {
            var subjects = new Map()
            var questions = new Map()
            var difficulties = new Map()
            value.split('').forEach((answer, index) => {
                var correctAnswer = answers[index][0]
                var subjectKey = answers[index][1]
                var questionKey = answers[index][2]
                var difficultyKey = answers[index][3]
                var correct = answer == correctAnswer ? 1 : 0
                var subject = subjects.has(subjectKey)
                    ? subjects.get(subjectKey)
                    : { total: 0, correct: 0 }
                subject.total++
                subject.correct += correct

                var question = questions.has(questionKey)
                    ? questions.get(questionKey)
                    : { total: 0, correct: 0 }
                question.total++
                question.correct += correct

                var difficulty = difficulties.has(difficultyKey)
                    ? difficulties.get(difficultyKey)
                    : { total: 0, correct: 0 }
                difficulty.total++
                difficulty.correct += correct

                subjects.set(subjectKey, subject)
                questions.set(questionKey, question)
                difficulties.set(difficultyKey, difficulty)
            })

            if (debug) {
                console.log('subjects:')
                console.log(subjects)
                console.log('questions:')
                console.log(questions)
                console.log('difficulties:')
                console.log(difficulties)
            }

            var contents = `Student ${key + 1}:\n`
            contents += `\n`
            subjects.forEach((value, key) => {
                if (debug) {
                    contents += `${key} - `
                }
                contents += `${value.correct}/${value.total}\n`
            })
            contents += `\n\n`
            questions.forEach((value, key) => {
                if (debug) {
                    contents += `${key} - `
                }
                contents += `${value.correct}/${value.total}\n`
            })
            contents += `\n\n`

            difficulties.forEach((value, key) => {
                if (debug) {
                    contents += `${key} - `
                }
                contents += `${value.correct}/${value.total}\n`
            })
            contents += `\n`

            fs.appendFileSync('output1.txt', contents)
        })

        answers.forEach((value, number, array) => {
            fs.appendFileSync(
                'output1.txt',
                `${
                    Array.from(students.values())
                        .map((v) => v.charAt(number))
                        .filter((v) => v == value[0]).length
                }/${students.size}\n`
            )
        })
    })
}

function squirrelD2JspCode() {
    var today = new Date()

    var date = today.getMonth() + 1 + '-' + today.getDate() + '-' + today.getFullYear()

    function isTag(s) {
        if (s.startsWith('Tag')) return true
        return false
    }

    function getTag(s) {
        var foo = s.split('=')[1].trim().split("'")
        tagMarker = foo[0].trim()
        tag = foo[1].trim()
        return { tag: tag, marker: tagMarker }
    }

    function isTagged(s, dict) {
        var mTag
        var res = {}

        if (s.endsWith('?') || s.endsWith('"')) {
            mTag = s
        } else {
            mTag = s.slice(-1)
        }

        res['result'] = false
        res['tag'] = ''
        dict.forEach((tagInfo, idx) => {
            if (tagInfo['marker'] == mTag) {
                res['result'] = true
                res['tag'] = tagInfo['tag']
            }
        })
        return res
    }

    var lines = require('fs').readFileSync('data.txt', 'utf8').split('\n').filter(Boolean),
        tags = [], //This is an empty array.
        output = {} //This is an empty object

    lines.forEach((line, idx) => {
        if (isTag(line)) {
            tags.push(getTag(line))
        }
    })

    tags.forEach((tag, idx) => {
        output[tag['tag']] = []
    })

    lines.forEach((line, idx) => {
        var check = isTagged(line, tags)
        if (check['result'] === true) {
            output[check['tag']].push('' + line.slice(0, -1))
        }
    })

    var keys = Object.keys(output),
        stream = require('fs').createWriteStream('Notes | ' + date)

    keys.sort()
    stream.once('open', function (fd) {
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i],
                vals = output[key]
            stream.write(key.concat(':\n\n'))
            vals.map((x) => stream.write(x.concat('\n')))
            stream.write('\n\n')
        }
        stream.end()
    })
}


function maybeNinjaD2jspCode() {
    fs = require('fs')

    const split = fs.readFileSync('data1.txt', 'utf8').split('\n')

    var builder = {}
    var lastCategorySeen = ''
    for (var i = 0; i < split.length; i++) {
        var so = split[i].trim() //trim will  remove a character return (\r) if it's there
        if (so.length > 0) {
            if (so.endsWith(':')) {
                //ends with : so is a category..
                var sotc = so.substring(0, so.length - 1) //trim last char which is colon
                lastCategorySeen = sotc
                if (typeof builder[sotc] === 'undefined') {
                    builder[sotc] = [] //define the category in builder object with empty array
                }
            } else {
                if ((lastCategorySeen || '') !== '') {
                    //prevents an error if a category wasn't defined ie.. the first line of the input isn't a category
                    builder[sotc].push(so)
                }
            }
        }
    }

    var stringBuilder = []
    for (var cat in builder) {
        stringBuilder.push(cat + ':')
        for (var i = 0; i < builder[cat].length; i++) {
            stringBuilder.push(builder[cat][i])
        }
        stringBuilder.push('')
    }
    var ret = stringBuilder.join('\n') // set to \r\n if char return is needed (windows)

    fs.writeFileSync('output.txt', ret)
}

function prepareRedditBodyForDisplay(s) {
    const parts = s.trim().split(/(?<!^    .*?)\n(?=    )|(?<=^    .*?)\n(?=\S)/m)
    return parts.reduce((acc, value) => {
        const name = value.startsWith('    ') ? 'code' : 'prose'
        acc.push({ name, value })
        return acc
    }, [])
}

//---------------------------------- CODE_STARTPOINT

function spaceParser(_, a, b) {
    const item = spaceractionmap[a]
    if (isString(item)) { 
        const args = b.split(' ')
        return templater(item, args)
    }
    else if (isFunction(item)) {
        return item(b)
    }
}

function betweenParser(_, a, tag, b) {
    const map = {
        'is': isParser,
    }
    return map[tag](a,b)
}

function spaceReplace(s) {

    const spaceRE = '\\b' + Regex2(spaceractionmap, {capture: true}) + ' (\\w.+?(?=\\)? {|$))'
    s = replace(spaceRE, spaceParser, s)                  // the parsers
    return s
}

function bestText(s, lang = 'js') {
    if (!lang) lang = getLang(s)
    s = removeJavascriptComments(s)
    s = removeDwl(s)                              // remove initial mistakes
    s = drep9002(s, npdict)                       //parentheses
    s = LineEdit2.format(s)
    s = wbnbReplace(s, lang) 
    s = codeCapitalizer(s)                        // capitalizations
    s = spaceReplace(s)                                   //primary
    s = replace(inbetweenRE, betweenParser, s)            // secondary
    return s.trim()
}
// bestText should not be run at the start.


function srequest(url) {
    if (isNode()) {
         fetch = require('node-fetch')
    }
    const runner = (r) => isJsonResponse(r) ? r.json() : r.text()
    const promise = fetch(prepareUrl(url, options)).then(runner)
    return promise
}

function replaceSpacesInComments(s, delimiter = '___') {
    return replace(lookbehindIsCommentRE + ' .*', (t) => {
        return replace('(?<=\\w+) ', (u) => {
            return delimiter
        }, t)
    }, s)
}



function reader(fn) {
    const text = last(read('test').split('updel')).trim()
    const product = fn(text)
    // console.log( product )
    if (isString(product)) {
        console.log( product )
    }
}
const formatmap = {
    'prose': noteParser,
    'code': bestText,
    'symbol': () => '',
}

function divwrap(fn) {
    // the number of permutations is finite. Knowing this, a lot changes. There are some things that I will refuse to do. 
}
function splitter(s) {
    const pla = (x) => parens(x, 'pla')
    const plb = (x) => parens(x, 'plb')
    const nla = (x) => parens(x, 'nla')
    const nlb = (x) => parens(x, 'nlb')

    const elA = '(?<!//.*?)\\w+ \\w+ \\w+'
    const elB = '^\\w+$'
    const elC = '^---+$'
    const elD = '^[^-]'
    // const elD = '^(?!(?:lbr|-))'

    const RA = elA + '.*?' + '|' + elB
    const RB = elD + '.*?' + elA + '|' + elB
    const RC = elA + '.*?' + '|' + elB
    const RD = '.*?' + elA + '|' + elB + '|' + elC 
    const r = plb(RA) + sn + nla(RB) + '|' + nlb(RC) + sn + pla(RD)

    const a = '(?<=(?<!//.*?)\\w+ \\w+ \\w+.*?|^\\w+$)'
    const b = '(?!.*?(?<!//.*?)\\w+ \\w+ \\w+|^\\w+$)'
    const c = '(?<!(?<!//.*?)\\w+ \\w+ \\w+.*?|^\\w+$)'
    const d = '(?=.*?(?<!//.*?)\\w+ \\w+ \\w+|^\\w+$)'
    // const r = a + sn + b + '|' + c + sn + d

    const regex = RegExp(r, 'm')
    // console.log( regex )
    const chunks = s.split(regex)
    console.error( chunks )
    const product = chunks.map(value => {
        const lang = getLineType(value)
        const format = lang == 'prose' ? noteParser : bestText
        const wrap = lang == 'prose' ? noteParser : bestText
        return format(value)
        // return {lang, value}
    })
    console.log( product )
    return product
}

function splitter22(s) {
    const p = [
        ['const', 'function', 'console', '\\w+ = '],
        ['args'],
        ['{', '}']
    ]

    const startA = '^ *' + Regex2(p[0])
    const startB = Regex2(p[1])
    const startC = Regex2(p[2]) + '$'
    const start = regexjoin(startA, startB, startC)

    const endA = '^ *' + Regex2(p[0]) + '.*?'
    const endB = Regex2(p[1]) + '.*?'
    const endC = Regex2(p[2]) + '$'
    const end = regexjoin(endA, endB, endC)
    // tl(end)
    const a = parens(end, 'nlb')
    const b = parens(start, 'pla')

    const items = [
        'args',
        '[{}]$',
        '^ *const',
        '^ *function',
        '^ *console.log',
    ]
    // const b = '(?<!' + Regex2(items) + '.*?)'
    // const a = '(?=' + Regex2(items) + ')'
    const regex = RegExp(a + sn + b, 'm')
    console.log( regex )
    return s.split(regex)
}



function regexjoin(...items) {
    return items.join('|')
}

function codeCapitalizer(s) {
    const previousWords = ['class ', 'data', 'active', 'current', 'config', 'update', 'create', 'construct', 'to', 'has', 'generate', 'has', 'save', 'is', 'set', 'get', 'append', 'initial', 'final']

    const currentWords = [
        'index',
        'line',
        'file',
        'array',
        'object',
        'items',
    ]

    const delimiter = 'z'
    const a = Regex2(previousWords, {mode: 'plb', start: '\\b', after: '\\w'})
    const b = Regex2(currentWords, {start: '(?<=\\w)'})
    const c = delimiter + delimiter + '[a-zA-Z-]+'
    const d = '(?:[a-y]+' + delimiter + ')+[a-z]'
    const e = '(?<!sto|captu|igno|whe)(?<=[a-z])re(?!\\w)'
    const regex = regexjoin(a, b, c, d, e)

    function parser(s) {
        if (test('re$', s)) {
            return codeCapitalizer(s.slice(0, -2)) + 'RE'
        }
        if (test(delimiter + delimiter, s)) {
            return replace(delimiter, '_', s.slice(2)).toUpperCase()
        }

        if (test(delimiter, s)) {
            return replace(delimiter + '\\w', sliceCapitalize, s)
        }

        return capitalize(s)
    }
    return replace(regex, parser, s)
}
function sliceCapitalize(s) {
    return capitalize(s.slice(1))
}

const npdict = {

    a0: 'args[0]',
    a1: 'args[1]',
    a2: 'args[2]',
    m0: 'matches[0]',
    m1: 'matches[1]',
    m2: 'matches[2]',
    i0: 'items[1]',
    i1: 'items[1]',
    i2: 'items[2]',
    'rb':               '}',
    'lb':               '{',
    'rp':               ')',
    'lp':               '(',
    ';' :               ':',
    '4(?=[a-z])':       '$',
    '3(?=[a-z])':       '#',
    '2(?=[a-z])':       '@', 
    '9': '(',
    '(?<!= )0': ')',
    // '9(?=[90a-zA-Z])':  '(' ,
    // '(?<=[90a-zA-Z])0': ')',
    // '(?<! =)0',
    // '(?<!(?:= |\\[))0': ')',
    nine: '9',
    zero: '0',
}

function replaceFactory(fn, ...args) {
    return (s) => fn(s, ...args)
}

const convertNumbersToParentheses = replaceFactory(drep9002, npdict)

function percentChange(original, final) {
    return ((original - final) / original) * 100
}

const jsmm = {
    '^f\\b': 'function',
    '^ *l\\b': 'let',
    '^ *c\\b': 'const',
      ' pleq ': ' += ',
      ' pl ': ' + ',
      ' p ':  ' + ',
      ' pe ': ' += ',
        ' lte ': ' <= ',
        ' lt ': ' < ',
        ' gt ': ' > ',
        ' gte ': ' >= ',
    '[[': '{',
    ']]': '}',
}

const bestmap = {
    'py': {
        maps: {
            wb: pywb,
            nb: pynb,
            mm: {}
        },
    },
    'js': {
        maps: {
            wb: jswb,
            nb: jsnb,
            mm: jsmm,
        },
    }
}
function splitTwice(items, key) {
    const a = []
    const b = []
    for (let item of items) {
        if (key(item)) {
            a.push(item)
        }
        else {
            b.push(item)
        }
    }
    return [a,b]
}
function wbnbReplace(s, lang) {
    const maps = bestmap[lang]['maps']
    mergeInPlace(wb, maps.wb) 
    const aggregator = (items) => {
        const [a,b] = splitTwice(items, (x) => x.startsWith(' '))
        b.push(Regex2(a, {start: '(?<! )'}))
        return b
    }
    const [miscitems, miscmap] = getRegexAndDictionary(maps.mm, aggregator)
    // console.error( miscmap, miscitems )
    const wbregex = Regex2(wb, {mode: 'wb'})
    const nbregex = Regex2(merge(Object.keys(maps.nb), miscitems))
    const regex = wbregex + '|' + nbregex

    s = replace(regex, (x) => {
        phaser(x)
        const product = wb[x] || maps.nb[x] || miscmap[x]
        return raiser(product)
    }, s)

    return s
}

function phaser(x) {
    const items = ['str', 'list', ' p ']
    if (items.includes(x)) {
        console.red( x )
        console.red( 'phaser' )
    }
}
function raiser(x) {
    if (!x) console.error(x)
    return x 
}
function getMathTemplates(s) {
    const templater = (s) => {
        let count = 0
        const runner = (el) => {
            count += 1
            return parens(alphabet[count] + el, 'brackets')
        }
        return replace('\\$\\d+', runner, s)
    }
    const chunks = getChunks(s)
    for (let i = 0; i < chunks.length; i++) {
        chunks[i] = templater(chunks[i])
    }
    return chunks
}



// ------------------------------------------- CODE_ENDPOINT
function paragraphify(s) {
    return s.replace(/(?<!\s)  (?!\s)/g, '\n')
}
const endsWithLetter = testFactory(/\w$/)
function runjs(s) {
    return checkjs(betterText(s, 'js'))
    return betterText(s, 'js')
}
function indent2(s) {
    console.log(getIndent(s))
    tl(getSpaces(s))
}
function getWordCount(s) {
    return s.length
}
function getDivisors(n) {
    // 1 is a special case where "1 and itself" are only one divisor rather than 2
    if (n === 1) {
        return 1
    }

    var divisors = 2 // acounts for "1 and itself"

    var mod = 2
    while (mod * mod <= n) {
        if (n % mod === 0) {
            if (mod * mod < number) {
                // mod and number/mod are (different) divisors
                divisors += 2
            } else {
                // mod == number/mod is a divisor
                divisors += 1
            }
        }
        mod++
    }

    return divisors
}
function isPerfectNumber(number) {
    let factors = getPrimeFactors(number)
    return sum(factors) == number
    var temp = 0
    for (var i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            temp += i
        }
    }

    if (temp === number && temp !== 0) {
        return true
    } else {
        return false
    }
}
function isPerfectCube(n) {
    return isInteger(Math.cbrt(n))
}
function iterate99(items, runner, ...args) {
    const store = []
    console.log('\n-------starting iteration')
    for (let i = 0; i < items.length; i++) {
        let product
        if (isArray(items[i])) {
            product = runner(...items[i], ...args)
            if (isFunction(product)) {
                product = product(...items[i], ...args)
            }
        } else {
            product = runner(items[i], ...args)

            if (isFunction(product)) {
                product = product(items[i], ...args)
            }
        }

        console.log(items[i], product)
        if (exists(args)) console.log(args)
    }
    console.log('\n-----ending iteration')
}

function absDifference(a, b, answer = null) {
    difference = Math.abs(a - b)
    if (answer) {
        return difference == answer
    }
    return difference
}
function isPerfectSquare(n) {
    return isInteger(Math.sqrt(n))
}
function isPrime(num) {
    var sqrtnum = Math.floor(Math.sqrt(num))
    var prime = num != 1
    for (var i = 2; i < sqrtnum + 1; i++) {
        // sqrtnum+1
        if (num % i == 0) {
            prime = false
            break
        }
    }
    return prime
}
function toArray(x, mode = 'entries') {
    return isArray(x) ? x : Object[mode](x)
}
function buildRootFromComponents(components) {
    const items = []
    for (let [k, v] of Object.entries(components)) {
        if (k == 'root') continue
        items.push(divify(k, '', v.componentInfo))
    }
    return parens(items, 'newline-indent-div')
}
function fetched(url) {
    fetch('https://api.quotable.io/random')
        .then((response) => response.json())
        .then((data) => {
            console.log(`${data.content} —${data.author}`)
        })
}

function clockfix(n) {
    if (n < 10) n *= 1000
    return n
}

function clockAsync(
    {
        onend = () => 1000,
        condition = () => null,
        onstart = console.log,
        ontick = console.log,
        duration = 3000,
        increment = 1000,
        context = null,
        immediate = true,
    } = {},
    ...args
) {
    if (isNumber(arguments[0])) {
        duration = clockfix(arguments[0])
    }
    let count = 0
    let id = null

    if (immediate) {
        // console.log( 'hii' )
        count += increment
        ontick(count, duration)
    }

    function runner() {
        count += increment
        id = setTimeout(() => {
            ontick(count, duration)

            if (count >= duration || condition()) {
                clearTimeout(id)
                return new Promise(resolve => {
                    resolve('hiii')
                })
            } else {
                runner()
            }
        }, increment)
    }

    onstart(...args)
    // onstart.bind(context)()
    // context ? onstart.call(context, ...args) : onstart(...args)
    return runner()
}
function clock(
    {
        onend = console.log,
        condition = () => null,
        onstart = console.log,
        ontick = console.log,
        duration = 3000,
        increment = 1000,
        context = null,
        immediate = true,
    } = {},
    ...args
) {
    if (isNumber(arguments[0])) {
        duration = clockfix(arguments[0])
    }
    let count = 0
    let id = null

    if (immediate) {
        // console.log( 'hii' )
        count += increment
        ontick(count, duration)
    }

    function runner() {
        count += increment
        id = setTimeout(() => {
            ontick(count, duration)

            if (count >= duration || condition()) {
                clearTimeout(id)
                return onend(...args, 'FINISHED')
            } else {
                runner()
            }
        }, increment)
    }

    onstart(...args)
    // onstart.bind(context)()
    // context ? onstart.call(context, ...args) : onstart(...args)
    const product = runner()
}

function hasNewLines(s) {
    return s.includes('\n')
}
function randomized(items) {
    return (min = 0, max = items.length - 1) => {
        max = Math.min(items.length - 1, max)
        console.log(max)
        return items[rng(min, max)]
    }
}
const quoteslist = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const words = ['dog', 'mountain', 'apple', 'banana', 'orange']
const random = {
    randomized(items) {
        return (min, max) => {
            return items[rng(min, max)]
        }
    },
    rng: rng,
    letter: randomized(alphabet),
    word: randomized(words),
    number: rng,
    quote: randomized(quoteslist),
}
function toLambdaFunction(s) {
    let { name, params, body } = getFunctionInfo(s)
    if (body.includes('\n')) {
        body = parens(body, 'brackify')
    } else {
        body = body.trim().slice(7)
    }
    return 'const ' + name + ' = ' + parens(params) + ' => ' + body
}
function curried(...newArgs) {
    if (last(newArgs === true)) {
        newArgs.pop()
        return (fn) => (...originalArgs) => fn(...newArgs, ...originalArgs)
    }
    return (fn) => (...originalArgs) => fn(...originalArgs, ...newArgs)
}

function functionmod(...args) {
    functions = []

    while (isFunction(args[0])) {
        functions.push(args.shift())
    }

    if (exists(args)) {
        modifyArray(functions, -1, curried(args))
    }

    const product = compose(...functions)
    return product
}

function typedAction(arg, dict) {
    console.log(arg)
    let type

    if (arg?.merge == 'string') {
        type = 'addStringDict'
    } else if (arg?.merge) {
        type = 'merge'
    } else {
        type = arg.constructor.name
    }
    console.log(dict[type])
    dict[type]()
}

function argparse(args, order) {
    if (args.length == order.length) return args
    else {
        return order.map((item) => (isDefined(item) ? args[item] : item))
    }
}
// u can give it an options object. inside of the brackets. it will know to evaluate.
function numbergen({
    evaluate = false,
    items = null,
    amount = 10,
    min = 1,
    max = 10,
    range = null,
    pattern = false,
    unique = false,
    start = 1,
    random = false,
    filter = null,
} = {}) {
    let store = []
    const prepare = (n, start) => {
        return n + start
    }

    if (range) {
        ;[min, max] = range
    }

    if (items) {
        store = items
    } else {
        for (let i = start; i < amount + start; i++) {
            if (!pattern) {
                number = random ? rng(min, max) : i
            } else {
                if (isFunction(pattern)) number = pattern(i)
                // if (isFunction(pattern)) number = createPattern(i)
            }
            store.push(number)
        }
    }
    if (filter) store = store.filter(filter)
    if (evaluate) {
        store = store.map(tryval)
    }
    return store
}
function treplace(dict) {
    const teststring = 'hi i lk 2 eat.  this is a new paragraph.p this is also a new paragraph.'
    console.log(drep(teststring, dict))
}
function debounce(fn, delay = 1000) {
    return (...args) => {
        clearTimeout(GLOBAL_TIMEOUT_ID)
        GLOBAL_TIMEOUT_ID = setTimeout(() => {
            fn.call(this, ...args)
        }, delay)
    }
}

function determineMouseMovementDirection(a, b) {
    const getx = (e) => e.x
    const gety = (e) => e.y
    const x = Math.abs(getx(a) - getx(b))
    const y = Math.abs(gety(a) - gety(b))
    return x > y ? 'horizontal' : 'vertical'
}
function getStartingIndexFromValue(list, x) {
    return isNumber(x) ? x : list.indexOf(x)
}
function isNonSpace(s) {
    return !s || s != ' '
}

function isEqual(a, b) {
    return a === b
}
function determinedAction(determineFn, items, actions) {
    const actionIndex = determineFn(...items)
    try {
        actions[actionIndex]()
    } catch {
        console.log(actions)
        console.log(actionIndex)
    }
}
function looksLikePureString(s) {
    return test('^\\w+$', s)
}
function globalDateFixer(s) {
    const regex = Regex(shortmonthnames) + '\\d+'
    return replace()
}
const libmapkeywordslist = [
    'vue', 'codemirror',
]
const libmap = {
    'stdlib': [
        'vue.js',
        'utils.js',
        'methods.js',
        'codemirror.js',
        'codemirror.css',
    ],

    'self': [
        'vue.js',
        'utils.js',
        'methods.js',
        'codemirror.js',
        'codemirror.css',
    ],
    'video': [
            'https://vjs.zencdn.net/7.10.2/video.min.js',
            'https://vjs.zencdn.net/7.10.2/video-js.css',
    ],
    'vue': 'vue.js',
    'vue-all': [
        'vue.js',
        'vuex.js',
        'vuerouter.js',
    ],
    'skulpt': [
        'skulptmin.js',
        'skulptlib.js',
    ],
    'codemirror': [
        'codemirror.js',
        'codemirror.css',
    ],
    'codemirror-js': [
        'codemirror.js',
        'codemirror.css',
        'codemirror-javascript.js',
    ],

    'highlight': [
        'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.5.0/styles/default.min.css',
        'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.5.0/highlight.min.js',
    ],

}

function htmlHelper({ css = '', html = '', libraries = '' } = {}) {
    if (exists(libraries)) {
        return stringElt('html', [
            [null, libraries],
            ['styles', css, { linegap: true }],
            ['body', html, { linegap: true }],
        ])
    } else if (exists(css)) {
        const styles = ['styles', css]
        const template = ['body', html]
        return [styles, template]
            .map((x) => stringElt(...x))
            .join('\n')
            .trim()
    } else {
        return html
    }
}

function isRegexInstance(x) {
    return x.constructor.name == 'RegExp'
}
const utils = {
    restedValue(iterableReceiver, iterable, ...args) {
        return isArray(iterable)
            ? iterableReceiver(...args, ...iterable)
            : iterableReceiver(...args, iterable) // the iterable is a string.
    },

    restful(fn, iterable) {
        return isArray(iterable)
            ? (...args) => fn(...args, ...iterable)
            : (...args) => fn(...args, iterable)
    },
}

function pprint(s) {
    let result
    const options = {
        tabWidth: 4,
        semi: false,
        singleQuote: true,
        printWidth: 120,
        parser: 'babel',
    }
    const map = [
        { inclusive: true, parser: 'html', startRE: '<html>', endRE: '</html>' },
        { inclusive: false, parser: 'babel', startRE: '<script>\n', endRE: '\n</script>' },
        // { parser: 'css', startRE: '<style>', endRE: '</style>' }
    ]
    const regex = map
        .map((item) => parens(captureBetween(item.startRE, item.endRE, item.inclusive)))
        .join('|')

    return replace(
        regex,
        (_, a, b, c) => {
            let parser, x
            if (a) {
                parser = 'html'
                x = a
            } else if (b) {
                parser = 'babel'
                x = b
            } else if (c) {
                parser = 'css'
                x = c
            }
            try {
                return prettier
                    .format(x, { ...options, ...{ parser: parser } })
                    .replace(/;<script/g, '<script')
            } catch (e) {
                console.log(e.message)
                console.log(x)
                throw 'error at pp'
                return x
            }
        },
        s
    )
}

function guotie2(s) {
    // const quoteRE = '(?<!\\\\)\'.*?(?<!\\\\)\'|(?<!\\\\)\".*?(?<!\\\\)\"'
    // const emptyBlockRE = '^ *(?:function )?\\w+\\(.*?\\) {\\s*},?'
    // const callableRE = '^[a-zA-Z.]+\\([^\\n`]+$'
    // const blockQuoteRE = '^ *(?:let |const )?\\w+ =\\s*(?<!\\\\)`[^]+?(?<!\\\\)`.*\\n?'
    s = read('z')
    const pyBlockRE =
        '^\\w+ *= *(?:(?<!\\\\)"""[\\W\\w]+?(?<!\\\\)"""|(?<!\\\\)\'\'\'[\\w\\W]+?(?<!\\\\)\'\'\').*\\n*'

    const pyCommentRE = '^ *# *(.*)\\n*'
    const jsBlockRE = '^(?:const |var )?\\w+ *= *(?<!\\\\)`[\\W\\w]+?(?<!\\\\|=\\s*)`\\s*\\n'
    const jsCommentRE = '^ *// *(.*)\\n*'

    const jsdict = {
        [jsBlockRE]: (_, a) => ['', _, 'blocks'],
        [jsCommentRE]: (_, a) => ['', a, 'expressions'],
    }
    const pydict = {
        [pyBlockRE]: (_, a) => ['', _, 'blocks'],
        [pyCommentRE]: (_, a) => ['', a, 'expressions'],
    }

    const [text, store] = grm(s, jsdict)
    const [a, b] = [text, store.blocks.join('\n\n') + store.expressions.join('\n')]
    write('utils.js', a)
    write('guotie.js', b)
    return

    write('utils.py', a)
    write('guotie.py', b)
}

function getGithubAccount(id) {
    const fetch = require('node-fetch')
    return fetch(`https://api.github.com/users/${id}`).then((res) => res.json())
}

function getGithubAccounts(
    ids = ['nas5w', 'octocat', 'kdog3682', 'foxcvn32s'],
    callback = console.log
) {
    const promises = ids.map(getAccount)
    Promise.all(promises).then(callback)
}
function addCommas(n) {
    return n.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
}
function toCompactString(s) {
    return visible(s)
}
function formatSvgViewBox(svg) {
    const { xMin, xMax, yMin, yMax } = [...svg.children].reduce((acc, el) => {
        const { x, y, width, height } = el.getBBox()
        if (!acc.xMin || x < acc.xMin) acc.xMin = x
        if (!acc.xMax || x + width > acc.xMax) acc.xMax = x + width
        if (!acc.yMin || y < acc.yMin) acc.yMin = y
        if (!acc.yMax || y + height > acc.yMax) acc.yMax = y + height
        return acc
    }, {})
    const viewbox = `${xMin} ${yMin} ${xMax - xMin} ${yMax - yMin}`
    svg.setAttribute('viewBox', viewbox)
}

function deepEqual(obj1, obj2) {
    if (obj1 === obj2)
        // it's just the same object. No need to compare.
        return true

    if (isPrimitive(obj1) && isPrimitive(obj2))
        // compare primitives
        return obj1 === obj2

    if (Object.keys(obj1).length !== Object.keys(obj2).length) return false

    for (let key in obj1) {
        if (!(key in obj2)) return false //other object doesn't have this prop
        if (!deepEqual(obj1[key], obj2[key])) return false
    }

    return true
}

function isPrimitive(obj) {
    return obj !== Object(obj)
}
function deepEqual2(x, y) {
    if (x === y) {
        return true
    } else if (typeof x == 'object' && x != null && typeof y == 'object' && y != null) {
        if (Object.keys(x).length != Object.keys(y).length) return false

        for (var prop in x) {
            if (y.hasOwnProperty(prop)) {
                if (!deepEqual(x[prop], y[prop])) return false
            } else {
                return false
            }
        }
        return true
    } else return false
}
function deepEqualInferior(a, b) {
    if (typeof a == 'object' && a != null && typeof b == 'object' && b != null) {
        var count = [0, 0]
        for (var key in a) count[0]++
        for (var key in b) count[1]++
        if (count[0] - count[1] != 0) {
            return false
        }
        for (var key in a) {
            if (!(key in b) || !deepEqual(a[key], b[key])) {
                return false
            }
        }
        for (var key in b) {
            if (!(key in a) || !deepEqual(b[key], a[key])) {
                return false
            }
        }
        return true
    } else {
        return a === b
    }
}
function jsonEqual(a, b) {
    return JSON.stringify(a) === JSON.stringify(b)
}

function simpleArrayEquality(base, input) {
    if (base.length != input.length) return false
    for (let i = 0; i < base.length; i++) {
        if (base[i] !== input[i]) return false
    }
    return true
}

function getCssElement(line) {}
const blockStartNewLinesDelimiter = '\n}\n\n'
const blockEndNewLinesDelimiter = '\n}\n\n'
const blockEndDelimiter = '\n}'

function cssReducer(acc, [k, v]) {
    return acc + k + ': ' + v + ';\n'
}
function cssFromString(s) {
    let product = s.split(' ').map(runCss).flat().reduce(cssReducer, '')
    product = indent(alignEquals(product, ':'))
    return product
}

function runner94(line) {
    let className, s

    if (test('--', line)) {
        ;[className, s] = split(line, /--/)
    } else {
        let regex = '((?:[a-zA-Z.-]+)(?: (?:>|~|\\+) [a-zA-Z.-]+)*) (.*)'
        ;[className, s] = searcher(regex, line)
    }
    // console.error( className, '--', s )

    this.cssName = this.nickname.getShortName(className)
    return createClass(this.cssName, s)
}

class csslines {
    constructor(s) {
        // super(s)
        this.isMediaQuery = false
        this.cssName = null
        this.emptyLineCount = 0

    }

}

class CssLineEdit {
    get value() {
        return this.text
    }
    constructor(x, runner = null) {
        this.nickname = new Nickname({ regex: '\\..*?-', setter: (x) => '.' + x })
        this.lines = isString(x) ? x.trim().split('\n') : x.trim()
        this.isMediaQuery = false
        this.cssName = null
        this.emptyLineCount = 0
        this.index = 0
        this.store = {}
        this.text = ''
        this.runner = runner.bind(this)
        // console.error( this.runner )
        this.run()
    }
    run() {
        for (let i = 0; i < this.lines.length; i++) {

            this.index = i
            let line = this.lines[i]
            let match

            if (!line) {
                if (this.isLastLine && this.isMediaQuery) {
                    this.text += blockEndDelimiter
                } else if (this.isMediaQuery) {
                    this.emptyLineCount += 1
                }
                continue
            }

            if (this.isMediaQuery && this.count > 3) {
                this.mediaQuery = false
                this.emptyLineCount = 0
                this.text += '\n}\n\n'
                continue
            }

            if (test('^[2@](?:lg|md|sm)', line)) {
                let tag = mediamap2[line.slice(1, 3)]
                let s = line.slice(4)
                let product = brackify(tag, createClass(this.cssName, s), true)
                this.text += product + '\n\n'
                continue
            }

            if (test('^[2@]', line)) {
                this.text += createCssPseudoElement(this.cssName, line)
                continue
            } else if ((match = search('^mq(sm|md|lg|end)', line))) {
                if (match == 'end') {
                    this.isMediaQuery = false
                    this.text += blockEndNewLinesDelimiter
                } else {
                    if (this.isMediaQuery) {
                        this.text += blockStartNewLinesDelimiter
                    }
                    this.isMediaQuery = true
                    this.text += mediamap[match] + '\n'
                    this.emptyLineCount = 0
                }
            } else if ((match = search('^m(lg|md|sm) (.*)', line))) {
                this.text += mediamap[match[0]] + '\n'
                this.text += indent(this.runner(match[1]))
                this.text += blockEndNewLinesDelimiter
                this.isMediaQuery = false
            } else {
                this.text += this.indented(this.runner(line)) + '\n\n'
            }
        }
    }
    get indented() {
        return this.isMediaQuery ? indent : ph
    }

    get prevLine() {
        return this.lines[this.index - 1]
    }
}

function trimBlock2(x) {
    return test('^.*?{', x) ? x.slice(0, -1).replace(/{?\n(?:    )?/g, '') : x
}
function prepareLinks(s) {
    return s.split(/(?<=>) ?(?=<[^\/])/).map((el) => [el])
}
function prepareArray(input, mode = 'keys') {
    return isObject(input) ? Object[mode](input) : input
}
function getIterationValue(s, obj, getter, fallback = null) {
    const list = prepareArray(obj, 'entries')
    for (let i = 0; i < list.length; i++) {
        const product = isArray(list[i]) ? getter(s, ...list[i]) : getter(s, list[i])
        if (product) {
            return product
        }
    }
    return fallback
}

function looksLikeTitle(s) {
    return test(looksLikeTitleRE, s)
}

function hasMultipleSentences(s) {
    return test(hasMultipleSentencesRE, s)
}
function toModuleExports(...args) {
    if (isNode()) {
        if (args.length > 0) {
            for (let arg of args) {
                module.exports[arg.name] = arg
            }
        }
        else {
            module.exports = { createHtmlPage, createVuePage, Accumulate }
        }
    }
}
function insert(item, index, arr) {
    arr.splice(index, 0, item)
    return arr
}
function sprawler(array, start, regex) {
    for (let i = start; i < array.length; i++) {
        if (test(regex, array[i])) {
            return array[i]
        }
    }
    return null
}
function isSectionDeterminer(s) {
    return test('^s=\\w+', s)
}
function looksLikeProse(s) {
    return test('^(?<!}|const|function|async|let|class)\\S', s)
}
function looksLikeCodeBlockEnd(s) {
    const regex = '^}$'
    return test(regex, s)
}

const looksLikeCodeRE = '//|^ |{$|}$|^(?:function|async|const|let|class|\\w+\\()'
function splitCodeAndProse(s) {
    let x = parens(looksLikeCodeRE, 'ncg')
    let a = '(?<!' + x + '.*?)' + '\\n+' + '(?=' + x + ')'
    let b = '(?<=' + x + ')' + '\\n+' + '(?!' + x + ')'
    let regex = a + '|' + b
    return s.trim().split(RegExp(regex, 'm'))
}
const chunktypedict = {
    //alias = 
    // btw iit might be a good idea to require spaces for '//'
    '(?<![\'\":])//': 'js',
    '^  ': 'code',
    '{$': 'js',
    '}$': 'js',
    '^let': 'js',
    'async': 'js',
    'function': 'js',
    'const': 'js',
    'function': 'js',
    ':$': 'py',
    '^- ': 'bullet',
    'lbr': 'linebreak',
    '^----': 'linebreak',

}
function getLineType(line) {

    // return test(looksLikeCodeRE, s, 'm') ? 'code': 'prose'
}
function looksLikeCodeLine(s) {
    return test(looksLikeCodeRE, s)
}

const restarter = '(?<=^|\\n)'
function getRegexIdentifier(re) {
    return search('=|<|>|(?<=\\\\)(?:\\+|\\*|\\?|\\.)', re)
}

function drep8000del(s, dict, testing = false) {
    return grm2(s, dict)

    for (let [k, v] of Object.entries(dict)) {
        let id = getRegexIdentifier(k)
        store[id]
    }
    for (let [k, v] of Object.entries(dict)) {
        s = replace(k, v, s)
    }
    return s
}

function tester(items, parser) {
    console.log(parser.toString())
    lbr()
    const product = items.map((el) => {
        console.log(el, '|', parser(el))
        console.log(lbr())
    })
    console.log('ending test')
}

function isArrayOrObject(x) {
    return typeof x == 'object'
    return isObject(x) || isArray(x)
}

function toLookahead(key) {
    return parens(key, 'la')
}
function getChild(s, key) {
    const spaces = searcher(' *' + toLookahead(key), s)
    const regex = '^' + spaces + key + '.*\\n([^]+?)\\n' + spaces + '}'
    const product = searcher(regex, s, 'm')
    return product
}
function isEmptyString(s) {
    return s === ''
}
function punctuateAndCapitalize(text) {
    const moreGrammar = {
        '^\\w': 'foo',
    }

    return text

    const lines = text.split('\n')
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i]
        if (!line.trim()) continue
        if (test('^    |^ *[*\\d]', line)) continue
        const suffix = test('\\w$', line) ? '.' : ''
        lines[i] = capitalize(line) + suffix
    }
    return lines.join('\n')
}

// an understanding that you might not have the ability to rise higher.
// this is how it goes.
// Return on investment?

const mrepcssdict2 = {
    'css\\s*(\\S[^]+?)(?=\\n\\n|$)': (_, a) => ['', a, 'css'],
    'use (.*)': (_, a) => ['', a, 'use'],
    '\\.(.*)': (_, a) => ['', a, 'css'],
    '(?:watch|data|methods|mounted) (\\w[^]+?)\\n+(?=\\w|$)': (_, a) => ['', a, 'MATCH'],
}

const mrepcssdict = {
    '(?:^|\\n)css\\s*(\\w[^]+?)(?=\\n\\n|$)': (_, a) => ['', a, 'css'],
    '(?<=^|\\n)use (.*)': (_, a) => ['', a, 'use'],
}

const simplemrepworddict = {
    '([a-z]\\w+)\\([a-zA-Z-\'"]{3,})': (_, a, b) => {
        console.log('hi')
        b = dashToSpace(b)
        return [b, [a, b], 'pmap']
    },
}
const mrepworddict = {
    '([a-z]\\w+)\\([A-Za-z]{3,})': (_, a, b) => [b, [a, b], 'pmap'],
    '([a-z]\\w+)\\\\([a-zA-Z-\'"]{3,})': (_, a, b) => {
        b = dashToSpace(b)
        return [b, [a, b], 'pmap']
    },
    '^cmap (.*?) (.*)': (_, a, b) => ['', [a, b], 'cmap'],
}
function getDefinedTag(args) {
    for (let i = 1; i < args.length; i++) {
        if (args[i]) return args[i]
    }
}

function sliceFactory(...args) {
    const [a, b] = argfix(args, [true, null])

    if (b) return (s) => s.slice(a, b)
    return (s) => s.slice(a)
}
function removeRegexCaptureGroups2(re) {
    re = '([a-z\\(\\)])+'
    console.log(re)
    return re.replace(/\((?:\\|\[).*?(?<!\\)\)/g, (...args) => {
        console.log(countAllParentheses(args[0]))
        console.log(args)
    })
}
function removeRegexCaptureGroupsGRM(re) {
    return re.replace(/\((?:\\|\[).*?(?<!\\)\)/g, sliceFactory(1, -1))
}
function removeRegexCaptureGroups(re) {
    return re.replace(/\((?!\?[<=!]).*?(?<!\\)\)/g, sliceFactory(1, -1))
    // return re.replace(/\((?:\\|\[).*?(?<!\\)\)/g, sliceFactory(1, -1)) //GRM is the original version. However, to accomodate the introduction of spaces at the start, this new version was created. The construction is extremely flimsy. 
}

function testingPreview(testing, ...args) {
    if (!testing) return
    if (isNumber(testing)) {
        for (let i = 0; i < testing; i++) {
            console.log(args[i])
        }
    } else if (isString(testing)) {
        if (testing == 'all') {
            args.forEach((arg) => console.log(arg))
        }
    }
}

function isSingleSentence(s) {
    return !test('\\w+\\. \\w+ \\w+', s)
}

function isSingleLine(s) {
    return !s.includes('\n')
}

function formatAsProse(s) {
    const map = {
        [looksLikeTitleRE]: { el: 'title' },
        [hasMultipleSentencesRE]: { el: 'p', class: 'paragraph' },
        [looksLikeBlockQuoteRE]: { el: 'blockquote', class: 'quote' },
    }

    const getter = (s, regex, value) => {
        if (test(regex, s, 'i')) {
            return value
        }
    }

    const formatting = getIterationValue(s, map, getter, 'div')
    console.log([formatting, s])
    return div2(formatting, s)
}

function formatAsCode(el, format = indent) {
    return div2('<pre><code class="js">', format(el), { newlines: true })
}
function getOptionsAndUsable(obj, ...props) {
    const options = {}
    for (let [k, v] of Object.entries(obj)) {
        if (props.includes(k)) {
            options[k] = v
            delete obj[k]
        }
    }
    return [options, obj]
}
class Partitioner {
    format(o) {
        const [options, usableDict] = getOptionsAndUsable(o, 'join')
        // tl(this.store)
        const chunks = this.store.map((chunk) => {
            const parser = usableDict[chunk.lang]
            return parser(chunk.value)
        })
        let product = chunks
        if (options.join) product = chunks.join(options.join)
        return product
    }
    constructor(s) {
        this.skipIndex = null
        this.currentSection = 'default'
        this.lines = s.trim().split('\n')
        this.storage = new SimpleStorage()
        this.store = []
        this.index = 0
        this.codeStore = []
        this.proseStore = []
        this.lang = ''
        this.run()
    }
    getLine(n) {
        return this.lines[n] || null
    }
    sprawlToLine(regex) {
        return sprawler(this.lines, this.index + 1, regex)
    }

    reset() {
        this.codeStore = []
        this.proseStore = []
    }
    endAction(lang) {
        console.red('endaction', this.getLine(this.index))
        if (!this.lang) return

        this.store.push({
            lang: this.lang,
            value: this.currentStore.join('\n'),
        })

        this.reset()
        if (lang) this.lang = lang
    }

    emptyLineAction(line) {
        if (!isEmpty(line)) {
            return false
        }

        if (this.lang == 'code' && looksLikeCodeLine(this.sprawlToLine('\\S'))) {
            this.codeStore.push('')
        } else {
            this.endAction()
            this.lang = ''
        }
        return true
    }

    skipForward() {
        let n = 0
        while (isEmpty(this.getLine(this.index + n))) {
            n++
        }
        this.skipIndex = n
    }
    createSection(line) {
        if (!isSectionDeterminer(line)) return false
        let previousSection = this.currentSection
        this.currentSection = line.slice(2)
        return true
    }

    pushLine(line) {
        if (!this.lang) {
            console.red('getting lang from pushline')
            this.lang = getLineType(line)
        }

        if (this.lang == 'code') {
            this.codeStore.push(line)
        } else if (this.lang == 'prose') {
            this.proseStore.push(line)
        }
    }
    skip() {
        if (this.skipIndex && this.index < this.skipIndex) {
            console.log('skipping ', this.index)
            return true
        } else {
            this.skipIndex = null
            return false
        }
    }
    performEndActions(line) {
        if (this.isLastLine) {
            console.red('is lastline', line)
            this.endAction()
        } else if (this.lang) {
            let lang = getLineType(this.getLine(this.index + 1))
            if (lang != this.lang) {
                console.red('lang doesnt equal lang, endaction')
                this.endAction(this.lang)
            }
        }
    }
    run() {
        for (let i = 0; i < this.lines.length; i++) {
            let line = this.lines[i]
            this.index = i

            if (this.emptyLineAction(line)) {
                console.log( 'empty line action', line )
                continue
            }
            this.pushLine(line)
            this.performEndActions(line)
        }
    }

    get isLastLine() {
        return this.index == this.lines.length - 1
    }
    get nextLine() {
        return this.lines[this.index + 1]
    }
    get prevLine() {
        return this.lines[this.index - 1]
    }
    get currentStore() {
        return exists(this.codeStore) ? this.codeStore : this.proseStore
    }
    get value() {
        return this.store
    }
}

function splitProseAndCossdfde(s) {
    let maybePartition, isCode
    const store = []
    const lines = s.split('\n')
    let prose = []
    let code = []
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i]
        if (isEmpty(line)) {
        } else if (looksLikeCodeLine(line)) {
            code.push(line)
        } else {
            prose.push(line)
        }
    }
}
function preparePage(s) {
    const [text, store] = grm(s, mrepcssdict)
    if (!store) {
        return [text, null, null]
    }
    const product = Object.entries(store).reduce(
        (acc, [k, v]) => {
            if (k == 'use') {
                for (let item of v) {
                    if (item in libmap) {
                        const script = scriptify(libmap[item])
                        acc.libraryFiles.push(script)
                    } else {
                        acc.css.push(cssAttributor(item) + '\n')
                    }
                }
            } else if (k == 'css') {
                acc.css.push(cssParser2(v.join('\n')))
            }
            return acc
        },
        { libraryFiles: [], css: [] }
    )

    return [text, product.libraryFiles.join('\n'), product.css.join('\n').trim()]
}
function createPage(s) {
    const [text, libraries, css] = preparePage(s)
    const chunks = new Partitioner(text)
    const html = chunks.format({
        join: '\n\n',
        code: formatAsCode,
        prose: formatAsProse,
    })
    return htmlHelper({ html, css, libraries })
}

function print(s) {
    console.log(stringify(s))
}

function detectCode(s) {
    const regexes = [
        '^\\w+\\(',
        '(?<!https:)//',
        '^ *(?:const|let|function)',
        '\\w+ = ["\']',
        '^ *}',
        '}$',
    ]

    const regex = Regex2(regexes)
    return test(regex, s, 'm')
}

function onIndexedChange(current, prev) {
    console.log('changing from ', prev, ' to', current)
}


function argGetter(items, mode = '') {
    const store = {}
    if (items.length == 2) {
        if (Object.keys(Option).includes(items[1])) {
            store[items[1]] = true
        }
        return [items[0], store]
    } else if (items.length > 2) {
        for (let i = items.length - 1; i > 0; i--) {
            if (Object.keys(Option).includes(items[i])) {
                store[items.pop()] = true
            }
        }
        return [items, store]
    }
    if (mode == '') return items.length == 1 ? items[0] : items
    if (mode == 'OPTIONS') return items.length == 1 ? [items[0], {}] : [items, {}]
}

function toDictionary(items, {kt = null, vt = null, reverse = null} = {}) {
    return items.reduce((acc, [k, v]) => {
        if (kt) k = String(kt(k))
        if (vt) v = vt(v)
        reverse ? (acc[v] = k) : (acc[k] = v)
        return acc
    }, {})
}

const get99 = ['(?<=get)(?!ty|away|ting)[a-z]', capitalize]
const is99 = ['(?<=is)(?!ab|land|le|olat)[a-z]', capitalize]

function drep8999(s, dict) {
    const newdict = {}
    const regexes = []

    for (let [originalRegex, parser] of Object.entries(dict)) {
        const re = removeRegexCaptureGroups(originalRegex)
        const [tag, taggedRegex] = regexWrapifyAndSave(re)

        const parserHandler = getParserHandler(parser)
        modifyObjectInPlace(newdict, tag, parserHandler)
        regexes.push(taggedRegex)
    }

    const parserRunner = (...args) => {
        const tag = args.find((item, i) => i > 0 && item)
        const action = newdict[tag]
        return action(args[0])
    }

    const regex = Regex(regexes)
    const product = replace(regex, parserRunner, s)
    return product
}

function drep9002(s, dict) {
    const newdict = {}
    const regexes = []
    prose = []

    for (let [originalRegex, parser] of Object.entries(dict)) {
        if (isFunction(parser)) {
            const re = removeRegexCaptureGroups(originalRegex)
            const [tag, taggedRegex] = regexWrapifyAndSave(re)
            const parserHandler = getParserHandler(parser)
            modifyObjectInPlace(newdict, tag, [parserHandler, originalRegex])
            regexes.push(taggedRegex)
        } else {
            const cleanedRegex = removeEverythingSuper(originalRegex)
            newdict[cleanedRegex] = parser
            if (looksLikePureString(originalRegex) 
                && !['lp', 'rp', 'lb', 'rb', '9', '0'].includes(originalRegex)) {
                prose.push(originalRegex)
            } else {
                regexes.push(originalRegex)
            }
        }
    }

    const parserRunner = (...args) => {
        let a = args[0]
        if (a in newdict) {
            if (isString(newdict[a])) return newdict[a]
            else if (isFunction(newdict[a])) {
                return newdict[a](a)
            } else if (isArray(newdict[a])) {
                return newdict[a][0](...matcher(newdict[a][1], a))
            }
        }
        else {
            let tag = args
                .find((item, i) => {
                    if (!item) return false
                    if (item.trim().length == 1) return true
                    return i > 0
                })
                .trim() // this allows for accuracy on " ?p ? With it, cs console.log( math.gen3('21ei + 2*ii + sqrti t 4 p 2' , {evaluate: true})) ce will not work when the t and p r used.
            // let tag = args.find((item, i) => i > 0 && item)

            if (!(tag in newdict)) {
                // console.log( tag )
                // tl(tag, newdict, args, regex)
                tag = tag.slice(0, -1)
            }

            if (isArray(newdict[tag])) {
                const [action, originalRegex] = newdict[tag]
                return action(...matcher(originalRegex, args[0]))
            }
        }
    }

    if (exists(prose)) regexes.push(Regex2(prose, { mode: 'wb' }))
    const regex = Regex(regexes)
    // console.error( regex, newdict )
    const flags = getRegexFlag(regex)
    const product = replace(regex, parserRunner, s, flags)
    return product
}

function drep9000(s, dict) {
    const newdict = {}
    const regexes = []

    for (let [originalRegex, parser] of Object.entries(dict)) {
        // console.log( originalRegex )
        const re = removeRegexCaptureGroups(originalRegex)
        // console.red( re )
        const [tag, taggedRegex] = regexWrapifyAndSave(re)
        // console.blue( tag, '----',  taggedRegex )
        // console.red( '---' )

        const parserHandler = getParserHandler(parser)
        modifyObjectInPlace(newdict, tag, [parserHandler, originalRegex])
        regexes.push(taggedRegex)
    }

    const parserRunner = (...args) => {
        // console.log( args )
        // console.log( newdict )
        // console.error( regex )
        const tag = args.find((item, i) => i > 0 && item)
        // console.log( tag )
        // console.red( tag )
        const [action, originalRegex] = newdict[tag]
        const pair = matcher(originalRegex, s)
        // console.red( pair )
        // 
        // box bgred
        // ditto bgred bgblue bggreen
        // messes it up. because the box bgred gets matched every time.
        return action(...pair)
    }

    const regex = Regex(regexes)

    // console.log( regex )
    // console.error( regex, regexes, newdict )
    const product = replace(regex, parserRunner, s)
    return product
}

function grm(s, dict, regexOptions) {
    const newdict = {}
    const regexes = []
    const storage = new DynamicStorage()

    for (let [originalRegex, parser] of Object.entries(dict)) {
        const re = removeRegexCaptureGroupsGRM(originalRegex)
        const [tag, taggedRegex] = regexWrapifyAndSaveGRM(re)
        const parserHandler = (x) => parser(...matcher(originalRegex, x))

        if (isArray(tag)) {
            tag.forEach(x => newdict[x] = parserHandler)
        } else {
            newdict[tag] = parserHandler
        }

        regexes.push(taggedRegex)
    }

    // console.error( 'asdf' )
    const regex = Regex2(regexes, regexOptions)
    // const regex = Regex(regexes)
    const parserRunner = (...args) => {
        // console.log( args )
        const tag = args.find((item, i) => i > 0 && item)
        const action = lambdaReplace(newdict[tag])
        let [replaceValue, storeValue, destination] = action(args[0])
        if (destination === 'MATCH') destination = tag
        if (destination) {
            storage.add(storeValue, destination)
        } else {
            storage.add(storeValue)
        }
        return replaceValue
    }

    // console.error( regex )
    // console.error(newdict)
    const product = replace(regex, parserRunner, s, getRegexFlag(regex)).trim()
    return [product, storage.value]
}

function mrepdict_precreateidelete(s) {
    const dict = {
        '(\\w+)//([\\w-]+)': (_, a, b) => [std(b), [a, std(b)], 'pmap'],
        '(\\w+)/([\\w-]+)': (_, a, b) => [b, [a, b], 'pmap'],
    }
    const regex = Regex(dict)
    const storage = new SimpleStorage()
    const predict = dict.reduce((acc, [k, v]) => {
        let a = removeEverythingSuper(k)
        acc[a] = v
        return acc
    }, {})

    function parser(...args) {
        args = args.filter((x) => x)
        let tag = args[0]
        let [replacement, product, destination] = predict[tag](...args)
        storage.add(destination, product)
        return replacement
    }

    s = s.replace(RegExp(regex, 'gm'), parser).trim()
    return [s, storage.value]
}

function mrepdict_noprecreate(s, dict) {
    const regex = Regex(dict)
    const storage = new SimpleStorage()

    function parser(...args) {
        args = args.filter((x) => x)

        for (let [k, v] of Object.entries(re)) {
            if (test(removeLookAroundSimple(k), args[0])) {
                let [replacement, product, destination] = v(...args)
                storage.add(destination, product)
                return replacement
            }
        }
    }
    s = s.replace(RegExp(regex, 'gm'), parser).trim()
    return [s, storage.value]
}

function fixRedditTags(s) {
    return replace('(.*?) (r\\.\\w+$)', '$2 $1', s)
}

class MathString {
    constructor(s) {
        this.s = s
        this.char = ''
        this.nextChar = ''
        this.match = ''
        this.store = {}
        this.chars = s.split()
        this.product = ''
    }
    parseAtomicNumberUnit() {
        const items = this.match.split(numberBoundaryREGEX)
    }
    run(val) {
        while (val) {
            if ((this.match = search(anure, val))) {
                this.parseAtomicNumberUnit()
            } else if ((this.match = search(anure, val))) {
                this.parseAtomicNumberUnit()
            }

            val = val.slice(this.match.length)
        }
    }
    run() {
        for (let i = 0; i < this.chars.length; i++) {
            this.char = this.chars[i]
            this.nextChar = this.chars[i + 1]
        }
    }
}
function removeFunctionsFromText(s, items) {
    regex = Regex2(items, { after: '\\((.*?)\\)$' })
    function parser(_, x) {
        console.log(x)
        return isEven(countParentheses(x)) ? x : x + ')'
    }
    return replace(regex, parser, s)
}

function createSwapDict(dict) {
    for (let [k, v] of Object.entries(dict)) {
        dict[v] = k
    }
    return dict
}

function swapNames(s, dict) {
    return drep(s, createSwapDict(dict))
}

function addTextBlockBrackets(s) {
    const lines = s.trim().split('\n')

    for (let i = 0; i < lines.length; i++) {
        let line = lines[i].trimEnd()
        let indent = getIndent(line)
        let nextLineIndent = getIndent(lines[i + 1])

        if (line.endsWith(':')) {
            lines[i] = line.slice(0, -1) + ' {'
        } else if (nextLineIndent - 4 == indent) {
            lines[i] = line + ' {'
        } else if (isUndefined(nextLineIndent) || nextLineIndent + 4 == indent) {
            lines[i] = line + '\n' + ' '.repeat(indent - 4) + '}'
        }
    }

    return lines.join('\n') + '\n}'
}

function mapgetter(key, map, fallback = null) {
    if (!key) key = fallback
    if (map[key]) return map[key]
    if (isDefined(fallback)) return fallback
    return key
}
function getDefaultCssName(el) {
    const map = {
        hr: 'default-line',
    }
    return mapgetter(el, map, '')
}
function fixColorName(b) {
    if (b.length == 1) {
        b = colornamesmap[b]
    } else if (b.length == 2) {
        b = replaceFirstLetter(b, (x) => colornamesmap[x])
    }

    if (test('[a-z]$', b)) b += '5'
    return b
}

function argparser(args, arr, mapping = null) {
    if (!isNestedArray(arr) && arr.length == args.length) {
        arr = [arr]
    }

    const match = arr.find((item) => {
        return args.length == item.reduce((acc, el) => (isTrue(el) ? ++acc : acc), 0)
    })

    console.log(match)
    if (!match) return args

    const product = match.reduce((acc, item, i) => {
        if (isTrue(item)) {
            console.log(i, args[i])
            acc.push(args[i])
        } else if (isFunction(item)) {
            console.log('is funciton')
            const newArgs = args.map((arg, i) => (isTrue(arg) ? arg : match[i]))
            const resultant = item(...newArgs)
            acc.push(resultant)
            args[i + 1] = args[i]
        } else {
            acc.push(item)
            args[i + 1] = args[i]
        }
        return acc
    }, [])

    if (mapping) return product.map((item, i) => (mapping[i] ? mapping[i](item) : item))
    return product
}

function argfix(args, arr, mapping = null) {
    // console.log( args, arr )
    if (!isNestedArray(arr)) {
        arr = [arr]
    }
    const match = arr.find((item) => {
        return args.length == item.reduce((acc, el) => (isTrue(el) ? ++acc : acc), 0)
    })
    if (!match) return args
    const product = match.reduce((acc, item, i) => {
        if (isTrue(item)) acc.push(args[i])
        else {
            acc.push(item)
            args[i + 1] = args[i]
        }
        return acc
    }, [])
    if (mapping) return product.map((item, i) => (mapping[i] ? mapping[i](item) : item))
    return product
}
const looksLikeDateRE = '\\d+\\D\\d+\\D\\d+|\\d{4}'
function parseLocalStorage() {
    const file = 'product.json'
    const obj = read(file)
    let s = ''
    for (let [k, v] of Object.entries(obj)) {
        s += '// ' + k + '\n\n'
        s += v.join(snsn) + snsn
    }
    write('temp', s)
}

function fsUpdateStorage(file, data) {
    const obj = read(file)
    if (!isObject(obj)) obj = {}
    const product = deepMerge(obj, data)
    write(file, product)
}

const vueActionModes = ['code', 'createVue', 'checkCode', 'createHtml']

function checkCodeSync(s, thenAction = console.log) {
    const lang = getLang(s)
    const result = betterText(s, lang)
    let promise
    if (lang == 'js') {
        promise = Promise.resolve(!!prettier.format(result))
        promise = new Promise((resolve) => prettier.format(result))
            .then((response) => !!response)
            .catch((error) => console.log(result))
    } else if (lang == 'py') {
        promise = checkpy(result)
            .then((result) => !!result)
            .catch((error) => console.log(error))
    }
    promise.then(thenAction)
}

function getUserAgent() {
    var sBrowser,
        sUsrAg = navigator.userAgent
    if (sUsrAg.indexOf('Firefox') > -1) {
        sBrowser = 'Mozilla Firefox'
    } else if (sUsrAg.indexOf('SamsungBrowser') > -1) {
        sBrowser = 'Samsung Internet'
    } else if (sUsrAg.indexOf('Opera') > -1 || sUsrAg.indexOf('OPR') > -1) {
        sBrowser = 'Opera'
    } else if (sUsrAg.indexOf('Trident') > -1) {
        sBrowser = 'Microsoft Internet Explorer'
    } else if (sUsrAg.indexOf('Edge') > -1) {
        sBrowser = 'Microsoft Edge'
    } else if (sUsrAg.indexOf('Chrome') > -1) {
        sBrowser = 'google'
    } else if (sUsrAg.indexOf('Safari') > -1) {
        sBrowser = 'safari'
    } else {
        sBrowser = 'unknown'
    }
    return sBrowser
}

function parenhack(s) {
    return s
}
function createVueRootTemplateFromComponentList(components) {
    const children = components.map((component) => {
        return '<' + component + '/>'
    })
    product = '\n' + children.join('\n')
    return product
}
function brackify(name, s, indented = null) {
    if (name) name += ' '
    if (indented || (!indented && !s.startsWith(' '))) {
        s = indent(s)
    }
    return name + parens(s, 'brackify')
}
function bracketAndIndent(s) {
    return '{\n' + indent(s) + '\n}'
}
function objify(obj, { join = ',\n', delimiter = ': ', quoteStyle = 'sq' } = {}) {
    let s = ''
    for (let [k, v] of Object.entries(obj)) {
        s += k + delimiter + dollarCapture(v, quoteStyle) + join
    }
    return s.trim()
}

function createVueStringFromObject(obj) {
    // console.error( obj )
    const format = (k, v) => {
        if (isString(v)) return v
        if (isArray(v)) {
            if (k == 'data') {
                v = v.map(vueDataParser)
            }

            v = v.join(vuehelpermap[k]['join']).trimEnd()
        }
                
        const indentationNumber = vuehelpermap[k]['indentation']
        return indent(v, indentationNumber, {mode: 'additive'})
    }

    const vuestringmap = {}
    let s = ''
    for (let [k, v] of Object.entries(obj)) {
        if (!vuekeys.includes(k)) {
            continue
        }
        s += k

        if (k == 'data' || k == 'mounted') {
            s += '()'
        } else {
            s += ':'
        }
        if (k == 'template') {
            s += ' `'
        } else if (k == 'props') {
            s += ' [ '
        } else {
            s += ' {'
        }

        if (k == 'data') s += '\n    return {'

        v = format(k, v)
        // console.log( [v] )

        if (!test('^\\n', v)) {
            s += '\n'
        }

        s += v

        if (k == 'template') s += '\n'
        if (k == 'data') s += '\n    }\n'

        if (k == 'components') s += ' ' + enderbracketcomma
        else if (k == 'props') {
            s += ' ],'
        } else if (k == 'data') {
            s += enderbracketcomma
        } else if (k == 'template') {
            s += '\n' + '`,\n'
        } else {
            s += '\n' + enderbracketcomma
        }
    }
    return bracketAndIndent(s.trim())

    const vuestringmap2 = {
        template: (s) => 'template: `\n' + indent(toString(s)) + '\n`',
        components: (s) => 'components: { ' + s.join(', ') + ' }',
        props: (s) => 'props: [ ' + s.join(', ') + ' ]',
        data: (s) => 'data() {\n    return {    \n' + indent(objify(s), 8) + '\n    }\n}',
        methods: (s) => 'methods: {\n' + indent(s.join('\n,')) + '\n}',
        mounted: (s) => 'mounted() {\n' + indent(s) + '\n}',
        computed: (s) => 'computed: {\n' + indent(s.join('\n,')) + '\n}',
        watch: (s) => 'watch: {\n' + indent(s) + '\n}',
    }

    const product = Object.entries(obj).reduce((acc, [k, v]) => {
        return (acc += vuestringmap[k](v) + ',\n')
    }, '')

    return bracketAndIndent(product)
}

const obj = {
    template: ['foo', 'boo'],
    methods: ['foo() {\n    return x\n}'],
    data: {
        a: 'adsf',
        b: '$sdfsd',
        c: [],
        d: {},
    },
}

function fixjson(file, pmwb, errordict) {
    const text = read(file, 'text')
}

function tester(s = testrunstring) {
    function parser(s) {
        return visible(s.trim())
    }
    return replace(pyBlockRE, parser, s)
}

function getExtension(file) {
    try {
        return file.match(/\.(\w+)$/)[1]
    } catch {
        return null
    }
}
function isHtml(file) {
    lang = getExtension(file)
    return lang == 'html'
}

function isJavascript(file) {
    lang = getExtension(file)
    return lang == 'js'
}

function cmSmartBackSpace(cm) {
    if (isEmpty(cml(cm))) {
        cm.replaceRange('', ...cmRangeHelper(-4, 0))
    }
}

function lineRequirement(items, start, checkpoints, endAction) {
    for (let i = start; i < items.length; i++) {
        const item = items[i]
        for (let j = 0; j < checkpoints.length; j++) {
            const checkpoint = checkpoints[j]
            if (!checkpoint.pass) {
                const checked = checkpoint.test(item, i, ...checkpoint.args)
                if (checked) {
                    checkpoint.pass = true
                    checkpoint.store = item
                    if (checkpoint.return) {
                        return checkpoint
                    }
                } else {
                    if (checkpoint.action) checkpoint.action()
                }
            }
        }
    }
}

function cmWordUnderCursor2(cm) {
    const { line, ch } = cm.getCursor()
    const text = cm.getLine(line)
    const items = text.split('')
    return textSprawl9000(items, ch, { direction: 'both', join: '' })
}
function cmJumpToNextSelection(cm, n = 1) {
    const { line, ch } = cm.getCursor()
    const text = cm.getLine(line)
    let words = text.split(/ +/)
    let currentWord = cmWordUnderCursor2(cm)
    let wordIndex = words.indexOf(currentWord)
    let nextWord = words[wordIndex + n]
    let startIndex = text.search(RegExp(parens(nextWord, 'b')))
    let endIndex = startIndex + nextWord.length
    console.log(words)
    console.log(currentWord)
    console.log(nextWord)
    console.log(text[startIndex])

    const selection = [
        { line: line, ch: startIndex },
        { line: line, ch: endIndex },
    ]
    cm.setSelection(...selection)
    return
}

function cmJumpToNextSelectionBackward3(cm, jumpCount = 1) {
    let { line, ch } = cm.getCursor()
    const text = cm.getLine(line)

    let count = 0
    let endIndex = 0
    let startIndex = 0

    if (text[ch + 1] == ' ') {
        while (true) {
            ch++
            if (isNonSpace(text[ch])) {
                ch++
                break
            }
        }
    }

    for (let i = ch; i >= 0; i--) {
        let el = text[i]
        let next = text[i - 1]

        if (isUndefined(next) || (el != ' ' && (isUndefined(next) || next == ' '))) {
            // console.log( el, i)
            if (startIndex) {
                endIndex = i
                count += 1
                if (count == jumpCount) {
                    // return console.log( text.slice(endIndex, startIndex))
                    // console.log( endIndex, startIndex)
                    const selection = [
                        { line: line, ch: endIndex },
                        { line: line, ch: startIndex },
                    ]
                    return cm.setSelection(...selection)
                } else {
                    startIndex = 0
                    endIndex = 0
                }
            }
        } else if (i == text.length - 1) {
            startIndex = i + 1
        } else if (isUndefined(el) || (el == ' ' && next != ' ')) {
            startIndex = i
        }
    }
}

function cmJumpToNextSelection3(cm, jumpCount = 1) {
    let { line, ch } = cm.getCursor()
    const text = cm.getLine(line)

    let count = 0
    let endIndex = 0
    let startIndex = 0
    ch--
    if (text[ch - 1] == ' ') {
        while (true) {
            ch--
            if (isNonSpace(text[ch])) {
                ch--
                break
            }
        }
    }
    for (let i = ch; i < text.length; i++) {
        let el = text[i]
        let next = text[i + 1]

        if (isUndefined(next) || (el != ' ' && (isUndefined(next) || next == ' '))) {
            if (startIndex) {
                endIndex = i + 1
                count += 1
                if (count == jumpCount) {
                    const selection = [
                        { line: line, ch: startIndex },
                        { line: line, ch: endIndex },
                    ]
                    console.log(cm.getCursor(), 'cursor')
                    gr(text)
                    gr(text.slice(startIndex, endIndex))
                    return cm.setSelection(...selection)
                } else {
                    startIndex = 0
                    endIndex = 0
                }
            }
        } else if (i == 0) {
            startIndex = i - 1
        } else if (isUndefined(el) || (el == ' ' && next != ' ')) {
            startIndex = i + 1
        }
    }
}

function cmJumpToNextSelection2(cm, jumpCount = 1) {
    let { line, ch } = cm.getCursor()
    const text = cm.getLine(line)

    let count = 0
    let endIndex = 0
    let startIndex = 0
    for (let i = ch; i < text.length; i++) {
        let el = text[i]
        let next = text[i + 1]

        if (el != ' ' && next == ' ') {
            if (startIndex) {
                endIndex = i
                count += 1
                if (count == jumpCount) {
                    return cm.setSelection(cmRangeHelper(startIndex, endIndex))
                } else {
                    startIndex = 0
                    endIndex = 0
                }
            } else {
                continue
            }
        }

        if (el == ' ' && next != ' ') {
            startIndex = i
            continue
        }

        if (!firstCheckPoint) {
            if (text[i] == ' ') {
                firstCheckPoint = true
                if (text[i + 1] != ' ') {
                    secondCheckPoint = true

                    console.log([i, 'secondcheckpoit', text[i]])
                }
            }
        }
        if (!secondCheckPoint) {
            if (text[i] != ' ') {
                secondCheckPoint = i
                console.log([i, 'secondcheckpoit', text[i]])
            }
        } else if (!thirdCheckPoint) {
            if (text[i + 1] == ' ' || isUndefined(text[i + 1])) {
                count += 1

                console.log([i, 'thirdcheckpoint', text[i]])
                if (count == jumpCount) {
                    const selection = [
                        { line: line, ch: secondCheckPoint },
                        { line: line, ch: i + 1 },
                    ]
                    cm.setSelection(...selection)
                    return
                    return getWordFromRange([secondCheckPoint, i], text)
                } else {
                    firstCheckPoint = false
                    secondCheckPoint = false
                }
            }
        }
    }
    console.log('reverse')
    console.log(ch)
    for (let i = ch; i >= 0; i--) {
        console.log(i)
        if (!firstCheckPoint) {
            if (text[i] == ' ') {
                firstCheckPoint = true
            }
        } else if (!secondCheckPoint) {
            if (text[i] != ' ') {
                // range.push(i)
                secondCheckPoint = i
            }
        } else if (!thirdCheckPoint) {
            if (text[i + 1] == ' ' || isUndefined(text[i + 1])) {
                count += 1

                if (count == jumpCount) {
                    const selection = [
                        { line: line, ch: secondCheckPoint },
                        { line: line, ch: i + 1 },
                    ]
                    cm.setSelection(...selection)
                    return
                    return getWordFromRange([secondCheckPoint, i], text)
                } else {
                    firstCheckPoint = false
                    secondCheckPoint = false
                }
            }
        }
    }
}

function getWordFromRange(range, line) {
    return line.slice(range[0], range[1] + 1)
}
function cm(ch = 4, n = 2) {
    const lines = ['hi', 'bye', '   .foo', "Hello},  {this is t'h'e: [test] sentence.", '  ', '', 'see ya']

    const cm = {
        setSelection(...args) {
            console.log(...args)
        },
        hasFocus() {
            return true
        },
        getCursor() {
            return { line: n, ch: ch }
        },
        getLine() {
            return lines[n]
        },
    }
    return cm
}


function cmJumpDown(cm) {
    let { line, ch } = cm.getCursor()
    do {} while (isEmpty(cm.getLine(line++)))
    line--
    console.log( line )
    cm.setCursor({ line, ch: 100 })
}

function cmJumpUp(cm) {
    let { line, ch } = cm.getCursor()
    do {} while (isEmpty(cm.getLine(line--)))
    line++
    cm.setCursor({ line, ch: 100 })
}
function cmJumpSelectionHandler(cm, jumpCount) {
    if (!cm.hasFocus()) {
        cm.focus()
    }

    if (jumpCount == 'down') {
        // console.log( 'jumping down' )
        cmJumpDown(cm)
    } else if (jumpCount == 'up') {
        cmJumpUp(cm)
    } else if (jumpCount < 0) {
        jumpCount *= -1
        cmJumpToNextSelectionBackward3(cm, jumpCount)
    } else {
        // cmJumpToNextSelection3(cm, jumpCount)
        cmj2(cm, jumpCount)
    }
}

//topractice
const g = (n) => n + 1
/*
Note: function application order is
bottom-to-top:
*/
/*
after g: 21
after f: 42
*/
// console.log( getOutliers([1,2,3,4, 100, 132, 5, 1,1,1,1,1,1, 1,1,1,1,1,4,4,4,4,4,4,4,4,4,4]))

// const map = fn => iterable => iterable.map(fn);
const pipe = (...fns) => (x) => fns.reduce((y, f) => f(y), x)
const log = {
    lambda() {
        return (x) => console.log(x)
    },
    display(x) {
        console.log('%c' + stringify(x), 'color: blue; font-size: 14px;')
    },
    green(x) {
        console.log('%c' + x, 'color: green; font-size: 16px;')
    },

    blue(x) {
        console.log('%c' + x, 'background: blue; font-size: 16px;')
    },

    red(x) {
        console.log('%c' + x, 'color: red; font-size: 16px;')
    },
}
const arr = [1, 2, 3, 4]
// const stripe = n => isEven(n) ? 'dark' : 'light';
// const stripeAll = map(stripe);
// console.log( stripeAll.toString())
// const striped = stripeAll(arr);
// log(striped);

function primeFactors(a) {
    var primeFactors = new Array()

    // Trial division algorithm
    for (
        var i = 0, p = primeNumbers[i];
        i < primeNumbers.length && p * p <= a;
        i++, p = primeNumbers[i]
    ) {
        while (a % p == 0) {
            primeFactors.push(p)

            a /= p
        }
    }

    if (a > 1) {
        primeFactors.push(a)
    }
    return primeFactors
}

function fractionToDecimal(n, d) {
    var pFS = getPrimeFactors(d)
    for (var i = 0; i < pFS.length; i++) {
        // Go through each of the denominators prime factors

        if (pFS[i] !== 2 && pFS[i] !== 5) {
            // We have a repeating decimal

            var output = new Array()
            var ns = new Array()

            // Let's find the repeating decimal
            // Repeating decimal algorithm - uses long division
            for (var i = 0; i < 20; i++) {
                // For now find 20 spots, ideally this should stop after it finds the repeating decimal
                // How many times does the denominator go into the numerator evenly
                var temp2 = parseInt(n / d)

                if (ns[n] === undefined) {
                    ns[n] = i
                } else {
                    return (
                        'Repeating decimal: ' +
                        output.slice(0, 1).join('') +
                        '.' +
                        output.slice(1, ns[n]).join('') +
                        '[' +
                        output.slice(ns[n]).join('') +
                        ']'
                    )
                }

                output.push(temp2)
                var n = n % d
                n += '0'
            }
            return 'Repeating decimal: ' + output
        }
    }

    // Terminating decimal
    return 'Terminating decimal: ' + n / d
}

function getPrimeFactors(n) {
    var factors = [],
        divisor = 2

    while (n >= 2) {
        if (n % divisor == 0) {
            factors.push(divisor)
            n = n / divisor
        } else {
            divisor++
        }
    }
    return factors
}

function getAllFactorsFor(remainder) {
    var factors = [],
        i

    for (i = 2; i <= remainder; i++) {
        while (remainder % i === 0) {
            factors.push(i)
            remainder /= i
        }
    }

    return factors
}

function findPrimeFactorsDonestwork(num) {
    let arr = []

    for (var i = 2; i < num; i++) {
        let isPrime
        if (num % i === 0) {
            isPrime = true
            for (var j = 2; j <= i; j++) {
                if (i % j === 0) {
                    isPrime == false
                }
            }
        }
        if (isPrime == true) {
            arr.push(i)
        }
    }
    return arr
}

function fibo(num, mode = Number) {
    memo = {}
    const result = runner(num)
    if (mode == Number) {
        return result
    }
    const store = Object.values(memo)
    store.unshift(1)
    return store

    function runner(num) {
        if (memo[num]) {
            return memo[num]
        }
        if (num <= 1) {
            return 1
        }

        return (memo[num] = runner(num - 1, memo) + runner(num - 2, memo))
    }
}

function fibonacci(num, memo) {
    memo = memo || {}

    if (memo[num]) {
        return memo[num]
    }
    if (num <= 1) return 1

    return (memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo))
}

// console.log( fibo(10, Number))
// console.log( fibo(11, Array))
mathprosestring = `i am 2-digit fibn. my first digit pl my second digit equals 17. who am i  i am the first fibn which produces a 3-digit result. who am i. the xth fibn and the yth fibn add up to the number 68. what is x - y. a fibn sequence is a series of numbers where the previous 2 numbers add up to the third.

what is the missing number
what is the next number in the sequence
`
function getCoinChange(amount) {
    if (isDecimal(amount)) amount *= 100 // Convert to number of cents
    var denominations = [1, 5, 10, 25, 50, 100] // cents
    var result = []
    while (amount > 0) {
        var coin = denominations.pop() // Get next greatest coin
        var count = Math.floor(amount / coin) // See how many times I need that coin
        amount -= count * coin // Reduce the amount with that number of coins
        if (count) result.push([coinobj[coin], count]) // Store count & coin
        // if (count) result.push([coin/100, count]); // Store count & coin
    }
    return result
}

function isTerminatingDecimal(n) {}

function generateCoinQuestions(target = 100, coins = coinobj) {}
function isBeautifulMathAnswer(s) {}

function isBeautifulMathQuestion(s) {}

function generateScoresAfterImprovement(
    currentScores,
    { amount = 3, improvement = 5, successive = true, basedOnAverage = false }
) {
    const store = []
    const base = basedOnAverage ? average(currentScores) : getLastItem(currentScores)
    for (let i = 1; i <= amount; i++) {
        let score = successive ? base + improvement * i : base + improvement
        store.push(score)
    }
    return store
}

function muDroppedWorstScore(scores, n = 1) {
    scores.sort()
    return averaged(scores.slice(n))
    // it is a code-smell to have to copy an array, and then return something.
}

function isDivisibleBy(n, divisor) {
    return n % divisor == 0
}

function mqAverageTest({ scores = [65, 75, 85, 95], target = 77, remaining = 1 } = {}) {
    const length = scores.length + remaining
    const targetedTotal = length * target
    const currentTotal = sum(scores)
    const needToScore = targetedTotal - currentTotal
    const pointAllocationPool = remaining * 100
    if (pointAllocationPool < needToScore) return false
    else {
        return needToScore / remaining
        return [needToScore, remaining]
    }
    highestPossibleScore
    const averageAfterDroppingWorstTest = muDroppedWorstScore(scores)
    const nextScores = generateTestsAfterImprovement(scores, {
        amount: 3,
        improvement: 5,
        successive: true,
    })
}

// console.log( getCoinChange(23))
// console.log(getAllFactorsFor(543))
// console.log( fractionToDecimal(4,57))
// occasionally, there will be jumps that hv 2 take place, and without these jumps, the user just stays at the same level.

// console.log( noteParser('hi i lk'))
teststring = `
dec29 move into 422 56th st. there is a nice burrito place called zjalapenos next to it. ctown grocery is next to it. there are many mini-marts with gr8 prices around. the laundry here costs 1.75. ssp\\Sunset-Park is nearby. so is the pier. its a great loc\\location.p `
// console.log(noteParser( globalDocumentEdit((preAccumulate(teststring, simplemrepworddict)))))

// console.log( mqAverageTest())

// console.log( preAccumulate(teststring, simplemrepworddict))

function arrgetter(items) {
    if (isArray(items)) {
        if (items.length == 1 && isArray(items[0])) {
            return items[0]
        }
        return items
    }
}
function lambdaFraction(fn) {
    let numerator = 1
    let count = 0
    const format = (x) => {
        return x
    }
    return (denominator) => `${format(denominator)}/${fn(denominator)}`
}

function countedReplace(regex, items, s) {
    let count = 0
    function parser(...args) {
        return items[count++](...args)
    }
    return replace(regex, parser, s)
}

function isNestedObject(obj, level, ...rest) {
    if (obj === undefined) return false
    if (rest.length == 0 && obj.hasOwnProperty(level)) return true
    return isNestedObject(obj[level], ...rest)
}

const purple = util.colored('magenta')
const cyan = util.colored('cyan')
const yellow = util.colored('yellow')
const blue = util.colored('blue')

const math = {
    gen4: mathgen4,

    applicable: {
        amount: 3, 
        evaluate: true,
    },
    exponent(a,b) {
        return Math.pow(a, b)
    },
    test() {
        let args = [1]
        console.log(math.createOperation(math.add, ...args)(2))
    },
    count: 0,
    pipe: pipe,
    compose: compose,
    minus: (a, b) => a - b,
    factory: (fn, ...args) => (x) => fn(x, ...args),
    createOperation: (fn, ...args) => (x) => fn(x, ...args),
    insertionValue: 0,
    true() {
        math.insertionValue = '0'
    },
    numbergen: numbergen,
    gen3: (s, { amount = 3, evaluate = false, start = 1 } = {}) =>
        math.numbergen({ pattern: math.expression3(s), amount, evaluate, start }),

    gen2: (s, amount = 3, evaluate = false, start = 2) =>
        math.numbergen({ pattern: math.expression2(s), amount, evaluate, start }),

    display(s) {
        const product = math.gen2(s)
        console.log(product)
    },
    gen: (pattern, ...args) => {
        if (isString(pattern) || isObject(pattern)) {
            pattern = math.expression(pattern, args)
        }

        return math.numbergen({ ...math.applicable, ['pattern']: pattern })
    },
    expressionDelimiter: '{',
    expressionDelimiter: '[',
    expression3(s) {
        s = mathParser3(s)
       return (i) => s 
        // console.log(s)

        function parser(i) {
            return superReplace(s, {
                'seriesb?': seriesFactory(i, {
                    series: seriesReplacer,
                    seriesb: seriesReplacerB,
                }),
                i: (x) => i,
                // '\\[.*?\\]': lambdaMaker(i),
            })
        }
        return parser
    },

    expression2(s) {
        s = mathParser(s)

        function parser(i) {
            return superReplace(s, {
                'seriesb?': seriesFactory(i, {
                    series: seriesReplacer,
                    seriesb: seriesReplacerB,
                }),
                // 'i': (x) => (i),
                '\\[.*?\\]': lambdaMaker(i),
            })
        }
        return parser
    },
    expression(s, parsers = null) {
        let pcount = 0

        function replacer(el, i) {
            el = el.replace(/\[p\]/, (x) => {
                const parser = parsers[pcount++]
                try {
                    return parser(i)
                } catch {
                    return el
                }
            })
            // util.green( el, '--')
            el = el.replace(/\[.*?\]/g, (x) => {
                return tryval(x.slice(1, -1).replace(/i/g, math.insertionValue || i))
            })
            // cyan(el)
            return el
            const product = tryval(el)
            // console.log( pcount)
            return product
        }

        if (test(rescape(math.expressionDelimiter), s)) {
            // console.log( 'hi from this place, it means we have a delimiter match')
        }

        function product(i) {
            // console.log( 'next iteration')
            const regex = rescape(math.expressionDelimiter) + '.*?[}\\]]'
            const result = replace(
                regex,
                (el) => {
                    return replacer(el, i)
                },
                s
            )
            pcount = 0
            return result.replace(/\+ -|- \+/g, (x) => x.slice(0, 1) + ' ')
        }

        return (i) => product(i)
    },
    GLOBAL_OFFSET_VARIABLE: null,
    prepareParser: (x) => {
        math.GLOBAL_OFFSET_VARIABLE = null

        if (isFunction(x)) return x
        if (isArray(x)) {
            return (i) => {
                const fallback = rng(1, 10)
                if (math.GLOBAL_OFFSET_VARIABLE == null) {
                    math.GLOBAL_OFFSET_VARIABLE = i
                }
                let offset = GLOBAL_OFFSET_VARIABLE
                return x[i - offset] ? x[i - offset] : fallback
            }
        }
    },
    prepareIterable(el) {
        if (isString(el)) {
            el = el.split('')
        }
        return el
    },
    mappable(fn) {
        return (iterable) => math.prepareIterable(iterable).map(fn)
    },
    formatFraction(n, d) {
        return `${n}/${d}`
    },
    asFraction(nfn, dfn) {
        return (el) => math.formatFraction(math.prepareParser(nfn)(el), math.prepareParser(dfn)(el))
    },
    summed(...items) {
        return arrgetter(items).reduce((sum, item) => sum + item, 0)
    },
    sum(...items) {
        return arrgetter(items).reduce((sum, item) => sum + item, 0)
    },
    squared(x) {
        return x * x
    },
    cubed(x) {
        return x * x * x
    },
    powers: (base) => (el) => Math.pow(base, el),
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
    factorial(n) {
        if (n > 10) throw 'error at factorial n > 10'
        function runner(n) {
            if (n == 0 || n == 1) return 1
            if (f[n] > 0) return f[n]
            return (f[n] = math.factorial(n - 1) * n)
        }
        const f = []
        runner(n)
        return f
    },
    getSequence(sequence, length) {
        return math.sequences[sequence].slice(0, length)
    },
    sequences: {
        fibonacci: fibonacciSequence,
        lucas: lucasSequence,
        skiponacci: skiponacciSequence,
        triangular: triangularSequence,
    },
}
// console.log( numbergen({pattern: math.asSequence(math.powers(3), math.powers(2))}))
// console.log( numbergen({pattern: math.asFraction(math.powers(3), math.powers(2))}))
// console.log( math.sum(math.mappable(letterToNumber)('attitude')))
// console.log('\x1b[36m%s\x1b[0m', 'I am cyan');  //cyan

function toLowerCase(s) {
    return s.toLowerCase()
}

function createDictionaryFromString(s) {
    let items

    const regexes = [
        '^(\\w+) = (\\S+)',
        // '^(\\w+) = ([\'\"]?[\'\"]?)',
        '(\\w{3}).*?{\\s*.*?: (.*?);',
    ]
    for (let regex of regexes) {
        if (test(regex, s, 'm')) {
            items = findall(regex, s)
            break
        }
    }
    if (!items) throw 'could not find a regex match for ' + s

    const options = {
        exported: true,
        join: ',\n',
        delimiter: ': ',
        parser: null,
        kt: (x) => String.prototype.toLowerCase.call(x),
    }
    const product = stringReduction(items, options)
    console.log(product)
    return product
}

function logArgs(...args) {
    console.log(args)
    return 'foobarlicious'
}
// math.true()
// console.log( math.gen('[p] / [p]', ipa, iterateIParser))
// console.log( numbergen({evaluate: true, amount: 3, pattern: math.expression('[1][i + 1] + [i * i][i + 2] * [i+3]')}))
// console.log( math.gen('[i]'))
// console.log( math.gen2('seriest8pli', 9, 'evaluate'))

// console.log( globalDocumentEdit('dec29 4foo 5foo 6foo 7foo 8foo 90'))

let mathstr = '1/[2^(i+1)]'
// console.log( math.gen2(mathstr, 3, 'evaluate'))  // some prolems right nowG
// console.log( math.gen2('[i][i+1][1/2^i] * [2^i]', 3, 'evaluate', 3))
// console.log( math.gen2('[1/2^i] * [2^i]', 20, 'evaluate'))
// console.log( math.gen2('[1/2^i]', 10))
// console.log( math.gen2('[2^i]', 3))
// console.log( math.gen2('[21^i]', 14))
// math.display('[21^i]', 4)
// console.log( math.gen2('[3^i]', 10))
// mathparser use e for exponent

// console.log( Accumulate(read('notesmidnight.txt')))
// console.log( Accumulate('r.js how does this work  or do else  or go home.bye.  hi  why 100p is great. 22p hi'))
// its a nice question.
// console.log( Math.pow(21, 21))

function gh(re) {
    const regex = '(?<=^|\\n)(?:(\\w+)\\W([^]+?)(?=\\n\\w|$)|#(\\w+)\\s*([^]+?)(?=\\n[\\n#]|$))'
    // const regex = '(?<=^|\\n)(?:(\\w+)\\W([^]+?)(?=\\n\\w|$)|#(\\w+)\\s*([^]+?)(?=\\n[\\n#]|$))'
    const queryRegex = /\(\?:(?:.*?\([^?].*?\)){1,}\|.*?\([^?]/
    return regex.match(queryRegex)
    return queryRegex.test(regex)
    const relevant = search('(?<=' + rescape('(?:') + ').+', regex)
    if (!relevant) return false
    for (let i = 0; i < relevant.length; i++) {
        let prev = relevant.charAt(i - 1)
        let ch = relevant.charAt(i)
        let next = relevant.charAt(i + 1)
        if (ch == '(' && next != '?') {
            parenCount += 1
        }

        if (ch == ')') {
            parenCount -= 1
        }
        console.log(ch)
    }
}
function globals() {
    return this
}

function varsList() {
    return Object.getOwnPropertyNames(globals())
}

function asdfadsjz() {
    const product = {
        itemIndex: this.currentItemIndex,
        keyIndex: this.currentKeyIndex,
        key: this.currentKey,
        item: this.currentItems[this.currentItemIndex],
        changed: this.currentItemIndex == this.currentItems.length - 1,
    }

    if (product.changed) {
        this.currentKeyIndex += 1
        this.currentItemIndex = 0
    } else {
        this.currentItemIndex += 1
    }

    return product
}

function autobind(functions) {
    functions.forEach((fn) => {
        this[fn] = fn.bind(this)
    })
    console.log(Object.keys(this))
}

class StoreReader extends Store {
    constructor(store, options) {
        super()
        if (store) {
            this.store = getClassName(store) == 'Store' ? store.value : store
        }
        this.currentKeyIndex = 0
        this.currentItemIndex = 0
        this.options = options
    }

    incrementGroup() {
        const endpoint = this.currentItemIndex + this.incrementStep
        const increment = Math.min(this.currentItems.length - 1, endpoint)

        const items = this.currentItems.slice(
            this.currentItemIndex,
            this.currentItemIndex + increment
        )
        this.currentItemIndex += increment
    }
    increment() {
        // display 5 at a time
        const product = {
            itemIndex: this.currentItemIndex,
            keyIndex: this.currentKeyIndex,
            key: this.currentKey,
            item: this.currentItems[this.currentItemIndex],
            isLast: this.currentItemIndex == this.currentItems.length - 1,
            changed: this.currentItemIndex == 0 && this.currentKeyIndex > 0,
        }

        if (product.isLast) {
            this.currentKeyIndex += 1
            this.currentItemIndex = 0
        } else {
            this.currentItemIndex += 1
        }

        return product
    }

    get currentItems() {
        return super.get(this.currentKey)
    }

    get currentKey() {
        return super.keys[this.currentKeyIndex]
    }
}
// console.log( math.pipe(math.createOperation(math.multiply, 25), math.createOperation(math.add, 20))(3)) // 3 * 25 + 20 ... what an insane way of saying this.

// console.log( Accumulator(accumulatorteststring))
accteststringmath = `
// math 1pl1pl2pl3=4t5e4
math frac3pl2-3/4t5t6//4d5/4d6
// math frac3pl2-3/4t5t6//4d5/4d6
`
// console.log( Accumulator(accteststringmath))

function range(n) {
    const store = []
    for (let i = 0; i < n; i++) {
        store.push(i)
    }
    return store
}
function iterator(range, fn) {
    if (isNumber(range)) {
        for (let i = 0; i < range; i++) {
            fn(i)
        }
    } else {
        for (let i = 0; i < range.length; i++) {
            fn(range[i])
        }
    }
}
function getClassName(x) {
    return x.constructor.name
}

function generateStore(store) {
    if (!store) {
        store = new StoreReader()
    }
    iterator(10, (x) => store.add(random.word(2), random.quote(20, 30)))
    return store
}

// console.log(Accumulator('print foo8'))
vps = `
div hi
`

// tl(argparser99([11,3,22,4,5], 1,2,3,4))
// console.log( createVuePage(vps ))
// console.log( elt('div', ipsum ))
// console.log( clock() )

// console.log( Math.round(32.123))
// runelt()

s260121141740 = `
config.subredditmap ebs explainbothsides
config.subredditmap foo foobar
config.foobar qoo qooo woo  woooo eo ep
config.snoobar a b  c d
config.pmwb boo balls  bas b\'as
config.pmwb boo balls  bas b\'as
`
// console.log(stringify(Accumulator(s260121141740)))
// console.log( testobj )
// console.log( vps?.foo )

s260121145637 = `
config=en chi

hi how r u
ni hao ma

good bye
zaijian

`
// console.log(i18maker(s260121145637pmwb))

vueteststring = `
33root
3data slideobject {id: 1, text: 'hii'}


vslideshow maxout p=slideobject key=slideobject.id {
    title hi
    p 4slideobject.text is cool red bgred fcblue flex wh40
}
        
`

// console.log( vueteststring )
// console.log(createVuePage(vueteststring))
// console.log( cmJumpSelectionHandler(cm(), 1 ))

function cmj2(cm, jump) {
    let { line, ch } = cm.getCursor()
    console.log(cm.getCursor())
    const text = cm.getLine(line)
    // const words = text.split(/(?<![\'\"]) +/)
    // const words = text.split(/(?<=\S)(?= )|(?<= )(?=\S)/)
    // const words = text.split(/(?<=\S)(?= )|(?<= )(?=\S)/)

    const words = text.match(/\w+|\W+/g)
    // const words =  findall('\\w+|\\W+', text )
    // console.log(words)

    let currentWord
    let sum = 0
    let firstCheckpoint
    // while (isEmpty(text.charAt(ch))) {
    // ch--
    // }

    for (let i = 0; i < words.length; i++) {
        sum += words[i].length
        if (!firstCheckpoint) {
            if (sum > ch) {
                firstCheckpoint = true
                console.log(text.slice(sum - words[i].length, sum))
                a = sum
            }
        }
        // else if (test('^\\W+$', words[i])) {
        // else if (isEmpty(words[i])) {
        // a = sum
        // console.log( 'skipping empty' )
        // console.log( sum )
        // continue
        // }
        else {
            b = sum
            console.log(merp(text))
            console.log(text.slice(a, b))
            console.log(a, b)

            const selection = [
                { line: line, ch: a },
                { line: line, ch: b },
            ]
            return cm.setSelection(...selection)
        }
    }
}

function cmj(cm, jump) {
    let { n, ch } = cm.getCursor()
    const line = cm.getLine(n)
    const words = line.split(/(?<![\'\"]) +/)
    // const words = line.split(/[\,\:\[\{]*(?<![\'\"]) +[\{\[\:]?/)
    console.log(words)

    let currentWord
    let sum = 0
    // let a = ch
    while (isEmpty(line.charAt(ch))) {
        ch--
    }

    for (let i = 0; i < words.length; i++) {
        sum += words[i].length
        if (sum > ch) {
            currentWord = words[i]
            break
        }
    }
    merp(line)
    console.log(currentWord)
    return
    // let currentWord = cmWordUnderCursor2(cm)
    let wordIndex = words.indexOf(currentWord)
    let nextWord = words[wordIndex + jump]
    if (!nextWord) {
        console.log('no last word')
        return
    }

    if (jump > 0) {
        // let regex = nextWord.replace('{
        let regex = nextWord.replace(/{}\[\]:/)
        // console.log( ch )
        let searchableText = line.slice(ch, line.length)
        let startIndex = searchableText.search(regex) + ch
        if (startIndex < 0) {
            startIndex = searchableText.search(nextWord) + ch
        }
        let endIndex = startIndex + nextWord.length
        console.log(line)
        console.log(ch, 'starting cursor')
        console.log(startIndex, endIndex, 'index range')
        console.log('word: ', line.slice(startIndex, endIndex))
        console.log(merp(line))
        return
    }

    merp(line)
    console.log(startIndex)
    // let startIndex = line.search(RegExp(parens(nextWord, 'b')))
    console.log(nextWord)
    console.log(line[startIndex + 1])
}

// console.log( cmj2(cm(9), 1 ))

s260121234806 = `
root
data foo hi

vchild {
    p .foo 4boo 4boo.woo
}
d yum gum  sum fun

vparent {
    child
    p 4foo
}
`

const quine = (test) => console.log(`${test}`)

// how do u give new Function access to the global environment?
// i have tried: tracer = tracer.bind(this) as well as tracer.bind(global), but neither of them has worked. Any sugs on wt i might try nxtqm t4th

function tracer(fn) {
    let s = fn.toString()
    let { name, params, body } = getFunctionInfo(s)
    if (!name) {
        let copy = parens(body, 'quine')
        // quine is a function which wraps the body with console.log, and calls it, to 'trace' what is happening.
        body = indent(copy + sn + 'return ' + body)
        return new Function(...params, body)
    }
}
// console.log( tracer((a) => isPrime(a + 6))(3)) //ERROR - isPrime is not defined.

function every(items, fn) {
    return list.every(fn)
}

function problem254(n = 60) {
    const store = []
    const constraints = [(a) => isPrime(a + 6), (a) => isPerfectSquare(9 * a + 7)]
    for (let i = 0; i < n; i++) {
        if (constraints.every((constraint) => constraint(i))) {
            store.push(i)
        }
    }
    return store
}
function problem254generator({
    min = 1,
    max = 100,
    xmin = 0,
    ymin = 0,
    xmax = 20,
    ymax = 20,
} = {}) {
    const store = []
    let count = 0

    for (let x = xmin; x < xmax; x++) {
        for (let y = ymin; y < ymax; y++) {
            const constraints = [(a) => isPrime(a + x), (a) => isPerfectSquare(a + y)]
            for (let i = min; i < max; i++) {
                count++
                if (constraints.every((constraint) => constraint(i))) {
                    store.push([i, '|', x, y])
                }
            }
        }
    }
    console.log(store)
    console.log('total count', count)
    console.log('match count', store.length)
    const filters = [
        // ([_, __, a, b]) => absDifference(a,b, 1),
        ([i, __, a, b]) => a + b == i,
    ]

    iterate99(filters, (filter) => {
        console.log(store.filter(filter))
    })
    // filters.forEach(filter => console.log(store.filter(filter)))
}

// a + x is a prime number. 11 + 2
// b + x is a perfect square.
// a + b = x.
// Find x.
// searching thru a solution space to try and arrive at an answer.
// the power of using a captive audience, is important as it allows y...
// interact with me...

function math142857(n, denominator = 13) {
    let x = fj(1, denominator)[1]
    console.log('--', eval(x * denominator))
    // console.log( x + ' * ' + denominator + ' * ' + n, eval(x * denominator * n ))
    return x * denominator * n
}

function math6174(n) {
    function runner(n) {
        let s = String(n)
        let a = Number(s.split('').sort().join(''))
        let b = Number(s.split('').sort().reverse().join(''))
        let product = b - a
        console.log(b, a, '', product)
        return product
    }
    const breaker = new Breaker(10)
    while (true) {
        breaker.next()
        n = runner(n)
        if (n == 6174) {
            console.log(breaker.count)
            return
        }
    }
}
// math6174(6175)
// math6174(2342)

function hasRepeat(str) {
    var pattern = /^(\d+)\1+$/
    var result = search(pattern, str)
    return result
}
function getRepeatingDecimal(numerator, denominator) {
    let answer = numerator / denominator
    let s = String(answer).split('.')[1]
    if (!s) return false
    // let digits = s.split('')
    // let store = []
    return console.log(hasRepeat(s))

    for (let i = 0; i < digits.length; i++) {
        let digit = digits[i]
    }
    console.log(answer)
}
// console.log( getRepeatingDecimal(2,7 ))
function getRepeatingDecimal2(numerator, denominator) {
    const primeFactors = getPrimeFactors(denominator)
    for (let i = 0; i < primeFactors.length; i++) {
        let factor = primeFactors[i]
        if (factor == 2 || factor == 5) {
            return false
        } else {
            const store = []
            const decimals = []
            for (let i = 0; i < 20; i++) {
                let answer = parseInt(numerator / denominator)
                if (!decimals[numerator]) {
                    decimals[numerator] = i
                }
            }
        }
    }
}

const arr1 = [1, 5, 7, 2, 5, 13, 8, 1, 7, 3, 8, 5, 2, 1, 5, 7]

function patternFound(arr) {
    const a = arr
        .map((item, i) => {
            if (i < arr.length) {
                return arr[i] + '|' + arr[i + 1]
            }
        })
        .sort()

    const b = a.map((item, i) => {
        if (i < arr.length - 1) {
            return item == a[i + 1]
        } else {
            console.log(i)
            console.log(item)
        }
    })
    console.log(a, b)
    return b.length > 0
}

function fj(n, d) {
    if ([2, 5].some((x) => getPrimeFactors(d).includes(x))) {
        return false
    }

    let x = n * 9
    let z = x
    let k = 1
    while (z % d) {
        z = z * 10 + x
        k += 1
    }
    return [k, z / d]
}
// console.log( fj(1,13 ))
// console.log( problem254generator() ) //works. There are an abundance of numbers that follows this pattern.

// iterate99(range(8), n => pipe(math142857, math.factory(math.add, n)))
// console.log( math.divide(1,13 ))
// console.log( curried(sum, 1)(2) )
// console.log( compose(math.add, math.multiply )(2))
// console.log( math.compose(math.factory(math.multiply, 3), math.factory(math.add, 1 ), math.factory(math.subtract, 5))(23))
// console.log( math.compose(math.factory(math.add, 1), math.factory(math.multiply, 3 ), math.factory(math.subtract, 5))(23))

// console.log(createVuePage(s260121234806).slice(200, 800))
// console.log(createVuePage(s260121234806).slice(200, 800))
// clock()

s280121183854 = `

config.js subredditmap ebs explainbothsides
`
// console.log(stringify(Accumulator(s280121183854)))

// console.log(stringify(Accumulator(read('questions.txt'))))

function topy(x) {
    let code = isFunction(x) ? String(x) : x.trim()
    code = replace('^ *//.*\\n', '', code)
    const jspywb = {
        'console.log': 'print',
        findall: 're.findall',
        re: 'regex',
        function: 'def',
        push: 'append',
        this: 'self',
        String: 'str',
        try: 'try:',
        trim: 'strip',
    }
    const jspynb = {
        '.filter((x) => x)': '[x for x in items if x]',
        's.match(RegExp(re))': 'search(re, s)',
        '===': '==',
        With: 'with',
        ' || ': 'or',
        ' && ': ' and ',
        "'gmi'": 're.M|re.I',
        null: 'None',
        '[^]': '[\\w\\W]',
        'try {': 'try:',
        'else {': 'else:',
        'else ': 'else: ',
        '\\\\': '\\',
    }
    const miscdict = {
        '!': { re: '(?<!<)!', rep: 'not ' },
        '`': { re: '(?<!\\\\)`', rep: "'''" },
    }

    const jspy2 = {
        [jspyBigMethodRE]: jspyBigMethodParser,
        '([\\w\\[\\]()]+)\\.(join|length|toString)\\((.*?)\\)': (_, a, b, c) => {
            if (b == 'length') return 'len' + parens(a)
            if (b == 'join') return c + '.join' + parens(a)
            if (b == 'toString') return 'str' + parens(a) + '()'
        },
    }
    try {
        code = edrep(code, miscdict, jspywb, jspynb)

        code = xreplace(code, jspy)
        code = xreplace(code, jspy2)
        code = xreplace(code, {
            '(}\\))': '',
            '(\\S+)\\.(length)': (_, a) => 'len(' + a + ')',
        })
        return code
    } catch (e) {
        console.log(e)
    }
}

// console.log( topy(regexWrapifyAndSave ))
// console.log( 'sdf' )

class asdfLineEdit {
    static parse(s) {
        return new LineEdit2(s).value
    }
    constructor(s) {
        this.lines = s.split('\n')
        this.index = 0
    }
    get value() {
        const product = this.lines.filter(isDefined).join('\n')
        return product
    }

    getLine(n) {
        return this.lines[n]
    }
    setLine(val, n) {
        this.lines[n] = val
    }
    deleteLine(n) {
        this.lines[n] = null
    }
    run() {
        for (let i = 0; i < this.lines.length; i++) {
            this.index = i
            this.runner()
        }
    }
}

// let sd = new LineEdit2(lorem)

// console.log(sd.getLine(1))
// sidenotes can be accessed anywhere by pressing n.
// otherwise, everything is its own container, and items are implicitly added. youll have a reddit block, a function block, et cetera. simultaneously, n can be accessed from anywhere using matchreplace. gives u a way to escape the flow. by doing it like this, u dont have to worry about the splitting as much, u can just write... is this correct, im not sure. it disappears from sight. by doing it like this. remove as many barriers as possible.

// things work until you make a small change somewhere, which potentially f's it up. have to take care this doesnt happen

// iei
// math.gen3 is the messy version of math.gen2 which works
// console.log( math.gen3('21ei + 2*ii + sqrti t 4 p 2' , {evaluate: true})) // WORKS
// patterns will show up out of the ruckus of all of this like WORKS
// console.log( math.gen3('iei' , {evaluate: true}))


class Calculation {
    constructor() {
        this._symbols = {};
        this.defineOperator("!", this.factorial,      "postfix", 6);
        this.defineOperator("^", Math.pow,            "infix",   5, true);
        this.defineOperator("*", this.multiplication, "infix",   4);
        this.defineOperator("/", this.division,       "infix",   4);
        this.defineOperator("+", this.last,           "prefix",  3);
        this.defineOperator("-", this.negation,       "prefix",  3);
        this.defineOperator("+", this.addition,       "infix",   2);
        this.defineOperator("-", this.subtraction,    "infix",   2);
        this.defineOperator(",", Array.of,            "infix",   1);
        this.defineOperator("(", this.last,           "prefix");
        this.defineOperator(")", null,                "postfix");
        this.defineOperator("min", Math.min);
        this.defineOperator("sqrt", Math.sqrt);
    }
    // Method allowing to extend an instance with more operators and functions:
    defineOperator(symbol, f, notation = "func", precedence = 0, rightToLeft = false) {
        // Store operators keyed by their symbol/name. Some symbols may represent
        // different usages: e.g. "-" can be unary or binary, so they are also
        // keyed by their notation (prefix, infix, postfix, func):
        if (notation === "func") precedence = 0;
        this._symbols[symbol] = Object.assign({}, this._symbols[symbol], {
            [notation]: {
                symbol, f, notation, precedence, rightToLeft, 
                argCount: 1 + (notation === "infix")
            },
            symbol,
            regSymbol: symbol.replace(/[\\^$*+?.()|[\]{}]/g, '\\$&')
                + (/\w$/.test(symbol) ? "\\b" : "") // add a break if it's a name 
        });
    }
    last(...a)           { return a[a.length-1] }
    negation(a)          { return -a }
    addition(a, b)       { return a + b }
    subtraction(a, b)    { return a - b }
    multiplication(a, b) { return a * b }
    division(a, b)       { return a / b }
    factorial(a) {
        if (a%1 || !(+a>=0)) return NaN
        if (a > 170) return Infinity;
        let b = 1;
        while (a > 1) b *= a--;
        return b;
    }
    static get(s) {
        const calculator = new Calculation()
        return calculator.calculate(s)
    }
    calculate(expression) {
        let match;
        const values = [],
            operators = [this._symbols["("].prefix],
            exec = _ => {
                let op = operators.pop();
                values.push(op.f(...[].concat(...values.splice(-op.argCount))));
                return op.precedence;
            },
            error = msg => {
                let notation = match ? match.index : expression.length;
                return `${msg} at ${notation}:\n${expression}\n${' '.repeat(notation)}^`;
            },
            pattern = new RegExp(
                // Pattern for numbers
                "\\d+(?:\\.\\d+)?|" 
                // ...and patterns for individual operators/function names
                + Object.values(this._symbols)
                        // longer symbols should be listed first
                        .sort( (a, b) => b.symbol.length - a.symbol.length ) 
                        .map( val => val.regSymbol ).join('|')
                + "|(\\S)", "g"
            );
        let afterValue = false;
        pattern.lastIndex = 0; // Reset regular expression object
        do {
            match = pattern.exec(expression);
            const [token, bad] = match || [")", undefined],
                notNumber = this._symbols[token],
                notNewValue = notNumber && !notNumber.prefix && !notNumber.func,
                notAfterValue = !notNumber || !notNumber.postfix && !notNumber.infix;
            // Check for syntax errors:
            if (bad || (afterValue ? notAfterValue : notNewValue)) return error("Syntax error");
            if (afterValue) {
                // We either have an infix or postfix operator (they should be mutually exclusive)
                const curr = notNumber.postfix || notNumber.infix;
                do {
                    const prev = operators[operators.length-1];
                    if (((curr.precedence - prev.precedence) || prev.rightToLeft) > 0) break; 
                    // Apply previous operator, since it has precedence over current one
                } while (exec()); // Exit loop after executing an opening parenthesis or function
                afterValue = curr.notation === "postfix";
                if (curr.symbol !== ")") {
                    operators.push(curr);
                    // Postfix always has precedence over any operator that follows after it
                    if (afterValue) exec();
                }
            } else if (notNumber) { // prefix operator or function
                operators.push(notNumber.prefix || notNumber.func);
                if (notNumber.func) { // Require an opening parenthesis
                    match = pattern.exec(expression);
                    if (!match || match[0] !== "(") return error("Function needs parentheses")
                }
            } else { // number
                values.push(+token);
                afterValue = true;
            }
        } while (match && operators.length);
        return operators.length ? error("Missing closing parenthesis")
                : match ? error("Too many closing parentheses")
                : values.pop() // All done!
    }
}


s310121114002 = `
r.js is there a way to calculate large numbers without rounding  i wd lk 2 calculate 21^21. the problem is that the answer is 5.842587018385982e+27. I'm hoping to get the entire number, as a whole number without the e27 truncation. Is there a way of doing thisqm

r.askprogramming is there a way to control a group of chromebooks  i have a group of students, each issued a chromebook. im wondering if theres a way for a master chromebook to do something on the master chromebook like: cs 
for chromebook in chromebooks:
    writefile('hello.txt', 'hello ' + chromebook[id])
    backupfiles()
    poweroff()

`
// console.log(Accumulator2(s310121114002))

// f = functionmod(indent2, betterText, 'js')

// console.log( f('ret x' ))

// console.log( createVuePage('div hi bgred' ))
// console.log( split('asdf asdf zzz', 'last' ))

lineeditstr = 'foo boo\nupe boo hi'
// console.log( LineEdit.format(lineeditstr ))

// console.log( stringify(LineEdit))
// writing on the prototype makes it easier to move around, and it also fixes the indenting. i wudve never expected that i could get to the prototype like this.
// one of the differences in how i code now, is that i am taking longer routes, but they are cleaner and easier to read. i think this is a good thing. make the writing orderly and neat and it will be easy to follow in later years.

asdfhjasdfsd = `
div
    bg = red
    c = yellow
    class = foo boo woo
    display = flex
    padding = calc (50% - 20px)
    if = 
    show = 
    model =
    ref = 
    class = 
    px = 
    padding-x = 
    py = 
    padding-y
    mx
    my
    margin-left
    margin-top = 
    use = rounded
    use = bold
    bold = 700
    shadow = 100
    flex = 
    poition = abs
    text = hey whats up. 
    // there is something oddly comforting. 
    child
    t = 
    drastically more efficient. 
    the rough draft has to be readable as well.

`

// a pretty insane storm is blowing atm.
// should i be doing this refactoring work right now.
// i need to find a way to track my efforts.



const removeDwl = deleteFactory(/ *(?<!:)\/\/.*\n?|\S+?dwl *|\w+?dw *|.*?dn\n?/, 'g')



class LineEdit2 {
    peek() {
        return this.lines[this.index + 1]
    }
    get line() { return this.lines[this.index] }
    get previousLine() {return this.lines[this.index - 1]         }
    get isLastLine() { return this.index == this.lines.length - 1 }
    get lastLine()  {  return this.lines[this.lines.length - 1]   }
    getLines(start, end) {
        return this.lines.slice(start, end)
    }

    getMostRecentBlock() {
        let start = this.parentBlockEnterIndex
        let end = this.parentBlockExitIndex
        return this.getLines(start, end).join('\n')
    }

    blockDitto(content) {
        // console.red( 'sdf' )
        // console.error( this.getMostRecentBlock() )
        this.lineDitto(content, this.getMostRecentBlock())
    }
    static format(s) {
       const x = new LineEdit2(s)
       return x.export()
    }

    constructor(s, {track = true, runner = null, getInfo = true, skip = null} = {}) {
        this.original = s
        if (runner) {
            this.runner = runner.bind(this)
        }

        this.skipFunction = skip ? skip.bind(this) : () => {}
        this.getInfo = getInfo
        this.track = track
        this.currentTabWidth = 0
        this.lines = s.trim().split('\n')
        this.parentBlockExitIndex = null
        this.childBlockExitIndex = null
        this.parentBlockEnterIndex = null
        this.childBlockEnterIndex = null
        this.mostRecentOpeningBracket = null
        this.mostRecentClosingBracket = null
        this.currentTabWidth = null
        this.memory = null
        this.extraActions = null
        this.globalReplaceStore = {}
        this.tracker = {}
        this.index = 0
        this.tabWidth = 4
        this.tabSpaces = ' '.repeat(this.tabWidth)

        this.actionmap = {
            'upd': this.deleteLine,
            'upe': this.upedit,  
            'upt': this.uptype,
            'ep' : this.editParameters,
            'le' : this.editCurrentLine,
            'gr' : this.globalReplace,
            ditto: this.lineDitto,
            bd   : this.blockDitto,
        }

        this.extramap = {
            'xp': this.previousMemoryAction
        }


        this.lineInfoRE = Regex2(this.actionmap, {
            mode: 'wb', 
            capture: true, 
            end: ' (.*)',
        })

        this.extraActionsRE = Regex2(this.extramap, {
            capture: true,
            mode: ''
        })

    }

    export() {
        this.run()
        return this.text
    }
    get text() {
        return this.lines.filter(isDefined).join('\n')

    }

    getLine(n) {
        return this.lines[n]
    }

    setLine(val, n) {
        this.lines[n] = val
    }

    deleteLine(n) {
        this.lines[n] = null
    }

    run() {
        for (let i = 0; i < this.lines.length; i++) {
            this.index = i
            this.runner()
        }
    }

    get spaces() {
        return ' '.repeat(this.tabWidth)
    }
}


LineEdit2.prototype.sprawlTo = function(regex, flags = '') {
    for (let i = this.index - 1; i >= 0; i--) {
        let line = this.lines[i]
        regex = '(?<!up)' + regex
        if (!exists(line) || !(test(regex, line, flags))) {
            continue
        }
        else {
            return i
        }
    }
    throw 'linesprawlerror' 
}

function deleteFactory(re, flags = '') {
    const regex = isRegExp(re) ? re : RegExp(re, flags)
    // console.log( regex.toString() )
    return (s) => s.replace(regex, '')
}
LineEdit2.prototype.replaceLine = function (regex, replacement, n) {
    this.getset((x) => replace(regex, replacement, x, ''), n)
}

LineEdit2.getEditInfo = function(content, mode = '') {
    content = content.replace(/(?<=\w)\*/g, '\\w+') // HACKY
    let dict, regex, replacement

    if (mode == 'le') {
        let match = searcher('(\\d+) (.*)', content)
        if (match) return [...match, null]
        else {
            return [1, content, null]
        }
    }
    
    if (content.includes('  ')) {
         dict = toDictionary(getLineInfoMAPS(content))
         regex = Regex2(dict, {join: '.*?'}) 
    }
    else {
         [regex, replacement] = split(content)
    }
    
    return [regex, replacement, dict]
}

LineEdit2.prototype.upedit = function (content) {
    // return console.log( content)
    let index
    let [regex, replacement, dict] = LineEdit2.getEditInfo(content)

    /* ---------------------------------------------------- */
    if (isNumber(regex)) {
        this.lineEdit(regex, replacement, dict, this.index - regex)
        return
    }

    else if (regex == 'param') {
        this.editParameters(replacement)
        return
    } 

    else if (logicblocks.includes(regex)) {
        index = this.sprawlTo('^ *' + regex)
        regex = parens(regex + ' ', 'plb') + '.*(?= {)'
    } 
    
    else {
        index = this.sprawlTo(regex)
    }

    /* ---------------------------------------------------- */

    if (dict) {
        this.multipleReplace(dict, index)
    } else {
        this.replaceLine(regex, replacement, index)
    }
    /* ---------------------------------------------------- */
}

LineEdit2.prototype.getset = function(transformer, ...args) {
    let index = args.pop()
    this.lines[index] = transformer(this.lines[index], ...args)
}

LineEdit2.prototype.multipleReplace = function(dict, index) {
    this.getset(drep, dict, index)
}
LineEdit2.prototype.deleteLine = function(content = '') {
    if (!content) {
        this.lines[this.index] = null
        return
    }
    let range = [this.index - 1]

    if (content == block) {
        range = Range.from(this.index, this.indexOfLastClosingBracket)
    }

    else if (isNumber(content)) {
        range = Range.from(this.index, this.index + Number(content))
    }

    for (let i = 0; i < range; i++) {
        this.lines[range[i]] = null
    }
}
LineEdit2.prototype.getNumidelberMatch = function(content) {
    let n;
}

LineEdit2.prototype.lineEdit = function(regex, replacement, dict, n = 0) {
    const format = deleteFactory(' ' + this.tag + '.*')
    if (isNumber(regex)) {
       regex = parens('^ *' + '\\S+ '.repeat(parseInt(regex)), 'plb')
       if (endsWithLetter(replacement)) {
           replacement += ' '
       }
    }

    if (dict) {
        const parser = (s) => drep(s, dict)
        this.getset(compose(parser, format), dict, this.index)
    }
    else {
        const parser = (s) => replace(regex, replacement, s, '')
        this.getset(compose(parser, format), n)
    }
}
LineEdit2.prototype.editCurrentLine = function(content) {
    let index = this.index

    if (this.line.trim().slice(3) == content.trim()) {
        index -= 1    
        this.deleteLine()
    }

    this.lineEdit(...LineEdit2.getEditInfo(content, 'le'), index)
}


LineEdit2.prototype.edit = function (transformer, n = this.index) {
    let line = this.getLine(n)
    let spaces = getSpaces(line)
    this.setLine(spaces + transformer(line.trim(), spaces), n)
}

LineEdit2.prototype.editLine = function (transformer, n) {
    let line = this.getLine(n)
    let spaces = getSpaces(line)
    this.setLine(transformer(line.trim(), spaces, line), n)
}


LineEdit2.prototype.editParameters = function(content) {
    const index = this.parentBlockEnterIndex
    const regex = /.(?=\))/
    const replacement = (s) => {
        return s == '(' ? '(' + content : s + ', ' + content 
    }
    this.replaceLine(regex, replacement, index)
}


LineEdit2.prototype.getBracketSpacing = function(line) {
    const tabWidth = getIndent(line)
    this.currentTabWidth = tabWidth
    const bracket = search('([{}]) *$', line)
    let isEnter
    let isExit
    

    if (bracket == '{') {
        isEnter = true
        this.mostRecentOpeningBracket = this.index
        if (tabWidth == 0) this.parentBlockEnterIndex = this.index
        else if (tabWidth == 4) this.childBlockEnterIndex = this.index
    }

    else if (bracket == '}') {
        isExit = true
        this.mostRecentClosingBracket = this.index
        if (tabWidth == 0) this.parentBlockExitIndex = this.index
        else if (tabWidth == 4) this.childBlockExitIndex = this.index
    }

    return [tabWidth, isEnter, isExit]

}

LineEdit2.prototype.getIndentationBelow = function (line, spaces) {
    if (test('{', line)) {
        return spaces + this.tabSpaces
    }
    return spaces
}


LineEdit2.prototype.getInsertionIndex = function(tag) {
    if (tag in this.indexmap) {
        return this.indexmap[tag]
    }
}



LineEdit2.prototype.getLine = function(n) {
    let line = this.lines[n]
    try {
        if (isNull(line)) {
            // console.red('is null')
            return ''
        }
        return line
    }
    catch(e) {
        console.log( e )
        console.red( line )
        throw 'error at getting line at LineEdit2' 
    }
}

LineEdit2.prototype.asdfhasdjsa = function(line) {
    if (isEmpty(line)) {
        this.tag = null
    }
    else {
        this.getBracketSpacing(line)
        this.getLineTag(line)
    }
}

LineEdit2.prototype.getLineInfo = function(line) {
    // console.red( line )

    let match

    if (match = search(this.extraActionsRE, line)) {
        this.extraAction = match
    }

    if (match = search(this.lineInfoRE, line)) {
        [this.tag, this.content] = match
    }

    else {
        this.tag = null
    }
}




LineEdit2.prototype.getIndentationAbove = function(line, spaces) {
    if (isString(spaces)) spaces = spaces.length
    // console.red( [line, spaces] )
    if (spaces == 0) {
        if (line.endsWith('{')) {
            return spaces
        }
        if (line.endsWith('}')) {
            return spaces + this.tabWidth
        }
    }
    return spaces
}

LineEdit2.prototype.insertLineAbove = function (content, n) {
    // return this.getset((original) => {
        // return content + sn + original
    // }, n)

    const transformer = (line, spaces) => {
        const indentation = this.getIndentationAbove(line, spaces)
        return indent(content, indentation) + '\n' + spaces + line
    }

    this.editLine(transformer, n)
}



LineEdit2.prototype.spliceLineAbove = function (content, n) {

    let indentation = getSpaces(this.getLine(n))
    if (this.getLine(n).endsWith('{')) {
        indentation += this.tabSpaces
    }
    content = indentation + content 
    this.lines.splice(n + 1, 0, content)
}

LineEdit2.prototype.spliceLineBelow = function (content,  n) {
    this.lines.splice(n + 1, 0, content)
}


function toSpaces(n = 4) {
    return isNumber(n) ? ' '.repeat(n) : n
}


LineEdit2.prototype.getTabWidth = function(n) {
    let tabWidth
    let line = this.getLine(n)
    if (line.endsWith('{')) {
        tabWidth = getIndent(line) + this.tabWidth
    }
    else if (line.endsWith('}')) {
        tabWidth = getIndent(line) - this.tabWidth
    }
    else {
        tabWidth = getIndent(line)
    }
    return tabWidth
}

LineEdit2.prototype.insertLineBelow = function (content, n) {
    // return this.spliceLineBelow(content, n)
    return this.getset((s) => s + sn + content, n)
}


LineEdit2.prototype.run = function() {
    for (let i = 0; i < this.lines.length; i++) {
        this.index = i
        let line = this.lines[i]

        try {
            if (isEmpty(line)) {
                this.skipFunction()
                continue
            }
            let [tabWidth, isEnter, isExit] = this.getBracketSpacing(line)

            if (this.track) line = line.replace(/^ *| ?{ *$/g, '')
            if (this.getInfo) this.getLineInfo(line)
            this.runner(line, i, tabWidth, isEnter, isExit)
        }

        catch(e) {
            if (e.message == 'SPRAWL') {
                console.log( 'sprawlerror----------' )
                GLOBAL_STORE.push(['SPRAWL-ERROR', this.lines[i]])
                continue
            }
            console.red(__line)
            console.red('ERROR: ' + e.name)
            console.red('MESSAGE: ' + e.message)
            console.red('LINE: ' + this.lines[i])
            console.log( 'ORIGINAL: ' + this.original )
            console.log( e.stack ) //stack doesnt exist in browser?
            console.log( 'TAG: ' + this.tag )

            throw 'error at LineEdit2 Catcher' 
        }
    }
}



LineEdit2.prototype.runner = function(line) {

    if (this.extraAction) {
        this.extramap[this.extraAction].call(this, line)
        this.extraAction = null
    }

    if (!this.tag) {
        return
    }

    if (!['le', 'ditto'].includes(this.tag)) {
        this.lines[this.index] = null
        this.content = this.content.trim()
    }

    this.actionmap[this.tag].call(this, this.content)
    // action = this.actionmap[this.tag].bind(this)
    // action(this.content)
}


LineEdit2.prototype.setLine = function (content, n) {
    this.lines[n] = content
}




LineEdit2.prototype.uptype = function(raw) {
    const regex = /(?<=^(?:@\w+|\d*|bs|be|fs|fe|cs|ce|b|e)) +/
    let [location, content] = raw.split(regex)
    if (!content) {
        content = location
        location = 1
    }

    let index
    let direction
    let tabWidth 

    switch (location) {
        case 'f': 
        case 'fs': 
            index = this.parentBlockEnterIndex
            direction = 'below'
            tabWidth = this.tabWidth
            break

        case 'fe': 
            index = this.parentBlockExitIndex
            direction = 'above'
            tabWidth = this.tabWidth
            break

        case 'b': 
            index = this.mostRecentOpeningBracket
            direction = 'below'
            break

        case 'bs': 
            index = this.mostRecentOpeningBracket
            direction = 'below'
            break

        case 'be': 
            index = this.mostRecentClosingBracket
            direction = 'above'
            break

        case 'c':
        case 'cs': 
            console.red('adas child')
            index = this.childBlockEnterIndex
            tabWidth = this.tabWidth + this.tabWidth
            direction = 'below'
            console.log( direction, tabWidth, index) 
            break

        case 'ce': 
            index = this.childBlockExitIndex
            tabWidth = this.tabWidth + this.tabWidth
            direction = 'above'
            break

        default:
            if (isNumber(location)) {
                index = Math.max(0, this.index - parseInt(location))
                direction = 'above'
            }

            else if (location.startsWith('@')) {
                location = location.slice(1)
                index = this.sprawlTo(parens(location, '\\b'), 'i') 
                direction = 'below'
            }
    }


    if (!tabWidth) {
        tabWidth = this.getTabWidth(index)
    }

    content = indent(paragraphify(content), tabWidth)

    switch(direction) {
        case 'above':
            this.insertLineAbove(content, index)
            break
        case 'below':
            this.insertLineBelow(content, index)
            break
        default:
            throw new Error('INSERTION_ERROR')
    }
}


LineEdit2.prototype.globalReplace = function(content) {
    const product = toDictionary(getLineInfoMAPS(content))
    mergeInPlace(this.globalReplaceStore, product)
}


LineEdit2.dittoHelper = function(content) {
    let keys
    let items
    if (hasDoubleSpace(content)) {
      ;[keys, items] = split(content, 'fr', '  ', [splitSpaces, splitSpaces])
    }

    else {
        items = content.split(' ').map(el => [el])
        keys = [items.shift()]
    }
    return [keys, items]
}
const hasDoubleSpace = testFactory('  ')
function getLongestWord(s) {
    const words = s.split(' ')
    words.sort((a,b) => b.length - a.length)
    return words[0]
}

LineEdit2.prototype.previousMemoryAction = function(line) {
    let tag = 'xp'
    if (test('(?<!= )' + tag + '$', line)) {
        this.memory = getLongestWord(line)
        line = line.slice(0, -1 * tag.length)
    }

    if (this.memory) {
        line = replace(tag + '', this.memory, line, 'gm')
    }

    this.setLine(line, this.index)
}

LineEdit2.prototype.lineDitto = function(content) {
    let store = []
    let [keys, items] = LineEdit2.dittoHelper(content)
    let regex = keys.join('.*?|')
    let template = this.getLine(this.sprawlTo(regex, 'i'))

    for (let item of items) {
        const dict = keys.reduce((acc, key, i) => {
            key = template.match(RegExp(key, 'i'))[0]
            const val = isCapitalized(key) ? 
                capitalize(item[i]) : 
                item[i]

            acc[key] = val
            return acc
        }, {})
        store.push(drep(template, dict))
    }
    // console.red( store )
    // console.red( this.currentTabWidth )
    // const product = indent(toString(store), this.currentTabWidth)
    const product = toString(store)
    this.setLine(product, this.index)
}

teststring23=`
function booo() {
    if (childblock) {
        //do this
        // booo is red green and boy
    }
    if (zoop) {
        // do this
    }

    while (zoop) {
        // do that
    }
}
upt bs AA
upt be BB
upt cs CC
upt ce DD
upt fs EE
upt fe FF
upe param items, options = {}
upe if exists(x)
upe while this.getLine(x) != ''
`
// let editor = new LineEdit2(teststring)
// console.log(teststring, '\n---------\n')
// console.log( removeDwl(teststring) )
// console.log(editor.text )





s040221105118=`
foo is fun
 if x is zoo {
     ret x
 }
 while (sdf is foo {
 if (ar(gs(foo) is foiooo
     ret x
 }
`

const spaceractionmap = {
    f:     fParser,         //GENERAL
    dobj:  dobjParser,      //GENERAL
    proto: '%1.prototype.%2 = function(%3)',
    rr:    'replace(%1, %2, s)',
    rs:    'search(%1, s)',
    rf:    'findall(%1, s)',
    rt:    'test(%1, s)',
    ray:   'raise Exception(%1)',
    cl:    'console.log(%1)',
    lab:   '(a,b) => %1',
    if:    'if (%0)',
    elif:  'else if (%0)',
    while: 'while (%0)',
    fori:  'for (let i = 0; i < %1; i++)',
    forkv: 'for (let [k,v] of Object.entries(%1))',
    fork:  'for (let k of Object.keys(%1))',
    forv:  'for (let v of Object.values(%1))',
    forx:  'for (let i = $1; i < %2; i++)',
}

function templater(s, items) {
    let count = 0
    function parser(x) {
        if (x == '%0') return items.join(' ')
        return items[count++]
    }
    return replace('%\\d', parser, s, 'gm')
}

function templater2(s) {
    let count = 0
    const delimiter = '%'

    const format = (x) => {
        if (x.startsWith(delimiter)) {
            return 'args' + parens(count++, 'braces')
        }
        else {
            return parens(x, 'sq')
        }
    }

    const parts = s.split(/(?=%\d)|(?<=%\d)/).map(format)
    const body = parts.join(' + ')
    tl(body)
    return new Function('...args', body)
}
// console.log(findall(inbetweenRE, s040221105118))

// console.log( templater('%1. how r u today %2. im great' ))


s040221045724=`
f foo90 {
    if dfsgsdfx is list and or boo is int {
        ret x
    }
}
proto apple banan grame
`
// console.log(bestText(s040221045724))
// console.log( search(inbetweenRE, s040221045724 ))

// console.log( getSpaces(  asdasd').length )


//start

async function getIpAddress() {
  return await fetch('checkip.amazonaws.com')
  // return fetch("https://checkip.amazonaws.com/").then(res => res.text())
}




story =`
muscle knots, primarily affect three populations; old ppl, ppl who have suffered back injuries, and ppl who sit for too long 9accumulated over many many years.'

you will know when u hv a muscle knot. it literally feels like there is a knot is stuck in the back of your back or shoulder. you twist your head, rolling your neck, you stretch your back out, u perform yoga positions, but the knot just doesnt seem to be going away. u check the mirror. is there a giant bulge because thats wt it feels like, but there isnt. no matter how u twist and turn, the feeling just doesnt go away. 

so how does it happenqm the body is i

so how do you prevent itqm
the obvious things are 
stretching
drinking lots of water
sitting with good posture
exercise

but let's be real. stretching? getting up from the computer for a short breakqm please.it's too much work to do these things. 

stretching
stretching.
`

function cssParserProduction(s) {
    let template = `
outer {
    height = 40
    h = 20vw
    w = 30p
    m = 3vw
    ml = 2em
    mr = 1em
    text = this is the text
    this is the text if its not loaded 
    if = onloading
    show = ondisplay
    grid = 3 columns, 2 rows, 
    class = 
    aggregate = true

    inner {
        tx = text
        t = this is the text
    }
}
    `

    let match
    let re
    let re2 = 'zooga'
    // let store = []
    delimiter = 'p'
    let delimiterStart = '{'
    let delimiterEnd = '}'
    let tabWidth = 0
    // re = parens(delimiterStart, 'b') + '[^]+?(?=$|\\s*' + parens(delimiterEnd, 'b') + '\\s)'
    // re = spaces + parens(delimiter, 'b') + '[^]+?(?=$|(?:\\n' + spaces + parens(delimiter, 'b') + '\\s)'

    // re = spaces + '.*?' + delimiterStart + '[^]+?(?=$|' + spaces + delimiterEnd + ')'

    s = template
    console.log( re )

    const getRegex = (n) => toSpaces(n) + '.*?' + delimiterStart + '[^]+?' + sn + toSpaces(n) + delimiterEnd
    let store = {}

s = `
div {
    hi
    p {
        first inner paragraph
    }
    p {
        second inner paragraph
    }

    section {
        p {
            third
        }
    }
}
`
    let section
    let memory
    function runner(s, tabWidth, store, current) {
        let re = getRegex(tabWidth)
        let children = findall(re, s)
        let section = store[current] = []

        if (children) {
            for (let child of children) {
                console.log( child, tabWidth )
                runner(child, tabWidth + 4, section)        
            }
        }

        else {
            section.push(s)
        }
    }
    runner(s, 0, [], 0)
    console.log( stringify(store ))

    // console.log( stringify(store['-4']['0'] ))
    return
    while (s.length > 0)  {
        s = skipSpaces(s)
        if (match = searcher(re, s)) {
            store.push(match)
            console.log(match)
        }
        else if (match = searcher(re2, s)) {
            console.log(match )
        }
        else {
            break
        }
        s = s.slice(match.length)
    }
}
function skipSpaces ( string ) {
    var first = string.search (/\S/) ;
    if (first == -1) return "";
    return string.slice(first) ;
}


// console.log( cssParserProduction() )
function nextAlphabetLetter(s) {
    let index = alphabet.indexOf(s)
    return alphabet[index + 1]
}

vuestr = `
css .hi bgred
@lg bgblue
@md bgred
fraction {
    show = loading
    pb = 10
    top {
        span .foo x = doo z=foobz 21 asdfj hasjd skfakj xccxv . asdfdaf 
        span :foo 21
        span 21
    }
}
`
svxxxxuestr = `
parent {
    show = onloading
    this is a sentence of text that goes. on and on.
    p foobar hey there
    text asdf 
    centered
    width = 60
    height = 60
    firstchild {
        pos = absolute
        text = hi how r u today
        innerfirst {
            p howdy howdy
            p howdy howdy
            p howdy howdy
        }
    }
    secondchild {
        pos = absolute
        // automatic insertion is the parent becomes relative
        // bottom = 10
        // left = 10
        circle = 20
        // color = blue
    }
    third {
        div {
            hi jhafsdj hasdf hasjdf asdfhkjasdf 
        }
    }
    // ditto @child color = red  !left  right = 10
    // ditto @child color = green  !left  right = 10
}
`


function searchAll(re, s) {
    const store = []
    const regex = RegExp(re, 'gm')
    let match

    while ((match = regex.exec(s)) !== null) {
        store.push(match.slice(1).filter(x=>x))
    }
    return store
}
// const cssAttrRE = /(\w+)(?: ?= ?(\S+))?/
// const cssAttrRE = /(\w+) ?= ?(\S+)/g
// const cssAttrRE = /(text) = (.*?)(?=$|\w+ ?=)|(\w+)(?: ?= ?(\S+))?/

// const cssAttrRE = /(\w+) ?= ?(\S+)/
// const cssAttrRE = /(text|p)(?: =)? (.*?)(?=$|\w+ ?=)|(\w+)(?: ?= ?(\S+))?/
const cssAttrRE = /^ *([:.]?\w+ [.:]?\w+.*)|(text|p) ?= ?(.*?)(?=$|\w+ ?=)|(\w+)(?: ?= ?(\S+))?/

// const cssAttrRE = ,c
const htmlLineRE = /\w+ \w+ .*/
const singletonAttrRE = /^ *\w+$/
// u shud keep the regexes simple that is very correct. 
// a set of questions to go along with it. 
// the feeling of being around something that is special
// sure. sure I will do that. Play to the ultimate strengths. 
// one small contribution to the world. 
// i know a bad dynamic when I see one. 





class HtmlMaker {
    constructor({js = '', css = ''} = {}) {
        this.cssChunks = {}
        this.cssStore = new AdvancedStorage()
        this.presetClasses = ['centered']
        this.currentAttrs = null

        this.currentAttrs = null
        this.currentElementHasChildren = null
        this.currentElement = null
        this.currentTextItems = null

        this.store = {}
        this.tabWidth = 4
        this.count = 0
        this.previousIndent = 0
        this.currentIndent = 0

        this.js = js
        this.css = css
    }

    run(text) {
        console.green('ORIGINAL', text )
        let [s, initialCss, labels] = aggregateCss(removeComments(text))
        console.red( labels )
        this.labels = labels
        const html = this.runner(s)
        let css = this.cssChunks
        css = stringReduction(css, {
            kt: (x) => '.' + x,
            brackify: false,
            join: '\n\n',
            delimiter: ' ',
        })

        return html99({
            template: html, 
            css: (this.css + initialCss + snsn + css).trim(),
            js: this.js, 
            libraries: null
        })
    }

    doubleItemManager(a,b) {
        if (a in vmap) {
            this.currentAttrs.add(vmap[a], b)
        }

        else if (a in cabmap && isFunction(cabmap[a])) {
            this.cssStore.addArray(cabmap[a](b))
        }
        else {
          // this.cssStore.addArray(formatDoubleItem(a,b))
          // this.cssStore.add(this.currentElement, formatDoubleItem(a,b))
        }
    }

    singleItemManager(s) {
        if (s in cabmap) {
            this.cssStore.addArray(cabmap[s])
            // this.cssStore.add(this.currentElement, cabmap[s])
        }
        else if (presetClasses.includes(s)) {
            this.currentAttrs.add('class', s)
        }
    }

    parseAttrs(attrString) { //current
        this.currentTextItems = []
        this.currentAttrs = new AdvancedStorage()

        if (this.currentClassName) {
            this.currentAttrs.add('class', this.currentClassName)
        }

        const items = searchAll(cssAttrRE, attrString)
        for (let [a,b] of items) {
            // console.red( a,b )

            if (a == 'text' || a == 'p') {
                this.currentTextItems.push(b)
            }

            else if (a.startsWith(':')) {
                this.currentAttrs.add(...parseVueAttr(a))
            }

            else if (b) {
                this.doubleItemManager(a,b)
            }

            else if (isSingleWord(a)) {
                this.singleItemManager(a)
            }

            else {
                this.currentTextItems.push(a)
            }
        }

        let location, join, brackify, slice, trim
        this.currentClassName = 'div'
        if (this.currentClassName == 'div') {
            location = 'styles'
            join = '; '
            brackify = false
            slice = true
        }
        else {
            location = 'css'
            brackify = true
            join = ';\n'
            slice = false
            trim = true
        }

        // const product = stringReduction(
            // this.cssStore.get(this.currentElement), {
                // delimiter: ': ',
                // brackify,
                // join,
                // slice,
                // trim,
            // }
        // )

        const product = stringReduction(
            this.cssStore.value, {
                delimiter: ': ',
                brackify,
                join,
                slice,
                trim,
            }
        )
        this.cssStore.reset()
        
        if (product) {
            if (location == 'styles') {
                this.currentAttrs.add('style', product)
            }
            else {
                this.cssChunks[this.currentClassName] =  product
            }
        }

        this.currentAttrs = this.currentAttrs.format({
            'class': {
                delimiter: ' '
            }
        })
        // currentTextValue

    
    }

    parseCss(s) {
        // let [a,b] = s.split(
    }
    format(s) {
        // console.red( s )
        if (s.startsWith('css')) {
            this.parseCss(s.slice(4))
            return ''
        }

        let items = s.split(/ (?=\w+ ?=|[\.:]\w)|(?<== ?\w+|:\w+) /)
        console.red( items )

        let [el, attrs, text] = splitThreeWays(items)
        if (this.labels.includes(el)) {
            attrs.push('.' + el)
            el = 'div'
        }
        if (!el) el = 'p'
        if (attrs) attrs = reduceToAttrObject(attrs)
        return div9000(el, text, attrs)
    }

    get currentTextValue() {
        let s = ''

        if (exists(this.currentTextItems)) {
            // console.red( this.currentTextItems) 
            s += sn + indent(
                this.currentTextItems.map(this.format.bind(this)).join('\n'), 
                this.currentIndent,
            )

            if (!this.currentElementHasChildren) {
                s += sn + toSpaces(this.currentIndent - 4) + toClosingTag(this.currentElement)
            }
        }

        else if (!this.currentElementHasChildren) {
            s += toClosingTag(this.currentElement)
        }

        return s 
    }

    getName(name) {
        // something may go wrong here.
        if (hlist.includes(name)) {
            this.currentClassName = null
            return name
        }
        else if (this.labels.includes(name)) {
            console.green(' it is labeled ')
            this.currentClassName = name
            return 'div'    
        }
        else {
            this.currentClassName = name
            return name
        }
    }
    tagReplacer(_, name, attrString, hasChildren) {
        this.currentElement = this.getName(name)
        console.red( this.currentElement )
        this.currentElementHasChildren = Boolean(hasChildren)
        this.parseAttrs(attrString)

        let attrs = stringReduction(this.currentAttrs, { 
            start: ' ',
            vt: quotify,
            join: ' ',
        })

        let div = '<' + this.currentElement + attrs + '>'
        return div + this.currentTextValue + '\n' 
    }
    parser(s, spaces) {
        this.setIndentAndCountIndex(spaces)
        // const tagRE = /^( *)([\w-]+)([^]+?)(?=\n.*?{|$)/
        // const relevantRE = /[^]+?(?=\n.*?{|$)/
        // capturing the '{' in the lookahead for determine child.
        // const relevantRE = /[^]+?(?=\n.*?({)|$)/ 
        /////////////////////////////////////////////////

        const relevantRE = /([\w-]+) {([^]+?)(?=.*?({)|$)/ 
        // removed the             {'\n'( // necessary ...
        //////////////////Capturing everything.
        // console.log( '-------' )
        // console.yellow( s )
        // console.blue( searcher(relevantRE, s ))
        // console.blue(s.match(relevantRE))

        s = s.replace(relevantRE, this.tagReplacer.bind(this))
        s = s.replace(/}$/, toClosingTag(this.currentElement))
        return this.runner(s)
    }

    runner(s) {
        const regex = this.getRegex(this.currentIndent)    
        return replace(regex, this.parser.bind(this), s)
    }



    setIndentAndCountIndex(spaces) {
        if (spaces.length != this.previousIndent) {
            this.count += 1
        }
        this.previousIndent = spaces.length
        this.currentIndent = spaces.length + this.tabWidth
    }
    getRegex(n) {

        return parens(parens(toSpaces(n)), 'plb') + '.*?' + ' {' + '[^]+?\\n' + toSpaces(n) + '}'

// capturing the spaces inside of the lookaround, as well as the relevant

        return parens(toSpaces(n)) + '.*?' + ' {' + '[^]+?\\n' + toSpaces(n) + '}'
        // capturing spaces in this one
        return toSpaces(n) + '.*?' + ' {' + '[^]+?\\n' + toSpaces(n) + '}'
        // no lookaround, uses the spaces to the advantage. 
        return parens(toSpaces(n), 'plb') + '.*?' + ' {' + '[^]+?\\n' + toSpaces(n) + '}'
        return parens(toSpaces(n), 'plb') + '.*?' + ' {' + '[^]+?\\n(?=' + toSpaces(n) + '})'

    }

    save(attrs) {
        if (this.count in this.store) {
            console.red( this.count, this.store, attrs )
            console.error('the count shudnt be in the store')
        }
        this.store[attrs.name] = attrs
    }
    get placeholder() {
        return 'placeholder' + this.count
        return this.count + 'placeholder'
    }
    get currentSpaces() {
        return toSpaces(this.currentIndent)
    }

}

story = `
A snowball starts small. Easy to break. A gust of wind. A small mistake. A forgetful moment. And it crumbles.   

But.

Give it time.
Give it firm foundation. 
Pack it again and again each time it begins to fall.

And just watch, as your snowball becomes a snow boulder,
Rolling down the hill, growing ever stronger. 

You.

Are the snowball. 

The you of today, one day becomes, the you of the future. 

Keep packing your snow ball. 
Believe in what you can do.
Who will believe in you? 
Everyone will believe in you.
But it must start with you.

Who will stop you?
So much will try to stop you. 
so much will stand in your way. 
Which is why, 
You must never stop you.

Our guest for tonight is a seargant of the Cavitation Army. He fought in the battle of Left Molar and the invasion of Incisor LR3. He was awarded a silver plaque for his many efforts. Mr. Streptococci. We are honored to have you. 

Streptoccoci: Ahoy! The pleasure is mine. Unfortunately, I have battle formations to prepare for tonight's attack. We will have to keep this interview short.

Interviewer: Where will you be attacking tonight? Do you mind telling us about it?

S: Can't tell you everything. Classified information of course. But I can say this. Our target enjoys eating "Cheez-its." These crackers will lodge in the wedges of his teeth. We will be there tonight in the nooks and crannies. We will seize these precious resources to feed and multiply our army. It will be the starting point of our cavity attack. The only concern is if he will use an ETB. My soldiers and I will have to prepare for this scenario...

I: May I ask, what is an ETB?

S: An ETB, is an electric tooth brush. They are hellions of devastation. One electric toothbrush assault can wipe out an entire week's work. Oh begone foul ETBs! Begone! 

I: I'm sorry. 

S: You see, our method of attack begins in layers. First, we cluster around acid hotspots.

I: What's an acid hotspot?

S: When food breaks down in the mouth, it always leave behind acid residues. The outer protective layer of teeth is called enamel. Over time, the acid weakens the enamel, allowing us to penetrate at that specific location. This area is the acid hotspot. 

At the hotspot, we begin building. Almost always, there will be morsels of undigested food particles left over. These particles, combined with acid, combined with saliva, combined with us, coalesce around the hotspot. Brick by brick, we create a plaque formation.

I: I'm s

S: Plaque formations can become incredibly resistant. As the layers pack on top of each other, firmer and firmer, sturdier and sturdier, not even an electric toothbrush can destroy it. 

I: That's excellent.

S: But here's the thing. Reaching the critical mass takes a long time. Before then, our plaque formations stand no chance against ETB assaults. 

There are some people who floss twice a day, and brush twice a day.
Then we stand no chance. 
Yet, you will continue to fight?
Of course. 
Why?
Because

The fight makes us stronger. 
War is eternal. 

Because I ... I know what I am fighting for.

the more plaque that is deposited, the easier it is for additional plaque to be deposited. It is the snowball effect. 

The circular scrub. They scrub horizontally, left to right, or right to left, but the ETB introduced circular scrubbing. 

We teach our young 

And flossing?

Deprives us of resources. Without resources we can't grow. 




Many of our readers may not be familiar with an

, but that is out of our control. "Do what you can do. Let the rest take care of itself." Our 




A way to trick you into learning. 
To have endured for so long. 

They will not brush their teeth everyday. They will take a break here and there. And that is when we strike. 

Will we win? 
Most certainly not. 
Those who are entered into the money... 



We are hopeful of installing a few plaques. 

Interviewer: The snowball effect. 

S: Exactly. Once we reach a critical threshold, 

// to learn from the confidence. 
// do things in hiding. 


An ETB assult occurred, and we were back at square one. Months of progress. Wiped out. 

Interviewer: ETB?

We fight because we have something that we believe in. 


No one will know how hard it was, until they try it for themselves. 

What are 'ETBs?'


ETBS? ELECTRIC TOOTHBRUSHES. DAMNIT. 

To transition in a way that is utterly unpredictable. 

Interviewer: Thank you for coming to share some of your experiences with us. Will u tell us a little about yourself?

s: most certainly. i am a member of platoon Mutans, alongside my brothers and sisters of the great Cavitation Army. Aye. Three branches. Mutans, 
We attack every single night. 

The alternative? 
THE ALTERNATIVE? 
There is no alternative. There is only survival. 

i and what is it you do
s WE FIGHT. WE FIGHT FOR THE SURVIVAL OF OUR KIND.
s sobs for a moment. We lost many brothers this morning.
i im sorry.
s the electric toothbrushes. how are we to fight against the electric toothbrushes? And their fluoride poison. 
s it is an old story. im sure uve heard of it. 

BROTHERS AND SISTERS. 
WE WILL ATTACK THE SECOND MOLAR.


And then what happened? 

s breaks down into tears. 

HE FLOSSED. Months of preparation. We had been building up layers of plaque you see. We do it slowly, so that it won't be noticed. 

Once the infectation 

Oh no. We will continue to fight. We will wait for our opportunity. 

ARE THEY SOLDIERS?

No. They are the future. 

THAT I

The primary purpose of this passage is to
provide a detailed glimpse into the mechanism of cavity formation
hear the eye-witness account of a 








 


People with power will stand as gatekeepers.
People with powerful electric toothbrushes will brush you off.




The obstacles never end.

Except a large toothbrush. 

continue reading this english assignment




Twill one day become, the you of tomorrow, the you of the future.



Believe in the compounding effect of time.
The skills you invest in today will show themselves in your later years
Belie



as i make my declarations and firmatudes.
i believe in what i wrote when i was 25. that i can be a conduit to the future. 


share the cmn ground equally. 


`
function getHtmlElementName(s) {
    if (hlist.includes(s)) return s
    return 'div'
}

function formatSingleLineHtmlTextElement(s) {
    return div9000('p', s)
}


function div9000(el, content, attrs = null) {
    let start = '<' + el  
    if (attrs) {
        start += ' ' + stringReduction(attrs, {
            delimiter: '=',
            vt: quotify,
            join: ' ',
        })
    }
    start += '>' 

    return start + content + '</' + el + '>'
}
// the key for a robust thing ... is something that is easily formatted.
function attrSorter(a,b) {
    if (a == 'class') {
        return -1
    }
    if (b == 'class') {
        return 1
    }
    return a - b

}


// to be a certain way
// to have an adventure with someone that you like
// to run thru the gamut
// 

// betrayals are built into the processs.


function formatDoubleItem(a,b) {
    // console.red(a,b)
    if (a in attraliasmap) {
        a = attraliasmap[a]
    }

    if (hasNoUnits(b)) {
        b += defaultunitmap[a] || 'px'
    }

    if (a in inferredcssattrmap) {
        return [
            inferredcssattrmap[a],
            [a,b]
        ]
            
    }
    return [a,b]
}


chosetheschol = `
Choose the School!

Audrey MacLean is a business woman and entrepreneur. She is on Forbes' Midas Touch List as well as Fortune's Most Powerful Women, as well as Business Week's 'Top 50 Businesswoman in America.' Currently, she is an advisor to Foundation Capital and serves on the faculty at Stanford University. What college did she go to?


Stanford University
The University of Redlands
Rochester University
Brown University

College Picks - A game to help you pick colleges.

Reed Hastings is the founder of Netflix. He is worth 5 billion dollars. What college did he go to?

Stanford University
Bowdoin College
University of Maine
Harvard University

`

class ActiveElement {
    getValue(closing) {
       const attrs = this.createAttrs()
       let product = '<' + this.name + attrs + '>'
       if (closing || this.text || alwaysclose.includes(this.name)) {
            product += this.text + toClosingTag(this.name)
       }
       this.reset()
       return product
    }

    reset(start = false) {
        // this.isClosing = false
        this.classes = []
        this.attrs = []
        this.css = []
        this.props = []
        this.name = ''
        this.content = ''
        this.text = ''
        this.isTransitionElement = null
        this.data = []
    }

    constructor() {
        this.reset(true)
    }

    parseAttributes(items) {
        for (let i = 0; i < items.length; i++) {
            let item = items[i]
            if (match = searcher(/:(\w+)/, item)) {
                this.addProp(match)
            }

            if (match = searcher(/\.(\w+)/, item)) {
                this.classes.push(match)
            }

            else if (match = searcher(simpleAttrRE, item)) {
                if (match[0] in vmap) {
                    this.attrs.push([vmap[match[0]], match[1]])
                    this.data.push(match[1])
                }
                else {
                    pusher(this.css, formatDoubleItem(...match))
                }
            }
            else {
                // console.red( item )
                const product = runCss(item, false)
                if (product) pusher(this.css, product)

                else {
                    let s = items.slice(i, items.length ).join(' ').trim()
                    this.text = this.parseVueText(s)
                    break
                }
            }
        }
    }
    parseVueText(s) {
        return s.replace(/\$\w+|{{\w+}}/g, (x) => {
            if (x.startsWith('$')) {
                this.data.push(x.slice(1))
                return parens(x.slice(1), 'vue')
            }
            else {
                this.data.push(x.slice(2, -2))
                return x
            }
        })
    }
    addProp(x) {
        this.props.push(x)
        this.attrs.push([':' + x, x])
    }
    addClass(x) {
        this.classes.push(x)
    }
    addAttrs(x) {
        this.attrs.push(x)
    }
    
    createAttrs() {
       let attrs = ''
       if (exists(this.css)) {
         this.attrs.push(['style', stringReduction(this.css, {mode: 'styles'})])
       }

       if (exists(this.classes)) {
         this.attrs.push(['class', this.classes.join(' ')])
       }

       if (exists(this.attrs)) {
           attrs = stringReduction(this.attrs, {mode: 'attrs'})     
       }
       return attrs
    }
    export() {
        if (exists(this.data)) return [this.name, this.data]
    }
    get value() {
       const attrs = this.createAttrs()
       let product = '<' + this.name + attrs + '>'
       if (this.text || alwaysclose.includes(this.name)) {
            product += this.text + toClosingTag(this.name)
       }
       this.reset()
       return product
    }
}


class VueStorage extends SimpleStorage {
    get exists() {
        return exists(this.store)
        return trace(exists)(this.store)
    }
    constructor(items) {
        if (items) {
            for (let key of Object.keys(items)) {
                if (!vuekeys.includes(key)) {
                    delete items[key]
                }
            }
        }
        super(items)
    }

    add(k, v, location = 'end') {
        if (this.store[k]) {
            location == 'start' ? this.store.push(v) : this.store.unshift(v)
        }
        else {
            this.store[k] = [v]
        }
    }

    createJS() {
        return bestText(createVueProduct(this.value))
    }
}


class vuelines extends LineEdit2 {
    handleTransitionElement(transitionElement, transitionValue) {
        let start = openingTag(transitionElement, {
            name: transitionValue
        })
    }

    constructVue(use) {
        if (!use) return
    }

    constructor(s) {
        let cssChunks = '', js = '', template = ''
        const [text, store] = grm(s, mrepcssdict2, {start: '(?<=^|\\n)'})
        const libraries = store.use
        // console.error( text, store )
        // console.error( store.css )
        super(text)

        this.labels = []

        if (store.css) {
            this.labels = store.css.map(getFirstElement)
            cssChunks = cssParser2(store.css.join('\n')).trim()
        }

        this.activeElement = new ActiveElement()
        this.vue = new VueStorage(store)
        this.run()


        if (this.vue.exists) {
            if (libraries) {
                if (!libraries.includes('vue')) {
                    libraries.push('vue')
                }
            } else {
                libraries = ['vue']
            }

            if (libraries.includes('vue') && libraries.includes('codemirror')) {
                this.vue.add('mounted', cm_mount_str, 'start')
            }

            js = this.vue.createJS()

            template = [
               {el: 'div', attrs: {id: 'app'}, content: this.text} ,
               'spacer',
               {el: 'script', content: js}, 
            ] 
        }

        else {
            template = this.text
        }

        this.value = {
            template: this.text,
            js: js,
            css: cssChunks,
            libraries,
        }
        return

        // console.error( store.use )
        this.value = html99({
            css: cssChunks,
            template: template,
            libraries,
        })
    }

    static format(s) {
        s = prepareVue(s)
        const editor = new vuelines(s)
        return editor.value
    }

    processFirstElement(el) {
        if (hlist.includes(el)) {
            return el
        }

        else if (this.labels.includes(el)) {
            this.activeElement.addClass(el)

            if (el.includes('container')) {
                return 'section'
            }
            else {
                return 'div'
            }
        }

        else {
            return 'div'
        }
    }

    getLineInfo(attrString) {
        let match
        let [el, ...attrItems] = attrString.split(htmlSplitRE)
        this.activeElement.name = this.processFirstElement(el)
        this.activeElement.parseAttributes(attrItems)
    }

    handleEnter(tabWidth) {
        this.tracker[tabWidth] = this.activeElement.name
        this.edit(() => this.activeElement.value)
    }

    handleExit(tabWidth) {
        let el = this.tracker[tabWidth]
        this.setLine(toSpaces(tabWidth) + toClosingTag(el), this.index)
    }


    runner(line, i, tabWidth, isEnter, isExit) {
        if (isExit)       this.handleExit(tabWidth)
        else if (isEnter) this.handleEnter(tabWidth)
        else              this.edit(() => {
            return this.activeElement.getValue(true)
        })
    }
}


function parseVueAttr(s) {
                if (isSingleWord(s)) {
                    return [':' + a, a]
                }
                else if (a == ':class') {
                    let [x,...y] = a.split(' ')
                    y = y.reduce((acc, item) => {
                        return acc += parens(item, 'sq') + ': ' + item + ', '
                    }, '').slice(0, -2)
                    y = parens(y, '{ | }')
                    return [x,y]
                }
}

function splitThreeWays(items) {
    if (items.length == 1) return [null, [], items[0]]
    if (items.length == 2) return [items[0], [], items[1]]

    let first = items.shift()
    let last = items.pop()
    return [first, items, last]
}
    
function reduceToAttrObject(attrs) {
    let match

    return attrs.reduce((acc, item) => {
        if (match = searcher(/:(\w+)/, item)) {
            acc[':' + match] = match
        }

        if (match = searcher(/\.(\w+)/, item)) {
            if (!acc.class) acc.class = match
            else {
                acc.class += ' ' + match
            }
        }
        else if (match = searcher(simpleAttrRE, item)) {
            acc[match[0]] = match[1]
        }
        else {
            if (!acc.text) acc.text = item 
            else {
                acc.text += ' ' + item
            }
        }
        return acc
    }, {})
}

// it's repeating that element again. 

function aggregateCss(s) {
    let store = ''
    const labels = []
    s = s.replace(/^ *((?:css|@|\.).*\n)/gm, (_, x) => {
        if (x.startsWith('css')) x = x.slice(4)
        labels.push(search(/[\w-]+/, x))
        store += x
        return ''
    })
    const product = cssParser2(store)
    return [s, product, labels]
}
function transitionWrap(s) {
    return stringElt99({el: 'transition', content: s})
}

const htmlobj = {
    el: 'outer',
    content: [
        null,
        {
            el: 'fromthefirst',
            el: null,
            content: 'hii',
        },

        {
            el: 'second',
            content: [
                {
                    el: 'secondchild',
                    content: {
                        'el': 'secondgrandchild',
                        // el: null,
                        content: {
                            'el': 'third',
                            'content': 'howdy'
                        }
                    }
                },
                {
                    el: 'elll',
                    content: 'okay',
                    attrs: {hi:'bye'}
                }
            ]
        },
    ]
}

function stringElt99(o = {}) {
    function runner(o, spacing) {

        if (isNull(o)) {
            return ''
        }

        if (spacing !== '') {
            spacing = '\n'
        }

        let format = (x) => spacing + indent(x) + sn 
        let {el, attrs, content, newlines} = o
        let s = ''

        if (isNull(o)) {
            return ''
        }

        if (el == '') {
           format = ph
        }

        if (isString(content)) {
            s = content.includes('\n') ? format(content) : content
        }
            
        else if (isArray(content)) {
            s += format(toString(content.filter(x=>x).map(runner)))
        }

        else if (isObject(content)) {
            s += format(runner(content))
        }

        return toOpeningTag(el, attrs) + s + toClosingTag(el)
    }

    return runner(o)
}

function addonobj(obj) {
    return {el: null, content: obj}
}




function html99({
    vue = false,
    html = 'html',
    css = null,
    js = null,
    styles = null,
    scripts = null,
    links = null,
    metaObject = null,
    template = null,
    head = '',
    body = 'body',
    libraries = [],
    preset = 'simple',
    spacer = null,
} = {}) {

    if (!template) {
        return null
    }
    
    // console.error( css )
    css = css ? {el: 'style', content: css} : null
    js =   js ? {el: 'script', content: js} : null

    if (isString(template) && js) {
        template += sn + stringElt99(js)
        if (!exists(libraries)) {
            console.red( 'zzzzz' )
            const regex = Regex2(libmapkeywordslist)
            const keywords = setify(findall(regex, template, {flags:'gmi'}).map(x => x.toLowerCase()))
            libraries = keywords.map(k => libmap[k])
        }
    }

    if (exists(libraries)) libraries = libraryParser(libraries)

    if (preset == 'simple') {
        html = ''
        head = ''
        body = ''
        spacer = 'spacer'
    }
    else if (preset == 'vue') {
        html = ''
        head = ''
        body = ''
        spacer = 'spacer'
    }

    return stringElt99({
        el: html,
        content: [
            {
                el: head,
                content: [
                    metaObject,
                    ...libraries,
                    spacer,
                    css,
                    spacer,
                    spacer,
                ]
            },
            {
                el: body,
                content: template,
                
            }
        ]
    }).trim()
}


// console.log( runCss('bgred') )



// people are always being reaped. 
// people will rally around strength.
// 


// they will not trust me. but that is normal. 
// the problem was the favoritism


// keep. create a new page that has all the variables, as well as the recursively genereated functions.



// i cannot ask yijie for advice.
// working for someone, something, that u care about.about


function toStyleString(items) {
    return stringReduction(items, {mode: 'styles'})
}


// avoid boredom
// what do i have to do, to show u, that i am on your side.
// 

function pusher(store, product) {
                    if (isNestedArray(product)) {
                        // store.push.apply(store, product)
                        store.push(...product)
                    }
                    else {
                        store.push(product)
                    }
}

function ezescape(s, flags = '') {
    // simplififes the process of adding backslashes to a regex search
    return RegExp('(?<!\\\\)' + rescape(s), flags)
}
function ezregexarray(s) {
    return parens(alignEquals3(ezadd(s).split(ezescape('|')).map(x => parens(x, 'sq') + ','  + '  // foo')), 'array')
}
// console.log(ezregexarray(s))

// const [text, store] = grm(hstr, mrepcssdict2)
// console.log( cssParser2(store.css.join('\n')))
// console.log( cssParser2('foo bgred wh40' ))


// woman will be assimilated in. 
// but men will not. 
// 


// console.log( stringElt99({el: 'link', 'content': 'asf'}))

const isJavascriptFile = testFactory('.js', 'endswith')
const isCssFile = testFactory('.css', 'endswith')


function conditional(...args) {
    if (args.length == 1) return conditionalFunction(...args)
    if (args.length == 2) return conditionalArray(...args)
    
}
function conditionalFunction(fn) {
    return (...args) => {
        if (!args[0]) return
        else {
            fn.call(this, ...args)
        }
    }
}

function conditionalArray(item, parser) {
    if (isArray(item)) return item.map(parser)
    else {
        return parser(item)
    }
}
function libraryItemGetter(x) {
    if (x in libmap) {
        const item = libmap[x]
        return conditional(item, libraryItemTransformer)
    }

    else if (hasExtension(x)) {
        return libraryItemTransformer('./' + x)
    }
    else {
        console.red( x, ': DNE IN LIBMAP' )
    }
}

function libraryItemTransformer(item) {
    if (isJavascriptFile(item)) {
        return {el: 'script', attrs: item} 
    }

    if (isCssFile(item)) {
        return {el: 'link', attrs: item} 
    }
}

function filterflat(items)  {
    return items.filter(x => x).flat()
}
function libraryParser(items) {
    const product = filterflat(items.map(libraryItemGetter))
    return product
}


// console.log( toOpeningTag('sdf', {'s': 'sdf'} ))

// new vuelines(removeComments(hstr).trim())


// there is a limit to how much can be ... done? 
function createVueObject(o) {
    const store = {}
    for (let [k,v] of Object.entries( o )) {
        if (!vuekeys.includes(k) || !v) continue
        if (k == 'mounted') {
            store[k] = indent(vuemap[k].parser(v.join('\n')), vuemap[k].indent - 4)
        }
        else {
            store[k] = sn + indent(v.map(vuemap[k].parser).join(',\n'), vuemap[k].indent - 4)
        }
    }
    return store
}

function createVueProduct(obj) {
    return toVueComponent(createVueStringFromObject(ph(obj)))
}



function booper() {
    function getErrorObject(){
        try { throw Error('') } catch(err) { return err; }
    }

    var err = getErrorObject();
    var caller_line = err.stack.split("\n")[4];
    var index = caller_line.indexOf("at ");
    var clean = caller_line.slice(index+2, caller_line.length);
    return clean
}



function fogger() {
    var Log = Error; 
    Log.prototype.write = function (args) {
        let data
        let name, lineNumber

        if (this.lineNumber) {
            name = basename(this.fileName)
            lineNumber = this.lineNumber
        }
        else {
            lineNumber = this.stack
            name = this.fileName
        }

        // args = args.concat([suffix]);
        args.push(name, lineNumber)

        if (console && console.log) {
            if (console.log.apply) { 
                console.log.apply(console, args); 
            }
            else { 
                console.log(args)
            }
        }
    };

    return function (params) {
        if (typeof DEBUGMODE === typeof undefined || !DEBUGMODE) return;
        Log().write(Array.prototype.slice.call(arguments, 0)); 
    };

}


const STACK_LINE_REGEX = /(\d+):(\d+)\)?$/;

function lineLogger(...log) {
  let err;

  try {
    throw new Error();
  } catch (error) {
    err = error;
  }

  try {
      console.log( 'asdfasdfasdf' )
    const stacks = err.stack.split('\\n');
    console.log( stacks )
    const [, line] = STACK_LINE_REGEX.exec(stacks[2]);
    console.log( line )

    return this(`[${line}]`, ...log);
  } catch (err) {
    return this(...log);
  }
}


// cmJumpDown(cm())
// console.log( brackify('sdf', 'szz\nsdfsdf' ))


function shapeParser(original, spaces, shape, size, rest) {
    // console.blue( arguments )
    if (shape == 'box') shape = 'square'
    let attrs = []
    if (!size) {
        size = 50
    }
    if (shape == 'square' || shape == 'circle') {
        attrs.push('wh' + size)
    }
    if (shape == 'circle') {
        attrs.push('br50p')
    }
    return spaces + 'div ' + toString(attrs, ' ') + ' ' + rest.trim() + ''
}
function cssrep(s) {
    const dict = {
        '^( *)(square|circle|box)(\\d*)(.*)': shapeParser,
        '^pv (\\w+)': (_, s) => 'p ' + s + ': ' + '4' + s,
    }
    return frep(s, dict)
}
function prepareVue(s) {
    s = removeDwl(s)                          
    s = LineEdit2.format(s)
    s = cssrep(s)
    s = drep9002(s, preparevuedict)
    // console.red( s )
    return s
}

const testsuitelist = [
    'hi',
    'css .hi bgred\n@lg bgblue\n@md bgred\nfraction {\n    show = loading\n    pb = 10\n    top {\n        span .foo x = doo z=foobz 21 asdfj hasjd skfakj xccxv . asdfdaf \n        span :foo 21\n        span 21\n    }\n}',
'John likes store[zoo] xp\nconst foo = baricuda xp\nxp += xp',
'heytheredwl hi bye sighdwl come on come over.heredwl come on',
'john likes shoes\na\nb\nc\nupt @john ahoyhoy',
'How are you today?\nupt yum',
'How are you today?\nupt 0 yum',
'How are you today?\nupt 1 yum',
'How are you today?\nupt 2 yum',
'How are you today?\nupt 3 yum',
'How are you today?\nupt 4 yum',
'my favorite color is blue\nditto blue red green yellow',
'john likes to eat cake on thursdays\nditto john likes cake  sarah loves apples  tom adores carrots',
'foo for the win\na\nb\nc\nupe foo boo',
'foo is red, and green, and the boy found it. foo for the win\na\nb\nc\nupe foo boo  red blue  green yellow  boy girl',
'function booo() {\n    if (childblock) {\n        //do this\n        //oo\n        // booo is red green and boy\n    }\n    if (zoop) {\n        // do this\n    }\n\n    while (zoop) {\n        // do that\n    }\n}\nupt bs AA\nupt be BB\nupt cs CC\nupt ce DD\nupt fs EE\nupt fe FF\nupe param items, options = {}\nupe if exists(x)\nupe while this.getLine(x) != \'\'',
]
function testsuite(...functions) {
    const action = functions.length == 1 ? functions[0] : compose(...functions)
    for (let item of testsuitelist) {
        try {
            console.log( item + biglbr + action(item) + sn + sn + sn + sn )
        }
        catch {
            console.log ('ERROR' + snsn + item + snsn)
        }
    }
}

function isClass(x) {
    return isFunction(x) && !Object.getOwnPropertyNames(x).includes('arguments')
}
// console.log( LineEdit2.toString() )

function activateClass(x, ...args) {
    if (!isClass(x)) return
    const properties = Object.getOwnPropertyNames(x)
    const method = properties.find((x) => x == 'export')
    if (method) {
        try {
            return x[method](...args)
            const activated = new x(...args)
            return activated[action]()
        }
        catch {
            // console.log( 'catching' )
            return x[method](...args)
        }
    }
}


// testsuite(LineEdit2.format)



gamestr = `
q = 1
w = 2
e = 3
a = 4
s = 5
d = 6
z = 7
x = 8
c = 9

i = 1
o = 2
p = 3
j = 4
k = 5
l = 6
b = 7
n = 8
m = 9
`

function keypresslog(e) {
    console.log( e.timeStamp )
    keylogstore.push(e.timeStamp)
    if (store.length < 2) return

    let a = last(store, 1) // First Last
    let b = last(store, 2) // Second Last
    let delta = Math.round(a - b)
    console.log(delta)
    if (delta > 200) {
        console.log('not simultaneous')
    }
}

// have to take advantage of the morning time. because quickly, the noise will invade. 


vstr = `
use codemirror
.cm-container w100p flex
.cm w70p bgblue
.preview w50p h100p bgred

cm-container {
    cmtextarea
    preview if=displaypreview
}

m foo90 {
    ret x
}
div booo
`


// console.log( vuelines.format(vstr) )
asdf = `
css
.striped bgred

p blue bgred wh40 hi

`

function flatpush(arr, x) {
    arr.push.apply(arr, x)
}


redditqs = `

r.js is there a way to expand 1.2676506002282294e+30?  I am hoping to see the answer to 50 decimal places (or as many decimal digits as possible). This number originates from Math.pow(2, 100).

r.css what is the purpose of using id  they can only be used once, and they have higher specificity. However, couldn't you just use something like a class with prefix - 'SINGLE_USAGE-booo'. I'm not trying to be trollish with this post. In my beginner foray into css, I've never had a situation where I needed to use an id. Everything I do has been with attributes or classes.
}

`

// console.log( math.exponent(2, 100))
class PersonalAssistant {
    constructor() {
    }
    static date() {
        let strife = 'Today is %day, %month %ordinal.'
        logspeak(datestamp(strife))
    }

    static time() {
        let strife = 'The current time is %time.'
        logspeak(datestamp(strife))
    }
    schedule() {

    }
    announcements() {

    }
}
// console.log( PersonalAssistant.date() )
asdf = `
p bgred blue hi there friends goodbye
css p m0 bgr8
`
asdf = `
div { 
    le flex w80vw
    div bgred wh100
    circle bgg
}

`
// console.log(vuelines.format(asdf))
// console.log(cssrep('square foobar'))


/*
where does money come from
API
upedit 

drep9000 and drep9902 seem to do the same thing.

people will like u if they believe u r for their phenotype. 

*/



// Do you want to be my first customer? Cant ask this uestion.

asdf=`
div {
    le flex w50p
    box bgred
    ditto bgred bgblue bggreen
}
`


// console.log( vuelines.format(asdf) )
function importColorPalette(dict) {
    // generate colorscheme
    // 
    // i only want to work with people who have their own skills. Otherwise, it becomes an intense drag. I don't care about the name of a school. I care about hunger and ability. Children have a pass. To be patient about the process.... 
}


// why do I attract the same people. Why does it feel like there is no one that can be trusted. Interesting features.
// what is an acceptable size for a website. 


// I don't trust bad spelling. Who we interact with, and how we do the interaction reflects back on us. 

//




const myitemlib = {
    fiddle: 'https://jsfiddle.net/gh/get/library/pure/kdog3682/codesnippets/tree/master/Demo/',
    address: '962 57th St Brooklyn NY, 11219',
    phonenumber: '425-381-0608',
    dob: '01/31/1990',
}
function myItemGetter(x) {
    const product = myitemlib[x]
    navigator.clipboard.writeText(product)
    console.log( product )
}

const looksLikeStrife = testFactory('^%')
function createFilename({name = '%M-%D-%Y', extension = 'txt'} = {}) {
    let s = ''
    if (looksLikeStrife(name)) {
        s += datestamp(name)
    }
    else {
        s += name
    }
    if (extension) {
        s += '.' + extension
    }
    return s
}
const isDateString = testFactory('^\\d+(?:\\D\\d+)+')

// lib is pure kv string pairs. 



function exportStorage({start = '02-01-2021'} = {}) {
    const store = {}
    for (let [k,v] of Object.entries( localStorage )) {
        if (isDateString(k) && isAfterDate(start, k)) {
            store[k] = v
            delete localStorage[k]
        }
    }
    downloadFile('export.json', store)
}


function isAfterDate(start, target) {
    let a = toTimeStamp(start)
    let b = toTimeStamp(target)
    // console.red( a,b )
    // if (b > a) return true
    return b > a
}

function toTimeStamp(dateString) {
    return Date.parse(dateString)
    return (new Date(dateString)).getTime()
}

// console.log( isAfterDate('02-01-2021', '2023-2-1' ))
// console.log( createFilename() )


// in your opinion, what's the difference btwn a library, a dict, and a mapqm  i have a lot of variable names that end with 'lib', or 'dict' or 'map'. For example actionmap or vocabdict.  I am trying to consolidate these variables. For example if it is pure string-string k-v values, im assigning it as dict. Anything else, I'm assigning it as map. What do you guys think? 



function sniffElements(s) {
    const regex = '(getElementById|querySelector)\\(\'(.*?)\'\\)'
    const items = findall(regex, s)
    for (let [a,b] of items) {
        if (b == 'body') continue
        if (a == 'getElementById') {

        }
    }
    // feed it into the html99 some how. Need some Styles.
}



function caesarCipher(str, amount) {
  amount = Number(amount)
  // Wrap the amount
  if (amount < 0) {
    return caesarShift(str, amount + 26);
  }

  // Make an output variable
  var output = "";

  // Go through each character
  for (var i = 0; i < str.length; i++) {
    // Get the character we'll be appending
    var c = str[i];

    // If it's a letter...
    if (c.match(/[a-z]/i)) {
      // Get its code
      var code = str.charCodeAt(i);

      // Uppercase letters
      if (code >= 65 && code <= 90) {
        c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
      }

      // Lowercase letters
      else if (code >= 97 && code <= 122) {
        c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
      }
    }

    // Append
    output += c;
  }

  // All done!
  return output;
};
function caesarCipher2(s, shift) {
    console.log( s, shift )
  //https://gist.github.com/EvanHahn/2587465
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  // Encoded Text
  let encodedText = '';

  shift = Number(shift)

  // Adjust Shift (Over 26 Characters)
  if (shift > 26) {
    // Assign Remainder As Shift
    shift = shift % 26;
  }

  // Iterate Over Data
  let i = 0;
  let number = 0;
  while (i < s.length) {
    // Valid Alphabet Characters
    if (alphabet.indexOf(s[i]) !== -1) {
      // Find Alphabet Index
      const alphabetIndex = alphabet.indexOf((s[i]).toUpperCase());

      // Alphabet Index Is In Alphabet Range
      if (alphabet[alphabetIndex + shift]) {
        // Append To s
        encodedText += alphabet[alphabetIndex + shift];
      }
      // Alphabet Index Out Of Range (Adjust Alphabet By 26 Characters)
      else {
        // Append To s
        encodedText += alphabet[alphabetIndex + shift - 26];
      }
    }
    // Special Characters
    else {
      // Append To s
      encodedText += s[i];

    }

    // Increase I
    i++;
  }

  return encodedText;
};
// console.log( caesarCipher('hiiii', '2' ))
// console.log( isDateString(createFilename() ))
// a way to add ... 
// inclusion of assets .... i need to parse this giant mess. currenly, there's a lot of riff raff. 

class Calender {
    static toDateString(n, strife) {
    }
    static toTimeStamp(dateString) {
    }
}

/*
r.js is there any advantage to resetting a class object instead of creating a new one?

Example:

store = []
for (let i = 0; i < x.length; i++) {
    let obj = new Obj()
    obj.buildupdata()
    store.push(obj.data)
}


OR:

store = []
obj = new Obj()

for (let i = 0; i < x.length; i++) {
    obj.buildupdata()
    store.push(obj.data)
    obj.resetdata()
}

*/


// 



function requestFullScreen(element) {
    // Supports most browsers and their versions.
    var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;

    if (requestMethod) { // Native full screen.
        requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
}


function exitFullScreen() {
    document.exitFullscreen()
}


// trigger an action if the mouse is within the area. 
// get bounding rect height


function toggleFullscreen(el) {
  el.requestFullscreen = el.requestFullscreen || el.mozRequestFullscreen
          || el.msRequestFullscreen || el.webkitRequestFullscreen;

  if (!document.fullscreenElement) {
    el.requestFullscreen().catch(console.log)
  } 
  else if (document.exitFullscreen) {
      document.exitFullscreen();
  }
}


/*
r.js how wud u check 
*/


function createVueFromSnippet(s) {


}


function getBaseUrl(s) {
    return searcher(/(?<=\/)[\w-._?%$]+(?=\/)/, s)
}

// to give emotions...

async function copyWebsitePage(url) {
    const basepath = prepareUrl(getBaseUrl(url))
    console.log( basepath, 'basepath' )
    const text = await request(url)
    const html = text.replace(/\.\./g, basepath)

    const editor = new TextEditor(html)
    editor.delete(/<title.*|<meta.*|<?!doctype.*|<\/?html>/gi)
    const scriptChunkRE = /\s*<script>\n(.+\n[^]+?)\n\s*<\/script>\s*/gm
    const mounted = editor.matchReplace(scriptChunkRE)
    let [top, body] = editor.splitHtml()

    body = divify('div', indent(body), {id: 'app'})

    const obj = {
        data: 'foo: "BOO!"',
        mounted: mounted,
    }

    const js = toVueComponent(createVueStringFromObject(obj))
    const libraries = [vuejs]
    const product = html98({top, body, js, libraries})
    return product
}


function getHtmlStyles(s) {
    const regex = /<(\w+).*?style="(.+?)"/g
    const items = findall(regex, s)
    const product = items.reduce((acc, [a,b]) => {
        // how do u store it.        
    }, {})
}

function parseDom(s) {
    const parser = new DOMParser();
    const html = parser.parseFromString(s, 'text/html');
    return html
    // console.log( html.getElementsByTagName('script' ))
    // the javascript gets shunted into mounted. 
    // the rest of the html goes into the template. 
}

class TextEditor {
    constructor(text) {
        this.text = text
    }
    matchReplace(regex, flags = 'gm') {
        let store
        [this.text, store] = matchReplace(regex, '', this.text, flags)
        return store
    }
    delete(regex) {
        this.text = this.text.replace(regex, '')
    }
    splitHtml() {
        const regex = getRegex(this.text, ['</style>'])
        if (regex) {
            const match = this.text.split(RegExp(parens(regex, 'plb')))
            match[0] = removeEmptyLines(match[0])
            return match
        }
        else {
            throw 'e' 
        }
    }
}
function html98({top = '', body = '', js = '', libraries = ''} = {}) {
    let s = ''
    if (libraries) {
        s += toString(libraries)
    }
    if (top) {
        s += top + snsn
    }

    if (body) {
        s += body + snsn
    }

    if (js) {
        s += stringElt99({el: 'script', content: js})
    }
    return s
}

function vuetify(s) {
    const obj = {
        data: '        foo foo',
        mounted: hibye,
    }
    const js = toVueComponent(createVueStringFromObject(obj))
    return html98({top, body, js})

}

// console.log( prepareUrl(getBaseUrl('view-source:https://codemirror.net/demo/vim.html' )))



// r.asktechnology is there a numerical way to tell when the number of internet tabs you have open, is slowing down your computer?

// toModuleExports(findall)


async function urlTextGetter(url, fn) {
   const text = await request(url) 
   return fn(text)
}

function fixBackSlashes(s) {
    // return s.replace(/(?<!["'])(?:\\n|\\t)|\\/g, (x) => {
    return s.replace(/\\n|\\t|\\/g, (x) => {
        if (x == '\\n') return '\n'
        if (x == '\\t') return '\t'
        return ''
    })
}

function isAsyncFunction(fn) {
    return fn.constructor.name === "AsyncFunction";
}

function buildFiddle(s) {
    const regex = /value: {\s*html:\s*"([^]*?)",\s*js:\s*"([^]*?)",\s*css:\s*"([^]*?)"\s*}/
    let [template, js, css] = searcher(regex, s)
    console.log(template, js, css)
    template = fixBackSlashes(template)
    js = fixBackSlashes(js)
    console.log(template, js, css)
    template = template.replace(/\s*<\/?body>\s*/g, '')
    return html99({template, js, css})
}

// console.log( buildFiddle(examplefiddlestring ))


function smartSearch(re, s) {
    const match = searcher(re, s)
    const p = countParentheses(re.toString())
    if (p > 1 && isString(match)) {
            match = [match, ...newArray(p - 1).fill(null)]
    }
    else if (isArray(match) && p > 2) {
            match = [...match, ...newArray(p - 1).fill(null)]
    }
    return match

}
function getBlockDelimiter(mode, enter = true) {
    if (mode == 'javascript') 
        return enter ? '{' : '}'
    if (mode == 'python') 
        return enter ? ':' : ''
}

function cminfo(cm) {
    const cursor = cm.getCursor()
    const mode = cm.getOption('mode')
    const line = cm.getLine(cursor.line)
    const spaces = getSpaces(line)
    return {
        mode,
        ch:         cursor.ch,
        lineNumber: cursor.line,
        line:       line,
    }
}


// for the most part, everything is working. 
function parseJsonLikeString(s) {
    // this is so annoying and it doesnt work

    s = s.replace(/(?<=^ *)\w+(?=: )/gm, (x) => {
        return parens(x, 'dq')
    })

    s = s.replace(/\\\'/g, (x) => {
        return "'"
    })

    console.log( JSON.parse(s ))
    return JSON.parse(s)

}



asdf = `    value: {
          html: "<div id=\\"demo\\">\\n  <h1\\n    :class=\\"{\\'bounce animated\\': animated}\\"\\n    @animationend=\\"animated = false\\"\\n  >\\n    Animate Test\\n  <\\/h1>\\n  <button @click=\\"animate\\">\\n    Animate\\n  <\\/button>\\n<\\/div>\\n",
          js:   "var demo = new Vue({\\n  el: \\'#demo\\',\\n  data: {\\n  	animated: false\\n  },\\n	methods: {\\n  	animate () {\\n      this.animated = true\\n    }\\n  }\\n})\\n",
          css:  ""
        },
        fiddle: {
          id:   "297514076",
          slug: "muo19o4x",
          boilerplate: false
        },`

// console.log( buildFiddle(asdf) )

// console.log( buildFiddle(asdf) )

async function za() {
    const text = await request('https://jsfiddle.net/msw3Lx98/5/')
    const product = buildFiddle(text)
    console.log( product )
}
// console.log( numbered(paragraph ))
// this.magical does etty interesting imo. 

// console.log( split('a b  c') )


asdf = 'ated}\\"\\n    @"a".split(\\\'\\n\\\')'
// console.log( visible(fixBackSlashes(asdf) ))

function getErrorLine() {
  var e = new Error();
  if (!e.stack) try {
    // IE requires the Error to actually be throw or else the Error's 'stack'
    // property is undefined.
    throw e;
  } catch (e) {
    if (!e.stack) {
      return 0; // IE < 10, likely
    }
  }
  var stack = e.stack.toString().split(/\r\n|\n/);
  // We want our caller's frame. It's index into |stack| depends on the
  // browser and browser version, so we need to search for the second frame:
  var frameRE = /:(\d+):(?:\d+)[^\d]*$/;
  do {
    var frame = stack.shift();
  } while (!frameRE.exec(frame) && stack.length);
  return frameRE.exec(stack.shift())[1];
}

function foo() {
    console.log( getErrorLine() )
}




// foo()

function getRegex(s, regexes) {
        for (let regex of regexes) {
            if (test(regex, s)) {
                return regex
            }
        }
}
function srequest(url) {
    const fetch = require('node-fetch')

    const promise = fetch(prepareUrl(url)).then((response) => {
        return isJsonResponse(response) ? response.json() : response.text()
    })
    promise.then(x => {
        console.log(x)
        // write('request.txt', x)
    })
}

// srequest('view-source:https://codemirror.net/demo/vim.html')
// read('request.txt')
// const removeEmptyLines = deleteFactory('/^\s*$(?:\r\n?|\n)/gm')
// console.log( vuetify() )


function generateCssKeyFrames(s) {
    let output = '@keyframes'
    return brackify('@keyframes foo', 'zoop')
}

// console.log( generateCssKeyFrames() )
// writing notes in here, isnt correct. but it can be parsed out. 

// creating anew will be easier than trying to clean something up. Combining scripts together. Can also make it easier. 



// commentlib is generated from createCodeLib ... im not sure if this is a good idea. there is a lot of random stuff going on in this file. printing out a repot of some sort. the first step is just to get all of the stuff over. u can parse it later. but at the same time, this file is executing pretty file. 




// The elements have to be similar and intuitive. Otherwise, you will forget. 
// x 'x' is a prefix for wildcard that should be smart sorted. i dont like it.
// 


vuebundle = `
root.vue
-------------------------------
<template>
    <hello/>
</template>


hello.vue
-------------------------------

<template>
    <p>{{name}}</p>
</template>

<script>
import name from './foo.js'
export default {
    data() {
        name: name
    }
}
</script>

foo.js
-------------------------------
export const name = 'bob'
export const age =  '100'

How do I bundle this vue component
`



// A complicated API is basically unusable. It's seriously "code." These are some large libraries. What matters is the finished product. 
// the way the reviewer should go is read the entire sentence, and then allow the writing, until the user presses enter.  at which point, the next item begins. you can also specify a section of some sort.  once u have a stable api, u can kind of close your eyes, and everything will still work.  
// im yawning. that is a very bad sign. why am i yawning. 
// deleted myapp, challengebasketball, kevinlee, vue-interactive-card, and perhaps some other things. 


// console.log(createPage('hi'))

// reader(splitter)

function classRunner(classFunction) {
     return (x) => {
         // console.log( x )
         const product = new classFunction(x)
         if (product.value) {
             return product.value
         }
     }
}
const linetypemap = {
    'lbr': 'linebreak',
    '---': 'linebreak',
    '- ': 'bullet',
    '#': 'header',
    '    ': 'indented',
    '(?:def|function|const |let |if \\(|\\w+ =)|{|\\[': 'code',
}
class Partitions extends LineEdit2 {
    format(s) {
        return (new Partitions(s)).value
    }
    constructor(s) {
        super(s, {
            track: false, 
            getInfo: false,
            skip: () => this.list[this.index] = 'empty',
        })

        this.currentTabWidth = null
        this.insideBlock = null
        this.match = null
        this.list = []
        this.groups = []
        this.regexes = Object.entries(linetypemap)
        this.run()
        let product = groupTogetherSimple(this.lines, this.list)

        this.value = {
            template: assembly(product)
        }
        // console.log( product )
    }

    runner(line, i, tabWidth, isEnter, isExit) {
        if (isEnter) {
            this.list[i] = 'code'
            this.currentTabWidth = tabWidth
            this.insideBlock = true
            return
        }

        if (this.insideBlock) {
            if (isExit && tabWidth == this.currentTabWidth) {
                this.insideBlock = false
            }
            this.list[i] = 'code'
            return
        }

        for (let [regex, description] of this.regexes) {
            if (test('^' + regex, line)) {
                this.list[i] = description
                return
            }
        }

        this.list[i] = 'prose'
        // console.log( line )
    }
}


hstr = `
data woo zoo
data bee [[x: y]]

watch yoo90 {
    ret x
}

methods yoo90 {
    ret x
}

methods foo90 {
    ret x
}

data foo boo

use vue
use codemirror

data message hi
p i like cheese 4message
cm-container bgred px20 {
    cmtextarea
    preview if=displaypreview  do u like to eat
    p i love to eat
}


`

// some people do not do well in relationships. it is a little bit unlucky. nothing more, nothing less. 
const grouptogethercriterionmap = {
    'bullet': ['prose', 'bullet-header']
}

const markdownmap = {
    'bullet': {
        el: 'li',
        // parent: 'ul',
        // isChild: true,
        format: (s) => s.slice(2),
    },
    'prose': {
        lookahead: ['bullet', null, 'h3'],
        el: 'p',
        isSingleton: true,
    },
    'code': {
        el: ['pre', 'code'],
    },
    'linebreak': {
        format: (s) => '',
    }

}
//------------------------------
const GLOBAL_ALIAS_MAP = {
    w:  'write',
    s:  'set',
    e:  'edit',
    as: 'addstyle',
    rs: 'removestyle',
}
// 
function aliaser(command) {
    return GLOBAL_ALIAS_MAP[command] || command
}
function aliaser2(map, command) {
    return map[command] ? map[command] : map[GLOBAL_ALIAS_MAP[command]]    
}

function curryMod(fn, args, {reverse = false} = {}) {
    if (!exists(args)) {
        return fn
    }
    else {
        if (reverse) {
            args.reverse()
        }
        return (x) => fn(x, ...args)
    }
}

function criterionEffect(current, store, key = 'type') {
            const previous = store[store.length - 1]
            const match = grouptogethercriterionmap[current]
            if (match && match[0] == previous[key]) {
                previous[key] = match[1]
            }
}
function simpleValidateHtmlStr(htmlStr, strictBoolean) {
  //https://stackoverflow.com/questions/10026626/check-if-html-snippet-is-valid-with-javascript
  if (typeof htmlStr !== "string")
    return false;

  var validateHtmlTag = new RegExp("<[a-z]+(\s+|\"[^\"]*\"\s?|'[^']*'\s?|[^'\">])*>", "igm"),
    sdom = document.createElement('div'),
    noSrcNoAmpHtmlStr = htmlStr
      .replace(/ src=/, " svhs___src=") // disarm src attributes
      .replace(/&amp;/igm, "#svhs#amp##"), // 'save' encoded ampersands
    noSrcNoAmpIgnoreScriptContentHtmlStr = noSrcNoAmpHtmlStr
      .replace(/\n\r?/igm, "#svhs#nl##") // temporarily remove line breaks
      .replace(/(<script[^>]*>)(.*?)(<\/script>)/igm, "$1$3") // ignore script contents
      .replace(/#svhs#nl##/igm, "\n\r"),  // re-add line breaks
    htmlTags = noSrcNoAmpIgnoreScriptContentHtmlStr.match(/<[a-z]+[^>]*>/igm), // get all start-tags
    htmlTagsCount = htmlTags ? htmlTags.length : 0,
    tagsAreValid, resHtmlStr;


  if(!strictBoolean){
    // ignore <br/> conversions
    noSrcNoAmpHtmlStr = noSrcNoAmpHtmlStr.replace(/<br\s*\/>/, "<br>")
  }

  if (htmlTagsCount) {
    tagsAreValid = htmlTags.reduce(function(isValid, tagStr) {
      return isValid && tagStr.match(validateHtmlTag);
    }, true);

    if (!tagsAreValid) {
      return false;
    }
  }


  try {
    sdom.innerHTML = noSrcNoAmpHtmlStr;
  } catch (err) {
    return false;
  }

  // compare rendered tag-count with expected tag-count
  if (sdom.querySelectorAll("*").length !== htmlTagsCount) {
    return false;
  }

  resHtmlStr = sdom.innerHTML.replace(/&amp;/igm, "&"); // undo '&' encoding

  if(!strictBoolean){
    // ignore empty attribute normalizations
    resHtmlStr = resHtmlStr.replace(/=""/, "")
  }

  // compare html strings while ignoring case, quote-changes, trailing spaces
  var
    simpleIn = noSrcNoAmpHtmlStr.replace(/["']/igm, "").replace(/\s+/igm, " ").toLowerCase().trim(),
    simpleOut = resHtmlStr.replace(/["']/igm, "").replace(/\s+/igm, " ").toLowerCase().trim();
  if (simpleIn === simpleOut)
    return true;

  return resHtmlStr.replace(/ svhs___src=/igm, " src=").replace(/#svhs#amp##/, "&amp;");
}

function groupTogetherSimple(items, keys) {
    const store = []
    for (let i = 0; i < keys.length; i++) {
        let current = {value: '', class: '', el: ''}
        while (true) {
            let now = keys[i]
            let next = keys[i + 1]
            let map = markdownmap[now] || {}
            let text = map.format ? map.format(items[i]) : items[i]
            let match = map.lookahead
            if (match && match[0] == next) {
                if (match[1]) current.class = match[1]
                if (match[2]) current.el = match[2]
            }
            
            else if (map.el) {
                current.el = map.el
            }
            /* --------------------------------------------------- */
            if (map.isSingleton) {
                current.value = text
                break
            }
            else if (now == next) {
                current.value += text + sn
                i += 1
            }
            else {
                current.value += text
                break
            }
        }
        store.push(current)
    }
    return store
}
function liParser(s) {
    const items = s.split('\n').map(value => divify('li', value))
    const product = toString(items)
    return divify('ul', product)
}

function assembly(items) {
    const product = items.reduce((acc, item, i) => {
        if (item.el == 'li') return acc += liParser(item.value) + sn
        let start = toOpeningTag(item.el, item.class)
        let middle = item.value
        let end = toClosingTag(item.el)
        return acc += start + middle + end + sn
    }, '')
    return product.trim()
}

function groupTogether(items, keys) {
    // console.log( items, keys )
    const singletons = ['prose']
    const store = []
    for (let i = 0; i < keys.length; i++) {
        let current = {value: '', class: '', el: ''}
        let storage = []
        while (true) {
            let now = keys[i]
            let next = keys[i + 1]
            let map = markdownmap[now] || {}
            /* --------------------------------------------------- */
            let match = map.lookahead
            if (match && match[0] == next) {
                if (match[1]) current.class = match[1]
                if (match[2]) current.el = match[2]
            }
            
            else if (map.el) {
                current.el = map.el
            }
            let text = map.format ? map.format(items[i]) : items[i]
            /* --------------------------------------------------- */
            if (map.isChild) {
                current.value = text
                storage.push(current)
                if (markdownmap[next].isChild) {
                    i += 1
                    continue
                }
                else {
                    current = {value: storage, parent: map.parent}
                    storage = []
                    break
                }
            }
            /* --------------------------------------------------- */
            if (map.isSingleton) {
                current.value = text
                break
            }
            else if (now == next) {
                current.value += text + sn
                i += 1
            }
            else {
                current.value += text
                break
            }
            /* --------------------------------------------------- */
        }
        store.push(current)
    }
    // console.error( store )
    console.error( stringify(store) )
    return store
}



// the inability to hear the pleas of the child. And it has a longstanding effect. The inability to listen. u cannot fault, for what was not given. I took my parent's advice in the past, but i have stopped. ideas planted in my head, take hold very easily. 
// strong requirements for teamwork. When the cries of children are ignored, where are they to turn? 
// if something happens once, it will happen again. 
// she will not want me to show up. but u should also ask.  
// i come visit u in Cali for your birthday. [Yes/No] ? - machinlike text is no.

// boundaries
// at the grocery market, i ask if there is ginger. a lady says yes. she gets a bag, and puts into it, a very large piece of ginger.  -- imo, this is a boundary violation. she should instead say, 
// text message, mom, 'just make sure ur decisions r not due to fear or unconfidence as u dont see self correct often', the first part is fine. the second part of 'u dont see self correct often' is a boundary violation. even if it is true, 

// going home for extended holidays is not fun? I definitely said this awhile ago.
// to protect the pride... u wear a mask, that obscures who u are. 
// each element gets wrapped. 
// what passes forward ... to have your self-worth determined by an insipid test. 
// to allow mistakes.
// a safety valve to release mistakes into the aether.
// there needs to be a local map, as well as an external map. 
// paying out the asshole for a service. 




// console.log( cssParser2('section lh2' ))
function cmSetCursorToEnd(cm) {
    cm.setCursor({line: cm.lastLine(), ch: 100})
}
// console.log(copyWebsitePage(read('request.txt'))) //CURRENT



asdf = `
elem.addEventListener('click', async evt => {
  const animation = elem.animate(
    { transform: \`translate(\${evt.clientX}px, \${evt.clientY}px)\` },
    { duration: 800, fill: 'forwards' }
  );
  await animation.finished;
  animation.commitStyles();
  animation.cancel();
});
`

class TextAnalysis {
    constructor(s) {
        this.s = s
    }
    static prepare(s) {
        return s.trim()
    }
    static construct(s, element) {
        s = TextAnalysis.prepare(s)
        const elementString = 'const ' + element + ' = document.getElementById(\'' + element + '\')'

        let traits
        if (!exists(traits)) {
            traits = [
                ['width', '50px'],
                ['height', '50px'],
                ['background', 'red'],
            ]
        }
        const styleString = traits.reduce((acc, [k,v]) => {
            return acc += element + '.style.' + k + ' = ' + quotify(v) + sn
        }, '').trim()

        const javascript = elementString + snsn + styleString + snsn + s 
        const html = divify('div', '', {id: element})

        return html + snsn + divify('script', javascript)
    }

    sniffer() {
        const regexB = '(getElementById|querySelector)\\(\'(.*?)\'\\)'
        const items = findall(regex, s)
        for (let [a,b] of items) {
            if (b == 'body') continue
            if (a == 'getElementById') {

            }
        }
    }
}

class TextController {
    constructor(s) {

    }

    static pick(s) {
        const map = {
            'https:': copyWebsitePage,
            '(\\w+)\\.addEventListener': TextAnalysis.construct,
        }

        let match
        for (let [k,v] of Object.entries( map )) {
            if (match = searcher(k, s)) {
                console.log( 'Calling Function: ', v )
                const product = v(s, match)
                return Promise.resolve(product)
            }
        }
    }
}


const tableItemsRE = '^(.*?): ?(.*)'
const tableItemsFlatRE = '^(.*?): ?|(.+)'
function toTable(s) {
s = `Price: 10 dollars per month
Parent Registration: Call 425-381-0608
Safety: 6 feet apart and everyone wears face masks
Safety: Parents come to watch
Time: Every Sunday Morning 9:30AM to Noon at Sunset Park
Class Size: 6 to 10 students
Begins: May 1st, 2021`

    const items = findall(tableItemsRE, s)
    const formatters = [(x) => toTitle(x, false), addQuestionMarkOrPeriod]
    const push = (acc, x, el, tag = '') => acc.push(divify(el, x, tag))
    
    const creator = (acc, item) => {
        item.forEach((x, i) => {
            if (formatters[i]) x = formatters[i](x)
            push(acc, x, 'span')
        })
        return acc
    }

    const creatorA = (acc, x, i) => {
        if (formatters[i]) x = formatters[i](x)
        push(acc, x, 'span')
        return acc
    }

    const creatorB = (acc, item) => {
        const x = item.reduce(creatorA, [])
        push(acc, x, 'div')
        return acc
    }
    const product = items.reduce(creator, [])
    return divify('div', product, humzlemap[items[0].length] + '-column-table')
}

function superb(s, ...args) {
    const map = new Map()
    const functions = []
    let current

    for (let i = 0; i < args.length; i++) {
        let el = args[i]
        if (isFunction(el)) {
            current = el
            map.set(el, [])
        }
        else {
            map.get(current).push(el)
        }
    }

    for (let [k,v] of map.entries()) {
        functions.push(curryMod(k, v, {reverse: true}))
    }

    const runner = pipe(...functions)
    const product = runner(s)
    console.log( product )
    return product
}

function superb23(s, ...args) {
    for (let i = args.length - 1; i > 0; i--) {
        if (isFunction(args[i])) {
            if (exists(store)) {
                store.reverse()
                let holder = args[i]
                args[i] = (x) => holder(x, ...store)
            }
            break
        }
        else {
            store.push(args.pop())
        }
    }
    // const parser = pipe(...args)
    // const product = parser(s)
    console.log( product )
}

// superb(asdfasdf, (s) => s.split(' '), enumerate, toDictionary, {reverse: true}, createVariable2, 'humzlemap')
// superb(months, mapped(x => x.toLowerCase()), enumerate, null, 0, toDictionary, createVariable2, 'humzlemap')


// ask for something. Going towards the elites. 

// everything that has an upper level combine ,eneeds to be able to be edited at the micro level. allow for a sort of seamlessness. 

// it is a good idea to ekep everything as flat as possible.
// need to establish a normal and insert mode.
// how do u implement the mode aspect.

const sindreSorhusHtmlRE = /\s?<!doctype html>|(<html\b[^>]*>|<body\b[^>]*>|<x-[^>]+>)+/i;
// const sindreSorhusFullHtmlRE = new RegExp(htmlTags.map(tag => `<${tag}\\b[^>]*>`).join('|'), 'i');


function getFirstDayOfMonth(day = 0, month, year = getCurrentYear()) {
    if (isString(day)) day = humzlemap[day.toLowerCase()]
    if (isString(month)) month = humzlemap[month.toLowerCase()]
    const start = new Date(year, month, 1)
    let futureDay = start.getDay()
    let count = 1
    while (futureDay % 7 != day) {
        futureDay++
        count++
    }
    return count
}
// console.log( getFirstDayOfMonth('sunday', 'june', 2018) )

// console.log( toTable() )



// write('vuecm.html', vuelines.format(hstr))
// console.log(vuelines.format(hstr))

// It worked. It kind of just worked. There is a large distance to traverse. 
// The 
// there are optimizaiotns thatcan be made ... but they have to be made smartly, as the items cohere, cloer and closer.


// there is no reason to ... put it into an object, other than to make it look pretty. But doing it like this, carries costs. It becomes less efficient. 

// console.log( cmTabCompletion(cm()) )

// console.log( 'D'.charCodeAt(0))
// console.log( String.fromCharCode(96))
// cm deletes from the wrong place.





ppl = `


Rush Hudson Limbaugh III (/ˈlɪmbɔː/ LIM-baw; January 12, 1951 – February 17, 2021) was a controversial American radio personality, conservative political commentator, author, and television show host. He was best known as the host of his radio show The Rush Limbaugh Show, which was nationally syndicated on AM and FM radio stations. His net worth was 600 million dollars.

What college did Rush Limbaugh go to?

Southeast Missouri State University
Northwest Missouri State University
Southwest Missouri State University
Northeast Missouri State University



Kristi Noem is South Dakota's governor.

What college did she go to?

South Dakota State University

Jason Alan Kilar is an American businessperson. He became the CEO of WarnerMedia on May 1, 2020. He was previously an Amazon executive and the CEO of Hulu.

What college did he go to?

University of North Carolina
Harvard University
Brigham Young University
Boston University

Jason Alan Kilar attended the University of North Carolina for undergraduate, and Harvard University for business school.


`








// u can write comments in the script. u can write omments pretty much everywhere. and then all of a sudden, it becomes cold, and u dont notice. 
// the aspect of being childish. 
// 
// to do it within the family. There is a price to be paid. There needs to be apassive system of structure. 

// to have 2 meets before engaging.
// 


// the last word comes about. 

        // console.red( visible(toSpaces('    ') ))

// console.log( dobjParser('hi bye  a b fly sigh  ok woka' ))

function cssParser3(s) {
    const store = []
    const name = []
    const text = []
    const items = s.split(' ')
    let firstCheckPoint = false
    for (let i = 0; i < items.length; i++) {
        let item = items[i]
        let product = runCss(item, false)
        if (product) {
            firstCheckPoint = true
            store.push(product)
        }
        else if (firstCheckPoint) {
            text.push(item)
        }
        else {
            name.push(item)
        }
    }
    return [name.join(' '), store.flat(), text.join(' ')]
}
// console.log( cssParser3('monospace code fs16'))
// edit the function into the dict.

function isThisFunction(fn) {
    return fn.toString().includes('this')
}

function getCssInfo(s) {
    return split(s, [null, cssParser3])
}
// console.log( getCssInfo('hi bgred wh40' ))
// console.log(createClass('hi bgred wh40'))
// console.log( cssParser2('hi bgred') )

function sliceEditFactory(fn, mode = 'EQUALS', start = '') {
    return (...args) => {
        const items = split(args[0], mode)
        if (items) {
            args[0] = items[1]
            return start + items[0] + fn(...args)
        }
        else {
            return null
        }
    }
}


 // console.log(sliceEditFactory(dobjParser, 'EQUALS')('abc = hi bye'))

asdf = `
const movementmap = {

    gg:  (cm) => cmCursor(cm, 'DOCUMENT-START'),
    G:   (cm) => cmCursor(cm, 'DOCUMENT-END'),
    A:   {action: (cm) => cmCursor(cm, 'LINE-END'), mode: 'ENTER-INSERT-MODE'},
    o:   {action: cmToLineBottom, mode: 'ENTER-INSERT-MODE'},
    O:   {action: cmToLineTop, mode: 'ENTER-INSERT-MODE'},
}
`
function createDictionary(re, s) {
    const cdf = "^(?:class|const|(?:async )?function|def) "
    re = /^ *(\w+): *(?:{\w+: *)?(?:(\(cm\) => .*?|\w+), *(?:$|\w+:))/gm
    const name = search(cdf.slice(1) + '(\\w+)', s)
    const matches = findall(re, s, {sliced: true, filtered: true})
    console.log( brackify('const ' + name + ' =', stringReduction(matches, {delimiter: ': ', join: ',\n'}) ))
}

// createDictionary(gm, asdf) // this regex grabs certain things.



quote = `

https://twitter.com/bencichy/status/1362932982646853634?s=20
`


// i dont think my parents are correct in their assessment that a 'credentialed' path is the only one that works. But it worked for them, so that is what they advertise. 


// console.log( undefined === null )
// console.log( bestText('cl doc.innerHTML'))
// console.log( createStringDictionary('hi bye' ))

// get hyped get hyped get hyped!
// it is hard to wrap the idea of how it works.
// there is ... a lot.
function getParameters(fn) {
   const s = fn.toString().match(/\((.*?)\)/)[1]
   return getWords(s)
}
// console.log( getParameters(search ))

const animationmap = {
    fade: 'o0  01 bgyellow  duration500 times1'
}
const numberBoundaryOrColorBoundaryRE = /(?<=\D)(?=\d)|(?<=\d)(?=\D)|(?=red|blue|green|orange|yellow|white|grey|black|pink|brown)/
const numberBoundaryRE = /(?<=\D)(?=\d)|(?<=\d)(?=\D)/
function cssformat(s) {
    let pair = s.split(numberBoundaryOrColorBoundaryRE)
    return pair.map((el) => mapgetter(el, cssaliasmap))
}
function parseAnimationString(s) {

    const keyframes = s.split('  ').map((item, i) => {
        const object = item.split(' ').reduce((acc, el) => {
            const product = cssformat(el)
            if (isArray(product[0])) {
                acc[product[0][0]] = product[0][1]
            }
            else {
                acc[product[0]] = toNumber(product[1])
            }
            return acc
        }, {})

        return object
    })
    // console.log( keyframes )

    if (keyframes.length == 1) {
        return [keyframes, defaultAnimationOptions]
    }

    const options = keyframes.pop()
    return [keyframes, options]
}

// console.log( parseAnimationString(animationmap['fade'] ))

// we have to play to each of our advantages. For me, I am not good at naming things, which s one of the reasons why I put everything into a single file. it reduces the naming burden.


function typedAction(item, things) {
    const store = []
    if (isNestedArray(things)) {
        for (let thing of things) {
            if (things[0](item)) {
                const product = things[1](item)
                if (product) store.push(product)
            }
        }
    }
    else {
        for (let i = 0; i < things.length - 1; i++) {
            if (things[i](item)) {
                const product = things[i + 1](item)
                if (product) store.push(product)
            }
        }
    }
    return store
}
function checkElement(el) {
    const element = document.createElement(el)
    const storage = SimpleStorage()
    let destination
    for (let [k,v] of Object.entries( element )) {
        typedAction(v, [
            isString, (x) => destination = 'strings',
            isFunction, (x) => destination = 'functions',
        ])
        store.add(destination, k)
    }
    console.string(store.value)
    return store.value
}

s = 'p > div.foo ~ p + li bgred'
s = 'p > div.foo ~ p + li:nth-of-type(1) bgred'
// runner94(s)

// define kvarray an array that follows the pattern of [ ['a', 'b'], ['c', 'd'] ]. Basically, an array of arrays where each inner array consits of a key-pair value.
// define key-pair value
// stringReduction most commonly is used for reducing a kvarray into a string.


// you get what the system permits. Dealing with a 20k base in vscode, might be unthinkable. But it is doable in vim, because I am only really exposed to 20 lines at a time. 

// i have pretty opinionated ideas about how a piece of code should look, which might make me micromanage details. 




// The current implementation is not very well done. Of course, it works. But ... a professional will look at it and snort. 


// Teachers who did not give spirit. 
// Stories have a purpose. Rocks have a purpose. They seem useless on first glance. 


// Once upon a time, our world was not like this. But we came, and shaped it into our image. Everything that has happened, has happened for a reason. When nothing is special, when everything is destitute, when there is no hope, 


// console.log( cssParser3('p > foo.woo ~ p wh40 bgred' ))
// console.log( arraymaker('hi john  bye sam' ))
// as the difficulty of the questions increases, the number of available answers decreases. An automation of questions. Use whether or not the question has been liked / seen as a proxy. No fluttery language. 

// console.log(vuelines.format('pv hi\nsquare'))

// console.log(classRunner(Partitions)('hi\nbye'))
s = '[i]^2/([i]^2-1)'
// console.log( math.gen3(s) ) // something kind of not wkring here.

const singleFractionRE = /([^\s/]+)\/([^\s/]+)/
// const singleFractionRE = /[^\s/]+\/[^\s/]+/
function singleFractionParser(_, a, b) {
    return parens(a) + '/' + parens(b)
}
function mathfix(s) {
    if (singleFractionRE.test(s)) {
        return s.replace(singleFractionRE, singleFractionParser)
    }
}
const sampleMathTemplate = 'n^2/n^2-1'

// console.log( Calculation.calculate(math.gen4('a * a', 

const mathTemplateDelimiter = 'a'
const mathNDelimiter = 'n'
// const mathNDelimiter = 'n'
function mathgen4(s, {template = false, start = 1, evaluate = false} = {}) {
   if (isNumber(evaluate)) {
        const parser = (...args) => {
            const [offset, original] = args.slice(-2)
            if (isNumber(original.charAt(offset - 1))) {
                return ' * ' + evaluate
            }
            return evaluate
        }
        s = replace(mathNDelimiter, parser, mathfix(s))
   }

   else if (template) {
       template = mathfix(template)
       const parser = (x) => {
           return replace(mathNDelimiter, parens(String(start++)), template)
       }

       s = replace(mathTemplateDelimiter, parser, s)
   }

   if (evaluate) {
       const evaluation = Calculation.get(s)
       console.log(s + ': ' +  evaluation )
   }
   return s
}

// mgen2 and mgen3 are currently not working i assume, due to something on with drep9002. but mathgen4 is absolutely working.

// console.log(math.gen3('2p2p4'))
//drep9002 has been messed up. It was prone to breaking anyways.


// mathgen4('a' + ' * a'.repeat(10), {start: 2, template: sampleMathTemplate, evaluate: true})
// mathgen4('2n/n+1', {evaluate: 12} )


function createArguments(fn, ...args) {
    const store = []
    const params = getParameters(fn)
    console.log( params )
}

// console.log( createArguments(PersonalAssistant.time ))
// console.log( createArguments(getFirstDayOfMonth ))

asdf = `
colonmap = {
      createpage: (cm) => cm.setValue(createPage.format(cm.getValue())),
      vuelines: (cm) => cm.setValue(vuelines.format(cm.getValue())),
      write: (cm, arg) => cm.state.store.add(arg, cm.getValue()),
      set: (cm, arg) => cm.state.store.set(arg, cm.getValue()),
      edit: (cm, arg) => cm.setValue(cm.state.store.get(arg)),
      date: PersonalAssistant.date,
      time: PersonalAssistant.time,
      wc:   clipboardWordCount,
      toframe: (cm) => this.htmlText = cm.getValue(),
      totext:  (cm) => cm.setValue(this.htmlText),
      addstyle: (arg) => this.$set(this.styles, ...cssParser3(arg)),
      removestyle: (arg) => this.$delete(this.styles, arg),
      style: (cm, arg) => cmEditStyle(cm, arg),
      dobj : cm => cmEditor(cm, 'DICT-OBJ'),
      aobj : cm => cmEditor(cm, 'ARRAY-OBJ'),
      grab:  (cm, arg) => cmGrab(cm, arg),
      sub:   cmSubmitter,
      reset: () => {
          
      },
      load: (cm, arg) => {
          cm.setValue(arg)
      },
      merge: (arg) => {
          const [key, s] = split(arg)
          const obj = window[key]
          const data = getLineInfoMAPS(s)
          mergeInPlace(obj, data)
      },
      // cleanup: 
      //fexec
      //fcol
      e: (arg) => this.evalString = evaluator(bestText(arg)),
      jbin: () => {
          const [mode, key] = split(arg, {default: ['GET', null]})
          const value = mode == 'GET' ? null : cm.state.store.get(key)
`
// console.log( asdf )
function textHelper() {
    const matches = findall(/^ *(\w+):.*?=> +({\n[^]+?    }(?=,)|.+)/gm, asdf)
    s = ''
    for (let [a,b] of matches) {
        if (b.startsWith('{\n')) {
            b = b.slice(2, -1)
        }
        s += 'case ' + quotify(a) + ':\n' + indent((b + sn + 'break'), 4, {mode: 'replace'}) + sn
    }
    write('z', indent(s, 8 ))
}

function electricityBillCalculator({delivery = null, demand = null, hours = 10, per = 'DAY', price = '20', unit = 'CENTS', wattage = 1000} = {}) {
    if (unit == 'CENTS') price /= 100
    const amount = 1.5 * wattage * price * hours / 1000
    console.log( amount )
}
// electricityBillCalculator()

// subconsciously, I tend to shape into a certain direction.


// s = split(abc, {default: ['a']})
// console.log( s )

const snippetmap = {
    'hello': 'function X(X) {\n    X',
    'a': 'helloooooooooXgoodbyeXhavefunXzeeee/eea\neeeeXeeeee',
    'red': 'reduce((acc, item, i) => {\n    Y\n}, {})',
}

        const transformedsnippetmap = transformSnippetMap(snippetmap)
function transformSnippetMap(snippetmap) {
    return Object.entries(snippetmap).reduce((acc, [k,v]) => {
    if (test('Y', v)) {
        const ch = search('.*?' + 'Y', v).length - 1
        const sliced = v.slice(0, v.indexOf('Y'))
        const line = count('\n', sliced)
        v = v.replace('Y', '')
        acc[k] = {snippet: v, line, ch}
    }
    else {
        acc[k] = v
    }
    return acc
}, {})
}
// console.log( parseAnimationString('bgred easein') )
// clock(4)


// The amount of energy that you can use ... 
// today was a reasonably productive day ...
// To take it slowly...
// It was a pretty big mistake.

async function clocker() {
    let foo = await sleepclock(3)
    console.log(foo)
}

// clocker()

function a1(file) {
    write('z', console.reverse( read(file)))
}
function replaceBetween(a, b, s, replacement) {
    const regex = a + '[^]+?' + b
    const product = replace(regex, (x) => {
        return replacement
    }, s, '')
    return product
}

function a2(s, content) {

   const a = '(?<=<div id="app".*?>)'
   const b = '(?=</div>\\s+<script>)'
   // const a = '<div id="app".*?>'
   // const b = '</div>(?=\\s+<script>)'
   const product = replaceBetween(a, b, s, content)
   return product
}

// it is not that bad. She is smarter than she looks. You forget that.
//a1 is a function that performs console.reverse.
//a2 replaces the inner aspect of a vue.html page with a new div id=app.
// console.log( a2(text, 'boo' ))
