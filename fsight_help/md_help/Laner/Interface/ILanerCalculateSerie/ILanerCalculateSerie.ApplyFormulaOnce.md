# ILanerCalculateSerie.ApplyFormulaOnce

ILanerCalculateSerie.ApplyFormulaOnce
-


# ILanerCalculateSerie.ApplyFormulaOnce


## Синтаксис


ApplyFormulaOnce(Transform: [IFormulaTransformModel](KeCubes.chm::/Interface/IFormulaTransformModel/IFormulaTransformModel.htm));


## Параметры


Transform. Параметры расчета
 вычисляемого ряда.


## Описание


Метод ApplyFormulaOnce выполняет
 однократный расчет вычисляемого ряда по заданным параметрам.


## Комментарии


Параметры расчета ряда можно создать используя [ILanerCalculateSerie.CreateTemporaryTransform](ILanerCalculateSerie.CreateTemporaryTransform.htm).


Значения, которые рассчитаны при вызове ApplyFormulaOnce,
 будут записаны в ячейки таблицы рабочей книги с флагом изменения данных.
 Для ячейки, содержащей рассчитанное значение, свойство [ILanerTable.IsChangedCell](../ILanerTable/ILanerTable.IsChangedCell.htm)
 будет возвращать значение True.
 Этим метод ApplyFormulaOnce и
 отличается от метода [ILanerCalculateSerie.Calculate](ILanerCalculateSerie.Calculate.htm),
 после выполнения которого значения в ячейки рабочей книги записываются
 без признака изменения данных.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 LanerBox, UiErAnalyzer с наименованиями Button1, LanerBox1 и UiErAnalyzer1
 соответственно. UiErAnalyzer1 является источником данных для LanerBox1.
 В UiErAnalyzer1 должна быть загружена рабочая область базы данных временных
 рядов, содержащая ряды данных.


Добавьте ссылки на системные сборки: Cubes, Express, ExtCtrls, Forms,
 Laner, Ms, Tab.


В рабочей книге выделите только один ряд и нажмите кнопку «Button1».
 Будет выполнена процедура:


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    pSeries: ILanerCalculateSerie;

	    pTransformModel: IFormulaTransformModel;

	    pTransform: IMsFormulaTransform;

	    pSlice: IMsFormulaTransformSlice;

	    pSelector: IMsFormulaTransformSelector;

	    pFormula: IMsFormula;

	    pIdentity: IMsDeterministicTransform;

	    pInputSlice: IMsFormulaTransformSlice;

	    pTerm: IMsFormulaTerm;

	Begin

	    pSeries := LanerBox1.SelectedSeries(0) As ILanerCalculateSerie;

	    pTransformModel := pSeries.CreateTemporaryTransform;

	    pTransformModel.AddInputVariable(pSeries.SourceStub);

	    pTransform := pTransformModel.Transform As IMsFormulaTransform;

	    // Настраиваем преобразование

	    pSlice := pTransform.Outputs.Item(0).Slices.Add(Null);

	    pSelector := pTransform.CreateSelector;

	    pSelector.Slice := pSlice;

	    pFormula := pTransform.Transform(pSelector);

	    pFormula.Kind := MsFormulaKind.Deterministic;

	    pFormula.Level := pSeries.Level;

	    pIdentity := pFormula.Method As IMsDeterministicTransform;

	    pInputSlice := pTransform.Inputs.Add(pSeries.Stub).Slices.Add(Null);

	    pTerm := pIdentity.Operands.Add(pInputSlice);

	    pIdentity.Expression.AsString := pTerm.TermToInnerText + " + 10";

	    // Применяем преобразование и сохраняем данные

	    pSeries.ApplyFormulaOnce(pTransformModel);

	    LanerBox1.ExecuteOperation(LanerBoxOperation.SaveData);

	End Sub Button1OnClick;


После выполнения примера значения выделенного ряда будут увеличены на
 десять и сохранены.


См. также:


[ILanerCalculateSerie](ILanerCalculateSerie.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
