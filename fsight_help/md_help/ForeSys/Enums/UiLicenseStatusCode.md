# UiLicenseStatusCode

UiLicenseStatusCode
-


# UiLicenseStatusCode


## Описание


Перечисление UiLicenseStatusCode
 содержит типы ошибок, возникающих при работе с лицензиями.


Используется следующими свойствами и методами:


	- [ILicense.LicenseRelease](KeSomHost.chm::/Interface/ILicense/ILicense.LicenseRelease.htm);


	- [ILicense.LicenseUpdate](KeSomHost.chm::/Interface/ILicense/ILicense.LicenseUpdate.htm);


	- [ILicenseManager.CheckinCommuterLicense](KeSomHost.chm::/Interface/ILicenseManager/ILicenseManager.CheckinCommuterLicense.htm);


	- [ILicenseManager.CheckoutCommuterLicense](KeSomHost.chm::/Interface/ILicenseManager/ILicenseManager.CheckoutCommuterLicense.htm);


	- [ILicenseManager.AddFeature](KeSomHost.chm::/Interface/ILicenseManager/ILicenseManager.AddFeature.htm);


	- [ILicenseManager.DeleteFeature](KeSomHost.chm::/Interface/ILicenseManager/ILicenseManager.DeleteFeature.htm);


	- [ILicenseManager.RequestLicense](KeSomHost.chm::/Interface/ILicenseManager/ILicenseManager.RequestLicense.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 Success.
		 Успешно.


		 1
		 NoLicenseGiven.
		 Ошибка получения лицензии.


		 2
		 FeatureUnnamed.
		 Имя лицензии не может быть пустым.


		 3
		 HostUnknown.
		 Внутренняя ошибка лицензирования №<номер>.


		 4
		 FileNotFound. Файл
		 с лицензией не найден.


		 5
		 NoServerRunning.
		 Сервер лицензий не запущен.


		 6
		 UnauthorizedMachine.
		 Запрос лицензии с неавторизованной рабочей станции.


		 8
		 ReleaseFailed.
		 Ошибка освобождения лицензии.


		 11
		 CallingError.
		 Внутренняя ошибка лицензирования №<номер>.


		 12
		 InternalError.
		 Внутренняя ошибка.


		 14
		 NoServerResponse.
		 Сервер лицензий не отвечает.


		 15
		 UserExcluded.
		 Текущему пользователю (рабочей станции) запрещено использовать
		 запрашиваемую лицензию.


		 18
		 NoSuchFeature.
		 Запрашиваемая лицензия не найдена.


		 23
		 VendorMismatch.
		 Поставщик лицензии не соответствует поставщику приложения.


		 25
		 BadServerMessage.
		 Сервер лицензий вернул ошибочное сообщение.


		 26
		 ClockTampered.
		 Системное время на рабочей станции было изменено. Операция лицензирования
		 отменена.


		 28
		 InvalidDomain.
		 Неверный домен.


		 36
		 FingerPrintMismatch.
		 Отсутствует привязка к системе.


		 37
		 TrialExhausted.
		 Период действия триальной лицензии истек.


		 39
		 AllUnitsReleased.
		 Все лицензии уже возвращены.


		 62
		 FeatureInactive.
		 Лицензия неактивна.


		 63
		 MajorityRuleFailure.
		 Внутренняя ошибка лицензирования №<номер>.


		 82
		 ServerSyncInProgress.
		 Синхронизация с сервером лицензий запущена.


		 81
		 CommuterCodeAlreadyExists.
		 Локальная временная лицензия уже взята с сервера лицензий.


		 83
		 RemoteCheckout.
		 Лицензия получена удаленно.


		 93
		 DuplicateLicense.
		 Лицензия с таким кодом уже доступна для использования.


		 129
		 NotSupportedInNoNetMode.
		 Нельзя получить временную локальную лицензию с сервера лицензии,
		 если используется автономная лицензия.


		 141
		 LicenseInUse.
		 Лицензия не может быть заменена, так как у нее существуют активные
		 неосвобожденные клиенты.


		 143
		 StoreAccessError.
		 Невозможно получить доступ к файлу лицензии.


		 156
		 TrialNotActivated.
		 Триальный период не был активирован.


		 500
		 ServicesInappropriateLicense.
		 Ошибка при проверке [временной
		 автономной лицензии](setup.chm::/08_Licensing/Admin_Licensing_Variants.htm) на BI-сервере.


		 501
		 ServiceAuthError.
		 Ошибка при проверке подлинности сервиса лицензирования.


		 502
		 ServiceInvalidSignature.
		 Некорректная цифровая подпись лицензии.


		 503
		 ServiceConnectError.
		 Ошибка при подключении к сервису лицензирования.


		 -939519987
		 LicenseExpired.
		 Период действия лицензии истек.


		 -939519992
		 NoNetwork.
		 Общая ошибка сети. Выполнение операции лицензирования невозможно.


		 -939519993
		 NoResources.
		 Недостаточно ресурсов для выполнения операции лицензирования.


		 -939519994
		 NoLicenseAvailable.
		 Нет доступных лицензий.


		 -939519996
		 LicenseTerminated.
		 Невозможно обновить лицензию, так как период действия истек.


		 -939519998
		 InsufficientUnits.
		 Сервер лицензий не может выдать запрашиваемое количество лицензий.


Примечание.
 В зависимости от созданной ситуации могут возвращаться и другие ошибки.


См. также:


[Перечисления
 сборки System](System_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
