# ICubeMetaExporterFilter.Selection

ICubeMetaExporterFilter.Selection
-


# ICubeMetaExporterFilter.Selection


## Синтаксис


Selection: [IDimSelection](KeDims.chm::/interface/IDimSelection/IDimSelection.htm);


## Описание


Свойство Selection определяет
 отметку элементов справочника, связанного с атрибутом, по которому необходимо
 отфильтровать временные ряды.


## Комментарии


После задания значения свойства [ICubeMetaExporterFilter.Attribute](ICubeMetaExporterFilter.Attribute.htm)
 или [ICubeMetaExporterFilter.AttributeKey](ICubeMetaExporterFilter.AttributeKey.htm)
 в свойстве Selection будет доступна
 пустая отметка справочника, на который ссылается атрибут. После получения
 и установки отметки необходимо заново установить значение свойства Selection.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором TSDB. В структуре базы создан обязательный
 атрибут временных рядов с идентификатором CITY. Данный атрибут ссылается
 на справочник.


Добавьте ссылки на системные сборки: Cubes, Dal, Dimensions, Dt, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    TextConsumer: IDtTextConsumer;

	    Exporter: ICubeMetaExporter;

	    Binding: ICubeMetaExporterBinding;

	    Filter: ICubeMetaExporterFilter;

	    DictSelection: IDimSelection;

	Begin

	    MB := MetabaseClass.Active;

	    //Создаём приёмник данных для экспорта в текстовый формат

	    TextConsumer := New DtTextConsumer.Create;

	    TextConsumer.File := "C:\export_result.txt";

	    TextConsumer.FormatType := DtTextFormatType.Delimited;

	    TextConsumer.DelimitedColumnDelimiter := ";";

	    TextConsumer.DelimitedTextQualifier := "";

	    TextConsumer.Encoding := "WIN";

	    TextConsumer.WriteHeader := True;

	    // Создаем объект для экспорта временных рядов

	    Exporter := New CubeMetaExporterClass.Create;

	    Exporter.Rubricator := MB.ItemById("TSDB").Bind As IRubricator;

	    Exporter.Consumer := TextConsumer As IDtConsumer;

	    // Задаем параметры экспорта атрибута «CITY»

	    Binding := Exporter.Bindings.Add;

	    Binding.FieldName := "CITY_KEY";

	    Binding.DataType := DbDataType.Integer;

	    Binding.BindingType := CubeMetaExporterBindingType.Attribute;

	    Binding.Attribute := "CITY";

	    Binding.KeyField := "KEY";

	    // Задаем параметры экспорта календаря

	    Binding := Exporter.Bindings.Add;

	    Binding.FieldName := "Year";

	    Binding.DataType := DbDataType.String;

	    Binding.BindingType := CubeMetaExporterBindingType.Calendar;

	    Binding.DateFormat := "$Year$";

	    // Задаем параметры экспорта

	    Exporter.ByColumns := False;

	    Exporter.CalendarLevel := DimCalendarLevel.Year;

	    Exporter.ClearBeforeExport := True;

	    // Добавляем фильтр для экспорта временных рядов

	    Filter := Exporter.Filters.Add;

	    // Указываем атрибут, по которому будут отфильтрованы временные ряды

	    Filter.Attribute := "CITY";

	    // Получаем отметку элементов справочника, связанного с указанным атрибутом

	    DictSelection := Filter.Selection;

	    // Выделяем первый элемент в справочнике

	    DictSelection.SelectElement(0, False);

	    // Устанавливаем указанную отметку для фильтрации временных рядов

	    Filter.Selection := DictSelection;

	    // Выполняем экспорт

	    Exporter.Export;

	End Sub UserProc;


При выполнении примера будет произведен экспорт значений временных рядов
 в текстовый файл. Экспортируемые ряды будут отфильтрованы: экспорт будет
 производиться только по первому элементу справочника, с которым связан
 атрибут CITY.


См. также:


[ICubeMetaExporterFilter](ICubeMetaExporterFilter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
