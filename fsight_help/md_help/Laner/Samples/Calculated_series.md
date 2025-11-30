# Создание и настройка вычисляемого ряда

Создание и настройка вычисляемого ряда
-


# Создание и настройка вычисляемого ряда


Для выполнения примера предполагается наличие в репозитории рабочей
 книги с идентификатором «OBJ123», в которой будет добавлен вычисляемый
 ряд. В рабочую книгу должно быть добавлено как минимум два ряда, на основе
 которых будет создан вычисляемый ряд. В примере рассматривается создание
 вычисляемого ряда, значения которого представляют собой сумму первого
 и второго рядов.


Подключите ссылки на следующие системные сборки:


	- Cubes;


	- Dimension;


	- Express;


	- Laner;


	- Metabase;


	- Ms.


## Пример


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Exp: IEaxAnalyzer;

    WB: ILaner;

    UsingSeries, UsingSeries2: ILanerSerie;

    NewSeries: ILanerCalculateSerie;

    Str: String;

    Trans: IFormulaTransformModel;

    ms: IMsFormulaTransform;

    TransformVar: IMsFormulaTransformVariable;

    Coord: IMsFormulaTransformCoord;

    Slice: IMsFormulaTransformSlice;

    selector: IMsFormulaTransformSelector;

    Formula: IMsFormula;

    Det: IMsDeterministicTransform;

    Term1, Term2: IMsFormulaTerm;

Begin

    MB := MetabaseClass.Active;

    //Открываем рабочую книгу на редактирование

    MObj := MB.ItemById("OBJ123").Edit;

    Exp := MObj As IEaxAnalyzer;

    WB := Exp.Laner;

    WB.BeginUpdate;

    //Получаем первый и второй ряды рабочей книги

    UsingSeries := WB.Series.Item(0) As ILanerSerie;

    UsingSeries2 := WB.Series.Item(1) As ILanerSerie;

    //Определяем заголовок вычисляемого ряда

    Str := "Summ_(" + UsingSeries.Name + " , " + UsingSeries2.Name + ")";

    //Создаем вычисляемый ряд

    NewSeries := WB.Series.AddCalculateSerie(Str);

    // Возвращаем объект, позволяющий настроить параметры вычисляемого ряда

    Trans := NewSeries.Transform;

    //Добавляем в качестве входных переменных источники данных первого и второго рядов рабочей книги

    Trans.AddInputVariable(UsingSeries.Stub);

    Trans.AddInputVariable(UsingSeries2.Stub);

    //Создаем объект расчета модели

    ms := Trans.Transform As IMsFormulaTransform;

    //Возвращаем первую выходную переменную метода расчета модели

    TransformVar := ms.Outputs.Item(0);

    //Создаем объект, содержащий параметры первой выходной переменной, необходимые для расчёта модели

    Coord := ms.CreateCoord(TransformVar);

    // Добавляем объект в коллекцию срезов переменной

    Slice := TransformVar.Slices.Add(Null);

    //Cоздаем объект, содержащий свойства для выбора среза переменной, по которому в дальнейшем будет осуществляться настройка метода расчёта

    Selector := ms.CreateSelector;

    //Определяем срез переменной, для которого необходимо настроить параметры метода расчета

    Selector.Slice := Slice;

    // Создаем объект, позволяющий настроить параметры метода расчёта

    Formula := ms.Transform(Selector);

    //Определяем метод расчета модели

    Formula.Kind := MsFormulaKind.Deterministic;

    //Определяем шаг расчета, используемый при расчете модели

    Formula.Level := DimCalendarLevel.Year;

    //Ввозвращаем параметры метода, используемого для расчета модели

    Det := Formula.Method As IMsDeterministicTransform;

    //Добавляем коллекцию входных переменных метода источник данных первого ряда рабочей книги

    TransformVar := ms.Inputs.Add(UsingSeries.Stub);

    //Добавляем объект в коллекцию срезов переменной

    Slice := TransformVar.Slices.Add(Null);

    //Добавляем коллекцию входных переменных метода источник данных первого ряда рабочей книги

    TransformVar := ms.Inputs.Add(UsingSeries.Stub);

    // Добавляем объект в коллекцию срезов переменной

    Slice := TransformVar.Slices.Add(Null);

    //Создаем первый терм для уравнения модели

    Term1 := Det.Operands.Add(Slice);

    //Добавляем коллекцию входных переменных метода источник данных второго ряда рабочей книги

    TransformVar := ms.Inputs.Add(UsingSeries2.Stub);

    Slice := TransformVar.Slices.Add(Null);

    //Создаем второй терм для уравнения модели

    Term2 := Det.Operands.Add(Slice);

    //Создаем уравнение модели

    Det.Expression.AsString := Term1.TermToInnerText + " + " + Term2.TermToInnerText;

    //Вычисляем созданный ряд

    NewSeries.Calculate;

    WB.EndUpdate;

    MObj.Save;

End Sub UserProc;


После выполнения примера будет добавлен новый вычисляемый ряд, представляющий
 собой сумму данных первых двух рядов.


См. также:


[Примеры](Laner_Samples.htm)
 | [ILaner](../Interface/ILaner/ILaner.htm) | [ILanerSeries](../Interface/ILanerSeries/ILanerSeries.htm)
 | [ILanerCalculateSerie](../Interface/ILanerCalculateSerie/ILanerCalculateSerie.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
