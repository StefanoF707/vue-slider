let app = new Vue (
    {
        el: "#root",
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
        },
        methods: {
            prevImg: function () {
                this.indexArray--;

                if(this.indexArray < 0) {
                    this.indexArray = this.images.length - 1;
                }

            },
            nextImg: function () {
                this.indexArray++;

                if(this.indexArray == this.images.length) {
                    this.indexArray = 0;
                }

            },
            switchClass: function(index) {
                this.indexArray = index;
            }
        }
    }
);
