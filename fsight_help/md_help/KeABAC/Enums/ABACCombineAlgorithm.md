# ABACCombineAlgorithm

ABACCombineAlgorithm
-


# ABACCombineAlgorithm


## Описание


Перечисление ABACCombineAlgorithm
 используется для выбора [алгоритма
 комбинации](Admin.chm::/04_SecurityPolicy/Admin_AttributeAccess.htm#properties) корневого набора/политик/правил.


Используется следующими свойствами:


	- [IABACPolicy.CombineAlgorithm](../Interface/IABACPolicy/IABACPolicy.CombineAlgorithm.htm);


	- [IABACPolicySet.CombineAlgorithm](../Interface/IABACPolicySet/IABACPolicySet.CombineAlgorithm.htm);


	- [IABACRootPolicyObject.CombineAlgorithm](../Interface/IABACRootPolicyObject/IABACRootPolicyObject.CombineAlgorithm.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 1
		 DenyOverride. Запрет
		 доступа, если хотя бы один из результатов вычисления вернул запрет.


		 2
		 PermitOverride. Разрешение
		 доступа, если хотя бы один из результатов вычисления вернул разрешение.


		 5
		 FirstApplicable. Результат
		 вычисления первого доступного правила в иерархии политики. Правило
		 доступно при совпадении результата вычисления логического условия
		 в цели и условии. Если ни одно из правил недоступно, то политика
		 не выполнится.


		 6
		 OnlyOneApplicable.
		 Результат вычисления единственного доступного правила в иерархии
		 политики. Правило доступно при совпадении результата вычисления
		 логического условия в цели и условии. Если политика содержит несколько
		 правил или единственное правило недоступно, то политика не выполнится.


См. также:


[Перечисления
 сборки ABAC](KeABAC_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
