# TabSheetModel.parseSpans

TabSheetModel.parseSpans
-


# TabSheetModel.parseSpans


## Синтаксис


parseSpans(data, rowCorrection, colCorrection);


## Параметры


*data. Object. Данные для загрузки;*


*rowCorrection. Number. Смещение по строкам;*


*colCorrection.
 Number. Смещение по столбцам.*


## Описание


Метод parseSpans загружает в
 модель массив объединений ячеек.


## Комментарии


Для добавления нового диапазона рекомендуется использовать метод [TabSheetModel.addCellSpan](TabSheetModel.addCellSpan.htm).


В качестве параметра Data подразумевается объект со следующей структурой:


data = {
  CellSpans : {
    CellSpan : [
      {
        "@T" : 1  // ряд
        "@L" : 1  // столбец
        "@W" : 2  // ширина
        "@H" : 2  // высота
      },
      {...}
    ]
  }
}

## Пример


Метод предназначен для внутреннего использования.


См. также:


[TabSheetModel](TabSheetModel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
