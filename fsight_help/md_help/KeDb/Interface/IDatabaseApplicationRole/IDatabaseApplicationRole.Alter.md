# IDatabaseApplicationRole.Alter

IDatabaseApplicationRole.Alter
-


# IDatabaseApplicationRole.Alter


## Синтаксис


Alter;


## Описание


Метод Alter обновляет роль в соответствии с заданными настройками.


## Комментарии


Данный метод автоматически вызывается при сохранении объекта, если были изменены параметры роли. Параметры роли определяются свойствами [DerivedPassword](IDatabaseApplicationRole.DerivedPassword.htm), [Mode](IDatabaseApplicationRole.Mode.htm), [Name](IDatabaseApplicationRole.Name.htm), [Password](IDatabaseApplicationRole.Password.htm).


## Пример


Для выполнения примера на форме должны быть расположены компоненты EditBox1 и EditBox2 типа EditBox. В схеме должна быть база данных с идентификатором DB, которая должна использовать тип клиента СУБД Microsoft SQL Server.


			    Sub Button2OnClick(Sender: Object; Args: IMouseEventArgs);

    Var

        MB: IMetabase;

        DbObj: IMetabaseObject;

        Db: IDatabase;

        Role: IDatabaseApplicationRole;

    Begin

        MB := MetabaseClass.Active;

        DbObj := MB.ItemById("DB").Edit;

        Db := DbObj As iDatabase;

        Role := Db.Role;

        Role.Mode := DatabaseApplicationRoleMode.On_;

        Role.DerivedPassword := True;

        Role.Name := EditBox1.Text;

        Role.Password := EditBox2.Text;

        Role.Alter;

        DbObj.Save;

    End Sub Button2OnClick;


После выполнения примера будет включено использование роли приложения и заданы для нее учетные данные.


См. также:


[IDatabaseApplicationRole.Mode](IDatabaseApplicationRole.Mode.htm) | [IDatabaseApplicationRole](IDatabaseApplicationRole.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
