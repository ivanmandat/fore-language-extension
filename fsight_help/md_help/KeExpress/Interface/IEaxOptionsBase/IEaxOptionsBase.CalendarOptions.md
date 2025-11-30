# IEaxOptionsBase.CalendarOptions

IEaxOptionsBase.CalendarOptions
-


# IEaxOptionsBase.CalendarOptions


## Синтаксис


CalendarOptions: [IEaxAnalyzerCalendarOptions](../IEaxAnalyzerCalendarOptions/IEaxAnalyzerCalendarOptions.htm);


## Описание


Свойство CalendarOptions
 возвращает настройки параметров отображения календарей отчета.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонентов TabSheetBox1, ErAnalyzerDimPanel1
 и UiErAnalyzer1, являющегося источником данных для обоих компонентов.
 К компоненту UiErAnalyzer1 должен быть подключен экспресс-отчет.


Пример является обработчиком события OnClick для кнопки.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    CalendarOptions: IEaxAnalyzerCalendarOptions;

	Begin

	    CalendarOptions := UiErAnalyzer1.ErAnalyzer.Options.CalendarOptions;

	    CalendarOptions.ShowPeriod(41950) := True;

	End Sub Button1OnClick;


В результате выполнения примера для календаря будут отображаться периоды.


См. также:


[IEaxOptionsBase](IEaxOptionsBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
