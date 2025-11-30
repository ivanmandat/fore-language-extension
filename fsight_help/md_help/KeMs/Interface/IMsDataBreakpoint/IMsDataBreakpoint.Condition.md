# IMsDataBreakpoint.Condition

IMsDataBreakpoint.Condition
-


# IMsDataBreakpoint.Condition


## Синтаксис


		Condition: [IExpression](ForeSys.chm::/Interface/IExpression/IExpression.htm);


## Описание


Свойство Condition
 возвращает условие срабатывания точки останова.


## Комментарии


Условие срабатывания точки останова задаётся выражением, которое должно
 вернуть результат логического типа. Точка данных в выражении определяется
 ключевым словом «Value». Пример выражения: «Value > 0». Если установлено
 данное условие, то точка останова будет срабатывать в точках данных, значение
 которых больше нуля.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MODEL_SPACE. В данном контейнере должна
 присутствовать задача моделирования с идентификатором PROBLEM» рассчитывающая
 модель, содержащую переменную с идентификатором VARABLE.


В примере используется класс MCallback,
 описание которого приведено в [IMsProblemCalculationCallback.OnBreak](../IMsProblemCalculationCallback/IMsProblemCalculationCallback.OnBreak.htm).


Добавьте ссылки на системные сборки: Cubes, Dimensions, Matrix, Metabase,
 Ms.


					Sub UserProc;

		Var

		    Mb: IMetabase;

		    ModelSpaceDescr: IMetabaseObjectDescriptor;

		    Problem: IMsProblem;

		    CalcSettings: IMsProblemCalculationSettings;

		    CallBack: MCallback;

		    Calculation: IMsProblemCalculation;

		    Breakpoints: IMsBreakpoints;

		    Breakpoint: IMsBreakpoint;

		    DataBreakpoint: IMsDataBreakpoint;

		    Stub: IVariableStub;

		    MatrixDs: IMatrixDataSource;

		    SelSetSource, SelSetDest:IDimSelectionSet;

		    i: Integer;

		Begin

		    Mb := MetabaseClass.Active;

		    ModelSpaceDescr := Mb.ItemById("MODEL_SPACE");

		    Problem := Mb.ItemByIdNamespace("PROBLEM",ModelSpaceDescr.Key).Edit As IMsProblem;

		    CalcSettings := Problem.CreateCalculationSettings;

		    CallBack := New MCallback.Create;

		    CalcSettings.Callback := CallBack;

		    CalcSettings.FactIncluded := True;

		    Calculation := Problem.Calculate(CalcSettings);

		    Breakpoints := Calculation.Breakpoints;

		    Breakpoints.Clear;

		    Breakpoint := Breakpoints.Add(MsBreakpointKind.Data);

		    DataBreakpoint := Breakpoint As IMsDataBreakpoint;

		    DataBreakpoint.Name := "DataBreakpoint";

		    Stub := Mb.ItemByIdNamespace("VARABLE",ModelSpaceDescr.Key).Edit As IVariableStub;

		    DataBreakpoint.Variable:= Stub;

		    MatrixDs := Calculation.VariableStub(Stub);

		    SelSetSource := MatrixDs.Execute(Null).Dimensions;

		    SelSetDest := SelSetSource.CreateCopy;

		    For i := 0 To SelSetDest.Count - 1 Do

		    SelSetDest.Item(i).SelectAll;

		    End For;

		    DataBreakpoint.Selection := SelSetDest;

		    DataBreakpoint.Condition.AsString := "Value = Null";

		    Calculation.Run;

		End Sub UserProc;


После выполнения примера для задачи расчёта будет установлена точка
 останова, срабатывающая, если значение в рассчитываемой точке для переменной
 VARABLE имеет значение Null.


См. также:


[IMsDataBreakpoint](IMsDataBreakpoint.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
