# IDimAttributesInstance.FindByKey

IDimAttributesInstance.FindByKey
-


# IDimAttributesInstance.FindByKey


## Синтаксис


FindByKey(AttributeKey: Integer): [IDimAttributeInstance](../IDimAttributeInstance/IDimAttributeInstance.htm);


## Параметры


AttributeKey — ключ
 атрибута справочника, по которому осуществляется поиск.


## Описание


Метод FindByKey осуществляет
 поиск по ключу и возвращает объект, содержащий атрибут справочника.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dimen: IDimInstance;

	    Attrs: IDimAttributesInstance;

	    Attr: IDimAttributeInstance;

	    s: String;

	Begin

	    MB:=MetabaseClass.Active;

	    Dimen:=MB.ItemById("D_TO").Open(Null) As IDimInstance;

	    Attrs:=Dimen.Attributes;

	    Attr:=Attrs.FindByKey(100);

	    If Attr<>Null Then

	        s:=Attr.Attribute.Id;

	    Else

	        s:="The attribute is not found";

	    End If;

	End Sub UserProc;


После выполнения примера будет осуществлен поиск атрибута с ключом «100»
 и в случае удачного поиска в переменной «s» будет содержаться идентификатор
 найденного атрибута.


См. также:


[IDimAttributesInstance](IDimAttributesInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
