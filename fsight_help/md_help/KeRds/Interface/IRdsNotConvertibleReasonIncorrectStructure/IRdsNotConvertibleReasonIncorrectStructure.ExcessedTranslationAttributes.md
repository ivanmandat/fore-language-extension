# IRdsNotConvertibleReasonIncorrectStructure.ExcessedTranslationAttributes

IRdsNotConvertibleReasonIncorrectStructure.ExcessedTranslationAttributes
-


# IRdsNotConvertibleReasonIncorrectStructure.ExcessedTranslationAttributes


## Синтаксис


		ExcessedTranslationAttributes: Array;


## Описание


Свойство ExcessedTranslationAttributes
 возвращает ключи избыточных атрибутов перевода.


## Комментарии


Для получения ключей связей, содержащих нарушения целостности, используйте
 свойство [IRdsNotConvertibleReasonIncorrectStructure.NullReferencedLinks](IRdsNotConvertibleReasonIncorrectStructure.NullReferencedLinks.htm).


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

		    ReasonIncorrStruct: IRdsNotConvertibleReasonIncorrectStructure;

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

		            ReasonIncorrStruct := pReason As IRdsNotConvertibleReasonIncorrectStructure;

		            Debug.Write("Ключи избыточных атрибутов перевода: ");

		            For k := 0 To ReasonIncorrStruct.ExcessedTranslationAttributes.Length - 1 Do

		                Debug.WriteLine(ReasonIncorrStruct.ExcessedTranslationAttributes[k]);

		            End For;

		            Debug.Write("Ключи связей с нарушенной целостностью: ");

		            For k := 0 To ReasonIncorrStruct.NullReferencedLinks.Length - 1 Do

		                Debug.WriteLine(ReasonIncorrStruct.NullReferencedLinks[k]);

		            End For;

		        End For;

		    End For;

		End Sub UserProc;


В результате выполнения примера в окно консоли будут выведены ключи
 избыточных атрибутов перевода и ключи связей с нарушенной целостностью.


См. также:


[IRdsNotConvertibleReasonIncorrectStructure](IRdsNotConvertibleReasonIncorrectStructure.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
