# WbkDataView.DocDataChanged

WbkDataView.DocDataChanged
-


# WbkDataView.DocDataChanged


## Синтаксис


DocDataChanged: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие DocDataChanged наступает после изменения параметров документа рабочей книги.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WbkDataBox](../../../Components/TimeSeries/WbkDataBox/WbkDataBox.htm) c наименованием «wbkDataBox» (см. «[Конструктор WbkDataBox](../WbkDataBox/Constructor_WbkDataBox.htm)»), а в обработчике события открытия документа необходимо добавить следующий код:


wbkDataBox.DocDataChanged.add(onDummyActionFactory("Изменены параметры документа рабочей книги"));

В результате выполнения примера после нажатия на кнопку добавления нового листа, в консоль браузера будет выведено соответствующее сообщение.


См. также:


[WbkDataView](WbkDataView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
