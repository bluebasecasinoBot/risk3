import { __SYD, __c, __g, __p, __sC, __u, __v } from "./sydneyLib/sydneyDom.js";

const words = [
    ['R','I','C','H'],
    ['R','I','S','K'],
]


__SYD.entryPage = () =>{
    return __c(
        'div',
        {
            style:__sC['entryPage']({method:'add' , style:{backgroundColor:'rgba(0,0,0,.9)',zIndex:__p(['threeDContainer','current'],true) ? '200' : '100',display:__p(['threeDContainer','current'],true) ? 'flex' : 'none'}}),
            // onmousedown:'btn_down(e)',
            // onmouseup:'btn_up()',
            // onmousemove:'btn_move()',
        },
        [
            __c(
                'div',
                {
                    style:'display:flex;justify-content:center;align-items:center;height:fit-content;width:fit-content;position:absolute;top:50%;left:50%;transform-style:preserve-3d;column-gap:5px;',
                    class:"btn_parent"
                },
                [
                    __SYD.threeDButton({type:0 , animateEnd:[2,3]}),
                    __SYD.threeDButton({type:1 , animateEnd:[2,3]}),
                    __SYD.threeDButton({type:2 , animateEnd:[2,3]}),
                    __SYD.threeDButton({type:3 , animateEnd:[2,3]}),
                ]
            ),
            __c(
                'div',
                {
                    style:"height:70px;width:150px;padding:15px;border:5px double #48e7f9;border-radius:15px;color:#fff;font-size:30px;position:absolute;bottom:30px;left:50%;transform:translateX(-50%);cursor:pointer;box-shadow:0 0 2px #48e7f9;font-family:tahoma , sans serif;font-weight:700;letter-spacing:3px;",
                    class:'enter_btn'
                },
                [
                    // __c('p',{},[])
                ],
                {
                    events:{
                        onclick:() =>{
                            const state = __g('threeDContainer');
                            state.current = false;
                            __u('threeDContainer' , {type:"a" , value:state});
                            __v['main_video'].loop = true;
        
                                // __v['main_video'].src = './memeVideo.mp4'
                            const interval = setInterval(() =>{
                                if(__v['main_video'].paused === true)
                                    {
                                        console.log('playing')
                                        __v['main_video'].play();
                                        __v['aux_video1'].src = './vid2.mp4'
                                        __v['aux_video2'].src = './vid3.mp4'

                                        __v['aux_video1'].volume = 0;
                                        __v['aux_video2'].volume = 0;
                                    }else{
                                        clearInterval(interval)
                                    }
                            },500)
        
                        }
                    }
                }
            )
            // __SYD.entry_floor()
        ],
        {
            events:{
                // onmousedown:entryPage_down,
                // onmousemove:entryPage_move,
                // onmouseup:entryPage_up,
                // ontouchstart:entryPage_down_t,
                // ontouchmove:entryPage_move_t,
                // ontouchend:entryPage_up_t
            }
        }
    )
}

__SYD.entry_floor = () =>{
    return __c(
        'div',
        {
            style:__sC['entry_floor'](),
            class:'entry_floor'
        },
        [
            
        ]
    )
}

__SYD.threeDButton = ({type , animateEnd}) =>{
    return __c(
        'div',
        {//__p(['threeDButton','mouseDown'],'100px')
            style:`height:50px;width:50px;transform-style:preserve-3d;cursor:pointer;transition:transform linear 1s;`,
            class:  `button_D ${animateEnd.includes(type) ? 'animateEndButton' : ''}`,
        },
        [
            __SYD.button_top(type),
            __SYD.button_bottom(),
            __SYD.button_front(type),
            __SYD.button_back(type),
            __SYD.button_left(type),
            __SYD.button_right(),
            __SYD.button_shadow()
        ],
        {
            createState:{
                stateName:'threeDButton',
                state:{z_trans:false , rotateY:0 , mouseDown:'0px'}
            },
            events:{
                // onmousedown:() =>{
                //     const state = __g('threeDButton')
                //     state.mouseDown = '-120px'
                //     __u('threeDButton' , {type:'a' , value:state})
                // },
                // onmouseup:() =>{
                //     const state = __g('threeDButton')
                //     state.mouseDown = '0px'
                //     __u('threeDButton' , {type:'a' , value:state})
                // },

                // ontouchstart:() =>{
                //     const state = __g('threeDButton')
                //     state.mouseDown = '-120px'
                //     __u('threeDButton' , {type:'a' , value:state})
                // },
                // ontouchend:() =>{
                //     const state = __g('threeDButton')
                //     state.mouseDown = '0px'
                //     __u('threeDButton' , {type:'a' , value:state})
                // },
            }
        }
    )
}

__SYD.button_top = (parentNum) =>{
    return __c(
        'div',
        {
            style:__sC['sides_b']({method:'add',style:{background:'#000'}}),
            class:'top_cover btn_plates'
        },
        [
            words[0][parentNum]
        ]
    )
}

__SYD.button_bottom = () =>{
    return __c(
        'div',
        {
            style:__sC['sides_b'](),
            class:'bottom_cover btn_plates'
        }
    )
}

__SYD.button_front = (parentNum) =>{
    return __c(
        'div',
        {
            style:__sC['sides_b']({method:'add',style:{background:'#000'}}),
            class:'front_cover btn_plates'
        },[
            __c('p',{style:''},[`${words[1][parentNum]}`])
        ]
    )
}


__SYD.button_back = (parentNum) =>{
    return __c(
        'div',
        {
            style:__sC['sides_b']({method:'add',style:{}}),
            class:'back_cover btn_plates'
        },
        [
            words[1][parentNum]
        ]
    )
}

__SYD.button_left = (parentNum) =>{
    return __c(
        'div',
        {
            style:__sC['sides_b']({method:'add',style:{height:'50px',width:'50px'}}),
            class:'left_cover btn_plates'
        },[
            __c('p',{style:''},[`${words[1][parentNum]}`])
        ]
    )
}

__SYD.button_right = () =>{
    return __c(
        'div',
        {
            style:__sC['sides_b']({method:'add',style:{height:'50px',width:'50px' , right:'0' , left:'unset'}}),
            class:'right_cover btn_plates'
        },[
            __c('p',{style:'text-shadow:0 0 15px #fff'},[`${words[1][0]}`])
        ]
    )
}

__SYD.button_shadow = () =>{
    return __c(
        'div',
        {
            style:__sC['sides_b']([{method:'add' , style:{transform:`translate( 0 , 100%) rotateX(90deg) scale(1)`,transition:'transform ease 2s',background:'#0a0a0a8a' , opacity:'.6'}},{method:'remove' , style:['height' , 'width' , ,'border','boxShadow']}]),
            class:'button_shadow'
        }
    )
}

window.onload = () =>{
    // setInterval(() => {
    //     const button_state = __g('threeDButton');
    //     button_state.z_trans = button_state.z_trans === false ? true : false;
    //     __u('threeDButton' , {type:'a' , value:button_state})
    // }, 1000);

    console.log(visualViewport)
}
