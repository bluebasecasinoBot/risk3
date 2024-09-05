import { __sS } from './sydneyLib/sydneyDom.js'

__sS([
    {
        nameTag:'container',
        style:{
            height:'100vh',
            width:'100vw',
            overflow:'hidden'
        }
    },
    {
        nameTag:'3d_container',
        style:{
            height:'100vh',
            width:'100vw',
            position:'relative',
            background:'#171717',
            perspective:'300px'
        }
    },
    {
        nameTag:'entryPage',
        style:{
            height:'100%',
            width:'100%',
            display:'flex',//flex
            justifyContent:'center',
            alignItems:'center',
            position:'absolute',
            top:'50%',
            left:'50%',
            transform:'translate(-50% , -50%)',
            transformStyle:'preserve-3d',
            perspectiveOrigin:'50% 50%'
        }
    },
    {
        nameTag:'mainPage',
        style:{
            height:'100%',
            width:'100%',
            display:'flex',//flex
            justifyContent:'center',
            alignItems:'center',
            position:'absolute',
            // top:'50%',
            // left:'50%',
            // transform:'translate(-50% , -50%)',
            transformStyle:'preserve-3d',
            perspectiveOrigin:'50% 50%',
            // background:'green'
        }
    },
    {
        nameTag:'entry_floor',
        style:{
            height:'150%',
            width:'200%',
            backgroundImage:'radial-gradient(ellipse , rgba(51, 51, 51, 0.6) , #171717 50%) , url("./floor.jpg")',
            position:'absolute',
            top:'25%',
            left:'50%'
        }
    }
])

__sS([
    {
        nameTag:'sides_b',
        style:{
            position:'absolute',
            top:'0',
            left:'0',
            height:'100%',
            width:'100%',
            background:'#000',//'linear-gradient(to top right , #3e3f46 , #2e3133 70%)',//#0f0f0f
            boxShadow:`0 0 5px #48e7f9`,
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            border:'0.1px solid #48e7f9',
            fontWeight:'900',
            fontSize:'25px',
            fontFamily:'tahoma ,sans serif',
            // textShadow:'0 0 30px #fff',
            color:'#01afc2'//#012f73 , #0252a1
            // boxShadow:'0 0 5px #08f7d8'
        }
    },

    {
        nameTag:'main_sides_b',
        style:{
            position:'absolute',
            top:'0',
            left:'0',
            height:'100%',
            width:'100%',
            background:'#B1B1B1',
            boxShadow:`0 0 5px #31303091 inset`,
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            // boxShadow:'0 0 5px #08f7d8'
        }
    },

    {
        nameTag:'pole_sides_b',
        style:{
            position:'absolute',
            top:'0',
            left:'50%',
            height:'100%',
            width:'100%',
            background:'#B1B1B1',
            boxShadow:`0 0 5px #31303091 inset`,
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            // boxShadow:'0 0 5px #08f7d8'
        }
    }
])