# ILanerResultsBoxCopyEventArgs.Handled

ILanerResultsBoxCopyEventArgs.Handled
-


# ILanerResultsBoxCopyEventArgs.Handled


## Синтаксис


Handled: Boolean;


## Описание


Свойство Handled определяет,
 переходит ли право копирования к разработчикам на прикладной уровень.


## Комментарии


True - право копирования переходит
 на прикладной уровень, копирование в буфер обмена на системном уровне
 не будет произведено; False -
 копирование данных в буфер обмена будет произведено на системном уровне.
 Значение по умолчанию - False.


## Пример


Для выполнения примера предполагается наличие формы, расположенного
 на ней компонента LanerBox, компонента LanerResultsBox с наименованием
 «LanerResultsBox1» и компонента UiErAnalyzer, являющегося источником данных
 для LanerBox и LanerResultsBox. В «UiErAnalyzer1» должна быть загружена
 рабочая книга базы данных временных рядов.


Процедура должна быть назначена обработчиком события [OnCopyStatistics](../../Class/LanerResultsBox/LanerResultsBox.OnCopyStatistics.htm)
 для компонента LanerResultsBox. Пример будет выполняться при копировании
 данных со вкладки «Статистические характеристики»
 на панели «Результаты вычислений».


	Sub LanerResultsBox1OnCopyStatistics(Sender: Object; Args: ILanerResultsBoxCopyEventArgs);

	Var

	    LanerResultsBox: ILanerResultsBox;

	    Results: ILanerResultsBoxResults;

	    Statistics: ILanerResultsBoxStatistics;

	    i: Integer;

	Begin

	    Args.Handled := True;

	    LanerResultsBox := Sender As ILanerResultsBox;

	    Results := LanerResultsBox.Results;

	    Statistics := Results.Statistics;

	    For i := 0 To Statistics.Count - 1 Do

	        If Statistics.Type(i) = LanerBoxStatisticType.Min Then

	            Debug.WriteLine(Statistics.Name(i) + "       " + Statistics.Value(i));

	        End If;

	    End For;

	End Sub LanerResultsBox1OnCopyStatistics;


После выполнения операции копирования данных со вкладки «Статистические
 характеристики» буфер обмена останется пустым, в окно консоли будет
 выведено значение характеристики «Минимум».


См. также:


[ILanerResultsBoxCopyEventArgs](ILanerResultsBoxCopyEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
