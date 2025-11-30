# IEaxAnalyzerCalendarOptions.ShowLevels

IEaxAnalyzerCalendarOptions.ShowLevels
-


# IEaxAnalyzerCalendarOptions.ShowLevels


## Синтаксис


ShowLevels (CalendarDimKey: Integer): Boolean;


## Параметры


CalendarDimKey. Ключ календарного
 измерения, для которого настраивается уровень.


## Описание


Свойство ShowLevels определяет
 необходимость отображения уровней календаря.


## Комментарии


В экспресс-отчете может быть несколько календарей, и настройки отображения
 уровней задаются отдельно для каждого.


Настройка доступна только для календарей, находящихся в общих измерениях.
 Для календарей, находящихся в частных измерениях настройка уровней недоступна.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонентов TabSheetBox
 с наименованием «TabSheetBox1», ErAnalyzerDimPanel
 с наименованием «ErAnalyzerDimPanel1» и UiErAnalyzer
 с наименованием «UiErAnalyzer1», являющегося источником данных для обоих
 компонентов.


Добавьте ссылки на системные сборки: Express, Metabase.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    CalendarOptions: IEaxAnalyzerCalendarOptions;

	Begin

	    CalendarOptions := UiErAnalyzer1.ErAnalyzer.Options.CalendarOptions;

	    CalendarOptions.ShowLevels(41950) := True;

	End Sub Button1OnClick;


После выполнения примера при нажатии кнопки Button1 для календаря с
 указанным ключом будут отображаться уровни.


См. также:


[IEaxAnalyzerCalendarOptions](IEaxAnalyzerCalendarOptions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
