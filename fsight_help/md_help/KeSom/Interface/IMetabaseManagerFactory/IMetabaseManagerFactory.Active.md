# IMetabaseManagerFactory.Active

IMetabaseManagerFactory.Active
-


# IMetabaseManagerFactory.Active


## Синтаксис


Active: [IMetabaseManager](../IMetabaseManager/IMetabaseManager.htm);


## Описание


Свойство Active возвращает параметры
 менеджера репозиториев активного репозитория.


## Пример


	Sub Main;

	Var

	    Man: IMetabaseManager;

	    Defs: IMetabaseDefinitions;

	    Def: IMetabaseDefinition;

	Begin

	    Man := MetabaseManagerFactory.Active;

	    Defs := Man.Definitions;

	    Def := Defs.Add;

	    Def.Id := "TestDefinition";

	    Def.Name := "TestDefinition";

	    Def.Authentication := AuthenticationMode.Password;

	    Def.DriverId := "ORCL8";

	    Def.SecurityPackage := "STANDARDSECURITYPACKAGE";

	    Def.LogonData.ParamValue("SERVER") := "Test";

	    Def.LogonData.ParamValue("SCHEME") := "TestShema";

	    Def.Scope := MetabaseDefinitionScope.LocalMachine;

	    Def.Save;

	End Sub Main;


После выполнения примера будет создано новое описание репозитория. Данные
 репозитория будут храниться на сервере Test в схеме TestShema. При подключении
 будет использоваться парольная аутентификация, тип СУБД, установленной
 на сервере - Oracle 9.x или выше. Данное описание будет доступно всем
 пользователям операционной системы.


См. также:


[IMetabaseManagerFactory](IMetabaseManagerFactory.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
