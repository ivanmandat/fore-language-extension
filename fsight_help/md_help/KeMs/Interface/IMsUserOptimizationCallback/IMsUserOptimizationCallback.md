# IMsUserOptimizationCallback

IMsUserOptimizationCallback
-


# IMsUserOptimizationCallback


Сборка: Ms;


## Описание


Интерфейс IMsUserOptimizationCallback
 используется для определения алгоритма, реализующего события при расчёте
 [пользовательской
 задачи оптимизации](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_4_Problem/uimodelling_problem_2.htm).


## Иерархия наследования


           IMsUserOptimizationCallback


## Комментарии


Пользовательская задача оптимизации рассчитывается только по заданному
 [алгоритму
 пользователя](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_4_Problem/CustomAlgorithm.htm). В алгоритме могут использоваться различные
 оптимизационные пакеты, например, [LPSolve](UiNav.chm::/02_Navigator/CommonSettings/Integration.htm#lpsolve).


Для настройки параметров расчёта пользовательской задачи оптимизации
 используйте интерфейс [IMsUserOptimizationProblem](../IMsUserOptimizationProblem/IMsUserOptimizationProblem.htm).


Для использования пользовательского алгоритма при расчёте пользовательской
 задачи оптимизации создайте модуль с обработчиком событий:


			Public Class <наименование
 класса>: Object, IMsUserOptimizationCallback

    Public Sub OnLoad(Xml: IXMLDOMElement);

    Begin

       //...

       // Реализация
 события, возникающего после загрузки задачи

       //...

    End Sub OnLoad;


    Public Sub OnSave(Xml: IXMLDOMElement);

    Begin

       //...

       // Реализация
 события, возникающего после сохранения целевой функции

       //...

    End Sub OnSave;


    Public Sub OnBeforeExecute(Calculation: IMsMethodCalculation; Coord: IMsFormulaTransformCoord; Problem: IMsUserOptimizationProblem);

    Begin

       //...

       // Реализация
 события, возникающего перед расчётом задачи

       //...

    End Sub OnBeforeExecute;


    Public Sub OnExecute(Runtime: IMsUORuntime);

    Begin

       //...

       // Реализация
 события, возникающего во время расчёта задачи на каждой календарной точке

       //...

    End Sub OnExecute;


    Public Sub OnAfterExecute(Calculation: IMsMethodCalculation; Coord: IMsFormulaTransformCoord; Problem: IMsUserOptimizationProblem);

    Begin

       //...

       // Реализация
 события, возникающего после расчёта задачи

       //...

    End Sub OnAfterExecute;


    Public Sub OnSetupParams(Params: IMsModelParams);

    Begin

       //...

       // Реализация
 события, возникающего для настройки параметров задачи в пользовательском
 интерфейсе

       //...

    End Sub OnSetupParams;

End Class <наименование класса>;


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [OnAfterExecute](IMsUserOptimizationCallback.OnAfterExecute.htm)
		 Метод OnAfterExecute
		 реализует событие, возникающее после расчёта пользовательской
		 задачи оптимизации.


		 ![](../../Sub_Image.gif)
		 [OnBeforeExecute](IMsUserOptimizationCallback.OnBeforeExecute.htm)
		 Метод OnBeforeExecute
		 реализует событие, возникающее до расчёта пользовательской задачи
		 оптимизации.


		 ![](../../Sub_Image.gif)
		 [OnExecute](IMsUserOptimizationCallback.OnExecute.htm)
		 Метод OnExecute реализует
		 событие, возникающее во время расчёта пользовательской задачи
		 оптимизации на каждой календарной точке периода прогнозирования.


		 ![](../../Sub_Image.gif)
		 [OnLoad](IMsUserOptimizationCallback.OnLoad.htm)
		 Метод OnLoad реализует
		 событие, возникающее после загрузки пользовательской задачи оптимизации
		 из XML-файла.


		 ![](../../Sub_Image.gif)
		 [OnSave](IMsUserOptimizationCallback.OnSave.htm)
		 Метод OnSave реализует
		 событие, возникающее после сохранения целевой функции.


		 ![](../../Sub_Image.gif)
		 [OnSetupParams](IMsUserOptimizationCallback.OnSetupParams.htm)
		 Метод OnSetupParams
		 отображает пользовательский интерфейс для настройки параметров
		 пользовательской задачи оптимизации.


См. также:


[Интерфейсы сборки Ms](../KeMs_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
