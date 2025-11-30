# ILanerResultsBox.Results

ILanerResultsBox.Results
-


# ILanerResultsBox.Results


## Синтаксис


Results: [ILanerResultsBoxResults](../ILanerResultsBoxResults/ILanerResultsBoxResults.htm);


## Описание


Свойство Results возвращает
 набор объектов, предназначенных для работы со вкладками на панели «Результаты вычислений».


## Комментарии


Данный метод реализует доступ к значениям, выводимым на панель «Результаты вычислений». Все значения
 предназначены только для чтения.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента LanerBox, компонента
 LanerResultsBox с наименованием «LanerResultsBox1» и компонента UiErAnalyzer,
 являющегося источником данных для LanerBox и LanerResultsBox. В «UiErAnalyzer1»
 должна быть загружена рабочая книга базы данных временных рядов.


Пример является обработчиком события OnClick для кнопки.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Results: ILanerResultsBoxResults;

	    Statistics: ILanerResultsBoxStatistics;

	    HasContainers: Boolean;

	    CurContainer: Integer;

	    i: Integer;

	    marg: String;

	Begin

	    Results := LanerResultsBox1.Results;

	    Statistics := Results.Statistics;

	    HasContainers := (Statistics.Count <> 0) And (Statistics.GroupIndex(0) <> -1);

	    CurContainer := -1;

	    For i := 0 To Statistics.Count - 1 Do

	        Statistics.Enabled(i) := Statistics.Active(i);

	        If Statistics.Enabled(i) Then

	            If (HasContainers And (CurContainer <> Statistics.GroupIndex(i))) Then

	                marg := "----";

	                Debug.WriteLine(Statistics.GroupName(i));

	            End If;

	            CurContainer := Statistics.GroupIndex(i);

	            Debug.WriteLine(marg + Statistics.Name(i) + "       " + Statistics.Value(i));

	        End If;

	        Select Case Statistics.Type(i)

	            Case LanerBoxStatisticType.Min: Statistics.Enabled(i) := False;

	            Case LanerBoxStatisticType.Max: Statistics.Enabled(i) := False;

	        End Select;

	    End For;

	    LanerResultsBox1.RefreshContainer(LanerBoxContainerType.Results);

	End Sub Button1OnClick;


После выполнения примера в консоль будут выведены значения всех статистик,
 доступных для выделенного ряда. Для каждой характеристики будет выведено
 наименование, значение и наименование группы, в которой она содержится
 (если группа присутствует). На вкладке «Статистические
 характеристики» будут скрыты характеристики «Максимум» и «Минимум».


См. также:


[ILanerResultsBox](ILanerResultsBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
