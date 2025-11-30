# WbkDataView.ActiveSheetChanged

WbkDataView.ActiveSheetChanged
-


# WbkDataView.ActiveSheetChanged


## Синтаксис


ActiveSheetChanged: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие ActiveSheetChanged наступает
 после изменения активного листа.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [WbkDataBox](../../../Components/TimeSeries/WbkDataBox/WbkDataBox.htm)
 c наименованием «wbkDataBox» (см. «[Конструктор
 WbkDataBox](../WbkDataBox/Constructor_WbkDataBox.htm)»), также необходимо в обработчике события открытия документа
 добавить следующий код:


//Создаем экземпляр класса флажок для setIsBreadcrumbVisible
wbkDataBox.ActiveSheetChanged.add(onDummyActionFactory("Произошла смена активного листа"));

В результате выполнения примера после выбора активного листа рабочей
 книги в консоль браузера будет выводиться соответствующее сообщение.


См. также:


[WbkDataView](WbkDataView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
