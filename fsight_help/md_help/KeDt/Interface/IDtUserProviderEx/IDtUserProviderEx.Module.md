# IDtUserProviderEx.Module

IDtUserProviderEx.Module
-


# IDtUserProviderEx.Module


## Синтаксис


Module: [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm);


## Описание


Свойство Module определяет модуль/сборку
 Fore репозитория, где реализован пользовательский алгоритм получения данных.


## Комментарии


Свойство Module используется
 в комбинации со свойством [Macro](IDtUserProviderEx.Macro.htm).


## Пример


Для выполнения примера предполагается наличие модуля с идентификатором
 CUSTOM_IMPORT, содержащего класс [MyDtCustomProvider](MyDtCustomProvider.htm).


Добавьте ссылки на системные сборки: Dt, Metabase.


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

    UsProv.Metabase := MetabaseClass.Active;

    UsProv.Module := MB.ItemById("CUSTOM_IMPORT");

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


При выполнении примера с помощью пользовательского алгоритма будет выполнена
 загрузка строк из источника данных в массив «Values». В окно консоли будет
 выведено количество фактически загруженных строк.


См. также:


[IDtUserProviderEx](IDtUserProviderEx.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
