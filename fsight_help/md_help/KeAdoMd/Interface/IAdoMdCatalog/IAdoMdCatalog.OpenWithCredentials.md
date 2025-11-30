# IAdoMdCatalog.OpenWithCredentials

IAdoMdCatalog.OpenWithCredentials
-


# IAdoMdCatalog.OpenWithCredentials


## Синтаксис


OpenWithCredentials(Credentials: [ICredentials](KeSom.chm::/Interface/ICredentials/ICredentials.htm)):
 [IAdoMdCatalogInstance](../IAdoMdCatalogInstance/IAdoMdCatalogInstance.htm);


## Параметры


Credentials. Учетные данные,
 используемые при открытии каталога.


## Описание


Метод OpenWithCredentials осуществляет
 открытие каталога ADOMD с указанными учетными данными.


## Пример


Для выполнения примера предполагается наличие в репозитории каталога
 ADOMD с идентификатором «SAP_test».


			Sub UserProc;

Var

    MB: IMetabase;

    SecPackage: ISecurityPackage;

    Creds: IPasswordCredentials;

    Catalog: IAdoMdCatalog;

    CatalogInst: IAdoMdCatalogInstance;

Begin

    MB := MetabaseClass.Active;

    Catalog := MB.ItemById("SAP_test").Bind As IAdoMdCatalog;

    SecPackage := New StandardSecurityPackage.Create;

    Creds := SecPackage.CreateCredentials(AuthenticationMode.Password) As IPasswordCredentials;

    Creds.UserName := "User";

    Creds.Password := "Password";

    CatalogInst := Catalog.OpenWithCredentials(Creds);

End Sub UserProc;


После выполнения примера будет осуществлено открытие каталога ADOMD
 с указанными учетными данными.


См. также:


[IAdoMdCatalog](IAdoMdCatalog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
