# ITabFormatConditions.Count

ITabFormatConditions.Count
-


# ITabFormatConditions.Count


## Синтаксис


Count: Integer;


## Описание


Свойство Count возвращает количество
 условных форматов в коллекции.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента TabSheetBox
 с наименованием «TabSheetBox1», и какого-либо компонента, являющегося
 источником данных для «TabSheetBox1».


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Tab: ITabSheet;

	    Format: ITabFormatCondition;

	    i: Integer;

	Begin

	    Tab := TabSheetBox1.Source.GetTabSheet;

	    For i := 0 To Tab.FormatConditions.Count - 1 Do

	        Format := Tab.FormatConditions.Item(i);

	        Debug.Write("Диапазон: " + Format.Range.Address + " Условие: ");

	        Select Case Format.Type As Integer

	            Case 0: Debug.WriteLine("Форматирование на основе значений ячеек");

	            Case 1: Debug.WriteLine("Форматирование ячейки с определенным значением");

	            Case 2: Debug.WriteLine("Форматирование ячеек с наибольшими/наименьшими значениями");

	            Case 3: Debug.WriteLine("Форматирование ячеек со значениями выше/ниже среднего");

	            Case 4: Debug.WriteLine("Форматирование ячеек с уникальными/дублирующимися значениями");

	            Case 5: Debug.WriteLine("Форматирование ячеек, удовлетворяющих формуле");

	        End Select;

	    End For;

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку в консоль будет выведен
 список, содержащий наименование диапазона ячеек и тип условного форматирования,
 применяемый к данному диапазону таблицы.


См. также:


[ITabFormatConditions](ITabFormatConditions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
