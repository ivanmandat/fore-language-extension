# IMetabaseSecurity.HashPassword

IMetabaseSecurity.HashPassword
-


# IMetabaseSecurity.HashPassword


## Синтаксис


HashPassword(Password:
 String): String;


## Параметры


Password. Пароль, который должен
 быть хеширован.


## Описание


Метод HashPassword осуществляет
 хеширование пароля.


## Пример


Для выполнения примера разместите на форме компоненты [Button](UiDevEnv.chm::/02_Components_constructor_forms/01_Standart_Components/Button.htm),
 [EditBox](UiDevEnv.chm::/02_Components_constructor_forms/01_Standart_Components/EditBox.htm),
 [Memo](UiDevEnv.chm::/02_Components_constructor_forms/01_Standart_Components/Memo.htm)
 с наименованиями «Button1», «EditBox1», «Memo1» соответственно.


Добавьте системные сборки: Metabase, Collections, Forms.


Пример является обработчиком события OnClick для компонента «Button1».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    MB: IMetabase;

    MS: IMetabaseSecurity;

    User: IMetabaseUser;

    HashP: String;

    MbPassHistory: IPasswordHistory;

    Lic: Object;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := Mb.RequestLicense(UiLicenseFeatureType.Adm);

    MS := MB.Security;

    // Получим параметры пользователя ADMIN

    User := MS.ResolveName("ADMIN") As IMetabaseUser;

    HashP := MS.HashPassword(EditBox1.Text);

    MbPassHistory := User.PasswordHistory;

    // Добавим заданный пароль в историю

    If MbPassHistory.Contains(HashP) Then

        Memo1.Lines.Add("Пароль '" + EditBox1.Text + "' уже содержится в истории");

        Else MbPassHistory.Insert(HashP);

            Memo1.Lines.Add("Пароль '" + EditBox1.Text + "' добавлен в историю");

    End If;

    // Сохраним изменения

    MS.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub Button1OnClick;


После выполнения примера в компоненте Memo будет выведен результат проверки
 заданного пароля в компоненте EditBox:


	- если пароль не содержится в истории паролей, то он будет добавлен
	 в неё;


	- если пароль содержится в истории паролей, то будет выдано соответствующее
	 сообщение.


См. также:


[IMetabaseSecurity](IMetabaseSecurity.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
