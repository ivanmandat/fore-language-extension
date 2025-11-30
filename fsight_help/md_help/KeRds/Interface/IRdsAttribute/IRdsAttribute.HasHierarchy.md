# IRdsAttribute.HasHierarchy

IRdsAttribute.HasHierarchy
-


# IRdsAttribute.HasHierarchy


## Синтаксис


HasHierarchy: Boolean;


## Описание


Свойство HasHierarchy
 определяет, может ли атрибут использоваться для построения альтернативной
 иерархии.


## Комментарии


Допустимые значения:


	- True. Атрибут может
	 использоваться для построения альтернативной иерархии;


	- False. По умолчанию.
	 Атрибут не может использоваться для построения альтернативной иерархии.


## Пример


Для выполнения примера в репозитории предполагается наличие справочника
 НСИ с идентификатором TD_MDM.


Добавьте ссылки на системные сборки: Dal, Metabase, Rds.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Dict: IRdsDictionary;

    Attrs: IRdsAttributes;

    Attr: IRdsAttribute;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("TD_MDM").Edit;

    Dict := MObj As IRdsDictionary;

    Attrs := Dict.Attributes;

    Attr := Attrs.Add;

    Attr.DataType := DbDataType.String;

    Attr.HasHierarchy := True;

    Attr.Id := "UserAttr";

    Attr.Name := "Атрибут для альтернативной иерархии";

    Attr.Nullable := True;

    MObj.Save;

End Sub UserProc;


В результате выполнения примера в справочник будет добавлен атрибут,
 который может быть использован для построения альтернативной иерархии.


См. также:


[IRdsAttribute](IRdsAttribute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
