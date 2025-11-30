# ILaner.CalendarSelection

ILaner.CalendarSelection
-


# ILaner.CalendarSelection


## Синтаксис


CalendarSelection: [IDimSelection](KeDims.chm::/interface/IDimSelection/IDimSelection.htm);


## Описание


Свойство CalendarSelection
 возвращает календарную отметку, используемую в рабочей книге.


## Комментарии


Для изменения дат начала и окончания рабочей книги используйте свойства
 [ILaner.StartDate](ILaner.StartDate.htm) и [ILaner.EndDate](ILaner.EndDate.htm).


## Пример


Для выполнения примера предполагается наличие на форме компонентов LanerBox,
 UiErAnalyzer с наименованиями LanerBox1 и UiErAnalyzer1 соответственно.
 Компонент UiErAnalyzer является источником данных для LanerBox1. В компонент
 UiErAnalyzer должна быть загружена рабочая область базы данных временных
 рядов.


Добавьте ссылки на системные сборки: Dimensions, Laner.


	Sub UserProc;

	Var

	    EaxAn: IEaxAnalyzer;

	    Laner: ILaner;

	    Selection: IDimSelection;

	    s: String;

	Begin

	    // Получаем объект для выполнения операций с рабочей книгой

	    EaxAn := UiErAnalyzer1.ErAnalyzer;

	    Laner := EaxAn.Laner;

	    // Получаем отметку календарного измерения

	    Selection := Laner.CalendarSelection;

	    // Приводим отметку к строковому виду

	    s := Selection.ToString;

	    // Выводим отметку в окно консоли

	    Debug.WriteLine(s);

	End Sub UserProc;


В результате выполнения примера в окно консоли будет выведена календарная
 отметка, используемая в рабочей книге.


См. также:


[ILanerSerie](../ILanerSerie/ILanerSerie.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
