# Работа с регламентными отчётами

Работа с регламентными отчётами
-


# Работа с регламентными отчётами


В данном разделе представлено описание операций, предназначенных для
 специализированной работы с отдельными сущностями регламентного отчёта.
 Данные операции позволяют минимизировать размер отправляемых запросов,
 ускорить их выполнение. Операции позволяют производить следующие действия:


	- изменять список источников данных отчёта, изменять список и
	 настройки срезов данных на базе этих источников;


	- работать с аналитической областью данных, через которую строится
	 вся работа с данными источников;


	- работать с коллекцией страниц регламентного отчёта;


	- работать с визуализаторами, диаграммами, расположенными на листах;


	- работать с элементами управления.


## Операции


		 Операция
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [GetPrxMeta](GetPrxMeta.htm)
		 Операция GetPrxMeta
		 извлекает метаданные регламентного отчёта.


		 ![](../../Sub_Image.gif)
		 [GetPrxMetaOptions](GetPrxMetaOptions.htm)
		 Операция GetPrxMetaOptions
		 получает настройки регламентного отчёта.


		 ![](../../Sub_Image.gif)
		 [GetUpdateSettings](GetUpdateSettings.htm)
		 Операция GetUpdateSettings
		 получает параметры автоматического обновления регламентного отчёта.


		 ![](../../Sub_Image.gif)
		 [OpenPrxMeta](OpenPrxMeta.htm)
		 Операция OpenPrxMeta
		 открывает регламентный отчёт и предоставляет доступ для работы
		 с его метаданными.


		 ![](../../Sub_Image.gif)
		 [SetActiveReport](SetActiveReport.htm)
		 Операция SetActiveReport
		 устанавливает активный регламентный отчёт для текущей сессии пользователя.


		 ![](../../Sub_Image.gif)
		 [SetPrxMeta](SetPrxMeta.htm)
		 Операция SetPrxMeta
		 изменяет метаданные регламентного отчёта.


		 ![](../../Sub_Image.gif)
		 [SetPrxMetaOptions](SetPrxMetaOptions.htm)
		 Операция SetPrxMetaOptions
		 изменяет настройки регламентного отчёта.


		 ![](../../Sub_Image.gif)
		 [SetUpdateSettings](SetUpdateSettings.htm)
		 Операция SetUpdateSettings
		 изменяет параметры автоматического обновления регламентного отчёта.


		 ![](../../Sub_Image.gif)
		 [ClosePrxMeta](ClosePrxMeta.htm)
		 Операция ClosePrxMeta
		 закрывает экземпляр регламентного отчёта.


		 ![](../../Sub_Image.gif)
		 [PrxMetaRefreshDataSources](PrxMetaRefreshDataSources.htm)
		 Операция PrxMetaRefreshDataSources
		 переоткрывает источники данных регламентного отчёта.


		 ![](../../Sub_Image.gif)
		 [PrxMetaRejectDataChanges](PrxMetaRejectDataChanges.htm)
		 Операция PrxMetaRejectDataChanges
		 отменяет изменения в данных табличных областей регламентного отчёта
		 или листа отчёта.


		 ![](../../Sub_Image.gif)
		 [PrxMetaReportExport](PrxMetaReportExport.htm)
		 Операция PrxMetaReportExport
		 экспортирует регламентный отчёт во внешний файл.


		 ![](../../Sub_Image.gif)
		 [PrxMetaReportRecalc](PrxMetaReportRecalc.htm)
		 Операция PrxMetaReportRecalc
		 вычисляет экземпляр регламентного отчёта.


		 ![](../../Sub_Image.gif)
		 [PrxMetaToolbarReset](PrxMetaToolbarReset.htm)
		 Операция PrxMetaToolbarReset
		 сбрасывает настройки панели инструментов в регламентном отчёте.


		 ![](../../Sub_Image.gif)
		 [PrxObjectCreate](PrxObjectCreate.htm)
		 Операция PrxObjectCreate
		 создаёт новый объект на листе регламентного отчёта.


		 ![](../../Sub_Image.gif)
		 [UndoRedoEndGroup](UndoRedoEndGroup.htm)
		 Операция UndoRedoEndGroup
		 заканчивает группировку действий пользователя для стека изменений.


		 ![](../../Sub_Image.gif)
		 [UndoRedoStartGroup](UndoRedoStartGroup.htm)
		 Операция UndoRedoStartGroup
		 начинает группировку действий пользователя для стека изменений.


Операции для работы
 с листами отчёта:


		 Операция
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [GetPrxMetaChangePoints](GetPrxMetaChangePoints.htm)
		 Операция GetPrxMetaChangePoints
		 получает историю изменения значения в ячейке среза данных.


		 ![](../../Sub_Image.gif)
		 [GetPrxMetaJsPlugin](GetPrxMetaJsPlugin.htm)
		 Операция GetPrxMetaJsPlugin
		 получает настройки листа регламентного отчёта, который формируется
		 с помощью JS-плагина.


		 ![](../../Sub_Image.gif)
		 [GetPrxMetaSheetPageSettings](GetPrxMetaSheetPageSettings.htm)
		 Операция GetPrxMetaSheetPageSettings
		 получает настройки печати, заданные для листа регламентного отчёта.


		 ![](../../Sub_Image.gif)
		 [GetTabProtection](GetTabProtection.htm)
		 Операция GetTabProtection
		 получает информацию о защите таблицы листа регламентного отчёта.


		 ![](../../Sub_Image.gif)
		 [PrxMetaSheetAutoFilter](PrxMetaSheetAutoFilter.htm)
		 Операция PrxMetaSheetAutoFilter
		 включает/выключает автофильтр на листе регламентного отчёта.


		 ![](../../Sub_Image.gif)
		 [PrxMetaSheetRecalc](PrxMetaSheetRecalc.htm)
		 Операция PrxMetaSheetRecalc
		 вычисляет лист регламентного отчёта.


		 ![](../../Sub_Image.gif)
		 [PrxMetaSheetsAdd](PrxMetaSheetsAdd.htm)
		 Операция PrxMetaSheetsAdd
		 добавляет новый лист в регламентный отчёт.


		 ![](../../Sub_Image.gif)
		 [PrxMetaSheetsDelete](PrxMetaSheetsDelete.htm)
		 Операция PrxMetaSheetsDelete
		 удаляет лист регламентного отчёта.


		 ![](../../Sub_Image.gif)
		 [PrxMetaSheetsDuplicate](PrxMetaSheetsDuplicate.htm)
		 Операция PrxMetaSheetsDuplicate
		 создаёт дубликат листа в регламентном отчёте.


		 ![](../../Sub_Image.gif)
		 [PrxMetaSheetsMove](PrxMetaSheetsMove.htm)
		 Операция PrxMetaSheetsMove
		 перемещает листы в регламентном отчёте.


		 ![](../../Sub_Image.gif)
		 [PrxMetaSheetUserCommentsCRUD](PrxMetaSheetUserCommentsCRUD.htm)
		 Операция PrxMetaSheetUserCommentsCRUD
		 предназначена для работы с комментариями у ячейки с данными.


		 ![](../../Sub_Image.gif)
		 [SetPrxMetaJsPlugin](SetPrxMetaJsPlugin.htm)
		 Операция SetPrxMetaJsPlugin
		 изменяет настройки листа регламентного отчёта, который формируется
		 с помощью JS-плагина.


		 ![](../../Sub_Image.gif)
		 [SetPrxMetaSheetPageSettings](SetPrxMetaSheetPageSettings.htm)
		 Операция SetPrxMetaSheetPageSettings
		 изменяет настройки печати листа регламентного отчёта.


		 ![](../../Sub_Image.gif)
		 [SetTabProtection](SetTabProtection.htm)
		 Операция SetTabProtection
		 изменяет защиту таблицы листа регламентного отчёта.


Операции
 для работы с элементами управления:


		 Операция
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [PrxMetaControlsAdd](PrxMetaControlsAdd.htm)
		 Операция PrxMetaControlsAdd
		 создаёт элемент управления в регламентном отчёте.


		 ![](../../Sub_Image.gif)
		 [PrxMetaControlsDelete](PrxMetaControlsDelete.htm)
		 Операция PrxMetaControlsDelete
		 удаляет элемент управления в регламентном отчёте.


		 ![](../../Sub_Image.gif)
		 [PrxMetaControlsMove](PrxMetaControlsMove.htm)
		 Операция PrxMetaControlsMove
		 перемещает элемент управления в регламентном отчёте.


Операции для работы
 с визуализаторами:


		 Операция
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CheckExcludeGridElem](CheckExcludeGridElem.htm)
		 Операция CheckExcludeGridElem
		 проверяет возможность исключения элемента(ов) из таблицы.


		 ![](../../Sub_Image.gif)
		 [DataAreaGridRefreshPart](DataAreaGridRefreshPart.htm)
		 Операция DataAreaGridRefreshPart
		 обновляет заданную область таблицы.


		 ![](../../Sub_Image.gif)
		 [DataAreaViewsDelete](DataAreaViewsDelete.htm)
		 Операция DataAreaViewsDelete
		 удаляет визуализатор в регламентном отчёте.


		 ![](../../Sub_Image.gif)
		 [DrillAction](DrillAction.htm)
		 Операция DrillAction
		 выполняет детализацию данных.


		 ![](../../Sub_Image.gif)
		 [DrillCheck](DrillCheck.htm)
		 Операция DrillCheck
		 проверяет возможность выполнения детализации данных.


		 ![](../../Sub_Image.gif)
		 [EmulateGridHyperlinkClick](EmulateGridHyperlinkClick.htm)
		 Операция EmulateGridHyperlinkClick
		 эмулирует щелчок по гиперссылке в ячейке таблицы области данных.


		 ![](../../Sub_Image.gif)
		 [GetDataAreaGridAttachments](GetDataAreaGridAttachments.htm)
		 Операция GetDataAreaGridAttachments
		 получает список вложений для ячейки таблицы.


		 ![](../../Sub_Image.gif)
		 [GetDataAreaGridDimRanges](GetDataAreaGridDimRanges.htm)
		 Операция GetDataAreaGridDimRanges
		 получает информации о диапазонах ячеек, соответствующих измерениям
		 в шапке и боковике.


		 ![](../../Sub_Image.gif)
		 [GetDataAreaGridMetaData](GetDataAreaGridMetaData.htm)
		 Операция GetDataAreaGridMetaData
		 получает метаданные визуализатора Таблица.


		 ![](../../Sub_Image.gif)
		 [GetEaxGridHeaderProperties](GetEaxGridHeaderProperties.htm)
		 Операция GetEaxGridHeaderProperties
		 получает свойства заголовка визуализатора Таблицы.


		 ![](../../Sub_Image.gif)
		 [GetEaxGridHeaderSettings](GetEaxGridHeaderSettings.htm)
		 Операция GetEaxGridHeaderSettings
		 получает настройки заголовка визуализатора Таблицы.


		 ![](../../Sub_Image.gif)
		 [PrxMetaViewsAdd](PrxMetaViewsAdd.htm)
		 Операция PrxMetaViewsAdd
		 добавляет визуализатор в регламентный отчёт.


		 ![](../../Sub_Image.gif)
		 [SetDataAreaGridAttachments](SetDataAreaGridAttachments.htm)
		 Операция SetDataAreaGridAttachments
		 изменяет список вложений для ячейки таблицы.


		 ![](../../Sub_Image.gif)
		 [SetDataAreaGridMetaData](SetDataAreaGridMetaData.htm)
		 Операция SetDataAreaGridMetaData
		 изменяет метаданные визуализатора Таблица.


		 ![](../../Sub_Image.gif)
		 [SetEaxGridHeaderProperties](SetEaxGridHeaderProperties.htm)
		 Операция SetEaxGridHeaderProperties
		 изменяет свойства заголовка визуализатора Таблицы.


		 ![](../../Sub_Image.gif)
		 [SetEaxGridHeaderSettings](SetEaxGridHeaderSettings.htm)
		 Операция SetEaxGridHeaderSettings
		 изменяет настройки заголовка визуализатора Таблицы.


Операции
 для работы с диаграммами:


		 Операция
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [GetPrxMetaChart](GetPrxMetaChart.htm)
		 Операция GetPrxMetaChart
		 получает метаданные диаграммы, расположенной на листе регламентного
		 отчёта.


		 ![](../../Sub_Image.gif)
		 [GetPrxMetaChartsInfo](GetPrxMetaChartsInfo.htm)
		 Операция GetPrxMetaChartsInfo
		 получает информацию о диаграммах, которые имеются в регламентном
		 отчёте.


		 ![](../../Sub_Image.gif)
		 [GetSeriesGroupTree](GetSeriesGroupTree.htm)
		 Операция GetSeriesGroupTree
		 получает дерево группировки рядов у гистограммы.


		 ![](../../Sub_Image.gif)
		 [MoveSeriesGroupTreeElem](MoveSeriesGroupTreeElem.htm)
		 Операция MoveSeriesGroupTreeElem
		 перемещает ряд из одной группы в другую у гистограммы.


		 ![](../../Sub_Image.gif)
		 [SetPrxMetaChart](SetPrxMetaChart.htm)
		 Операция SetPrxMetaChart
		 изменяет метаданные диаграммы, расположенной на листе регламентного
		 отчёта.


		 ![](../../Sub_Image.gif)
		 [SeriesGroupFastFormat](SeriesGroupFastFormat.htm)
		 Операция SeriesGroupFastFormat
		 изменяет группировку рядов у гистограммы.


Операции для работы
 с аналитической областью и срезами данных:


		 Операция
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [GetDataAreaSlice](GetDataAreaSlice.htm)
		 Операция GetDataAreaSlice
		 получает информацию о срезе аналитической области данных.


		 ![](../../Sub_Image.gif)
		 [GetDataAreaSources](GetDataAreaSources.htm)
		 Операция GetDataAreaSources
		 извлекает информацию об источниках аналитической области данных.


		 ![](../../Sub_Image.gif)
		 [SetDataAreaSlice](SetDataAreaSlice.htm)
		 Операция SetDataAreaSlice
		 изменяет настройки среза аналитической области данных.


		 ![](../../Sub_Image.gif)
		 [SetDataAreaSources](SetDataAreaSources.htm)
		 Операция SetDataAreaSources
		 изменяет источники данных аналитической области данных.


		 ![](../../Sub_Image.gif)
		 [SetDataAreaVirtualSources](SetDataAreaVirtualSources.htm)
		 Операция SetDataAreaVirtualSources
		 изменяет виртуальный куб, являющийся источником аналитической
		 области данных.


		 ![](../../Sub_Image.gif)
		 [DataAreaSourcesAdd](DataAreaSourcesAdd.htm)
		 Операция DataAreaSourcesAdd
		 добавляет новый источник данных для аналитической области данных.


		 ![](../../Sub_Image.gif)
		 [DataAreaSourcesDelete](DataAreaSourcesDelete.htm)
		 Операция DataAreaSourcesDelete
		 удаляет источник данных у аналитической области данных.


		 ![](../../Sub_Image.gif)
		 [DataAreaSlicesAdd](DataAreaSlicesAdd.htm)
		 Операция DataAreaSlicesAdd
		 создаёт новый срез данных для источника данных аналитической области
		 данных.


		 ![](../../Sub_Image.gif)
		 [DataAreaSlicesDelete](DataAreaSlicesDelete.htm)
		 Операция DataAreaSlicesDelete
		 удаляет срез данных у источника данных.


Операции для работы
 с основой среза данных:


		 Операция
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [GetPivotDimElementTotal](GetPivotDimElementTotal.htm)
		 Операция GetPivotDimElementTotal
		 получает настройки расчёта собственного типа итога у элемента
		 измерения.


		 ![](../../Sub_Image.gif)
		 [GetPivotDimensionMetaData](GetPivotDimensionMetaData.htm)
		 Операция GetPivotDimensionMetaData
		 получает информацию об измерении среза данных.


		 ![](../../Sub_Image.gif)
		 [GetPivotDimensionSettingsExMetaData](GetPivotDimensionSettingsExMetaData.htm)
		 Операция GetPivotDimensionSettingsExMetaData
		 получает расширенные настройки измерения среза данных.


		 ![](../../Sub_Image.gif)
		 [GetPivotDimLevelMetaData](GetPivotDimLevelMetaData.htm)
		 Операция GetPivotDimLevelMetaData
		 получает информацию об уровне измерения среза данных.


		 ![](../../Sub_Image.gif)
		 [GetPivotEvaluatorTotalsMetaData](GetPivotEvaluatorTotalsMetaData.htm)
		 Операция GetPivotEvaluatorTotalsMetaData
		 получает настройки вычисления итогов.


		 ![](../../Sub_Image.gif)
		 [GetPivotFilterMetaData](GetPivotFilterMetaData.htm)
		 Операция GetPivotFilterMetaData
		 получает настройки фильтрации данных, заданных для среза данных.


		 ![](../../Sub_Image.gif)
		 [GetPivotHeaderFilterMetaData](GetPivotHeaderFilterMetaData.htm)
		 Операция GetPivotHeaderFilterMetaData
		 получает настройки фильтрации заголовка среза данных.


		 ![](../../Sub_Image.gif)
		 [GetPivotHeaderMetaData](GetPivotHeaderMetaData.htm)
		 Операция GetPivotHeaderMetaData
		 получает информацию о заголовке среза данных.


		 ![](../../Sub_Image.gif)
		 [GetPivotMetaData](GetPivotMetaData.htm)
		 Операция GetPivotMetaData
		 получает основу для построения среза источника аналитической области
		 данных.


		 ![](../../Sub_Image.gif)
		 [SetPivotDimElementTotal](SetPivotDimElementTotal.htm)
		 Операция SetPivotDimElementTotal
		 изменяет настройки расчёта собственного типа итога у элемента
		 измерения.


		 ![](../../Sub_Image.gif)
		 [SetPivotDimensionMetaData](SetPivotDimensionMetaData.htm)
		 Операция SetPivotDimensionMetaData
		 изменяет измерение среза данных.


		 ![](../../Sub_Image.gif)
		 [SetPivotDimensionSettingsExMetaData](SetPivotDimensionSettingsExMetaData.htm)
		 Операция SetPivotDimensionSettingsExMetaData
		 изменяет расширенные настройки измерения среза данных.


		 ![](../../Sub_Image.gif)
		 [SetPivotDimLevelMetaData](SetPivotDimLevelMetaData.htm)
		 Операция SetPivotDimLevelMetaData
		 изменяет параметры уровня измерения среза данных.


		 ![](../../Sub_Image.gif)
		 [SetPivotEvaluatorTotalsMetaData](SetPivotEvaluatorTotalsMetaData.htm)
		 Операция SetPivotEvaluatorTotalsMetaData
		 изменяет настройки вычисления итогов.


		 ![](../../Sub_Image.gif)
		 [SetPivotFilterMetaData](SetPivotFilterMetaData.htm)
		 Операция SetPivotFilterMetaData
		 изменяет настройки фильтрации данных, заданных для среза данных.


		 ![](../../Sub_Image.gif)
		 [SetPivotHeaderFilterMetaData](SetPivotHeaderFilterMetaData.htm)
		 Операция SetPivotHeaderFilterMetaData
		 изменяет настройки фильтрации заголовка среза данных.


		 ![](../../Sub_Image.gif)
		 [SetPivotHeaderMetaData](SetPivotHeaderMetaData.htm)
		 Операция SetPivotHeaderMetaData
		 изменяет настройки заголовка среза данных.


		 ![](../../Sub_Image.gif)
		 [SetPivotMetaData](SetPivotMetaData.htm)
		 Операция SetPivotMetaData
		 изменяет основу для среза данных.


		 ![](../../Sub_Image.gif)
		 [PivotChangeDimHeader](PivotChangeDimHeader.htm)
		 Операция PivotChangeDimHeader
		 изменяет расположение измерения.


		 ![](../../Sub_Image.gif)
		 [PivotMoveDimToIndex](PivotMoveDimToIndex.htm)
		 Операция PivotMoveDimToIndex
		 перемещает измерение внутри заголовка.


		 ![](../../Sub_Image.gif)
		 [UpdateDataAreaExternalTransformations](UpdateDataAreaExternalTransformations.htm)
		 Операция UpdateDataAreaExternalTransformations
		 предназначена для работы с алгоритмами расчёта, которые используются
		 срезами данных.


Операции
 для работы с пользовательской иерархией измерения в срезе данных:


		 Операция
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [ApplyDataAreaHierarchiesChanges](ApplyDataAreaHierarchiesChanges.htm)
		 Операция ApplyDataAreaHierarchiesChanges
		 применяет изменения, внесённые в структуру пользовательской иерархии
		 у измерения среза аналитической области данных.


		 ![](../../Sub_Image.gif)
		 [CancelDataAreaHierarchiesChanges](CancelDataAreaHierarchiesChanges.htm)
		 Операция CancelDataAreaHierarchiesChanges
		 отменяет изменения, внесённые в структуру пользовательской иерархии
		 у измерения среза аналитической области данных.


		 ![](../../Sub_Image.gif)
		 [ClearDataAreaHierarchy](ClearDataAreaHierarchy.htm)
		 Операция ClearDataAreaHierarchy
		 сбрасывает пользовательскую иерархию, которая была настроена у
		 измерения среза аналитической области данных.


		 ![](../../Sub_Image.gif)
		 [SetDataAreaCustomDim](SetDataAreaCustomDim.htm)
		 Операция SetDataAreaCustomDim
		 изменяет пользовательскую иерархию у измерения среза аналитической
		 области данных.


Операции для работы
 с модулями регламентного отчёта:


		 Операция
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [PrxMetaAssembliesAdd](PrxMetaAssembliesAdd.htm)
		 Операция PrxMetaAssembliesAdd
		 добавляет модуль среды разработки в список модулей, используемых
		 в регламентном отчёте.


		 ![](../../Sub_Image.gif)
		 [PrxMetaAssembliesRemove](PrxMetaAssembliesRemove.htm)
		 Операция PrxMetaAssembliesRemove
		 удаляет модуль из списка модулей, используемых в регламентном
		 отчёте.


Операции
 для работы с настройками регламентного отчёта:


		 Операция
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [GetFormulaErrorOptions](GetFormulaErrorOptions.htm)
		 Операция GetFormulaErrorOptions
		 получает настройки формул регламентного отчёта.


		 ![](../../Sub_Image.gif)
		 [ResetSkippedErrors](ResetSkippedErrors.htm)
		 Операция ResetSkippedErrors
		 сбрасывает пропущенные ошибки в ячейках.


		 ![](../../Sub_Image.gif)
		 [SetFormulaErrorOptions](SetFormulaErrorOptions.htm)
		 Операция SetFormulaErrorOptions
		 изменяет настройки формул регламентного отчёта.


Операции
 для работы с таблицей стилей, используемой в регламентном отчёте:


		 Операция
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [GetPrxStyleSheet](TableStyle/GetPrxStyleSheet.htm)
		 Операция GetPrxStyleSheet
		 получает таблицу стилей, подключенную в регламентном отчёте.


		 ![](../../Sub_Image.gif)
		 [ResetPrxStyleSheet](TableStyle/ResetPrxStyleSheet.htm)
		 Операция ResetPrxStyleSheet
		 отключает используемую в регламентном отчёте таблицу стилей репозитория.


		 ![](../../Sub_Image.gif)
		 [SetPrxStyleSheet](TableStyle/SetPrxStyleSheet.htm)
		 Операция SetPrxStyleSheet
		 подключает в регламентном отчёте таблицу стилей из репозитория.


Операции
 для работы с именованными диапазонами:


		 Операция
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [AddTabNamedRegion](AddTabNamedRegion.htm)
		 Операция AddTabNamedRegion
		 создаёт именованный диапазон на листе регламентного отчёта.


		 ![](../../Sub_Image.gif)
		 [ChangeTabNamedRegion](ChangeTabNamedRegion.htm)
		 Операция ChangeTabNamedRegion
		 изменяет именованный диапазон таблицы.


		 ![](../../Sub_Image.gif)
		 [DeleteTabNamedRegion](DeleteTabNamedRegion.htm)
		 Операция DeleteTabNamedRegion
		 удаляет именованный диапазон с листа регламентного отчёта.


		 ![](../../Sub_Image.gif)
		 [GetPrxAllNamedRegions](GetPrxAllNamedRegions.htm)
		 Операция GetPrxAllNamedRegions
		 получает коллекцию именованных диапазонов, созданных на листах
		 регламентного отчёта.


Операции
 для работы с пользовательскими кнопками:


		 Операция
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [PrxMetaUserButtonsUpdate](PrxMetaUserButtonsUpdate.htm)
		 Операция PrxMetaUserButtonsUpdate
		 обновляет коллекцию пользовательских кнопок в регламентном отчёте.


Операции
 для работы с описаниями формул:


		 Операция
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [GetEaxFormulaDescriptions](GetEaxFormulaDescriptions.htm)
		 Операция GetEaxFormulaDescriptions
		 получает информацию о формулах, с помощью которых производится
		 расчёт значения в ячейке таблицы.


		 ![](../../Sub_Image.gif)
		 [GetEaxFormulaDescriptionUsedAttrs](GetEaxFormulaDescriptionUsedAttrs.htm)
		 Операция GetEaxFormulaDescriptionUsedAttrs
		 получает настройки отображения детализированной информации о термах
		 формул.


		 ![](../../Sub_Image.gif)
		 [GetEaxTermDescriptions](GetEaxTermDescriptions.htm)
		 Операция GetEaxTermDescriptions
		 получает информацию о термах, которые используются в формуле для
		 расчёта значения в ячейке таблицы.


		 ![](../../Sub_Image.gif)
		 [SetEaxFormulaDescriptionUsedAttrs](SetEaxFormulaDescriptionUsedAttrs.htm)
		 Операция SetEaxFormulaDescriptionUsedAttrs
		 изменяет настройки отображения детализированной информации о термах
		 формул.


		 ![](../../Sub_Image.gif)
		 [SetEaxUsedAttributesIdMap](SetEaxUsedAttributesIdMap.htm)
		 Операция SetEaxUsedAttributesIdMap
		 загружает ранее сохранённые настройки отображения элементов измерений
		 в описании формул.


Операции
 для работы с фигурами:


		 Операция
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [GetPrxShape](GetPrxShape.htm)
		 Операция GetPrxShape
		 получает настройки фигуры, расположенной на листе регламентного
		 отчёта.


		 ![](../../Sub_Image.gif)
		 [InsertPrxShape](InsertPrxShape.htm)
		 Операция InsertPrxShape
		 вставляет фигуру на лист регламентного отчёта.


		 ![](../../Sub_Image.gif)
		 [SetPrxShape](SetPrxShape.htm)
		 Операция SetPrxShape
		 изменяет настройки фигуры, расположенной на листе регламентного
		 отчёта.


Операции
 для импорта данных в регламентный отчёт:


		 Операция
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [ImportXlsx](ImportXlsx.htm)
		 Операция ImportXlsx
		 импортирует данные в регламентный отчёт из файла Microsoft Excel
		 (*.xlsx).


Операции
 взаимодействия с процессами, в которых может использоваться регламентный
 отчёт:


		 Операция
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [ApprovePrxMetaBpmActiveSteps](ApprovePrxMetaBpmActiveSteps.htm)
		 Операция ApprovePrxMetaBpmActiveSteps
		 завершает шаги процесса, в которых используется регламентный отчёт.


		 ![](../../Sub_Image.gif)
		 [GetPrxMetaBpmActiveSteps](GetPrxMetaBpmActiveSteps.htm)
		 Операция GetPrxMetaBpmActiveSteps
		 получает список активных шагов процесса, в которых используется
		 регламентный отчёт.


		 ![](../../Sub_Image.gif)
		 [RollbackPrxMetaBpmActiveSteps](RollbackPrxMetaBpmActiveSteps.htm)
		 Операция RollbackPrxMetaBpmActiveSteps
		 отклоняет шаги процесса, в которых используется регламентный отчёт.


См. также:


[Операции
 веб-сервиса](../BaseService.htm) | [Операции, оставленные для совместимости](report_old.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
