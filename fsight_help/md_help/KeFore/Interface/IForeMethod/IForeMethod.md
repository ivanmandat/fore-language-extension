# IForeMethod

IForeMethod
-


# IForeMethod


Сборка: Fore;


## Описание


Интерфейс IForeMethod содержит
 свойства и методы для работы с пользовательским методом.


## Иерархия наследования


IForeMethod


## Комментарии


Пользовательский метод - это процедура или функция, осуществляющая расчёт
 или преобразование данных по алгоритму пользователя. Пользовательские
 методы расчета могут применяться в:


	- [редакторе
	 выражения](uinav.chm::/GUI/ExpressionEditor.htm);


	- [методах
	 расчёта вычисляемых рядов](UiDw.chm::/Workbook/CalculatedSeries/UiDw_cs_UserMethods.htm) в инструменте «[Анализ
	 временных рядов](UiDw.chm::/UiDw_Title.htm)»;


	- [методах
	 расчёта моделей](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_2_Model/Specification/UiModelling_SpecificationUserMethod.htm) в инструменте «[Моделирование
	 и прогнозирование](UiModelling.chm::/UiModelling_TitlePage.htm)»;


	- [мастере
	 функций](UIReport.chm::/Desktop/organizational_management/UiReport_Organizational_master_function.htm) в инструменте «[Отчёты](UIReport.chm::/UiReport_purpose.htm)»;


	- [редакторе
	 формул](CalculationAlgorithm.chm::/Desktop/Calculation_block/Formula.htm) в инструменте «[Алгоритмы
	 расчёта](CalculationAlgorithm.chm::/Purpose.htm)».


В зависимости от места, где будет применяться пользовательский метод,
 сигнатура процедуры или функций может быть разной. Для передачи в процедуру
 или функцию рядов данных необходимо использовать параметры с типом [ITimeSeries](KeMs.chm::/Interface/ITimeSeries/ITimeSeries.htm).


[![](../../Opened.gif)![](../../Closed.gif)Пример синтаксиса
 пользовательского метода](javascript:TextPopup(this))


	Пользовательский метод. Синтаксис:


	Sub MyFunc(Factor1, Factor2: ITimeSeries; Var Output: ITimeSeries; Coef1: Double; Coef2: Double);

	Begin

	    ...

	End Sub MyFunc;


	Параметры метода:


		- Factor1, Factor2.
		 Данные;


		- Output. Данные,
		 которые будут изменены и возвращены по результатам расчёта;


		- Coef1, Coef2.
		 Параметры, имеющие вещественное значение.


	Пользовательская функция. Синтаксис:


	Function MyFunc(Input, Input1: ITimeSeries; Coef: Double): ITimeSeries;

	Var

	    Output: ITimeSeries;

	Begin

	    ...

	    Return Output;

	End Function MyFunc;


	Параметры функции:


		- Input, Input1.
		 Данные;


		- Coef. Параметр,
		 имеющий вещественное значение;


		- Output. Переменная,
		 возвращающая результат расчёта функции.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Params](IForeMethod.Params.htm)
		 Свойство Params возвращает
		 коллекцию параметров пользовательского метода.


		 ![](../../Property_Image.gif)
		 [Type](IForeMethod.Type.htm)
		 Свойство Type определяет
		 тип пользовательского метода.


## Свойства, унаследованные от [IBaseMethod](../IBaseMethod/IBaseMethod.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Assembly](../IBaseMethod/IBaseMethod.Assembly.htm)
		 Свойство Assembly определяет
		 идентификатор модуля, содержащего пользовательский метод.


		 ![](../../Property_Image.gif)
		 [Category](../IBaseMethod/IBaseMethod.Category.htm)
		 Свойство Category определяет
		 категорию пользовательского метода.


		 ![](../../Property_Image.gif)
		 [Description](../IBaseMethod/IBaseMethod.Description.htm)
		 Свойство Description
		 определяет описание пользовательского метода.


		 ![](../../Property_Image.gif)
		 [Key](../IBaseMethod/IBaseMethod.Key.htm)
		 Свойство Key возвращает
		 ключ пользовательского метода.


		 ![](../../Property_Image.gif)
		 [Method](../IBaseMethod/IBaseMethod.Method.htm)
		 Свойство Method определяет
		 уникальный идентификатор пользовательского метода.


		 ![](../../Property_Image.gif)
		 [Name](../IBaseMethod/IBaseMethod.Name.htm)
		 Свойство Name определяет
		 наименование пользовательского метода.


		 ![](../../Property_Image.gif)
		 [ResultType](../IBaseMethod/IBaseMethod.ResultType.htm)
		 Свойство ResultType
		 определяет тип данных результата, возвращаемого пользовательским
		 методом.


		 ![](../../Property_Image.gif)
		 [Tag](../IBaseMethod/IBaseMethod.Tag.htm)
		 Свойство Tag определяет
		 любые данные, связанные с методом.


## Методы, унаследованные от [IBaseMethod](../IBaseMethod/IBaseMethod.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Bind](../IBaseMethod/IBaseMethod.Bind.htm)
		 Метод Bind инициализирует
		 пользовательский метод.


		 ![](../../Sub_Image.gif)
		 [Invoke](../IBaseMethod/IBaseMethod.Invoke.htm)
		 Метод Invoke выполняет
		 пользовательский метод.


См. также:


[Интерфейсы сборки Fore](../KeFore_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
