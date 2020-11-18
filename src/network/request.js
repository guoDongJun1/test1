import axios from 'axios'

// export function request(config,success,failure) {
//     const instance=axios.create({
//         baseURL:'http://127.0.0.1:8000',
//         timeout:5000
//     })
//     instance(config)
//         .then(res=>success(res))
//         .catch(err=>failure(err))
// }

export function request(config) {
    const instance=axios.create({
        baseURL:'http://127.0.0.1:8000',
        timeout:5000
    })

    // 拦截器
    // 作用：1、某些服务器获取到的信息不符合需求，可以在这里做一些更改
    instance.interceptors.request.use(config=>{
        // console.log(config)
        return config
    },
        error => {
        // console.log(error)
        })

    // 响应拦截
    instance.interceptors.response.use(res=>{
        // console.log(res)
        return res.data
    },
        error => {
        // console.log(error)
        })

    return instance(config)
}
