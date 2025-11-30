# IABACEngine

IABACEngine
-


# IABACEngine


## Описание


Интерфейс IABACEngine предназначен
 для вычисления заданной политики атрибутного доступа, в результате которого
 определяется доступ субъекта к объекту.


## Комментарии


Используется для формирования атрибутного доступа, не связанного с общей
 политикой безопасности.


Для получения результата доступа субъекта к объекту:


	- Используйте класс [ABACEngine](../../Class/ABACEngine/ABACEngine.htm)
	 для дальнейшего определения методов интерфейса IABACEngine.


	- Задайте обязательные методы: [IABACEngine.SetEnvironment](IABACEngine.SetEnvironment.htm),
	 [IABACEngine.SetParams](IABACEngine.SetParams.htm), [IABACEngine.SetPolicy](IABACEngine.SetPolicy.htm).


	- Задайте операцию, по которой будет определяться доступ субъекта
	 к объекту, с помощью метода [IABACEngine.Evaluate](IABACEngine.Evaluate.htm).


После выполнения действий метод [IABACEngine.Evaluate](IABACEngine.Evaluate.htm)
 возвращает результат вычисления доступа субъекта к объекту. Например,
 пользователю с наименованием «USER» разрешен доступ на чтение объекта
 с идентификатором OBJ.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Evaluate](IABACEngine.Evaluate.htm)
		 Метод Evaluate возвращает
		 результат доступа субъекта к объекту.


		 ![](../../Sub_Image.gif)
		 [SetCallback](IABACEngine.SetCallback.htm)
		 Метод SetCallback
		 задает функцию, определяющую значение атрибута, если атрибут субъекта
		 или объекта неопределен.


		 ![](../../Sub_Image.gif)
		 [SetEnvironment](IABACEngine.SetEnvironment.htm)
		 Метод SetEnvironment
		 задает коллекцию [атрибутов
		 среды окружения](Admin.chm::/04_SecurityPolicy/Creating_conditions.htm#environment).


		 ![](../../Sub_Image.gif)
		 [SetOperations](IABACEngine.SetOperations.htm)
		 Метод SetOperations
		 задает значения атрибута в [цели](Admin.chm::/04_SecurityPolicy/Target.htm),
		 если используется атрибут среды окружения «[OPERATION](Admin.chm::/04_SecurityPolicy/Creating_conditions.htm#environment)»
		 с условием «[IN](Admin.chm::/04_SecurityPolicy/Target.htm#in)».


		 ![](../../Sub_Image.gif)
		 [SetParams](IABACEngine.SetParams.htm)
		 Метод SetParams задает
		 коллекцию атрибутов субъекта и объекта, для которого определяется
		 атрибутный доступ.


		 ![](../../Sub_Image.gif)
		 [SetPolicy](IABACEngine.SetPolicy.htm)
		 Метод SetPolicy задает
		 политику атрибутного доступа.


См. также:


[Интерфейсы
 сборки ABAC](../KeABAC_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
