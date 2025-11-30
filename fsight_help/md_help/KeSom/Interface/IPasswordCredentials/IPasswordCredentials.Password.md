# IPasswordCredentials.Password

IPasswordCredentials.Password
-


# IPasswordCredentials.Password


## Синтаксис


Password: String;


## Описание


Свойство Password определяет
 пароль пользователя, под которым будет осуществлено подключение.


## Комментарии


Свойство доступно только на запись.


## Пример


Для выполнения примера на форме должны быть расположены EditBox1 и EditBox2
 типа EditBox. В схеме должна быть таблица с идентификатором Table. Пользователь, под
 которым осуществляется подключение, должен быть добавлен в список пользователей
 репозитория и иметь привилегии «Вход в систему» и «Право чтения и открытия
 всех объектов».


Добавьте ссылки на системные сборки: Db, Metabase.


	Sub UserProc;

	Var

	    MbDef: IMetabaseDefinition;

	    Package: ISecurityPackage;

	    PC: IPasswordCredentials;

	    Mb: IMetabase;

	    MbManager: IMetabaseManager;

	    Table: ITable;

	    Field: ITableField;

	Begin

	    Mb := Null;

	    MbManager := MetabaseManagerFactory.Active;

	    MbDef := MbManager.Definitions.FindById("Warehouse");

	    Debug.AssertMsg(MbDef <> Null, "Описание метабазы не найдено");

	    Package := MbManager.Packs.FindById(MbDef.SecurityPackage).Package;

	    PC := Package.CreateCredentials(AuthenticationMode.Password) As IPasswordCredentials;

	    PC.UserName := EditBox1.Text;

	    PC.Password := EditBox2.Text;

	    Mb := MbDef.Open(PC, ApplicationMode.Win, LocaleCodeID.Russian);

	    WinApplication.InformationBox("Подключение осуществлено");

	    Table := Mb.ItemById("Table").Bind As ITable;

	    For Each Field In Table.Fields Do

	        Debug.WriteLine(Field.Name);

	    End For;

	End Sub UserProc


При указании верного пароля и имени пользователя будет осуществлено
 подключение к схеме Warehouse, будет выдано сообщение об этом. В окно
 консоли будут выведены наименования полей таблицы.


См. также:


[IPasswordCredentials](IPasswordCredentials.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
