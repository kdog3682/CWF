function activateQuoteSeries({items = quotes, limit = null, target = 'items'} = {}) {
    this[target] = items
    this.appMode = 'PREVIEW'
}

    const buttonmap = {
        'generate': {
            'vue': vuelines.format,
            'page': Partitions.format,
        },
    }
const vueDataObject = {
            boo: 'zoo',
            message: 'hi',
                insertMode: false,
                insertString: '',
                normalString: 'creat',
                snippetString: '',
                historyIndex: 0,
                styles: {},
                history: [],
                computedHtml: '',
                //fdata,
                commandHistory: ['itemA', 'itemB', 'itemC'],
                items: [],
                quoteLibrary: null,
                performTransformation: true,
                fontValue: '',
                sizeValue: '',
                colorValue: '',
                mountCount: 0,
                isIframe: false,
                buttonOptions: {
                    'create': ['a', 'b', 'c'],
                    'generate': ['vue', 'html', 'css', 'page']
                },
                displayEvalStore: false,
                evalStore: [],
                leaveTime: 0,
                returnTime: 0,
                displayString: '',
                buttons: ['first button', 'second button'],
                // buttons: [{name: 'hi', action: () => console.log( this.color )}, {name:'bye', action: () => console.log('sup')}],
                styleString: 'background: yellow',
                evalString: '',
                loadingIndex: null,
                redditObject: null,
                color: 'yellow',
                appMode: 'DEFAULT',
                tabCount: 0,
                isColon: false,
                jsString: '',
                cssString: '',
                htmlString: '',
}
const actionspeechmap = {
            speak: 'saving today',
            speak: 'clearing all of localstorage',
            speak: 'loading today',
            speak: 'Performing code evaluation',
}

function displayer(item, mode = '') {
            if (mode == 'textarea') {
                this.codemirror.setValue(item) 
            }
            else {
                this.textItem = numbered(item)
            }
            this.htmlText = item
}

    /* ------------------------------------------------- */ 
    const vuesubmitter = () => {
        let [text, item] = split(this.gv(), 'once', '(?=^33)')
        if (item.length > 1000 || this.forceUpload) {
           updateStorage('codebin', [item])
        }
        item = createVuePage(item)
        this.displayer(item)
        this.htmlText = item
    }
    /* ------------------------------------------------- */ 
    const submitHtml = () => {
        console.log( 'submit html')
        const item = createHtmlPage(this.getTextAreaValue())
        this.displayer(item)
        this.htmlText = item
    }
    /* ------------------------------------------------- */ 
    const vuetest = () => {
        const product = createVuePage(textValue)
        console.log( product)
    }
    /* ------------------------------------------------- */ 
    const findStorageParser = (...args) => {
        const [k, extra] = split(args)
        const options = argParser(extra)
        findStorage(k, options)
    }

function autoClick(e) {
    this.codemirror.focus()
    console.log( this.codemirror.getCursor() )
    const word = this.codemirror.findWordAt(this.codemirror.getCursor()); 
    this.codemirror.setSelection(word.anchor, word.head);
}

const actionDelimiter = 'z'

function deleteRange(a=0, b=0, c=0, d=0) {
    this.codemirror.replaceRange('', ...cmRangeHelper4(this.codemirror, a,b,c,d))
}

function hi(x) {
    console.log('%c' +  stringify(x), 'background: yellow' )
}

function cmTextEdit(mode) {
    if (mode == 'd2e') {
        range = [
            {line: this.codemirror.getCursor().line, ch: 0}, 
            {line: this.codemirror.lastLine(), ch: 100}
        ]
    }

    else if (mode == 'db') {
        range = this.getRangeSprawl()
        console.log( range )
    }

    this.codemirror.replaceRange('', ...range)
}

function usePreviousCommand() {
    bound = this.previousCommand.bind(this)
    console.log(bound())
}

function clipboardWordCount() {
    navigator.clipboard.readText().then(log.lambda(getWordCount))
}



function validateAction(fn = console.log) {
        this.modalResponse = fn.bind(this)

        const onstart = () => {
            this.modalStatus = 'VALIDATE'
        }

        const condition = () => {
            return this.modalStatus == null
        }
        const ontick = (...args) => {
            console.log('hi from tick', args)
        }
        const onend = () => {
            if (this.modalStatus) this.modalStatus = null
            console.log( 'ending modal status' )
        }

    const object = {
        onend, onstart, ontick, condition,
        duration: 15000,
        increment: 1000,
    }

    this.clock(object)
}

function avalidateAction(fn) {
        console.log( 'starting validation action' )
        const onstart = () => {
            this.$nextTick(() => {
                this.$refs.modal.focus()
                console.log( this.codemirror.hasFocus() )
            })
        }
        const condition = () => {
            return this.modalStatus == null
        }
        const ontick = (...args) => {
            console.log('hi from tick', args)
        }
        const onend = () => {
            if (this.modalStatus) this.modalStatus = null
            console.log( 'ending modal status' )
        }

    const object = {
        onend, onstart, ontick, condition,
        duration: 5000,
        increment: 1000,
    }
    // this.clock.call(this, object)
    this.clock(object)
}

function modalAction() {
    console.log( 'hello from modalaction' )
    console.log('%c' + this.modalAnswer, 'background: yellow')
    if (!this.modalAnswer) {
        console.log( 'no modalanwer value' )
        return
    }
    if (isFunction(this.modalResponse)) {
        console.log( 'performing modal response action' )
        this.modalResponse(this.foo)
    }
    this.modalStatus = null
    this.modalAnswer = ''
    this.codemirror.focus()
}

function loadToday() {
    // const store = getStorage(todayDate(), '')
    const store = getStorage('today.txt', '')
    const product = store ? store + '\n\n' : ''
    this.codemirror.setValue(product)
    this.setCursorToEnd()
}

function setCursorToEnd() {
    this.codemirror.setCursor(this.codemirror.lineCount(), 0)
}
function snippetClick() {
    console.log(this.version, 'version')
}

function cwfClick() {
    console.log(this.currentBuffer, 'asdf')
}
function goToLine(key) {
    let p
    switch (key) {
        case 'start':
            p = { line: 0, ch: 0 }
            break
        case 'end':
            p = { line: 1000, ch: 1000 }
            break
        case 'middle':
            let line = Math.floor(this.codemirror.lastLine() * 0.5)
            while (line >= 0 && this.codemirror.getLine(line).trim() !== '') line--
            p = { line: line, ch: 1000 }
            break
    }

    this.codemirror.setCursor(p)

    if (key == 'start') {
        console.log('adding newline')
        if (!this.codemirror.getLine(0).startsWith('\n')) {
            this.codemirror.replaceRange('\n', p)
            this.codemirror.setCursor(p)
        }
    } else if (key == 'end') {
        console.log('adding newline')
        if (!this.codemirror.getLine(this.codemirror.lastLine()).startsWith('\n')) {
            this.codemirror.replaceRange('\n', p)
        }
    }
}

function vuePreviewObjects() {
    this.store = new StoreReader(this.accumulateStore)
    this.init()
}


function createDebouncedFunction(fn, delay = 1000) {
  return  (...args) => {
    clearTimeout(GLOBAL_TIMEOUT_ID)
    GLOBAL_TIMEOUT_ID= setTimeout(() => {
        console.log( 'calling')
      fn.call(this, ...args)
    }, delay)
  }
}
function decrementActionMode() {
    this.actionMode.decrement()
}

function incrementActionMode() {
    this.actionMode.increment()
}
function determineClickControlFlow(e) {

    // console.log( e.pageY == e.y, 'pageY vs Y')
    // console.log( 'currentbuffer', this.currentBuffer )

    const action = this.clickmap[this.codemirror.hasFocus()][this.currentBuffer]
    if (action) action()
}


function determineKeyPressControlFlowNEWNOTUSED(e) {

    const activeKeys = ['ArrowRight', 'ArrowLeft', 'Space', 'Enter']
    const altKey      = e.altKey   ? 3 : 0
    const shiftKey    = e.shiftKey ? 2 : 0
    const ctrlKey     = e.ctrlKey  ? 1 : 0
    const selection   = ctrlKey || shiftKey || altKey || 0
    const key         = e.code


    const defaultflowmap = {
        'ArrowRight': () => this.actionMode.increment(),
        'ArrowLeft': () => this.actionMode.decrement(),
    }

    const keyflowmap = {
                ArrowDown: [
                    () => cmJumpSelectionHandler(this.codemirror, 'down'),
                ],

                ArrowUp: [
                    () => cmJumpSelectionHandler(this.codemirror, 'up'),
                ],
                ArrowRight: [
                    () => cmJumpSelectionHandler(this.codemirror, 1),
                    () => this.actionMode.increment(),
                    () => console.log('hello from shiftKey right'),
                    () => console.log('hello from altKey rigrht'),
                ],
                ArrowLeft: [
                    () => cmJumpSelectionHandler(this.codemirror, -1),
                    () => this.actionMode.decrement(),
                    () => console.log('hello from shiftKey left'),
                    () => console.log('hello from altKey left'),
                ],
                Enter: [
                    null,
                    this.createPage,
                    this.fixCode,
                    this.accumulateItems,
                ],
    }


    if (this.currentBuffer == 'cwf' && e.ctrlKey) {
        console.log( 'using default flowmap because ctrlkey and cwf' )
        action = defaultflowmap[key]
    }

    else {
        try   { action = keyflowmap[selection] }
        catch { action = null }
    }

    if (isFunction(action)) {
        e.preventDefault()
        action()
        return
    }
}


function determineKeyPressControlFlow(e) {
    this.keyStore.trackKeyDown(e)

    // if (e.key == 'Control') return
    const activeKeys = ['ArrowRight', 'ArrowLeft', 'Space', 'Enter']
    const altKey      = e.altKey   ? 3 : 0
    const shiftKey    = e.shiftKey ? 2 : 0
    const ctrlKey     = e.ctrlKey  ? 1 : 0
    const selection   = ctrlKey || shiftKey || altKey || 0
    const key         = e.code
    this.previousKey = key
    let action
    let mode = this.actionMode.value

    const defaultflowmap = {
        'ArrowRight': () => this.actionMode.increment(),
        'ArrowLeft': () => this.actionMode.decrement(),
    }

    const keyflowmap = {
        'cwf': {
            'code': {
                ArrowDown: [
                    () => cmJumpSelectionHandler(this.codemirror, 'down'),
                ],

                ArrowUp: [
                    () => cmJumpSelectionHandler(this.codemirror, 'up'),
                ],
                ArrowRight: [
                    () => cmJumpSelectionHandler(this.codemirror, 1),
                    () => this.actionMode.increment(),
                    () => console.log('hello from shiftKey right'),
                    () => console.log('hello from altKey rigrht'),
                ],
                ArrowLeft: [
                    () => cmJumpSelectionHandler(this.codemirror, -1),
                    () => this.actionMode.decrement(),
                    () => console.log('hello from shiftKey left'),
                    () => console.log('hello from altKey left'),
                ],
                Enter: [
                    null,
                    this.createPage,
                    this.fixCode,
                    this.accumulateItems,
                ],
            }
        }
    }


    if (this.currentBuffer == 'cwf' && e.ctrlKey) {
        action = defaultflowmap[key]
    }

    else {
        try   { action = keyflowmap[this.currentBuffer][mode][key][selection] } 
        catch { action = null }
    }

    if (isFunction(action)) {
        e.preventDefault()
        action()
        return
    }
}

function determineControlFlow() {
   const flowmap = {
           'cwf': {
                'prose': 'the action changes based on the flow',
                'edit':  '',
                'css':   '',
                'html':  '',
                'code':  '',
                'vue':   '',
           },

           'snippets': {
                'prose': '',
                'edit':  '',
                'css':   '',
                'html':  '',
                'code':  '',
           }
    }

   if (this.codemirror.hasFocus()) {
       const action = flowmap[hasFocus][this.currentBuffer][this.actionMode.value]
   }

}

function incrementIframeWidth(e) {
            console.log( 'activating incrementation')
            const [x, y] = [e.pageX, e.pageY]
            console.log( x,y) 

            if (!isBetween(450, 500, y)) return
            const width = this.$el.clientWidth

            console.log(x, width)
            const value = rounded(x, width)
            this.iframeWidth = value
            return console.log( value)

            console.log( 'incremt')
            console.log( this.iframeWidth)
            if (this.iframeWidth) {
                this.iframeWidth -= 25
                if (this.iframeWidth === 0) {
                    this.iframeWidth = 100
                }
            }
}
function vuesayhi(...args) {
    console.log( 'saying hi from vuesayhi', args )
    console.log( this.foo ) //foobaciliou
}
function loadTempAsset() {
        try {
            this.tempAsset = tempasset
        }
        catch(e) {
            console.log( 'no temp asset')
        }
}
function paster() {
    const promise = navigator.clipboard.readText()
    promise.then(text => {
        if (text) {
            this.codemirror.setValue(text)
        }
    })
}

function vueCreatePage() {
        const item = createPage(this.getTextAreaValue())
        this.textItem = item 
        this.htmlText = item
}
function vuePageMaker(fn, ...args) {
    return function() {
        const item = fn(this.getTextAreaValue(), ...args)
        // arraySimplifier// to be inside ... 
        this.textItem = item 
        this.htmlText = item
    }.bind(this)
}

function speakEval() {
    const product = eval(betterText(this.codemirror.getValue(), 'js'))
    speak(product)
}

function saveToday() {
    speak('saving today')
    this.store += this.gv() + 
    setStorage('today.txt', this.gv())
    return
    const map = {
        ''         : () => updateStorage(todayDate(), this.gv()),
        'createVue': () => updateStorage('components', masterStore),
    }

    map[this.actionMode.value]()
    this.clear()
}


function vueCreateVuePage() {
    const injectComponents = null
    const item = createVuePage(this.getTextAreaValue(), {injectComponents})
    this.textItem = item 
    this.htmlText = item
}

function vueCreateHtmlPage() {
    const item = createHtmlPage(this.getTextAreaValue())
    this.textItem = item 
    this.htmlText = item
}

function downloadHtmlObject() {
    download('index.html', this.textItem)
}

function vueCheckCode(s) {
    if (!s && !isString(s)) s = this.getTextAreaValue()
    checkCodeSync(s)
}

function findAndCopyAccumulateItem(key) {
    updateClipboard(getBlock(key, this.getTextAreaValue()))
}

function useLastCommand() {
    this.actionHandler(this.actionKey)
}

function useLastCommandOLD() {
    const mode = this.actionMode.value
    const map = {
        '':           this.previousCommand,
        'checkcode':  this.vueCheckCode,
        'createhtml': this.vueCreateHtmlPage,
        'createvue':  this.vueCreateVuePage,
        'createpage':  this.vueCreatePage,
    }
    console.log('activate lastcommand', mode || 'previousCommand')

    try {
        map[mode]()
    }
    catch(e) {
        console.log(e)
    }
    this.actionMode.value = mode
}

function copyToOtherBuffer() {
    const text = this.codemirror.getValue()
    this.codemirror.setValue('')
    this.toggleBuffer()
    cmAppendContent('\n\n' + text)

}
function testAction() {
    // this.actionHandler('submitvue')
}
function sayvue() {
    return 'hi'
}
function reader(name) {
    const text = this.readerItems[name]
    this.htmlText = text
    this.textItem = text
    // this.speaker.multiSpeak(this.readerItems[name])
}
async function postClipboard(fn) {
    const text = await readClipboard()
    fn(text)
}



function fooBar() {
    console.log('hi from foobar')
}

function boofoo() {
    return x
}

function setter(x) {
    let [key, val] = split(x)
    console.log(key, val)
    if (val.startsWith('{')) val = JSON.parse(val)
    this.$set(key, val)
}

function startParse(action, ...args) {
    let a, b
    ;[a, b] = this.codemirror.getValue().split(/\nstart\n/)
    this.codemirror.setValue(a)
    let fn = window[action]
    console.log(eval(fn(b)))
}

function popPi3rint() {
    let title = 'abs'
    let windowFeatures = ''
    console.log(content)
    console.log(documentString)
    let documentString =
        '<html><head><title>' +
        title +
        '</title><style>' +
        styles +
        '</style</head><body onafterprint="self.close()">' +
        content +
        '</body></html>'
    win = window.open('', 'mywindow', windowFeatures)
    win.document.write(documentString)
    win.print()
}

function addTodo() {
    let content = this.codemirror.getValue().trim()
    if (!content) return
    content = content + this.dolistdelimiter
    updateStorage('dolist', content)
    this.clear()
}

function getTodo(key = '') {
    if (!isString(key)) key = ''
    let text = getStorage('dolist', '')
    let store
    if (!test(this.dolistdelimiter, text)) {
        speak('finished to do list')
    } else if (key) {
        let regex = '^@' + key + '([^]+?)' + this.dolistdelimiter
        ;[text, store] = mreplace(regex, text)
        return
    } else {
        ;[store, text] = split(text, this.dolistdelimiter)
    }
    if (exists(store)) {
        this.codemirror.setValue(toString(store))
        setStorage('dolist', text)
        this.setCursor(this.codemirror.lineCount(), 0)
    }
}

function cancelTranscript() {
    this.speaker.cancel()
}

function valgetter(map, x) {
    if (isString(x) && x in map) {
        return map[x]
    }
}

function gvfnOLD(fn, ...args) {
    const runner = () => fn.call(this, this.getTextAreaValue(), ...args)   
    const runnerHandler = valgetter(this.gvfnmap, last(args))

    if (runnerHandler) {
        args.pop() // this doesnt actually do anything.
        return () => runnerHandler.call(this, runner())
    }
    return runner
}

function vueKeyObject() {
    const keyupmap = {
        Comma: {
            ctrlKey: this.speakTranscript,
            shiftKey: this.cancelTranscript,
            allowDefault: true,
        },
        Period: {
            ctrlKey: this.speakAxios,
            shiftKey: this.st2,
            altKey: this.st,
            allowDefault: true,
        },
        ShiftRight: this.toggleBuffer,
        ControlRight: this.exitBlock,
        AltRight: this.enterBlock,
        F17: () => this.exitBlock(false),
        F16: () => this.enterBlock(true),
    }
    const keydownmap = {
        KeyD: {
            allowDefault: true,
            shiftKey: () => cmDeleteToEndOfLine(this.codemirror)
        },
        Digit9: {
            allowDefault: true,
            shiftKey: () => this.actionHandler('note'),
        },

        Digit0: {
            ctrlKey: () => this.toggleMap(this.codemirror.addKeyMap, this.codemirror.removeKeyMap, this.fmkeys),
            allowDefault: true,
        },
        KeyP: {
            shiftKey: this.gvfn(popPrint, {lineNumbers: true}),
            allowDefault: true,
        },

        KeyB: {
            ctrlKey: false,
            shiftKey: () => this.speakAction('block'),
            allowDefault: true,
        },

        KeyU: {
            ctrlKey: false,
            shiftKey: () => this.speakAction('upline'),
            allowDefault: true,
        },

        KeyC: {
            ctrlKey: this.gvfn((x) => updateClipboard(parens(x, 'asdf'))),
            shiftKey: () => this.speakAction('position'),
            allowDefault: true,
        },
        KeyX: {
            ctrlKey: false,
            shiftKey: () => this.speakAction('last3'),
            allowDefault: true,
        },
        KeyZ: {
            ctrlKey: false,
            shiftKey: () => this.speakAction('line'),
            allowDefault: true,
        },
        KeyV: {
            ctrlKey: false,
            shiftKey: () => this.speakAction('space'),
            allowDefault: true,
        },
        ArrowLeft: {
            ctrlKey: () => this.version--,
            altKey: () => this.actionMode.decrement(),
            default: () => cmJumpSelectionHandler(this.codemirror, -1),
        },
        ArrowRight: {
            ctrlKey: () => this.version++,
            altKey: () => this.actionMode.increment(),
            default: () => cmJumpSelectionHandler(this.codemirror, 1),
        },

        // ArrowDown: {
            // default: () => cmJumpSelectionHandler(this.codemirror, 'down'),
        // }, //fad

        // ArrowUp: {
            // default: () => cmJumpSelectionHandler(this.codemirror, 'up'),
        // },
    }
    return [keyupmap, keydownmap]
}

function isRegularLetter(e) {
    let keys = ['ctrlKey', 'altKey', 'metaKey', 'shiftKey']
    if (e.code.startsWith('Key')) {
        for (let key of keys) {
            if (e[key] === true) return false
        }
        return true
    }
}

function vueKeyFactory(map) {
    return (e) => {
        // performer.start()
        if (!map[e.code]) return

        let action = null
        let keys = ['ctrlKey', 'altKey', 'metaKey', 'shiftKey']
        let m = map[e.code]

        for (let key of keys) {
            if (m[key] === false && e[key] === true) {
                console.log(key + ' cannot be pressed -- false style')
                return
            } else if (m[key] === true && e[key] === false) {
                console.log(key + ' needs to be pressed -- true style')
                return
            }
        }

        if (m.parser) {
            action = m.parser
        } else if (isFunction(map[e.code])) {
            action = map[e.code]
        } else {
            for (let key of keys) {
                if (isFunction(m[key]) && e[key]) {
                    action = m[key]
                    break
                }
            }
            if (!action && m.default) {
                action = m.default
                console.log( 'using preset functional default m.default. This inclusion ' )
                console.log( action.toString() )
            }
        }

        if (action) {
            action(e.key)
            e.preventDefault()
        }
        // performer.end()
    }
}

function st() {
    console.log('st')
}

function st2() {
    this.sc.speakChunk(this.codemirror.getValue())
}

function ipsum() {
    let s = 'hello my name be bob.\n good bye\n my name be todd.'
    this.codemirror.setValue(s)
}

function runpy() {
    const code = betterText(this.codemirror.getValue().trim(), 'py')
    logged(code)

    Sk.configure({
        output: console.log,
        read: (x) => Sk.builtinFiles['files'][x],
    })
    Sk.misceval
        .asyncToPromise(() => {
            return Sk.importMainWithBody('<stdin>', false, code, true)
        })
        .then((mod) => {
            speak('successful at python')
        })
        .catch((e) => {
            logged(e.toString())
            logged(this.codemirror.getLine(e.traceback[0].lineno - 1))
        })
}

function displayPython(s) {
    console.log('foo')
    this.debugcount += 1
    if (this.debugcount % 2 == 0) return
    this.pyText = s
}

function toggleBuffer() {
    if (this.codemirror.hasFocus()) {
    // this.currentBuffer = this.indexed.increment(this.bufferList)
    this.currentBuffer = this.indexedBufferList.increment()
    speak(this.currentBuffer)
    this.openBuffer(this.currentBuffer)
    if (this.currentBuffer == SNIPPET_BUFFER && this.getLine().trim()) {
        this.addText('\n')
    }
    }
    else {
        this.codemirror.focus()
        this.codemirror.setCursor({line: this.codemirror.lastline(), ch: 1000})
        this.addText('\n')
    }
}


function runOnStart() {
    this.getRangeSprawl()
}
function getRangeSprawl() {
    const store = []
    const start = this.codemirror.getCursor().line
    const options = [
        [start, -1, 1000, 0],
        [start - 1, 1, 0, 0],
    ]

    for (let option of options) {
        for (let i = option[0];; i += option[1]) {
            line = this.codemirror.doc.getLine(i)
            
            if (line && line.trim()) {
                continue
            }
            else {
               store.push({line: i + option[3], ch: option[2]})
               break
            }
        }
    }
    return store
}

function textSprawl() {
    let store = []
    let start = this.ln() 


    for (let i = start - 1;; i--) {
        line = this.codemirror.doc.getLine(i)
        
        if (line && line.trim()) {
            store.push(line)
        }
        else {
            break
        }
    }

    store.reverse()

    for (let i = start;; i++) {
        line = this.codemirror.doc.getLine(i)
        
        if (line && line.trim()) {
            store.push(line)
        }
        else {
            break
        }
    }
    console.log( store )
    return store.join('\n')
}

function sprawlRange(start, regex, { direction = 'up', maxCount = 100 } = {}) {
    // console.log( start, regex)
    let store = []
    let increment = direction == 'up' ? -1 : 1
    let line

    for (let i = start; ; i += increment) {
        line = this.codemirror.doc.getLine(i)
        store.push(line)
        if (test(regex, line) || i == -1 || delta(start, i) > maxCount) {
            break
        }
    }
    const product = store.reverse().join('\n')
    // console.log( product)
    return product.trim() ? product : 'no result was found'
}

async function speakaAxios(link = '') {
    link = this.codemirror.getValue().trim()
    link = prepareLink(link)
    await sleep(2000)
    console.log(link)
    let text = await getLinkText(link)
    console.log('after text')
}

function speakContents() {
    this.performer.start()
    speak(this.codemirror.getValue())
    this.performer.end()
}

function speakTranscript(item = '') {
    let text =
        item && isString(item)
            ? String(window[item])
            : this.sprawlRange(this.ln(), '^' + Regex(this.map))
    let transcript = prepareCodeTranscript(text)
    this.speaker.speakTranscript(transcript)
}

function refresh() {
    let data = this.codemirror.getValue()
    let savePoint = 'savepoint'
    if (data.includes(savePoint)) {
        speak('saving to savepoint')
        data = search('[^]+?' + savePoint, data)
    }
    setStorage('cursor', this.getCursor())
    setStorage(DEFAULT_BUFFER, data)
    location.reload()
}

function sayhi(s) {
    console.log('saying hi to ' + s)
}

function setfoo() {
    let match
    for (let line of this.tempString.split('\n')) {
        if ((match = line.match(/set (\w+) (.*)/))) {
            this.setAction(match[1], match[2])
        }
    }
    console.log(Object.values(this.$data))
    this.tempString = ''
}

function speech() {
    Speak(this.computedPhrase, { onstart: this.audioSTART, onend: this.audioEND })
}

function setBuffer(name, mode = null) {
    let text = getStorage(name, '')
    this.buffers[name] = CodeMirror.Doc(text, mode)
}

function openBuffer(name) {
    try { this.codemirror.swapDoc(this.buffers[name])}
    catch {  console.log( 'error at swapdoc', name )} 
    this.setCursorToEnd()
}


function checkselection() {
    console.log(this.codemirror.somethingSelected())
    console.log(this.codemirror.getSelection())
}

function awaiter() {
    let x = 'this is the continuation asdasdsadaszx'
}

function delay(delayDuration = 1) {
    return new Promise((res) => setTimeout(() => res(), delayDuration * 1000))
}

function saveNotes(info) {
    speak('saving notes in 3 seconds. the count is ' + info.count + ' seconds')
    this.delay(3)
    let notes = updateStorage('quickNotes', noteParser(eval('this.quickNotes')).trim())
    this.currentBuffer = 'quickNotes'
    this.clearCodeMirror()
}

function clockAction(count, duration) {
    if (this.clockOff) return true
    console.log(count, duration)
}

function errorAction() {
    throw 'time to pause'
}

function timerAction() {
    interval(this.saveNotes, {
        ontick: this.clockAction,
        duration: 2000,
        modulus: 2000,
        onstart: true,
    })
}

function saybye(info) {
    if (info.count == 2) {
        interval(this.sayhi, { limit: 5 })
        return true
    } else {
        console.log('B', info.count)
    }
}

function sayhelloComplex(info, ...args) {
    if (++this.globalCount == 10) return true
    if (info.count == 1) {
        interval(this.saybye, { limit: 5 })
        return true
    } else {
        console.log('A', info.count)
    }
}

function getLibraryItem(key) {
    this.sv(this.libraryFunctions[key])
}

function removeLibraryItem(key) {
    this.libraryFunctions = deleteStorage('libraryFunctions', key)
}

function copyAndClear() {
    console.log('copyclear', this.currentBuffer)
    if (this.currentBuffer == 'codemirror') {
        updateClipboard(this.codemirror.getValue())
        this.clear()
    } else {
        console.log(this.currentBuffer)
        this.$refs[this.currentBuffer].value = ''
    }
}

function copyClipboard() {
    speak('copying to clipboard')
    let content = this.textSprawl()

    updateClipboard(content)
}

function changed(e) {
    console.log(this.rangeValue)
}

function getCWF() {
    let cursor = getStorage('cursor')
    if (cursor == 0) return
    this.codemirror.setValue(getStorage(DEFAULT_BUFFER) + '\n\n')
}

function evallib() {
    let functionList = commentJS('functions: ' + Object.keys(this.libraryFunctions))
    let display = functionList + '\n\n' + this.computedString + '\n\n' + formatDatum(this.codemirror.getValue())

    console.log(commentWrap(display, '-'))
    let code = Object.values(this.libraryFunctions).join('\n\n') + '\n\n' + display
    this.evaluate(code)
}

function tolib() {
    speak('updating temp library')

    const product = createFunctionLibrary(this.templib)
    this.libraryFunctions = ustorage('libraryFunctions', product)
}

function readitems() {
    speak('errors, catchall, accumulator-JS, match-dictionary')
    console.log(getStorage('mrdict'))
    console.log(getStorage('errors.js'))
    console.log(getStorage('catchall'))
    console.log(getStorage('acc.js'))
}

function clearitems() {
    speak('deleting acc, errors, catchall... also: saving notes')
    if (exists(localStorage.notes)) download('notes.txt', getStorage('notes'))
    delete localStorage['errors.js']
    delete localStorage.acc
    delete localStorage.notes
    delete localStorage.catchall
    delete localStorage.quickNotes
}


function setLine(content = '') {
    this.codemirror.replaceRange(content, ...this.rangeObject(this.codemirror))
}


function cmRangeHelper3(cm, a,b,c,d) {
    const {line, ch} = cm.getCursor()
    const lengthFirst  = (cm.getLine(line + a) || '').length
    const lengthSecond = (cm.getLine(line + c) || '').length
    const chFirst = Math.max(0,  lengthFirst + b)
    const chSecond = Math.max(0, lengthSecond + d)
    const product = [
        {line: line + a, ch: chFirst},
        {line: line + c, ch: chSecond},
    ]
    return product
}
function cmRangeHelper4(cm, a = 0, b = 0, c = 0, d = 0) {
    const {line, ch} = cm.getCursor()

    if (b == 'start') {
        b = -ch
    }
    if (d == 'end') {
        d = 0
    }
    const product = [
        {line: line + a, ch: ch + b},
        {line: line + c, ch: ch + d},
    ]
    // console.log( product )
    return product
}

function deleteLine2() { // the original
    const range = [-1, 0, 0, 0]
    this.codemirror.replaceRange('', ...cmRangeHelper3(this.codemirror, ...range))
}
function deleteLine(mode = '') {
    const rangeA = [0, 0, 0, 100]      // delete the line
    const rangeB = [-1, 100, 0, 100]   // deletes up to to the last
    const range = mode == '' ? rangeA : rangeB
    const rangeObject = cmRangeHelper5(this.codemirror, ...range)
    // console.log( rangeObject )
    this.codemirror.replaceRange('', ...rangeObject)
}

function currentWork() {
    store = aggregate(aggRE, this.codemirror.getValue())
    if (store.empty) {
        speak('empty')
        return
    }
    store.forEach(([a, b]) => {
        speak(a)
        speak(numbered(b))
    })
}

function rs(x) {
    this.codemirror.replaceSelection(x)
}

function initializeCodeMirror() {

    this.codemirror = CodeMirror.fromTextArea(this.$refs.textarea, codeMirrorOptions)
    this.fmkeys = createFunctionalKeyMap2(this.tempdict)
    this.codemirror.addKeyMap(defaultCodeMirrorKeymap)
    this.bufferList.forEach((buffer, i) => {
        try {
            // console.log( 'buffer to try', buffer )
            this.setBuffer(buffer)
            this.bufferMemory[buffer] = getStorage(buffer)
            // console.log( 'successfully stored' )
        }
        catch(e) {
            console.warn('warning',  buffer )
        }
    })

    const currentBuffer = getStorage('currentBuffer', 'cwf') 
    this.currentBuffer = currentBuffer
    if (currentBuffer) {
        this.indexedBufferList.init(currentBuffer)
        this.openBuffer(currentBuffer)
        this.codemirror.setCursor(getStorage('cursor'))
        console.log( 'opening currentbuffer', currentBuffer )
        this.codemirror.focus()
    }
}

function initEventListeners() {

    // window.addEventListener('keydown', this.determineKeyPressControlFlow)
    // const [keyup, keydown] = vueKeyObject.bind(this)()
    // window.addEventListener('keyup', vueKeyFactory(keyup))
    // window.addEventListener('keydown', vueKeyFactory(keydown))

    window.addEventListener('keyup', vueKeyFactory(this.keyupmap))
    window.addEventListener('keydown', vueKeyFactory(this.keydownmap))

    window.addEventListener('click', (e) => {
        this.determineClickControlFlow(e)
        return
        console.log( 'asdf' )

        if (this.currentBuffer == 'cwf') {
            if (this.codemirror.hasFocus()) {
                if (this.actionMode.value == '') {
                    this.prevSelection = cmSetSelection(this.codemirror, this.prevSelection)
                }
                else if (this.actionMode.value == 'createAsset') {
                    // this hasnt been activated yet. 
                   const line = cml(this.codemirror) 
                   cmDeleteLine(this.codemirror)
                   this.activeModal = 'codemirror'

                }
            }
            else {
                this.incrementIframeWidth(e)
            }
        }

    })
    
    this.codemirror.on("dblclick",  (cm, event) => {
        const text = cmSprawlRange(cm)
        let product
        if (text.startsWith('3')) {
            this.actionHandler(...splitFirst(text.slice(1)))
        }
        else if (this.actionMode.value == 'fixcode') {
           checkCodeSync(text) 
        }
        else {
            updateClipboard(text)
            product = Object.entries(Accumulate(text))[0][1][0]
            // this.textItem = obj
            console.log( 'result:')
            console.log( obj)
        }
    });
}

function evaluateLine() {
    let line = this.getLine()
    try {
        let [a, b] = split(line)
        let product = a + '(' + b + ')'
        let result = eval(product)
        let talk = replace(`['"](.*?)['"]`, (_, x) => 'quoted ' + x, result)
        speak(prepareDictionarySpeech(result, true))
    } catch (e) {
        speak(e.message)
    }
}

function enterBlock() {
    let line = this.getLine()
    let indentation = roundToFours(getSpaces(line).length)
    let block_start_delimiter = line.endsWith('{') ? '' : (this.lang == 'py' ? block_start_delimiter_py : block_start_delimiter_js)
    this.add(block_start_delimiter + '\n' + ' '.repeat(indentation + 4))
    this.speakAction('position')
}

function exitBlock() {
    let line = this.getLine()
    let indentation = roundToFours(getSpaces(line).length)

    if (indentation < 4) {
        return
    }

    let block_end_delimiter = this.lang == 'py' ? block_end_delimiter_py : block_end_delimiter_js
    let spaces = ' '.repeat(indentation - 4)

    let exit = spaces + block_end_delimiter + '\n' + spaces

    if (isEmpty(line)) {
        this.replaceLine(exit)
    } else {
        this.add('\n' + exit)
    }
    this.speakAction('position')
}

function enterblock(override) {
    if (this.getCursor().ch == 0) return
    let match = 'override'
    let line = this.getLine()
    let indentation = getIndent(line)
    indentation = roundToFours(indentation)
    let block_start_delimiter = ' {'
    let block_end_delimiter = '}' + this.arrow
    if (override || (match = BLOCKS.find((x) => x == getFirstWord(line)))) {
        this.start = false
        if (test('\\.(?:fe|map|red|filter)', line)) this.arrow = ')'
        else this.arrow = ''
        this.tracker[indentation] = line
        this.add(block_start_delimiter + '\n' + ' '.repeat(indentation + 4))
        speak(match + ' block' + ' ' + this.getCursor(String))
    } else {
        let spaces
        try {
            spaces = ' '.repeat(indentation - 4)
        } catch {
            console.log(indentation, 'indentation error')
            return
        }
        let exit = spaces + block_end_delimiter + '\n' + spaces
        if (isEmpty(line)) {
            console.log('empty')
            this.replaceLine(exit)
        } else this.add('\n' + exit)
        this.speakAction('line')
        this.start = this.getCursor().ch == 0
    }
}

function setCursor(line, ch) {
    if (isObject(line)) {
        this.codemirror.setCursor(line)
        return
    }
    this.codemirror.setCursor({ line: this.getCursor().line + line, ch: ch })
}

function backspace() {
    console.log('backspace')
    this.codemirror.replaceRange('', ...cmh(this.codemirror, -1, 0))
}

function add(content) {
    this.codemirror.doc.replaceSelection(content)
}

function cancelSpeech() {
    window.speechSynthesis.cancel()
}

function sv(content) {
    this.codemirror.setValue(content)
}

function clearSnippet() {
    setStorage('snippets', { qweasdzxc: 1 })
}

function createSnippet() {
    const line = this.getLine()
    const items = toDictionary(getLineInfoMAPS(line))
    localStorage.snippets = {}
    updateStorage('snippets', items)
    console.log(getStorage('snippets'))

    this.replaceLine('')
}

function useSnippet() {
    const snippetsDictionary = getStorage('snippets')
    console.log(snippetsDictionary)
    this.setget((x) => sreplace(x, snippetsDictionary, 'gm'))
}

function toggleComment() {
    const line = this.getLine()
    if (test(JS_LINE_COMMENT, line)) {
        this.replaceLine(line.slice(3))
    } else {
        this.replaceLine(JS_LINE_COMMENT + line)
    }
}

function debugAll() {
    this.debugAction(this.codemirror.getValue())
}

function accumulateChunk() {
    let text = this.textSprawl()
    this.vdownload(Accumulate(text))
}

function debugSection() {
    this.debugAction(this.textSprawl())
}

async function debugAction(val, lang = null) {
    let text = simplecheck(val).replace(/^(?:js|py|jcf|pcf) /gim, '')
    if (!lang) lang = getLang(text)

    console.log(numbered(text))

    const checked = checkCodeAsync(text, lang)
    checked
        .then(() => updateClipboard(text))
        .catch((e) => {
            if (lang == 'js') {
                console.log('JAVASCRIPT ERROR: ' + e.message)
            } else if (lang == 'py') {
                let eln = e.traceback[0].lineno + this.lineSprawl()
                let aline = this.codemirror.getLine(eln - 1)
                let line = this.codemirror.getLine(eln)
                e = 'PYTHON ERROR: ' + e.constructor.tp$name
                console.log(eln)
                console.log(aline)
                console.log(line)
                console.log(e)
                this.codemirror.setCursor({ line: eln, ch: 0 })
                this.codemirror.markText(
                    { line: eln - 1, ch: 0 },
                    { line: eln + 1, ch: 1000 },
                    { css: 'background-color: yellow' }
                )
                setTimeout(() => {
                    this.codemirror.markText(
                        { line: eln - 1, ch: 0 },
                        { line: eln + 1, ch: 1000 },
                        { css: 'background-color: white' }
                    )
                }, 5000)
            }
        })
}

function gracc() {
    this.gr('acc')
}

function lineSprawl() {
    let n = this.ln()
    while (!test('^\\w', this.codemirror.getLine(n))) {
        n--
    }
    return n
}

function texitSprawl() {
    let line = this.ln()
    let base = this.ln()
    let upcount = base
    let downcount = base
    while (this.codemirror.getLine(upcount).trim()) {
    }

    while (this.codemirror.getLine(downcount).trim()) {

    }

    let text = this.codemirror.getRange(
        { line: line + upcount, ch: 0 },
        { line: line + downcount, ch: 0 }
    )
    return text
}

function debugDatum() {
    let text = this.codemirror.getValue()
    text = simplecheck(text).replace(/^(?:js|py) /gim, '')
    text = splitChunks(text).map(letConstParser).join('\n\n')
    console.log(text)
    const product = this.fastCheck(text)
    updateClipboard(product)
    this.clear()
}

function gr(cat = 'check') {
    let text = this.textSprawl()
    if (cat == 'check') {
        text = simplecheck(text).replace(/^(?:js|py) /gim, '')
        this.templib = letConstParser(text)
        console.log(this.fastCheck(this.templib))
        console.log('---------')
        let promise = promiseEval(this.templib)
        promise.then(shandler).catch(ehandler)

        if (test('\\nrpw\\(', this.templib)) {
            let [fn, code] = search('\\nrpw.*?(\\w+)[,)].*?//t (.*)', this.templib)
            let testing = '\n' + 'return ' + fn + '(' + parens(code, 'sq') + ')'
            let s = this.templib + testing
            console.log(functionalEval(s))
        }
        updateClipboard(this.templib)
    } else if (cat == 'acc') {
        console.log(stringify(Accumulate(text)))
    }
}

function debugcode() {
    let s = this.codemirror.doc.getRange({ line: 0, ch: 0 }, this.getCursor())
    let extraBracket = count('}', removeQuotes(s)) % 2 == 0 ? '' : '}'
    s = simplecheck(s + extraBracket)
    console.log(s)
    this.checkprettier(s)
}

function FIXCODE() {
    console.log(addFunctionParentheses(simplecheck(this.textSprawl())))
}

async function requestJB(input) {
    let type, value

    if (input == 'read') {
        type = input 
        value = null
    }
    else {
        type = 'write'; 
        value = isString(input) ? {value: input} : input
    }

    const product = await JSONBINPromiseHandler(type, value)
    return product
}

async function ja(type = 'read', value = this.codemirror.getValue()) {
    try {
        let product = await JSONBINPromiseHandler(
            type,
            this.JSON_ID_MAP.versions,
            { value: value},
            this.computedVersion
        )
        updateClipboard(parseJSON(product), console.log)
    } catch (err) {
        console.log(err)
    }
}

function setDatum() {
    this.datum = this.codemirror.getValue()
}


function getTextAreaValue() {
    let text = this.version <= 0 ? this.codemirror.getValue() : this.textSprawl()
    return text
}

function isConfigurationKey(key) {
    const configurationlist = ['fix', 'reset']
    return configurationlist.includes(key)
}

function isMovementKey(key) {
    return key.startsWith('g')
}



function setAction(key, value) {
        this[key] = value
}

async function fiddle() {
    const product = buildFiddle(this.tempbuffer)
    console.log( product )
    this.displayer(product)
}
async function magical() {
    // const data = await readClipboard()
    this.tempbuffer = await readClipboard()
    console.log( 'setting this.tempbuffer as:' )
    console.log( this.tempbuffer )
    return
    const url = await readClipboard()
    const text = await request(url)
    const product = buildFiddle(text)
    console.log( product )
    this.displayer(product)
}
function deliveryHandler() {
    this.gvfnmap = {
        'css': (s) => {
            this.cssText = s
            this.textitem = this.cssText + snsn + this.htmlText
            console.log( this.textitem )
        },
        'page': (s) => {
            this.htmlText = s
            this.textitem = s
            console.log(this.textitem)
        },
        'log': console.log,
        
    }
     this.actionmap = {
        cwb: () => {
            readClipboard().then(url => {
                TextController.pick(url).then(result => {
                // copyWebsitePage(url).then(result => {
                    this.displayer(result, 'textarea')
                })
            })
        },
        gethtml: () => {
            this.htmlText = getStorage('textitem')
            // this.codemirror.setValue(this.cssText)
        },
        fr: (x) => {
            this.setget((s) => replace(...x.split(' '),  s, 'gm'))
            cmSetCursorToEnd(this.codemirror)
        },
        getstyles: () => this.tempbuffer = getHtmlStyles(this.htmlText),
        toarea: () => this.codemirror.setValue(this.htmlText),
        tohtml: () => this.htmlText = this.gv(),
        fiddle: () => {
            const product = buildFiddle(this.tempbuffer)
            console.log( product )
            this.displayer(product)
        },
        magic: this.magical,
        fullscreen: () => requestFullScreen(this.$el),
        date: PersonalAssistant.date,
        time: PersonalAssistant.time,
        wc:   clipboardWordCount,
        read: getStorage,
        /* ------------------------------------------------- */
        css: this.gvfn(cssParser2, 'css'),
        part: this.gvfn(classRunner(Partitions), 'page'),
        vue: this.gvfn(vuelines.format, 'page'),
        le:  this.gvfn(LineEdit2.format, 'log'),
        see: (x) => this[x] || (x + ' is empty'),
        set: (k,v) => this[k] = v,
        my: myItemGetter,
        export: exportStorage,
        save:   () => setStorage('today.txt', this.gv()),
        load: () => getStorage('today.txt', ''),
        s: () => updateStorage(createFilename(), this.gv()),
        l: () => getStorage(createFilename(), ''),
        /* ------------------------------------------------- */
        'd2e': () => cmTextEdit(this.codemirror, 'd2e'),
        'd2s': () => cmTextEdit(this.codemirror, 'd2s'),
        'dte': () => this.cmTextEdit('d2e'),
        'db': () => this.cmTextEdit('db'),
        'clear': () => this.validateAction(this.sayhi),
        eval: () => evaluator(betterText(this.getTextAreaValue(), 'js')),
     }

    const notused = {
        'hi': vuesayhi,
        'pastefromclipboard': paster.bind(this),
        'dlhtml': this.downloadHtmlObject,
        'cursorback': () => cmCursorBack(this.codemirror), // F1
        'cursorforward': () => cmCursorForward(this.codemirror), // F2
        'finditem': this.findAndCopyAccumulateItem,
        'eval': this.evalcode,
        'checkOverflow': checkOverflow,
        'copyToOtherBuffer': copyToOtherBuffer,
        'brackify': () => cmReplaceRange('asdf', 'asdf'),
        'set': this.setAction,
        'unminify': unminifyParser,
        // 'essay': noteParser,
        // 'note': noteParser,
        // 'createpage': this.vueCreatePage,
        // 'createpage': this.vuePageMaker(createPage),
        // 'createhtml': this.vueCreateHtmlPage,
        'scrollIntoView': () => cmScrollIntoView(this.codemirror),
        // 'temp':     () => getStorage('temp'),
        // 'find':     findStorageParser,
        'cp':       () => cmReplaceAtIndicator(this.codemirror, '', ''),
        // 'createvue':   vuesubmitter,
        // 'update':   updateStorage,
        // 'get':      getStorage,
        'getbin':   () => jsonbin('read', andThen),
        'writebin': () => jsonbin('write', textValue),
    }

    this.keyupmap = {
        Comma: {
            ctrlKey: this.speakTranscript,
            shiftKey: this.cancelTranscript,
            allowDefault: true,
        },
        Period: {
            ctrlKey: this.speakAxios,
            shiftKey: this.st2,
            altKey: this.st,
            allowDefault: true,
        },
        ShiftRight: this.toggleBuffer,
        ControlRight: this.exitBlock,
        AltRight: this.enterBlock,
        F17: () => this.exitBlock(false),
        F16: () => this.enterBlock(true),
    }
    this.keydownmap = {
        F1: {
           ctrlKey: () => this.codemirror.focus(),
           default: () => console.log('f1 default'),
        },
        KeyD: {
            allowDefault: true,
            shiftKey: () => cmDeleteToEndOfLine(this.codemirror)
        },
        Digit9: {
            allowDefault: true,
            shiftKey: () => this.actionHandler('note'),
        },

        Digit0: {
            ctrlKey: () => this.toggleMap(this.codemirror.addKeyMap, this.codemirror.removeKeyMap, this.fmkeys),
            allowDefault: true,
        },
        KeyP: {
            shiftKey: this.gvfn(popPrint, {lineNumbers: true}),
            allowDefault: true,
        },

        KeyB: {
            ctrlKey: false,
            shiftKey: () => this.speakAction('block'),
            allowDefault: true,
        },

        KeyU: {
            ctrlKey: false,
            shiftKey: () => this.speakAction('upline'),
            allowDefault: true,
        },

        KeyC: {
            ctrlKey: this.gvfn((x) => updateClipboard(parens(x, 'asdf'))),
            altKey: this.gvfn((x) => updateClipboard(parens(x, 'asdfpython'))),
            shiftKey: () => this.speakAction('position'),
            allowDefault: true,
        },
        KeyX: {
            ctrlKey: false,
            shiftKey: () => this.speakAction('last3'),
            allowDefault: true,
        },
        KeyZ: {
            ctrlKey: false,
            shiftKey: () => this.speakAction('line'),
            allowDefault: true,
        },
        KeyV: {
            ctrlKey: false,
            shiftKey: () => this.speakAction('space'),
            allowDefault: true,
        },
        ArrowLeft: {
            ctrlKey: () => this.version--,
            altKey: () => this.actionMode.decrement(),
            default: () => cmJumpSelectionHandler(this.codemirror, -1),
        },
        ArrowRight: {
            ctrlKey: () => this.version++,
            altKey: () => this.actionMode.increment(),
            default: () => cmJumpSelectionHandler(this.codemirror, 1),
        },

        // ArrowDown: {
            // default: () => cmJumpSelectionHandler(this.codemirror, 'down'),
        // }, //fad

        // ArrowUp: {
            // default: () => cmJumpSelectionHandler(this.codemirror, 'up'),
        // },
    }
    this.configurationmap = {
        // dl:  () => this.isDownload = true,
        fix: () => this.fixed = !this.fixed,
        reset: () => {
            this.fixed = false
            this.mode = 'html'
        },
        // css: () => this.mode = 'css'
    }
}

// delivery is used as follows:


function isActionKey(key) {
    return !isMovementKey(key) && !isConfigurationKey(key)
}
function handleActionDelimiter(match) {
    let actionKey = match.replace(/^z/, '')


    if (isConfigurationKey(actionKey)) {
        this.configurationmap[actionKey].call(this) 
        return null
    }

    if (this.fixed && isActionKey(actionKey)) {
        console.log( 'returning fixed actionkey', this.actionKey )
        return this.actionKey
    }

    else {
        console.log( 'returning standard action', actionKey )
        this.actionKey = actionKey
        return actionKey
    }
}

// have to load it in. 
// you need money to perform big operations like catering services, cruise-ships, et cetera. Most people don't have the ability for these massive operations. 


// need some way to interface the things that are happening. 
function getActionKey(actionKey) {

    if (isString(actionKey)) return actionKey

        const line = cml(this.codemirror).trim()
        const kwactionslist = ['date', 'time']

        if (match = searcher(actionDelimiter + '\\w+$', line)) {
            // STARTS WITH Z
            this.deleteRange(0, -1 * match.length)
            return this.handleActionDelimiter(match)
        }

        else if (match = searcher(Regex2(kwactionslist), line)) {
            // STARTS WITH DATE OR TIME
            this.deleteRange(0, -1 * match.length)
            return match
        }

        else {
            const items = split(line)
            const sureokay = ['see', 'adsfasdfasdfasdf', 'asdfasdf']
            this.deleteLine()
            if (!this.fixed || (this.fixed && sureokay.includes(items[0]))) {
                return items
            }
            else {
                return this.actionkey
            }
        }
}

function actionHandler(actionKey) {
    let match, items
    let args = []
    actionKey = this.getActionKey(actionKey)

    if (!actionKey) {
        return
    }

    if (isArray(actionKey)) {
        args.push(...actionKey.slice(1))
        actionKey = actionKey[0]
    }

    if (isNumber(actionKey)) {
        cmToLine(this.codemirror, actionKey)
        return
    }

    /* ------------------------------------------------- */
    const actionmap = this.actionmap
    const action = actionmap[actionKey] || actionKey
    console.green('ACTION: ' +  actionKey )

    if (actionKey in actionspeechmap) {
        speak(actionspeechmap[actionKey])
    }
    /* ------------------------------------------------- */

    if (isObject(action)) {
        if (action.speak) speak(action.speak)
        action = action.action
    }
    else if (isString(action) && action in this && isFunction(this[action])) {
        action = this[action]
    }

    /* ------------------------------------------------- */ 
    if (isFunction(action)) {
        const product = action.call(this, ...args)
        if (product) console.log(product)
    }
    else {
        console.log( 'NOT A FUNCTION' )
    }
    /* ------------------------------------------------- */ 
}

function dactionHandler(override = null) {
    console.log(override)
    if (isString(override)) {
        if (override == 'js') {
        } else if (override == 'runpy') {
            this.runpy()
        } else if (override == 'tiooopy') {
        } else if (override == 'update') {
            updateStorage('temp', this.codemirror.getValue())
            speak('updating cumulative store')
            this.clear()
        } else if (override == 'open') {
            console.log('opening')
        } else if (override == 'setsave') {
            setStorage('temp', this.codemirror.getValue())
        } else if (override == 'updatesave') {
            updateStorage('onlycode', this.codemirror.getValue())
        } else if (override == 'cleartemp') {
            setStorage('temp', '')
        } else if (override == 'log') {
            console.log(getStorage('temp'))
        } else if (override == 'load') {
            console.log('loading')
            speak('loading temp workspace')
            this.codemirror.setValue('' + getStorage('temp'))
        }
    } else {
        const line = this.getLine().trim()
        let match

        if ((match = line.match(/^\d+$/))) {
            speak('updating storage: ' + match[0])
            updateStorage(match[0], this.codemirror.getValue())
            this.deleteLine()
            return
        } else if ((match = line.match(/rl/))) {
            this.replaceLine2('rl', '')
            this.refresh()
            return
        } else if ((match = line.match(/readlog/))) {
            speak(readStorage('readlog'))
        }

        let items = split(line, 'vue')
        let cat, name, extra
        if (items[0]) cat = items[0]
        if (items[1]) name = items[1]
        if (items[2]) extra = items.slice(2)
        else if (cat == 'topy') {
            const product = topy(getWindowItem(name))
            this.setLine(product)

            let result = Promise.resolve(product)
            result
                .then((s) => {
                    speak('successful at to pie')
                    console.log(s)
                })
                .catch((e) => {
                    console.log(e.toString())
                    console.log('error ocured at the topy python converter')
                    console.log(e.traceback[0].lineno)
                    console.log(this.codemirror.getLine(e.traceback[0].lineno - 1))
                })
        } else if (cat == 'rl') {
            this.refresh()
        } else if (cat == 'dl') {
            this.downloadStorage(name)
        } else if (cat == 'dl') {
            this.downloadStorage(name)
        } else if (cat == 'dl') {
            this.downloadStorage(name)
        } else if (cat == 'run') {
            let action
            try {
                if (name in this) {
                    action = this[name]
                    console.log('the action is vue-based')
                } else {
                    let keys = Object.keys(this)
                    let key = keys.find((x) => test(name, x, 'i'))
                    if (key) {
                        action = this[key]
                    } else if (name in window) {
                        action = window[name].bind(this)
                    }
                }
                if (action) {
                    extra ? action(...extra) : action()
                } else console.log('no action at runner of codes')
            } catch (e) {
                console.log(e.message)
                if (e.message == 'this[key] is not a function') {
                } else {
                    console.log(e)
                    console.log('error at run action')
                }
            }
        } else if (cat == 'start') {
            if (extra) {
                this.startParse(name, ...extra.split(' '))
            } else {
                this.startParse(name)
            }
        } else if (cat == 'dl') {
            this.downloadStorage(name)
        } else if (cat == 'dl') {
            this.downloadStorage(name)
        } else if (cat == 'dl') {
            this.downloadStorage(name)
        } else if (cat == 'clear') {
            delete localStorage[name]
        } else if (cat == 'get') {
            updateClipboard(getStorage(name))
            delete localStorage[name]
        } else if (cat == 'set') {
            this.setAction(name, extra)
        } else if (cat == 'eval') {
            const expr = replaceDollar(name, 's', parens(this.codemirror.getValue(), 'tilda'))

            const product = parseObject(evaluate(expr))

            updateClipboard(product)
        }

        if (cat == 'read') {
            let s = getStorage(name)
            console.log(getStorage(name))
        } else if (cat == 'del') delete localStorage[name]
        else if (cat == 'u') {
            updateStorage(name, this.codemirror.getValue())
        } else if (cat == 'h') console.log(setify(getStorage('history')))
        else if (cat == 's') {
            updateStorage('history', name)
            setStorage(name, this.codemirror.getValue())
            speak('saving ' + name)
            this.clear()
        } else if (cat == 'fr') {
            if (extra == 'x') extra = ''
            let regex = rescapeAll(name)
            console.log(regex)
            console.log(extra)
            try {
                this.setget((x) => replace(regex, extra, x))
                this.setCursor(1000, 1000)
            } catch {
                speak('replacement error')
            }
        } else if (cat == 'prose' || cat == 'pp') {
            this.codemirror.setValue(FixCode(trimBlock(this.codemirror.getValue()), 'prose'))
        } else if (cat == 'raw') {
            this.codemirror.setValue(getStorage('raw'))
        } else if (cat == 'load' || cat == 'l') {
            this.currentBuffer = name
            let content = getStorage(name)
            if (isArray(content)) content = content.join('\n\n')
            this.codemirror.setValue(content)
            this.codemirror.setCursor({ line: 100, ch: 100 })
            speak('loading ' + name)
        } else if (cat == 'grabload') {
            let result = grabFunctions(getStorage('raw'), name)
            this.$nextTick(() => this.codemirror.setValue('foobar'))
        } else if (cat == 'grab') {
            let items = name.includes(',') ? name.split(',') : name
            let result = grabFunctions(getStorage('raw'), items)
            speak(result.join(',,'))
            this.clear()
        } else if (cat == 'test') {
            const params = getParams(name)
            const mappedParams = params.map(
                (el) => 'const ' + el + ' = ' + (parammap[el] || parens(el, 'sq'))
            )
            let fnString =
                this.codemirror.getValue() + '\n\n' + mappedParams.join('\n') + '\n\n' + name
        } else if (cat == 'gr') {
            let a = name
            let b = extra
            if (extra == "''") b = ''
            if (b.includes('$')) {
                b = constructFunction(b)
            }

            const parser = (x) => replace(escapeRegex(a), b, x)
            this.setget(parser)
        } else if (cat == 'fffff') {
            let indexes = findIndexes(name, this.codemirror.getValue())
            if (isEmpty(items)) return
            for (let index of indexes) {
                speak(index)
                console.log(index)
                this.delayer().then((x) => console.log(x || 'hi'))
                this.setCursor(index)
            }
        } else if (cat == 'foo') return

        this.deleteLine()
    }
}

function delayer() {
    let stop = false
    window.addEventListener('keydown', (e) => {
        if (e.code == 'Enter') {
            e.preventDefault()
            stop = true
            window.removeEventListener('keydown')
        }
    })
    while (!stop) {
        setTimeout(() => {}, 1000)
    }
    return new Promise((resolve) => {
        setTimeout(() => resolve(), 2000)
    })
}

function runlogs() {
    function mreplace(s, dict) {
        if (!isArray(dict)) dict = Object.entries(dict)
        for (let [regex, replacer] of dict) s = replace(regex, replacer, s, 'gm')
        return s
    }
}

function setget(parser) {
    let s = this.codemirror.getValue()

    try {
        this.codemirror.setValue(parser(s))
    } catch (e) {
        console.log(e)
    }
}

function evalcode() {
    let text = this.getTextAreaValue()
    if (this.version == 0) {
        text = betterText(text, 'js')
    } else {
        console.log( 'text replace')
        text = text.replace(/^\/\/ (.*)/gm, (_, a) => 'console.log( + a + )')
    }
    evaluator(text)
}


function evaluate(s, action = (x, y) => console.log(x.message)) {
    return promiseEval(s)

    try {
        functionalEval(s)
    } catch (e) {
        action(e, s)
    }
}

function fastCheck(s, lang = 'js') {
    if (lang == 'py') return s
    if (lang == 'js') return promiseEval(pprint(s))
}

function checkprettier(s = this.codemirror.getValue()) {
    return pprint(s)
    const checked = check(s, true)
    speak(prepareDictionarySpeech(checked, true, true))
}

function clearCodeMirror(copy = true) {
    if (copy) updateClipboard(this.codemirror.getValue())
    this.codemirror.setValue('')
}
function clear(message = 'cleared') {
    const text = this.version == 1 ? replace(rescape(this.textSprawl()), '', this.codemirror.getValue(), '') : ''
    this.codemirror.setValue(text)
    this.setCursor(this.codemirror.lineCount(), 0)
    speak(message)
}

function announce(x) {
    speak(x)
}

function speakAction(x = '') {
    window.speechSynthesis.cancel()
    const runner = (x) => {
        if (x == 'position') {
            return this.getCursor(String)
        }

        if (x == 'line') {
            return this.getLine().trim() || 'empty line'
        }

        if (x == 'upline') {
            return this.getLine(-1).trim() || 'empty upline'
        }

        if (x == 'last3') {
            return prepareDictionarySpeech(this.getLine()).slice(-3)
        }
        if (x == 'space') {
            return this.line().endsWith(' ') ? 'space' : 'word'
        }
    }
    speak(runner(x))
}

function resetcursor() {
    setStorage('cursor', '0')
    updateClipboard(this.codemirror.getValue())
}

function sixblock() {
    let line = this.getLine()
    if (this.x < 0) this.x = 0
    try {
        this.tracker[this.x] = search('\\w+', line)
        if (line.includes('=>')) this.arrow = ')'
        else this.arrow = ''
        this.x += 4
        this.codemirror.replaceRange(' {\n' + ' '.repeat(this.x), this.getCursor())
        this.speakAction('whereami')
    } catch (e) {
        return
    }
}


function rr(content, a = 0, b = 0, c = 0, d = 0) {
    let { line, ch } = this.getCursor()
    let A = b == 0 ? 0 : ch + b
    if (b == 'start') A = 0
    let B = c == 0 ? 0 : ch + d

    if (c == 'end') B = 100
    this.codemirror.replaceRange(content, { line: line + a, ch: A }, { line: line + c, ch: B })
}

function ch() {
    return this.getCursor().ch
}

function ln() {
    return this.getCursor().line
}

function addText(content) {
    this.codemirror.doc.replaceRange(content, this.getCursor())
}

function replaceLine2(regex, replacement) {
    let line = this.ln()
    let length = this.getLine().length
    this.replaceLine('', { line, ch: length - regex.length }, { line, ch: length })
}

function replaceLine(
    content = '    ',
    start = { line: this.ln(), ch: 0 },
    end = { line: this.ln(), ch: this.getLine().length }
) {
    this.codemirror.doc.replaceRange(content, start, end)
}

function getText() {
    return this.codemirror.getValue()
}

function gv() {
    return this.codemirror.getValue()
}

function getCursor(cat) {
    const cursor = this.codemirror.doc.getCursor()
    if (cat == String) {
        return cursor.line + 1 + ' ' + cursor.ch
    }
    return cursor
}

function parsenew() {
    const product = Accumulate(getStorage('new'), 'object')
    const statistics = getAccumulateStatistics(product)
}

function um() {
    const p = Accumulate(this.textSprawl()).maps
    let [key, val] = Object.entries(p)
    console.log(key, val)
    this.$set(this.map, key, val)
    console.log('updated maps with new ' + key)
}

async function responder() {
    while (this.keyPress != 'a') {
        console.log(this.keyPress)
        await sleep(4000)
    }

    return new Promise((resolve, reject) => {
        if (this.keyPress == 'a') {
            resolve(true)
        } else {
            console.log('hi')
            reject(true)
        }
    })
}

function resetTimer(fn, delay = 2000) {
    clearTimeout()
    setTimeout(fn.bind(this), delay)
}

function GETITEMS() {
    const text = this.version <= 0 ? this.codemirror.getValue() : this.textSprawl()
    // const product = Accumulate(text, this.map)
    // console.log(stringify(product))

    const onend = () => {
        console.log( 'end' )
        this.isActiveClock = false
        this.keyStore.reset()
    }
    const onstart = () => {
        console.log( 'starting' )
        this.isActiveClock = true
    }
    const ontick = (count, duration) => {
        this.textItem2 = count
        console.log( this.textItem2 )
    }

    const condition = () => {
        if (this.keyStore.value) {
            console.log( 'ACCESSED' )
            return true
        }
    }

    const object = {
        onend,
        onstart,
        ontick,
        condition,
        duration: 3000,
        increment: 250,
    }
    
    if (!this.isActiveClock) {
        this.clock(object)
    }

    if (this.keyStore.value) {
        console.log( 'YAAYYAA' )
        // download('test.jsontest', product)
    }
    if (this.version == -1) {
        download('test.jsontest', product)
    }
}

function vdownload(s) {
    let name = datestamp() + '.jsontest'
    download(name, s)
}

function downloadAction(product) {
    let testing = true

    let dl = true

    console.log(product.string)

    if (dl) {
        let name = datestamp() + '.json' + (testing ? 'test' : '')
        download(name, product.string)
    } else {
    }
}

function getLine(n = 0) {
    try {
        return this.codemirror.doc.getLine(this.codemirror.doc.getCursor().line + n) || ''
    } catch(e) {
        return ''
    }
}

function rangeObject(cm) {
    const line = cm.getCursor().line
    return [
        { line, ch: 0 },
        { line, ch: 10000 },
    ]
}

function saveBuffer(name) {
    const value = this.buffers[name].getValue()
    if (value.trim() != this.bufferMemory[name].trim()) {
        setStorage(name, value)
    }
    else {
        console.log( 'no save bc identical')
    }
}

function saveOnExit(data = '', message = 'copied') {
    data = isString(data) ? this.codemirror.getValue() : ''
    if (this.cssText) setStorage('textitem', this.htmlText)
    setStorage('cursor', this.getCursor())
    setStorage('currentBuffer', this.currentBuffer)
    this.bufferList.forEach((buffer) => this.saveBuffer(buffer))
}




function modalEffect(modal) {
    
    
}
function toggleEffect() {
    const action = (isEven(this.toggleIndex) ? this.toggleA : this.toggleB).bind(this)
    this.toggleIndex++
    action(this.toggleValue)
}

function modalEffect(activate, onMessage, offMessage) {
}

function toggleMap(a, b, value) {
    console.log( 'toggling')
    const item = isEven(this.toggleIndex) ? a : b
    console.log( item)
    if (isFunction(item)) {
        action = item
    }
    else if (isObject(item)){
        action = item.parser
        modal = item.modal
        this.modalEffect(modal)
    }

    this.toggleIndex++
    const context = action in this ? this : this.codemirror
    product = action.call(context, value)
    // the value is the map
    // the context is vue.this or codemirror.this
    // the action is to ... addkeymap or remove keymap
}

function toggleMaiiip(value) {
    const action = isEven(this.toggleIndex) ? 'addKeyMap' : 'removeKeyMap'
    this.codemirror[action](value)
    this.toggleIndex++
    return

    if (isEven(this.toggleIndex)) {
        this.codemirror.addKeyMap(value)
    }
    else {
        this.codemirror.removeKeyMap(this.cmkeys)
    }
    this.toggleIndex++
}

function toggle(a,b, ...args) {
    const action = isEven(this.toggleIndex) ? a : b
    // action.call(this, ...args)
    // console.log( args)
    action.bind(this)(...args)

    this.toggleIndex++
}




function vueTimer({
    duration = 10000,
    increment = 100,
    ontick = console.log,
    onstart = console.log,
    onend = console.log,
    condition = console.log,
} = {}) {

    let start = new Date().getTime()
    let count = 0

    if (onstart) onstart.call(this)
    ontick = ontick.bind(this)
    condition = condition.bind(this)

    let id = setInterval(() => {
        let delta = new Date().getTime() - start
        count += 1

        if (duration - delta <= 0) {
            clearTimeout(id)
            onend.call(this, false)
        }

        else if (condition()) {
            clearTimeout(id)
            onend.call(this, true)
        }

        else {
            ontick(delta, count, duration)
        }
    }, increment)
    
}
// if it has selection, it should go to the front. 
// reactive data goes into data. other things don't.
// asdfasdfjasdlflasd 
// so much happens within the cm instance.

// NEW ADDITION ----------------------- Feb 23
const packmap3 = {
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
    'f': 'foo',
    'function': 'asdas',
}

function createElement(el, ...args) {
    if (!exists(args)) return
    const element = document.createElement(el)
    switch(el) {
        case 'style':
        case 'script':
            element.innerHTML = args.join(snsn) 
            document.head.appendChild(element);
            break
    }
}

// createElement('style', 'body { background: blue }')


function pickGenerator(arg) {
    // creates items based on how they come about.
}
function animateElement(el, i) {
    let name = 'fade'
    const [keyframes, options] = parseAnimationString(animationmap[name])
    mergeInPlace(options, {
        delay: Number(i) * options.duration,
        fill: 'forwards',
    })
    console.string( options )
    el.animate(keyframes, options)
}


function gvfn(formatter, mode) {
    let product

    if (isClass(formatter)) {
        product = (new formatter(this.codemirror.getValue())).value
    } else if (isFunction(formatter)) {
        product = formatter(this.codemirror.getValue())
    }

    if (!product) return

    if (isObject(product)) {
        if (product.template) this.htmlString = product.template
        if (product.js) this.jsString = product.js
        if (product.css) this.cssString = product.css
        if (product.libraries) this.libraryString = product.libraries
    }
}

function createFrame(x) {
    this.mountCount += 1
    console.log( 'computing html' )
    let s = ''

    if (isObject(x)) {
        const product = html99(x)
        console.string( product )
        if (product) this.computedHtml = product
        return
    if (x.libraries)   s += x.libraryString
    if (x.css)          s += x.cssString
    if (x.template)    s += x.htmlString
    if (x.js)          s += x.jsString
    }

    else {
    if (this.libraryString) s += this.libraryString
    if (this.cssString)     s += this.cssString
    if (this.htmlString)    s += this.htmlString
    if (this.jsString)      s += this.jsString
    }
    this.computedHtml = s
}


function getStyle(i) {
    const object = {
        color: 'red',
        fontSize: '13px',
        animationDelay: 50 * Number(i),
        animationDuration: 100,
        animation: 'opac' 
    }
}



function loadingHandler() {
    this.loadingIndex++
}

function load(items, mode) {
    this.redditObject = items
    this.loadingIndex = 0
    this.codemirror.state.vue.mode = mode
}

async function redditHandler() {
    const items = await jsonbin2({mode: 'GET'})
    this.load(items, 'REDDIT')
    replyToResponses()
    // answer the responses
    // submit the responses, and submit the new questions.
    // basically, it is always batched together. I think this is correct
}

function handlePromise(promise) {
    promise.then(x => {
        console.log( x )
    })
}


function removePrimaryListener() {
    window.removeEventListener(foooo)
}



function cmToLineTop(cm) {
    const {spaces, lineNumber} = cminfo(cm)
    cm.operation(() => {
        cm.replaceRange(spaces + sn, Pos(lineNumber, 0))
        cmCursor(cm, (ch, line) => Pos(line - 1, 1000))
    })
}

function cmToLineBottom(cm) {
    const {spaces, lineNumber, line, mode} = cminfo(cm)
    const extraSpaces = line.endsWith(getBlockDelimiter(mode, true)) ? '    ':''

    cm.operation(() => {
        cmCursor(cm, 'LINE-END')
        cm.replaceRange('\n' + spaces + extraSpaces, Pos(lineNumber, 1000))
    })
}


function inoremapHandlerOLD(cm) {
    console.log( 'inoremap' )
    const inoremapReplacementMap = {
        'foo': 'asdasjdas',
        'boo': 'zzz',
    }

    const match = inoremapReplacementMap[this.insertString.trim()]
    if (match) {
        console.log( 'replacing word' )
        cmReplaceWord(cm, this.insertString, match)
        this.insertString = ''
        return true
    }
}


function inoremapHandler(cm) {
    console.log( 'inoremap' )
    const inoremapReplacementMap = {
        'foo': 'asdasjdas',
        'boo': 'zzz',
    }

    const match = inoremapReplacementMap[cm.state.lastWord]
    if (match) {
        console.log( 'replacing word' )
        cmReplaceWord(cm, cm.state.lastWord, match)
        cm.state.lastWord = ''
        return true
    }
}


function cmRangeHelper99(cm, {mode = null, word = null}) {
    if (isString(arguments[1])) {
        mode = arguments[1]
    }

    const cursor = cm.getCursor(cm)
    if (mode == 'deleteFromCursorBackwards') {
        return [{line: cursor.line, ch: cursor.ch - word.length + 1}, cursor]
    }

    if (mode == 'deleteLineToPreviousEnd') {
        return [
            {line: cursor.line - 1, ch: 1000}, 
            {line: cursor.line, ch: 1000},
        ]
    }
}

function cmReplaceWord(cm, word, replacement) {
    // const range = cm.findWordAt(cm.getCursor())
    // const word = cm.getRange(range.anchor, range.head)
    cm.replaceRange(replacement, ...cmRangeHelper99(cm, {
        mode: 'deleteFromCursorBackwards',
        word: word,
    }))
         
}

function cmAddClass(cm, classString) {
    CodeMirror.addClass(cm.getWrapperElement(), classString)
}


function cmgetter(cm, ...queries) {
    const cursor = cm.getCursor()
    const line = cursor.line
    return smallify(queries.map(runner))

    function runner(query) {
    switch(query) {
        case 'WORD-RANGE': 
            const range = cm.findWordAt(cursor)
            return [range.anchor, range.head]

        case 'EXTRASPACES': return ' '.repeat(cm.getOption('tabSize') || 4)
        case 'TABSIZE': return cm.getOption('tabSize') || 4
        case 'spaces': return cm.getLine(cursor.line).match(/^ */)[0]
        case 'indent': return cm.getLine(cursor.line).match(/^ */)[0].length
        case 'mode':   return cm.getOption('mode') || 'javascript'

        case 'SPACES': return cm.getLine(cursor.line).match(/^ */)[0]
        case 'INDENT': return cm.getLine(cursor.line).match(/^ */)[0].length
        case 'MODE':   return cm.getOption('mode') || 'javascript'
        case 'UPLINE': return cm.getLine(cursor.line - 1) || ''
        case 'LINE':   return cm.getLine(cursor.line) || ''
        case 'LINE-TRIM':   return cm.getLine(cursor.line).trim() || ''
        case 'BLOCK':  return cmSprawlRange(cm)
        case 'CURSOR': return cursor
        case 'LINE-NUMBER': return cursor.line
        case 'CHAR-NUMBER': return cursor.ch
        case 'LAST-WORD': return search(/\S+$/, cm.getLine(cursor.line))
        case 'DOCUMENT':
            return [0, 0, cm.lastLine(), 1000]
        case 'LINE-START-TO-LINE-END': 
            return [Pos(line, 0), Pos(line, 1000)]
        case 'UPLINE-END-TO-LINE-END': 
            return [Pos(line - 1, 1000), Pos(line, 1000)]
        case 'LINE-START-TO-LINE-END': 
            return [Pos(line, 0), Pos(line, 1000)]
        case 'LINE-SMART-TO-END':
            return [Pos(line, cmgetter(cm, 'INDENT')), Pos(line, 1000)]
        case 'LINE-SMART-TO-END':
            return [Pos(line, cmgetter(cm, 'INDENT')), Pos(line, 1000)]

        case 'DELIMITERS':   
            const mode = cm.getOption('mode') || 'javascript'
            return mode == 'py' ? [':', ''] : [' {', '}']
    }
    }
}


function cmSnippetReplacement(cm, range, content) {

    const currentIndentation = cmgetter(cm, 'indent')
    cm.state.extraSnippetSpaces = 0

    if (isObject(content)) {
        let replacement = ''
        if (content.snippet.includes('\n')) {
            cm.state.extraSnippetSpaces += currentIndentation
            replacement = indent(content.snippet, currentIndentation, {mode: 'skipFirstLine'})
        }
        cm.operation(() => {
            cm.replaceRange(replacement, range.anchor, range.head)
            cm.setCursor(
                range.anchor.line + content.line, 
                range.anchor.ch + content.ch
            )

        })

        cm.state.tabCount = 0
        cm.state.snippetString = ''
        cm.state.extraSnippetSpaces = 0
        return
    }

    let delimiterIndex = content.search(RegExp(snippetDelimiter))
    content = content.replace(RegExp(snippetDelimiter, 'g'), '')

    if (content.includes('\n')) {
        cm.state.extraSnippetSpaces += currentIndentation
        content = indent(content, currentIndentation, {mode: 'skipFirstLine'})
    }

    cm.operation(() => {
        cm.replaceRange(content, range.anchor, range.head)
        cm.setCursor(range.anchor.line, range.anchor.ch + delimiterIndex)
    })
}


function createEvent({event = 'keydown', key = 'm'} = {}) {
    var event = document.createEvent( 'KeyboardEvent' );
    event.initKeyboardEvent(
                 "keypress",        //  the kind of event
                  true,             //  boolean "can it bubble?"
                  true,             //  boolean "can it be cancelled?"
                  null,             //  specifies the view context 
                  false,            //  boolean "Ctrl key?"
                  false,            //  boolean "Alt key?"
                  false,            //  Boolean "Shift key?"
                  false,            //  Boolean "Meta key?"
                   40,             //  the keyCode
                   0,               //  default
    );

    console.log( event )
    document.dispatchEvent( event );
}

const hello = 'hello'

const fooFunction = 'function foo90 {\n    ret x'

function sleep(ms = 3000) {
    if (ms < 10) ms *= 1000
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('finished sleep')
            resolve()
        }, ms)
    })
}

async function cmOperationAsync2(cm, frames, offsets = null) {
    if (!exists(frames)) return
    if (!frames[0]) return
    offsets = frames.map(frame => {
        let delay
        if (exists(frame)) {
            delay = 3000
        } else {
            delay = 3000
        }
        return {preDelay: delay}
    })
    for (let i = 0; i < frames.length; i++) {
        if (offsets[i].preDelay) {
            console.log( 'sleeping' )
            await sleep(offsets[i].preDelay)
        }

        console.log( ' starting' )
        if (frames[i]) frames[i](cm)

        if (i < frames.length - 1 && offsets[i].postDelay) {
            console.log( 'offset', i )
            await sleep(offsets[i].postDelay)
        }
    }
}


async function cmOperationAsync(cm, frames) {
    for (let frame of frames) {
        if (frame.before) await sleep(frame.before)
        frame.r(cm)
        if (frame.d) await sleep(frame.d)
    }
}


function cmOperation(cm, actions) {
    cm.operation(cm => {
        for (let action of actions) {
            action(cm)
        }
    })
}

function cmDeleteLastWord(cm) {
    const [cursor, line] = cmgetter(cm, 'CURSOR', 'LINE')

    if (cursor.ch == 0) {
        cm.replaceRange('', ...cmRangeHelper99(cm, 'deleteLineToPreviousEnd'))
    }

    else if (line[cursor.ch - 1] == ' ' && line[cursor.ch -2] == ' ') {
        cm.replaceRange('', Pos(cursor.line, cursor.ch - 4), cursor)
    }

    else {
        const word = cm.findWordAt(cursor)

        // if (word.anchor.ch == cursor.ch) {
            // cm.replaceRange('', Pos(cursor.line, cursor.ch - 1), cursor)
            // return
        // }

        const text = cm.getRange(word.anchor, word.head)
        const replacement = text.trim() == '' ? text.slice(4) : ''
        cm.replaceRange(replacement, word.anchor, word.head)
    }
}


const spell = {
    deleteLastWord(s) {
        const regex = /(?: {1,4}|\w+|[^\w ]+)$/
        return s.replace(regex, '')
    },
}

const defaultOptions = {
  cutoff: 50
};

//ScriptStuff



function isFunction(o) {
    return Object.prototype.toString.call(o).slice(8, -1).toLowerCase() === 'function'
}


function cmDeleteLine(cm) {
    cm.replaceRange('', ...cmRangeHelper99(cm, 'deleteLineToPreviousEnd'))
}
 

const movementmap = {
    gg: (cm) => cmCursor(cm, 'DOCUMENT-START'),
    G: (cm) => cmCursor(cm, 'DOCUMENT-END'),
    A: (cm) => cmCursor(cm, 'LINE-END'),
    o: cmToLineBottom,
    O: cmToLineTop,
}


function vuepick(item) {
      const index = this.picks.indexOf(item)
      index > -1 ? this.picks.splice(index,1) : this.picks.push(item)
}


function vueedit(record) {
     var index = this.list.indexOf(this.cache)
     this.list.splice(index, 1, record);
}

// the iframe perhaps should not be responsible for handling the data. 
// give it some time to harmonize.

// the electricity is much higher.


function cmWriteFactory(s) {
    this.insertString = s
    // console.string( this.codemirror.getCursor() )
    this.codemirror.replaceSelection(s)
    // console.string(this.codemirror.getCursor())
}

function primaryFirstAction(cm, e) {
    const keymap = this.primaryMap[e.code]
    if (keymap) {
        if (isFunction(keymap)) {
            keymap.call(this, cm, e)
        } else {
            keymap.action.call(this, cm, e)

            if (keymap.preventDefault) {
                console.log( 'preventing defualt' )
                e.preventDefault()
            }
            if (keymap.reset) {
                this.insertString = ''
            }
        }

        return true // means dont continue with the keytyping.
    }
}


const nonLetterKeys = ['Shift', 'ArrowRight', 'ArrowLeft', 'ArrowDown', 'ArrowUp', 'Alt', 'Control', 'Meta']

function primaryKeyHandler(cm, e) {

    if (this.appMode != 'DEFAULT') {
        console.log( 'hi from appmode' )
        return
    }

    if (this.colonKeyHandler(cm, e)) {
        return
    }

    if (this.primaryFirstAction(cm, e)) {
        console.log( e.key, 'hi from pri first' )
        return
    }

    if (nonLetterKeys.includes(e.key)) {
        console.log( 'early return at nonletterkey' )
        return
    }

    let score = 0
    if (e.ctrlKey) score += 1000
    if (e.altKey)  score += 2000

    if (this.insertMode && score < 1000) {
        this.insertString += e.key
        
        e.key == ' ' ? 
            cm.state.lastWord = '' : 
            cm.state.lastWord += e.key

        const irm = cm.state.irm['js']
        // console.blue( cm.state.lastWord )
        // console.log( irm[cm.state.lastWord] )
        if (cm.state.lastWord.length > 1 && irm[cm.state.lastWord]) {
            console.log( 'zzzzzzzz' )
            cmReplaceWord(cm, cm.state.lastWord, irm[cm.state.lastWord])
            cm.state.lastWord = ''
            e.preventDefault()
            return
        }
    } 

    else if (!this.insertMode) {
        console.log( 'normal mode' )

        if (e.key in movementmap) {
            movementmap[e.key](cm)
            e.preventDefault()
            this.enterInsertMode(cm)
            return
        }
        else {
            console.log( 'hii' )
            this.normalString += e.key
        }
    }

    if (this.isColon) {
        return 
    }

    if (this.insertMode) score += e.key.charCodeAt(0) + 10000
    else if (score) score += this.normalString 
    else score = this.normalString


    console.red('SCORE',  score )
    const modmap = this.modmap[score]
    if (modmap) {
        console.log( 'matched at modmap!!!' )
        if (isFunction(modmap)) {
            try {
                modmap(cm)
            }

            catch(e) {
                console.log( 'err', e )
                modmap.call(this, cm)
            }
        }
        else {
            modmap.action.call(this, cm)
            if (modmap.mode == 'ENTER-INSERT-MODE') {
                this.enterInsertMode()

            }
        }
        
        if (isNumber(score) && !this.insertMode && score > 10) {
            this.enterKeyHandler(cm, e)
        }
        this.normalString = ''
    }
    else {
        console.log( 'no match from catchallmodmap. activates every time.' )
    }
}


function mapflow(map) {
    const item = aliaser(map, command)
    if (!item) return
    if (isFunction(item)) {
        return {function: item}
    }
    if (isObject(item)) {

    }
}

// it was correct to not respond with ti-logic to the words
// in my opinion, ny is many things
// perhaps someone needs to play the game of power so that others do not have to. 

function createParameters(fn, obj) {
    const params = getParameters(fn)
    const store = []
    for (let param of params) {
        if (obj[param]) store.push(obj[param])
    }
    return store
}


function buttonHandler(key, name) {
    try {
        const action = buttonmap[key][name]
        const product = html99(action(this.codemirror.getValue()))
        this.mountCount += 1
        this.computedHtml = product
    } catch(e) { console.warn(e) }
}

function executeColonCommand(cm, s) {
    this.commandHistory.push(s)
    if (!s) return
    let [command, arg] = split(s, {default: [s, null]})

    console.modal('Execute Colon Command', s, command, arg)
    let key, value, mode, promise, args

    switch(command) {
        case 'motivateme':
            this.activateQuoteSeries()
            break
        case 'date':
        case 'time':
        case 'weather':
            colonmap[command]() 
            break

        case 'grab':
            let clipboard, parser;
            const parserString = Regex2(['arrify']);
            [arg, clipboard, parser] = splitarg(arg, 'clip', parserString)
            if (!arg) return console.log( 'no grab match' )

            switch (parser) {
                case 'arrify': parser = arrify; break;
            }
            arg = transformLine(arg, 're')
            console.red( arg, 'grab arg' )
            if (looksLikeRegex(arg)) {
                const handle = (s) => {
                    if (s.length < 50) {
                        console.log( s )
                        throw 'LENGTH OF CLIPBOARD TEXT TOO SHORT'
                    }
                    return s
                }

                readClipboard().then(handle).then(text => {
                    const items = findall(arg, text)
                    if (exists(items)) {
                        const product = parser(items)
                        if (clipboard) {
                            updateClipboard(product)
                        }
                        else {
                            cm.setValue(product)
                        }
                    }
                    else {
                        console.log( text, 'no match at grab based on the given regex, arg', 'for finding all' )
                    }
                }).catch((error) => {
                    // const text = cm.getValue()
                    console.log( error )
                    // this error should say the text isnt long enuf.
                })
            }
            else {
                // else its not a regex. maybe it does smth based on the cursor as well what buttons are pushed. something along the lines of a templateasembler.
                console.log( arg )
                console.log( 'no idea what cmgrab does' )
                // cmGrab(cm, arg)
            }
            break 
        case 'gt':
           break
        case 'gen':
            command = 'generate'
        case 'generate':
        case 'create':
            if (!arg) arg = 'vue'
            this.buttonHandler(command, arg)
            break
        case 'ge':
            this.getElement(...arg.split(' '))
            break
        case "createpage":
            this.gvfn(Partitions)
            break
        case "vuelines":
            this.gvfn(vuelines)
            break
        /* ------------------------------------------------------ */
        case "w":
            cm.state.store.add(arg, cm.getValue())
            break
        case "e":
            cm.setValue(cm.state.store.get(arg))
            break
        /* ------------------------------------------------------ */
        case 'config':
            let match
            if (match = search(/this\.(\w+) = (.*)/, arg)) {
                this[match[0]] = match[1]
                console.log('setting a new local this value')
            }
            break

        case "set":
            cm.state.store.set(arg, cm.getValue())
            break
        case "toframe":
            this.htmlText = cm.getValue()
            break
        case "totext":
            cm.setValue(this.htmlText)
            break
        case "addstyle":
            this.$set(this.styles, ...cssParser3(arg))
            break
        case "removestyle":
            this.$delete(this.styles, arg)
            break
        case "style":
            cmEditStyle(cm, arg)
            break
        // case "grab":
            // cmGrab(cm, arg)
            // break
        case "merge":
            ;[key, s] = split(arg)
            const obj = window[key]
            const data = getLineInfoMAPS(s)
            mergeInPlace(obj, data)
            break

        case "eval":
            switch (arg) {
                case 'clear':
                    this.evalStore = []
                    break
                case 'toggle':
                    this.displayEvalStore = !this.displayEvalStore
                    break
                default:
                   this.evalString = evaluator(bestText(arg))
                   this.evalStore.push(this.evalString)
            }
            break

        case "jbin":
            ;[mode, key] = split(arg, {default: ['GET', null]})
            console.red( mode, key, 'fromibn' )

            if (mode == 'GET') {
                value = null
            } else if (mode = 'clipboard') {
                readClipboard().then(x => {
                    value = x
                    mode = 'PUT'
                    this.handlePromise(jsonbin2({mode, value}))
                })
                return
            }
            else {
                value = cm.state.store.get(key) || key
            }

            promise = jsonbin2({mode: mode, value})
            this.handlePromise(promise)
            break
        case "postreddit":
            promise = jsonbin2({
                mode: 'PUT', 
                versioning: false,
                value: cm.state.store.get('reddit')
            })
            promise.then(console.red)
            break
    }
}


function ieixecuteColonCommandOLLD(s, cm) {
    const [command, arg] = split(s) 
    const action = this.colonmap[aliaser(command)]
    if (!action) return

    switch(action.type) {
        case 'NONE':
            return action.action()
        case 'VUE CODEMIRROR':
            return action.action.call(this, cm, arg)
        case 'CODEMIRROR':
            return action.action.call(this, cm, arg)
        default:
            return action.action.call(this, ...split(arg, action.type))
    }
}

// presi
// the feeling of evil.
// the feeling of being seen. 
// maintain the boundaries... To have the skill. 
// The more money you have, the dirtier the game becomes. 
// The people who are in charge. The people ... 
// Bu xu yao. The war. is real.     

function generateStyleString({font = null, size = null, color = null} = {}) {
    if (font) font = 'font-family: ' + font + '; '
    if (size) size = 'font-size: ' + size + '; '
    if (color) color = 'color: ' + color + '; '
    return font + size + color
}

function computedStyleString() {
    return generateStyleString({
        font: this.fontValue,
        color: this.colorValue,
        size: this.sizeValue,
    })
}

function cmEditStyle(cm, font, size, color) {
    const s = generateCssString({font, size, color})
    cm.markText(...cmRangeGetter(cm, 'DOCUMENT'), {'css' : s})
}

function cmEditStyle(cm, s) {
    const obj = {
        'css': cssParser3(s)
    }
    cm.markText(...cmRangeGetter(cm, 'DOCUMENT'), obj)
}




function enterKeyHandler(cm, e) {
    let line = this.insertString
    this.insertString = ''

    if (e.key == 'Enter' && e.ctrlKey) {
        switch(cm.state.vue.mode) {
            case 'REDDIT':
                cmSubmitter(cm, 'reddit-reply')
                this.loadingIndex += 1
                break
            default:
                cmSubmitter(cm)
        }

        cm.setValue('')
        e.preventDefault()
        return
    }


    if (this.insertMode) {
        if (this.performTransformation) {
            let transformed = transformLine(line)
            if (transformed) {
                cm.operation(() => {
                    cmReplaceLine(cm, cmgetter(cm, 'SPACES') + transformed)
                })
            }
        }
        cm.state.tabCount = 0
        cm.state.lastWord = ''
        return
    }

    e.preventDefault()

    if (this.isColon) {
        this.history.push(this.normalString)
        this.executeColonCommand(cm, this.normalString)
        this.isColon = false
    }

    this.enterInsertMode(cm)



}



function escapeKeyHandler(cm) {
    if (!this.insertMode) {
        this.normalString = ''
        this.isColon = false
        this.historyIndex = 0
    }

    this.insertMode = false
    cm.setOption('disableInput', true)
}


function colonKeyHandler(cm, e) {
    if (this.isColon) {
        if (e.code == 'Enter') {
            this.enterKeyHandler(cm, e)
        } else if (e.code == 'Backspace') {
            this.backspaceHandler(cm, e)
        } else if (e.code == 'Escape') {
            this.escapeKeyHandler(cm, e)
        } 

        else if (e.key == 'ArrowUp' || e.key == 'ArrowDown') {

            console.log( 'arrow activation' )
            if (exists(this.commandHistory)) {
                const increment = e.key == 'ArrowUp' ? 1 : -1
                this.historyIndex += increment
                const index = this.commandHistory.length + this.historyIndex
                const p = this.commandHistory[index]

                if (p) {
                    console.log( 'success', this.historyIndex )
                    this.historyIndex += increment
                    this.normalString = p
                }
                else {
                    this.historyIndex -= increment
                    if (index == -1) {
                        this.historyIndex = 0
                    }
                    else if (index > this.commandHistory.length)
                        this.historyIndex = 0
                    }
                }
            }
        }

        else if (!nonLetterKeys.includes(e.key)) {
            this.normalString += e.key
        }
        return true
    }

    else if (e.code == 'Semicolon') {
        if (e.shiftKey) {
        this.insertMode = false
        this.isColon = true
        cm.setOption('disableInput', true)
        }

        else {
            cm.replaceSelection(':')
        }
        e.preventDefault()
        return true
    }

}

function enterVimMode() {
    // not yet
}


function backspaceHandler(cm, e) {
    e.preventDefault()
    if (this.insertMode) {
        this.insertString = spell.deleteLastWord(this.insertString)
        cmDeleteLastWord(cm)
    } else if (this.isColon) {
        this.normalString = this.normalString.slice(0, -1)
    } else {
        this.normalString = spell.deleteLastWord(this.normalString)
    }
}




function enterBlock(cm) {
    cm.state.blockEnter = cm.getCursor()
    const [line, spaces, tabSize] = cmgetter(cm, 'LINE', 'SPACES', 'TABSIZE')

    const [startDelimiter, endDelimiter] = [' {', '}']
    const start = startDelimiter + '\n' + spaces + ' '.repeat(tabSize)
    const end = '\n' + spaces + endDelimiter
    cm.operation(() => {
        cm.replaceSelection(start + end)
        cmCursor(cm, (ch, line) => [line - 1, 1000])
    })
}


function cmSprawl(cm, regex, {limit = 10, mode = 'line'} = {}) {
    regex = prepareRegex(regex, '') 
    let n = cm.getCursor().line + 1
    while (true) {
        line = cm.getLine(n)
        if (regex.test(line)) {
            if (mode = 'ch') {
                let ch = line.search(prepareRegex(regex))
                return Pos(n, ch)
            }
            else {
                return n
            }
        }
        else {
            n++
            if (n > limit) return null
        }
    }
}


function exitBlock(cm) {
    let n = cmSprawl(cm, /^ *}|^\S/, {limit: 3})
    if (n) {
        const spaces = getSpaces(cm.getLine(n))
        cm.operation(() => {
            cm.setCursor(n, 1000)
            cm.replaceSelection(sn + spaces)
        })
    }

}

function exitBlock2(cm) {
    // let {line, spaces, mode, tabWidth} = cminfo(cm)

    const {upline, indentation, tabSize} = cmgetter(cm, 'UPLINE', 'INDENT', 'TABSIZE')
    if (indentation < tabSize) {
        return
    }

    spaces = spaces.slice(tabWidth)
    let exit = spaces + getBlockDelimiter(mode, false) + '\n' + spaces

    if (!exists(line)) {
        cmReplaceLine(cm, exit)
    } else {
        cm.operation(() => {
            cmCursor(cm, 'LINE-END')
            cm.replaceSelection('\n' + exit)
        })
    }
}



function cmAppendText(cm, content) {
    cm.replaceRange(content, cm.getCursor())
}


function cmReplaceLine(cm, content) {
    const pos = {line: cm.getCursor().line, ch: 0}
    cm.replaceRange(content, pos)
}


function getBlockDelimiter(mode, enter = true) {
    if (mode == 'javascript') 
        return enter ? ' {' : '}'
    if (mode == 'python') 
        return enter ? ':' : ''
}


function cminfo(cm) {
    const cursor = cm.getCursor()
    const mode = cm.getOption('mode') || 'javascript'
    const tabWidth = cm.getOption('tabWidth') || 4
    const line = cm.getLine(cursor.line)
    const spaces = line.match(/^ */)[0]
    return {
        tabWidth,
        spaces,
        mode,
        ch:         cursor.ch,
        lineNumber: cursor.line,
        line:       line,
    }
}


function divify(el, content, attrs) {
    if (attrs) el += ' '
    return '<' + el + attrs + '>' + content + '</' + el + '>'
}


function enterInsertMode(cm) {
    cm.state.tabCount = 0
    cm.state.lastWord = ''
    this.normalString = ''
    this.insertString = ''
    this.insertMode = true
    cm.setOption('disableInput', false)
}



// movement keys had the instant ability to override anything.
// 
// to pay a larger amount.
// to give an advantage to the next iteration.
// i have always wanted to work for a certain population setl( )
// i have always made mistakes at the very outset


function cmCursor(cm, fn, value = false) {
    if (!fn) return
    if (isObject(fn)) return cm.setCursor(fn)

    const {line, ch} = cm.getCursor()

    switch(fn) {
        case 'IS-START':
            return ch === 0

        case 'IS-END':
            return cm.getLine(line).length == ch

        case 'DOCUMENT-START':
            a = cm.firstLine()
            b = 0
            break

        case 'DOCUMENT-END':
            a = cm.lastLine()
            b = 1000
            break

        case 'LINE-START':
            a = line
            b = 0
            break

        case 'LINE-START-SMART':
            a = line
            b = cmgetter(cm, 'indent')
            break

        case 'LINE-END':
            a = line
            b = 1000
            break

        case 'UPLINE-START':
            a = line - 1
            b = 0
            break

        case 'UPLINE-END':
            a = line - 1
            b = 1000
            break

        default:
            if (isFunction(fn)) {
                const product = fn(ch, line)
                if (isArray(product)) {
                    [a,b] = product
                }
                else if (isObject(product)) {
                    a = product.line
                    b = product.ch
                }
            }
            else if (isNumber(fn)) {
               a = line
               b = fn
            }

            else if (isArray(fn)) {
               a = fn[0]
               b = fn[1]
            }
    }
    if (value) {
        return [a,b]
    }
    else {
        cm.setCursor(a,b)
    }
}

function cmCursorOLD(cm, fn) {
    const {line, ch} = cm.getCursor()
    cm.setCursor(Pos(line, isFunction(fn) ? fn(ch) : fn))
}


function cmEditWrapper(cm, styleObject = {'FontSize': 20}) {
    const el = cm.getWrapperElement()
    console.log( el.style )
    mergeInPlace(el.style, styleObject)
    console.log( el.style )
}

function cmAddTab(cm, n) {
        if (!isDefined(n)) n = cm.getOption('tabSize')
        cm.replaceSelection(toSpaces(n))
        cm.state.tabCount = 0
}
function cmTabCompletion(cm) {
    cm.state.tabCount += 1

    if (cm.state.tabCount == 1) {
        const match = this.insertString.trim()
        console.log( 'match', match )

        if (!match) {
            console.log( 'adding 4 spaces' )
            cmAddTab(cm, 4)
            return
        }

        const range = cm.findWordAt(cm.getCursor())
        const word = cm.getRange(range.anchor, range.head)
        console.red( word )

        if (word.startsWith('f')) {
            cm.state.snippetString = jspymap['js']['fsnippet'](word.slice(1))
            cmSnippetReplacement(cm, range, cm.state.snippetString)
        }
        else if (word in snippetmap) { // Snippet Expansion
            console.red( 'word in snippet map' )
            cm.state.snippetString = transformedsnippetmap[word]
            cmSnippetReplacement(cm, range, cm.state.snippetString)
            
        }
        else if (/^(?:\.\w+|div|p|section)/.test(match)) {
            const el = match.startsWith('.') ? 'div' : match
            const classTag = match.startsWith('.') ? match.slice(1) : ''
            const product = divify(el, '', classTag).replace(RegExp(el), el + ' ')
            this.insertString = product
            cm.operation(() => {
                cm.replaceRange(product, range.anchor, range.head)
                cmCursor(cm, range.anchor.ch + 2 + match.length)
            })
        }
        else {
            console.visible( match )
            console.log( 'adding 1 space' )
            cmAddTab(cm, 1)
        }
    }

    else if (cm.state.snippetString) {
        console.red( 'cm snippet str', cm.state.snippetString, cm.state.tabCount )
        const items = cm.state.snippetString.split(snippetDelimiter)
        const item = items[cm.state.tabCount - 1]
        console.log( items, item )
        let charIndex = item.length - item.search(/\n/) + cm.state.extraSnippetSpaces

        cmCursor(cm, (ch, line) => {
            if (item.includes('\n')) { // TODO
                return [line + 1, charIndex]
            }
            return ch + item.length
        })

        if (cm.state.tabCount > items.length - 1) {
            cm.state.tabCount = 0 
            cm.state.snippetString = ''
            this.insertString = ''
            console.log( 'finished at snippet tab completion' )
        }
    }

    // cm.replaceRange(product, Codemirror.Pos(lineNumber, -1 * match.length))
    // cm.replaceRange(product, ...cmRangeHelper4(0, -1 * match.length, 0, 0))
    // cm.setCursor({line: lineNumber, ch: ch - product.length})
}



function cmRangeHelper5(cm, a = 0, b = 0, c = 0, d = 0) {
    const {line, ch} = cm.getCursor()

    if (isFunction(b)) b = b(ch, cm.getLine(line).length)
    if (isFunction(d)) d = d(ch, cm.getLine(line).length)

    return [
        {line: line + a, ch: b},
        {line: line + c, ch: d}
    ]
}


function cmInitializeBuffers(cm, buffers, bufferIndex = 0) {
    cmInitializeState(cm, {
        buffers, 
        bufferIndex,
        tabCount: 0,
        lastWord: '',
        store: new Storage2({mode: String, fallback: 'today.txt'}),
        irm: {
            'js': {
                'foo': 'foobar',
            }
        }
    })
    cm.state.store.add('foo', 'it is set as a string, so only strings are permitted foooo!')
    cm.state.store.add('woo', 'it is set as a string, so only strings are permitted woo!')

    cm.state.buffers.forEach((buffer, i) => {
        const text = getStorage(buffer, '')
        cm.state[buffer] = CodeMirror.Doc(text, null)
    })

    const currentBuffer = getStorage('currentBuffer', DEFAULT_BUFFER) 
    cm.state.bufferIndex = cm.state.buffers.indexOf(currentBuffer)
    cmOpenBuffer(cm, currentBuffer)
}

function cmCursorToEnd(cm) {
    cm.setCursor({line: cm.lastline(), ch: 1000})
}


function cmOpenBuffer(cm, buffer) {
    cm.swapDoc(cm.state[buffer])
}


function cmToggleBuffer(cm) {
    if (!cm.hasFocus()) return
    const index = ++cm.state.bufferIndex % cm.state.buffers.length
    const buffer = cm.state.buffers[index]
    console.log( buffer , 'buffer name')
    cmOpenBuffer(cm, buffer)
    cmCursor(cm, 'DOCUMENT-END')
}


function cmInitializeState(cm, object) {
    mergeInPlace(cm.state, object)
}


function keyAHandler(cm, e) {
    if (this.insertMode) {
        return
    }

    if (e.shiftKey) {
        cmCursor(cm, 'LINE-END')
    }
    this.insertString = ''
    this.enterInsertMode(cm)
    e.preventDefault()
}


function keyIHandler(cm, e) {
    if (this.insertMode) {
        this.insertString += e.key
        return
    }

    if (e.shiftKey) {
        cmCursor(cm, 'LINE-START-SMART')
    }
    this.insertString = ''
    this.enterInsertMode(cm)
    e.preventDefault()
}

function previewItems() {

}



function cmGrab(cm, arg) {
    const [indentation, data] = cmgetter(cm, 'INDENT', 'LINE')
}


function cmEditor(cm, mode) {
    console.log( 'hi from cmeditor' )

    const [indentation, data] = cmgetter(cm, 'INDENT', 'LINE')
    console.log( indentation, data, 'from cm editor' )

    let s = ''
    let rangeMode = 'LINE-START-TO-LINE-END'
    const start = jspymap['js']['const']

    switch(mode) {
        case 'DICT-OBJ': 
        case 'DICT-LINE': 
            s = sliceEditFactory(dobjParser, 'EQUALS', start)(data, mode)
            break
        case 'GRAB-REGEX':
        case 'GRAB-QUOTE':
            s = search(/\/.+?\/|(?<=\()[\'\"].*?(?<!\\)[\']/, data)
            break
        case 'GRAB-REGEX':
            s = search(/\/.+?\/|(?<=\()[\'\"].*?(?<!\\)[\']/, data)
            break
    }
    if (!s) {
        console.red( 'NO MATCH at cmEditor for dobjparse')
        return 
    }
    s = indent(s + sn, indentation)
    cmReplaceRange(cm, s, rangeMode)
}


function cmRangeGetter(cm, mode) {
    const line = cmgetter(cm, 'LINE-NUMBER')
    function runner(mode) {
        switch(mode) {
            case 'DOCUMENT':
                return [0, 0, cm.lastLine(), 1000]
            case 'LINE-START-TO-LINE-END': 
                return [line, 0, line, 1000]
            case 'LINE-SMART-TO-END':
                return [line, cmgetter(cm, 'INDENT'), line, 1000]
        }
    }
    const r = runner(mode)
    return [Pos(r[0], r[1]), Pos(r[2], r[3])]
}

function cmReplaceRange(cm, content, mode) {
    cm.operation(() => {
        cm.replaceRange(content, ...cmRangeGetter(cm, mode))
        cm.scrollIntoView()
    })
}

function changeIt() {
	if (!document.styleSheets) return;
    console.log( stringify(document.styleSheets ))
    const sheet = document.styleSheets[1]
    console.log( stringify(sheet) )
	var rules = new Array();
	if (sheet.cssRules)
		rules = sheet.cssRules
	else if (sheet.rules)
		rules = sheet.rules
	else return;
    console.log( rules )
	rules[rules.length-1].style.backgroundColor = '#EEF0F5';
}
// fn split has implicit trim

function focusHandler(e) {
    this.codemirror.focus()
    this.returnTime = e.timeStamp
    const delta = Math.floor((this.returnTime - this.leaveTime) / 1000)
    if (delta > 1000) {
        console.log( 'whoa uve been gone for quite awhile' )
        console.log( 'Delta: ', delta )
        // perhaps I have been a bit cavalier.
        // 340 -> 560 
        // 120 -> 460
        // 

        

    }
}


function blurHandler(e) {
    this.escapeKeyHandler(this.codemirror)
    this.leaveTime = e.timeStamp
}

function cmSubmitter(cm, tag = null) {
    const text = cm.getValue()
    if (!tag) tag = getPartitionTag(text) || 'foo'
    cm.state.store.add(tag, text)
}


function getPartitionTag(s) {
    return search('^' + Regex2(packmap3), s.trim())
}


function cmSetget(cm, parser) {
    this.codemirror.setValue(parser(cm.getValue()))
}

function buttonHandlers(key, name) {

    if (key == 'create') {
        this.createAction(key, name)
    }
    else if (key == 'generate') {
        console.log( 'stil in progress', name )
    }

}

function buttonHandler2(name) {
    console.log( 'clicking from button', name )
}


// an infinite ... void.
// i didnt expect it to be this high.
// next time, be more careful.
// To completely lack social and plitical power ... is ... incredible. 
// using too many resources
// I use many resources ... lol. It was an unique occurence. 
// At the end of the day, money solves everything. 
// Perhaps the key is peak heak. 
/* 
A: 
    I will pay $150 extra for electricity bill. 

B:
    I would like to call Con Edison for 3 reasons:

        1. Obtain your account information.
        With this information, will be able to online:
        See every hour, and every day, how much is used.


        2. Ask them to lower the bill. This building is classified as "commercial." However, currently, there is no commercial business in the business. Commerical has higher electricity rate than residential. It is very possible they will lower the bill for this month or next month.

        In order to do (1) and (2), Con Edison will ask you to verify that you are the account holder.

C:
    300 dollar electricity bill is extremely not normal.

    I use a lot of electricity. True. In the past, I live at Fort Hamilton 55th St. 7 people. We all use heater. Maximum electricity bill is 273 dollars.

    Why is it this high?
    
D:
    Next Month.

    dont be hasty.







*/


// A pretty big mistake I made.
// Consolidate all of the facts. And do things straight up. 


function getElement(id, mode) {
    const element = document.getElementById(id)
    console.log( element.outerHTML )
    try {
        if (mode) {
            this.displayString = stringify(element[mode])
        }
        else {
            this.displayString = stringify(element)
        }
    }
    catch(e) {
        console.log( e )
        console.log( element )
    }
}




// She made smart decisions with regards to not giving a quick answer. 
// To have had freedom, and then to have had this uncomfortable feeling. Similar to letting down Robin. 


// u dont always know how smart someone is until you interact with them. 
// 
// when i make mistakes...

// she is smart in her own way.
// she is easily taken advantage of?
// it wasn't my intention to do this 
// 
// 
// it's not impossible. 
// 
// trigger the change at the end of the sentence. Upon the enter mark. It feels like my keyboard is slowly breaking apart. 

// The feeling that something is ... askew.
// Accurate data is necessary to make informed decisions.


// no amount of money is enough to satisfy ... certain things. 
