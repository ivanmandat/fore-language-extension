# IDtExcelConsumerEx.ForceFullCalculation

IDtExcelConsumerEx.ForceFullCalculation
-


# IDtExcelConsumerEx.ForceFullCalculation


## Синтаксис


ForceFullCalculation Boolean;


## Описание


Свойство ForceFullCalculation
 определяет, будет ли осуществляться принудительное перевычисление рабочей
 книги при открытии.


## Комментарии


Допустимые значения:


	- True. При открытии рабочая
	 книга будет принудительно перевычисляться;


	- False. При открытии
	 рабочая книга не будет принудительно перевычисляться.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором FC. Данная база содержит атрибут показателей
 COUNTRY, являющийся ссылкой на справочник.


Добавьте ссылки на системные сборки: Cubes, Dal, Dimensions, Dt, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Consumer: DtExcelConsumerEx;

	    Exporter: ICubeMetaExporter;

	    Binding: ICubeMetaExporterBinding;

	Begin

	    // Приёмник данных для экспорта в формат Excel

	    Consumer := New DtExcelConsumerEx.Create;

	    Consumer.File := "C:\result.xlsx";

	    Consumer.HasHeader := True;

	    Consumer.Sheet := "Sheet1";

	    Consumer.ForceFullCalculation := True;

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
 выгружены данные из указанной базы данных временных рядов.


См. также:


[IDtExcelConsumerEx](IDtExcelConsumerEx.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
