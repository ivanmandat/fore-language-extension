# IMetabaseGroup.Profiles

IMetabaseGroup.Profiles
-


# IMetabaseGroup.Profiles


## Синтаксис


Profiles: [IUserProfiles](../IUserProfiles/IUserProfiles.htm);


## Описание


Свойство Profiles возвращает коллекцию профилей пользователей, входящих в текущую группу.


## Комментарии


Каждый профиль содержит информацию об электронных почтовых адресах, которые соответствуют пользователю, и дополнительные свойства пользователя.


## Пример


			Sub UserProc;

Var

    Mb: IMetabase;

    Group: IMetabaseGroup;

    Profs: IUserProfiles;

    Prof: IUserProfile;

Begin

    Mb := MetabaseClass.Active;

    Group := Mb.Security.ResolveName("АДМИНИСТРАТОРЫ") As IMetabaseGroup;

    Profs := Group.Profiles;

    For Each Prof In Profs Do

        Debug.WriteLine("Профиль: " + Prof.Name);

        Debug.WriteLine("Электронная почта по умолчанию: " + Prof.Email);

    End For;

End Sub UserProc;


При выполнении примера в консоль среды разработки будут выведены наименования профилей и электронные почтовые адреса, установленные в каждом профиле по умолчанию, для всех пользователей, входящих в группу администраторов.


См. также:


[IMetabaseGroup](IMetabaseGroup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
