# IAdoMdCatalog.Driver

IAdoMdCatalog.Driver
-


# IAdoMdCatalog.Driver


## Синтаксис


Driver: String;


## Описание


Свойство Driver определяет идентификатор
 драйвера, используемого при открытии каталога ADOMD.


## Комментарии


Данное свойство актуально, если не задано свойство [WellKnownDriver](IAdoMdCatalog.WellKnownDriver.htm).
 В качестве значения свойства Driver
 необходимо указать программный идентификатор провайдера, используемого
 для подключения к серверу. В текущей реализации для использования доступны
 следующие значения:


		 Программный идентификатор (ProgId)
		 Описание провайдера


		 MSOLAP.4
		 Microsoft OLE DB Provider for Analysis Services 10.0.


		 MSOLAP.2
		 Microsoft OLE DB Provider for OLAP Services 8.0.


## Пример


			Sub UserProc;

Var

    MB: IMetabase;

    CrInfo: IMetabaseObjectCreateInfo;

    CatAdo: IAdoMdCatalog;

Begin

    MB := MetabaseClass.Active;

    CrInfo := MB.CreateCreateInfo;

    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_ADOMD_CATALOG;

    CrInfo.Id := "MAS_TEST";

    CrInfo.Name := "Каталог на базе MSSQL Analysis Services";

    CrInfo.Parent := MB.Root;

    CatAdo := MB.CreateObject(CrInfo).Edit As IAdoMdCatalog;

    CatAdo.Driver := "MSOLAP.4";

    CatAdo.Server := "MAS_TEST";

    CatAdo.Name := "TEST_CUBE";

    (CatAdo As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера в корневом каталоге репозитория будет создан
 новый каталог ADOMD. Данный каталог будет настроен на подключение к базе
 данных "TEST_CUBE" расположенной на сервере "MAS_TEST".
 При подключении будет использоваться драйвер Microsoft OLE DB Provider
 for Analysis Services 10.0.


См. также:


[IAdoMdCatalog](IAdoMdCatalog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
