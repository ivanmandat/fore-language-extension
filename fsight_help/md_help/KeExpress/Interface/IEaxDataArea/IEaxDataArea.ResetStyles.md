# IEaxDataArea.ResetStyles

IEaxDataArea.ResetStyles
-


# IEaxDataArea.ResetStyles


## Синтаксис


ResetStyles;


## Описание


Метод ResetStyles очищает стили
 представлений аналитической области данных.


## Комментарии


При выполнении метода будут сброшены стили, используемые [представлени](IEaxDataArea.Views.htm)ями
 срезов данных. Если использовались стили внешней таблицы стилей, то будет
 сброшена привязка к ним. При этом для стиля каждого представления в свойстве
 [IStyledEntity.ContainerKey](ModDrawing.chm::/Interface/IStyledEntity/IStyledEntity.ContainerKey.htm)
 будет установлено значение «-1».


См. также:


[IEaxDataArea](IEaxDataArea.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
