# IErAnalyzerDimPanel.Object

IErAnalyzerDimPanel.Object
-


# IErAnalyzerDimPanel.Object


## Синтаксис


Object: [IUiErAnalyzer](../IUiErAnalyzer/IUiErAnalyzer.htm);


## Описание


Свойство Object определяет компонент
 [UiErAnalyzer](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/UiErAnalyzer.htm), который будет использоваться
 как источник данных.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонентов ErAnalyzerDimPanel
 с наименованием «ErAnalyzerDimPanel1»
 и TabSheetBox с наименованием
 «TabSheetBox1», используемых для управления данными экспресс-отчета и
 компонента UiErAnalyzer с наименованием
 «UiErAnalyzer1», являющегося источником данных.


	Sub Button1OnClick(Sender:Object; Args: IMouseEventArgs);

	Begin

	    TabSheetBox1.Source := UiErAnalyzer1 As ITabSheetSource;

	    ErAnalyzerDimPanel1.Object := UiErAnalyzer1;

	End Sub Button1OnClick;


После выполнения примера, при нажатии на кнопку, в качестве источника
 данных для компонентов «TabSheetBox1» и «ErAnalyzerDimPanel1» будет установлен
 компонент «UiErAnalyzer1».


См. также:


[IErAnalyzerDimPanel](IErAnalyzerDimPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
