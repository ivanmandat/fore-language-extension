# ABACRootPolicyObject

ABACRootPolicyObject
-


# ABACRootPolicyObject


## Описание


Класс ABACRootPolicyObject реализует
 отдельную [структуру](../../Interface/IABACRootPolicyObject/IABACRootPolicyObject.htm)
 атрибутного доступа, которая не связана с общей структурой [атрибутного
 доступа](Admin.chm::/04_SecurityPolicy/Admin_AttributeAccess.htm) в менеджере безопасности.


## Конструкторы


		 Имя конструктора
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Create](ForeSys.chm::/Class/Object/Object.Create.htm)
		 Конструктор Create
		 создает экземпляр объекта класса.


## Свойства, унаследованные от [IABACRootPolicyObject](../../Interface/IABACRootPolicyObject/IABACRootPolicyObject.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [CombineAlgorithm](../../Interface/IABACRootPolicyObject/IABACRootPolicyObject.CombineAlgorithm.htm)
		 Свойство CombineAlgorithm
		 определяет [алгоритм
		 комбинации](Admin.chm::/04_SecurityPolicy/Admin_AttributeAccess.htm#properties) корневого набора атрибутного доступа.


		 ![](../../Property_Image.gif)
		 [Metabase](../../Interface/IABACRootPolicyObject/IABACRootPolicyObject.Metabase.htm)
		 Свойство Metabase
		 возвращает данные репозитория.


		 ![](../../Property_Image.gif)
		 [Policies](../../Interface/IABACRootPolicyObject/IABACRootPolicyObject.Policies.htm)
		 Свойство Policies предназначено
		 для обращения к коллекции набора политик.


## Методы, унаследованные от [IABACRootPolicyObject](../../Interface/IABACRootPolicyObject/IABACRootPolicyObject.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [FindByGuidStr](../../Interface/IABACRootPolicyObject/IABACRootPolicyObject.FindByGuidStr.htm)
		 Метод FindByGuidStr осуществляет
		 поиск элемента структуры атрибутного доступа по [уникальному
		 идентификатору](../../Interface/IABACEvaluatedObject/IABACEvaluatedObject.GuidStr.htm).


		 ![](../../Sub_Image.gif)
		 [Load](../../Interface/IABACRootPolicyObject/IABACRootPolicyObject.Load.htm)
		 Метод Load осуществляет
		 загрузку структуры атрибутного доступа из XML-файла.


		 ![](../../Sub_Image.gif)
		 [Save](../../Interface/IABACRootPolicyObject/IABACRootPolicyObject.Save.htm)
		 Метод Save осуществляет
		 сохранение структуры атрибутного доступа в XML-файл.


См. также:


[Классы
 сборки ABAC](../KeABAC_Classes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
