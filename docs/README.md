---
home: true
sideBar: true
heroImage: /imgs/logo.png
actionText: 开始 →
actionLink: /Note/
features:
- title: 📒笔记
  details: 学而不思则罔，思而不学则殆。
- title: 📚备忘
  details: 好记性不如烂键盘。
- title: 🧰工具
  details: 工欲善其事，必先利其器。
---

<style>
.icons {
    width: 100%;
    margin: 3rem auto 0;
    text-align: center;
    font-size: 14px;
}
.iconfont {
    display: inline-block;
    width: 1.6rem;
    height: 1.6rem;
    font-size: 1.3rem;
    position: relative;
    margin: 0 5px; 
    opacity: 0.8;
    transition: ease all 300ms;
}
.iconfont:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}
.iconfont:hover {
    opacity: 1;
    text-decoration: underline;
    transition: ease all 300ms;
}
.icon-youjian:before {
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYEAYAAACw5+G7AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAA9RJREFUWMPtl01IG1sYht9zjiS4iC4kFlurVENqqS4rxZiipCK2WrEYRLBQJYiKuoibGiGCBWN1Z3XVhQSyG1MjtOLGH1TUqlEsItYqgnURGqu1UMzPzJwu0lyhoeTe6lUoPqthDme+9/nmzJkZ4JJLTgWJMkyM5cZyY/n165JVskrWmJjzCsY6WAfrEEVhUBgUBj99Cp3lPKpAqaPUUerIyqLH9Jgej45iBCMYuXr1vIL/Cu/n/bzf42HDbJgNP3jgrHfWO+tXVsLjNHwQ6rRCoXApXArXhw+km3STbrsdZShDWaT5eUHSSBpJczgSlhOWE5bX1sI5IwQCnoAn4NFoxB1xR9x588av9Wv92p4eskk2yWZVFe/knbzT5/vfE+ugg87vD9V7+tSX7Ev2JT9/7hW8glcYGgqKQTEoZmVFCKAOdahjDClIQUpBgaJL0aXoWljgQ3yID62ssEk2ySZzcqCHHvrwmjxDalCDmv19jGIUo4WFNEiDNDg9rZxWTiunZ2eRj3zkP3yIQhSikLFIgV+xwgqrRoMiFKHo3TspT8qT8q5dk7KlbCn77l0sYAELi4unzR3q9Pv3crFcLBffuUMySSbJFEXextt429wcaSANpOH27d/Np1ErbGMb2yoVaSJNpMnlYkEWZMEnT+L24vbi9u7dQyUqUelw/OfkE5jAxNu3/hJ/ib9Er6f7dJ/u37/P5/k8nx8fRwxiEJOYGO0y0QXCqKCCijH0ohe9XV1HB0cHRwcvX/osPovPYjKhGc1ofvaM27md22U5Yv7PzYAP8AE+8OKF2qg2qo1lZcol5ZJyyWJBLWpR++oVkpCEpJOHNBp/vK8TEzERk8mkXFeuK9dv3YIFFlgeP4YZZpi3tuCAAw67nVNOOWWMjtExOlZbK61Ja9Kay+VN9aZ6U1+/JtWkmlQXF/9pjlO/mEgFqSAVOh1mMIOZuTlmYAZmePQIU5jClF4f6ihjkkEySIZv39ghO2SHi4twww33zZunrf/vl1A0cpGL3LQ02SybZfPsrNwn98l9N27IOlkn665cIR7iIZ75efSgBz2nDx7m7D8NbLDBFhcHLbTQOp2htX3mVf7h7O7ABfH3CFAbtVGbKF50oGgwMDAEgxEC6hx1jjpnawuxiEXsly8XHTSCRCQi8etXOk7H6fjGxonQT9zL7mX3sixnxGfEZ8S73SRAAiRQUBASUqkuLLgIEeLnz2hEIxqrqpwtzhZny4nAb39o2nk7b+eUrm6sbqxuaDRoRStaz0+E7bJdtvv9O02n6TT940dBEARBkKQLa+Qlfys/AD2Mk+4yzAuqAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTA5LTIwVDE2OjQzOjIzKzA4OjAw1p6ozQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0wOS0yMFQxNjo0MzoyMyswODowMKfDEHEAAABLdEVYdHN2ZzpiYXNlLXVyaQBmaWxlOi8vL2hvbWUvYWRtaW4vaWNvbi1mb250L3RtcC9pY29uXzM3dmtmbTFieDQ5L3lvdXhpYW5nLnN2Z+9tMAgAAAAASUVORK5CYII=") no-repeat 50% 50%;
}

.icon-github:before {
    background: url("data:image/png;base64,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") no-repeat 50% 50%;
}

.icon-page:before {
    background: url("data:image/png;base64,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") no-repeat 50% 50%;
    background-size: 90% 90%;
}

footer {
    width: 100%;
    margin: 1rem auto 1rem;
    text-align: center;
    font-size: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    line-height: 1.5rem; 
}
footer span {
    color:#666;
    transition: ease all 300ms;
}
footer a {
    margin: 0 8px;
    color:#666;
    transition: ease all 300ms;
}
footer a:hover span {
    color: #3eaf7c;
    text-decoration: underline;
    transition: ease all 300ms;
}
footer a:hover {
    color: #3eaf7c;
    text-decoration: underline;
    transition: ease all 300ms;
}
footer .police {
    display: flex;
    align-items: center;
}
.description-a {
    width: 0;
    height: 0;
    opacity: 0;
    display: inline;
}
</style>

<article class="description-a">魏国的个人简历,forguo的个人简历,forguo,一个前端工程师的自我修养，web前端个人简历</article>

<div class="icons">
    <a href="mailto:wforguo@qq.com" title="发邮件" target="_blank" class="iconfont icon-youjian"></a>
    <a href="https://github.com/wforguo" title="GitHub" target="_blank" class="iconfont icon-github"></a>
    <a href="https://www.forguo.cn" title="听音乐" target="_blank" class="iconfont icon-page"></a>
</div>

</br>

<footer>
    <a href="http://beian.miit.gov.cn" target="_blank">陇ICP备17000679号-1</a><a 
    target="_blank" class="police" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=62040302000038">
        <img src="https://forguo-1302175274.file.myqcloud.com/assets/imgs/copy.png"/>
        <span style="margin-left: 1px;">甘公网安备 62040302000038号</span>
    </a><span style="margin-left: 3px;">Copyright @ 2016-2020</span>
</footer>
