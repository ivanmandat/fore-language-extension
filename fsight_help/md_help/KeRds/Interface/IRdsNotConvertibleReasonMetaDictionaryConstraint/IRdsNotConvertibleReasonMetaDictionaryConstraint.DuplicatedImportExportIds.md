# IRdsNotConvertibleReasonMetaDictionaryConstraint.DuplicatedImportExportIds

IRdsNotConvertibleReasonMetaDictionaryConstraint.DuplicatedImportExportIds
-


# IRdsNotConvertibleReasonMetaDictionaryConstraint.DuplicatedImportExportIds


## Синтаксис


		DuplicatedImportExportIds: Array;


## Описание


Свойство DuplicatedImportExportIds
 возвращает идентификаторы, которые совпадают у схем импорта и экспорта.


## Комментарии


Нельзя преобразовать справочник НСИ, содержащий схему импорта/экспорта
 с идентификатором P7_RDS_CONVERT_OBJECT_SCHEMA.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ с ключом
 16008, содержащего справочники НСИ, которые требуется преобразовать в
 табличные справочники НСИ.


Добавьте ссылки на системные сборки Metabase, Rds.


					Sub UserProc;

		Var

		    RDS_DB: IRdsDatabase;

		    Converter: IRdsDictionaryConverter;

		    List: IRdsDictionaryConverterList;

		    NotConv: IMetabaseObjectDescriptors;

		    pReasons: IRdsNotConvertibleReasons;

		    pReason: IRdsNotConvertibleReason;

		    ReasonMetaDictConstr: IRdsNotConvertibleReasonMetaDictionaryConstraint;

		    i, j, k: Integer;

		Begin

		    RDS_DB := MetabaseClass.Active.Bind(16008) As IRdsDatabase;

		    Converter := New RdsDictionaryConverter.Create;

		    List := Converter.AllRdsDatabase(RDS_DB);

		    NotConv := List.NotConvertibleDictionaries;

		    For i := 0 To NotConv.Count - 1 Do

		    pReasons := List.GetNotConvertibleReasons(NotConv.Item(i).Key);

		        For j := 0 To pReasons.Count - 1 Do

		            pReason := pReasons.Item(j);

		            ReasonMetaDictConstr := pReason As IRdsNotConvertibleReasonMetaDictionaryConstraint;

		            Debug.Write("Совпадающие идентификаторы схем импорта/экспорта: ");

		            For k := 0 To ReasonMetaDictConstr.DuplicatedImportExportIds.Length - 1 Do

		                Debug.WriteLine(ReasonMetaDictConstr.DuplicatedImportExportIds[k]);

		            End For;

		        End For;

		    End For;

		End Sub UserProc;


В результате выполнения примера в окно консоли будут выведены совпадающие
 идентификаторы схем импорта/экспорта.


См. также:


[IRdsNotConvertibleReasonMetaDictionaryConstraint](IRdsNotConvertibleReasonMetaDictionaryConstraint.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
