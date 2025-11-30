# PrxMdService.setTabSheetAction

PrxMdService.setTabSheetAction
-


# PrxMdService.setTabSheetAction


## Синтаксис


setTabSheetAction (report: [PP.Prx.Report](../Report/Report.htm),
 action: Object, recalc: Boolean, callback: PP.Delegate);


## Параметры


report. Отчет;


action. Метаданные действия.
 WSDL структура TabSheetAction;


recalc. Определяет будет ли
 выполнен пересчет отчета. При значении true будет произведен пересчет
 отчета.


callback. Процедура обратного
 вызова.


## Описание


Метод setTabSheetAction выполняет
 действие в таблице.


## Комментарии


Метод может быть использован для эмулирования нажатия на гиперссылку
 или на картинку в таблице.


Параметр action может быть задан следующим образом:


Для гиперссылки - { hlink: { row: 0, column: 0 } }.


Для картинки - { picture: { row: 0, column: 0 } }.


## Пример


Для выполнения примера предполагается наличие на html-странице компонента
 [ReportBox](../../../Components/RegularReport/ReportBox/ReportBox.htm)
 с наименованием «reportBox» и сервиса для работы с регламентным отчетом
 с наименованием «prxMbService» (см. «[Пример
 размещения компонента ReportBox](../../../Components/RegularReport/ReportBox/ReportBox_Example.htm)»). В ячейке таблицы с индексом строки
 0 и индексом столбца 0 должна содержаться гиперссылка. Выполним действие
 - нажатие на гиперссылку:


//Эмулируем нажатие на гиперссылку в ячейке A1
prxMbService.setTabSheetAction(prxReport, { hlink: { row: 0, column: 0 } });
//Обновляем отчет
reportBox.refreshAll();
После выполнения функции будет произведена операция, которая выбрана
 для гиперссылки (например, переход на другой лист отчета) в ячейке А1.


См. также:


[PrxMdService](PrxMdService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
