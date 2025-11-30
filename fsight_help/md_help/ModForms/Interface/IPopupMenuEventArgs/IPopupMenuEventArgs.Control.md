# IPopupMenuEventArgs.Control

IPopupMenuEventArgs.Control
-


# IPopupMenuEventArgs.Control


## Синтаксис


Control: [IControl](../IControl/IControl.htm);


## Описание


Свойство Control возвращает
 компонент, над которым было вызвано контекстное меню.


## Пример


Для выполнения примера предполагается наличие формы, компонента PopupMenu
 с наименованием PopupMenu1, для которого в качестве обработчика события
 OnPopup установлена данная процедура. Также на форме расположено несколько
 визуальных компонентов. У всех визуальных компонентов, а также у самой
 формы, в качестве значения свойства PopupMenu установлен данный компонент
 PopupMenu1.


			Sub PopupMenu1OnPopup(Sender: Object; Args: IPopupMenuEventArgs);

Begin

    Debug.WriteLine(Args.Control.Name);

End Sub PopupMenu1OnPopup;


После срабатывания события в консоль будет выводиться наименование объекта,
 над которым было вызвано контекстное меню.


См. также:


[IPopupMenuEventArgs](IPopupMenuEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
