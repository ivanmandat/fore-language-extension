# IUserEmails.Add

IUserEmails.Add
-


# IUserEmails.Add


## Синтаксис


Add(Name: String; Email: String): [IUserEmail](../IUserEmail/IUserEmail.htm);


## Параметры


Name. Наименование создаваемой записи.


Email. Значение адреса.


## Описание


Метод Add добавляет в коллекцию запись о пользовательской электронной почте и возвращает ее параметры.


## Комментарии


Наименование записи должно быть уникальным. Если при выполнении метода в качестве значения параметра Name указано наименование существующей записи, то генерируется исключительная ситуация.


## Пример


			Sub UserProc;

Var

    Mb: IMetabase;

    User: IMetabaseUser;

    Prof: IUserProfile;

    Email: IUserEmail;

Begin

    Mb := MetabaseClass.Active;

    User := Mb.LogonSession.User;

    Prof := User.Profile.Edit;

    Email := Prof.Emails.Add("Default", "user_mail@example.ru");

    Email.SetDefault;

    Prof.Apply;

End Sub UserProc;


При выполнении примера будет изменен профиль пользователя, под которым осуществлен вход в репозиторий. В профиле будет добавлена запись с адресом пользовательской электронной почтой. Данный адрес будет назначен в качестве адреса по умолчанию для пользователя.


См. также:


[IUserEmails](IUserEmails.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
