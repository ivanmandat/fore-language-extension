# ICubeMetaExporter.ValueFilters

ICubeMetaExporter.ValueFilters
-


# ICubeMetaExporter.ValueFilters


## Синтаксис


ValueFilters: [ICubeMetaExporterFilters](../ICubeMetaExporterFilters/ICubeMetaExporterFilters.htm);


## Описание


Свойство ValueFilters определяет
 параметры фильтрации экспортируемых временных рядов по атрибутам наблюдений.


## Комментарии


По умолчанию фильтрация не выполняется и экспортируются все временные
 ряды.


## Пример


Для выполнения примера предполагается наличие базы данных временных
 рядов с идентификатором «TSDB». В данной базе должен присутствовать атрибут
 временных рядов «CITY», являющийся ссылкой на справочник.


Добавьте ссылки на системные сборки: Cubes, Dal, Dt, Metabase,
 Orm.


			Sub UserProc;

Var

    TextConsumer: IDtTextConsumer;

    MB: IMetabase;

    Exporter: ICubeMetaExporter;

    Binding: ICubeMetaExporterBinding;

    Filter: ICubeMetaExporterFilter;

    FilterValues: Array;

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

    // Добавляем привязку атрибута рядов CITY

    Binding := Exporter.Bindings.Add;

    Binding.FieldName := "CityKey";

    Binding.DataType := DbDataType.Integer;

    Binding.BindingType := CubeMetaExporterBindingType.Attribute;

    Binding.Attribute := "CITY";

    Binding.KeyField := "KEY";

    // Добавляем привязку атрибута наблюдений CMT

    Binding := Exporter.Bindings.Add;

    Binding.FieldName := "CMT";

    Binding.DataType := DbDataType.String;

    Binding.BindingType := CubeMetaExporterBindingType.ValueAttribute;

    Binding.Attribute := "CMT";

    // Добавляем привязку календаря

    Binding := Exporter.Bindings.Add;

    Binding.FieldName := "Year";

    Binding.DataType := DbDataType.String;

    Binding.BindingType := CubeMetaExporterBindingType.Calendar;

    Binding.DateFormat := "$Year$";

    Binding.ValueFieldName := "Value";

    Binding.ValueDataType := DbDataType.Float;

    // Задаем параметры фильтрации экспортируемых рядов

    // Добавляем фильтрацию по значениям атрибута наблюдений CMT

    Filter := Exporter.ValueFilters.Add;

    Filter.Attribute := "CMT";

    // Указываем, что значение атрибута не должно быть пустым

    Filter.Operator_ := OrmComparisonOperator.IsNotNull;

    // Выполняем экспорт

    Exporter.ClearBeforeExport := True;

    Exporter.Export;

End Sub UserProc;


В результате выполнения примера в текстовый файл «C:\result_meta_exp.txt»
 будут экспортированы только те ряды, которые содержат значение по атрибуту
 наблюдений «CMT».


См. также:


[ICubeMetaExporter](ICubeMetaExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
