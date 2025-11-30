# ICubeInstanceStorage

ICubeInstanceStorage
-


# ICubeInstanceStorage


Сборка: Cubes;


## Описание


Интерфейс ICubeInstanceStorage
 содержит свойства и методы для сохранения данных в куб и контроля этого
 процесса.


## Иерархия наследования


ICubeInstanceStorage


## Комментарии


Для получения объекта, который используется для сохранения данных в
 куб, используйте метод [ICubeInstanceDestination.CreateStorage](../ICubeInstanceDestination/ICubeInstanceDestination.CreateStorage.htm).


## Свойство


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AttachmentManager](ICubeInstanceStorage.AttachmentManager.htm)
		 Свойство AttachmentManager
		 определяет менеджер вложений, изменения которого необходимо сохранить
		 в куб.


		 ![](../../Property_Image.gif)
		 [Callback](ICubeInstanceStorage.Callback.htm)
		 Свойство Callback определяет
		 объект, осуществляющий обработку ошибок, которые могут возникнуть
		 при сохранении данных в куб.


		 ![](../../Property_Image.gif)
		 [LogKey](ICubeInstanceStorage.LogKey.htm)
		 Свойство LogKey возвращает
		 ключ уникальной записи в протоколе доступа, созданной после сохранения
		 данных.


		 ![](../../Property_Image.gif)
		 [Origin](ICubeInstanceStorage.Origin.htm)


		 Свойство Origin возвращает
		 ключ объекта, инициирующего изменения данных куба.


		 ![](../../Property_Image.gif)
		 [ScenarioKey](ICubeInstanceStorage.ScenarioKey.htm)
		 Свойство ScenarioKey
		 определяет ключ сценарного справочника при сохранении данных
		 в куб.


		 ![](../../Property_Image.gif)
		 [SaveMatrixCallback](ICubeInstanceStorage.SaveMatrixCallback.htm)
		 Свойство SaveMatrixCallback
		 определяет обработчик процесса сохранения матрицы с данными в
		 куб.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CreateMatrix](ICubeInstanceStorage.CreateMatrix.htm)
		 Метод CreateMatrix
		 создаёт пустую матрицу, которая в дальнейшем может быть заполнена
		 данными и сохранена в куб.


		 ![](../../Sub_Image.gif)
		 [SaveMatrix](ICubeInstanceStorage.SaveMatrix.htm)
		 Метод SaveMatrix осуществляет
		 сохранение матрицы с данными в куб.


		 ![](../../Sub_Image.gif)
		 [SaveMatrixEx](ICubeInstanceStorage.SaveMatrixEx.htm)
		 Метод SaveMatrixEx
		 осуществляет сохранение матрицы с данными в куб по нескольким
		 флагам изменённых значений.


		 ![](../../Sub_Image.gif)
		 [SaveMatrixT](ICubeInstanceStorage.SaveMatrixT.htm)
		 Метод SaveMatrixT осуществляет
		 сохранение матрицы с данными в куб с использованием менеджера
		 транзакций.


См. также:


[Интерфейсы сборки Cubes](../KeCubes_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
