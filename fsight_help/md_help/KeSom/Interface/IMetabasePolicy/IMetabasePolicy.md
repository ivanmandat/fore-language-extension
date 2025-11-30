# IMetabasePolicy

IMetabasePolicy
-


# IMetabasePolicy


Сборка: Metabase;


## Описание


Интерфейс IMetabasePolicy содержит
 свойства и методы, используемые для настройки политики безопасности репозитория.


## Иерархия наследования


IMetabasePolicy


## Комментарии


Доступ к политике безопасности возвращает свойство [IMetabaseSecurity.Policy](../IMetabaseSecurity/IMetabaseSecurity.Policy.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ABACRules](IMetabasePolicy.ABACRules.htm)
		 Свойство ABACRules
		 возвращает структуру [атрибутного
		 доступа](admin.chm::/04_SecurityPolicy/Admin_AttributeAccess.htm).


		 ![](../../Property_Image.gif)
		 [AdmUserTitle](IMetabasePolicy.AdmUserTitle.htm)
		 Свойство AdmUserTitle
		 определяет строку для вывода в заголовок окна менеджера безопасности
		 для указанного типа администратора.


		 ![](../../Property_Image.gif)
		 [AllowCreateUserGrant](IMetabasePolicy.AllowCreateUserGrant.htm)
		 Свойство AllowCreateUserGrant
		 позволяет при сохранении политики безопасности создавать две роли.


		 ![](../../Property_Image.gif)
		 [AllowDBMSObjectsCreation](IMetabasePolicy.AllowDBMSObjectsCreation.htm)
		 Свойство AllowDBMSObjectsCreation
		 определяет признак возможности создания объектов в базе данных
		 СУБД  PostgreSQL пользователями, которые не являются владельцами
		 схемы.


		 ![](../../Property_Image.gif)
		 [AllowDeferredLoading](IMetabasePolicy.AllowDeferredLoading.htm)
		 Свойство AllowDeferredLoading
		 определяет признак отложенной загрузки дескрипторов при подключении
		 к репозиторию.


		 ![](../../Property_Image.gif)
		 [AllowedDocumentFormats](IMetabasePolicy.AllowedDocumentFormats.htm)
		 Свойство AllowedDocumentFormats
		 определяет форматы [документов](UiNavObj.chm::/UiNavObj_document.htm),
		 которые доступны для загрузки и открытия в репозитории.


		 ![](../../Property_Image.gif)
		 [AllowUserQueries](IMetabasePolicy.AllowUserQueries.htm)
		 Свойство AllowUserQueries
		 определяет, будут ли доступны средства среды разработки, при помощи
		 которых пользователи могут производить экспорт данных из хранилища
		 платформы.


		 ![](../../Property_Image.gif)
		 [AlwaysPrintDocumentLabel](IMetabasePolicy.AlwaysPrintDocumentLabel.htm)
		 Свойство AlwaysPrintDocumentLabel
		 определяет, будет ли выводиться штамп маркировки независимо от
		 применяемого метода разграничения доступа и от настроек по маркировке
		 документов при экспорте и печати.


		 ![](../../Property_Image.gif)
		 [AttributeBasedAccessControl](IMetabasePolicy.AttributeBasedAccessControl.htm)
		 Свойство AttributeBasedAccessControl
		 определяет признак использования [атрибутного
		 метода](admin.chm::/04_SecurityPolicy/Admin_ABAC.htm) разграничения доступа к объектам.


		 ![](../../Property_Image.gif)
		 [AuditClipboardOperations](IMetabasePolicy.AuditClipboardOperations.htm)
		 Свойство AuditClipboardOperations
		 определяет признак протоколирования операций копирования в буфер
		 обмена.


		 ![](../../Property_Image.gif)
		 [AuditPolicy](IMetabasePolicy.AuditPolicy.htm)
		 Свойство AuditPolicy
		 возвращает объект, содержащий в себе политику доступа к объектам
		 и учета действий над ними.


		 ![](../../Property_Image.gif)
		 [AuditUserAgent](IMetabasePolicy.AuditUserAgent.htm)
		 Свойство AuditUserAgent
		 определяет признак протоколирования информации о браузере (User
		 Agent) при использовании веб-приложения.


		 ![](../../Property_Image.gif)
		 [AutoLockPeriod](IMetabasePolicy.AutoLockPeriod.htm)
		 Свойство AutoLockPeriod
		 определяет период неактивности пользователя в днях, по истечении
		 которого учетная запись пользователя блокируется.


		 ![](../../Property_Image.gif)
		 [AutoRun](IMetabasePolicy.AutoRun.htm)
		 Свойство AutoRun возвращает
		 объект, открываемый при подключении к репозиторию.


		 ![](../../Property_Image.gif)
		 [Certificates](IMetabasePolicy.Certificates.htm)
		 Свойство Certificates
		 возвращает коллекцию сертификатов безопасности.


		 ![](../../Property_Image.gif)
		 [CheckObjectVerionOnUpdateFromPef](IMetabasePolicy.CheckObjectVerionOnUpdateFromPef.htm)
		 Свойство CheckObjectVerionOnUpdateFromPef
		 определяет признак проверки версии объектов при обновлении.


		 ![](../../Property_Image.gif)
		 [CheckUserPassword](IMetabasePolicy.CheckUserPassword.htm)
		 Свойство CheckUserPassword
		 определяет, будет ли использоваться авторизация средствами платформы.


		 ![](../../Property_Image.gif)
		 [CopyToClipboardAllowed](IMetabasePolicy.CopyToClipboardAllowed.htm)
		 Свойство CopyToClipboardAllowed
		 определяет признак возможности копирования данных в буфер обмена
		 и копирования экрана.


		 ![](../../Property_Image.gif)
		 [CreateDeferredSubjects](IMetabasePolicy.CreateDeferredSubjects.htm)
		 Свойство CreateDeferredSubjects
		 определяет признак создания пользователей с отложенной загрузкой.


		 ![](../../Property_Image.gif)
		 [DiscretionaryAccessControl](IMetabasePolicy.DiscretionaryAccessControl.htm)
		 Свойство DiscretionaryAccessControl
		 определяет признак использования дискреционного контроля доступа.


		 ![](../../Property_Image.gif)
		 [EnforceApplicationRole](IMetabasePolicy.EnforceApplicationRole.htm)
		 Свойство EnforceApplicationRole
		 определяет использование роли приложения в политике безопасности.


		 ![](../../Property_Image.gif)
		 [ESKMode](IMetabasePolicy.ESKMode.htm)
		 Свойство ESKMode определяет
		 возможность использования режима совместимости для работы с доменными
		 группами в СУБД Oracle.


		 ![](../../Property_Image.gif)
		 [FailedLogonsCounter_ResetPeriod](IMetabasePolicy.FailedLogonsCounter_ResetPeriod.htm)
		 Свойство FailedLogonsCounter_ResetPeriod
		 определяет период (в минутах), после которого сбрасывается счетчик
		 количества неверных входов в систему.


		 ![](../../Property_Image.gif)
		 [ForceCleanMemory](IMetabasePolicy.ForceCleanMemory.htm)
		 Свойство ForceCleanMemory
		 определяет, перезаписывать ли нулями освобождаемую память.


		 ![](../../Property_Image.gif)
		 [HostWhiteList](IMetabasePolicy.HostWhiteList.htm)
		 Свойство HostWhiteList
		 возвращает список адресов, к которым будет разрешёно обращение
		 при формировании запроса к REST-сервису.


		 ![](../../Property_Image.gif)
		 [IsaPresent](IMetabasePolicy.IsaPresent.htm)
		 Свойство IsaPresent
		 возвращает признак включенного режима разделения ролей между администратором
		 информационной безопасности и прикладным администратором.


		 ![](../../Property_Image.gif)
		 [LockIdentifiersPeriod](IMetabasePolicy.LockIdentifiersPeriod.htm)
		 Свойство LockIdentifiersPeriod
		 определяет период, в течение которого запрещено повторно использовать
		 идентификаторы удаленных пользователей.


		 ![](../../Property_Image.gif)
		 [LogonHoursPolicy](IMetabasePolicy.LogonHoursPolicy.htm)
		 Свойство LogonHoursPolicy
		 возвращает параметры доступа к платформе по времени для указанного
		 субъекта безопасности.


		 ![](../../Property_Image.gif)
		 [MandatoryAccess](IMetabasePolicy.MandatoryAccess.htm)
		 Свойство MandatoryAccess
		 возвращает объект, содержащий в себе мандатный доступ менеджера
		 безопасности.


		 ![](../../Property_Image.gif)
		 [MandatoryAccessControl](IMetabasePolicy.MandatoryAccessControl.htm)
		 Свойство MandatoryAccessControl
		 определяет признак использования мандатного метода разграничения
		 доступа.


		 ![](../../Property_Image.gif)
		 [MaxFailedLogons](IMetabasePolicy.MaxFailedLogons.htm)
		 Свойство MaxFailedLogons
		 определяет число неудачных попыток входа, после которого пользователь
		 блокируется.


		 ![](../../Property_Image.gif)
		 [MaxLogonSessions](IMetabasePolicy.MaxLogonSessions.htm)
		 Свойство MaxLogonSessions
		 определяет максимальное количество одновременных подключений субъекта
		 безопасности к репозиторию.


		 ![](../../Property_Image.gif)
		 [MetabaseIdentifier](IMetabasePolicy.MetabaseIdentifier.htm)
		 Свойство MetabaseIdentifier
		 определяет идентификатор репозитория.


		 ![](../../Property_Image.gif)
		 [MethodsCombineAlgorithm](IMetabasePolicy.MethodsCombineAlgorithm.htm)
		 Свойство MethodsCombineAlgorithm
		 определяет [алгоритм
		 комбинации прав](Admin.chm::/04_SecurityPolicy/Admin_SecPolicy.htm#access_control) по атрибутному и дискреционному
		 методу разграничения доступа.


		 ![](../../Property_Image.gif)
		 [ObjectsAttributes](IMetabasePolicy.ObjectsAttributes.htm)
		 Свойство ObjectsAttributes
		 возвращает атрибуты [классов](admin.chm::/04_SecurityPolicy/Creating_attributes.htm#object_classes)
		 и отдельных [типов](admin.chm::/04_SecurityPolicy/Admin_PermSep_Attributes.htm)
		 объектов.


		 ![](../../Property_Image.gif)
		 [ObjectsIdFormat](IMetabasePolicy.ObjectsIdFormat.htm)
		 Свойство ObjectsIdFormat
		 определяет формат идентификаторов для объектов репозитория.


		 ![](../../Property_Image.gif)
		 [PasswordPolicy](IMetabasePolicy.PasswordPolicy.htm)
		 Свойство PasswordPolicy
		 возвращает объект, содержащий в себе парольную политику.


		 ![](../../Property_Image.gif)
		 [PredefinedPrivilege](IMetabasePolicy.PredefinedPrivilege.htm)
		 Свойство PredefinedPrivilege
		 возвращает параметры указанной привилегии. Задание привилегии
		 производится с помощью перечисления.


		 [![](../../Property_Image.gif)](IMetabasePolicy.PrintersPolicy.htm)
		 [PrintersPolicy](IMetabasePolicy.PrintersPolicy.htm)
		 Свойство PrintersPolicy
		 возвращает настройки безопасности для принтеров.


		 ![](../../Property_Image.gif)
		 [Privilege](IMetabasePolicy.Privilege.htm)
		 Свойство Privilege
		 возвращает параметры привилегии по указанному наименованию.


		 ![](../../Property_Image.gif)
		 [PrivilegeCount](IMetabasePolicy.PrivilegeCount.htm)
		 Свойство PrivilegeCount
		 возвращает количество привилегий, доступных в менеджере безопасности.


		 ![](../../Property_Image.gif)
		 [PrivilegeName](IMetabasePolicy.PrivilegeName.htm)
		 Свойство PrivilegeName
		 возвращает наименование привилегии по индексу.


		 ![](../../Property_Image.gif)
		 [ReportStamp](IMetabasePolicy.ReportStamp.htm)
		 Свойство ReportStamp
		 определяет вид штампа, которым маркируются документы.


		 ![](../../Property_Image.gif)
		 [RestrictAdminAccess](IMetabasePolicy.RestrictAdminAccess.htm)
		 Свойство RestrictAdminAccess
		 определяет, будет ли у пользователей, имеющих привилегию как у
		 ПА (Создание, удаление пользователей), возможность открывать объекты
		 репозитория.


		 ![](../../Property_Image.gif)
		 [RestrictGroupDeletion](IMetabasePolicy.RestrictGroupDeletion.htm)
		 Свойство RestrictGroupDeletion
		 определяет разрешено ли удаление групп, если у группы есть эффективные
		 права на объекты репозитория.


		 ![](../../Property_Image.gif)
		 [RestrictIsaAccess](IMetabasePolicy.RestrictIsaAccess.htm)
		 Свойство RestrictIsaAccess
		 определяет, будет ли у пользователей, имеющих привилегию как у
		 АИБ (Изменение метки безопасности и списка контроля доступа любого
		 объекта), возможность открывать объекты репозитория.


		 ![](../../Property_Image.gif)
		 [RestrictUserDeletion](IMetabasePolicy.RestrictUserDeletion.htm)
		 Свойство RestrictUserDeletion
		 определяет, будет ли запрещено прикладному администратору удаление
		 пользователя, обладающего любыми правами доступа на объекты репозитория.


		 ![](../../Property_Image.gif)
		 [RootObject](IMetabasePolicy.RootObject.htm)
		 Свойство RootObject
		 определяет папку, которая будет являться корневой при входе в
		 репозиторий.


		 ![](../../Property_Image.gif)
		 [Security](IMetabasePolicy.Security.htm)
		 Свойство Security возвращает
		 параметры менеджера безопасности.


		 ![](../../Property_Image.gif)
		 [StationsPolicy](IMetabasePolicy.StationsPolicy.htm)
		 Свойство StationsPolicy
		 возвращает список станций, с которых запрещен вход в текущий репозиторий.


		 ![](../../Property_Image.gif)
		 [SupportUserPrivateFolder](IMetabasePolicy.SupportUserPrivateFolder.htm)
		 Свойство SupportUserPrivateFolder
		 определяет использование механизма личных папок пользователей.


		 ![](../../Property_Image.gif)
		 [UserPrivateFolderRoot](IMetabasePolicy.UserPrivateFolderRoot.htm)
		 Свойство UserPrivateFolderRoot
		 определяет корневую папку для личных папок пользователей.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [IsObjectsIdFormatValid](IMetabasePolicy.IsObjectsIdFormatValid.htm)
		 Метод IsObjectsIdFormatValid
		 проверяет строку на наличие некорректных данных (русский язык,
		 первый символ - цифра, и т.п.). В случае корректности строку можно
		 использовать в качестве формата идентификаторов.


		 ![](../../Sub_Image.gif)
		 [PromoteToIsaMode](IMetabasePolicy.PromoteToIsaMode.htm)
		 Метод PromoteToIsaMode
		 осуществляет включение режима распределения ролей между администратором
		 информационной безопасности и прикладным администратором.


		 ![](../../Sub_Image.gif)
		 [RevertToStandardMode](IMetabasePolicy.RevertToStandardMode.htm)
		 Метод RevertToStandardMode
		 отключает режим распределения ролей между администратором информационной
		 безопасности и прикладным администратором.


См. также:


[Интерфейсы сборки Metabase](../KeSom_Interface.htm)
 | [Общая
 политика](Admin.chm::/04_SecurityPolicy/Editor_of_Politicy/Security_EditorPoliticy_General.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
