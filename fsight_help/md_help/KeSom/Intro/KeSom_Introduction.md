# Введение: Сборка Metabase

Введение: Сборка Metabase
-


# Введение в сборку Metabase


В данном разделе представлено описание сборки Metabase,
 предназначенной для управления репозиторием и его содержимым. Интерфейсы
 сборки позволяют выполнять все необходимые действия по организации структуры
 репозитория, настройке политики безопасности работы в репозитории, доступу
 к объектам, формированию и переносу обновлений объектов из тестовых в
 промышленные версии. Также в сборке имеются интерфейсы, описывающие различные
 объекты репозитория: [Папка](UiNavObj.chm::/UiNavObj_Folder.htm),
 [Связь
 с репозиторием](UiNavObj.chm::/Link_with/UiDb_relational_LinkWith.htm), [Модуль](UiDevEnv.chm::/01_Development_Environment/02_Work_in_Development_Environment/DevEnv_Object/DevEnv_Module.htm),
 [Форма](UiDevEnv.chm::/01_Development_Environment/02_Work_in_Development_Environment/DevEnv_Object/DevEnv_Form.htm),
 [Сборка](UiDevEnv.chm::/01_Development_Environment/02_Work_in_Development_Environment/DevEnv_Object/DevEnv_Assembly.htm).
 Более подробно можно ознакомиться в следующих подразделах:


	- [Общие принципы программирования
	 с использованием сборки Metabase](KeSom_Programming.htm);


	- [Иерархия сборки Metabase](KeSom_Hierarchy.htm).


Основными интерфейсами сборки Metabase
 являются:


	- [IMetabaseManager](../Interface/IMetabaseManager/IMetabaseManager.htm) -
	 интерфейс, описывающий менеджер репозиториев, который используется
	 для управления списком соединений с репозиториями и кешем метаданных
	 объектов.


	- [IMetabase](../Interface/IMetabase/IMetabase.htm)
	 - интерфейс, описывающий текущее подключение к репозиторию и используемый
	 для управления объектами, а также для доступа к различным инструментам
	 продукта «Форсайт. Аналитическая платформа».


	- [IMetabaseObjectDescriptor](../Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm) -
	 интерфейс, содержащий описание объекта репозитория.


	- [IMetabaseObject](../Interface/IMetabaseObject/IMetabaseObject.htm) -
	 интерфейс, предоставляющий доступ к структуре объекта репозитория.


	- [IMetabaseSecurity](../Interface/IMetabaseSecurity/IMetabaseSecurity.htm) -
	 интерфейс, предназначенный для работы с менеджером безопасности.


	- [IMetabaseUpdate](../Interface/IMetabaseUpdate/IMetabaseUpdate.htm) -
	 интерфейс, предназначенный для работы с менеджером обновлений.


Примеры:


[Примеры
 реализации различных задач с использованием сборки Metabase](../Examples/Examples_main.htm)


Дополнительные
 сведения:


[Интерфейсы
 сборки Metabase](../Interface/KeSom_Interface.htm) | [Перечисления
 сборки Metabase](../Enums/KeSom_Enums.htm) | [Классы сборки
 Metabase](../Class/KeSom_Class.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
