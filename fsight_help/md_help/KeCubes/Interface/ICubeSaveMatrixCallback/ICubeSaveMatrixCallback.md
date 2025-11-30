# ICubeSaveMatrixCallback

ICubeSaveMatrixCallback
-


# ICubeSaveMatrixCallback


Сборка: Cubes;


## Описание


Интерфейс ICubeSaveMatrixCallback
 содержит методы для обработки процесса сохранения данных в куб.


## Иерархия наследования


ICubeSaveMatrixCallback


## Комментарии


Методы интерфейса должны быть переопределены в пользовательском классе.
 Экземпляр класса для обработки процесса сохранения данных задаётся в свойстве
 [ICubeInstanceStorage.SaveMatrixCallback](../ICubeInstanceStorage/ICubeInstanceStorage.SaveMatrixCallback.htm).


Также обработчик событий может быть задан для стандартного куба с помощью
 метода [IStandardCube.SetDefaultCallback](../IStandardCube/IStandardCube.SetDefaultCallback.htm).


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [OnAfterSave](ICubeSaveMatrixCallback.OnAfterSave.htm)


		 Метод OnAfterSave реализует
		 событие, наступающее после сохранения данных в куб.


		 ![](../../Sub_Image.gif)
		 [OnBeforeSave](ICubeSaveMatrixCallback.OnBeforeSave.htm)


		 Метод OnBeforeSave
		 реализует событие, наступающее перед сохранением данных в куб.


См. также:


[Интерфейсы
 сборки Cubes](../KeCubes_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
