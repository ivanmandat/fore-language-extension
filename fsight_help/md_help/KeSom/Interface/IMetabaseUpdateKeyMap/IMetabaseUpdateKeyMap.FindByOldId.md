# IMetabaseUpdateKeyMap.FindByOldId

IMetabaseUpdateKeyMap.FindByOldId
-


# IMetabaseUpdateKeyMap.FindByOldId


## Синтаксис


FindByOldId(ClassId: Integer; Id: String): [IMetabaseUpdateObjectRemapping](../IMetabaseUpdateObjectRemapping/IMetabaseUpdateObjectRemapping.htm);


## Параметры


ClassId. Индекс класса, которому
 принадлежит объект;


Id. Ключ объекта в обновлении.


## Описание


Метод FindByOldId выполняет
 поиск параметров сопоставления объекта по его идентификатору и классу
 в обновлении.


## Комментарии


Индексы классов объектов содержатся в перечислении [MetabaseObjectClass](../../Enums/MetabaseObjectClass.htm).


Если параметры не найдены, то метод вернёт значение Null.


## Пример


Использование свойства приведено в примере для [IMetabaseUpdateContext.RegisterHierarchyChangeO](../IMetabaseUpdateContext/IMetabaseUpdateContext.RegisterHierarchyChangeO.htm).


См. также:


[IMetabaseUpdateKeyMap](IMetabaseUpdateKeyMap.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
