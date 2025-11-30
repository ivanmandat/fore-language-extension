# IDimInstance.Dimension

IDimInstance.Dimension
-


# IDimInstance.Dimension


## Синтаксис


Dimension: [IDimensionModel](../IDimensionModel/IDimensionModel.htm);


## Описание


Свойство Dimension возвращает
 объект, содержащий структуру справочника.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dimen: IDimInstance;

	    DimModel: IDimensionModel;

	    i: Integer;

	Begin

	    MB:=MetabaseClass.Active;

	    Dimen:=MB.ItemById("D_TO").Open(Null) As IDimInstance;

	    DimModel:=Dimen.Dimension;

	    i:=DimModel.Attributes.Count;

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться количество
 атрибутов справочника.


См. также:


[IDimInstance](IDimInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
