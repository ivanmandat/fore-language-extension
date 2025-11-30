# PrxMdService.setHyperLink

PrxMdService.setHyperLink
-


# PrxMdService.setHyperLink


## Синтаксис


setHyperLink (report, row, column, callback);


## Параметры


report. Отчет;


row. Индекс строки;


column. Индекс столбца;


callback. Процедура обратного вызова.


## Описание


Метод setHyperLink эмулирует щелчок мыши по гиперссылке.


## Пример


Для выполнения примера предполагается наличие на html-странице компонента [ReportBox](../../../Components/RegularReport/ReportBox/ReportBox.htm) с наименованием «reportBox» и сервиса для работы с регламентным отчетом с наименованием «prxMbService» (см. «[Пример размещения компонента ReportBox](../../../Components/RegularReport/ReportBox/ReportBox_Example.htm)»). В ячейке таблицы с индексом строки 3 и индексом столбца 1 должна содержаться гиперссылка. Создадим функцию setHyperlink


function setHyperlink() {


      prxMbService.setHyperLink(prxReport, 3, 1);


      reportBox.getDataView().refreshAll();


}


После выполнения функции будет произведена операция, которая выбрана для гиперссылки (например, переход на другой лист отчета).


См. также:


[PrxMdService](PrxMdService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
