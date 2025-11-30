# IUserProfiles.FindByStrSid

IUserProfiles.FindByStrSid
-


# IUserProfiles.FindByStrSid


## Синтаксис


FindByStrSid(StrSid: String): [IUserProfile](../IUserProfile/IUserProfile.htm);


## Параметры


StrSid. Строковое значение идентификатора безопасности пользователя. Данное значение может быть получено в свойстве [ISid.AsString](../ISid/ISid.AsString.htm).


## Описание


Метод FindByStrSid осуществляет поиск профиля по идентификатору безопасности пользователя.


## Комментарии


Метод возвращает параметры профиля в случае удачного поиска и Null, если профиль пользователя, которому соответствует указанный идентификатор безопасности, не входит в данную коллекцию.


См. также:


[IUserProfiles](IUserProfiles.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
