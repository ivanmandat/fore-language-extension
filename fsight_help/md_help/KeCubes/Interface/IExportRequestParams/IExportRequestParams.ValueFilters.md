# IExportRequestParams.ValueFilters

IExportRequestParams.ValueFilters
-


# IExportRequestParams.ValueFilters


## Синтаксис


ValueFilters: [ICubeMetaExporterFilters](../ICubeMetaExporterFilters/ICubeMetaExporterFilters.htm);


## Описание


Свойство ValueFilters определяет
 параметры фильтрации экспортируемых временных рядов по атрибутам наблюдений.


## Комментарии


Для ограничения количества экспортируемых строк используйте свойство
 [IExportRequestParams.RowCount](IExportRequestParams.RowCount.htm).


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

    CrInfo: IMetabaseObjectCreateInfo;

    ObjDesc, TSDBDescr: IMetabaseObjectDescriptor;

    Obj: IMetabaseObject;

    ExportRequestDef: IExportRequestDefinition;

    Params: IExportRequestParams;

    Binding: ICubeMetaExporterBinding;

    Filter: ICubeMetaExporterFilter;

    ExportRequestInst: IExportRequestInstance;

Begin

    // Создаём приёмник данных для экспорта в текстовый файл

    TextConsumer := New DtTextConsumer.Create;

    TextConsumer.File := "C:\result.txt";

    TextConsumer.FormatType := DtTextFormatType.Delimited;

    TextConsumer.DelimitedColumnDelimiter := ";";

    TextConsumer.DelimitedTextQualifier := """";

    TextConsumer.Encoding := "WIN";

    TextConsumer.WriteHeader := True;

    // Получаем текущий репозиторий

    MB := MetabaseClass.Active;

    // Получаем базу данных временных рядов

    TSDBDescr := MB.ItemById("TSDB");

    // Создаем объект экспорта

    CrInfo := MB.CreateCreateInfo;

    CrInfo.ClassId := MetabaseObjectClass.KE_CLASS_EXPORTREQUEST;

    CrInfo.Id := MB.GenerateId("OBJ_EXPORTREQUEST", TSDBDescr.Key);

    CrInfo.Permanent := True;

    CrInfo.Parent := TSDBDescr.Bind;

    ObjDesc := MB.CreateObject(CrInfo);

    Obj := ObjDesc.Edit;

    ExportRequestDef := Obj As IExportRequestDefinition;

    // Получаем параметры экспорта

    Params := ExportRequestDef.Exporter;

    // Указываем источник и приёмник данных

    Params.Rubricator := MB.ItemById("TSDB").Bind As IRubricator;

    Params.Consumer := TextConsumer As IDtConsumer;

    // Указываем, что файл нужно очищать перед экспортом

    Params.ClearBeforeExport := True;

    // Добавляем привязку атрибута рядов CITY

    Binding := Params.Bindings.Add;

    Binding.FieldName := "City_Name";

    Binding.DataType := DbDataType.String;

    Binding.BindingType := CubeMetaExporterBindingType.Attribute;

    Binding.Attribute := "CITY";

    Binding.KeyField := "NAME";

    // Добавляем привязку атрибута наблюдений CMT

    Binding := Params.Bindings.Add;

    Binding.FieldName := "CMT";

    Binding.DataType := DbDataType.String;

    Binding.BindingType := CubeMetaExporterBindingType.ValueAttribute;

    Binding.Attribute := "CMT";

    // Добавляем привязку календаря

    Binding := Params.Bindings.Add;

    Binding.FieldName := "Year";

    Binding.DataType := DbDataType.String;

    Binding.BindingType := CubeMetaExporterBindingType.Calendar;

    Binding.DateFormat := "$Year$";

    Binding.ValueFieldName := "Value";

    Binding.ValueDataType := DbDataType.Float;

    // Задаем параметры фильтрации экспортируемых рядов

    // Добавляем фильтрацию по значениям атрибута наблюдений CMT

    Filter := Params.ValueFilters.Add;

    Filter.Attribute := "CMT";

    // Указываем, что значение атрибута не должно быть пустым

    Filter.Operator_ := OrmComparisonOperator.IsNotNull;

    // Сохраняем объект экспорта

    Obj.Save;

    // Выполняем экспорт

    ExportRequestInst := (ExportRequestDef As IMetabaseObjectDescriptor).OpenWithParam(Null) As IExportRequestInstance;

    ExportRequestInst.Export;

End Sub UserProc;


В результате выполнения примера в текстовый файл «C:\result.txt» будут
 экспортированы только те ряды, которые содержат значение по атрибуту наблюдений
 «CMT».


См. также:


[IExportRequestParams](IExportRequestParams.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
