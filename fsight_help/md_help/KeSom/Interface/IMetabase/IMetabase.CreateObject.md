# IMetabase.CreateObject

IMetabase.CreateObject
-


# IMetabase.CreateObject


## Синтаксис


CreateObject(Info: [IMetabaseObjectCreateInfo](../IMetabaseObjectCreateInfo/IMetabaseObjectCreateInfo.htm)):
 [IMetabaseObjectDescriptor](../IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm);


## Параметры


Info.
 Информация о создаваемом объекте.


## Описание


Метод CreateObject создает новый
 объект, основываясь на информации, передаваемой посредствам входного параметра
 Info.


## Комментарии


Данный метод используется для создания практически всех объектов платформы.
 В ряде случаев он вызывается автоматически, например, для создания необходимых
 дочерних объектов.


Для создания ряда объектов реализованы специализированные методы, которые
 необходимо использовать вместо метода CreateObject.
 Список объектов, их класс и специализированные методы представлены ниже:


		 Объект
		 Класс объекта
		 Метод для создания объекта


		 Глобальные параметры
		 KE_CLASS_SHAREDPARAMS
		 [ISpecialObjects.Operation](../ISpecialObjects/ISpecialObjects.Operation.htm)


		 Контейнер пользовательских классов
		 KE_CLASS_CUSTOM_EXTENDER
		 [ISpecialObjects.Operation](../ISpecialObjects/ISpecialObjects.Operation.htm)


## Пример


Использование метода приведено в примере для [IMetabase.CreateCreateInfo](IMetabase.CreateCreateInfo.htm).


См. также:


[IMetabase](IMetabase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
