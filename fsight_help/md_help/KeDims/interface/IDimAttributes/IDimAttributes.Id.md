# IDimAttributes.Id

IDimAttributes.Id
-


# IDimAttributes.Id


## Синтаксис


Id: [IDimAttribute](../IDimAttribute/IDimAttribute.htm);


## Описание


Свойство Id возвращает атрибут
 справочника, назначение которого - Идентификатор.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    DimModel: IDimensionModel;

	    DimAttrs: IDimAttributes;

	    DimAttr: IDimAttribute;

	    i: Integer;

	Begin

	    MB:=MetabaseClass.Active;

	    DimModel:=MB.ItemById("D_TO").Bind As IDimensionModel;

	    DimAttrs:=DimModel.Attributes;

	    DimAttr:=DimAttrs.Id;

	    i:=DimAttr.Key;

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться ключ атрибута
 справочника, назначение которого - Идентификатор. Идентификатор объекта
 репозитория - «D_TO».


См. также:


[IDimAttributes](IDimAttributes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
