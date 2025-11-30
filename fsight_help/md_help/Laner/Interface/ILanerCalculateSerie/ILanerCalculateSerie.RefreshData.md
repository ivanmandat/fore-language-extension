# ILanerCalculateSerie.RefreshData

ILanerCalculateSerie.RefreshData
-


# ILanerCalculateSerie.RefreshData


## Синтаксис


Refresh;


## Описание


Метод RefreshData обновляет
 данные ряда.


## Комментарии


После обновления несохраненные данные ряда будут потеряны.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 LanerBox, UiErAnalyzer с наименованиями Button1, LanerBox1 и UiErAnalyzer1
 соответственно. UiErAnalyzer1 является источником данных для LanerBox1.
 В UiErAnalyzer1 должна быть загружена рабочая область базы данных временных
 рядов.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: Express, ExtCtrls, Forms, Laner,
 Tab.


	    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	    Var

	        i: Integer;

	        SourSerie: ILanerSerie;

	        Serie: ILanerCalculateSerie;

	    Begin

	        If LanerBox1.SelectedSeriesCount > 0 Then

	            For i := 0 To LanerBox1.SelectedSeriesCount - 1 Do

	                SourSerie := LanerBox1.SelectedSeries(i);

	                SourSerie.Hint := "Данные последний раз обновлены '" + DateTime.Now.ToString + "'";

	                Serie := SourSerie As ILanerCalculateSerie;

	                Serie.RefreshData;

	            End For;

	        End If;

	    End Sub Button1OnClick;


После выполнения примера данные рядов, выделенных в рабочей книге, будут
 обновлены. Для обновленных рядов будет добавлено примечание, содержащее
 дату последнего обновления.


См. также:


[ILanerCalculateSerie](ILanerCalculateSerie.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
