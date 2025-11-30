# IUserProfile.Prop

IUserProfile.Prop
-


# IUserProfile.Prop


## Синтаксис


Prop(PropName: String): Variant;


## Параметры


PropName. Наименование дополнительного свойства пользователя.


## Описание


Свойство Prop определяет значение дополнительного свойства пользователя.


## Комментарии


Коллекция дополнительных свойств пользователя доступна в свойстве [Properties](IUserProfile.Properties.htm). Если при записи свойства Prop в качестве значения параметра PropName указано наименование несуществующего дополнительного свойства, то данное свойство будет добавлено.


## Пример


			Sub UserProc;

Var

    Mb: IMetabase;

    User: IMetabaseUser;

    Prof: IUserProfile;

Begin

    Mb := MetabaseClass.Active;

    User := Mb.LogonSession.User;

    Prof := User.Profile.Edit;

    Prof.Prop("Prop1") := "Value1";

    Prof.Prop("Prop2") := "Value2";

    Prof.Apply;

End Sub UserProc;


При выполнении примера будет изменен профиль пользователя, под которым осуществлен вход в репозиторий. В профили будут изменены два дополнительных свойства. Если указанные свойства в профиле отсутствуют, то они будут созданы.


См. также:


[IUserProfile](IUserProfile.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
