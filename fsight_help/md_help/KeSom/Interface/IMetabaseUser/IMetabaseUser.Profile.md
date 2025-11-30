# IMetabaseUser.Profile

IMetabaseUser.Profile
-


# IMetabaseUser.Profile


## Синтаксис


Profile: [IUserProfile](../IUserProfile/IUserProfile.htm);


## Описание


Свойство Profile возвращает профиль пользователя.


## Комментарии


Профиль содержит информацию об адресах электронной почты, которые соответствуют данному пользователю, а также любые дополнительные свойства пользователя. Для редактирования профиля пользователь должен обладать правами администратора.


## Пример


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

    //Адрес по умолчанию
    Prof.Email := "user_work@example.ru";

    Emails := Prof.Emails;

    //Мобильный, рабочий и домашний адреса
    Emails.Mobile := "user_mobile@example.ru";

    Emails.Working := "user_work@example.ru";

    Emails.Personal := "user_personal@example.ru";

    //Применить изменения профиля
    Prof.Apply;

End Sub UserProc;


При выполнении примера в профиле пользователя, под которым осуществлена авторизация при входе в репозиторий, будут изменены электронные почтовые адреса.


См. также:


[IMetabaseUser](IMetabaseUser.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
