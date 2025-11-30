# ITabColumnEventArgs.Column

ITabColumnEventArgs.Column
-


# ITabColumnEventArgs.Column


## Синтаксис


Column: Integer;


## Описание


Свойство Column возвращает номер
 столбца, для которого произошло событие.


## Пример


Для выполнения примера предполагается наличие формы. На форме расположен
 компонент TabSheetBox и компонент UiTabSheet с наименованием «UiTabSheet1».
 «UiTabSheet1» является источником данных для компонента TabSheetBox. Данная
 процедура установлена в качестве обработчика события [OnColumnClick](../../Class/TabSheetBox/TabSheetBox.OnColumnClick.htm).


	Sub TabSheetBox1OnColumnClick(Sender: Object; Args: ITabColumnEventArgs);

	Var

	    i: Integer;

	Begin

	    i := Args.Column;

	End Sub TabSheetBox1OnColumnClick;


После выполнения события в переменной «i» будет содержаться номер столбца,
 по заголовку которого был осуществлен щелчок кнопкой мыши.


См. также:


[ITabColumnEventArgs](ITabColumnEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
