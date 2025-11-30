# IEaxAnalyzeCore.IsInteractiveModeAvailable

IEaxAnalyzeCore.IsInteractiveModeAvailable
-


# IEaxAnalyzeCore.IsInteractiveModeAvailable


## Синтаксис


IsInteractiveModeAvailable(InteractiveMode: [EaxInteractiveMode](../../Enums/EaxInteractiveMode.htm)):
 Boolean;


## Параметры


InteractiveMode. Режим интерактивности
 экспресс-отчета.


## Описание


Свойство IsInteractiveModeAvailable
 определяет возможность переключения в заданный режим интерактивности экспресс-отчета.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента TabSheetBox и компонента
 UiErAnalyzer с наименованием «UiErAnalyzer1», являющегося источником данных.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    An: IEaxAnalyzer;

	    S: Boolean;

	Begin

	    An := UiErAnalyzer1.ErAnalyzer;

	    S := An.IsInteractiveModeAvailable(EaxInteractiveMode.AutoScrolling);

	End Sub Button1OnClick;


После выполнения примера, в переменной «S» будет храниться значение,
 определяющее возможность включения режима синхронной прокрутки.


См. также:


[IEaxAnalyzeCore](IEaxAnalyzeCore.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
