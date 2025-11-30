# IUserProfile.StringSid

IUserProfile.StringSid
-


# IUserProfile.StringSid


## Синтаксис


StringSid: String;


## Описание


Свойство StringSid возвращает символьное значение идентификатора безопасности.


## Комментарии


Данное свойство возвращает идентификатор субъекта безопасности, параметры которого можно получить в свойстве [IUserProfile.User](IUserProfile.User.htm). Если текущий профиль локальный и не связан с субъектом безопасности, то свойство StringSid вернет то значение, которое было указано в параметрах метода [IUserProfiles.AddStr](../IUserProfiles/IUserProfiles.AddStr.htm) при создании профиля.


См. также:


[IUserProfile](IUserProfile.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
