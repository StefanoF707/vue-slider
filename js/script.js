let app = new Vue (
    {
        el: "#root",
        created: function() {
            this.autoPlay = setInterval( () => {
                this.nextImg();
            }, 1500 );
        },
        data: {
            indexArray: 0,
            images: [
                "img/cava-bauxite.jpg",
                "img/iceland.jpg",
                "img/japan.jpg",
                "img/smLeuca.jpg",
                "img/norway.jpg",
                "img/times-square.jpg",
            ],
            autoPlay: "",
        },
        methods: {
            prevImg: function () {
                this.indexArray--;

                if(this.indexArray < 0) {
                    this.indexArray = this.images.length - 1;
                }

            },
            clickPrev: function() {
                clearInterval(this.autoPlay);
                this.prevImg();
            },
            nextImg: function () {
                this.indexArray++;

                if(this.indexArray == this.images.length) {
                    this.indexArray = 0;
                }

            },
            clickNext: function() {
                clearInterval(this.autoPlay);
                this.nextImg();
            },
            switchClass: function(index) {
                this.indexArray = index;
            },
            clickIcon: function(index) {
                clearInterval(this.autoPlay);
                this.switchClass(index);
            },
            restartAutoplay: function() {
                this.autoPlay = setInterval( () => {
                    this.nextImg();
                }, 2000 );
            }
        }
    }
);
