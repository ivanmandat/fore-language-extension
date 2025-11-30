# IWxWorkspace.CreateTableShape

IWxWorkspace.CreateTableShape
-


# IWxWorkspace.CreateTableShape


## Синтаксис


		CreateTableShape: [IWxTableShape](../IWxTableShape/IWxTableShape.htm);


## Описание


Метод CreateTableShape создает
 табличную фигуру.


## Комментарии


При выполнении метода будет создана новая фигура, содержащая таблицу.
 По умолчанию таблица будет иметь три столбца и три строки. При необходимости
 их количество можно изменить, используя методы[
 IWxTableShape.AddColumnWithFixedWidth](../IWxTableShape/IWxTableShape.AddColumnWithFixedWidth.htm)/[IWxTableShape.AddRowWithFixedHeight](../IWxTableShape/IWxTableShape.AddRowWithFixedHeight.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента WorkspaceBox
 и компонента UiWorkspace с наименованием
 «UiWorkspace1», являющегося источником данных для WorkspaceBox.


Добавьте ссылки на системные сборки: Andy, Drawing, Metabase.


					Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

		Var

		    w: IWxWorkspace;

		    TShape: IWxTableShape;

		    TSheet: ITabSheet;

		    Cell: ITabRange;

		    i, j: Integer;

		Begin

		    w := UiWorkspace1.WxWorkspace;

		    //Создание новой табличной фигуры

		    TShape := w.CreateTableShape;

		    TShape.Size := New GxSizeF.Create(50, 40);

		    TShape.BeginUpdate;

		    //Настройка таблицы

		    TSheet := TShape.TabSheet;

		    For i := 0 To 2 Do

		        For j := 0 To 2 Do

		            Cell := TSheet.Cell(i, j);

		            Cell.Value := ...;//Значения ячеек

		            Cell.Style.BorderStyle(TabBorder.Outline) := TabBorderStyle.Continuous;

		        End For;

		    End For;

		    //Создание еще одного столбца

		    TShape.AddColumnWithFixedWidth(20);

		    TShape.AddRowWithFixedHeight(20);

		    //Указываем значения для ячеек созданного столбца

		    TSheet.Cell(0, 3).Value := "Погрешность";

		    TSheet.Cell(3, 0).Value := "Всего";

		    TShape.AdjustSize;

		    TShape.EndUpdate;

		End Sub Button1OnClick;


При нажатии на кнопку будет создана новая табличная фигура. Для ячеек
 таблицы будут указаны значения. Также в таблице будут созданы один дополнительный
 столбец и одна строка.


См. также:


[IWxWorkspace](IWxWorkspace.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
