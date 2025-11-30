# WbkRibbonView.Exported

WbkRibbonView.Exported
-


# WbkRibbonView.Exported


## Синтаксис


Exported: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие Exported наступает при выборе пункта «Экспорт» главного меню рабочей книги.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике события открытия документа добавить следующий код:


//Получаем компонент Ribbon
var ribbonView = workbookBox.getRibbonView();
//Подписываемся на событие выбора пункта «Экспорт» главного меню рабочей книги
ribbonView.Exported.add(function()
{
	alert("Выбран пункт «Экспорт» главного меню рабочей книги");
});

Для выполнения примера нужно выбрать пункт меню «Экспорт», после чего на экран будет выведено сообщение: «Выбран пункт «Экспорт» главного меню рабочей книги».


См. также:


[WbkRibbonView](WbkRibbonView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
