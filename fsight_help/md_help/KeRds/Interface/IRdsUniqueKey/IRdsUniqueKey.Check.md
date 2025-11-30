# IRdsUniqueKey.Check

IRdsUniqueKey.Check
-


# IRdsUniqueKey.Check


## Синтаксис


Check;


## Описание


Метод Check проверяет уникальность
 значений элементов по атрибутам, включенным в уникальный ключ.


## Комментарии


Для включения/исключения атрибута из состава уникального ключа используйте
 свойство [IRdsUniqueKey.Contains](IRdsUniqueKey.Contains.htm).


Если при редактировании/добавлении уникального ключа уникальность будет
 нарушена, сгенерируется исключительная ситуация. Пользователю будет отображено
 сообщение об ошибке.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ с идентификатором
 «RDS_REPO», содержащего справочник НСИ с идентификатором «RDS_DICT».


Добавьте ссылки на системные сборки «Metabase», «Rds», «Dal».


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Dict: IRdsDictionary;

    Attrs: IRdsAttributes;

    Attr: IRdsAttribute;

    UniqKeys: IRdsUniqueKeys;

    UniqKey: IRdsUniqueKey;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemByIdNamespace("RDS_DICT", MB.ItemById("RDS_REPO").Key).Edit;

    Dict := MObj As IRdsDictionary;

    Attrs := Dict.Attributes;

    UniqKeys := Dict.UniqueKeys;

    // Определяем идентификатор и наименование атрибута

    Attr := Attrs.Add;

    Attr.DataType := DbDataType.String;

    Attr.Id := "ATTRIBUTE";

    Attr.Name := "Государственный номер";

    // Создаем уникальный ключ

    UniqKey := UniqKeys.Add;

    UniqKey.Name := "Уникальный ключ по гос.номеру";

    UniqKey.Contains(Attr) := True;

    // Проверяем уникальность значений элементов

    UniqKey.Check;

    // Сохраняем изменения

    (UniqKey.Dictionary As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера в справочнике НСИ будет создан пользовательский
 атрибут. По данному атрибуту создан уникальный ключ справочника НСИ.


См. также:


[IRdsUniqueKey](IRdsUniqueKey.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
