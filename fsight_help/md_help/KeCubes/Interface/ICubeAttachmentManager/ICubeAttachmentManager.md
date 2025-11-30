# ICubeAttachmentManager

ICubeAttachmentManager
-


# ICubeAttachmentManager


Сборка: Cubes;


## Описание


Интерфейс ICubeAttachmentManager
 предназначен для управления работой менеджера вложений стандартного куба.


## Иерархия наследования


ICubeAttachmentManager


## Комментарии


Работа с вложениями куба возможна после того, как произведён [расчёт](../ICubeInstanceDestinationExecutor/ICubeInstanceDestinationExecutor.PerformExecute.htm)
 [результирующей
 матрицы](../ICubeInstanceDestinationExecutor/ICubeInstanceDestinationExecutor.Matrix.htm) куба с поддержкой [работы
 с вложениями](../ICubeInstanceDestinationExecutor/ICubeInstanceDestinationExecutor.IncludeAttachments.htm). Для создания менеджера вложений используйте метод [ICubeExecuteResult.CreateAttachmentManager](../ICubeExecuteResult/ICubeExecuteResult.CreateAttachmentManager.htm).


Для чтения списка вложений используйте метод [ReadAttachments](ICubeAttachmentManager.ReadAttachments.htm),
 для редактирования вложений - [EditAttachments](ICubeAttachmentManager.EditAttachments.htm).


Для применения изменений, внесённых в список вложений, в результирующей
 матрице куба вызовите метод [Post](ICubeAttachmentManager.Post.htm).
 Для сохранения изменений в куб [создайте](../ICubeInstanceDestination/ICubeInstanceDestination.CreateStorage.htm)
 объект для сохранения в режиме [CubeInstanceStorageOptions.Attachments](../../Enums/CubeInstanceStorageOptions.htm)
 и [вызовите
 один из методов](../ICubeInstanceStorage/ICubeInstanceStorage.htm) Save* для результирующей матрицы.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [EditAttachments](ICubeAttachmentManager.EditAttachments.htm)


		 Метод EditAttachments
		 открывает список вложений на редактирование.


		 ![](../../Sub_Image.gif)
		 [Post](ICubeAttachmentManager.Post.htm)


		 Метод Post применяет
		 все изменения вложений к результирующей матрице куба, для которой
		 был получен итератор.


		 ![](../../Sub_Image.gif)
		 [ReadAttachments](ICubeAttachmentManager.ReadAttachments.htm)


		 Метод ReadAttachments
		 возвращает коллекцию вложений, сохранённых в кубе.


		 ![](../../Sub_Image.gif)
		 [SupportWriteAttachments](ICubeAttachmentManager.SupportWriteAttachments.htm)


		 Метод SupportWriteAttachments
		 проверяет, может ли быть изменён список вложений в текущей позиции
		 итератора.


		 ![](../../Sub_Image.gif)
		 [SupportWriteAttachmentsByCoord](ICubeAttachmentManager.SupportWriteAttachmentsByCoord.htm)


		 Метод SupportWriteAttachmentsByCoord
		 проверяет, может ли быть изменён список вложений по указанной
		 координате матрицы с вложениями.


См. также:


[Интерфейсы
 сборки Cubes](../KeCubes_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
