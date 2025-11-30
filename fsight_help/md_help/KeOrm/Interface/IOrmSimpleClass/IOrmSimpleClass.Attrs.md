# IOrmSimpleClass.Attrs

IOrmSimpleClass.Attrs
-


# IOrmSimpleClass.Attrs


## Синтаксис


Attrs: [IOrmSimpleAttrs](../IOrmSimpleAttrs/IOrmSimpleAttrs.htm);


## Описание


Свойство Attrs возвращает коллекцию
 атрибутов объекта.


## Комментарии


Для получения атрибута из коллекции используйте свойство [IOrmSimpleAttrs.Item](../IOrmSimpleAttrs/IOrmSimpleAttrs.Item.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие объекта
 простого класса с идентификатором «DICT». Добавьте ссылки на системные
 сборки «Dal», «Metabase», «Orm», «Rds».


			Sub UserProc;

Var

    MB: IMetabase;

    RdsDict: IRdsDictionary;

    RdsDictInst: IRdsDictionaryInstance;

    OrmClass: IOrmSimpleClass;

    sAtts: IOrmSimpleAttrs;

    Attr: IOrmSimpleAttr;

    i: Integer;

    s: String;

Begin

    MB := MetabaseClass.Active;

    RdsDict := MB.ItemById("DICT").Bind As IRdsDictionary;

    RdsDictInst := RdsDict.Open(Null);

    OrmClass := RdsDict As IOrmSimpleClass;

    sAtts := OrmClass.Attrs;

    For i := 0 To sAtts.Count - 1 Do

        Attr := sAtts.Item(i);

        Debug.WriteLine("Атрибут:");

        Debug.Indent;

        Debug.WriteLine("- ключ: " + Attr.Key.ToString);

        Debug.WriteLine("- идентификатор: " + Attr.Id);

        Debug.WriteLine("- наименование: " + Attr.Name);

        Select Case Attr.DataType

            Case DbDataType.Blob: s := "массив двоичных, либо символьных данных";

            Case DbDataType.Boolean: s := "логические данные";

            Case DbDataType.Date: s := "дата без времени";

            Case DbDataType.DateTime: s := "дата и время";

            Case DbDataType.Float: s := "вещественные значения";

            Case DbDataType.Integer: s := "целочисленные значения";

            Case DbDataType.NoData: s := "нет данных";

            Case DbDataType.String: s := "символьные данные";

        End Select;

        Debug.WriteLine("- тип данных: " + s);

        Debug.Unindent;

    End For;

End Sub UserProc;


Результат выполнения примера: в окно консоли выведена информация об
 атрибутах объекта.


См. также:


[IOrmSimpleClass](IOrmSimpleClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
