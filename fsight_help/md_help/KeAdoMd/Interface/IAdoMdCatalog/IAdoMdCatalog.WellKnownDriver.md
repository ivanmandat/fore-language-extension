# IAdoMdCatalog.WellKnownDriver

IAdoMdCatalog.WellKnownDriver
-


# IAdoMdCatalog.WellKnownDriver


## Синтаксис


WellKnownDriver: [AdoMdWellKnownDriverType](../../Enums/AdoMdWellKnownDriverType.htm);


## Описание


Свойство WellKnownDriver определяет
 драйвер, используемый при открытии каталога ADOMD.


## Комментарии


Если свойству WellKnownDriver
 установлено значение [AdoMdWellKnownDriverType.None](../../Enums/AdoMdWellKnownDriverType.htm),
 то необходимо определить значение свойство [Driver](IAdoMdCatalog.Driver.htm).


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

    CrInfo.Id := "SAP_TEST";

    CrInfo.Name := "Каталог на базе SAP
 NetWeaver BW";

    CrInfo.Parent := MB.Root;

    CatAdo := MB.CreateObject(CrInfo).Edit As IAdoMdCatalog;

    CatAdo.WellKnownDriver := AdoMdWellKnownDriverType.SAP;

    CatAdo.Server := "Sap_test";

    CatAdo.Name := "$TEST_CUBE";

    CatAdo.ProviderString := "SFC_CLIENT=001";

    CatAdo.LoginPrompt := True;

    (CatAdo As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера в корневом каталоге репозитория будет создан
 новый каталог ADOMD. Данный каталог будет настроен на подключение к базе
 данных "$TEST_CUBE" расположенной на сервере "Sap_test".
 При подключении будет использоваться драйвер SAP NetWeaver BW. Клиент,
 под которым осуществляется подключение - "001". При открытии
 каталога будет выводиться диалог ввода учетных данных.


См. также:


[IAdoMdCatalog](IAdoMdCatalog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
