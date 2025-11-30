# ILanerGroupSerie.Children

ILanerGroupSerie.Children
-


# ILanerGroupSerie.Children


## Синтаксис


Children: [ILanerSerieList](../ILanerSerieList/ILanerSerieList.htm);


## Описание


Свойство Children возвращает
 ряды, образующие группу.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 Memo, TabSheetBox, UiErAnalyzer с наименованиями Button1, Memo1, TabSheetBox1
 и UiErAnalyzer1 соответственно. UiErAnalyzer1 является источником данных
 для TabSheetBox1. В UiErAnalyzer1 должна быть загружена рабочая область
 базы данных временных рядов.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: Express, ExtCtrls, Forms, Laner,
 Tab.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    ErAn: IEaxAnalyzer;

	    Laner: ILaner;

	    Serie: ILanerSerie;

	    GroupSerie: ILanerGroupSerie;

	    i, j: Integer;

	Begin

	    ErAn := UiErAnalyzer1.ErAnalyzer;

	    Laner := ErAn.Laner;

	    For j := 0 To Laner.SeriesList.Count - 1 Do

	        Serie := Laner.SeriesList.Item(j);

	        If Serie.Kind = LnSerieKind.Group Then

	            GroupSerie := Serie As ILanerGroupSerie;

	            GroupSerie.Expanded := True;

	            Memo1.Lines.Add("Группа рядов: " + GroupSerie.Name);

	            For i := 0 To GroupSerie.Children.Count - 1 Do

	                Memo1.Lines.Add(GroupSerie.Children.Item(i).Name);

	            End For;

	        End If;

	    End For;

	End Sub Button1OnClick;


После выполнения примера в компонент Memo1 будет выведена информация
 о дочерних рядах, если в рабочей области присутствуют ряды, образующие
 группу.


См. также:


[ILanerGroupSerie](ILanerGroupSerie.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
