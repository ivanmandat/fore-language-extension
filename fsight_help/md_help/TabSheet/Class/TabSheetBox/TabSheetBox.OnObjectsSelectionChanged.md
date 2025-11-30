# TabSheetBox.OnObjectsSelectionChanged

TabSheetBox.OnObjectsSelectionChanged
-


# TabSheetBox.OnObjectsSelectionChanged


## Синтаксис


Sub OnObjectsSelectionChanged(Sender:
 Object; Args: [ITabSheetEventArgs](../../Interface/ITabSheetEventArgs/ITabSheetEventArgs.htm));


Begin


//набор операторов;


End Sub OnObjectsSelectionChanged;


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие;


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Событие OnObjectsSelectionChanged
 наступает при выделении объекта, расположенного в таблице.


## Комментарии


При активации/деактивации объектов наступает событие [TabSheetBox.OnObjectActivate](TabSheetBox.OnObjectActivate.htm).


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент
 TabSheetBox с идентификатором «TabSheetBox1» и компонент UiTabSheet с
 идентификатором «UiTabSheet1». Укажите компонент «UiTabSheet1» в качестве
 источника данных для компонента «TabSheetBox1».


			Sub TabSheetBox1OnObjectsSelectionChanged(Sender: Object; Args: ITabSheetEventArgs);

Begin

    Debug.WriteLine("Выбран объект в таблице: " + Args.TabSheet.Name);

End Sub TabSheetBox1OnObjectsSelectionChanged;


В результате выполнении примера при выделении объекта, расположенного
 в таблице, в окно консоли будет выводиться сообщение о выделении объекта.


См. также:


[TabSheetBox](TabSheetBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
