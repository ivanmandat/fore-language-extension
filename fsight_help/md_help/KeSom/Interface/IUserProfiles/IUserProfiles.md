# IUserProfiles

IUserProfiles
-


# IUserProfiles


Сборка: Metabase;


## Описание


Интерфейс IUserProfiles содержит
 свойства и методы для работы с коллекцией профилей пользователей.


## Иерархия наследования


IUserProfiles


## Комментарии


Профили содержат информацию об электронных почтовых адресах, которые
 соответствуют пользователям, и дополнительную информацию о пользователях.
 Получить коллекцию профилей можно используя следующие свойства:


	- [IMetabase.Profiles](../IMetabase/IMetabase.Profiles.htm).
	 Коллекция профилей всех пользователей репозитория.


	- [IMetabaseGroup.Profiles](../IMetabaseGroup/IMetabaseGroup.Profiles.htm).
	 Коллекция профилей пользователей, входящих в заданную группу пользователей.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Count](IUserProfiles.Count.htm)
		 Свойство Count возвращает
		 количество профилей в коллекции.


		 ![](../../Property_Image.gif)
		 [Item](IUserProfiles.Item.htm)
		 Свойство Item параметры
		 профиля по индексу.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Add](IUserProfiles.Add.htm)
		 Метод Add добавляет
		 профиль указанного пользователя в коллекцию.


		 ![](../../Sub_Image.gif)
		 [AddStr](IUserProfiles.AddStr.htm)
		 Метод AddStr добавляет
		 в коллекцию профиль с указанным наименованием и привязкой к субъекту
		 безопасности с указанным идентификатором безопасности.


		 ![](../../Sub_Image.gif)
		 [FindByStrSid](IUserProfiles.FindByStrSid.htm)
		 Метод FindByStrSid
		 осуществляет поиск профиля по идентификатору безопасности пользователя.


		 ![](../../Sub_Image.gif)
		 [Remove](IUserProfiles.Remove.htm)
		 Метод Remove удаляет
		 профиль пользователя по индексу.


		 ![](../../Sub_Image.gif)
		 [RemoveByStrSid](IUserProfiles.RemoveByStrSid.htm)
		 Метод RemoveByStrSid
		 удаляет профиль по идентификатору безопасности пользователя.


См. также:


[Интерфейсы
 сборки Metabase](../KeSom_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
