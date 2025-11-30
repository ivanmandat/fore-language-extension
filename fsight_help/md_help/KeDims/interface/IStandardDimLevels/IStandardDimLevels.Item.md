# IStandardDimLevels.Item

IStandardDimLevels.Item
-


# IStandardDimLevels.Item


## Синтаксис


Item(Index: Variant): [IStandardDimLevel](../IStandardDimLevel/IStandardDimLevel.htm);


## Параметры


Index.Индекс уровня.


## Описание


Свойство Item возвращает объект,
 содержащий уровень табличного справочника.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dim: IStandardDimension;

	    DimLevels: IStandardDimLevels;

	    DimLevel: IStandardDimLevel;

	    s: String;

	Begin

	    MB:=MetabaseClass.Active;

	    Dim:=MB.ItemById("TAB_DIM").Bind As IStandardDimension;

	    DimLevels:=Dim.Levels;

	    If DimLevels.Count<>0 Then

	        DimLevel:=DimLevels.Item(0);

	        s:=DimLevel.Name;

	    End If;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться наименование
 первого уровня справочника. Идентификатор табличного справочника - «TAB_DIM».


См. также:


[IStandardDimLevels](IStandardDimLevels.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
