# TabSheetBox.OnBeforeObjectChange

TabSheetBox.OnBeforeObjectChange
-


# TabSheetBox.OnBeforeObjectChange


## Синтаксис


Sub OnBeforeObjectChange(Sender: Object; Args: [ITabObjectChangeEventArgs](../../Interface/ITabObjectChangeEventArgs/ITabObjectChangeEventArgs.htm));


Begin


// Набор операторов


End Sub OnBeforeObjectChange;


## Параметры


Sender. Компонент, сгенерировавший
 событие;


Args. Параметры объекта, в
 котором произошло событие.


## Описание


Событие OnBeforeObjectChange
 наступает перед изменением объекта.


## Комментарии


Параметры объекта можно привести к различным интерфейсам в зависимости
 от типа изменения, которое произошло с объектом. Для этого используйте
 значение свойства [ITabObjectChangeEventArgs.Type](../../Interface/ITabObjectChangeEventArgs/ITabObjectChangeEventArgs.Type.htm),
 возвращаемое параметром Args:


	- [TabObjectChangeType.Angle](../../Enums/TabObjectChangeType.htm).
	 Объект будут вращать. Для получения параметров вращения приведите
	 значение параметра Args к
	 интерфейсу [ITabBeforeObjectAngleChangeEventArgs](../../Interface/ITabBeforeObjectAngleChangeEventArgs/ITabBeforeObjectAngleChangeEventArgs.htm);


	- [TabObjectChangeType.Rect](../../Enums/TabObjectChangeType.htm).
	 Объект будут перемещать или изменять его размеры. Для получения параметров
	 перемещения или изменения размеров приведите значение параметра Args к интерфейсу [ITabBeforeObjectRectChangeEventArgs](../../Interface/ITabBeforeObjectRectChangeEventArgs/ITabBeforeObjectRectChangeEventArgs.htm).


После изменения объекта наступает событие [OnAfterObjectChange](TabSheetBox.OnAfterObjectChange.htm).


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


			Sub TabSheetBox1OnBeforeObjectChange(Sender: Object; Args: ITabObjectChangeEventArgs);

Var

    Rect: ITabBeforeObjectRectChangeEventArgs;

    Angle: ITabBeforeObjectAngleChangeEventArgs;

    RectPos: IGxRectF;

Begin

    Select Case Args.Type

        // Если объект повернули более, чем на 90 градусов, то отменяем вращение

        Case TabObjectChangeType.Angle:

            Angle := Args As ITabBeforeObjectAngleChangeEventArgs;

            If Angle.NewValue > 90 Then

                Angle.Cancel := True;

            End If;

        // Если нижняя граница объекта переместилась ниже 100 пикселей, то отменяем перемещение

        Case TabObjectChangeType.Rect:

            Rect := Args As ITabBeforeObjectRectChangeEventArgs;

            RectPos := Rect.NewValue;

            If RectPos.Bottom > 100 Then

                Rect.Cancel := True;

            End If;

    End Select;

End Sub TabSheetBox1OnBeforeObjectChange;


В результате выполнения примера для всех фигур на листе будет отменяться
 вращение более, чем на 90 градусов и перемещение нижней границы ниже 100
 пикселей.


См. также:


[TabSheetBox](TabSheetBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
