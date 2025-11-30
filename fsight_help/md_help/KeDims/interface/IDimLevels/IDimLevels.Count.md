# IDimLevels.Count

IDimLevels.Count
-


# IDimLevels.Count


## Синтаксис


Count: Integer;


## Описание


Свойство Count возвращает количество уровней справочника.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    DimModel: IDimensionModel;

	    Levels: IDimLevels;

	    i: Integer;

	Begin

	    MB:=MetabaseClass.Active;

	    DimModel:=MB.ItemById("D_TO").Bind As IDimensionModel;

	    Levels:=DimModel.Levels;

	    i:=Levels.Count;

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться количество уровней справочника. Идентификатор объекта репозитория - «D_TO».


См. также:


[IDimLevels](IDimLevels.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
