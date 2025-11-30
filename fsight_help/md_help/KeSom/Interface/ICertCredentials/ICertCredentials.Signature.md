# ICertCredentials.Signature

ICertCredentials.Signature
-


# ICertCredentials.Signature


## Синтаксис


Signature: String;


## Описание


Свойство Signature определяет
 блок данных, подписанный цифровой подписью.


## Комментарии


Сертификат, который используется для проверки цифровой подписи, должен
 быть сохранён вместе с [описанием
 репозитория](../IMetabaseDefinition/IMetabaseDefinition.htm), к которому осуществляется подключение. Для сохранения
 сертификата используется приложение [PP.Util](Setup.chm::/05_RepoMngr/Service_Applications/PP_Util.htm),
 входящее в состав «Форсайт. Аналитическая платформа».


## Пример


Для выполнения указанного примера необходимо иметь файл с закрытым ключом
 сертификата, который будет использоваться для задания цифровой подписи.
 Сам сертификат должен быть сохранен в репозитории, к которому осуществляется
 подключение.


			Function Connect(Repository: String; PrivateKeyPath: String): IMetabase;

Var

    MbDef: IMetabaseDefinition;

    Package: ISecurityPackage;

    Provider: ICertProvider;

    Cookie, Code, Signature: String;

    FStream: IFileStream;

    Signer: ICertSigner;

    CertCreds: ICertCredentials;

    Mb: IMetabase;

    MbManager: IMetabaseManager;

Begin

    MbManager := MetabaseManagerFactory.Active;

    MbDef := MbManager.Definitions.FindById(Repository);

    If MbDef <> Null Then

        Package := MbManager.Packs.FindById(MbDef.SecurityPackage).Package;

        //Поставщик сертификатов

        Provider := Package.CertProvider;

        Provider.NewCode(Cookie, Code);

        //Закрытый ключ

        FStream := New FileStream.Create(PrivateKeyPath, FileOpenMode.Read, FileShare.DenyNone);

        Signer := Provider.OpenSigner("sp", FStream);

        //Подписание блока данных цифровой подписью

        Signature := Signer.Sign(Code);

        //Учетные данные для подключения с помощью сертификата

        CertCreds := Package.CreateCredentials(AuthenticationMode.Certificate) As ICertCredentials;

        CertCreds.UserName := "test";

        CertCreds.RolesStr := "АДМИНИСТРАТОРЫ";

        CertCreds.Cookie := Cookie;

        CertCreds.Signature := Signature;

        CertCreds.Certificate := "sp";

        //Подключение

        Mb := MbDef.Open(CertCreds);

        If Mb <> Null Then

            Return Mb;

        Else

            Return Null;

        End If;

    Else

        Return Null;

    End If;

End Function Connect;


При выполнении указанной функции осуществляется проверка наличия описания
 репозитория, указанного в первом параметре. Если репозиторий существует,
 то осуществляется подключение к нему с использованием цифровой подписи.
 Для подписи цифровой подписью необходимо иметь закрытый ключ, путь к которому
 передается во втором параметре функции. При удачном подключении функция
 вернёт открытое соединение с репозиторием, иначе - Null.


См. также:


[ICertCredentials](ICertCredentials.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
