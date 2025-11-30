# IBasicMatrixAggregator

IBasicMatrixAggregator
-


# IBasicMatrixAggregator


Сборка: Matrix;


## Описание


Интерфейс IBasicMatrixAggregator
 содержит свойства и методы, определяющие параметры основного механизма
 агрегации.


## Иерархия наследования


           [IMatrixAggregatorModel](../IMatrixAggregatorModel/IMatrixAggregatorModel.htm)


           IBasicMatrixAggregator


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [DefaultLevelAggregation](IBasicMatrixAggregator.DefaultLevelAggregation.htm)
		 Свойство DefaultLevelAggregation
		 определяет параметры агрегации для уровней измерения по умолчанию.


		 ![](../../Property_Image.gif)
		 [IgnoreNulls](IBasicMatrixAggregator.IgnoreNulls.htm)
		 Свойство IgnoreNulls
		 определяет способ обработки пустых значений при агрегации данных.


		 ![](../../Property_Image.gif)
		 [LevelAggregation](IBasicMatrixAggregator.LevelAggregation.htm)
		 Свойство LevelAggregation
		 возвращает параметры агрегации для заданного уровня измерения.


		 ![](../../Property_Image.gif)
		 [Operation](IBasicMatrixAggregator.Operation.htm)
		 Свойство Operation
		 возвращает метод агрегации.


		 ![](../../Property_Image.gif)
		 [OperationCount](IBasicMatrixAggregator.OperationCount.htm)
		 Свойство OperationCount
		 возвращает количество доступных методов агрегации.


		 ![](../../Property_Image.gif)
		 [OperationName](IBasicMatrixAggregator.OperationName.htm)
		 Свойство OperationName
		 возвращает наименование метода агрегации.


		 ![](../../Property_Image.gif)
		 [PutResultsToSourceMatrix](IBasicMatrixAggregator.PutResultsToSourceMatrix.htm)
		 Свойство PutResultsToSourceMatrix
		 определяет способ сохранения результата агрегации данных.


		 ![](../../Property_Image.gif)
		 [UseSelection](IBasicMatrixAggregator.UseSelection.htm)
		 Свойство UseSelection
		 определяет, будут ли при агрегации использоваться данные отмеченных
		 элементов.


## Свойства, унаследованные от [IMatrixAggregatorModel](../IMatrixAggregatorModel/IMatrixAggregatorModel.htm)


		  Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Dimension](../IMatrixAggregatorModel/IMatrixAggregatorModel.Dimension.htm)
		 Свойство Dimension
		 определяет измерение, для которого необходимо настроить параметры
		 агрегации.


		 ![](../../Property_Image.gif)
		 [HierarchyId](../IMatrixAggregatorModel/IMatrixAggregatorModel.HierarchyId.htm)
		 Свойство HierarchyId
		 определяет идентификатор агрегации по уровням [альтернативной
		 иерархии](UiNavObj.chm::/Cube/CreateCube/Master_Standart/UiMd_Cube_CreateCube_Master_Standart_7.htm#alt_agr) в коллекции альтернативных иерархий
		 справочника.


		 ![](../../Property_Image.gif)
		 [HierarchyKey](../IMatrixAggregatorModel/IMatrixAggregatorModel.HierarchyKey.htm)
		 Свойство HierarchyKey
		 определяет ключ агрегации по уровням [альтернативной
		 иерархии](UiNavObj.chm::/Cube/CreateCube/Master_Standart/UiMd_Cube_CreateCube_Master_Standart_7.htm#alt_agr) в коллекции альтернативных иерархий
		 справочника.


		 ![](../../Property_Image.gif)
		 [Id](../IMatrixAggregatorModel/IMatrixAggregatorModel.Id.htm)
		 Свойство Id возвращает
		 идентификатор механизма агрегации данных.


		 ![](../../Property_Image.gif)
		 [Name](../IMatrixAggregatorModel/IMatrixAggregatorModel.Name.htm)
		 Свойство Name возвращает
		 наименование механизма агрегации данных.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [ExecuteWithAggregationInfo](IBasicMatrixAggregator.ExecuteWithAggregationInfo.htm)
		 Метод ExecuteWithAggregationInfo
		 осуществляет расчёт агрегированных данных и позволяет получить
		 информацию о результате выполнения агрегации.


## Методы, унаследованные от [IMatrixAggregatorModel](../IMatrixAggregatorModel/IMatrixAggregatorModel.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Execute](../IMatrixAggregatorModel/IMatrixAggregatorModel.Execute.htm)
		 Метод Execute осуществляет
		 расчёт агрегированных данных.


См. также:


[Интерфейсы сборки Matrix](../KeMatrix_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
