# TabSheetMeasures.ColumnResizeEnabled

TabSheetMeasures.ColumnResizeEnabled
-


**


# TabSheetMeasures.ColumnResizeEnabled


## Синтаксис


ColumnResizeEnabled: Boolean;


## Описание


Свойство ColumnResizeEnabled**
 определяет возможность изменения ширины столбца при помощи мыши.


## Комментарии


Значение свойства устанавливается с помощью метода setColumn**ResizeEnabled**
 и возвращается при помощи метода getColumn**ResizeEnabled**.


При вызове метода setColumn**ResizeEnabled**
 указываются два параметра: colIndex - индекс столбца таблицы и value (Boolean)
 - возможность изменения ширины столбца.


При вызове метода getColumn**ResizeEnabled**
 указывается один параметр: colIndex - индекс столбца таблицы, возможность
 изменения ширины которого необходимо возвратить.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [TabSheet](../../../Components/TabSheet/TabSheet/TabSheet.htm)
 с наименованием «tabSheet» (см. «[Пример
 создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»). Запретим изменение ширины столбца
 с индексом 1 и выведем на экран возможность изменения ширины столбца и
 высоты строки с индексами 1:


// Запретим изменять ширину столбца с индексом 1 (столбец В)
tabSheet.getMeasures().setColumnResizeEnabled(1, false);
// Выводим сообщение о возможности изменения ширины столбца и высоты строки с индексами 1
alert("Column 1 ResizeEnabled = " + tabSheet.getMeasures().getColumnResizeEnabled(1) +
"\n" + "Row 1 ResizeEnabled = " + tabSheet.getMeasures().getRowResizeEnabled(1));
В результате выполнения примера было запрещено изменение ширины столбца
 с индексом 1 и на экран выведено сообщение о возможности изменения ширины
 столбца и высоты строки с индексами 1.


См. также:


[TabSheetMeasures](TabSheetMeasures.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
