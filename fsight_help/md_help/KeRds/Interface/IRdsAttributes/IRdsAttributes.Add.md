# IRdsAttributes.Add

IRdsAttributes.Add
-


# IRdsAttributes.Add


## Синтаксис


Add: [IRdsAttribute](../IRdsAttribute/IRdsAttribute.htm);


## Описание


Метод Add создает пользовательский
 атрибут.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ - "NSI_1",
 содержащего справочник НСИ с идентификатором "Dict_1".


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Dict: IRdsDictionary;

	    Attrs: IRdsAttributes;

	    Attr: IRdsAttribute;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemByIdNamespace("Dict_1", MB.ItemById("NSI_1").Key).Edit;

	    Dict := MObj As IRdsDictionary;

	    Attrs := Dict.Attributes;

	    Attr := Attrs.Add;

	    Attr.DataType := DbDataType.Integer;

	    Attr.Id := "UserAttr";

	    Attr.Name := "Дополнительный атрибут";

	    Attr.Nullable := True;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в справочнике НСИ будет создан один дополнительный
 атрибут.


См. также:


[IRdsAttributes](IRdsAttributes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
