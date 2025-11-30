# IEaxAnalyzeCore.EnableEdit

IEaxAnalyzeCore.EnableEdit
-


# IEaxAnalyzeCore.EnableEdit


## Синтаксис


EnableEdit: Boolean;


## Описание


Свойство EnableEdit определяет
 состояние режима редактирования данных экспресс-отчета.


## Комментарии


Допустимые значения:


	- True. Режим редактирования
	 данных экспресс-отчета включен;


	-  False. Режим редактирования
	 данных экспресс-отчета выключен.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента TabSheetBox и компонента
 UiErAnalyzer с наименованием «UiErAnalyzer1», являющегося источником данных.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    An: IEaxAnalyzer;

	Begin

	    An := UiErAnalyzer1.ErAnalyzer;

	    An.EnableEdit := True;

	End Sub Button1OnClick;


После выполнения примера, будет включен режим редактирования данных
 в таблице экспресс-отчета.


См. также:


[IEaxAnalyzeCore](IEaxAnalyzeCore.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
