# WbkRibbonView.RequestMetadata

WbkRibbonView.RequestMetadata
-


# WbkRibbonView.RequestMetadata


## Синтаксис


RequestMetadata: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие RequestMetadata генерируется при отсутствии метаданных в источнике ленты инструментов.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике события открытия документа добавить следующий код:


//Получаем компонент Ribbon
var ribbonView = workbookBox.getRibbonView();
//Подписываемся на событие запроса метаданных
ribbonView.RequestMetadata.add(function()
{
	alert('Произошло событие запроса метаданных');
});

Для выполнения примера нужно нажать на пункт меню «Добавить ряд», после чего произойдет запрос метаданных,а на экран будет выведено сообщение: «Произошло событие запроса метаданных».


См. также:


[WbkRibbonView](WbkRibbonView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
