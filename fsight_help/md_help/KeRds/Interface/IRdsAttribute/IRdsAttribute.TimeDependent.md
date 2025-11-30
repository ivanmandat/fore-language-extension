# IRdsAttribute.TimeDependent

IRdsAttribute.TimeDependent
-


# IRdsAttribute.TimeDependent


## Синтаксис


TimeDependent: Boolean;


## Описание


Свойство TimeDependent определяет,
 учитывать ли временную компоненту для атрибутов, имеющих тип «DateTime».


## Комментарий


Допустимые значения:


	- True. Компонента времени
	 учитывается. Тип данных атрибута - дата и время;


	- False. Компонента времени
	 не учитывается. Тип данных атрибута - дата без времени.


Для системных атрибутов [INDATE](../IRdsAttributes/IRdsAttributes.InDate.htm)
 и [OUTDATE](../IRdsAttributes/IRdsAttributes.OutDate.htm) данное
 свойство по умолчанию имеет значение False,
 если для данных атрибутов свойству установить значение True
 - будет учитываться время в периодах действия элементов.


Тип данных атрибута определяет свойство [IRdsAttribute.DataType](IRdsAttribute.DataType.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие репозитория
 НСИ с идентификатором «MDM», содержащего справочник НСИ с идентификатором
 «DICT».


Добавьте ссылки на системные сборки «Dal», «Metabase», «Rds».


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Dict: IRdsDictionary;

    Attrs: IRdsAttributes;

    Attr: IRdsAttribute;

Begin

    MB := MetabaseClass.Active;

    // Получаем справочник НСИ

    MObj := MB.ItemByIdNamespace("DICT", MB.ItemById("MDM").Key).Edit;

    Dict := MObj As IRdsDictionary;

    // Получаем атрибуты справочника

    Attrs := Dict.Attributes;

    // Добавляем новый атрибут

    Attr := Attrs.Add;

    // Задаем тип данных атрибута: дата и время

    Attr.DataType := DbDataType.DateTime;

    Attr.TimeDependent := True;

    // Задаем идентификатор и наименование атрибута

    Attr.Id := "RELEASE_DATE";

    Attr.Name := "Дата и время выпуска";

    // Атрибут может иметь пустые значения

    Attr.Nullable := True;

    // Сохраняем изменения

    MObj.Save;

End Sub UserProc;


Результат выполнения примера: в справочнике
 НСИ создан необязательны атрибут типа «DateTime»,
 учитывающий временную компоненту.


См. также:


[IRdsAttribute](IRdsAttribute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
