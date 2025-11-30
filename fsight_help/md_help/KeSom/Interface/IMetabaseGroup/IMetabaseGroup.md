# IMetabaseGroup

IMetabaseGroup
-


# IMetabaseGroup


Сборка: Metabase;


## Описание


Интерфейс IMetabaseGroup содержит
 свойства и методы группы пользователей.


## Комментарии


Группу пользователей можно получить, используя следующие свойства и
 методы:


	- [IMetabaseGroups.Item](../IMetabaseGroups/IMetabaseGroups.Item.htm);


	- [IMetabaseSecurity.AddGroup](../IMetabaseSecurity/IMetabaseSecurity.AddGroup.htm);


	- [IMetabaseSecurity.AddNTSubject](../IMetabaseSecurity/IMetabaseSecurity.AddNTSubject.htm);


	- [IMetabaseSecurity.ResolveName](../IMetabaseSecurity/IMetabaseSecurity.ResolveName.htm);


	- [IMetabaseSecurity.ResolveSid](../IMetabaseSecurity/IMetabaseSecurity.ResolveSid.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Attributes](IMetabaseGroup.Attributes.htm)
		 Свойство Attributes
		 возвращает [системные](admin.chm::/04_SecurityPolicy/Creating_conditions.htm#subject)
		 и [пользовательские](admin.chm::/04_SecurityPolicy/Creating_attributes.htm#group)
		 атрибуты групп пользователей.


		 ![](../../Property_Image.gif)
		 [HasToken](IMetabaseGroup.HasToken.htm)
		 Свойство HasToken определяет
		 возможность настройки параметров мандатного метода разграничения
		 доступа для группы пользователей.


		 ![](../../Property_Image.gif)
		 [Member](IMetabaseGroup.Member.htm)
		 Свойство Member возвращает
		 параметры субъекта безопасности, входящего в данную [встроенную
		 группу пользователей](Admin.chm::/03_Admin/Groups/Admin_Groups.htm).


		 ![](../../Property_Image.gif)
		 [MemberCount](IMetabaseGroup.MemberCount.htm)
		 Свойство MemberCount
		 возвращает количество субъектов безопасности, входящих в данную
		 [встроенную
		 группу пользователей](Admin.chm::/03_Admin/Groups/Admin_Groups.htm).


		 ![](../../Property_Image.gif)
		 [Profiles](IMetabaseGroup.Profiles.htm)
		 Свойство Profiles возвращает
		 коллекцию профилей пользователей, входящих в текущую группу.


		 ![](../../Property_Image.gif)
		 [Role](IMetabaseGroup.Role.htm)
		 Свойство Role определяет
		 роль СУБД Oracle, которая сопоставлена данной группе пользователей.


		 ![](../../Property_Image.gif)
		 [Token](IMetabaseGroup.Token.htm)
		 Свойство Token возвращает
		 параметры мандатного доступа группы пользователей.


## Свойства, унаследованные от [ISecuritySubject](../ISecuritySubject/ISecuritySubject.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Description](../ISecuritySubject/ISecuritySubject.Description.htm)


		 Свойство Description
		 определяет описание субъекта безопасности.


		 ![](../../Property_Image.gif)
		 [DistinguishedName](../ISecuritySubject/ISecuritySubject.DistinguishedName.htm)


		 Свойство DistinguishedName
		 возвращает уникальное имя для субъекта безопасности.


		 ![](../../Property_Image.gif)
		 [IsHidden](../ISecuritySubject/ISecuritySubject.IsHidden.htm)


		 Свойство IsHidden возвращает
		 признак скрытого субъекта безопасности.


		 ![](../../Property_Image.gif)
		 [IsNT](../ISecuritySubject/ISecuritySubject.IsNT.htm)


		 Свойство IsNT возвращает
		 признак доменного субъекта безопасности.


		 ![](../../Property_Image.gif)
		 [LogonHoursPolicy](../ISecuritySubject/ISecuritySubject.LogonHoursPolicy.htm)


		 Свойство LogonHoursPolicy
		 возвращает настройки доступа субъекта безопасности к платформе
		 по времени.


		 ![](../../Property_Image.gif)
		 [Name](../ISecuritySubject/ISecuritySubject.Name.htm)


		 Свойство Name определяет
		 наименование субъекта безопасности.


		 ![](../../Property_Image.gif)
		 [Sid](../ISecuritySubject/ISecuritySubject.Sid.htm)


		 Свойство Sid возвращает
		 параметры идентификатора субъекта безопасности.


		 ![](../../Property_Image.gif)
		 [Tag](../ISecuritySubject/ISecuritySubject.Tag.htm)


		 Свойство Tag предназначено
		 для хранения дополнительной системной информации по субъектам
		 безопасности.


		 ![](../../Property_Image.gif)
		 [Type](../ISecuritySubject/ISecuritySubject.Type.htm)


		 Свойство Type возвращает
		 тип текущего субъекта безопасности.


		 ![](../../Property_Image.gif)
		 [UserPrincipalName](../ISecuritySubject/ISecuritySubject.UserPrincipalName.htm)


		 Свойство UserPrincipalName
		 возвращает наименование доменного пользователя.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [AddMember](IMetabaseGroup.AddMember.htm)
		 Метод AddMember добавляет
		 субъект безопасности в группу пользователей.


		 ![](../../Sub_Image.gif)
		 [IsMember](IMetabaseGroup.IsMember.htm)
		 Метод IsMember осуществляет
		 проверку наличия указанного субъекта безопасности в текущей группе
		 пользователей.


		 ![](../../Sub_Image.gif)
		 [RemoveMember](IMetabaseGroup.RemoveMember.htm)
		 Метод RemoveMember
		 удаляет субъект безопасности из группы пользователей.


## Методы, унаследованные от [ISecuritySubject](../ISecuritySubject/ISecuritySubject.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [HasAccessToRepository](../ISecuritySubject/ISecuritySubject.HasAccessToRepository.htm)
		 Метод HasAccessToRepository
		 проверяет наличие у пользователя или группы пользователей эффективных
		 прав на объекты репозитория.


		 ![](../../Sub_Image.gif)
		 [MemberOf](../ISecuritySubject/ISecuritySubject.MemberOf.htm)
		 Метод MemberOf возвращает
		 коллекцию групп, в которую входит данный субъект безопасности.


		 ![](../../Sub_Image.gif)
		 [MemberOfO](../ISecuritySubject/ISecuritySubject.MemberOfO.htm)
		 Метод MemberOfO возвращает
		 коллекцию групп, в которую входит данный субъект безопасности
		 с учетом заданных параметров получения групп.


См. также:


[Интерфейсы сборки Metabase](../KeSom_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
