# TabSheetBox.OnObjectResizing

TabSheetBox.OnObjectResizing
-


# TabSheetBox.OnObjectResizing


## Синтаксис


Sub OnObjectResizing(Sender:
 Object; Agrs: [ITabObjectResizingEventArgs](../../Interface/ITabObjectResizingEventArgs/ITabObjectResizingEventArgs.htm));


Begin


//набор операторов


End Sub
 OnObjectResizing;


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие;


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Событие OnObjectResizing наступает
 во время изменения размеров объекта.


## Комментарии


Возникает перед событием [TabSheetBox.OnBeforeObjectChange](TabSheetBox.OnBeforeObjectChange.htm).


## Пример


Для выполнения примера предполагается наличие формы, содержащей компоненты
 TabSheetBox с наименованием TabSheetBox1
 и UiReport с наименованием UiReport1,
 являющийся источником данных для TabSheettBox1. В свойстве OperationMode
 компонента UiReport1 установите значение Edit, в свойстве Active
 - True. UiReport1 должен содержать загруженный регламентный отчет с фигурами
 на активном листе.


Указанная процедура должна быть назначена обработчиком события OnObjectResizing для компонента
 TabSheetBox1.


Добавьте ссылку на системную сборку Drawing для Fore.


			Sub TabSheetBox1OnObjectResizing(Sender: object; Args: ITabObjectResizingEventArgs);

Begin

    Debug.WriteLine("Размеры объекта " + Args.Object.Id +

        " были изменены со стороны:" + Args.Side.ToString + ", координаты:" + Args.Rect.Left.ToString);

End Sub TabSheetBox1OnObjectResizing;


В результате выполнения примера при изменении размеров фигуры в окно
 консоли будет выведено сообщение, содержащее идентификатор объекта, указана
 сторона, с которой было произведено действие, и координата слева.


См. также:


[TabSheetBox](TabSheetBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
