# ISQLCommand.Text

ISQLCommand.Text
-


# ISQLCommand.Text


## Синтаксис


Text(DriverName: String): String;


## Параметры


DriverName. Идентификатор
 драйвера СУБД.


## Описание


Свойство Text определяет текст
 SQL-запроса оператора команды СУБД для определенного драйвера СУБД. Идентификатор
 драйвера передается посредством параметра DriverName.


## Комментарии


Список идентификаторов, которые могут использоваться в качестве значения
 параметра DriverName, представлен
 в разделе «[Сводный
 список идентификаторов](Setup.chm::/06_AK_Client_Config/Configuring_repository_list_in_the_system_registry.htm#id)».


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    CrInfo: IMetabaseObjectCreateInfo;

	    MObj: IMetabaseObject;

	    SQLCom: ISQLCommand;

	Begin

	    MB := MetabaseClass.Active;

	    CrInfo := MB.CreateCreateInfo;

	    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_SQLCOMMAND;

	    CrInfo.Id := "NewSqlCommand";

	    CrInfo.Name := "Новая команда SQL";

	    CrInfo.Parent := MB.Root;

	    MObj := MB.CreateObject(CrInfo).Edit;

	    SQLCom := MObj As ISQLCommand;

	    SQLCom.Database := MB.ItemById("BD").Bind As IDatabase;

	    SQLCom.Text("ORCL8") := "Insert Into Table_1(Field1, Field2) Values(12, '12')";

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в корневом каталоге репозитория будет создана
 новая Команда СУБД. При выполнении данной команды в таблицу Table_1 будет
 вставляться одна новая запись.


См.также:


[ISQLCommand](ISQLCommand.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
