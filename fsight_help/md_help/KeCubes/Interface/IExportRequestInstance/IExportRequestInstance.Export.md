# IExportRequestInstance.Export

IExportRequestInstance.Export
-


# IExportRequestInstance.Export


## Синтаксис


Export;


## Описание


Метод Export осуществляет экспорт
 показателей.


## Пример


Для выполнения примера предполагается наличие базы данных временных
 рядов с идентификатором OBJ_RUBRICATOR. В данной базе должен присутствовать
 атрибут COUNTRIES.


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

    TextConsumer.File := "D:\result.txt";

    TextConsumer.FormatType := DtTextFormatType.Delimited;

    TextConsumer.DelimitedColumnDelimiter := ";";

    TextConsumer.DelimitedTextQualifier := """";

    TextConsumer.Encoding := "WIN";

    TextConsumer.WriteHeader := True;

    // Объект экспорта

    MB := MetabaseClass.Active;

    CrInfo := MB.CreateCreateInfo;

    CrInfo.ClassId := MetabaseObjectClass.KE_CLASS_EXPORTREQUEST;

    CrInfo.Id := "OBJ_EXPORTREQUEST";

    CrInfo.Permanent := True;

    CrInfo.Parent := MB.ItemById("OBJ_RUBRICATOR").Bind;

    ObjDesc := MB.CreateObject(CrInfo);

    Obj := ObjDesc.Edit;

    ExportRequestDef := Obj As IExportRequestDefinition;

    // Параметры экспорта

    Params := ExportRequestDef.Exporter;

    Params.Rubricator := MB.ItemById("OBJ_RUBRICATOR").Bind As IRubricator;

    Params.Consumer := TextConsumer As IDtConsumer;

    Binding := Params.Bindings.Add;

    Binding.FieldName := "CountryNm";

    Binding.DataType := DbDataType.String;

    Binding.BindingType := CubeMetaExporterBindingType.Attribute;

    Binding.Attribute := "COUNTRIES";

    Binding.KeyField := "NAME";

    Binding := Params.Bindings.Add;

    Binding.FieldName := "Year";

    Binding.DataType := DbDataType.String;

    Binding.BindingType := CubeMetaExporterBindingType.Calendar;

    Binding.DateFormat := "$Year$";

    Binding.ValueFieldName := "Value";

    Binding.ValueDataType := DbDataType.Float;

    Params.ByColumns := True;

    Params.CalendarLevel := DimCalendarLevel.Year;

    Filter := Params.Filters.Add;

    Filter.Attribute := "COUNTRIES";

    FilterValues := New Variant[2];

    FilterValues[0] := 512;

    FilterValues[1] := 914;

    Filter.ValuesList := FilterValues;

    Obj.Save;

    // Экспорт

    ExportRequestInst := (ExportRequestDef As IMetabaseObjectDescriptor).OpenWithParam(Null) As IExportRequestInstance;

    ExportRequestInst.Export;

End Sub UserProc;


После выполнения примера будет осуществлён экспорт показателей в текстовый
 файл C:\result.txt. Экспортированы будут данные только тех показателей,
 значение атрибута COUNTRIES у которых равняется 512 или 914.


См. также:


[IExportRequestInstance](IExportRequestInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
