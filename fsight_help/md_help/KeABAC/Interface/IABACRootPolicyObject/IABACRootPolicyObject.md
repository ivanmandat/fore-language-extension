# IABACRootPolicyObject

IABACRootPolicyObject
-


# IABACRootPolicyObject


## Описание


Интерфейс IABACRootPolicyObject
 предназначен для работы с [атрибутным
 доступом](Admin.chm::/04_SecurityPolicy/Admin_AttributeAccess.htm) на первом уровне иерархии элементов.


## Комментарии


Используется для дальнейшего формирования структуры атрибутного доступа:


	- на втором уровне иерархии элементов задаются свойства набора
	 политик с помощью интерфейса [IABACPolicySet](../IABACPolicySet/IABACPolicySet.htm);


	- на третьем уровне иерархии элементов задаются свойства политики
	 с помощью интерфейса [IABACPolicy](../IABACPolicy/IABACPolicy.htm);


	- на четвертом уровне иерархии элементов задаются свойства правила
	 с помощью интерфейса [IABACRule](../IABACRule/IABACRule.htm).


Для обращения к структуре атрибутного доступа:


	- используйте [структуру](Admin.chm::/04_SecurityPolicy/Admin_AttributeAccess.htm),
	 сформированную в менеджере безопасности, с помощью свойства [IMetabasePolicy.ABACRules](kesom.chm::/interface/imetabasepolicy/imetabasepolicy.abacrules.htm);


	- используйте класс [ABACRootPolicyObject](../../Class/ABACRootPolicyObject/ABACRootPolicyObject.htm)
	 для формирования отдельной структуры.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [CombineAlgorithm](IABACRootPolicyObject.CombineAlgorithm.htm)
		 Свойство CombineAlgorithm
		 определяет [алгоритм
		 комбинации](Admin.chm::/04_SecurityPolicy/Admin_AttributeAccess.htm#properties) корневого набора атрибутного доступа.


		 ![](../../Property_Image.gif)
		 [Metabase](IABACRootPolicyObject.Metabase.htm)
		 Свойство Metabase
		 возвращает данные репозитория.


		 ![](../../Property_Image.gif)
		 [Policies](IABACRootPolicyObject.Policies.htm)
		 Свойство Policies предназначено
		 для обращения к коллекции набора политик.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [FindByGuidStr](IABACRootPolicyObject.FindByGuidStr.htm)
		 Метод FindByGuidStr осуществляет
		 поиск элемента структуры атрибутного доступа по [уникальному
		 идентификатору](../IABACEvaluatedObject/IABACEvaluatedObject.GuidStr.htm).


		 ![](../../Sub_Image.gif)
		 [Load](IABACRootPolicyObject.Load.htm)
		 Метод Load осуществляет
		 загрузку структуры атрибутного доступа из XML-файла.


		 ![](../../Sub_Image.gif)
		 [Save](IABACRootPolicyObject.Save.htm)
		 Метод Save осуществляет
		 сохранение структуры атрибутного доступа в XML-файл.


См. также:


[Интерфейсы
 сборки ABAC](../KeABAC_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
