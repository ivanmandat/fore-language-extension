# IStandardDimension.Levels

IStandardDimension.Levels
-


# IStandardDimension.Levels


## Синтаксис


Levels: [IStandardDimLevels](../IStandardDimLevels/IStandardDimLevels.htm);


## Описание


Свойство Levels возвращает коллекцию
 уровней табличного справочника.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dimens: IStandardDimension;

	    DimLevs: IStandardDimLevels;

	    i: Integer;

	Begin

	    MB:=MetabaseClass.Active;

	    Dimens:=MB.ItemById("TAB_DIM").Bind As IStandardDimension;

	    DimLevs:=Dimens.Levels;

	    i:=DimLevs.Count;

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться количество
 уровней справочника. Идентификатор табличного справочника - «TAB_DIM».


См. также:


[IStandardDimension](IStandardDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
