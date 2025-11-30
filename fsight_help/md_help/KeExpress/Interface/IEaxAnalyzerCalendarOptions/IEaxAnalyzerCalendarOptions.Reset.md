# IEaxAnalyzerCalendarOptions.Reset

IEaxAnalyzerCalendarOptions.Reset
-


# IEaxAnalyzerCalendarOptions.Reset


## Синтаксис


Reset;


## Описание


Метод Reset сбрасывает все настройки
 отображения всех календарных измерений отчёта.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонентов TabSheetBox
 с наименованием «TabSheetBox1», ErAnalyzerDimPanel
 с наименованием «ErAnalyzerDimPanel1» и UiErAnalyzer
 с наименованием «UiErAnalyzer1», являющегося источником данных для обоих
 компонентов.


Добавьте ссылки на системные сборки: Express, Metabase.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    CalendarOptions: IEaxAnalyzerCalendarOptions;

	Begin

	    CalendarOptions := UiErAnalyzer1.ErAnalyzer.Options.CalendarOptions;

	    CalendarOptions.Reset;

	    ErAnalyzerDimPanel1.Refresh;

	End Sub Button1OnClick;


После выполнения примера при нажатии кнопки Button1 будут сброшены все
 настройки отображения календарного измерения.


См. также:


[IEaxAnalyzerCalendarOptions](IEaxAnalyzerCalendarOptions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
