# IRdsLinks.Add

IRdsLinks.Add
-


# IRdsLinks.Add


## Синтаксис


Add: [IRdsLink](../IRdsLink/IRdsLink.htm);


## Описание


Метод Add осуществляет создание связи справочника НСИ.


## Комментарии


Создание связи для справочников, построенных на разных объектах БД, невозможно.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ с идентификатором «NSI_LINK», содержащего справочники НСИ с идентификаторами «Dict_1» и «Dict_2». Для второго справочника включено наличие у элементов уникального идентификатора GUID.


Добавьте ссылки на системные сборки «Metabase», «Rds»,«Dal».


			Sub UserProc;

Var

    MB: IMetabase;

    MObj, MObj2: IMetabaseObject;

    Dict, Dict2: IRdsDictionary;

    Attrs: IRdsAttributes;

    LinkAttr, LookupAttr: IRdsAttribute;

    Link: IRdsLink;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemByIdNamespace("Dict_1", MB.ItemById("NSI_LINK").Key).Edit;

    Dict := MObj As IRdsDictionary;

    MObj2 := MB.ItemByIdNamespace("Dict_1", MB.ItemById("NSI_LINK").Key).Bind;

    Dict2 := MObj2 As IRdsDictionary;

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


После выполнения примера в первом справочнике будет создан атрибут, используемый для связи со справочником «Dict_2». Будет осуществлена связь по атрибуту «Key», после чего в первом справочнике будет создан заимствованный атрибут, ссылающийся на атрибут «GUID» второго справочника.


См. также:


[IRdsLinks](IRdsLinks.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
