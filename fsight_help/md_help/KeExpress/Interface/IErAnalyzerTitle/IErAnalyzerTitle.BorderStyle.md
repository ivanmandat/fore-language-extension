# IErAnalyzerTitle.BorderStyle

IErAnalyzerTitle.BorderStyle
-


# IErAnalyzerTitle.BorderStyle


## Синтаксис


BorderStyle: [ControlBorderStyle](modforms.chm::/Enums/ControlBorderStyle.htm);


## Описание


Свойство BorderStyle определяет
 стиль границы панели заголовка экспресс-отчета.


## Комментарии


По умолчанию используется значение [ControlBorderStyle.Single](modforms.chm::/Enums/ControlBorderStyle.htm),
 границы принимают объемный вид.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1» и компонентов ErAnalyzerTitle с наименованием
 «ErAnalyzerTitle1» и UiErAnalyzer с наименованием «UiErAnalyzer1». В «UiErAnalyzer1»
 должен быть определен экспресс-отчет.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Begin

	    ErAnalyzerTitle1.Object := UiErAnalyzer1;

	    ErAnalyzerTitle1.BorderStyle := ControlBorderStyle.Flat;

	End Sub Button1OnClick;


При нажатии на кнопку в качестве источника данных для компонента «ErAnalyzerTitle1»
 будет задан экспресс-отчет. Границы панели заголовка экспресс-отчета примут
 вид рамки толщиной в один пиксель.


См. также:


[IErAnalyzerTitle](IErAnalyzerTitle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
