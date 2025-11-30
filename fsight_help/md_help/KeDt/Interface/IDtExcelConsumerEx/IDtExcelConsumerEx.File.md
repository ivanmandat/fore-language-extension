# IDtExcelConsumerEx.File

IDtExcelConsumerEx.File
-


# IDtExcelConsumerEx.File


## Синтаксис


File: String;


## Описание


Свойство File определяет полное
 наименование файла, в который будут выгружены данные.


## Комментарии


Наименование листа, в который будут выгружены данные, определяет свойство
 [IDtExcelConsumerEx.Sheet](IDtExcelConsumerEx.Sheet.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором FC. Данная база содержит атрибут показателей
 COUNTRY, являющийся ссылкой на справочник.


Добавьте ссылки на системные сборки: Cubes, Dal, Dimensions, Dt, Metabase.


	Sub UserProc;

	    Consumer: DtExcelConsumerEx;

	    MB: IMetabase;

	    Exporter: ICubeMetaExporter;

	    Binding: ICubeMetaExporterBinding;

	Begin

	// Приёмник данных для экспорта в формат Excel

	    Consumer := New DtExcelConsumerEx.Create;

	    Consumer.File := "C:\result.xlsx";

	    Consumer.HasHeader := True;

	    Consumer.Sheet := "Sheet1";

	// Параметры экспорта

	    Exporter := New CubeMetaExporterClass.Create;

	    MB := MetabaseClass.Active;

	    Exporter.Rubricator := MB.ItemById("FC").Bind As IRubricator;

	    Exporter.Consumer := Consumer As IDtConsumer;

	// Параметры экспорта атрибута «COUNTRY»

	    Binding := Exporter.Bindings.Add;

	    Binding.FieldName := "CountryKey";

	    Binding.DataType := DbDataType.Integer;

	    Binding.BindingType := CubeMetaExporterBindingType.Attribute;

	    Binding.Attribute := "COUNTRY";

	    Binding.KeyField := "KEY";

	// Параметры экспорта значений

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


После выполнения примера в файл «C:\result.xlsx» на лист «Sheet1» будут
 выгружены данные из указанной базы данных временных рядов FC.


См. также:


[IDtExcelConsumerEx](IDtExcelConsumerEx.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
