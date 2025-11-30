# Window.Moving

Window.Moving
-


# Window.Moving


## Синтаксис


Moving: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие Moving наступает во время перемещения окна.


## Комментарии


Для наступления события необходимо, чтобы для свойства [EnableMove](Window.EnableMove.htm) было установлено значение true.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [Window](../../Components/Window/Window.htm) с наименованием «win» (см. «[Пример создания компонента Window](../../Components/Window/Example_Window.htm)»).


Добавим обработчик события Moving.


win.Moving.add(function (sender, args) {


        win.setCaption("Is Moving")


    });


После выполнения примера при перемещении окна его заголовок поменяется на «Is Moving».


См. также:


[Window](Window.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
