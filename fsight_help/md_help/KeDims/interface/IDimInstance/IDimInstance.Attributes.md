# IDimInstance.Attributes

IDimInstance.Attributes
-


# IDimInstance.Attributes


## Синтаксис


Attributes: [IDimAttributesInstance](../IDimAttributesInstance/IDimAttributesInstance.htm);


## Описание


Свойство Attributes возвращает
 объект, содержащий коллекцию значений атрибутов справочника.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dimen: IDimInstance;

	    Atrs: IDimAttributesInstance;

	    i: Integer;

	    Arr: IArrayList;

	Begin

	    MB:=MetabaseClass.Active;

	    Dimen:=MB.ItemById("D_TO").Open(Null) As IDimInstance;

	    Arr:=New ArrayList.Create;

	    Atrs:=Dimen.Attributes;

	    For i:=0 To Dimen.Elements.Count-1 Do

	        Arr.Add(Atrs.Item(0).Value(i));

	    End For;

	End Sub UserProc;


После выполнения примера в динамическом массиве «Arr» будут содержаться
 все значения первого атрибута справочника. Идентификатор объекта репозитория
 - «D_TO».


См. также:


[IDimInstance](IDimInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
