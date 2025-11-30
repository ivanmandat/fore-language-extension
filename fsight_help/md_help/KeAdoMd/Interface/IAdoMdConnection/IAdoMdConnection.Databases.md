# IAdoMdConnection.Databases

IAdoMdConnection.Databases
-


# IAdoMdConnection.Databases


## Синтаксис


Databases: [IStringList](ModCollections.chm::/Interface/IStringList/IStringList.htm);


## Описание


Метод Databases извлекает список
 наименований всех доступных баз данных сервера, на работу с которым настроен
 каталог ADOMD.


## Пример


Для выполнения примера предполагается наличие в репозитории каталога
 ADOMD с идентификатором «ADOMDTest».


			Sub UserProc;

Var

    MB: IMetabase;

    Catalog: IAdoMdCatalogInstance;

    Connection: IAdoMdConnection;

    DB: IStringList;

    s: String;

Begin

    MB := MetabaseClass.Active;

    Catalog := MB.ItemById("ADOMDTest").Open(Null) As IAdoMdCatalogInstance;

    Connection := Catalog.Connection;

    DB := Connection.Databases;

    For Each s In DB Do

        Debug.WriteLine(s);

    End For;

End Sub UserProc;


При выполнении примера в консоль среды разработки будет выведен список
 баз данных, созданных на сервере, на который настроен каталог ADOMD.


См. также:


[IAdoMdConnection](IAdoMdConnection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
