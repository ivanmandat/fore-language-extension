# IRdsNotConvertibleReasonDuplicatedId.DuplicatedId

IRdsNotConvertibleReasonDuplicatedId.DuplicatedId
-


# IRdsNotConvertibleReasonDuplicatedId.DuplicatedId


## Синтаксис


		DuplicatedId: String;


## Описание


Свойство DuplicatedId возвращает
 дублирующийся идентификатор.


## Комментарии


Для получения ключей объектов используйте свойство [IRdsNotConvertibleReasonDuplicatedId.Keys](IRdsNotConvertibleReasonDuplicatedId.Keys.htm).


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

		    ReasonDuplicatedId: IRdsNotConvertibleReasonDuplicatedId;

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

		            ReasonDuplicatedId := pReason As IRdsNotConvertibleReasonDuplicatedId;

		            Debug.Write("Дублирующийся идентификатор: ");

		            Debug.WriteLine(ReasonDuplicatedId.DuplicatedId);

		            Debug.Write("Ключи: ");

		            For k := 0 To ReasonDuplicatedId.Keys.Length - 1 Do

		                Debug.WriteLine(ReasonDuplicatedId.Keys[k]);

		            End For;

		        End For;

		    End For;

		End Sub UserProc;


В результате выполнения примера в окно консоли будут выведены дублирующиеся
 идентификаторы и соответствующие им ключи объектов.


См. также:


[IRdsNotConvertibleReasonDuplicatedId](IRdsNotConvertibleReasonDuplicatedId.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
