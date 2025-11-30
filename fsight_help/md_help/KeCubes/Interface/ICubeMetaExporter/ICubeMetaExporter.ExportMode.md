# ICubeMetaExporter.ExportMode

ICubeMetaExporter.ExportMode
-


# ICubeMetaExporter.ExportMode


## Синтаксис


ExportMode: [CubeLoadClearMode](../../Enums/CubeLoadClearMode.htm);


## Описание


Свойство ExportMode определяет
 режим экспорта временных рядов.


## Комментарии


Если задан период экспорта временных рядов, то на него влияет значение
 свойства ExportMode. Подробнее
 см. в описании свойства [ICubeMetaExporter.AutoPeriod](ICubeMetaExporter.AutoPeriod.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных
 временных рядов с идентификатором «TSDB».


Добавьте ссылки на системные сборки: Cubes, Dal, Dt, Metabase.


			Sub UserProc;

Var

    TextConsumer: IDtTextConsumer;

    MB: IMetabase;

    Exporter: ICubeMetaExporter;

    Binding: ICubeMetaExporterBinding;

Begin

    // Создаем приёмник данных для экспорта в текстовый файл

    TextConsumer := New DtTextConsumer.Create;

    TextConsumer.File := "C:\result_meta_exp.txt";

    TextConsumer.FormatType := DtTextFormatType.Delimited;

    TextConsumer.DelimitedColumnDelimiter := ";";

    TextConsumer.DelimitedTextQualifier := """";

    TextConsumer.Encoding := "WIN";

    TextConsumer.WriteHeader := True;

    // Создаем объект для экспорта

    Exporter := New CubeMetaExporterClass.Create;

    // Получаем текущий репозиторий

    MB := MetabaseClass.Active;

    // Указываем источник и приёмник данных

    Exporter.Rubricator := MB.ItemById("TSDB").Bind As IRubricator;

    Exporter.Consumer := TextConsumer As IDtConsumer;

    // Добавляем привязку календаря

    Binding := Exporter.Bindings.Add;

    Binding.FieldName := "Year";

    Binding.DataType := DbDataType.String;

    Binding.BindingType := CubeMetaExporterBindingType.Calendar;

    Binding.DateFormat := "$Year$";

    Binding.ValueFieldName := "Value";

    Binding.ValueDataType := DbDataType.Float;

    // Указываем, что будут экспортироваться только значения точек

    Exporter.ExportMode := CubeLoadClearMode.DataOnly;

    // Выполняем экспорт

    Exporter.ClearBeforeExport := True;

    Exporter.Export;

End Sub UserProc;


В результате выполнения примера в файл «C:\result_meta_exp.txt» будут
 выгружены только значения точек.


См. также:


[ICubeMetaExporter](ICubeMetaExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
