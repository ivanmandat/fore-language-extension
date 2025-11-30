# UiReport: Компонент

UiReport: Компонент
-


# UiReport


## Иерархия наследования


           [IComponent](modforms.chm::/Interface/IComponent/IComponent.htm)


           [IUiMetabaseObject](KeFore.chm::/Interface/IUiMetabaseObject/IUiMetabaseObject.htm)


           [IUiReport](KeReport.chm::/Interface/IUiReport/IUiReport.htm)


           [UiReport](KeReport.chm::/Class/UiReport/UiReport.htm)


## Описание


Компонент UiReport является
 невизуальным, предназначен для предоставления доступа к данным регламентных
 отчетов.


## Работа с компонентом


После размещения компонента на форме для
 его использования выполните следующие действия:


	- В инспекторе объектов в свойстве
	 [Object](KeFore.chm::/Interface/IUiMetabaseObject/IUiMetabaseObject.Object.htm)
	 укажите регламентный отчет репозитория. Для этого в редакторе свойства
	 нажмите кнопку ![](../../Select_Button.gif) или в контекстном меню для компонента
	 выберите команду «Объект».
	 В открывшемся диалоге выберите необходимый регламентный отчет;


	- Установите свойству [Active](KeFore.chm::/Interface/IUiMetabaseObject/IUiMetabaseObject.Active.htm) значения
	 True.


После этого компонент может быть указан
 в качестве источника данных для визуальных компонентов: [ReportBox](ReportBox.htm),
 [TabSheetBox](TabSheetBox.htm) или
 [ReportControlPanel](ReportControlPanel.htm).


В коде на Fore, используя свойство
 [Instance](KeFore.chm::/Interface/IUiMetabaseObject/IUiMetabaseObject.Instance.htm),
 можно получить актуальный регламентный отчет, описываемый интерфейсом
 [IPrxReport](KeReport.chm::/Interface/IPrxReport/IPrxReport.htm).
 Также свойство [Instance](KeFore.chm::/Interface/IUiMetabaseObject/IUiMetabaseObject.Instance.htm)
 может использоваться для динамической загрузки какого-либо открытого экземпляра
 регламентного отчета.


Примечание.
 При указании в свойстве [Instance](KeFore.chm::/Interface/IUiMetabaseObject/IUiMetabaseObject.Instance.htm)
 динамически созданного регламентного отчета для него будет применён ряд
 параметров, значения которых хранятся в реестре (набор параметров, настраиваемых
 на различных вкладках диалога «[Параметры](UiReport.chm::/Desktop/Reports/UiReport_Reports_Param.htm)»).
 Если значения параметров необходимо изменить, то производить изменения
 необходимо после установки значения свойства [Instance](KeFore.chm::/Interface/IUiMetabaseObject/IUiMetabaseObject.Instance.htm).


## Свойства компонента UiReport


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Active](KeFore.chm::/Interface/IUiMetabaseObject/IUiMetabaseObject.Active.htm)
		 Свойство Active определяет
		 активность компонента.


		 ![](../../Property_Image.gif)
		 [ComponentCount](ModForms.chm::/Interface/IComponent/IComponent.ComponentCount.htm)
		 Свойство ComponentCount
		 возвращает количество дочерних компонентов.


		 ![](../../Property_Image.gif)
		 [Components](ModForms.chm::/Interface/IComponent/IComponent.Components.htm)
		 Свойство Components
		 возвращает дочерний компонент.


		 ![](../../Property_Image.gif)
		 [Data](ModForms.chm::/Interface/IComponent/IComponent.Data.htm)
		 Свойство Data предназначено
		 для хранения любых пользовательских данных.


		 ![](../../Property_Image.gif)
		 [Instance](KeFore.chm::/Interface/IUiMetabaseObject/IUiMetabaseObject.Instance.htm)
		 Свойство Instance определяет
		 данные объекта репозитория, загруженного в компонент.


		 ![](../../Property_Image.gif)
		 [Name](ModForms.chm::/Interface/IComponent/IComponent.Name.htm)
		 Свойство Name определяет
		 наименование компонента.


		 ![](../../Property_Image.gif)
		 [Object](KeFore.chm::/Interface/IUiMetabaseObject/IUiMetabaseObject.Object.htm)
		 Свойство Object определяет
		 объект репозитория, к которому необходимо получить доступ.


		 ![](../../Property_Image.gif)
		 [ObjectClassId](KeFore.chm::/Interface/IUiMetabaseObject/IUiMetabaseObject.ObjectClassId.htm)
		 Свойство ObjectClassId
		 возвращает числовой идентификатор, соответствующий классу объекта,
		 загруженного в компонент.


		 ![](../../Property_Image.gif)
		 [Report](KeReport.chm::/Interface/IUiReport/IUiReport.Report.htm)
		 Свойство Report определяет
		 регламентный отчет, данные которого будут использоваться в компоненте.


		 ![](../../Property_Image.gif)
		 [OperationMode](KeFore.chm::/Interface/IUiMetabaseObject/IUiMetabaseObject.OperationMode.htm)
		 Свойство OperationMode
		 определяет режим подключения объекта.


		 ![](../../Property_Image.gif)
		 [Tag](ModForms.chm::/Interface/IComponent/IComponent.Tag.htm)
		 Свойство Tag не используется
		 компилятором. Пользователь может изменить значение свойства Tag и использовать его по своему
		 усмотрению.


## Методы компонента UiReport


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [ClearDefault](KeFore.chm::/Interface/IUiMetabaseObject/IUiMetabaseObject.ClearDefault.htm)
		 Метод ClearDefault
		 осуществляет установку значений всех параметров объекта по умолчанию.


## События компонента UiReport


		 Имя события
		 Краткое описание


		 ![](../../Event_Image.gif)
		 [OnAfterActivateSheet](KeReport.chm::/Class/UiReport/UiReport.OnAfterActivateSheet.htm)
		 Событие OnAfterActivateSheet
		 наступает после изменения активного листа регламентного отчета.


		 ![](../../Event_Image.gif)
		 [OnAfterAddDataIsland](KeReport.chm::/Class/UiReport/UiReport.OnAfterAddDataIsland.htm)
		 Событие OnAfterAddDataIsland
		 наступает после добавления области данных.


		 ![](../../Event_Image.gif)
		 [OnAfterAddEaxGrid](KeReport.chm::/Class/UiReport/UiReport.OnAfterAddEaxGrid.htm)
		 Событие OnAfterAddEaxGrid
		 наступает после добавления аналитической области данных.


		 ![](../../Event_Image.gif)
		 [OnAfterAddFormulaIsland](KeReport.chm::/Class/UiReport/UiReport.OnAfterAddFormulaIsland.htm)
		 Событие OnAfterAddFormulaIsland
		 наступает после добавления области формул.


		 ![](../../Event_Image.gif)
		 [OnAfterAddSheet](KeReport.chm::/Class/UiReport/UiReport.OnAfterAddSheet.htm)
		 Событие OnAfterAddSheet
		 наступает которое наступает после добавления листа.


		 ![](../../Event_Image.gif)
		 [OnAfterAddTableIsland](KeReport.chm::/Class/UiReport/UiReport.OnAfterAddTableIsland.htm)
		 Событие OnAfterAddTableIsland
		 наступает после добавления реляционной области данных.


		 ![](../../Event_Image.gif)
		 [OnAfterDeleteDataIsland](KeReport.chm::/Class/UiReport/UiReport.OnAfterDeleteDataIsland.htm)
		 Событие OnAfterDeleteDataIsland
		 наступает после удаления области данных.


		 ![](../../Event_Image.gif)
		 [OnAfterDeleteEaxGrid](KeReport.chm::/Class/UiReport/UiReport.OnAfterDeleteEaxGrid.htm)
		 Событие OnAfterDeleteEaxGrid
		 наступает после удаления аналитической области данных.


		 ![](../../Event_Image.gif)
		 [OnAfterDeleteFormulaIsland](KeReport.chm::/Class/UiReport/UiReport.OnAfterDeleteFormulaIsland.htm)
		 Событие OnAfterDeleteFormulaIsland
		 наступает после удаления области формул.


		 ![](../../Event_Image.gif)
		 [OnAfterDeleteSheet](KeReport.chm::/Class/UiReport/UiReport.OnAfterDeleteSheet.htm)
		 Событие OnAfterDeleteSheet
		 наступает после удаления листа.


		 ![](../../Event_Image.gif)
		 [OnAfterDeleteTableIsland](KeReport.chm::/Class/UiReport/UiReport.OnAfterDeleteTableIsland.htm)
		 Событие OnAfterDeleteTableIsland
		 наступает после удаления реляционной области данных.


		 ![](../../Event_Image.gif)
		 [OnAfterExecuteDataIsland](KeReport.chm::/Class/UiReport/UiReport.OnAfterExecuteDataIsland.htm)
		 Событие OnAfterExecuteDataIsland
		 наступает после вычисления области данных.


		 ![](../../Event_Image.gif)
		 [OnAfterExecuteFormulaIsland](KeReport.chm::/Class/UiReport/UiReport.OnAfterExecuteFormulaIsland.htm)
		 Событие OnAfterExecuteFormulaIsland
		 наступает после вычисления области формул регламентного отчёта.


		 ![](../../Event_Image.gif)
		 [OnAfterExecuteReport](KeReport.chm::/Class/UiReport/UiReport.OnAfterExecuteReport.htm)
		 Событие OnAfterExecuteReport
		 наступает после вычисления регламентного отчета.


		 ![](../../Event_Image.gif)
		 [OnAfterExecuteTableIsland](KeReport.chm::/Class/UiReport/UiReport.OnAfterExecuteTableIsland.htm)
		 Событие OnAfterExecuteTableIsland
		 наступает после вычисления реляционной области данных.


		 ![](../../Event_Image.gif)
		 [OnAfterExportReport](KeReport.chm::/Class/UiReport/UiReport.OnAfterExportReport.htm)
		 Событие OnAfterExportReport
		 наступает после экспорта регламентного отчета.


		 ![](../../Event_Image.gif)
		 [OnAfterPrintReport](KeReport.chm::/Class/UiReport/UiReport.OnAfterPrintReport.htm)
		 Событие OnAfterPrintReport
		 наступает после печати регламентного отчета.


		 ![](../../Event_Image.gif)
		 [OnAfterRecalcSheet](KeReport.chm::/Class/UiReport/UiReport.OnAfterRecalcSheet.htm)
		 Событие OnAfterRecalcSheet
		 наступает после вычисления листа регламентного отчета.


		 ![](../../Event_Image.gif)
		 [OnAfterRefreshEaxGrid](KeReport.chm::/Class/UiReport/UiReport.OnAfterRefreshEaxGrid.htm)
		 Событие OnAfterRefreshEaxGrid
		 наступает после обновления аналитической области данных.


		 ![](../../Event_Image.gif)
		 [OnAfterSortEaxGrid](KeReport.chm::/Class/UiReport/UiReport.OnAfterSortEaxGrid.htm)
		 Событие OnAfterSortEaxGrid
		 наступает после сортировки данных в аналитической области.


		 ![](../../Event_Image.gif)
		 [OnAfterTransferData](KeReport.chm::/Class/UiReport/UiReport.OnAfterTransferData.htm)
		 Событие OnAfterTransferData
		 наступает после сохранения данных в источники регламентного отчета.


		 ![](../../Event_Image.gif)
		 [OnAfterTransferDataDataIsland](KeReport.chm::/Class/UiReport/UiReport.OnAfterTransferDataDataIsland.htm)
		 Событие OnAfterTransferDataDataIsland
		 наступает после сохранения измененных значений области данных.


		 ![](../../Event_Image.gif)
		 [OnAfterTransferDataEaxGrid](KeReport.chm::/Class/UiReport/UiReport.OnAfterTransferDataEaxGrid.htm)
		 Событие OnAfterTransferDataEaxGrid
		 наступает после сохранения изменённых значений аналитической области
		 данных.


		 ![](../../Event_Image.gif)
		 [OnAfterTransferDataSheet](KeReport.chm::/Class/UiReport/UiReport.OnAfterTransferDataSheet.htm)
		 Событие OnAfterTransferDataSheet
		 наступает после сохранения измененных значений областей данных
		 листа отчета.


		 ![](../../Event_Image.gif)
		 [OnBeforeActivateSheet](KeReport.chm::/Class/UiReport/UiReport.OnBeforeActivateSheet.htm)
		 Событие OnBeforeActivateSheet
		 наступает перед изменением активного листа регламентного отчета.


		 ![](../../Event_Image.gif)
		 [OnBeforeChangeControlValue](KeReport.chm::/Class/UiReport/UiReport.OnBeforeChangeControlValue.htm)
		 Событие OnBeforeChangeControlValue
		 наступает до изменения значения элемента управления регламентного
		 отчёта.


		 ![](../../Event_Image.gif)
		 [OnBeforeDeleteControl](KeReport.chm::/Class/UiReport/UiReport.OnBeforeDeleteControl.htm)
		 Событие OnBeforeDeleteControl
		 наступает перед удалением элемента управления.


		 ![](../../Event_Image.gif)
		 [OnBeforeDeleteSheet](KeReport.chm::/Class/UiReport/UiReport.OnBeforeDeleteSheet.htm)
		 Событие OnBeforeDeleteSheet
		 наступает до удаления листа регламентного отчёта.


		 ![](../../Event_Image.gif)
		 [OnBeforeExecuteCombined](KeReport.chm::/Class/UiReport/UiReport.OnBeforeExecuteCombined.htm)
		 Событие OnBeforeExecuteCombined
		 наступает перед объединением запросов при вычислении источников
		 данных регламентного отчёта.


		 ![](../../Event_Image.gif)
		 [OnBeforeExecuteDataIsland](KeReport.chm::/Class/UiReport/UiReport.OnBeforeExecuteDataIsland.htm)
		 Событие OnBeforeExecuteDataIsland
		 наступает перед вычислением области данных.


		 ![](../../Event_Image.gif)
		 [OnBeforeExecuteFormulaIsland](KeReport.chm::/Class/UiReport/UiReport.OnBeforeExecuteFormulaIsland.htm)
		 Событие OnBeforeExecuteFormulaIsland
		 наступает перед вычислением области формул регламентного отчета.


		 ![](../../Event_Image.gif)
		 [OnBeforeExportReport](KeReport.chm::/Class/UiReport/UiReport.OnBeforeExportReport.htm)
		 Событие OnBeforeExecuteReport
		 наступает перед вычислением регламентного отчета.


		 ![](../../Event_Image.gif)
		 [OnBeforeExecuteTableIsland](KeReport.chm::/Class/UiReport/UiReport.OnBeforeExecuteTableIsland.htm)
		 Событие OnBeforeExecuteTableIsland
		 наступает перед вычислением реляционной области данных.


		 ![](../../Event_Image.gif)
		 [OnBeforeExportReport](KeReport.chm::/Class/UiReport/UiReport.OnBeforeExportReport.htm)
		 Событие OnBeforeExportReport
		 наступает перед экспортом регламентного отчета.


		 ![](../../Event_Image.gif)
		 [OnBeforePrintReport](KeReport.chm::/Class/UiReport/UiReport.OnBeforePrintReport.htm)
		 Событие OnBeforePrintReport
		 наступает перед печатью регламентного отчета.


		 ![](../../Event_Image.gif)
		 [OnBeforeRecalcSheet](KeReport.chm::/Class/UiReport/UiReport.OnBeforeRecalcSheet.htm)
		 Событие OnBeforeRecalcSheet
		 наступает перед вычислением листа регламентного отчета.


		 ![](../../Event_Image.gif)
		 [OnBeforeRefreshEaxGrid](KeReport.chm::/Class/UiReport/UiReport.OnBeforeRefreshEaxGrid.htm)
		 Событие OnBeforeRefreshEaxGrid
		 наступает перед обновлением аналитической области данных.


		 ![](../../Event_Image.gif)
		 [OnBeforeSaveReport](KeReport.chm::/Class/UiReport/UiReport.OnBeforeSaveReport.htm)
		 Событие OnBeforeSaveReport
		 наступает до сохранения отчета.


		 ![](../../Event_Image.gif)
		 [OnBeforeSaveToStateServer](KeReport.chm::/Class/UiReport/UiReport.OnBeforeSaveToStateServer.htm)
		 Событие OnBeforeSaveToStateServer
		 наступает перед сохранением регламентного отчёта на сервер состояний.


		 ![](../../Event_Image.gif)
		 [OnBeforeSortEaxGrid](KeReport.chm::/Class/UiReport/UiReport.OnBeforeSortEaxGrid.htm)
		 Событие OnBeforeSortEaxGrid
		 наступает до сортировки данных в аналитической области.


		 ![](../../Event_Image.gif)
		 [OnBeforeTransferData](KeReport.chm::/Class/UiReport/UiReport.OnBeforeTransferData.htm)
		 Событие OnBeforeTransferData
		 наступает перед сохранением данных в источники регламентного отчета.


		 ![](../../Event_Image.gif)
		 [OnBeforeTransferDataDataIsland](KeReport.chm::/Class/UiReport/UiReport.OnBeforeTransferDataDataIsland.htm)
		 Событие OnBeforeTransferDataDataIsland
		 наступает перед сохранением измененных значений области данных.


		 ![](../../Event_Image.gif)
		 [OnBeforeTransferDataEaxGrid](KeReport.chm::/Class/UiReport/UiReport.OnBeforeTransferDataEaxGrid.htm)
		 Событие OnBeforeTransferDataEaxGrid
		 наступает перед сохранением изменённых значений аналитической
		 области данных.


		 ![](../../Event_Image.gif)
		 [OnBeforeTransferDataSheet](KeReport.chm::/Class/UiReport/UiReport.OnBeforeTransferDataSheet.htm)
		 Событие OnBeforeTransferDataSheet
		 наступает перед сохранением измененных значений областей данных
		 листа отчета.


		 ![](../../Event_Image.gif)
		 [OnCellChange](KeReport.chm::/Class/UiReport/UiReport.OnCellChange.htm)
		 Событие OnCellChange
		 наступает после изменения значения в ячейке.


		 ![](../../Event_Image.gif)
		 [OnChangeControlValue](KeReport.chm::/Class/UiReport/UiReport.OnChangeControlValue.htm)
		 Событие OnChangeControlValue
		 наступает при изменении значения элемента управления регламентного
		 отчета.


		 ![](../../Event_Image.gif)
		 [OnSubstituteReport](KeReport.chm::/Class/UiReport/UiReport.OnSubstituteReport.htm)
		 Событие OnSubstituteReport
		 наступает при подмене отчёта.


См. также:


[Компоненты доступа
 к данным](03_components_of_the_access_to_data.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
