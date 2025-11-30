# ILanerSeries.HaveUnsavedData

ILanerSeries.HaveUnsavedData
-


# ILanerSeries.HaveUnsavedData


## Синтаксис


HaveUnsavedData: Boolean;


## Описание


Свойство HaveUnsavedData возвращает
 признак того, что в рабочей книге присутствуют ряды, данные которых не
 сохранены.


## Комментарии


Допустимые значения:


	- True. В рабочей книге
	 присутствуют ряды, данные которых не сохранены;


	- False. Все данные рядов
	 рабочей книги сохранены.


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

	    Analyzer: IEaxAnalyzer;

	    Laner: Ilaner;

	    Series: ILanerSeries;

	Begin

	    Analyzer := UiErAnalyzer1.ErAnalyzer;

	    Laner := Analyzer.Laner;

	    Series := Laner.Series;

	    If Series.HaveUnsavedData Then

	        Laner.SaveChangedSeries;

	    End If;

	End Sub Button1OnClick;


После выполнения примера данные измененных рядов будут сохранены.


См. также:


[ILanerSeries](ILanerSeries.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
