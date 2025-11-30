# IAdoMdCatalog.Open

IAdoMdCatalog.Open
-


# IAdoMdCatalog.Open


## Синтаксис


Open: [IAdoMdCatalogInstance](../IAdoMdCatalogInstance/IAdoMdCatalogInstance.htm);


## Описание


Метод Open осуществляет открытие
 каталога ADOMD.


## Пример


Для выполнения примера предполагается наличие в репозитории каталога
 ADOMD с идентификатором «ADOMDTest».


			Sub UserProc;

Var

    MB: IMetabase;

    Catalog: IAdoMdCatalog;

    CatalogInst: IAdoMdCatalogInstance;

Begin

    MB := MetabaseClass.Active;

    Catalog := MB.ItemById("ADOMDTest").Bind As IAdoMdCatalog;

    CatalogInst := Catalog.Open;

End Sub UserProc;


При выполнении примера будет получен открытый экземпляр каталога ADOMD.


См. также:


[IAdoMdCatalog](IAdoMdCatalog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
