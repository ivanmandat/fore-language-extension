# IMetabaseObjectFindInfo.InternalObjects

IMetabaseObjectFindInfo.InternalObjects
-


# IMetabaseObjectFindInfo.InternalObjects


## Синтаксис


InternalObjects: Boolean;


## Описание


Свойство InternalObjects определяет
 признак поиска скрытых объектов.


## Комментарии


Различные объекты репозитория могут иметь скрытые дочерние объекты,
 например, схемы отметок и группы элементов хранятся как скрытые объекты
 справочников. Если в кубе имеется локальное измерения фактов, то для куба
 будет создан скрытый составной справочник. Другие типы объектов также
 могут иметь скрытые объекты. Для управления поиском этих объектов предназначено
 свойство InternalObjects.


Допустимые значения:


	- True. Значение по умолчанию.
	 Находить скрытые объекты, если они удовлетворяют другим условиям поиска;


	- False. Пропускать скрытые
	 объекты при поиске.


Также объекты со скрытыми дочерними объектами неявно являются объектами-контейнерами,
 поэтому для корректного поиска необходимо определить свойство [ContainersContent](IMetabaseObjectFindInfo.ContainersContent.htm).


## Пример


Использование свойства приведено в примере для [IMetabaseObjectFindInfo.ContainersContent](IMetabaseObjectFindInfo.ContainersContent.htm).


См. также:


[IMetabaseObjectFindInfo](IMetabaseObjectFindInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
