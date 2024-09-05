import { __SYD, __c, __m, __sC , __p , __v} from './sydneyLib/sydneyDom.js'

__SYD.mainPage = () =>{
    return __c(
        'div',
        {
            style:__sC['mainPage']([{method:'add' , style:{minWidth:'1000px',maxWidth:'1000px',flexDirection:'column' ,justifyContent:'flex-start' ,perspective:'900px' , zIndex:__p(['threeDContainer','current'],true) ? '100' : '200' , opacity:__p(['threeDContainer','current'],true) ? '1' : '1'}},{method:'remove' , style:['transformStyle','background']}]),
            class:'city_page'
        },
        [
            __SYD.bgImage(),
            __SYD.mainBuilding(),
            __SYD.board_pole(),
            __SYD.vidPageComp2(),
            __SYD.vidPageComp3()
        ],
        {
            genericStyle:['bg_cover']
        }
    )
}

__SYD.bgImage = () =>{
    return __c(
        'div',
        {
            style:`position:absolute;top:0;left:0;height:100%;width:100vw;background-position:left top;background-image:url("./building.jpg");background-size:calc(1920px * 1) ${__p(['container','scale'],false) ? '120%' : '100%'};`
        }
    )
}

__SYD.mainBuilding = () =>{
    return __c(
        'div',//calc(80% - 20px)
        {//-70px
            style:`min-height:${__p(['container','scale'],false) ? '1200px' : '900px'};width:${__p(['container','scale'],false) ? '150%' : '120%'};min-width:600px;max-width:${__p(['container','scale'],false) ? '1500px' : '1300px'};position:absolute;bottom:350px;left:-800px;transform:translateZ(-2400px) translate(-35% , ${__p(['container','scale'],false) ? '350px' : '-10px'}) rotateY(60deg);transform-style:preserve-3d;perspective-origin:50% 50%;background:unset;z-index:400;`,
            class:'mainBuild'
        },
        [
            // __SYD.main_top(),
            __SYD.main_bottom(),
            __SYD.main_front(),
            // __SYD.main_back(),
            __SYD.main_left(),
            // __SYD.main_right(),
        ]
    )
}

__SYD.main_top = () =>{
    return __c(
        'div',{
            style:__sC['main_sides_b']({method:'add' , style:{height:'100px'}}),
            class:'main_top'
        }
    )
}

__SYD.main_bottom = () =>{
    return __c(
        'div',{
            style:__sC['main_sides_b']({method:'add' , style:{height:'100px',bottom:'0',top:'unset'}}),
            class:'main_bottom'
        }
    )
}

__SYD.main_front = () =>{
    return __c(
        'div',//linear-gradient(to top right  , #3e3f46 30% , #3e3f46 70%)
        {
            style:__sC['main_sides_b']([{method:'add',style:{backgroundSize:'100% 100%'}},{method:'remove',style:['background']}]) + '-webkit-filter:brightness(1);',
            class:'main_front'
        },
        [
            __c(
                'div',
                {
                    style:'height:calc(100% - 80px);width:calc(100% - 90px);z-index:500;overflow:hidden;display:flex;justify-content:center;align-items:center;',
                },[
                    __c(
                        'div',
                        {
                            style:'height:50px;width:50px;z-index:400;background-image:url("./pause.png");position:absolute;top:5px;left:5px;',
                            // class:'thin_border'
                        },
                        [
        
                        ],
                        {
                            events:{
                                onclick:(e) =>{
                                    e.target.style.backgroundImage = __v['main_video'].paused  ? 'url("./pause.png")' : 'url("./play.png")';
                                    __v['main_video'].paused ? __v['main_video'].play() : __v['main_video'].pause();
        
                                }
                            },
                            genericStyle:['bg_fit']
                        }
                    ),
                    __c(
                        'video',
                        {
                            style:'width:70%;max-width:70%;height:auto;z-index:500',//height:calc(100% - 80px);
                            autoplay:true,preload:'auto' , playsinline:true
                        },
                        [
                            __c('source',{src:'./memeVideo.mp4'},[],{type:'vid_src'})
                        ],
                        {
                            events:{
                                onclick:(e) =>{
                                    e.target.play()
                                }
                            },
                            type:'main_video'
                        }
                    )
                ]
            ),
        ]
    )
}

__SYD.main_back = () =>{
    return __c(
        'div',
        {
            style:__sC['main_sides_b']({method:'add',style:{borderLeft:'5px solid #333' ,background:'linear-gradient(to top right  , #3e3f46 30% , #3e3f46 70%)'}}),
            class:'main_back'
        },
        [
            
        ]
    )
}

__SYD.main_left = () =>{
    return __c(
        'div',
        {//#0e162d , #cbfcf6
            style:__sC['main_sides_b']({method:'add',style:{width:'100px',background:"linear-gradient(to top right , #0e162d , #64acf3 200%)"}}),
            class:'main_left'
        },
        [
        ]
    )//boxShadow:`30px 3px  70px #555555bd inset ,
                 //-30px 3px 40px #8888887a inset , -50px 3px 15px #fff inset;`
}

__SYD.main_right = () =>{
    return __c(
        'div',
        {
            style:__sC['main_sides_b']({method:'add',style:{width:'100px' , left:'unset' , right:'0' , backgroundSize:'100% 100%' , boxShadow:`30px 3px  70px #555555 inset ,
                -30px 3px 40px #888888 inset , -50px 3px 15px #fff inset;`}}),
            class:'main_right'
        },
        [
        
        ]
    )
}

__SYD.memeIcon = () =>{
    return __c(
        'div',
        {
            style:`height:450px;width:180px;position:fixed;bottom:0px;left:200px;z-index:700;display:${__p(['threeDContainer','current'],true) ? 'none' : 'block'};background-position:center;background-size:100%;background-repeat:no-repeat;background-image:url("./logo.png")`
        }
    )
}


__SYD.vidPageComp2 = () =>{
    return __c(
        'div',
        {
            style:`position:absolute;top:${__p(['container','scale'],false) ? '105px' : '25px'};left:1315px;height:150px;width:230px;background:green;transform:translateZ(-500px) rotateZ(-2deg);transition:all linear .3s;box-shadow:0 0 30px rgba(172, 236, 255, 0.333);`
        },
        [
            __c(
                'div',
                {
                    style:'height:calc(100%);width:calc(100%);z-index:500;overflow:hidden;display:flex;justify-content:center;align-items:center;',
                    class:'auxVideos'
                },
                [
                    __c(
                        'video',
                        {
                            style:'width:100%;height:auto;z-index:500',//height:calc(100% - 80px);
                            playsinline:true , muted:true
                        },
                        [
                            __c('source',{src:'./vid2.mp4'},[],{type:'vid_src'})
                        ],
                        {
                            events:{
                                onloadeddata:(e) =>{
                                    e.target.play();
                                    e.target.volume = 0;
                                },
                                onpause:(e) =>{
                                    e.target.play()
                                }
                            },
                            type:'aux_video1'
                        }
                    )
                ]
            )
        ]
    )
}

__SYD.vidPageComp3 = () =>{
    return __c(
        'div',
        {
            style:`position:absolute;top:${__p(['container','scale'],false) ? '45px' : '-5px'};right:-1435px;height:${__p(['container','scale'],false) ? '240px' : '200px'};width:135px;transform:rotateY(-2deg) translateZ(-500px) rotateZ(-2deg) skewY(-20deg);background:green;`
        },
        [
            __c(
                'div',
                {
                    style:'height:calc(100%);width:calc(100%);z-index:500;overflow:hidden;display:flex;justify-content:center;align-items:center;padding:0 5px;',
                    class:'auxVideos2'
                },
                [
                    __c(
                        'video',
                        {
                            style:'width:auto;height:100%;z-index:500',//height:calc(100% - 80px);
                            playsinline:true , muted:true
                        },
                        [
                            __c('source',{src:'./vid3.mp4' , autoplay:true},[],{type:'vid_src'})
                        ],
                        {
                            events:{
                                onloadeddata:(e) =>{
                                    e.target.play();
                                    e.target.volume = 0;
                                },

                                onpause:(e) =>{
                                    e.target.play()
                                }
                            },
                            type:'aux_video2'
                        }
                    )
                ]
            )
        ]
    )
}
