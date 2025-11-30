# IPivot

IPivot
-


# IPivot


Сборка: Pivot;


## Описание


Интерфейс IPivot содержит свойства
 и методы для работы с объектом, представляющим собой основу для построения
 таблицы с данными.


## Иерархия наследования


IPivot


## Комментарии


Для работы с данными таблицы используйте свойства и методы интерфейса
 [IPivotTable](../IPivotTable/IPivotTable.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AggregationElement](IPivot.AggregationElement.htm)
		 Свойство AggregationElement
		 определяет элемент, по которому в матрице будут доступны агрегированные
		 данные по фиксированным измерениям.


		 ![](../../Property_Image.gif)
		 [BroughtOutDim](IPivot.BroughtOutDim.htm)
		 Свойство BroughtOutDim
		 определяет измерение метрик.


		 ![](../../Property_Image.gif)
		 [BroughtOutDimValue](IPivot.BroughtOutDimValue.htm)
		 Свойство BroughtOutDimValue
		 определяет индекс элемента измерения метрик при использовании
		 атрибута «[Значение](UiAnalyticalArea.chm::/Work_with_dimensions/Table_metrics.htm)».


		 ![](../../Property_Image.gif)
		 [BuildWithEmptyHeader](IPivot.BuildWithEmptyHeader.htm)
		 Свойство BuildWithEmptyHeader
		 определяет признак отстраивания шапки или боковика при пустой
		 отметке.


		 ![](../../Property_Image.gif)
		 [CalculateDataRights](IPivot.CalculateDataRights.htm)
		 Свойство CalculateDataRights
		 определяет признак расчёта прав доступа пользователя к ячейкам
		 таблицы.


		 ![](../../Property_Image.gif)
		 [CanEdit](IPivot.CanEdit.htm)
		 Свойство CanEdit возвращает
		 признак, доступно ли редактирование данных в таблице.


		 ![](../../Property_Image.gif)
		 [ContainsHierarchy](IPivot.ContainsHierarchy.htm)
		 Свойство ContainsHierarchy
		 возвращает признак наличия указанной альтернативной иерархии в
		 коллекции.


		 ![](../../Property_Image.gif)
		 [DataCacheEnabled](IPivot.DataCacheEnabled.htm)
		 Свойство DataCacheEnabled
		 возвращает признак работы с кешированными данными источника.


		 ![](../../Property_Image.gif)
		 [DataSource](IPivot.DataSource.htm)
		 Свойство DataSource
		 определяет источник данных, на основе которого формируется таблица.


		 ![](../../Property_Image.gif)
		 [DimCount](IPivot.DimCount.htm)
		 Свойство DimCount возвращает
		 количество измерений источников данных, на основе которых формируется
		 таблица.


		 ![](../../Property_Image.gif)
		 [DimElementsDetailing](IPivot.DimElementsDetailing.htm)
		 Свойство DimElementsDetailing
		 возвращает детализацию элементов измерений.


		 ![](../../Property_Image.gif)
		 [Dimensions](IPivot.Dimensions.htm)
		 Свойство Dimensions
		 возвращает коллекцию измерений источников данных, на основе которых
		 формируется таблица.


		 ![](../../Property_Image.gif)
		 [DimItem](IPivot.DimItem.htm)
		 Свойство DimItem возвращает
		 данные измерения источника данных.


		 ![](../../Property_Image.gif)
		 [DrillThrough](IPivot.DrillThrough.htm)
		 Свойство DrillThrough
		 определяет признак [детализации](UiAnalyticalArea.chm::/Working_with_table_data/Drill_down.htm#agregation)
		 данных таблицы в реляционную таблицу.


		 ![](../../Property_Image.gif)
		 [Evaluator](IPivot.Evaluator.htm)
		 Свойство Evaluator
		 возвращает настройки вычисляемых показателей таблицы.


		 ![](../../Property_Image.gif)
		 [EventsEnabled](IPivot.EventsEnabled.htm)
		 Свойство EventsEnabled
		 определяет использование обработчика событий в таблице.


		 ![](../../Property_Image.gif)
		 [Filter](IPivot.Filter.htm)
		 Свойство Filter возвращает
		 параметры фильтрации данных в таблице.


		 ![](../../Property_Image.gif)
		 [FilterHeader](IPivot.FilterHeader.htm)
		 Свойство FilterHeader
		 возвращает коллекцию измерений, которые используются как фильтр
		 в кубе.


		 ![](../../Property_Image.gif)
		 [FixedElementsAggregation](IPivot.FixedElementsAggregation.htm)
		 Свойство FixedElementsAggregation
		 определяет способ агрегации при множественной отметке в фиксированных
		 измерениях.


		 ![](../../Property_Image.gif)
		 [FixedHeader](IPivot.FixedHeader.htm)
		 Свойство FixedHeader
		 возвращает коллекцию фиксированных измерений.


		 ![](../../Property_Image.gif)
		 [HasScaledData](IPivot.HasScaledData.htm)
		 Свойство HasScaledData
		 возвращает признак учёта единиц измерения при условном форматировании.


		 ![](../../Property_Image.gif)
		 [HeadersAndData](IPivot.HeadersAndData.htm)
		 Свойство HeadersAndData
		 определяет признак построения таблицы.


		 ![](../../Property_Image.gif)
		 [Highlight](IPivot.Highlight.htm)
		 Свойство Highlight
		 возвращает параметры подсветки данных таблицы.


		 ![](../../Property_Image.gif)
		 [IsAggregationCalced](IPivot.IsAggregationCalced.htm)
		 Свойство IsAggregationCalced
		 возвращает признак расчёта агрегации данных таблицы.


		 ![](../../Property_Image.gif)
		 [IsCalced](IPivot.IsCalced.htm)
		 Свойство IsCalced возвращает
		 признак расчёта данных таблицы.


		 ![](../../Property_Image.gif)
		 [IsDimEnabled](IPivot.IsDimEnabled.htm)
		 Свойство IsDimEnabled
		 определяет, будет ли измерение с указанным ключом отображаться
		 в списке измерений для задания отметки.


		 ![](../../Property_Image.gif)
		 [IsEditEnabled](IPivot.IsEditEnabled.htm)
		 Свойство IsEditEnabled
		 определяет, доступно ли редактирование данных таблицы.


		 ![](../../Property_Image.gif)
		 [IsFactsAggregationAvailable](IPivot.IsFactsAggregationAvailable.htm)
		 Свойство IsFactsAggregationAvailable
		 возвращает признак, доступна ли агрегация фактов из источника.


		 ![](../../Property_Image.gif)
		 [IsReadyToExecute](IPivot.IsReadyToExecute.htm)
		 Свойство IsReadyToExecute
		 возвращает признак, готова ли таблица к расчёту данных.


		 ![](../../Property_Image.gif)
		 [KeepDataMatrix](IPivot.KeepDataMatrix.htm)
		 Свойство KeepDataMatrix
		 определяет признак очистки матрицы с данными после извлечения
		 из неё данных.


		 ![](../../Property_Image.gif)
		 [LastException](IPivot.LastException.htm)
		 Свойство LastException
		 возвращает информацию о последней произошедшей в таблице ошибке.


		 ![](../../Property_Image.gif)
		 [LeftHeader](IPivot.LeftHeader.htm)
		 Свойство LeftHeader
		 возвращает коллекцию измерений источников данных, расположенных
		 по строкам таблицы.


		 ![](../../Property_Image.gif)
		 [LocalExecuting](IPivot.LocalExecuting.htm)
		 Свойство LocalExecuting
		 определяет состояние вычислений.


		 ![](../../Property_Image.gif)
		 [Locked](IPivot.Locked.htm)
		 Свойство Locked возвращает
		 признак блокировки перерисовки таблицы.


		 ![](../../Property_Image.gif)
		 [Matrix](IPivot.Matrix.htm)
		 Свойство Matrix возвращает
		 данные таблицы в виде матрицы.


		 ![](../../Property_Image.gif)
		 [MergedAdditionalNamingMode](IPivot.MergedAdditionalNamingMode.htm)
		 Свойство MergedAdditionalNamingMode
		 определяет способ объединения дополнительных наименований элементов
		 различных измерений.


		 ![](../../Property_Image.gif)
		 [MergedAdditionalNamingSeparator](IPivot.MergedAdditionalNamingSeparator.htm)
		 Свойство MergedAdditionalNamingSeparator
		 определяет разделитель, который будет использоваться при объединении
		 дополнительных наименований элементов различных измерений.


		 ![](../../Property_Image.gif)
		 [MergedNamingMode](IPivot.MergedNamingMode.htm)
		 Свойство MergedNamingMode
		 определяет способ объединения наименований элементов различных
		 измерений.


		 ![](../../Property_Image.gif)
		 [MergedNamingSeparator](IPivot.MergedNamingSeparator.htm)
		 Свойство MergedNamingSeparator
		 определяет разделитель, который будет использоваться при объединении
		 наименований элементов различных измерений.


		 ![](../../Property_Image.gif)
		 [ObtainDataMode](IPivot.ObtainDataMode.htm)
		 Свойство ObtainDataMode
		 определяет режим преобразований данных в таблице.


		 ![](../../Property_Image.gif)
		 [Pareto](IPivot.Pareto.htm)
		 Свойство Pareto возвращает
		 параметры анализа «80/20».


		 ![](../../Property_Image.gif)
		 [RankAreaType](IPivot.RankAreaType.htm)
		 Свойство RankAreaType
		 определяет область, по значениям которой будет осуществляться
		 ранжирование данных таблицы.


		 ![](../../Property_Image.gif)
		 [RankType](IPivot.RankType.htm)
		 Свойство RankType определяет
		 способ ранжирования данных таблицы.


		 ![](../../Property_Image.gif)
		 [Selection](IPivot.Selection.htm)
		 Свойство Selection
		 возвращает отметку, в соответствии с которой отстраивается таблица.


		 ![](../../Property_Image.gif)
		 [SeparateCombinedDimsNamings](IPivot.SeparateCombinedDimsNamings.htm)
		 Свойство SeparateCombinedDimsNamings
		 определяет признак объединения дополнительных атрибутов наименования
		 у элементов в таблице.


		 ![](../../Property_Image.gif)
		 [SortDiapason](IPivot.SortDiapason.htm)
		 Свойство SortDiapason
		 определяет режим сортировки в таблице.


		 ![](../../Property_Image.gif)
		 [Sorter](IPivot.Sorter.htm)
		 Свойство Sorter возвращает
		 параметры сортировки в таблице.


		 ![](../../Property_Image.gif)
		 [SplitNamings](IPivot.SplitNamings.htm)
		 Свойство SplitNamings
		 определяет признак доступности вывода нескольких атрибутов в один
		 столбец таблицы.


		 ![](../../Property_Image.gif)
		 [Stub](IPivot.Stub.htm)
		 Свойство Stub возвращает
		 источник данных таблицы в качестве абстрактного.


		 ![](../../Property_Image.gif)
		 [TableNoData](IPivot.TableNoData.htm)
		 Свойство TableNoData
		 возвращает таблицу без её повторного вычисления.


		 ![](../../Property_Image.gif)
		 [TopHeader](IPivot.TopHeader.htm)
		 Свойство TopHeader
		 возвращает коллекцию измерений источников данных, расположенных
		 по столбцам в таблице.


		 ![](../../Property_Image.gif)
		 [UndoRedo](IPivot.UndoRedo.htm)
		 Свойство UndoRedo
		 возвращает параметры стека изменений таблицы.


		 ![](../../Property_Image.gif)
		 [UnmatchedUnitsText](IPivot.UnmatchedUnitsText.htm)
		 Свойство UnmatchedUnitsText
		 определяет текст, отображаемый в расчётной ячейке в случае, если
		 расчёт значения в ней невозможен.


		 ![](../../Property_Image.gif)
		 [UseDataCache](IPivot.UseDataCache.htm)
		 Свойство UseDataCache
		 определяет признак использования кеша данных при работе с таблицей.


		 ![](../../Property_Image.gif)
		 [ValueAreaType](IPivot.ValueAreaType.htm)
		 Свойство ValueAreaType
		 определяет область, для которой задаётся формат представления
		 данных.


		 ![](../../Property_Image.gif)
		 [ValueType](IPivot.ValueType.htm)
		 Свойство ValueType
		 определяет формат представления данных в таблице.


		 ![](../../Property_Image.gif)
		 [ViewMode](IPivot.ViewMode.htm)
		 Свойство ViewMode определяет
		 режим отображения таблицы.


		 ![](../../Property_Image.gif)
		 [ViewOptions](IPivot.ViewOptions.htm)
		 Свойство ViewOptions
		 определяет режим отображения составных измерений в таблице.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [AddEventHandler](IPivot.AddEventHandler.htm)
		 Метод AddEventHandler
		 определяет обработчик событий таблицы.


		 ![](../../Sub_Image.gif)
		 [AddHierarchy](IPivot.AddHierarchy.htm)
		 Метод AddHierarchy
		 добавляет альтернативную иерархию в коллекцию.


		 ![](../../Sub_Image.gif)
		 [BeginUpdate](IPivot.BeginUpdate.htm)
		 Метод BeginUpdate отключает
		 любую перерисовку таблицы.


		 ![](../../Sub_Image.gif)
		 [BeginSelectionUpdate](IPivot.BeginSelectionUpdate.htm)
		 Метод BeginSelectionUpdate
		 отключает применение отметки в источнике данных при изменении
		 отметки в таблице.


		 ![](../../Sub_Image.gif)
		 [CanUngroupElement](IPivot.CanUngroupElement.htm)
		 Метод CanUngroupElement
		 определяет возможность отмены группировки данных после группировки
		 столбцов при [детализации](UiAnalyticalArea.chm::/Working_with_table_data/Drill_down.htm#agregation)
		 в реляционные данные.


		 ![](../../Sub_Image.gif)
		 [EndUpdate](IPivot.EndUpdate.htm)
		 Метод EndUpdate возобновляет
		 перерисовку таблицы.


		 ![](../../Sub_Image.gif)
		 [EndUpdateEx](IPivot.EndUpdateEx.htm)
		 Метод EndUpdateEx возобновляет
		 перерисовку таблицы с расширенными настройками.


		 ![](../../Sub_Image.gif)
		 [EndSelectionUpdate](IPivot.EndSelectionUpdate.htm)
		 Метод EndSelectionUpdate
		 возобновляет применение отметки в источнике данных при изменении
		 отметки в таблице.


		 ![](../../Sub_Image.gif)
		 [FlushDataCache](IPivot.FlushDataCache.htm)
		 Метод FlushDataCache
		 осуществляет очистку кеша данных.


		 ![](../../Sub_Image.gif)
		 [GroupElement](IPivot.GroupElement.htm)
		 Метод GroupElement
		 выполняет группировку данных столбца при [детализации](UiAnalyticalArea.chm::/Working_with_table_data/Drill_down.htm#agregation)
		 в реляционные данные.


		 ![](../../Sub_Image.gif)
		 [ObtainTable](IPivot.ObtainTable.htm)
		 Метод ObtainTable осуществляет
		 построение и возвращает таблицу данных.


		 ![](../../Sub_Image.gif)
		 [ObtainTables](IPivot.ObtainTables.htm)
		 Метод ObtainTables
		 возвращает коллекцию вариантов таблиц данных.


		 ![](../../Sub_Image.gif)
		 [RebuildCompounds](IPivot.RebuildCompounds.htm)
		 Метод RebuildCompounds
		 осуществляет перестроение составных измерений в таблице.


		 ![](../../Sub_Image.gif)
		 [Refresh](IPivot.Refresh.htm)
		 Метод Refresh осуществляет
		 обновление таблицы.


		 ![](../../Sub_Image.gif)
		 [RemoveEventHandler](IPivot.RemoveEventHandler.htm)
		 Метод RemoveEventHandler
		 удаляет обработчик событий таблицы.


		 ![](../../Sub_Image.gif)
		 [RemoveHierarchy](IPivot.RemoveHierarchy.htm)
		 Метод RemoveHierarchy
		 удаляет альтернативную иерархию из коллекции.


		 ![](../../Sub_Image.gif)
		 [SetDataSource](IPivot.SetDataSource.htm)
		 Метод SetDataSource
		 осуществляет установку источника данных.


		 ![](../../Sub_Image.gif)
		 [Turn](IPivot.Turn.htm)
		 Метод Turn осуществляет
		 разворот таблицы.


		 ![](../../Sub_Image.gif)
		 [UngroupElement](IPivot.UngroupElement.htm)
		 Метод UngroupElement
		 отменяет группировку данных после группировки столбцов при [детализации](UiAnalyticalArea.chm::/Working_with_table_data/Drill_down.htm#agregation)
		 в реляционные данные.


См. также:


[Интерфейсы
 сборки Pivot](../KePivot_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
