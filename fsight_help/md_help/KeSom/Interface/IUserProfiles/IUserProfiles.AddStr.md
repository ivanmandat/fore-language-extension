# IUserProfiles.AddStr

IUserProfiles.AddStr
-


# IUserProfiles.AddStr


## Синтаксис


AddStr(StrSid: String; Name: String): [IUserProfile](../IUserProfile/IUserProfile.htm);


## Параметры


StrSid. Строковое значение идентификатора безопасности пользователя. Данное значение может быть получено в свойстве [ISid.AsString](../ISid/ISid.AsString.htm).


Name. Наименование добавляемого профиля.


## Описание


Метод AddStr добавляет в коллекцию профиль с указанным наименованием и привязкой к субъекту безопасности с указанным идентификатором безопасности.


## Комментарии


Профили пользователей добавляются в соответствующее коллекции автоматически при первом обращении к свойству [IMetabaseUser.Profile](../IMetabaseUser/IMetabaseUser.Profile.htm).


Добавление профилей доступно только в коллекцию профилей репозитория, полученную в свойстве [IMetabase.Profiles](../IMetabase/IMetabase.Profiles.htm). Изменять коллекцию может только администратор репозитория. При выполнении метода AddStr параметр StrSid не может иметь пустое значение. Если указан идентификатор, который не соответствует ни одному субъекту, то будет создан локальный профиль. Данный профиль может использоваться для хранения любого списка электронных адресов или каких-либо параметров. Локальный профиль также может быть найден с помощью метода [FindByStrSid](IUserProfiles.FindByStrSid.htm). Если в коллекции уже существует профиль, соответствующий идентификатору безопасности StrSid, то генерируется исключительная ситуация.


## Пример


Указанный пример должен выполняться под администратором репозитория.


			Sub UserProc;

Var

    Mb: IMetabase;

    Profs: IUserProfiles;

    Prof: IUserProfile;

    Props: IUserProfileProperties;

Begin

    Mb := MetabaseClass.Active;

    Profs := Mb.Profiles;

    Prof := Profs.AddStr(Mb.Name + "_SID", Mb.Name + "_Parameters").Edit;

    Prof.Email := Mb.Name + "@example.ru";

    Props := Prof.Properties;

    Props.Add("Param1", "Value1");

    Props.Add("Param2", "Value1");

    Prof.Apply;

End Sub UserProc;


После выполнения примера в коллекцию профилей репозитория будет добавлен локальный профиль. В настройках профиля будет указан электронный адрес по умолчанию и два свойства.


См. также:


[IUserProfiles](IUserProfiles.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
