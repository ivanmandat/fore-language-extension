# CubeDataType

CubeDataType
-


# CubeDataType


## Описание


Перечисление CubeDataType используется
 для определения способа получения данных.


Используется следующими свойствами и методами:


	- [IPivotTable.DataType](KePivot.chm::/Interface/IPivotTable/IPivotTable.DataType.htm);


	- [ICubeExecuteDataTypes.AddCoord](../Interface/ICubeExecuteDataTypes/ICubeExecuteDataTypes.AddCoord.htm);


	- [ICubeExecuteDataTypes.AddSelectionSet](../Interface/ICubeExecuteDataTypes/ICubeExecuteDataTypes.AddSelectionSet.htm);


	- [ICubeExecuteDataTypes.DataType](../Interface/ICubeExecuteDataTypes/ICubeExecuteDataTypes.DataType.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 Default_. Данные из
		 источника.


		 1
		 Calculated. Данные,
		 полученные расчётным путём.


		 2
		 CalculatedEdited. Данные,
		 полученные расчётным путём, которые могут быть изменены и сохранены
		 в соответствии с [заданной
		 формулой](../../uinavobj/cube/createcube/master_standart/uimd_cube_createcube_master_standart_5.htm#calculated_facts). Для использования значения убедитесь, что установлен
		 флажок «[Разрешить
		 изменять данные](uinavobj.chm::/cube/createcube/master_standart/uimd_cube_createcube_master_standart_5.htm#calculated_facts)» и заданы дополнительные
		 параметры «Факт» и «Формула».


		 3
		 CalculatedUnitsMismatch.
		 Данные, полученные расчётным путём. Расчёт производился по показателям,
		 которые имеют различные единицы измерения.


См. также:


[Перечисления
 сборки Cubes](KeCubes_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
