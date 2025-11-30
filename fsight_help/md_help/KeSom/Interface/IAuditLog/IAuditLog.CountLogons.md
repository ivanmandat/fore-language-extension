# IAuditLog.CountLogons

IAuditLog.CountLogons
-


# IAuditLog.CountLogons


## Синтаксис


CountLogons([NoFilterLogons: Boolean = False]):
 Integer;


## Параметры


NoFilterLogons. Условия фильтра
 не учитываются.


## Описание


Метод CountLogons возвращает
 количество записей в протоколе доступа о соединениях с репозиторием (вход
 в систему).


## Комментарий


Параметр NoFilterLogons является
 необязательным. Допустимые значения:


	- True. По умолчанию.
	 Протокол доступа не будет отфильтрован, т.е вернется количество всех
	 записей о соединениях с репозиторием (вход в систему);


	- False. Протокол доступа
	 будет отфильтрован. Условия фильтрации определяются интерфейсом [IAuditFilter](../IAuditFilter/IAuditFilter.htm). Возвращается
	 количество записей о соединениях с репозиторием с учетом фильтрации.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    MS: IMetabaseSecurity;

    AL: IAuditLog;

    Lic: Object;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MS := MB.Security;

    // Откроем протокол доступа

    Al := MS.OpenAuditLog;

    Debug.WriteLine("Кол-во записей о соединении с репозиторием: " + AL.CountLogons.ToString);

    Debug.WriteLine("Кол-во записей об операциях в репозитории: " + AL.CountOperations.ToString);

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера в консоль будет выведено количество записей
 в протоколе доступа о соединении с репозиторием (вход в систему) и количество
 записей об операциях в репозитории.


См. также:


[IAuditLog](IAuditLog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
