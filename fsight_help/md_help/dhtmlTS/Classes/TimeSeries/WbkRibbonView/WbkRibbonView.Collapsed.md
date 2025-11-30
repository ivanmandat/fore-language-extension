# WbkRibbonView.Collapsed

WbkRibbonView.Collapsed
-


# WbkRibbonView.Collapsed


## Синтаксис


Collapsed: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие Collapsed наступает при сворачивании ленты инструментов.


## Комментарии


Для сворачивания ленты инструментов необходимо нажать кнопку ![](WbkRibbonView.Collapsed.png) в правом верхнем углу панели.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике события открытия документа добавить следующий код:


//Получаем компонент Ribbon
var ribbonView = workbookBox.getRibbonView();
//Подписываемся на событие сворачивания ленты инструментов временных рядов
ribbonView.Collapsed.add(function()
{
alert('Лента инструментов временных рядов свернута');
});
//Подписываемся на событие раскрытия ленты инструментов временных рядов
ribbonView.Expanded.add(function()
{
alert('Лента инструментов временных рядов раскрыта');
});

После выполнения примера произойдет событие сворачивания ленты инструментов, а на экран будет выведено сообщение «Лента инструментов временных рядов свернута».


См. также:


[WbkRibbonView](WbkRibbonView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
