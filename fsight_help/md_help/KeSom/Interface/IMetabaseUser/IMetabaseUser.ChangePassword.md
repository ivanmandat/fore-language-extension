# IMetabaseUser.ChangePassword

IMetabaseUser.ChangePassword
-


# IMetabaseUser.ChangePassword


## Синтаксис


ChangePassword(OldPassword:
 String, NewPassword: String);


## Параметры


OldPassword. Старый пароль;


NewPassword. Новый пароль.


## Описание


Метод ChangePassword изменяет
 пароль пользователя.


## Комментарии


Изменять пароль другого пользователя может пользователь, обладающий
 привилегией «Изменение прав пользователей, раздача паролей, изменение
 политики». По умолчанию данной привилегией обладает ADMIN. Если производится
 изменение пароля другому пользователю, то необходимо в качестве OldPassword передать пустое значение.
 Если новый пароль не удовлетворяет установленной политике безопасности,
 будет сгенерирована исключительная ситуация. В зависимости от настроек
 парольной политики старый пароль пользователя может быть использован для
 ведения парольной истории. Нельзя изменить пароль доменному пользователю.
 При изменении пароля для пользователя, подключаемого с сервера, будет
 выдано окно авторизации на сервере.


## Пример


Для выполнения примера разместите на форме компонент Button и EditBox
 с наименованиями «Button1», «EditBox1». Убедитесь, что в менеджере безопасности
 содержится пользователь USER и подключение к репозиторию осуществляется
 из под учетной записи администратора.


Добавьте ссылки на системные сборки: Metabase, Forms, Ui.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    MB: IMetabase;

    User: IMetabaseUser;

    MS: IMetabaseSecurity;

    Lic: Object;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MS := MB.Security;

    // Изменим пароль пользователя USER

    User := MS.ResolveName("USER") As IMetabaseUser;

    Try

        User.ChangePassword("",EditBox1.Text);

    Except

        On E: Exception Do

        WinApplication.InformationBox(E.message);

    End Try;

    // Сохраним изменения

    MS.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub Button1OnClick;


После нажатия на кнопку будет изменен пароль пользователя USER на новый
 пароль, заданный в компоненте EditBox1. Если новый пароль не удовлетворяет
 требованиям политики безопасности, будет выдано соответствующее сообщение.


См. также:


[IMetabaseUser](IMetabaseUser.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
