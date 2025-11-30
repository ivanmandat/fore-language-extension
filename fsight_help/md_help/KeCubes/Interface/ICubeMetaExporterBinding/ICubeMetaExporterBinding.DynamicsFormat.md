# ICubeMetaExporterBinding.DynamicsFormat

ICubeMetaExporterBinding.DynamicsFormat
-


# ICubeMetaExporterBinding.DynamicsFormat


## Синтаксис


DynamicsFormat(Level: [DimCalendarLevel](kedims.chm::/enums/dimcalendarlevel.htm)):
 String;


## Описание


Свойство DynamicsFormat определяет
 формат динамики календарного измерения.


## Комментарии


Динамика задается в формате даты ([ICubeMetaExporterBinding.DateFormat](ICubeMetaExporterBinding.DateFormat.htm))
 идентификатором «$Dyn$».


Если формат динамики не определен, то используются значения по умолчанию:


		 Значение параметра Level
		 Формат динамики


		 DimCalendarLevel.Year
		 «A»


		 DimCalendarLevel.HalfYear
		 «S»


		 DimCalendarLevel.Quarter
		 «Q»


		 DimCalendarLevel.Month
		 «M»


		 DimCalendarLevel.Week
		 «W»


		 DimCalendarLevel.Day
		 «D»


## Пример


Для выполнения примера предполагается наличие базы данных временных
 рядов с идентификатором OBJ_RUBRICATOR. В данной базе должен присутствовать
 атрибут COUNTRIES. В файловой системе предполагается наличие текстового
 файла со значениями показателей «C:\result_meta_exp.txt».


[![](../../Opened.gif)![](../../Closed.gif)Пример фрагмента
 файла экспорта](javascript:TextPopup(this))


	"CountryKey";"Date";"Value"


	512;"A1_2002-1";-0,21909574


	512;"Q1_2002-1";0,5


	512;"Q1_2002-2";-0,12


	512;"Q1_2002-3";-0,6


	512;"Q1_2002-4";0


	512;"A1_2003-1";-6,75324


	512;"A1_2004-1";-3,414


	512;"A1_2005-1";-7,1166


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

	    Binding.FieldName := "Date";

	    Binding.DataType := DbDataType.String;

	    Binding.BindingType := CubeMetaExporterBindingType.Calendar;

	    Binding.DateFormat := "$Dyn$_$Year$-$Quarter$";

	    Binding.DynamicsFormat(DimCalendarLevel.Year) := "A1";

	    Binding.DynamicsFormat(DimCalendarLevel.Quarter) := "Q1";

	    Binding.ValueDataType := DbDataType.Float;

	    Binding.ValueFieldName := "Value";

	    Binding.ValueDataType := DbDataType.Float;

	    Exporter.ByColumns := False;

	    Exporter.CalendarLevel := DimCalendarLevel.None;

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
 файл «C:\result_meta_exp.txt». Экспортированы будут данные только тех
 показателей, у которых значение атрибута «COUNTRIES» равняется «512» или
 «914».


См. также:


[ICubeMetaExporterBinding](ICubeMetaExporterBinding.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
