# IRdsUniqueKeys.Add

IRdsUniqueKeys.Add
-


# IRdsUniqueKeys.Add


## Синтаксис


Add: [IRdsUniqueKey](../IRdsUniqueKey/IRdsUniqueKey.htm);


## Описание


Метод Add создает новый уникальный
 ключ справочника НСИ.


## Пример


Для выполнения примера в репозитории предполагается наличие репозитория
 НСИ с идентификатором «RDS_REPO», содержащего справочник НСИ с идентификатором
 «MDM_DICT».


Добавьте ссылки на системные сборки: Dal, Metabase, Rds.


			Sub UserProc;

Var

    MB: IMetabase;

    MDMKey: Integer;

    MObj: IMetabaseObject;

    Dict: IRdsDictionary;

    Attrs: IRdsAttributes;

    Attr: IRdsAttribute;

    UniqKeys: IRdsUniqueKeys;

    UniqKey: IRdsUniqueKey;

Begin

    MB := MetabaseClass.Active;

    // Получаем справочник НСИ

    MDMKey := MB.ItemById("RDS_REPO").Key;

    MObj := MB.ItemByIdNamespace("MDM_DICT", MDMKey).Edit;

    Dict := MObj As IRdsDictionary;

    // Получаем атрибуты справочника

    Attrs := Dict.Attributes;

    // Получаем коллекцию уникальных ключей

    UniqKeys := Dict.UniqueKeys;

    // Создаем атрибут справочника

    Attr := Attrs.Add;

    Attr.DataType := DbDataType.String;

    Attr.Id := "ITN";

    Attr.Name := "ИНН";

    // Создаем уникальный ключ на основе созданного атрибута

    UniqKey := UniqKeys.Add;

    UniqKey.Id := "UNIKKEY_ITN";

    UniqKey.Name := "Уникальный ключ по ИНН";

    UniqKey.Contains(Attr) := True;

    // Сохраняем изменения

    MObj.Save;

End Sub UserProc;


После выполнения примера в справочнике НСИ будет создан пользовательский
 атрибут. По данному атрибуту будет создан уникальный ключ справочника
 НСИ.


См. также:


[IRdsUniqueKeys](IRdsUniqueKeys.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
