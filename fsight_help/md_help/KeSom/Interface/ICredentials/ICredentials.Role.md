# ICredentials.Role

ICredentials.Role
-


# ICredentials.Role


## Синтаксис


Role: [IApplicationRole](../IApplicationRole/IApplicationRole.htm);


## Описание


Свойство Role
 определяет параметры роли приложения.


## Комментарии


Под ролью приложения понимается роль на уровне СУБД Microsoft SQL Server,
 у которой есть права на определенные действия. Использование роли приложения
 позволяет осуществить подключение к БД под учётными данными роли, далее
 под установленным соединением происходит выполнение действий. Использование
 роли доступно только для СУБД типа Microsoft SQL Server. Указанные при
 подключении учётные данные пользователя (имя, пароль) на использование
 роли приложения не влияют.


По умолчанию роль приложения не используется.


## Пример


Для выполнения примера на сервере СУБД должна быть создана роль MyRole,
 которая должна входить в роль базы данных db_owner. Скрипт для включения
 роли MyRole в роль базы данных db_owner: execute sp_addrolemember @rolename
 = 'db_owner', @membername = 'MyRole'. На форме располагается кнопка и
 два компонента EditBox с наименованиями EditBox1 и EditBox2.


	Sub Button1OnClick;

	Var

	    MbManager: IMetabaseManager;

	    Package: ISecurityPackage;

	    PC: IPasswordCredentials;

	    Role: IApplicationRole;

	    Connection: ISecurityConnection;

	    Command: IDalCommand;

	    SQL: string;

	    Ld: ISecurityPackageLogonData;

	Begin

	    MbManager := MetabaseManagerFactory.Active;

	    Package := MbManager.Packs.FindById("StandardSecurityPackage").Package;

	    PC := Package.CreateCredentials(AuthenticationMode.Password) As IPasswordCredentials;

	    PC.UserName := EditBox1.Text;

	    PC.Password := EditBox2.Text;

	    Role := PC.Role;

	    Role.Active := True;

	    Role.Name := "MyRole";

	    Role.Password := "MyRole";

	    Role.PasswordSalt := "";

	    Role.UseDerivedPassword := False;

	    Ld := Package.CreateLogonData("MSSQL2012");

	    Ld.ParamValue("SERVER") := "MSServer";

	    Ld.ParamValue("DATABASE") := "Warehouse";

	    Connection := Package.PerformLogon(True, LD, PC);

	    SQL := "create table NewTable(NAME varchar(127) Null, SIZE numeric(24,4) Null)";

	    Command := Connection.CreateCommand(SQL);

	    Command.Execute;

	End Sub Button1OnClick;


При нажатии на кнопку будет создана таблица под учётными данными указанной
 роли.


См. также:


[ICredentials](ICredentials.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
