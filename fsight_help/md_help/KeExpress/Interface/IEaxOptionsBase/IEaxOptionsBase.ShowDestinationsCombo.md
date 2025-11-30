# IEaxOptionsBase.ShowDestinationsCombo

IEaxOptionsBase.ShowDestinationsCombo
-


# IEaxOptionsBase.ShowDestinationsCombo


## Синтаксис


ShowDestinationsCombo: Boolean;


## Описание


Свойство ShowDestinationsCombo
 определяет видимость раскрывающегося списка «Варианты отображения» на
 вкладке «[Параметры
 источников данных](UiExpress.chm::/purpose/DataSourceParam.htm)» боковой панели.


## Комментарии


Допустимые значения:


	- True. Показывать раскрывающийся
	 список;


	- False. Скрывать раскрывающийся
	 список.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента ErAnalyzerDimPanel с
 наименованием «ErAnalyzerDimPanel1» компонента UiErAnalyzer с наименованием
 «UiErAnalyzer1», который служит источником данных для ErAnalyzerDimPanel.
 К компоненту UiErAnalyzer1 должен быть подключен экспресс-отчет.


Пример является обработчиком события OnClick для кнопки.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    AnOptions: IEaxAnalyzerOptions;

	Begin

	    AnOptions := UiErAnalyzer1.ErAnalyzer.Options;

	    AnOptions.ShowDestinationsCombo := False;

	End Sub Button1OnClick;


После выполнения примера, раскрывающийся список «Варианты отображения»
 будет скрыт.


См. также:


[IEaxOptionsBase](IEaxOptionsBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
