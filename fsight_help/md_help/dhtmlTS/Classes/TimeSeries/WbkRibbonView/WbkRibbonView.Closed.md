# WbkRibbonView.Closed

WbkRibbonView.Closed
-


# WbkRibbonView.Closed


## Синтаксис


Closed: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие Closed наступает при выборе пункта «Закрыть» главного меню рабочей книги.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике события открытия документа добавить следующий код:


//Получаем компонент Ribbon
var ribbonView = workbookBox.getRibbonView();
//Подписываемся на событие выбора пункта «Закрыть» главного меню рабочей книги
	ribbonView.Closed.add(function()
		{
			alert('Был выбран пункт главного меню "Закрыть"');
		});

Для выполнения примера нужно выбрать пункт «Закрыть» главного меню рабочей книги, после чего на экран будет выведено сообщение: «Был выбран пункт главного меню «Закрыть».


См. также:


[WbkRibbonView](WbkRibbonView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
