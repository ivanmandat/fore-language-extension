# PrxMdService.setTabSheetSelection

PrxMdService.setTabSheetSelection
-


# PrxMdService.setTabSheetSelection


## Синтаксис


setTabSheetSelection (report: PP.Prx.Report, metadata: Object, callback);


## Параметры


report. Регламентный отчет;


metadata. Выделенная область таблицы;


callback. Процедура обратного вызова.


## Описание


Метод setTabSheetSelection сохраняет состояние выделенной области в таблице.


## Пример


Для выполнения примера предполагается наличие на странице компонента [ReportBox](../../../Components/RegularReport/ReportBox/ReportBox.htm) с наименованием «reportBox» (см. «[Пример размещения компонента ReportBox](../../../Components/RegularReport/ReportBox/ReportBox_Example.htm)»). Выделим ячейки в диапазоне C2-D2:


var prxMdService = reportBox._Service;
// Получим источник регламентного отчета
var prxReport = reportBox.getSource();
// Определим метаданные
var metadata = {
    type: "Normal",
    range: {
        height: 0,
        width: 0,
        left: 0,
        top: 0,
        type: "MultiPart",
        parts: {
            it: [{ // Установим диапазон выделяемых ячеек
                height: 1,
                width: 2,
                top: 2,
                left: 2,
                type: "Cells"
            }]
        }
    }
};
// Выделим ячейки таблицы
prxMdService.setTabSheetSelection(prxReport, metadata);
// Обновим отчет
reportBox.refreshAll();

После выполнения примера будут выделены ячейки таблицы в диапазоне C2-D2.


См. также:


[PrxMdService](PrxMdService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
