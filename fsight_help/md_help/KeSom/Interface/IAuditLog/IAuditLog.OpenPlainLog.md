# IAuditLog.OpenPlainLog

IAuditLog.OpenPlainLog
-


# IAuditLog.OpenPlainLog


## Синтаксис


OpenPlainLog: [IPlainAuditLogRecords](../IPlainAuditLogRecords/IPlainAuditLogRecords.htm);


## Описание


Метод OpenPlainLog возвращает
 упрощённый вариант представления записей протокола доступа в линейном
 виде.


## Пример


Добавьте ссылки на системные сборки: Dal, Metabase.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    Log: IAuditLog;

	    LogRecords: IPlainAuditLogRecords;

	    i: Integer;

	    Lic: Object;

	Begin

	    Mb := MetabaseClass.Active;

	    // Получим лицензию для возможности работы с менеджером безопасности

	    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

	    // Протокол доступа

	    Log := Mb.Security.OpenAuditLog;

	    LogRecords := Log.OpenPlainLog;

	    While (Not LogRecords.Eof) And (i <= 100) Do

	        If LogRecords.IsLogon Then

	            Debug.WriteLine("Вход в репозиторий: " + LogRecords.Succeeded.ToString);

	            Debug.Indent;

	            Debug.Write("Время работы: " +

	            DateTime.FromDouble(LogRecords.Stamp).ToString + " - " +

	            DateTime.FromDouble(LogRecords.StampOut).ToString);

	            Debug.WriteLine("; Пользователь репозитория: " + LogRecords.UserName +

	                "; Рабочая станция: " + LogRecords.Station + '(' + LogRecords.UserIP + "); " +

	                "Пользователь ОС: " + LogRecords.UserOS);

	            Debug.WriteLine("Примечание: " + LogRecords.Comment);

	            Debug.Unindent;

	        Else

	            Debug.WriteLine("Операция: " + LogRecords.Name);

	            Debug.Indent;

	            Debug.WriteLine("Объект: " + LogRecords.ObjectName + '(' + LogRecords.ObjectId +

	                "); Класс объекта: " + LogRecords.ObjectClass.ToString);

	            Debug.Unindent;

	        End If;

	        i := i + 1;

	        LogRecords.Next;

	    End While;

	    // Освободим лицензию

	    Lic := Null;

	End Sub UserProc;


При выполнении примера в консоль среды разработки будут выведены последние
 сто записей из протокола доступа. Для записей об операциях над объектами
 и записей о подключениях к репозиторию выводится различная информация.


См. также:


[IAuditLog](IAuditLog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
