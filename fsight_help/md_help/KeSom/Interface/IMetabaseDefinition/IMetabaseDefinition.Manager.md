# IMetabaseDefinition.Manager

IMetabaseDefinition.Manager
-


# IMetabaseDefinition.Manager


## Синтаксис


Manager: [IMetabaseManager](../IMetabaseManager/IMetabaseManager.htm);


## Описание


Свойство Manager позволяет получить
 менеджер, в котором зарегистрирован репозиторий, соответствующий текущему
 описанию.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Def: IMetabaseDefinition;

	    Man: IMetabaseManager;

	    Count: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    Def := MB.Definition;

	    Man := Def.Manager;

	    Count := Man.Definitions.Count;

	End Sub UserProc;


После выполнения примера в переменной «Count» будет содержаться количество
 описаний репозиториев, зарегистрированных на текущей рабочей станции.


См. также:


[IMetabaseDefinition](IMetabaseDefinition.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
