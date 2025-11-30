# IMetabaseCache.FlushAll

IMetabaseCache.FlushAll
-


# IMetabaseCache.FlushAll


## Синтаксис


FlushAll;


## Описание


Метод FlushAll очищает ссылки
 на объекты, хранящиеся в кеше репозитория.


## Комментарии


При выполнении метода также будет очищен локальный кеш со ссылками на
 объекты среды разработки и их зависимостями. Для очистки кеша без очистки
 кеша ссылок на объекты используйте метод [IMetabaseCache.MetabaseFlushAll](IMetabaseCache.MetabaseFlushAll.htm)
 или [IMetabaseCache.MetabaseFlush](IMetabaseCache.MetabaseFlush.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории объекта
 с идентификатором OBJECT_1.


	Sub UserProc;

	Var

	    MB: IMetaBase;

	    Obj1, Obj2, Obj3: IMetabaseObject;

	    Cache: IMetabaseCache;

	Begin

	    MB := MetabaseClass.Active;

	    Cache := MB.Cache;

	    Obj1 := MB.ItemById("Object_1").Bind;

	    Obj2 := MB.ItemById("Object_1").Bind;

	    Cache.FlushAll;

	    Obj3 := MB.ItemById("Object_1").Bind;

	    If Obj1 = Obj2 Then

	        Debug.WriteLine("Obj1 = Obj2");

	    Else

	        Debug.WriteLine("Obj1 <> Obj2");

	    End If;

	    If Obj1 = Obj3 Then

	        Debug.WriteLine("Obj1 = Obj3");

	    Else

	        Debug.WriteLine("Obj1 <> Obj3");

	    End If;

	End Sub UserProc;


При выполнении примера в кеше репозитория будет помещена копия объекта
 с идентификатором Object_1. В переменных obj1 и obj2 будет содержаться
 ссылка на эту копию. После вызова метода FlushAll произойдет очистка ссылки
 на этот объект и при следующем обращении в кеш будет помещена еще одна
 копия объекта. В переменной obj3 будет храниться ссылка на вторую копию
 объекта с идентификатором Object_1. Результат сравнения переменных будет
 выведен в консоль среды разработки.


См. также:


[IMetabaseCache](IMetabaseCache.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
