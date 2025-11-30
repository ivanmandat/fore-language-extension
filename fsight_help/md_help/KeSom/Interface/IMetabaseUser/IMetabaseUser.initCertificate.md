# IMetabaseUser.InitCertificate

IMetabaseUser.InitCertificate
-


# IMetabaseUser.InitCertificate


## Синтаксис


InitCertificate(StorageType: [CertificateStorageType](../../Enums/CertificateStorageType.htm));


## Описание


Метод InitCertificate получает
 сертификат из хранилища, извлекает слепок и присваивает полученное значение
 в [IMetabaseUser.Certificate](IMetabaseUser.Certificate.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    MS: IMetabaseSecurity;

    User: IMetabaseUser;

    Lic: Object;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MS := MB.Security;

    // Добавим сертификат из файла
 и присвоим слепок сертификата пользователю ADMIN

    User := MS.ResolveName("ADMIN") As IMetabaseUser;

    User.InitCertificate(CertificateStorageType.File);

    // Сохраним изменения

    MS.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера пользователю ADMIN будет присвоен слепок сертификата
 из выбранного файла.


См. также:


[IMetabaseUser](IMetabaseUser.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
