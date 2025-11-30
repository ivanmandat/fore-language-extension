# IEaxDataAreaSlice

IEaxDataAreaSlice
-


# IEaxDataAreaSlice


Сборка: Express;


## Описание


Интерфейс IEaxDataAreaSlice
 используется для работы со срезом аналитической области данных.


## Иерархия наследования


           [INamedEntity](KeSom.chm::/Interface/INamedEntity/INamedEntity.htm)


           IEaxDataAreaSlice


## Комментарии


Для получения среза аналитической области данных по его индексу используйте
 свойство [IEaxDataAreaSlices.Item](../IEaxDataAreaSlices/IEaxDataAreaSlices.Item.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AdditionalFilterTransformations](IEaxDataAreaSlice.AdditionalFilterTransformations.htm)
		 Свойство AdditionalFilterTransformations
		 возвращает объект для работы с коллекцией трансформаций столбцов
		 при включенной раздельной фильтрации для строк и столбцов таблицы.


		 ![](../../Property_Image.gif)
		 [CalcTransformations](IEaxDataAreaSlice.CalcTransformations.htm)
		 Свойство CalcTransformations
		 возвращает коллекцию формул преобразования данных, заданных для
		 [вычисляемых
		 элементов](UiAnalyticalArea.chm::/Work_with_dimensions/Edited_elements.htm).


		 ![](../../Property_Image.gif)
		 [CalculationOptions](IEaxDataAreaSlice.CalculationOptions.htm)
		 Свойство CalculationOptions
		 определяет параметры вычисления элементов среза аналитической
		 области данных.


		 ![](../../Property_Image.gif)
		 [ControlledObjects](IEaxDataAreaSlice.ControlledObjects.htm)
		 Свойство ControlledObjects
		 возвращает коллекцию описаний источников данных среза.


		 ![](../../Property_Image.gif)
		 [DataSource](IEaxDataAreaSlice.DataSource.htm)
		 Свойство DataSource
		 возвращает описание источника данных среза в экспресс-отчете.


		 ![](../../Property_Image.gif)
		 [DataSourceCacheMode](IEaxDataAreaSlice.DataSourceCacheMode.htm)
		 Свойство DataSourceCacheMode
		 возвращает механизм кеширования, который используется при работе
		 с источником данных.


		 ![](../../Property_Image.gif)
		 [DataSourceKey](IEaxDataAreaSlice.DataSourceKey.htm)
		 Свойство DataSourceKey
		 возвращает ключ источника данных среза аналитической области данных.


		 ![](../../Property_Image.gif)
		 [ExtendedPeriodEnd](IEaxDataAreaSlice.ExtendedPeriodEnd.htm)
		 Свойство ExtendedPeriodEnd
		 определяет дату окончания периода загрузки данных.


		 ![](../../Property_Image.gif)
		 [ExtendedPeriodStart](IEaxDataAreaSlice.ExtendedPeriodStart.htm)
		 Свойство ExtendedPeriodStart
		 определяет дату начала периода загрузки данных.


		 ![](../../Property_Image.gif)
		 [FilterTransformations](IEaxDataAreaSlice.FilterTransformations.htm)
		 Свойство FilterTransformations
		 возвращает коллекцию формул преобразования данных, заданных при
		 [фильтрации](UiAnalyticalArea.chm::/Working_with_table_data/Filtering.htm).


		 ![](../../Property_Image.gif)
		 [GenerateDimensionParams](IEaxDataAreaSlice.GenerateDimensionParams.htm)
		 Свойство GenerateDimensionParams определяет,
		 будет ли использоваться автоматическая генерация параметров измерений
		 для среза данных.


		 ![](../../Property_Image.gif)
		 [GenerateSourceParams](IEaxDataAreaSlice.GenerateSourceParams.htm)
		 Свойство GenerateSourceParams
		 определяет будет ли использоваться автоматическая генерация параметров
		 среза с идентификаторами, соответствующими параметрам источника
		 для среза аналитической области.


		 ![](../../Property_Image.gif)
		 [IndicatorAggregation](IEaxDataAreaSlice.IndicatorAggregation.htm)
		 Свойство IndicatorAggregation
		 определяет метод агрегации для указанного типа метрики среза аналитической
		 области данных.


		 ![](../../Property_Image.gif)
		 [IndicatorsDimension](IEaxDataAreaSlice.IndicatorsDimension.htm)
		 Свойство IndicatorsDimension
		 определяет [измерение
		 метрик](UiMaps.chm::/Common/Metrics.htm)
		 для карты.


		 ![](../../Property_Image.gif)
		 [IndicatorSelection](IEaxDataAreaSlice.IndicatorSelection.htm)
		 Свойство IndicatorSelection
		 возвращает отметку измерения метрик.


		 ![](../../Property_Image.gif)
		 [IsLoaded](IEaxDataAreaSlice.IsLoaded.htm)
		 Свойство IsLoaded возвращает
		 признак, загружен ли источник данных.


		 ![](../../Property_Image.gif)
		 [MarkerDimension](IEaxDataAreaSlice.MarkerDimension.htm)
		 Свойство MarkerDimension
		 определяет измерение объектов геолокации.


		 ![](../../Property_Image.gif)
		 [ObjectivesDimension](IEaxDataAreaSlice.ObjectivesDimension.htm)
		 Свойство ObjectivesDimension
		 определяет [измерение
		 объектов наблюдения](UiMaps.chm::/Common/Metrics.htm)
		 для карты.


		 ![](../../Property_Image.gif)


		 [Params](IEaxDataAreaSlice.Params.htm)


		 Свойство Params
		 возвращает параметры среза аналитической области данных.


		 ![](../../Property_Image.gif)
		 [Properties](IEaxDataAreaSlice.Properties.htm)
		 Свойство Properties
		 возвращает свойства среза источника данных.


		 ![](../../Property_Image.gif)
		 [SecondaryObjectivesDimension](IEaxDataAreaSlice.SecondaryObjectivesDimension.htm)
		 Свойство SecondaryObjectivesDimension
		 определяет измерение [направления стрелок](UiMaps.chm::/Common/Metrics.htm)
		 для карты.


		 ![](../../Property_Image.gif)
		 [Selection](IEaxDataAreaSlice.Selection.htm)
		 Свойство Selection возвращает
		 отметку среза аналитической области данных.


		 ![](../../Property_Image.gif)
		 [SkipEmptyValues](IEaxDataAreaSlice.SkipEmptyValues.htm)
		 Свойство SkipEmptyValues
		 определяет, будут ли пропускаться пустые значения при вычислении
		 элементов среза аналитической области данных.


		 ![](../../Property_Image.gif)
		 [Slices](IEaxDataAreaSlice.Slices.htm)
		 Свойство Slices возвращает
		 объект-родитель среза аналитической области данных.


		 ![](../../Property_Image.gif)
		 [SortTransformations](IEaxDataAreaSlice.SortTransformations.htm)
		 Свойство SortTransformations
		 возвращает коллекцию формул преобразования данных, заданных при
		 [сортировке](UiAnalyticalArea.chm::/Working_with_table_data/Sorting_table_data.htm).


		 ![](../../Property_Image.gif)
		 [Source](IEaxDataAreaSlice.Source.htm)
		 Свойство Source определяет
		 источник аналитической области данных, на базе которого построен
		 срез.


		 ![](../../Property_Image.gif)
		 [Stub](IEaxDataAreaSlice.Stub.htm)
		 Свойство Stub возвращает
		 источник данных среза в качестве абстрактного источника.


		 ![](../../Property_Image.gif)
		 [TimeLineDimension](IEaxDataAreaSlice.TimeLineDimension.htm)
		 Свойство TimeLineDimension
		 определяет [измерение
		 шкалы времени](UiMaps.chm::/Common/Metrics.htm)
		 для карты.


		 ![](../../Property_Image.gif)
		 [Topobase](IEaxDataAreaSlice.Topobase.htm)
		 Свойство Topobase определяет
		 топооснову, на базе которой строится карта экспресс-отчета.


		 ![](../../Property_Image.gif)
		 [TopobaseByTimePoint](IEaxDataAreaSlice.TopobaseByTimePoint.htm)
		 Свойство TopobaseByTimePoint
		 возвращает топооснову, которая отображается в указанной точке
		 временной шкалы.


		 ![](../../Property_Image.gif)
		 [TopobaseKeyByTimePoint](IEaxDataAreaSlice.TopobaseKeyByTimePoint.htm)
		 Свойство TopobaseKeyByTimePoint
		 возвращает ключ топоосновы, которая отображается в указанной точке
		 временной шкалы.


		 ![](../../Property_Image.gif)
		 [Type](IEaxDataAreaSlice.Type.htm)
		 Свойство Type возвращает
		 тип среза аналитической области данных.


		 ![](../../Property_Image.gif)
		 [UseExtendedPeriod](IEaxDataAreaSlice.UseExtendedPeriod.htm)
		 Свойство UseExtendedPeriod
		 определяет, используется ли период загрузки данных.


		 ![](../../Property_Image.gif)
		 [Validations](IEaxDataAreaSlice.Validations.htm)
		 Свойство Validations
		 возвращает коллекцию правил валидации для среза источника данных.


		 ![](../../Property_Image.gif)
		 [Views](IEaxDataAreaSlice.Views.htm)
		 Свойство Views возвращает
		 коллекцию представлений среза аналитической области данных.


## Свойства, унаследованные от [INamedEntity](KeSom.chm::/Interface/INamedEntity/INamedEntity.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Id](KeSom.chm::/Interface/INamedEntity/INamedEntity.Id.htm)
		 Свойство Id определяет
		 идентификатор объекта.


		 ![](../../Property_Image.gif)
		 [Key](KeSom.chm::/Interface/INamedEntity/INamedEntity.Key.htm)
		 Свойство Key возвращает
		 ключ объекта.


		 ![](../../Property_Image.gif)
		 [Name](KeSom.chm::/Interface/INamedEntity/INamedEntity.Name.htm)
		 Свойство Name определяет
		 наименование объекта.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Copy](IEaxDataAreaSlice.Copy.htm)
		 Метод Copy создает
		 копию среза аналитической области данных.


		 ![](../../Sub_Image.gif)
		 [CreateSource](IEaxDataAreaSlice.CreateSource.htm)
		 Метод CreateSource
		 создает источник данных среза аналитической области в зависимости
		 от его типа.


		 ![](../../Sub_Image.gif)
		 [Execute](IEaxDataAreaSlice.Execute.htm)
		 Метод Execute выполняет
		 построение среза аналитической области данных.


		 ![](../../Sub_Image.gif)
		 [GetDimension](IEaxDataAreaSlice.GetDimension.htm)
		 Метод GetDimension
		 возвращает измерение среза аналитической области данных по его
		 ключу.


		 ![](../../Sub_Image.gif)
		 [GetFootnotesTransformations](IEaxDataAreaSlice.GetFootnotesTransformations.htm)
		 Метод GetFootnotesTransformations
		 возвращает коллекцию формул преобразования данных, которые будут
		 использоваться для формирования сносок к элементам измерения.


		 ![](../../Sub_Image.gif)
		 [GetTransformations](IEaxDataAreaSlice.GetTransformations.htm)
		 Метод GetTransformations
		 возвращает коллекцию формул преобразования данных.


		 ![](../../Sub_Image.gif)
		 [Load](IEaxDataAreaSlice.Load.htm)
		 Метод Load загружает
		 срез аналитической области.


		 ![](../../Sub_Image.gif)
		 [ResetTopobase](IEaxDataAreaSlice.ResetTopobase.htm)
		 Метод ResetTopobase
		 заменяет текущую карту на .


См. также:


[Интерфейсы
 сборки Express](../KeExpress_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
