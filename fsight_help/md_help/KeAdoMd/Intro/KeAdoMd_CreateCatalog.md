# Создание каталога ADOMD

Создание каталога ADOMD
-


# Создание каталога ADOMD


Каталог ADOMD - это объекта класса [MetabaseObjectClass.KE_CLASS_ADOMD_CATALOG](KeSom.chm::/Enums/MetabaseObjectClass.htm).
 Для создания нового каталога инициализируйте объект, содержащий описание
 создаваемого объекта, задайте указанный класс объекта и прочее необходимое
 описание:


	Var

	    //...

	    MB: IMetabase;

	    CrInfo: IMetabaseObjectCreateInfo;

	    //...

	Begin

	    //...

	    MB := MetabaseClass.Active;

	    //Информация для создания
	 нового каталога ADOMD

	    CrInfo := MB.CreateCreateInfo;

	    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_ADOMD_CATALOG;

	    CrInfo.Id := "MAS_TEST";

	    CrInfo.Name := "Каталог на базе MSSQL Analysis Services";

	    CrInfo.Parent := MB.ItemById("F_ADOMD");


При выполнении метода [CreateObject](KeSom.chm::/Interface/IMetabase/IMetabase.CreateObject.htm)
 будет создан новый каталог, который сразу можно открыть на редактирование,
 привести к интерфейсу [IAdoMdCatalog](../Interface/IAdoMdCatalog/IAdoMdCatalog.htm)
 и настроить необходимые параметры подключения:


	Var

	    //...

	    MB: IMetabase;

	    CrInfo: IMetabaseObjectCreateInfo;

	    Catalog: IAdoMdCatalog;

	    //...

	Begin

	    //...

	    //Создание каталога
	 ADOMD

	    Catalog := MB.CreateObject(CrInfo).Edit As IAdoMdCatalog;

	    //Настройка параметров

	    Catalog.Driver := "MSOLAP";

	    Catalog.Server := "MAS_TEST";

	    Catalog.Name := "TEST_CUBE";

	    Catalog.Authentication := AuthenticationMode.Password;

	    Catalog.UseMetabaseCredentials := False;

	    Creds := Catalog.Credentials As IPasswordCredentials;

	    Creds.UserName := "User1";

	    Creds.Password := "password";

	    Catalog.Credentials := Creds;

	    //Сохранение каталога
	 ADOMD

	    (Catalog As IMetabaseObject).Save;


После сохранения созданного объекта каталог ADOMD будет доступен в репозитории.
 На данный момент каталог еще пуст так как не выполнялась его синхронизация
 с сервером, на который он настроен. Для того чтобы в каталоге ADOMD появились
 объекты необходимо его [открыть](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.Open.htm)
 и вызвать метод [Refresh](../Interface/IAdoMdCatalogInstance/IAdoMdCatalogInstance.Refresh.htm):


	Var

	    //...

	    MB: IMetabase;

	    CatalogInst: IAdoMdCatalogInstance;

	    //...

	Begin

	    //...

	    MB := MetabaseClass.Active;

	    Catalog := MB.ItemById("MAS_TEST").Open As IAdoMdCatalogInstance;

	    CatalogInst.Refresh;


При выполнении метода [Refresh](../Interface/IAdoMdCatalogInstance/IAdoMdCatalogInstance.Refresh.htm)
 в каталоге ADOMD будут созданы кубы и справочники ADOMD, являющиеся отображением
 многомерных источников, хранящихся на сервере.


Кубы ADOMD, как и все кубы платформы, поддерживают интерфейс [ICubeModel](KeCubes.chm::/Interface/ICubeModel/ICubeModel.htm),
 а справочники ADOMD, как и справочники, поддерживают интерфейс [IDimensionModel](KeDims.chm::/interface/IDimensionModel/IDimensionModel.htm).


См. также:


[Введение
 в сборку AdoMd](KeAdoMd_Intro.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
