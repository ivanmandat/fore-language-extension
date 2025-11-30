# Атрибутный метод: Сборка Metabase

Атрибутный метод: Сборка Metabase
-


# Атрибутный метод


Механизм работы данного метода представлен в подразделе «[Настройка атрибутного
 метода](Admin.chm::/04_SecurityPolicy/Admin_ABAC.htm)».


Для включения/выключения использования атрибутного доступа используйте
 флаг [IMetabasePolicy.AttributeBasedAccessControl](../../../Interface/IMetabasePolicy/IMetabasePolicy.AttributeBasedAccessControl.htm).


			Sub EnableABAC;

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

    // Использовать атрибутного метод

    MbSec.Policy.AttributeBasedAccessControl := True;

    // Применить изменения

    MbSec.Apply;

    // Освобождение лицензии

    Lic := Null;

End Sub EnableABAC;


Структуру атрибутного доступа возвращает свойство [IMetabasePolicy.ABACRules](../../../Interface/IMetabasePolicy/IMetabasePolicy.ABACRules.htm).
 Дальнейшая работа по настройке осуществляется с использованием ресурсов
 [сборки
 ABAC](KeABAC.chm::/Intro/KeABAC_TitlePage.htm). Более подробно читайте в подразделе «[Общие принципы программирования
 с использованием сборки ABAC](KeABAC.chm::/Intro/KeABAC_Programming.htm)».


См. также:


[Методы
 разграничения доступа](AccessControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
