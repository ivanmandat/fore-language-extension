# IMetabaseCache.MetabaseFlush

IMetabaseCache.MetabaseFlush
-


# IMetabaseCache.MetabaseFlush


## Синтаксис


MetabaseFlush(Key: Integer): Boolean;


## Параметры


Key. Ключ объекта репозитория.


## Описание


Метод MetabaseFlush осуществляет
 очистку кеша объекта репозитория без очистки кеша ссылок на объекты сборок
 и их зависимостей.


## Комментарии


Работа метода аналогична работе методов [FlushInstance](IMetabaseCache.FlushInstance.htm)
 и [FlushInstanceById](IMetabaseCache.FlushInstanceById.htm),
 за исключением случаев, когда передается ключ объекта среды разработки.
 При этом очистка кеша сборок для указанного объекта производиться не будет.


См. также:


[IMetabaseCache](IMetabaseCache.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
