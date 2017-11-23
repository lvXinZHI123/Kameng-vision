/**
 * Created by Administrator on 2017/8/13 0013.
 */
$(function () {
    var width = 522;
    var x1 = 0,x3 = 0;
    $('.right').click(function () {
        $('.left').css('display','block');
        x3++;//走的次数
        var x = parseInt(document.body.clientWidth);//可视区域的宽
        var x2 = parseInt(width/x);//一共能走几屏
        x1 += x;
        if(x3 < x2){
            document.getElementsByClassName('work')[0].style.left = -1 * x1 + 'px';
        }else if(x3 = x2){
            var y = width - x3 * x;
            document.getElementsByClassName('work')[0].style.left = -1 * (y + (x3-1) * x) - 68  + 'px';
            $('.right').css('display','none');
        }
    });
    $('.left').click(function () {
        $('.right').css('display','block');
        x3++;//走的次数
        var x = parseInt(document.body.clientWidth);//可视区域的宽
        var x2 = parseInt(width/x);//一共能走几屏
        x1 -= x;
        if(x3 < x2){
            document.getElementsByClassName('work')[0].style.left = -1 * x1 + 'px';
        }else if(x3 = x2){
            var y = width - x3 * x;
            document.getElementsByClassName('work')[0].style.left = -1 * (y + (x3-1) * x)  + 'px';
            $('.left').css('display','none');
        }
    })
});