# IPrxReportUserEvents

IPrxReportUserEvents
-


# IPrxReportUserEvents


Сборка: Report;


## Описание


Интерфейс IPrxReportUserEvents
 содержит методы, реализующие события регламентного отчета.


## Иерархия наследования


           IPrxReportUserEvents


## Комментарии


Данный интерфейс имеет идентичные методы для описания событий как и
 у класса [ReportEvents](../../Class/ReportEvents/ReportEvents.htm).
 При создании пользовательского класса следует в качестве родительского
 элемента выбирать ReportEvents,
 так как это в дальнейшем избавит от проблем при появлении новых методов,
 реализующих события.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [EventOnAfterActivateSheet](IPrxReportUserEvents.EventOnAfterActivateSheet.htm)


		 Метод EventOnAfterActivateSheet
		 реализует событие, происходящее после смены активного листа регламентного
		 отчёта.


		 ![](../../Sub_Image.gif)
		 [EventOnAfterAddDataIsland](IPrxReportUserEvents.EventOnAfterAddDataIsland.htm)


		 Метод EventOnAfterAddDataIsland
		 реализует событие, которое наступает после добавления области
		 данных.


		 ![](../../Sub_Image.gif)
		 [EventOnAfterAddEaxGrid](IPrxReportUserEvents.EventOnAfterAddEaxGrid.htm)


		 Метод EventOnAfterAddEaxGrid
		 реализует событие, которое наступает после добавления аналитической
		 области данных.


		 ![](../../Sub_Image.gif)
		 [EventOnAfterAddFormulaIsland](IPrxReportUserEvents.EventOnAfterAddFormulaIsland.htm)


		 Метод EventOnAfterAddFormulaIsland
		 реализует событие, которое наступает после добавления области
		 формул.


		 ![](../../Sub_Image.gif)
		 [EventOnAfterAddSheet](IPrxReportUserEvents.EventOnAfterAddSheet.htm)


		 Метод EventOnAfterAddSheet
		 реализует событие, которое наступает после добавления листа.


		 ![](../../Sub_Image.gif)
		 [EventOnAfterAddTableIsland](IPrxReportUserEvents.EventOnAfterAddTableIsland.htm)


		 Метод EventOnAfterAddTableIsland
		 реализует событие, которое наступает после добавления реляционной
		 области данных.


		 ![](../../Sub_Image.gif)
		 [EventOnAfterDeleteDataIsland](IPrxReportUserEvents.EventOnAfterDeleteDataIsland.htm)


		 Метод EventOnAfterDeleteDataIsland
		 реализует событие, которое наступает после удаления области данных.


		 ![](../../Sub_Image.gif)
		 [EventOnAfterDeleteEaxGrid](IPrxReportUserEvents.EventOnAfterDeleteEaxGrid.htm)


		 Метод EventOnAfterDeleteEaxGrid
		 реализует событие, которое наступает после удаления аналитической
		 области данных.


		 ![](../../Sub_Image.gif)
		 [EventOnAfterDeleteFormulaIsland](IPrxReportUserEvents.EventOnAfterDeleteFormulaIsland.htm)


		 Метод EventOnAfterDeleteFormulaIsland
		 реализует событие, которое наступает после удаления области формул.


		 ![](../../Sub_Image.gif)
		 [EventOnAfterDeleteSheet](IPrxReportUserEvents.EventOnAfterDeleteSheet.htm)


		 Метод EventOnAfterDeleteSheet
		 реализует событие, которое наступает после удаления листа.


		 ![](../../Sub_Image.gif)
		 [EventOnAfterDeleteTableIsland](IPrxReportUserEvents.EventOnAfterDeleteTableIsland.htm)


		 Метод EventOnAfterDeleteTableIsland
		 реализует событие, которое наступает после удаления реляционной
		 области данных.


		 ![](../../Sub_Image.gif)
		 [EventOnAfterExecuteDataIsland](IPrxReportUserEvents.EventOnAfterExecuteDataIsland.htm)


		 Метод EventOnAfterExecuteDataIsland
		 реализует событие, происходящее после вычисления области данных
		 регламентного отчёта.


		 ![](../../Sub_Image.gif)
		 [EventOnAfterExecuteFormulaIsland](IPrxReportUserEvents.EventOnAfterExecuteFormulaIsland.htm)


		 Метод EventOnAfterExecuteFormulaIsland
		 реализует событие, происходящее после вычисления области формул
		 регламентного отчёта.


		 ![](../../Sub_Image.gif)
		 [EventOnAfterExecuteReport](IPrxReportUserEvents.EventOnAfterExecuteReport.htm)


		 Метод EventOnAfterExecuteReport
		 реализует событие, которое наступает после выполнения отчёта.


		 ![](../../Sub_Image.gif)
		 [EventOnAfterExecuteTableIsland](IPrxReportUserEvents.EventOnAfterExecuteTableIsland.htm)


		 Метод EventOnAfterExecuteTableIsland
		 реализует событие, которое наступает после вычисления реляционной
		 области данных.


		 ![](../../Sub_Image.gif)
		 [EventOnAfterExportReport](IPrxReportUserEvents.EventOnAfterExportReport.htm)


		 Метод EventOnAfterExportReport
		 реализует событие, происходящее после экспорта регламентного отчёта.


		 ![](../../Sub_Image.gif)
		 [EventOnAfterPrintReport](IPrxReportUserEvents.EventOnAfterPrintReport.htm)


		 Метод EventOnAfterPrintReport
		 реализует событие, которое наступает после печати регламентного
		 отчёта.


		 ![](../../Sub_Image.gif)
		 [EventOnAfterRecalcSheet](IPrxReportUserEvents.EventOnAfterRecalcSheet.htm)


		 Метод EventOnAfterRecalcSheet
		 реализует событие, происходящее после вычисления листа регламентного
		 отчёта.


		 ![](../../Sub_Image.gif)
		 [EventOnAfterRefreshEaxGrid](IPrxReportUserEvents.EventOnAfterRefreshEaxGrid.htm)


		 Метод EventOnAfterRefreshEaxGrid
		 реализует событие, происходящее после обновления аналитической
		 области данных.


		 ![](../../Sub_Image.gif)
		 [EventOnAfterSortEaxGrid](IPrxReportUserEvents.EventOnAfterSortEaxGrid.htm)


		 Метод EventOnAfterSortEaxGrid
		 реализует событие, происходящее после сортировки данных в аналитической
		 области.


		 ![](../../Sub_Image.gif)
		 [EventOnAfterTransferData](IPrxReportUserEvents.EventOnAfterTransferData.htm)


		 Метод EventOnAfterTransferData
		 реализует событие, происходящее после сохранения измененных значений
		 всех областей данных регламентного отчёта.


		 ![](../../Sub_Image.gif)
		 [EventOnAfterTransferDataDataIsland](IPrxReportUserEvents.EventOnAfterTransferDataDataIsland.htm)


		 Метод EventOnAfterTransferDataDataIsland
		 реализует событие, происходящее после сохранения измененных значений
		 области данных.


		 ![](../../Sub_Image.gif)
		 [EventOnAfterTransferDataEaxGrid](IPrxReportUserEvents.EventOnAfterTransferDataEaxGrid.htm)


		 Метод EventOnAfterTransferDataEaxGrid
		 реализует событие, происходящее после сохранения изменённых значений
		 аналитической области данных.


		 ![](../../Sub_Image.gif)
		 [EventOnAfterTransferDataSheet](IPrxReportUserEvents.EventOnAfterTransferDataSheet.htm)


		 Метод EventOnAfterTransferDataSheet
		 реализует событие, происходящее после сохранения измененных значений
		 областей данных листа отчёта.


		 ![](../../Sub_Image.gif)
		 [EventOnAuditOperation](IPrxReportUserEvents.EventOnAuditOperation.htm)


		 Метод EventOnAuditOperation
		 реализует событие, происходящее при аудите операции.


		 ![](../../Sub_Image.gif)
		 [EventOnBeforeActivateSheet](IPrxReportUserEvents.EventOnBeforeActivateSheet.htm)


		 Метод EventOnBeforeActivateSheet
		 реализует событие, происходящее перед сменой активного листа регламентного
		 отчёта.


		 ![](../../Sub_Image.gif)
		 [EventOnBeforeChangeControlValue](IPrxReportUserEvents.EventOnBeforeChangeControlValue.htm)


		 Метод EventOnBeforeChangeControlValue
		 реализует событие, происходящее до изменения значения элемента
		 управления регламентного отчёта.


		 ![](../../Sub_Image.gif)
		 [EventOnBeforeDeleteControl](IPrxReportUserEvents.EventOnBeforeDeleteControl.htm)


		 Метод EventOnBeforeDeleteControl
		 реализует событие, происходящее перед удалением элемента управления.


		 ![](../../Sub_Image.gif)
		 [EventOnBeforeDeleteSheet](IPrxReportUserEvents.EventOnBeforeDeleteSheet.htm)


		 Метод EventOnBeforeDeleteSheet
		 реализует событие, происходящее до удаления листа регламентного
		 отчёта.


		 ![](../../Sub_Image.gif)
		 [EventOnBeforeExecuteCombined](IPrxReportUserEvents.EventOnBeforeExecuteCombined.htm)


		 Метод EventOnBeforeExecuteCombined
		 реализует событие, происходящее перед объединением запросов при
		 вычислении источников данных регламентного отчёта.


		 ![](../../Sub_Image.gif)
		 [EventOnBeforeExecuteDataIsland](IPrxReportUserEvents.EventOnBeforeExecuteDataIsland.htm)


		 Метод EventOnBeforeExecuteDataIsland
		 реализует событие, происходящее перед вычислением области данных
		 регламентного отчёта.


		 ![](../../Sub_Image.gif)
		 [EventOnBeforeExecuteFormulaIsland](IPrxReportUserEvents.EventOnBeforeExecuteFormulaIsland.htm)


		 Метод EventOnBeforeExecuteFormulaIsland
		 реализует событие, происходящее перед вычислением области формул
		 регламентного отчета.


		 ![](../../Sub_Image.gif)
		 [EventOnBeforeExecuteReport](IPrxReportUserEvents.EventOnBeforeExecuteReport.htm)


		 Метод EventOnBeforeExecuteReport
		 реализует событие, происходящее перед вычислением регламентного
		 отчёта.


		 ![](../../Sub_Image.gif)
		 [EventOnBeforeExecuteTableIsland](IPrxReportUserEvents.EventOnBeforeExecuteTableIsland.htm)


		 Метод EventOnBeforeExecuteTableIsland
		 реализует событие, происходящее перед вычислением реляционной
		 области данных.


		 ![](../../Sub_Image.gif)
		 [EventOnBeforeExportReport](IPrxReportUserEvents.EventOnBeforeExportReport.htm)


		 Метод EventOnBeforeExportReport
		 реализует событие, происходящее перед экспортированием регламентного
		 отчёта.


		 ![](../../Sub_Image.gif)
		 [EventOnBeforeOpenReport](IPrxReportUserEvents.EventOnBeforeOpenReport.htm)


		 Метод EventOnBeforeOpenReport
		 реализует событие, происходящее перед открытием регламентного
		 отчёта.


		 ![](../../Sub_Image.gif)
		 [EventOnBeforePrintReport](IPrxReportUserEvents.EventOnBeforePrintReport.htm)


		 Метод EventOnBeforePrintReport
		 реализует событие, происходящее перед печатью регламентного отчёта.


		 ![](../../Sub_Image.gif)
		 [EventOnBeforeRecalcSheet](IPrxReportUserEvents.EventOnBeforeRecalcSheet.htm)


		 Метод EventOnBeforeRecalcSheet
		 реализует событие, происходящее перед вычислением листа регламентного
		 отчёта.


		 ![](../../Sub_Image.gif)
		 [EventOnBeforeRefreshEaxGrid](IPrxReportUserEvents.EventOnBeforeRefreshEaxGrid.htm)


		 Метод EventOnBeforeRefreshEaxGrid
		 реализует событие, происходящее перед обновлением аналитической
		 области данных.


		 ![](../../Sub_Image.gif)
		 [EventOnBeforeSaveReport](IPrxReportUserEvents.EventOnBeforeSaveReport.htm)


		 Метод EventOnBeforeSaveReport
		 реализует событие, происходящее до сохранения отчёта.


		 ![](../../Sub_Image.gif)
		 [EventOnBeforeSaveToStateServer](IPrxReportUserEvents.EventOnBeforeSaveToStateServer.htm)


		 Метод EventOnBeforeSaveToStateServer
		 реализует событие, наступающее перед сохранением регламентного
		 отчёта на сервер состояний.


		 ![](../../Sub_Image.gif)
		 [EventOnBeforeSortEaxGrid](IPrxReportUserEvents.EventOnBeforeSortEaxGrid.htm)


		 Метод EventOnBeforeSortEaxGrid
		 реализует событие, происходящее до сортировки данных в аналитической
		 области.


		 ![](../../Sub_Image.gif)
		 [EventOnBeforeTransferData](IPrxReportUserEvents.EventOnBeforeTransferData.htm)


		 Метод EventOnBeforeTransferData
		 реализует событие, происходящее перед сохранением измененных значений
		 всех областей данных отчёта в источник.


		 ![](../../Sub_Image.gif)
		 [EventOnBeforeTransferDataDataIsland](IPrxReportUserEvents.EventOnBeforeTransferDataDataIsland.htm)


		 Метод EventOnBeforeTransferDataDataIsland
		 реализует событие, происходящее перед сохранением измененных значений
		 области данных.


		 ![](../../Sub_Image.gif)
		 [EventOnBeforeTransferDataEaxGrid](IPrxReportUserEvents.EventOnBeforeTransferDataEaxGrid.htm)


		 Метод EventOnBeforeTransferDataEaxGrid
		 реализует событие, происходящее перед сохранением изменённых значений
		 аналитической области данных.


		 ![](../../Sub_Image.gif)
		 [EventOnBeforeTransferDataSheet](IPrxReportUserEvents.EventOnBeforeTransferDataSheet.htm)


		 Метод EventOnBeforeTransferDataSheet
		 реализует событие, происходящее перед сохранением измененных значений
		 областей данных листа отчёта.


		 ![](../../Sub_Image.gif)
		 [EventOnCellChange](IPrxReportUserEvents.EventOnCellChange.htm)


		 Метод EventOnCellChange
		 реализует событие, происходящее после изменения значения в ячейке.


		 ![](../../Sub_Image.gif)
		 [EventOnChangeControlValue](IPrxReportUserEvents.EventOnChangeControlValue.htm)


		 Метод EventOnChangeControlValue
		 реализует событие, происходящее при изменении значения элемента
		 управления регламентного отчёта.


		 ![](../../Sub_Image.gif)
		 [EventOnSubstituteReport](IPrxReportUserEvents.EventOnSubstituteReport.htm)


		 Метод EventOnSubstituteReport
		 реализует системное событие, которое наступает при подмене отчёта.


См. также:


[Интерфейсы сборки Report](../KeReport_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
