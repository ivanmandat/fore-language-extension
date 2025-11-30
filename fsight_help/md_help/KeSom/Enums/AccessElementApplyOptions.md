# AccessElementApplyOptions

AccessElementApplyOptions
-


# AccessElementApplyOptions


## Описание


Перечисление AccessElementApplyOptions
 содержит возможные варианты применения прав доступа на элемент.


Используется следующими методами:


	- [IAccessElement.Apply](../Interface/IAccessElement/IAccessElement.Apply.htm);


	- [IAccessElement.ApplyAccessToken](../Interface/IAccessElement/IAccessElement.ApplyAccessToken.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 None.
		 Заданные права будут применены только для настраиваемого элемента.


		 1
		 ByHierarhy. Заданные
		 права будут применены ко всем дочерним элементам настраиваемого
		 элемента.


		 2
		 ByLevel.
		 Заданные права будут применены к элементам всего
		 уровня, к которому принадлежит настраиваемый элемент.


		 4
		 TreatAsMask. Рассматривать
		 применяемое значение как битовую маску, при применении выполнить
		 AND с текущим значением по всем субъектам безопасности.


См. также:


[Перечисления сборки Metabase](KeSom_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
