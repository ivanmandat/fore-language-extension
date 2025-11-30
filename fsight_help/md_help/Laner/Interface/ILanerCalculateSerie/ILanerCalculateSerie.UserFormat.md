# ILanerCalculateSerie.UserFormat

ILanerCalculateSerie.UserFormat
-


# ILanerCalculateSerie.UserFormat


## Синтаксис


UserFormat: String;


## Описание


Свойство UserFormat определяет
 формат наименования для вычисляемого ряда.


## Комментарии


Значение свойства учитывается, если свойству [ILanerSerie.UserName](../ILanerSerie/ILanerSerie.UserName.htm)
 установлено значение False.


Свойство поддерживает использование параметра «%s»,
 который при генерации наименования заменяется наименованием входного ряда.
 Например, UserFormat имеет значение
 «Abs(%s)», а входной ряд имеет
 наименование «Albania|BCA». Таким
 образом, для вычисляемого ряда будет использоваться наименование «Abs(Albania|BCA)».


## Пример


Для выполнения примера в репозитории предполагается наличие рабочей
 книги с идентификатором «WORKBOOK_CALC_SERIES», содержащей несколько рядов
 данных.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Express, Laner,
 Metabase, Ms.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    WbkObj: IMetabaseObject;

	    EaxAn: IEaxAnalyzer;

	    Laner: Ilaner;

	    UsingSerie: ILanerSerie;

	    NewSerie: ILanerCalculateSerie;

	    Transf: IFormulaTransformModel;

	    ms: IMsFormulaTransform;

	    TransformVar: IMsFormulaTransformVariable;

	    Coord: IMsFormulaTransformCoord;

	    Slice: IMsFormulaTransformSlice;

	    selector: IMsFormulaTransformSelector;

	    Formula: IMsFormula;

	    Det: IMsDeterministicTransform;

	    Term1: IMsFormulaTerm;

	Begin

	    // Получаем рабочую книгу

	    mb := MetabaseClass.Active;

	    WbkObj := mb.ItemById("WORKBOOK_CALC_SERIES").Edit;

	    EaxAn := WbkObj As IEaxAnalyzer;

	    // Получаем объект для выполнения операций с рабочей книгой

	    Laner := EaxAn.Laner;

	    // Получаем первый ряд в рабочей книге

	    UsingSerie := Laner.Series.Item(0) As ILanerSerie;

	    // Создаем вычисляемый ряд в рабочей книге

	    NewSerie := Laner.Series.AddCalculateSerie("");

	    // Задаем формат наименования вычисляемого ряда

	    NewSerie.UserName := False;

	    NewSerie.UserFormat := "Логарифм (%s)";

	    // Задаем параметры расчета вычисляемого ряда

	    Transf := NewSerie.Transform;

	    Transf.AddInputVariable(UsingSerie.Stub);

	    ms := Transf.Transform As IMsFormulaTransform;

	    TransformVar := ms.Outputs.Item(0);

	    Coord := ms.CreateCoord(TransformVar);

	    Slice := TransformVar.Slices.Add(Null);

	    Selector := ms.CreateSelector;

	    Selector.Slice := Slice;

	    Formula := ms.Transform(Selector);

	    Formula.Kind := MsFormulaKind.Deterministic;

	    Formula.Level := DimCalendarLevel.Year;

	    Det := Formula.Method As IMsDeterministicTransform;

	    TransformVar := ms.Inputs.Add(UsingSerie.Stub);

	    Slice := TransformVar.Slices.Add(Null);

	    Term1 := Det.Operands.Add(Slice);

	    Det.Expression.AsString := "Log(" + Term1.TermToInnerText + ", 2)";

	    // Рассчитываем ряд

	    NewSerie.Calculate;

	    // Сохраняем изменения в рабочей книге

	    WbkObj.Save;

	End Sub UserProc;


В результате выполнения примера в рабочую книгу будет добавлен вычисляемый
 ряд, наименование которого сформировано по заданному формату: «Логарифм (%s)»,
 где «%s» - это наименование входного
 ряда.


См. также:


[ILanerCalculateSerie](ILanerCalculateSerie.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
