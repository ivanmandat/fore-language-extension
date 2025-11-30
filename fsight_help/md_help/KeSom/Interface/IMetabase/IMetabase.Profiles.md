# IMetabase.Profiles

IMetabase.Profiles
-


# IMetabase.Profiles


## Синтаксис


		Profiles: [IUserProfiles](../IUserProfiles/IUserProfiles.htm);


## Описание


Свойство Profiles возвращает
 коллекцию профилей пользователей репозитория.


## Комментарии


В данной коллекции будут содержаться профили всех пользователей, созданных
 в менеджере безопасности текущего репозитория. Каждый профиль содержит
 информацию об электронных почтовых адресах, которые соответствуют пользователю,
 и дополнительные свойства пользователя.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


					Sub UserProc;

		Var

		    Mb: IMetabase;

		    Profs: IUserProfiles;

		    Prof: IUserProfile;

		Begin

		    Mb := MetabaseClass.Active;

		    Profs := Mb.Profiles;

		    For Each Prof In Profs Do

		        Debug.WriteLine("Профиль: " + Prof.Name);

		        Debug.WriteLine("Электронная почта по умолчанию: " + Prof.Email);

		    End For;

		End Sub UserProc;


При выполнении примера в консоль среды разработки будут выведены наименования
 профилей пользователей и электронные почтовые адреса, установленные в
 каждом профиле по умолчанию.


См. также:


[IMetabase](IMetabase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
