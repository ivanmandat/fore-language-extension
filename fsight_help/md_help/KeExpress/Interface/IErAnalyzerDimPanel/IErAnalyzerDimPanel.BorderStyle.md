# IErAnalyzerDimPanel.BorderStyle

IErAnalyzerDimPanel.BorderStyle
-


# IErAnalyzerDimPanel.BorderStyle


## Синтаксис


BorderStyle: [ControlBorderStyle](modforms.chm::/Enums/ControlBorderStyle.htm);


## Описание


Свойство BorderStyle определяет
 стиль границы панели измерений.


## Комментарии


По умолчанию используется значение ControlBorderStyle.Single, то есть
 границы принимают объемный вид.


## Пример


Для выполнения примера в репозитории предполагается наличие формы, расположенной
 на ней кнопки с наименованием «Button1» и компонентов ErAnalyzerDimPanel
 с наименованием ErAnalyzerDimPanel1 и UiErAnalyzer
 с наименованием UiErAnalyzer1. В UiErAnalyzer1 должен быть определен экспресс-отчет.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Begin

	    ErAnalyzerDimPanel1.Object := UiErAnalyzer1;

	    ErAnalyzerDimPanel1.BorderStyle := ControlBorderStyle.Flat;

	End Sub Button1OnClick;


При нажатии на кнопку в качестве источника данных для компонента «ErAnalyzerDimPanel1»
 будет задан экспресс-отчет. Границы панели измерений экспресс-отчета примут
 вид рамки толщиной в один пиксель.


См. также:


[IErAnalyzerDimPanel](IErAnalyzerDimPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
