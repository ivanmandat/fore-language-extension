# IMetabaseDefinition.Open

IMetabaseDefinition.Open
-


# IMetabaseDefinition.Open


## Синтаксис


Open(Credentials: [ICredentials](../ICredentials/ICredentials.htm);
 [Mode: [ApplicationMode](ForeSys.chm::/Enums/ApplicationMode.htm)
 = 0]; [CurrentLocale: [LocaleCodeID](ForeSys.chm::/Enums/LocaleCodeID.htm)
 = 0]): [IMetabase](../IMetabase/IMetabase.htm);


## Параметры


Credentials. Учётные
 данные, используемые при подключении;


Mode. Необязательный параметр, определяющий режим
 подключения к репозиторию;


CurrentLocale. Необязательный параметр, определяющий язык
 репозитория, используемый при подключении.


## Описание


Метод Open осуществляет подключение
 к репозиторию в соответствии с указанными параметрами.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки и компонента MetabaseTreeList с наименованием MetabaseTreeList1.
 В настройках подключений платформы имеется описание репозитория Test.
 При подключении к нему будут использоваться имя пользователя и пароль
 Test.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    MB: IMetabase;

	    MAN: IMetabaseManager;

	    Def: IMetabaseDefinition;

	    PwdCred: IPasswordCredentials;

	Begin

	    MB := MetabaseClass.Active;

	    MAN := MB.Definition.Manager;

	    PwdCred := MAN.Packs.Item(0).Package.CreateCredentials(AuthenticationMode.Password) As IPasswordCredentials;

	    Def := MAN.Definitions.FindById("Test");

	    PwdCred.UserName := "Test";

	    PwdCred.Password := "Test";

	    MB := Def.Open(PwdCred, ApplicationMode.Win, LocaleCodeID.English_UnitedStates);

	    MetabaseTreeList1.Root := MB.Root;

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку в качестве корневого
 каталога для компонента MetabaseTreeList1 будет установлена корневая папка
 указанного репозитория. Язык репозитория будет установлен английский (США).


См. также:


[IMetabaseDefinition](IMetabaseDefinition.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
