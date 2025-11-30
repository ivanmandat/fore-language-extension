# IMetabaseClass.Active

IMetabaseClass.Active
-


# IMetabaseClass.Active


## Синтаксис


Active: [IMetabase](../IMetabase/IMetabase.htm);


## Описание


Свойство Active возвращает данные
 текущего репозитория.


## Пример


	Sub Main

	Var

	    MB: IMetabase;

	Begin

	    MB := MetabaseClass.Active;

	    Debug.WriteLine(MB.Name);

	End Sub Main


После выполнения примера в консоль среды разработки будет выведено наименование
 текущего репозитория.


См. также:


[IMetabaseClass](IMetabaseClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
