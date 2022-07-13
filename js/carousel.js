
(function(){
    var carousel_list = document.getElementById('carousel_list');
    var left_btn = document.getElementById('left_btn');
    var right_btn = document.getElementById('right_btn');


    // 克隆第一张li
    var clone_li = carousel_list.firstElementChild.cloneNode(true);
    // 上树
    carousel_list.appendChild(clone_li);

    var idx = 0;

    // 右按钮监听
    right_btn.onclick = function() {
        carousel_list.style.transition = 'transform .5s ease 0s';
        idx++;
        carousel_list.style.transform = 'translateX(' + -16.66 * idx + '%)';

        if (idx > 4) {
            setTimeout(function() {
                // 去掉过度
                carousel_list.style.transition = 'none';
                // 删除transform属性
                carousel_list.style.transform = 'none';
                // 全局图片序号变为0
                idx = 0;
            },500)
        }
    };

    // 左按钮事件监听
    left_btn.onclick = function() {
        if (idx == 0) {
            carousel_list.style.transition = 'none';
            carousel_list.style.transform = 'translateX(' + -16.66 * 5 + '%)';
            idx = 4;

            setTimeout(function(){
                carousel_list.style.transition = 'transform .5s ease 0s';
                carousel_list.style.transform = 'translateX(' + -16.66 * 4 + '%)';
            },0);
        } else {
            idx--;
            carousel_list.style.transform = 'translateX(' + -16.66 * idx + '%)';
        }
    }

})();