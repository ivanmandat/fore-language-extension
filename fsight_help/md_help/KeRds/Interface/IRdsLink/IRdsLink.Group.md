# IRdsLink.Group

IRdsLink.Group
-


# IRdsLink.Group


## Синтаксис


Group: [IDimElementGroup](KeDims.chm::/interface/IDimElementGroup/IDimElementGroup.htm);


## Описание


Свойство Group определяет группу
 элементов, которые доступны для связи.


## Комментарии


Группа должна принадлежать тому же справочнику, что и атрибут справочника,
 с которым осуществляется связь. Данный атрибут определяет свойство [IRdsLink.Reference](IRdsLink.Reference.htm). Если группа
 принадлежит другому справочнику, то генерируется исключительная ситуация.


Если группа определена, то при создании/редактировании элемента справочника
 в значении связываемого атрибута будут отображаться только те элементы,
 которые были включены в указанную группу.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ с идентификатором
 «RDS_REPO». В данном репозитории содержатся справочники НСИ с идентификаторами
 «DICT1» и «DICT2». Справочник «DICT2» содержит группу элементов с идентификатором
 «GROUP_EL».


Добавьте ссылки на системные сборки «Metabase», «Rds», «Dimensions»,
 «Dal».


			Sub UserProc;

Var

    MB: IMetabase;

    Rds: IMetabaseObjectDescriptor;

    MObj, MObj2: IMetabaseObject;

    Dict, Dict2: IRdsDictionary;

    Attrs: IRdsAttributes;

    LinkAttr: IRdsAttribute;

    Link: IRdsLink;

    Group: IDimElementGroup;

Begin

    MB := MetabaseClass.Active;

    Rds := MB.ItemById("RDS_REPO");

    MObj := MB.ItemByIdNamespace("DICT1", Rds.Key).Edit;

    Dict := MObj As IRdsDictionary;

    MObj2 := MB.ItemByIdNamespace("DICT2", Rds.Key).Bind;

    Dict2 := MObj2 As IRdsDictionary;

//Получаем атрибуты справочника «Dict1»

    Attrs := Dict.Attributes;

//Создаем атрибут для связи со справочником «Dict2»

    LinkAttr := Attrs.Add;

    LinkAttr.DataType := DbDataType.Integer;

    LinkAttr.Id := "LinkAttr";

    LinkAttr.Name := "Атрибут для связи";

//Создаем связь со справочником «Dict2»

    Link := Dict.Links.Add;

    Link.Attribute := LinkAttr;

    Link.Reference := Dict2.Attributes.Key;

    Link.Id := "Link";

    Link.Name := "Связь со справочником Dict_2";

//Получаем группу справочника «Dict2»

    Group := MB.ItemByIdNamespace("GROUP_EL", MObj2.Key).Bind As IDimElementGroup;

//Устанавливаем связь по группе

    Link.Group := Group;

//Сохраняем изменения в справочнике «Dict1»

    MObj.Save;

End Sub UserProc;


После выполнения примера в справочнике «DICT1» будет создан атрибут,
 используемый для связи по атрибуту «KEY» со справочником «DICT2».
 Для связи будут доступны только элементы, входящие в группу «GROUP_EL»
 справочника «DICT2».


См. также:


[IRdsLink](IRdsLink.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
