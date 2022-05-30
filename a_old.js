console.log('%cBạn biết ko?\nCó mấy đứa trẻ trâu hay thích mở cái này ra...','color: red;font-size: xx-large')
import devtools from './b.js';
        var opened=0
        if (devtools.isOpen){
            console.log('%cHình như bạn cũng đang mở nó thì phải?🤔','color: lime')
            opened=1
        }
        window.addEventListener('devtoolschange', event => {
            if (event.detail.isOpen){
                if (opened){
                    console.log('%cĐấy, lại mở ra nữa rồi ;-;','color: green')
                }
                else{
                    console.log('%cHình như bạn cũng đang mở nó thì phải?🤔','color: lime')
                    opened=1
                }
            }
            else{
                console.log('Biết đóng vào là tốt!')
            }
        });