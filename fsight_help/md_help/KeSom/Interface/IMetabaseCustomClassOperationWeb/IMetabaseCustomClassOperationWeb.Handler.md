# IMetabaseCustomClassOperationWeb.Handler

IMetabaseCustomClassOperationWeb.Handler
-


# IMetabaseCustomClassOperationWeb.Handler


## Синтаксис


Handler: [IMetabaseObjectDescriptor](../IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm);


## Описание


Свойство Handler определяет
 веб-форму, которая будет использоваться для обработки операции.


## Комментарии


В качестве значения свойства задайте описание какой-либо веб-формы.
 Если для обработки операции подключена веб-форма, то в её обработчик события
 OnShow может быть добавлен дополнительный параметр: OnShow(Args: ISortedList).
 При выполнении операции в аргументах события Args будут доступны элементы
 со следующими ключами:


	- Values. Содержит значения
	 параметров, переданных для выполнения операции. Тип значения - [IMetabaseObjectParamValues](../IMetabaseObjectParamValues/IMetabaseObjectParamValues.htm);


	- Descriptor. Описание
	 объекта пользовательского класса, для которого выполняется операция.
	 Тип значения - [IMetabaseObjectDescriptor](../IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm);


	- Operation. Наименование
	 выполняемой операции. Тип значения - String.


На веб-форме всегда должны обрабатываться операции Открыть (OPEN) и
 Редактировать (EDIT). Веб-форма не предназначена для обработки операций
 Вставить (PASTE) и Удалить (DELETE), для их выполнения используется системный
 механизм работы с объектами репозитория, также могут производиться дополнительные
 действия в [пользовательском
 классе](../IMetabaseCustomClass/IMetabaseCustomClass.ImplementationCoreClass.htm).


По умолчанию веб-форма не используется, при выполнении операции осуществляется
 поиск соответствующего метода в классе, который указан в свойстве [IMetabaseCustomClass.ImplementationCoreClass](../IMetabaseCustomClass/IMetabaseCustomClass.ImplementationCoreClass.htm).


## Пример


Использование свойства приведено в примере для [IMetabaseCustomClass.OperationsWeb](../IMetabaseCustomClass/IMetabaseCustomClass.OperationsWeb.htm).


См. также:


[IMetabaseCustomClassOperationWeb](IMetabaseCustomClassOperationWeb.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
