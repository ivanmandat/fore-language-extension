# ILanerSerie.MoveToParent

ILanerSerie.MoveToParent
-


# ILanerSerie.MoveToParent


## Синтаксис


MoveToParent(Parent: [ILanerGroupSerie](../ILanerGroupSerie/ILanerGroupSerie.htm);
 Index: Integer);


## Параметры


Parent. Группа рядов, в которую
 необходимо переместить ряд;


Index. Позиция ряда в группе.


## Описание


Метод MoveToParent осуществляет
 перемещение ряда в указанную группу рядов.


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

	Begin

	    ErA := UiErAnalyzer1.ErAnalyzer;

	    Laner := ErA.Laner;

	    Series := Laner.Series;

	    Group := Series.AddEmptyGroup("Новая группа");

	    Serie := Series.Item(0);

	    Serie.MoveToParent(Group, 0);

	End Sub Button1OnClick;


После выполнения примера будет добавлена пустая группа рядов. Затем
 в нее будет перемещен первый ряд рабочей книги.


См. также:


[ILanerSerie](ILanerSerie.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
