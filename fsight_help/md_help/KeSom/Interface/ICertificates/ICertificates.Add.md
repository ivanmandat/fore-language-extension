# ICertificates.Add

ICertificates.Add
-


# ICertificates.Add


## Синтаксис


Add(Id: String): [ICertificate](../ICertificate/ICertificate.htm);


## Параметры


Id. Идентификатор, который
 будет присвоен сертификату.


## Описание


Метод Add добавляет сертификат
 в коллекцию и возвращает его параметры.


## Пример


Для выполнения примера добавьте сертификат безопасности в файл C:\Certificates\sp.pem.


Добавьте ссылки на системные сборки: Metabase, IO.


			Sub UserProc;

Var

    MB: IMetabase;

    MS: IMetabaseSecurity;

    Certs: ICertificates;

    Cert: ICertificate;

    FStream: IFileStream;

    Lic: Object;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MS := MB.Security;

    Certs := MS.Policy.Certificates;

    // Добавим сертификат

    Cert := Certs.Add("sp");

    // Загрузим сертификат из файла

    FStream := New FileStream.Create("C:\Certificates\sp.pem", FileOpenMode.Read, FileShare.DenyNone);

    Cert.SetData(FStream);

    // Сохраним изменения

    MS.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера в базу репозитория будет добавлен сертификат
 безопасности. Содержимое сертификата будет загружено из указанного файла.


См. также:


[ICertificates](ICertificates.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
