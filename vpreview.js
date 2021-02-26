function keyAction(enter, exit, space) {
    if (e.key == 'Enter') {
        enter.call(this)
    }

    else if (e.key == 'Escape') {
        exit.call(this)
    }

    else if (e.key == 'Space') {
        space.call(this)
    }
}
function enterKeyActivation(e) {
    console.log( 'keyup actionvation from vpreview component' )
    if (e.key == 'Enter') {
        this.index += 1
        if (this.index == this.items.length) this.index = 0
    }

    else if (e.key == 'Escape') {
        this.$emit('close', this.index) 
    }
}

// class Vue {static component() {}}

Vue.component('preview', {
    template: '<section style="border: 10px solid blue; width: 100%; height: 100%;"><div :key="currentItem">{{currentItem}}</div></section>',
    props: ['items', 'mountCount'],
    watch: {
    },
    data() {
        return {
            index: 0,
        }
    },
    mounted() {
      this.$el.addEventListener('keyup', enterKeyActivation)
      console.red('mounted - mountcount: ' +  this.mountCount )
    },
    computed: {
        currentItem() {
            console.log( 'changing currentitem' )
            return this.items[this.index]
        }
    },
    methods: { 
        enterKeyActivation
    },
})
