# IRdsDictionaryBox.MoveElementLevelUp

IRdsDictionaryBox.MoveElementLevelUp
-


# IRdsDictionaryBox.MoveElementLevelUp


## Синтаксис


MoveElementLevelUp;


## Описание


Метод MoveElementLevelUp осуществляет перемещение выделенных элементов на один уровень вверх, если это возможно.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на ней кнопки с наименованием «Button1», компонента RdsDictionaryBox с наименованием «RdsDictionaryBox1» и компонента UiRdsDictionary, являющегося источником данных для «RdsDictionaryBox1».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Begin

    If RdsDictionaryBox1.CanElementLevelUp Then

        RdsDictionaryBox1.MoveElementLevelUp;

    End If;

End Sub Button1OnClick;


При нажатии на кнопку выделенные элементы справочника будут перемещены на один уровень вверх, если это возможно.


См. также:


[IRdsDictionaryBox](IRdsDictionaryBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
