# Button.UseWrapping

Button.UseWrapping
-


# Button.UseWrapping


## Синтаксис


UseWrapping: Boolean;


## Описание


Свойство UseWrapping осуществляет перенос слов на 2 строки.


## Комментарии


Перенос осуществляется, если изображение кнопки или стрелка вызова меню расположены снизу или сверху.


При установке значения true осуществляется перенос по словам. По умолчанию установлено значение false.


## Пример


Для выполнения примера подключите к html-странице ссылки на библиотеку PP.js и таблицы визуальных стилей PP.css. Далее приведен текст javascript-кода, с помощью которого на странице размещается компонент [Button](../../Components/Button/Button.htm):


<script type="text/javascript">


var b2 = new PP.Ui.Button({


    ParentNode: document.getElementById("MyImageButton"),


    Content: "Image Button",


    ImageUrl: "ImgBtn1.png",


    ImagePosition: PP.LTRB.Bottom,


    UseWrapping: true});


</script>


После выполнения примера на html-странице будет размещена кнопка, имеющая следующий вид:


![](../../Components/Button/ex4_usewrapping.gif)


См. также:


[Button](Button.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
