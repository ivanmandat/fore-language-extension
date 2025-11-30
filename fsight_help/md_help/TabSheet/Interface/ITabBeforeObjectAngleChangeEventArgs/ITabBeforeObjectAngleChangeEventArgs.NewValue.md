# ITabBeforeObjectAngleChangeEventArgs.NewValue

ITabBeforeObjectAngleChangeEventArgs.NewValue
-


# ITabBeforeObjectAngleChangeEventArgs.NewValue


## Синтаксис


NewValue: Double;


## Описание


Свойство NewValue определяет
 угол, на который был повёрнут объект.


## Комментарии


Значение угла всегда положительное и отсчитывается по часовой стрелке.
 Например, если объект повернули по часовой стрелке на 15 градусов, то
 свойство вернёт значение 15, а если повернули на 15 градусов против часовой
 стрелки - то значение 345.


## Пример


Использование свойства приведено в примере для [TabSheetBox.OnBeforeObjectChange](../../Class/TabSheetBox/TabSheetBox.OnBeforeObjectChange.htm).


См. также:


[ITabBeforeObjectAngleChangeEventArgs](ITabBeforeObjectAngleChangeEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
