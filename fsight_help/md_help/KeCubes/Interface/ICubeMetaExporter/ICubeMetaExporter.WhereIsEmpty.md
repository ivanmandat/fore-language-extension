# ICubeMetaExporter.WhereIsEmpty

ICubeMetaExporter.WhereIsEmpty
-


# ICubeMetaExporter.WhereIsEmpty


## Синтаксис


WhereIsEmpty: [TriState](foresys.chm::/enums/tristate.htm);


## Описание


Свойство WhereIsEmpty определяет,
 экспортировать ли показатели, для которых установлен признак пустоты.


## Комментарии


Допустимые значения:


	- TriState.OnOption.
	 Пустые показатели экспортируются;


	- TriState.OffOption.
	 Экспортируются только непустые показатели;


	- TriState.Undefined.
	 Значение по умолчанию. Экспортируются все показатели.


Свойство [IRubricator.HasEmptyAttribute](../IRubricator/IRubricator.HasEmptyAttribute.htm)
 определяет, присутствует ли в базе признак пустоты показателей.


## Пример


Для выполнения примера предполагается наличие базы данных временных
 рядов с идентификатором «FC_IS_EMPTY». В данной базе должен присутствовать
 пользовательский атрибут «COUNTRY». Добавьте ссылки на системные сборки
 «Metabase», «Cubes», «Dt», «Dal».


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

// Параметры экспорта атрибута «COUNTRY»

    Exporter := New CubeMetaExporterClass.Create;

    MB := MetabaseClass.Active;

    Exporter.Rubricator := MB.ItemById("FC_IS_EMPTY").Bind As IRubricator;

    Exporter.Consumer := TextConsumer As IDtConsumer;

    Binding := Exporter.Bindings.Add;

    Binding.FieldName := "COUNTRY_KEY";

    Binding.DataType := DbDataType.Integer;

    Binding.BindingType := CubeMetaExporterBindingType.Attribute;

    Binding.Attribute := "COUNTRY";

    Binding.KeyField := "KEY";

// Календарные параметры экспорта

    Binding := Exporter.Bindings.Add;

    Binding.FieldName := "Year";

    Binding.DataType := DbDataType.String;

    Binding.BindingType := CubeMetaExporterBindingType.Calendar;

    Binding.DateFormat := "$Year$";

// Параметры экспорта данных

    Binding.ValueFieldName := "Value";

    Binding.ValueDataType := DbDataType.Float;

    Exporter.WhereIsEmpty := TriState.OffOption;

// Экспорт

    Exporter.Export;

End Sub UserProc;


После выполнения примера в файл «C:\result_meta_exp.txt» будут выгружены
 непустые показатели из базы.


См. также:


[ICubeMetaExporter](ICubeMetaExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
