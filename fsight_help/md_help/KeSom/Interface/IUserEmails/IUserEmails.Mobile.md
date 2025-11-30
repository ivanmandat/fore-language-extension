# IUserEmails.Mobile

IUserEmails.Mobile
-


# IUserEmails.Mobile


## Синтаксис


Mobile: String;


## Описание


Свойство Mobile устанавливает мобильный электронный почтовый адрес.


## Комментарии


Мобильный электронный почтовый адрес устанавливается в окне «Личные данные».


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase. Добавим в профиль текущего пользователя репозитория адреса рабочей, персональной и мобильной электронной почты:


			Sub UserProc;

Var

    Mb: IMetabase;

    User: IMetabaseUser;

    Prof: IUserProfile;

    Emails: IUserEmails;


Begin

    Mb := MetabaseClass.Active;

    User := Mb.LogonSession.User;

    Prof := User.Profile.Edit;

    Emails := Prof.Emails;

    Emails.Mobile := "user_mobile@example.ru";

    Emails.Working := "user_work@example.ru";

    Emails.Personal := "user_personal@example.ru";

    Prof.Apply;

End Sub UserProc;


После выполнения примера в профиль текущего пользователя репозитория будут добавлены адреса рабочей, персональной и мобильной электронной почты.


См. также:


[IUserEmails](IUserEmails.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
