# Общие принципы программирования с использованием сборки ABAC

Общие принципы программирования с использованием сборки ABAC
-


# Общие принципы программирования с использованием сборки ABAC


Сборка ABAC предназначена для
 работы с [атрибутным
 методом](Admin.chm::/04_SecurityPolicy/Admin_ABAC.htm)
 разграничения доступа. Программирование на Fore с
 использованием данной сборки заключается в последовательной настройке
 атрибутного доступа.


Перед началом работы с атрибутным методом разграничения доступа:


	- Установите флажок «Использовать
	 атрибутный доступ» на вкладке «[Контроль доступа](Admin.chm::/04_SecurityPolicy/Admin_SecPolicy.htm#access_control)»
	 редактора политик. Установить флажок можно через интерфейс менеджера
	 безопасности или с помощью свойства [IMetabasePolicy.AttributeBasedAccessControl](KeSom.chm::/Interface/IMetabasePolicy/IMetabasePolicy.AttributeBasedAccessControl.htm).


	- Создайте [учетные
	 записи пользователей](Admin.chm::/03_Admin/Users/Admin_UserCreate.htm), [группы пользователей](Admin.chm::/03_Admin/Groups/Admin_GroupsCreate.htm)
	 и [объекты](UiNav.chm::/02_Navigator/General_Principles_of_Work.htm#add_object),
	 для которых будет сформирована структура атрибутного доступа. Создать
	 учетные записи пользователей, группы пользователей и объекты можно
	 через интерфейс менеджера безопасности или с помощью интерфейсов:
	 [IMetabaseSecurity](KeSom.chm::/Interface/IMetabaseSecurity/IMetabaseSecurity.htm),
	 [IMetabase](KeSom.chm::/Interface/IMetabase/IMetabase.htm).


Важно. Настройка
 атрибутного доступа с помощью сборки ABAC
 должна выполняться в модуле отдельно от прикладной разработки. Отключите
 в модуле ссылки на пользовательские сборки/модули/формы или их ярлыки
 на вкладке «Сборки репозитория»
 в окне «[Ссылки сборки](UiDevEnv.chm::/01_Development_Environment/03_Windows_of_Development_Environment/Inspector_assemblies.htm)».


Процесс работы с атрибутным доступом состоит из следующих этапов:


![](Process.gif)

[


См. также:


Введение
 в сборку ABAC](Add_AttrSubject.htm) | [Интерфейсы
 сборки ABAC](../Interface/KeABAC_Interface.htm) | [Классы сборки
 ABAC](../Class/KeABAC_Classes.htm) | [Перечисления сборки ABAC](../Enums/KeABAC_Enums.htm)
 | [Примеры](../Examples/KeABAC_Example.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
