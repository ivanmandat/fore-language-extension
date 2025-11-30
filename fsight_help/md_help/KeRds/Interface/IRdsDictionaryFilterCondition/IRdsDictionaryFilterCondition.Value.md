# IRdsDictionaryFilterCondition.Value

IRdsDictionaryFilterCondition.Value
-


# IRdsDictionaryFilterCondition.Value


## Синтаксис


Value: Variant;


## Описание


Свойство Value определяет значение
 атрибута, по которому фильтруются элементы.


## Комментарии


Если не определено свойство Value,
 то корректная работа фильтра невозможна.


Если Value содержит массив значений
 типа Variant и свойство [IRdsDictionaryFilterCondition.Operation](IRdsDictionaryFilterCondition.Operation.htm)
 имеет значение:


	- [RdsConditionOperation.Equal](../../Enums/RdsConditionOperation.htm). Для
	 фильтра применяется условие In,
	 то есть наличие значения атрибута в массиве Value;


	- [RdsConditionOperation.NotEqual](../../Enums/RdsConditionOperation.htm).
	 Для фильтра применяется условие NotIn,
	 то есть отсутствие значения атрибута в массиве Value.


## Пример


Для выполнения примера в репозитории предполагается наличие справочника
 НСИ с идентификатором EXP_DICT.


В файловой системе должен быть создан текстовый файл «C:\Data_out.txt».


Добавьте ссылки на системные сборки: Metabase, Rds, Dt.


			Sub UserProc;

Var

    Mb: IMetabase;

    dictObj: IMetabaseObject;

    Dict: IRdsDictionary;

    sExport: IMetaRdsExportSchema;

    i: Integer;

    dictAts: IRdsAttributes;

    Attr: IRdsAttribute;

    attrMap: IRdsExportSchemaAttribute;

    dictFilter: IRdsDictionaryFilterConditions;

    Cond: IRdsDictionaryFilterCondition;

    textCons: IDtTextConsumer;

    dictInst: IRdsDictionaryInstance;

Begin

    Mb := MetabaseClass.Active;

    // Получаем справочник НСИ

    dictObj := Mb.ItemById("EXP_DICT").Edit;

    Dict := dictObj As IRdsDictionary;

    // Создаем новую схему экспорта

    sExport := Dict.ExportSchemas.Add As IMetaRdsExportSchema;

    // Определяем привязку атрибутов справочника к полям приёмника

    dictAts := Dict.Attributes;

    For i := 0 To dictAts.Count - 1 Do

        Attr := dictAts.Item(i);

        attrMap := sExport.AddMapping;

        attrMap.Attribute := Attr;

        attrMap.FieldName := Attr.Id;

    End For;

    // Указываем, что перед экспортом необходимо очистить приёмник

    sExport.ClearBeforeExport := True;

    // Добавляем фильтрацию

    dictFilter := sExport.Filter;

    Attr := dictAts.FindById("KEY");

    Cond := dictFilter.Add(Attr);

    Cond.Value := 0;

    Cond.Operation := RdsConditionOperation.GreaterOrEqual;

    Cond := dictFilter.Add(Attr);

    Cond.Value := 15;

    Cond.Operation := RdsConditionOperation.LesserOrEqual;

    // Настраиваем приёмник данных: текстовый файл

    textCons := New DtTextConsumer.Create;

    textCons.File := "c:\Data_out.txt";

    textCons.WriteHeader := True;

    textCons.RowDelimiter := #13 + #10;

    textCons.DelimitedColumnDelimiter := #9;

    textCons.DelimitedTextQualifier := "'";

    sExport.Consumer := textCons;

    // Сохраняем справочник

    dictObj.Save;

    // Выполняем экспорт

    dictInst := dictObj.Open(Null) As IRdsDictionaryInstance;

    dictInst.ExportData(sExport);

End Sub UserProc;


При выполнении примера из справочника в файл «C:\Data_out.txt» будут
 экспортированы элементы, значение ключа которых находится в диапазоне
 [0, 15].


См. также:


[IRdsDictionaryFilterCondition](IRdsDictionaryFilterCondition.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
