export function formatDateTime(time_stamp) {
    var mesc = ''
    if (parseInt(time_stamp) > 3000000000) {
        mesc = time_stamp.slice(-3)
        time_stamp = time_stamp.substring(10, 0)
    }

    time_stamp = parseInt(time_stamp)
    var new_date = new Date()
    var offset_ = new_date.getTimezoneOffset() / 60 + 8
    var utc = new Date(new_date.getTime() + (new_date.getTimezoneOffset() * 60000))
    utc.setTime(time_stamp * 1000 + offset_ * 3600000)
    var date = (utc.getFullYear()) + "-" + (buling(utc.getMonth() + 1)) + "-" + (buling(utc.getDate())) + " " + (buling(utc.getHours())) + ":" + (buling(utc.getMinutes())) + ":" + (buling(utc.getSeconds()));
    if (time_stamp > 0) {
        if (mesc) {
            return date + '.' + mesc
        } else {
            return date
        }
    } else {
        return '-'
    }

}


function buling(num) {
    return num < 10 ? '0' + num : num;
}

/*
** randomWord 产生任意长度随机字母数字组合
** randomFlag-是否任意长度 min-任意长度最小位[固定位数] max-任意长度最大位
** xuanfeng 2014-08-28
*/

export function randomWord(randomFlag, min, max){
    let str = "",
        range = min,
        arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    // 随机产生
    if(randomFlag){
        range = Math.round(Math.random() * (max-min)) + min;
    }
    for(let i=0; i<range; i++){
        let pos = Math.round(Math.random() * (arr.length-1));
        str += arr[pos];
    }
    return str;
}
