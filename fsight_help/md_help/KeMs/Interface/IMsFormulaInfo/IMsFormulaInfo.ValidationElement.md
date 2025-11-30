# IMsFormulaInfo.ValidationElement

IMsFormulaInfo.ValidationElement
-


# IMsFormulaInfo.ValidationElement


## Синтаксис


ValidationElement: Integer;


## Описание


Свойство ValidationElement возвращает
 индекс элемента в измерении валидаций, который соответствует формуле.


## Комментарии


Если точка рассчитывалась формулой из [блока
 контроля](CalculationAlgorithm.chm::/Desktop/Control_Block/Control_Block.htm), то значение в этой точке можно получить из
 матрицы валидаций. Для получения значения формируется координата, которая
 соответствует исходной точке, а также имеет дополнительное измерение -
 измерение валидаций. Свойство ValidationElement
 возвращает индекс элемента в измерении валидаций. Элементы в измерении
 валидаций формируются при выполнении блока контроля.


## Пример


Для выполнения примера в репозитории предполагается наличие алгоритма
 расчёта с идентификатором CALC_ALG. В алгоритме используется блок контроля.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Matrix, Metabase,
 Ms.


			Sub UserProc;

Var

    Mb: IMetabase;

    MDesc, MDescChild: IMetabaseObjectDescriptor;

    Problem: IMsProblem;

    Calc: IMsProblemCalculation;

    CalcSet: IMsProblemCalculationSettings;

    Variable: IVariableStub;

    SelFactory: DimSelectionSetFactory;

    SelSet, ValSelSet: IDimSelectionSet;

    Sel: IDimSelection;

    Res: IMsFormulaInfoList;

    ResI: IMsFormulaInfo;

    Point: IMsFormulaGenTermPoint;

    DimInst: IDimInstance;

    ValidMatrix: IMatrix;

    NewCoord: IMatrixCoord;

    s: string;

    k, i, El: integer;

Begin

    Mb := MetabaseClass.Active;

    // Алгоритм расчёта

    MDesc := Mb.ItemById("CALC_ALG");

    // Получение контейнера моделирования

    For Each MDescChild In MDesc.Children Do

        If MDescChild.ClassId = MetabaseObjectClass.KE_CLASS_MODELSPACE Then

            MDesc := MDescChild;

            Break;

        End If;

    End For;

    // Получение задачи

    For Each MDescChild In MDesc.Children Do

        If MDescChild.ClassId = MetabaseObjectClass.KE_CLASS_MSPROBLEM Then

            Break;

        End If;

    End For;

    Debug.WriteLine(MDescChild.Key.ToString + " " + MDescChild.Id + " " + MDescChild.Name);

    // Расчёт задачи

    Problem := MDescChild.Edit As IMsProblem;

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

    // Получение информации о формуле

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

            Point := ResI.InstancesIterator.LeftPart.Point;

            SelSet := (Point.Coord(0).MatrixModel As IMatrix).Dimensions;

            For k := 0 To SelSet.Count - 1 Do

                DimInst := SelSet.Item(k).Dimension;

                s := s + DimInst.Name + " = " + DimInst.Elements.Name(Point.Coord(0).Item(k)) + " ";

            End For;

            Debug.WriteLine("Точка расчёта: " + s);

            // Получение элемента в измерении валидаций

            El := ResI.ValidationElement;

            Debug.WriteLine("ValidationElement : " + El.ToString);

            If El <> -1 Then

                // Если элемент имеется, то получаем матрицу валидаций

                ValidMatrix := Calc.GetValidationExceptions(Variable.Key).Execute(Null);

                // Формируем координату, чтобы получить значение из матрицы валидаций

                ValSelSet := ValidMatrix.Dimensions;

                NewCoord := ValidMatrix.CreateCoord;

                For k := 0 To ValSelSet.Count - 1 Do

                    Sel := SelSet.FindByKey(ValSelSet.Item(k).Dimension.Key);

                    If Sel <> Null Then

                        // Если обычное измерение, то выставляем в координату элемент из отметки

                        NewCoord.Item(k) := Sel.FirstDimElement;

                    Else

                        // Если измерение валидаций, то выставляем в координату полученный элемент

                        NewCoord.Item(k) := El;

                    End If;

                End For;

                // Получаем значение из матрицы валидаций

                Debug.WriteLine("Значение: " + ValidMatrix.Item(NewCoord));

            Else

                Debug.WriteLine("Значение: " + Point.Value(0));

            End If;

        End For;

    End If;

End Sub UserProc;


В результате выполнения примера будет осуществлён расчёт задачи моделирования,
 которая используется блоком контроля. В консоль среды разработки будет
 выведена информация о формулах, которые использовались при расчёте в самой
 первой точке расчёта модели. Значение для точки будет получено из матрицы
 валидаций.


См. также:


[IMsFormulaInfo](IMsFormulaInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
