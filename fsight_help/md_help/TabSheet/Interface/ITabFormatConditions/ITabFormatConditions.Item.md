# ITabFormatConditions.Item

ITabFormatConditions.Item
-


# ITabFormatConditions.Item


## Синтаксис


Item(Index: Integer): [ITabFormatCondition](../ITabFormatCondition/ITabFormatCondition.htm);


## Параметры


Index. Индекс условного формата, к которому необходимо получить доступ.


## Описание


Свойство Item возвращает ссылку на условный формат, индекс которого передается в качестве входного параметра Index.


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент Button с идентификатором «Button1», компонент TabSheetBox с идентификатором «TabSheetBox1» и компонент UiErAnalyzer с идентификатором «UiErAnalyzer1». Для компонента «TabSheetBox1» укажите источник данных «UiErAnalyzer1».


Пример является обработчиком события OnClick для компонента «Button1».


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


После выполнения примера при нажатии на кнопку в консоль будет выведен список, содержащий наименование диапазона ячеек и тип условного форматирования, применяемый к данному диапазону таблицы.


См. также:


[ITabFormatConditions](ITabFormatConditions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
