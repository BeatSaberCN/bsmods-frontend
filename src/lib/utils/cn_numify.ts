export function cn_numify(i:number):string{
    if(i < 1000){
        return i.toString()
    }
    if(i < 10000){
        if(i % 1000 < 100){
            return Math.floor(i / 1000) + "千"
        }
        return Math.floor(i/1000) + "." + Math.floor((i%1000) / 100) + "千"
    }
    if(i < 10000*100){
        if(i % 10000 < 1000){
            return Math.floor(i / 10000) + "万"
        }
        return Math.floor(i/10000) + "." + Math.floor((i%10000) / 1000) + "万"
    }

    if(i % 1000000 < 100000){
        return Math.floor(i / 1000000) + "百万"
    }
    return Math.floor(i/1000000) + "." + Math.floor((i%1000000) / 100000) + "百万"
}