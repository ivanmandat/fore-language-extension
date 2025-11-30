# IRdsDictionaryConverter.AllDictionary

IRdsDictionaryConverter.AllDictionary
-


# IRdsDictionaryConverter.AllDictionary


## Синтаксис


		AllDictionary(Source: [IRdsDictionary](../IRdsDictionary/IRdsDictionary.htm)):
		 [IRdsDictionaryConverterList](../IRdsDictionaryConverterList/IRdsDictionaryConverterList.htm);


## Параметры


Source. Преобразуемый справочник
 НСИ.


## Описание


Свойство AllDictionary возвращает
 список справочников НСИ, преобразованных в табличные справочники
 НСИ.


## Комментарии


Для преобразования всех справочников НСИ в табличные справочники НСИ
 используйте метод [IRdsDictionaryConverter.ConvertAll](IRdsDictionaryConverter.ConvertAll.htm).


## Пример


Для выполнения примера предполагается наличие репозитория НСИ с идентификатором
 MDM, содержащим справочник НСИ с идентификатором RDS.


Добавьте ссылки на системные сборки Metabase, Rds.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    RdsKey: Integer;

		    MObj: IMetabaseObject;

		    RDS: IRdsDictionary;

		    Converter: IRdsDictionaryConverter;

		    List: IRdsDictionaryConverterList;

		    NotConv: IMetabaseObjectDescriptors;

		    pReasons: IRdsNotConvertibleReasons;

		    pReason: IRdsNotConvertibleReason;

		    i, j: Integer;

		Begin

		    // Получим репозиторий

		    MB := MetabaseClass.Active;

		    // Получим справочник НСИ

		    RdsKey := MB.GetObjectKeyById("MDM");

		    MObj := MB.ItemByIdNamespace("RDS", RdsKey).Bind;

		    RDS := MObj As IRdsDictionary;

		    // Преобразуем справочник и выведем ошибки, если нельзя преобразовать

		    Converter := New RdsDictionaryConverter.Create;

		    List := Converter.AllDictionary(RDS);

		    NotConv := List.NotConvertibleDictionaries;

		    For i := 0 To NotConv.Count - 1 Do

		        pReasons := List.GetNotConvertibleReasons(NotConv.Item(i).Key);

		        Debug.WriteLine("Всего ошибок: " + pReasons.Count.ToString);

		        For j := 0 To pReasons.GetExplanation.Length - 1 Do

		            pReason := pReasons.Item(j);

		            Debug.WriteLine("Код ошибки: " + pReason.Reason.ToString);

		            Debug.Indent;

		            Debug.WriteLine("Причина: " + pReason.GetExplanation);

		        End For;

		    End For;

		End Sub UserProc;


В результате выполнения примера в окно консоли будут выведены: количество
 ошибок, код ошибки и причины, по которым справочник НСИ не может быть
 преобразован в табличный справочник НСИ.


См. также:


[IRdsDictionaryConverter](IRdsDictionaryConverter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
