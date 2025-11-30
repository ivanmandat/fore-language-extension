# IDatabaseApplicationRole.Mode

IDatabaseApplicationRole.Mode
-


# IDatabaseApplicationRole.Mode


## Синтаксис


Mode: [DatabaseApplicationRoleMode](../../Enums/DatabaseApplicationRoleMode.htm);


## Описание


Свойство Mode определяет вариант применения роли приложения. По умолчанию роль приложения не используется (DatabaseApplicationRoleMode.Off).


## Пример


Для выполнения примера на форме должны быть расположены EditBox1 и EditBox2 типа EditBox. В схеме должна быть база данных с идентификатором DB, которая должна использовать тип клиента СУБД Microsoft SQL Server.


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

	        Role.Name := EditBox1.Text;

	        Role.Password := EditBox2.Text;

	    End If;

	    DbObj.Save;

	End Sub UserProc;


После выполнения примера будет включено использование роли приложения и заданы для нее учетные данные.


См. также:


[IDatabaseApplicationRole](IDatabaseApplicationRole.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
