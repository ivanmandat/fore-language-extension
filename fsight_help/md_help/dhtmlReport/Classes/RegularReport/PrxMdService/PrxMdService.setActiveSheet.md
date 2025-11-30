# PrxMdService.setActiveSheet

PrxMdService.setActiveSheet
-


# PrxMdService.setActiveSheet


## Синтаксис


setActiveSheet (report, key, callback);


## Параметры


report. Отчет;


key. Ключ
 листа;


callback. Процедура обратного
 вызова.


## Описание


Метод setActiveSheet устанавливает
 активный лист отчета.


## Пример


Для выполнения примера предполагается наличие на html-странице компонента
 [ReportBox](../../../Components/RegularReport/ReportBox/ReportBox.htm)
 с наименованием «reportBox» и сервиса для работы с регламентным отчетом
 с наименованием «prxMbService» (см. «[Пример
 размещения компонента ReportBox](../../../Components/RegularReport/ReportBox/ReportBox_Example.htm)»), содержащий несколько листов. Установим
 активный лист отчета:


// Получим коллекцию листов отчета
sheets = prxReport.getSheets();
// Получим количество листов
sheetC = sheets.length;
// Получим ключ последнего листа отчета
key = sheets[sheetC - 1].k;
// Установим активный лист отчета
prxMdService.setActiveSheet(prxReport, key);
// Обновим отчет
reportBox.refreshAll();
В результате выполнения примера был выбран последний лист регламентного
 отчета.


См. также:


[PrxMdService](PrxMdService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
