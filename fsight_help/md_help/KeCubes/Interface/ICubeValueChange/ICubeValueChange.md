# ICubeValueChange

ICubeValueChange
-


# ICubeValueChange


Сборка: Cubes;


## Описание


Интерфейс ICubeValueChange содержит
 свойства для выполнения пересчёта значений по вычисляемым фактам куба.


## Комментарии


Для работы с вычисляемыми фактами выполните следующее:


	- Создайте экземпляр класса [CubeValueChangeCallback](../../Class/CubeValueChangeCallback/CubeValueChangeCallback.htm),
	 полученный объект приведите к интерфейсу ICubeValueChange.


	- В свойстве [ICubeValueChange.Executor](ICubeValueChange.Executor.htm)
	 задайте объект, используемый для расчёта куба.


	- В свойстве [ICubeValueChange.Matrix](ICubeValueChange.Matrix.htm)
	 получите матрицу с данными.


Если в полученной матрице менять значения, то будет производиться автоматический
 пересчёт значений, которые соответствуют вычисляемым фактам.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Executor](ICubeValueChange.Executor.htm)


		 Свойство Executor задаёт
		 объект, используемый для расчёта результирующей матрицы куба.


		 ![](../../Property_Image.gif)
		 [Matrix](ICubeValueChange.Matrix.htm)


		 Свойство Matrix возвращает
		 матрицу, в которой выполняется изменение данных и пересчёт вычисляемых
		 фактов куба.


См. также:


[Интерфейсы
 сборки Cubes](../KeCubes_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
