# ILanerSeries.RemoveGroupedByKey

ILanerSeries.RemoveGroupedByKey
-


# ILanerSeries.RemoveGroupedByKey


## Синтаксис


RemoveGroupedByKey(Key: Integer): Boolean;


## Параметры


Key. Ключ ряда.


## Описание


Метод RemoveGroupedByKey осуществляет
 удаление ряда из коллекции по его ключу с учетом иерархии пользовательских
 групп.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 LanerBox, UiErAnalyzer с наименованиями Button1, LanerBox1 и UiErAnalyzer1
 соответственно. UiErAnalyzer1 является источником данных для LanerBox1.
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

	    Serie: ILanerSerie;

	Begin

	    ErA := UiErAnalyzer1.ErAnalyzer;

	    Laner := ErA.Laner;

	    Series := Laner.Series;

	    Serie := LanerBox1.SelectedSeries(0);

	    Series.RemoveGroupedByKey(Serie.Key);

	End Sub Button1OnClick;


После выполнения примера из рабочей книги будет удален первый ряд с
 учетом иерархии пользовательских групп.


См. также:


[ILanerSeries](ILanerSeries.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
