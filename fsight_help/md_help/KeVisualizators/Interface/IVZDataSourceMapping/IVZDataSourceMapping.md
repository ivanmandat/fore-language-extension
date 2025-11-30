# IVZDataSourceMapping

IVZDataSourceMapping
-


# IVZDataSourceMapping


Сборка: Visualizators;


## Описание


Интерфейс IVZDataSourceMapping
 предназначен для настройки сопоставления данных из источника.


## Иерархия наследования


           [IVZBaseDataSourceMapping](../IVZBaseDataSourceMapping/IVZBaseDataSourceMapping.htm)


           IVZDataSourceMapping


## Комментарии


Настройки сопоставления данных из источника могут быть получены в следующих
 свойствах:


	- [IVZColorVisual.ColorMapping](../IVZColorVisual/IVZColorVisual.ColorMapping.htm);


	- [IVZNumericVisual.NumericVisual](../IVZNumericVisual/IVZNumericVisual.NumericMapping.htm);


	- [IVZTextVisual.TextMapping](../IVZTextVisual/IVZTextVisual.TextMapping.htm);


	- [IVZMapChartArrowVisual.BackgroundMapping](../IVZMapChartArrowVisual/IVZMapChartArrowVisual.BackGroundMapping.htm);


	- [IVZMapChartArrowVisual.BasementWidthMapping](../IVZMapChartArrowVisual/IVZMapChartArrowVisual.BasementWidthMapping.htm);


	- [IVZMapChartMarkerVisual.BackgroundMapping](../IVZMapChartMarkerVisual/IVZMapChartMarkerVisual.BackgroundMapping.htm);


	- [IVZMapChartMarkerVisual.LatitudeMapping](../IVZMapChartMarkerVisual/IVZMapChartMarkerVisual.LatitudeMapping.htm);


	- [IVZMapChartMarkerVisual.LongitudeMapping](../IVZMapChartMarkerVisual/IVZMapChartMarkerVisual.LongitudeMapping.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AttributerId](IVZDataSourceMapping.AttributeId.htm)


		 Свойство AttributeId
		 определяет идентификатор измерения, по которому выбираются данные
		 из источника данных.


		 ![](../../Property_Image.gif)
		 [Data](IVZDataSourceMapping.Data.htm)


		 Свойство Data возвращает
		 значение указанного элемента.


		 ![](../../Property_Image.gif)
		 [DataSource](IVZDataSourceMapping.DataSource.htm)


		 Свойство DataSource
		 определяет источник данных.


		 ![](../../Property_Image.gif)
		 [DataTransformer](IVZDataSourceMapping.DataTransformer.htm)


		 Свойство DataTransformer
		 определяет преобразователь данных.


		 ![](../../Property_Image.gif)
		 [MappingType](IVZDataSourceMapping.MappingType.htm)


		 Свойство MappingType
		 определяет тип преобразования данных.


		 ![](../../Property_Image.gif)
		 [Scale](IVZDataSourceMapping.Scale.htm)


		 Свойство Scale определяет
		 шкалу сопоставления данных в источнике.


		 ![](../../Property_Image.gif)
		 [Title](IVZDataSourceMapping.Title.htm)


		 Свойство Title определяет
		 наименование выбранной отметки измерения в заданной метрике.


		 ![](../../Property_Image.gif)
		 [Value](IVZDataSourceMapping.Value.htm)


		 Свойство Value определяет
		 значение, соответствующее всем элементам визуализатора.


## Свойства, унаследованные от [IVZBaseDataSourceMapping](../IVZBaseDataSourceMapping/IVZBaseDataSourceMapping.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Index](../IVZBaseDataSourceMapping/IVZBaseDataSourceMapping.Index.htm)


		 Свойство Index определяет
		 индекс, по которому необходимо получать данные из каждого измерения.


## Методы, унаследованные от [IVZBaseDataSourceMapping](../IVZBaseDataSourceMapping/IVZBaseDataSourceMapping.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Setup](../IVZBaseDataSourceMapping/IVZBaseDataSourceMapping.Setup.htm)


		 Метод Setup инициализирует
		 шкалу отображения данных.


См. также:


[Интерфейсы сборки
 Visualizators](../KeVisualizators_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
