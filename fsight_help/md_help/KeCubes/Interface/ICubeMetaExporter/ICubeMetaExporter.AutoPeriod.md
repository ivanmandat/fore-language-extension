# ICubeMetaExporter.AutoPeriod

ICubeMetaExporter.AutoPeriod
-


# ICubeMetaExporter.AutoPeriod


## Синтаксис


AutoPeriod: [IRubricatorAutoPeriodDate](../IRubricatorAutoPeriodDate/IRubricatorAutoPeriodDate.htm);


## Описание


Свойство AutoPeriod возвращает
 параметры периода экспорта временных рядов.


## Комментарии


По умолчанию начало/окончание периода экспорта совпадает с началом/окончанием
 данных.


Если период экспорта задан относительно даты начала или окончания данных,
 то границы данных определяются исходя из значения свойства [ICubeMetaExporter.ExportMode](ICubeMetaExporter.ExportMode.htm):


	- CubeLoadClearMode.Default_.
	 Границы данных определяются непустым значениям для атрибута наблюдения
	 «VL»;


	- CubeLoadClearMode.MetadataOnly.
	 Границы данных определяются по непустым атрибутам уровня наблюдения;


	- CubeLoadClearMode.DataOnly.
	 Границы данных определяются по непустым значениям для точки;


	- CubeLoadClearMode.DataAndMetadata.
	 Границы данных определяются по непустым атрибутам уровня наблюдения
	 или значению точки.


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных
 временных рядов с идентификатором «TSBD». Данная база данных временных
 рядов должна иметь годовую и квартальную динамики и пользовательский атрибут
 временных рядов с идентификатором «INDICATOR».


Добавьте ссылки на системные сборки: Cubes, Dal, Dimensions, Dt, Metabase.


			Sub UserProc;

Var

    TextConsumer: IDtTextConsumer;

    MB: IMetabase;

    Exporter: ICubeMetaExporter;

    Binding: ICubeMetaExporterBinding;

    ExpPeriod: IRubricatorAutoPeriod;

    ExpPeriodDate: IRubricatorAutoPeriodDate;

Begin

    // Создаем текстовый приёмник данных

    TextConsumer := New DtTextConsumer.Create;

    TextConsumer.File := "C:\result.txt";

    TextConsumer.WriteHeader := True;

    // Создаем объект, предназначенный для экспорта

    Exporter := New CubeMetaExporterClass.Create;

    // Получаем текущий репозиторий

    MB := MetabaseClass.Active;

    // Задаем базу данных временных рядов, данные которой будут экспортированы

    Exporter.Rubricator := MB.ItemById("TSDB").Bind As IRubricator;

    // Указываем приёмник данных

    Exporter.Consumer := TextConsumer As IDtConsumer;

    // Задаем параметры экспорта атрибута «INDICATOR»

    Binding := Exporter.Bindings.Add;

    Binding.FieldName := "INDICATOR_KEY";

    Binding.DataType := DbDataType.Integer;

    Binding.BindingType := CubeMetaExporterBindingType.Attribute;

    Binding.Attribute := "INDICATOR";

    Binding.KeyField := "KEY";

    // Задаем параметры экспорта дат

    Binding := Exporter.Bindings.Add;

    Binding.FieldName := "Date";

    Binding.DataType := DbDataType.String;

    Binding.BindingType := CubeMetaExporterBindingType.Calendar;

    // Задаем формат экспорта дат

    Binding.DateFormatEx(DimCalendarLevel.Year) := "$Year$";

    Binding.DateFormatEx(DimCalendarLevel.Quarter) := "$Year$Q$Quarter$";

    // Задаем период экспорта данных

    ExpPeriod := Exporter.AutoPeriod;

    ExpPeriodDate := ExpPeriod.Start;

    ExpPeriodDate.AutoDateType := RubricatorAutoDateType.DateStart;

    ExpPeriodDate.Offset := 1;

    ExpPeriodDate := ExpPeriod.End_;

    ExpPeriodDate.AutoDateType := RubricatorAutoDateType.DateEnd;

    ExpPeriodDate.Offset := -1;

    // Задаем экспортируемые уровни календаря

    Exporter.CalendarLevelSet := DimCalendarLevelSet.Year Or DimCalendarLevelSet.Quarter;

    // Выполняем экспорт

    Exporter.Export;

End Sub UserProc;


После выполнения примера в файл «C:\result.txt» будут выгружены данные
 временных рядов по годовой и квартальной динамикам. Периоды экспорта:


	- начало периода: начало данных, смещенное на одну точку вперед;


	- окончание периода: окончание данных, смещенное на одну точку
	 назад.


См. также:


[ICubeMetaExporter](ICubeMetaExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
