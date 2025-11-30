# ITreeControl.SelectionMode

ITreeControl.SelectionMode
-


# ITreeControl.SelectionMode


## Синтаксис


SelectionMode: [SelectionModeType](../../Enums/SelectionModeType.htm);


## Описание


Свойство SelectionMode определяет
 режим отметки элементов в компоненте.


## Комментарии


По умолчанию используется режим множественной отметки: [SelectionModeType.MultiSelectStandard](../../Enums/SelectionModeType.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1, компонента TreeList с наименованием
 TreeList1. Пример является обработчиком события OnClick для кнопки.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Begin

    TreeList1.SelectionMode := SelectionModeType.SingleSelect;

End Sub Button1OnClick;


После выполнения примера в компоненте TreeList1 будет включен режим
 единичной отметки.


См. также:


[ITreeControl](ITreeControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
