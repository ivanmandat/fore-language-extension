# ICubeExecuteFilterFunctionTop

ICubeExecuteFilterFunctionTop
-


# ICubeExecuteFilterFunctionTop


Сборка: Cubes;


## Описание


Интерфейс ICubeExecuteFilterFunctionTop
 содержит свойства для указания специфических настроек функции, осуществляющей
 фильтрацию данных за счет отбора наибольших/наименьших значений.


## Иерархия наследования


ICubeExecuteFilterFunctionTop


## Комментарии


Для получения настроек приведите объект, описываемый интерфейсом [ICubeExecuteFilterFunction](../ICubeExecuteFilterFunction/ICubeExecuteFilterFunction.htm),
 к интерфейсу ICubeExecuteFilterFunctionTop.
 Свойство [ICubeExecuteFilterFunction.Predefined](../ICubeExecuteFilterFunction/ICubeExecuteFilterFunction.Predefined.htm)
 для объекта должно возвращать значение [Top](../../Enums/CubeExecuteFilterFunctionPredefined.htm).


При использовании функций, осуществляющих отбор наибольших/наименьших
 значений, формируется блок для MDX-запроса следующего формата:


[TOPCOUNT](ICubeExecuteFilterFunctionTop.Function_.htm) ([Set_Expression](ICubeExecuteFilterFunctionTop.Set_.htm),
 [Count](ICubeExecuteFilterFunctionTop.Argument.htm) [, [Numeric_Expression](ICubeExecuteFilterFunctionTop.Value.htm)
 ] )


[TOPPERCENT/BOTTOMPERCENT](ICubeExecuteFilterFunctionTop.Function_.htm)
 ([Set_Expression](ICubeExecuteFilterFunctionTop.Set_.htm),
 [Percentage](ICubeExecuteFilterFunctionTop.Argument.htm), [Numeric_Expression](ICubeExecuteFilterFunctionTop.Value.htm))


[TOPSUM/BOTTOMSUM](ICubeExecuteFilterFunctionTop.Function_.htm)
 ([Set_Expression](ICubeExecuteFilterFunctionTop.Set_.htm),
 [Value](ICubeExecuteFilterFunctionTop.Argument.htm), [Numeric_Expression](ICubeExecuteFilterFunctionTop.Value.htm))


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Argument](ICubeExecuteFilterFunctionTop.Argument.htm)


		 Свойство Argument определяет
		 значение, с которым будет производиться сравнение данных при фильтрации.


		 ![](../../Property_Image.gif)
		 [Function_](ICubeExecuteFilterFunctionTop.Function_.htm)


		 Свойство Function_
		 определяет функцию, осуществляющую фильтрацию путем отбора наибольших/наименьших
		 значений.


		 ![](../../Property_Image.gif)
		 [Set_](ICubeExecuteFilterFunctionTop.Set_.htm)


		 Свойство Set_ определяет
		 отметку элементов, по значениям которых будет осуществляться фильтрация.


		 ![](../../Property_Image.gif)
		 [Value](ICubeExecuteFilterFunctionTop.Value.htm)


		 Свойство Value определяет
		 выражение, которое обычно представляет MDX-выражение, возвращающее
		 измерение.


См. также:


[Интерфейсы
 сборки Cubes](../KeCubes_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
