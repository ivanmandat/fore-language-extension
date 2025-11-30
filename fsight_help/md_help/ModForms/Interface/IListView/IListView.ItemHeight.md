# IListView.ItemHeight

IListView.ItemHeight
-


# IListView.ItemHeight


## Синтаксис


ItemHeight: Integer;


## Описание


Свойство ItemHeight определяет
 высоту элементов компонента.


## Комментарии


Высота элементов указывается в пикселях. По умолчанию свойству установлено
 значение -1, при этом высота элементов рассчитывается автоматически в
 зависимости от используемого в компоненте шрифта и настроек операционной
 системы.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1 и компонента ListView с наименованием
 ListView1. Для ListView1 создано две колонки и несколько элементов.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    c: ICheckBox;

    i: Integer;

Begin

    For i := 0 To ListView1.Items.Count - 1 Do

        c := New CheckBox.Create;

        c.Text := "Параметр " + i.ToString;

        ListView1.InsertControl(c, 1, i);

    End For;

    ListView1.ItemHeight := 16;

End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку во вторую колонку компонента
 ListView1 напротив каждого элемента будут вставлены переключатели. Высота
 элементов будет установлена равной 16.


См. также:


[IListView](IListView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
