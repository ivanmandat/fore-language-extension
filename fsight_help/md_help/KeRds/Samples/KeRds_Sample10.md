# Экспорт и импорт справочника НСИ

Экспорт и импорт справочника НСИ
-


# Экспорт и импорт справочника НСИ


Схемы импорта и экспорта являются дочерними объектами справочника НСИ.
 Используя язык Fore можно настроить:


	- импорт из источников:


	-


		- Microsoft OLEDB Provider for Oracle;


		- Microsoft OLEDB Provider for SQL Server;


		- Microsoft Excel (*.xls, *.xlsx);


		- Microsoft Access (*.mdb);


		- Microsoft XML (*.xml);


		- текстовый файл (*.txt);


		- буфер обмена.


	- экспорт в приёмники:


	-


		- Microsoft OLEDB Provider for Oracle;


		- Microsoft OLEDB Provider for SQL Server;


		- Microsoft Excel (*.xls, *.xlsx);


		- Microsoft Access (*.mdb);


		- Microsoft XML (*.xml);


		- Текстовый файл (*.txt).


## Описание примера


Для выполнения примера в репозитории предполагается наличие справочника
 НСИ с идентификатором D_EXP_IMP.


Также требуется форма, на которой расположены:


	- кнопка ExpButton для экспорта;


	- кнопка ImpButton для импорта;


Добавьте ссылки на системные сборки: Metabase, Rds, Dt.


При нажатии кнопки ExpButton выполняется экспорт элементов справочника
 D_EXP_IMP в текстовый файл «C:\Data_out.txt». Экспорт производится по
 следующим параметрам:


	- экспортируются только элементы первого уровня справочника;


	- выполняется сортировка экспортируемых элементов по значению
	 атрибута NAME.


При нажатии кнопки ImpButton выполняется импорт данных из текстового
 файла «C:\Data_out.txt» в справочник D_EXP_IMP.


В результате выполнения примера в справочнике D_EXP_IMP после экспорта
 и импорта останутся только элементы первого уровня.


## Процедура экспорта данных


Данная процедура является обработчиком события OnClick
 для кнопки «ExpButton»:


			Sub ExpButtonOnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Mb: IMetabase;

    dictObj: IMetabaseObject;

    Dict: IRdsDictionary;

    sExport: IMetaRdsExportSchema;

    i: Integer;

    dictAts: IRdsAttributes;

    Attr: IRdsAttribute;

    attrMap: IRdsExportSchemaAttribute;

    dictSort: IRdsSortAttributes;

    dictFilter: IRdsDictionaryFilterConditions;

    Cond: IRdsDictionaryFilterCondition;

    textCons: IDtTextConsumer;

    dictInst: IRdsDictionaryInstance;

Begin

    Mb := MetabaseClass.Active;

    // Получаем справочник НСИ

    Dict := Mb.ItemById("D_EXP_IMP").Edit As IRdsDictionary;

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

    // Задаем сортировку по атрибуту "NAME"

    dictSort := sExport.SortAttributes;

    Attr := dictAts.FindById("NAME");

    dictSort.Add(Attr, True);

    // Добавляем фильтрацию: экспортировать только элементы 1-го уровня

    dictFilter := sExport.Filter;

    Attr := dictAts.FindById("PARENT_KEY");

    Cond := dictFilter.Add(Attr);

    Cond.Value := Null;

    Cond.Operation := RdsConditionOperation.Equal;

    // Настраиваем приёмник данных: текстовый файл

    textCons := New DtTextConsumer.Create;

    textCons.File := "c:\Data_out.txt";

    textCons.WriteHeader := True;

    textCons.RowDelimiter := #13 + #10;

    textCons.DelimitedColumnDelimiter := #9;

    textCons.DelimitedTextQualifier := "'";

    sExport.Consumer := textCons;

    // Сохраняем справочник

    (Dict As IMetabaseObject).Save;

    // Выполняем экспорт

    dictInst := dictObj.Open(Null) As IRdsDictionaryInstance;

    dictInst.ExportData(sExport);

End Sub ExpButtonOnClick;


После выполнения примера в справочник D_EXP_IMP будут импортированы
 данные из файла «C:\Data_out.txt».


См. также:


[Примеры](KeRds_Sample.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
