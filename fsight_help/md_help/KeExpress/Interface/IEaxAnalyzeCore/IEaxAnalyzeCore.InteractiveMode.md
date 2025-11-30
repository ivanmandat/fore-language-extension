# IEaxAnalyzeCore.InteractiveMode

IEaxAnalyzeCore.InteractiveMode
-


# IEaxAnalyzeCore.InteractiveMode


## Синтаксис


InteractiveMode: [EaxInteractiveMode](../../Enums/EaxInteractiveMode.htm);


## Описание


Свойство InteractiveMode определяет
 режим интерактивности экспресс-отчета.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонентов ChartBox, TabSheetBox
 и компонента UiErAnalyzer с наименованием «UiErAnalyzer1», являющегося
 источником данных.


	Sub Button1OnClick(Sender:Object; Args: IMouseEventArgs);

	Var

	    An: IEaxAnalyzer;

	Begin

	    An := UiErAnalyzer1.ErAnalyzer;

	    An.InteractiveMode := EaxInteractiveMode.AutoScrolling;

	End Sub Button1OnClick;


После выполнения примера, будет включен режим синхронной прокрутки таблицы
 данных и графика экспресс-отчета.


См. также:


[IEaxAnalyzeCore](IEaxAnalyzeCore.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
