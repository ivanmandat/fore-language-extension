# ISecuritySubject

ISecuritySubject
-


# ISecuritySubject


## Описание


Интерфейс ISecuritySubject содержит
 базовые свойства и методы для работы с субъектом безопасности.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Description](ISecuritySubject.Description.htm)


		 Свойство Description
		 определяет описание субъекта безопасности.


		 ![](../../Property_Image.gif)
		 [DistinguishedName](ISecuritySubject.DistinguishedName.htm)


		 Свойство DistinguishedName
		 возвращает уникальное имя для субъекта безопасности.


		 ![](../../Property_Image.gif)
		 [IsHidden](ISecuritySubject.IsHidden.htm)


		 Свойство IsHidden возвращает
		 признак скрытого субъекта безопасности.


		 ![](../../Property_Image.gif)
		 [IsNT](ISecuritySubject.IsNT.htm)


		 Свойство IsNT возвращает
		 признак доменного субъекта безопасности.


		 ![](../../Property_Image.gif)
		 [LogonHoursPolicy](ISecuritySubject.LogonHoursPolicy.htm)


		 Свойство LogonHoursPolicy
		 возвращает настройки доступа субъекта безопасности к платформе
		 по времени.


		 ![](../../Property_Image.gif)
		 [Name](ISecuritySubject.Name.htm)


		 Свойство Name определяет
		 наименование субъекта безопасности.


		 ![](../../Property_Image.gif)
		 [Sid](ISecuritySubject.Sid.htm)


		 Свойство Sid возвращает
		 параметры идентификатора субъекта безопасности.


		 ![](../../Property_Image.gif)
		 [Tag](ISecuritySubject.Tag.htm)


		 Свойство Tag предназначено
		 для хранения дополнительной системной информации по субъектам
		 безопасности.


		 ![](../../Property_Image.gif)
		 [Type](ISecuritySubject.Type.htm)


		 Свойство Type возвращает
		 тип текущего субъекта безопасности.


		 ![](../../Property_Image.gif)
		 [UserPrincipalName](ISecuritySubject.UserPrincipalName.htm)


		 Свойство UserPrincipalName
		 возвращает наименование доменного пользователя.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [HasAccessToRepository](ISecuritySubject.HasAccessToRepository.htm)
		 Метод HasAccessToRepository
		 проверяет наличие у пользователя или группы пользователей эффективных
		 прав на объекты репозитория.


		 ![](../../Sub_Image.gif)
		 [MemberOf](ISecuritySubject.MemberOf.htm)
		 Метод MemberOf возвращает
		 коллекцию групп, в которую входит данный субъект безопасности.


		 ![](../../Sub_Image.gif)
		 [MemberOfO](ISecuritySubject.MemberOfO.htm)
		 Метод MemberOfO возвращает
		 коллекцию групп, в которую входит данный субъект безопасности
		 с учетом заданных параметров получения групп.


См. также:


[Интерфейсы сборки Metabase](../KeSom_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
