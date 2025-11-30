# PrxMapAdapter

PrxMapAdapter
-


# PrxMapAdapter


## Описание


Перечисление PrxMapAdapter содержит типы адаптера для карты.


Используется следующими свойствами и методами:


-
[IPrxDataAdapterManager.CreateSliceMapDataAdapter](../Interface/IPrxDataAdapterManager/IPrxDataAdapterManager.CreateSliceMapDataAdapter.htm);


-
[IPrxDataAdapterManager.CreateRangeMapDataAdapter](../Interface/IPrxDataAdapterManager/IPrxDataAdapterManager.CreateRangeMapDataAdapter.htm);


-
[IPrxMapDataAdapter.AdapterType](../Interface/IPrxMapDataAdapter/IPrxMapDataAdapter.AdapterType.htm);


-
[IPrxSlice.CreateMapDataAdapter](../Interface/IPrxSlice/IPrxSlice.CreateMapDataAdapter.htm).


## Допустимые значения


 Значение
 Краткое описание


 0
 None. Тип адаптера не определен.


 1
 Static. Статический.


 2
 Dynamic. Динамический.


 3
 ShapeText. Адаптер для областей слоя.


 4
 TerritoryInfo. Адаптер для расшифровки территорий.


## Комментарии


Статический адаптер берет данные по одной точке. Пример использования перечисления Static - картографические показатели [IMapAreaVisual](Map.chm::/Interface/IMapAreaVisual/IMapAreaVisual.htm). В качестве данных берется координата на карте, соответствующая показателю.


Динамический адаптер берет данные по нескольким точкам. Пример использования перечисления Dynamic - круговые ([IMapPieVisual](Map.chm::/Interface/IMapPieVisual/IMapPieVisual.htm)) и столбиковые ([IMapBarVisual](Map.chm::/Interface/IMapBarVisual/IMapBarVisual.htm)) показатели. В качестве данных для конкретного региона берутся значение показателя и максимальное число отображаемых секторов показателя ([PiesCount](Map.chm::/Interface/IMapPieVisual/IMapPieVisual.PiesCount.htm)) для круговых показателей или максимальное количество столбиков показателя ([BarsCount](Map.chm::/Interface/IMapBarVisual/IMapBarVisual.BarsCount.htm)) для столбиковых показателей соответственно.


См. также:


[Перечисления сборки Report](KeReport_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
