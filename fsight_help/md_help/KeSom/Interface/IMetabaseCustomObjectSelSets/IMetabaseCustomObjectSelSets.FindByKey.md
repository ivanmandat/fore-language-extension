# IMetabaseCustomObjectSelSets.FindByKey

IMetabaseCustomObjectSelSets.FindByKey
-


# IMetabaseCustomObjectSelSets.FindByKey


## Синтаксис


FindByKey(Key: String): Object;


## Параметры


Key. Ключ элемента в коллекции.


## Описание


Метод FindByKey осуществляет
 поиск элемента в коллекции по ключу и возвращает сохраненную с ним отметку
 измерений в случае удачного поиска.


## Комментарии


Если элемент найден, то метод возвращает отметку, описываемую интерфейсом
 [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm),
 иначе метод возвращает значение Null.


См. также:


[IMetabaseCustomObjectSelSets](IMetabaseCustomObjectSelSets.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
