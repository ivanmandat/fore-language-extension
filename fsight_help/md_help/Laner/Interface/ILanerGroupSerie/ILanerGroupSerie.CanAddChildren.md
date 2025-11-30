# ILanerGroupSerie.CanAddChildren

ILanerGroupSerie.CanAddChildren
-


# ILanerGroupSerie.CanAddChildren


## Синтаксис


CanAddChildren:Boolean;


## Описание


Свойство CanAddChildren возвращает
 признак того, возможно ли добавление дочернего ряда в группу рядов.


## Комментарии


Допустимые значения:


	- True. Дочерний ряд добавить
	 можно;


	- False. Дочерний ряд
	 добавить нельзя.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 LanerBox, UiErAnalyzer с наименованиями Button1, LanerBox1 и UiErAnalyzer1
 соответственно. UiErAnalyzer1 является источником данных для LanerBox1.
 В UiErAnalyzer1 должна быть загружена рабочая область базы данных временных
 рядов. В рабочей книге должно быть выделено два ряда данных.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: Express, ExtCtrls, Forms, Laner,
 Tab, Ui.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Serie: ILanerSerie;

	    GroupSerie: ILanerGroupSerie;

	Begin

	    If LanerBox1.SelectedSeriesCount > 0 Then

	        Serie := LanerBox1.SelectedSeries(0);

	        If Serie Is ILanerGroupSerie Then

	            GroupSerie := Serie As ILanerGroupSerie;

	            Serie := LanerBox1.SelectedSeries(1);

	            If GroupSerie.CanAddChildren Then

	                Serie.MoveToParent(GroupSerie, 0);

	                Else WinApplication.InformationBox("Невозможно перемещение ряда '" + Serie.Name

	                    + "' в группу '" + GroupSerie.Name + "'");

	            End If;

	        End If;

	    End If;

	End Sub Button1OnClick;


После выполнения примера второй выделенный ряд будет перемещен в качестве
 дочернего в первый выделенный ряд. Если данное перемещение невозможно,
 то будет отображено информационное сообщение.


См. также:


[ILanerGroupSerie](ILanerGroupSerie.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
