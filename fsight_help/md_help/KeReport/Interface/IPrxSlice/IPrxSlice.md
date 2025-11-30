# IPrxSlice

IPrxSlice
-


# IPrxSlice


Сборка: Report;


## Описание


Интерфейс IPrxSlice содержит
 свойства и методы среза источника данных регламентного отчета.


## Иерархия наследования


           IPrxSlice


## Комментарии


Для работы с коллекцией срезов источника данных регламентного отчета
 используйте свойства и методы интерфейса [IPrxSlices](../IPrxSlices/IPrxSlices.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AggregationEnabled](IPrxSlice.AggregationEnabled.htm)
		 Свойство AggregationEnabled
		 позволяет настроить в срезе агрегацию данных.


		 ![](../../Property_Image.gif)
		 [DataSource](IPrxSlice.DataSource.htm)
		 Свойство DataSource
		 определяет источник данных для среза.


		 ![](../../Property_Image.gif)
		 [DataSourceTotalsDefined](IPrxSlice.DataSourceTotalsDefined.htm)
		 Свойство DataSourceTotalsDefined
		 возвращает True, если
		 в источнике данных среза есть настроенная агрегация.


		 ![](../../Property_Image.gif)
		 [Dimensions](IPrxSlice.Dimensions.htm)
		 Свойство Dimensions
		 возвращает объект, содержащий все измерения среза.


		 ![](../../Property_Image.gif)
		 [FixedHeader](IPrxSlice.FixedHeader.htm)
		 Свойство FixedHeader
		 возвращает все фиксированные измерения среза.


		 ![](../../Property_Image.gif)
		 [IsAggregationEnabled](IPrxSlice.IsAggregationEnabled.htm)
		 Свойство IsAggregationEnabled
		 возвращает признак наличия агрегации в срезе.


		 ![](../../Property_Image.gif)
		 [Key](IPrxSlice.Key.htm)
		 Свойство Key возвращает
		 ключ среза источника данных.


		 ![](../../Property_Image.gif)
		 [LeftHeader](IPrxSlice.LeftHeader.htm)
		 Свойство LeftHeader
		 возвращает все измерения среза, расположенные по строкам.


		 ![](../../Property_Image.gif)
		 [Matrix](IPrxSlice.Matrix.htm)
		 Свойство Matrix возвращает
		 объект, содержащий многомерную матрицу, полученную путём фиксации
		 одного или нескольких измерений куба.


		 ![](../../Property_Image.gif)
		 [Name](IPrxSlice.Name.htm)
		 Свойство Name определяет
		 наименование среза источника данных регламентного отчета.


		 ![](../../Property_Image.gif)
		 [Report](IPrxSlice.Report.htm)
		 Свойство Report возвращает
		 объект-родитель.


		 ![](../../Property_Image.gif)
		 [Selection](IPrxSlice.Selection.htm)
		 Свойство Selection
		 возвращает отметку среза.


		 ![](../../Property_Image.gif)
		 [Slices](IPrxSlice.Slices.htm)
		 Свойство Slices возвращает
		 коллекцию срезов источника данных.


		 ![](../../Property_Image.gif)
		 [TopHeader](IPrxSlice.TopHeader.htm)
		 Свойство TopHeader
		 возвращает измерения среза, расположенные по столбцам.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Copy](IPrxSlice.Copy.htm)
		 Метод Copy созадет
		 копию среза данных.


		 ![](../../Sub_Image.gif)
		 [CreateMapDataAdapter](IPrxSlice.CreateMapDataAdapter.htm)
		 Метод CreateMapDataAdapter
		 создает источник данных для карты, на основе среза данных.


		 ![](../../Sub_Image.gif)
		 [Execute](IPrxSlice.Execute.htm)
		 Метод Execute осуществляет
		 срез данных.


		 ![](../../Sub_Image.gif)
		 [GetDimension](IPrxSlice.GetDimension.htm)
		 Метод GetDimension
		 возвращает измерение заданного среза источника данных по его ключу.


		 ![](../../Sub_Image.gif)
		 [GetRecentChanges](IPrxSlice.GetRecentChanges.htm)
		 Метод GetRecentChanges
		 возвращает матрицу измененных значений среза регламентного отчета.


См. также:


[Интерфейсы сборки Report](../KeReport_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
