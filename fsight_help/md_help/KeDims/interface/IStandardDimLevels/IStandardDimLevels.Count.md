# IStandardDimLevels.Count

IStandardDimLevels.Count
-


# IStandardDimLevels.Count


## Синтаксис


Count: Integer;


## Описание


Свойство Count возвращает количество
 уровней табличного справочника.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dim: IStandardDimension;

	    DimLevels: IStandardDimLevels;

	    i: Integer;

	Begin

	    MB:=MetabaseClass.Active;

	    Dim:=MB.ItemById("TAB_DIM").Bind As IStandardDimension;

	    DimLevels:=Dim.Levels;

	    i:=DimLevels.Count;

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться количество
 уровней справочника. Идентификатор табличного справочника - «TAB_DIM».


См. также:


[IStandardDimLevels](IStandardDimLevels.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
