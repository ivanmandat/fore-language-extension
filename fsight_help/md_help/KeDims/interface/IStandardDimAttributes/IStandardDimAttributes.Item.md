# IStandardDimAttributes.Item

IStandardDimAttributes.Item
-


# IStandardDimAttributes.Item


## Синтаксис


Item(Index: Variant): [IStandardDimAttribute](../IStandardDimAttribute/IStandardDimAttribute.htm);


## Параметры


Index -
 индекс атрибута в коллекции, либо идентификатор атрибута.


Примечание.
 При передаче в качестве значения параметра идентификатора атрибута, все
 символы идентификатора должны быть указаны в верхнем регистре.


## Описание


Свойство Item возвращает параметры
 атрибута табличного справочника.


## Пример


Для выполнения примера предполагается наличие в репозитории табличного
 справочника с идентификатором «TAB_DIM». В справочнике имеется атрибут
 с идентификатором «USER».


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dimens: IStandardDimension;

	    DimAtrrs: IStandardDimAttributes;

	    DimAtribut: IStandardDimAttribute;

	    s: String;

	Begin

	    MB:=MetabaseClass.Active;

	    Dimens:=MB.ItemById("TAB_DIM").Bind As IStandardDimension;

	    DimAtrrs:=Dimens.Attributes;

	    DimAtribut:=DimAtrrs.Item("USER");

	    s:=DimAtribut.Name;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться наименование
 указанного атрибута справочника.


См. также:


[IStandardDimAttributes](IStandardDimAttributes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
