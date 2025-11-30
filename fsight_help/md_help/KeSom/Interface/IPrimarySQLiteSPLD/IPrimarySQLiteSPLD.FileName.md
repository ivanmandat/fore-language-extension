# IPrimarySQLiteSPLD.FileName

IPrimarySQLiteSPLD.FileName
-


# IPrimarySQLiteSPLD.FileName


## Синтаксис


FileName: String;


## Описание


Свойство FileName определяет
 путь и наименование файла, в котором хранятся данные репозитория.


## Пример


Для выполнения примера подключите системную сборку Metabase.


			Sub UserProc;

Var

    MbMan: IMetabaseManager;

    MbDefs: IMetabaseDefinitions;

    MbDef: IMetabaseDefinition;

    SQLiteSPLD: IPrimarySQLiteSPLD;

Begin

    MbMan := MetabaseManagerFactory.Active;

    MbDefs := MbMan.Definitions;

    MbDef := MbDefs.Add;

    MbDef.DriverId := "SQLITE";

    MbDef.Id := "SQLITE_REPO";

    MbDef.Name := "SQLITE_REPO";

    MbDef.SecurityPackage := "STANDARDSECURITYPACKAGE";

    SQLiteSPLD := MbDef.LogonData As IPrimarySQLiteSPLD;

    SQLiteSPLD.FileName := "C:\Work\sqlite_repo";

    MbDef.Save;

End Sub UserProc;


После выполнения примера будет создано новое описание репозитория. Репозиторий,
 к которому будет осуществляться подключение, создан на базе СУБД SQLite
 и располагается в указанном локальном файле.


См. также:


[IPrimarySQLiteSPLD](IPrimarySQLiteSPLD.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
