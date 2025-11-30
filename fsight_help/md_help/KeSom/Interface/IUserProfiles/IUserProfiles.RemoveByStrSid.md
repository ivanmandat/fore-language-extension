# IUserProfiles.RemoveByStrSid

IUserProfiles.RemoveByStrSid
-


# IUserProfiles.RemoveByStrSid


## Синтаксис


RemoveByStrSid(StrSid: String): Boolean;


## Параметры


StrSid. Строковое значение идентификатора безопасности пользователя. Данное значение может быть получено в свойстве [ISid.AsString](../ISid/ISid.AsString.htm).


## Описание


Метод RemoveByStrSid удаляет профиль пользователя, идентификатор безопасности которого передается посредством параметра StrSid.


## Комментарии


Метод возвращает значение True, если профиль был удален и False, если профиль удалить не удалось.


См. также:


[IUserProfiles](IUserProfiles.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
