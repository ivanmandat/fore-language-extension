# DataAreaView.PropertyChanged

DataAreaView.PropertyChanged
-


# DataAreaView.PropertyChanged


## Синтаксис


PropertyChanged: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие PropertyChanged наступает при изменении данных отчета.


## Пример


Для выполнения примера предполагается наличие на html-странице компонента с [DataArea](../../../Components/RegularReport/DataArea/DataArea.htm) наименованием «dataArea» (см. «[Пример размещения компонента DataArea](../../../Components/RegularReport/DataArea/DataArea_Example.htm)»). Добавим обработчик события PropertyChanged:


dataArea.PropertyChanged.add(function (sender, args) {


    dataArea.setActiveSheet(3);


    dataArea.refreshAll();


})


После выполнения примера при изменении данных в таблице отчета будет открыт лист отчета с ключом 3.


См. также:


[ReportView](../ReportView/ReportView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
