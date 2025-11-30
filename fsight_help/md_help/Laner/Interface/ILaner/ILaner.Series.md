# ILaner.Series

ILaner.Series
-


# ILaner.Series


## Синтаксис


Series: [ILanerSeries](../ILanerSeries/ILanerSeries.htm);


## Описание


Свойство Series возвращает коллекцию
 рядов рабочей области.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 TabSheetBox, UiErAnalyzer с наименованиями Button1, TabSheetBox1 и UiErAnalyzer1
 соответственно. UiErAnalyzer1 является источником данных для TabSheetBox1.
 В UiErAnalyzer1 должна быть загружена рабочая область базы данных временных
 рядов.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: Express, ExtCtrls, Forms, Laner,
 Tab.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    ErAn: IEaxAnalyzer;

	    Laner: ILaner;

	    LanerSers: ILanerSeries;

	Begin

	    ErAn := UiErAnalyzer1.ErAnalyzer;

	    Laner := ErAn.Laner;

	    LanerSers := Laner.Series;

	    Debug.WriteLine(LanerSers.Count);

	End Sub Button1OnClick;


После выполнения примера в окно консоли будет выведено количество рядов
 рабочей области (без учета дочерних).


См. также:


[ILaner](ILaner.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
