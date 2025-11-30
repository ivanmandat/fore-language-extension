# TabUserInteractiveSelectionChangeType

TabUserInteractiveSelectionChangeType
-


# TabUserInteractiveSelectionChangeType


## Описание


Перечисление TabUserInteractiveSelectionChangeType
 содержит варианты ограничений по изменению границ интерактивного диапазона.


Используется следующими свойствами и методами:


	- [ITabUserInteractiveSelection.InteractiveRestrictions](../Interface/ITabUserInteractiveSelection/ITabUserInteractiveSelection.InteractiveRestrictions.htm);


	- [ITabUserInteractiveSelectionEventArgs.Type](../Interface/ITabUserInteractiveSelectionEventArgs/ITabUserInteractiveSelectionEventArgs.Type.htm);


	- [TabUserInteractiveSelectionEventArgs.CreateInteractiveSelectionArgs](../Class/TabUserInteractiveSelectionEventArgs/TabUserInteractiveSelectionEventArgs.CreateInteractiveSelectionArgs.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 None. Ограничения отсутствуют.


		 1
		 Move. Запрещено перемещать
		 интерактивный диапазон целиком.


		 2
		 Left. Запрещено изменять
		 левую границу диапазона.


		 4
		 Top. Запрещено изменять
		 верхнюю границу диапазона.


		 8
		 Right. Запрещено изменять
		 правую границу диапазона.


		 16
		 Bottom. Запрещено изменять
		 нижнюю границу диапазона.


		 31
		 All. Запрещено любое
		 изменение интерактивного диапазона.


См. также:


[Перечисления
 сборки Tab](TabSheet_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
