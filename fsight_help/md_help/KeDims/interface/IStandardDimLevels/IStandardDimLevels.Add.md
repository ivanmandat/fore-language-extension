# IStandardDimLevels.Add

IStandardDimLevels.Add
-


# IStandardDimLevels.Add


## Синтаксис


Add: [IStandardDimLevel](../IStandardDimLevel/IStandardDimLevel.htm);


## Описание


Метод Add осуществляет добавление
 уровня в справочник.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Dim: IStandardDimension;

	    DimLevels: IStandardDimLevels;

	    DimLevel: IStandardDimLevel;

	Begin

	    MB:=MetabaseClass.Active;

	    MObj:=MB.ItemById("TAB_DIM").Edit;

	    Dim:=MObj As IStandardDimension;

	    DimLevels:=Dim.Levels;

	    DimLevel:=DimLevels.Add;

	    DimLevel.Name:="Новый уровень";

	    DimLevel.Id:="NEW_LEVEL";

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в справочнике будет создан новый уровень. Идентификатор
 табличного справочника - «TAB_DIM».


См. также:


[IStandardDimLevels](IStandardDimLevels.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
