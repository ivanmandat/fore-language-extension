# IUserDimAttributes.Item

IUserDimAttributes.Item
-


# IUserDimAttributes.Item


## Синтаксис


Item(Index: Variant): [IUserDimAttribute](../IUserDimAttribute/IUserDimAttribute.htm);


## Параметры


Index. Индекс
 атрибута.


## Описание


Свойство Item возвращает объект,
 содержащий атрибут справочника. Индекс атрибута передается посредством
 параметра Index.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    UsDim: IUserDimension;

	    UsDimAts: IUserDimAttributes;

	    UsDimAttr: IUserDimAttribute;

	    s: String;

	Begin

	    MB:=MetabaseClass.Active;

	    UsDim:=MB.ItemById("USER_DIM").Bind As IUserDimension;

	    UsDimAts:=UsDim.Attributes;

	    UsDimAttr:=UsDimAts.Item(UsDimAts.Count-1);

	    s:=UsDimAttr.Name;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться наименование
 последнего атрибута вычисляемого справочника. Идентификатор справочника
 - USER_DIM.


См. также:


[IUserDimAttributes](IUserDimAttributes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
