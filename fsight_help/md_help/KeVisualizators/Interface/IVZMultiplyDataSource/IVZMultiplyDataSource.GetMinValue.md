# IVZMultiplyDataSource.GetMinValue

IVZMultiplyDataSource.GetMinValue
-


# IVZMultiplyDataSource.GetMinValue


## Синтаксис


GetMinValue(attrId: String; timeIndex: Integer;
 UseSignDivision: Boolean): Variant;


## Параметры


attrId. Наименование метрики
 визуализатора:


		 Визуализатор
		 Наименование метрики
		 Краткое описание


		 Таблица
		 Value
		 Значение


		 BackgroundColor
		 Цвет фона


		 FontColor
		 Цвет шрифта


		 FontSize
		 Размер шрифта


		 Карта
		 color
		 Цвет


		 height
		 Объем


		 pieAngle
		 Круговой


		 barHeight
		 Столбиковый


		 Пузырьковая диаграмма
		 x
		 Положение по оси значений Х


		 y
		 Положение по оси значений Y


		 color
		 Цвет


		 radius
		 Размер


		 Пузырьковое и плоское деревья
		 color
		 Цвет


		 radius
		 Размер


Важно. При
 задании наименования метрики необходимо соблюдать приведенный регистр.


Так же значение параметра можно получить с помощью свойства [IVZDataSourceMapping.AttributeId](../IVZDataSourceMapping/IVZDataSourceMapping.AttributeId.htm).


timeIndex. Индекс временной
 шкалы;


UseSignDivision. Признак обработки
 данных по модулю.


## Описание


Метод GetMinValue возвращает
 минимальное значение заданной метрики по индексу временной шкалы.


## Комментарии


Если индекс временной шкалы равен «-1», то метод возвращает данные по
 всей временной шкале.


## Пример


Использование метода приведено в примере для [IVZMultiplyDataSource.GetData](IVZMultiplyDataSource.GetData.htm).


См. также:


[IVZMultiplyDataSource](IVZMultiplyDataSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
