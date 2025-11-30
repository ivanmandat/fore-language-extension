# CubeCallback

CubeCallback
-


# CubeCallback


Сборка: Cubes;


## Описание


Класс CubeCallback реализует
 события, используемые для обработки процесса сохранения данных в куб.


## Комментарии


Свойства и методы класса должны быть переопределены в пользовательском
 классе. Объект, используемый для обработки событий, задаётся в одном из
 следующих свойств:


	- [ICubeInstanceStorage.Callback](../../Interface/ICubeInstanceStorage/ICubeInstanceStorage.Callback.htm);


	- [ICubeInstanceStorage.SaveMatrixCallback](../../Interface/ICubeInstanceStorage/ICubeInstanceStorage.SaveMatrixCallback.htm);


	- [ICubeInstanceDestinationExecutor.Callback](../../Interface/ICubeInstanceDestinationExecutor/ICubeInstanceDestinationExecutor.Callback.htm).


Также с помощью метода [IStandardCube.SetDefaultCallback](../../Interface/IStandardCube/IStandardCube.SetDefaultCallback.htm)
 для стандартного куба можно определить модуль и класс, которые будут использоваться
 для обработки событий при работе с кубом.


## Свойства объекта класса, унаследованные от [ICubeCallback](../../Interface/ICubeCallback/ICubeCallback.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Argument](../../Interface/ICubeCallback/ICubeCallback.Argument.htm)
		 Свойство Argument возвращает
		 аргумент, содержащий информацию об ошибке, произошедшей при сохранении
		 данных.


## Методы объекта класса, унаследованные от [ICubeCallback](../../Interface/ICubeCallback/ICubeCallback.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [OnCallback](../../Interface/ICubeCallback/ICubeCallback.OnCallback.htm)
		 Метод OnCallback реализует
		 событие, происходящее при возникновении исключительных ситуаций
		 во время работы с данными куба.


## Методы объекта класса, унаследованные от [ICubeSaveMatrixCallback](../../Interface/ICubeSaveMatrixCallback/ICubeSaveMatrixCallback.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [OnAfterSave](../../Interface/ICubeSaveMatrixCallback/ICubeSaveMatrixCallback.OnAfterSave.htm)


		 Метод OnAfterSave реализует
		 событие, наступающее после сохранения данных в куб.


		 ![](../../Sub_Image.gif)
		 [OnBeforeSave](../../Interface/ICubeSaveMatrixCallback/ICubeSaveMatrixCallback.OnBeforeSave.htm)


		 Метод OnBeforeSave
		 реализует событие, наступающее перед сохранением данных в куб.


См. также:


[Классы
 сборки Cubes](../KeCubes_Class.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
