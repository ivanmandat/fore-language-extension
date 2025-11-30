# IRdsDictionaryConverter.ConvertAll

IRdsDictionaryConverter.ConvertAll
-


# IRdsDictionaryConverter.ConvertAll


## Синтаксис


		ConvertAll(Source: [IRdsDictionaryConverterList](../IRdsDictionaryConverterList/IRdsDictionaryConverterList.htm));


## Параметры


Source. Преобразуемый справочник
 НСИ.


## Описание


Метод ConvertAll выполняет преобразование
 всех справочников НСИ в табличные справочники НСИ.


## Комментарии


Для проверки репозитория НСИ и получения списка справочников НСИ, преобразуемых
 в табличные справочники НСИ, используйте метод [IRdsDictionaryConverter.AllRdsDatabase](IRdsDictionaryConverter.AllRdsDatabase.htm).


## Пример


Для выполнения примера предполагается наличие репозитория НСИ с ключом
 16008, содержащего справочники НСИ, которые необходимо преобразовать в
 табличные справочники НСИ.


Добавьте ссылки на системные сборки Metabase, Rds.


					Sub UserProc;

		Var

		    RDS_DB: IRdsDatabase;

		    Converter: IRdsDictionaryConverter;

		    List: IRdsDictionaryConverterList;

		    Conv, NotConv: IMetabaseObjectDescriptors;

		    pReasons: IRdsNotConvertibleReasons;

		    pReason: IRdsNotConvertibleReason;

		    i, j: Integer;

		Begin

		    RDS_DB := MetabaseClass.Active.Bind(16008) As IRdsDatabase;

		    Converter := New RdsDictionaryConverter.Create;

		    List := Converter.AllRdsDatabase(RDS_DB);

		    Converter.ConvertAll(List);

		    Conv := List.ConvertibleDictionaries;

		    NotConv := List.NotConvertibleDictionaries;

		    Debug.WriteLine("Преобразовано справочников: " + Conv.Count.ToString);

		    For i := 0 To NotConv.Count - 1 Do

		        pReasons := List.GetNotConvertibleReasons(NotConv.Item(i).Key);

		        For j := 0 To pReasons.GetExplanation.Length - 1 Do

		            pReason := pReasons.Item(j);

		            Debug.WriteLine(pReason.GetExplanation);

		        End For;

		    End For;

		End Sub UserProc;


В результате выполнения примера в окно консоли будет выведено:


	- количество справочников НСИ, которые были преобразованы в табличные
	 справочники НСИ;


	- все причины, по которым справочники НСИ не были преобразованы
	 в табличные справочники НСИ.


См. также:


[IRdsDictionaryConverter](IRdsDictionaryConverter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
