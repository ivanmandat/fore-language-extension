# IMsUORuntimeConstraint

IMsUORuntimeConstraint
-


# IMsUORuntimeConstraint


Сборка: Ms;


## Описание


Интерфейс IMsUORuntimeConstraint
 предназначен для работы с ограничением пользовательской задачи оптимизации.


## Иерархия наследования


IMsUORuntimeConstraint


## Комментарии


Ограничение пользовательской задачи оптимизации можно получить, используя
 свойство [IMsUORuntimeConstraints.Item](../IMsUORuntimeConstraints/IMsUORuntimeConstraints.Item.htm)
 во время расчёта задачи.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Constraint](IMsUORuntimeConstraint.Constraint.htm)


		 Свойство Constraint
		 возвращает исходное ограничение, заданной в настройках пользовательской
		 задачи оптимизации.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [ExecuteH](IMsUORuntimeConstraint.ExecuteH.htm)


		 Метод ExecuteH вычисляет
		 значение верхнего ограничения на текущую точку расчета.


		 ![](../../Sub_Image.gif)
		 [ExecuteL](IMsUORuntimeConstraint.ExecuteL.htm)


		 Метод ExecuteH вычисляет
		 значение нижнего ограничения на текущую точку расчета.


		 ![](../../Sub_Image.gif)
		 [ExecuteM](IMsUORuntimeConstraint.ExecuteM.htm)


		 Метод ExecuteM вычисляет
		 значение ограничения на текущую точку расчета.


		 ![](../../Sub_Image.gif)
		 [GenerateStringH](IMsUORuntimeConstraint.GenerateStringH.htm)


		 Метод GenerateStringH
		 генерирует выражение верхнего ограничения, зависящее от управляющих
		 переменных.


		 ![](../../Sub_Image.gif)
		 [GenerateStringL](IMsUORuntimeConstraint.GenerateStringL.htm)


		 Метод GenerateStringL
		 генерирует выражение нижнего ограничения, зависящее от управляющих
		 переменных.


		 ![](../../Sub_Image.gif)
		 [GenerateStringM](IMsUORuntimeConstraint.GenerateStringM.htm)


		 Метод GenerateStringM
		 генерирует выражение ограничения, зависящее от управляющих переменных.


См. также:


[Интерфейсы сборки Ms](../KeMs_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
