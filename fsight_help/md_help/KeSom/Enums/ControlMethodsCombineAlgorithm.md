# ControlMethodsCombineAlgorithm

ControlMethodsCombineAlgorithm
-


# ControlMethodsCombineAlgorithm


## Описание


Перечисление ControlMethodsCombineAlgorithm
 содержит [алгоритмы
 комбинации прав](Admin.chm::/04_SecurityPolicy/Admin_SecPolicy.htm#access_control) по атрибутному и дискреционному методу
 разграничения доступа.


Используется свойством [IMetabasePolicy.MethodsCombineAlgorithm](../Interface/IMetabasePolicy/IMetabasePolicy.MethodsCombineAlgorithm.htm).


## Комментарии


При одновременном использовании [атрибутного](Admin.chm::/04_SecurityPolicy/Admin_ABAC.htm)
 и [дискреционного](Admin.chm::/04_SecurityPolicy/Admin_PermSep_D.htm)
 метода используется [алгоритм
 комбинации прав](Admin.chm::/04_SecurityPolicy/Admin_SecPolicy.htm#access_control):


	- AND. Операция разрешена,
	 если одновременно настроено разрешение операции по двум методам разграничения
	 доступа. Если по одному из методов разграничения доступа операция
	 запрещена или права доступа не определены, то результатом будет запрет
	 операции;


	- OR. Операция разрешена,
	 если настроено разрешение операции хотя бы по одному из методов разграничения
	 доступа, а по другому права доступа не определены. Если по одному
	 из методов разграничения доступа операция запрещена, то результатом
	 будет запрет операции.


## Допустимые значения


		 Значение
		 Краткое описание


		 1
		 Default_. По умолчанию.
		 Используется алгоритм комбинации «AND».


		 1
		 Deny. Используется
		 алгоритм комбинации «AND».


		 3
		 Permit. Используется
		 алгоритм комбинации «OR».


См. также:


[Перечисления сборки Metabase](KeSom_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
