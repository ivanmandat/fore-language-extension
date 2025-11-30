# ICredentials.UserStation

ICredentials.UserStation
-


# ICredentials.UserStation


## Синтаксис


UserStation: String;


## Описание


Свойство UserStation определяет
 название рабочей станции пользователя для занесения в протокол доступа.


## Комментарии


Название задается в виде: домен\рабочая_станция. Если при задании учетных
 данных данному свойству установлено непустое значение, то для проверки
 блокировки рабочей станции и для занесения в протокол доступа будет использоваться
 заданное значение, иначе используется имя рабочей станции, где запущен
 процесс.


## Пример


Для выполнения примера на форме должны быть расположены EditBox1 и EditBox2
 типа EditBox. В схеме должна быть таблица с идентификатором Table. Пользователь,
 под которым осуществляется подключение, должен быть добавлен в список
 пользователей репозитория и иметь привилегии «Вход в систему» и «Право
 чтения и открытия всех объектов».


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

	    MbManager := MetabaseManagerFactory.Active;

	    MbDef := MbManager.Definitions.FindById("Warehouse");

	    Debug.AssertMsg(MbDef <> Null, "Описание метабазы не найдено");

	    Package := MbManager.Packs.FindById(MbDef.SecurityPackage).Package;

	    PC := Package.CreateCredentials(AuthenticationMode.Password) As IPasswordCredentials;

	    PC.UserName := EditBox1.Text;

	    PC.Password := EditBox2.Text;

	    PC.UserStation := "WORK\PCTest";

	    Mb := MbDef.Open(PC, ApplicationMode.Win, LocaleCodeID.Russian);

	    Debug.WriteLine("Подключение осуществлено");

	    Table := Mb.ItemById("Table").Bind As ITable;

	    For Each Field In Table.Fields Do

	        Debug.WriteLine(Field.Name);

	    End For;

	End Sub UserProc;


При указании верного пароля и имени пользователя будет осуществлено
 подключение к указанному репозиторию, если указанное название станции
 является разрешенной рабочей станцией для пользователя. Об успешном подключении
 будет выдано сообщение. В окно консоли будут выведены наименования полей
 таблицы.


См. также:


[ICredentials](ICredentials.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
