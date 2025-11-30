# WbkRibbonView.Opened

WbkRibbonView.Opened
-


# WbkRibbonView.Opened


## Синтаксис


Opened: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие Opened наступает при выборе пункта главного меню «Открыть».


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике события открытия документа добавить следующий код:


//Получаем компонент Ribbon
var ribbonView = workbookBox.getRibbonView();
//Подписываемся на событие выбора пункта меню «Открыть» главного меню рабочей книги
ribbonView.Opened.add(function()
{
	alert("Выбран пункт меню «Открыть» главного меню рабочей книги");
});

Для выполнения примера нужно выбрать пункт меню «Закрыть», после чего на экран будет выведено сообщение: «Выбран пункт меню «Открыть» главного меню рабочей книги».


См. также:


[WbkRibbonView](WbkRibbonView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
