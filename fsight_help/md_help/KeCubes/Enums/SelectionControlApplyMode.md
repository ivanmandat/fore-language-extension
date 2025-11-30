# SelectionControlApplyMode

SelectionControlApplyMode
-


# SelectionControlApplyMode


## Описание


Перечисление SelectionControlApplyMode
 содержит режимы, в котором будет выполняться применение параметров управления
 отметкой.


Используется следующими свойствами и методами:


	- [ICalculatedCubeInstance.CreateApply](../Interface/ICalculatedCubeInstance/ICalculatedCubeInstance.CreateApply.htm);


	- [ICubeInstanceDestination.CreateApplyDimensions](../Interface/ICubeInstanceDestination/ICubeInstanceDestination.CreateApplyDimensions.htm);


	- [ICubeSelectionControl.CreateApply](../Interface/ICubeSelectionControl/ICubeSelectionControl.CreateApply.htm);


	- [ICubeSelectionControlApply.Mode](../Interface/ICubeSelectionControlApply/ICubeSelectionControlApply.Mode.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 Default.
		 Режим выполнения по умолчанию.


		 1
		 Apply.
		 Применение параметров.

		Во время применения параметров определяются управляющие и управляемые
		 измерения. Управляемые измерения отстраиваются в зависимости от
		 отметки, установленной в управляющих измерениях.


		 2
		 Save.
		 Сохранение структуры измерений в XML.
		Примечание.
		 Не предназначено для использования в прикладном коде.


		 3
		 Load.
		 Загрузка структуры измерений из XML.
		Примечание.
		 Не предназначено для использования в прикладном коде.


		 4
		 Open.
		 Режим, при котором указанная отметка будет использоваться в качестве
		 параметра для открытия источника. Открытый экземпляр источника
		 будет доступен в свойстве ICubeSelectionControlApply.SourceOpen.


		 5
		 ForEach.
		 Для обработки процесса применения параметров будет использоваться
		 объект, указанный в свойстве OnEach.

		В качестве значения свойства должен быть указан объект, реализующий
		 метод интерфейса ICubeSelectionControlOnEach. Данный метод будет
		 вызываться для каждого измерения куба.
		Примечание.
		 Не предназначено для использования в прикладном коде.


		 6
		 Sort.
		 Режим сортировки списка измерений в порядке зависимости. После
		 применения параметров управления отметкой в [результирующем
		 списке](../Interface/ICubeSelectionControlApply/ICubeSelectionControlApply.ResultSelection.htm) будут содержаться сначала управляющие, а затем управляемые
		 измерения куба.


См. также:


[Перечисления сборки Cubes](KeCubes_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
