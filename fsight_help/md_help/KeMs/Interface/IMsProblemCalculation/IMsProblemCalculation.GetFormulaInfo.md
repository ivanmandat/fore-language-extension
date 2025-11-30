# IMsProblemCalculation.GetFormulaInfo

IMsProblemCalculation.GetFormulaInfo
-


# IMsProblemCalculation.GetFormulaInfo


## Синтаксис


		GetFormulaInfo(StubKey: Integer; SelSet:
		 [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm)):
		 [IMsFormulaInfoList](../IMsFormulaInfoList/IMsFormulaInfoList.htm);


## Параметры


StubKey. Ключ источника данных,
 для которого производился расчёт.


SelSet. Отметка, формирующая
 точку, в которой необходимо получить информацию о формулах.


## Описание


Метод GetFormulaInfo возвращает
 информацию о формулах, которые применялись для расчёта [задачи
 моделирования](uimodelling.chm::/2_container_of_modeling/2_3_work_object/2_3_4_problem/uimodelling_problem.htm) в заданной точке.


## Комментарии


Получение информации о формулах доступно при выполнении следующих требований:


	- При расчётах используются модель детерминированного уравнения
	 или модель матричной агрегации;


	- Для задачи должен быть установлен тип - Задача многопоточной
	 трансформации.


В параметре SelSet должна передаваться
 единичная отметка, сформированная по измерениям источника, ключ которого
 передаётся в StubKey.


## Пример


Для выполнения примера предполагается наличие контейнера моделирования
 с идентификатором MODEL_SPACE, в котором создана задача моделирования
 PROBLEM. Задача настроена на расчёт модели детерминированного уравнения.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Matrix, Metabase,
 Ms.


					Sub UserProc;

		Var

		    Mb: IMetabase;

		    Problem: IMsProblem;

		    CalcSet: IMsProblemCalculationSettings;

		    Calc: IMsProblemCalculation;

		    Variable: IVariableStub;

		    SelFactory: DimSelectionSetFactory;

		    SelSet: IDimSelectionSet;

		    Sel: IDimSelection;

		    Res: IMsFormulaInfoList;

		    ResI: IMsFormulaInfo;

		    InstIterator: IMsFormulaGenInstanceIterator;

		    OperandsIterator: IMsFormulaGenTermIterator;

		    Point: IMsFormulaGenTermPoint;

		    DimInst: IDimInstance;

		    k, i, l: Integer;

		    s: String;

		Begin

		    // Получение задачи

		    Mb := MetabaseClass.Active;

		    Problem := Mb.ItemByIdNamespace("PROBLEM", Mb.GetObjectKeyById("MODEL_SPACE")).Bind As IMsProblem;

		    // Расчёт задачи

		    CalcSet := Problem.CreateCalculationSettings;

		    CalcSet.SupportPartialCalculation := True;

		    Calc := Problem.Calculate(CalcSet);

		    Calc.Run;

		    // Получение источника данных, для которого производился расчёт

		    Variable := Calc.VariableStubs.Item(0);

		    // Создание отметки. Отмечаются первые элементы измерений

		    SelFactory := New DimSelectionSetFactory.Create;

		    SelSet := SelFactory.CreateDimSelectionSet;

		    Sel := SelSet.Add((Variable.Calendar As IMetabaseObject).Open(Null) As IDimInstance);

		    Sel.SelectElement(0, False);

		    k := Variable.DimensionCount;

		    For i := 0 To k - 1 Do

		        Sel := SelSet.Add((Variable.Dimension(i) As IMetabaseObject).Open(Null) As IDimInstance);

		        Sel.SelectElement(0, False);

		    End For;

		    // Получение информации о формулах в точке расчёта

		    Res := Calc.GetFormulaInfo(Variable.Key, SelSet);

		    If (Res.Count = 0) Then

		        Debug.WriteLine("Точка не считалась");

		    Else

		        Debug.WriteLine("Всего моделей, которыми считалась точка: " + Res.Count.ToString);

		        For i := 0 To Res.Count - 1 Do

		            ResI := Res.Item(i);

		            Debug.WriteLine("=========== " + (i + 1).ToString + " ===========");

		            Debug.WriteLine("Модель: " + ResI.Model.Name);

		            Debug.WriteLine("Метамодель: " + ResI.MetaModel.Name);

		            Debug.WriteLine("Задача: " + ResI.Problem.Name);

		            Debug.WriteLine("Выражение формулы: " + ResI.Expression);

		            // Информация о точке расчёта

		            InstIterator := ResI.InstancesIterator;

		            If InstIterator.ErrorType = MsFormulaGenerationErrorType.NoError Then

		                Point := InstIterator.LeftPart.Point;

		                SelSet := (Point.Coord(0).MatrixModel As IMatrix).Dimensions;

		                For k := 0 To SelSet.Count - 1 Do

		                    DimInst := SelSet.Item(k).Dimension;

		                    s := s + DimInst.Name + " = " + DimInst.Elements.Name(Point.Coord(0).Item(k)) + "; ";

		                End For;

		                Debug.WriteLine("Точка расчёта: " + s);

		                // Информация об операндах, использованных в точке расчёта

		                s := "";

		                OperandsIterator := InstIterator.Operands;

		                While Not OperandsIterator.Eof Do

		                    Point := OperandsIterator.Term.Point;

		                    SelSet := (Point.Coord(0).MatrixModel As IMatrix).Dimensions;

		                    For k := 0 To SelSet.Count - 1 Do

		                        DimInst := SelSet.Item(k).Dimension;

		                        s := s + DimInst.Name + " = " + DimInst.Elements.Name(Point.Coord(0).Item(k)) + "; ";

		                    End For;

		                    Debug.WriteLine("Операнд: " + s);

		                    Debug.WriteLine("Aggr: " + OperandsIterator.Term.Aggregation.ToString);

		                    Debug.WriteLine("---Количество значений операнда: " + Point.ValuesCount.ToString);

		                    For l := 0 To Point.ValuesCount - 1 Do

		                        Debug.WriteLine("---Значение № " + l.ToString + " = " + Point.Value(l));

		                    End For;

		                    s := "";

		                    OperandsIterator.Next;

		                End While;

		            Else

		                Debug.WriteLine("Ошибка: " + InstIterator.ErrorText);

		            End If;

		        End For;

		    End If;

		End Sub UserProc;


При выполнении примера будет осуществлён расчёт задачи моделирования.
 Будет осуществлена проверка на корректность формул и в случае отсутствия
 ошибок в консоль среды разработки будет выведена информация о формулах,
 которые использовались при расчёте в самой первой точке расчёта модели.


См. также:


[IMsProblemCalculation](IMsProblemCalculation.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
