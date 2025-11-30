# IMetabaseSecurity

IMetabaseSecurity
-


# IMetabaseSecurity


## Описание


Интерфейс IMetabaseSecurity
 предназначен для настройки параметров менеджера безопасности репозитория.


## Комментарии


Перед изменением параметров менеджера безопасности запросите единицу
 лицензирования «Администрирование»
 с помощью метода [IMetabase.RequestLicense](../IMetabase/IMetabase.RequestLicense.htm).
 Сохраните изменения в менеджере безопасности с помощью метода [IMetabaseSecurity.Apply](IMetabaseSecurity.Apply.htm)
 и освободите лицензию.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AllGroups](IMetabaseSecurity.AllGroups.htm)
		 Свойство AllGroups
		 возвращает коллекцию всех групп пользователей, доступных для использования
		 в репозитории.


		 ![](../../Property_Image.gif)
		 [AllStations](IMetabaseSecurity.AllStations.htm)
		 Свойство AllStations
		 возвращает коллекцию рабочих станций, имеющихся в сети, в которой
		 осуществляется работа с платформой.


		 ![](../../Property_Image.gif)
		 [AllUsers](IMetabaseSecurity.AllUsers.htm)
		 Свойство AllUsers возвращает
		 коллекцию всех пользователей, доступных в текущем репозитории.


		 ![](../../Property_Image.gif)
		 [AuditUserInfo](IMetabaseSecurity.AuditUserInfo.htm)
		 Свойство AuditUserInfo
		 возвращает параметры [служебного
		 пользователя подсистемы безопасности](Setup.chm::/05_RepoMngr/Setup_RepoMngr_Service_User.htm).


		 ![](../../Property_Image.gif)
		 [CurrentDomainSubjectAddState](IMetabaseSecurity.CurrentDomainSubjectAddState.htm)
		 Свойство CurrentDomainSubjectAddState
		 определяет настройки добавления доменных субъектов безопасности.


		 ![](../../Property_Image.gif)
		 [EnvironmentAttributes](IMetabaseSecurity.EnvironmentAttributes.htm)
		 Свойство EnvironmentAttributes
		 возвращает [системные](admin.chm::/04_SecurityPolicy/Creating_conditions.htm#environment)
		 атрибуты окружения.


		 ![](../../Property_Image.gif)
		 [Groups](IMetabaseSecurity.Groups.htm)
		 Свойство Groups возвращает
		 коллекцию групп пользователей, используемых в политике безопасности.


		 ![](../../Property_Image.gif)
		 [Metabase](IMetabaseSecurity.Metabase.htm)
		 Свойство Metabase возвращает
		 данные репозитория.


		 ![](../../Property_Image.gif)
		 [MetabaseClassesSecurityDescriptors](IMetabaseSecurity.MetabaseClassesSecurityDescriptors.htm)
		 Свойство MetabaseClassesSecurityDescriptors
		 возвращает параметры безопасности типа объектов.


		 ![](../../Property_Image.gif)
		 [Modified](IMetabaseSecurity.Modified.htm)
		 Свойство Modified возвращает
		 признак наличия несохраненных изменений в настройках менеджера
		 безопасности.


		 ![](../../Property_Image.gif)
		 [Policy](IMetabaseSecurity.Policy.htm)
		 Свойство Policy возвращает
		 настройки политики безопасности платформы.


		 ![](../../Property_Image.gif)
		 [Users](IMetabaseSecurity.Users.htm)
		 Свойство Users возвращает
		 коллекцию пользователей, созданных в менеджере безопасности репозитория.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [ActiveUsers](IMetabaseSecurity.ActiveUsers.htm)
		 Метод ActiveUsers возвращает
		 коллекцию пользователей, созданных в текущем репозитории, с учетом
		 пользователей с отложенной загрузкой описания.


		 ![](../../Sub_Image.gif)
		 [AddGroup](IMetabaseSecurity.AddGroup.htm)
		 Метод AddGroup создает
		 новую группу пользователей.


		 ![](../../Sub_Image.gif)
		 [AddNTSubject](IMetabaseSecurity.AddNTSubject.htm)
		 Метод AddNTSubject
		 осуществляет добавление доменного субъекта безопасности в репозиторий.


		 ![](../../Sub_Image.gif)
		 [AddTemporaryUser](IMetabaseSecurity.AddTemporaryUser.htm)
		 Метод AddTemporaryUser
		 добавляет временного пользователя с заданным периодом использования
		 в днях.


		 ![](../../Sub_Image.gif)
		 [AddUserEx](IMetabaseSecurity.AddUserEx.htm)
		 Метод AddUserEx создаёт
		 нового пользователя.


		 ![](../../Sub_Image.gif)
		 [Apply](IMetabaseSecurity.Apply.htm)
		 Метод Apply применяет
		 политику безопасности и возвращает информацию о произведенном
		 обновлении.


		 ![](../../Sub_Image.gif)
		 [ApplyWithInfo](IMetabaseSecurity.ApplyWithInfo.htm)
		 Метод ApplyWithInfo
		 применяет политику безопасности и в случае необходимости возвращает
		 список пользователей, которых необходимо обновить.


		 ![](../../Sub_Image.gif)
		 [CreateExporter](IMetabaseSecurity.CreateExporter.htm)
		 Метод CreateExporter
		 создает объект для экспорта настроек политики безопасности и прав
		 доступа.


		 ![](../../Sub_Image.gif)
		 [CreateUsersUpdate](IMetabaseSecurity.CreateUsersUpdate.htm)
		 Метод CreateUsersUpdate
		 создает коллекцию, используемую для обновления пользователей.


		 ![](../../Sub_Image.gif)
		 [ExportUsersList](IMetabaseSecurity.ExportUsersList.htm)
		 Метод ExportUsersList
		 производит [экспорт](Admin.chm::/03_Admin/Admin_AdminObjects_AuditTuning.htm#export)
		 списка пользователей в файл.


		 ![](../../Sub_Image.gif)
		 [HashPassword](IMetabaseSecurity.HashPassword.htm)
		 Метод HashPassword
		 осуществляет хеширование пароля.


		 ![](../../Sub_Image.gif)
		 [LoadAuditLog](IMetabaseSecurity.LoadAuditLog.htm)
		 Метод LoadAuditLog
		 осуществляет загрузку архивированного протокола доступа из файла.


		 ![](../../Sub_Image.gif)
		 [NewSnapshot](IMetabaseSecurity.NewSnapshot.htm)
		 Метод NewSnapshot создает
		 объект для резервного копирования политики безопасности.


		 ![](../../Sub_Image.gif)
		 [NewSubjectsSearch](IMetabaseSecurity.NewSubjectsSearch.htm)
		 Метод NewSubjectsSearch
		 создает объект поиска субъекта безопасности.


		 ![](../../Sub_Image.gif)
		 [OpenAuditLog](IMetabaseSecurity.OpenAuditLog.htm)
		 Метод OpenAuditLog
		 открывает протокол доступа.


		 ![](../../Sub_Image.gif)
		 [RemoveSubject](IMetabaseSecurity.RemoveSubject.htm)
		 Метод RemoveSubject
		 позволяет удалить субъект безопасности.


		 ![](../../Sub_Image.gif)
		 [ResolveName](IMetabaseSecurity.ResolveName.htm)
		 Метод ResolveName возвращает
		 параметры субъекта безопасности по его наименованию.


		 ![](../../Sub_Image.gif)
		 [ResolveSid](IMetabaseSecurity.ResolveSid.htm)
		 Метод ResolveSid возвращает
		 параметры субъекта безопасности по идентификатору.


		 ![](../../Sub_Image.gif)
		 [Revert](IMetabaseSecurity.Revert.htm)
		 Метод Revert осуществляет
		 отмену всех изменений, содержащихся в настройках менеджера безопасности.


		 ![](../../Sub_Image.gif)
		 [UpdateUsers](IMetabaseSecurity.UpdateUsers.htm)
		 Метод UpdateUsers производит
		 обновление информации о пользователях.


См. также:


[Интерфейсы сборки Metabase](../KeSom_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
