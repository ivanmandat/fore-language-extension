# Window.Moved

Window.Moved
-


# Window.Moved


## Синтаксис


Moved: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие Moved наступает после перемещения окна.


## Комментарии


Для наступления события необходимо, чтобы для свойства [EnableMove](Window.EnableMove.htm) было установлено значение true.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [Window](../../Components/Window/Window.htm) с наименованием «win» (см. «[Пример создания компонента Window](../../Components/Window/Example_Window.htm)»). Добавим обработчик события Moved:


win.Moved.add(function (sender, args) {


    win.getCloseButton().setIsPressed(true);


    });


После перемещения окна [кнопка закрытия](Window.getCloseButton.htm) будет отображаться в нажатом состоянии.


См. также:


[Window](Window.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
