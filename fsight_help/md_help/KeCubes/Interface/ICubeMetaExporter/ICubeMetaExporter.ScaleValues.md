# ICubeMetaExporter.ScaleValues

ICubeMetaExporter.ScaleValues
-


# ICubeMetaExporter.ScaleValues


## Синтаксис


ScaleValues: Boolean;


## Описание


Свойство ScaleValues определяет
 необходимость нормализации данных при экспорте.


## Комментарии


При значении False данные каждого
 показателя будут выгружаться с масштабом единиц измерения, установленным
 для него. Таким образом, выгруженные данные будут неоднородны. При значении
 True экспортируемые данные будут
 нормализованы, то есть приведены к одному масштабу единиц измерения.


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

    Exporter.ScaleValues := True;

    // Привязка атрибута COUNTRIES

    Binding := Exporter.Bindings.Add;

    Binding.FieldName := "CountryKey";

    Binding.DataType := DbDataType.Integer;

    Binding.BindingType := CubeMetaExporterBindingType.Attribute;

    Binding.Attribute := "COUNTRIES";

    Binding.KeyField := "KEY";

    // Календарная привязка

    Binding := Exporter.Bindings.Add;

    Binding.FieldName := "Year";

    Binding.DataType := DbDataType.String;

    Binding.BindingType := CubeMetaExporterBindingType.Calendar;

    Binding.DateFormat := "$Year$";

    Binding.ValueFieldName := "Value";

    Binding.ValueDataType := DbDataType.Float;

    Exporter.ByColumns := False;

    Exporter.CalendarLevel := DimCalendarLevel.Year;

    // Экспорт

    Exporter.Export;

End Sub UserProc;


После выполнения примера будет осуществлен экспорт показателей в текстовый
 файл. Экспортированные данные будут нормализованы.


См. также:


[ICubeMetaExporter](ICubeMetaExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
