# UiReport

UiReport
-


# UiReport


Сборка: Report;


## Описание


Класс UiReport реализует компонент
 среды разработки [UiReport](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/UiReport.htm),
 предназначенный для связи визуальных компонентов [ReportBox](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/ReportBox.htm)
 и [ReportControlPanel](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/ReportControlPanel.htm)
 с регламентными отчётами репозитория.


## Свойства, унаследованные от [IUiReport](../../Interface/IUiReport/IUiReport.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Report](../../Interface/IUiReport/IUiReport.Report.htm)
		 Свойство Report определяет
		 регламентный отчет, реализуемый интерфейсом [IPrxReport](../../Interface/IPrxReport/IPrxReport.htm).


## Свойства, унаследованные от [IUiMetabaseObject](KeFore.chm::/Interface/IUiMetabaseObject/IUiMetabaseObject.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Active](KeFore.chm::/Interface/IUiMetabaseObject/IUiMetabaseObject.Active.htm)
		 Свойство Active определяет,
		 будет ли активным компонент.


		 ![](../../Property_Image.gif)
		 [Instance](KeFore.chm::/Interface/IUiMetabaseObject/IUiMetabaseObject.Instance.htm)
		 Свойство Instance определяет
		 данные объекта репозитория, загруженного в компонент.


		 ![](../../Property_Image.gif)
		 [Object](KeFore.chm::/Interface/IUiMetabaseObject/IUiMetabaseObject.Object.htm)
		 Свойство Object определяет
		 справочник репозитория, к которому необходимо получить доступ.


		 ![](../../Property_Image.gif)
		 [ObjectClassId](KeFore.chm::/Interface/IUiMetabaseObject/IUiMetabaseObject.ObjectClassId.htm)
		 Свойство ObjectClassId
		 возвращает числовой идентификатор, соответствующий классу объекта,
		 загруженного в компонент.


		 ![](../../Property_Image.gif)
		 [OperationMode](KeFore.chm::/Interface/IUiMetabaseObject/IUiMetabaseObject.OperationMode.htm)
		 Свойство OperationMode
		 определяет режим подключения объекта.


## Свойства, унаследованные от [IComponent](ModForms.chm::/Interface/IComponent/IComponent.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ComponentCount](ModForms.chm::/Interface/IComponent/IComponent.ComponentCount.htm)
		 Свойство ComponentCount
		 возвращает количество дочерних компонентов, расположенных на родительском
		 компоненте.


		 ![](../../Property_Image.gif)
		 [Components](ModForms.chm::/Interface/IComponent/IComponent.Components.htm)
		 Свойство Components
		 возвращает дочерний компонент, индекс которого передается
		 посредством входного параметра.


		 ![](../../Property_Image.gif)
		 [Data](ModForms.chm::/Interface/IComponent/IComponent.Data.htm)
		 Свойство Data предназначено
		 для хранения любых пользовательских данных.


		 ![](../../Property_Image.gif)
		 [Name](ModForms.chm::/Interface/IComponent/IComponent.Name.htm)
		 Свойство Name определяет
		 наименование компонента.


		 ![](../../Property_Image.gif)
		 [Tag](ModForms.chm::/Interface/IComponent/IComponent.Tag.htm)
		 Свойство Tag не используется
		 компилятором. Пользователь может изменить значение данного свойства
		 и использовать его по своему усмотрению.


## Методы, унаследованные от [IUiMetabaseObject](KeFore.chm::/Interface/IUiMetabaseObject/IUiMetabaseObject.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [ClearDefault](KeFore.chm::/Interface/IUiMetabaseObject/IUiMetabaseObject.ClearDefault.htm)
		 Метод ClearDefault
		 осуществляет установку значений всех параметров объекта по умолчанию.


## События


		 Имя события
		 Краткое описание


		 ![](../../Event_Image.gif)
		 [OnAfterActivateSheet](UiReport.OnAfterActivateSheet.htm)
		 Событие OnAfterActivateSheet
		 наступает после изменения активного листа регламентного отчета.


		 ![](../../Event_Image.gif)
		 [OnAfterAddDataIsland](UiReport.OnAfterAddDataIsland.htm)
		 Событие OnAfterAddDataIsland
		 наступает после добавления области данных.


		 ![](../../Event_Image.gif)
		 [OnAfterAddEaxGrid](UiReport.OnAfterAddEaxGrid.htm)
		 Событие OnAfterAddEaxGrid
		 наступает после добавления аналитической области данных.


		 ![](../../Event_Image.gif)
		 [OnAfterAddFormulaIsland](UiReport.OnAfterAddFormulaIsland.htm)
		 Событие OnAfterAddFormulaIsland
		 наступает после добавления области формул.


		 ![](../../Event_Image.gif)
		 [OnAfterAddSheet](UiReport.OnAfterAddSheet.htm)
		 Событие OnAfterAddSheet
		 наступает которое наступает после добавления листа.


		 ![](../../Event_Image.gif)
		 [OnAfterAddTableIsland](UiReport.OnAfterAddTableIsland.htm)
		 Событие OnAfterAddTableIsland
		 наступает после добавления реляционной области данных.


		 ![](../../Event_Image.gif)
		 [OnAfterDeleteDataIsland](UiReport.OnAfterDeleteDataIsland.htm)
		 Событие OnAfterDeleteDataIsland
		 наступает после удаления области данных.


		 ![](../../Event_Image.gif)
		 [OnAfterDeleteEaxGrid](UiReport.OnAfterDeleteEaxGrid.htm)
		 Событие OnAfterDeleteEaxGrid
		 наступает после удаления аналитической области данных.


		 ![](../../Event_Image.gif)
		 [OnAfterDeleteFormulaIsland](UiReport.OnAfterDeleteFormulaIsland.htm)
		 Событие OnAfterDeleteFormulaIsland
		 наступает после удаления области формул.


		 ![](../../Event_Image.gif)
		 [OnAfterDeleteSheet](UiReport.OnAfterDeleteSheet.htm)
		 Событие OnAfterDeleteSheet
		 наступает после удаления листа.


		 ![](../../Event_Image.gif)
		 [OnAfterDeleteTableIsland](UiReport.OnAfterDeleteTableIsland.htm)
		 Событие OnAfterDeleteTableIsland
		 наступает после удаления реляционной области данных.


		 ![](../../Event_Image.gif)
		 [OnAfterExecuteDataIsland](UiReport.OnAfterExecuteDataIsland.htm)
		 Событие OnAfterExecuteDataIsland
		 наступает после вычисления области данных.


		 ![](../../Event_Image.gif)
		 [OnAfterExecuteFormulaIsland](UiReport.OnAfterExecuteFormulaIsland.htm)
		 Событие OnAfterExecuteFormulaIsland
		 наступает после вычисления области формул регламентного отчёта.


		 ![](../../Event_Image.gif)
		 [OnAfterExecuteReport](UiReport.OnAfterExecuteReport.htm)
		 Событие OnAfterExecuteReport
		 наступает после вычисления регламентного отчета.


		 ![](../../Event_Image.gif)
		 [OnAfterExecuteTableIsland](UiReport.OnAfterExecuteTableIsland.htm)
		 Событие OnAfterExecuteTableIsland
		 наступает после вычисления реляционной области данных.


		 ![](../../Event_Image.gif)
		 [OnAfterExportReport](UiReport.OnAfterExportReport.htm)
		 Событие OnAfterExportReport
		 наступает после экспорта регламентного отчета.


		 ![](../../Event_Image.gif)
		 [OnAfterPrintReport](UiReport.OnAfterPrintReport.htm)
		 Событие OnAfterPrintReport
		 наступает после печати регламентного отчета.


		 ![](../../Event_Image.gif)
		 [OnAfterRecalcSheet](UiReport.OnAfterRecalcSheet.htm)
		 Событие OnAfterRecalcSheet
		 наступает после вычисления листа регламентного отчета.


		 ![](../../Event_Image.gif)
		 [OnAfterRefreshEaxGrid](UiReport.OnAfterRefreshEaxGrid.htm)
		 Событие OnAfterRefreshEaxGrid
		 наступает после обновления аналитической области данных.


		 ![](../../Event_Image.gif)
		 [OnAfterSortEaxGrid](UiReport.OnAfterSortEaxGrid.htm)
		 Событие OnAfterSortEaxGrid
		 наступает после сортировки данных в аналитической области.


		 ![](../../Event_Image.gif)
		 [OnAfterTransferData](UiReport.OnAfterTransferData.htm)
		 Событие OnAfterTransferData
		 наступает после сохранения данных в источники регламентного отчета.


		 ![](../../Event_Image.gif)
		 [OnAfterTransferDataDataIsland](UiReport.OnAfterTransferDataDataIsland.htm)
		 Событие OnAfterTransferDataDataIsland
		 наступает после сохранения измененных значений области данных.


		 ![](../../Event_Image.gif)
		 [OnAfterTransferDataEaxGrid](UiReport.OnAfterTransferDataEaxGrid.htm)
		 Событие OnAfterTransferDataEaxGrid
		 наступает после сохранения изменённых значений аналитической области
		 данных.


		 ![](../../Event_Image.gif)
		 [OnAfterTransferDataSheet](UiReport.OnAfterTransferDataSheet.htm)
		 Событие OnAfterTransferDataSheet
		 наступает после сохранения измененных значений областей данных
		 листа отчета.


		 ![](../../Event_Image.gif)
		 [On](UiReport.OnBeforeActivateSheet.htm)[BeforeActivateSheet](UiReport.OnAfterTransferDataSheet.htm)
		 Событие OnBeforeActivateSheet
		 наступает перед изменением активного листа регламентного отчета.


		 ![](../../Event_Image.gif)
		 [OnBeforeChangeControlValue](UiReport.OnBeforeChangeControlValue.htm)
		 Событие OnBeforeChangeControlValue
		 наступает до изменения значения элемента управления регламентного
		 отчёта.


		 ![](../../Event_Image.gif)
		 [OnBeforeDeleteControl](UiReport.OnBeforeDeleteControl.htm)
		 Событие OnBeforeDeleteControl
		 наступает перед удалением элемента управления.


		 ![](../../Event_Image.gif)
		 [OnBeforeDeleteSheet](UiReport.OnBeforeDeleteSheet.htm)
		 Событие OnBeforeDeleteSheet
		 наступает до удаления листа регламентного отчёта.


		 ![](../../Event_Image.gif)
		 [OnBeforeExecuteCombined](UiReport.OnBeforeExecuteCombined.htm)
		 Событие OnBeforeExecuteCombined
		 наступает перед объединением запросов при вычислении источников
		 данных регламентного отчёта.


		 ![](../../Event_Image.gif)
		 [OnBeforeExecuteDataIsland](UiReport.OnBeforeExecuteDataIsland.htm)
		 Событие OnBeforeExecuteDataIsland
		 наступает перед вычислением области данных.


		 ![](../../Event_Image.gif)
		 [OnBeforeExecuteFormulaIsland](UiReport.OnBeforeExecuteFormulaIsland.htm)
		 Событие OnBeforeExecuteFormulaIsland
		 наступает перед вычислением области формул регламентного отчета.


		 ![](../../Event_Image.gif)
		 [OnBeforeExecuteReport](UiReport.OnBeforeExecuteReport.htm)
		 Событие OnBeforeExecuteReport
		 наступает перед вычислением регламентного отчета.


		 ![](../../Event_Image.gif)
		 [OnBeforeExecuteTableIsland](UiReport.OnBeforeExecuteTableIsland.htm)
		 Событие OnBeforeExecuteTableIsland
		 наступает перед вычислением реляционной области данных.


		 ![](../../Event_Image.gif)
		 [OnBeforeExportReport](UiReport.OnBeforeExportReport.htm)
		 Событие OnBeforeExportReport
		 наступает перед экспортом регламентного отчета.


		 ![](../../Event_Image.gif)
		 [OnBeforePrintReport](UiReport.OnBeforePrintReport.htm)
		 Событие OnBeforePrintReport
		 наступает перед печатью регламентного отчета.


		 ![](../../Event_Image.gif)
		 [OnBeforeRecalcSheet](UiReport.OnBeforeRecalcSheet.htm)
		 Событие OnBeforeRecalcSheet
		 наступает перед вычислением листа регламентного отчета.


		 ![](../../Event_Image.gif)
		 [OnBeforeRefreshEaxGrid](UiReport.OnBeforeRefreshEaxGrid.htm)
		 Событие OnBeforeRefreshEaxGrid
		 наступает перед обновлением аналитической области данных.


		 ![](../../Event_Image.gif)
		 [OnBeforeSaveReport](UiReport.OnBeforeSaveReport.htm)
		 Событие OnBeforeSaveReport
		 наступает до сохранения отчета.


		 ![](../../Event_Image.gif)
		 [OnBeforeSaveToStateServer](UiReport.OnBeforeSaveToStateServer.htm)
		 Событие OnBeforeSaveToStateServer
		 наступает перед сохранением регламентного отчёта на сервер состояний.


		 ![](../../Event_Image.gif)
		 [OnBeforeSortEaxGrid](UiReport.OnBeforeSortEaxGrid.htm)
		 Событие OnBeforeSortEaxGrid
		 наступает до сортировки данных в аналитической области.


		 ![](../../Event_Image.gif)
		 [OnBeforeTransferData](UiReport.OnBeforeTransferData.htm)
		 Событие OnBeforeTransferData
		 наступает перед сохранением данных в источники регламентного отчета.


		 ![](../../Event_Image.gif)
		 [OnBeforeTransferDataDataIsland](UiReport.OnBeforeTransferDataDataIsland.htm)
		 Событие OnBeforeTransferDataDataIsland
		 наступает перед сохранением измененных значений области данных.


		 ![](../../Event_Image.gif)
		 [OnBeforeTransferDataEaxGrid](UiReport.OnBeforeTransferDataEaxGrid.htm)
		 Событие OnBeforeTransferDataEaxGrid
		 наступает перед сохранением изменённых значений аналитической
		 области данных.


		 ![](../../Event_Image.gif)
		 [OnBeforeTransferDataSheet](UiReport.OnBeforeTransferDataSheet.htm)
		 Событие OnBeforeTransferDataSheet
		 наступает перед сохранением измененных значений областей данных
		 листа отчета.


		 ![](../../Event_Image.gif)
		 [OnCellChange](UiReport.OnCellChange.htm)
		 Событие OnCellChange
		 наступает после изменения значения в ячейке.


		 ![](../../Event_Image.gif)
		 [OnChangeControlValue](UiReport.OnChangeControlValue.htm)
		 Событие OnChangeControlValue
		 наступает при изменении значения элемента управления регламентного
		 отчета.


		 ![](../../Event_Image.gif)
		 [OnSubstituteReport](UiReport.OnSubstituteReport.htm)
		 Событие OnSubstituteReport
		 наступает при подмене отчёта.


См. также:


[Классы сборки Report](../KeReport_Classes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
