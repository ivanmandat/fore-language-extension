# IDimensionModel.Levels

IDimensionModel.Levels
-


# IDimensionModel.Levels


## Синтаксис


Levels: [IDimLevels](../IDimLevels/IDimLevels.htm);


## Описание


Свойство Levels возвращает объект,
 содержащий коллекцию уровней справочника.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    DimModel: IDimensionModel;

	    DimLevels: IDimLevels;

	    i: Integer;

	Begin

	    MB:=MetabaseClass.Active;

	    DimModel:=MB.ItemById("D_TO").Bind As IDimensionModel;

	    DimLevels:=DimModel.Levels;

	    i:=DimLevels.Count;

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться количество
 уровней справочника. Идентификатор объекта репозитория - «D_TO».


См. также:


[IDimensionModel](IDimensionModel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
