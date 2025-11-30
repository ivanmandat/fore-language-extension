# IRdsDictionaryElement.AccessAttribute

IRdsDictionaryElement.AccessAttribute
-


# IRdsDictionaryElement.AccessAttribute


## Синтаксис


AccessAttribute(AttributeKey: Integer): String;


## Параметры


AttributeKey. Ключ атрибута
 доступа, по которому необходимо узнать метку безопасности. В качестве
 значения параметра должен передаваться ключ одного из базовых атрибутов:
 [READACCESS](../IRdsAttributes/IRdsAttributes.ReadAccess.htm),
 [WRITEACCESS](../IRdsAttributes/IRdsAttributes.WriteAccess.htm),
 [DELETEACCESS](../IRdsAttributes/IRdsAttributes.DeleteAccess.htm),
 [ACCESSACCESS](../IRdsAttributes/IRdsAttributes.AccessAccess.htm).


## Описание


Свойство AccessAttribute возвращает
 метку безопасности, установленную по атрибуту доступа, ключ которого передается
 посредством параметра AttributeKey.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ - "NSI_1",
 содержащего справочник НСИ с идентификатором "Dict_1". Для справочника
 включено управление правами доступа к элементам.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dict: IRdsDictionary;

	    DictInst: IRdsDictionaryInstance;

	    Attrs: IRdsAttributes;

	    Element: IRdsDictionaryElement;

	Begin

	    MB := MetabaseClass.Active;

	    Dict := MB.ItemByIdNamespace("Dict_1", MB.ItemById("NSI_1").Key).Bind As IRdsDictionary;

	    DictInst := Dict.Open(Null);

	    Attrs := Dict.Attributes;

	    Element := DictInst.Elements.Item(1);

	    Debug.WriteLine(Element.AccessAttribute(Attrs.ReadAccess.Key));

	    Debug.WriteLine(Element.AccessAttribute(Attrs.WriteAccess.Key));

	    Debug.WriteLine(Element.AccessAttribute(Attrs.DeleteAccess.Key));

	    Debug.WriteLine(Element.AccessAttribute(Attrs.AccessAccess.Key));

	End Sub UserProc;


После выполнения примера в консоль будут выведены значения метки безопасности,
 установленные по всем атрибутам доступа для первого элемента справочника.


См. также:


[IRdsDictionaryElement](IRdsDictionaryElement.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
