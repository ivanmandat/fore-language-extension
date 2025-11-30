# WbkDataView.SheetClick

WbkDataView.SheetClick
-


# WbkDataView.SheetClick


## Синтаксис


SheetClick: function(sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие SheetClick наступает при нажатии на заголовок листа.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WbkDataBox](../../../Components/TimeSeries/WbkDataBox/WbkDataBox.htm) c наименованием «wbkDataBox» (см. «[Конструктор WbkDataBox](../WbkDataBox/Constructor_WbkDataBox.htm)»), также необходимо в обработчике события открытия документа добавить следующий код:


wbkDataBox.SheetClick.add(onDummyActionFactory("Нажатие на заголовок листа"));

В результате выполнения примера при нажатии на заголовок листа в консоль будет выведено соответствующее сообщение.


См. также:


[WbkDataView](WbkDataView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
