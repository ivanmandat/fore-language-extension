# Политика безопасности: Сборка Metabase

Политика безопасности: Сборка Metabase
-


# Политика безопасности


Для работы с политикой безопасности репозитория используется интерфейс
 [IMetabasePolicy](../../Interface/IMetabasePolicy/IMetabasePolicy.htm).
 Доступ к политике безопасности предоставляет свойство [IMetabaseSecurity.Policy](../../Interface/IMetabaseSecurity/IMetabaseSecurity.Policy.htm).


	Sub GeneralPolicy;

	Var

	    Mb: IMetabase;

	    MbSec: IMetabaseSecurity;

	    Policy: IMetabasePolicy;

	    Str: String;

	    Lic: Object;

	Begin

	    Mb := MetabaseClass.Active;

	    // Получение лицензии для возможности работы с менеджером безопасности

	    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

	    // Менеджер безопасности

	    MbSec := Mb.Security;

	    Policy := MbSec.Policy;

	    // Настройки общей политики безопасности

	    Policy.RootObject := Mb.ItemById("F_WORK_ROOT");

	    Policy.AutoRun.Object := Mb.ItemById("REPORT");

	    Policy.AuditPolicy.LogRecordCountThreshold(2) := 50000;

	    Policy.AuditPolicy.LogRecordCountThreshold(1) := 30000;

	    Str := "ID_*";

	    If Policy.IsObjectsIdFormatValid(Str) Then

	        Policy.ObjectsIdFormat := Str;

	    End If;

	    MbSec.Apply;

	    // Освобождение лицензии

	    Lic := Null;

	End Sub GeneralPolicy;


## Парольная политика безопасности


Парольная политика безопасности определяет правила формирования и проверки
 паролей пользователей в системе. Часть настроек находится в интерфейсе
 [IMetabasePolicy](../../Interface/IMetabasePolicy/IMetabasePolicy.htm),
 также определённые настройки вынесены в интерфейс [IMetabasePasswordPolicy](../../Interface/IMetabasePasswordPolicy/IMetabasePasswordPolicy.htm).
 Доступ к интерфейсу предоставляет свойство [IMetabasePolicy.PasswordPolicy](../../Interface/IMetabasePolicy/IMetabasePolicy.PasswordPolicy.htm).


	Sub PasswordPolicy;

	Var

	    Mb: IMetabase;

	    MbSec: IMetabaseSecurity;

	    Policy: IMetabasePolicy;

	    PasswordPolicy: IMetabasePasswordPolicy;

	    Lic: Object;

	Begin

	    Mb := MetabaseClass.Active;

	    // Получение лицензии для возможности работы с менеджером безопасности

	    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

	    // Менеджер безопасности

	    MbSec := Mb.Security;

	    // Парольная политика

	    Policy := MbSec.Policy;

	    Policy.MaxFailedLogons := 5; // 5 неудачных попыток ввода пароля

	    Policy.FailedLogonsCounter_ResetPeriod := 5; // сброс счётчика неудачных попыток через 5 минут

	    PasswordPolicy := MbSec.Policy.PasswordPolicy;

	    PasswordPolicy.MinLength := 5; // минимальная длина пароля

	    PasswordPolicy.MaxAge := 90; // максимальный срок действия пароля

	    PasswordPolicy.MinAge := 7; // минимальный срок действия пароля

	    //...

	    MbSec.Apply;

	    // Освобождение лицензии

	    Lic := Null;

	End Sub PasswordPolicy;


См. также:


[Работа с
 менеджером безопасности](Security.htm) | [Методы
 разграничения доступа](AccessControl/AccessControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
