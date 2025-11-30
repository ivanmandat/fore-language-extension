# IDimLevels.FindByKey

IDimLevels.FindByKey
-


# IDimLevels.FindByKey


## Синтаксис


FindByKey(IndexKey: Integer): [IDimLevel](../IDimLevel/IDimLevel.htm);


## Параметры


IndexKey.
 Ключ уровня справочника, по которому будет производиться поиск.


## Описание


Метод FindByKey осуществляет
 поиск и возвращает объект, содержащий уровень справочника. Поиск осуществляется
 по ключу, передаваемому посредством параметра IndexKey.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    DimModel: IDimensionModel;

	    Levels: IDimLevels;

	    Level: IDimLevel;

	    s: String;

	Begin

	    MB:=MetabaseClass.Active;

	    DimModel:=MB.ItemById("D_TO").Bind As IDimensionModel;

	    Levels:=DimModel.Levels;

	    If Levels.Count<>0 Then

	        Level:=Levels.FindByKey(4000);

	        If Level<>Null Then

	            s:=Level.Name;

	        End If;

	    End If;

	End Sub UserProc;


После выполнения примера будет осуществлен поиск уровня справочника
 с ключом «4000». В случае удачного поиска в переменной «s» будет содержаться
 наименование этого уровня. Идентификатор объекта репозитория - «D_TO».


См. также:


[IDimLevels](IDimLevels.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
