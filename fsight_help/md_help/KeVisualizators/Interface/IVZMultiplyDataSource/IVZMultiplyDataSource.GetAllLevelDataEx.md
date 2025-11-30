# IVZMultiplyDataSource.GetAllLevelDataEx

IVZMultiplyDataSource.GetAllLevelDataEx
-


# IVZMultiplyDataSource.GetAllLevelDataEx


## Синтаксис


GetAllLevelDataEx(attrId: String, level: Integer):
 [IVZDataArray](../IVZDataArray/IVZDataArray.htm);


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


		 Пузырьковая
		 диаграмма
		 x
		 Положение по оси значений
		 Х


		 y
		 Положение по оси значений
		 Y


		 color
		 Цвет


		 radius
		 Рамер


		 Пузырьковое
		 и плоское деревья
		 color
		 Цвет


		 radius
		 Рамер


Важно. При
 задании наименования метрики необходимо соблюдать приведенный регистр.


level. Уровень временной шкалы.


## Описание


Метод GetAllLevelDataEx возвращает
 все данные атрибута для заданной метрики и уровня временной шкалы.


## Комментарии


Если уровень временной шкалы равен «-1», то метод возвращает данные
 по всей временной шкале.


## Пример


Использование метода приведено в примере для [IVZDataScale.ConstructScaleElements](../IVZDataScale/IVZDataScale.ConstructScaleElements.htm).


См. также:


[IVZMultiplyDataSource](IVZMultiplyDataSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
