# IMsFormulaTransformCoord.GetItemEx

IMsFormulaTransformCoord.GetItemEx
-


# IMsFormulaTransformCoord.GetItemEx


## Синтаксис


GetItemEx(StubKey: Integer; DimKey: Integer): Integer;


## Параметры


StubKey. Ключ источника данных;


DimKey. Ключ измерения.


## Описание


Метод GetItemEx возвращает
 индекс элемента по указанному источнику данных и измерению.


## Комментарии


Метод можно вызвать только внутри контекста расчета задачи с многомерным
 итератором. В связи измерений данного итератора должно быть добавлено
 измерение источника данных, отсутствующее в измерениях итератора.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором «MS_P», содержащего задачу моделирования
 с идентификатором «PROBLEM_GETITEMEX_». Данная задача должна рассчитывать
 метамодель, содержащую только многомерный итератор. Источником данных
 для контейнера моделирования является база данных временных рядов с идентификатором
 «TSDB_PARAM», содержащая измерение «Показатели», основанное на справочнике
 «MDM_DICT_INDICATORS». Данное измерение должно быть добавлено в связи
 измерений многомерного итератора и отсутствовать в его измерениях. Справочник
 «MDM_DICT_INDICATORS» содержится в репозитории НСИ идентификатором «MDM».


Также в репозитории должен присутствовать модуль с идентификатором «IMSFORMULATRANSFORMCOORD_GETITEMEX»,
 содержащий функцию «GetItemEx», описанную в данном примере.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Metabase, Ms,
 Transform.


			Sub UserProc;

Var

    mb: IMetabase;

    MsKey: Integer;

    Ms: IMsModelSpace;

    DS: IRubricator;

    Problem: IMsProblem;

    MM: IMsMetaModel;

    Iterator: IMsCalculationChainMultiDimIterator;

    model: IMsModel;

    Trans: IMsFormulaTransform;

    TransVar: IMsFormulaTransformVariable;

    Tree: IMsFormulaTransformSlicesTree;

    slice: IMsFormulaTransformSlice;

    Selector: IMsFormulaTransformSelector;

    Formula: IMsFormula;

    Determ: IMsDeterministicTransform;

    Expr: IExpression;

    Calculation: IMsProblemCalculation;

    CalcSettings: IMsProblemCalculationSettings;

Begin

    // Получаем текущий репозиторий

    mb := MetabaseClass.Active;

    // Получаем ключ контейнера моделирования

    MsKey := mb.GetObjectKeyById("MS_P");

    // Получаем контейнер моделирования

    Ms := mb.Item(MsKey).Bind As IMsModelSpace;

    // Получаем базу данных временных рядов,

    // являющуюся источником данных для контейнера моделирования

    DS := Ms.DefaultObject.Bind As IRubricator;

    // Получаем задачу моделирования

    Problem := mb.ItemByIdNamespace("PROBLEM_GETITEMEX_", MsKey).Bind As IMsProblem;

    // Получаем метамодель, рассчитываемую задачей

    MM := Problem.EditMetaModel;

    // Получаем многомерный итератор

    Iterator := MM.CalculationChain.Item(0) As IMsCalculationChainMultiDimIterator;

    // Создаем внутри многомерного итератора модель

    Iterator.Contents.Clear;

    model := Iterator.Contents.AddExclusiveModel.Model;

    // Настраиваем модель

    Trans := model.Transform;

    // Добавляем моделируемую переменную

    TransVar := Trans.Outputs.Add(DS As IVariableStub);

    Tree := TransVar.SlicesTree(TransVar);

    Slice := Tree.CreateSlice(1);

    Selector := Trans.CreateSelector;

    Selector.Slice := Slice;

    // Настраиваем метод расчета модели: детерминированное уравнение

    Formula := Trans.Transform(Selector);

    Formula.Kind := MsFormulaKind.Deterministic;

    Determ := Formula.Method As IMsDeterministicTransform;

    // Задаем выражение для расчета модели

    Expr := Determ.Expression;

    Expr.AsString := "IMSFORMULATRANSFORMCOORD_GETITEMEX.GetItemEx";

    If Expr.ErrorInfo <> Null Then

        debug.WriteLine(Expr.ErrorInfo.ErrorMessage);

        Return;

    End If;

    // Сохраняем изменения в модели

    model.MetabaseObject.Save;

    // Сохраняем изменения в метамодели

    (MM As IMetabaseObject).Save;

    // Создаем параметры расчёта задачи

    CalcSettings := Problem.CreateCalculationSettings;

    // Выполняем расчёт задачи

    Calculation := Problem.Calculate(CalcSettings);

    Calculation.Run;

End Sub UserProc;


// Функция, которая рассчитывается моделью внутри многомерного итератора

Public Function GetItemEx: variant;

Var

    mb: IMetabase;

    i, j: integer;

    StubKey, DimKey: Integer;

    context: ITsCalculationContext;

    Coord: IMsFormulaTransformCoord;

    t: ITimeSeries;

Begin

    // Получаем текущий репозиторий

    mb := MetabaseClass.Active;

    // Получим ключ базы данных временных рядов

    StubKey := mb.GetObjectKeyById("TSDB_PARAM");

    // Получим ключ измерения

    DimKey := mb.GetObjectKeyByIdNamespace("MDM_DICT_INDICATORS", mb.GetObjectKeyById("MDM"));

    // Получаем контекст расчета

    context := TsCalculation.Current;

    // Создаем выходной ряд данных

    t := context.CreateTimeSeries(DimCalendarLevel.Year) As ITimeSeries;

    // Получаем текущую координату

    coord := t.Coord;

    // Если координата по измерению «Показатели» нулевая, то выгрузятся значения 22,

    // если координата больше 0, то значения 11

    If Coord.GetItemEx(StubKey, DimKey) > 0 Then

        i := 11;

    Else

        i := 22;

    End If;

    // Наполняем выходной ряд данными

    For j := t.StartIndex To t.EndIndex Do

        t.Item(j) := i;

    End For;

    // Возвращаем результат выполнения функции

    Return t;

End Function GetItemEx;


В результате выполнения примера в многомерный итератор будет добавлена
 модель, рассчитывающая пользовательскую функцию.


См. также:


[IMsFormulaTransformCoord](IMsFormulaTransformCoord.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
