# Аудит и история операций

Аудит и история операций
-


# Аудит и история операций


Аудит действий пользователя в репозитории является неотъемлемой частью
 средств защиты платформы. Информация о выполняемых действиях сохраняется
 в протоколе доступа. По умолчанию осуществляется аудит всех операций,
 кроме чтения дескриптора объекта. Чтение дескрипторов осуществляется при
 навигации по репозиторию, поэтому включение аудита для этой операции может
 привести к чрезмерному увеличению размера протокола доступа.


Аудит может быть настроен для классов объектов или для отдельных объектов
 репозитория. Ведение истории настраивается для классов объектов. Для настройки
 аудита для классов объектов и истории операций предназначен интерфейс
 [IMetabaseAuditPolicy](../../Interface/IMetabaseAuditPolicy/IMetabaseAuditPolicy.htm),
 доступ к котором возвращает свойство [IMetabasePolicy.AuditPolicy](../../Interface/IMetabasePolicy/IMetabasePolicy.AuditPolicy.htm).
 Аудит для отдельных объектов репозитория настраивается параметрах управления
 доступом к объекту, которые возвращает свойство [IMetabaseObjectDescriptor.SecurityDescriptor](../../Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.SecurityDescriptor.htm).
 Результат аудита операций будет доступен в [протоколе
 доступа](AuditLog.htm). Историю изменения отдельных объектов можно получить, используя
 метод [IMetabaseObjectDescriptor.GetHistory](../../Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.GetHistory.htm).


Настройка аудита и истории для класса объекта:


	Sub ChangeAuditAndHistoryForClass;

	Var

	    Mb: IMetabase;

	    MbSec: IMetabaseSecurity;

	    AuditPolicy: IMetabaseAuditPolicy;

	    Lic: Object;

	Begin

	    MB := MetabaseClass.Active;

	    // Получим лицензию для возможности работы с менеджером безопасности

	    Lic := Mb.RequestLicense(UiLicenseFeatureType.Adm);

	    MbSec := Mb.Security;

	    // Изменим аудит и ведение истории для объектов класс Регламентный отчёт

	    AuditPolicy := MbSec.Policy.AuditPolicy;

	    AuditPolicy.FilterClass(MetabaseObjectClass.KE_CLASS_PROCEDURALREPORT) := MetabaseObjectPredefinedRights.Write Or

	        MetabaseObjectPredefinedRights.Access Or MetabaseObjectPredefinedRights.Delete;

	    AuditPolicy.TrackClassHistory(MetabaseObjectClass.KE_CLASS_PROCEDURALREPORT) := MetabaseObjectPredefinedRights.Write Or

	        MetabaseObjectPredefinedRights.Access;

	    // Сохраним изменения

	    MbSec.Apply;

	    // Освободим лицензию

	    Lic := Null;

	End Sub ChangeAuditAndHistoryForClass;


Настройка аудита для отдельного объекта репозитория:


Sub ChangeAuditForObject;

Var

    Mb: IMetabase;

    ObjDesc: IMetabaseObjectDescriptor;

    SecDesc: ISecurityDescriptor;

    AcessCL: IAccessControlList;

    Subject: ISecuritySubject;

    Lic: Object;

Begin

    Mb := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := Mb.RequestLicense(UiLicenseFeatureType.Adm);

    // Получим пользователя, для которого будут настраиваться аудит доступа

    Subject := Mb.Security.ResolveName("OWNER");

    // Получим объект, для которого настраивается аудит доступа

    ObjDesc := Mb.IteMbyId("STD_CUBE");

    SecDesc := ObjDesc.SecurityDescriptor;

    SecDesc.Edit;

    // Дополнительные параметры безопасности

    AcessCL := SecDesc.Acl;

    // Установка аудита для операций

    AcessCL.AddAce(

        AceType.Audit,

        Subject.Sid,

        MetabaseObjectPredefinedRights.Write Or

        MetabaseObjectPredefinedRights.Access Or MetabaseObjectPredefinedRights.Delete);

    // Сохраним изменения

    SecDesc.Apply(True);

    // Освободим лицензию

    Lic := Null;

End Sub ChangeAuditForObject;


Просмотр истории изменения объекта:


Sub GetObjectHistory;

Var

    MB: IMetabase;

    Desc: IMetabaseObjectDescriptor;

    History: IMetabaseObjectHistory;

    Item: IMetabaseObjectHistoryItem;

Begin

    MB := MetabaseClass.Active;

    Desc := Mb.ItemById("STD_CUBE");

    History := Desc.GetHistory;

    // Просмотр истории объекта

    For Each Item In History Do

        Debug.WriteLine(Item.Id + " | " +

            Item.Name + " | " +

            DateTime.FromDouble(Item.Stamp).ToString + " | " +

            Item.Comment + " | " +

            Item.Description + " | " +

            Item.UserName);

    End For;

End Sub GetObjectHistory;


См. также:


[Работа с
 менеджером безопасности](Security.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
