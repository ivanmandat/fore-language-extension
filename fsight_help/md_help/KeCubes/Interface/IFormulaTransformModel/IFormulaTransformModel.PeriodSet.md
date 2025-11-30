# IFormulaTransformModel.PeriodSet

IFormulaTransformModel.PeriodSet
-


# IFormulaTransformModel.PeriodSet


## Синтаксис


PeriodSet: [TransformModelPeriodSet](../../Enums/TransformModelPeriodSet.htm);


## Описание


Свойство PeriodSet определяет параметры периода расчета ряда.


## Комментарии


Значение PeriodSet влияет на то, какие параметры расчета будут переопределены для вычисляемого ряда.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на ней кнопки с идентификатором «Button1», компонента LanerBox и компонента UiErAnalyzer с наименованием «UiErAnalyzer1», являющегося источником данных для LanerBox. В «UiErAnalyzer1» должна быть загружена рабочая книга базы данных временных рядов. В данной базе должен присутствовать показатель с ключом «98280» и формула с ключом «1».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Laner: ILaner;

    RubInst: IRubricatorInstance;

    Factor: IRubricatorFactor;

    Serie: ILanerCalculateSerie;

    FormulaData: IRubricatorFormulaData;

    Transform: IFormulaTransformModel;

Begin

    Laner := UiErAnalyzer1.ErAnalyzer.Laner;

    RubInst := Laner.RubricatorInstance;

    Laner.BeginUpdate;

    Factor := RubInst.GetFactData(98280).Factor;

    Serie := Laner.Series.AddCalculateSerieAsSource(Factor);

    Serie.UseTransform := True;

    Transform := Serie.Transform;

    FormulaData := RubInst.GetFormulaData(1);

    Transform.RestoreFromFormulaData(FormulaData);

    Transform.PeriodSet := TransformModelPeriodSet.ForecastEndDate;

    Transform.ForecastEndDate := DateTime.ComposeDay(2013, 1, 1);

    Laner.EndUpdate;

End Sub Button1OnClick;


После выполнения примера в рабочую книгу будет добавлен ряд, основанный на показателе с ключом «98280». Для данного ряда будет применена формула с ключом «1» и изменена дата окончания прогноза.


См. также:


[IFormulaTransformModel](IFormulaTransformModel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
