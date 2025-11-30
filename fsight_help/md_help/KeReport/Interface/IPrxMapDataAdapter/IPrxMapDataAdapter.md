# IPrxMapDataAdapter

IPrxMapDataAdapter
-


# IPrxMapDataAdapter


## Описание


Интерфейс IPrxMapDataAdapter
 содержит свойства источника данных для карты регламентного отчета.


## Комментарии


Интерфейс предназначен для работы с картой старого формата (*.tbs).
 Для работы с картой нового формата (*.svg) используйте интерфейсы [IVzMapChart](KeVisualizators.chm::/Interface/IVZMapChart/IVZMapChart.htm)
 и [IEaxMapChart](KeExpress.chm::/Interface/IEaxMapChart/IEaxMapChart.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AdapterDataType](IPrxMapDataAdapter.AdapterDataType.htm)
		 Свойство AdapterDataType
		 определяет тип адаптера для отображения данных на карте в зависимости
		 от расположения исходных данных.


		 ![](../../Property_Image.gif)
		 [AdapterType](IPrxMapDataAdapter.AdapterType.htm)
		 Свойство AdapterType
		 возвращает тип адаптера данных для карты.


		 ![](../../Property_Image.gif)
		 [Attribute](IPrxMapDataAdapter.Attribute.htm)
		 Свойство Attribute
		 определяет атрибут слоя карты.


		 ![](../../Property_Image.gif)
		 [DataRange](IPrxMapDataAdapter.DataRange.htm)
		 Свойство DataRange
		 определяет диапазон ячеек, содержащий отображаемые данные на карте.


		 ![](../../Property_Image.gif)
		 [Dimension](IPrxMapDataAdapter.Dimension.htm)
		 Свойство Dimension
		 определяет измерение среза.


		 ![](../../Property_Image.gif)
		 [Expression](IPrxMapDataAdapter.Expression.htm)
		 Свойство Expression
		 возвращает выражения для установки формата идентификаторов в
		 расшифровке территорий слоя карты.


		 ![](../../Property_Image.gif)
		 [Expression2](IPrxMapDataAdapter.Expression2.htm)
		 Свойство Expression2
		 возвращает выражения для установки формата наименований в
		 расшифровке территорий слоя карты.


		 ![](../../Property_Image.gif)
		 [IdRange](IPrxMapDataAdapter.IdRange.htm)
		 Свойство IdRange определяет
		 диапазон ячеек, содержащий идентификаторы регионов на карте.


		 ![](../../Property_Image.gif)
		 [Index](IPrxMapDataAdapter.Index.htm)
		 Свойство Index определяет
		 индекс измерения среза.


		 ![](../../Property_Image.gif)
		 [Sheet](IPrxMapDataAdapter.Sheet.htm)
		 Свойство Sheet определяет
		 лист с данными, которые будут отображены на карте.


## Свойства, унаследованные от [IPrxDataAdapter](../IPrxDataAdapter/IPrxDataAdapter.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Consumer](../IPrxDataAdapter/IPrxDataAdapter.Consumer.htm)
		 Свойство Consumer возвращает
		 тип объекта, который использует источник данных.


		 ![](../../Property_Image.gif)
		 [Slice](../IPrxDataAdapter/IPrxDataAdapter.Slice.htm)
		 Свойство Slice возвращает
		 срез, который используется в качестве источника данных.


См. также:


[Интерфейсы сборки Report](../KeReport_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
