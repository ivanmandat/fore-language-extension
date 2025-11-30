# ICredentials.UserDescription

ICredentials.UserDescription
-


# ICredentials.UserDescription


## Синтаксис


UserDescription: String;


## Описание


Свойство UserDescription определяет
 полное имя пользователя для занесения в протокол доступа.


## Комментарии


Полное имя пользователя используется в маркировке документов при печати
 или экспорте, если используется мандатный доступ.


## Пример


Для выполнения примера в репозитории должен использоваться мандатный
 доступ. В схеме должен быть регламентный отчёт с идентификатором «Test»,
 для которого установленный уровень доступа должен совпадать с уровнем
 доступа для пользователя «UserTest», под которым осуществляется подключение
 к репозиторию. У пользователя «UserTest» администратором должен
 быть добавлен сертификат "1a2b3c4d5e6f". Для уровня доступа
 включена маркировка документов при экспорте и печати. На форме должна
 быть расположена кнопка, компонент DocumentPrinter и UiReport. Для кнопки
 должно быть описано событие OnClick, для формы - OnCreate.


			Class TestForm: Form

    Button1: Button;

    UiReport1: UiReport;

    DocumentPrinter1: DocumentPrinter;

    MB: IMetabase;


    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

    Var

        logses: ILogonSession;

        dp: IDocumentPrinter;

    Begin

        logses := Mb.LogonSession;

        Debug.WriteLine("UserOS: " + logses.UserOS + " UserDescription: " + logses.UserDescription);

        UiReport1.Instance := Mb.ItemById("Test").OpenWithParam(Null);

        dp := New DocumentPrinter.Create;

        dp.Source := uireport1 As IDocumentSource;

        dp.PrintPreview;

    End Sub Button1OnClick;


    Sub TestFormOnCreate(Sender: Object; Args: IEventArgs);

    Var

        MbManager: IMetabaseManager;

        MbDef: IMetabaseDefinition;

        Credentials: IPasswordCredentials;

        Package: ISecurityPackage;

    Begin

        Mb := Null;

        MbManager := MetabaseManagerFactory.Active;

        MbDef := MbManager.Definitions.FindById("test");

        Debug.AssertMsg(MbDef <> Null, "Описание метабазы не найдено");

        Package := MbManager.Packs.FindById(MbDef.SecurityPackage).Package;

        Credentials := Package.CreateCredentials(AuthenticationMode.Password) As IPasswordCredentials;

        Credentials.UserOS := "MyUserOS";

        Credentials.UseUserOSForDocumentLabels := True;

        Credentials.UserDescription := "MyDescription";

        Credentials.UserName := "UserTest";

        Credentials.Password := "UserTest";

        Credentials.UserCertificate := "1a2b3c4d5e6f";

        mb := MbDef.Open(Credentials);

    End Sub TestFormOnCreate;


End Class TestForm;


При нажатии кнопки в окно консоли будет выведено имя пользователя ОС
 и полное имя пользователя текущей сессии, затем открыт на предпросмотр
 регламентный отчёт. В маркировке отчёта будет отображено заданное имя
 пользователя ОС (UserOS) и полное имя (UserDescription). Если свойство
 UseUserOSForDocumentLabels установить в False, то в маркировке документа
 будет указана информация о пользователе, под которым осуществлялось соединение
 (UserTest).


См. также:


[ICredentials](ICredentials.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
