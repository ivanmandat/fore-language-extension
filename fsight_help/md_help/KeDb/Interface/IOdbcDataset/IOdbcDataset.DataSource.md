# IOdbcDataset.DataSource

IOdbcDataset.DataSource
-


# IOdbcDataset.DataSource


## Синтаксис


DataSource: String;


## Описание


Свойство DataSource определяет тип источника ODBC.


## Пример


Для выполнения примера предполагается наличие файла "c:\Data.xls" .


	Sub UserProc;

	Var

	    MB: IMetabase;

	    CrInfo: IMetabaseObjectCreateInfo;

	    ODBC: IOdbcDataset;

	    MObj: IMetabaseObject;

	Begin

	    MB := MetabaseClass.Active;

	    CrInfo := MB.CreateCreateInfo;

	    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_ODBC_DS;

	    CrInfo.Id := "NewODBC";

	    CrInfo.Name := " Новый источник данных ODBC";

	    CrInfo.Parent := MB.Root;

	    MObj := MB.CreateObject(CrInfo).Edit;

	    ODBC := MObj As IOdbcDataset;

	    ODBC.Catalog := "c:\Data.xls";

	    ODBC.DataSource := "Файлы Excel";

	    ODBC.DataSourceName := "[Лист1$]";

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в корневом каталоге репозитория будет создан новый источник данных ODBC. Данный источник данных будет осуществлять доступ к файлу Excel "Data.xls".


См.также:


[IOdbcDataset](IOdbcDataset.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
