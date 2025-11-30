# IRdsNotConvertibleReasonConverterConstraint.InvalidImportExportId

IRdsNotConvertibleReasonConverterConstraint.InvalidImportExportId
-


# IRdsNotConvertibleReasonConverterConstraint.InvalidImportExportId


## Синтаксис


		InvalidImportExportId: String;


## Описание


Свойство InvalidImportExportId
 возвращает запрещённый идентификатор для схем импорта/экспорта.


## Комментарии


Нельзя преобразовать справочник НСИ, содержащий схему импорта/экспорта
 с идентификатором P7_RDS_CONVERT_OBJECT_SCHEMA.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ с ключом
 16008, содержащего справочники НСИ, которые требуется преобразовать
 в табличные справочники НСИ.


Добавьте ссылки на системные сборки Metabase, Rds.


					Sub UserProc;

		Var

		    RDS_DB: IRdsDatabase;

		    Converter: IRdsDictionaryConverter;

		    List: IRdsDictionaryConverterList;

		    NotConv: IMetabaseObjectDescriptors;

		    pReasons: IRdsNotConvertibleReasons;

		    pReason: IRdsNotConvertibleReason;

		    ReasonConvConstr: IRdsNotConvertibleReasonConverterConstraint;

		    i, j: Integer;

		Begin

		    RDS_DB := MetabaseClass.Active.Bind(16008) As IRdsDatabase;

		    Converter := New RdsDictionaryConverter.Create;

		    List := Converter.AllRdsDatabase(RDS_DB);

		    NotConv := List.NotConvertibleDictionaries;

		    For i := 0 To NotConv.Count - 1 Do

		    pReasons := List.GetNotConvertibleReasons(NotConv.Item(i).Key);

		        For j := 0 To pReasons.Count - 1 Do

		            pReason := pReasons.Item(j);

		            ReasonConvConstr := pReason As IRdsNotConvertibleReasonConverterConstraint;

		            Debug.Write("Справочник содержит схему импорта(экспорта): ");

		            Debug.WriteLine(ReasonConvConstr.InvalidImportExportId);

		        End For;

		    End For;

		End Sub UserProc;


В результате выполнения примера в окно консоли будет выведен запрещённый
 идентификатор для схем импорта/экспорта.


См. также:


[IRdsNotConvertibleReasonConverterConstraint](IRdsNotConvertibleReasonConverterConstraint.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
