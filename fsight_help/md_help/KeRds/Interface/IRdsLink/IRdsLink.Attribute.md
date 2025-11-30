# IRdsLink.Attribute

IRdsLink.Attribute
-


# IRdsLink.Attribute


## Синтаксис


Attribute: [IRdsAttribute](../IRdsAttribute/IRdsAttribute.htm);


## Описание


Свойство Attribute определяет
 связываемый атрибут данного справочника НСИ.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ - "NSI_1",
 содержащего справочники НСИ с идентификаторами "Dict_1" и "Dict_2".
 Для второго справочника включено наличие у элементов уникального идентификатора
 GUID.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Dict, Dict2: IRdsDictionary;

	    Attrs: IRdsAttributes;

	    LinkAttr, LookupAttr: IRdsAttribute;

	    Link: IRdsLink;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemByIdNamespace("Dict_1", MB.ItemById("NSI_1").Key).Edit;

	    Dict := MObj As IRdsDictionary;

	    Dict2 := MB.ItemByIdNamespace("Dict_2", MB.ItemById("NSI_1").Key).Bind As IRdsDictionary;

	    //Атрибуты первого справочника

	    Attrs := Dict.Attributes;

	    //Атрибут для связи со справочником

	    LinkAttr := Attrs.Add;

	    LinkAttr.DataType := DbDataType.Integer;

	    LinkAttr.Id := "LinkAttr";

	    LinkAttr.Name := "Атрибут для связи";

	    //Связь со справочником

	    Link := Dict.Links.Add;

	    Link.Attribute := LinkAttr;

	    Link.Reference := Dict2.Attributes.Key;

	    Link.Id := "Link";

	    Link.Name := "Связь со справочником Dict_2";

	    //Заимствованный атрибут GUID

	    LookupAttr := Attrs.Add;

	    LookupAttr.Id := "Dict2_GUID";

	    LookupAttr.Name := "GUID";

	    LookupAttr.Link := Link;

	    LookupAttr.Lookup := Dict2.Attributes.GUID;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в первом справочнике будет создан атрибут,
 используемый для связи со справочником "Dict_2". Будет осуществлена
 связь по атрибуту "Key", после чего в первом справочнике будет
 создан заимствованный атрибут, ссылающийся на атрибут "GUID"
 второго справочника.


См. также:


[IRdsLink](IRdsLink.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
