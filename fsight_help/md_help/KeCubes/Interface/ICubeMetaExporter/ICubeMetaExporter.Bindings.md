# ICubeMetaExporter.Bindings

ICubeMetaExporter.Bindings
-


# ICubeMetaExporter.Bindings


## Синтаксис


Bindings: [ICubeMetaExporterBindings](../ICubeMetaExporterBindings/ICubeMetaExporterBindings.htm);


## Описание


Свойство Bindings определяет
 привязку атрибутов базы данных временных рядов с полями приёмника данных.


## Пример


Для выполнения примера предполагается наличие базы данных временных
 рядов с идентификатором «OBJ_RUBRICATOR». В данной базе должен присутствовать
 атрибут «COUNTRIES». Добавьте ссылки на системные сборки «Cubes», «Dal»,
 «Dimensions», «Dt», «Metabase».


			Sub UserProc;

Var

    TextConsumer: IDtTextConsumer;

    MB: IMetabase;

    Exporter: ICubeMetaExporter;

    Binding: ICubeMetaExporterBinding;

    Filter: ICubeMetaExporterFilter;

    FilterValues: Array;

Begin

// Приёмник данных для экспорта в текстовый формат

    TextConsumer := New DtTextConsumer.Create;

    TextConsumer.File := "C:\result_meta_exp.txt";

    TextConsumer.FormatType := DtTextFormatType.Delimited;

    TextConsumer.DelimitedColumnDelimiter := ";";

    TextConsumer.DelimitedTextQualifier := """";

    TextConsumer.Encoding := "WIN";

    TextConsumer.WriteHeader := True;

// Параметры экспорта

    Exporter := New CubeMetaExporterClass.Create;

    MB := MetabaseClass.Active;

    Exporter.Rubricator := MB.ItemById("OBJ_RUBRICATOR").Bind As IRubricator;

    Exporter.Consumer := TextConsumer As IDtConsumer;

// Привязка атрибута COUNTRIES

    Binding := Exporter.Bindings.Add;

    Binding.FieldName := "CountryKey";

    Binding.DataType := DbDataType.Integer;

    Binding.BindingType := CubeMetaExporterBindingType.Attribute;

    Binding.Attribute := "COUNTRIES";

    Binding.KeyField := "KEY";

// Привязка календаря

    Binding := Exporter.Bindings.Add;

    Binding.FieldName := "Year";

    Binding.DataType := DbDataType.String;

    Binding.BindingType := CubeMetaExporterBindingType.Calendar;

    Binding.DateFormat := "$Year$";

    Binding.ValueFieldName := "Value";

    Binding.ValueDataType := DbDataType.Float;

// Параметры фильтрации

    Exporter.ByColumns := False;

    Exporter.CalendarLevel := DimCalendarLevel.Year;

    Filter := Exporter.Filters.Add;

    Filter.Attribute := "COUNTRIES";

    FilterValues := New Variant[2];

    FilterValues[0] := 512;

    FilterValues[1] := 914;

    Filter.ValuesList := FilterValues;

// Экспорт

    Exporter.ClearBeforeExport := True;

    Exporter.Export;

End Sub UserProc;


После выполнения примера будет осуществлен экспорт показателей в текстовый
 файл «C:\result_meta_exp.txt». Экспортированы будут данные только тех
 показателей, у которых значение атрибута «COUNTRIES» равняется «512» или
 «914». Перед экспортом файл-приёмник будет очищен.


См. также:


[ICubeMetaExporter](ICubeMetaExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
