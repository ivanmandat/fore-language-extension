# IPrimaryOracleSPLD.Scheme

IPrimaryOracleSPLD.Scheme
-


# IPrimaryOracleSPLD.Scheme


## Синтаксис


Scheme: String;


## Описание


Свойство Scheme определяет наименование
 схемы на сервере Oracle.


## Пример


	Sub UserProc;

	Var

	    MbMan: IMetabaseManager;

	    MbDefs: IMetabaseDefinitions;

	    MbDef: IMetabaseDefinition;

	    OracleSPLD: IPrimaryOracleSPLD;

	Begin

	    MbMan := MetabaseManagerFactory.Active;

	    MbDefs := MbMan.Definitions;

	    MbDef := MbDefs.Add;

	    MbDef.Id := "Test_Oracle";

	    MbDef.Name := "Test_Oracle";

	    MbDef.DriverId := "ORCL8";

	    MbDef.SecurityPackage := "STANDARDSECURITYPACKAGE";

	    OracleSPLD := MbDef.LogonData As IPrimaryOracleSPLD;

	    OracleSPLD.Server := "Test_ORCL";

	    OracleSPLD.Scheme := "Test_SCHEMA_ORCL";

	    OracleSPLD.OsAuthentPrefix := "TEMP_";

	    MbDef.Save;

	End Sub UserProc;


После выполнения примера будет создано новое описание репозитория. Схема,
 к которой будет осуществляться подключение, расположена на сервере Test_ORCL.
 На сервере используются СУБД "Oracle 9". Для данного описания
 будет установлен префикс, используемый при создании доменных пользователей
 в менеджере безопасности репозитория.


См. также:


[IPrimaryOracleSPLD](IPrimaryOracleSPLD.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
