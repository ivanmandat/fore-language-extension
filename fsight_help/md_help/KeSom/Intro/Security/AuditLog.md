# Протокол доступа: Сборка Metabase

Протокол доступа: Сборка Metabase
-


# Протокол доступа


Протокол доступа содержит список действий, которые выполнялись в репозитории
 различными пользователями. Для работы с протоколом доступа предназначен
 интерфейс [IAuditLog](../../Interface/IAuditLog/IAuditLog.htm),
 который можно получить, используя метод [IMetabaseSecurity.OpenAuditLog](../../Interface/IMetabaseSecurity/IMetabaseSecurity.OpenAuditLog.htm).


Все записи в протоколе доступа условно можно разделить на два типа:


	- Записи о соединениях с репозиторием (сессии). Для получения
	 используйте метод [IAuditLog.OpenLogons](../../Interface/IAuditLog/IAuditLog.OpenLogons.htm).


	- Записи о действиях пользователя, произведённых в рамках соединения
	 с репозиторием. Для получения используйте метод [IAuditLog.OpenOperations](../../Interface/IAuditLog/IAuditLog.OpenOperations.htm).


Пример получения информации о сессиях:


	Sub GetLogonsFromAuditLog;

	Var

	    MB: IMetabase;

	    MbSec: IMetabaseSecurity;

	    AL: IAuditLog;

	    ALogon: IAuditLogons;

	    d, d1: DateTime;

	    Lic: Object;

	Begin

	    MB := MetabaseClass.Active;

	    // Получим лицензию для возможности работы с менеджером безопасности

	    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

	    MbSec := MB.Security;

	    // Откроем протокол доступа

	    Al := MbSec.OpenAuditLog;

	    ALogon := AL.OpenLogons(False);

	    Debug.WriteLine("Сессии с репозиторием: " + MB.Name);

	    // Выведем в консоль информацию о сессиях текущего репозитория

	    While Not ALogon.Eof Do

	        Debug.Write("   Сессия: " + ALogon.Session.ToString + " | ");

	        d := DateTime.FromDouble(ALogon.Stamp);

	        d1 := DateTime.FromDouble(ALogon.StampOut);

	        Debug.WriteLine(d.ToString + " - " + d1.ToString);

	        ALogon.Next;

	    End While;

	    // Освободим лицензию

	    Lic := Null;

	End Sub GetLogonsFromAuditLog;


Пример получения информации о действиях, выполненных в рамках сессии.
 Ключ сессии передаётся в качестве входного параметра:


	Sub GetOperationsFromAuditLog(Session: Integer = 0);

	Var

	    MB: IMetabase;

	    MbSec: IMetabaseSecurity;

	    AL: IAuditLog;

	    AOperat: IAuditOperations;

	    d: DateTime;

	    Lic: Object;

	Begin

	    MB := MetabaseClass.Active;

	    // Получим лицензию для возможности работы с менеджером безопасности

	    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

	    MbSec := MB.Security;

	    // Откроем протокол доступа

	    AL := MbSec.OpenAuditLog;

	    // Если в параметре Session передаётся 0, то берём ключ текущей сессии

	    If Session = 0 Then

	        Session := MB.LogonSession.Key;

	    End If;

	    // Сформируем список операций

	    AOperat := AL.OpenOperations(Session);

	    // Выведем информацию об операциях в консоль

	    Debug.WriteLine("Репозиторий: " + MB.Name + ". Сессия №: " + Session.ToString);

	    Debug.WriteLine("Операции:");

	    While Not AOperat.Eof Do

	        d := DateTime.FromDouble(AOperat.Stamp);

	        Debug.WriteLine("Объект репозитория: " + AOperat.ObjectName + '(' + AOperat.ObjectId + ") " + d.ToString + ' ' + AOperat.Name);

	        AOperat.Next;

	    End While;

	    // Освободим лицензию

	    Lic := Null;

	End Sub GetOperationsFromAuditLog;


См. также:


[Работа с
 менеджером безопасности](Security.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
