# ListView.OnSelectingItem

ListView.OnSelectingItem
-


# ListView.OnSelectingItem


## Синтаксис


OnSelectingItem(Sender: Object; Args: [IListViewActionEventArgs](../../Interface/IListViewActionEventArgs/IListViewActionEventArgs.htm));


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие.


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Событие OnSelectingItem наступает
 перед изменением отметки у элемента компонента.


## Пример


Для выполнения примера предполагается наличие формы и, расположенного
 на ней, компонента ListView с наименованием ListView1. Для компонента
 создано несколько элементов.


			Sub ListView1OnSelectingItem(Sender: Object; Args: IListViewActionEventArgs);

Begin

    If (Args.Item.Text = "3") Then

        Args.Allowed := False;

    End If;

End Sub ListView1OnSelectingItem;


После выполнения примера при смене отметки у элементов в компоненте,
 если текст элемента соответствует "3", то изменение отметки
 у данного элемента будет запрещено.


См. также:


[ListView](ListView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
