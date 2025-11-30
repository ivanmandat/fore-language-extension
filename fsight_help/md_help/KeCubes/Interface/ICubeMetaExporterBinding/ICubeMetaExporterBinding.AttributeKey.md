# ICubeMetaExporterBinding.AttributeKey

ICubeMetaExporterBinding.AttributeKey
-


# ICubeMetaExporterBinding.AttributeKey


## Синтаксис


AttributeKey: Integer;


## Описание


Свойство AttributeKey определяет
 ключ атрибута показателя.


## Комментарии


Привязка атрибутов базы данных временных рядов с полями приёмника данных
 может осуществляться несколькими способами:


	- используя идентификаторы атрибутов: свойство [ICubeMetaExporterBinding.Attribute](ICubeMetaExporterBinding.Attribute.htm);


	- используя ключи атрибутов: свойство AttributeKey;


	- используя ключи и идентификаторы атрибутов одновременно.


Если для привязки используются лишь идентификаторы атрибутов, то в процессе
 экспорта могут возникнуть ошибки, если идентификатор атрибута в базе данных
 временных рядов был изменен. Более надежной является привязка с использованием
 ключей атрибутов.


## Пример


Для выполнения примера предполагается наличие базы данных временных
 рядов с идентификатором «OBJ_RUBRICATOR». В данной базе должен присутствовать
 пользовательский атрибут «COUNTRY». Также необходимо добавить ссылки на
 системные сборки «Cubes», «Metabase», «Dt», «Dal», «Rds», «Dimensions».


			    Sub UserProc;

    Var

        TextConsumer: IDtTextConsumer;

        MB: IMetabase;

        CrInfo: IMetabaseObjectCreateInfo;

        RubDescr: IMetabaseObjectDescriptor;

        ObjDesc: IMetabaseObjectDescriptor;

        Obj: IMetabaseObject;

        ExportRequestDef: IExportRequestDefinition;

        Params: IExportRequestParams;

        Rubr: IRubricator;

        Binding: ICubeMetaExporterBinding;

        FactsDict: IMetaDictionary;

        Attr: IMetaAttribute;

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

        RubDescr := MB.ItemById("OBJ_RUBRICATOR");

        CrInfo.Parent := RubDescr;

        ObjDesc := MB.CreateObject(CrInfo);

        Obj := ObjDesc.Edit;

        ExportRequestDef := Obj As IExportRequestDefinition;

    // Параметры экспорта

        Params := ExportRequestDef.Exporter;

        Rubr := RubDescr.Bind As IRubricator;

        Params.Rubricator := Rubr;

        Params.Consumer := TextConsumer As IDtConsumer;

        Binding := Params.Bindings.Add;

        Binding.FieldName := "CountryKey";

        Binding.DataType := DbDataType.String;

        Binding.BindingType := CubeMetaExporterBindingType.Attribute;

        FactsDict := Rubr.Facts;

        Attr := FactsDict.Attributes.FindById("COUNTRY");

        Binding.AttributeKey := Attr.Key;

        Binding.KeyField := "KEY";

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

        Filter.AttributeKey := Attr.Key;

        FilterValues := New Variant[2];

        FilterValues[0] := 512;

        FilterValues[1] := 914;

        Filter.ValuesList := FilterValues;

        Obj.Save;

    // Экспорт

        ExportRequestInst := ObjDesc.OpenWithParam(Null) As IExportRequestInstance;

        ExportRequestInst.Export;

    End Sub UserProc;


После выполнения примера будет осуществлен экспорт показателей в текстовый
 файл «C:\result.txt». Экспортированы будут данные только тех показателей,
 значение атрибута «COUNTRY» у которых равняется «512» или «914». Привязка
 атрибута будет осуществляться по ключу.


См. также:


[ICubeMetaExporterBinding](ICubeMetaExporterBinding.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
