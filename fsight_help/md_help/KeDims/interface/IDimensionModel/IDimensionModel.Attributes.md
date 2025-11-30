# IDimensionModel.Attributes

IDimensionModel.Attributes
-


# IDimensionModel.Attributes


## Синтаксис


Attributes: [IDimAttributes](../IDimAttributes/IDimAttributes.htm);


## Описание


Свойство Attributes возвращает
 объект, содержащий коллекцию атрибутов справочника.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    DimModel: IDimensionModel;

	    DimAtrr: IDimAttributes;

	    i: Integer;

	Begin

	    MB:=MetabaseClass.Active;

	    DimModel:=MB.ItemById("D_TO").Bind As IDimensionModel;

	    DimAtrr:=DimModel.Attributes;

	    i:=DimAtrr.Count;

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться количество
 атрибутов справочника. Идентификатор объекта репозитория - «D_TO».


См. также:


[IDimensionModel](IDimensionModel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
