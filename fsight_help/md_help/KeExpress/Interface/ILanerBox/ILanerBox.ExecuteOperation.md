# ILanerBox.ExecuteOperation

ILanerBox.ExecuteOperation
-


# ILanerBox.ExecuteOperation


## Синтаксис


ExecuteOperation(Operation: [LanerBoxOperation](../../Enums/LanerBoxOperation.htm);
 [Param: Variant = Null]): Variant;


## Параметры


Operation. Тип операции, которую
 необходимо совершить;


Param. Параметры совершаемой
 операции.


## Описание


Метод ExecuteOperation выполняет
 указанную операцию над рабочей книгой.


## Комментарии


Признак того, что указанную операцию можно применить к компоненту LanerBox
 возвращает метод [ILanerBox.CanExecuteOperation](ILanerBox.CanExecuteOperation.htm).


Параметры задаются лишь для следующих операций:


	- LanerBoxOperation.DeleteSelectedSeries,
	 LanerBoxOperation.RemoveSelectedFacts.
	 Удаление выбранных рядов из рабочей книги или из БД. Параметр Param одномерный массив из двух
	 элементов логического типа:


	-


		- Param[0]. Определяет,
		 отображать ли подтверждение удаления рядов;


		- Param[1]. Определяет,
		 отображать ли информацию о том, что не все ряды были удалены.


Допустимые значения элементов массива:


	- True. Отображать подтверждение/информацию;


	- False. Не отображать подтверждение/информацию;


	- LanerBoxOperation.CopySelectedSeries.
	 Копирование выделенных рядов. Параметр Param
	 логического типа. Допустимые значения:


	-


		- True. Копируются
		 только выделенные значения ряда;


		- False. Копируются
		 все значения ряда.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента LanerBox с наименованием
 «LanerBox1» и компонента UiErAnalyzer, являющегося источником данных для
 LanerBox. В UiErAnalyzer должна быть загружена рабочая книга базы данных
 временных рядов.


Описанная процедура должна быть назначена обработчиком события OnClick
 для кнопки. Пример выполняется при нажатии кнопки.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Begin

	    If LanerBox1.CanExecuteOperation(LanerBoxOperation.ChangeMode) Then

	        LanerBox1.ExecuteOperation(LanerBoxOperation.ChangeMode);

	    End If;

	End Sub Button1OnClick;


После выполнения примера для рабочей книги, отображаемой в LanerBox,
 будет изменен режим отображения данных, если это возможно.


См. также:


[ILanerBox](ILanerBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
