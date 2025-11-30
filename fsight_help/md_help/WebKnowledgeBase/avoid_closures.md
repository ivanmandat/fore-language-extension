# Избавляемся от замыканий

Избавляемся от замыканий
-


# Избавляемся от замыканий


## Проблема


Замыкание - процедура или функция,
 в теле которой присутствуют ссылки на переменные, объявленные вне тела
 этой функции и не в качестве её параметров (а в окружающем коде).


Замыкания могут привести к утечке памяти.


## Решение


В статье приведены наиболее частые случаи использования замыканий и
 способы их устранения:


### 1. Подписка на нативные события Java Script


Код с замыканием:


var
 oval = document.getElementById("div");


if
 (oval.addEventListener)


    oval.addEventListener("onclick", function
 (event)


    {


     //Отсюда удобно работать с oval


    },
 false);


else


    oval.attachEvent("onclick", function (event)


    {


     //Отсюда удобно работать с oval


    });


Зачастую как раз для этого и делают замыкание, чтобы получить доступ
 к dom-вершине, на которую «навешено» событие.


Способ устранения замыкания:


function
 onclick(event)


{


    this
  === oval


}


function
 test()


{


    var oval = document.getElementById("div");


    if (oval.addEventListener)


        oval.addEventListener("onclick", onclick, false);


    else


        oval.onclick
 = onclick;


}


Особенность в том, что уже не используется функция attachEvent,
 а используется простое свойство/событие onclick.
 Это необходимо для того чтобы контекст this
 в обработчике события был равен dom-элементу, на которое «повесили» событие.


### 2. Использование метода setTimeout


Код с замыканием:


var
 oval = document.getElementById("div");


setTimeout(function()


{


    oval.innerHTML
 = "ok";


}, 100);


Способ устранения замыкания:


function test(oval)


{


    oval.innerHTML
 = "ok";


}


setTimeout(test,
 100, oval);


Однако такой код не будет работать в IE, так как там функция test всегда
 вызывается без параметров. Поэтому вместо встроенной функции будем использовать
 следующую:


PP = {};


PP.IsIE = navigator.userAgent.indexOf(' MSIE ') > -1;


PP._onSetTimeout
 = function(index)


{


    var
 callback = PP._onSetTimeout.tims[index];


    delete
 PP._onSetTimeout.tims[index];


    return
 callback.Handler.call(this, callback.Params);


};


PP._onSetTimeout.tims
 = [];


PP.setTimeout =
 function (func, delay, params)


{


    if (PP.IsIE && typeof(params)
 != 'undefined')


    {


        var i = PP._onSetTimeout.tims.push({
 Handler : func, Params : params}) - 1;


        return
 setTimeout("PP._onSetTimeout("
 + i+ ")", delay);


    }


    else return setTimeout(func, delay,
 params);


};


### 3. Ajax


Код с замыканием:


var
 XHR = window.XMLHttpRequest ? new
 window.XMLHttpRequest() : new window.ActiveXObject("Microsoft.XMLHTTP");


XHR.onreadystatechange
 = function()


{


    if (XHR.status == 200)


        alert(XHR.responseText);
   //Здесь удобно использовать
 ссылку на XHR и вызывать необходимые callback'и


};


Способ устранения замыкания:


function
 onreadystatechange()


{


    if (this.status == 200)       //this – это всегда XMLHttpRequest


        alert(this.responseText);


};


var
 XHR = window.XMLHttpRequest ? new
 window.XMLHttpRequest() : new window.ActiveXObject("Microsoft.XMLHTTP");


XHR.onreadystatechange
 = onreadystatechange;


См. также:


[База
 знаний разработчиков веб-приложений](Web_Developers_KnowledgeBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
