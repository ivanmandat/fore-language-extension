# Создание источника данных ODBC

Создание источника данных ODBC
-


# Создание источника данных ODBC


Для выполнения примера предполагается наличие базы данных MS ACCESS с наименованием "db1.mdb". В данной БД имеется таблица с наименованием "Instruction".


	Sub UserProc;

	Var

	    MB: IMetabase;

	    CrInfo: IMetabaseObjectCreateInfo;

	    ODBC: IOdbcDataset;

	Begin

	    MB := MetabaseClass.Active;

	    CrInfo := MB.CreateCreateInfo;

	    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_ODBC_DS;

	    CrInfo.Id := "NewODBCDataset";

	    CrInfo.Name := "Новый источник данных ODBC";

	    CrInfo.Parent := MB.Root;

	    ODBC := MB.CreateObject(CrInfo).Edit As IOdbcDataset;

	    ODBC.Catalog := "C:\db1.mdb";

	    ODBC.DataSource := "База данных MS Access";

	    ODBC.DataSourceName := "Instruction";

	    (ODBC As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера в корневом каталоге репозитория будет создан новый источник данных ODBC. Данный источник будет настроен на доступ к данным таблицы "Instruction", содержащейся в базе данных MS ACCESS.


См.также:


[Примеры](KeDb_Sample.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
