# IRdsUniqueKey.Contains

IRdsUniqueKey.Contains
-


# IRdsUniqueKey.Contains


## Синтаксис


Contains(Attribute: [IRdsAttribute](../IRdsAttribute/IRdsAttribute.htm)):
 Boolean;


## Параметры


Attribute. Атрибут справочника
 НСИ, для которого необходимо определить вхождение в уникальный ключ.


## Описание


Свойство Contains определяет,
 входит ли указанный атрибут в уникальный ключ справочника НСИ.


## Комментарии


Допустимые значения:


	- True. Атрибут входит
	 в состав уникального ключа;


	- False. Атрибут не входит
	 в уникальный ключ.


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

    // Создаём новый атрибут

    Attrs := Dict.Attributes;

    UniqKeys := Dict.UniqueKeys;

    Attr := Attrs.Add;

    Attr.DataType := DbDataType.String;

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


Результат выполнения примера: в справочнике НСИ создан пользовательский
 атрибут. По данному атрибуту создан уникальный ключ справочника НСИ.


См. также:


[IRdsUniqueKey](IRdsUniqueKey.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
