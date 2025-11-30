# WbkRibbonView.PropertyChanged

WbkRibbonView.PropertyChanged
-


# WbkRibbonView.PropertyChanged


## Синтаксис


PropertyChanged: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие PropertyChanged генерируется после изменения свойства ленты инструментов.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике события открытия документа добавить следующий код:


//Получаем компонент Ribbon
var ribbonView = workbookBox.getRibbonView();
//Подписываемся на событие изменения свойства ленты инструментов
ribbonView.PropertyChanged.add(function()
{
	alert('Свойства ленты инструментов изменены');
});

После выполнения примера на html-странице будет размещен компонент [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm). Для выполнения примера нужно выбрать пункт меню «Обновить» рабочей книги, после чего на экран будет выведено сообщение: «Свойства ленты инструментов изменены».


См. также:


[WbkRibbonView](WbkRibbonView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
