# IMetabaseUser

IMetabaseUser
-


# IMetabaseUser


Сборка: Metabase;


## Описание


Интерфейс IMetabaseUser содержит
 свойства и методы пользователя репозитория.


## Иерархия наследования


           [ISecuritySubject](../ISecuritySubject/ISecuritySubject.htm)


           IMetabaseUser


## Комментарии


Для работы с коллекцией пользователей репозитория используйте интерфейс
 [IMetabaseUsers](../IMetabaseUsers/IMetabaseUsers.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Attributes](IMetabaseUser.Attributes.htm)
		 Свойство Attributes
		 возвращает [системные](admin.chm::/04_SecurityPolicy/Creating_conditions.htm#subject)
		 и [пользовательские](admin.chm::/04_SecurityPolicy/Creating_attributes.htm#subject)
		 атрибуты пользователей.


		 ![](../../Property_Image.gif)
		 [AutoRun](IMetabaseUser.AutoRun.htm)
		 Свойство AutoRun возвращает
		 объект автозапуска для пользователя.


		 ![](../../Property_Image.gif)
		 [CannotChangePassword](IMetabaseUser.CannotChangePassword.htm)
		 Свойство CannotChangePassword
		 определяет признак запрета смены пароля пользователем.


		 ![](../../Property_Image.gif)
		 [Certificate](IMetabaseUser.Certificate.htm)
		 Свойство Certificate
		 присваивает валидный сертификат пользователю, по которому будет
		 осуществляться вход.


		 ![](../../Property_Image.gif)
		 [EternalPassword](IMetabaseUser.EternalPasswordt.htm)
		 Свойство EternalPassword
		 определяет, имеет ли пароль срок действия.


		 ![](../../Property_Image.gif)
		 [External](IMetabaseUser.External.htm)
		 Свойство External определяет
		 признак создания пользователя, подключаемого с сервера.


		 ![](../../Property_Image.gif)
		 [FullName](IMetabaseUser.FullName.htm)
		 Свойство FullName определяет
		 полное наименование пользователя.


		 ![](../../Property_Image.gif)
		 [IsAdmin](IMetabaseUser.IsAdmin.htm)
		 Свойство IsAdmin возвращает
		 признак соответствия пользователя прикладному администратору репозитория.


		 ![](../../Property_Image.gif)
		 [IsDeferred](IMetabaseUser.IsDeferred.htm)
		 Свойство IsDeferred
		 возвращает признак отложенной загрузки описания пользователя.


		 ![](../../Property_Image.gif)
		 [IsIsa](IMetabaseUser.IsIsa.htm)
		 Свойство IsIsa возвращает
		 признак соответствия пользователя администратору информационной
		 безопасности репозитория.


		 ![](../../Property_Image.gif)
		 [IsLocked](IMetabaseUser.IsLocked.htm)
		 Свойство IsLocked определяет
		 блокировку учетной записи указанного пользователя.


		 ![](../../Property_Image.gif)
		 [IsTemporary](IMetabaseuser.IsTemporary.htm)
		 Свойство IsTemporary
		 возвращает признак соответствия пользователя временной учетной
		 записи.


		 ![](../../Property_Image.gif)
		 [LastLoginStamp](IMetabaseUser.LastLoginStamp.htm)
		 Свойство LastLoginStamp
		 возвращает дату последнего входа в систему.


		 ![](../../Property_Image.gif)
		 [LockedState](IMetabaseUser.LockedState.htm)
		 Свойство LockedState
		 определяет состояние блокировки пользователя.


		 ![](../../Property_Image.gif)
		 [ManageDBGrants](IMetabaseUser.ManageDBGrants.htm)
		 Свойство ManageDBGrants
		 определяет, будут ли текущему пользователю раздаваться права на
		 уровне СУБД.


		 ![](../../Property_Image.gif)
		 [MaxLogonSessions](IMetabaseUser.MaxLogonSessions.htm)
		 Свойство MaxLogonSessions
		 определяет максимальное количество одновременных подключений пользователя
		 к репозиторию.


		 ![](../../Property_Image.gif)
		 [MustChangePasswordAtNextLogon](IMetabaseUser.MustChangePasswordAtNextLogon.htm)
		 Свойство MustChangePasswordAtNextLogon
		 определяет установку требования на смену пароля при следующем
		 входе в систему для данного пользователя.


		 ![](../../Property_Image.gif)
		 [PackageData](IMetabaseUser.PackageData.htm)
		 Свойство PackageData
		 возвращает пакет данных для указанного пользователя.


		 ![](../../Property_Image.gif)
		 [PasswordChangedUser](IMetabaseUser.PasswordChangedUser.htm)
		 Свойство PasswordChangedUser
		 возвращает пользователя, который потребовал смену пароля.


		 ![](../../Property_Image.gif)
		 [PasswordHistory](IMetabaseUser.PasswordHistory.htm)
		 Свойство PasswordHistory
		 возвращает историю паролей пользователя.


		 ![](../../Property_Image.gif)
		 [Printers](IMetabaseUser.Printers.htm)
		 Свойство Printers возвращает
		 список установленных в политике безопасности доступных пользователю
		 принтеров.


		 ![](../../Property_Image.gif)
		 [ShortName](IMetabaseUser.ShortName.htm)
		 Свойство ShortName
		 определяет короткий идентификатор доменного пользователя Oracle.


		 ![](../../Property_Image.gif)
		 [Profile](IMetabaseUser.Profile.htm)
		 Свойство Profile возвращает
		 профиль пользователя.


		 ![](../../Property_Image.gif)
		 [StationIPs](IMetabaseUser.StationIPs.htm)
		 Свойство StationIPs
		 возвращает коллекцию, содержащую IP-адреса компьютеров, с которых
		 разрешен доступ пользователя.


		 ![](../../Property_Image.gif)
		 [StationMACs](IMetabaseUser.StationMACs.htm)
		 Свойство StationMACs
		 возвращает коллекцию, содержащую MAC-адреса компьютеров, с которых
		 разрешен доступ пользователя.


		 ![](../../Property_Image.gif)
		 [Stations](IMetabaseUser.Stations.htm)
		 Свойство Stations возвращает
		 коллекцию, содержащую список рабочих станций, с которых разрешен
		 доступ для пользователя.


		 ![](../../Property_Image.gif)
		 [TemporaryAge](IMetabaseUser.TemporaryAge.htm)
		 Свойство TemporaryAge
		 определяет период использования временной учетной записи пользователя
		 в днях.


		 ![](../../Property_Image.gif)
		 [Token](IMetabaseUser.Token.htm)
		 Свойство Token возвращает
		 параметры мандатного доступа пользователя.


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


## Метод


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [ChangePassword](IMetabaseUser.ChangePassword.htm)
		 Метод ChangePassword
		 осуществляет изменение пароля пользователя.


		 ![](../../Sub_Image.gif)
		 [GetEffectiveRights](IMetabaseUser.GetEffectiveRights.htm)
		 Метод GetEffectiveRights
		 возвращает значение, соответствующее эффективным правам доступа
		 данного пользователя к объекту репозитория.


		 ![](../../Sub_Image.gif)
		 [HasAccess](IMetabaseUser.HasAccess.htm)
		 Метод HasAccess осуществляет
		 проверку наличия прав у пользователя на определенные операции
		 над объектом.


		 ![](../../Sub_Image.gif)
		 [InitCertificate](IMetabaseUser.initCertificate.htm)
		 Метод InitCertificate
		 возвращает сертификат, выбранный по типу хранилища сертификата,
		 и присваивает полученное значение в [IMetabaseUser.Certificate](IMetabaseUser.Certificate.htm).


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
