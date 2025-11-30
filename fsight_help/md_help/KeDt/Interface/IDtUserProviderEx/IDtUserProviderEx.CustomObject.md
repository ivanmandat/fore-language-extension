# IDtUserProviderEx.CustomObject

IDtUserProviderEx.CustomObject
-


# IDtUserProviderEx.CustomObject


## Синтаксис


CustomObject: Variant;


## Описание


Свойство предназначено только для чтения.


Свойство CustomObject возвращает
 объект, который является источником данных, полученным с помощью пользовательского
 алгоритма.


## Комментарии


Источник данных доступен только после вызова метода [IDtObject.Open](../IDtObject/IDtObject.Open.htm).


## Пример


Для выполнения примера предполагается наличие модуля с идентификатором
 «CUSTOM_LOAD», содержащего класс «[MyDtCustomProvider](MyDtCustomProvider.htm)».
 Добавьте ссылки на системные сборки «Metabase», «Dt».


					Sub UserProc_CustomObject;

		Var

		    MB: IMetabase;

		    UsProv: IDtUserProviderEx;

		    CustProv: IDtCustomProvider;

		    Values: Array;

		    ReadingRows: Integer;

		Begin

		    MB := MetabaseClass.Active;

		    UsProv := New DtUserProviderEx.Create;

		    UsProv.Metabase := MB;

		    UsProv.Module := MB.ItemById("CUSTOM_LOAD");

		    UsProv.Macro := "MyDtCustomProvider";

		    UsProv.Open;

		    UsProv.FieldsFromFile;

		    CustProv := UsProv.CustomObject As IDtCustomProvider;

		    If CustProv.ImplementFetchRows Then

		        CustProv.FetchRows(10, Values);

		    Else

		        While Not CustProv.Eof Do

		            CustProv.Fetch(Values);

		        End While;

		    End If;

		    ReadingRows := CustProv.ReadingRowsCount;

		    Debug.WriteLine("Прочитано " + ReadingRows.ToString + " строк");

		    UsProv.Close;

		End Sub UserProc_CustomObject;


Результат выполнения примера: с помощью пользовательского алгоритма
 будет выполнена попытка загрузить в массив «Values» строки из источника
 данных, полученного с помощью пользовательского алгоритма. В окно консоли
 будет выведено количество фактически загруженных строк.


См. также:


[IDtUserProviderEx](IDtUserProviderEx.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
