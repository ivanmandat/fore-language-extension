# IDimLevels.Item

IDimLevels.Item
-


# IDimLevels.Item


## Синтаксис


Item(Index: Variant): [IDimLevel](../IDimLevel/IDimLevel.htm);


## Параметры


Index — индекс уровня.


## Описание


Свойство Item возвращает объект, содержащий уровень справочника, индекс которого передается посредством параметра Index.


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

	        Level:=Levels.Item(0);

	        s:=Level.Name;

	    End If;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться наименование первого уровня справочника, если уровни созданы. Идентификатор объекта репозитория - «D_TO».


См. также:


[IDimLevels](IDimLevels.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
