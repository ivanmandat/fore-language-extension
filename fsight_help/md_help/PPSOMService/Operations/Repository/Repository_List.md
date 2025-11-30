# Работа с репозиторием

Работа с репозиторием
-


# Работа с репозиторием


В данном разделе представлено описание операций, предназначенных для
 работы с репозиторием. Операции позволяют производить следующие действия:


	- работать с описаниями репозиториев;


	- создавать подключения к репозиториям;


	- работать с объектами репозитория: создание, поиск, перемещение
	 и удаление существующих объектов;


	- работать с менеджером безопасности репозитория:


		- работать с коллекциями субъектов безопасности;


		- настраивать права доступа к объектам;


	- работа с сервером лицензий;


	- работать с протоколом доступа к репозиторию;


	- работать с обновлением (создавать, добавлять объекты и настраивать
	 параметры их обновления, сохранять и загружать обновление, устанавливать
	 обновление в репозитории);


	- работать с объектами среды разработки, выполнять и получать
	 результаты выполнения функций;


	- сохранять внесённые изменения и закрывать объекты.


## Подключение к репозиторию


		 Операция
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CloseMetabase](CloseMetabase.htm)
		 Операция CloseMetabase
		 осуществляет отключение от репозитория.


		 ![](../../Sub_Image.gif)
		 [GetMbDefs](GetMbDefs.htm)
		 Операция GetMbDefs
		 получает список описаний репозиториев, созданных на BI-сервере.


		 ![](../../Sub_Image.gif)
		 [GetVerifierCode](GetVerifierCode.htm)
		 Операция GetVerifierCode
		 применяется для извлечения блока данных, который в дальнейшем
		 будет использован для подключения с использованием цифровой подписи.


		 ![](../../Sub_Image.gif)
		 [OpenMetabase](OpenMetabase.htm)
		 Операция OpenMetabase
		 осуществляет подключение к репозиторию и возвращает моникёр соединения
		 с репозиторием.


		 ![](../../Sub_Image.gif)
		 [SetMbDefs](SetMbDefs.htm)
		 Операция SetMbDefs
		 изменяет список описаний репозиториев, созданных на BI-сервере.


## Операции, используемые при подключении через внешние сервисы


		 Операция
		 Краткое описание


		 ![](../../Sub_Image.gif)


		 [CreateOAuthState](CreateOAuthState.htm)
		 Операция CreateOAuthState
		 получает адрес сервиса авторизации, по которому будет запрашиваться
		 токен доступа.


		 ![](../../Sub_Image.gif)


		 [GetExtServiceSettings](GetExtServiceSettings.htm)
		 Операция GetExtServiceSettings
		 получает настройки внешнего сервиса аутентификации, на работу
		 с которым настроен репозиторий.


		 ![](../../Sub_Image.gif)


		 [GetOAuthSettings](GetOAuthSettings.htm)
		 Операция GetOAuthSettings
		 получает настройки по работе с OAuth-серверами, которые заданы
		 на BI-сервере.


		 ![](../../Sub_Image.gif)


		 [GetOAuthToken](GetOAuthToken.htm)
		 Операция GetOAuthToken
		 получает токен с OAuth-сервера, который используется при аутентификации
		 пользователя на этом сервере.


## Работа с менеджером безопасности


		 Операция
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CloseAuditLog](CloseAuditLog.htm)
		 Операция CloseAuditLog
		 закрывает экземпляр протокола доступа.


		 ![](../../Sub_Image.gif)
		 [CloseMbCheckSum](CloseMbCheckSum.htm)
		 Операция CloseMbCheckSum
		 закрывает контекст для работы с контрольными суммами.


		 ![](../../Sub_Image.gif)
		 [CloseMbSecSnapshot](CloseMbSecSnapshot.htm)
		 Операция CloseMbSecSnapshot
		 закрывает объект, предназначенный для работы с резервными копиями
		 политики безопасности.


		 ![](../../Sub_Image.gif)
		 [ExportMbSubjects](ExportMbSubjects.htm)
		 Операция ExportMbSubjects
		 экспортирует список пользователей в CSV-файл.


		 ![](../../Sub_Image.gif)
		 [GetAuditLog](GetAuditLog.htm)
		 Операция GetAuditLog
		 извлекает записи протокола доступа в соответствии с указанными
		 настройками.


		 ![](../../Sub_Image.gif)
		 [GetAuditLogMd](GetAuditLogMd.htm)
		 Операция GetAuditLogMd
		 получает параметры работы протокола доступа.


		 ![](../../Sub_Image.gif)
		 [GetMaintenanceMode](GetMaintenanceMode.htm)
		 Операция GetMaintenanceMode
		 получает информацию о состоянии режима обслуживания в репозитории.


		 ![](../../Sub_Image.gif)
		 [GetMbCheckSum](GetMbCheckSum.htm)
		 Операция GetMbCheckSum
		 получает информацию об объектах, для которых считаются контрольные
		 суммы.


		 ![](../../Sub_Image.gif)
		 [GetMbSec](GetMbSec.htm)
		 Операция GetMbSec извлекает
		 метаданные менеджера безопасности репозитория.


		 ![](../../Sub_Image.gif)
		 [GetMbSecSnapshot](GetMbSecSnapshot.htm)
		 Операция GetMbSecSnapshot
		 получает информацию о состоянии объекта, предназначенного для
		 резервного копирования политики безопасности.


		 ![](../../Sub_Image.gif)
		 [GetSessions](GetSessions.htm)
		 Операция GetSessions
		 получает список активных сессий с репозиторием.


		 ![](../../Sub_Image.gif)
		 [OpenAuditLog](OpenAuditLog.htm)
		 Операция OpenAuditLog
		 открывает протокол доступа и возвращает моникёр для доступа к
		 записям.


		 ![](../../Sub_Image.gif)
		 [OpenMbCheckSum](OpenMbCheckSum.htm)
		 Операция OpenMbCheckSum
		 открывает контекст для работы с контрольными суммами.


		 ![](../../Sub_Image.gif)
		 [OpenMbSecSnapshot](OpenMbSecSnapshot.htm)
		 Операция OpenMbSecSnapshot
		 открывает объект, предназначенный для работы с резервными копиями
		 политики безопасности репозитория.


		 ![](../../Sub_Image.gif)
		 [SetAuditLogMd](SetAuditLogMd.htm)
		 Операция SetAuditLogMd
		 задаёт параметры работы протокола доступа.


		 ![](../../Sub_Image.gif)
		 [SetMaintenanceMode](SetMaintenanceMode.htm)
		 Операция SetMaintenanceMode
		 изменяет состояние режима обслуживания в репозитории.


		 ![](../../Sub_Image.gif)
		 [SetMbCheckSum](SetMbCheckSum.htm)
		 Операция SetMbCheckSum
		 управляет расчётом контрольных сумм для объектов репозитория.


		 ![](../../Sub_Image.gif)
		 [SetMbSec](SetMbSec.htm)
		 Операция SetMbSec изменяет
		 метаданные менеджера безопасности.


		 ![](../../Sub_Image.gif)
		 [SetMbSecSnapshot](SetMbSecSnapshot.htm)
		 Операция SetMbSecSnapshot
		 используется для работы с резервными копиями политики безопасности.


		 ![](../../Sub_Image.gif)
		 [SubjectsSearch](SubjectsSearch.htm)
		 Операция SubjectsSearch
		 осуществляет поиск субъектов безопасности.


## Работа с сервером лицензий


		 Операция
		 Краткое описание


		 ![](../../Sub_Image.gif)


		 [OpenMbLicense](OpenMbLicense.htm)
		 Операция OpenMbLicense
		 получает экземпляр лицензии.


		 ![](../../Sub_Image.gif)


		 [CloseMbLicense](CloseMbLicense.htm)
		 Операция CloseMbLicense
		 освобождает экземпляр лицензии.


## Работа с объектами репозитория


		 Операция
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CreateObject](CreateObject.htm)
		 Операция CreateObject
		 создает новый объект репозитория.


		 ![](../../Sub_Image.gif)
		 [DeleteObjects](DeleteObjects.htm)
		 Операция DeleteObjects
		 удаляет объекты репозитория.


		 ![](../../Sub_Image.gif)
		 [GetControlInfo](GetControlInfo.htm)
		 Операция GetControlInfo
		 получает настройки управления параметрами вложенных объектов.


		 ![](../../Sub_Image.gif)
		 [GetObjectByOdId](GetObjectByOdId.htm)
		 Операция GetObjectByOdId
		 получает базовые свойства объекта репозитория.


		 ![](../../Sub_Image.gif)
		 [GetObjects](GetObjects.htm)
		 Операция GetObjects
		 возвращает информацию об объектах репозитория, удовлетворяющих
		 указанным условиям отбора.


		 ![](../../Sub_Image.gif)
		 [MoveObject](MoveObject.htm)
		 Операция MoveObject
		 перемещает объект репозитория.


		 ![](../../Sub_Image.gif)
		 [SaveObject](SaveObject.htm)
		 Операция SaveObject
		 сохраняет изменения объекта репозитория.


		 ![](../../Sub_Image.gif)
		 [SaveObjectAs](SaveObjectAs.htm)
		 Операция SaveObjectAs
		 выполняет заданное действие и сохраняет экземпляр объекта репозитория.


		 ![](../../Sub_Image.gif)
		 [SetObject](SetObject.htm)
		 Операция SetObject
		 изменяет базовые свойства объекта репозитория.


## Работа с обновлением


		 Операция
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [AddToMbUpdate](AddToMbUpdate.htm)
		 Операция AddToMbUpdate
		 добавляет объекты репозитория в обновление.


		 ![](../../Sub_Image.gif)
		 [CloseMbUpdate](CloseMbUpdate.htm)
		 Операция CloseMbUpdate
		 закрывает контекст для работы с обновлением репозитория.


		 ![](../../Sub_Image.gif)
		 [GetMbUpdate](GetMbUpdate.htm)
		 Операция GetMbUpdate
		 получает информацию об обновлении.


		 ![](../../Sub_Image.gif)
		 [OpenMbUpdate](OpenMbUpdate.htm)
		 Операция OpenMbUpdate
		 открывает контекст для работы с обновлением репозитория.


		 ![](../../Sub_Image.gif)
		 [SetMbUpdate](SetMbUpdate.htm)
		 Операция SetMbUpdate
		 изменяет настройки обновления.


## Работа с параметрами репозитория


		 Операция
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [GetRepoParams](GetRepoParams.htm)
		 Операция GetRepoParams
		 получает параметры репозитория.


		 ![](../../Sub_Image.gif)
		 [SetRepoParams](SetRepoParams.htm)
		 Операция SetRepoParams
		 изменяет параметры репозитория.


## Операции для работы с процессом BI-сервера


		 Операция
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [GetStatus](GetStatus.htm)
		 Операция GetStatus
		 проверяет статус соединения с репозиторием.


		 ![](../../Sub_Image.gif)
		 [GetSystemInfo](GetSystemInfo.htm)
		 Операция GetSystemInfo
		 извлекает информацию о BI-сервере.


## Операции для работы с ресурсами


		 Операция
		 Краткое описание


		 ![](../../Sub_Image.gif)


		 [GetLocales](GetLocales.htm)
		 Операция GetLocales
		 получает список языков, на которые может осуществляться локализация
		 ресурсов в репозитории.


См. также:


[Операции
 веб-сервиса](../BaseService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
