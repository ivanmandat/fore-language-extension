# ILanerSerieList.Count

ILanerSerieList.Count
-


# ILanerSerieList.Count


## Синтаксис


Count: Integer;


## Описание


Свойство Count возвращает количество
 рядов в коллекции.


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

	    LSerieList: ILanerSerieList;

	    Serie: ILanerSerie;

	    i: integer;

	Begin

	    ErAn := UiErAnalyzer1.ErAnalyzer;

	    Laner := ErAn.Laner;

	    LSerieList := Laner.SeriesList;

	    Debug.WriteLine("Количество рядов в рабочей области: " + LSerieList.Count.ToString);

	    Debug.WriteLine("Ключи рядов:");

	    For i := 0 To LSerieList.Count - 1 Do

	        Serie := LSerieList.Item(i);

	        Debug.WriteLine(Serie.Key);

	    End For;

	End Sub Button1OnClick;


После выполнения примера в окно консоли будут выведено количество рядов,
 содержащихся в рабочей области, а также их ключи.


См. также:


[ILanerSerieList](ILanerSerieList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
