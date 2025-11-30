# Настройка вычисляемых фактов в стандартном кубе

Настройка вычисляемых фактов в стандартном кубе
-


# Настройка вычисляемых фактов в стандартном кубе


При создании стандартного куба, после формирования иерархии фактов осуществляется
 их привязка к полям источников данных. Если факты не привязаны к источнику
 данных, то для них в дальнейшем могут быть заданы формулы, по которым
 будут рассчитываться значения. Такие факты называются «Вычисляемые»,
 при работе из мастера настройка их параметров осуществляется на вкладке
 «[Вычисляемые факты](uinavobj.chm::/cube/createcube/master_standart/uimd_cube_createcube_master_standart_5.htm)».
 Работа с вычисляемыми фактами из прикладного кода происходит следующим
 образом:


	- Из коллекции привязок фактов CalcBindings, используя свойство
	 [Binding](../Interface/IStandardCubeFactBindings/IStandardCubeFactBindings.Binding.htm),
	 необходимо получить привязку для факта, указав его ключ.


	- В параметрах привязки указать [формулу](../Interface/IStandardCubeFactBinding/IStandardCubeFactBinding.Formula.htm),
	 по которой будет производиться расчет. При необходимости также настроить
	 дополнительные параметры.


В качестве формулы может быть указано какое-либо математическое выражение
 либо пользовательский макрос, который будет выполнен для каждой координаты
 куба. Макрос указывается в следующем формате: <идентификатор модуля/формы>.<наименование
 функции>.


## Формирование макросов для вычисляемых фактов


В качестве макроса для вычисляемого факта должна выступать функция,
 реализованная в глобальном пространстве имен модуля/формы. Функция может
 иметь какие-либо параметры, также через параметры в функцию могут быть
 переданы значения других фактов куба.


Примеры функций для вычисляемых фактов:


	Function CalculateFact: Variant;

	Var

	    Value: Variant;

	Begin

	    Value := ...; //Вычисление значения

	    Return Value;

	End Function CalculateFact;


	Function CalculateFact1(FactX: Double; FactY: Double): Double;

	Begin

	    Return FactX / FactY;

	End Function CalculateFact1;


Для доступа к параметрам текущего куба предназначены статические свойства
 класса [CubeClass](../Class/CubeClass/CubeClass.htm):
 [CurrentCoord](../Interface/ICubeClass/ICubeClass.CurrentCoord.htm)
 и [CurrentCube](../Interface/ICubeClass/ICubeClass.CurrentCube.htm).


	Function CalculateFact2: String;

	Var

	    Coord: IMatrixCoord;

	    DimSelSet: IDimSelectionSet;

	    DimInst: IDimInstance;

	    DimIndex: Integer;

	    ElementName: String;

	Begin

	    //Текущая координата

	    Coord := CubeClass.CurrentCoord;

	    DimSelSet := Coord.Matrix.Dimensions;

	    //Данные календарного измерения

	    DimInst := DimSelSet.FindById("CALENDAR").Dimension;

	    //Индекс календарного измерения в списке

	    DimIndex := DimSelSet.IndexOfKey(DimInst.Key);

	    //Наименование элемента в календаре, которому соответствует текущая координата

	    ElementName := DimInst.Attributes.FindById("NAME").Value(Coord.Item(DimIndex));

	    Return ElementName;

	End Function CalculateFact2;


См. также:


[Примеры](KeCubes_Sample.htm) | [IStandardCubeFactBinding.Formula](../Interface/IStandardCubeFactBinding/IStandardCubeFactBinding.Formula.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
