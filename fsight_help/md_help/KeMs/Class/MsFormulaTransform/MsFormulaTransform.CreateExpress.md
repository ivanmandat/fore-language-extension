# MsFormulaTransform.CreateExpress

MsFormulaTransform.CreateExpress
-


# MsFormulaTransform.CreateExpress


## Синтаксис


CreateExpress(Metabase: [IMetabase](KeSom.chm::/Interface/IMetabase/IMetabase.htm), ParamProvider: [IMsParamProvider](../../Interface/IMsParamProvider/IMsParamProvider.htm));


## Параметры


Metabase. Репозиторий, в котором содержится модель;


ParamProvider. Объект, содержащий настройки параметров.


## Описание


Конструктор CreateExpress создает настройки расчёта параметрической модели.


## Комментарии


Для создания параметров расчёта стандартной модели используйте конструктор [MsFormulaTransform.Create](MsFormulaTransform.Create.htm).


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент LanerBox и компонент UiErAnalyzer с идентификатором «UiErAnalyzer1», являющийся источником данных для LanerBox. В «UiErAnalyzer1» должна быть загружена рабочая книга базы данных временных рядов, содержащая ряды.


Добавьте ссылки на системные сборки: «Cubes», «Dal», «Dimensions», «Metabase», «Ms», «Xml».


			Sub UserProc;

Var

    Eax: IEaxAnalyzer;

    ParamProv: IMsParamProvider;

    Params: IMsModelParams;

    Param: IMsModelParam;

    Transform: IMsFormulaTransform;

    Output: IMsFormulaTransformVariable;

    Selector: IMsFormulaTransformSelector;

    Formula: IMsFormula;

    SeriesTransform: IMsFormulaTransform;

    xmlDoc: FreeThreadedDomDocument60;

    xmlElem: IXmlDomElement;

    Expression: IExpression;

    CalcSeries: ILanerCalculateSerie;

    Determ: IMsDeterministicTransform;

Begin

    Eax := UiErAnalyzer1.ErAnalyzer;

    // Получаем объект для работы с параметрами
    ParamProv := Eax.ParamProvider As IMsParamProvider;

    // Получаем коллекцию параметров
    Params := ParamProv.Params;

    // Создаем параметр, определяющий минимальное значение
    Param := Params.Add;

    Param.DataType := DbDataType.Integer;

    Param.DefaultValue := 20;

    Param.Hidden := False;

    Param.Id := "MIN_VAL";

    Param.Name := "MIN_VAL";

    // Создаем параметр, определяющий максимальное значение
    Param := Params.Add;

    Param.DataType := DbDataType.Integer;

    Param.DefaultValue := 50;

    Param.Hidden := False;

    Param.Id := "MAX_VAL";

    Param.Name := "MAX_VAL";

    // Обновляем объект для работы с параметрами
    Eax.UpdateParamProvider;

    // Создаем объект для настройки параметров расчёта
    Transform := New MsFormulaTransform.CreateExpress(MetabaseClass.Active, ParamProv);

    // Добавляем моделируемую переменную
    Transform.Outputs.Add(Eax.Laner.Series.Item(0).Stub);

    // Настраиваем срез моделируемой переменной
    Selector := Transform.CreateSelector;

    Output := Transform.Outputs.Item(0);

    Selector.Slice := Output.Slices.Add(Null);

    // Настраиваем метод расчёта
    Formula := Transform.Transform(Selector);

    Formula.Kind := MsFormulaKind.Deterministic;

    Formula.Level := DimCalendarLevel.Year;

    Determ := Formula.Method As IMsDeterministicTransform;

    Expression := Determ.Expression;

    // Задаем параметрическую формулу расчёта
    Expression.AsString := "RandBetween({MIN_VAL}, {MAX_VAL})";

    // Создаем вычисляемый ряд и задаем параметры его расчёта
    CalcSeries := Eax.Laner.Series.AddCalculateSerie("Случайные значения", DimCalendarLevel.Year);

    CalcSeries.CreateDerivedSeries := False;

    CalcSeries.UseTransform := True;

    // Используем параметрическую формулу для расчёта значений ряда
    SeriesTransform := CalcSeries.Transform.Transform As IMsFormulaTransform;

    xmlDoc := New FreeThreadedDomDocument60.Create;

    xmlElem := xmlDoc.createElement("Root");

    Transform.SaveToXml(xmlElem);

    SeriesTransform.LoadFromXml(xmlElem);

    // Обновляем данные вычисляемого ряда
    CalcSeries.Transform.UpdateOutputVariable;

    CalcSeries.Calculate;

End Sub UserProc;


Результат выполнения примера: в рабочую книгу добавлены параметры «MIN_VAL», «MAX_VAL» и вычисляемый ряд, рассчитывающий значения на основе данных параметров.


См. также:


[MsFormulaTransform](MsFormulaTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
