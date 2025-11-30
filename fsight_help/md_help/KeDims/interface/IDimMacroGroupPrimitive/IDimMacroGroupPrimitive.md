# IDimMacroGroupPrimitive

IDimMacroGroupPrimitive
-


# IDimMacroGroupPrimitive


Сборка: Dimensions;


## Описание


Интерфейс IDimMacroGroupPrimitive
 содержит свойства примитива, который использует прикладной макрос для
 формирования группы элементов.


## Иерархия наследования


           [IDimElementGroupPrimitive](../IDimElementGroupPrimitive/IDimElementGroupPrimitive.htm)


           IDimMacroGroupPrimitive


## Комментарии


В качестве макроса для формирования группы элементов может быть указана
 статическая Fore-функция, имеющая следующую сигнатуру:


			Public Shared Function <наименование
 функции>(<параметр_1>: IDimInstance; <параметр_2>:
 IDimElementGroup): IDimSelection;

Begin


End Function <наименование
 функции>;


Назначение входных параметров:


	- Параметр_1.
	 Обязательный. Предоставляет доступ к исходным данным справочника;


	- Параметр_2.
	 Необязательный. Должен присутствовать, если свойство [IDimMacroGroupPrimitive.SendGroupAsParam](IDimMacroGroupPrimitive.SendGroupAsParam.htm) имеет значение True.
	 Предоставляет доступ к текущей группе элементов.


В коде функции должна быть реализована отметка, элементы которой определят
 создаваемую группу элементов.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Module](IDimMacroGroupPrimitive.Module.htm)
		 Свойство Module определяет
		 объект репозитория, содержащий прикладной макрос, используемый
		 для формирования группы элементов.


		 ![](../../Property_Image.gif)
		 [ModuleMacro](IDimMacroGroupPrimitive.ModuleMacro.htm)
		 Свойство ModuleMacro
		 определяет привязку к макросу.


		 ![](../../Property_Image.gif)
		 [SendGroupAsParam](IDimMacroGroupPrimitive.SendGroupAsParam.htm)
		 Свойство SendGroupAsParam
		 определяет, используется ли в макросе группа элементов.


## Свойства, унаследованные от [IDimElementGroupPrimitive](../IDimElementGroupPrimitive/IDimElementGroupPrimitive.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Selection](../IDimElementGroupPrimitive/IDimElementGroupPrimitive.Selection.htm)
		 Свойство Selection
		 определяет отметку примитива группы элементов справочника.


		 ![](../../Property_Image.gif)
		 [Type](../IDimElementGroupPrimitive/IDimElementGroupPrimitive.Type.htm)
		 Свойство Type возвращает
		 тип примитива группы элементов справочника.


См. также:


[Интерфейсы
 сборки Dimensions](../KeDims_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
