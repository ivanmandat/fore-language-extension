# IStandardDimLevels.Remove

IStandardDimLevels.Remove
-


# IStandardDimLevels.Remove


## Синтаксис


Remove(Index: Variant): Boolean;


## Параметры


Index. Индекс уровня.


## Описание


Метод Remove осуществляет удаление
 уровня справочника, индекс которого передается посредством параметра Index.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Dim: IStandardDimension;

	    DimLevels: IStandardDimLevels;

	Begin

	    MB:=MetabaseClass.Active;

	    MObj:=MB.ItemById("TAB_DIM").Edit;

	    Dim:=MObj As IStandardDimension;

	    DimLevels:=Dim.Levels;

	    DimLevels.Remove(DimLevels.Count-1);

	    MObj.Save;

	End Sub UserProc;


После выполнения примера будет удален последний уровень справочника.
 Идентификатор табличного справочника - «TAB_DIM».


См. также:


[IStandardDimLevels](IStandardDimLevels.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
