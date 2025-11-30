# IMetabaseGroups.Count

IMetabaseGroups.Count
-


# IMetabaseGroups.Count


## Синтаксис


		Count: Integer;


## Описание


Свойство Count возвращает количество
 групп пользователей активного репозитория.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    MS: IMetabaseSecurity;

		    MG: IMetabaseGroups;

		    i: Integer;

		Begin

		    MB := MetabaseClass.Active;

		    MS := MB.Security;

		    MG := MS.Groups;

		    Debug.WriteLine("Количество групп пользователей: " + MG.Count.ToString);

		End Sub UserProc;


После выполнения примера в консоль будет выведено количество групп пользователей
 активного репозитория.


См. также:


[IMetabaseGroups](IMetabaseGroups.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
