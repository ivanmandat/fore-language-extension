# ITsCompositeFormulaTerm.Included

ITsCompositeFormulaTerm.Included
-


# ITsCompositeFormulaTerm.Included


## Синтаксис


Included: Boolean;


## Описание


Свойство Included определяет,
 будет ли составной элемент использоваться при расчёте выражения.


## Комментарии


Допустимые значения:


	- True. Элемент участвует
	 в расчёте выражения;


	- False. Элемент не участвует
	 в расчёте выражения.


## Пример


Для выполнения примера предполагается наличие формы, на которой расположены
 компоненты:


	- LanerBox с идентификатором «LanerBox1»;


	- LanerResultsBox с идентификатором «LanerResultsBox1»;


	- UiErAnalyzer, являющийся источником данных для LanerBox и LanerResultsBox.


В UiErAnalyzer должна быть загружена рабочая книга базы данных временных
 рядов. Добавьте ссылки на системные сборки «Transform», «Ms».


Перед выполнением примера рабочая книга должна содержать только один
 выделенный ряд, рассчитанный методом линейной регрессии.


			Sub UserProc;

Var

    Results: ILanerResultsBoxResults;

    Coefficients: ILanerResultsBoxCoefficients;

    i: Integer;

    FactorTerm: ITsCompositeFormulaTerm;

    LSerie: ILanerSerie;

Begin

    Results := LanerResultsBox1.Results;

    Coefficients := Results.Coefficients;

    For i := 0 To Coefficients.TermCount - 1 Do

        FactorTerm := Coefficients.FactorTerm(i);

        If FactorTerm.Included Then

            (FactorTerm As IMsCompositeFormulaTerm).ChangeLag(2);

        End If;

    End For;

    LSerie := LanerBox1.SelectedSeries(0);

    (LSerie As ILanerCalculateSerie).RefreshData;

End Sub UserProc;


После выполнения примера для факторов линейной регрессии, участвующих
 в расчёте, будет изменен лаг. Линейная регрессия будет рассчитана заново.


См. также:


[ITsCompositeFormulaTerm](ITsCompositeFormulaTerm.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
