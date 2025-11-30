# IMetabaseUser.EternalPassword

IMetabaseUser.EternalPassword
-


# IMetabaseUser.EternalPassword


## Синтаксис


EternalPassword: Boolean;


## Описание


Свойство EternalPassword определяет,
 имеет ли пароль срок действия.


## Комментарии


Допустимые значения:


·  True.
 Пароль не имеет срока действия;


·  False.
 Пароль имеет срок действия.


## Пример


Добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    Us: IMetabaseUsers;

    User: IMetabaseUser;

    SecCat: ISecurityCategory;

    SecLevel: ISecurityLevel;

Begin

    // Получаем активный репозиторий

    MB := MetabaseClass.Active;

    // Получаем настройки безопасности для первого пользователя

    Us := MB.Security.Users;

    User := Us.Item(0);

    // Задаём, имеет ли пароль срок действия

    User.EternalPassword := True;

    // Применяем политику безопасности

    MB.Security.Apply;

End Sub UserProc;


В результате выполнения примера пароль станет без срока действия.


См. также:


[IMetabaseUser](IMetabaseUser.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
