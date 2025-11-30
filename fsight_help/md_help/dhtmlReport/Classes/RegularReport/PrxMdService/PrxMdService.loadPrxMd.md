# PrxMdService.loadPrxMd

PrxMdService.loadPrxMd
-


# PrxMdService.loadPrxMd


## Синтаксис


loadPrxMd (report, callback)


## Параметры


report.. Модель
 отчета, экземпляр класса [Report](../Report/Report.htm);


callback. Процедура обратного
 вызова.


## Описание


Метод loadPrxMd загружает метаданные
 в объект класса [Report](../Report/Report.htm).


## Комментарии


Метод используется для обновления (подтягивания из сервиса) метаданных
 отчета.


## Пример


Для выполнения примера предполагается наличие на html-странице сервиса
 для работы с регламентным отчетом с наименованием «prxMbService» и источника
 отчета с наименованием «prxReport» (см. «[Пример
 размещения компонента ReportBox](../../../Components/RegularReport/ReportBox/ReportBox_Example.htm)»). Создадим функцию loadData:


function
 loadData() {


      prxMbService.loadPrxMd(prxReport);


}


После выполнения функции в отчет «prxReport» будут загружены метаданные.


См. также:


[PrxMdService](PrxMdService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
