# ICubeCallback

ICubeCallback
-


# ICubeCallback


Сборка: Cubes;


## Описание


Интерфейс ICubeCallback содержит
 свойства и методы для обработки ошибок, которые могут возникнуть во время
 сохранения данных в куб.


## Иерархия наследования


ICubeCallback


## Комментарии


Свойства и методы интерфейса должны быть переопределены в пользовательском
 классе. Экземпляр класса для обработки ошибок задаётся в следующих свойствах:


	- [ICubeInstanceDestinationExecutor.Callback](../ICubeInstanceDestinationExecutor/ICubeInstanceDestinationExecutor.Callback.htm);


	- [ICubeInstanceStorage.Callback](../ICubeInstanceStorage/ICubeInstanceStorage.Callback.htm).


Также обработчик событий может быть задан для стандартного куба с помощью
 метода [IStandardCube.SetDefaultCallback](../IStandardCube/IStandardCube.SetDefaultCallback.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Argument](ICubeCallback.Argument.htm)
		 Свойство Argument возвращает
		 аргумент, содержащий информацию об ошибке, произошедшей при сохранении
		 данных.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [OnCallback](ICubeCallback.OnCallback.htm)
		 Метод OnCallback реализует
		 событие, происходящее при возникновении исключительных ситуаций
		 во время работы с данными куба.


См. также:


[Интерфейсы сборки Cubes](../KeCubes_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
