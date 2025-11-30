# ILanerSerie.IsChanged

ILanerSerie.IsChanged
-


# ILanerSerie.IsChanged


## Синтаксис


IsChanged: Boolean;


## Описание


Свойство IsChanged возвращает
 признак наличия изменений в данных ряда.


## Комментарии


Допустимые значения:


	- True. Данные ряда были
	 изменены;


	- False. Данные ряда остались
	 без изменений.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 LanerBox, UiErAnalyzer с наименованиями Button1, LanerBox1 и UiErAnalyzer1
 соответственно. UiErAnalyzer1 является источником данных для LanerBox1.
 В UiErAnalyzer1 должна быть загружена рабочая область базы данных временных
 рядов.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: Express, ExtCtrls, Forms, Laner,
 Tab, Ui.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Serie: ILanerSerie;

	Begin

	    If LanerBox1.SelectedSeriesCount > 0 Then

	        Serie := LanerBox1.SelectedSeries(0);

	        If Serie.IsChanged Then

	            WinApplication.InformationBox("Данные ряда были изменены");

	        End If;

	    End If;

	End Sub Button1OnClick;


После выполнения примера будет отображено сообщение, если данные ряда,
 выделенного в рабочей области, были изменены.


См. также:


[ILanerSerie](ILanerSerie.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
