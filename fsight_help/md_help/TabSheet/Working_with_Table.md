# Особенности работы с таблицей

Особенности работы с таблицей
-


# Особенности работы с таблицей


При работе с таблицей, содержащий большое количество данных, требуется
 много времени для изменения и обработки данных таблицы.


Для экономии времени вызовите метод [ITabSheet.BeginUpdate](Interface/ITabSheet/ITabSheet.BeginUpdate.htm).
 После вызова данного метода и до вызова метода [ITabSheet.EndUpdate](Interface/ITabSheet/ITabSheet.EndUpdate.htm):


	- в таблице не будет производиться вычисление значений по формулам;


	- не будет производиться перестроение таблицы.


Также рекомендуется по возможности не использовать стек изменений таблицы
 [ITabSheet.UndoRedo](Interface/ITabSheet/ITabSheet.UndoRedo.htm).


Если на листе отчета расположены объекты, строящиеся на данных таблицы,
 то для ускорения работы с таблицей рекомендуется отключить визуальные
 события, вызываемые при заполнении таблицы данными. Вместо них использовать:


	- до заполнения таблицы данными: [ITabSheet.EventMask](Interface/ITabSheet/ITabSheet.EventMask.htm) = [TabViewEventGroups](Enums/TabViewEventGroups.htm).ClickEvents;


	- после заполнения: [ITabSheet.EventMask](Interface/ITabSheet/ITabSheet.EventMask.htm) = [TabViewEventGroups](Enums/TabViewEventGroups.htm).AllEvents.


См. также:


[Сборка
 TabSheet](TabSheet_Title.htm) | [ITabSheet.BeginUpdate](Interface/ITabSheet/ITabSheet.BeginUpdate.htm)
 | [ITabSheet.EventMask](Interface/ITabSheet/ITabSheet.EventMask.htm)
 | [ITabSheet.UndoRedo](Interface/ITabSheet/ITabSheet.UndoRedo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
