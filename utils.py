
githubdeletecmd = '''curl -X DELETE -H "Accept: application/vnd.github.v3+json" -H "Authorization: token ${token}" https://api.github.com/repos/${username}/${reponame}'''
githubItemNameRE = '<span class="css-truncate css-truncate-target d-block width-fit"><a class="js-navigation-open link-gray-dark" title="(.*?)"'
subredditmap = {
    'mhw': 'cheatatmathhomework',
    'ebs': 'explainbothsides',
    'ck': 'cooking',
    'ap': 'askprogramming',
    'ljs': 'learnjavascript',
    'lp': 'learnpython',
    'me': 'mementomoriok',
    'nsq': 'nostupidquestions',
    'vue': 'vuejs',
    'py': 'learnpython',
    'js': 'learnjavascript',
    'eli5': 'eli5',
    'vim': 'vim',
    'css': 'css',
}
RESET = True 
deletefiles = 'comments.json            '

from praw.models import MoreComments


wordsearch = {
    '\w+(?:map|dict|list': 'foo'
}



def isnotmyactivefile(file):

    return not ismyactivefile(file)
def ismyactivefile(file):
    return basename(file) in CWF + RC + LIBRARY

import itertools

def flatten(x):
    return list(itertools.chain.from_iterable(x))

testfile = '~/testfile.py'
def smartnotes(s):

    store = fastparse(s,
        preparsers = [spellcheck],
        split = '(?<=\S)  (?=\S)|\n +',
        cleanerRE = '.*[{}]\n?|^ *\n'
    )
    #  store = analyzeWords(s)



def analyzeWords(s):
    s = textgetter(s)
    ignoreLIST = []
    words = getWords(s)
    tally = Tally(words)
    return numericalSort(tally.filter(lambda word: word not in ignoreLIST))




class x:
    pass
ignoreGithubRepoFilesWordList = [
    'contributing', 'readme', 'jest', 'license', '__tests__', 'json', 'mocha'
]
old = print

import inspect

tobj = {
    'fggreen': "\x1b[32m",
    'reset': "\x1b[0m",
    'bright': "\x1b[1m",
}
def print(*args):
    try:
        caller = inspect.getframeinfo(inspect.stack()[1][0])
        old(tobj['fggreen'] + tobj['bright']  + str(caller.lineno) + tobj['reset'])
    except:
        pass
    
    old(*args)

deleteprohibited = [
        '~/',
        '/users/harfunmaterials'
        '/home/kdog3682',
        "/users/harfunmaterials/Google Drive",
        "/mnt/chromeos/GoogleDrive/MyDrive",
]
myfiddle = 'https://jsfiddle.net/gh/get/library/pure/kdog3682/codesnippets/tree/master/Demo/',
jsfiddlemetastring = '''/*
---
name: Request.HTML - jsFiddle/Github integration demo
description: jsFiddle demo hosted on Github using HTML Request to get Ajax data
authors:
  - Piotr Zalewa
resources:
  - /js/empty.js
  - /css/normalize.css
normalize_css: yes
lang_css: SCSS
...
*/'''
lorem = 'asdfasdfadlorem'
nbspASSET = '\n\n&nbsp;\n\n'
guotiestring = '''

def joined(*items):
    return ' '.join(items)
def isNestedArray(x):
    try:
        return isArray(x[0])
    except:
        print(  'error at nested array', x  )
        return False

def removeComments(input = None, lang = None):
    text = textgetter(input)
    if not lang:
        commentDelimiter = '(?://|#)
    else:
        commentDelimiter = jspymap.get(lang).get('comment')
    return re.sub('^' + commentDelimiter + '.*\n?', '', text, flags=re.M)
shortmonthslist = [
'''

bashcommands = '''
pip show praw
pip list
pip install -r requirements.txt
pip freeze > requirements.txt
pprint(  sorted((sys.modules.keys()  )))
'''
#  import praw
from env import *
import shutil

d = {"aa": 3, "bb": 4, "cc": 2, "dd": 1}
from pprint import pprint
import requests
import socket

codefileextensions = ["js", "py", "css", "html"]
import html
simpleQuoteRE = '[\'\"].*?[\'\"]'
latexstring = r'''
\documentclass{article}
\usepackage[pdftex,active,tightpage]{preview}
\setlength\PreviewBorder{5mm}

\usepackage{chessboard}

\begin{document}
\begin{preview}

\chessboard[setfen=5rk1/pp3N1p/4P3/2P5/3Q1PK1/P7/1Pr3pq/R3R3 w - - 0 0,
            showmover]

\end{preview}
\end{document}
'''

vimrcitems = [
    'n',
    'iab',
    'i',
    'v',
    ':',
    '"',
]
config = {
    'vimrc': {
        'items': vimrcitems,
    },

    'bash': {
        'items': [1]
    }
}



import os
import regex as re
import json
import subprocess
import webbrowser
import sys
import datetime
import time

foobalicious = ""
allnotes = "allnotesjanuary.json"
testobj = {"hi": "hi", "bye": "bye"}

importRE = "from (\w+) import (.*)|import (\w+)(?: as (\w+))?"
importmap = {
    "FPDF": "from fpdf import FPDF",
    "sys": "import sys",
}

sn = "\n"
np = print
libmap = {}
e = "ERROR"
i = "INPUT"
snsn = "\n\n"
startRE = "^"
lbr = "-" * 50
snsnsn = "\n\n\n"
PY_TEST = "foo ="
PY_ANSWER = "foo"
wallu = "[\w\W]+?"
walluRE = "[\w\W]+?"
starterRE = "(?<=\n|^)"
cwalluRE = "([\w\W]+?)"
commentRE = "(?://|#) *"
startingCommentRE = '^ *' + commentRE + '(.*?) *$'
GROOT = "/home/kdog3682"
INDEX_FILE = "index.html"
codeBlockRE = "^.*?[:{]\n"
enderRE = "(?=\n[\w#/]|$)"
codewords = " sort parser "
RESPONSE_KEY = "response.json"
ERRORS_ENDPOINT = "errors.txt"
INDEX_ENDPOINT = "index1.html"
bashAliases = "~/.bash_aliases"
pySimpleCommentRE = "^ *#.*\n?"
jsSimpleCommentRE = "^ *//.*\n?"
jsBlockCommentRE = "^ */\*[\w\W]+?\*/.*\n?"
MROOT = "/users/harfunmaterials"
STORAGE_KEY = "localStorage.json"
vuestd = ["index.html", "methods.js"]
vuebu = ["index1.html", "methods.js"]
JSONBIN_ID = "5f30add71823333f8f20b1bb"
shallowobj = {"booga": {"items": [4, 5]}}
fileExtensions = ["js", "py", "css", "html"]
GDRIVE = "/mnt/chromeos/GoogleDrive/MyDrive"
deepobj = {"reddit": {"comments": [1, 2, 3]}}
isChineseRE = "[^\u0000-\u05C0\u2100-\u214F]"
ccdf = "^(?:class|const|def|function) |^\w+ ="
codebodyre = '\\b[\w\W]+?'
namedCodeBodyRE = (
    "(?<=^|\n)((?:async|function|def|class) (\w+)\\b[\w\W]+?)\s*?(?=$|\n(?:\w|#|//))"
)

namedCodeBodyAllRE = "(?<=^|\n)((?:(\w+)\.prototype\.\w+\\b|(?:const )?(\w+) = |(?:async|function|class|def) (\w+)\\b)[\w\W]+?)\s*?(?=$|\n(?:\w|#|//))"
#  namedCodeBodyAllRE = "(?<=^|\n)((?:(?:const )?(\w+) = |(?:async|function|class|def) (\w+)\\b)[\w\W]+?)\s*?(?=$|\n(?:\w|#|//))"
MDRIVE = "/users/harfunmaterials/Google Drive"
getRegexesRE = "(?:\\w+re|regex) = '(.*?)' *$"
cdfbase = "^(?:def|(?:async )?function|class) "
cdfString = "class|const|(?:async )?function|def"
cdf = "^(?:class|const|(?:async )?function|def) "
restarter = '(?<=^|\n)'
reender = '(?=\n\w|$)'
cdfns = cdf[1:]
cdfandpy = "^(?:(?:class|const|(?:async )?function|def) )?"
nativeJavascriptImports = ["process", "fs", "path"]
linebreak = "\n-------------------------------------\n"
cdfnocaret = "(?:class|const|(?:async )?function|def) "
cdfm = "^(?:class|const|(?:async )?function|def|       ) "
myfunctions = " organizeFile, sreplace, parseChinese, humzle, "
numbers = lambda n=10, start=1: list(range(start, n + start))
github_usercontent_url = "https://gist.githubusercontent.com/"
cdfi = "^(?:class|const|(?:async )?function|def|import|from) "
cdfstart = "(?:^|(?<=\n))(?:class|const|(?:async )?function|def) "
catapiheader = {"x-api-key": "ada0bcd0-37b2-4978-85bc-55e366740ccd"}
d = {"woo": "alabaster", "reddit": {"woo": "gogo", "zoo": "zoooooooo"}}
pyBlockCommentdqRE = "^ *(?:\w+ *= *)?(?<!\\\\)'''[\w\W]+?(?<!\\\\)'''\n?"
pyBlockCommentsqRE = '^ *(?:\w+ *= *)?(?<!\\\\)"""[\w\W]+?(?<!\\\\)"""\n?'
pyBlockRE = '^(?:\w+ *= *)?(?:(?<!\\\\)"""[\w\W]+?(?<!\\\\)"""|(?<!\\\\)\'\'\'[\w\W]+?(?<!\\\\)\'\'\').*\n?'

jsBlockRE = "^ *(?:\w+ *= *)?(?<!\\\\)`[\w\W]+?(?<!\\\\)`.*\n?"
jsBlockRE2 = "^(?:(?:\w+ )?\w+ *=\s*)?(?<!\\\\)`[\w\W]+?(?<!\\\\)`(?:\.trim\(\)|;)?"
pyBlockCommentRE = (
    "^ *(?:\w+ *= *)?(?<!\\\\)(?:'''|\"\"\")[\w\W]+?(?<!\\\\)(?:'''|\"\"\")\n?"
)
fnnameregexlist = ["get.*?", ".*?dir", "lookslike.*?", "is.*?", "\S+?ed", "has.*?"]
nestobj = {"a": "hi", "b": "bye", "c": {"horses": {"red": "bob", "green": "taylor"}}}
CWF = ['utils.py', 'methods.js', 'testfile', "utils.js", "helpers.py", 'index.html', "index1.html", ".vimrc", ".bash_aliases", "Print.py"]


SECRET_KEY = "$2b$10$sytDibYSdL5PZuWsycJvLelr1rmGCiK9O6HXbnoc35FWhnPv1SkGG"  # JSONBINIO
getImpliedRE = "(?:\+ |return | in |of |if | elif |,|': | =?= |\w\[|\(|\)|{ ?)([a-zA-Y]{3,})(?=,|:\n| {|\n|\]|\(|\))"
template = '\n<div id="app"\n   \n>\n     <!-- fapp -->\n\n</div>\nnew Vue() {\n    methods: {\n\n    }\n}\nconst rm = {\n}\n'
BROWSER_AGENT = "Mozilla/5.0 (X11; CrOS aarch64 13310.93.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.133 Safari/537.36"
JS_TEST = "console.log(Accumulate(\"r.eli5 how does google's search algorithm know shud means 'should' and 'prezeidnt' means president?\"))"
JS_ANSWER = "{\n  r: [\n    {\n      title: \"ELI5: How does google's search algorithm know should means 'should' and 'prezeidnt' means president?\",\n      subreddit: 'eli5',\n      body: ''\n    }\n  ]\n}"
temp = "temp"
temp2 = "temp2"
temp3 = "temp3"
START_RE = "(?:^|\n)"  # d
placeholder = "placeholder"
CWALLU_RE = "[\w\W]*?"  # d
PRINTFILEPATH = MDRIVE + "test.pdf"
FUNCTION_END_RE = "(?=\n\w|$)"  # d
jsfiddle = "https://jsfiddle.net/u7x6vx1q"
testalignequals = "foobar: abc\nfoo: abcde"
deepobj2 = {"a": {"b": {"c": {"e": "foo"}}}}
FUNCTION_START_RE = "(?:class|function|def) "  # d
aobj = {"a looks like fast": ["a", "b", "c", "d"], "ciadsdf": ["foo", "boo"]}
raw = "https://raw.githubusercontent.com/glxxyz/hskhsk.com/main/data/lists/HSK%202013%20Pleco.txt"
chineseGithubBase = "https://raw.githubusercontent.com/glxxyz/hskhsk.com/main/data/lists/HSK%20Official%20With%20Definitions%202012%20L"
abcde = ["f", "a", "b", "c", "d", "e"]
strobj = {"a": "a" * 10, "b": "b" * 1000, "c": "c" * 1001, "d": "d" * 500}
snlbr = sn + lbr + sn
            
callableRE = (
    "^\w+\(.*?(?:(?<!\\\\)(?:\`|'''|\"\"\")[\w\W]+?(?<!\\\\)(?:\`|'''|\"\"\")\s*\)+)?\n"
)
jsCleanerRE = "|".join(
    [
        callableRE,
        jsSimpleCommentRE,
        jsBlockRE2
    ]
)

pyCleanerRE = "|".join(
    [callableRE, pySimpleCommentRE, pyBlockCommentdqRE, pyBlockCommentsqRE]
)
nameswapdict = {
    "SimpleStorage": "BasicStorage",
}

abcobj = {
    "a": "aa",
    "b": "aa",
    "c": "aa",
    "d": "aa",
    "e": "aa",
}

outer = {
    "start": "methods: {",
    "end": "},",
    "inclusive": True,
    "spaces": 4,
}

undodict = {
    "I'm(?=\w)": "im",
    "(?<=\w)New York": "ny",
    "for example(?=\w)": "ie",
}

mycwf = [
    "z",
    "utils.py",
    "b.py",
    "index.html",
    "utils.js",
    "helpers.py",
    "index1.html",
    "Print.py",
    "ec.py",
]

mycwf = [
    'utils.js', 
    'utils.py',
    'index.html',
    'vuecm2.html',
    'methods.js',
]

abc = {  # d
    "maps": {
        "const wb = {": "\n    'ms': 'match = search(',\n",
        "const jswb = {": "\n    'mf': 'matches = findall(',\n",
    }
}

months = [
    "",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
]

LIBRARY = [
    'tailwind.js',
    "skulptmin.js",
    "skulptlib.js",
    "codemirror.css",
    "docs.css",
    "codemirror.js",
    "vue.js",
    "vuex.js",
    "vuerouter.js",
    "jshint.js",
    "z",
    "b.py",
    'archive.py',
    'archive.js',
]

redditQuestionWORDS = [
    'wt', 'wts', 'y', 'wen', 'shud', 'does', 'im', 'hv',
    "for",
    "shud",
    "who",
    "what",
    "where",
    "when",
    "why",
    "how",
    "should",
    "could",
    "do",
    "is",
    "have",
    "has",
    "does",
    "are",
    "might",
]

questionWORDS = [
    "for",
    "shud",
    "who",
    "what",
    "where",
    "when",
    "why",
    "how",
    "should",
    "could",
    "do",
    "is",
    "have",
    "has",
    "does",
    "are",
    "might",
]

RC = [
    ".vimrc",
    ".bashrc",
    ".bash_aliases",
    ".bash_history",
    "stdout.log",
    "log.json",
    "package-lock.json",
    "package.json",
    "localstorage.json",
    "computerstorage.json",
    "stderr.log",
]

cps = [
    "https://codepen.io/kirbyedy/full/XjAqqQ",
    "https://codepen.io/tag/darksky-api/",
    "https://codepen.io/kirbyedy/pen/XjAqqQ",
    "https://codepen.io/DevinRoss/full/Wzjdvr",
    "https://codepen.io/norven/pen/VRLMaM",
]

alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
]

pmnb = {
    "evy": "every",
    "thg": "thing",
    " i ": " I ",
    " y ": " why ",
    "be4": "before",
    " 2 ": " to ",
    " 7 ": " and ",
    " 4 ": " for ",
    " b ": " be ",
    "gr8": "great",
    "cr8": "create",
    "qm": "?",
}

nativePythonImports = [
    "os",
    "re",
    "sys",
    "json",
    "time",
    "datetime",
    "inspect",
    "socket",
    "shutil",
    "subprocess",
    "requests",
    "html",
    "pprint",
    "itertools",
    "webbrowser",
    "black",
    "BeautifulSoup",
]

pynativelib = [
    "black",
    "FPDF",
    "fbchat",
    "sys",
    "praw",
    "default_timer",
    "difflib",
    "urllib",
    "itertools",
    "pprint",
    "html",
    "requests",
    "subprocess",
    "shutil",
    "socket",
    "inspect",
    "datetime",
    "time",
    "json",
    "sys",
    "re",
    "os",
]

dirmap = {
    "root": "",
    "code": "code",
    "app": "downloads/app",
    "sandisk": "Sandisk",
    "ziptest": "ziptest",
    "code2": "code2",
    "code3": "code3",
    "qrs": ".vscode/extensions/qrs",
    "kdog": "websites/kdog3683",
    "desktop": "desktop",
    "dl": "downloads",
    "documents": "documents",
}

jspy = {
    "js": {
        "scrapRE": '^// *(\w\S+\(.*)|^(?:let |const )? (\w+) ?=\s*`([\w\W]+?)`',
        "sampleanswer": "howdy",
        "sampletest": "console.log('howdy')",
        "test": JS_TEST,
        "answer": JS_ANSWER,
        "runtime": "node",
        "cwf": ["index1.html", "methods.js"],
    },
    "py": {
        "scrapRE": '^# *(\w.*)|^(?:(\w+) ?=\s*r?(?:\"\"\"|\'\'\')([\w\W]+?)(?:\"\"\"|\'\'\')',
        "sampleanswer": "howdy",
        "sampletest": "print('howdy')",
        "test": PY_TEST,
        "answer": PY_ANSWER,
        "runtime": "node",
        "cwf": ["ec.py"],
    },
}

items = [
    "https://www.wellandgood.com/words-affirmation/",
    "https://www.pinterest.com/pin/625930048191977967/",
    "https://www.blinkist.com/magazine/posts/love-language-words-affirmation",
    "https://www.5lovelanguages.com/faqs/love-languages/",
    "https://www.verywellmind.com/words-of-affirmation-4783539",
    "https://www.womenshealthmag.com/relationships/a29699122/words-of-affirmation-love-language/",
    "https://www.mindbodygreen.com/articles/how-to-use-words-of-affirmation",
]

nativemap = {
    "black": "import black",
    "fpdf": "from fpdf import FPDF",
    "fbchat": "import fbchat",
    "sys": "import sys",
    "praw": "import praw",
    "timeit": "from timeit import default_timer",
    "difflib": "import difflib",
    "urllib": "import urllib",
    "itertools": "import itertools",
    "pprint": "from pprint import pprint",
    "html": "import html",
    "requests": "import requests",
    "subprocess": "import subprocess",
    "shutil": "import shutil",
    "socket": "import socket",
    "inspect": "import inspect",
    "datetime": "import datetime",
    "time": "import time",
    "json": "import json",
    "re": "import re",
    "os": "import os",
}

pyimportdictadv = {
    "contextmanager": "from contextlib import contextmanager",
    "urllib": "import urllib.request",
    "traceback": "import traceback",
    "StringIO": "from io import StringIO",
    "FPDF": "from fpdf import FPDF",
    "fbchat": "import fbchat",
    "Reddit": "from praw import Reddit",
    "praw": "import praw",
    "shutil": "import shutil",
    "socket": "import socket",
    "unicodedata": "import unicodedata",
}

pyimportdict = {
    "contextmanager": "from contextlib import contextmanager",
    "pprint": "from pprint import pprint",
    "re": "import regex as re",
    "urllib": "import urllib.request",
    "math": "import math",
    "webbrowser": "import webbrowser",
    "requests": "import requests",
    "traceback": "import traceback",
    "StringIO": "from io import StringIO",
    "FPDF": "from fpdf import FPDF",
    "fbchat": "import fbchat",
    "sys": "import sys",
    "praw": "import praw",
    "subprocess": "import subprocess",
    "shutil": "import shutil",
    "socket": "import socket",
    "inspect": "import inspect",
    "datetime": "import datetime",
    "time": "import time",
    "json": "import json",
    "os": "import os",
    "unicodedata": "import unicodedata",
}

redditlinks = [
    "https://www.reddit.com/r/infj/comments/4t7hff/depressionloneliness_in_infjs_and_how_to_cope/",
    "https://www.reddit.com/r/infj/comments/inec2g/about_loneliness_as_an_infj/",
    "https://www.reddit.com/r/infj/comments/bkcnpt/question_how_do_you_deal_with_feeling_of/",
    "https://www.reddit.com/r/infj/comments/6e06qa/how_do_you_deal_with_unbearable_loneliness/",
    "https://www.reddit.com/r/infj/comments/7rpiv8/older_wiser_infjs_how_did_you_overcome_the/",
    "https://www.reddit.com/r/infj/comments/e6yzz7/loneliness_as_an_infj/",
    "https://www.reddit.com/r/infj/comments/1xxsv1/infj_loneliness/",
    "https://www.reddit.com/r/infj/comments/9rrxa7/infjs_and_loneliness/",
    "https://www.reddit.com/r/infj/comments/2lat2l/infj_and_loneliness/",
    "https://www.reddit.com/r/infj/comments/1rv37j/do_infjs_suffer_from_loneliness/",
]

prepositionLIST = [
    "aboard",
    "about",
    "above",
    "across",
    "after",
    "against",
    "along",
    "amid",
    "among",
    "around",
    "as",
    "at",
    "before",
    "behind",
    "below",
    "beneath",
    "beside",
    "between",
    "beyond",
    "but",
    "by",
    "concerning",
    "considering",
    "despite",
    "down",
    "during",
    "except",
    "following",
    "for",
    "from",
    "in",
    "inside",
    "into",
    "like",
    "minus",
    "near",
    "next",
    "of",
    "off",
    "on",
    "onto",
    "opposite",
    "out",
    "outside",
    "over",
    "past",
    "per",
    "plus",
    "regarding",
    "round",
    "save",
    "since",
    "than",
    "through",
    "till",
    "to",
    "toward",
    "under",
    "underneath",
    "unlike",
    "until",
    "up",
    "upon",
    "versus",
    "via",
    "with",
    "within",
    "without",
]

nativeFunctions = [
    "abs",
    "delattr",
    "hash",
    "memoryview",
    "set",
    "all",
    "dict",
    "help",
    "min",
    "setattr",
    "any",
    "dir",
    "hex",
    "next",
    "slice",
    "ascii",
    "divmod",
    "id",
    "object",
    "sorted",
    "bin",
    "enumerate",
    "input",
    "oct",
    "staticmethod",
    "bool",
    "eval",
    "int",
    "open",
    "str",
    "breakpoint",
    "exec",
    "isinstance",
    "ord",
    "sum",
    "bytearray",
    "filter",
    "issubclass",
    "pow",
    "super",
    "bytes",
    "float",
    "iter",
    "print",
    "tuple",
    "callable",
    "format",
    "len",
    "property",
    "type",
    "chr",
    "frozenset",
    "list",
    "range",
    "vars",
    "classmethod",
    "getattr",
    "locals",
    "repr",
    "zip",
    "compile",
    "globals",
    "map",
    "reversed",
    "import",
    "complex",
    "hasattr",
    "max",
    "round",
]

prenotemap = {
    "self": ["me", "i"],
    "questions": [
        "can",
        "for",
        "will",
        "which",
        "whose",
        "shud",
        "who",
        "what",
        "where",
        "when",
        "why",
        "how",
        "should",
        "could",
        "do",
        "is",
        "have",
        "has",
        "does",
        "are",
        "might",
    ],
    "teaching": [
        "student",
        "school",
        "child",
        "kid",
        "teacher",
        "elementary",
        "young",
        "science",
        "chemistry",
        "math",
        "physics",
        "reading",
        "book",
        "english",
        "learn",
        "teach",
        "question",
        "future",
        "grow",
        "progress",
        "report",
        "homework",
        "mrli",
        "match",
        "equal",
        "ms.christy",
        "emc",
        "learning center",
    ],
    "family": [
        "dad",
        "mom",
        "maylynn",
        "cousin",
        "uncle",
        "aunt",
        "family",
        "sister",
        "brother",
        "yeye",
        "grandpa",
        "grandma",
    ],
    "tracker": ["buy", "purchase"],
    "new york": [
        "culture",
        "china",
        "chinese",
        "piety",
        "sunset park",
        "chen hua",
        "alan",
        "ahjie",
        "sunset park",
        "new york",
    ],
    "instructions": ["do", "no", "always", "never", "do", "don't"],
}

pmwb = {
    'wts': 'what\'s',
    "ty4th": "Thanks for the help!",
    "im": "I'm",
    "evthg": "everything",
    "wd": "would",
    "sd": "should",
    "wt": "what",
    "Thx": "Thanks",
    "thgs": "things",
    "thg": "thing",
    "smth": "something",
    "lk": "like",
    "ty": "thanks",
    "thx": "thanks",
    "doesnt": "doesn't",
    "whats": "what's",
    "euivalent": "equivalent",
    "thnk": "think",
    "ive": "I've",
    "b4": "before",
    "tmrw": "tomorrow",
    "mv": "move",
    "hv": "have",
    "ny": "New York",
    "bklyn": "Brooklyn",
    "wa": "Washington",
    "i": "I",
    "its": "it's",
    "itz": "its",
    "r": "are",
    "theyre": "they're",
    "hasnt": "hasn't",
    "u": "you",
    "wud": "would",
    "youre": "you're",
    "arent": "aren't",
    "wudnt": "wouldn't",
    "shud": "should",
    "shudnt": "shouldn't",
    "becky": "Becky",
    "maylynn": "Maylynn",
    "obs": "observation",
    "obss": "observations",
    "exp": "experience",
    "exps": "experiences",
    "reg": "regular",
    "eo": "everyone",
    "td": "today",
    "tm": "tomorrow",
    "prep": "prepare",
    "cud": "could",
    "cudnt": "couldn't",
    "gm": "Good morning",
    "prbly": "probably",
    "dont": "don't",
    "wont": "won't",
    "dis": "this",
    "gud": "good",
    "ne": "any",
    "shudnt": "shouldn't",
    "isnt": "isn't",
    "couldnt": "couldn't",
    "shouldnt": "shouldn't",
    "wouldnt": "wouldn't",
    "cant": "can't",
    "hey": "Hey",
    "ex": "example",
    "exs": "examples",
    "thats": "that's",
}

ignorelist = [
'pass',
'break', 'default', 'Object'
'RegExp', 'JSON', 
'console', 'console.log', 'function', 'def', 
'key', 'keys', 
    "fs",
    "round",
    "exec",
    "stderr",
    "stdout",
    "parserHandler",
    "recursiveRunner",
    "runner",
    "format",
    "catch",
    "raise",
    "try",
    "except",
    "super",
    "decode",
    "encode",
    "uri",
    "recursive",
    "escape",
    "callable",
    "chunk",
    "data",
    "fontFamily",
    "fontSize",
    "sortkey" "seen",
    "capture",
    "bool",
    "extra",
    "left",
    "top",
    "bottom",
    "right",
    "section",
    "isinstance",
    "instanceof",
    "enumerate",
    "longest",
    "array",
    "dir",
    "byte",
    "bytes",
    "int",
    "max",
    "min",
    "files",
    "str",
    "set",
    "continue",
    "int",
    "char",
    "config",
    "Config",
    "return",
    "resolve",
    "reject",
    "res",
    "rej",
    "css",
    "html",
    "python",
    "print",
    "require",
    "trim",
    "strip",
    "tags",
    "Error",
    "tag",
    "title",
    "option",
    "options",
    "opts",
    "acc",
    "before",
    "after",
    "filter",
    "names",
    "params",
    "param",
    "count",
    "isNaN",
    "objects",
    "location",
    "spaces",
    "arr",
    "string",
    "arg",
    "args",
    "placeholder",
    "error",
    "value",
    "line",
    "sentence",
    "file",
    "regex",
    "ReferenceError",
    "SyntaxError",
    "ValueError",
    "child",
    "parent",
    "grandchild",
    "content",
    "output",
    "input",
    "start",
    "end",
    "Function",
    "delimiter",
    "range",
    "object",
    "parseFloat",
    "parseInt",
    "Array",
    "Number",
    "String",
    "isNaN",
    "eval",
    "isFinite",
    "NaN",
    "encodeURI",
    "decodeURI",
    "encodeURIComponent",
    "decodeURIComponent",
    "text",
    "lang",
    "len",
    "length",
    "idx",
    "index",
    "this",
    "self",
    "action",
    "parser",
    "list",
    "dict",
    "map",
    "Map",
    "key",
    "val",
    "name",
    "items",
    "abc",
    "result",
    "product",
    "cat",
    "type",
    "mode",
    "null",
    "true",
    "false",
    "None",
    "setTimeout",
    "setInterval",
    "True",
    "False",
    "store",
    "matches",
    "ignore",
    "match",
    "if",
    "elif",
    "else",
    "while",
    "for",
    "item",
]

vuemethods = [
    "saveToday",
    "loadToday",
    "runpy",
    "displayPython",
    "cancelTranscript",
    "toggleBuffer",
    "st",
    "st2",
    "ipsum",
    "sprawlRange",
    "speakAxios",
    "speakContents",
    "speakTranscript",
    "refresh",
    "addTodo",
    "getTodo",
    "startParse",
    "boofoo",
    "sayhi",
    "setfoo",
    "fooBar",
    "audioSTART",
    "audioEND",
    "speech",
    "setBuffer",
    "openBuffer",
    "setAction",
    "setCursorToEnd",
    "downloadStorage",
    "checkselection",
    "awaiter",
    "delay",
    "clockAction",
    "errorAction",
    "timerAction",
    "saybye",
    "sayhelloComplex",
    "getLibraryItem",
    "removeLibraryItem",
    "copyAndClear",
    "copyClipboard",
    "changed",
    "getCWF",
    "evallib",
    "tolib",
    "readitems",
    "clearitems",
    "setLine",
    "deleteLine",
    "stdout",
    "currentWork",
    "rs",
    "initializeCodeMirror",
    "saveNotes",
    "exitBlock",
    "enterBlock",
    "setCursor",
    "backspace",
    "add",
    "cancelSpeech",
    "sv",
    "clearSnippet",
    "createSnippet",
    "useSnippet",
    "toggleComment",
    "debugAll",
    "accumulateChunk",
    "debugSection",
    "debugAction",
    "gracc",
    "lineSprawl",
    "textSprawl",
    "debugDatum",
    "gr",
    "debugcode",
    "FIXCODE",
    "ja",
    "setDatum",
    "actionHandler",
    "delayer",
    "runlogs",
    "setget",
    "evalcode",
    "evaluate",
    "fastCheck",
    "checkprettier",
    "clear",
    "announce",
    "speakAction",
    "resetcursor",
    "sixblock",
    "sevenblock",
    "rr",
    "ch",
    "ln",
    "addText",
    "replaceLine2",
    "replaceLine",
    "getText",
    "gv",
    "getCursor",
    "parsenew",
    "um",
    "responder",
    "GETITEMS",
    "vdownload",
    "downloadAction",
    "getLine",
    "rangeObject",
    "saveBuffer",
    "saveOnExit",
    "computedVersion",
    "computedPhrase",
    "libraryStatus",
    "computedLibrary",
    "computedString",
    "ctestobj",
    "styleObject",
    "computedDatumToObject",
    "datum",
]

htmlEntities = {
    "&quot;": '"',
    "&#x22;": '"',
    "&amp;": "&",
    "&#x26;": "&",
    "&apos;": "'",
    "&#x27;": "'",
    "&lt;": "<",
    "&#x3c;": "<",
    "&gt;": ">",
    "&#x3e;": ">",
    "&nbsp;": " ",
    "&#xa0;": " ",
    "&iexcl;": "\u00a1",
    "&#xa1;": "\u00a1",
    "&cent;": "\u00a2",
    "&#xa2;": "\u00a2",
    "&pound;": "\u00a3",
    "&#xa3;": "\u00a3",
    "&curren;": "\u00a4",
    "&#xa4;": "\u00a4",
    "&yen;": "\u00a5",
    "&#xa5;": "\u00a5",
    "&brvbar;": "\u00a6",
    "&#xa6;": "\u00a6",
    "&sect;": "\u00a7",
    "&#xa7;": "\u00a7",
    "&uml;": "\u00a8",
    "&#xa8;": "\u00a8",
    "&copy;": "\u00a9",
    "&#xa9;": "\u00a9",
    "&laquo;": "\u00ab",
    "&#xab;": "\u00ab",
    "&not;": "\u00ac",
    "&#xac;": "\u00ac",
    "&shy;": "\u00ad",
    "&#xad;": "\u00ad",
    "&reg;": "\u00ae",
    "&#xae;": "\u00ae",
    "&macr;": "\u00af",
    "&#xaf;": "\u00af",
    "&deg;": "\u00b0",
    "&#xb0;": "\u00b0",
    "&plusmn;": "\u00b1",
    "&#xb1;": "\u00b1",
    "&acute;": "\u00b4",
    "&#xb4;": "\u00b4",
    "&para;": "\u00b6",
    "&#xb6;": "\u00b6",
    "&middot;": "\u00b7",
    "&#xb7;": "\u00b7",
    "&cedil;": "\u00b8",
    "&#xb8;": "\u00b8",
    "&raquo;": "\u00bb",
    "&#xbb;": "\u00bb",
    "&iquest;": "\u00bf",
    "&#xbf;": "\u00bf",
    "&times;": "\u00d7",
    "&#xd7;": "\u00d7",
    "&divide;": "\u00f7",
    "&#xf7;": "\u00f7",
    "&tilde;": "\u02dc",
    "&#x2dc;": "\u02dc",
    "&ensp;": "\u2002",
    "&#x2002;": "\u2002",
    "&emsp;": "\u2003",
    "&#x2003;": "\u2003",
    "&thinsp;": "\u2009",
    "&#x2009;": "\u2009",
    "&zwnj;": "\u200c",
    "&#x200c;": "\u200c",
    "&zwj;": "\u200d",
    "&#x200d;": "\u200d",
    "&lrm;": "\u200e",
    "&#x200e;": "\u200e",
    "&rlm;": "\u200f",
    "&#x200f;": "\u200f",
    "&ndash;": "\u2013",
    "&#x2013;": "\u2013",
    "&mdash;": "\u2014",
    "&#x2014;": "\u2014",
    "&lsquo;": "\u2018",
    "&#x2018;": "\u2018",
    "&rsquo;": "\u2019",
    "&#x2019;": "\u2019",
    "&sbquo;": "\u201a",
    "&#x201a;": "\u201a",
    "&ldquo;": "\u201c",
    "&#x201c;": "\u201c",
    "&rdquo;": "\u201d",
    "&#x201d;": "\u201d",
    "&bdquo;": "\u201e",
    "&#x201e;": "\u201e",
    "&dagger;": "\u2020",
    "&#x2020;": "\u2020",
    "&Dagger;": "\u2021",
    "&#x2021;": "\u2021",
    "&bull;": "\u2022",
    "&#x2022;": "\u2022",
    "&hellip;": "\u2026",
    "&#x2026;": "\u2026",
    "&permil;": "\u2030",
    "&#x2030;": "\u2030",
    "&prime;": "\u2032",
    "&#x2032;": "\u2032",
    "&Prime;": "\u2033",
    "&#x2033;": "\u2033",
    "&lsaquo;": "\u2039",
    "&#x2039;": "\u2039",
    "&rsaquo;": "\u203a",
    "&#x203a;": "\u203a",
    "&oline;": "\u203e",
    "&#x203e;": "\u203e",
    "&frasl;": "\u2044",
    "&#x2044;": "\u2044",
    "&euro;": "\u20ac",
    "&#x20ac;": "\u20ac",
    "&weierp;": "\u2118",
    "&#x2118;": "\u2118",
    "&trade;": "\u2122",
    "&#x2122;": "\u2122",
    "&larr;": "\u2190",
    "&#x2190;": "\u2190",
    "&uarr;": "\u2191",
    "&#x2191;": "\u2191",
    "&rarr;": "\u2192",
    "&#x2192;": "\u2192",
    "&darr;": "\u2193",
    "&#x2193;": "\u2193",
    "&harr;": "\u2194",
    "&#x2194;": "\u2194",
    "&crarr;": "\u21b5",
    "&#x21b5;": "\u21b5",
    "&lArr;": "\u21d0",
    "&#x21d0;": "\u21d0",
    "&uArr;": "\u21d1",
    "&#x21d1;": "\u21d1",
    "&rArr;": "\u21d2",
    "&#x21d2;": "\u21d2",
    "&dArr;": "\u21d3",
    "&#x21d3;": "\u21d3",
    "&hArr;": "\u21d4",
    "&#x21d4;": "\u21d4",
    "&forall;": "\u2200",
    "&#x2200;": "\u2200",
    "&part;": "\u2202",
    "&#x2202;": "\u2202",
    "&exist;": "\u2203",
    "&#x2203;": "\u2203",
    "&empty;": "\u2205",
    "&#x2205;": "\u2205",
    "&nabla;": "\u2207",
    "&#x2207;": "\u2207",
    "&isin;": "\u2208",
    "&#x2208;": "\u2208",
    "&notin;": "\u2209",
    "&#x2209;": "\u2209",
    "&ni;": "\u220b",
    "&#x220b;": "\u220b",
    "&prod;": "\u220f",
    "&#x220f;": "\u220f",
    "&sum;": "\u2211",
    "&#x2211;": "\u2211",
    "&minus;": "\u2212",
    "&#x2212;": "\u2212",
    "&lowast;": "\u2217",
    "&#x2217;": "\u2217",
    "&radic;": "\u221a",
    "&#x221a;": "\u221a",
    "&prop;": "\u221d",
    "&#x221d;": "\u221d",
    "&infin;": "\u221e",
    "&#x221e;": "\u221e",
    "&ang;": "\u2220",
    "&#x2220;": "\u2220",
    "&and;": "\u2227",
    "&#x2227;": "\u2227",
    "&or;": "\u2228",
    "&#x2228;": "\u2228",
    "&cap;": "\u2229",
    "&#x2229;": "\u2229",
    "&cup;": "\u222a",
    "&#x222a;": "\u222a",
    "&int;": "\u222b",
    "&#x222b;": "\u222b",
    "&there4;": "\u2234",
    "&#x2234;": "\u2234",
    "&sim;": "\u223c",
    "&#x223c;": "\u223c",
    "&cong;": "\u2245",
    "&#x2245;": "\u2245",
    "&asymp;": "\u2248",
    "&#x2248;": "\u2248",
    "&ne;": "\u2260",
    "&#x2260;": "\u2260",
    "&equiv;": "\u2261",
    "&#x2261;": "\u2261",
    "&le;": "\u2264",
    "&#x2264;": "\u2264",
    "&ge;": "\u2265",
    "&#x2265;": "\u2265",
    "&sub;": "\u2282",
    "&#x2282;": "\u2282",
    "&sup;": "\u2283",
    "&#x2283;": "\u2283",
    "&nsub;": "\u2284",
    "&#x2284;": "\u2284",
    "&sube;": "\u2286",
    "&#x2286;": "\u2286",
    "&supe;": "\u2287",
    "&#x2287;": "\u2287",
    "&oplus;": "\u2295",
    "&#x2295;": "\u2295",
    "&otimes;": "\u2297",
    "&#x2297;": "\u2297",
    "&perp;": "\u22a5",
    "&#x22a5;": "\u22a5",
    "&sdot;": "\u22c5",
    "&#x22c5;": "\u22c5",
    "&lceil;": "\u2308",
    "&#x2308;": "\u2308",
    "&rceil;": "\u2309",
    "&#x2309;": "\u2309",
    "&lfloor;": "\u230a",
    "&#x230a;": "\u230a",
    "&rfloor;": "\u230b",
    "&#x230b;": "\u230b",
    "&loz;": "\u25ca",
    "&#x25ca;": "\u25ca",
    "&spades;": "\u2660",
    "&#x2660;": "\u2660",
    "&clubs;": "\u2663",
    "&#x2663;": "\u2663",
    "&hearts;": "\u2665",
    "&#x2665;": "\u2665",
    "&diams;": "\u2666",
    "&#x2666;": "\u2666",
    "&lang;": "\u27e8",
    "&#x27e8;": "\u27e8",
    "&rang;": "\u27e9",
    "&#x27e9;": "\u27e9",
}

jspresetsnippets = {}
pypresetsnippets = {
    "printer": "Printer('hi')",
    "main": "main()",
}
jsimportdictadv = {}
jsimportdict = {}

def cleanerFactory(regex):
    return lambda s: re.sub(regex, '', s.strip(), flags=re.M)
jspymap = {
    "history": {
        "comment": '"',
        "filename": '~/.bash_history',
        "file": '~/.bash_history',
        "parser": cleanerFactory('^(?!sudo|pip|npm|npx).*\n*'),
        'remove': True,
    },


    "vim": {
        "comment": '"',
        "filename": '~/.vimrc',
        "file": '~/.vimrc',
        'remove': False,
    },

    "bash": {
        "comment": '#',
        "filename": '~/.bash_aliases',
        "file": '~/.bash_aliases',
        'remove': False,
    },
    "js": {

        'lang': 'js',
        'unsafe': ['prettier', 'fs', 'localstorage', 'fetch', 'path'],
        "libfile": 'utils.js',
        "scrapRE": '^// *(\w+\(.*)|^(?:let |const )? (\w+) ?=\s*`([\w\W]+?)`',
        "sampleanswer": "howdy",
        "sampletest": "console.log('howdy')",
        "test": JS_TEST,
        "answer": JS_ANSWER,
        "runtime": "node",
        "cwf": ["index1.html", "methods.js"],
        "files": ['utils.js', 'methods.js'],
        "preset-snippets": jspresetsnippets,
        "advanced-imports": jsimportdictadv,
        "command": "node",
        "importdict": jsimportdict,
        "imports": pyimportdict,
        "cleanerRE": jsCleanerRE,
        "references": ["methods.js", "index.html"],
        "s +=": "let s = ''",
        "function": "function ",
        "add": "new Storage()",
        "append": "[]",
        "push": "[]",
        "[": "{}",
        "comment": "//",
        "log": "console.log",
        "const": "const ",
    },
    "py": {
        'lang': 'py',
        'unsafe': ['inspect', 'praw', 'sys', 'subprocess', 'webbrowser', 'gzip', 'socket', 'requests', 'fpdf', 'StringIO', 'FPDF', 'pprint', 'contextmanager', 'unicodedata', 'fbchat'],
        "libfile": 'utils.py',
        "scrapRE": '^# *(\w+\(.*)|^(\w+) ?=\s*\'\'\'([\w\W]+?)\'\'\'',
        "sampleanswer": "howdy",
        "sampletest": "print('howdy')",
        "test": PY_TEST,
        "answer": PY_ANSWER,
        "runtime": "node",
        "cwf": ["ec.py"],
        "files": ['utils.py', 'archive3.py'],
        "importdict": pyimportdict,
        "preset-snippets": pypresetsnippets,
        "advanced-imports": pyimportdictadv,
        "imports": pyimportdict,
        "command": "python3",
        "cleanerRE": pyCleanerRE,
        "references": [],
        "const": "",
        "log": "print",
        "s +=": "s = ''",
        "function": "def ",
        "add": "Storage()",
        "append": "[]",
        "push": "[]",
        "[": "{}",
        "comment": "#",
    },
}


def ph(s):
    return s


def remove(f):
    os.remove(f)





def isOdd(i):
    return i % 2 == 1

def isEven(i):
    return i % 2 == 0


def updir(dir):
    root = pathup(dir)


def isEmpty(x):
    if isString(x) and not x.trim():
        return True
    if isArray(x) or isObject(x):
        return not x
    if isFunction(x):
        return True 
    return True

def isFunction(x):
    return callable(x)


def createExpression(code):
    return ""


def isString(x):
    return type(x) == str


def isNumber(x):
    if isString(x):
        return test("^\d+$", x)
    return type(x) == int


def size(f):
    return os.path.getsize(f)


def isArray(x):
    return type(x) == list or type(x) == tuple


def isObject(x):
    return type(x) == dict


def isTuple(x):
    return type(x) is tuple


def mdate(f, mode = None):
    if mode == str:
        return datestamp(os.stat(f).st_mtime)
    return os.stat(f).st_mtime


def isHtml(s):
    return s.endswith(".html")


def isdir(f):  # d
    return os.path.isdir(f)


def isClass(x):
    return isinstance(x, type)


def setify(items):
    if not items:
        return []
    if not isString(items[0]):
        return items
    return list(set(items))


def basename(f):
    return os.path.basename(f)


def createAnnouncement(*items):
    getCaller()


def isAdvanced(x):
    return not isPrimitive(x)


def isAllCaps(s):
    return test("^[A-Z]+$", s)


def isfile(f):  # d
    return os.path.isfile(f)


def getError(e):
    return search(".*", str(e))


def toClosingTag(el):
    return "<" + el + "/>"


def getLastWord(s):
    return search("\w+$", s)


def isSmallFile(file):
    return size(file) < 20


def isCapitalized(s):
    return test("[A-Z]", s)


def capitalize(s):
    return s[0].upper() + s[1:]


def isClassString(s):
    return test("^class", s)


def toRoot(dir):
    return expandUser("~/" + dir)


def getInstance(x):
    return x.__class__.__name__


def isObjectString(s):
    return test("[\]}]$", s)


def getClassName(x):
    try:
        return x().__class__.__name__
    except:
        return None


def inches(inches):
    k = 15
    return k * inches


def stringify(x):
    return x if isPrimitive(x) else json.dumps(x) 


def arrayify(x):
    return x if isArray(x) else [x]


def visible(s):
    return drep(s, {
        '\n': '\\\n',
        ' ': '*',
    })
    return replace("\n", "\\\\n", s)


def reply():
    reddit = Reddit()
    reddit.RESPOND()

def ask(x):
    questions = []
    items = textgetter(x).split('updel')
    text = items[-1].strip() if items[-1].strip() else items[-2].strip()
    regex = '\n+(?=' + Regex(subredditmap, extend = '@') + '\\b)'
    items = re.split(regex, text)
    for item in items:
        a,b,c = search('^@?(\w+) (.+)\n*([\w\W]*)', item)
        a = subredditmap.get(a, a)
        questions.append({'subreddit': a, 'title': b, 'body': c})

    reddit = Reddit()
    #  reddit.upvote()
    reddit.RESPOND()
    reddit.ask(questions)
    print(  'finished everything'  )


def getLocalFunction(name):
    return locals()[name]


def lenGreaterThan(x):
    return lambda s: len(s) > x


def regexjoin(*items):  # d
    return "|".join(items)


def isArrayLike(x):
    return isArray(x) or isTuple(x)


def tally(x, text):
    return len(re.findall(x, text))


def isVeryLargeFile(file):
    return size(file) > 10000


def reversed(x):
    if getType(x) == 'enumerate':
        return reversed(list(x))
    if isArrayLike(x): 
        x = list(x)
        x.reverse()
        return x
    if isObject(x): return {v: k for k, v in x.items()}


def colonify(*args):
    return args[0] + ": " + args[1]


def mapped(list, fn):
    return [fn(el) for el in list]


def isPrimitive(s):
    return isString(s) or isNumber(s)


def textgetter(x):
    return read(x, "text").strip() if isFile(x) else x.strip()


def lineCount(s):
    return len(re.findall("\n", s)) + 1


def shared(a, b):
    return list(set(a).intersection(b))


def getSpaces(s):
    return re.search("^ *", s).group(0)


def join(x, delimiter="\n"):
    return delimiter.join(x)


def hasInternalVariable(s):
    return test(": ?[a-z]", s)


def isImportString(s):
    return test("^from|^import|^const.*?require\(", s)


def isConstant(s):
    return test("^(?:const )?\w+ =", s)


def isBigVariable(s):
    return " + " in s and len(s) > 20


def isCodeFile(s):
    return test(Regex(codefileextensions) + '$', s)
def isCodeBlock(s):
    return test(codeBlockRE, s.strip())


def compareAnswers(a, b):
    return a.strip() == b.strip()


def printdir(dir="./"):
    print(os.listdir(dir))  # return


def sentenceCount(s):
    return tally("(?:\.|\?|'|\") ", s)


def isFunctionString(s):
    return test("^function|^def", s)


def dedent(s):
    return replace("^    ", "", s, flags=re.M)


def difference(a, b=[]):
    return list(set(a).difference(b))


def stringFormat(k, v):
    return formatter(k, v, "", "  ", 0)


def numbering(idx, el):
    return str(idx + 1) + indent(el, 4)


def isDir(f):
    f = expandUser(f)
    return os.path.isdir(f)


def removeExtension(file):
    return re.sub("\.\w+$", "", file)


def test(r, s, flags=0):
    return bool(re.search(r, s, flags))


def clearFile(file):
    with open(file, "w") as f:
        pass


def baseUrl(link):
    return re.match(".*?\.\w+", link).group(0)


def getDirectory(rootFile):
    return abspath(dirname(rootFile))


def getCaller():
    print(sys._getframe().f_back.f_code.co_name)


def renameFunctions(text, dict):
    return drep(text, dict, "vb")


def smallify(items):
    return items[0] if len(items) == 1 else items


def browse(url):
    url = prepareUrl(url)
    webbrowser.open(url)


def getLastLine(s):
    return re.search(".+$", s.strip()).group(0)


def dirname(f):
    return os.path.dirname(abspath(f))  # Identical


def PRETTIER(file):
    lang = getLangFromFile(file)
    if lang != 'py':
        commander("english.js", file)

def prettier(file, outpath=None):
    commander("english.js", file)


def getFunctionVariations(file=__name__):
    lib = locals().items()


def getStorage(key):
    obj = read(COMPUTER_STORAGE_KEY)
    return obj[key]


def getRoot():
    return os.path.expanduser('~/')


def rename(file, name):
    print("renaming " + file + " to " + name)


def isVariableString(s):
    return test("^(?:const |let |var )?\w+ ?=", s)


def hasImport(s):
    return test(Regex(nativePythonImports) + "\.", s)


def createVariable(name, val, lang="js"):
    return jspymap[lang]["const"] + name + " = " + val


def getType(x):
    return type(x).__name__


def deleteFile(file):
    print("deleting: " + file)
    os.remove(file)


def removeFile(file):
    print("moving " + file + " to ~/TRASH")
    move(file, "~/TRASH")


def getBinding(s):
    product = search("(\w+) ?=", s)
    return product


def expandUser(file):
    file = os.path.expanduser(file)
    return file


def isTestingFile(file):
    return basename(file).startswith("testfile")


def createScript(name):
    return '<script src="' + name + '"></script>'


def renameFile(file, name):
    os.rename(file, name)
    #  os.rename(file, dirname(file) + "/" + name)


def hasTopLevelForBlock(s):
    return tally("\n    for \w+ in \w+", s) == 1


def readdir(*paths):
    dir = os.path.join(*paths)
    return getFiles(dir)


def isCodeBlockString(s):
    return isFunctionString(s) or isClassString(s)


def isImage(f):
    return test(Regex(["png", "jpg", "ico", "svg"]) + "$", f)


def prepareObject(obj):
    return list(obj.keys()) if isObject(obj) else obj


def toLetter(n):
    product = alphabet[int(n) - 1]
    return product.upper()


def determineFlag(regex):
    return 0 if test(testStarterRE, regex) else re.M


def getFirstLine(s):
    return re.search("^.+", s).group(0)


def looksLikeCodeFile(s):
    return test("\." + Regex(fileExtensions) + "$", s)


def removeHtmlTags(s):
    regex = "</?[\w!].*?>"
    return re.sub(regex, "", s)



def arrgetter(x, mode):
    if getType(x) == mode:
        return [x]
    return x

def filtered(items, *keys):
    if type(items) != list:
        items = list(items)

    if len(keys) > 1:
        return [item for item in items if every(keys, lambda key: key(item))]
    if len(keys) == 0:
        key = notNone
    elif len(keys) == 1:
        key = keys[0]

    return list(filter(key, items))


def looksLikeFile(x):
    if x.startswith("/") or len(x) < 10:
        return True


def rescape(s):
    return replace("[\[*+?()|^$]", lambda x: "\\" + x.group(0), s)


def isTextFile(filename):
    return not test("(?:svg|ico|png|jpg|pdf)$", filename)


def getFirstBlock(s):
    return re.search("^[\w\W]*?(?=\n\n)", s.strip()).group(0)


def hasExtensions(file, *args):
    ext = getExtension(file)
    return ext in args


def remover(s):
    regex = Regex(["\ufeff", "\d+"])
    return re.sub(regex, "", s)


def scandir(dir):  # d
    return [file_info(dir, file) for file in os.listdir(dir)]


def getMonth():
    n = datetime.datetime.utcnow().month
    return months[n].lower()


def isDynamicObjectString(s):
    return isObjectString(s) and hasInternalVariable(s)


def getLastItem(s, delimiter):
    return search("(?<=" + delimiter + ")" + "\w+$", s)


def getRedditIDs(list):
    return [search("comments/(\w{6})/", item) for item in list]


def isStaticObjectString(s):
    return isObjectString(s) and not hasInternalVariable(s)


def getCodeChunks(s):
    return re.split("(?:\n *)+(?=^(?:\w|#|//))", s.strip(), flags=re.M)


def getFirstElement(s):
    if test('prototype', s): return 'prototype'
    if test('^\w+\(\) {', s): return 'bash-function'
    elif test('^\w+\(\) {', s): return 'bash-function'
    return search('^[^\s\w]+|^\w+', s)

def getChunks(s, extraEndingDelimiters = ['"', '\'', ':'], tagged = False):
    product = re.split("(?:\n *)+(?=^[^\s}/])", s.strip(), flags=re.M)

    #  product = re.split("(?:\n *)+(?=^(?:\w|#|//|" + '|'.join(extraEndingDelimiters) + "))", s.strip(), flags=re.M)

    tagged = True
    if tagged:
        product = [(getFirstElement(item), item) for item in product]
    tl(pprint(product))
    return product

def actiondir(dir, action, ext):
    for file in getFiles(dir, ext):
        action(file)


def getter(input, cat):  # d
    if cat == "extension":
        return get_extension(input)


def createJSON(name, val={}, string=True):
    if not string:
        write(name + '.json' + val)
        return

    if isFile(name):
        product = read(name, 'text') 
    else:
        product = stringify(val)

    write(name + ".js", createVariable(name, product))


def replaceLastLine(s, replacement):
    return replace(".+$", lambdaReplace(replacement), s)


def replaceFirstLine(s, replacement):
    return replace("^.+\n", lambdaReplace(replacement), s)


def isFile(f):
    return isString(f) and len(f) < 100 and os.path.isfile(os.path.expanduser(f))


def replaced(regex, dict, s):
    return re.sub(regex, lambda x: dict[x.group(0)], s, flags=re.M)


def redditCommentGuard(s):
    if sentenceCount(s.body) < 3:
        return False
    return True


def div2(el, content="", attrs=""):
    return "<" + el + attrs + ">" + content + "</" + el + ">"


def finder(items, parser):
    for item in items:
        if parser(item):
            return item


def captureBetween(start, end, s, inclusive=True):
    if inclusive:
        regex = start + "[\w\W]+?" + end
    else:
        regex = start + '.*\n' + '([\w\W]+?)' + '\n.*?' + end
    return search(regex, s)


def xxreplace(match, replacement, text, flags=0):
    return re.sub(match, replacement, text, flags)


def abspath(f):
    if f.startswith("~"):
        return expandUser(f)
    return os.path.abspath(f)


def toDatestampName(file):
    return basename(file) + str(datestamp(mdate(file), "month-day-year"))


def arrayChunks(list, size):
    for i in range(0, len(list), size):
        yield list[i : i + size]


def webParser(s, mode="jsfiddle"):
    regex = createRE(mode)
    return re.search(regex, s).groups()


def parseJSON(x):
    if isString(x) and looksLikeObject(x):
        return json.loads(x)
    return x


def getFirstWord(s):
    try:
        return re.search("^\w+", s).group(0)
    except:
        return ""


def searched(regex, s):
    try:
        return re.search(regex, s).start()
    except:
        return 0


def includes(regex, s):
    if type(s) == str:
        return bool(re.search(regex, s, flags=re.IGNORECASE))


def numericalSort(x):
    if isObject(x):
        return sorted(x.items(), reverse=True, key=lambda x: x[1])


def get_extension(file):
    match = re.search("\.(\w+)$", file)
    return match.group(1) if match else None


def fullDateStamp():
    strife = "%A, %m-%d-%Y, %I:%M %p"
    return datetime.datetime.now().strftime(strife)


def getExtension(s):
    try:
        return re.search("(?<=\.)\w+$", s).group(0).lower()
    except:
        return ""


def smartPrepareRegex(s):
    if test("<.*?>\w+</.*?>", s):
        return replace("(?<=>)\w+(?=<)", "(.*?)", s)


def listdir(dir):
    return os.listdir(expandUser(dir))


def backup():
    files = [
        "z",
        "index.html",
        "utils.py",
        "methods.js",
    ]
    destination = "~/BACKUP"
    copyfiles(files, destination)
    Github.backup(destination)


def captureCode(s):
    regex = cdfm + "\w+\(\)(?::| {)\s*(?:return )?(.*?)\s*}?\s*$"
    return search(regex, s)


def getDuplicateCodeItems(s):
    items = getFunctionNames(s)
    tally = Tally(items)
    return tally.get(">1")


def getString(s, obj):
    if obj["from"]:
        return search(rescape(obj["from"]) + "(.*)", s, flags=re.DOTALL)


def getFunctionString(fn):
    return inspect.getsource(fn) if isFunction(fn) else fn


class Bins:
    def __init__(self):
        self.list = []

    def add(self, index, value):
        if len(self.list) != index - 1:
            self.list.append([])
        self.list[index].append(value)

    def get(self, index):
        return self.list[index]

    def iterate(self, fn):
        self.list = [fn(item) for item in self.list]
        return self

    def reverse(self):
        self.list.reverse()
        return self

    def slice(self, a, b=None):
        if not b:
            self.list = self.list[a:]
        else:
            self.list[a:b]
        return self


def looksLikeConstant(x):
    return test("^(?:const )?\w+ =", x)


def looksLikeFunction(x):
    return test("^(?:function|def) ", x)


def looksLikeClass(x):
    return test("^class ", x)


def arrangementSorter(x):
    if looksLikeConstant(x):
        return 1
    if looksLikeFunction(x):
        return 2
    if looksLikeClass(x):
        return 3


def superDuperGatheriDEPRecated(file, targets):

    query = valgetter(keywords)
    regex = (
        "(?<=^|\n)(?:async|function|def|class)"
        + " (?:[\w\W]*?)(?!\n\w)"
        + Regex(keywords)
        + "\\b[\w\W]*?(?=$|\n\w)"
    )

    if False:
        return
    else:
        for k, v in lib.items():
            if test(regex, k, re.I):
                names.append(k)
            elif test(regex, k + " " + v, flags=flags) and not looksLikeObject(v):
                names.append(k)

    print("the names being targeted are ", names)

    #  text = read(file)
    lib = createCodeLibrary(file)
    lang = getLangFromFile(file)
    storage = AdvancedStorage()

    if fuzzy:
        for k, v in lib.items():
            for target in targets:
                if isCodeMatch(k, v, target):
                    storage.add(target, k)

        for k, v in storage.entries():
            print("hi")
    else:
        for target in targets:
            mainItem, helperItems, seen = recursiveGetDependencies(target, lib, seen)
            storage.set(target, mainItem)
            storage.extend("helpers", helperItems)

    for k, v in storage.entries():
        if k == "helpers":
            createHelperFile(k, v)
        else:
            createMainFile(k, v)



class Counter:
    def __init__(self):
        self.count = 0

    def next(self, val):
        self.count += 1
        print(self.count, val)

def superGather(file, target, production="preview"):
    lang = getLangFromFile(file)
    lib = createCodeLibrary(file)
    items, seen = recursiveGetDependencies(target, lib, lang=lang)
    name = toFileName(file, lang)
    helperFile = createHelperFile(name, helpers, None)
    createMainFile(name, main, None, helperFile)

def getRecursiveDependenciesFromText(text, lib, ignoreItems = []):
    storage = []
    seen = []
    dne = []
    implied = getImplied(textgetter(text))

    def runner(name):
        if name in seen:
            return
        seen.append(name)
        text = lib.get(name)
        if text:
            if name not in ignoreItems:
                storage.append(text)
            children = getImplied(text)
            for child in children:
                runner(child)
        elif name in ignorelist:
            return 
        else:
            dne.append(name)

    for item in implied:
        runner(item)

    return storage, implied, dne

def replaceFactory(regex, replacement, flags=0):
    return lambda s: re.sub(regex, replacement, s, flags=flags)

def deleteFactory(regex, flags=0, count=0):
    return lambda s: re.sub(regex, '', s, count=count, flags=flags)

removeImportsRE = '^\s*(?:const {.*|(?:(?:from|import).*\n)+'
removeImportsRE = '^\s*const {.+'
removeImports = deleteFactory(removeImportsRE, count=1, flags=0)

def createUtilsForFile(file, items = [], TESTING = False):
    backupFile(file)
    utilfile = appendName(file, 'UTILS')
    queries = ['importdict', 'libfile', 'lang']
    importdict, libfile, lang = jspygetter(file, *queries)

    if TESTING:
        libfile = file

    lib = createCodeLibrary(file)

    if items:
        #  items = [lib.get(item) for item in items]
        #  targetText = toString(items)
        targetText = toString([lib.get(item) for item in items if lib.get(item)])
    else:
        targetText = removeImports(read(file))

    storage, implied, dne = getRecursiveDependenciesFromText(targetText, lib, items)
    implied = filtered(implied, lambda x: x not in dne + items)

    together = True
    utilproduct = ''
    #  pprint(storage)
    #  print(  targetText  )
    #  return

    if lang == 'js':
        if together:
            targetText += snsn + buildString(storage)
        else:
            importString = writeModuleImports(utilfile, implied)
            utilproduct = toString(storage) + writeModuleExports(implied)
            targetText = format(importString, organizeClassBody(targetText))

        if TESTING:
            if targetText.strip():
                print(targetText)
        else:
                if utilproduct:
                    write(utilfile, utilproduct, dir = 'PRODUCTION')
                if targetText:
                    file = write(file, targetText, dir = 'PRODUCTION')
                    openFile(file)

    elif lang == 'py':
        return
        utilproduct = toString(storage)
        write(utilfile, utilproduct)
        prepend(file, writeModuleImports(seen, utilfile))
        helperFile = createHelperFile(name, helpers, None)
        createMainFile(name, main, None, helperFile)

def appendName(file, content):
    return file.replace('.', content + '.')

def recursiveGetDependencies(input, lib=None, seen=[], lang="py"):
    importdict = jspymap[lang]["importdict"]
    storage = []

    counter = Counter()

    def runner(name, count):
        if name in seen:
            return
        counter.next(name)
        seen.append(name)

        text = getFunctionString(lib.get(name))
        if not text:
            return
        else:
            storage.append(text)

        children = getImplied(text)
        count += 1
        for i, child in enumerate(children):
            runner(child, count)

    runner(input, 0)
    return storage[0], storage[1:], seen


def getDependencies(input, names=None):
    if isFunction(input):
        s = getFunctionString(input)
        if not names:
            names = getModuleFunctions()
    else:
        s = textgetter(input)

    return getImplied(s)

    regex = Regex(names, "wb")
    return re.findall(regex, s, flags=re.M)


def toStartingTag(el, attrs=""):
    if attrs:
        attrs = ' class="' + attrs
    return "<" + el + attrs + ">"


def get_name(file):  # d
    match = re.search("(\w+)(?:\.\w+)?$", file)
    return match.group(1) if match else None


def reduced3(acc, items, parser):
    for i, item in enumerate(items):
        acc = parser(acc, item)
    return acc


def lambdaReplace2(replacement):
    return lambda *args: replacement if isString(replacement) else replacement(*args)


def lambdaReplace(replacement):
    return lambda x: replacement if isString(replacement) else replacement(x.group(0))


def getRegexes(s):
    startingSpaces = "+"
    return re.findall("^ " + startingSpaces + getRegexesRE, s, flags=re.M)


def getSmallishFiles(dir, ext):
    return getFiles(dir, ext, public=True, short=True, parser=lambda x: size(x) < 3000)


def raiser(x):
    if not exists(x):
        raise Exception("no value present raising error from raiser")
    return x


def dynamicOutpath(*args):
    args = list(args)
    args.remove(removeExtension(basename(__file__)))
    return args[0]


def getFunctionName(s):
    if isFunction(s):
        return s.__name__
    try:
        return re.search(cdfbase + "(\w+)", s).group(1)
    except:
        return None


def replace(regex, replacement, s, flags=0, count=0):
    return re.sub(regex, replacement, s, count=count, flags=flags)


def writejson(file, data):
    with open(file, "w") as f:
        json.dump(data, f, indent=2)
    print("writing json")


def earlyExit():
    answer = input("Initiate early exit?\n")
    if answer == "":
        raise Exception("Early Exit")


def Black(s):
    import black
    mode = black.Mode(target_versions={black.TargetVersion.PY36})
    return black.format_str(s, mode=mode)


def isWithinOneHour(file):
    fileTime = mtime(file)
    currentTime = mtime()
    return abs(currentTime - fileTime) < 2


def testing(parser, *args):
    outargs = [arg.strip() if isString(arg) else arg for arg in args]
    print(parser(*args))


def prevTime():
    now = datetime.datetime.now()
    prev = now - datetime.timedelta(hours=26)
    return prev.timestamp()


def isMorning():
    now = datetime.datetime.now().time()
    return now > datetime.time(23, 00) or now < datetime.time(8, 00)


def inputter(query=""):
    if not query:
        query = "return = continue\nk = keep"
    return input("\n" + query + "\n\n")


def changeExtension(name, ext):
    if "." in name:
        return re.sub("(?<=\.)\w+$", ext, name)
    return name + "." + ext


def getSecondWord(s):
    try:
        return search("^\w+ (\w+)", s)
    except:
        print(s)
        raise Exception("ray")


def mapText(s, parser, delimiter="  "):
    lines = [parser(line) for line in s.split(delimiter)]
    return toString(lines, "\n")


def toPythonJson(s):
    return replace(
        "(^ *)(\w+)(?=:)", lambda x: x.group(1) + parens(x.group(2), "dq"), s, re.M
    )


def toDictionary(items, parser=None, reverse=False):
    if parser:
        store = {}
        for item in items:
            k, v = parser(*item)
            store[k] = v
        return store

    if reverse:
        return {b: a for a, b in items}
    return {a: b for a, b in items}


def getName(item):
    match = re.search(cdf + "(\w+)|^(\w+) =", item)
    return match.group(1) or match.group(2) if match else None


def getMedia():
    store = read("media.json")
    items = store[datestamp()]
    for item in items[0:3]:
        browse(item["url"])


def getRedditInfo(item):

    type = getClassName(item)
    if type == "Submission":
        return item
    pprint(vars(item._reddit))


def FileEdit(file, edits, outpath=""):  # d
    text = read(file)
    result = sreplace(text, edits)
    write(outpath or file, result)


def isFilename(s):
    fileExtensions = ["js", "py", "css", "html", "txt", "pdf"]
    return test("\." + Regex(fileExtensions) + "$", s)


def appendClassMethod(original, val):
    product = replace("}?\s*$", "\n" + indent(val), original, count=1, flags=0)
    return product


def createAsset(val, name="tempasset", standard=True):
    if isArray(val) and isFile(val[0]):
        product = {}
        for item in val:
            product[item] = read(item)

    elif standard:
        product = createVariable(name, stringify(val))

    else:
        product = val

    write(name + ".js", product)

    if name != 'tempasset':
        updateVueFile(INDEX_FILE, name)


def getJavascriptOutput(file):
    return parseJSON(
        search("^{.+", subprocess_cmd("node " + file), flags=re.M | re.DOTALL)
    )


def toLibrary(text):
    regex = cdfstart + query + "\\b.*?(?=\n\w|$)"
    return re.findall(regex, text, re.I | re.DOTALL)
    store = {}


def hasExtension(s):
    return test("\.\w+$", s)
    try:
        return re.search("(?<=\.)\w+$", s).group(0)
    except:
        return ""



wordsWithMinimumLengthRE = '[a-zA-Z]{3,}'
wordsCamelCaseRE = '[a-z]*[A-Z][a-zA-Z]+'
wordsRE = '[a-zA-Z]'

def getWords2(s, mode = ''):
    if mode == '':
        return re.findall(wordsRE, s)

    if mode == 'INTERESTING':
        return setify(re.findall(wordsWithMinimumLengthRE, s))

    if mode == 'MIXED':
        return setify(re.findall(wordsWithMinimumLengthRE, s))

def getWords(s, mode=None, minimumLength = 3, unique=False, extra = ''):
    store = []
    if mode == 'mixed':
        regex = '[a-z]*[A-Z][a-zA-Z]+'
    else:
        regex = "[a-zA-Z" + extra + "]{" + str(minimumLength) + ",}"
    words = re.findall(regex, s)

    if not unique and not mode:
        return words

    for word in words:
        if minimumLength and len(word) < minimumLength:
            continue

        if unique and word in store:
            continue
        store.append(word)

    return store


def removeAccents(s):
    nfkd = unicodedata.normalize("NFKD", s)
    ascii = nfkd.encode("ASCII", "ignore")
    return ascii.decode("utf-8")


def getFiddle(id):
    url = "https://jsfiddle.net/" + id
    text = request(url)
    s = createWebFile(webParser(text, "jsfiddle"))
    return s


def checkpoint(item, requirements):
    for requirement in requirements:
        if not requirement(item):
            return False
    return True


def prepareUrl(s):
    if s.startswith("view-source:"):
        return s[12:]
    if test("^\w(?!ttps)", s):
        return "https://" + s
    return s


def getFunctionNames(s, query=None):
    if isArray(s):
        return [getFunctionName(item) for item in s]

    query = Regex(query, capture=True, fallback='(\w+)')
    return re.findall(cdf + query + "\(", s, flags=re.M)


def getCodeItems(items, yes=[], no=[]):
    store = []
    for item in items:
        check = checkpoint(item, no)
        if not check:
            continue


def logsdf(text="", resetDate="0131"):
    action = write if datestamp() == resetDate else append
    action("~/stdout.log", datestamp("calender") + ": " + text)


def get_error(text):
    matches = Search("line (\d+)[\w\W]*?\n(.*)$", text)
    return {"line": int(matches[0]) - 0, "error": matches[1]} if matches else None


def ospj(a, b):
    a = expandUser(a)
    if b.startswith("/"):
        a = a[:-1] if a.endswith("/") else a
        return a + b
    return os.path.join(a, b)


def run(self, query):
    ids = getRedditIDs(google2(query, domain="reddit"))
    posts = [self.getPostInfo(id) for id in ids]
    updateStorage("reddit", posts)


def srep(s, dict, count=0, flags=0):
    regex = Regex(dict, escape=True)
    parser = lambda x: dict[x.group(0)]
    return re.sub(regex, parser, s, count, flags)


def prepend(filename, value):
    with open(filename, "r+") as f:
        prev = f.read()
        f.seek(0, 0)
        f.write(toString(value).rstrip("\r\n") + "\n\n" + prev)


def getLastChromeBookScreenShot(n=0):
    location = "/mnt/chromeos/MyFiles/Downloads"
    file = getMostRecentFile(location, lambda x: x.endswith("jpg"), n)
    return file


def checkOutput(file):
    lang = getExtension(file)
    command = jspy[lang]["runtime"] + " " + file
    return subprocess.check_output(command, shell=True).decode("utf-8")


def getLatestFile(key = None, parser = None):
    files = os.listdir(os.getcwd())
    n = len(files) - 1
    if not key and not parser:
        return files[n]
    else:
        while True:
            keyStatus = files[n].endswith(key) if key else None
            parserStatus = parser(files[n]) if parser else None
            if key and parser and keyStatus and parserStatus:
                return files[n]
            if key and keyStatus or parser and parserStatus:
                return files[n]

            n -= 1
            if n == 0:
                return None

def getMostRecentFile(key=None, dir=None, n=0):
    files = getFiles3(dir, key, sort=mdate, reverse=True)
    if n == 0:
        return files[0]
    else:
        return files[:n]


def getWord(s, n=1, capture="w"):
    el = ".*? "
    regex = "^" + el * (n - 1) + "(\w+|=)"
    try:
        return re.search(regex, s).group(1)
    except:
        return ""


def hasError(s):
    return test("\\w+error", s, flags=re.I)


def formatError(s, lang):
    if lang == "js":
        error, message = search("^.*\n(.*)[\w\W]+?(\\w+error.*)", s, flags=re.I)
        return "Error: " + error + "\n" + "Message: " + message


def runFile(file, *args):
    lang = getLangFromFile(file)
    if len(file) > 50:
        write("temp", file)
        file = "temp"

    command = jspymap[lang]["command"] + " " + file + " " + " ".join(args)
    testproduct = subprocess_cmd(command)

    print(  'got test product'  )
    if hasError(testproduct):
        print(formatError(testproduct, lang))
        return False
    else:
        print("success at runfile")
        return True


def call(file, *args):
    if file.endswith("js"):
        command = "node " + file + " " + " ".join(args)
    return subprocess.check_output(command, shell=True).decode("utf-8")


def srequest(url, root=None):
    url = prepareUrl(url)
    name = replace('\W', '', url)[-8:]
    print(  name  )
    if isTodayFile(name):
        print(  'returning today file'  )
        return read(name)
    else:
        p = request(url)
        if len(p) < 100:
            raise Exception('ERROR') 
        writer(name, p)
        return p

def request(url):
    url = prepareUrl(url)
    response = requests.get(url, {"user-agent": BROWSER_AGENT})
    product = parseJSON(response.text)
    return product
    return fixhtml(product) if isString(product) else product

def transformDictionary(dict, kt=ph, vt=ph, reverse=False):
    if reverse:
        return {kt(v): vt(k) for k, v in dict.items()}
    return {kt(k): vt(v) for k, v in dict.items()}


def append(file, content, newlines=1, preview=False):
    print(  'appending file', file  )
    if file.endswith("json"):
        appendjson(file, content)
        if preview:
            print(read(file))

    else:
        write(file, toString(content), append=True, newlines=newlines)


def isStudyableCodeFile(s):
    name = basename(s)

    regex = CreateRegex()
    #  regex.end   = ["js", "css", "html", "py", "vue"] # to have....

    regex.end = ["lock", "json", "md"]
    #  regex.start = ["babel", "procfile"]
    regex.has   = ['\.\w+\.', '^[a-zA-Z]+$']
    return not test(regex.value, name, flags=re.I)

    #  regex.has =   ['\.\w+\.']
    #  print(  [regex.value, name])
    #  z = '\.\w+\.'
    #  print(  z == regex.value  )
    #  print(  visible(regex.value  ))
    #  print(  z  )
    #  print(  test(z, 'asdf.adf.adf'  ))

def getCodepens(links):
    if isString(links):
        links = [links]
    store = {}
    for link in links:
        store.update(getCodepen(link))
    appendjson("codepen.json", store)


def get_edit_config(dir):  # d
    filepath = dir + datestamp() + ".json"

    if str(datestamp()) not in filepath:
        print(filepath)
        print(str(datestamp()))
    return filepath


def ssdfreplaxce(text, dict, cat="replacement"):  # d
    regex = "|".join(dict.keys())
    if cat == "insertion":
        regex = "(?<=" + regex + ")"
    return re.sub(regex, parser, text, re.M)


def isValidPython(code):
    try:
        exec(code + "\n" + createExpression(code))
        return True

    except Exception as e:
        product = formatCodeAndError(code, e)
        return product


def getFunction(query, s):
    regex = (
        "(?:(?<=\n)|^)(?:class|const|(?:async )?function|def) "
        + query
        + "\([\w\W]+?(?=\n\w|$)"
    )
    return re.search(regex, s, flags=re.I)


def numbered(s, start = 1, delimiter="", spaces = '    ', mode=None):
    def parser(x):
        nonlocal start
        start += 1
        extraSpaces = ' ' if start < 10 else ''
        return str(start) + delimiter + extraSpaces + x.group(0)

    if mode == 'LIST':
        start += 1
        extraSpaces = ' ' if start < 10 else ''
        spacing = spaces + extraSpaces

        first, rest = split(str(s).splitlines())
        text = str(start) +  delimiter + spacing + first
        for line in rest:
            text += sn + delimiter + spacing + ' ' + line
        return text

    return re.sub("^", parser, s, flags=re.M)


def looksLikePath(s):
    if not isString(s):
        return False
    if len(s) > 40:
        return False
    if isFile(s):
        return False
    if "/" not in s:
        return False
    return True


def frep(s, dict, flags=0):
    for regex, parser in dict.items():
        s = re.sub(regex, parser, s, flags=flags)
    return s

    regex = Regex(dict)
    def parser(x):
        for k, v in dict.items():
            if test(k, x.group(0)):
                return v(x)

    return re.sub(regex, parser, s, flags=re.M)


def drep(s, dict, cat="wb", flags=0, **kwargs):
    regex = Regex(dict, cat, **kwargs)
    parser = lambda x: dict.get(x.group(0)) or dict.get(x.group(0).lower())
    return re.sub(regex, parser, s, flags=flags)


def get_edit_config_chromebook():  # d
    dir = "./downloads"
    filepath = list(sorted(absdir(dir), key=mdate, reverse=True))[0]
    if str(datestamp()) not in filepath:
        return None
    return filepath


def getModuleLibrary(module=locals()):
    store = {}
    for key, value in module.items():
        if callable(value) and value.__module__ == __name__:
            store[key] = getFunctionString(value)
    return store


def getModuleFunctions(module=locals()):
    store = []
    for key, value in module.items():
        if callable(value) and value.__module__ == __name__:
            store.append(key)
    store.sort()
    return store


def getArticleInfo(s):
    authorRE = '<meta name="author" content="(.*?)"'
    titleRE = 'property="og:title" content="(.*?)"'
    title = search(titleRE, s)
    author = search(authorRE, s)
    return title, author


def isPublic(file):
    path = basename(file)
    regex = "__pycache__|^(?:\.)|(?:pyc)$"
    if test(regex, path):
        return False
    return True


def isPublicFile(filepath):
    file = basename(filepath)
    if test("^(?:\.|\$|_)", file):
        return False
    if test("(?:pyc)$", file):
        return False
    if file in LIBRARY:
        return False
    return True


def getVariableNames(s):
    a = "^(?:function|def|class) (\w+)"
    b = "^(?:const ?)(\w+) ="
    store = []
    store.extend(re.findall(a, s, flags=re.M))
    store.extend(re.findall(b, s, flags=re.M))
    return list(set(store))


def getEditItems(testing):
    if testing:
        return getJavascriptOutput("z")
    else:
        filepath = getMostRecentFile(lambda x: x.endswith("jsontest"))
        return read(filepath)


def exists(el, n=0):
    if type(el) == str:
        return el != ""
    if type(el) == list:
        return len(el) > n
    if type(el) == dict:
        return len(el.keys()) > n
    return el != None




def mkdir(dir):
    if not dir:
        return
    if not isDir(dir):
        os.makedirs(expandUser(dir))
        print("created new directory at: " + abspath(dir))


def getNativeDependencies(s, lang=None):
    if not lang:
        lang = getLangFromString(s)
    nativedict = jspymap[lang].get("importdict")
    matches = setify(re.findall(Regex(nativedict, "nativeimport"), s, flags=re.M))
    if not matches:
        return None
    else:
        nativeDeps = [nativedict.get(x) for x in matches]
        nativeDeps.sort(reverse=True, key=len)
        return nativeDeps


def getActiveNames(x, names, mode=""):
    regex = Regex(names, mode)
    count = []
    x = arrayify(x)
    for item in x:
        text = textgetter(item)
        count.extend(re.findall(regex, text))
    tally = Tally(count)
    return tally.get(">0")


def getFunctionBodies(s, query=None, delete=False):
    query = Regex(query) if query else "\w+"
    regex = (
        "(?:(?<=\n)|^)(?:class|const|(?:async )?function|def) "
        + query
        + "\([\w\W]+?(?=\s*?\n\w|$)"
    )

    def parser(x):
        return "", x.group(0)

    return mrep2(s, parser, re.I) if delete else re.findall(regex, s, flags=re.I)


def getFunctions(s, query=None):
    query = Regex(query) if query else "\w+"
    regex = (
        "(?:(?<=\n)|^)(?:class|const|(?:async )?function|def) "
        + query
        + "\([\w\W]+?(?=\s*?\n\w|$)"
    )
    return re.findall(regex, s, flags=re.I)


def getParagraphs(s):
    regex = "<p\\b[\w\W]+?</p>"
    paragraphs = re.findall(regex, s)

    def parser(paragraph):
        el = transformHtml(replace("<.+?>", "", paragraph))

    return filtered(mapped(paragraphs, parser), lambda x: not x.startswith("\n"))


def getDirname(dir):
    parts = dir.split("/")
    parts.reverse()
    for part in parts:
        if len(part) < 3:
            continue
        if "." in part:
            continue
        return part

    print(getDirname("~/backup"))  # correct answer == backup


def search(regex, item, flags=0):
    match = re.search(regex, item, flags)
    if not match:
        return None
    if match.groups():
        if len(match.groups()) == 1:
            return match.groups()[0]
        return match.groups()
    return match.group(0)


def ddrep(s, dict, kt=None, flags=0):
    if not kt:
        kt = removeLookAround
    regex = Regex(dict)
    dict = transformDictionary(dict, kt)
    print(dict)

    def parser(x):
        return dict[x.group(0)]

    return replace(regex, parser, s, flags=flags)


def getTextItems(s, items=None):
    matches = getFunctions(s)
    product = ""
    if not items:
        product = sorted(matches, key=lambda x: len(x), reverse=True)[0]
    else:
        product = filtered(matches, lambda x: getFunctionName(x) in items)
    return product


def prepare(text):  # d
    map = {
        extralinesRE: "\n\n\n",
        commentStartRE: "abc",
    }
    first = re.search(".*", text).group(0)
    if len(first) > 40:
        map.update({first: "from helpers import *"})
    text = multiple_replace(text, map)

    return text


def getFileInfo(file, name=True, size=False, date=False):
    store = {}
    stats = os.stat(file)
    if name:
        store["name"] = basename(file)
    if size:
        store["size"] = stats.st_size
    if date:
        store["date"] = datestamp("", stats.st_mtime)
    return store


def indent(s, spaces=4, border=False):
    border = "|  " if border else ""
    if isNumber(spaces):
        spaces = " " * spaces
    regex = "^"
    if s.startswith(" "):
        match = search("^ *", s)
        regex = "^" + match
    return replace(regex, spaces + border, s, re.M)


def indented(s, spaces=4, border=False):
    border = "|  " if border else ""
    if isNumber(spaces):
        spaces = " " * spaces
    regex = "^"
    if s.startswith(" "):
        match = search("^ *", s)
        regex = "^" + match
    return replace(regex, spaces + border, s, re.M)



def publicdir(dir = None, *requirements):
    return getFiles99(dir)
    return filtered(absdir(dir), isPublic, *requirements)


def absdir(dir):
    dir = expandUser(dir)
    return [os.path.join(dir, file) for file in os.listdir(dir)]


def isWithinDays(filedate, n=1):
    if test("\d{4}", filedate):
        if filedate == datestamp():
            return True
        if int(filedate) + 1 == int(datestamp()):
            return True
        if int(filedate) - 1 == int(datestamp()):
            return True
        return False


def get_input(input, query=""):  # d
    print(input)
    files = ""
    input = pathway(input)
    print(input)
    if isdir(input):
        print("log: isdir")
        if query:
            files = absdir(input)
            files = filter_effect(query, files)
        return files
    return files


def isUnique(x):
    if isArrayLike(x):
        return len(x) == len(set(x))


def countDependencies(s):
    s = getFunctionString(s)
    testproduct = getImplied(s)
    return len(testproduct)


def getImplied(s):
    store = []
    letters = 2
    isnot = ["zoopie"]
    query = "[a-zA-Z][\w_]" + "{" + str(letters) + ",}"
    mustbeStart = "(?<=self\.|this\.|\!|\*|\.\.\.|\+ |with | return | in |of |if | elif |, ?|': | =?= |\w\[|\(|\)|{ ?|    |\t)"
    mustbeEnd = "(?=\.|,|:\n| {| *\n|\]|\(|\))"

    getImpliedREGEX = mustbeStart + query + mustbeEnd

    matches = re.findall(getImpliedREGEX, s)
    #  print(  matches  )
    for match in matches:
        match = match.strip()
        impliedIgnoreRE = "(?:const |let )\[?(?:\w+, )?" + match + "|\\b" + match + "\) ?[:{]|(?<=(?:^|\n) *(?:\w+, )?)\\b" + match + "(?:, \w+)* ?= ?|    " + match + '\(.*?{'
        if match in ignorelist or match in store:
            continue

        elif test(impliedIgnoreRE, s):
            ignorelist.append(match)
        else:
            store.append(match)
    return store


def mrep(
    regex, s, storeParser=lambda x: x.group(0), replacementParser=lambda x: "", flags=0
):
    store = DynamicStorage([])

    def parser(x):
        store.add(storeParser(x))
        return replacementParser(x)

    product = replace(regex, parser, s, flags=flags)
    return product, store.value


def pathway(dir, file=None):
    if dir == 'drive':
        return getDrive()
    if dir == 'root':
        return expandUser('~/')
    elif not dir:
        return expandUser(os.getcwd())
    print(  dir, 'asdfadf'  )
    return srep(dir, dirmap, count=1)

def getGoogleLinks(query="", cat="youtube"):
    text = browseGoogle(query, cat)
    regex = 'href="(https://www\.' + cat + '\.com.*?)"'
    store = re.findall(regex, text)
    if not exists(store):
        return
    if store[0] == store[1]:
        pprint(store)
        print("trimming duplicates")
        store = store[::2]

    return store


def datestamp(n=None, cat="m-d-y"):
    if n == 'string' or n == 'full':
        strife = "%A, %m-%d-%Y, %I:%M %p"
        return datetime.datetime.now().strftime(strife)
    if isFile(n):
        n = mdate(n)
    elif n: 
        n = int(n)
        if n > 1000000000000:
            n /= 1000
    product = datetime.datetime.now() if not n else datetime.datetime.fromtimestamp(n)
    map = {
        "month-day": "%m%d",
        "month-day-year": "%m-%d-%y",
        "mdy": "%m%d%Y",
        "m-d-y": "%m-%d-%Y",
        "Month-day-year": "%B %d, %Y",
        "detailed": "%m-%d-%y - %I:%M:%S",
    }
    return str(product.strftime(map[cat]))


def getFiles3(dir=None, key=None, sort=None, reverse=False):
    files = listdir(dir or os.getcwd())
    if key:
        if key in ["jsontest", "csv", "js", "html", "css", "py", "pdf"]:
            temp = key
            key = lambda x: x.endswith("." + temp)

        files = filtered(files, key)
    if sort:
        files.sort(key=sort, reverse=reverse)
    return files


def swapNames(s, dict):
    #  copy = dict.copy()
    #  for k, v in dict.items():
        #  copy[v] = k
    return drep(s, dict, cat="wb")


def getRegexFlag(regex):
    if test('[^$]', regex): 
        startRegex = '\(\?<?[!:=](?:\^\|\\n|\\n\|\^)'
        endRegex = '\(\?<?[!:=].*?\$[|)]'
        if test(Regex([startRegex, endRegex]), regex):
            return 0
    return re.M

def mrep3(s, dict):
    regex = ''
    regexes = []
    newdict = ''

    #  for r,f in dict.items():
        #  regexes.append(removeCaptureGroups(r))
        #  r = 

    flags = getRegexFlag(regex)
    store = DynamicStorage()

    def runner(x):
        a, b = parser(x)
        store.add(b)
        return a

    s = replace(regex, runner, s, flags=flags)
    return s, store.value


def mwriter(regex, file, flags=0, production=True):
    def parser(x):
        items = x.groups() if x.groups() else x.group(0)
        return ('', items)

    text, store = mrep2(regex, parser, read(file), flags)
    if store:
        if production:
            write(file, store)
        else:
            writer('mreptest' + file, text)
    return store

def mrep2(regex, parser, s, flags=0):
    flags = getRegexFlag(regex)
    store = DynamicStorage()

    def runner(x):
        a, b = parser(x)
        store.add(b)
        return a

    s = replace(regex, runner, s, flags=flags)
    return s, store.value


def getZeroUsage(base, *files):
    text = read(base)
    names = getVueMethodNames(text) if isHtml(base) else getFunctionNames(text)
    regex = Regex(names, "wb")
    store = []
    store.extend(re.findall(regex, text))

    for file in files:
        matches = re.findall(regex, read(file))
        store.extend(matches)
    tally = Tally(store)
    return tally.get(1)


def xsreplace(text, edits, cat="insertion"):  # d
    regex = "|".join(re.escape(key) for key in edits.keys())

    def parser(s):
        if cat == "insertion":
            return s.group(0) + edits[s.group(0)]
        if cat == "replacement":
            return edits[s.group(0)]

    try:
        return re.sub(regex, parser, text, re.I)
    except:
        return "ERROR"

def getFiles99(dir = None, public = True, requirements = [], recursive=False):
    dir = expandUser(dir) if dir else os.getcwd()
    store = []

    def runner(dir):
        for item in os.listdir(dir):
            path = os.path.join(dir, item)
            if public and not isPublicFile(path):
                continue

            if isFile(path):
                if every(requirements, lambda requirement: requirement(item)):
                    store.append(path)

            elif isDir(path):
                if isDir in requirements:
                    store.append(path)
                if recursive:
                    try:
                        runner(path)
                    except Exception as e:
                        print(  e  )
                        continue

    runner(dir)
    return store

def getFiles2(dir, key=[], recursive=True):
    def runner(dir):
        for name in absdir(dir):
            if not checkpoint(name, key):
                continue
            if isFile(name):
                store.append(name)
            elif recursive and isDir(name):
                runner(name)

    store = []
    runner(dir)
    return store


def getInactiveNames(x, names, mode=""):
    regex = Regex(names, mode)
    print(regex)
    store = []
    count = []
    x = arrayify(x)
    for item in x:
        text = textgetter(item)
        store.extend(re.findall(regex, text))
        count.extend(re.findall(regex, text))
    return difference(names, store)
    tally = Tally(count)
    print(tally.value())
    return tally.get(0)


def getStringDependencies(s):
    fn = search("function|def", s)
    if not fn:
        return None
    regex = "(function |def |\.|.)(\w+)\("
    product = re.findall(regex, s)
    store = []
    for item in product:
        if item[0] in ["def ", "function ", "."]:
            continue
        if item[1] in nativeFunctions:
            continue
        store.append(item[1])
    return store


def getItemDependencies(name, file):
    library = createFunctionLibrary(file)
    regex = Regex(library, "wb")
    store = []

    def parser(name):
        product = re.findall(regex, library[name])
        for item in product:
            if isUtil(item) or item in store:
                continue
            store.append(item)
            parser(library[item])

    parser(name)
    return store


def get_functions(file, cat="names"):  # d
    function_keyword = "function|def"
    if file.endswith("js"):
        function_keyword = "function"
    elif file.endswith("py"):
        function_keyword = "def"
    regex = "^" + "" + function_keyword + " (\w+)\("
    text = Sread(file)

    if cat is "names":
        return re.findall(regex, text, re.MULTILINE)
    if cat is "details":
        return "foo"


def getLangFromString(s):
    jsitems = ["// ", "console.log", "function", "require", "const", "let"]
    pyitems = ['\'\'\'', '\"\"\"', "print", "# ", "def", "import", "from"]
    items = jsitems + pyitems
    tag = search(Regex(items), s)
    if tag in jsitems:
        return "js"
    if tag in pyitems:
        return "py"
    raise Exception("ray neither py nor js was fround")


def getLangFromFile(x):
    if len(x) > 500:
        tl('file too long')
    if x.endswith("py"):
        return "py"
    if x.endswith("js"):
        return "js"
    if x == "z":
        return "js"

    else:
        text = read(x)
        jsitems = ["function", "require", "const", "let"]
        pyitems = ["def", "import", "from"]
        items = jsitems + pyitems
        tag = search(Regex(items), text)
        if tag in jsitems:
            return "js"
        if tag in pyitems:
            return "py"

    raise Exception('ray') 


def getLang(x):
    if test('vim', x): return 'vim'
    if test('bash', x): return 'bash'
    if x.endswith("py"):
        return "py"
    if x.endswith("js"):
        return "js"
    match = re.search("^function |^def ", x, flags=re.M)
    if match:
        return "py" if match.group(0).startswith("def") else "js"
    else:
        b = re.search("class \w+(?::| {)", x)
        if b:
            return "py" if b.group(0).endswith(":") else "js"
        else:
            return ""


def getCodepen(url):
    id = getLastItem(url, "/")
    url = "https://codepen.io/pen/" + id
    text = request(url)
    save(text)
    a = "<pre.*\n\s*<code>"
    b = "([\w\W]+?)"
    c = "\s*</code>\s*</pre>"
    regex = a + b + c
    with ErrorHandler():
        items = re.findall(regex, text)
        h, css, js = [html.unescape(item).strip() for item in items]
        return {id: {"html": h, "css": css, "js": js}}


def mreplace3(s, dict):
    regex = Regex(dict)
    flags = determineFlag(regex)
    print(regex)

    def parser(x):
        for k, v in dict.items():
            if test(k, x.group(0)):
                args = filtered(x.groups())
                store.append(v["store"](*args))
                return lambdaReplace2(v["replace"])(*args)

    store = []
    product = replace(regex, parser, s, flags=flags)
    return [product, store]


def is_public(s):  # d
    EXCLUDE_FILES_LIST = [
        "toreddit.py",
        "package.json",
        "package-lock.json",
        ".",
        "_",
        "$",
        "$",
    ]

    INCLUDE_TAGS_LIST = [".py", ".js", ".css", ".html"]

    for item in EXCLUDE_FILES_LIST:
        if s.startswith(item):
            return False

    for item in INCLUDE_TAGS_LIST:
        if s.endswith(item):
            return True

    return False


def getRequest(url, mode="test"):
    url = prepareUrl(url)
    if mode == "test":
        if isFile("z") and isWithinOneHour("z"):
            return read("z")

    request = requests.get(url, headers={"user-agent": BROWSER_AGENT})

    if mode == "test":
        write("z", request.text)
        return request.text
    if mode == "text":
        return request.text
    if mode == "byte":
        return request.content
    if mode == "json":
        return request.json()


def creplace(s, a, b):
    regex = ""
    parsers = []
    dict = {}
    if isString(a):
        regex = a
        parsers = b
    else:
        dict = a
        regex = Regex(dict, capture=True)
        parsers = dict.values()

    def parser(s):
        for i, text in enumerate(s.groups()):
            if text:
                os.system("clear")
                print(text)
                input()
                return parsers[i](text)

    return replace(regex, parser, s, re.M)


def get_function(name, text):  # d
    lines = text.split("\n")
    item = re.search(
        "(class|function|def) " + name + ".*", text, flags=re.IGNORECASE
    ).group(0)
    print("item: " + item)
    match = lines.index(item)
    try:
        return (
            re.search(
                START_RE + FUNCTION_START_RE + name + CWALLU_RE + FUNCTION_END_RE,
                text,
                flags=re.IGNORECASE,
            )
            .group(0)
            .strip(),
            match,
        )
    except:
        raise ValueError("No Match")


def multiple_replace(text, dictionary, singlepass=False):  # d
    items = list(filter(lambda x: not includes(r"(?<!\\)\*", x), dictionary.keys()))
    if len(items) > 0:
        singlepass = True
    if singlepass:
        return re.sub(
            "|".join(re.escape(key) for key in dictionary.keys()),
            lambda k: dictionary[k.group(0)],
            text,
        )
    else:
        for key, val in dictionary.items():
            print("includes: " + str(includes(key, text)))
            text = re.sub(key, val, text, re.MULTILINE)
        return text


def parens(s, type="parens"):
    if type is "word":
        return "\\b\w*?" + s + "\w*\\b"

    if type is "b":
        return "\\b" + s + "\\b"

    if type is "\\b":
        return "\\b" + s + "\\b"

    if type is "sq":
        return "'" + s + "'"
    if type is "dq":
        return '"' + s + '"'
    if type is "nlb":
        return "(?<!" + s + ")"
    if type is "nlb":
        return "(?<!" + s + ")"
    if type is "ncg":
        return "(?:" + s + ")"
    if type is "nla":
        return "(?!" + s + ")"
    if type is "lb":
        return "(?<=" + s + ")"
    if type is "la":
        return "(?=" + s + ")"
    if type is "brackify":
        return "{\n" + re.sub(",?\n?$", "", s) + "\n}"

    if type is "console":
        return "console.log(" + s + ")"

    if type is "print":
        return "print(" + s + ")"

    if type is "parens":
        return "(" + s + ")"
    if type == "[]":
        return "[" + s + "]"
    if type is "braces":
        return "[" + s + "]"
    if type is "curlybraces":
        return "{" + s + "}"
    if '|' in type:
        a,b = type.split('|')
        return a + s + b
    else:
        return type + s + type

def reduced99(*args):
    if len(args) == 2:
        items, parser = args
        acc = None
    else:
        acc, items, parser = args

    if isObject(items):
        items = items.items()

    for i, item in enumerate(items):
        product = parser(item)
        if i == 0 and isArray(product) and len(product) > 2:
            acc = []
        if isArray(acc):
            if isArray(product):
                acc.extend(product)
            else:
                acc.append(product)

    return acc

def reduced(acc, items, parser):
    if isObject(acc):
        for item in items:
            k,v = parser(item)
            acc[k] = v
        return acc

    if isSimpleStorage(acc):
        acc = SimpleStorage()
        for item in items:
            k,v = parser(*item)
            acc.add(k, v)
        return acc.value

    if isString(acc):
        for item in items:
            product = parser(item)
            acc += product
        return acc

def isSimpleStorage(x):
    return x == SimpleStorage

def getColumns(x, *columns):
    print(  'the column count begins at 0'  )
    a = '(\S.*?)'
    b = '.*?'
    store = []
    columns = sorted(columns)

    for index in range(columns[-1] + 1):
        check = False
        for item in columns:
            if item == index:
                store.append(a)
                check = True
                break

        if not check:
            store.append(b)
    
    delimiter = '\s+'
    regex = '^' + delimiter.join(store) + '(?=$|' + delimiter + ')'
    return re.findall(regex, textgetter(x), flags=re.M)

def mreplace(regex, options, text, flags=0):
    storeParser = None
    replacement = ""

    if isArray(options):
        replacement = options[0]
        if len(options) == 2:
            storeParser = options[1]
    else:
        replacement = options

    store = []

    def parser(x):
        nonlocal storeParser
        nonlocal replacement
        product = x
        if len(x.groups()) == 1:
            product = x.group(1)
        if storeParser:
            product = storeParser(x)
        store.append(product)
        if isFunction(replacement):
            replacement = replacement(x)
        return replacement

    text = re.sub(regex, parser, text, flags=flags)
    return text, store


def isFullPdf(f):
    if not isString(f):
        return False
    end_content = ""
    start_content = ""
    size = os.path.getsize(f)
    if size < 1024:
        return False
    with open(f, "rb") as fin:
        fin.seek(0, 0)
        start_content = fin.read(1024)
        start_content = start_content.decode("ascii", "ignore")
        fin.seek(-1024, 2)
        end_content = fin.read()
        end_content = end_content.decode("ascii", "ignore")
    start_flag = False
    if start_content.count("%PDF") > 0:
        start_flag = True

    if end_content.count("%%EOF") and start_flag > 0:
        return True
    eof = bytes([0])
    eof = eof.decode("ascii")
    if end_content.endswith(eof) and start_flag:
        return True
    return False


def getMyGithubGists():
    store = {}
    regex = '<a href="(.*?)"><strong class="css-truncate-target">index.html'
    links = re.findall(regex, request(github_usercontent_url))
    linkgetter = lambda link: pathjoin("https://gist.github.com", link)

    for link in links:
        text = request(linkgetter(link))
        title = search(div("title", "(.*?)"), text)
        regex = 'href="(/kdog3682/.*?(?:index\.html|styles|script\.js))"'
        links = re.findall(regex, text)
        store[title] = {}

        for link in links:
            text = request(linkgetter(link))
            name = search("(?:html|styles|js)$", link)
            if name == styles:
                name = "css"
            store[title][name] = text

    write("github.json", store)


def read(file=None, cat="default"):


    if file == None:
        file = getLatestFile()

    if file.startswith("~"):
        file = os.path.expanduser(file)

    if file.endswith(".pdf"):
        return ""

    if cat is "text":
        with open(file, "r") as data:
            return data.read()

    if cat is "json":
        with open(file) as data:
            return json.load(data)

    if cat is "lines":
        with open(file, "r") as f:
            return f.readlines()

    if cat is "latin":
        with open(file, "rb") as f:
            return f.read().decode("latin-1")

    if file.endswith(".json") or file.endswith("jsontest") or file.endswith('.list'):
        with open(file) as f:
            return json.load(f)

    with open(file, "r") as f:
        return f.read()


def replaceEdit(s, dict={"af": {"foo": "sdfxcvxcvxcv", "get": "fisdhfsdsoo"}}):
    istart = "^    "
    regex = createFunctionRegex(dict, capture=True)

    def parser(x):
        text, keyword, name, lang = x.groups()
        lang = "js" if lang == "{" else "py"
        innerDict = dict[name]
        keys = Regex(innerDict, capture=True)
        rest = "\\b[\w\W]+?"

        regex = createFunctionRegex(innerDict, capture=True, inner=True)

        def innerParser(s):
            nonlocal keyword
            nonlocal lang
            body, tag = s.groups()
            print(tag)
            return
            product = indent(innerDict[tag])
            if tag == "elif":
                product = product + "\n" + body
            elif keyword == "class":
                product = constructFunction(tag, params, product, lang)
            return product

        leftovers = []
        product = replace(regex, innerParser, text)
        if keyword == "class" and exists(leftovers):
            s = indent("\n\n".join(leftovers)) + "\n"
            product = replace("?<=\n", s, count=1)
        return product

    return replace(regex, parser, s)



def getExtensionFromData(data):
    return 'txt' if isString(data) else 'json'

def writer(file = None, data = None, preview = True):
    if not data:
        data = file
        file = 'tempfile.'
        extension = getExtensionFromData(data)
        file += extension
    file = write(file, data, newlines=2)

    if preview == "run":
        runFile(file)
    elif preview:
        openFile(file)
    

def write(
    file,
    data="",
    cat="",
    append=False,
    newlines=1,
    indent=2,
    namechange=False,
    dir = None,
    preview = False,
):

    if preview:
        print(  data  )

    if dir:
        file = os.path.join(dir, file)

    def writejson():
        with open(file, "w", encoding="utf8") as f:
            json.dump(data, f, indent=indent, ensure_ascii=False)
            print("Created new json: " + abspath(file) + " as: " + "w")

    if test('^[.~]', file):
        file = realpath(file)

    if len(file) > 100:
        #  print(  file  )
        raise Exception('filename too long, probably typo') 


    if cat == 'text':
        with open(file, 'w') as f:
            f.write(product)
            print("Created new file: " + abspath(file) + " as: " + 'w')

    if namechange:
        file = changeName(file, namechange)

    if file.endswith('list'):
        writejson()
        return

    if isArray(data) and not file.endswith("json"):
        data = ("\n" * newlines).join(data)


    if file.startswith("~"):
        file = os.path.expanduser(file)

    if isObject(data) and not file.endswith('json'):
        file = changeExtension(file, 'json')
        writejson()
        return

    if file.endswith("jsonobject"):
        file = file[:-11]
        write(file + ".js", "const " + basename(file) + " = " + json.dumps(data))
        print("Wrote " + file + ".js as a json javascript object")
        return
    if file.endswith(".json") or file.endswith("snippets"):
        if not append:
            writejson()
            writestyle = "w"
        elif os.path.exists(file):
            with open(file) as f:
                store = json.load(f)
            if type(data) == list or append == list:
                store.extend(data)
            elif type(data) == dict:
                store.update(data)
            writejson()
            writestyle = "a"
        else:
            writejson()
            writestyle = "w"

    else:
        writestyle = "a" if append else "w"
        if not os.path.exists(file):
            writestyle = "w"
        newlines = "\n" * newlines if append else ""

        product = stringify(data) if isObject(data) else data + newlines
        with FilePathCorrector(file):
            with open(file, writestyle) as f:
                f.write(product)
                print("Created new file: " + abspath(file) + " as: " + writestyle)

    return file

def getFunctionNameFromCaller():
    name = inspect.currentframe().f_back.f_code.co_name
    return name

def cleandir(dir=None, db=None):

    import magic
    mime = magic.Magic(mime=True)
    store = []
    trash = []

    regexItems = [
            '\(.*?\)',
            'temp',
            'test',
    ]

    extensions = [
            'otf',
            'tex',
            'log',
            'aux',
            'pdf',
            'ps',
            'zip', 
            'gz',
            'ico',
            'jpg',
            'svg',
            'png',
            'ttf',
            'pkl',
            'jpeg',
            'vmb',
    ]

    requirements = [
        isPublic, 
        #  isRecentFileFactory(after=-2), 
        isnotmyactivefile,
    ]

    files = getFiles99(dir, requirements = requirements, recursive=False)
    for i, file in enumerate(files):
        name = basename(file)
        ext = getExtension(file)

        if not ext and mime.from_file(file) == 'text/html':
            trash.append(file)

        elif ext in extensions:
            trash.append(file)

        elif test(Regex(regexItems), name, flags=re.I):
            trash.append(file)

        else:
            print(  file  )
            print(size(file))
            if size(file) < 2000:
                print(read(file))

            if not input('Press Enter to Delete'):
                trash.append(file)
            else:
                store.append(file)

    for file in trash:
        trashFile(file)

    pprint(trash)
    print(  '----------'  )
    pprint(store)
    #  if db:
        #  db.log('cleandir', trashed, saved)


def getFiles(
    dir=None,
    key=None,
    sort=None,
    maxSize=5000,
    images=False,
    ignore=[],
    recursive=False,
):
    store = []
    dirs = []
    reqs = [isPublicFile]
    if not dir:
        dir = os.getcwd()
    if maxSize:
        reqs.append(lambda file: size(file) < maxSize)

    if recursive == True and key == None:
        recursiveRunner(dir)
        return store

    parser = lambda x: x
    files = listdir(dir)

    if key:
        if isFunction(key):
            parser = key
        elif isObject(key):
            _not = key.get("not")
            _require = key.get("require")

            if _not:
                endDict, startDict = _not
                if startDict:
                    start = Regex(startDict, escape=True)
                if endDict:
                    end = Regex(endDict, escape=True)
                regex = parens("^" + start, "ncg") + "|" + parens(end + "$", "ncg")
                parser = lambda x: not test(regex, x)

            if _require:
                reqs.extend(_require)

        elif isArray(key):
            if isFunction(key[0]):
                reqs.extend(key)
            else:
                parser = lambda x: getExtension(x) in key
        elif key in ["js", "css", "html", "py", "pdf"]:
            parser = lambda x: x.endswith("." + key)
        elif key.endswith("*"):
            parser = lambda x: test(key[0:-1], basename(x), flags=re.I)
        else:
            parser = lambda x: key in x.lower()

    def parserHandler(file):
        if file in ignore:
            return False

        if isDir(file):
            if recursive:
                dirs.append(file)
            return False

        for req in reqs:
            if not req(file):
                print(file, "nope from parserhandler")
                return False

        return parser(file)

    files = filtered(files, parserHandler)

    if exists(dirs):
        for dir in dirs:
            files.extend(getFiles(dir, key=None, recursive=True))

    if sort and not recursive:
        if sort == True:
            files.sort()
        else:
            files.sort(key=sort)

    return files


def Regex(x, cat="", capture=False, escape=False, allow="", start="", end="", fallback=None, extend=None):

    if isString(x) and not cat:
        return x

    if isEmpty(x):
        if fallback: return fallback
        else:
            raise Exception("cant be empty @regex xx value")

    if cat == "function-name":
        return cdf + Regex(x, capture=True) + "\\b"
    elif cat == "function-body":
        #  regex = "(?:^|(?<=\n))" + cdf[1:] + Regex(x) + "\\b[\w\W]+?(?=\n\w|$)"
        regex = "(?<=^|\n)" + cdf[1:] + Regex(x) + "\\b[\w\W]+?(?=\n\w|$)"
        return regex
    if cat == "vue-method-name":
        return "^        " + Regex(x) + "(?:,\n|\([\w\W]+?\n        },?\n)"
    if cat == "vue":
        lookbehind = '(?<=s\.|{{|=")'
        lookahead = "\\b"
        names = Regex(x)
        regex = lookbehind + names + lookahead
        return regex

    if cat == "fn-body":
        regex = "(?:^|(?<=\n))" + cdf[1:] + Regex(x) + "[\w\W]+?(?=\n\w|$)"
        return regex

    if cat == "cdf":
        names = "\w+"
        if capture:
            names = parens(names)
        if x:
            names = Regex(x, capture=capture)
        regex = cdfstart + names + "(?:\(| {|:)[\w\W]+?(?=\n\w|$)"
        return regex

    if isFunction(cat):
        return cat(x)

    if isObject(x):
        x = list(x.keys())
    elif isString(x):
        x = [x]

    if extend:
        x.append(extend)

    if start or end:
        return start + "(?:" + "|".join(x) + ")" + end

    if escape:
        x = [re.escape(item) for item in x]

    if capture == "each":
        x = "(?:" + "|".join([parens(item) for item in x]) + ")"
    elif capture:
        x = parens("|".join(x))
    else:
        if len(x) == 1:
            x = x[0]
        else:
            x = "(?:" + "|".join(x) + ")"

    if cat == "fb":
        x = "(?<=[^\w.'\"\`]" + x + "(?=\()"

    elif cat == "wbs":
        x = "\\b" + x + "s?\\b"
    elif cat == "wbs":
        x = "\\b" + x + "s?\\b"
    elif cat == "wb":
        x = "\\b" + x + "\\b"
    elif cat == "nativeimport":
        x = "\\b(?<!\.)" + x + "(?=[).(])"
    elif cat == "function-name":
        x = "\\b(?<!\.)" + x + "(?=[\(:,])"
    elif cat == "vb":
        dq = "" if "quotes" in allow else '"'
        func = "" if "functions" in allow else "(?<!ion |def |ass )"
        period = "" if "periods" in allow else "."
        x = (
            func
            + "(?<=[^'"
            + period
            + dq
            + "\`\w])"
            + x
            + "(?=$|[^'"
            + dq
            + period
            + "\`\w])"
        )

    elif cat == "qb":
        x = "(?<=[^'\"\`\w])" + x + "(?=$|[^'\"\`\w])"

    elif cat == "vb-allowf":
        x = "(?<=[^.'\"\`\w])" + x + "(?=$|[^'\"\`.\w])"

    return x


def sreplace(text, edits, cat=None):
    if not edits:
        return
    count = 0
    replaceCount = 0
    regex = ""
    seen = []

    if not cat:
        regex = Regex(edits, escape=True)
    elif cat == "code":
        regex = cdf + Regex(edits, capture=True, escape=True) + "\\b.*"

    elif cat == "ats" or cat == "code":
        regex = cdfandpy + Regex(edits, capture=True) + "\W.*"

    elif cat == "ate" or cat == "rcb" or cat == "le" or cat == "replaceChunk":
        regex = cdfandpy + Regex(edits, capture=True) + "\W[\w\W]+?(?=\n\w)"
    else:
        regex = cat
        replaceCount = 1

    def addToCodeBlockStartParser(s):
        return s.group(0) + "\n" + indent(edits[s.group(1)]) + "\n    "

    def addToCodeBlockEndParser(s):
        original = s.group(0).strip()
        product = edits[s.group(1)]
        return appendClassMethod(original, product)

    def replaceCodeBlockParser(s):
        extraNewLine = "\n"
        original = s.group(0).strip()
        innerdict = edits[s.group(1).lower()]
        for k, v in innerdict.items():
            product = indent(v)
            if test("^    (?:def )?" + k, original, re.M | re.I):
                regex = "\n    (?:def )?" + k + "[\w\W]+?(?=\n    \w)"
                original = replace(regex, "\n" + product + extraNewLine, original)
            else:
                if original.endswith("}"):
                    original = original[0:-1] + "\n" + product + "\n}"
                else:
                    original += "\n" + product

        return original

    map = {
        "code": lambda s: s.group(0) + edits[s.group(1)],
        "vue": lambda s: s.group(0) + edits[s.group(0)],
        "ats": addToCodeBlockStartParser,
        "ate": addToCodeBlockEndParser,
        "rcb": replaceCodeBlockParser,
        "replaceChunk": lambda s: search(".*?(?={)", s.group(0))
        + edits[filtered(s.groups())[0]],
    }

    def runner(x):
        if isString(x):
            raise Exception("Should not be a string.")
        tag = x.group(1).lower()
        if tag in seen:
            return x.group(0)
        else:
            seen.append(tag)

        nonlocal map
        nonlocal count
        count += 1

        action = (
            lambda x: edits[tag](x.group(0)) if isFunction(edits[tag]) else map[cat]
        )
        product = action(x)
        return product

    product = re.sub(regex, runner, text, count=replaceCount, flags=re.M | re.I)

    if count == 0:
        raise Exception("No matches at sreplace. Early Exit.")
    else:
        return product


def ppprint(x):
    from pprint import pprint
    if isAdvanced(x):
        pprint(x)
    else:
        print(x)


def storageSort(storage, key):
    store = {}
    for k, v in storage.items():
        store[k] = sorted(v, key=key)
    return store


def writeAlphabet(content=""):
    alphabet = Alphabet("t")
    while isFile(alphabet.increment()):
        continue
    write(alphabet.letter, content)


def rpwo(file, parser, *args):
    product = parser(read(file), *args) if isFile(file) else parser(*args)
    write(file, product)


def pipe2(*parsers):
    def pipeFunction(s):
        for parser in parsers:
            s = parser(s)
        return s

    return pipeFunction


def subtractArray(a, b):
    store = []
    for item in a:
        if item in b:
            continue
        store.append(item)
    return store


def combineRegex(*args):
    return "|".join(args)
    for arg in args:
        for el in args:
            if el == arg:
                continue


def analyzeDependencies(s, recursive=False):
    if recursive:
        return recursiveAnalyzeDependencies(s)
    else:
        return getImplied(s)


def lineInserter(n):
    regex = "^" + ".*\n" * n

    def parser(text, action):
        return re.sub(regex, action, text, count=1)

    return parser


def cocpyfiles(files, to):
    to = abspath(to)
    mkdir(to)
    [copyFile(file, to) for file in files]
    print("Copied " + str(files) + " to " + to)


def attempt(fn, fallback = None):
    def parser(*args, **kwargs):
        try:
            return fn(*args, **kwargs)
        except Exception as e:
            raise Exception(e)
            return fallback 
    return parser

def iterate(items, parser, *args, **kwargs):
    return [parser(item, *args, **kwargs) for item in items]
    return [attempt(parser, [])(item, *args, **kwargs) for item in items]


def transformHtml(s):
    map = {
        "&#x201C;": '"',
        "&#x201D;": '"',
        "&ldquo;": '"',
    }
    return drep(s, htmlEntities, flags=re.I)


def mtime(f=None):
    if not f:
        return datetime.datetime.now().hour
    time = os.stat(f).st_mtime
    return datetime.datetime.fromtimestamp(time).hour


def preclean(s, lang="py", n=0):
    jsBlockRE2 = "^(?:(?:\w+ )?\w+ *=\s*)?(?<!\\\\)`[\w\W]+?(?<!\\\\)`(?:\.trim\(\)|;)?"
    jsCallableRE = "^[\w.]+?\((?:[^`\n]*|[\w\W]*?(?<!\\\\)`[\w\W]*?(?<!\\\\)`)\s*\)+\n?"
    pyCallableRE = "^\w[\w.]+?\(.*\n?"
    jsStringsRE = "^(?:\w+ )?s *= *['\"].*?['\"] *$"

    py = [ pySimpleCommentRE, pyBlockCommentdqRE, pyBlockCommentsqRE]
    js = [jsCallableRE, jsSimpleCommentRE, jsBlockRE2, jsStringsRE]

    regexItems = js if lang is "js" else py
    regex = "|".join(regexItems)
    return re.sub(regex, "", s, flags=re.M).strip()


def changeFilename(s, mode=""):
    if mode == "monthly":
        s = replace(Regex(months), "", s, flags=re.I)
        a, b = s.split(".")
        return a + getMonth() + "." + b
    else:
        return replace("(?=\.\w+$)", mode, s, count=1)


def foo(items):
    text = read(file)
    regex = "^ *(\w+),$"
    names = re.findall(regex, text, flags=re.M)
    tally = Tally(Regex(names, "wb"), text)
    items = tally.get(1)


def deprecate(s, words):
    dict = {}
    for word in words:
        dict[word] = word + datestamp(cat="mdy")
        dict[word + "new"] = word
    return drep(s, dict, "vb-allowf")


def arrToDict(arr, parser, key=None):
    store = {}
    for item in arr:
        if not key or isFunction(key) and key(item):
            store[item] = parser(item)
    return store


def library(s):
    store = {}
    for item in getChunks(s):
        name = getName(item)
        if not name:
            continue
        store[name] = item.strip()
    return store


def namechanger(s):
    def parser(s, count):
        return s + str(count)

    count = 0
    while isFile(s) or isDir(s):
        count += 1
        s = parser(s, count)
    return s


def mrsimple(regex, s):
    store = []

    def parser(x):
        store.append(x.group(0))
        return ""

    s = replace(regex, parser, s, flags=re.M)
    return s.strip(), smallify(store)


def insertSecondLine(s, content):
    def parser(x):
        text = x.group(0)
        spaces = getSpaces(text)
        return text + spaces + content + "\n"

    return lineInserter(1)(s, parser)


def readjson(file, placeholder={}):
    item = ""
    try:
        with open(file) as f:
            return json.load(f)
            item = json.load(f)
        return item
    except:
        return placeholder


def Swrite(input, content):  # d
    if input.startswith("/") or " " not in input:
        write(input, content)
    else:
        dir, file = Search("(.*?) (.*)", input)
        write(pathway(dir, file), content)


def scrapeRedditLink(link):
    if len(link) < 10:
        link = "https://redd.it/" + link
    text = getRequest(link)
    a = '"document".*?"t":"'
    b = '"'
    return scrapeBetween(text, a, b, multiple=False)


def updateVueFile(file, name):
    script = createScript(name + ".js")

    if test(re.escape(script), read(file)):
        return

    def parser(s):
        return insertSecondLine(s, script + "\n")

    rpwo(file, parser)


def reviewFile(file):
    os.system("clear")
    text = read(file)
    print(text[0:300])
    print(  '-' * 50  )
    print(file, "|", "size", size(file))
    answer = input("[d]elete, [m]ove, [r]:set-name ")
    return answer


def deleteDivs(s):
    items = [
        '<div id="BottomAd" class="ad bottom-ad nocontent robots-nocontent">' "header",
        "blockquote",
        "figure",
    ]
    regex = htmlRegex(items)
    return replace(regex, "", s)


def formatCodeAndError(code, e):
    name = type(e).__name__
    message = " " + comment(name + ": " + e.args[0] + " -- line: " + str(e.lineno))
    product = replace("^.+", lambda x: x.group(0) + message, code)
    return product


def tallyFunctions(file, refs=[], key=None):
    store = []
    names = getFunctionNames(read(file))
    files = [file] + refs

    for file in files:
        store.extend(getDependencies(file, names))

    return Tally(store).get(key)


def computerStorage(key, val, update=False, testing=False):
    if update:
        obj = read(COMPUTER_STORAGE_KEY)
        obj[key] = val
        write(COMPUTER_STORAGE_KEY, obj)
    else:
        updateStorage(COMPUTER_STORAGE_KEY, {key: val})

    if testing:
        pprint(read(COMPUTER_STORAGE_KEY))


def save(s, filepath="temptestfile"):
    if s.startswith("const sn"):
        raise Exception("wtf is going on at save")
    filepath += str(datestamp()) + ".txt"
    write(filepath, s)
    webbrowser.open("file://" + os.path.realpath(filepath))


def browseGoogle(query, cat="youtube"):
    if cat not in query:
        query += " " + cat
    query = query.replace(" ", "+")
    url = "https://google.com/search?q=" + query
    result = getRequest(url)  # get a webpage of text
    return result


def createFunctionLibrary(items):
    if isString(items):
        items = getChunks(items)

    store = {}

    for item in items:
        name = getName(item)
        if not name:
            continue
        store[name] = item.strip()

    return store


def addNumberToFile(outpath):
    parser = parens
    count = 0
    while isFile(outpath):
        count += 1
        length = parser(str(count))
        if count > 0:
            outpath = outpath[:-length]
        outpath += length
    return outpath


def initReddit():
    return praw.Reddit(
        username="mementomoriok",
        password="Reddit123",
        client_id="mj6SS7F3dUOMmQ",
        client_secret="nu-oDtI7HQBJYoZH_omN_yyVHbE",
        user_agent="redditposts by /u/mementomoriok",
    )


def Sread(input):  # d
    if input.startswith("/") or " " not in input:
        return read(input)
    dir, file = Search("(.*?) (.*)", input)
    if file == "":
        return list(filter(is_public, absdir(pathway(dir))))
    return read(pathway(dir, file))


def div(el="div", text="", attrs="", indent=False):
    if indent:
        product = (
            toStartingTag(el, attrs) + "\n" + indented(text) + "\n" + toClosingTag(el)
        )
        return product
    return toStartingTag(el, attrs) + text + toClosingTag(el)


def htmlRegex(items):
    def parser(item):
        if item.startswith("<"):
            return item + wallu + toClosingTag(getFirstWord(item))
        else:
            return div2(item, "[\w\W]+?", "\\b.*?")

    items = mapped(items, parser)
    return Regex(items)


def combine(*args):
    delimiter = "\n"
    s = ""
    for i, arg in enumerate(args):
        if i > 0:
            s += delimiter + delimiter
        if isArray(arg):
            s += delimiter.join(arg).strip()
        else:
            s += arg.strip()
    return s


def scrapeBetween(text, a, b, multiple=False):
    parser = re.findall if multiple else search
    regex = a + "([\w\W]+?)" + b
    result = parser(regex, text)
    if exists(result):
        print(result)
        return result
    else:
        print("no scrape result")


def filterTwice(arr, check):
    a = []
    b = []
    for item in arr:
        checked = check(item)
        if checked == True:
            a.append(item)
        elif checked == False:
            b.append(item)
        else:
            b.append(checked)
    return a, b


def file_info(dir, file):  # d
    name = file
    path = pathjoin(dir, file)
    data = os.stat(path)

    size = data.st_size
    date = datestamp(data.st_mtime)
    return {
        "size": size(path),
        "date": date,
        "path": path,
        "name": name,
    }


def recursiveFindFile(file=None, dir=None, key=None, depth=3):
    if not dir:
        dir = os.getcwd()
    breaker = Breaker(depth)

    def runner(dir):
        breaker.next()

        if key:
            for item in absdir(dir):
                if test(key, item):
                    print(item)
                    return ospj(dir, item)
        else:
            if ospj(dir, file) in publicdir(dir):
                return ospj(dir, file)

        for item in getDirs(dir):
            return runner(item)

    return runner(dir)


def findRecentFile(query):
    store = []
    count = 0
    for file in os.listdir(os.getcwd()):
        if isDir(file):
            continue
        if file == self:
            continue
        if count == 3:
            break
        try:
            text = read(file)
            if test(query, file, flags=re.I):
                count += 1
                store.append(file)
                print(  'found a file', file  )
        except Exception as e:
            print(  file  )

    [openFile(file) for file in store]

def findFile(key, query, dir="", ignore=None, multiple=False):
    files = getFiles2(dir, key=key)
    runner = lambda x: test(query, read(x))
    if multiple:
        return smallify([abspath(file) for file in filtered(files, runner)])
    return abspath(finder(files, runner))


def createRE(mode):
    map = {
        "jsfiddle": [
            'value: {\s*html:\s*"\s*',
            '\s*",\s*js:\s*"\s*',
            '\s*"\s*,\s*css:\s*"\s*',
            '\s*"\s*},\s*fiddle: {',
        ]
    }
    catcher = "([\w\W]+?)"
    return catcher.join(map[mode])


def formatter(k, v, i, d, extra):
    prefix = parens(str(i), "braces") + d if i else ""
    newlines = ""
    start = prefix + parens(str(k).upper(), "braces") + d

    v = ("\n" + linebreak + "\n").join(v)
    return start + indent(v, extra + len(start), border=True)[len(start) :]


def subprocess_cmd(command):
    process = subprocess.Popen(
        command,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        shell=True,
    )
    success, error = [item.decode("utf-8") for item in process.communicate()]
    return error if error else success


def addBackSlashes(s, target):
    dict = {}
    if "quotes" in target:
        dict["'"] = "\\'"
    return drep(s, dict)


def fisdfndall(regex, s):
    product = re.findall(regex, s, flags=re.M)
    if isTuple(product[0]):
        store = []
        for item in product:
            for el in item:
                if el:
                    store.append(el)
        return store
    else:
        return product


def callEdit(file, callee="english.js", *parsers):
    outpath = None
    if isArray(file):
        outpath = file[1]
        file = file[0]

    text = call(callee, file)

    product = pipe(*parsers)(text)
    if len(product) > 100:
        write(outpath if outpath else file, product)


def createWebFile(html="", js="", css=""):
    s = ""
    if html:
        s += div("html", html, indent=True) + "\n\n"
    if css:
        s += div("style", css, indent=True) + "\n\n"
    if js:
        s += div("script", js, indent=True)
    return s.replace("\\n", "\n").replace("\\", "")


def constructModuleImports(s, recursive=False):
    if not s:
        return s

    dependencies = getNativeDependencies(s)
    if not dependencies:
        return s

    nativeImports = toString([nativemap[x] for x in sorted(dependencies, reverse=True)])
    userImports = "from base import " + ", ".join(analyzeDependencies(s, recursive))
    return nativeImports + "\n" + userImports


def variableSorter(items):
    bindings = filtered([getBinding(item) for item in items], notNone)

    def parser(x):
        regex = Regex(bindings, "wb")
        items = re.findall(regex, x)
        product = len(items)
        return (product, len(x))

    items.sort(key=parser)
    return items


def Search(regex, item):  # helper # d
    match = re.search(regex, item)
    print(match)
    if not match:
        print("sup")
        return None
    if len(match.groups()) is 1:
        return match.group(1)
    if len(match.groups()) > 1:
        return match.groups()
    return match.group(0)


def deleter(s):
    deletesA = [
        "(?:\n *)(?=\n *\n *)",
        "^(?:let |const )?[a-z.]+(?: =\s(?:(?:'''|`)[\w\W]+?(?:'''|`).*\n?)|\(.*\n?)",
        "^ *(?://|#|<!--).*\n",
    ]
    deletesB = [
        ".*?\(.*?\) {\s*},?",
    ]

    s = re.sub(Regex(deletesA), "", s, flags=re.M)
    return s


def mergeRunner(*args):
    if len(args) == 1:
        product = args[0]
    elif len(args) == 2:
        product = {args[0]: args[1]}
    elif len(args) == 3:
        product = {args[0]: {args[1]: args[2]}}
    elif len(args) == 4:
        product = {args[0]: {args[1]: {args[2]: args[3]}}}
    return product


def doubleWrite(a, parser, outpathA="", outpathB="", *args):
    text = read(deleter(a))
    content = parser(text, *args)
    if not outpathB:
        print(content)
    else:
        if not outpathA:
            outpathA = a
        write(outpathA, content[0])
        append(outpathB, content[1], newlines=2)


def hrefRE(ignore="", wrap=False, start="", end="", www=""):
    href = "href="
    ending = '[" >]'
    if wrap:
        href = parens(href, "lb")
        ending = parens(ending, "la")
    if ignore:
        ignore = "(?<!" + Regex(ignore) + ")"

    return start + href + '"?' + www + "(.*?)" + ignore + ending + end


def createJavascriptClassFile(name, file):
    text = read(file)
    prototypeRE = '^' + name + '.prototype[\w\W]+?(?=\n\w)'
    classRE = '^class \w*?' + name + '\w* {[\w\W]+?(?=\n\w)'
    regex = prototypeRE + '|' + classRE
    items = re.findall(regex, text, flags = re.M | re.I)

    gettersAndSetters = []
    prototypes = []
    main = []
    for item in items:
        tag = search('prototype(?:\.constructor)?|class', item)
        if tag == 'class':
            regex = '(?<=^|\n)    (?:get|set)\\b[\w\W]+?(?=\n    \w|$)'
            product = re.findall(regex, item)
            gettersAndSetters.extend(product)
        elif tag == 'prototype':
            prototypes.append(item)
        else:
            main.append(item)
            
    gettersAndSetters.sort()
    prototypes.sort()

    text = 'class ' + name + ' ' + brackify(gettersAndSetters)
    text += snsn + toString(main + prototypes) 
    write(name + '.js', text)

def shunt(s, query):
    # DESCRIPTION shunts items from one file. Kind of Like Recursive Creator. 
    store = []
    chunkRE = "(?<=\n)[\w\W]+?(?=\n\w|$)"

    def parser(x):
        nonlocal store
        text = x.group(0)
        if test(Regex(query), text):
            store.append(text)
            return ""
        else:
            return text

    return replace(chunkRE, parser, s), store


def transform(input, keymap=None, valmap=None):  # d
    def parser(el, map):
        if type(el) == list or type(el) == dict:
            return el
        if not map:
            return el
        if el not in map:
            return el
        return map[el]

    return {parser(k, keymap): v for k, v in input.items()}


def pathup(dir, n=1):
    delimiter = "/"
    dir = os.path.expanduser(dir)
    if dir.endswith("/"):
        dir = dir[:-1]
    return delimiter.join(dir.rsplit(delimiter, n)[:n])
    if n == 1:
        return dir.rsplit("/", 1)[0]
    for i in range(n):
        dir = search("(.*?)" + "/\w+" * n + "$", dir)
    return dir


def pathjoin(*args):
    s = ""
    for i, arg in enumerate(args):
        if i > 0 and arg.startswith("/"):
            s += arg[1:]
        else:
            if arg.startswith("~"):
                arg = os.path.expanduser(arg)
            s += arg

        if not s.endswith("/"):
            s += "/"
    return s[:-1] if s.endswith("/") else s


def Test(fn, file):
    text = read(file)
    store = Storage()
    for item in getFunctions(text):
        product = fn(item)
        name = getFunctionName(item)
        if isEmpty(product):
            store.add("zero", name)
        else:
            store.add("one", product)
    store.removeDuplicates("one")
    write("z.json", store.value())


def wordfixer(x):
    s = x.group(0)
    if s.endswith('1'): return s[:-1] + '!'
    if s.startswith(':'): return capitalize(s[1:])
    
def spellcheck(s):
    pmwb = read('pmwb.json')
    dict = {**pmnb, **pmwb}
    regex = Regex([Regex(pmnb, "nb"), Regex(pmwb, "wb")])
    text = replaced(regex, dict, s)
    
    return frep(text,  {
        ':[a-z]{2,}': wordfixer,
        '(?:^|\n|  )(\w)': lambda x: sn + capitalize(x.group(1)),
        '(?<=\w)(?=\n)': lambda x: '.',
    }, flags=0).strip()


def rpw(file, parser, outpath=None, *args):
    product = None
    if isArray(file):
        product = parser(*file)
    else:
        product = parser(read(file), *args)

    if isArray(product) and len(product) == 2:
        write(file, product[0])
        write(outpath, product[1])

    elif outpath:
        write(outpath, product)

    else:
        print(product)


def getErrorNameAndMessage(e):
    name = str(e.__class__.__name__)
    message = str(e)
    return name, message

def parseError(e):
    errorType = str(e.__class__.__name__)
    message = str(e)
    store = []
    trace = e.__traceback__
    while trace:
        name = trace.tb_frame.f_code.co_name
        if name in ["load"]:
            break
        lineno = trace.tb_lineno
        store.append({name: lineno})
        trace = trace.tb_next
    return {"name": errorType, "message": message, "trace": store}


def appendjson(file, data, placeholder={}):
    store = readjson(file, placeholder)
    if isArray(store):
        store.append(data)

    elif isObject(store):
        store.update(data)

    writejson(file, store)


def scrapeYouTubeLink(url):
    text = getRequest(url)
    youtubeRE = '{"videoPrimaryInfoRenderer":{"title":{"runs":\[{"text":"(.*?)"}]},"viewCount":{"videoViewCountRenderer":{"viewCount":{"simpleText":"(.*?) views"}'
    try:
        title, views = search(youtubeRE, text)
        return {"title": title, "views": int(views.replace(",", "")), "url": url}
    except Exception as e:
        return None


def removeLookAround(s):
    def countParentheses(s):
        return len(re.findall("(?<!\\\\)[()]", s))

    store = ""
    items = re.split("(?=\(\?<?[!=])", s)
    for item in items:
        if test("^\(\?<?[!=]", item):
            while True:
                item = replace(".*?(?<!\\\\)\)", "", item)
                if isEven(countParentheses(item)):
                    break
        store += item

    return store


def tlexcepthook(a, b, c):
    print(comment(str(b), getExtension(__file__), border=True, width=40))


def tll(x):
    sys.excepthook = tlexcepthook

    pprint(x)
    raise Exception("TL-ERROR")


def tl(*args):
    sys.excepthook = tlexcepthook

    for s in args:
        print(s)
    raise Exception("TL-ERROR")


def recursiveAnalyzeDependencies(input, file = None):
    importdict = jspygetter(file, 'importdict')

    store = []
    lib = createFunctionLibrary(read(file))

    if isFunction(input):
        name = input.__name__
    elif isFile(input):
        
        return

    def parser(x):
        if x not in store:
            store.append(x)

        s = lib.get(x)
        if not s:
            return

        items = getImplied(s)
        for item in items:
            if item in store:
                continue
            else:
                parser(item)

    parser(name)

    natives = []
    functions = []
    for item in store:
        if item in importdict.keys():
            natives.append(importdict.get(item))
        else:
            functions.append(lib.get(item))

    return toString(natives) + snsn + toString(functions)


def notNone(s):
    return s != None


def deepMerge(a, b):
    if not a:
        a = {}
    if isPrimitive(a) and isPrimitive(b):
        return [a, b]
    if isArray(a) and isPrimitive(b):
        return a + [b]
    if isArray(a) and isArray(b):
        return a + b
    if isObject(b):
        keys = b.keys()
        for key in keys:
            if key in a:
                a[key] = deepMerge(a[key], b[key])
            else:
                a[key] = b[key]
        return a
    return a


def merge(a, b):  # d
    for key, val in b.items():
        if key not in a:
            a[key] = val

        else:
            if type(a[key]) == list and type(val) == list:
                a[key].extend(val)
            elif type(a[key]) == dict and type(val) == dict:
                a[key].update(val)
            elif type(a[key]) == str and type(val) == str:
                a[key] = val
            else:
                print("error")
    return a


def createImportLibrary(s):
    importRE = "^(?:from|import) .*"
    items = re.findall(importRE, s, flags=re.M)
    store = {}

    for match in items:
        if " as " in match:
            store[getLastWord(match)] = match
        elif "from " in match:
            for el in re.split("\W+", search("from \w+ import (.*)", match)):
                store[el] = match
        else:
            store[getSecondWord(match)] = match

    return stringify(store)


def parseGoogleLinks(links):
    store = []
    data = {}

    for url in links:
        try:
            tag = search("www\.(\w+?)\.", url).lower()
            if tag == "youtube":
                store.append(scrapeYouTubeLink(url))
            elif tag == "reddit":
                store.append(scrapeRedditLink(url))
        except Exception as e:
            print(url)
            print(str(e))

    store.sort(key=lambda x: x["views"], reverse=True)
    return store


def organizeRegexParser(s):
    item = "re"

    def storeParser(x):
        a, b, c = x.groups()
        return "const " + c + "RE" + " = " + a

    def replaceParser(x):
        a, b, c = x.groups()

        return c + "RE" + b

    s, store = mreplace(
        r"((?<=\w\()(?<!\\)[\"\'].*?(?<!\\)[\'\"])(,.*?)(?://|#) ?" + item + " (\w+)",
        [replaceParser, storeParser],
        s,
    )
    return replace("(?<=\n(?:import os|//inserts)\n\n)", "\n".join(store), s, "")


def isUnchangedFile(file):
    if not isTodayFile(file):
        return False
        
def isRecentlyCreatedFile(file, limit = 1600):
    if not isFile(file):
        return False
    a = mdate(file)
    b = time.time()
    delta = int(b) - int(a)
    print('Current delta: ', delta, 'the limit is ', limit, 'until re-writing the file', file, 'again'    )
    return delta < limit

def getExistingFile(file, minutes = 25, reset = False):
    if RESET or reset:
        return False 
    if not isFile(file):
        return False
    a = mdate(file)
    b = time.time()
    delta = int(b) - int(a)
    if delta > minutes * 60:
        return False
    else:
        return True


class RepeatedStorage:
    def __init__(self, items, runner = None, mode = str):
        self.store = {}
        self.mode = mode
        if runner:
            for item in items:
                self.add(*runner(*item))

    def add(self, k, v):
        current = self.store.get(k)
        if current:
            if isString(current):
                if self.mode == list:
                    self.store[k] = [current, v]
                elif self.mode == str:
                    self.store[k] += snsn + v
            else:
                if self.mode == list:
                    self.store[k].append(v)
        else:
            self.store[k] = v

    @property
    def value(self):
        return self.store

class NumberStorage:
    def __init__(self):
        self.store = {}

    def get(self, k):
        return self.store[k]

    def add(self, k, v):
        if isNumber(self.store.get(k)):
            self.store[k] += v
        else:
            self.store[k] = v

class SimpleStorage:
    def __init__(self, sort=False):
        self.store = {}
        self.sort = sort

    @property
    def value(self):
        if self.sort:
            for k in self.store.keys():
                self.store.get(k).sort(key=self.sort)
        return self.store

    def add(self, k, v = None):
        if k not in self.store:
            self.store[k] = []

        if isArray(v):
            self.store[k].extend(v)
        else:
            self.store[k].append(v)
            
    def get(self, key):
        return self.store.get(key)

class Scraper(SimpleStorage):
    def __init__(self, regex, outpath = 'scrape.json', flags = 0):
        super().__init__()
        self.regex = regex
        self.flags = flags
        self.outpath = outpath

    def get(self, key, text):
        items = re.findall(self.regex, text, flags=self.flags)
        if items:
            self.add(key, items)

    def export(self, outpath):
        if self.store:
            print(  'Exporting: ' + outpath, 'scraped texts')
            append(outpath, self.store)
        else:
            print(  'no exports at scraper'  )

def createCodeLibrary(*files):
    if not files:
        files = ['utils.py']

    #  lang = getLangFromFile(files[0])
    name = basename(files[0]) + 'lib.json'

    if isRecentlyCreatedFile(name):
        print('getting preWrittenFile', name)
        product = read(name)

    else:
        text = toString([read(file) for file in files])
        #  scrape = Scraper(startingCommentRE, flags=re.M)
        matches = re.findall(namedCodeBodyAllRE, text)

        def runner(text, className, variableName, functionName):
            #  if functionName:
                #  scrape.get(functionName, text)
            key = variableName or functionName or className
            return key, text

        product = RepeatedStorage(matches, runner, mode=str).value
        write(name, product)
        #  scrape.export(lang + 'commentlib.json')

    return product

def createLibrary(input):
    dictStore = {}
    listStore = []
    if isString(input):
        input = getChunks(input)

    if isArrayLike(input) and isString(input[0]):
        for i, item in enumerate(input):
            item = item.strip()
            name = getName(item)
            if name:
                dictStore[name] = item
            else:
                listStore.append(item)

    return dictStore, listStore


def reconstitute(cat):
    def parserA(s):
        if s.startswith("async"):
            return indent("async " + s[15:], 8)
        else:
            return indent(s[9:])

    def parserB(s):
        text = s.group(0)
        prefix = "function "
        if test("^ *async", text):
            text = text.lstrip()[6:]
            prefix = "async " + prefix
        return prefix + indent(text)

    if cat == "function-method-to-object-method":
        return parserA
    if cat == "object-method-to-function-method":
        return parserB


def updateStorage(file, *args):
    product = {}
    prev = {}
    if len(args) == 1:
        product = args[0]
    elif len(args) == 2:
        product = {args[0]: args[1]}
    elif len(args) == 3:
        product = {args[0]: {args[1]: args[2]}}
    elif len(args) == 4:
        product = {args[0]: {args[1]: {args[2]: args[3]}}}

    if isFile(file):
        prev = read(file)
        if prev == "null":
            prev = {}

    product = deepMerge(prev, product)
    write(file, product)


def facebookChat(to, message):
    import fbchat
    client = fbchat.Client(ENV_FACEBOOK_EMAIL, ENV_FACEBOOK_PASSWORD, BROWSER_AGENT)
    if not client.isLoggedIn():
        client.login(ENV_FACEBOOK_EMAIL, ENV_FACEBOOK_PASSWORD)

    if to == None or to == "kevin":
        to = client.uid
    elif isString(to):
        users = client.fetchAllUsers()
        matches = client.searchForUsers(to)
        to = matches[0]

    message_id = client.send(
        fbchat.models.Message(message),
        thread_id=to,
        thread_type=fbchat.models.ThreadType.USER,
    )
    print("sent message to " + to)


def parseChinese(levels):
    def parser(level):
        link = chineseGithubBase + str(level) + ".txt"
        text = remover((read(temp)))
        regex = "(.*?)[ \t].*?[ \t](.*?)[ \t].*?[ \t](.*)"
        items = getColumns([1, 3, 5], text)
        pinchi = {}

        for kanji, pinyin, english in items:
            if test("\t", english):
                pinyin, english = english.split("\t")

            pinchi[pinyin] = kanji
            print(kanji)
        return pinchi

    chinese = []
    english = []

    for level in range(1, levels + 1):
        pinchi = parser(level)
        chinese.append(pinchi)

    write("pinyintochinese.json", chinese)


def reduced2(items, parser, acc=""):
    def runner(item, product):
        nonlocal acc
        if isPrimitive(acc):
            acc += toString(product) + "\n"
        elif isArray(acc):
            acc.append(product)
        elif isObject(acc):
            acc[item] = product

    if isArray(items) and isFile(items[0]):
        for item in items:
            product = parser(item, read(item, "text"), size(item))
            runner(item, product)

    elif isArray(items):
        for item in items:
            product = parser(item)
            runner(item, product)

    elif isObject(items):
        for k, v in items.items():
            product = parser(k, v)
            runner(k, product)

    return acc


def insert(text, location, content):  # d
    print(location, content)
    replace_count = 1
    newline = ""

    if location.startswith("0"):
        location = location[1:]
        replace_count = 0
    if location == "start":
        location = "^."
    elif location == "end":
        location = ".$"

    regex = location
    fuzzy = ".*" in location

    if fuzzy:
        regex = location + r"\n"
        newline = "\n"

    def parser(x):
        if location == "^.":
            return content + "\n" * 1 + x.group(0)
        elif location == ".$":
            return x.group(0) + "\n" * 1 + content
        return x.group(0) + content + newline

    return re.sub(regex, parser, text, flags=re.IGNORECASE, count=replace_count)


def doubleReplace(s, outer, inner):
    store = []
    outerRegex = R.captureBetween(
        outer["start"], outer["end"], outer["inclusive"], outer["spaces"]
    )

    def outerParser(a):

        text = a.group(0) if outer["inclusive"] else a.group(1)
        innerRegex = R.captureBetween(
            inner["start"], inner["end"], inner["inclusive"], inner["spaces"]
        )

        def innerParser(b):
            nonlocal store
            spaces = " " * inner["spaces"]
            innerProduct = inner["storeParser"](b)
            store.append(innerProduct)

            return inner["replacementParser"](b, spaces)

        return replace(innerRegex, innerParser, text, re.M)

    return replace(outerRegex, outerParser, s, re.M), store


def deepFlatMerge(a, b):
    if not a:
        a = {}
    if isPrimitive(a) and isPrimitive(b):
        return [a, b]
    if isArray(a) and isPrimitive(b):
        raise Exception("raasdf not suuposed toy")
        return a + [b]
    if isArray(a) and isArray(b):
        return a + b
    if isObject(b):
        keys = b.keys()
        for key in keys:
            if key in a:
                if isString(a[key]) and isString(b[key]):
                    count = 1
                    while key + str(count) in a:
                        count += 1
                    a[key + str(count)] = b[key]
                else:
                    a[key] = deepFlatMerge(a[key], b[key])
            else:
                a[key] = b[key]
        return a
    return a


def createFunctionRegex(keys, capture=False, inner=False):  # messy
    start = r"(?:(?<=\n)|^)"
    end = r"(?=\n\w|$)"
    cdf = r"(?:class|(?:async )?function|def)"
    ccdf = r"(?:const|class|(?:async )?function|def)"
    firstLineEnd = ""

    if capture:
        start += "("
        end = ")" + end
        ccdf = re.sub("\?\:", "", ccdf, count=1)
        firstLineEnd = "(:|{)"

    body = "[\w\W]+"

    if inner == True:
        return (
            "(?<=\n)(    (?:def )?"
            + Regex(keys, capture=capture)
            + r"\b[\w\W]+?)(?=(?:\n    (?:\w|})|$))"
        )

    product = (
        start
        + ccdf
        + " "
        + Regex(keys, capture=capture)
        + r"\b.*?"
        + firstLineEnd
        + "\n"
        + body
        + ")(?=\n\w|$)"
    )
    return product


def google2(query, limit=None, domain=""):
    map = {
        "jsfiddle": "net",
        "codepen": "io",
        "stackoverflow": "com",
        "quora": "com",
        "reddit": "com",
        "wikipedia": "org",
        "sdfwikipedia": "org",
        "wiksdfxipedia": "org",
    }

    match = search(Regex(map) + "$", query)
    if match:
        query = query[: -len(match)].strip()
        domain = match

    regex = 'href="(?:/url\?q=)?(https://www\.(?!google|pinterest).*?)(?:&amp;|")'
    query = query.replace(" ", "+")

    if domain:
        suffix = map.get(domain) or "com"
        query += "&&as_sitesearch=" + domain + "." + suffix

    url = "https://google.com/search?as_q=" + query
    text = request(url)
    store = setify(re.findall(regex, text))
    if limit:
        store = store[0:limit]
    return raiser(store)


def every(items, fn, fallback=True):
    if not items:
        return fallback
    for item in items:
        if not fn(item):
            return False
    return True


def stdsringBuilder(store, keys, lang="py", name=None, printer=False):
    if not name:
        name = retrieveVariable(keys, n=2).lower()
    items = [store.get(key) for key in keys]
    if every(items, lambda x: x == None):
        return None

    if printer:
        printItems(store.get("names-list"))

    s = ""

    for i, item in enumerate(items):
        if not item:
            continue
        if keys[i] == "variables":
            item = variableSorter(item)
        else:
            item.sort(key=len)
        if not keys[i] == "import-statements":
            s += comment(keys[i], lang, border=True, width=80)
        s += toString(item)
        s += "\n"

    s += comment(fullDateStamp(), lang, border=True)

    if name == "utils":
        try:
            s = getNativeDependencies(s) + sn + s
        except:
            pass

    elif name == "base":
        s = "from utils import *\n" + s

    return print(s)
    write(name + "." + lang, s)


def comment(s, lang="py", border=False, width=None):
    commentDelimiter = jspymap.get(lang).get("comment")
    if s == 'linebreak':
        return '\n' + commentDelimiter + ' ' + '-' * 80 + ' ' + commentDelimiter + '\n'
    if s == 'datestamp':
        s = fullDateStamp()

    if border:
        if width:
            line = commentDelimiter + " " + "-" * width + " " + commentDelimiter
            length = len(line)
            middleLength = int((width - len(s)) / 2)
            postSpace = " "
            if middleLength * 2 + len(s) != width:
                postSpace += " "
            return (
                "\n"
                + line
                + "\n"
                + commentDelimiter
                + " "
                + " " * middleLength
                + s
                + " " * middleLength
                + postSpace
                + commentDelimiter
                + "\n"
                + line
                + "\n\n"
            )
        else:
            s = "-" * len(s) + "\n" + s + "\n" + "-" * len(s) + "\n\n"
    return replace("^(?=\S)(?![#/])", commentDelimiter + " ", s, flags=re.M)


    
def btest(regex, s):
    return test(parens(regex, 'b'), s, flags=re.I)


def sliced(s, start = 0, end = 0):
    if isString(start):
        start = len(start)
    return s[start:end]
    
def add(store, item):
    if isArray(item):
        store.extend(item)
    else:
        store.append(item)

def prepareAsArray(x, fn):
    if isArray(x):
        return x
    return fn(x)

def pathParser2(x):
    def runner(x):
        if isFile(x):
            return abspath(x)

        if x.endswith("*"):
            x = sliced(x, 0, -1)
            if '/' in x:
                dir, name = x.rsplit('/', 1)
            else:
                dir = None
                name = x
                #  tester = btest
            dir = pathway(dir)
            files = publicdir(dir, lambda x: btest(name, x))
            if len(files) > 5:
                return files[0:5]
            return files

    store = []
    items = prepareAsArray(x, lambda x: x.split(' '))
    for item in x.split(' '):
       add(store, runner(item))
    return store



def pathParser(x):
    if x.endswith("*"):
        x = sliced(x, -1)
        if ' ' not in x:
            if '/' in x:
                dir, name = x.split('/')
            else:
                dir = None
        try:
            dir, query = search("(.*?/)([^\s/]+)$", x)
            dir = pathway(dir)
            if isDir(dir):
                return getFiles(dir, key=query)
            else:
                print("dir " + dir + " doesn't exist.")
        except:
            name = x[:-1]
            return publicdir(os.getcwd(), lambda x: btest(name, x))

    if isFile(x):
        return abspath(x)
    else:
        try:
            x, functions = search("(.*?)/([\w,*]+)$", x)

            if "*" in functions and isDir(x):
                return getFiles(dir, key=filepath[:-1])

            if isFile(x):
                return {x: functions.split(",")}
            else:
                x = pathway(x)
                if isFile(x):
                    return x
                else:
                    x, functions = search("(.*?)/([\w,*]+)$", x)

                if "*" in functions and isDir(x):
                    return getFiles(dir, key=filepath[:-1])

                if isFile(x):
                    return {x: functions.split(",")}

        except:
            return None


def alignEquals(s):
    if isObject(s):
        s = stringify(s)
    delimiters = [":"]
    for delimiter in delimiters:
        originalDelimiter = delimiter
        if delimiter == ":":
            items = "?)"
        else:
            items = "?"
        delimiter = "(?<![" + items + "])" + rescape(delimiter)
        lines = s.strip().split("\n")
        longest = reduced3(
            0, lines, lambda acc, line: max(acc, searched(delimiter, line))
        )
        s = ""
        for line in lines:
            if line.strip() == "":
                continue
            elif not test(delimiter, line):
                s += line + "\n"
            else:
                a, b = re.split(delimiter, line, maxsplit=1)
                b = " " + b.strip()
                spaces = " " * (longest - len(a))

                if originalDelimiter == ")":
                    s += a + originalDelimiter + spaces + b + "\n"
                elif originalDelimiter == ":" or originalDelimiter == "=":
                    s += a + spaces + originalDelimiter + b + "\n"
    return s


def isPrototype(s):
    return test('\.prototype\.', s)

def determineDestination(name, s, tallylib=None):
    if isImportString(s):
        return "import-statements"
    if isPrototype(s):
        return 'prototypes'
    if isClassString(s):
        return "classes"
    if isFunctionString(s):
        if False == True:
            pass

        elif name and test("^get|^is|^has|^looksLike|ed$|dir$|rep", name):
            return "utility-functions"

        elif tallylib and tallylib.get(name) == 1:
            return "once"

        elif tallylib and tallylib.get(name) > 5:
            return "utility-functions"

        else:
            return "functions"

    if isStaticObjectString(s):
        if "\n" in s:
            return "static-variables"
        return "variables"

    if isDynamicObjectString(s):
        return "dynamic-object-variables"

    if isDynamicVariable(s):
        return 'dynamic-variables'

    if isVariableString(s):
        if "\n" in s:
            return "long-variables"
        return "variables"

    return None


def checkFile(file):
    s = read(file)
    store = []
    store = {}
    lang = getLang(file)
    lib = createFunctionLibrary(s)
    keys = lib.keys()
    delete = True

    if len(keys) > 10:
        os.system("clear")
        print(file)
        print(linebreak)
        print("keys: ", ", ".join(keys))
        answer = input("Which keys do you want? ")
        answer = answer.split(" ")
        keys = shared(keys, answer)

    for key in keys:
        item = lib[key]
        answer = ""
        if lineCount(item) > 14:
            answer = "KEEP"
        else:
            print(linebreak)
            print(lib[key])
            print(linebreak)
            answer = inputter()
            os.system("clear")
        if answer == "k":
            delete = False
        if answer == "c":
            return "END"
        elif answer:
            if isFunctionString(lib[key]):
                store[key] = lib[key]
            else:
                if not "CONSTANTS" in store:
                    store["CONSTANTS"] = []
                store["CONSTANTS"].append(lib[key])

    toLibrary(lang, store)
    if delete:
        return "DELETE"


def isToday(date):
    at = datetime.datetime.fromtimestamp(date)
    now = datetime.datetime.now()
    sameDay = at.day == now.day
    sameMonth = at.month == now.month
    return sameDay and sameMonth

def isTodayFile(file):
    if not isFile(file):
        return False
    return datestamp(mdate(file)) == datestamp()


def isFirstTimeToday(file):
    return not isTodayFile(file)


def pythonPrettier(file, outpath, reset=False):
    if not reset and isTodayFile(outpath):
        print("returning " + outpath + " as pre-made file")
        return read(outpath)
    runFile("english.js", file, outpath)
    if not runFile(outpath):
        raise Exception("outpath yields error")
    print("initial prettier is successful")
    return read(outpath)


def organizeFile(file, *outpaths):
    lang = getLangFromFile(file)
    temp = TempFile(file, lang)
    print("the language sniffed for the file is " + lang)
    references = jspymap[lang]["references"]
    cleanerRE = jspymap[lang]["cleanerRE"]
    store = SimpleStorage()

    reset = True
    if reset or isFirstTimeToday(temp.b):
        if lang == "py":
            s = Black(read(file))
        elif lang == "js":
            s = pythonPrettier(file, temp.a, reset=reset)

        cleanedText = preclean(s, lang)
        write(temp.b, cleanedText)
        if not runFile(temp.b):
            renameFile(temp.b, temp.c)
            if runFile(temp.a):
                print("the original temp.a file works. ")
                print(" the error msut occur after the preclean.")
                print("starting an iteration process.")
                n = 1
                while not runFile(temp.c):
                    print("tempc filed on iteration " + str(n))
                    write(temp.c, preclean(s, lang, n))
                    n += 1
                    if n > 3:
                        raise Exception("Error: iteration went over 3")
                print("iteration process ended on n = " + str(n))

            openFile(temp.c)
            raise Exception("The file is no good. it has error. Do it again.")
    else:
        print("reading " + temp.b + " because it has been succesfully created")
        cleanedText = read(temp.b)

    print("starting next step. passed the initial checks.")
    return

    lib, otherItems = createLibrary(cleanedText)
    baseKeys = list(lib.keys())
    items = getDependencies(cleanedText, baseKeys)

    for file in references:
        items.extend(getDependencies(file, baseKeys))

    tallylib = Tally(items).get()

    print("finished tallylib")
    for name, item in lib.items():
        destination = determineDestination(name, item, tallylib)
        if destination:
            store.add(destination, item)
            if destination == "once":
                store.add("names-list", name)

    for item in otherItems:
        destination = determineDestination("", item)
        if destination:
            store.add(destination, item)

            if destination == "once":
                print("whoa from bottom", item)
                store.add("names-list", name)

    print("finished determine destination")
    ARCHIVE = ["once"]

    COMBINE = [
        "import-statements",
        "factory-functions",
        "function-variables",
        "variables",
        "long-variables",
        "static-object-variables",
        "utility-functions",
        "functions",
        "classes",
        "dynamic-object-variables",
    ]

    BASE = [
        "import-statements",
        "dynamic-object-variables",
        "functions",
        "forbidden-functions",
    ]

    UTILS = [
        "variables",
        "long-variables",
        "static-object-variables",
        "utility-functions",
    ]

    if len(outpaths) == 1:
        utilOutpath = outpaths[0]
        archiveOutpath = "archive4"
    elif len(outpaths) == 2:
        utilOutpath, archiveOutpath = outpaths
    else:
        utilOutpath = "utils4"
        archiveOutpath = "archives4"

    print("starting string builders")
    stringBuilder(store, ARCHIVE, lang, archiveOutpath, printer=True)
    stringBuilder(store, COMBINE, lang, utilOutpath, printer=False)


def cleanFile(text, references=[], shunt=None):
    library = createFunctionLibrary(text)
    lang = "js" if search("^function|^def", text, flags=re.M) == "function" else "py"
    regex = Regex(library, "wb")
    tally = Tally(re.findall(regex, text))
    for file in references:
        tally.extend(re.findall(regex, read(file)))

    endpoints = {
        "constants": [],
        "functions": [],
        "classes": [],
        "main": [],
        "zero": [],
    }
    shuntpoints = SimpleStorage()
    shuntregex = Regex(shunt, "qb") if shunt else ""
    docs = SimpleStorage()
    map = {
        "class": "classes",
        "def": "functions",
        "async": "functions",
        "function": "functions",
        "if": "main",
    }

    for name, count in tally.value():
        endpoint = ""
        value = library[name]

        if count == 1:
            endpoint = "zero"
            docs.add(endpoint, name)

        elif shunt:
            match = search(shuntregex, value)
            if match:
                destination = shunt[match]
                shuntpoints.add(destination, value)
                docs.add(destination, name)

        else:
            tag = getFirstWord(value)
            if tag == "if" or tag == "else":
                print("if or else shudnt be here")
                continue
            endpoint = map[tag] if tag in map else "constants"

        endpoints[endpoint].append(value)

    product = ""
    zero = ""

    for k, v in endpoints.items():
        if not exists(v):
            continue
        s = toString(sorted(v, key=len), (1 if k == "constants" else 2))
        if k == "zero":
            zero = s
        else:
            product += s + "\n\n"

    return product.strip(), zero, shuntpoints.value(), docs.value()


def printItems(
    items,
    alignment="J",
    fontWeight="",
    fontSize=11,
    fontFamily="Times",
    orientation="P",
    title=None,
):
    if not items:
        print("no items")
        return
    if getType(items) == "dict_keys":
        items = list(items)

    def format(item, i):
        n = i + 1
        delimiter = ".  "
        if n < 10:
            delimiter += " "

        n = str(n)

        if isPrimitive(item):
            return n + delimiter + str(item)
        elif isArrayLike(item):
            return n + delimiter + item[0] + ": " + str(item[1])

    fpdf = FPDF()
    fpdf.set_font(fontFamily, fontWeight, fontSize)
    leftMargin = 8
    topMargin = 30

    if isObject(items):
        items = list(items.items())
    elif isString(items):
        items = [items]
    elif getType(items) == "dict_items":
        items = list(items)

    def fpdfFooter(fpdf):
        footerText = "Page " + str(fpdf.page_no())
        width = 210 - leftMargin - fpdf.get_string_width(footerText)
        fpdf.text(width, fpdf.h - topMargin + 20, footerText)

    startpoint = 0

    def runner(items, start=0):
        nonlocal startpoint
        nonlocal title
        fpdf.add_page(orientation=orientation)

        if title:
            fpdf.set_font("Times", "B", 11)
            fpdf.cell(0, 5, title, 0, 1, "L")
            fpdf.set_font("Times", "", 11)
            fpdf.ln()
            title = False

        fpdfFooter(fpdf)
        y = 0
        n = 0
        lineHeight = 5
        columnWidth = 70
        columnHeight = 50
        for i, item in enumerate(items):
            startpoint += 1

            if i < columnHeight:
                n = 0
            elif i < columnHeight * 2:
                n = 1
            elif i < columnHeight * 3:
                n = 2

            fpdf.text(
                leftMargin + columnWidth * n,
                topMargin + lineHeight * y,
                format(item, i + start),
            )
            y += 1
            if y % columnHeight == 0:
                y = 0

    for i, chunk in enumerate(arrayChunks(items, size=150)):
        try:
            chunk.sort(reverse=True, key=lambda x: (int(x[1]), len(x[0])))
        except:
            pass
        runner(chunk, startpoint)

    name = "test9.pdf"
    fpdf.output(name, "F")
    commander(name)


def textEdit(s, dict, globalEdits=None, flags=re.M):
    regex = Regex(dict, "cdf")
    editor = Editor()
    store = BasicStorage()

    def parser(x):
        def addToStartParser(s):
            return s.group(0) + "\n" + indent(d["val"]) + "\n    "

        def addToEndParser(text):
            return appendClassMethod(text.strip(), d["val"])

        nonlocal store
        text = x.group(0)
        name = x.group(1)
        d = dict[name.lower()]
        if not d:
            raise Exception("error at appendclass")

        if isString(d):
            return d + "\n"
        if isObject(d):
            for childname, v in d.items():
                childregex = (
                    "    (?:def )?" + childname + "\([\w\W]+?(?=\n(?:    )?\w|$)"
                )
                if isArray(v):
                    text = editor.run((text), v, 1)
                elif isString(v):
                    if v == "get":
                        match = search(childregex, text, flags=re.I)
                        store.add(childname, match)
                    elif v == "extract":
                        text, match = mrep(childregex, text, flags=re.I)
                        store.add(childname, match[0])
                    else:
                        if test(childregex, text):
                            text = replace(childregex, indent(v), text, flags=re.I)
                        else:
                            text = appendClassMethod(text, v)
                elif isObject(v):
                    mode = v.get("mode")
                    if mode == "edit-start":
                        text = replaceFirstLine(text, addToStartParser)
                    elif mode == "edit-end":
                        text = addToEndParser(text)

                    elif not mode:
                        for a, b in v.items():
                            text = editor.run(text, d)

        elif isArray(d):
            text = editor.run(text, d)

        return text

    product = replace(regex, parser, s, flags=re.IGNORECASE)
    extra = (
        "\n#extra\n" + "\n" + dedent(toString(filtered(store.value().values()), 2))
        if exists(store.value())
        else ""
    )
    product += extra
    if globalEdits:
        product = drep(product, globalEdits, "wb")
    return product



def editController():
    print(fullDateStamp + ": " + 'START')

    seen = []
    db = Database()
    sys.excepthook = excepthook
    JS_ENDPOINT = "new.js"
    PY_ENDPOINT = "base.py"

    items = Database.parse(db.get('reddit'))
    if items:
        print(  '    ' + 'upvoting existing reddit posts'  )
        reddit = Reddit()
        reddit.upvote()

    if isLastDayOfMonth():
        ecprint("its the last day of the month")
        cleandir()
        cleanup()
        organizeFile()

    file = getMostRecentFile(lambda x: x.endswith("jsontest"))
    if not isTodayFile(file):
        ecprint("no editcontroller today")
        return

    edits = read(file)

    for k, v in edits.items():

        if k in ignore:
            continue
        else:
            seen.append(k)
            ecprint("editcontroller acting on [key]: " + k)


    print(fullDateStamp() + ": " + 'END')


def editcontrler2(testing=True, ignore=[]):
    ecprint('START')
    sys.excepthook = excepthook
    seen = []
    JS_ENDPOINT = "new.js"
    PY_ENDPOINT = "base.py"

    if exists(getStorage("reddit")):
        ecprint("upvoting reddit items")
        reddit = Reddit()
        reddit.upvote()

    if isLastDayOfMonth():
        ecprint("its the last day of the month")
        cleandir()
        cleanup()
        organizeFile()

    file = getMostRecentFile(lambda x: x.endswith("jsontest"))
    if not isTodayFile(file):
        ecprint("no editcontroller today")
        return

    edits = read(file)

    for k, v in edits.items():

        if k in ignore:
            continue
        else:
            seen.append(k)
            ecprint("editcontroller acting on [key]: " + k)

        if True == False:
            ecprint("this will never be printed. true cant equal false")

        elif k == "allnotes":
            name = "allnotes.json"
            updateStorage(changeFilename(name, "monthly"), v)

        elif k == "reddit":
            if not reddit:
                reddit = Reddit()
            reddit.ask(v)

        elif k == "catchall" or k == "errors":
            append(k + ".txt", v)

        elif k == "mv":
            iterate(v, moveParser)

        elif k == "js":
            append(JS_ENDPOINT, v)

        elif k == "edits":
            textEdit(v)

        elif k == "bash":
            regex = Regex([search("(?<=^alias )\w+|^\w+(?=\()", item) for item in v])
            regex = "^alias " + regex + ".*" + "|^" + regex + "\([\w\W]+?\n}"
            parser = lambda text: replace(regex, "", text, flags=re.M) + toString(v)
            rpwo(bashAliases, parser)

        elif k == "print":

            for item in v:
                pathObject = pathParser(item)

                if pathObject.endswith(".pdf"):
                    store.add("pdf", pathObject)

                elif isFile(pathObject):
                    store.set(pathObject, read(pathObject))

                elif isArray(pathObject):
                    for filepath in pathObject:
                        store.set(filepath, read(filepath))

                elif isObject(pathObject):
                    for a, b in pathObject.items():
                        if isFile(a):
                            text = read(a)
                            matches = [
                                numbered(x.strip()) for x in getFunctions(text, b)
                            ]
                            result = toString(matches, "\n\n")
                            store.set(a, result)

        elif k == "vue":
            rpwo(INDEX_ENDPOINT, sreplace, v)

        elif k == "maps":
            rpwo(JS_ENDPOINT, sreplace, v)

        elif k == "pyedits":
            rpwo(PY_ENDPOINT, sreplace, v, "rcb")

        elif k == "jsedits":
            rpwo(JS_ENDPOINT, sreplace, v, "rcb")

        elif k == "methods":
            append("methods.js", v)

        elif k == "py":
            a, b = filterTwice(v, isValidPython)
            if exists(a):
                append(PY_ENDPOINT, toString(a))
            if exists(b):
                append(ERRORS_ENDPOINT, toString(b))
                store.add(ERRORS_ENDPOINT, toString(b))

                def runner(x):
                    args = x["args"]
                    action = getLocalFunction(x["action"])
                    action(*args)

                iterate(v, runner)

        continue

        try:
            m = map[k]

            if isObject(m):
                if m.get("store"):
                    if isFunction(m.get("store")):
                        for item in v:
                            dict = m.get("store")(item)
                            store.merge(dict)
                    else:
                        store.add(k, toString(v, numbering=True))

                if m.get("append"):
                    if m["action"]:
                        v = m["action"](v)
                    append(m["endpoint"], v)

                elif m.get("mode"):
                    if m["mode"] == "dict":
                        for a, b in v.items():
                            m["action"](a, b)

                    elif m["mode"] == "file":
                        for item in v:
                            write(item, m["action"](read(item)))

                    elif m["mode"] == "list":
                        for item in v:
                            m["action"](item)

                elif "args" in m:
                    m["action"](m["endpoint"], v, m["args"])

                else:
                    m["action"](m["endpoint"], v)

            elif isFunction(m):

                if m == updateStorage:
                    ppprint(v)
                    updateStorage("allnotes.json", k, v)
                else:
                    hasIteration = hasTopLevelForBlock(toString(m))
                    argsLength = getArgsLength(m)
                    if argsLength == 1:
                        if hasIteration:
                            print("suup from has")
                            log.add(k, m(v))
                        else:
                            for item in v:
                                print("hi from item")
                                log.add(k, m(item))
                    elif argsLength == 2:
                        store = m(v, store)

            elif k == "allnotes":
                updateStorage("allnotes.json", v)
            elif k == "edits":
                file = v.pop("setfile") or "b.py"
                product = m["action"](read(file), v)

            elif k == "reddit":
                reddit = Reddit()
                reddit.upvote()

            elif k == "py":
                a, b = filterTwice(v, isValidPython)
                if exists(a):
                    append(PY_ENDPOINT, toString(a))
                if exists(b):
                    append(ERRORS_ENDPOINT, toString(b))
                    store.add(ERRORS_ENDPOINT, toString(b))

        except Exception as e:
            print(e)
            print("error at editcontroller: " + k)

    if testing:
        if exists(seen):
            pprint(seen)
        if "catchall" in seen:
            openFile("catchall.txt")
        if "allnotes" in seen:
            openFile("allnotesjanuary.json")

def getHost():
    return socket.gethostname()


def some(items, parser):
    for item in items:
        if parser(item):
            return True
    return False

def rmdir(dir):
    dir = expandUser(dir)
    if some(deleteprohibited, lambda item: test(item, dir)):
        print(  'delete prohibited'  )
        return
    else:
        print(  dir  )
        print(  'r u sure u wish to delete this directory'  )
        if input():
            shutil.rmtree(dir)
            print(  'removing directory'  )


def getArgsLength(f):
    return len(inspect.signature(f).parameters.values())


def hasForbiddenImport(s):
    return test("\\b(?:inspect|shutil|urllib|pathlib|socket|fs|process)\\b", s)


def downloadPicture(name, pictureLink):
    return urllib.request.urlretrieve(pictureLink, name)


def getDrive():
    import socket
    host = socket.gethostname()
    return GDRIVE if host == "penguin" else MDRIVE


def revert(x):
    if isString(x):
        x = [x]
    for file in x:
        shutil.copyfile(file + "copy", file)
        print("revert " + file)


def copyFile(file, destination=None):
    file = os.path.expanduser(file)
    to = (
        os.path.join(destination, os.path.basename(file))
        if destination
        else file + "copy"
    )
    if isFile(to):
        print(  'Shutil: File exists. Overwriting with shutil.copy'  )
        shutil.copy(file, to)
    else:
        shutil.copyfile(file, to)
    print("Shutil: Successfully copied", abspath(file), "to", to)
    #  print(  isFile(to)  )


def excepthook(etype, value, traceback):
    name = etype.__name__
    message = fullDateStamp() + " : " + str(name) + " : " + str(value)
    print(message)


def selfprint(val):
    name = retrieveVariableNameBack(val)
    print(name, val)


def getVariable(var):
    callers_local_vars = inspect.currentframe().f_back.f_locals.items()
    return [var_name for var_name, var_val in callers_local_vars if var_val is var][0]


def retrieveVariableNameBack(var):
    caller = inspect.currentframe().f_back.f_back.f_locals.items()
    print(caller)
    return
    return [var_name for var_name, var_val in caller if var_val is var][0]


def whoami():
    stack = inspect.stack()
    currentFrame = inspect.currentframe()
    callerFrame = inspect.getouterframes(currentFrame, 2)
    print(currentFrame)
    print("--")
    print(callerFrame)


def downloadImage(link, folder=None, name=None):
    if folder:
        name = ospj(folder, basename(link))

    with FilePathCorrector(name):
        urllib.request.urlretrieve(link, name)
        print("downloading image " + link + " as " + name)


def printVariableName(*names):
    frame = inspect.currentframe()
    frame = inspect.getouterframes(frame)[1]
    string = getString(inspect.getframeinfo(frame[0]).code_context[0], {"from": "("})
    product = re.findall("\w+", string)
    return product[1:]


def getsomethingasdf(var):
    for fi in reversed(inspect.stack()):
        names = [
            var_name
            for var_name, var_val in fi.frame.f_locals.items()
            if var_val is var
        ]
        if len(names) > 0:
            return names[0]


def getFrame(n=0):
    frame = inspect.currentframe()
    if n == 0:
        outer = inspect.getouterframes(frame.f_back)[1][3]
        if outer == "<module>":
            print("outer is module")
            return inspect.getouterframes(frame)[1][3]
        else:
            return outer



class Date:
    @staticmethod
    def fix(s):
        month, day = s.split(' ')
        day = int(day)
        month = shortmonthslist.index(month.lower()) + 1
        year = datetime.datetime.now().year
        product = datetime.datetime(year, month, day)
        return product.timestamp()

    @staticmethod
    def stamp(message = None, strife = "%A, %m-%d-%Y, %I:%M %p"):
        product = datetime.datetime.now().strftime(strife)
        return product + ': ' + message if message else product


def getVarName(var):
        for fi in reversed(inspect.stack()):
            names = [name for name, val in fi.frame.f_locals.items() if val is var]
            if len(names) > 0:
                return names[0]

def printReport(*args, **kwargs):
    commentDelimiter = jspymap.get(kwargs.get('lang'))
    if commentDelimiter:
        commentDelimiter += ' '
    else:
        commentDelimiter = ''

    linebreak = commentDelimiter + '-' * 60
    s = linebreak + sn
    for i, arg in enumerate(args):
        s += numbered(arg, i, mode='LIST') + sn
    s += linebreak
    print(s)
        

def sdf():
    foo = 'a'
    boo = 'b'
    (printReport(foo, boo))


def namegetter(var, n = -1):
    print(  getFunctionCaller()  )
    callers = inspect.currentframe().f_back.f_locals
    for name, value in reversed(list(callers.items())):
        print(  name, value  )
        #  if name in ['item', 'arg', 'k', 'v']:
            #  return value
        #  else:
            #  return name

        #  if type(value) == str or type(value) == int:
            #  return value
        #  else:
            #  return name
    tl()
        

def retrieveVariableName(var, n = -1):
    callers = inspect.currentframe().f_back.f_locals.items()
    if n == -1:
        return [name for name, val in callers if val is var][0]
def riiiietrieveVariiiiiadsfiableName(var):
    callers_local_vars = inspect.currentframe().f_back.f_locals.items()
    result = [var_name for var_name, var_val in callers_local_vars if var_val is var][0]
    print(result)
    return
    if result in ["arg", "args", "item", "items", "s", "arr", "list"]:
        return retrieveVariableNameBack(var)


def pylib(file="helpers.py"):
    name = getExtension(file) + "lib.json"
    append(name, {"FUNCTIONS": getFunctionNames(read(file))})
    append(
        name,
        {
            "NATIVE": "FPDF praw os re sys json time datetime inspect socket shutil subprocess requests html itertools pprint".split(
                " "
            )
        },
    )


def retrieveVariable(var, n=1):
    if n == 1:
        callers_local_vars = inspect.currentframe().f_back.f_locals.items()
    if n == 2:
        callers_local_vars = inspect.currentframe().f_back.f_back.f_locals.items()
    if n == 3:
        callers_local_vars = (
            inspect.currentframe().f_back.f_back.f_back.f_locals.items()
        )
    return [var_name for var_name, var_val in callers_local_vars if var_val is var][0]


def move(file, destination, force=False):
    destination = expandUser(destination)
    if not isFile(file):
        print("file not exist early return")
        return
    mkdir(destination)
    inpath = abspath(file)
    outpath = os.path.join(destination, os.path.basename(file))
    try:
        os.rename(inpath, outpath)
    except Exception as e:
        shutil.move(inpath, outpath)

    print(  outpath  )


def commander(input, *args, **kwargs):
    if isFile(input):
        file = expandUser(input.replace(" ", "\\ "))
        command = file + " " + " ".join(args)

        if file.endswith(".py"):
            return subprocess_cmd("python3 " + command)
        elif file.endswith(".js"):
            return subprocess_cmd("node " + command)
        elif file.endswith(".pdf"):
            if socket.gethostname() == "penguin":
                subprocess_cmd("xdg-open " + file)
            else:
                subprocess_cmd("lpr -o sides=two-sided-long-edge " + file)
    elif isArray(input):
        delimiter = kwargs.get('delimiter', ';')
        return subprocess_cmd(delimiter.join(input))
    else:
        return subprocess_cmd(input)


def toString(x, lineNumbers=False, format=False, delimiter=None):
    #  pprint(x)
    if isString(x):
        return x
    if isNumber(x):
        return str(x)
    if not x:
        return ''

    if format:
        formatting = Numbered(x)
        formatting.spacing = "\n"
        formatting.parser = format if isFunction(format) else None
        return formatting.value

    if isArray(x):
        if isNumber(x[0]):
            x = [str(el) for el in x]
        if lineNumbers:
            x = [numbered(item) for item in x]
        if delimiter:
            return delimiter.join(x)

        newlines = '\n' if every(x, lambda el: '\n' not in el) else '\n\n'
        return newlines.join(x)


class Classroom:
    def __init__(self, students, subject):
        self.students = students
        self.subject = subject


class WatchEnumeration:
    def __init__(self, items):
        self.items = enumerate(items)

    def __enter__(self):
        return self.items, len(self.items)

    def __exit__(self):
        pass


class Breaker:
    def __enter__(self):
        return self.next

    def __exit__(self, etype, value, traceback):
        return True

    def __init__(self, limit=3):
        self.limit = limit
        self.count = 0

    def next(self):
        self.count += 1
        if self.count == self.limit:
            #  print(  'limit has been reached'  )
            raise Exception("BREAKER LIMIT")
        #  else:
            #  print(  self.count, 'limit not yet reached'  )


class Csv:
    def __init__(self, text):
        items = re.split(",|\n", text)
        width = tally(",", getFirstLine(text))
        height = math.floor(len(items) / self.width)
        self.csv = Matrix(items, width, height)


class ErrorHandliier:
    def __init__(self):
        print("initing")

    def __enter__(self):
        print("entering")

    def __exit__(self, etype, value, traceback):
        print("hi")
        print(etype, value, traceback)


class FilePathCorrector:
    def __init__(self, filepath):
        self.filepath = filepath

    def __enter__(self):
        if not isDir(os.path.dirname(self.filepath)):
            dir = os.path.split(self.filepath)[0]
            mkdir(dir)

    def __exit__(*args):
        return


class Timer:
    def __init__(self):
        self.startTime = 0
        self.endTime = 0
        self.start()

    def start(self):
        self.startTime = default_timer()

    def end(self):
        self.endTime = default_timer()
        print("elapsed time in MS: ", (self.endTime - self.startTime) * 1000)


class Checkpoint:
    def __init__(self, name, reqs):
        for req in reqs:
            if not req(name):
                self.action = False
                return

        self.action = True

    def __enter__(self):
        return self.action

    def __exit__(self, etype, value, traceback):
        return


class MergeStorage:
    @property
    def value(self):
        return self.store

    def __init__(self):
        self.store = {}

    def add(self, *args):
        self.store = deepMerge(self.store, mergeRunner(*args))

    def forEach(self, parser):
        for k, v in self.store.items():
            parser(k, v)


class OurClass:
    def __init__(self, a):
        self.OurAtt = a

    @property
    def OurAtt(self):
        return self.__OurAtt

    @OurAtt.setter
    def OurAtt(self, val):
        if val < 0:
            self.__OurAtt = 0
        elif val > 1000:
            self.__OurAtt = 1000
        else:
            self.__OurAtt = val


class ContextManager:
    def __init__(self, newPath):
        self.newPath = os.path.expanduser(newPath)
        print(  'zzzz'  )
        print("entering context of " + self.newPath)

    def __enter__(self):
        self.savedPath = os.getcwd()
        os.chdir(self.newPath)

    def __exit__(self, etype, value, traceback):
        os.chdir(self.savedPath)


class StringBuilder(SimpleStorage):

    @staticmethod
    def buildItems(items, runner):
        store = StringBuilder()
        for item in items:
            product = runner(item)
            store.add(*product)
        return store.build()

    def __init__(self, input = None, titled = False, parser = None, production=False):

        super().__init__()


        self.titled = titled
        self.delimiter = '\n' if self.titled else '\n\n'
        self.text = ''

        if isFile(input):
            text = removeComments(input)
            if parser:
                text = parser(text)
            
            self.outpath = basename(input)
            self.lang = getLang(input)
            self.startingMessage = comment('datestamp', self.lang, border=True)
            self.text += self.startingMessage

            for item in getChunks(text, tagged = True):
                self.add(*item)

            #  print(  'keys',  )
            #  pprint(  self.value.keys())

        else:
            # not yet written
            pass

    def format(self, k, v):
        sortmap = {
            'function': len,
        }
        v.sort(key = sortmap.get(k))
        title = comment(k, self.lang, border=True, width=80) if self.titled else ''
        return title + toString(v) 
        
    def build(self, keys = None):
        if not keys: keys = [
            'static-variables',
            'variables',
            'classes',
            'functions',
            'dynamic-variables',
            'dynamic-object-variables',
        ]

        if keys:
            items = [(key, self.get(key)) for key in keys if self.get(key)]

        else:
            items = list(self.value.items())
            items.sort(key = lambda x: x[0])

        for k,v in items:
            #  print(  k, '--'  )
            self.text += self.format(k, v) + self.delimiter

        return self.text

    def export(self, keys = None, mode = None):
        self.build(keys)
        if mode:
            write(self.outpath, self.text)
            exporter(self.outpath, mode)
        else:
            print(self.text)

def getCallerInfo(message = ''):
    stack = inspect.stack()[1]
    data = {
        'message': 'This is a finish statement from getCallerInfo.',
        'class': getClassName(stack[0].f_locals['self']),
        'method': stack[3],
    }
    print(data) 

def exporter(file, mode):
    for mode in mode.split(' '):
        actiongetter(mode)(file)

def actiongetter(mode):
    if mode == "GITHUB": return Github().backupFile
    if mode == "PRINT": return Print().printFile

class CreateRegex:
    @property
    def value(self):
        return self.create()

    def __init__(self, start="", end="", has = ""):
        self.start = start
        self.end = end
        self.has = has

    def create(self):
        store = []
        if self.start:
            store.append("^" + Regex(self.start))
        if self.has:
            store.append(Regex(self.has))
        if self.end:
            store.append(Regex(self.end) + "$")

        return Regex(store)



class Alphabet:
    def __init__(self, letter="a"):
        self.letter = letter
        self.count = alphabet.index(self.letter)

    def increment(self):
        self.count += 1
        if self.count == 25:
            self.count = 0
        self.letter = alphabet[self.count]
        return self.letter

    def decrement(self):
        self.letter = alphabet[self.count]
        self.count -= 1


class DynamicStorage:
    def __init__(self):
        self.list = []
        self.dict = {}

    def add(self, val):
        if isArray(val) and len(val) == 2:
            self.dict[val[0]] = val[1]
        else:
            self.list.append(val)

    def addolddeleete(self, *args):
        if len(args) == 1:
            self.list.append(args[0])
        elif len(args) == 2:
            self.dict[args[0]] = args[1]
        else:
            self.list.append(args)

    @property
    def value(self):
        if exists(self.list):
            return self.list
        if exists(self.dict):
            return self.dict
        return None


class Config:
    def __init__(self):
        self.caller = getFrame()
        self.configFile = "config.json"
        data = read(self.configFile)
        self.store = Storage(data, {})

    def getCallerStore(self):
        return self.store.get(self.caller)

    def save(self, data):
        data = {self.caller: filtered(data)}
        self.store.merge(data)
        print(self.store.value())
        writejson(self.configFile, self.store.value())
        return self.getCallerStore()


class ErrorHandler:
    def __exit__(self, e, value, trace):
        if e:
            ename = str(e.__name__)
            value = str(value)

            s = ""
            while trace:
                location = trace.tb_frame.f_code.co_name
                lineno = trace.tb_lineno
                s += "(" + location + ": " + str(lineno) + ")  "
                trace = trace.tb_next

            product = ename + " | " + value + " | " + s
            print(product)
            return True


class Format:
    @staticmethod
    def normalizeAbsolutePaths(s):
        s = replace('(?<=href="|src=")(?=/)', ".", s)
        return s

    @staticmethod
    def addQuotesToHref(s):
        regex = "(?<=href=|src=)(.*?)(?=[ >])"
        return replace(regex, lambda x: parens(x.group(0), "dq"), s)

        s = replace(hrefRE(wrap=True), lambda x: parens(x.group(0), "dq"), s)
        return s

    @staticmethod
    def prepareHerokuHtml(s):
        return Format.normalizeAbsolutePaths(Format.addQuotesToHref(s))


class Rsdfjsdhf:
    def __new__(self, x, cat="", capture=False, escape=False):
        return Regex(x, cat, capture, escape)

    @staticmethod
    def captureBetween(start, end, inclusive=True, spaces=0, dotall=True):
        bodyRE = "[\w\W]+?" if dotall else ".*?"
        if not inclusive:
            start = "(?<=" + start + ")"
            end = "(?=" + end + ")"
        if spaces > 0:
            spaces = "^" + " " * spaces
            start = spaces + start
            end = spaces + end

        return start + bodyRE + end


class InputStorage:
    def __init__(self):
        self.store = SimpleStorage()

    def display(self, k, v):
        print(k)
        print("----------")
        print(v)
        answer = input()

        if answer == "k":
            if len(v) < 100:
                destination = "small"
            elif len(v) < 1000:
                destination = "medium"
            else:
                destination = "large"
            self.store.add(destination, k, v)

        elif answer == "m":
            print("mmm")

    def export(self, name):
        write(name, self.store)


class Folder:
    def __init__(self, files=None):
        self.files = files if files else []
        self.count = 0
        self.removed = []
        self.statistics = (
            linebreak
            + "\n"
            + "removed "
            + str(self.count)
            + " files"
            + "\n\n"
            + "\n".join(self.removed)
            + "\n"
            + linebreak
        )

    def value(self):
        return {"removed": self.removed, "count": self.count}

    def remove(self, file):
        removeFile(file)
        self.removed.append(file)
        self.count += 1


class Logger:
    def __init__(self):
        self.store = {}
        self.text = ""
        self.items = []
        self.errors = []
        self.successes = []

    def add(self, key, val):
        self.text += toString(val) + "\n"

    def error(self, *args):
        messages = ["ERROR KEY", "ERROR MESSAGE", "INITIAL VALUE"]
        items = [colonify(messages[i], str(item)) for i, item in enumerate(args)]
        val = toString(items)
        self.errors.append(val)

    def success(self, val):
        self.add("success", val)

    def get(self, name=""):
        if name == "error":
            return self.errors
        if name == "success":
            return self.successes
        if name == "text":
            return self.text
        return self.successes, self.errors, self.text


class util:
    @staticmethod
    def emojiToUnicode(s):
        return s.encode("unicode-escape").decode("ASCII")

    @staticmethod
    def removeTabs(s):
        return replace("\t", "    ", s)

    @staticmethod
    def removeEmoji(s):
        emoji_pattern = re.compile(
            "["
            "\U0001f92a"
            "\U0001F600-\U0001F64F"  # emoticons
            "\U0001F300-\U0001F5FF"  # symbols & pictographs
            "\U0001F680-\U0001F6FF"  # transport & map symbols
            "\U0001F1E0-\U0001F1FF"  # flags (iOS)
            "\U00002702-\U000027B0"
            "\U000024C2-\U0001F251"
            "]+",
            flags=re.UNICODE,
        )
        return emoji_pattern.sub(r"", s)

    @staticmethod
    def preparePrint(s):
        return util.removeEmoji(util.removeTabs(s.strip()))

    @staticmethod
    def visible(s):
        return drep(
            s,
            {
                "\t": "    ",
            },
        )


class Accumulator:  # d
    def __init__(self, store={}, initial="list"):
        self.store = store
        self.initial = initial
        self.transformed = None

    def add(self, key, val):
        initial_storage = []
        if self.initial == "list":
            initial_storage = []
        if not key in self.store:
            self.store[key] = initial_storage
        if type(val) is list:
            self.store[key].extend(val)
        else:
            self.store[key].append(val)

    def transform(self, keymap=None, valmap=None):
        def parser(el, map):
            if type(el) is not str or map is None:
                return el
            if el not in map:
                return el
            return map[el]

        self.transformed = {parser(k, keymap): v for k, v in self.store.items()}

    def get(self, cat="store"):
        if cat is "store":
            return self.store
        if cat is "transformed":
            return self.transformed


class BasicStorage:
    def __init__(self, mode=""):
        self.list = []
        self.dict = {}
        self.store = {}
        self.mode = mode

    def save(self, k, v):
        if k not in self.store:
            self.store[k] = []
        if isArray(v):
            self.store[k].extend(v)
        else:
            self.store[k].append(v)

    def add(self, *args):
        if self.mode == "store":
            if args[0] not in self.store:
                self.store[args[0]] = []
            if isArray(args[1]):
                self.store[args[0]].extend(args[1])
            else:
                self.store[args[0]].append(args[1])
        elif len(args) == 2:
            self.dict[args[0]] = args[1]
        else:
            if isArray(args[0]):
                self.list.extend(args[0])
            else:
                self.list.append(args[0])

    def value(self, default=None):
        for item in [self.list, self.dict, self.store]:
            if exists(item):
                return item
        return default


class Matrix:
    def __init__(self, items, width="", height=""):
        self.items = items
        self.width = width
        self.height = height if height else math.floor(len(items) / width)

    def getColumns(self, *columns):
        return [self.getColumn(column) for column in columns]

    def getRows(self, *rows):
        return [self.getRow(row) for row in rows]

    def getRow(self, y):
        return [self.get(x, y) for x in range(self.width + 1) if exists(self.get(x, y))]

    def getColumn(self, x):
        return [
            self.get(x, y) for y in range(self.height + 1) if exists(self.get(x, y))
        ]

    def get(self, x, y):
        try:
            return self.items[(y * self.width) + x]
        except:
            return

    def format(self, dimension="width"):
        dimension = self.width if dimension == "width" else self.height
        store = []
        temp = []
        for i, item in enumerate(self.items):
            temp.append(item)
            if i % dimension == (dimension - 1) or i == (len(self.items) - 1):
                store.append(temp)
                temp = []
        return store


class Logger2:
    def __init__(self):
        self.store = {}
        self.logs = {}

    def log(self, k, v):
        if k not in self.logs:
            self.logs[k] = []
        self.logs[k].append(v)

    def merge(self, obj):
        self.store = deepMerge(self.store, obj)

    def set(self, k, v):
        self.store[k] = v

    def add(self, k, v):
        if not exists(v):
            self.error(k, "associated v-value doesn't exist")
        if k not in self.store:
            self.store[k] = []
        if isArray(v):
            self.store[k].extend(v)
        else:
            self.store[k].append(v)

    def success(self, val, extra=""):
        if extra:
            val = val + ": " + extra
        self.log("success", val)

    def error(self, key, e=""):
        val = key + " | " + parseError(e)
        self.log("error", val)

    @property
    def value(self):
        return self.store

    def print(self):

        if not exists(self.store):
            return
        product = {
            k: ("\n".join(v) if (isArray(v) and k != "pdf") else v)
            for k, v in self.store.items()
        }
        Printer(product)


class Tally:
    def __init__(self, items=None):
        self.store = {}
        if items:
            self.extend(items)

    def filter(self, parser):
        store = {}
        for k, v in self.store.items():
            if parser(k):
                store[k] = v
        return store

    def extend(self, items):
        for item in items:
            self.add(item)

    def sort(self):
        return sorted(self.store.items(), key=lambda x: x[1], reverse=True)

    def add(self, val):
        if val in self.store:
            self.store[val] += 1
        else:
            self.store[val] = 1

    def value(self):
        return dict(sorted(self.store.items(), key=lambda x: int(x[1]), reverse=True))

    def get(self, val=None):
        if not val:
            return self.value()

        if val in self.store:
            return self.store[val]

        cat = ""
        regex = "(?<=[<>])"
        cat, val = re.split(regex, val, maxsplit=1)
        store = []
        condition = lambda k, v: k == v
        if cat == ">":
            condition = lambda k, v: k > v
        elif cat == "<":
            condition = lambda k, v: k < v

        return [k for k, v in self.store.items() if condition(int(v), int(val))]


class Editor:
    def getLine(self, n):
        return self.lines[n]

    def __init__(self):
        self.lines = []
        self.text = ""
        self.tabWidth = 4

    def deleteLine(self, n):
        self.lines[n] = None

    def value(self):
        return toString(filtered(self.lines))

    def setLine(self, val, n):
        self.lines[n] = val

    def editLine(self, dict, n):
        product = drep(self.lines[n], dict, "wb")
        self.lines[n] = product

    def getLineAndSpaces(self, n):
        line = self.getLine(n)
        spaces = getSpaces(line)
        return line, spaces

    def insertLineAbove(self, val, n):
        line, spaces = self.getLineAndSpaces(n)
        product = indent(val, spaces) + "\n" + line
        self.setLine(product, n)

    def insertLineBelow(self, val, n):
        line, spaces = self.getLineAndSpaces(n)
        if isBlockstart(line):
            spaces += " " * self.tabWidth

        product = line + "\n" + indent(val, spaces)
        self.setLine(product, n)

    def run(self, text, edits, startingIndex=0):
        self.lines = text.split("\n")
        editmap = {
            "d": self.deleteLine,
            "e": self.editLine,
            "i": self.insertLineBelow,
        }
        for edit in edits:
            mode = edit["mode"]
            lineNumber = int(edit["n"]) + startingIndex
            val = edit["val"] if "val" in edit else None
            args = filtered([val, lineNumber])
            action = editmap[edit["mode"]]
            action(*args)

        return self.value()


class LocalStorage:
    def __init__(self, driver):
        self.driver = driver

    def __len__(self):
        return self.driver.execute_script("return window.localStorage.length;")

    def items(self):
        return self.driver.execute_script(
            "var ls = window.localStorage, items = {}; "
            "for (var i = 0, k; i < ls.length; ++i) "
            "  items[k = ls.key(i)] = ls.getItem(k); "
            "return items; "
        )

    def keys(self):
        return self.driver.execute_script(
            "var ls = window.localStorage, keys = []; "
            "for (var i = 0; i < ls.length; ++i) "
            "  keys[i] = ls.key(i); "
            "return keys; "
        )

    def get(self, key):
        return self.driver.execute_script(
            "return window.localStorage.getItem(arguments[0]);", key
        )

    def set(self, key, value):
        self.driver.execute_script(
            "window.localStorage.setItem(arguments[0], arguments[1]);", key, value
        )

    def has(self, key):
        return key in self.keys()

    def remove(self, key):
        self.driver.execute_script("window.localStorage.removeItem(arguments[0]);", key)

    def clear(self):
        self.driver.execute_script("window.localStorage.clear();")

    def __getitem__(self, key):
        value = self.get(key)
        if value is None:
            raise KeyError(key)
        return value

    def __setitem__(self, key, value):
        self.set(key, value)

    def __contains__(self, key):
        return key in self.keys()

    def __iter__(self):
        return self.items().__iter__()

    def __repr__(self):
        return self.items().__str__()


class Numbered:
    def __init__(self, items):
        self.items = items
        self.index = 0
        self._spacing = "\n"
        self.indexDelimiter = "  "
        self.parser = ""
        self.extraSpaces = False

    @property
    def spacing(self):
        return self._spacing

    @property
    def parser(self):
        return self._parser

    def iterate(self):
        extra = 0
        handler = (
            lambda x: str(self.index) + self.indexDelimiter + x
            if test("^[^\[\d]", x)
            else x
        )
        store = []
        if isObject(self.items):
            longest = len(max(self.items.keys(), key=len))
            for k, v in self.items.items():
                if self.extraSpaces:
                    extra = longest - len(k)
                self.index += 1
                index = str(self.index)

                store.append(
                    handler(self._parser(k, v, index, self.indexDelimiter, extra))
                )

        if isArray(self.items):
            for item in self.items:
                self.index += 1
                store.append(handler(self._parser(item)))
        return self.spacing.join(store)

    @parser.setter
    def parser(self, val):
        if not val:
            if isObject(self.items):
                self._parser = lambda k, v: k + self._spacing + v
            elif isArray(self.items):
                self._parser = lambda x: x

        elif isFunction(val):
            self._parser = val
        elif test("%k.*?%v", val):
            self._parser = lambda k, v: drep(val, {"%k": k, "%v": v})
        elif test("%x", val):
            self._parser = lambda x: drep(val, {"%x": x})

    @spacing.setter
    def spacing(self, spacing):
        self._spacing = spacing

    @property
    def value(self):
        return self.iterate()


class Storage:
    def __init__(self, items=None, parser=None):
        self.list = []
        self.saveList = []
        self.saveString = ""
        self.dict = {}
        self.count = 0
        self.dictStore = {}
        self.listStore = []
        self.store = {}
        if items and isArray(items):
            self.appendEach(parser)
        elif items and isObject(items):
            self.store = items

    def items(self):
        return self.store.items()

    def removeDuplicates(self, key):
        self.store[key] = list(set(self.store[key]))

    def get(self, key):
        if key in self.store:
            return self.store[key]
        if key in self.dict:
            return self.dict[key]
        if key in self.dictStore:
            return self.dictStore[key]

    def merge(self, data):
        for k, v in data.items():
            self.add(k, v)

    def flatMerge(self, data):
        self.dictStore = deepFlatMerge(self.dictStore, data)

    def appendEach(self, parser=None):
        for item in self.list:
            product = parser(item) if parser else item
            self.listStore.append(product)

    def add(self, key, val):  # The standard Add
        if key not in self.store:
            self.store[key] = []
        if isArray(val):
            self.store[key].extend(val)
        else:
            self.store[key].append(val)

    def saved(self):
        if self.saveString:
            return self.saveString
        if exists(self.saveList):
            return self.saveList

    def save(self, val):
        if isArray(val):
            self.saveList.extend(val)
        elif isString(val):
            self.saveString += "\n" + val

    def value(self):
        if exists(self.store):
            return self.store
        if exists(self.dictStore):
            return self.dictStore
        if exists(self.listStore):
            return self.listStore
        return self.dict

    def addLibraryItem(self, key, val):
        breaker = Breaker()
        count = 0
        while key in self.store:
            breaker.next()
            count += 1
            if count == 1:
                key += str(count)
            else:
                key = key[0:-1] + str(count)

        self.store[key] = val


class VueEditor:
    @property
    def referenceText(self):
        return self.texts[1]

    @referenceText.setter
    def referenceText(self, val):
        self.texts[1] = val

    @property
    def text(self):
        return self.texts[0]

    @text.setter
    def text(self, val):
        self.texts[0] = val

    def __init__(self, text="", referenceText=""):
        self.archive = []
        self.files = ["index.html", "methods.js"]
        self.indexFile = self.files[0]
        self.referenceFile = self.files[-1]
        self.texts = (
            [text, referenceText] if text else [read(file) for file in self.files]
        )
        self.tabWidth = " " * 4
        self.map = {
            "methods": "methods: {",
            "computed": "computed: {",
            "watch": "watch: {",
            "mounted": "mounted() {",
            "data": "data() {\n        return {",
        }

    def createSectionRegex(self, name):
        regex = self.tabWidth + re.escape(self.map[name])
        regex += "[\w\W]+?\n" + self.tabWidth + "},"
        return regex

    def getSection(self, name):
        return search(self.createSectionRegex(name), self.text)

    def getFunctionNames(self, section):
        regex = "^" + self.tabWidth + self.tabWidth + "(\w+)(?:,$|\(.*?\) {)"
        matches = re.findall(regex, self.getSection(section), flags=re.M)
        return matches

    def removeReferenceItems(self, again=True):
        names = getInactiveNames(
            self.texts, self.getFunctionNames("methods"), mode="vue"
        )
        if exists(names):
            regexA = Regex(names, "fn-body")
            regexB = Regex(names, "vue-method-name")

            self.referenceText, matches = mrep(regex, self.referenceText, flags=re.M)
            self.text = replace(regex, "", self.text, flags=re.M)
            self.archive.extend(matches)

            if again:
                self.removeReferenceItems(again=False)

    def createLibrary(self, section):
        names = getActiveNames(self.texts, self.getFunctionNames(section), mode="vue")
        return createFunctionLibrary(self.referenceText, names)

    def process(self):
        lib = self.createLibrary("methods")
        return
        store = {}
        for k, v in lib.items():
            match = captureCode(v)
            if match:
                store[k] = match

        self.texts = iterate(
            self.texts, drep, store, cat=lambda x: '(?<=s\.|{{|=")' + x + "(?:\(\))"
        )

    def write(self):
        for i, file in enumerate(self.files):
            write(file, self.texts[i])
            createAnnouncement(self.logs)
        if exists(self.archive):
            append("vue.archive", self.archive)


class Reddit:

    def getSubmissions(self, subreddit):
        submissions = self.reddit.subreddit(subreddit).hot(limit=None)
        #  pprint(  [s.title for s in submissions]  )
        return list(submissions)

    def cleanupComments(self, id):
        comments = self.getComments(id)
        for comment in comments:
            print(  comment.body  )
            input()
            comment.delete()

    def cleanup(self, subreddit = 'mementomoriok'):
        submissions = self.getSubmissions(subreddit)

        if len(submissions) < 1:
            raise Exception('ray') 

        deletes = []
        for submission in submissions:
            if len(submission.selftext) < 50:
                deletes.append(submission)
                continue

            print(  submission.title  )
            print(    )
            print(  submission.selftext  )
            print(  lbr  )
            answer = input('read or delete')
            if not answer:
                deletes.append(submission)

            elif answer == 'read':
                self.getAllComments(submission)
                answer = input('Delete | Read ')
                if not answer:
                    deletes.append(submission)
            elif answer == 'end':
                break
            elif len(answer) > 10:
                title = submission.selftext
                self.reddit.post(subreddit, title, text)

            os.system('clear')

        [s.delete() for s in deletes]
        print(  len(deletes), 'deleting this many items'  )
        print(  'finished cleanup of ', subreddit  )

    @staticmethod
    def bulletify(items):
        return toString(['* ' + item for item in items])

    textParseRE = 'asdfd'

    def getTodayPosts(self):
        parser = lambda x: isToday(x.created_utc)
        return filtered(self.getSelfPosts(), parser)

    def getSelfPosts(self, limit=10):
        return self.reddit.redditor("mementomoriok").submissions.new(limit=limit)

    @staticmethod
    def getCommentData(item):
        product = {
            'created_utc': item.created_utc,
            'id': item.id,
            'author': str(item.author),
            #  'body_html': item.body_html,
            'body': item.body,
            'length': len(item.body),
            'codelines': Reddit.getCodeLines(item.body),
            'matches': re.findall(Reddit.textParseRE, item.body),
            'likes': item.likes,
            'gildings': item.gildings,
            #  'is_gilded': item.is_gilded,
            'gilded': item.gilded,
            'score':  item.score,
            'saved':  item.saved,
            #  'replies': list(filter(lambda reply: not isinstance(reply, MoreComments), item.replies)),
        }
        return product


    gratitudeSentences = [
        "This was really helpful.",
        "This helped a lot. Thanks.",
        "Awesome. Thank you.",
        "Thank you!",
        'Much appreciated!',
        'Thanks!',
        'This was just what I needed. Thanks!',
    ]
    bigPostSentences = [
        "Thanks for the huge post. It was really helpful. Thanks.",
    ]

    letMeKnowReplies = []
    doYouHaveAnyQuestionReplies = [
        "Thanks! Appreciate your post.",
    ]
    statements = {
        "hope this makes sense": lambda x: "Thanks "
        + author
        + "!"
        + randomPick(gratitudeSentences)
    }


    @staticmethod
    def test():
        Reddit().traversal()

    def getComments(self, id):
        if isString(id):
            submission = self.reddit.submission(id=id)
        else:
            submission = id

        return submission.comments

    def getAllComments(self, id, ignoreLiked = False):
        comments = self.getComments(id)
        store = []
        def runner(comments):
            comments.replace_more(limit=None)
            for comment in comments:
                if ignoreLiked and comment.likes:
                    continue
                comment.upvote()
                store.append(comment)
                runner(comment.replies)

        runner(comments)
        return store
        
    def traversal(self, id = 'ksv85m'):
        #  'ksv85m'
        comments = self.getComments(id)
        limit = None
        store = []

        def runner(comments):
            comments.replace_more(limit=limit)
            for comment in comments:
                if not comment.likes:
                    comment.upvote()
                    data = Reddit.getCommentBodyInfo(comment)
                    message = Reddit.generateMessage(data)
                    if message:
                        comment.reply(message)

                self.store.append(Reddit.getCommentData(comment))
                runner(comment.replies)
                    
        runner(comments)
        pprint(store)
        
    @staticmethod
    def getStandardRedditComment(comment):
        date = comment.created_utc
        body = comment.body
        author = str(comment.author)
        return author, body, date

    @staticmethod
    def getCodeBlocks(s):
        a = '(?<=^[^\s].*)\n(?=    .)'
        b = '(?<=(?:    |\t).*)\n(?=^[^\s])'
        regex = a + '|' + b
        return re.split(regex, s, flags=re.M)

    @staticmethod
    def getCodeLines(s):
        regex = '^    .+'
        return len(re.findall(regex, s, flags=re.M))

    @staticmethod
    def getCommentBodyInfo(comment):
        author, body, date = Reddit.getStandardRedditComment(comment)
        length = len(body)
        codelines = Reddit.getCodeLines(body)
        triggerWords = 'zxcvbnsdfj'
        regex = Regex(triggerWords)
        matches = re.findall(regex, body)
        product = {
            'length': length,
            'codelines': codelines,
            'matches': matches
        }
        return product
        #  message = randomPick(Reddit.gratitudeSentences)
        #  return message

    def respond(self, comment):
        if isString(comment):
            comment = self.reddit.comment(comment)
        message = Reddit.parseComment(comment)
        comment.reply(message)

    def GET_ITEMS(self):
        store = {}
        posts = self.getTodayPosts()
        for post in posts:
            items = [(x.id, x.body) for x in self.getAllComments(post, True)]
            store[post.title] = items

        return store

    def RESPOND(self):
        store = self.GET_ITEMS()
        replies = []
        for title, items in store.items():
            for id, body in items:
                print(  title + snsn  )
                print(  body + snlbr  )
                reply = input()
                if reply:
                    reply = reply.replace('  ', '\n')
                os.system('clear') 
                replies.append([id, reply])

        for id, reply in replies:
            if not reply:
                continue
            self.reddit.comment(id).reply(reply)

        print(  'Finished'  )


    def download(self):
        return x
    def search(self, query):
        store = []
        for submission in self.getMySubmissions(limit=500):
            text = submission.title + '\n' + submission.selftext
            if test(parens(query, 'b'), text, flags=re.I) and not found:
                print(  'found', submission.id, submission.url  )
                found = True
                openFile(submission.url)

            store.append(getSubmissionInfo)
        write('recentreddit.json', store)

    def replyToComment(self, id, reply):
        comment = self.reddit.comment(id)
        comment.upvote()
        comment.reply(reply)

    def __init__(self):
        import praw

        self.store = []
        self.reddit = praw.Reddit(**ENV_REDDIT_INFO)
        self.reddit.validate_on_submit = True

    def getMySubmissions(self, limit=10):
        return self.reddit.redditor("mementomoriok").submissions.new(limit=limit)

    def getMyRecentPosts(self):
        return getStorage("reddit")

    def upvote(self, ids=None):

        if not ids:
            print(  'getting submissions via praw'  )
            ids = self.getMySubmissions()

        for id in ids:
            submission = self.reddit.submission(id)
            if submission.created_utc < prevTime():
                continue
            submission.comments.replace_more(limit=None)
            for comment in submission.comments.list():
                comment.upvote()
        print("finished upvoting")
        #  updateStorage("reddit", [], update=True)

    def respond(self):
        responses = read(RESPONSE_KEY)
        for id, response in responses.items():
            self.reply(id, response)

    def reply(self, id, val):
        self.reddit.comment(id).reply(val)

    def handlependingSubmissions(self):
        store = {}
        pendingSubmissions = getStorage("reddit")
        for id in pendingSubmissions:

            comments = self.getComments(id)
            for comment in comments:
                comment.upvote()
                store[comment.id] = comment.body

        createJSON("announcements", store)

    def parseComment(self, comment):
        if not isWithinTimeFrame(comment.created_utc, week=1):
            return None

        message = randomPick(Reddit.gratitudeSentences)

    def getFlatComments(self, id):
        submission = self.getSubmission(id)
        submission.comments.replace_more(limit=None)
        return submission.comments.list()

    def getPost(self, id):
        body, post = getBodyAndAuthor(self.getSubmission(id))

    def getSubmission(self, id):
        return self.reddit.submission(id)

    def commentOnPost(self, id, content):
        submission = self.reddit.submission(id)
        submission.reply(content)

    def edit(self, id, content):
        submission = self.reddit.submission(id)
        submission.edit(content)

    def post(self, subreddit, title, body):
        submission = self.reddit.subreddit(subreddit)
        submission.submit(title, body)
        
    def ask(self, questions):
        ids = []

        def runner(subreddit, title, body):
            submission = self.reddit.subreddit(subreddit).submit(title, body)
            print("successfully asked: ", title)
            print("subreddit:", subreddit)
            return submission.id

        for question in questions:
            try:
                ids.append(runner(**question))
            except Exception as e:
                print(  e  )
                pass

        #  database.at('reddit').update(ids)


        


def pluralize(s, items = []):
    return s + 's' if (items and len(items) > 1) else s


def mapgetter(name, map, **kwargs):
    product = map.get(name)
    store = {}
    for k,v in kwargs.items():
        if not product:
            store[k] = v
        else:
            store[k] = product.get(k, v)
    return store

def matchgetter(regex, url):
    if isObject(url):
        url = url.get('html_url') or 'foo'
    text = request(url)
    matches = re.findall(regex, text)
    return matches

class Github:
    @staticmethod
    def deleteRepo(repo):
        islocal = isDir(toRoot(repo))
        if islocal:
            pprint(os.listdir(toRoot(repo)))
            if input('DELETE?'):
                rmdir(toRoot(repo))
            else:
                return

        obj = {
            'token': ENV_GITHUB_TOKEN,
            'username': 'kdog3682',
            'reponame': repo,
        }

        print(commander(dollarReplace(githubdeletecmd, obj)))

    @staticmethod
    def getInfo(query = 'repos', user = 'kdog3682'):
        slug = '' if query == 'info' else 'repos'
        info = request('https://api.github.com/users/' + user + '/' + slug)
        store = []
        if query == 'repos':
            return [x.get('name') for x in info if not x.get('fork')]

        if query == 'files':
            p = lambda x: (x.get('name'), matchgetter(githubItemNameRE, x))
            product = reduceObject(info, p)
            pprint(product)
            #  createAsset('githubstuff', product)


    @staticmethod
    def createGist(file, content = None):
        if not content:
            #  content = read(file)
            content = 'asf\nzxcv\adfadsf'

        content = content.replace('\n', '\\n')
        command = '''curl -X POST -d '{"public":true,"files":{"''' + file + '''":{"content":"''' + content + '''"}}}' -u kdog3682:''' + ENV_GITHUB_TOKEN + ''' https://api.github.com/gists'''

        product = commander(command)
        print('---',  product, '---'  )
        info = request('https://api.github.com/users/kdog3682/gists')
        url = info[0].get('html_url').replace('github', 'jsbin')
        openFile(url)
        return

        data = {
            'public': True,
            'files': {
                file: {
                    'content': content
                }
            }
        }
        #  return print(  json.dumps(data)  )
        #  data = json.dumps(data)

        command = 'curl -X POST -d ' + json.dumps(data) + ' -u kdog3682:' + ENV_GITHUB_TOKEN + ' https://api.github.com/gists'

        product = commander(command)
        print(  '---------------------------- ' )
        print(  product  )

        if product:
            print(  'product exists'  )
            url = search('"html_url": "(.*?)",', product)
            print(  url  )
            url = url.replace('github', 'jsbin')
            openFile(url)

    @staticmethod
    def backup(filepath):
        Github(repo = 'BACKUP').backupFile(expandUser(filepath))
        
    url = 'https://api.github.com/'

    @staticmethod
    def listRepos(user):
        url = os.path.join(Github.url, 'users', user, 'repos')
        response = request(url)
        return [item.get('name') for item in response]

    @staticmethod
    def createRepo(repo, items = None, user = 'kdog3682', token = ENV_GITHUB_TOKEN, standard = False):
        print(  'starting process: CREATE_REPO'  )

        if standard:
            items = 'methods.js utils.js index.html utils.py'

        backupMessage = 'backup ' + str(items) 
        commands = []

        commands.append('curl -H "Authorization: token ' + token + '" --data \'{"name":"' + repo + '"}\' https://api.github.com/user/repos')

        commands.append('cd ~/' + repo)
        commands.append("git init")
        commands.append("git remote set-url origin git@github.com:" + user + '/' + repo + '.git')

        if items:
            commands.append('git add ' + items)
            commands.append('git commit -m "' + backupMessage + '"')
            commands.append("git push -u origin master")
        result = commander(commands, delimiter = '&&')
        print(  result  )
        print(  'finished'  )
    

    @staticmethod
    def create(repo, user, token):
        commands = []
        commands.append('curl -H "Authorization: token ' + token + '" --data \'{"name":"' + repo + '"}\' https://api.github.com/user/repos')

        commands.append('cd ~/' + repo)
        commands.append("git init")
        commands.append('git remote add origin https://github.com/' + user + '/' + repo + '.git')
        result = commander(commands, delimiter = '&&')
    
    @staticmethod
    def _delete(repo, user, token):
        print(  'deleting repo', repo  )
        command = 'curl -X DELETE -H "Accept: application/vnd.github.v3+json" -H "Authorization: token ' + token + '"' + 'https://api.github.com/repos/' + user + '/' + repo
        return commander(command)

    def delete(self, repo):
        Github._delete(repo, self.user, self.token)
        Github.listRepos(self.user)

    @staticmethod
    def createGitIgnore():
        write(".gitignore", [".*", "/", "!.bash_aliases", "!.vimrc", '.bash_history'])

    def exists(self, repo):
        result = request('https://api.github.com/repos/' + self.user + '/' + repo)
        if result.get('message') == 'Not Found':
            return False
        return True

    @staticmethod
    def checkAccessToken():
        command = '''curl -H "Authorization: token ACCESS_TOKEN" --data '{"name":"mathgame"}' https://api.github.com/user/repos'''.replace('ACCESS_TOKEN', ENV_GITHUB_TOKEN)
        return commander(command)

        return commander('curl -I https://api.github.com/user?access_token=' + ENV_GITHUB_TOKEN)

    def pathfix(self, item):
        return os.path.join(self.startingDirectory, basename(item))

    aliasmap = {
        'sc': 'studentcircles',
        'kdog3682': 'kdog3682.github.io',
    }

    keepList = [
        '.gitignore',
        '.git',
        '.bash_aliases',
        '.bash_history',
        '.vimrc',
        'requirements.txt',
        'utils.js',
        'utils.py',
        'index.html',
        'methods.js',
    ]

    renameDict = {
        'base.py': 'utils.py',
        'z': 'utils.js',
        'b.py': 'utils.py',
    }

    updatemap = {
        'kdog3682': {
            'append': True
        }
    }

    @staticmethod
    def post(repo, file, content=None, append=True):
        Github(repo=repo).upload({file : content}, append=append)

    @staticmethod
    def update(repo, content=None, css=None, js=None, append=False):
        Github(repo=repo).upload({'index.html': content, 'styles.css': css, 'script.js': js}, append=False)

    @staticmethod
    def updateFiddle(file=None, js=None, html=None, css=None):

        if file:
            items = {
                'Demo/demo.html': read(file),
            }

        else:
            items = {
                'Demo/demo.html': html,
                'Demo/demo.css': css,
                'Demo/demo.js': js,
            }

        Github().at('codesnippets').upload(items)

    @staticmethod
    def download(link):
        dir = toRoot(basename(link))
        if not isDir(dir):
            print(  'cloning into ' + link  )
            commander('cd ~/; git clone ' + link)

        files = getFiles99(dir, requirements = [
            isPublic,
            lambda x: size(x) > 0,
            lambda x: not test(Regex(ignoreGithubRepoFilesWordList), x, flags=re.I),
        ])

        Print().printFiles(files)
        #  rmdir(dir)


    def status(self):
       message = commander('git status') 
       print(  message  )
    def clean(self):
        for file in os.listdir(self.dir):
            if not isPublic(file):
                continue
            if Github.renameDict.get(file):
                print(  'renaming file', file  )
                self.args.append('git mv ' + file + ' ' + self.renameDict.get(file))
            elif file not in Github.keepList:
                print( 'removing file', file)
                self.args.append('git rm ' + file)
        self.commit()

    def renameFile(self, *pairs):
        for oldName, newName in pairs:
            if isFile(oldName):
                self.args.append('git mv ' + oldName + ' ' + newName)
        self.commit(pairs)

    def deleteFile(self, *names):
        for name in names:
            if isFile(name):
                self.args.append('git rm ' + name)
        self.commit(names)

    def pushFile(self, *files):
        self.args.append("git add " + " ".join(files))
        self.commit(files)

    def revert(self, id):
        commands = [
            "git checkout master",
            "git reset --hard " + id,
            "git push --force origin master:master",
        ]
        self.args.extend(commands)
        self.commit(id)

    def clone(self, repo):
        print(  'Beginning to clone repo')
        print(  repo  )
        uri = "https://github.com/" + self.user + "/" + repo + ".git"
        dir = expandUser('~/') + repo
        self.reset(expandUser('~/'))

        commands = [
         "git clone " + uri,
         "cd " + dir,
         "git remote set-url origin git@github.com:" + self.user + '/' + repo + '.git',
         "git add .",
         'git commit -m "First commit after cloning"',
        ]

        return commander(commands)

    def cloneDirectory(repo = None, url = None):
        self.reset()
        if repo:
            uri = "https://github.com/" + self.user + "/" + repo + ".git"
        
            commands = [
                "git clone " + uri,
                "cd " + repo,
                "git remote set-url origin git@github.com:" + accesspoint,
                "git add .",
                'git commit -m "First commit after cloning"',
            ]
        
    @staticmethod
    def clodne(repo, user="kdog3682"):
        tryForIndex = False

        if repo.startswith("https") and user not in repo:
            uri = repo
            repo = replace("\.\w+$", "", basename(os.path.normpath(uri)))
            commands = [
                "git clone " + uri,
            ]
            tryForIndex = True

        else:
            uri = "https://github.com/" + user + "/" + repo + ".git"
            commands = [
                "git clone " + uri,
                "cd " + repo,
                "git remote set-url origin git@github.com:" + accesspoint,
                "git add .",
                'git commit -m "first commit upon cloning"',
            ]

        with ContextManager("~/"):
            result = ""
            if not isDir("~/" + repo):
                result = commander(commands)

            print(result)

            if tryForIndex:
                os.chdir(repo)
                indexFile = recursiveFindFile("index.html", depth=5)
                if indexFile:
                    print(indexFile)
                    openFile(indexFile)

    @staticmethod
    def printLocalFolder(dir, key="all"):
        dir = toRoot(dir)
        requirements = filerequirementsmap[key]
        files = getFiles2(dir, key=requirements, recursive=True)

        def parser(name, text, size):
            return name + snlbr + text + snsnsn

        product = reduced2(files, parser, "")
        Printer(product)

    @staticmethod
    def createGitIgnore():
        content = [".*", "/", "!.bash_aliases", "!.vimrc"]
        write(".gitignore", "\n".join(content))

    def close(self):
        os.chdir(self.startingDirectory)
        print('Context Manager: Finished. Switching back to ', self.startingDirectory)
        
    def revert(self, n = 1):
        id = self.getGitLog(n)[0]
        command = 'git revert --no-commit ' + id + '..HEAD'
        self.args.append(command)
        self.commit()

    def commit(self, items = None):
        caller = getFunctionCaller(-1)
        message = pluralize(caller, items)
        if items:
            message += ': ' + ', '.join(items)

        self.args.append('git commit -m "' + message + '"')
        self.args.append("git push -u origin master")
        result = commander(self.args)
        printReport('Github Commit Caller: ' + caller, message, result, 'Finished')
        self.close()

    def find(self, type = None,after=None, before=None):
        matches = self.getGitLog()
        store = []
        for id, date, message in matches:
            date = datetime.datetime.strptime(date, "%a %b %d %H:%M:%S %Y").timestamp()
            if after and date < after:
                continue

            if before and date > before:
                continue

            if type and type not in message:
                coninue

            store.append((id, date, message))
        return store

        
    def getGitLog(self, n = None):
        text = commander('git log')
        regex = 'commit (\S+)[\w\W]+?Date:\s*\w+ (.*?) -.*\s*([\w\W]+?)(?=\n\ncommit)'
        matches = re.findall(regex, text) 
        pprint(  matches  )
        return matches[n] if n else matches

    def updateRepo(self, *items):
        self.add(*items)
        self.commit()

    def backupFile(self, *files):
        for file in files:
            if isRelativePath(file):
                file = self.pathfix(file)
            copyFile(file, self.dir)
            self.add(file)

        self.commit(files)

    def create(self, repo):
        commands = []
        commands.append('curl -H "Authorization: token ' + self.token + '" --data \'{"name":"' + repo + '"}\' https://api.github.com/user/repos')

        commands.append('cd ~/' + repo)
        commands.append("git init")
        commands.append('git remote add origin https://github.com/' + self.user + '/' + repo + '.git')
        result = commander(commands, delimiter = '&&')
        Github.createGitIgnore()
        printReport('Creating New Repo: ' + repo, 'Result: ', result, 'Finished')
        return Github(repo = repo)

    def checkdir(self):
        if not isDir(self.dir):
            raise Exception('The dir isnt valid:', self.dir) 

    def upload(self, *data, **kwargs):
        dir = kwargs.get('dir', '')
        append = kwargs.get('append', False)
        self.checkdir()
        for item in data:
            if isObject(item):
                for k,v in item.items():
                    path = os.path.join(self.dir, dir, k)
                    if isDefined(v):
                        write(path, v, append = append)
                        self.add(path)

            if isString(item):
                copyFile(self.pathfix(item), self.dir)
                self.add(path)

        self.commit()

    def add(self, *items):
        statement = 'git add ' + (' '.join(items) if items else '.')
        self.args.append(statement)

    def addAndCommitItems(self, *items):
        self.args.append('add ' + joined(items))
        self.args.append('commit ' + joined(items))

    def at(self, repo):
        repo = Github.aliasmap.get(repo, repo)
        self.setDirectoryAndRepo(repo)
        return self

    def __init__(self, repo = 'BACKUP', user = 'kdog3682', token = ENV_GITHUB_TOKEN):
        repo = Github.aliasmap.get(repo, repo)
        self.startingDirectory = abspath(os.getcwd())
        print(  'startingDir: ', self.startingDirectory  )
        self.user = user
        self.token = token
        self.args = []
        self.setDirectoryAndRepo(repo)

    def reset(self, dir = None):
        self.args = []
        if not dir:
            dir = self.startingDirectory
        changedir(dir)

    def setDirectoryAndRepo(self, repo):
        self.dir = toRoot(repo)
        if isDir(self.dir):
            self.repo = repo
            changedir(self.dir)
        else:
            tl('stopping here bc its hard to rad')
            match = getdirs(getRoot(), query=repo)
            if match:
                self.setDirectoryAndRepo(match)
            else:
                result = self.clone(repo)

                if test('error|fatal', result):
                    raise Exception(result) 
                else:
                    self.setDirectoryAndRepo(repo)

    @staticmethod
    def backupFolder(dir, backupMessage = 'backup', gitignore = False, standard=True):
        items = 'methods.js index.html utils.js utils.py' if standard else '.'
        username = "kdog3682"
        repo = getDirname(dir)
        dir = "~/" + dir
        with ContextManager(dir):
            args = []
            if not isDir(".git"):
                print(  'Creating git repo'  )
                args.append("git init")

            if gitignore and not isFile(".gitignore"):
                content = [".*", "/", "!.bash_aliases", "!.vimrc"]
                write(".gitignore", "\n".join(content))

            if isFile(".git/config") and "origin" not in read(".git/config"):
                print("setting a new remote for " + repo)
                args.append(
                    "git remote set-url origin git@github.com:"
                    + username
                    + "/"
                    + repo
                    + ".git"
                )

            args.append("git add " + items)
            args.append('git commit -m "' + backupMessage + '"')
            args.append("git push -u origin master")
            result = commander(args)
            print(fullDateStamp() + " : " + result)


def dotSorter(x):
    ranks = ["_", ".", "directory", "fooba", "zooba"]
    tag = search("^" + Regex(ranks, escape=True), x)
    criterionA = ranks.index(tag) if tag else 100
    convert = lambda text: int(text) if text.isdigit() else text.lower()
    criterionB = convert(x)
    return (criterionA, criterionB)


from fpdf import FPDF
class Print(FPDF):
    def print(self, data):
        text = toString(data)
        self.printPage(None, text)
        self.commit()

    def __init__(self, data = None, fontFamily = 'Times', fontSize = 11, *a, **b):
        super().__init__(*a, **b)
        
        self.outpath = 'test.pdf'
        self.fontFamily = fontFamily
        self.fontSize = fontSize
        self.setMargins()
        self.lineNumbers = False
        self.pageCount = 0
        if data:
            if isString(data) and isPdf(data):
                commander(data)
            else:
                self.print(data)

    def setMargins(self, top=1.5, right=0.3, bottom=1.5, left=0.3):
        self.set_top_margin(inches(top))
        self.set_left_margin(inches(left))
        self.set_right_margin(inches(right))
        self.set_auto_page_break(True, inches(bottom))

    def footer(self):
        self.set_y(-10)
        self.setFont(bold=True)
        self.cell(0, 0, "Page " + str(self.page_no()), 0, 0, "R")

    def setFont(self, font = None, bold = False, size = None):
        font = font if font else self.fontFamily
        size = size if size else self.fontSize
        bold = 'B' if bold else '' 
        options = [font, bold, size]
        self.set_font(*options)

    def commit(self):
        self.output(self.outpath, "F")
        commander(self.outpath)
    
    def printTable(self, data):
        if isSimpleStorage(data):
            for k, v in data.value.items():
                self.add_page()
                self.addTitle(k)
                self.addTable(v)

    def printFiles(self, store):

        if isArray(store):
            for file in store:
                self.printPage(abspath(file), read(file))

        elif isObject(store):
            for name, text in store.items():
                self.printPage(abspath(name), text)

        self.commit()

    def printFile(self, file, lineNumbers = True):
        self.lineNumbers = lineNumbers 
        self.printPage(abspath(file), read(file))
        self.commit()

    def printPage(self, title, text):

        if self.pageCount == 0:
            self.add_page()
            self.pageCount += 1
        # elif self.get_y() > 270:
            #  self.add_page()
        else:
            self.linebreak(0.5)

        self.addTitle(title)
        if self.lineNumbers:
            text = numbered(text)
        self.addText(text)

        #  print( 'end',  self.get_y())


    def addText(self, text):
        text = util.preparePrint(text).strip()
        self.setFont()
        self.multi_cell(0, 5, text) if "\n" in text else self.cell(0, 5, text, 0, 1)

    def addTitle(self, name = None):
        if not name:
            return
        self.setFont(bold=True)
        self.cell(0, 5, name, 0, 1, "L")
        self.linebreak(0.5)

    def linebreak(self, n=1):
        self.ln(n * self.fontSize)

    def addTable(self, items):

        print(  self.w, self.h  )
        return
        y = 0
        n = 0
        lineHeight = 5
        columnWidth = 70
        columns = 3
        positionX = 10
        positionY = 40

        for i, item in enumerate(items):
            positionX = (i % columns) * columnWidth
            positionY += lineHeight if (i % columns) == 0 else 0
            self.text(positionX, positionY, numbered(item, i))
            if positionY >= 290:
                positionY = 40
                self.add_page()


class Printer(FPDF):
    def __init__(
        self,
        x,
        extra=None,
        fontSize=11,
        fontFamily="times",
        lineNumbers=False,
        title="",
        footerMessage="",
        functions=None,
        mode = None,
        *a,
        **b
    ):

        super().__init__(*a, **b)
        self.pageCount = 0
        self.margin()
        self.footerMessage = footerMessage
        self.mode = mode
        self.fontSize = fontSize
        self.fontFamily = fontFamily
        self.lineNumbers = lineNumbers
        self.store = {}

        if isString(x):
            if isFile(x):
                self.writePage(title=x, body=read(x))
            elif len(x) < 30:
                files = pathParser2(x)
                if not files: return print('no files at path-parsing')
                store = [(file, read(file)) for file in files]
                for k,v in store:
                    self.simpleWrite(k, v)

            name = changeExtension(title, "pdf") if title else "test.pdf"
            self.output(name, "F")
            commander(name)
            return
            
        if isObject(x) and x.get("pdf"):
            pdf = x.pop("pdf")
            iterate(pdf, commander)
            return

        if "this is the starting point" == "filler":
            print("should never see this")

        elif getClassName(x) == "SimpleStorage":
            self.printStorageObject(x)
        elif looksLikePath(x):
            pathObject = pathParser(x)
            self.printObject(pathObject)

        elif isFile(x):
            if size(x) > 10000 and not extra:
                print("EARLY EXIT? FILE TOO LARGE: " + str(size(x)))
                earlyExit()
            title = expandUser(x)
            self.printText(title, read(x), functions)

        elif isString(x):
            self.printText(title, x)

        elif isArray(x):
            self.printArray(title, x)

        elif isObject(x):
            self.printObject(x)

        elif getInstance(x) == "store":
            self.printStore(x)

        name = changeExtension(title, "pdf") if title else "test.pdf"
        self.output(name, "F")
        commander(name)

    def simpleWrite(self, k, v):
                self.add_page()
                self.addTitle(k)
                if self.lineNumbers:
                    v = numbered(v)
                self.write(util.preparePrint(v))
    def linebreak(self, n=1):
        self.ln(n * self.fontSize)

    def printTableObject(self, title, items, sort=True):
        if isDir(title):
            dirlist = getDirs(title)

        def format(item, i):
            n = i + 1
            delimiter = ".  "
            if n < 10:
                delimiter += " "

            n = str(n)

            if isPrimitive(item):
                return n + delimiter + str(item)
            elif isArrayLike(item):
                return n + delimiter + item[0] + ": " + str(item[1])

        if isObject(items):
            items = list(items.items())
        elif isString(items):
            items = [items]
        elif getType(items) == "dict_items":
            items = list(items)

        startpoint = 0

        def runner(items, start=0):
            nonlocal startpoint
            nonlocal title
            self.add_page()

            if title:
                self.set_font("Times", "B", 11)
                self.cell(0, 5, title, 0, 1, "L")
                self.set_font("Times", "", 11)
                self.ln()
                title = False

            y = 0
            n = 0
            lineHeight = 5
            columnWidth = 70
            columnHeight = 50
            leftMargin = 8
            topMargin = 40

            for i, item in enumerate(items):
                nonlocal sort
                startpoint += 1

                if i < columnHeight:
                    n = 0
                elif i < columnHeight * 2:
                    n = 1
                elif i < columnHeight * 3:
                    n = 2

                if test(
                    "^[\w'\"/.,!@#$%^&*()-={}\[\]|\\/_+]", item
                ):  # re=nonStandardChars
                    item = removeNonStandardChars(item)

                if len(item) > 20:
                    item = re.split(" ?-", item, maxsplit=1)[0]

                if item in dirlist:
                    item = "directory: " + item
                self.text(
                    leftMargin + columnWidth * n,
                    topMargin + lineHeight * y,
                    format(item, i + start),
                )
                y += 1
                if y % columnHeight == 0:
                    y = 0

        for i, chunk in enumerate(arrayChunks(items, size=150)):
            try:
                chunk.sort(reverse=True, key=lambda x: (int(x[1]), len(x[0])))
            except:
                if sort:
                    chunk.sort(key=dotSorter)
            runner(chunk, startpoint)

    def addTable(self, items):
        self.font()
        width = 3
        w = (self.w - self.l_margin * 2) / width
        h = self.fontSize / 2

        for i, item in enumerate(items):
            if (i + 1) % width == 0:
                newline = 1
            else:
                newline = 0
            self.cell(w, h, str(i + 1) + ".  " + str(item), ln=newline)

    def font(self, cat=""):

        if cat == "title":
            if self.fontFamily == "rocket":
                self.set_font("rocketbold", "", self.fontSize)
            else:
                self.set_font(self.fontFamily, "B", self.fontSize)
        elif cat == "footer":
            self.set_font("Times", "B", self.fontSize)
        else:
            self.set_font(self.fontFamily, "", self.fontSize)

    def writePage(self, title, body):
        self.add_page()
        self.addTitle(title)
        self.write(numbered(body))

    def write(self, text):
        self.font()
        if "\n" in text:
            self.multi_cell(0, 5, text)
        else:
            self.cell(0, 5, text, 0, 1)

    def addTitle(self, name=None):
        if not name:
            return
        self.font("title")
        self.cell(0, 5, name, 0, 1, "L")
        self.linebreak(0.5)

    def margin(self, top=1.5, right=0.5, bottom=1.5, left=0.3):
        right = left
        self.set_top_margin(inches(top))
        self.set_left_margin(inches(left))
        self.set_right_margin(inches(right))
        self.set_auto_page_break(True, inches(bottom))

    def footer(self):
        self.set_y(-10)
        self.font("footer")
        if self.footerMessage:
            self.footerMessage = " - " + self.footerMessage
        self.cell(0, 0, "Page " + str(self.page_no()) + self.footerMessage, 0, 0, "R")

    def printText(self, title, text, items=None):

        if looksLikeCodeFile(title) and not test("^1", text):
            self.lineNumbers = True

        if not text.strip():
            return print(text, "no text at printtext")

        self.add_page()
        self.addTitle(title)

        if exists(items):
            product = getFunctions(text, items)
            if self.lineNumbers:
                product = [numbered(x) for x in product]
            text = "\n\n".join(product)
        elif self.lineNumbers:
            text = numbered(text)

        self.write(util.preparePrint(text))

    def printArray(self, title, items):
        self.add_page()
        self.addTitle(title)
        self.addTable(items)

    def printStore(self, store):
        def parser(section, items):
            self.add_page()
            self.addTitle(section)

            for k, v in items.items():
                self.cell(h=0, w=0, align="", txt=k + ":", border="B", ln=2)
                self.write(v)
                self.ln()
                self.ln()

        store.forEach(parser)

    def addItems(self, items):
        for item in items:
            self.write(item)
            self.ln()

    def printStorageObject(self, x):
        for k, v in x.value.items():
            self.add_page()
            self.addTitle(k)
            self.addItems(v)

    def printObject(self, x):
        for k, v in x.items():
            if isDir(k):
                self.printTableObject(k, v)
            elif isArray(v):
                self.printText(k, read(k), v)
            else:
                self.printText(k, v, None)

            self.accept_page_break()


mapppp = {
    k + r"\(" if v.startswith("from") else k + "\.": v for k, v in importmap.items()
}

innerMethodName = {
    "start": "\w",
    "end": ",",
    "inclusive": True,
    "spaces": 8,
    "storeParser": lambda x: x.group(0)[:-1],
    "replacementParser": lambda x: "",
}

fds = {
    "maps": {
        "packmap": "\n    pdef: { 'destination': 'helpers.py', 'join': '\\n\\n', 'indent': 4, 'parser': pdefParser, },\n    pf: { 'parent': 'maps', 'indent': 4, 'join': '\\n\\n', 'parser': pfParser, },\n"
    }
}

inner = {
    "start": "(?:async )?(\w+)\(",
    "end": "}(?=,)",
    "inclusive": True,
    "spaces": 8,
    "storeParser": reconstitute("object-method-to-function-method"),
    "replacementParser": lambda x, spaces: spaces + x.group(1),
}

def isPdf(x):
    return x.endswith('.pdf')

def argparser():
    args = sys.argv[1:]
    return smallify(args)


def dateStringToNumber(s):
    s = capitalize(s)
    strife = '%B%Y'
    if isSingleWord(s):
        if isNumber(s):
            strife = '%m%Y'
        s += str(datetime.datetime.now().year)
    product =  datetime.datetime.strptime(s, strife)
    #  print(  product  )
    #  print(  product.timestamp()  )
    return product.timestamp()

def isRecentFileFactory(before=None, after=None):
    if isString(after):
        after = dateStringToNumber(after)
    elif isNegativeNumber(after):
        after = countMonthsBackwards(after * -1).timestamp()

    if isString(before):
        before = dateStringToNumber(before)
    elif isNegativeNumber(before):
        before = countMonthsBackwards(before * -1).timestamp()

    def parser(file):
        if before and after:
            return mdate(file) < before and mdate(file) > after
        if before:
            return mdate(file) < before 
        if after:
            return mdate(file) > after
    return parser

def countMonthsBackwards(n):
        now = datetime.datetime.now()
        prev = now - datetime.timedelta(days=(n*365)/12)
        return prev

def caffeinate(n = 5):
    if 'darwin' in sys.platform:
        print('Caffeinate: The macbook will stay awake for ' + str(n) + ' minutes.')
        subprocess.Popen('caffeinate -t ' + str(n * 60))
    else:
        print(  'caffeinate not available'  )


def toInteger(date):
    if isInstance(date, datetime):
        return date.timestamp()
    else:
        raise Exception('ray') 

def isWithinTimeFrame(date, hours=None, days=None, weeks=None):
    if not isInteger(date):
        date = toInteger(date)
    n = 0
    if hours:
        n += hours
    if days:
        n += 24 * days
    if weeks:
        n += 24 * 7 * weeks

    delta = datetime.datetime.now() - datetime.timedelta(hours=n)
    if date < delta.timestamp():
        print(    )
        return False
    return True

def writeModuleExports(items):
    if not items:
        return ''
    a = 'module.exports'
    b = parens(', '.join(items), '{ | }')
    return snsn + createVariable(a, b, 'py')

def writeModuleImports(file, dependencies):
    a = parens(', '.join(dependencies), '{ | }')
    b = "require('./" + file + '\')'
    return createVariable(a, b)

classMethodsRanking = [
    ['__', 'constructor', 'static', 'set', 'get'],
    ['@',]
]

def sortFactory(obj):
    def parser(item):
        for i, row in enumerate(obj):
            for j,regex in enumerate(row):
                if test('^\s*' + regex, item):
                    return i * 100 + j, item.lower()
        return 50, item.lower()
    return parser

classBodyRE = '^class [\w\W]+?(?=\n\w)'

def addImportString(s, utilfile, dependencies):
    importString = writeModuleImports(utilfile, dependencies)
    return replace('^(?:const {.*)?', importString + sn, s)

def organizeClassBody(s):
    if not test('^class', s, flags=re.M):
        return s

    def parser(x):
        s = x.group(0)
        regex = '(?<!(?:@property|@value).*?)\n(?=    \S)'
        items = re.split(regex, s)
        methods = items[1:]
        methods.sort(key = sortFactory(classMethodsRanking))
        start = items[0]
        end = '}\n' if s.endswith('}') else ''
        return start + sn + toString(methods) + sn + end

    return re.sub(classBodyRE, parser, s)

def createJavascriptMainFile(file, utilfile, dependencies):
    def parser(s):
        text = addImportString(s, utilfile, dependencies)
        text = organizeClassBody(s)
        return text
    rpwo(file, parser)

def format(*items):
    return '\n\n'.join([item.strip() for item in items])

def filetextgetter(x):
    if len(x) < 20 and isFile(x):
        text = read(x)
        file = x
    else:
        text = x
        file = 'untitled.txt'
    
    return [file, text]

def commentBox(message="", file=__file__):
    if message:
        message = " : " + message
    return comment(fullDateStamp() + message, getExtension(file), border=True)



def transferFunctions(names, frompath = 'archive3.py', topath = 'utils.py', delete=False):
    regex = Regex(names, "function-body")

    def parser(x):
        return ["", x.group(0)]

    original, store = mrep2(regex, parser, read(frompath), flags=re.I)
    store.insert(0, commentBox("transfer functions start", topath))
    store.append(commentBox("transfer functions end", topath))

    if delete:
        write(frompath, original)
    prepend(topath, store)


def sum(a, b):
    return a + b


def multiply(a, b):
    return a * b


copylib = {
    "daemon": "",
}


def copyToGoogleDrive(*files):
    paths = [copylib[file] for file in files]
    destination = getDrive()
    [copyFile(path, destination) for path in paths]


# ---------------------------- January 4th, 2021 --------------------------------#

def isRelativePath(s):
    return not os.path.isabs(s)

def getdirs(dir, query):
    return getFiles99(os.path.dirname(dir), recursive=False, requirements = [isPublic, isDir, testFactory(query)])

def testFactory(regex):
    return lambda x: test(regex, x)
    
def isDefined(x):
    return x != None
def itemgetter(items):
    if len(items) == 1 and isArray(items[0]):
        items = items[0]
    return items
def listgetter(x):
    return x if isArray(x) else [x]
def changedir(dir):
    if dir == 'root':
        dir = getRoot()
    os.chdir(dir)
    print('Context Manager: Switching directory to ' + dir)
def joined(*items):
    try:
        return ' '.join(items)
    except:
        return ' '.join(items[0])

def isNestedArray(x):
    try:
        return isArray(x[0])
    except:
        print(  'error at nested array', x  )
        return False

def removeComments(input = None, lang = None):
    text = textgetter(input)
    if not lang:
        lang = getLang(input)
    commentDelimiter = jspymap.get(lang).get('comment')
    return re.sub('^' + commentDelimiter + '.*\n?', '', text, flags=re.M)


shortmonthslist = [
  'jan', 'feb', 'mar',
  'apr', 'may', 'jun',
  'jul', 'aug', 'sep',
  'oct', 'nov', 'dec'
]
stringbuilderkeymap = {
    'bash-function': 'bash-functions',
    'alias': 'aliases',
    'function': 'functions',
    'variable': 'variables',
    'class': 'classes',
    'factory-function': 'factory-functions',
    #  'generated-variables
}

def isSimpleStorage(x):
    return getClassName(x) == 'SimpleStorage'
def getFilesAndFolders(dir, limit = 400):
    store = SimpleStorage()
    with Breaker(limit = limit) as next:
        def runner(dir):
            for item in os.listdir(dir):
                next()
                if isPublic(item):
                    path = os.path.join(dir, item)
                    if isFile(path):
                        store.add(dir, item)
                    elif isDir(path):
                        runner(path)

        runner(dir)

    return store.value

def createReport(dir = None, **kwargs):
    info = getCallerInfo()
    data = None

    if dir:
        data = getFilesAndFolders(dir)
        Print().writeTable(data)

def toRoot(dir = ''):
    return expandUser('~/') + dir

def getFunctionCaller(n = -1):
    stack = inspect.stack()
    if n == -1:
        return stack[2][3]
    else:
        return stack[len(stack) - 2][3]

def regexFactory(regex):
    return lambda x, flags = 0: test(regex, x, flags=flags)

startsWithLetter = regexFactory('^[a-zA-Z]')
def alphabetSort(x):
    return help

def sortKeyFactory(items):
    def handler(x):
        tag = search(Regex(items, start='^'), x)
        try:
            order = items.index(tag)
        except: 
            order = 100

        return (order, alphabetSort(x))
    return handler

def nextnumerate(lines):
    return [(lines[i], line) if i < len(lines) else ('', line) for i,line in enumerate(lines)]

def dictionaryAction(s, dict):
    if dict.get(test):
        for k,v in dict.get(test):
            if test(k, s):
                return v

def fileInfoGetter(name, *keys):
    obj = jspymap.get(name)
    store = [obj.get(key) for key in keys]
    return store

def organizeConfigFile(name, mode = ''):
    file, parser, remove = fileInfoGetter(name, 'file', 'parser', 'remove')
    product = StringBuilder(file, parser=parser, titled=False).export(mode=mode)
    if remove:
        removeFile(file)
    
def toSqliteString(items, mode = ''):
    if mode == 'constraint':
        delimiter = ' and '
    else:
        delimiter = ', '

    s = ''
    for i,item in enumerate(items):
        if isEven(i):
            s += str(item) + ' = ' 
        else:
            s += parens(str(item), 'sq') + delimiter
    product =  s[:-len(delimiter)]
    return ' WHERE ' + product if mode == 'constraint' else product


def defaultListDictParser(items):
    storage = SimpleStorage()
    for item in items:
        for k,v in item.items():
            storage.add(k, v)
    return storage.value

def formatMysteryObject(obj, dict):
    type = getMysteryObjectType(obj)
    parser = obj.get(type)
    if not parser:
        raise Exception('No matching parser', type)
    return parser(obj)

def getMysteryObjectType(obj):
    if isArray(obj):
        if isArray(obj[0]):
            return 'list-list'

        if isObject(obj[0]):
            return 'list-dict'

        return 'list'

    if isObject(obj):

        obj = obj.values()
        if isArray(obj[0]):
            return 'dict-list'

        if isObject(obj[0]):
            return 'dict-dict'

        return 'dict'


redditRE = '^(?:#|//) *' + Regex(redditQuestionWORDS, 'wb') + '.*' + sn + '(?:^(?:#|//).*\n)*' + '^\S.*[\w\W]+?(?=\n\w)'
redditRE = '^(?:#|//) *' + '(r\.\w+)? *' + '(' + Regex(redditQuestionWORDS, 'wb') + '.*' + sn + '(?:^(?:#|//).*\n)*)' + '(^\S.*[\w\W]+?)(?=\n\w)'

def guotie3(file):
    subredditmap = {
        'js': 'learnjavascript',
        'py': 'learnpython',
        'vue': 'vuejs',
    }

    s = read(file)
    store = []
    matches = re.findall(redditRE, s, flags=re.M)
    lang = getLang(file) 

    for subreddit, comment, code in matches:
        prose = re.sub('^(?:#|//) *', '', comment, flags=re.M)
        if not subreddit:
            subreddit = lang
        else:
            subreddit = subredditmap.get(subreddit[2:], subreddit[2:])

        prose = spellcheck(prose)
        code = indent(code)
        title, prose = split(prose)
        body = prose + nbspASSET + code
        product = {'subreddit': subreddit, 'body': body, 'title': title}
        store.append(product)
    return store

def guotie2(s):
    pyBlockRE = '^(?:\w+ *= *)(?:(?<!\\\\)"""[\w\W]+?(?<!\\\\)"""|(?<!\\\\)\'\'\'[\w\W]+?(?<!\\\\)\'\'\').*\n?'
    pyCommentRE = '^ *#.*'

    pyBlockRE = '^\w+ *= *((?<!\\\\)"""[\w\W]+?(?<!\\\\)"""|(?<!\\\\)\'\'\'[\w\W]+?(?<!\\\\)\'\'\'.*)\n*'
    pyCommentRE = '^ *#(.*)'
    parser = lambda x: ('', x.group(1) or x.group(2))
    text, store = mrep2(Regex([pyBlockRE, pyCommentRE]), parser, s)
    print(  store  )

def createCodeFile(name, lang, data):
    if len(lang) != 2:
        lang = getLangFromFile(lang)

    if isArray(data):
        data.sort(key = codeSortKey)

    write(toFileName(name, lang), toString(data), preview=True)

def printError(*args):
    if args[0] == None:
        return
    name = args[0].__name__
    value = str(args[1])
    print(  name, ': ', value  )

class ErrorTest():
    def __init__(self, value):
        self.value = value
        
    def __enter__(self):
        pass
    def __exit__(self, name, value, traceback):
        sys.excepthook = excepthook
        if name:
            print(  name  )
            print(  value  )
            print(  lbr  )
            print(  'value------------------------', self.value  )

def looksLikeString(s):
    with ErrorTest(s):
        return test('^(?:const )?\w+ = [\'\"]', s)

def createUtilsAndNonUtils(file):
    text = read(file)
    safe = []
    seen = []
    unsafe = jspygetter(file, 'unsafe')
    lib = createCodeLibrary(file)


    def everyChildIsSafe(text):
        children = getDependencies(text)
        if not children:
            return True
        safetyTracker = []
        for child in children:
            if child in unsafe:
                print(  child, 'is unsafe, returning false'  )
                return False
            elif child not in seen:
                print(  child, '   determining safety for child'  )
                safetyTracker.append(determineSafety(child))

        return all(safetyTracker)

    def determineSafety(k):
        if k in seen:
            return

        seen.append(k)
        text = lib.get(k)
        if not text:
            if k in unsafe:
                print(  'no text', k , 'is unsafe'  )
                return False 
            else:
                safe.append(k)
                return True

        if looksLikeString(text):
            safe.append(k)
            return True
        if  everyChildIsSafe(text):
            print(  'everychild is safe for ', k  )
            safe.append(k)
            return True
        else:
            print(  'detterminesafety', k, 'is unsafe'  )
            unsafe.append(k)
            return False

    for k in lib.keys():
        if k in safe or k in unsafe:
            continue
        determineSafety(k)

    safe = [lib.get(item) for item in safe if lib.get(item)]
    unsafe = [lib.get(item) for item in unsafe if lib.get(item)]
    createCodeFile('safe', file, safe)
    createCodeFile('unsafe', file, unsafe)

def tempfile(lang, name=""):
    s = "temp" + str(name) + "." + lang
    return s


class TempFile:
    def __init__(self, file, lang):
        self.a = "tempa" + removeExtension(file) + "." + lang
        self.b = "tempb" + removeExtension(file) + "." + lang
        self.c = "tempc" + removeExtension(file) + "." + lang


def log(x):
    if isObject(x):
        for k, v in x.items():
            print(k)
            print("--------")
            print(v)
            print(lbr)
            print()
    elif isArray(x):
        if isFile(x[0]):
            x = [el + " - " + datestamp(el, "detailed") for el in x]
            print(toString(x, format=True))

    elif isString(x):
        print(x)
        print()


def isLastUsedFile(currentFile):
    files = getFiles4("files")
    latest = max(files, key=mdate)
    return basename(latest) == basename(currentFile)


def breaker(count, limit=10):
    if count == limit:
        raise Exception("Limit-Breaker Reached at " + str(limit))


def split(x, mode="once"):
    delimiter = sn
    if isArray(x):
        if isArray(mode):
            return [x[mode[0]], x[mode[0] + 1: mode[1]], x[mode[1]]]
        if mode == "once":
            return [x[0], x[1:]]
    elif isString(x):
        product = x.split(delimiter, 1)
        return product


def changeName(file, mode=True):
    if isString(mode):
        regex = parens(mode, "ncg") + "?\d*?(?=\.\w+$)"
        return re.sub(regex, mode, file, count=1)
    else:
        count = 1
        while isFile(file):
            file = re.sub("\d*?(?=\.\w+$)", str(count), file)
            count += 1
        return file


def testrun(file):
    text = read(file)
    lang = getLangFromFile(file)
    product = preclean(text, lang)
    print(  'cleaned'  )
def toFileName(s, lang):
    return str(s) + "." + lang


def createMainFile(name, mainItems, libraryItems=None, helperFile=None, preview=True):
    if not mainItems:
        return None

    mainItems = sorted(valgetter(mainItems, mode="array"), key=mainFileSortKey)
    text = toString(mainItems)
    queries = getFunctionNames(mainItems)
    lang = getLangFromFile(name)
    dependencies = ""

    if not libraryItems:
        libraryItems = getNativeDependencies(text, lang)

    if libraryItems:
        dependencies += toString(libraryItems) + "\n"

    if helperFile:
        dependencies += "from " + removeExtension(basename(helperFile)) + " import *"

    for query in queries:
        if query and jspymap[lang]["preset-snippets"].get(query):
            text += snsn + jspymap[lang]["preset-snippets"].get(query)
            if query == "main":
                preview = "run"

    if dependencies:
        text = dependencies + snsn + text

    return write(name, text, preview=preview)


def createHelperFile(name, helperItems, libraryItems=None):
    if not helperItems:
        return None

    lang = getLangFromFile(name)
    text = toString(sorted(helperItems, key=codeSortKey))
    if not libraryItems:
        libraryItems = getNativeDependencies(text, lang)

    if libraryItems:
        text = toString(libraryItems) + snsn + text

    return write(name, text, namechange="utils", preview=True)


def getCodeItemName(s):
    if test("(?:def|function) main", s):
        return "main"
    match = search("^(?:async|function|def|class)", s, flags=re.M)
    if match:
        if match == "function" or match == "def":
            return "function"
        else:
            return match
    match = search("^(?:const )?\w+ = [{\[]?", s)

    if match.endswith("[") or match.endswith("{"):
        return "object-variable"

    if match:
        return "variable"


def mainFileSortKey(x):
    def arrangementSorter(x):
        name = getCodeItemName(x)
        if name == "main":
            return 1
        if name == "class":
            return 2
        if name == "function":
            return 3

    return (arrangementSorter(x), len(x))


def codeSortKey(x):
    return (arrangementSorter(x), countDependencies(x), len(x))
    return (countDependencies(x), len(x))


def isLastItem(i, items):
    return i == len(items) - 1


def writeCodeFile(name, lang, store):
    store.sort(key=codeSortKey)
    write(toFileName("safeutils", lang), store)


def gzipRead(file):
    with gzip.open(file, "rb") as f:
        return f.read().decode()


def gzipWrite(file, data=None):
    if not data:
        data = read(file)
    if not isString(data):
        data = stringify(data)
    name = changeExtension(file, "gz")
    with gzip.GzipFile(name, "wb") as f:
        f.write(data.encode())


def gzipUpdate(file, data):
    prev = gzipRead(file)
    if looksLikeObject(prev):
        prev = json.loads(prev)
    product = deepMerge(prev, data)
    gzipWrite(file, product)


class Database:
    @staticmethod
    def DELETE(key):
        db = Database()
        db.deleteTable(key)
        db.commit()

    @staticmethod
    def CHECK(key):
        db = Database()
        try:
            return db.get(key)
        except:
            return None

    @staticmethod
    def GET_SINGLETON(key):
        print(  'getting singleton item from table'  )
        db = Database()
        items = db.get(key)
        return [(a, parseJSON(b)) for a,b in items]

    @staticmethod
    def SINGLETON(key, item):
        db = Database()
        if not db.check(key):
            db.create(key, 'date', 'item', 'type')
        db.insert(key, datestamp(), stringify(item))
        db.commit()
        print(  'reading the singleton items'  )
        pprint(Database.GET_SINGLETON(key))

    def at(self, key):
        self.tableKey = key
        return self

    
    @staticmethod
    def qmaker(items = None):
        if not items:
            return '*'
        if isArray(items[0]):
            return parens(('?,' * len(items[0]))[:-1])
        else:
            return parens(('?,' * len(items))[:-1])


    def redditor(self):
        statement = self.createSelectionStatement(asdf)

    def statementFactory(self, mode):
        map = {
            'INSERT': {
                'prefix': 'INSERT INTO ',
                'suffix': 'VALUES',
                'parser': Database.qmaker,
                #  'returner': prefix + self.tableKey + ' ' + suffix + ' ' + parser(x)
            },

            'SELECT': {
                'prefix': 'SELECT ',
                'suffix': 'FROM',
                'parser': lambda x: parens(', '.join(x)) if x else '*',
                #  'returner': lambda x: joined(prefix, parser(x), suffix, self.tableKey),
                #  'returner': prefix + self.tableKey + ' ' + suffix + ' ' + parser(x),
            }
        }

        if mode == 'INSERT':
            prefix = 'INSERT INTO '
            suffix = 'VALUES'
            parser = Database.qmaker
            return lambda x: prefix + self.tableKey + ' ' + suffix + ' ' + parser(x)
        elif mode == 'UPDATE':
            prefix = 'UPDATE'
            suffix = 'SET'
        elif mode == 'SELECT':
            prefix = 'SELECT'
            suffix = 'FROM'
            parser = lambda x: parens(', '.join(x)) if x else '*'
            return lambda x: ' '.join([prefix, parser(x), suffix, self.tableKey])
        else:
            prefix = 'asdfs'
            suffix = 'sdfadsf'
            parser = None
        

    def createSelectionStatement(self, tableKey, keys=None, condition = None, sort=None):
        s = 'SELECT '
        if keys:
            s += Database.qmaker(keys)
        s += ' FROM ' + tableKey
        if condition:
            s += ' WHERE ' + condition
        if sort:
            s += ' ORDER BY ' + sort
        if group:
            s += ' GROUP BY ' + group[0] + ' HAVING ' + group[1]
        return s
#ex sqlite SELECT * FROM COMPANY ORDER BY NAME, SALARY ASC;
#ex sqlite > SELECT * FROM COMPANY GROUP BY name HAVING count(name) < 2;

        #  return self.statementFactory('SELECT')(x)
    
    def incrementReddit(self, id):
        self.increment('reddit', 'count', 1, id)

    def increment(self, tablekey, col, value, condition):
        command = 'UPDATE ' + tablekey + ' SET ' + column + ' = ' + column + ' + ' + value + ' WHERE ' + condition

        self.cursor.execute(command)

    def createUpdateStatement(self, tableKey, pairs, condition = None):
        s = 'UPDATE ' + tableKey

        valueString = toSqliteString(items)
        constraintString = toSqliteString(constraints, 'constraint')
        statement = self.updateStatement + valueString + constraintString

    def createInsertionStatement(self, x):
        return self.statementFactory('INSERT')(x)

    def put(self, x):
        statement = self.createInsertionStatement(x)
        print(  statement  )
        action = self.cursor.executemany if isNestedArray(x) else self.cursor.execute
        action(statement, x)
            
    def setCursorInfo(self):
        self.cursorInfo = self.cursor.execute('select * from ' + self.tableKey + ';')

    def exists(self):
        return self.cursor.fetchone() == None
    def count(self, mode = 'horizontal-length'):

        if mode == 'vertical-length' or mode == 'v':
            return (self.cursorInfo.fetchall())

        if mode == 'horizontal-length' or mode == 'h':
            return (  len(self.cursorInfo.fetchone())  )

    def select(self, key = None):
        if not key:
            key = self.tableKey
        return self.cursor.execute('select * from ' + key)

    def check(self, key = None):
        try :
            cursor = self.select(key)
            return True if cursor.fetchone() else 'EMPTY' 
        except Exception as e:
            if str(e) == 'no such table: ' + str(key):
                return False
        

    def getTableHeaders(self):
        self.setCursorInfo()
        return [description[0] for description in self.cursorInfo.description]

    def getRowByValue(self, value):
        for i, item in enumerate(self.getValue()):
            if item[0] == value:
                return item

    @property
    def selectStatement(self):
        return 'SELECT ' + self.tableKey + ' '

    @property
    def updateStatement(self):
        return 'UPDATE ' + self.tableKey + ' SET '

    def updateMultiple2(self, items, constraints):
        print(  self.getValue('all')  )
        valueString = toSqliteString(items)
        constraintString = toSqliteString(constraints, 'constraint')
        statement = self.updateStatement + valueString + constraintString
        print(  statement  )
        self.cursor.execute(statement)

        #  for row in self.cursor.fetchall():
            #  statement = self.updateStatement + valueString + constraintString
            #  print(  statement  )
            #  self.cursor.execute(statement, items)

    def updateMultiple(self, items):
        # the last item is the constrain.
        anonQuery = ('?, '  * (len(items) - 2))[:-2]
        statement = 'UPDATE ' + self.tableKey + " SET (" + anonQuery + ") WHERE (?)=(?)"
        #  product = (el[0] + '=' + parens(el[1], 'sq') for el in items)
        product = (parens(el) if isOdd(i) else el for i, el in enumerate(items))
        print(  statement  )
        print(  product  )
        self.cursor.execute(statement, product)

    def update(self, *args):
        headers = self.getTableHeaders()
        arguments = []
        arguments.append(self.tableKey) # TABLEKEY
        arguments.append(headers[0])    # NAME-KEY
        arguments.append(args[0])       # NAME-VALUE TO TARGET THE ROW 

        if len(args) == len(headers) and isPrimitive(args[0]):
            for i in range(1, len(headers)):
                if args[i]:
                    #  print(  headers[i]  ) # response
                    #  print(  args[i]  )    # 100
                    arguments.append(headers[i])
                    arguments.append(args[i])

        self.updateRunner(*arguments)

    def save():
        self.connection.cursor.commit()

    def close():
        self.connection.cursor.close()

    def saveAndCLose():
        self.connection.cursor.commit()
        self.connection.cursor.close()

    def deleteAll(self, id = None):
        statement = 'DELETE FROM ' + self.tableKey
        if id:
            statement += 'WHERE ' + id + '=?'

        c = self.connection.cursor()

        if id:
            c.execute(statement, (id,))
        else:
            c.execute(statement)

        c.commit()
        print('We have deleted', c.rowcount, 'records from the table.')

    def updateReddit(self, k, v):
        self.update('reddit', 'id', k, 'response', v)

    def updateRunner(self, key, nameKey, nameValue, columnKey, columnValue):
        statement = "UPDATE " + key + " SET " + columnKey + " = ? WHERE " + nameKey + " = ?"
        self.cursor.execute(statement, (columnValue, nameValue))

    def getValue(self, mode = 'rows'):
        cursor = self.cursor.execute('SELECT * from ' + self.tableKey)
        if mode == 'keys': [description[0] for description in cursor.description]
        if mode == 'rows': return cursor.fetchall()
        if mode == 'all': return (
            [description[0] for description in cursor.description], 
            cursor.fetchall()
        )

    def selectAll(self, key, headers=False):
        cursor = self.cursor.execute('SELECT * from ' + key)
        keys = [description[0] for description in cursor.description]
        rows = cursor.fetchall()
        return (keys, rows) if headers else rows

    def importasd(self, key, obj):
        obj = formatMysteryObject(obj, {
            'list': None,
            'dict': None,
            'list-dict': defaultListDictParser,
            'dict-list': None,
            'list-list': None,
        })
        # really curious if this would work.  
        #  self.createTable(key, obj.keys(), obj.values())
        
    def export(self, key):
        keys, rows = self.selectAll(key, headers=True)
        store = {}
        for i,key in enumerate(keys):
            for j, row in enumerate(rows):
                if not store.get(key):
                    store[key] = []
                store[key].append(rows[j][i])

        return json.dumps(store)

    def __init__(self, file="~/computerstorage.db", tableKey = 'reddit'):
        self.cursorInfo = None
        self.tableKey = tableKey
        import sqlite3
        self.connection = sqlite3.connect(expandUser(file))
        self.cursor = self.connection.cursor()

    def deleteTable(self, key, *args):
        if not args:
            self.cursor.execute("DROP table " + key)
            print(  'Deleting table:', key  )

    def commit(self):
        self.connection.commit()
        self.connection.close()

    @staticmethod
    def createhelper(x, i):
            entry = x + ' TEXT' if not x.endswith(' int')  else x[:-4] + ' INTEGER'
            if i == 0:
                entry += ' PRIMARY KEY'
            return entry

    def create(self, key, *entries):
        print(  'creating table', key  )
        entries = reduceString(entries, Database.createhelper, delimiter=', ')
        self.cursor.execute(joined('CREATE TABLE IF NOT EXISTS', key, parens(entries)))

    def add(self, key, *args):
        for arg in args:
            self.insert(arg, key)

    def insert(self, key, *args):
        self.put(args)
        #  if len(args) == 1:
            #  args = parens(parens(args[0], 'sq'))
        #  statement = "INSERT INTO " + key + " VALUES " + str(args)
        #  self.cursor.execute(statement)

    def read(self, key, *args):
        args = ', '.join(args)
        statement = "SELECT " + args + " FROM " + key
        print(  statement  )
        rows = self.cursor.execute(statement).fetchall()
        print(  rows  )


    def get(self, *headers):
        statement = self.createSelectionStatement(headers)
        print(  statement  )
        return self.cursor.execute(statement).fetchall()

    def getSpecific(self, key, query, target, headers):
        headers.append(query)
        queries = ", ".join(headers)
        items = self.cursor.execute(
            "SELECT " + queries + "FROM " + key + " WHERE " + query + " = ?",
            target,
        )
        return items.fetchall()


fileextensionslist = ["csv", "js", "html", "css", "py", "pdf", "txt", "json"]
dictItemsRE = "^ *['\"]?(.*?)['\"]?: ?(.*?),$"


def inputIndexer(items):
    prettyPrint(items)
    answer = input()
    if " " in answer:
        return [items[int(x)] for x in answer.split(" ")]
    else:
        return items[answer]


def fileSelector(dir):
    items = getFiles2(dir, recursive=True)
    prettyPrint(items)
    answer = input().split(" ")
    [openFile(items[int(x) - 1]) for x in answer]


def getDirsdfInfo():
    dir = "~/.local/lib/python3.7/site-packages"
    dir = ospj(dir, "spellchecker")

    fileSelector(dir)

    for item in absdir(dir):
        if isDir(item):
            print("dir", basename(item))
        elif isFile(item):
            print("file", basename(item), size(item))
        else:
            print("wtf")




def isLastDayOfMonth():
    import calendar
    date = datetime.date.today()
    last_day_of_month = calendar.monthrange(date.year, date.month)[1]
    return date == datetime.date(date.year, date.month, last_day_of_month)


def getToday():
    return datetime.date.today()
    return datetime.date.fromtimestamp(time.time())


def isSunday():
    return datetime.date.today().weekday() == 6


def cleanup():
    return


def sreplaceFile(file, dict, cat):
    rpwo(file, sreplace, dict, cat)


tabWidth = " " * 4


def reducer(x, parser, acc):
    if isObject(x):
        items = list(x.items())

    if isArrayLike(items[0]):
        for k, v in items:
            accumulate = parser(k, v) if countParameters(parser) == 2 else parser(v)
            if isString(acc):
                acc += accumulate
            elif isArray(acc):
                acc.append(accumulate)
            elif isObject(acc):
                if isArrayLike(accumulate):
                    acc[accumulate[0]] = accumulate[1]
    else:
        for item in items:
            accumulate = parser(item)
            if isString(acc):
                acc += accumulate
            elif isArray(acc):
                acc.append(accumulate)
            elif isObject(acc):
                if isArrayLike(accumulate):
                    acc[accumulate[0]] = accumulate[1]
    return acc


def toStringDictionary(dict):
    parser = lambda k, v: tabWidth + parens(k, "dq") + ": " + v + ",\n"
    s = reducer(dict, parser, "")
    testproduct = parens(s, "brackify")
    return testproduct


def cleanupDict(s):
    lang = "js" if test("^ *(?:let|const) =", s) else "py"
    name = search("\w+(?= =)", s)
    items = re.findall(dictItemsRE, s, flags=re.M)
    dict = reduceObject(items, lambda k, v: (k, v))
    return createVariable(name, toStringDictionary(dict), lang)


def editJavascriptDict(dict, file="z"):
    sreplaceFile(file, dict, "replaceChunk")


def spellCheckFile_insertResultIntoDictionary(fromFile, toFile="z"):
    editJavascriptDict({"pmwb": jsonify(fixSpelling(fromFile))})


dictval = {"a": "b", "c": "d"}


def pv(*args):
    def runner(arg):
        name = ""
        if not arg:
            arg = "no result"
        return replace(
            ";",
            ": ",
            ("" + name + "\n---------------\n" + indent(toString(arg, format=True))),
        )

    for arg in args:
        print(runner(arg))


def prettyPrint(*items):
    os.system("clear")
    pv(*items)


def getDuplicates(seq):
    seen = set()
    return list(set(x for x in seq if x in seen or seen.add(x)))

def removeDuplicates(item):
    seen = set()
    unique = []
    for item in items:
        if not item:
            continue
        if item not in seen:
            unique.append(item)
            seen.add(item)
    return unique


def compareDifferences(*files):
    key = "notes"
    for file in files:
        print(file)
        arr = read(file, "json")[key]
        print(len(arr))
        pprint(getDuplicates(arr))
        print()
        print()


def lambdaSome(items, callback):
    return any(callback(item) for item in items)


def lambdaEvery(items, callback):
    return all(callback(item) for item in items)


def getFiles4(key=None):
    files = listdir(os.getcwd())
    if not key:
        return files
    if key == "files":
        return filtered(files, lambda x: isFile(x))
    if key == "dirs":
        return filtered(files, lambda x: isDir(x))

    if isString(key) and key in fileextensionslist:
        runner = lambda x: x.endswith("." + key)
    else:
        runner = key
    return filtered(listdir(os.getcwd()), runner)


def combineTextFiles():
    files = getFiles4(key="txt")
    answer = input(files)
    currentFile = ""
    while answer in files:
        currentFile = answer
        os.system("clear")
        print(read(answer))
        answer = input()
    if answer == "q":
        return
    if answer == "del":
        removeFile(currentFile)
    name = "combined.txt"
    product = reducer(files, lambda x: x + lbr + read(x) + snsn, "")
    write(name, product)


def getSmallBig(a, b):
    if len(a) > len(b):
        return b, a
    return a, b


def getDifferenceBetweenFiles(a, b):
    store = []
    textA = read(a, "text").split("\n")
    textB = read(b, "text").split("\n")
    small, big = getSmallBig(textA, textB)
    lines = difflib.unified_diff(big, small, a, b, n=0)
    store = filtered(lines, lambda line: not test("^(?:@@|\+\+|--)", line))
    return toString(store)


def cp(file):
    return file + "copy"


class Enumerated:
    def __init__(self, items, acc = '', delimiter = '\n'):
        self.items = items
        self.acc = acc
        self.delimiter = delimiter
    
    def run(parser):
        for i, item in enumerate(self.items):
            self.acc = parser(self.acc, item, i)
            

def reduceString(items, parser, delimiter="\n\n"):
    s = ""
    for i, item in enumerate(items):
        s += parser(item, i)
        if not isLastItem(i, items): s += delimiter
    return s


def reduceObject(data, parser):
    store = {}

    for item in data:
        product = parser(item)
        if isArray(product):
            store[product[0]] = product[1]
        else:
            store[item] = product

    return store


def countParameters(fn):
    from inspect import signature

    return len(signature(fn).parameters)


def removeDuplicateEntriesFromJson(file):
    parser = lambda x: reduceObject(x, lambda v: setify(v) if isArray(v) else v)
    rpwo(file, parser)


def removeFolder(dir):
    shutil.rmtree(expandUser(dir), ignore_errors=True)


def humzle(s):
    s = addBackSlashes(s, target="quotes")
    store = {}
    regex = "^(.*?) (.+)"
    for a, b in re.findall(regex, s, flags=re.M):
        if test("/", b):
            b, ending = b.split("/")
            store[a + ending] = b + ending

        store[a] = b
    return store


def jsonify(dict):
    return indent(stringify(dict)[1:-2] + ",", 2)


def getProseWords(s):
    regex = "\\b[a-zA-Z][-\w'.]+?[a-zA-Z]\\b"
    return re.findall(regex, s)


def fixSpelling(x):
    from spellchecker import SpellChecker
    spell = SpellChecker()

    ignorelist = "yijie"
    words = getProseWords(textgetter(x))
    misspelled = spell.unknown(words)
    misspelled = filtered(misspelled, lambda x: x not in ignorelist)
    ppprint(misspelled)
    print(len(misspelled))

    store = {}
    catchall = []

    length = len(misspelled)
    for i, word in enumerate(misspelled):
        count = length - i - 1
        candidates = list(filter(lambda x: len(x) > len(word), spell.candidates(word)))

        if len(candidates) == 1:
            store[word] = candidates[0]

        else:
            prettyPrint("words remaining: " + str(count), word, candidates)
            answer = input()
            if isNumber(answer):
                store[word] = candidates[int(answer) - 1]
            elif answer:
                store[word] = answer
            else:
                catchall.append(word)

    if len(catchall) > 5:
        append("skippedwords.txt", catchall)
    if not exists(store):
        raise Exception("dict is empty")
    return store


def consolidate(file, outpath=None):
    options = {}
    edits = {
        "(^ *)testproduct = *(.*?)\s+return.*": lambda x: x.group(1)
        + "return "
        + x.group(2),
    }
    options = {
        "currentUsage": {
            "reducer": "reduces everything down. it seems to work better than the various other reduces",
        },
        "rename": {
            "simpleMerge": "merge",
            "objectMerge": "merge",
        },
        "shunt": {
            "read": "english.js",
            "write": "english.js",
            "fs": "english.js",
        },
    }

    outpath = outpath if outpath else file
    lang = getExtension(file)
    references = jspy[lang]["cwf"]
    prettyFormatter = (
        nodePrettier if lang == "js" else lambda x: Black(deleter(read(file)))
    )

    text = prettyFormatter(deleter(text=read(file)))

    if "deprecate" in options:
        text = deprecate(text, options["deprecate"])

    if "rename" in options:
        text = renameFunctions(text, options["rename"])

    text, zero, shunts, docs = cleanFile(text, references, options.get("shunt"))

    testString = "\n\n" + jspy[lang]["test"]
    answerString = jspy[lang]["answer"]
    write(outpath, text + testString)
    answer = checkOutput(outpath)
    if answer == answerString:
        rename(file, toDatestampName(file))
        write("zero." + lang, zero)
        Printer(docs, "object-of-lists")
        for k, v in shunts.items():
            append(k, v)
    else:
        print(answer)
        print(linebreak)
        print(answerString)


def sizeInfo(file):
    return {"size": size(file), "length": len(read(file, cat="text"))}


def guotie(s):

    redditQuestionRE = (
        starterRE + parens(commentRE) + "r (.*)\n" + parens(cdf[1:] + walluRE) + enderRE
    )

    def redditQuestionStorer(comment, text, function):
        subreddit = "learnpython" if comment.startswith("#") else "learnjavascript"
        title, text = re.split("(?<=[.?])", spellcheck(text), maxsplit=1)
        text += "\n\n&nbsp;\n\n" + indent(function)
        return {"subreddit": subreddit, "title": title, "body": text}

    sqRE = "(?<!\\\)'[\w\W]+?(?<!\\\)'"
    tripleRE = "(?<!\\\)'''[\w\W]+?(?<!\\\)'''"
    dqRE = '(?<!\\\)"[\w\W]+?(?<!\\\)"'
    tildaRE = "(?<!\\\)\`[\w\W]+?(?<!\\\)\`"
    eqRE = " ?= ?"
    consoleLogRE = "(?:pp?p?rint|console\.log)\((.*?)\)\n?"
    guotieRE = (
        "^(\w+)"
        + eqRE
        + parens(Regex([tripleRE, sqRE, dqRE, tildaRE]))
        + "\s*"
        + "// ?"
        + consoleLogRE
    )

    dict = {
        consoleLogRE: {
            "store": ph,
            "replace": "",
        },
        guotieRE: {
            "store": guotieParser,
            "replace": "",
        },
        redditQuestionRE: {
            "store": lambda *args: redditQuestionStorer(*args),
            "replace": lambda *args: args[2],
        },
    }
    return mreplace3(s, dict)


def replaceWrite(regex, parser, file, count=1, flags=re.M):
    text = read(file)
    product = replace(regex, parser, text, count=count, flags=flags)

    if len(product) <= len(text):
        raise Exception("Product Size is less than or equal to Original Size.")
    write(file, product)


def insertionWrite(file, content, insertionPoint):
    rpwo(file, lambda x: sreplace(x, {insertionPoint: content}, "ats"))


def getFunctionsFromOtherFile(fromFile, toFile, *functions):
    text = read(fromFile)
    items = getFunctionBodies(text, functions, delete=False)
    insertionWrite(toFile, toString(items), "### Jan 04, 2021 ###")


def realpath(file):
    return os.path.realpath(expandUser(file))

def openFile(file = None, regex = None, key = None, delay=None):
    if not file:
        if regex or key:
            file = realpath(getLatestFile(
                key = key, 
                parser = lambda x: test(regex, x) if regex else None
            ))
        else:
            files = os.listdir(os.getcwd())
            file = files[-1]

    if test('^http|^file://', file):
        pass
    elif not isFile(file):
        for x in reversed(os.listdir(os.getcwd())):
           if test(file, x):
               file = x
               break

    else:
        file = realpath(file)

    if delay:
        print(  'starting a delay of ', delay  )
        time.sleep(delay)

    webbrowser.open(file)


COMPUTER_STORAGE_KEY = "computerstorage.json"


def brackify(s):
    return parens(indent(toString(s)), 'brackify')


def looksLikeObject(x):
    return test('^(?:(?:const )?\w+ = )?"?[\[{]', x)


def looksLikeDate(s):
    return test("\d+\D\d+\D\d+|\d{4}", s)


answermap = {"s": "small", "l": "large", "r": "random", "o": "old", "n": "new"}


def valgetter(k, map=None, mode=""):
    if mode == "array":
        if isArray(k):
            return k
        if isString(k):
            return [k]
        raise Exception("ray mode is array")

    if not map and not isObject(k):
        return k if isString(k) else k[0]
    return map.get(k) or k


def toSmallText(s):
    return s[:400]


def preview(x):
    store = SimpleStorage()

    def previewArray(x):
        return x

    def previewObject(x):
        for k, v in x.items():
            if "temp" in k:
                continue
            elif len(v) < 100:
                continue
            elif looksLikeDate(k):
                store.add("dated", v)
            elif isNumber(k):
                store.add("numbered", v)
            elif k == "notes":
                store.add("notes", v)

            elif test("# {", v):
                store.add("old", v)

            else:
                os.system("clear")
                print(v)
                print(lbr)
                print(k)

                answer = input()

                if answer == "":
                    continue
                answer = valgetter(answer, answermap)
                store.add(answer, v)

    if isObject(x):
        previewObject(x)
    elif isArray(x):
        previewArray(x)

    return store


def jsonToSimpleStorage(file):
    obj = read(file)
    store = SimpleStorage()
    if not all(isArrayLike(item) for item in obj.values()):
        print("not simplestoragelike")

    for k, v in obj.items():
        store.add(k, v)
    return store


def parseLocalStorage(name="localstorage"):
    file = getMostRecentFile(lambda file: test(name, file, flags=re.I))
    obj = read(file)

    product = preview(obj)
    write("product.json", product.value)
    print(file)


def writeToDir(*input):
    dir = expandUser('~/kdog3682.github.io')
    indexpath = ospj(dir, "index.html")
    if len(input) == 1:
        write(indexpath, textgetter(input[0]))
    else:
        [move(file, dir) for file in input]

    Github.backup(dir)


def actionController(key, *args):
    actionmap = {
        "kdog3682": writeToDir,
        "printdir": printDirectories,
        "createasset": createAsset,
        "copymacbookfile": copyMacbookFileToHtmlAsset,
        "backup": lambda: backup,
        "delete": Github.delete,
    }

    actionmap.get(key)(*args)


def copyMacbookFileToHtmlAsset(filepath):
    text = read(filepath)
    name = basename(filepath)
    createAsset({"path": filepath, "name": name, "text": text})


def getDirs(dir):
    return filtered(
        listdir(dir), lambda x: isDir(ospj(dir, x)) and not test("^[._]", x)
    )


def removeNonStandardChars(s):
    return s.encode().decode("ascii", "replace").replace(u"\ufffd", "")


def printDirectories(*dirs):
    store = {dir: listdir(dir) for dir in filtered(dirs, lambda x: isDir(x))}
    Printer(store)


def replaceWordsAndCreateDict(s):
    def parser(x):
        return x.group(2), [x.group(1), x.group(2)]

    s, dict = mrep2("(\w+)/([\w-]+)", parser, s)
    dict = {"pmwb": dict[1:-2]}
    rpwo("z", sreplace, dict, "ats")


def deleecreateUtilsLayered():
    lib = createFunctionLibrary(read())
    store = []

    def parser(x):

        s = lib.get(x)
        if not s:
            return

        if x not in store:
            store.append(x)

        items = getImplied(s)
        for item in items:
            if item in store:
                continue
            else:
                parser(item)

    for item in lib.values():
        parser(item)

class Redirect:
    def __enter__(self):
        sys.stdout = StringIO()
        return sys.stdout

    def __exit__(self, *args):
        sys.stdout = sys.__stdout__

def timed(fn):
    def parser(*args, **kwargs):
        with Timed():
            return fn(*args, **kwargs)
    return parser

class Timed:
    def __enter__(self):
        self.start = time.time()
        if self.a: print(  self.a  )

    def __init__(self, a = '', b = '', run = True):
        self.run = run
        self.a = a
        self.b = b
    def __exit__(self, *args):
        if not self.run:
            return
        self.end = time.time()
        self.elapsed = round((self.end - self.start) * 1000)
        print(  'elapsed time', self.elapsed  )
        if self.b: print(  self.b  )

#  createUtilsAndNonUtils('utils.py')

def testdbmain():
    db = Database()
    #  db.create('reddit', 'id', 'response int')
    #  db.insert('reddit', 'abc', 981)
    #  db.update('def', 1000)
    #  db.commit()
    print(db.cursor.execute("SELECT response, id from reddit WHERE id='foo' or response='1'").fetchall())

    #  db.create('files', 'date', 'item')
    #  db.tableKey = 'files'
    #  db.put(('jonathan', 324))
    #  print(db.get())
    #  print(db.get('id', 'response'))
    #  print(db.check('reddit'))
    #  print(db.get())
    #  print(db.check('files'))

#  testdbmain()
#  openFile('cover.pdf')
#  write('cover.tex', latexstring.strip())
#  openFile('cover.tex')

def makeLatex(name):
    #  print(  'u can compile with xelatex or pdflatex .... both of them are sim'  )
    subprocess.Popen(['xelatex', '-interaction', 'nonstopmode', name])
    #  subprocess.Popen(['pdflatex', '-interaction', 'nonstopmode', name])
    #  openFile(changeExtension(name, 'pdf'))
    #  makeLatex('math.tex')

#  openFile()
a = '<DT><A HREF="http://www.worldofnumbers.com/ninedig1.htm" ADD_DATE="1552230328">The Nine Digits Page -- 123456789</A>'
b = '''
            <DT><A HREF="http://www.worldofnumbers.com/ninedig1.htm" ADD_DATE="1552230328">The Nine Digits Page -- 123456789</A>

                <DT><A HREF="http://artofproblemsolving.com/wiki/index.php?title=AMC_8_Problems_and_Solutions" ADD_DATE="1552230328">Art of Problem Solving</A>

                <DT><A HREF="https://www.reddit.com/r/AskReddit/comments/24vo34/whats_the_happiest_5word_sentence_you_could_hear/chb4yin/" ADD_DATE="1552230328">BlakeClass comments on What&#39;s the happiest 5-word sentence you could hear?</A>
                '''


def getWordElements(s):
    return re.findall('<.*?>|\S{2,}', s)
def getHtmlLinkElements(s):
    return re.findall('<.*?>', s)
def createRegex(s):
    original = re.findall('(\S.*?)\\s*$', s, flags=re.M)
    base, items = split(original)
    #  store = {}
    store = SimpleStorage()
    globalIndex = 0
    START = END = ''

#new
    elements = getHtmlLinkElements(base)
    start, items, end = split(elements, [0, -1])
    for item in items:
        replacement = '.*?'
        if test('href', item, flags=re.I):
            replacement = '(.*?)'
        
        product = replace(simpleQuoteRE, parser, item)
        store.append(product)

    print(  store  )
    return

    for i, ch in enumerate(base[::-1]):
        if not every(items, lambda item: item[len(item) -1 - i] == ch):
            END = base[len(base) - i:]
            break

    for i, ch in enumerate(base):
        if  every(items, lambda item: item[i] == ch):
            if ch == '\'' or ch == '"':
                START = base[0:i + 1]
                break

        else:
            START = base[0:i]
            break

    print(END, START)
    return START + '(.*?)[\'\"].*?>[^>]+?' + END + '$'

    #  for i, item in enumerate(items):
        #  for j in range(i + 1, len(items)):
            #  print(  i, j)

def fixhtml(s):
    product = html.unescape(s)
    #  write('requests.txt', product)
    return product




def actions():
    regex = '<a href=[\'\"](.*?)[\'\"].*?>(.*?)</a>'
#  print(  writer('bookmarks.json', toDictionary(re.findall(regex, html.unescape(read(getLatestFile('html'))),  flags=re.I ), reverse=True)))


def glf():
    return getLatestFile()
def jsonToTextFile(file, delimiter = ': '):
    obj = read(file)
    s = ''
    for k,v in obj.items():
        s += k + delimiter + v + '\n'
    writer(changeExtension(file, 'txt'), s)

#  jsonToTextFile(glf())
s = 'foo delicious cake'

def wordSearch(s, *words):
    def runner(word):
        regex = '.*?\\b' + word + '\\b.*'
        return re.findall(regex, s, flags=re.I)

    if (len(words) == 1):
        return runner(words[0])

    reverse = reversed(words)
    regex = Regex(['.*?'.join(words), '.*?'.join(reverse)])
    product = search(regex, s, flags=re.I)

    if not product:
        store = []
        for word in words:
            store.extend(runner(word))
        return store
    else:
        return product


def listRootFiles():
    return publicdir('~/')



#  sys.excepthook = excepthook
#  print(  'nothing today', fullDateStamp()  )

#  prettyPrint(  wordSearch(read('bookmarks.txt'), 'guy'))
#  r = Reddit()
#  r.search('server')
#  print(  listRootFiles()  )
#  keys = [lambda x: x > 1, lambda x: x < 5]
#  print(  publicdir('~/', isCodeFile))
#  print(  pathParser2('~/BACKUP/z*'))
#  Printer('~/BACKUP/js', mode = 'files')
#  print(  alphabet[0:10]  )

#  Printer('~/chat*')
#  Printer('~/code/pushshift*')
# need a way to bring in extra words into the fixspelling action. currently, its not very robust. in that it instantly ... 


def smartScrape():
    def parse(s):
        regex = '<.*?>|&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-f]{1,6});'
        return re.sub(regex, '', s)

    urls = [
        'view-source:https://sebastianraschka.com/Articles/2014_sqlite_in_python_tutorial.html',
    
    ]

    url = urls[-1]

    searchmap = [
        '<div class="(?:language-)?(?:js|py|python|html|javascript).*?">',
        '</code></pre></div></div>',
    ]

    text = srequest(url)
    index = None

    for i,item in enumerate(searchmap):
        if test(item, text, flags=re.I):
            if isEven(i):
                index = [i, i + 1]
            else:
                index = [i - 1, i]
            break

    if not index:
        raise Exception('No regex match')

    regex = '.*?'.join([searchmap[i] for i in index])
    matches = re.findall(regex, text, flags=re.DOTALL)
    product = [parse(match) for match in matches]
    writer(product)

#  smartScrape()
#  Printer('tempfile.txt')
#  print(  search('</code></pre></div></div>', fixhtml(read())  ))
#  organizeConfigFile('bash')

#  Github().deleteFile('testfile')

def cabinet(x = None, *args):
    if not x:
        print(os.listdir(os.getcwd()))

    if x == 'drive':
        os.chdir('/mnt/chromeos/GoogleDrive/MyDrive/')

    if args:
        store = []
        product = None
        for arg in args:
            if isFunction(arg):
                store.append([arg, []])
            else:
                store[len(store) - 1][1].append(arg)


        store.reverse()
        for fn, args in store:
            if product:
                args.append(product)
            args.reverse()
            product = fn(*args)
        print(product)

    return
    action = None
    match = search('^(view|isfile|isdir) (.*)', args[0])
    if match:
        a,b = match
        if a == 'isfile':
            action = isFile
        elif a == 'isdir':
            action == isDir
        elif a == 'view':
            action == isDir
        for item in b.split(' '):
            print(  item  )
            print(action(item))
            print(  lbr  )
        return

    dir = None
    def runner():
        nonlocal dir
        dir = expandUser(dir)
        if file == 'dir':
            return os.listdir(dir)
        return isFile(ospj(dir, file))
    print(runner())

#  Github().tester()
#  Github().list()
#  cabinet('dir')
#  print(  toRoot()  )
#  print(  getFilesAndFolders(os.getcwd())  )
#  print(  isSimpleStorage(SimpleStorage()  ))
#  Print().addTable('foo')
#  cabinet()
#  Github().status()

# every time, i am cleaning the entire file ... which is wholy inefficient. the edits are all contained togehter. but everytime, it does get faster.

#  openFile(key = 'jsontest')

ENV_USERNAME = 'kdog3682'
ENV_GITHUB_PASSWORD = 'Bankai3682'
file = 'testfiddle.js'
content = lorem

#  print(subprocess_cmd('curl -v -X POST -d \'{"public":true,"files":{"' + file + ':{"content":"' + content + '"}}}\' -u ' + ENV_USERNAME + ':' + ENV_GITHUB_PASSWORD + ' https://api.github.com/gists'))


cmd = '''curl -H "Content-Type: application/json" -u kdog3682:Bankai3682 -d '{"scopes":["gist"],"note":"gist test for a user"}' https://api.github.com/authorizations'''
cmd2 = '''curl -v --request PATCH -H "Authorization: token TOKEN-VALUE-FROM-PREVIOUS-CALL" -d '{"description": "updated gist","public": true,"files": {"file1.txt": {"content": "String file contents are now updated"}}}' https://api.github.com/gists/GIST-ID-FORM-PREVIOUS-CALL'''
#  print(  subprocess_cmd(cmd2)  )

def uploadFiddle(html = '', css = '', js = ''):
    items = {
        'Demo/demo.html': html,
        'Demo/demo.css': css,
        'Demo/demo.js': js,
    }

    Github().at('codesnippets').upload(items)
    #  zalun = 'zalun/jsFiddleGithubDemo/tree/master/Demo/'

    base ='https://jsfiddle.net/gh/get/library/pure/'
    kdog3682 = 'kdog3682/codesnippets/tree/master/Demo/'
    #  openFile(base + kdog3682, delay=0)
    return base + kdog3682


def findLine(name, file = 'utils.py'):
    text = read(file)
    regex = '.*?' + name + '.*'
    pprint(re.findall(regex, text, flags = re.I))

def findFunction(name, file = None, lang = 'py', wb=False, body=False, fallback=None):
    if file:
        files = [file]
    else:
        files = jspymap.get(lang).get('files')

    print(  'searching thru files', files  )

    def parser(file):
        nonlocal name
        text = read(file)

        if body:
            print(  'hi from body search'  )
            name = parens(body, 'b')
            print(  'searching via chunks'  )
            return [item for item in getChunks(text) if test(name, item)]

        else:
            regex = cdf + parens(name, 'word')
            print(  'first search'  )
            print(  regex  )
            matches = re.findall(regex, text, flags=re.M|re.I)
            if not matches:

                if fallback:
                   print(  'second search with fallback'  )
                   regex = cdf + parens(Regex(fallback), 'word')
                   print(  regex  )
                   matches = re.findall(regex, text, flags=re.M|re.I)

                   if not matches:
                        name = parens(name, 'b')
                        print(  'third search with chunks ' )
                        print(  name  )
                        matches = [item for item in getChunks(text) if test(name, item)]
            print(  matches, 'matches'  )
            return matches

    print(  'starting'  )
    store = flatten(iterate(files, parser))
    print(  'finished'  )
    store.sort(key=len)
    if body:
        append(files[0], store)
    else:
        pprint(store)


def deprecatecreateWebAsset(src="vue"):
    baseA = "https://github.com/"
    baseB = "https://raw.githubusercontent.com/"
    regex = '<a class="js-navigation-open link-gray-dark" title="(.*?)"'

    map = {
        "vue": "vuejs/vuejs.org/tree/master/src/v2/examples/",
    }

    titles = [
        prepareUrl(
            pathjoin(baseB, map[src].replace("tree/", ""), title, "index.html")
        )
        for title in filtered(
            re.findall(regex, request(ospj(baseA, map[src]))),
            lambda x: not test("\.|currency", x),
        )
    ]

    #  print(  titles  )
    def runner(link):
        text = request(link)
        return link, text

    store = reduced({}, titles, runner)
    createAsset(store, "vuegithub")


#  createWebAsset() doc this essentially parses a github repo, but a much better, and much faster way, is to just use github.download
#  Github.download('https://github.com/andrewp-as-is/chrome-bookmarks.py') doc this downloads the entire repo, and then some parsing happens, to create a print file.

#  print(guotie3(guotiestring))
#  print(guotie3(self))


#  Github.updateKdog3682('ive started to understand github') doc it shudnt be like this. the new way is to just use 'update' and throw kdog682 in as a user
#  Github.update('studentcircles', Date.stamp('Grow strong.'))
#  Github.create('mathgame').upload('index.html', 'styles.css', 'helpers.js', 'components.js') todo need to add in the upload aspects. create, returns an instance of Github.


organizationTags = ['todo', 'doc', 'info', 'important']


# 'https://api.github.com/repos/' + user + '/' + repo


def replaceAcrossFiles(dict, files = ['utils.py', 'env.py']):
    for file in files:
        rpwo(file, lambda x: drep(read(file), dict))

#  print(Github.listRepos('kdog3682'))




#  Github.backup('~/.vimrc')
def localbackup(*files):
    for file in files:
        if file == 'vim':
            file = '~/.vimrc'
        elif file == 'bash':
            file = '~/.bashrc'
        copyFile(file, None)

#  localbackup('vim')






aobj = {
  "config": {
    "subredditmap": {
      "ebs": "explainbothsides",
      "foo": "foobar"
    },
    "foobar": {
      "qoo": "qooo woo",
      "woooo": "eo ep"
    },
    "snoobar": {
      "a": "b",
      "c": "d"
    },
    "pmwb": {
      "boo": "balls",
      "bas": "b'as"
    }
  },
  "datestamp": "01-26-2021"
}


sreplacestring ='''
pmwb = {
    asd
    asd
}
'''


cf = 'notesmidnight.txt'
#  print(  analyzeWords(cf)  )

#  cabinet('pmwb.json')

def backupFile(file):
    if isTodayFile(file + 'copy'):
        return
    else:
        copyFile(file)  
        # 'copy' is included implicitly


def fastparse(
    x = None,
    preparsers = [],
    cleanerRE = '',
    lines = True,
    split = False,
    ignoreNewLines = True,
    overwrite = True,
    backup = True,
    lowerCase = True,
    filter = None,
    parser = lambda x: x,
    production = False,
    unique = True):

    
    if lowerCase:
        preparsers.insert(0, lambda x: x.lower())
    if cleanerRE:
        preparsers.insert(0, lambda x: re.sub(cleanerRE, '', x, flags=re.M))

    file, text = filetextgetter(x)

    for preparser in preparsers:
        text = preparser(text)

    print(  'starting allocation process'  )
    if split:
        print(  'hi'  )
        items = re.split(split, text, flags=re.M)
        store = [parser(item) for item in items]

    else:
        print(  'no'  )
        return
        def runner(s):
            store = [parser(line) for line in s.splitlines()]
            if unique:
                store = setify(store)
            if filter:
                store = filtered(store, filter)
            return store

        store = {}
        partitions = getPartitions(text, regex)

        if isNestedArray(partitions):
            for k,v in partitions:
                store[k] = runner(v)
        else:
            store = runner(partitions)


    if production:
        write(file, store)
    else:
        print(  'pprinting'  )
        pprint(store)

def getPartitions(s):
    if test('^#', s, flags=re.M):
        regex = '(?:^|\n)#(\w+)\s*([\w\W]+?)(?=\n*#|$)'
        return re.findall(regex, s)
    return s



#  write('ignorewords.list', setify(reduced99(read('corpus.json'), lambda x: x[1])))
#  print(  read(cf  ))

# print(  smartnotes(cf)  )
#  print(  spellcheck('hiya :bob. ho r u1 ' ))


sp = '''
a   bb   asdsac   d   e   
a b c d e
'''

#  print(  getColumns('verbs.txt', 1,2  ))
#  print(  getColumns(cf, 0  ))

# fastparse(  x = None,  cleanerRE = '--*|\d+|\(.*?\)',   ignoreNewLines = True,   lines = True   overwrite = True,  lowerCase = True,    filter = lambda x: len(x) > 1,    backup = True,    unique = True,    parser = lambda x: x.strip())






def getWebScrapeRegex(url):
    #  webscrapeCodeDefaultRE = '<(?:pre|code).*?><(?:code|pre).*?>([\w\W]+?)</(?:code|pre)></(?:pre|code)>'
    webscrapeCodeDefaultRE = '<pre><code.*?>([\w\W]+?)</code></pre>'
    webscrapedict = {
        'forum.vuejs.org': None,
    }
    baseurl = search('/+(.*?)/', url)
    return webscrapedict.get(baseurl) or webscrapeCodeDefaultRE

def webscrape(url):
    url = prepareUrl(url)
    print(  url  )
    regex = getWebScrapeRegex(url)
    print(  regex  )
    flags = getRegexFlag(regex)
    flags = 0
    text = srequest(url)
    matches = [html.unescape(x) for x in re.findall(regex, text, flags=flags)]
    #  ppprint(  matches  )
    #  writer(matches)
    Print(matches)


#  webscrape('view-source:https://forum.vuejs.org/t/passing-data-back-to-parent/1201')
#  webscrape('https://forum.vuejs.org/t/do-something-after-emit-has-finished-successful/10663/16')
#  write(testfile, 'print("HOWDY")')


alskdfjlkdsjf ='''
Research Questions

Sam give everyone a number. 
Joe give everyone a letter.

Only one research project. 

research assistant.

The power of a SHA-256 Hash.

In 1984, Microsoft changed the world with a computer. 
In 2001, Bitcoin. 
It flows downwards. 
The battle remains in perpetual flux, that of those who're in charge against those who're not in charge. Much harder to remain anonymous. To have money, but to have nothing to use it for. Money buys opportunity. 

practical questions. 

Performance Project

One week.




Memorize a poem. 

Apple's stock was worth 10 dollars in 1989. In 2021, it is worth 1000 dollars. What other companies in the past, have had a similar pattern, of starting out very small, and then exploding 20 years later?

For many years, Gamestop's stock price continually decreased. In the span of one week, from January 21st, 2021, to January 27th, 2021, the stock surged to 450 dollars. How, and why, did this happen? 

Euler's number is 2.7182818284... and it goes on forever. Many mathematicians consider it to be the most beautiful number in the world. Why?

There are 21 million bitcoins. 

Social power. Soft power. Intellectual power. Physical power. Communication power. 

You have a 80% chance of winning now. But you can only win 100 dollars. You have a 20% chance of winning next year. You can win 1000 dollars. Which one do you choose? 




Instructions

1. You do not have to give a presentation. You can choose instead, to write an essay. The essay should have at least 100 words. 

2. Presentation Requirements. You must talk for 10 minutes. You should have a diagram, poster, or props, to assist your presentation.

3. Please have your parent or guardian speak to the teacher if you would like to have your work posted online.




















A lot of people think classical music is boring. 


Find the pattern. 


A Letter to Parents On Our Teaching Strategies

Dear Parents,

Strong.
Smart.        ==> Your Child.
Powerful.

This is our Goal.

How we do it

90 minutes of homework every night
A skills examination every week
A personal project every month


The first month is 20 dollars.

Reg
More information
Sign up.
Call 425

Do some Math and English. 

parents
students 
    




To achieve this goal, we do not publicly release student scores. For many parents and students, this is uncomfortable. 

1. How will the student improve without knowing their score?
2. How will parents see how the student is doing without knowledge of homework scores or exam scores?


Strong
Smart
Powerful

YOU.

do it

I need some names.







These are important questions. We believe in our system, and our technology that both of (1) and (2) will be fulfilled. 

1. Our computer algorithms track every action the student makes. Any time the student makes a mistake, that mistake is logged into a database. The next day, the teacher will teach that exact mistake. The student will recieve a similar question for homework. He or she, will keep recieving similar questions, until scoring 5 questions correctly in a row. That will tell our software, the system has eliminated the mistake.

We do this for every question. We do not tell the student, "Hey Jim! You got question 3 wrong." Instead, we give Jim, Question 3A, 3B, 3C, all very similar to question 3, until Jim gets it perfect.

2. At the end of the year, parents will recieve a 10 page report that details every thing that happened during the year. Every homework, exam, project, with precise details will be there. The main reason we do not release this information immediately is that in our experience, we find that it usually causes comparisions among students, and among parents, the net result, being stress for the student.

"But stress is good." 
"The world is pressure cooker and students have to be prepared for it."
"Comparisions push kids to improve."

These statements are TRUE. The world is COMPETITIVE. The kids have to be prepared for it. 

But they are not ready yet. 
Their skills are not strong enough yet. 

When a student reaches a certain level, we will put them into pressure-cookers, competitions. We will give them chances to win big, and lose big. 

But only after, they are ready. 

If they are stressed too soon, our past experience as teachers, is that they will 








'''
#  srequest('view-source:https://finance.yahoo.com/quote/AAPL?p=AAPL&.tsrc=fin-srch')


stockmap = {
    'apple': 'AAPL',
}
def webscrapestocks(name, before = None, after = None, frequency = 'hourly'):
    #  name = stockmap.get(name, name)
    #  url = 'https://finance.yahoo.com/quote/' + name + '/history?p=' + name + ''
    url = 'https://finance.yahoo.com/quote/AAPL/history?period1=345427200&period2=1611878400&interval=1mo&filter=history&frequency=1mo&includeAdjustedClose=true'
    text = srequest(url)
    regex = '"prices":\s*(\[{"date"[\w\W]+?\\]),"'
    product = json.loads(search(regex, text))
    writer(product)
    return

    regex = '{"date": *\d.*?}'
    matches = re.findall(regex, text)
    product = json.loads(parens(toString(matches, delimiter=','), 'braces'))
    tl(product)
    writer(product)

#  webscrapestocks('aapl')

def getDirInfo(dir = None):
    files = getFiles99(dir)
    items = [(basename(file), size(file), mdate(file, str)) for file in files]
    ppprint(  items  )

def jspygetter(file, *keys):
    src = jspymap.get(getLangFromFile(file))
    return [src.get(key) for key in keys]

def getScraps(*files):

    regex = jspygetter(files[0], 'scrapRE')
    items = flatten([mwriter(regex, file, flags=re.M) for file in files])
    #  items = flatten([re.findall(regex, read(file), flags=re.M) for file in files])

    prose = []
    strings = []
    callables = []
    paired = {}

    for a,b,c in items: # (a) represents comment strings. b and c gotogether.
        if a:
            if test('^\w+ \w+', a):
                prose.append(a)
            else:
                match = search('\( *(s\d+) *\)', a)
                if match:
                    if paired.get(match):
                        paired[match]['callable'] = a
                    else:
                        paired[match] = {'callable': a}
                else:
                    callables.append(a)

        else:
            match = search('s\d{6,}', b)
            if match:
                if paired.get(match):
                    paired[match]['string'] = b
                else:
                    paired[match] = {'string': b}
            else:
                strings.append(b)
        
    prose.sort()
    strings.sort()
    callables.sort() 

    write('guotie.json', {
        'prose': prose,
        'strings': strings,
        'callables': callables, 
        'paired': paired
    })


def createFunction(parameters):
    s = 'def ABCDE'
    exec("def f_make_fun({}): pass".format(', '.join(parameters)))
    return locals()['f_make_fun']

def selfie(regex):
    pprint(re.findall(regex, read(self)))


#  pprint(getScraps(self))
#  print( datetime.datetime.fromtimestamp(476082000).year)
#  openFile()


#  timed(findFunction)('jspy', lang='js', wb=True, body=True)

def removeRegexCaptureGroups(regex):
    return re.sub('((?:\|\[).*?(?<!\)\)', lambda x: x.group(0)[1:-1], regex)

def regexWrapifyAndSave(s):
    regex = '(?<!:)\\\^|\\\]|\\\[|^\w+\?|^\([\w|]+?\)|`|(?<!\?)<|(?<!\?)>|(?<!<)=|(?<=\w{2,})\\+(?=\w{2,})|(?<!:)/+|#|(?<!\|)  |\\\.|(?<!\?):+|\(\?:(?:\w+\|)+\w+\)|(?<!\\\\)\\w+(?=[^ \w]|$)'

    tag = None
    def parser(x):
        x = x.group(0)
        tag = x

        if test('^\w+\?', x):
            print(  'asdf'  )
            tag = tag[0: -2]
        
            tag = x[3: -1].split('|')
            return '(' + x[3:]
        
        elif x.startswith('('):
            print(  'asdf'  )
            tag = x[1: -1].split('|')
            return x
        
        elif test('^\\\\', x):
            print(  'asdf'  )
            tag = re.sub('\\\\', '', x)
        
        return parens(x)
    
    result = replace(regex, parser, s, flags=0, count=1)
    if not tag:
        tag = re.sub('[ ?]', '', s)
    
    return tag, result

#  print(  regexWrapifyAndSave('foo.*'  ))
#  print(  regexWrapifyAndSave('//foo.*'  ))
#  print(  regexWrapifyAndSave('foo(.*)'  ))
#  print(  regexWrapifyAndSave('[foo.*'  ))
#  those rise to the upper echelons have to play a certain game. Those who have the ability, they become the wielders of the things.
        
# comments are always shunted to the start of the line by vim. 

#  getScraps(self, 'guotie.py')
#  rmdir('mreptest.')

#  findFunction('filereader', fallback='', lang='js')
#  pprint(publicdir())
#  Database.check('foo')
#  print(mime.from_file('cfinsrch'))
#  print(  os.path.splitext('~/asdf/~sdf//sdfasdf.dsf'  ))
# imo there is a time for answering foreign phone calls, and that is during the day.

isNegativeNumber = lambda x: isNumber(x) and x < 0
isDynamicVariable = testFactory('^(?:const )?\w+ = \w+\(|\(.*?\) =>[^{]+?$|lambda')
isSingleWord = testFactory('^\w+$')  
#  dateStringToNumber('1')
#  print(isRecentFileFactory(after=-2)('codemirror.js'))

#  cleandir()
#  cabinet('isfile archive3.py archive3.js')

def redmain():
    reddit = Reddit()
    posts = reddit.getSelfPosts()
    reddit.getAllComments(posts)
# want the comment id, the author, and the 
# send it to jsonbin io, where it will be parsed. Some things shouldnt be automated. 




#  findFunction('reddit', body = 'block', lang='js')



rts = '''
hi
no
    yes
    yes
    yes
no
    yes
    yes
        yes
            yes
                yes
            yes
    yes
no
no
    yes
no
'''
#  pprint(round(len(Reddit.getCodeBlocks(rts))/2))
#  redmain()

#  Reddit.test()



#  pprint(getFiles99(dir = '/', requirements = [lambda x: x not in ['MyFiles', 'proc', 'kdog3682', 'nvm', 'etc']], recursive = True))
# this is a very dangerous thing to do because u hv no idea of what might show up. 



#  Github.backup('~/Library/LaunchAgents/com.morning.daemon.plist')
command = 'launchctl load ~/Library/LaunchAgents/com.morning.daemon.plist'
command = 'launchctl unload ~/Library/LaunchAgents/com.morning.daemon.plist'

#  str = 'export PATH="$PATH:/usr/local/bin/python'








#  createJavascriptClassFile('LineEdit', file='utils.js')
#  openFile('LineEdit.js')
#  findLine('recursive', 'utils.py')
#  print(  'its a new day changing the thing'  )

#  findFunction('prettier', 'utils.js')

def createCodeRegex(mode = '', x = True, keyword = None):
    name = '\w*?' + keyword + '\w*'
    if capture:
        name = parens(name)
    if x:
        start = restarter
        end = reender
    if keyword:
        return start + cdfns + name + codebodyre + end 
    else:
        print(  'asfsazzzzzzzzzzzzzzz'  )

def deprecate(keyword):
    regex = createCodeRegex(keyword = keyword)    
    store = mwriter(regex, file)


x = '''
def foo():
    return !isUndefined(x)
'''
#  print(getImplied(x))

# createutilsforfile is currently working for js files. the python one isnt working so much, also there is the related supergather. 


#  print(  'asdf'  )
#  rpwo('./PRODUCTION/LineEdit.js', lambda x: re.sub('^ *(?:(?<!:)//|tl|console.log).*\n?(?: *\n)*', '', x, flags=re.M)) # it removes console logs from the file


#  facebookChat('kevin', 'testing')

class Facebook:
    @staticmethod
    def get(name = None):
        fb = Facebook()
        fb.getMessages(name)

    def __init__(self, user = ENV_FACEBOOK_EMAIL, password = ENV_FACEBOOK_PASSWORD, browser = BROWSER_AGENT):
        import fbchat
        self.client = fbchat.Client(user, password, browser)
        if not self.client.isLoggedIn():
            self.login(user, password)
        self.friends = []

    def getMessages(self, name = None):
        user = self.search(name)
        id = user.uid

        thread = self.client.fetchThreadInfo(id)
        messages = []
        before = int(time.time() * 1000)

        def parser(x):
            nonlocal id
            nonlocal user
            key = datestamp(x.timestamp)
            author = ''
            value = ''
            try:
                author = user.first_name if x.author == id else 'Kevin'
                value = author + ': ' + x.text
            except:
                value = x.text

            return (key, value)

        storage = {
            '__INFO__': {
                'name': user.name ,
                'messages': len(messages)
            }
        }

        x = 0
        count = 0
        while True:
            try:
                items = self.client.fetchThreadMessages(
                    thread_id=id, 
                    limit=1000,
                    before=None
                )

                before = items[int(x)].timestamp
                count += 1

                print( 'date',  datestamp(before)  )
                if count == 2:
                    break
                    #  pprint(  items  )
                    print('len',  len(items)  )
                    #  print('0',  items[0].timestamp, datestamp(items[0].timestamp)  )
                    #  print( '-1',  items[-1].timestamp , datestamp(items[0].timestamp) )
                    #  x = input()

                items.reverse()

                for item in items:
                    key, val = parser(item)
                    storage[key] = val
            except Exception as e:
                print(e  )
                break

        writer(storage)
        

    def search(self, name):
        matches = self.client.searchForUsers(name)
        return matches[0]

    def getFriends(self, name):
        self.friends = self.client.fetchAllUsers()
        self.friends.sort()

isSingleWord = testFactory('^\w+$')    

fbobj = {
    'participants': [
        {'name': 'kevin'},
        {'name': 'devin'}
    ],
    'messages': [
    {
      "sender_name": "Devin Parada",
      "timestamp_ms": 1573274899473,
      "content": "Sweet!",
      "type": "Generic",
      "is_unsent": False, 
    },
    {
      "sender_name": "Kevin Lee",
      "timestamp_ms": 1573274884596,
      "content": "Mmm around December 16/17/18",
      "type": "Generic",
    },
    {
      "sender_name": "Devin Parada",
      "timestamp_ms": 1573274727524,
      "content": "What dates are you in Seattle?",
      "type": "Generic",
    },
    ]
}


def parsefb(data):
    read('./message_1.json')
    participants = [x.get(name) for x in data.get('participants')]
    messages = data.get('messages')
    messages.reverse()

    store = {}
    for i, message in enumerate(messages):
        author = message.get('sender_name')
        date = datestamp(message.get('timestamp_ms'))
        text = message.get('content')
        tag = search('rofl|lmao', text)
        # this 'tag' becomes the classname which can be used. 
        if tag:
            count = 0
            index = i - 1
            while True:
                prev = messages[index]
                index -= 1
                if prev.get('sender_name') == author:
                    break
                else:
                    count += 1
                    store[i] = tag

            if count:
                store[i] = 'PARENT-' + tag 

#  print(  datestamp('full')  )

def postFunctionsToGithub(file):
    text = read(file)
    start = 'CODE_STARTPOINT'
    end = 'CODE_ENDPOINT'
    chunk = captureBetween(start, end, text, inclusive=False)
    names = getFunctionNames(chunk)
    names.sort()
    if len(names) < 3:
        return
    product = [{
        'date': datestamp(),
        'value': names
    }]
    Github.post('codesnippets', 'functions.json', product, append=list)

# triggerwords info asset

def redditAsCdn(id, items):
    reddit = Reddit()
    reddit.commentOnPost(id, Reddit.bulletify(items))
    

def pushshift(
    query = None,
    title = None,
    selftext = None,
    type = 'submission',
    after = None,
    before = None,
    ids = None,
    size = 500,
    sort = 'desc',
    sort_type = 'created_utc', #score, num_comments, et cetera,
    author = None,
    subreddit = None,
    score = None,
    num_comments = None,
    is_video = False,
    getCommentIds = None,
    analyzeUser = None,
):

    root = 'https://api.pushshift.io/reddit/search/'
    if getCommentIds:
        type = 'submission'
        id = getCommentsFromId
        uri = os.path.join(root, type, 'comment_ids', id)





#  Reddit().cleanup()
#  postFunctionsToGithub('utils.js')
#  getFiddle('m3vYc')
#  findFunction('fiddle')




def generalPurposeFunctionSorter(x):
    return    

#  pprint(getImplied(read('example.js')))


def getRegexesFromFunctionStrangeUtility():
    lib = createCodeLibrary()
    store = []
    for item in (['isObjectString', 'hasInternalVariable'] + getImplied(getFunctionString(determineDestination))):
        text = lib.get(item)
        print(  text  )
        if text:
            m = (search('(?<!\\\\)[\"\'].*?(?<!\\\\)[\"\']', text))
            if m:
                store.append(m)

    pprint(  store  )

regexitems = {
 'import-statements': '^from|^import|^const.*?require\\(',
 'variables': '^(?:var |const |let )?\\w+ ?= ?[/\'\"]',
 'classes':   '^class',
 'functions': '^function|^def',
 'created-functions': '^(?:const )?\\w+ = \\w+\\(|\\(.*?\\) =>[^{]+?$|lambda',
 'big-objects': '[\\]}]$',
 'prototypes': '\.prototype\.',
}

def chunkgetter(x):
    if isArray(x): return x
    if isFile(x):
        x = read(x)
    return getChunks(x)

def buildString(input):
    chunks = chunkgetter(input)
    return StringBuilder.buildItems(
        chunks, 
        lambda x: (determineDestination(None, x, None), x)
    )


#  createUtilsForFile('utils.js', ['aaaaa', 'LineEdit'], TESTING = True)

#  will need to get everything from index.html and methods.js before beginning the move. Are you working hard? Time is money. The way of China ... is really not easy. Yeah... Actually, it starts from ... ... somewhere. 

#  print(  getImplied(read('asdf')  ))

#  def downloadWebFile(url):
    #  text = srequest(url)

#  srequest('heydonworks.com')
#  renameFile('workscom', 'workscom.html')
#  openFile('method')

html = '''

<input id="inputText"/>
<input id="shift"/>
<div   id="output"></div>
<button id="button">Click to get Ciphered Value</button>

<script>
const inputText = document.getElementById('inputText')
const shift = document.getElementById('shift')
const button = document.getElementById('button')
const output = document.getElementById('output')

let inputValue = ''
let shiftValue = ''

inputText.addEventListener('change', (e) => {
    inputValue = e.value
})

shift.addEventListener('change', (e) => {
    shiftValue = e.value
})

button.addEventListener('click', (e) => {
    const text = caesarCipher(inputValue, shift)
    output.textContent = text
})

function caesarCipher(s, shift) {
  //https://gist.github.com/EvanHahn/2587465
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  // Encoded Text
  let encodedText = '';

  shift = parseInt(shift)

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

</script>

'''

#  Github.updateFiddle(file='test.html')
#  write('test.html', html)
#  commander('''curl -X POST -d '{"public":true,"files":{"tiest.txt":{"content":"String file contents"}}}' -u kdog3682:Bankai36282 https://api.github.com/gists''')
#  Github.createGist('test.html') # this isnt working
url = 'https://jsfiddle.net/RobertKirsz/muo19o4x/'
#  print(  createRE('jsfiddle')  )

#  pprint(webParser(request(url)))
#  srequest(url)

fiddleRE = 'value: *({[\w\W]+?\n *})'
def fixJsonString(s):
    s = re.sub('(?<=^ *)\w+(?=:)', lambda x: parens(x.group(0), 'dq'), s, flags=re.M)
    #  s = re.sub('\n|[\'\"](?!:)', lambda x: '\\\\' + x.group(0), s, flags=re.M)
    #  s = re.sub('', '\\n', s, flags=re.M)
    return s


s = '''
{"html": "<div id=demo\\">\\n"}'''
z='''<h1\n    :class=\"{\'bounce animated\': animated}\"\n    @animationend=\"animated = false\"\n  >\n    Animate Test\n  <\/h1>\n  <button @click=\"animate\">\n    Animate\n  <\/button>\n<\/div>\n","js":   "var demo = new Vue({\n  el: \'#demo\',\n  data: {\n          animated: false\n  },\n      methods: {\n    animate () {\n      this.animated = true\n    }\n  }\n})\n","css":  ""}
'''

#  r = fixJsonString(search(fiddleRE, srequest(url)  ))
#  import ast
#  
#  py_obj = ast.literal_eval(r)



cron_reboot = '@reboot pmset repeat wakeorpoweron U 6:59:00'
cron_reboot = '@reboot pmset repeat wakeorpoweron MTWRFSU 6:59:00'
cronA = '1 0 * * * caffeinate -i /users/harfunmaterials/Google\ Drive/hello.py'
cronB = '0 7 * * 1,2 caffeinate -i /users/harfunmaterials/Google\ Drive/hello.py'
# 7:00AM on Sundays.

def createCron():
    store = []
    store.append(cron_reboot)
    store.append(cronB)
    cmd = '\\n'.join(store)
    #  print(  cmd  )
    s = '(crontab -l ; echo "' + cmd + '") | sort - | uniq - | crontab -'
    #  print(  s  )
    commander(s)

#  createCron()
#  commander('unload')
#  print(  'no more shud occur after this'  )
#  print(  'hi'  )


#  cleandir('~/')
#  rmdir('~/codepen-scraper')


def getBookmarks():
    paths = [
        os.path.expanduser("~/.config/google-chrome/Default/Bookmarks"),
        os.path.expanduser(
            "~/Library/Application Support/Google/Chrome/Default/Bookmarks"),
        os.path.expanduser(
            "~\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Bookmarks")
    ]
    path = ""
    if "linux" in sys.platform.lower():
        path = "~/.config/google-chrome/Default/Bookmarks"
    if "darwin" in sys.platform.lower():
        path = "~/Library/Application Support/Google/Chrome/Default/Bookmarks"
    if "win32" in sys.platform.lower():
        path = "~\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Bookmarks"
    path = os.path.expanduser(path)


questionstring1='''
ap What is the location of chrome bookmarks on a chromebook?
I have tried these paths thus far:
    /home/YOUR USERNAME/.config/google-chrome/Default/
    ~/.config/google-chrome/Default/Bookmarks
    ~/Library/Application Support/Google/Chrome/Default/Bookmarks
    ~\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Bookmarks

Nothing has worked thus far. The contents of ~/.config on my computer are:
    .  ..  configstore  cros-garcon.conf  nvm  pulse  vue  weston.ini

For reference, I am using linux on a Samsung Chromebook. Version 88.0.4324.109 (Official Build) (32-bit)

Appreciate your help.
updel

js is this a good idea?
    "Images are also all merged into a single image and css image references are modified to use part of the big image." -- https://www.reddit.com/r/javascript/comments/jovqp/how_do_you_guys_build_your_js_files_for_deployment/

As I build my files, I have never heard of anyone incorporating all of their immage assets into a single image asset, although it does sound clever. 

What do you guys think?


js Why do many large corporations not seem to use webpack or similar-esque bundlers? 

When I inspect the websites of msn, google, yahoo, stripe, reddit, facebook, pretty much any large and established corporation, the website doesn't use webpack. 


js is there a way to access a list of the items I installed via npm?
When I use "npm list -g", I get hundreds and hundreds of items listed. However, I am pretty sure, I only downloaded around 20 packages via 'npm install [name-of-package]'

My purpose for getting this list of items, is in case my computer crashes, I can take this list of items to a new computer, and install everything from the list, and recreate my existing environment. 

Thanks!

js How does highlight.js automatically sniff the language of the text it parses? 
i wrote a pretty rudimentary sniffer that uses regex matches to look for 'function' or 'const' or 'def' to determine if the text is python or javascript. I'm wondering how a more established codebase, like highlightjs does it, not just for py/js, but for a whole range of languages.

updel

vue What is an example of when you would want a child component to emit an event?
Perhaps the way I code is wrong, but anytime I have needed a child to communicate to a parent, it has been a small utility component, and as a result, I just directly write it into the parent, to avoid the need to deal with event emitting. 

I haven't needed to re-use many of my components, because my project is still small. Is what I'm describing, only going to become a problem, once the project becomes much larger? 

Personally, I found the syntax of the communication cumbersome. First the event happens. Then, the child emits. Then the parent listens. Then, the parent responds. If it's a simple response, you can just write the code in the directive, which is fine. But most of the time, the response is a method call. 

The reason I avoid separating the component, is so that when the event happens, the child can respond to the event right there, rather than going thru the additional steps. 

What do you guys think?

vue Is there a limit to how many watchers you should use?
I can't recall where I read it, but I remember reading something that said the process that vue watchers use is expensive. I'm wondering if my app has a few components, and each of these components has components, and each component watches certain things, if this will slow down my app?

Thanks

css Is there any cost to using lots of classes?
I have been looking at utility libraries, that frequently use 1 class name per 1 trait. Subsequent htmlElements will have like 10 to 20 classes on them. 

I'm curious if there is any performance price paid, in using it like this, rather than only having 2-3 classes.


js Beginner question - how do you know if you are using Babel?
I have read many things about how babel needs to be compiled to something else before it can propertly be run.  As far as I can tell, when I write js, in vim, and then include the script into a html file, everything works fine. The js that I write uses arrow functions, which I believe, is something that is part of Babel. Does this mean, that my browser, (google chrome) is compiling the babel for me? Would the code run faster, if I precompiled the babel? (And lastly, how do you precompile babel?)

js Does this example accurately reflect how lazy-loading is implemented?

There is a game that can be accessed by pressing a button. However, this game uses a huge library. The user might not press the button to play the game, so dont load the game library at the start. 

Once the user clicks the button, a method is called which performs document.createElement('script', GAME_LIBRARY_URL)

And thus, the library has been lazy loaded?


js why does this work without using async/await?
    function resolveAfter2Seconds() {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve('resolved');
        }, 2000);
      });
    }

    async function asyncCall() {
      console.log('calling');
      const result = await resolveAfter2Seconds();
      console.log(result);
      // expected output: "resolved"
    }

    function foo() {        // <-- doesnt this need 'async' ?
      const x = asyncCall() // <-- doesnt this need 'await' ? 

    }
    foo()
    // the asyncCall works normally.

I was expecting there to be an error, since 'await' wasn't used in the foo function and since foo wasnt declared with the async keyword.

css When should you use css animation, js animation, or web animations api?

js how do you use promise.all such that one failed promise doesn't ruin the entire batch? 
For instance, I use fetch to get Github info from 10 different users, except one of the users doesnt exist, and throws an error. 

How ,rwoulddo you resolve this collection of promises, such that the other 9 fetches are still returned successfully?

js How do multiple event listeners on the same element work? 

I'm using vue and codemirror.

1. codemirror has its own keyup event listeners when text is typed. 
2. I have vue keyup listeners triggered with @keyup="myfunction"
3. I have window.addEventListener('keyup') registered as well.

In total, there are 3 different sets of listeners for 'keyup'.

I'm wondering what's going on underneath the hood. Are all of them merged into a single keyup listener? 

Is there a way to make it such that, once one of the listeners has been triggered into a positive response, that the others listeners dont need to respond as well?

js is there a way to use jsdom to check if your current html string and associated resources would properly run in the browser?

The way I currently make edits to my index.html is I will make some edits in a script.js or styles.css, and then save everything, and then refresh the browser, and see if everything works. Then rinse and repeat. 

I am trying to automate this process by doing the same thing, but instead of alt-tabbing to the browser, to just run a jsdom script, which will check if anything has been broken as a result of the new edits.

If noting broken, commit the edits, else throw err.

updel

vim is there a way to achieve this without a plugin?

Note: I Like plugins. But everytime, I've tried to install a plugin, something bad happens, it becomes a huge headache. As a result, I have kind of foregone using plugins.

The functionality I'm looking for is this: (basically smartComments)

    If the line starts with // or #, pressing the trigger key should remove it.    If the line starts with <!--, the trigger key should remove it, as well as the end of the line's "-->"
    Otherwise, if the file lang is py, the triggerkey should append # to the line.
    If the lang is js, the triggerkey should append '//'
    If the lang is 'html', the triggerkey should wrap with '<!-- and -->'

vue Should you avoid nested objects in data
I often like sequestering relevant togther.
For instance: statuses

Instead of writing, this.statusFOO, this.statusBOO, et cetera, I will have a statuses object like : this.status.FOO, this.status.BOO.

Im wondering if this is a good thing to do. While yes, Vue is able to sniff the change in the object, Im wondering if Im needlessly creating more work for Vue to do, by nesting this info inside of an object, when it doesnt actually need to be nested.


js Should this data be nested within an object and/or is it considered bad practice?

I am working with the codemirror API and as I browse plugins that other people have wrote, they will compartmentalize their data as following: Instead of using codemirror.state.theData, they create a compartment of codemirror.state.plugin = {}, and then place al the data into codemirror.state.plugin.

What I have been doing, is just directly placing my data into state. So if I have a foo item, i will use cm.state.foo, rather than going the additional step, to compartmentalize it into cm.state.myapp.foo.

I am doing this because:

- I feel like it makes the code easier for me to work with
- I feel like it makes codemirror have to work 'less hard' since it doesnt have to read further into an object (not sure if this is true)


js How do event listeners work when pressing modifier keys?

Pressing ctrl-a, two keydown events are fired. Both events have ctrlKey as true. Only the second event has KeyA as true.

In my code, I have to write a logic gate of 'if it is NOT a letter key', return, so as to stop the eventlistener from registering the initial press of 'control.'

Is there a way to avoid this logic gate, by some how having the eventlistener 'know' that it shouldnt be listening to the first 'ctrl press' ?

Thanks for the help.

js Does anyone have an idea of how many 'actions' can happen before a user will notice lag?

Im writing some functionality for keydown event listeners. 
I am stuffing more and more logic checks into the function. if A, do B, else C, et cetera like 10 logic checks, leading to different actions.

These 10 logic checks, could easily become 100 or 1000 logic checks, by adding additional items into my controller map.

Does anyone have experience in this area, and have some rules of thumb, for how to make sure the UI experience is preserved?

Thanks!

js What types of events cant be detected?

> codemirror.option.pollInterval: Indicates how quickly CodeMirror should poll its input textarea for changes (when focused). Most input is captured by events, but some things, like IME input on some browsers, don't generate events that allow CodeMirror to properly detect it. Thus, it polls. Default is 100 milliseconds. - codemirror docs

I'm wondering what would be an event, that cant be detected? Most certainly keypress, and mouseclicks should be detected. Other than this, what other type of event would a user be using on a textarea?

nsq Does eating ice-cream warm you up or cool you down?

The cold ice cream should lower your body temperature, but will digesting the icecream as well as the carbs and sugar, cause the temperature to go back up?

js Is there a way to edit the stylesheet from javascript?
My styles.css has the following:

    .foo {
        background: red
    }

I'm wondering if there is a way to access this as a string, and then make an edit, so that the background is now blue.

vue Is there a way to pass data to a <style> element?

I'd like to have an element like <style>{{content}}</style> and be able to update the page's style in real time, based on the value of content.

Currently however, I'm getting the error aadsfasdf.


css Are there any advantages / disadvantages between declaring fonts in html or in css?

In html, you link the fonts in the head with <link>
In css, you link the fonts with @font-face.

Im wondering if there are any adv/disadv for each scenario.
Additionally, if  they achieve the same thing, why do these redundant possibilities exist?

Thanks for the help.


@nutrition Is there any difference between eating a sandwich in 5 minutes, vs nibbling at it over the span of 5 hours?

Normally, I take a lunch break to eat lunch.
Today, I didn't take a lunch break, and rather just ate a little bit of my sandwich here and there, every 20 to 30 minutes, like 1 bite.

Is the net result the same?

updel

ap What are the connotations behind using the word 'remove' or the word 'delete' ?

I know it's a rather trivial matter, but when naming functions that have the functionality of remove / delete, I'm not sure which verb to use. I feel like this does kind of matter, so I'm curious as to how you guys choose between the two words when naming.
updel

vue What is the reasoning for aliasing Vue.[set/delete/nextTick] to this.$[set/delete/nextTick] ?

It took me a long time to realize that these things have literally the exact same functionality, and I am curious, as to what benefit it provides, having both of these naming options.

Personally, I feel like it would be easier for beginners to work with, if there was only one naming convention.

js Is there a way to measure how much is 'optimized' by this manuever?

Original: 

    // if (map[command]) {
        // map[command].call(this, cm)
    // }

After:

    if (mapA[command]) {
        mapA[command](cm)
    }

    else if (mapB[command]) {
        mapB[command].call(this)
    }


The idea is that in the original map, there are functions which either use the current this context, or the cm parameter. 

If it uses this, it doesnt need cm, and if it uses cm, it doesnt need this.
Therefore, the '.call' is only required for the functions in the map which need the this context.

Thus, the 'after' version splits the map into MapA, and MapB, A containing the functions which use cm, and B containing the functions which use this.



js Should flat objects be preferred over nested objects?

I have an object like this:

    const map = {
        'choice': {
            'child: {
                grandchild: {
                    a: 'a',
                    b: 'b'
                }
            }
        }
        'choice2...'
    }


And then I access it like this:

    const final = map[firstChoice][childChoice][grandChildChoice]

I'm wondering if I should normalize this map into a flat map and access it like:

    const final = map[firstChoice + childChoice + grandChildChoice]

Would this improve the lookup time?

Thanks!
                

js How does the browser/compiler react when a file is constantly being edited?

- Mainfile = index.html (size 3000 lines) which references:
- library.js (Never changes) (size = 30,000 lines)
- script.js  (Im constantly editing it) (size = 20,000 lines)

I am also changing the index.html, a few lines every time. 

How hard does the browser/compiler have to work to reflect the new edits?
Would the answer to the above question change, if the library was 300,000 lines, and the script.js was 200,000 lines?

@findareddit Is there a subreddit where people post logs about trying to change certain habits?

For instance, I am trying to change the habit of using the computer late in the evening. I'm hoping to find a community where other ppl are also trying to change certain habits, so that we can share/encourage.


updel


vue Do you consider watchers to be minor code smells for some items which should actually be in their own component?

A redditor posted this before, and I kind of understand, but also at the same time, I don't understand. Really curious to hear your guys's thoughts / explanations on this.

ap What is the connotation of when a '$' sign is placed infront of a variable?

I know that '_' usually means private variable, not to be exposed in public API. I guess '$' means something similar, but I'm not too sure what.

I've also seen, '$$1' and '$$2' used quite frequently. Is there an implicit meaning to this particular nomenclature?


ap ELI5 - What is a simple explanation for how a recursive descent parser works?



I've been reading about ways to parse strings, and came across 'recursie descent-parser.' 



js How do you create or manage aliases for your dictionaries?

    function aliaser(dict, key) {
        return dict[key] ? dict[key] : dict[GLOBAL_ALIAS_MAP[key]]    
    }

Currently, I'm using the above function to manage my aliases. Basically, if a dict doesnt have a key in it, aliaser checks if the global alias map's version of the key works. And then it returns that.

The alternative that I've been using to this, is to just hardcode items. For example:
    dict = {
        jon: Jonathan,
        john: Jonathan,
        jonny: Jonathan,
    }

With the aliasmap, it would be written as:

    dict = {
        john: Jonathan
    }

    aliasmap = {
        jon: john,
        jonny: john,
    }

'''
#qq
#  findFunction('github')


filerequirementsmap = {
    "all": [],
    "studyable": [isTextFile, isStudyableCodeFile],
}

def getStudyableFiles():
    dir = '~/cssgridgenerator'
    requirements = filerequirementsmap['studyable']
    files = getFiles99(dir, recursive = True, requirements = requirements, public=True)
    pprint(files)
        

#  createAsset(getStudyableFiles())
downloads = '/mnt/chromeos/MyFiles/Downloads'
#  #  for file in getFiles99(downloads):
    #  #  print(  file  )
#  print(  os.listdir(downloads)  )
#  print(  getFiles99(downloads)  )
def trashFile(file):
    move(file, os.path.join('~/', 'TRASH'))   

#  iterate(getFiles99(downloads), trashFile)

def dollarReplace(s, dict):
    return replace('\${(.*?)}', lambda x: dict[x.group(1)], s)


#  pprint(Github.getInfo(query='files'))  
#  pprint(Github.getInfo(query='repos'))
#  iterate(['ChallengeBasketball', 'BayRidgeAcademy'], Github.deleteRepo)
#  iterate(['vue-interactive-paycard', 'kevinlee', 'myapp'], Github.deleteRepo)
#  Github.update('kdog3682', datestamp('string'))

# there are many actions happening here. It will take some time to write the docs, but the doc writing can happen later. Once all the comments are aggregated, they can be smartly partitioned.

proseCommentRE = '^\w+ \w+'
class Partitions:
    def __init__(self):
        self.register(proseCommentRE)


#  writer(request('https://jsonformatter.org/html-validator'))




def commandcat(command, appendTo = 'cats'):
    dict = {
        'npmlist': 'npm list -g --depth=0'
    }

    command = dict.get(command, command)
    commander(command)
    #  commander(command + ' >> ' + appendTo)

#  print(commandcat('npmlist'))
    


def cors():
    openFile('https://cors-anywhere.herokuapp.com/corsdemo')

#  cors()
def pipe(*functions):
    import functools
    return functools.reduce(lambda f, g: lambda x: g(f(x)), functions, lambda x: x)


def compose(*functions):
    import functools
    return functools.reduce(lambda f, g: lambda x: f(g(x)), functions, lambda x: x)

def superb(x, *functions, **kwargs):
    text = request(x) if kwargs.get('url') else x
    product = pipe(*functions)(text)

    if kwargs.get('write'):
        write(kwargs.get('write'), product)
    elif kwargs.get('append'):
        append(kwargs.get('append'), product)
    elif product:
        print(  product  )

def requester(url, *functions):
    return pipe(*functions)(request(url))

#  requester('https://codemirror.net/keymap/vim.js', lambda x: getWords(x, mode='mixed', unique=True, minimumLength=5), lambda x: {el.lower():el for el in x}, lambda x: write('capitals.json', x, preview=True))


#  cabinet()
#  Github.createRepo('CWF', standard = True)
#  ask(questionstring1)
#  reply()
#  openFile('~/node_modules/codemirror-movie/dist/movie.js')



def templater(template, obj):
    delimiter = search('[$%](?=[a-zA-Z])', template)
    regex = delimiter + '\w+'

    def parser(x):
        return obj.get(x[1:])
        
    return re.sub(regex, parser, template)
    

tagmap = {
    'function': 'code'
}
scoremap = {
    'i': ['self', 5],
    'function': ['code', 5],
}

def createScoreMap(s):
    '''code function 

    '''
# Which way do you think is the best way to tag lines?
def getTagNOOOoo(line):
    match = search(regex, line)
    return tagmap.get(match)

def getTag(line):
    words = getWords2(line, 'INTERESTING')
    for word in words:
        if tagmap.get(word):
            return tagmap.get(word)

    return None

def getTag2(line):
    words = getWords2(line, 'INTERESTING')
    tag = None
    store = NumberStorage()
    for word in words:
        map = scoremap.get(word)
        if map:
            tag, score = map
            store.add(tag, score)

            if store.get(tag) > 3:
                return tag

    return None

    
knownTagsMap = {
    'i': 'self',
}
def runnerP(line):
    match = getFirstWord(line)
    if match == '':
        tag = null
    if match in knownTags:
        tag = knownTagsMap.get(match, match)
        line = sliced(line, match)
    else:
        tag = getTag(line)

    return tag, line


#  cabinet('drive', read, 'corpus.json')



s = 'the function makes sense'
#  print(  getTag(s)  )




needtocatchthis ='''

fix ff
 <></>
 // fixing ff
 // adding autocomment




'''


Github(repo='CWF').updateRepo(*mycwf)
