# ILanerSeriesSet.Add

ILanerSeriesSet.Add
-


# ILanerSeriesSet.Add


## Синтаксис


Add: [ILanerSerie](../ILanerSerie/ILanerSerie.htm);


## Описание


Метод Add добавляет ряд в набор.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 TabSheetBox, UiErAnalyzer с наименованиями Button1, TabSheetBox1 и UiErAnalyzer1
 соответственно. UiErAnalyzer1 является источником данных для TabSheetBox1.
 В UiErAnalyzer1 должна быть загружена рабочая книга базы данных временных
 рядов.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: Express, ExtCtrls, Forms, Laner,
 Tab.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    ErAn: IEaxAnalyzer;

	    Laner: ILaner;

	    LanSers: ILanerSeries;

	    SerSet: ILanerSeriesSet;

	    Serie: ILanerSerie;

	    i: Integer;

	Begin

	    ErAn := UiErAnalyzer1.ErAnalyzer;

	    Laner := ErAn.Laner;

	    LanSers := Laner.Series;

	    SerSet := LanSers.CreateSet;

	    For i := 0 To LanSers.Count - 1 Do

	        Serie := LanSers.Item(i);

	        SerSet.Add(Serie);

	    End For;

	    LanSers.Copy(SerSet);

	    LanSers.Paste(0);

	End Sub Button1OnClick;


После выполнения примера для каждого ряда в рабочей книге будет создана
 копия.


См. также:


[ILanerSeriesSet](ILanerSeriesSet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
