# Timeline.TicksChanging

Timeline.TicksChanging
-


# Timeline.TicksChanging


## Синтаксис


TicksChanging: function(sender, args)


## Параметры


sender. Источник события;


args. Информация о событии.
 Доступный аргумент: элемент добавляется: AddedTick
 - имя добавленного шага; AddedIndex
 - индекс, куда добавлен шаг; элемент удаляется: RemovedTick
 - имя удаленного шага; RemovedIndex
 - индекс, откуда удаляется шаг; Cancel
 - признак отмены операции изменения
 шагов временной шкалы: true -
 операция отменена, false (по умолчанию)
 - операция не отменена.


## Описание


Событие TicksChanging наступает
 во время изменения шагов временной шкалы.


## Пример


Пример использования события приведен в описании метода [TimeLine.removeTick](TimeLine.removeTick.htm).


 См. также:


[Timeline](Timeline.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
