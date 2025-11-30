# IRdsDictionaryConverter.AllRdsDatabase

IRdsDictionaryConverter.AllRdsDatabase
-


# IRdsDictionaryConverter.AllRdsDatabase


## Синтаксис


		AllRdsDatabase(RdsDatabase: [IRdsDatabase](../IRdsDatabase/IRdsDatabase.htm)):
		 [IRdsDictionaryConverterList](../IRdsDictionaryConverterList/IRdsDictionaryConverterList.htm);


## Параметры


RdsDatabase. Репозиторий НСИ.


## Описание


Метод AllRdsDatabase выполняет
 проверку репозитория НСИ и возвращает список справочников НСИ, преобразуемых
 в табличные справочники НСИ.


## Комментарии


Для преобразования всех справочников НСИ в табличные справочники НСИ
 используйте метод [IRdsDictionaryConverter.ConvertAll](IRdsDictionaryConverter.ConvertAll.htm).


## Пример


Для выполнения примера предполагается наличие репозитория НСИ с ключом
 «16008», содержащего справочники НСИ, которые необходимо преобразовать
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

		    i, j: Integer;

		Begin

		    RDS_DB := MetabaseClass.Active.Bind(16008) As IRdsDatabase;

		    Converter := New RdsDictionaryConverter.Create;

		    List := Converter.AllRdsDatabase(RDS_DB);

		    NotConv := List.NotConvertibleDictionaries;

		    For i := 0 To NotConv.Count - 1 Do

		        pReasons := List.GetNotConvertibleReasons(NotConv.Item(i).Key);

		        Debug.WriteLine("Всего ошибок: " + pReasons.Count.ToString);

		        For j := 0 To pReasons.GetExplanation.Length - 1 Do

		            pReason := pReasons.Item(j);

		            Debug.WriteLine("Код ошибки: " + pReason.Reason.ToString);

		            Debug.WriteLine("    Причина:   " + pReason.GetExplanation);

		        End For;

		    End For;

		End Sub UserProc;


В результате выполнения примера в окно консоли будет выведено:


	- количество причин, по которым справочник НСИ не может быть преобразован
	 в табличный справочник НСИ;


	- код ошибки и объяснение причины, по которой справочник НСИ не
	 может быть преобразован в табличный справочник НСИ.


См. также:


[IRdsDictionaryConverter](IRdsDictionaryConverter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
