# IMsSpliceTransform.Result

IMsSpliceTransform.Result
-


# IMsSpliceTransform.Result


## Синтаксис


Result: [IMsFormulaTerm](../IMsFormulaTerm/IMsFormulaTerm.htm);


## Описание


Свойство Result
 возвращает терм, соответствующий моделируемой переменной.


## Комментарии


Для получения совмещаемых рядов используйте свойство [IMsSpliceTransform.Operands](IMsSpliceTransform.Operands.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором «MS». В данном контейнере должна присутствовать
 стандартная модель с идентификатором «MODEL_SPLICE», содержащая два или
 более фактора.


Добавьте ссылки на системные сборки: Metabase, Ms.


			Sub UserProc;

Var

    mb: IMetabase;

    ModelCont: IMetabaseObjectDescriptor;

    Model: IMsModel;

    Transform: IMsFormulaTransform;

    InputsVar: IMsFormulaTransformVariables;

    TransformVar: IMsFormulaTransformVariable;

    Slice: IMsFormulaTransformSlice;

    Operands: IMsFormulaTermList;

    x1, x2: IMsSpliceFormulaTerm;

    Formula: IMsFormula;

    Splice: IMsSpliceTransform;

    Coord: IMsFormulaTransformCoord;

    Calc: IMsModelCalculation;

    Arr: Array Of Double;

    i: Integer;

Begin

    // Получаем текущий репозиторий

    mb := MetabaseClass.Active;

    // Получаем контейнер моделирования

    ModelCont := mb.ItemById("MS");

    // Получаем модель

    Model := mb.ItemByIdNamespace("MODEL_SPLICE", ModelCont.Key).Edit As IMsModel;

    // Настраиваем параметры модели

    Transform := Model.Transform;

    Formula := Transform.FormulaItem(0);

    // Указываем, что модель будет совмещать ряды

    Formula.Kind := MsFormulaKind.Splice;

    Splice := Formula.Method As IMsSpliceTransform;

    // Задаем метод и направление совмещения рядов

    Splice.MethodType := MsSpliceType.Butt;

    Splice.SpliceDirection := MsSpliceDirection.Both;

    // Задаем первый совмещаемый ряд и его параметры

    InputsVar := Transform.Inputs;

    TransformVar := InputsVar.Item(0);

    Slice := TransformVar.Slices.Item(0);

    Operands := Splice.Operands;

    Operands.Clear;

    x1 := Operands.Add(Slice) As IMsSpliceFormulaTerm;

    x1.StartDate := DateTime.Parse("01.01.2001");

    x1.EndDate := DateTime.Parse("01.01.2004");

    x1.BoundByData := False;

    // Задаем второй совмещаемый ряд и его параметры

    TransformVar := InputsVar.Item(1);

    Slice := TransformVar.Slices.Item(0);

    x2 := Operands.Add(Slice) As IMsSpliceFormulaTerm;

    x2.StartDate := DateTime.Parse("01.01.2005");

    x2.EndDate := DateTime.Parse("01.01.2008");

    x2.BoundByData := False;

    // Сохраняем модель

    (Model As IMetabaseObject).Save;

    // Задаем настройки для расчета модели

    Coord := Transform.CreateCoord(Transform.Outputs.Item(0));

    Calc := Model.CreateCalculation;

    Calc.Period.IdentificationStartDate := DateTime.Parse("01.01.1990");

    Calc.Period.IdentificationEndDate := DateTime.Parse("31.12.2016");

    Calc.Period.ForecastStartDate := DateTime.Parse("01.01.2017");

    Calc.Period.ForecastEndDate := DateTime.Parse("31.12.2025");

    // Получаем данные моделируемой переменной и выводим их в окно консоли

    Arr := Splice.Result.Serie(Calc As IMsMethodCalculation);

    For i := 0 To Arr.Length - 1 Do

    Debug.WriteLine(Arr[i]);

    End For;

End Sub UserProc;


В результате выполнения примера модель «MODEL_SPLICE» будет совмещать
 данные первого фактора (с 2001 по 2004 годы) и второго фактора модели
 (с 2005 по 2008 годы). Данные моделируемой переменной будут выведены в
 окно консоли.


См. также:


[IMsSpliceTransform](IMsSpliceTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
