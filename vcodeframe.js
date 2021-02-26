// class Vue {static component() {}}

Vue.component('codeframe', {
    template: '<iframe style="border: 10px solid blue; width: 100%; height: 100%;"></iframe>',
    props: ['computedHtml', 'mountCount'],
    watch: {
        computedHtml: {
            handler: 'writestuff',
        }
    },
    data() {
        return {
            status: true,
            scriptString,
        }
    },
    mounted() {
      console.red('mounted - mountcount: ' +  this.mountCount )
      // this.writestuff()
    },
    methods: { 
        writestuff() { 
            const iframe = this.$el.contentWindow
            iframe.document.open()

            iframe.addEventListener('error', (e) => {
                console.log( e )
                this.status = false
            })

            iframe.addEventListener('load', (e) => {
                console.announce('iframe has been loaded')
                setTimeout(() => iframe.focus(), 100)
            })

            const listener = (e) => {
              console.log( 'keydown', e.key )
              if (e.key == 'Enter') {
                 iframe.removeEventListener('keydown', listener)
                 this.$emit('close')
              }
            }

            iframe.addEventListener('keydown', listener)
            iframe.document.writeln(this.computedHtml)
            iframe.document.close()
        }
    },
})
