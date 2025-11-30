# IDimMacroSelectionPrimitive

IDimMacroSelectionPrimitive
-


# IDimMacroSelectionPrimitive


Сборка: Dimensions;


## Описание


Интерфейс IDimMacroSelectionPrimitive
 содержит свойства примитива, который использует прикладной макрос для
 формирования схемы отметки.


## Иерархия наследования


           [IDimSelectionSchemaPrimitive](../IDimSelectionSchemaPrimitive/IDimSelectionSchemaPrimitive.htm)


           IDimMacroSelectionPrimitive


## Комментарии


В качестве макроса для формирования схемы отметки может быть указана
 процедура, имеющая следующую сигнатуру:


			Public Shared Sub <наименование
 процедуры>(<параметр_1>, <параметр_2>: IDimSelection);

Begin


End Function <наименование
 процедуры>;


Назначение входных параметров:


	- Параметр_1.
	 Предоставляет доступ к изменяемой схеме отметки. В нем будет содержаться
	 отметка, полученная при применении примитивов, добавленных перед данным
	 примитивом;


	- Параметр_2. Содержит
	 отметку передаваемой группы элементов. Может использоваться для ограничения
	 отмечаемых элементов. Если группа элементов не указана, то параметр
	 имеет значение Null.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Module](IDimMacroSelectionPrimitive.Module.htm)
		 Свойство Module определяет
		 объект репозитория, содержащий прикладной макрос, используемый
		 для формирования группы элементов.


		 ![](../../Property_Image.gif)
		 [ModuleMacro](IDimMacroSelectionPrimitive.ModuleMacro.htm)
		 Свойство ModuleMacro
		 определяет привязку к макросу.


## Свойства, унаследованные от [IDimSelectionSchemaPrimitive](../IDimSelectionSchemaPrimitive/IDimSelectionSchemaPrimitive.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Deselect](../IDimSelectionSchemaPrimitive/IDimSelectionSchemaPrimitive.Deselect.htm)
		 Свойство Deselect определяет,
		 что происходит с отметкой примитива при построении схемы отметки
		 справочника.


		 ![](../../Property_Image.gif)
		 [Type](../IDimSelectionSchemaPrimitive/IDimSelectionSchemaPrimitive.Type.htm)
		 Свойство Type определяет
		 тип примитива схемы отметки справочника.


См. также:


[Интерфейсы
 сборки Dimensions](../KeDims_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
