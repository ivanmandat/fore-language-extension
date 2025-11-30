# DataAreaView.ActiveSheetChanged

DataAreaView.ActiveSheetChanged
-


# DataAreaView.ActiveSheetChanged


## Синтаксис


ActiveSheetChanged: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие ActiveSheetChanged наступает при смене активного листа отчета.


## Пример


Для выполнения примера предполагается наличие на html-странице компонента [ReportBox](../../../Components/RegularReport/ReportBox/ReportBox.htm) с наименованием «reportBox». Добавим обработчик события ActiveSheetChanged:


reportBox.getDataView().ActiveSheetChanged.add(function (sender, args) {


      reportBox.getDataView().getGridView().setIsEditable(false)


});


После выполнения примера при смене активного листа отчета ячейки таблицы станут недоступными для редактирования.


См. также:


[DataAreaView](DataAreaView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
