# ILanerSerieList.FindById

ILanerSerieList.FindById
-


# ILanerSerieList.FindById


## Синтаксис


FindById(Id: String): [ILanerSerie](../ILanerSerie/ILanerSerie.htm);


## Параметры


Id. Идентификатор ряда.


## Описание


Метод FindById осуществляет
 поиск ряда в коллекции по идентификатору и возвращает объект, содержащий
 ряд в случае удачного поиска.


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

	Begin

	    ErAn := UiErAnalyzer1.ErAnalyzer;

	    Laner := ErAn.Laner;

	    LSerieList := Laner.SeriesList;

	    Serie := LSerieList.("OBJ1");

	    If Serie <> Null Then

	        Debug.WriteLine(Serie.Name);

	    End If;

	End Sub Button1OnClick;


После выполнения примера будет произведен поиск ряда с идентификатором
 «OBJ1». Если ряд будет найден, то его наименование будет выведено в окно
 консоли.


См. также:


[ILanerSerieList](ILanerSerieList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
