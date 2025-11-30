# ILaner.Filter

ILaner.Filter
-


# ILaner.Filter


## Синтаксис


Filter: [ILanerFilter](../ILanerFilter/ILanerFilter.htm);


## Описание


Свойство Filter возвращает параметры
 фильтрации данных в рабочей книге.


## Комментарии


Используйте Filter вместо устаревшего
 свойства ILaner.SuppressEmpty.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 LanerBox, UiErAnalyzer с наименованиями Button1, LanerBox1 и UiErAnalyzer1
 соответственно. UiErAnalyzer1 является источником данных для LanerBox1.
 В UiErAnalyzer1 должна быть загружена рабочая область базы данных временных
 рядов.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: Express, ExtCtrls, Forms, Laner,
 Tab.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Laner: ILaner;

	    Filter: ILanerFilter;

	Begin

	    Laner := UiErAnalyzer1.ErAnalyzer.Laner;

	    Filter := Laner.Filter;

	    Filter.SuppressEmpty := True;

	    Filter.SuppressEmptyArea := LnSuppressEmptyArea.FullSerie;

	End Sub Button1OnClick;


После выполнения примера рабочая книга будет переключена в режим фильтрации
 данных внутри всего ряда.


См. также:


[ILaner](ILaner.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
