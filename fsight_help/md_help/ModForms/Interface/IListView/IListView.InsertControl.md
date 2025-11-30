# IListView.InsertControl

IListView.InsertControl
-


# IListView.InsertControl


## Синтаксис


InsertControl(Control: [IControl](../IControl/IControl.htm);
 Column: Integer; Row: Integer);


## Параметры


Control. Компонент, который
 необходимо вставить в область элементов компонента.


Column. Индекс столбца, в который
 необходимо вставить компонент.


Row. Индекс строки, в которую
 необходимо вставить компонент.


## Описание


Метод InsertControl осуществляет
 вставку компонента в область элементов компонента [ListView](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/ListView.htm).


## Комментарии


Использование данного метода доступно, если свойству [Style](IListView.Style.htm)
 установлено значение [ListViewStyle.Report](../../Enums/ListViewStyle.htm).


Примечание.
 Высота вставляемого компонента будет соответствовать [высоте](IListView.ItemHeight.htm)
 элементов компонента [ListView](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/ListView.htm).
 Ширина вставляемого компонента будет соответствовать [ширине](../IListViewColumn/IListViewColumn.Width.htm)
 соответствующего столбца.


Вставляемый компонент будет являться дочерним относительно самого компонента
 [ListView](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/ListView.htm).
 Получить доступ к созданным компонентам можно с помощью свойства [IComponent.Components](../IComponent/IComponent.Components.htm).
 Для удаления созданного компонента используйте метод [IFormControl.FreeComponent](../IFormControl/IFormControl.FreeComponent.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1» и компонента ListView с наименованием
 «ListView1». В «ListView1» создано два столбца и несколько элементов.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    c: ICheckBox;

    i: Integer;

Begin

    ListView1.Style := ListViewStyle.Report;

    For i := 0 To ListView1.Items.Count - 1 Do

        c := New CheckBox.Create;

        c.Name := c.Name + i.ToString;

        c.Text := "Параметр " + i.ToString;

        ListView1.InsertControl(c, 1, i);

    End For;

    ListView1.ItemHeight := 16;

End Sub Button1OnClick;


При нажатии на кнопку во второй столбец компонента «ListView1» напротив
 каждого элемента будут вставлены переключатели. Высота элементов будет
 установлена равной «16».


См. также:


[IListView](IListView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
