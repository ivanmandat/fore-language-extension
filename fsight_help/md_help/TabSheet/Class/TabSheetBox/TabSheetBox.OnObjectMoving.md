# TabSheetBox.OnObjectMoving

TabSheetBox.OnObjectMoving
-


# TabSheetBox.OnObjectMoving


## Синтаксис


Sub OnObjectMoving(Sender:
 Object; Agrs: [ITabObjectMovingEventArgs](../../Interface/ITabObjectMovingEventArgs/ITabObjectMovingEventArgs.htm));


Begin


//набор операторов


End Sub
 OnObjectMoving;


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие;


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Событие OnObjectMoving наступает
 во время перемещения объекта.


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


Указанная процедура должна быть назначена обработчиком события OnObjectMoving для компонента TabSheetBox1.


Добавьте ссылку на системную сборку Drawing для Fore.


			Sub TabSheetBox1OnObjectMoving(Sender: object; Args: ITabObjectMovingEventArgs);

Begin

    Debug.WriteLine("Объект:  " + Args.Object.Id +

        " был перемещен с координатами: " + Args.Rect.Left.ToString);

End Sub TabSheetBox1OnObjectMoving;

End Class TabSheetBox_OnObjectMovingForm;


В результате выполнения примера при перемещении фигуры в окно консоли
 будет выведено сообщение, содержащее идентификатор объекта и координата
 слева.


См. также:


[TabSheetBox](TabSheetBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
