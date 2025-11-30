# ICubeMetaExporter.FiltersSelectionSet

ICubeMetaExporter.FiltersSelectionSet
-


# ICubeMetaExporter.FiltersSelectionSet


## Синтаксис


FiltersSelectionSet: [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm);


## Описание


Свойство FiltersSelectionSet определяет отметку справочников, в соответствии с которой осуществляется фильтрация показателей при экспорте.


## Комментарии


Если в базе данных временных рядов есть атрибуты, ссылающиеся на справочники репозитория, то по элементам этих справочников можно настроить фильтрацию показателей при экспорте. Для этого включите отметку справочника в коллекцию свойства FiltersSelectionSet. Экспортироваться будут только те показатели, которые связаны с отмеченными элементами справочников.


После получения и формирования отметки справочников необходимо переприсвоить значение свойства FiltersSelectionSet.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных временных рядов с идентификатором «TSDB». В структуре базы создан обязательный атрибут рядов с идентификатором «COUNTRY». Данный атрибут ссылается на какой-либо справочник репозитория.


			Sub UserProc;

Var

    MB: IMetabase;

    TextConsumer: IDtTextConsumer;

    Exporter: ICubeMetaExporter;

    Binding: ICubeMetaExporterBinding;

    Filter: IDimSelectionSet;

    RubAttribute: IMetaAttribute;

    DictSelection: IDimSelection;

Begin

    MB := MetabaseClass.Active;

    // Приёмник данных для экспорта в текстовый формат
    TextConsumer := New DtTextConsumer.Create;

    TextConsumer.File := "C:\export_result.txt";

    TextConsumer.FormatType := DtTextFormatType.Delimited;

    TextConsumer.DelimitedColumnDelimiter := ";";

    TextConsumer.DelimitedTextQualifier := "";

    TextConsumer.Encoding := "WIN";

    TextConsumer.WriteHeader := True;

    // Экспортер
    Exporter := New CubeMetaExporterClass.Create;

    Exporter.Rubricator := MB.ItemById("TSDB").Bind As IRubricator;

    Exporter.Consumer := TextConsumer As IDtConsumer;

    // Параметры экспорта атрибута «COUNTRY»
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

    // Параметры экспортера
    Exporter.ByColumns := False;

    Exporter.CalendarLevel := DimCalendarLevel.Year;

    Exporter.ClearBeforeExport := True;

    // Параметры фильтрации показателей
    Filter := Exporter.FiltersSelectionSet;

    // Атрибут, по которому будут отфильтрованы показатели
    RubAttribute := Exporter.Rubricator.Facts.Attributes.FindById("COUNTRY");

    // Открываем справочник, с которым связан атрибут и добавляем его в отметку
    DictSelection := Filter.Add(RubAttribute.ValuesObject.Open(Null) As IDimInstance);

    // Отмечаем только первый элемент
    DictSelection.SelectElement(0, False);

    Exporter.FiltersSelectionSet := Filter;

    // Экспорт
    Exporter.Export;

End Sub UserProc;


При выполнении примера будет произведен экспорт значений показателей БДВР в текстовый файл. Экспортируемый список будет отфильтрован: экспорт будет производиться только по первой стране, созданной в справочнике, с которым связан атрибут «COUNTRY».


См. также:


[ICubeMetaExporter](ICubeMetaExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
