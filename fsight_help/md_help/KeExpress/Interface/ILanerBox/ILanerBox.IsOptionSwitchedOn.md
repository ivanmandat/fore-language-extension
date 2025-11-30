# ILanerBox.IsOptionSwitchedOn

ILanerBox.IsOptionSwitchedOn
-


# ILanerBox.IsOptionSwitchedOn


## Синтаксис


IsOptionSwitchedOn(Operation: [LanerBoxOperation](../../Enums/LanerBoxOperation.htm)):
 Boolean;


## Параметры


Operation. Операция, совершаемая
 с рабочей книгой.


## Описание


Метод IsOptionSwitchedOn возвращает
 признак того, применена ли указанная операция в рабочей книге.


## Комментарии


Метод применяется для следующих операций:


	- для многомерного режима рабочей книги:


	-


		- LanerBoxOperation.Pareto.
		 Анализ Парето;


		- LanerBoxOperation.Filter.
		 Фильтрация пустых ячеек;


		- LanerBoxOperation.Colorer.
		 Подсветка ячеек;


	- для рядного режима рабочей книги:


	-


		- LanerBoxOperation.PinSelectedCalcSerie.
		 Фиксация вычислимых рядов.


Допустимые значения:


	- True. Операция применена
	 в рабочей книге;


	- False. Операция не применена
	 в рабочей книге.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента LanerBox с наименованием
 «LanerBox1» и компонента UiErAnalyzer, являющегося источником данных для
 LanerBox. В UiErAnalyzer должна быть загружена рабочая книга базы данных
 временных рядов в многомерном режиме.


Описанная процедура должна быть назначена обработчиком события OnClick
 для кнопки. Пример выполняется при нажатии кнопки.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Begin

	    If Not LanerBox1.IsOptionSwitchedOn(LanerBoxOperation.Pareto) Then

	        LanerBox1.ExecuteOperation(LanerBoxOperation.Pareto);

	    End If;

	End Sub Button1OnClick;


После выполнения примера для рабочей книги, отображаемой в LanerBox,
 будет применен анализ Парето.


См. также:


[ILanerBox](ILanerBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
