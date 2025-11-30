# IRdsAttribute.Tag

IRdsAttribute.Tag
-


# IRdsAttribute.Tag


## Синтаксис


Tag: Variant;


## Описание


Свойство Tag не учитывается
 компилятором, поэтому может быть использовано пользователем по его усмотрению.


## Комментарии


Значение Tag сохраняется
 вместе со справочником.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ с идентификатором
 «RDS_REPO», содержащего справочник с идентификатором «OBJ_DICT». Также
 необходимо добавить ссылки на системные сборки «Metabase», «Rds».


			Sub UserProc;

Var

    MB: IMetabase;

    RdsDescr: IMetabaseObjectDescriptor;

    Dict: IRdsDictionary;

    Atts: IRdsAttributes;

    Attr: IRdsAttribute;

Begin

    MB := MetabaseClass.Active;

    RdsDescr := MB.ItemById("RDS_REPO");

    Dict := MB.ItemByIdNamespace("OBJ_DICT", RdsDescr.Key).Bind As IRdsDictionary;

    Atts := Dict.Attributes;

    Attr := Atts.FindById("KEY");

    Attr.Tag := "Ключ элементов
 справочника";

End Sub UserProc;


После выполнения примера для атрибута «KEY» справочника будет создан
 комментарий, содержащийся в свойстве Tag.


См. также:


[IRdsAttribute](IRdsAttribute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
