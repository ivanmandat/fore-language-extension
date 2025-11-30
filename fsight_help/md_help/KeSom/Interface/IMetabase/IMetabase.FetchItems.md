# IMetabase.FetchItems

IMetabase.FetchItems
-


# IMetabase.FetchItems


## Синтаксис


FetchItems(Keys: Array; [Options: Integer = 0]):
 [IMetabaseObjectDescriptors](../IMetabaseObjectDescriptors/IMetabaseObjectDescriptors.htm);


## Параметры


Keys. Массив ключей внутренних
 объектов;


Options. Настройки типа [отложенной загрузки описаний](../../Enums/MetabaseFetchOptions.htm)
 по идентификаторам.


## Описание


Метод FetchItems возвращает
 описания объектов или объектов, для которых установлен признак [отложенной
 загрузки описания](../IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.IsDeferred.htm), по ключам.


## Комментарии


Примером объекта с отложенной загрузкой описания является внутренняя
 модель цепочки расчета метамодели. Пример создания внутренней модели приведен
 в описании метода [IMsCalculationChainEntries.AddExclusiveModel](KeMs.chm::/Interface/IMsCalculationChainEntries/IMsCalculationChainEntries.AddExclusiveModel.htm).


Тип связанных объектов, для которых необходимо загрузить описание, указывается
 в параметре Options. Если в памяти
 компьютера имеются кешированные описания, то метод загрузит их оттуда.


Если для репозитория используется [отложенная
 загрузка описаний](../IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.IsDeferred.htm), то при выполнении метода описание объекта будет
 кешировано в памяти. При последующих обращениях описание будет взято из
 кеша компьютера. Однако для объектов, для которых установлен признак [IMetabaseObjectDescriptor.IsDeferred](../IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.IsDeferred.htm),
 кеширование описаний производиться не будет. Работа с этими объектами
 будет производиться с помощью методов Fetch*.


См. также:


[IMetabase](IMetabase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
