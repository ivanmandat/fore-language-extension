# ICubeExecuteDataTypes.DataType

ICubeExecuteDataTypes.DataType
-


# ICubeExecuteDataTypes.DataType


## Синтаксис


		DataType(Coord: [IMatrixCoord](KeMatrix.chm::/Interface/IMatrixCoord/IMatrixCoord.htm)):
		 [CubeDataType](../../Enums/CubeDataType.htm);


## Параметры


Coord. Координата ячейки с
 данными.


## Описание


Свойство DataType возвращает
 способ формирования данных в ячейке с указанной координатой.


## Комментарии


Для ячеек, в которых получены данные из источника, свойство вернёт значение
 [CubeDataType.Default](../../Enums/CubeDataType.htm). Для расчётных
 ячеек, например, ячеек с агрегированными данными, свойство вернёт значение
 [CubeDataType.Calculated](../../Enums/CubeDataType.htm).


Ячейки, которые отмечены как расчётные, могут быть защищены от редактирования.
 Также данный признак может быть использован по своему усмотрению в прикладном
 коде. С помощью методов [ICubeExecuteDataTypes.AddCoord](ICubeExecuteDataTypes.AddCoord.htm)
 и [ICubeExecuteDataTypes.AddSelectionSet](ICubeExecuteDataTypes.AddSelectionSet.htm)
 можно сформировать собственный список ячеек с необходимым способом формирования
 данных.


## Пример


Пример использования приведён в описании свойства [ICubeExecuteSetup.UseDataTypes](../ICubeExecuteSetup/ICubeExecuteSetup.UseDataTypes.htm).


См. также:


[ICubeExecuteDataTypes](ICubeExecuteDataTypes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
