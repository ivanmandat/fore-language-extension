# IExportRequestParams.Bindings

IExportRequestParams.Bindings
-


# IExportRequestParams.Bindings


## Синтаксис


Bindings: [ICubeMetaExporterBindings](../ICubeMetaExporterBindings/ICubeMetaExporterBindings.htm);


## Описание


Свойство Bindings определяет
 привязки атрибутов базы данных временных рядов с полями приёмника данных.


## Комментарии


Для определения экспортируемой базы данных временных рядов используйте
 свойство [IExportRequestParams.Rubricator](IExportRequestParams.Rubricator.htm).


## Пример


Для выполнения примера предполагается наличие базы данных временных
 рядов с идентификатором «TSDB». В данной базе должен присутствовать атрибут
 временных рядов «COUNTRY», являющийся ссылкой на справочник.


Добавьте ссылки на системные сборки «Cubes», «Dal», «Dimensions», «Dt»,
 «Metabase».


			Sub UserProc;

Var

    TextConsumer: IDtTextConsumer;

    MB: IMetabase;

    CrInfo: IMetabaseObjectCreateInfo;

    ObjDesc: IMetabaseObjectDescriptor;

    Obj: IMetabaseObject;

    ExportRequestDef: IExportRequestDefinition;

    Params: IExportRequestParams;

    Binding: ICubeMetaExporterBinding;

    Filter: ICubeMetaExporterFilter;

    FilterValues: Array;

    ExportRequestInst: IExportRequestInstance;

Begin

// Приёмник данных для экспорта в текстовый формат

    TextConsumer := New DtTextConsumer.Create;

    TextConsumer.File := "C:\result.txt";

    TextConsumer.FormatType := DtTextFormatType.Delimited;

    TextConsumer.DelimitedColumnDelimiter := ";";

    TextConsumer.DelimitedTextQualifier := """";

    TextConsumer.Encoding := "WIN";

    TextConsumer.WriteHeader := True;

// Объект экспорта

    MB := MetabaseClass.Active;

    CrInfo := MB.CreateCreateInfo;

    CrInfo.ClassId := MetabaseObjectClass.KE_CLASS_EXPORTREQUEST;

    CrInfo.Id := MB.GenerateId("OBJ_EXPORTREQUEST");

    CrInfo.Permanent := True;

    CrInfo.Parent := MB.ItemById("TSDB").Bind;

    ObjDesc := MB.CreateObject(CrInfo);

    Obj := ObjDesc.Edit;

    ExportRequestDef := Obj As IExportRequestDefinition;

// Параметры экспорта

    Params := ExportRequestDef.Exporter;

    Params.Rubricator := MB.ItemById("TSDB").Bind As IRubricator;

    Params.Consumer := TextConsumer As IDtConsumer;

    Params.ClearBeforeExport := True;

// Привязка атрибута COUNTRY

    Binding := Params.Bindings.Add;

    Binding.FieldName := "CountryNm";

    Binding.DataType := DbDataType.String;

    Binding.BindingType := CubeMetaExporterBindingType.Attribute;

    Binding.Attribute := "COUNTRY";

    Binding.KeyField := "NAME";

// Привязка календаря

    Binding := Params.Bindings.Add;

    Binding.FieldName := "Year";

    Binding.DataType := DbDataType.String;

    Binding.BindingType := CubeMetaExporterBindingType.Calendar;

    Binding.DateFormat := "$Year$";

    Binding.ValueFieldName := "Value";

    Binding.ValueDataType := DbDataType.Float;

// Параметры фильтрации

    Params.ByColumns := True;

    Params.CalendarLevel := DimCalendarLevel.Year;

    Params.RowCount := 1000;

    Filter := Params.Filters.Add;

    Filter.Attribute := "COUNTRY";

    FilterValues := New Variant[2];

    FilterValues[0] := 512;

    FilterValues[1] := 914;

    Filter.ValuesList := FilterValues;

    Obj.Save;

// Экспорт

    ExportRequestInst := (ExportRequestDef As IMetabaseObjectDescriptor).OpenWithParam(Null) As IExportRequestInstance;

    ExportRequestInst.Export;

End Sub UserProc;


После выполнения примера данные временных рядов будут экспортированы
 в текстовый файл «C:\result.txt» по следующим параметрам:


	- экспортируются данные временных рядов, у которых значение атрибута
	 «COUNTRY» равняется «512» или «914»;


	- экспортированы будут не более 1000 строк;


	- перед экспортом файл-приёмник будет очищен.


См. также:


[IExportRequestParams](IExportRequestParams.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
