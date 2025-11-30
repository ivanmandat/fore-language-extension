# IRdsLink.DisplayAttribute

IRdsLink.DisplayAttribute
-


# IRdsLink.DisplayAttribute


## Синтаксис


DisplayAttribute: [IRdsAttribute](../IRdsAttribute/IRdsAttribute.htm);


## Описание


Свойство DisplayAttribute определяет
 атрибут связываемого справочника, значения которого будут использоваться
 для отображения значений связываемого атрибута текущего справочника.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ с идентификатором
 "NSI_1". В данном репозитории содержатся справочники НСИ с идентификаторами
 «Dict_1» и «Dict_2».


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Dict1, Dict2: IRdsDictionary;

    Attrs: IRdsAttributes;

    LinkAttr: IRdsAttribute;

    Link: IRdsLink;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemByIdNamespace("Dict_1", MB.ItemById("NSI_1").Key).Edit;

    Dict1 := MObj As IRdsDictionary;

    Dict2 := MB.ItemByIdNamespace("Dict_2", MB.ItemById("NSI_1").Key).Bind As IRdsDictionary;

    //Атрибуты первого справочника

    Attrs := Dict1.Attributes;

    //Атрибут для связи со справочником

    LinkAttr := Attrs.Add;

    LinkAttr.DataType := DbDataType.Integer;

    LinkAttr.Id := "LinkAttr";

    LinkAttr.Name := "Атрибут для связи";

    //Связь со справочником

    Link := Dict1.Links.Add;

    Link.Attribute := LinkAttr;

    Link.Reference := Dict2.Attributes.Key;

    Link.DisplayAttribute := Dict2.Attributes.Name;

    Link.DisplayFormat := RdsReferenceDisplayFormat.KeyAndValue;

    Link.Id := "Link";

    Link.Name := "Связь со справочником Dict_2";

    MObj.Save;

End Sub UserProc;


После выполнения примера в первом справочнике будет создан атрибут,
 используемый для связи со справочником «Dict_2». Будет осуществлена связь
 по атрибуту «Key». Для отображения значений атрибута связи будет использоваться
 атрибут «Name» связываемого справочника. Значения будут отображаться в
 формате «Ключ (Значение)».


См. также:


[IRdsLink](IRdsLink.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
