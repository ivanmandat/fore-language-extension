# IPivotTable.Post

IPivotTable.Post
-


# IPivotTable.Post


## Синтаксис


Post([Callback: [ICubeCallback](KeCubes.chm::/Interface/ICubeCallback/ICubeCallback.htm)
 = Null]);


## Параметры


Callback. Объект, осуществляющий
 обработку ошибок, которые могут возникнуть при сохранении данных.


## Описание


Метод Post осуществляет выход
 из режима редактирования с сохранением измененных данных таблицы.


## Комментарии


Если сохранение выполняется из аналитической панели или экспресс-отчёта,
 отображающего данные из базы данных временных рядов с выбранным [вариантом отображения](UiExpress.chm::/purpose/DataSourceParam.htm)
 «Атрибуты», то сохранение значений
 доступно для:


	- атрибутов наблюдений;


	- атрибутов, не являющихся ссылкой на справочник или не являющихся
	 атрибутами данного справочника;


	- атрибутов, имеющих только единичное значение.


## Пример


Для выполнения примера разместите на форме компонент Button, UiErAnalyzer
 и TabSheetBox с наименованиями «Button1», «UiErAnalyzer1» и «TabSheetBox1»
 соответственно. В качестве источника данных для «TabSheetBox1» укажите
 «UiErAnalyzer1» в свойстве Source.
 Источником данных для «UiErAnalyzer1» является экспресс-отчёт, заданный
 в свойстве Object. Также для «UiErAnalyzer1»
 установите свойству Active значение
 True.


Добавьте ссылки на системные сборки: Cubes, Express, Forms, MathFin,
 Pivot, Tab.


Пример является обработчиком события OnClick для компонента «Button1».


			Class SaveCallback: Object, ICubeCallback

    Public Sub OnCallback(Argument: ICubeCallbackArgument);

    Begin

        Debug.WriteLine("Ошибка: " + Argument.Error.Message);

        Debug.WriteLine("Идентификатор ошибки: " + Argument.Error.MessageID.ToString);

        Debug.WriteLine("Источник: " + Argument.Error.Source);

        Argument.IgnoreError := True;

    End Sub OnCallback;


    Public Function get_Argument: ICubeCallbackArgument;

    Begin

        Return Null;

    End Function get_Argument;

End Class SaveCallback;


Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    CallBack: SaveCallback;

    OLAP: IEaxAnalyzer;

    Pivot: IPivot;

    Table: IPivotTable;

    i, j: Integer;

Begin

    CallBack := New SaveCallback.Create;

    OLAP := UiErAnalyzer1.ErAnalyzer;

    Pivot := OLAP.Pivot;

    Table := Pivot.ObtainTable;

    Table.Edit;

    For i := 0 To Table.RowCount - 1 Do

        For j := 0 To Table.ColumnCount - 1 Do

            Table.Cell(i, j) := Math.RandBetweenI(100, 500);

        End For;

    End For;

    Table.Post(CallBack);

    Pivot.Refresh;

End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку будут сгенерированы случайные
 значения для всех ячеек таблицы. Обновлённые данные будут сохранены в
 источник данных. Ошибки, которые могут возникнуть при сохранении, будут
 обрабатываться в пользовательском классе «SaveCallback».


См. также:


[IPivotTable](IPivotTable.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
