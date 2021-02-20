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

function gvfn(fn, ...args) {
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
