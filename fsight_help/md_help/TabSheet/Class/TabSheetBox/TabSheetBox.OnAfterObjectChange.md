# TabSheetBox.OnAfterObjectChange

TabSheetBox.OnAfterObjectChange
-


# TabSheetBox.OnAfterObjectChange


## Синтаксис


Sub OnAfterObjectChange(Sender:
 Object;

                        Args:
 [ITabObjectChangeEventArgs](../../Interface/ITabObjectChangeEventArgs/ITabObjectChangeEventArgs.htm));


Begin


//набор операторов;


End Sub
 OnAfterObjectChange;


## Параметры


Sender. Компонент, сгенерировавший
 событие;


Args. Параметры объекта, в
 котором произошло событие.


## Описание


Событие OnAfterObjectChange
 наступает после изменения объекта.


## Комментарии


Перед изменением объекта наступает событие [OnBeforeObjectChange](TabSheetBox.OnBeforeObjectChange.htm).


## Пример


Для выполнения примера предполагается наличие формы, содержащей компоненты:


	- TabSheetBox с идентификатором
	 «TabSheetBox1».


	- UiReport с идентификатором
	 «UiReport1», являющийся источником данных для «TabSheetBox1». Также
	 «UiReport1» должен быть активен и содержать загруженный регламентный
	 отчет с фигурами на активном листе.


Указанная процедура должна быть назначена обработчиком события OnAfterObjectChange для компонента
 «TabSheetBox1».


			Sub TabSheetBox1OnAfterObjectChange(Sender: Object; Args: ITabObjectChangeEventArgs);

Begin

    Select Case Args.Type

        Case TabObjectChangeType.Angle:

            Debug.WriteLine("Объект '"+Args.Object.Id+"' повернули");

        Case TabObjectChangeType.Rect:

            Debug.WriteLine("Объект '"+Args.Object.Id+"' переместили или изменили его размер");

    End Select;

End Sub TabSheetBox1OnAfterObjectChange;


В результате выполнения примера после изменения размера, перемещения
 или вращения объекта в окно консоли будет выведено сообщение, содержащее
 идентификатор объекта и описание действия, которое с ним было произведено.


См. также:


[TabSheetBox](TabSheetBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
