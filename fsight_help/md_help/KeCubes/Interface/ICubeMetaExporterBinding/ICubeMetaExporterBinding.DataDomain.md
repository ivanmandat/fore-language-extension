# ICubeMetaExporterBinding.DataDomain

ICubeMetaExporterBinding.DataDomain
-


# ICubeMetaExporterBinding.DataDomain


## Синтаксис


DataDomain: [DbDataDomain](Dal.chm::/Enums/DbDataDomain.htm);


## Описание


Свойство DataDomain определяет
 тип данных для хранения в атрибуте многобайтовой информации.


## Комментарии


Для атрибута типа «Длинный текст»
 данное свойство должно иметь значение DbDataDomain.Memo,
 а свойство [IMetaAttribute.DataType](../../../KeRds/Interface/IMetaAttribute/IMetaAttribute.DataType.htm)
 - значение DbDataType.String.


При работе с атрибутом «Длинный текст»
 учитывайте следующие ограничения:


	- если используется СУБД Oracle, то нельзя выполнять поиск временных
	 рядов по значению данного атрибута;


	- данные атрибуты не могут входить в уникальный индекс для базы
	 данных временных рядов;


	- данные атрибуты не могут быть обязательными;


	- выборка и сохранение данных атрибутов могут проходить медленнее
	 по сравнению с обычными текстовыми атрибутами;


	- в мнемониках нельзя использовать атрибуты табличного справочника
	 НСИ, имеющие тип «Длинный текст».


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных
 временных рядов с идентификатором «TSDB_MEMO», содержащей следующие атрибуты
 временных рядов:


	- атрибут наблюдения с идентификатором «A_COMMENT» типа «Длинный текст»;


	- атрибут рядов с идентификатором «CITY», являющийся ссылкой на
	 справочник.


Добавьте ссылки на системные сборки: Cubes, Dal, Dimensions, Dt, Metabase,
 Rds.


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

	    ExportRequestInst: IExportRequestInstance;

	Begin

	    // Настраиваем приёмник данных для экспорта в текстовый формат

	    TextConsumer := New DtTextConsumer.Create;

	    TextConsumer.File := "C:\result.txt";

	    TextConsumer.FormatType := DtTextFormatType.Delimited;

	    TextConsumer.DelimitedColumnDelimiter := ";";

	    TextConsumer.DelimitedTextQualifier := """";

	    TextConsumer.Encoding := "WIN";

	    TextConsumer.WriteHeader := True;

	    // Получаем текущий репозиторий и создаем объект экспорта

	    MB := MetabaseClass.Active;

	    CrInfo := MB.CreateCreateInfo;

	    CrInfo.ClassId := MetabaseObjectClass.KE_CLASS_EXPORTREQUEST;

	    RubDescr := MB.ItemById("TSDB_MEMO");

	    CrInfo.Parent := RubDescr;

	    CrInfo.Id := MB.GenerateId("OBJ_EXPORTREQUEST", RubDescr.Key);

	    CrInfo.Permanent := True;

	    ObjDesc := MB.CreateObject(CrInfo);

	    Obj := ObjDesc.Edit;

	    // Получаем параметры экспорта

	    ExportRequestDef := Obj As IExportRequestDefinition;

	    Params := ExportRequestDef.Exporter;

	    // Указываем источник данных

	    Rubr := RubDescr.Bind As IRubricator;

	    Params.Rubricator := Rubr;

	    // Указываем приёмник данных

	    Params.Consumer := TextConsumer As IDtConsumer;

	    // Задаем привязку для атрибута CITY

	    Binding := Params.Bindings.Add;

	    Binding.FieldName := "CityKey";

	    Binding.DataType := DbDataType.String;

	    Binding.BindingType := CubeMetaExporterBindingType.Attribute;

	    FactsDict := Rubr.Facts;

	    Attr := FactsDict.Attributes.FindById("CITY");

	    Binding.AttributeKey := Attr.Key;

	    Binding.KeyField := "KEY";

	    // Задаем привязку для календаря

	    Binding := Params.Bindings.Add;

	    Binding.FieldName := "Year";

	    Binding.DataType := DbDataType.String;

	    Binding.BindingType := CubeMetaExporterBindingType.Calendar;

	    Binding.DateFormat := "$Year$";

	    Binding.ValueFieldName := "Value";

	    Binding.ValueDataType := DbDataType.Float;

	    // Задаем привязку для атрибута A_COMMENT, имеющего тип «Длинный текст»

	    Binding := Params.Bindings.Add;

	    Binding.FieldName := "Comment";

	    Binding.DataType := DbDataType.String;

	    Binding.DataDomain := DbDataDomain.Memo;

	    Binding.BindingType := CubeMetaExporterBindingType.ValueAttribute;

	    Binding.Attribute := "A_COMMENT";

	    // Задаем календарную динамику экспортируемых данных

	    Params.CalendarLevel := DimCalendarLevel.Year;

	    // Сохраняем изменения

	    Obj.Save;

	    // Выполняем экспорт

	    ExportRequestInst := ObjDesc.OpenWithParam(Null) As IExportRequestInstance;

	    ExportRequestInst.Export;

	End Sub UserProc;


В результате выполнения примера данные из базы данных временных рядов
 будут экспортированы в файл «C:\result.txt».


См. также:


[ICubeMetaExporterBinding](ICubeMetaExporterBinding.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
