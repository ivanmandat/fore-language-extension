# ILanerSerie.DisplayParams

ILanerSerie.DisplayParams
-


# ILanerSerie.DisplayParams


## Синтаксис


DisplayParams: [ILanerSerieDisplayParams](../ILanerSerieDisplayParams/ILanerSerieDisplayParams.htm);


## Описание


Свойство DisplayParams возвращает
 параметры отображения данных ряда.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 LanerBox, UiErAnalyzer с наименованиями Button1, LanerBox1 и UiErAnalyzer1
 соответственно. UiErAnalyzer1 является источником данных для LanerBox1.
 В UiErAnalyzer1 должна быть загружена рабочая область базы данных временных
 рядов.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: Express, ExtCtrls, Forms, Laner,
 Tab, Transform.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    i: Integer;

	    Serie: ILanerSerie;

	    DisplayParams: ILanerSerieDisplayParams;

	Begin

	    For i := 0 To LanerBox1.SelectedSeriesCount - 1 Do

	        Serie := LanerBox1.SelectedSeries(i);

	        DisplayParams := Serie.DisplayParams;

	        DisplayParams.Inversion := TsInversion.Diff;

	        DisplayParams.InversionLag := TsInversionLag.PrecidingYear;

	        DisplayParams.PreviousInversionLag := -3;

	    End For;

	End Sub Button1OnClick;


После выполнения примера будет изменен режим отображения данных всех
 рядов, выделенных в компоненте LanerBox. Вместо исходных данных будет
 отображаться прирост значений ряда к предыдущему году с лагом «3».


См. также:


[ILanerSerie](ILanerSerie.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
