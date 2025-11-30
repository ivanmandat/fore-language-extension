# ReportEvents

ReportEvents
-


# ReportEvents


Сборка: Report;


## Описание


Класс ReportEvents содержит
 методы, реализующие события регламентного отчёта.


## Комментарии


Данный класс имеет идентичные методы для описания событий как и у интерфейса
 [IPrxReportUserEvents](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.htm).
 При создании пользовательского класса следует в качестве родительского
 элемента выбирать ReportEvents,
 так как это в дальнейшем избавит от проблем при появлении новых методов,
 реализующих события.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [OnAfterActivateSheet](ReportEvents.OnAfterActivateSheet.htm)
		 Метод OnAfterActivateSheet
		 реализует событие, происходящее после смены активного листа регламентного
		 отчёта.


		 ![](../../Sub_Image.gif)
		 [OnAfterAddDataIsland](ReportEvents.OnAfterAddDataIsland.htm)
		 Метод OnAfterAddDataIsland
		 реализует событие, наступающее после добавления области данных
		 на лист отчёта.


		 ![](../../Sub_Image.gif)
		 [OnAfterAddEaxGrid](ReportEvents.OnAfterAddEaxGrid.htm)
		 Метод OnAfterAddEaxGrid
		 реализует событие, наступающее после добавления аналитической
		 области данных на лист отчёта.


		 ![](../../Sub_Image.gif)
		 [OnAfterAddFormulaIsland](ReportEvents.OnAfterAddFormulaIsland.htm)
		 Метод OnAfterAddFormulaIsland
		 реализует событие, наступающее после добавления области формул
		 на лист отчёта.


		 ![](../../Sub_Image.gif)
		 [OnAfterAddSheet](ReportEvents.OnAfterAddSheet.htm)
		 Метод OnAfterAddSheet
		 реализует событие, наступающее после добавления страницы в отчёте.


		 ![](../../Sub_Image.gif)
		 [OnAfterAddTableIsland](ReportEvents.OnAfterAddTableIsland.htm)
		 Метод OnAfterAddTableIsland
		 реализует событие, наступающее после добавления реляционной области
		 данных на лист отчёта.


		 ![](../../Sub_Image.gif)
		 [OnAfterDeleteDataIsland](ReportEvents.OnAfterDeleteDataIsland.htm)
		 Метод OnAfterDeleteDataIsland
		 реализует событие, наступающее после удаления области данных с
		 листа отчёта.


		 ![](../../Sub_Image.gif)
		 [OnAfterDeleteTableIsland](ReportEvents.OnAfterDeleteTableIsland.htm)
		 Метод OnAfterDeleteTableIsland
		 реализует событие, наступающее после удаления реляционной области
		 данных с листа отчёта.


		 ![](../../Sub_Image.gif)
		 [OnAfterExecuteDataIsland](ReportEvents.OnAfterExecuteDataIsland.htm)
		 Метод OnAfterExecuteDataIsland
		 реализует событие, происходящее после вычисления области данных
		 регламентного отчёта.


		 ![](../../Sub_Image.gif)
		 [OnAfterExecuteFormulaIsland](ReportEvents.OnAfterExecuteFormulaIsland.htm)
		 Метод OnAfterExecuteFormulaIsland
		 реализует событие, наступающее после вычисления области формул.


		 ![](../../Sub_Image.gif)
		 [OnAfterExecuteReport](ReportEvents.OnAfterExecuteReport.htm)
		 Метод OnAfterExecuteReport
		 реализует событие, происходящее после вычисления регламентного
		 отчёта.


		 ![](../../Sub_Image.gif)
		 [OnAfterExecuteTableIsland](ReportEvents.OnAfterExecuteTableIsland.htm)
		 Метод OnAfterExecuteTableIsland
		 реализует событие, которое наступает после вычисления реляционной
		 области данных.


		 ![](../../Sub_Image.gif)
		 [OnAfterExportReport](ReportEvents.OnAfterExportReport.htm)
		 Метод OnAfterExportReport
		 реализует событие, происходящее после экспорта регламентного отчёта.


		 ![](../../Sub_Image.gif)
		 [OnAfterPrintReport](ReportEvents.OnAfterPrintReport.htm)
		 Метод OnAfterPrintReport
		 реализует событие, происходящее после печати регламентного отчёта.


		 ![](../../Sub_Image.gif)
		 [OnAfterRecalcSheet](ReportEvents.OnAfterRecalcSheet.htm)
		 Метод OnAfterRecalcSheet
		 реализует событие, происходящее после вычисления листа регламентного
		 отчёта.


		 ![](../../Sub_Image.gif)
		 [OnAfterRefreshEaxGrid](ReportEvents.OnAfterRefreshEaxGrid.htm)
		 Метод OnAfterRefreshEaxGrid
		 реализует событие, наступающее после обновления аналитической
		 области данных.


		 ![](../../Sub_Image.gif)
		 [OnAfterSortEaxGrid](ReportEvents.OnAfterSortEaxGrid.htm)
		 Метод OnAfterSortEaxGrid
		 реализует событие, происходящее после сортировки данных в аналитической
		 области.


		 ![](../../Sub_Image.gif)
		 [OnAfterTransferData](ReportEvents.OnAfterTransferData.htm)
		 Метод OnAfterTransferData
		 реализует событие, происходящее после сохранения измененных значений
		 всех областей данных регламентного отчёта.


		 ![](../../Sub_Image.gif)
		 [OnAfterTransferDataDataIsland](ReportEvents.OnAfterTransferDataDataIsland.htm)
		 Метод OnAfterTransferDataDataIsland
		 реализует событие, происходящее после сохранения измененных значений
		 области данных.


		 ![](../../Sub_Image.gif)
		 [OnAfterTransferDataEaxGrid](ReportEvents.OnAfterTransferDataEaxGrid.htm)
		 Метод OnAfterTransferDataEaxGrid
		 реализует событие, происходящее после сохранения изменённых значений
		 аналитической области данных.


		 ![](../../Sub_Image.gif)
		 [OnAfterTransferDataSheet](ReportEvents.OnAfterTransferDataSheet.htm)
		 МетодOnAfterTransferDataSheet
		 реализует событие, происходящее после сохранения измененных значений
		 областей данных листа отчёта.


		 ![](../../Sub_Image.gif)
		 [OnBeforeActivateSheet](ReportEvents.OnBeforeActivateSheet.htm)
		 Метод OnBeforeActivateSheet
		 реализует событие, происходящее перед сменой активного листа регламентного
		 отчёта.


		 ![](../../Sub_Image.gif)
		 [OnBeforeChangeControlValue](ReportEvents.OnBeforeChangeControlValue.htm)
		 Метод OnBeforeChangeControlValue
		 реализует событие, происходящее до изменения значения элемента
		 управления регламентного отчёта.


		 ![](../../Sub_Image.gif)
		 [OnBeforeDeleteControl](ReportEvents.OnBeforeDeleteControl.htm)
		 Метод OnBeforeDeleteControl
		 реализует событие, происходящее перед удалением элемента управления.


		 ![](../../Sub_Image.gif)
		 [OnBeforeDeleteSheet](ReportEvents.OnBeforeDeleteSheet.htm)
		 Метод OnBeforeDeleteSheet
		 реализует событие, происходящее до удаления листа регламентного
		 отчёта.


		 ![](../../Sub_Image.gif)
		 [OnBeforeExecuteCombined](ReportEvents.OnBeforeExecuteCombined.htm)
		 Метод OnBeforeExecuteCombined
		 реализует событие, происходящее перед объединением запросов при
		 вычислении источников данных регламентного отчёта.


		 ![](../../Sub_Image.gif)
		 [OnBeforeExecuteDataIsland](ReportEvents.OnBeforeExecuteDataIsland.htm)
		 Метод OnBeforeExecuteDataIsland
		 реализует событие, происходящее перед вычислением области данных
		 регламентного отчёта.


		 ![](../../Sub_Image.gif)
		 [OnBeforeExecuteFormulaIsland](ReportEvents.OnBeforeExecuteFormulaIsland.htm)
		 Метод OnBeforeExecuteFormulaIsland
		 реализует событие, наступающее перед вычислением области формул.


		 ![](../../Sub_Image.gif)
		 [OnBeforeExecuteReport](ReportEvents.OnBeforeExecuteReport.htm)
		 Метод OnBeforeExecuteReport
		 реализует событие, происходящее перед вычислением регламентного
		 отчета.


		 ![](../../Sub_Image.gif)
		 [OnBeforeExecuteTableIsland](ReportEvents.OnBeforeExecuteTableIsland.htm)
		 Метод OnBeforeExecuteTableIsland
		 реализует событие, которое наступает перед вычислением реляционной
		 области данных.


		 ![](../../Sub_Image.gif)
		 [OnBeforeExportReport](ReportEvents.OnBeforeExportReport.htm)
		 Метод OnBeforeExportReport реализует событие, происходящее
		 перед экспортом регламентного отчёта.


		 ![](../../Sub_Image.gif)
		 [OnBeforeOpenReport](ReportEvents.OnBeforeOpenReport.htm)
		 Метод OnBeforeOpenReport
		 реализует событие, происходящее перед открытием регламентного
		 отчёта.


		 ![](../../Sub_Image.gif)
		 [OnBeforePrintReport](ReportEvents.OnBeforePrintReport.htm)
		 Метод OnBeforePrintReport
		 реализует событие, происходящее перед печатью регламентного отчёта.


		 ![](../../Sub_Image.gif)
		 [OnBeforeRecalcSheet](ReportEvents.OnBeforeRecalcSheet.htm)
		 Метод OnBeforeRecalcSheet
		 реализует событие, происходящее перед вычислением листа регламентного
		 отчёта.


		 ![](../../Sub_Image.gif)
		 [OnBeforeRefreshEaxGrid](ReportEvents.OnBeforeRefreshEaxGrid.htm)
		 Метод OnBeforeRefreshEaxGrid
		 реализует событие, наступающее перед обновлением аналитической
		 области данных.


		 ![](../../Sub_Image.gif)
		 [OnBeforeSaveReport](ReportEvents.OnBeforeSaveReport.htm)
		 Метод OnBeforeSaveReport
		 реализует событие, происходящее до сохранения отчёта.


		 ![](../../Sub_Image.gif)
		 [OnBeforeSaveToStateServer](ReportEvents.OnBeforeSaveToStateServer.htm)
		 Метод OnBeforeSaveToStateServer
		 реализует событие, наступающее перед сохранением регламентного
		 отчёта на сервер состояний.


		 ![](../../Sub_Image.gif)
		 [OnBeforeSortEaxGrid](ReportEvents.OnBeforeSortEaxGrid.htm)
		 Метод OnBeforeSortEaxGrid
		 реализует событие, происходящее перед сортировкой данных в аналитической
		 области.


		 ![](../../Sub_Image.gif)
		 [OnBeforeTransferData](ReportEvents.OnBeforeTransferData.htm)
		 Метод OnBeforeTransferData
		 реализует событие, происходящее перед сохранением измененных значений
		 всех областей данных регламентного отчёта.


		 ![](../../Sub_Image.gif)
		 [OnBeforeTransferDataDataIsland](ReportEvents.OnBeforeTransferDataDataIsland.htm)
		 Метод OnBeforeTransferDataDataIsland
		 реализует событие, происходящее перед сохранением измененных значений
		 области данных.


		 ![](../../Sub_Image.gif)
		 [OnBeforeTransferDataEaxGrid](ReportEvents.OnBeforeTransferDataEaxGrid.htm)
		 Метод OnBeforeTransferDataEaxGrid
		 реализует событие, происходящее перед сохранением изменённых значений
		 аналитической области данных.


		 ![](../../Sub_Image.gif)
		 [OnBeforeTransferDataSheet](ReportEvents.OnBeforeTransferDataSheet.htm)
		 Метод OnBeforeTransferDataSheet
		 реализует событие, происходящее перед сохранением измененных значений
		 областей данных листа отчёта.


		 ![](../../Sub_Image.gif)
		 [OnCellChange](ReportEvents.OnCellChange.htm)
		 Метод OnCellChange
		 реализует событие, происходящее при изменении значения ячейки
		 регламентного отчёта.


		 ![](../../Sub_Image.gif)
		 [OnChangeControlValue](ReportEvents.OnChangeControlValue.htm)
		 Метод OnChangeControlValue
		 реализует событие, происходящее при изменении значения элемента
		 управления регламентного отчёта.


		 ![](../../Sub_Image.gif)
		 [OnSubstituteReport](ReportEvents.OnSubstituteReport.htm)
		 Метод OnSubstituteReport
		 реализует событие, которое наступает при подмене отчёта.


## Методы, унаследованные от [IPrxReportUserEvents](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [EventOnAfterActivateSheet](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnAfterActivateSheet.htm)


		 Метод EventOnAfterActivateSheet
		 реализует событие, происходящее после смены активного листа регламентного
		 отчёта.


		 ![](../../Sub_Image.gif)
		 [EventOnAfterAddDataIsland](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnAfterAddDataIsland.htm)


		 Метод EventOnAfterAddDataIsland
		 реализует событие, которое наступает после добавления области
		 данных.


		 ![](../../Sub_Image.gif)
		 [EventOnAfterAddEaxGrid](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnAfterAddEaxGrid.htm)


		 Метод EventOnAfterAddEaxGrid
		 реализует событие, которое наступает после добавления аналитической
		 области данных.


		 ![](../../Sub_Image.gif)
		 [EventOnAfterAddFormulaIsland](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnAfterAddFormulaIsland.htm)


		 Метод EventOnAfterAddFormulaIsland
		 реализует событие, которое наступает после добавления области
		 формул.


		 ![](../../Sub_Image.gif)
		 [EventOnAfterAddSheet](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnAfterAddSheet.htm)


		 Метод EventOnAfterAddSheet
		 реализует событие, которое наступает после добавления листа.


		 ![](../../Sub_Image.gif)
		 [EventOnAfterAddTableIsland](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnAfterAddTableIsland.htm)


		 Метод EventOnAfterAddTableIsland
		 реализует событие, которое наступает после добавления реляционной
		 области данных.


		 ![](../../Sub_Image.gif)
		 [EventOnAfterDeleteDataIsland](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnAfterDeleteDataIsland.htm)


		 Метод EventOnAfterDeleteDataIsland
		 реализует событие, которое наступает после удаления области данных.


		 ![](../../Sub_Image.gif)
		 [EventOnAfterDeleteEaxGrid](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnAfterDeleteEaxGrid.htm)


		 Метод EventOnAfterDeleteEaxGrid
		 реализует событие, которое наступает после удаления аналитической
		 области данных.


		 ![](../../Sub_Image.gif)
		 [EventOnAfterDeleteFormulaIsland](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnAfterDeleteFormulaIsland.htm)


		 Метод EventOnAfterDeleteFormulaIsland
		 реализует событие, которое наступает после удаления области формул.


		 ![](../../Sub_Image.gif)
		 [EventOnAfterDeleteSheet](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnAfterDeleteSheet.htm)


		 Метод EventOnAfterDeleteSheet
		 реализует событие, которое наступает после удаления листа.


		 ![](../../Sub_Image.gif)
		 [EventOnAfterDeleteTableIsland](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnAfterDeleteTableIsland.htm)


		 Метод EventOnAfterDeleteTableIsland
		 реализует событие, которое наступает после удаления реляционной
		 области данных.


		 ![](../../Sub_Image.gif)
		 [EventOnAfterExecuteDataIsland](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnAfterExecuteDataIsland.htm)


		 Метод EventOnAfterExecuteDataIsland
		 реализует событие, происходящее после вычисления области данных
		 регламентного отчёта.


		 ![](../../Sub_Image.gif)
		 [EventOnAfterExecuteFormulaIsland](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnAfterExecuteFormulaIsland.htm)


		 Метод EventOnAfterExecuteFormulaIsland
		 реализует событие, происходящее после вычисления области формул
		 регламентного отчёта.


		 ![](../../Sub_Image.gif)
		 [EventOnAfterExecuteReport](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnAfterExecuteReport.htm)


		 Метод EventOnAfterExecuteReport
		 реализует событие, которое наступает после выполнения отчёта.


		 ![](../../Sub_Image.gif)
		 [EventOnAfterExecuteTableIsland](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnAfterExecuteTableIsland.htm)


		 Метод EventOnAfterExecuteTableIsland
		 реализует событие, которое наступает после вычисления реляционной
		 области данных.


		 ![](../../Sub_Image.gif)
		 [EventOnAfterExportReport](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnAfterExportReport.htm)


		 Метод EventOnAfterExportReport
		 реализует событие, происходящее после экспорта регламентного отчёта.


		 ![](../../Sub_Image.gif)
		 [EventOnAfterPrintReport](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnAfterPrintReport.htm)


		 Метод EventOnAfterPrintReport
		 реализует событие, которое наступает после печати регламентного
		 отчёта.


		 ![](../../Sub_Image.gif)
		 [EventOnAfterRecalcSheet](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnAfterRecalcSheet.htm)


		 Метод EventOnAfterRecalcSheet
		 реализует событие, происходящее после вычисления листа регламентного
		 отчёта.


		 ![](../../Sub_Image.gif)
		 [EventOnAfterRefreshEaxGrid](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnAfterRefreshEaxGrid.htm)


		 Метод EventOnAfterRefreshEaxGrid
		 реализует событие, происходящее после обновления аналитической
		 области данных.


		 ![](../../Sub_Image.gif)
		 [EventOnAfterSortEaxGrid](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnAfterSortEaxGrid.htm)


		 Метод EventOnAfterSortEaxGrid
		 реализует событие, происходящее после сортировки данных в аналитической
		 области.


		 ![](../../Sub_Image.gif)
		 [EventOnAfterTransferData](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnAfterTransferData.htm)


		 Метод EventOnAfterTransferData
		 реализует событие, происходящее после сохранения измененных значений
		 всех областей данных регламентного отчёта.


		 ![](../../Sub_Image.gif)
		 [EventOnAfterTransferDataDataIsland](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnAfterTransferDataDataIsland.htm)


		 Метод EventOnAfterTransferDataDataIsland
		 реализует событие, происходящее после сохранения измененных значений
		 области данных.


		 ![](../../Sub_Image.gif)
		 [EventOnAfterTransferDataEaxGrid](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnAfterTransferDataEaxGrid.htm)


		 Метод EventOnAfterTransferDataEaxGrid
		 реализует событие, происходящее после сохранения изменённых значений
		 аналитической области данных.


		 ![](../../Sub_Image.gif)
		 [EventOnAfterTransferDataSheet](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnAfterTransferDataSheet.htm)


		 Метод EventOnAfterTransferDataSheet
		 реализует событие, происходящее после сохранения измененных значений
		 областей данных листа отчёта.


		 ![](../../Sub_Image.gif)
		 [EventOnAuditOperation](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnAuditOperation.htm)


		 Метод EventOnAuditOperation
		 реализует событие, происходящее при аудите операции.


		 ![](../../Sub_Image.gif)
		 [EventOnBeforeActivateSheet](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnBeforeActivateSheet.htm)


		 Метод EventOnBeforeActivateSheet
		 реализует событие, происходящее перед сменой активного листа регламентного
		 отчёта.


		 ![](../../Sub_Image.gif)
		 [EventOnBeforeChangeControlValue](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnBeforeChangeControlValue.htm)


		 Метод EventOnBeforeChangeControlValue
		 реализует событие, происходящее до изменения значения элемента
		 управления регламентного отчёта.


		 ![](../../Sub_Image.gif)
		 [EventOnBeforeDeleteControl](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnBeforeDeleteControl.htm)


		 Метод EventOnBeforeDeleteControl
		 реализует событие, происходящее перед удалением элемента управления.


		 ![](../../Sub_Image.gif)
		 [EventOnBeforeDeleteSheet](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnBeforeDeleteSheet.htm)


		 Метод EventOnBeforeDeleteSheet
		 реализует событие, происходящее до удаления листа регламентного
		 отчёта.


		 ![](../../Sub_Image.gif)
		 [EventOnBeforeExecuteCombined](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnBeforeExecuteCombined.htm)


		 Метод EventOnBeforeExecuteCombined
		 реализует событие, происходящее перед объединением запросов при
		 вычислении источников данных регламентного отчёта.


		 ![](../../Sub_Image.gif)
		 [EventOnBeforeExecuteDataIsland](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnBeforeExecuteDataIsland.htm)


		 Метод EventOnBeforeExecuteDataIsland
		 реализует событие, происходящее перед вычислением области данных
		 регламентного отчёта.


		 ![](../../Sub_Image.gif)
		 [EventOnBeforeExecuteFormulaIsland](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnBeforeExecuteFormulaIsland.htm)


		 Метод EventOnBeforeExecuteFormulaIsland
		 реализует событие, происходящее перед вычислением области формул
		 регламентного отчета.


		 ![](../../Sub_Image.gif)
		 [EventOnBeforeExecuteReport](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnBeforeExecuteReport.htm)


		 Метод EventOnBeforeExecuteReport
		 реализует событие, происходящее перед вычислением регламентного
		 отчёта.


		 ![](../../Sub_Image.gif)
		 [EventOnBeforeExecuteTableIsland](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnBeforeExecuteTableIsland.htm)


		 Метод EventOnBeforeExecuteTableIsland
		 реализует событие, происходящее перед вычислением реляционной
		 области данных.


		 ![](../../Sub_Image.gif)
		 [EventOnBeforeExportReport](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnBeforeExportReport.htm)


		 Метод EventOnBeforeExportReport
		 реализует событие, происходящее перед экспортированием регламентного
		 отчёта.


		 ![](../../Sub_Image.gif)
		 [EventOnBeforeOpenReport](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnBeforeOpenReport.htm)


		 Метод EventOnBeforeOpenReport
		 реализует событие, происходящее перед открытием регламентного
		 отчёта.


		 ![](../../Sub_Image.gif)
		 [EventOnBeforePrintReport](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnBeforePrintReport.htm)


		 Метод EventOnBeforePrintReport
		 реализует событие, происходящее перед печатью регламентного отчёта.


		 ![](../../Sub_Image.gif)
		 [EventOnBeforeRecalcSheet](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnBeforeRecalcSheet.htm)


		 Метод EventOnBeforeRecalcSheet
		 реализует событие, происходящее перед вычислением листа регламентного
		 отчёта.


		 ![](../../Sub_Image.gif)
		 [EventOnBeforeRefreshEaxGrid](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnBeforeRefreshEaxGrid.htm)


		 Метод EventOnBeforeRefreshEaxGrid
		 реализует событие, происходящее перед обновлением аналитической
		 области данных.


		 ![](../../Sub_Image.gif)
		 [EventOnBeforeSaveReport](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnBeforeSaveReport.htm)


		 Метод EventOnBeforeSaveReport
		 реализует событие, происходящее до сохранения отчёта.


		 ![](../../Sub_Image.gif)
		 [EventOnBeforeSaveToStateServer](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnBeforeSaveToStateServer.htm)


		 Метод EventOnBeforeSaveToStateServer
		 реализует событие, наступающее перед сохранением регламентного
		 отчёта на сервер состояний.


		 ![](../../Sub_Image.gif)
		 [EventOnBeforeSortEaxGrid](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnBeforeSortEaxGrid.htm)


		 Метод EventOnBeforeSortEaxGrid
		 реализует событие, происходящее до сортировки данных в аналитической
		 области.


		 ![](../../Sub_Image.gif)
		 [EventOnBeforeTransferData](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnBeforeTransferData.htm)


		 Метод EventOnBeforeTransferData
		 реализует событие, происходящее перед сохранением измененных значений
		 всех областей данных отчёта в источник.


		 ![](../../Sub_Image.gif)
		 [EventOnBeforeTransferDataDataIsland](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnBeforeTransferDataDataIsland.htm)


		 Метод EventOnBeforeTransferDataDataIsland
		 реализует событие, происходящее перед сохранением измененных значений
		 области данных.


		 ![](../../Sub_Image.gif)
		 [EventOnBeforeTransferDataEaxGrid](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnBeforeTransferDataEaxGrid.htm)


		 Метод EventOnBeforeTransferDataEaxGrid
		 реализует событие, происходящее перед сохранением изменённых значений
		 аналитической области данных.


		 ![](../../Sub_Image.gif)
		 [EventOnBeforeTransferDataSheet](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnBeforeTransferDataSheet.htm)


		 Метод EventOnBeforeTransferDataSheet
		 реализует событие, происходящее перед сохранением измененных значений
		 областей данных листа отчёта.


		 ![](../../Sub_Image.gif)
		 [EventOnCellChange](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnCellChange.htm)


		 Метод EventOnCellChange
		 реализует событие, происходящее после изменения значения в ячейке.


		 ![](../../Sub_Image.gif)
		 [EventOnChangeControlValue](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnChangeControlValue.htm)


		 Метод EventOnChangeControlValue
		 реализует событие, происходящее при изменении значения элемента
		 управления регламентного отчёта.


		 ![](../../Sub_Image.gif)
		 [EventOnSubstituteReport](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnSubstituteReport.htm)


		 Метод EventOnSubstituteReport
		 реализует системное событие, которое наступает при подмене отчёта.


См. также:


[Классы сборки Report](../KeReport_Classes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
