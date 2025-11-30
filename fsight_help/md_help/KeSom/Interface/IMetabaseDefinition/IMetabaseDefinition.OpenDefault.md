# IMetabaseDefinition.OpenDefault

IMetabaseDefinition.OpenDefault
-


# IMetabaseDefinition.OpenDefault


## Синтаксис


OpenDefault(Credentials: [ICredentials](../ICredentials/ICredentials.htm)):
 [IMetabase](../IMetabase/IMetabase.htm);


## Параметры


Credentials. Учётные
 данные, используемые при подключении.


## Описание


Метод OpenDefault осуществляет
 подключение к репозиторию. При подключении будут использоваться настройки,
 установленные для репозитория по умолчанию.


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

	    MB := Def.OpenDefault(PwdCred);

	    MetabaseTreeList1.Root := MB.Root;

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку в качестве корневого
 каталога для компонента MetabaseTreeList1 будет установлена корневая папка
 указанного репозитория. При подключении для репозитория будут установлены
 настройки, сохранённые для него по умолчанию.


См. также:


[IMetabaseDefinition](IMetabaseDefinition.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
