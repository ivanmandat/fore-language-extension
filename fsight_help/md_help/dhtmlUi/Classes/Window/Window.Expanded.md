# Window.Expanded

Window.Expanded
-


# Window.Expanded


## Синтаксис


Expanded: function (sender, args);


## Параметры


sender. Источник события;


args. Информация
 о событии.


## Описание


Событие Expanded наступает после
 разворачивания окна.


## Комментарии


Окно находится в развернутом состоянии, если оно целиком отображено
 на странице.


Разворачивание окна происходит при нажатии на кнопку ![](../../Components/Window/Window2.gif).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [Window](../../Components/Window/Window.htm) с наименованием
 «win» (см. «[Пример
 создания компонента Window](../../Components/Window/Example_Window.htm)»). Добавим обработчик события Expanded:


win.Expanded.add(function(sender, args){


    win.setContent("Is
 Expanded")


    });


После выполнения примера при разворачивании окна будет установлено новое
 содержимое - «Is Expanded».


См. также:


[Window](Window.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
