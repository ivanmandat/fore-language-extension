# ICubeMetaExporterBinding.DataTypeSize

ICubeMetaExporterBinding.DataTypeSize
-


# ICubeMetaExporterBinding.DataTypeSize


## Синтаксис


DataTypeSize: Integer;


## Описание


Свойство DataTypeSize определяет
 общую длину значений атрибута показателя.


## Комментарии


Данное свойство актуально при экспорте данных в новые таблицы, расположенные
 на сервере СУБД. Размеры имеющихся значений атрибутов не должны превышать
 значение, указанное в данном свойстве.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором OBJ_RUBRICATOR. В базе имеется пользовательский
 атрибут NUM имеющий вещественный тип данных. Также предполагается наличие
 репозитория TestSource. В базе репозитория должна отсутствовать таблица
 с физическим именем NewExportData.


	Sub UserProc;

	Var

	    OrclConsumer: IDtOleDbConsumer;

	    MB: IMetabase;

	    Exporter: ICubeMetaExporter;

	    Binding: ICubeMetaExporterBinding;

	    Filter: ICubeMetaExporterFilter;

	    FilterValues: Array;

	Begin

	    // Приёмник данных для экспорта в текстовый формат

	    OrclConsumer := New DtOleDbConsumer.Create;

	    OrclConsumer.ConnectionString := "Provider=MSDAORA.1;Password=Pass;User ID=User;Data Source=TestSource;Persist Security Info=True";

	    OrclConsumer.Table := "NewExportData";

	    // Параметры экспорта

	    Exporter := New CubeMetaExporterClass.Create;

	    MB := MetabaseClass.Active;

	    Exporter.Rubricator := MB.ItemById("OBJ_RUBRICATOR").Bind As IRubricator;

	    Exporter.Consumer := OrclConsumer As IDtConsumer;

	    // Привязка атрибутов

	    Binding := Exporter.Bindings.Add;

	    // Атрибут COUNTRY

	    Binding.FieldName := "CountryKey";

	    Binding.DataType := DbDataType.Integer;

	    Binding.BindingType := CubeMetaExporterBindingType.Attribute;

	    Binding.Attribute := "COUNTRY";

	    Binding.KeyField := "KEY";

	    // Атрибут NUM

	    Binding := Exporter.Bindings.Add;

	    Binding.FieldName := "NUM";

	    Binding.DataType := DbDataType.Float;

	    Binding.DataTypeSize := 10;

	    Binding.DataTypePrecision := 3;

	    Binding.BindingType := CubeMetaExporterBindingType.Attribute;

	    Binding.Attribute := "NUM";

	    // Привязка календаря

	    Binding := Exporter.Bindings.Add;

	    Binding.FieldName := "Year";

	    Binding.DataType := DbDataType.String;

	    Binding.BindingType := CubeMetaExporterBindingType.Calendar;

	    Binding.DateFormat := "$Year$";

	    Binding.ValueFieldName := "Value";

	    Binding.ValueDataType := DbDataType.Float;

	    Binding.ValueDataTypeSize := 15;

	    Binding.ValueDataTypePrecision := 8;

	    Exporter.ByColumns := False;

	    // Настройки экспортёра

	    Exporter.CalendarLevel := DimCalendarLevel.Year;

	    // Экспорт

	    Exporter.Export;

	End Sub UserProc;


После выполнения примера будет осуществлен экспорт показателей в новую
 таблицу репозитория TestSource. В таблице для полей, в которых будут храниться
 значения атрибута Num и значения показателей, будут установлены указанные
 длины полей и точность значений.


Таблица будет создана только в базе репозитория. Для просмотра таблицы
 в навигаторе объектов также будет необходимо создать соответствующую прикрепленную
 таблицу.


См. также:


[ICubeMetaExporterBinding](ICubeMetaExporterBinding.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
