# ILanerSerie.Parent

ILanerSerie.Parent
-


# ILanerSerie.Parent


## Синтаксис


Parent: [ILanerGroupSerie](../ILanerGroupSerie/ILanerGroupSerie.htm);


## Описание


Свойство Parent возвращает группу,
 в которой содержится ряд.


## Комментарии


Если ряд не содержится в группе, то свойство вернет значение Null.


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

	    ErA: IEaxAnalyzer;

	    Laner: ILaner;

	    Series: ILanerSeries;

	    Group: ILanerGroupSerie;

	    Serie: ILanerSerie;

	    i: Integer;

	Begin

	    ErA := UiErAnalyzer1.ErAnalyzer;

	    Laner := ErA.Laner;

	    Series := Laner.Series;

	    Serie := Series.Item(i);

	    Group := Serie.Parent;

	    If Group <> Null Then

	        Debug.WriteLine("Ряд '" + Serie.Name + "' содержится в группе '" + Group.Name + "'");

	        Else

	            Debug.WriteLine("Ряд '" + Serie.Name + "' не содержится в группе");

	    End If;

	End Sub Button1OnClick;


После выполнения примера в окно консоли будет выведена информация о
 принадлежности первого ряда рабочей книги какой-либо группе.


См. также:


[ILanerSerie](ILanerSerie.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
