# IMetabase.Definition

IMetabase.Definition
-


# IMetabase.Definition


## Синтаксис


Definition: [IMetabaseDefinition](../IMetabaseDefinition/IMetabaseDefinition.htm);


## Описание


Свойство Definition возвращает
 описание текущего репозитория, хранящееся в менеджере репозиториев.


## Пример


Добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MDef: IMetabaseDefinition;

	Begin

	    MB := MetabaseClass.Active;

	    MDef := MB.Definition;

	    Debug.WriteLine(MDef.LogonData.ParamValue("SERVER"));

	    Debug.WriteLine(MDef.LogonData.ParamValue("SCHEME"));

	End Sub UserProc;


После выполнения примера в консоль среды разработки будет выведено наименование
 сервера и схемы, к которым осуществлено текущее подключение.


См. также:


[IMetabase](IMetabase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
