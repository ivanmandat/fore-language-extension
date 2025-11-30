# ListView.OnFocusChanging

ListView.OnFocusChanging
-


# ListView.OnFocusChanging


## Синтаксис


OnFocusChanging(Sender: Object; Args: [IListViewActionEventArgs](../../Interface/IListViewActionEventArgs/IListViewActionEventArgs.htm));


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие.


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Событие OnFocusChanging наступает
 перед сменой фокуса у элемента компонента.


## Пример


Для выполнения примера предполагается наличие формы и расположенного
 на ней компонента ListView с наименованием ListView1. Для компонента создано
 несколько элементов.


			Sub ListView1OnFocusChanging(Sender: Object; Args: IListViewActionEventArgs);

Begin

    If (Args.Item.Text = "3") And (Not Args.Item.Focused) Then

        Args.Allowed := False;

    End If;

End Sub ListView1OnFocusChanging;


После выполнения примера при смене сфокусированного элемента в компоненте,
 если текст элемента соответствует 3, то передача фокуса данному элементу
 будет запрещена.


См. также:


[ListView](ListView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
