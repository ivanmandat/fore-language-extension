# Дискреционный метод: Сборка Metabase

Дискреционный метод: Сборка Metabase
-


# Дискреционный метод


Механизм работы данного метода представлен в подразделе «[Настройка
 дискреционного метода](Admin.chm::/04_SecurityPolicy/Admin_PermSep_D.htm)».


Дискреционный метод используется в репозиториях по умолчанию. Для включения/выключения
 использования дискреционного доступа используйте флаг [IMetabasePolicy.DiscretionaryAccessControl](../../../Interface/IMetabasePolicy/IMetabasePolicy.DiscretionaryAccessControl.htm).


	Sub EnableDiscrAccessControl;

	Var

	    Mb: IMetabase;

	    MbSec: IMetabaseSecurity;

	    Lic: Object;

	Begin

	    Mb := MetabaseClass.Active;

	    // Получение лицензии для возможности работы с менеджером безопасности

	    Lic := Mb.RequestLicense(UiLicenseFeatureType.Adm);

	    // Менеджер безопасности

	    MbSec := Mb.Security;

	    // Использовать дискреционный метод

	    MbSec.Policy.DiscretionaryAccessControl := True;

	    // Применить изменения

	    MbSec.Apply;

	    // Освобождение лицензии

	    Lic := Null;

	End Sub EnableDiscrAccessControl;


Для настройки прав доступа к объекту выполните следующие действия:


	- Используя свойства и методы интерфейса [IMetabaseSecurity](../../../Interface/IMetabaseSecurity/IMetabaseSecurity.htm),
	 получите субъект безопасности, для которого будут настраиваться права
	 доступа к объекту.


	- Для объекта репозитория, используя свойство [IMetabaseObjectDescriptor.SecurityDescriptor](../../../Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.SecurityDescriptor.htm),
	 получите параметры управления доступом. С помощью метода [Edit](../../../Interface/ISecurityDescriptor/ISecurityDescriptor.Edit.htm)
	 переведите параметры в режим редактирования.


	- Получите список дополнительных параметров безопасности, используя
	 свойство [ISecurityDescriptor.Acl](../../../Interface/ISecurityDescriptor/ISecurityDescriptor.Acl.htm).


	- С помощью метода [IAccessControlList.AddAce](../../../Interface/IAccessControlList/IAccessControlList.AddAce.htm)
	 добавьте элементы безопасности, которые будут разрешать или запрещать
	 пользователю производить определённые операции над объектом. Список
	 базовых операций доступен в перечислении [MetabaseObjectPredefinedRights](../../../Enums/MetabaseObjectPredefinedRights.htm).
	 Если над объектом могут производиться специфические операции, например
	 работа с формулами, элементами справочников и другие, то список этих
	 операций можно получить, используя дополнительные перечисления. Список
	 перечислений представлен в описании метода [IAccessControlList.AddAce](../../../Interface/IAccessControlList/IAccessControlList.AddAce.htm).


	- Примените изменения с помощью метода [ISecurityDescriptor.Apply](../../../Interface/ISecurityDescriptor/ISecurityDescriptor.Apply.htm)
	 или [ISecurityDescriptor.ApplyO](../../../Interface/ISecurityDescriptor/ISecurityDescriptor.ApplyO.htm).


Установленные разрешения/запреты вступают в силу сразу после обновление
 содержимого репозитория с помощью метода [IMetabase.Refresh](../../../Interface/IMetabase/IMetabase.Refresh.htm).


	Sub DiscretionaryAccessControl;

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

	    // Получим пользователя, для которого будут настраиваться права

	    Subject := Mb.Security.ResolveName("USER");

	    // Получим объект, для которого настраиваются права доступа

	    ObjDesc := Mb.IteMbyId("REPORT");

	    SecDesc := ObjDesc.SecurityDescriptor;

	    SecDesc.Edit;

	    // Дополнительные параметры безопасности

	    AcessCL := SecDesc.Acl;

	    // Установка разрешений

	    AcessCL.AddAce(AceType.AccessAllowed, Subject.Sid, MetabaseObjectPredefinedRights.Read Or MetabaseObjectPredefinedRights.Write);

	    // Установка запретов

	    AcessCL.AddAce(AceType.AccessDenied, Subject.Sid, MetabaseObjectPredefinedRights.Delete Or MetabaseObjectPredefinedRights.Access);

	    SecDesc.Apply(True);

	    // Освободим лицензию

	    Lic := Null;

	End Sub DiscretionaryAccessControl;


При выполнении примера пользователю USER будет разрешено чтение и изменение
 объекта репозитория REPORT, но будет запрещено изменение прав и удаление
 этого объекта.


См. также:


[Методы
 разграничения доступа](AccessControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
