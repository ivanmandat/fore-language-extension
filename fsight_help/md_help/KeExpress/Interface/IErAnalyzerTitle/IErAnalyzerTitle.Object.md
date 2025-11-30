# IErAnalyzerTitle.Object

IErAnalyzerTitle.Object
-


# IErAnalyzerTitle.Object


## Синтаксис


Object: [IUiErAnalyzer](../IUiErAnalyzer/IUiErAnalyzer.htm);


## Описание


Свойство Object определяет источник
 данных для панели заголовка экспресс-отчета.


## Комментарии


В качестве источника данных можно использовать компонент [UiErAnalyzer](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/UiErAnalyzer.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонентов:


	- ErAnalyzerDimPanel с
	 наименованием «ErAnalyzerDimPanel1»;


	- TabSheetBox с наименованием
	 «TabSheetBox1»;


	- ErAnalyzerTitle с наименованием
	 «ErAnalyzerTitle1»;


	- UiErAnalyzer с наименованием
	 «UiErAnalyzer1», который будет использован в качестве источника данных.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Begin

	    TabSheetBox1.Source := UiErAnalyzer1 As ITabSheetSource;

	    ErAnalyzerDimPanel1.Object := UiErAnalyzer1;

	    ErAnalyzerTitle1.Object := UiErAnalyzer1;

	End Sub Button1OnClick;


После выполнения примера, при нажатии на кнопку, в качестве источника
 данных для компонентов «TabSheetBox1», «ErAnalyzerDimPanel1» и «ErAnalyzerTitle1»
 будет установлен в качестве источника данных компонент с наименованием
 «UiErAnalyzer1».


См. также:


[IErAnalyzerTitle](IErAnalyzerTitle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
