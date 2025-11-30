# IDatabaseApplicationRole.DerivedPassword

IDatabaseApplicationRole.DerivedPassword
-


# IDatabaseApplicationRole.DerivedPassword


## Синтаксис


DerivedPassword: Boolean;


## Описание


Свойство DerivedPassword определяет использование производного пароля при создании подключения к базе данных.


## Комментарии


При значении True пароль будет шифроваться, при значении False – нет. По умолчанию свойство имеет значение True.


## Пример


Для выполнения примера на форме должны быть расположены EditBox1 и EditBox2 типа EditBox. В схеме должна быть база данных с идентификатором DB, которая должна использовать СУБД типа Microsoft SQL Server.


	Sub UserProc;

	Var

	    MB : IMetabase;

	    DbObj: IMetabaseObject;

	    Db : IDatabase;

	    Role : IDatabaseApplicationRole;

	Begin

	    MB := MetabaseClass.Active;

	    DbObj := MB.ItemById("DB").Edit;

	    Db := DbObj As iDatabase;

	    Role := Db.Role;

	    If Role.Mode=DatabaseApplicationRoleMode.Off Then

	        Role.Mode := DatabaseApplicationRoleMode.On_;

	        Role.DerivedPassword := False;

	    End If;

	    DbObj.Save;

	End Sub UserProc;


После выполнения примера будет включено использование роли приложения, пароль роли при подключении к БД шифроваться не будет.


См. также:


[IDatabaseApplicationRole](IDatabaseApplicationRole.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
