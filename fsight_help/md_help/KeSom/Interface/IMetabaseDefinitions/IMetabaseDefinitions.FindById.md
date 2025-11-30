# IMetabaseDefinitions.FindById

IMetabaseDefinitions.FindById
-


# IMetabaseDefinitions.FindById


## Синтаксис


FindById(Id: String): [IMetabaseDefinition](../IMetabaseDefinition/IMetabaseDefinition.htm);


## Параметры


Id. Идентификатор описания репозитория.


## Описание


Метод FindById осуществляет
 поиск описания репозитория, идентификатор которого передается посредством
 входного параметра.


## Комментарии


В случае удачного поиска метод возвращает параметры описания репозитория,
 иначе возвращает значение Null.


## Пример


	Sub UserProc;

	Var

	    Man: IMetabaseManager;

	    Defs: IMetabaseDefinitions;

	    Def: IMetabaseDefinition;

	Begin

	    Man := MetabaseManagerFactory.Active;

	    Defs := Man.Definitions;

	    Def := Defs.FindById("TestDefinition");

	    If Def <> Null Then

	        Defs.RemoveById("TestDefinition");

	    End If;

	End Sub UserProc;


При выполнения примера, если в менеджере имеется описание репозитория
 с идентификатором "TestDefinition", то данное описание будет
 удалено.


См. также:


[IMetabaseDefinitions](IMetabaseDefinitions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
