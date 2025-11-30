# PrxMdService.setTabSheetData

PrxMdService.setTabSheetData
-


# PrxMdService.setTabSheetData


## Синтаксис


setTabSheetData(report, cells, callback);


## Параметры


report. Отчет-источник;


cells. Коллекция ячеек;


callback. Процедура обратного вызова.


## Описание


Метод setTabSheetData устанавливает данные в электронную таблицу.


## Пример


Для выполнения примера предполагается наличие на html-странице компонента [ReportBox](../../../Components/RegularReport/ReportBox/ReportBox.htm) с наименованием «reportBox» и сервиса для работы с регламентным отчетом с наименованием «prxMbService» (см. «[Пример размещения компонента ReportBox](../../../Components/RegularReport/ReportBox/ReportBox_Example.htm)»). Создадим функцию setData:


   function setData() {


        prxMbService.setTabSheetData(prxReport, reportBox.getDataView().getGridView().getChangedCells(), null)


        reportBox.refreshAll()


}


После выполнения функции измененные данные будут внесены в электронную таблицу.


См. также:


[PrxMdService](PrxMdService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
