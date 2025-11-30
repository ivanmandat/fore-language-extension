# ABACEngine

ABACEngine
-


# ABACEngine


## Описание


Класс ABACEngine реализует [вычислитель доступа](../../Interface/IABACEngine/IABACEngine.htm)
 субъекта к объекту.


## Конструкторы


		 Имя конструктора
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Create](ForeSys.chm::/Class/Object/Object.Create.htm)
		 Конструктор Create
		 создает экземпляр объекта класса.


## Методы, унаследованные от [IABACEngine](../../Interface/IABACEngine/IABACEngine.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Evaluate](../../Interface/IABACEngine/IABACEngine.Evaluate.htm)
		 Метод Evaluate возвращает
		 результат доступа субъекта к объекту.


		 ![](../../Sub_Image.gif)
		 [SetCallback](../../Interface/IABACEngine/IABACEngine.SetCallback.htm)
		 Метод SetCallback
		 задает функцию, определяющую значение атрибута, если атрибут субъекта
		 или объекта неопределен.


		 ![](../../Sub_Image.gif)
		 [SetEnvironment](../../Interface/IABACEngine/IABACEngine.SetEnvironment.htm)
		 Метод SetEnvironment
		 задает коллекцию [атрибутов
		 среды окружения](Admin.chm::/04_SecurityPolicy/Creating_conditions.htm#environment).


		 ![](../../Sub_Image.gif)
		 [SetOperations](../../Interface/IABACEngine/IABACEngine.SetOperations.htm)
		 Метод SetOperations
		 задает значения атрибута в [цели](Admin.chm::/04_SecurityPolicy/Target.htm),
		 если используется атрибут среды окружения «[OPERATION](Admin.chm::/04_SecurityPolicy/Creating_conditions.htm#environment)»
		 с условием «[IN](Admin.chm::/04_SecurityPolicy/Target.htm#in)».


		 ![](../../Sub_Image.gif)
		 [SetParams](../../Interface/IABACEngine/IABACEngine.SetParams.htm)
		 Метод SetParams задает
		 коллекцию атрибутов субъекта и объекта, для которого определяется
		 атрибутный доступ.


		 ![](../../Sub_Image.gif)
		 [SetPolicy](../../Interface/IABACEngine/IABACEngine.SetPolicy.htm)
		 Метод SetPolicy задает
		 политику атрибутного доступа.


См. также:


[Классы
 сборки ABAC](../KeABAC_Classes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
