# IImportRequestDefinition.ProviderParams

IImportRequestDefinition.ProviderParams
-


# IImportRequestDefinition.ProviderParams


## Синтаксис


ProviderParams: [IImportRequestProviderParams](../IImportRequestProviderParams/IImportRequestProviderParams.htm);


## Описание


Свойство ProviderParams возвращает
 объект, содержащий параметры импорта показателей из источника данных (кроме
 базы данных временных рядов).


## Пример


Для выполнения примера предполагается наличие базы данных временных
 рядов с идентификатором «OBJ_RUBRICATOR» и файла экспорта показателей
 «C:\result.txt». Также в репозитории должен существовать репозиторий НСИ
 с идентификатором «RDS», в этом репозитории справочник «COUNTRY» и другие
 системные справочники, необходимые для работы базы данных временных рядов.
 В базе данных временных рядов создан дополнительный обязательный атрибут
 «COUNTRY», ссылающийся на справочник стран. Добавьте ссылки на системные
 сборки: Cubes, Db, Dimensins, Dt, Metabase.


			Sub CreateImportRequest;

Var

    TextProvider: IDtTextProvider;

    Mb: IMetabase;

    RubDesc, NSIDesc: IMetabaseObjectDescriptor;

    CrInfo: IMetabaseObjectCreateInfo;

    Obj: IMetabaseObject;

    ImportRequestDef: IImportRequestDefinition;

    Params: IImportRequestProviderParams;

    Bindings: ICubeMetaLoaderBindings;

    Binding: ICubeMetaLoaderBinding;

Begin

    // Источник данных для импорта из текстового файла

    TextProvider := New DtTextProvider.Create;

    TextProvider.File := "C:\result.txt";

    TextProvider.FormatType := DtTextFormatType.Delimited;

    TextProvider.DelimitedColumnDelimiter := ";";

    TextProvider.DelimitedTextQualifier := """";

    TextProvider.Encoding := "WIN";

    TextProvider.RangeHasHeader := True;

    TextProvider.Open;

    // Создание схемы импорта

    Mb := MetabaseClass.Active;

    RubDesc := Mb.ItemById("OBJ_RUBRICATOR");

    NSIDesc := Mb.ItemById("RDS");

    // Объект импорта

    CrInfo := Mb.CreateCreateInfo;

    CrInfo.ClassId := MetabaseObjectClass.KE_CLASS_IMPORTREQUEST;

    CrInfo.Id := "OBJ_IMPORTREQUEST_P";

    CrInfo.Name := "Объект импорта";

    CrInfo.Parent := RubDesc.Bind;

    Obj := Mb.CreateObject(CrInfo).Edit;

    // Настройка источника

    ImportRequestDef := Obj As IImportRequestDefinition;

    ImportRequestDef.SourceType := ImportRequestSourceType.Provider;

    ImportRequestDef.DestinationRubricator := RubDesc.Bind As IRubricator;

    // Параметры импорта

    Params := ImportRequestDef.ProviderParams;

    Params.Provider := TextProvider As IDatasetDataProvider;

    Params.NewRevisionName := "Импорт показателй";

    Params.ImportObjectKey := Obj.Key;

    Params.LoadType := CubeMetaLoaderLoadType.CreateAndUpdate;

    Bindings := Params.Bindings;

    // Привязка атрибутов

    // Календарь

    Binding := Bindings.Add;

    Binding.BindingType := CubeMetaLoaderBindingType.Calendar;

    Binding.CalendarOptions.Levels := DimCalendarLevelSet.Year;

    Binding.ByColumns := True;

    Binding.CalendarDateFormat := "$Year$A1";

    Binding.FieldType := CubeMetaLoaderFieldType.Name;

    Binding.Field := "1990A1";

    Binding.EndField := "2000A1";

    // Единицы измерения

    Binding := Bindings.Add;

    Binding.BindingType := CubeMetaLoaderBindingType.Unit;

    Binding.FieldType := CubeMetaLoaderFieldType.Name;

    Binding.Field := "Units";

    Binding.Dimension := Mb.ItemByIdNamespace("UNITS", NSIDesc.Key).Bind As IDimensionModel;

    Binding.Index := "PRIMARY_INDEX";

    Binding.KeyAttribute := "KEY";

    // Периодичность

    Binding := Bindings.Add;

    Binding.BindingType := CubeMetaLoaderBindingType.Attribute;

    Binding.Attribute := "DL";

    Binding.FieldType := CubeMetaLoaderFieldType.ConstValue;

    Binding.FieldValue := DimCalendarLevel.Year;

    // Страны

    Binding := Bindings.Add;

    Binding.BindingType := CubeMetaLoaderBindingType.Attribute;

    Binding.Attribute := "COUNTRY";

    Binding.FieldType := CubeMetaLoaderFieldType.Name;

    Binding.Field := "Code";

    Binding.CheckField := "Country";

    Binding.Dimension := Mb.ItemByIdNamespace("COUNTRY", NsiDesc.Key).Bind As IDimensionModel;

    Binding.Index := "UNIQUEKEY";

    Binding.KeyAttribute := "KEY";

    Binding.NameAttribute := "NAME";

    // Привязка по индексу всех полей со значениями

    //...

    Binding := Bindings.Add;

    Binding.BindingType := CubeMetaLoaderBindingType.Value;

    Binding.FieldType := CubeMetaLoaderFieldType.Index;

    Binding.Field := "3";

    //...

    // Аналогичные блоки кода по привязке остальных полей со значениями

    // В каждом блоке изменяется только номер поля

    //...

    // Сохранение схемы импорта

    Obj.Save;

End Sub CreateImportRequest;


При выполнении примера будет создан объект импорта показателей из текстового
 файла «C:\result.txt». В данном объекте будут настроены параметры календаря
 и параметры привязки атрибутов базы данных временных рядов к полям с данными.


См. также:


[IImportRequestDefinition](IImportRequestDefinition.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
