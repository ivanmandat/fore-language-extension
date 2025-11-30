# WbkDocument

WbkDocument
-


**


# WbkDocument


Пространство имен: PP.TS;


## Иерархия наследования


[Object](dhtmlCommon.chm::/Classes/object/object.htm)


PP.Mb.[Descriptor](dhtmlMetabase.chm::/Classes/Metabase/Descriptor/Descriptor.htm)


PP.Mb.[Object](dhtmlMetabase.chm::/Classes/Metabase/Object/Object.htm)


PP.Exp.[EaxAnalyzer](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.htm)


PP.TS.[Workbook](../Workbook/Workbook.htm)


WbkDocument


## Описание


Класс WbkDocument реализует
 экземпляр рабочей книги из базы данных временных рядов.


## Комментарии


Класс WbkDocument является моделью
 данных, которая отражает состояние данных на сервере. При
 добавлении нового листа выполняется запрос к сервису и его ответ записывается
 в модель.


## Синтаксис


PP.initClass(PP.TS.WbkDocument, PP.TS.[Workbook](../Workbook/Workbook.htm),
 "WbkDocument");


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../../Property_Image.gif)
		 [ActiveSheetKey](WbkDocument.ActiveSheetKey.htm)
		 Свойство ActiveSheetKey
		 определяет ключ активного листа.


		 ![](../../../Property_Image.gif)
		 [DocumentMetadata](WbkDocument.DocumentMetadata.htm)
		 Свойство DocumentMetadata
		 определяет метаданные документа.


		 ![](../../../Property_Image.gif)
		 [DocumentOdld](WbkDocument.DocumentOdId.htm)
		 Свойство DocumentOdld
		 определяет объект, содержащий моникёр документа рабочей книги.


		 ![](../../../Property_Image.gif)
		 [OpenRub](WbkDocument.OpenRub.htm)
		 Свойство OpenRub определяет
		 базу данных временных рядов.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [checkSheetName](WbkDocument.checkSheetName.htm)
		 Метод checkSheetName
		 проверяет допустимость нового названия листа.


		 ![](../../../Sub_Image.gif)
		 [getActiveSheet](WbkDocument.getActiveSheet.htm)
		 Метод getActiveSheet
		 возвращает активный лист.


		 ![](../../../Sub_Image.gif)
		 [getSheet](WbkDocument.getSheet.htm)
		 Метод getSheet возвращает
		 объект листа по ключу или идентификатору.


		 ![](../../../Sub_Image.gif)
		 [getSheetName](WbkDocument.getSheetName.htm)
		 Метод getSheetName
		 возвращает имя листа по ключу или идентификатору.


		 ![](../../../Sub_Image.gif)
		 [getSheetOdld](WbkDocument.getSheetOdId.htm)
		 Метод getSheetOdld
		 возвращает объект, содержащий моникёр листа, по ключу.


		 ![](../../../Sub_Image.gif)
		 [getSheets](WbkDocument.getSheets.htm)
		 Метод getSheets возвращает
		 список всех листов в документе.


		 ![](../../../Sub_Image.gif)
		 [removeSheet](WbkDocument.removeSheet.htm)
		 Метод removeSheet удаляет
		 лист по ключу или идентификатору.


## Свойства, унаследованные от класса [Workbook](../Workbook/Workbook.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../../Property_Image.gif)
		 [ActiveRub](dhtmlTS.chm::/Classes/TimeSeries/Workbook/Workbook.ActiveRub.htm)
		 Свойство ActiveRub устанавливает
		 ключ активной базы данных временных рядов для модели данных рабочей
		 книги.


		 ![](../../../Property_Image.gif)
		 [CommentAttribute](dhtmlTS.chm::/Classes/TimeSeries/Workbook/Workbook.CommentAttribute.htm)
		 Свойство CommentAttribute
		 определяет атрибут, используемый в качестве всплывающей
		 подсказки для ячеек в таблице.


		 ![](../../../Property_Image.gif)
		 [DimLvlsEls](dhtmlTS.chm::/Classes/TimeSeries/Workbook/Workbook.DimLvlsEls.htm)
		 Свойство DimLvlsEls
		 определяет элементы календарного измерения.


		 ![](../../../Property_Image.gif)
		 [DimsObs](dhtmlTS.chm::/Classes/TimeSeries/Workbook/Workbook.DimsObs.htm)
		 Свойство DimsObs устанавливает
		 измерения для ссылающихся на справочники атрибутов наблюдения
		 рабочей книги.


		 ![](../../../Property_Image.gif)
		 [DimUnitsEls](dhtmlTS.chm::/Classes/TimeSeries/Workbook/Workbook.DimUnitsEls.htm)
		 Свойство DimUnitsEls устанавливает
		 элементы измерения «Единицы измерения».


		 ![](../../../Property_Image.gif)
		 [Hier](dhtmlTS.chm::/Classes/TimeSeries/Workbook/Workbook.Hier.htm)
		 Свойство Hier устанавливает
		 иерархию дерева рядов.


		 ![](../../../Property_Image.gif)
		 [NeedShowSaveDataDialog](dhtmlTS.chm::/Classes/TimeSeries/Workbook/Workbook.NeedShowSaveDataDialog.htm)
		 Свойство NeedShowSaveDataDialog
		 используется для хранения информации о том, что был изменен ряд
		 (его данные или атрибуты), для которого включено хранение истории.


		 ![](../../../Property_Image.gif)
		 [NeedUpdateSelection](dhtmlTS.chm::/Classes/TimeSeries/Workbook/Workbook.NeedUpdateSelection.htm)
		 Свойство NeedUpdateSelection
		 определяет признак необходимости обновления
		 отметки.


		 ![](../../../Property_Image.gif)
		 [Permanent](dhtmlTS.chm::/Classes/TimeSeries/Workbook/Workbook.Permanent.htm)
		 Свойство Permanent определяет
		 признак того, что рабочая книга сохранена в репозитории.


		 ![](../../../Property_Image.gif)
		 [Pinned](dhtmlTS.chm::/Classes/TimeSeries/Workbook/Workbook.Pinned.htm)
		 Свойство Pinned устанавливает
		 заблокированный ряд рабочей книги.


		 ![](../../../Property_Image.gif)
		 [RdsDim](dhtmlTS.chm::/Classes/TimeSeries/Workbook/Workbook.RdsDim.htm)
		 Свойство rdsDim определяет измерение, построенное на справочнике НСИ по своему
		 ключу.


		 ![](../../../Property_Image.gif)
		 [Rub](dhtmlTS.chm::/Classes/TimeSeries/Workbook/Workbook.Rub.htm)
		 Свойство Rub устанавливает
		 базу данных временных рядов, которая является источником рабочей
		 книги.


		 ![](../../../Property_Image.gif)
		 [RubProps](dhtmlTS.chm::/Classes/TimeSeries/Workbook/Workbook.RubProps.htm)
		 Свойство RubProps устанавливает
		 свойства базы данных временных рядов.


		 ![](../../../Property_Image.gif)
		 [SelectedIndexCols](dhtmlTS.chm::/Classes/TimeSeries/Workbook/Workbook.SelectedIndexCols.htm)
		 Свойство SelectedIndexCols
		 определяет индексы выделенных колонок.


		 ![](../../../Property_Image.gif)
		 [SelectedIndexSeries](dhtmlTS.chm::/Classes/TimeSeries/Workbook/Workbook.SelectedIndexSeries.htm)
		 Свойство SelectedIndexSeries
		 определяет массив индексов рядов в таблице.


		 ![](../../../Property_Image.gif)
		 [SelectedObsTable](dhtmlTS.chm::/Classes/TimeSeries/Workbook/Workbook.SelectedObsTable.htm)
		 Свойство SelectedObsTable
		 определяет объект, содержащий информацию о значениях выделенных
		 в таблице ячеек, а также о значениях их атрибутов наблюдений.


		 ![](../../../Property_Image.gif)
		 [SelectedPoint](dhtmlTS.chm::/Classes/TimeSeries/Workbook/Workbook.SelectedPoint.htm)
		 Свойство SelectedPoint устанавливает
		 информацию о координатах выделенной точки.


		 ![](../../../Property_Image.gif)
		 [SelectedSeries](dhtmlTS.chm::/Classes/TimeSeries/Workbook/Workbook.SelectedSeries.htm)
		 Свойство SelectedSeries устанавливает
		 выделенные ряды.


		 ![](../../../Property_Image.gif)
		 [SelectedTableCells](dhtmlTS.chm::/Classes/TimeSeries/Workbook/Workbook.SelectedTableCells.htm)
		 Свойство SelectedTableCells
		 устанавливает объект, содержащий информацию о выделенных
		 значениях в таблице.


		 ![](../../../Property_Image.gif)
		 [Series](dhtmlTS.chm::/Classes/TimeSeries/Workbook/Workbook.Series.htm)
		 Свойство Series определяет
		 массив загруженных рядов рабочей книги.


		 ![](../../../Property_Image.gif)
		 [SeriesCount](dhtmlTS.chm::/Classes/TimeSeries/Workbook/Workbook.SeriesCount.htm)
		 Свойство SeriesCount устанавливает
		 количество рядов в рабочей книге.


		 ![](../../../Property_Image.gif)
		 [StatCoeffTabSheetSource](dhtmlTS.chm::/Classes/TimeSeries/Workbook/Workbook.StatCoeffTabSheetSource.htm)
		 Свойство StatCoeffTabSheetSource устанавливает
		 источник данных для листа на вкладке "Уравнение" в панели
		 статистики.


		 ![](../../../Property_Image.gif)
		 [StatCorrTabSheetSource](dhtmlTS.chm::/Classes/TimeSeries/Workbook/Workbook.StatCorrTabSheetSource.htm)
		 Свойство StatCorrTabSheetSource
		 устанавливает источник данных для листа на вкладке "пузырьковая диаграмма
		 корреляции" в панели статистики.


		 ![](../../../Property_Image.gif)
		 [StatWeightsTabSheetSource](dhtmlTS.chm::/Classes/TimeSeries/Workbook/Workbook.StatWeightsTabSheetSource.htm)
		 Свойство StatWeightsTabSheetSource
		 устанавливает источник данных для листа на вкладке "пузырьковая диаграмма
		 весов" в панели статистики.


		 ![](../../../Property_Image.gif)
		 [WbkMetadata](dhtmlTS.chm::/Classes/TimeSeries/Workbook/Workbook.WbkMetadata.htm)
		 Свойство WbkMetadata устанавливает
		 метаданные рабочей книги.


## Методы, унаследованные от класса [Workbook](../Workbook/Workbook.htm)


		 Имя метода
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [addSelectedSeries](dhtmlTS.chm::/Classes/TimeSeries/Workbook/Workbook.addSelectedSeries.htm)
		 Метод addSelectedSeries
		 добавляет ряды в массив выделенных.


		 ![](../../../Sub_Image.gif)
		 [getDependentsSeries](dhtmlTS.chm::/Classes/TimeSeries/Workbook/Workbook.getDependentsSeries.htm)
		 Метод getDependentsSeries
		 определяет список рядов, зависимых от заданного ряда.


		 ![](../../../Sub_Image.gif)
		 [getFixedColumnsCount](dhtmlTS.chm::/Classes/TimeSeries/Workbook/Workbook.getFixedColumnsCount.htm)
		 Метод getFixedColumnsCount
		 возвращает количество зафиксированных при прокрутке столбцов.


		 ![](../../../Sub_Image.gif)
		 [getFixedRowsCount](dhtmlTS.chm::/Classes/TimeSeries/Workbook/Workbook.getFixedRowsCount.htm)
		 Метод getFixedRowsCount возвращает
		 количество зафиксированных при прокрутке строк.


		 ![](../../../Sub_Image.gif)
		 [getGaugePeriodDim](dhtmlTS.chm::/Classes/TimeSeries/Workbook/Workbook.getGaugePeriodDim.htm)
		 Метод getGaugePeriodDim**
		 возвращает календарный справочник спидометра.


		 ![](../../../Sub_Image.gif)
		 [getKeepHistorySerieRub](dhtmlTS.chm::/Classes/TimeSeries/Workbook/Workbook.getKeepHistorySerieRub.htm)
		 Метод getKeepHistorySerieRub
		 возвращает признак того, что в источнике (базе данных временных
		 рядов) указанного ряда установлен признак сохранения истории изменений
		 (списка ревизий).


		 ![](../../../Sub_Image.gif)
		 [getKeySerie](dhtmlTS.chm::/Classes/TimeSeries/Workbook/Workbook.getKeySerie.htm)
		 Метод getKeySerie возвращает
		 ключ ряда по индексу.


		 ![](../../../Sub_Image.gif)
		 [getLoadedChildrenCount](dhtmlTS.chm::/Classes/TimeSeries/Workbook/Workbook.getLoadedChildrenCount.htm)
		 Метод getLoadedChildrenCount
		 определяет количество загруженных дочерних рядов для указанного
		 ряда.


		 ![](../../../Sub_Image.gif)
		 [getObsAttr](dhtmlTS.chm::/Classes/TimeSeries/Workbook/Workbook.getObsAttr.htm)
		 Метод getObsAttr определяет
		 список атрибутов наблюдений.


		 ![](../../../Sub_Image.gif)
		 [getRootSeriesCount](dhtmlTS.chm::/Classes/TimeSeries/Workbook/Workbook.getRootSeriesCount.htm)
		 Метод getRootSeriesCount
		 возвращает количество корневых рядов.


		 ![](../../../Sub_Image.gif)
		 [getRealIndex](dhtmlTS.chm::/Classes/TimeSeries/Workbook/Workbook.getRealIndex.htm)
		 Метод getRealIndex возвращает
		 индекс ряда.


		 ![](../../../Sub_Image.gif)
		 [getRubOdId](dhtmlTS.chm::/Classes/TimeSeries/Workbook/Workbook.getRubOdId.htm)
		 Метод getRubOdId определяет
		 моникёр базы данных временных рядов.


		 ![](../../../Sub_Image.gif)
		 [getRubsOdId](dhtmlTS.chm::/Classes/TimeSeries/Workbook/Workbook.getRubsOdId.htm)
		 Метод getRubsOdId возвращает
		 моникёр для каталога показатей с ключом rubKey.


		 ![](../../../Sub_Image.gif)
		 [getSelectedOrPinnedSeries](dhtmlTS.chm::/Classes/TimeSeries/Workbook/Workbook.getSelectedOrPinnedSeries.htm)
		 Метод getSelectedOrPinnedSeries
		 возвращает выделенные ряды или заблокированный ряд, если
		 он есть.


		 ![](../../../Sub_Image.gif)
		 [getSelectionTimeRanges](dhtmlTS.chm::/Classes/TimeSeries/Workbook/Workbook.getSelectionTimeRanges.htm)
		 Метод getSelectionTimeRanges
		 возвращает список периодов для выделенных рядов.


		 ![](../../../Sub_Image.gif)
		 [getSerie](dhtmlTS.chm::/Classes/TimeSeries/Workbook/Workbook.getSerie.htm)
		 Метод getSerie возвращает
		 ряд из кеша загруженных рядов по ключу.


		 ![](../../../Sub_Image.gif)
		 [getSerieByIndexAndParent](dhtmlTS.chm::/Classes/TimeSeries/Workbook/Workbook.getSerieByIndexAndParent.htm)
		 Метод getSerieByIndexAndParent
		 возвращает ряд по индексу у определенного родителя.


		 ![](../../../Sub_Image.gif)
		 [getSerieDepth](dhtmlTS.chm::/Classes/TimeSeries/Workbook/Workbook.getSerieDepth.htm)
		 Метод getSerieDepth
		 возвращает уровень вложенности ряда.


		 ![](../../../Sub_Image.gif)
		 [getSerieVisibleSize](dhtmlTS.chm::/Classes/TimeSeries/Workbook/Workbook.getSerieVisibleSize.htm)
		 Метод getSerieVisibleSize
		 возвращает количество строк, занимаемое рядом и его потомками.


		 ![](../../../Sub_Image.gif)
		 [hasRubrs](dhtmlTS.chm::/Classes/TimeSeries/Workbook/Workbook.hasRubrs.htm)
		 Метод hasRubrs определяет,
		 является ли источник рабочей книги базой данных временных рядов.


		 ![](../../../Sub_Image.gif)
		 [isMapAvailable](dhtmlTS.chm::/Classes/TimeSeries/Workbook/Workbook.isMapAvailable.htm)
		 Метод isMapAvailable
		 определяет, доступно ли представление данных «Карта»
		 в рабочей книге.


		 ![](../../../Sub_Image.gif)
		 [isSerieSelected](dhtmlTS.chm::/Classes/TimeSeries/Workbook/Workbook.isSerieSelected.htm)
		 Метод isSerieSelected
		 определяет, выделен ли ряд.


		 ![](../../../Sub_Image.gif)
		 [removeAllSelectedSeries](dhtmlTS.chm::/Classes/TimeSeries/Workbook/Workbook.removeAllSelectedSeries.htm)
		 Метод removeAllSelectedSeries
		 удаляет информацию о выделенных строках таблицы.


		 ![](../../../Sub_Image.gif)
		 [removeSelectedSeries](dhtmlTS.chm::/Classes/TimeSeries/Workbook/Workbook.removeSelectedSeries.htm)
		 Метод removeSelectedSeries
		 удаляет строку таблицы из массива выделенных.


		 ![](../../../Sub_Image.gif)
		 [removeSeries](dhtmlTS.chm::/Classes/TimeSeries/Workbook/Workbook.removeSeries.htm)
		 Метод removeSeries удаляет
		 строки таблицы.


		 ![](../../../Sub_Image.gif)
		 [updateSeriesList](dhtmlTS.chm::/Classes/TimeSeries/Workbook/Workbook.updateSeriesList.htm)
		 Метод updateSeriesList обновляет
		 список рядов.


## Свойства, унаследованные от класса PP.Exp.[EaxAnalyzer](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../../Property_Image.gif)
		 [AutoUpdate](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.AutoUpdate.htm)

		 Свойство **AutoUpdate**
		 управляет автообновлением экспресс-отчета.


		 ![](../../../Property_Image.gif)
		 [BubbleChartChangedData](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.BubbleChartChangedData.htm)

		 Свойство **BubbleChartChangedData**
		 содержит измененные данные и метаданные представления экспресс-отчета
		 «пузырьковая диаграмма».


		 ![](../../../Property_Image.gif)
		 [BubbleChartData](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.BubbleChartData.htm)

		 Свойство **BubbleChartData**
		 содержит данные представления экспресс-отчета «пузырьковая диаграмма».


		 ![](../../../Property_Image.gif)
		 [ChartChangedData](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.ChartChangedData.htm)

		 Свойство **ChartChangedData**
		 содержит измененные данные представления экспресс-отчета «Диаграмма».


		 ![](../../../Property_Image.gif)
		 [ChartData](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.ChartData.htm)

		 Свойство **ChartData**
		 содержит данные представления экспресс-отчета «Диаграмма».


		 ![](../../../Property_Image.gif)
		 [Document](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.Document.htm)

		 Свойство **Document**
		 содержит html-документ экспресс-отчета.


		 ![](../../../Property_Image.gif)
		 [EaxParams](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.EaxParams.htm)
		 Свойство EaxParams
		 определяет массив [параметров](UiExpress.chm::/Express/Data_sources_parameters.htm)
		 экспресс-очтета.


		 ![](../../../Property_Image.gif)
		 [GaugeData](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.GaugeData.htm)
		 Свойство GaugeData
		 определяет настройки для контейнера спидометра.


		 ![](../../../Property_Image.gif)
		 [GaugeChangedData](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.GaugeChangedData.htm)
		 Свойство GaugeChangedData
		 определяет изменённые настройки для контейнера спидометра.


		 ![](../../../Property_Image.gif)
		 [GridSelectionType](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.GridSelectionType.htm)

		 Свойство **GridSelectionType**
		 содержит тип выделенного объекта в таблице экспресс-отчета.


		 ![](../../../Property_Image.gif)
		 [IsChanged](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.IsChanged.htm)

		 Свойство **IsChanged**
		 возвращает признак того, что экспресс-отчёт изменён.


		 ![](../../../Property_Image.gif)
		 [IsDataChanged](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.IsDataChanged.htm)

		 Свойство **IsDataChanged**
		 возвращает признак того, что данные экспресс-отчёта изменены.


		 ![](../../../Property_Image.gif)
		 [IsDefaultHighlight](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.IsDefaultHighlight.htm)

		 Свойство **IsDefaultHighlight**
		 возвращает признак того, что выделения элементов экспресс-отчета
		 установлены по умолчанию.


		 ![](../../../Property_Image.gif)
		 [IsHasDataAvailable](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.IsHasDataAvailable.htm)
		 Свойство IsHasDataAvailable
		 определяет, будут ли при изменениях данных в измерениях отправляться
		 запросы на обновление состояния поля «@hasData» в метаданных элемента
		 измерения.


		 ![](../../../Property_Image.gif)
		 [IsSelectionChanged](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.IsSelectionChanged.htm)

		 Свойство **IsSelectionChanged**
		 содержит признак того, изменено ли выделение в таблице экспресс-отчета.


		 ![](../../../Property_Image.gif)
		 [MapChangedData](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.MapChangedData.htm)

		 Свойство **MapChangedData
		 **содержит измененные данные представления экспресс-отчета
		 «Карта».


		 ![](../../../Property_Image.gif)
		 [MapData](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.MapData.htm)

		 Свойство **MapData**
		 содержит данные представления экспресс-отчета «Карта».


		 ![](../../../Property_Image.gif)
		 [PeriodicalUpdateInterval](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.PeriodicalUpdateInterval.htm)
		 Свойство PeriodicalUpdateInterval
		 определяет интервал периодического обновления экспресс-отчета.


		 ![](../../../Property_Image.gif)
		 [SelectedPart](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.SelectedPart.htm)
		 Свойство SelectedPart
		 определяет выделенную область таблицы.


		 ![](../../../Property_Image.gif)
		 [Selection](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.Selection.htm)

		 Свойство **Selection**
		 содержит выделенные ячейки в таблице экспресс-отчета.


		 ![](../../../Property_Image.gif)
		 [SourceParams](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.SourceParams.htm)
		 Свойство SourceParams
		 определяет массив параметров источника данных.


		 ![](../../../Property_Image.gif)
		 [StatData](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.StatData.htm)

		 Свойство **StatData**
		 содержит статистические данные экспресс-отчета.


		 ![](../../../Property_Image.gif)
		 [TabFocusedCell](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.TabFocusedCell.htm)

		 Свойство **TabFocusedCell**
		 содержит координаты ячейки таблицы экспресс-отчета, в которой
		 установлен фокус.


		 ![](../../../Property_Image.gif)
		 [TabSheetChangedState](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.TabSheetChangedState.htm)

		 Свойство **TabSheetChangedState**
		 содержит измененные настройки листа экспресс-отчета.


		 ![](../../../Property_Image.gif)
		 [TableChangedData](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.TableChangedData.htm)

		 Свойство TableChangedData
		 содержит измененные данные заголовка экспресс-отчета.


		 ![](../../../Property_Image.gif)
		 [TableChangedStruct](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.TableChangedStruct.htm)

		 Свойство **TableChangedStruct**
		 содержит измененную структуру таблицы экспресс-отчета.


		 ![](../../../Property_Image.gif)
		 [TitleChangedData](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.TitleChangedData.htm)

		 Свойство **TitleChangedData**
		 содержит измененные данные заголовка экспресс-отчета.


		 ![](../../../Property_Image.gif)
		 [Topobase](dhtmlExpress.chm::/Classes\Express\EaxAnalyzer\EaxAnalyzer.Topobase.htm)

		 Свойство **Topobase**
		 содержит топооснову для представления данных «Карта» экспресс-отчета.


		 ![](../../../Property_Image.gif)
		 [TopobaseOd](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.TopobaseOd.htm)

		 Свойство **TopobaseOd**
		 содержит идентификатор топоосновы экспресс-отчета в виде JSON-объекта.


		 ![](../../../Property_Image.gif)
		 [ViewSize](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.ViewSize.htm)

		 Свойство **ViewSize**
		 содержит размер визуализатора экспресс-отчета, при использовании
		 вертикального/горизонтального расположения визуализаторов.


		 ![](../../../Property_Image.gif)
		 [WaitToken](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.WaitToken.htm)

		 Свойство **WaitToken**
		 устанавливает и возвращает маркер ожидания по указанному имени.


## Методы, унаследованные от класса PP.Exp.[EaxAnalyzer](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.htm)


		 Имя метода
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [canMapDrillUp](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.canMapDrillUp.htm)
		 Метод **canMapDrillUp**
		 проверяет, возможно ли поднятие на уровень вверх по иерархии отметки
		 в представлении экспресс-отчета «Карта».


		 ![](../../../Sub_Image.gif)
		 [clearAllWaitTokens](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.clearAllWaitTokens.htm)

		 Метод **clearAllWaitTokens**
		 cбрасывает все маркеры ожидания в экспресс-отчете.


		 ![](../../../Sub_Image.gif)
		 [clearDataSources](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.clearDataSources.htm)

		 Метод **clearDataSources**
		 сбрасывает все источники данных экспресс-отчета.


		 ![](../../../Sub_Image.gif)
		 [clearDimItems](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.clearDimItems.htm)
		 Метод **clearDimItems**
		 удаляет все загруженные элементы измерения в экспресс-отчете.


		 ![](../../../Sub_Image.gif)
		 [clearDims](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.clearDims.htm)
		 Метод **clearDims**
		 удаляет все измерения в экспресс-отчете.


		 ![](../../../Sub_Image.gif)
		 [clearMapDrill](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.clearMapDrill.htm)
		 Метод **clearMapDrill**
		 очищает метаданные карты.


		 ![](../../../Sub_Image.gif)
		 [clearViewData](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.clearViewData.htm)
		 Метод **clearViewData**
		 очищает метаданные экспресс-отчета.


		 ![](../../../Sub_Image.gif)
		 [clearWaitToken](dhtmlExpress.chm::/Classes\Express\EaxAnalyzer\EaxAnalyzer.clearWaitToken.htm)
		 Метод **clearWaitToken**
		 сбрасывает маркер ожидания в экспресс-отчете по указанному имени.


		 ![](../../../Sub_Image.gif)
		 [getAllWaitTokens](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.getAllWaitTokens.htm)
		 Метод getAllWaitTokens
		 возвращает все [маркеры
		 ожидания](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.WaitToken.htm).


		 ![](../../../Sub_Image.gif)
		 [getBubbleChartId](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.getBubbleChartId.htm)
		 Метод **getBubbleChartId**
		 возвращает идентификатор представления данных «пузырьковая диаграмма»
		 у экспресс-отчета.


		 ![](../../../Sub_Image.gif)
		 [getCustomHierMd](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.getCustomHierMd.htm)
		 Метод getCustomHierMd
		 возвращает метаданные пользовательской иерархии.


		 ![](../../../Sub_Image.gif)
		 [getChartId](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.getChartId.htm)
		 Метод **getChartId**
		 возвращает идентификатор представления данных «Диаграмма» у экспресс-отчета.


		 ![](../../../Sub_Image.gif)
		 [getDataSource](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.getDataSource.htm)
		 Метод getDataSource
		 возвращает источник данных по ключу.


		 ![](../../../Sub_Image.gif)
		 [getDim](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.Dim.htm)
		 **Метод
		 **getDim возвращает
		 измерение по своему ключу и по ключу его источника.


		 ![](../../../Sub_Image.gif)
		 [getDimFilterOdId](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.getDimFilterOdId.htm)
		 Метод **getDimFilterOdId**
		 возвращает идентификатор фильтра измерений экспресс-отчета.


		 ![](../../../Sub_Image.gif)
		 [getDimOdId](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.getDimOdId.htm)
		 Метод **getDimOdId**
		 возвращает моникёр для измерения экспресс-отчета.


		 ![](../../../Sub_Image.gif)
		 [getDimPosition](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.getDimPosition.htm)
		 Метод **getDimPosition**
		 возвращает положение измерения в кубе, на котором построен экспресс-отчёт.


		 ![](../../../Sub_Image.gif)
		 [getDimSources](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.getDimSources.htm)
		 Метод **getDimSources**
		 возвращает массив источников измерений для экспресс-отчета.


		 ![](../../../Sub_Image.gif)
		 [getDims](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.getDims.htm)

		 Метод **getDims**
		 возвращает массив измерений у экспресс-отчета.


		 ![](../../../Sub_Image.gif)
		 [getDimsByPosition](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.getDimsByPosition.htm)
		 Метод **getDimsByPosition**
		 возвращает массив измерений отчета в указанной позиции.


		 ![](../../../Sub_Image.gif)
		 [getDimsState](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.getDimsState.htm)

		 Метод **getDimsState**
		 возвращает сведения об измерениях в экспресс-отчете.


		 ![](../../../Sub_Image.gif)
		 [getIndAgg](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.getIndAgg.htm)
		 Метод getIndAgg возвращает
		 установленный тип агрегации метрики.


		 ![](../../../Sub_Image.gif)
		 [getIndicatorEls](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.getIndicatorEls.htm)
		 Метод getIndicatorEls
		 возвращает перечень измерений метрик заданного типа визуализатора.


		 ![](../../../Sub_Image.gif)
		 [getIndValue](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.getIndValue.htm)

		 Метод **getIndValue**
		 возвращает значение индикатора для карты или пузырьковой диаграммы
		 экспресс-отчета.


		 ![](../../../Sub_Image.gif)
		 [getIsADOMD](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.getIsADOMD.htm)
		 Метод getIsADOMD возвращает
		 признак того, что экспресс-отчет построен на основе ADOMD-куба.


		 ![](../../../Sub_Image.gif)
		 [getIsDmHier](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.getIsDmHier.htm)
		 Метод getIsDmHier возвращает
		 ключ измерения, для которого измерение экспресс-отчета с указанным
		 ключом является альтернативной иерархией.


		 ![](../../../Sub_Image.gif)
		 [getIsNewReport](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.getIsNewReport.htm)

		 Метод **getIsNewReport**
		 определяет, был ли ранее сохранён данный экспресс-отчет.


		 ![](../../../Sub_Image.gif)
		 [getIsPPSrvCreate](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.getIsPPSrvCreate.htm)

		 Метод **getIsPPSrvCreate**
		 определяет, был ли создан экспресс-отчет при помощи сервиса [EaxMdService](dhtmlExpress.chm::/Classes/Express/EaxMdService/EaxMdService.htm).


		 ![](../../../Sub_Image.gif)
		 [getMapId](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.getMapId.htm)

		 Метод **getMapId**
		 возвращает идентификатор представления данных «Карта» у экспресс-отчета.


		 ![](../../../Sub_Image.gif)
		 [getMetricOdId](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.getMetricOdId.htm)
		 Метод getMetricOdId
		 возвращает идентификатор метрики выбранного визуализатора.


		 ![](../../../Sub_Image.gif)
		 [getPvtSortItemDimId](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.getPvtSortItemDimId.htm)
		 Метод **getPvtSortItemDimId**
		 возвращает моникёр для [сортировки](UiAnalyticalArea.chm::/Working_with_table_data/Sorting_table_data.htm)
		 таблицы экспресс-отчёта.


		 ![](../../../Sub_Image.gif)
		 [getSelectedParts](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.getSelectedParts.htm)
		 Метод getSelectedParts
		 возвращает массив областей таблицы, входящих в текущее выделение.


		 ![](../../../Sub_Image.gif)
		 [getServiceTbFormat](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.getServiceTbFormat.htm)

		 Метод **getServiceTbFormat**
		 преобразует указанный формат топоосновы в TopobaseFormat (перечисление
		 сервисов платформы).


		 ![](../../../Sub_Image.gif)
		 [getSourceName](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.getSourceName.htm)

		 Метод **getSourceName**
		 возвращает имя источника данных экспресс-отчета по его ключу.


		 ![](../../../Sub_Image.gif)
		 [getSourcePrivateDims](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.getSourcePrivateDims.htm)
		 Метод getSourcePrivateDims
		 возвращает ключи частных измерений указанного источника.


		 ![](../../../Sub_Image.gif)
		 [getSpecialValidDimKeys](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.getSpecialValidDimKeys.htm)
		 Метод getSpecialValidDimKeys
		 возвращает ключи измерений указанного типа.


		 ![](../../../Sub_Image.gif)
		 [getTabId](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.getTabId.htm)

		 Метод **getTabId**
		 возвращает идентификатор представления данных «Таблица» у экспресс-отчета.


		 ![](../../../Sub_Image.gif)
		 [getTableParts](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.getTableParts.htm)
		 Метод getTableParts
		 возвращает массив всех областей таблицы.


		 ![](../../../Sub_Image.gif)
		 [getTypeGrowth](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.getTypeGrowth.htm)

		 Метод **getTypeGrowth**
		 возвращает тип установленного индикатора роста.


		 ![](../../../Sub_Image.gif)
		 [hasDataSources](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.hasDataSources.htm)

		 Метод **hasDataSources**
		 определяет наличие измерений у экспресс-отчета.


		 ![](../../../Sub_Image.gif)
		 [isMapAvailable](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.isMapAvailable.htm)

		 Метод **isMapAvailable**
		 определяет, доступно ли представление данных «Карта» в экспресс-отчёте.


		 ![](../../../Sub_Image.gif)
		 [transposeSelection](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.transposeSelection.htm)

		 Метод **transposeSelection**
		 транспонирует диапазон выделенных ячеек в таблице экспресс-отчета.


		 ![](../../../Sub_Image.gif)
		 [waitFor](dhtmlExpress.chm::/Classes\Express\EaxAnalyzer\EaxAnalyzer.waitFor.htm)

		 Метод **waitFor**
		 выставляет маркер ожидания указанной операции в экспресс-отчете.


## Свойства, унаследованные от класса PP.Mb.[Object](dhtmlMetabase.chm::/Classes/Metabase/Object/Object.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../../Property_Image.gif)
		 [Metabase](dhtmlMetabase.chm::/classes/metabase/object/object.metabase.htm)
		 Свойство Metabase определяет
		 репозиторий, в котором хранится объект.


		 ![](../../../Property_Image.gif)
		 [Names](dhtmlMetabase.chm::/Classes/Metabase/Object/Object.Names.htm)
		 Свойство Names определяет
		 коллекцию наименований объекта для разных языков.


		 ![](../../../Property_Image.gif)
		 [OdId](dhtmlMetabase.chm::/classes/metabase/object/object.odid.htm)
		 Свойство OdId определяет
		 строку моникёра объекта репозитория.


		 ![](../../../Property_Image.gif)
		 [Params](dhtmlMetabase.chm::/Classes/Metabase/Object/Object.Params.htm)


		 Свойство Params определяет
		 коллекцию параметров объекта репозитория.


		 ![](../../../Property_Image.gif)
		 [PPService](dhtmlMetabase.chm::/classes/metabase/object/object.ppservice.htm)
		 Свойство PPService
		 определяет сервис для работы с объектом репозитория.


		 ![](../../../Property_Image.gif)
		 [ReadOnly](dhtmlMetabase.chm::/Classes/Metabase/Object/Object.ReadOnly.htm)
		 Свойство ReadOnly определяет
		 возможность редактирования объекта репозитория.


		 ![](../../../Property_Image.gif)
		 [ShareUrl](dhtmlMetabase.chm::/Classes/Metabase/Object/Object.ShareUrl.htm)
		 Свойство ShareUrl определяет
		 URL-адрес объекта репозитория.


## Методы, унаследованные от класса PP.Mb.[Object](dhtmlMetabase.chm::/Classes/Metabase/Object/Object.htm)


		 Имя метода
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [getIsOpened](dhtmlMetabase.chm::/Classes/Metabase/Object/Object.getIsOpened.htm)
		 Метод getIsOpened возвращает
		 результат проверки открытия объекта.


		 ![](../../../Sub_Image.gif)
		 [getRights](dhtmlMetabase.chm::/Classes/Metabase/Object/Object.getRights.htm)
		 Метод getRights возвращает
		 эффективные права доступа объекта.


## Свойства, унаследованные от класса [Descriptor](dhtmlMetabase.chm::/Classes/Metabase/Descriptor/Descriptor.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../../Property_Image.gif)
		 [Class](dhtmlMetabase.chm::/Classes/Metabase/Descriptor/Descriptor.Class.htm)
		 Свойство Class определяет
		 класс объекта репозитория.


		 ![](../../../Property_Image.gif)
		 [HasChildren](dhtmlMetabase.chm::/Classes/Metabase/Descriptor/Descriptor.HasChildren.htm)
		 Свойство HasChildren
		 определяет признак наличия дочерних объектов.


		 ![](../../../Property_Image.gif)
		 [IsLink](dhtmlMetabase.chm::/Classes/Metabase/Descriptor/Descriptor.IsLink.htm)
		 Свойство IsLink возвращает
		 признак того, что данный объект находится в другом репозитории.


		 ![](../../../Property_Image.gif)
		 [IsShortcut](dhtmlMetabase.chm::/Classes/Metabase/Descriptor/Descriptor.IsShortcut.htm)
		 Свойство IsShortcut
		 возвращает признак того, что данный объект является ярлыком на
		 другой объект репозитория.


		 ![](../../../Property_Image.gif)
		 [Key](dhtmlMetabase.chm::/classes/metabase/descriptor/descriptor.key.htm)
		 Свойство Key определяет
		 ключ объекта репозитория.


		 ![](../../../Property_Image.gif)
		 [Metadata](dhtmlMetabase.chm::/classes/metabase/descriptor/descriptor.metadata.htm)
		 Свойство Metadata определяет
		 метаданные объекта.


		 ![](../../../Property_Image.gif)
		 [Name](dhtmlMetabase.chm::/classes/metabase/descriptor/descriptor.name.htm)
		 Свойство Name определяет
		 имя объекта.


		 ![](../../../Property_Image.gif)
		 [ParentKey](dhtmlMetabase.chm::/Classes/Metabase/Descriptor/Descriptor.ParentKey.htm)


		 Свойство ParentKey
		 определяет ключ родительского объекта.


		 ![](../../../Property_Image.gif)
		 [TimeStamp](dhtmlMetabase.chm::/Classes/Metabase/Descriptor/Descriptor.TimeStamp.htm)
		 Свойство TimeStamp
		 определяет дату и время последнего изменения объекта репозитория.


		 ![](../../../Property_Image.gif)
		 [Visible](dhtmlMetabase.chm::/Classes/Metabase/Descriptor/Descriptor.Visible.htm)
		 Свойство Visible возвращает
		 признак видимости объекта репозитория.


## Методы, унаследованные от класса [Descriptor](dhtmlMetabase.chm::/Classes/Metabase/Descriptor/Descriptor.htm)


		 Имя метода
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [getState](dhtmlMetabase.chm::/classes/metabase/descriptor/descriptor.getstate.htm)
		 Метод getState возвращает
		 метаданные дескриптора объекта - значения всех свойств класса
		 Descriptor.


## Свойства, унаследованные от класса [Object](dhtmlCommon.chm::/Classes/object/object.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../../Property_Image.gif)
		 [Id](dhtmlCommon.chm::/classes\object\object.id.htm)


		 Свойство Id определяет
		 идентификатор объекта репозитория.


## Методы, унаследованные от класса [Object](dhtmlCommon.chm::/Classes/object/object.htm)


		 Имя метода
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [clone](dhtmlCommon.chm::/classes\object\object.clone.htm)
		 Метод clone создает
		 копию объекта.


		 ![](../../../Sub_Image.gif)
		 [dispose](dhtmlCommon.chm::/classes\object\object.dispose.htm)
		 Метод dispose уничтожает
		 компонент.


		 ![](../../../Sub_Image.gif)
		 [getHashCode](dhtmlCommon.chm::/Classes/Object/Object.getHashCode.htm)
		 Метод getHashCode возвращает
		 хеш-код объекта репозитория.


		 ![](../../../Sub_Image.gif)
		 [getId](dhtmlCommon.chm::/Classes/Object/Object.Id.htm)
		 Метод getId возвращает
		 идентификатор объекта репозитория.


		 ![](../../../Sub_Image.gif)
		 [getSettings](dhtmlCommon.chm::/Classes/Object/Object.getSettings.htm)
		 Метод getSettings возвращает
		 настройки объекта репозитория.


		 ![](../../../Sub_Image.gif)
		 [getTypeName](dhtmlCommon.chm::/classes\object\object.gettypename.htm)
		 Метод getTypeName возвращает
		 имя типа объекта без пространства имен, к которому он принадлежит.


		 ![](../../../Sub_Image.gif)
		 [isEqual](dhtmlCommon.chm::/Classes/Object/Object.isEqual.htm)
		 Метод isEqual определяет,
		 равен ли заданный объект текущему объекту репозитория.


		 ![](../../../Sub_Image.gif)
		 [isLive](dhtmlCommon.chm::/Classes/Object/Object.isLive.htm)
		 Метод isLive определяет
		 действительность объекта репозитория.


		 ![](../../../Sub_Image.gif)
		 [removeAllEvents](dhtmlCommon.chm::/Classes/Object/Object.removeAllEvents.htm)
		 Метод removeAllEvents
		 удаляет все обработчики событий объекта по заданному контексту.


		 ![](../../../Sub_Image.gif)
		 [setId](dhtmlCommon.chm::/Classes/Object/Object.Id.htm)
		 Метод setId определяет
		 идентификатор объекта репозитория.


		 ![](../../../Sub_Image.gif)
		 [setSettings](dhtmlCommon.chm::/Classes/Object/Object.setSettings.htm)
		 Метод setSettings задает
		 настройки объекта репозитория.


		 ![](../../../Sub_Image.gif)
		 [defineProps](dhtmlCommon.chm::/Classes/Object/Object.defineProps.htm)
		 Метод defineProps создает
		 методы get и set из массива имен для указанного класса.


		 ![](../../../Sub_Image.gif)
		 [keys](dhtmlCommon.chm::/Classes/Object/Object.keys.htm)
		 Метод keys возвращает
		 массив названий методов и свойств для указанного объекта.


См. также:


[PP.TS](../../PP.TS.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
