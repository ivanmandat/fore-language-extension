# IMetabaseLogonEvents.OnLogonUserMustChangePassword

IMetabaseLogonEvents.OnLogonUserMustChangePassword
-


# IMetabaseLogonEvents.OnLogonUserMustChangePassword


## Синтаксис


OnLogonUserMustChangePassword(Connection: [IDalConnectionExt](Dal.chm::/Interface/IDalConnectionExt/IDalConnectionExt.htm);
 Var Result: Boolean);


## Параметры


Connection. Соединение с базой
 данных;


Result. Определяет, будет ли
 изменен пароль. При значении True
 – пароль будет изменен, при значении False
 нет.


## Описание


Метод OnLogonUserMustChangePassword
 реализует событие смены пароля пользователя при истечении его срока действия.


## Комментарии


Возможность смены пароля поддерживается драйверами MS SQL и ORACLE.
 Если параметр Result возвращает False,
 то пользователь отказался менять пароль или при его смене возникли проблемы
 и будет возвращена ошибка.


См. также:


[IMetabaseLogonEvents](IMetabaseLogonEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
