# WbkDataView.Refreshed

WbkDataView.Refreshed
-


# WbkDataView.Refreshed


## Синтаксис


Refreshed: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие Refreshed наступает после завершения обновления компонента.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WbkDataBox](../../../Components/TimeSeries/WbkDataBox/WbkDataBox.htm) c наименованием «wbkDataBox» (см. «[Конструктор WbkDataBox](../WbkDataBox/Constructor_WbkDataBox.htm)»), также необходимо в обработчике события открытия документа добавить следующий код:


wbkDataBox.Refreshed.add(onDummyActionFactory("Обновление компонента завершено"));

В результате выполнения примера после обновления компонента в консоль браузера будет выведено соответствующее сообщение.


См. также:


[WbkDataView](WbkDataView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
