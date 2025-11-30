# IDimAttributesInstance.FindById

IDimAttributesInstance.FindById
-


# IDimAttributesInstance.FindById


## Синтаксис


FindById(AttributeId: String): [IDimAttributeInstance](../IDimAttributeInstance/IDimAttributeInstance.htm);


## Параметры


AttributeId - идентификатор
 атрибута справочника, по которому осуществляется поиск.


## Описание


Метод FindById осуществляет
 поиск по идентификатору и возвращает объект, содержащий атрибут справочника.


## Пример


Для выполнения примера предполагается наличие в репозитории справочника
 с идентификатором «D_TO».


			Sub UserProc;

Var

    MB: IMetabase;

    Dimen: IDimInstance;

    Attrs: IDimAttributesInstance;

    Attr: IDimAttributeInstance;

    i: Integer = -1;

Begin

    MB := MetabaseClass.Active;

    Dimen := MB.ItemById("D_TO").Open(Null) As IDimInstance;

    Attrs := Dimen.Attributes;

    Attr := Attrs.FindById("ID");

    If Attr <> Null Then

        i := Attr.Attribute.Key;

    End If;

End Sub UserProc;


После выполнения примера будет осуществлен поиск атрибута с идентификатором
 «ID» и в случае удачного поиска в переменной «i» будет содержаться ключ
 найденного атрибута, иначе «-1».


См. также:


[IDimAttributesInstance](IDimAttributesInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
