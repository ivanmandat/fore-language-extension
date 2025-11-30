# IDomainCredentials.Domain

IDomainCredentials.Domain
-


# IDomainCredentials.Domain


## Синтаксис


Domain: String;


## Описание


Свойство Domain определяет наименование
 домена.


## Пример


Для выполнения примера на форме должны быть расположены EditBox1 и EditBox2
 типа EditBox. В схеме должна быть таблица с идентификатором Table. Доменный
 пользователь, под которым осуществляется подключение, должен быть
 добавлен в список пользователей репозитория и иметь привилегии «Вход в
 систему» и «Право чтения и открытия всех объектов».


	Sub UserProc;

	Var

	    MbManager: IMetabaseManager;

	    MbDef: IMetabaseDefinition;

	    Package: ISecurityPackage;

	    DC: IDomainCredentials;

	    Mb: IMetabase;

	    Table: ITable;

	    Field: ITableField;

	Begin

	    MbManager := MetabaseManagerFactory.Active;

	    MbDef := MbManager.Definitions.FindById("Warehouse");

	    Debug.AssertMsg(MbDef <> Null, "Описание метабазы не найдено");

	    Package := MbManager.Packs.FindById(MbDef.SecurityPackage).Package;

	    DC := Package.CreateCredentials(AuthenticationMode.Domain) As IDomainCredentials;

	    DC.LogonAsCurrentUser := False;

	    DC.Domain := "DOMAIN";

	    DC.UserName := EditBox1.Text;

	    DC.Password := EditBox2.Text;

	    Mb := MbDef.Open(DC, ApplicationMode.Win, LocaleCodeID.Russian);

	    Debug.WriteLine("Подключение
	 осуществлено");

	    Table := Mb.ItemById("Table").Bind As ITable;

	    For Each Field In Table.Fields Do

	        Debug.WriteLine(Field.Name);

	    End For;

	End Sub UserProc;


При указании верного пароля и имени пользователя будет осуществлено
 подключение к указанному репозиторию, будет выдано сообщение об этом.
 В окно консоли будут выведены наименования полей таблицы.


См. также:


[IDomainCredentials](IDomainCredentials.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
