# ICubeMetaExporterBindings.Add

ICubeMetaExporterBindings.Add
-


# ICubeMetaExporterBindings.Add


## Синтаксис


Add: [ICubeMetaExporterBinding](../ICubeMetaExporterBinding/ICubeMetaExporterBinding.htm);


## Описание


Метод Add осуществляет добавление
 элемента в коллекцию.


## Пример


Для выполнения примера предполагается наличие базы данных временных
 рядов с идентификатором OBJ_RUBRICATOR. В данной базе должен присутствовать
 атрибут COUNTRIES. В файловой системе предполагается наличие текстового
 файла со значениями показателей «C:\result_meta_exp.txt».


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

    Binding := Exporter.Bindings.Add;

    Binding.FieldName := "CountryKey";

    Binding.DataType := DbDataType.Integer;

    Binding.BindingType := CubeMetaExporterBindingType.Attribute;

    Binding.Attribute := "COUNTRIES";

    Binding.KeyField := "KEY";

    Binding := Exporter.Bindings.Add;

    Binding.FieldName := "Year";

    Binding.DataType := DbDataType.String;

    Binding.BindingType := CubeMetaExporterBindingType.Calendar;

    Binding.DateFormat := "$Year$";

    Binding.ValueFieldName := "Value";

    Binding.ValueDataType := DbDataType.Float;

    Exporter.ByColumns := False;

    Exporter.CalendarLevel := DimCalendarLevel.Year;

    Filter := Exporter.Filters.Add;

    Filter.Attribute := "COUNTRIES";

    FilterValues := New Variant[2];

    FilterValues[0] := 512;

    FilterValues[1] := 914;

    Filter.ValuesList := FilterValues;

    // Экспорт

    Exporter.Export;

End Sub UserProc;


После выполнения примера будет осуществлен экспорт показателей в текстовый
 файл. Экспортированы будут данные только тех показателей, у которых значение
 атрибута COUNTRIES равняется 512 или 914.


См. также:


[ICubeMetaExporterBindings](ICubeMetaExporterBindings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
