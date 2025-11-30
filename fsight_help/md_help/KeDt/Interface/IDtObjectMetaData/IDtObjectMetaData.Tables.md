# IDtObjectMetaData.Tables

IDtObjectMetaData.Tables
-


# IDtObjectMetaData.Tables


## Синтаксис


Tables: Array;


## Описание


Метод Tables возвращает строковый
 массив, содержащий наименования таблиц источника/приёмника данных.


## Пример


Для выполнения примера предполагается наличие в репозитории задачи ETL
 с идентификатором ETL. Первым объектом задачи является какой-либо источник
 данных, использующий для подключения драйверы OLE DB. Например, импорт
 из Access.


			Sub UserProc;

Var

    MB: IMetabase;

    Task: IEtlTask;

    Provider: IEtlPlainDataProvider;

    MetaData: IDtObjectMetaData;

    Arr, Arr1: Array Of String;

    s: String;

Begin

    MB := MetabaseClass.Active;

    Task := MB.ItemById("ETL").Bind As IEtlTask;

    Provider := Task.Item(0) As IEtlPlainDataProvider;

    MetaData := Provider.Provider As IDtObjectMetaData;

    Arr := MetaData.Tables;

    Arr1 := MetaData.Views;

    Debug.WriteLine("Table");

    For Each s In Arr Do

        Debug.WriteLine(s);

    End For;

    Debug.WriteLine("View");

    For Each s In Arr1 Do

        Debug.WriteLine(s);

    End For;

End Sub UserProc;


После выполнения примера в консоль среды разработки будет выведен список
 таблиц и представлений, содержащихся в объекте, на который настроен источник
 данных задачи ETL.


См. также:


[IDtObjectMetaData](IDtObjectMetaData.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
