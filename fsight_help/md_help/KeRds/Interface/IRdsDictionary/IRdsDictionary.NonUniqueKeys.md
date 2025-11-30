# IRdsDictionary.NonUniqueKeys

IRdsDictionary.NonUniqueKeys
-


# IRdsDictionary.NonUniqueKeys


## Синтаксис


NonUniqueKeys: [IRdsNonUniqueKeys](../IRdsNonUniqueKeys/IRdsNonUniqueKeys.htm);


## Описание


Свойство NonUniqueKeys возвращает
 коллекцию неуникальных ключей справочника НСИ.


## Комментарии


Для получения коллекции уникальных ключей справочника НСИ используйте
 свойство [IRdsDictionary.UniqueKeys](IRdsDictionary.UniqueKeys.htm).


## Пример


Для выполнения примера предполагается наличие репозитория НСИ с идентификатором
 «NSI_1», содержащего справочник НСИ с идентификатором «DICT_1».


Добавьте ссылки на системные сборки «Metabase», «Rds», «Dal».


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Dict: IRdsDictionary;

    Attrs: IRdsAttributes;

    Attr: IRdsAttribute;

    Keys: IRdsNonUniqueKeys;

    Key: IRdsNonUniqueKey;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemByIdNamespace("DICT_1", MB.ItemById("NSI_1").Key).Edit;

    Dict := MObj As IRdsDictionary;

    // Создаем новый атрибут

    Attrs := Dict.Attributes;

    Keys := Dict.NonUniqueKeys;

    Attr := Attrs.Add;

    Attr.DataType := DbDataType.String;

    Attr.Id := "GosNomer";

    Attr.Name := "Государственный номер";

    // Создаем неуникальный ключ

    Key := Keys.Add;

    Key.Id := "Index_1";

    Key.Name := "Индекс 1";

    Key.Contains(Attr) := True;

    // Сохраняем изменения

    (Key.Dictionary As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера в справочнике НСИ будет создан пользовательский
 атрибут. По данному атрибуту создан неуникальный ключ справочника НСИ.


См. также:


[IRdsDictionary](IRdsDictionary.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
