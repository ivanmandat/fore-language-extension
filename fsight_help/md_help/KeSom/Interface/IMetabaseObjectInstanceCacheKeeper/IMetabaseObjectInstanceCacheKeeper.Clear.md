# IMetabaseObjectInstanceCacheKeeper.Clear

IMetabaseObjectInstanceCacheKeeper.Clear
-


# IMetabaseObjectInstanceCacheKeeper.Clear


## Синтаксис


Clear([Key: Integer = -1]): Boolean;


## Параметры


Key. Ключ объекта кеширования.


## Описание


Метод Clear осуществляет очистку
 кеша указанного объекта кеширования.


## Комментарии


По умолчанию метод удаляет все закешированные экземпляры объекта кеширования
 в хранилище закешированных объектов кеширования.


Для кубов возможно указать ключ определённого [варианта
 отображения куба](kecubes.chm::/Interface/ICubeModelDestination/ICubeModelDestination.htm), для которого нужно очистить кеш.


См. также:


[IMetabaseObjectInstanceCacheKeeper](IMetabaseObjectInstanceCacheKeeper.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
