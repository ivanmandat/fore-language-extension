# PrxMdService.saveData

PrxMdService.saveData
-


# PrxMdService.saveData


## Синтаксис


saveData (report, callback);


## Параметры


report. Отчет, измененные данные которого необходимо сохранить;


callback. Процедура обратного вызова, экземпляр класса PP.Delegate.


## Описание


Метод saveData сохраняет измененные данные в отчете.


## Пример


Для выполнения примера предполагается наличие на html-странице компонента [ReportBox](../../../Components/RegularReport/ReportBox/ReportBox.htm) с наименованием «reportBox» и сервиса для работы с регламентным отчетом с наименованием «prxMbService» (см. «[Пример размещения компонента ReportBox](../../../Components/RegularReport/ReportBox/ReportBox_Example.htm)»). Добавьте функцию save:


function save() {


         prxMbService.saveData(prxReport);


         reportBox.refreshAll();


}


После выполнения функции loadData будут сохранены измененные данные отчета.


См. также:


[PrxMdService](PrxMdService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
