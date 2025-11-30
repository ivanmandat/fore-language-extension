# MetabaseObjectCachingMode

MetabaseObjectCachingMode
-


# MetabaseObjectCachingMode


## Описание


Перечисление MetabaseObjectCachingMode
 используется для определения режима кеширования.


Используется следующим свойством:


	- [IMetabaseObject.CachingMode](../Interface/IMetabaseObject/IMetabaseObject.CachingMode.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 Default_. Значение
		 по умолчанию. Используется для всех [объектов
		 репозитория.](../Interface/IMetabaseObject/IMetabaseObject.htm)


		 1
		 DontCache. После открытия
		 объект репозитория не кешируется, при каждом новом открытии будет
		 открываться некешированная версия объекта репозитория.


		 2
		 FlushCacheByTimestamp.
		 При открытии объект будет открыт, заново записан и сохранён в
		 кеш, если временная отметка кешируемого объекта меньше, чем временная
		 отметка объекта в базе данных.


## Комментарии


Изменение значения перечисления MetabaseObjectCachingMode
 доступно только для справочников, в том числе, для справочников НСИ любого
 типа.


См. также:


[Перечисления
 сборки Metabase](KeSom_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
