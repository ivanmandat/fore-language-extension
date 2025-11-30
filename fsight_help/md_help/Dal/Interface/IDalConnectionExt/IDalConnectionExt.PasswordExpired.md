# IDalConnectionExt.PasswordExpired

IDalConnectionExt.PasswordExpired
-


# IDalConnectionExt.PasswordExpired


## Синтаксис


PasswordExpired: Boolean;


## Описание


Свойство PasswordExpired возвращает истек ли срок действия пароля пользователя.


## Комментарии


Допустимые значения:


	- True. Срок действия
	 пароля истек. Для изменения пароля вместо методов [IDalConnection](../IDalConnection/IDalConnection.htm)
	 используйте метод [IDalConnectionExt.ChangeExpiredPassword](IDalConnectionExt.ChangeExpiredPassword.htm);


	- False. Пароль действителен.


## Пример


Для выполнения примера предполагается наличие схемы «Warehouse», расположенной
 на сервере «Test», и пользователя с заданными именем и паролем.


Добавьте ссылки на системные сборки: Dal, Metabase,


			Sub UserProc;

Var

    MB: IMetabase;

    Driv: IDalDriver;

    ConnectDesc: IDalConnectionDescriptor;

    ConnectDescParams: IDalConnectionDescriptorParams;

    connection_ext: IDalConnectionExt;

    connection_ext_desc: IDalConnectionDescriptorExt;

    dal_con: IDalConnection;

Begin

    MB := MetabaseClass.Active;

    Driv := New DalOrcl8Driver.Create;

    ConnectDesc := Driv.CreateDescriptor;

    ConnectDescParams := ConnectDesc.Params;

    ConnectDescParams.Find("User Name").Value := "test";

    ConnectDescParams.Find("Password").Value := "test";

    ConnectDescParams.Find("Host BSTR").Value := "test";

    ConnectDescParams.Find("Schema").Value := "Warehouse";

    connection_ext_desc := ConnectDesc As IDalConnectionDescriptorExt;

    dal_con := connection_ext_desc.CreateConnectionExt(True);

    connection_ext := dal_con As IDalConnectionExt;

    If connection_ext.PasswordExpired Then

        connection_ext.ChangeExpiredPassword("Password_1");

    End If;

End Sub UserProc;


После выполнения примера будет создано подключение к БД. В случае, если
 срок действия пароля пользователя истек, то он будет изменен.


См. также:


[IDalConnectionExt](IDalConnectionExt.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
