# IErAnalyzerDimPanel.ErAnalyzer

IErAnalyzerDimPanel.ErAnalyzer
-


# IErAnalyzerDimPanel.ErAnalyzer


## Синтаксис


ErAnalyzer: [IEaxAnalyzer](../IEaxAnalyzer/IEaxAnalyzer.htm);


## Описание


Свойство ErAnalyzer определяет
 экспресс-отчет, реализуемый интерфейсом [IEaxAnalyzer](../IEaxAnalyzer/IEaxAnalyzer.htm),
 являющийся источником данных для панели измерений.


## Пример


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    s: String;

	Begin

	    ErAnalyzerDimPanel1.Object := UiErAnalyzer1;

	    s := ErAnalyzerDimPanel1.ErAnalyzer.Name;

	End Sub Button1OnClick;


После выполнения примера, при нажатии на кнопку, в переменной «s» будет
 содержаться наименование экспресс-отчета, которой является источником
 данных для компонентов с наименованием «UiErAnalyzer1» и «ErAnalyzerDimPanel1».


См. также:


[IErAnalyzerDimPanel](IErAnalyzerDimPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
