# FileSaveDialog: Класс

FileSaveDialog: Класс
-


# FileSaveDialog


## Описание


Класс FileSaveDialog реализует
 компонент среды разработки [FileSaveDialog](UiDevEnv.chm::/02_Components_constructor_forms/01_Standart_Components/FileSaveDialog.htm),
 предоставляющий стандартный диалог сохранения файла.


## Комментарии


Используется только в настольном приложении.


## Свойства, унаследованные от [IFileSaveDialog](../../Interface/IFileSaveDialog/IFileSaveDialog.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [CreatePrompt](../../Interface/IFileSaveDialog/IFileSaveDialog.CreatePrompt.htm)


		 Свойство CreatePrompt
		 определяет, будет ли выводиться дополнительный предупреждающий
		 диалог при попытке сохранения в несуществующий файл.


		 ![](../../Property_Image.gif)
		 [OverwritePrompt](../../Interface/IFileSaveDialog/IFileSaveDialog.OverwritePrompt.htm)


		 Свойство OverwritePrompt
		 определяет, будет ли выводиться дополнительный предупреждающий
		 диалог при попытке сохранения в существующий файл.


## Свойства, унаследованные от [IFileDialog](../../Interface/IFileDialog/IFileDialog.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [CheckFileExists](../../Interface/IFileDialog/IFileDialog.CheckFileExists.htm)
		 Свойство CheckFileExists
		 определяет реакцию системы при выборе пользователем несуществующего
		 файла.


		 ![](../../Property_Image.gif)
		 [CheckPathExists](../../Interface/IFileDialog/IFileDialog.CheckPathExists.htm)
		 Свойство CheckPathExists
		 определяет реакцию системы при попытке пользователя выбрать файл
		 в несуществующем каталоге.


		 ![](../../Property_Image.gif)
		 [DefaultExt](../../Interface/IFileDialog/IFileDialog.DefaultExt.htm)
		 Свойство DefaultExt
		 определяет расширение файла, которое будет использовано по умолчанию
		 данным компонентом диалога.


		 ![](../../Property_Image.gif)
		 [DereferenceLinks](../../Interface/IFileDialog/IFileDialog.DereferenceLinks.htm)
		 Свойство DereferenceLinks
		 определяет значение, которое возвращает диалог при выборе ярлыка.


		 ![](../../Property_Image.gif)
		 [FileName](../../Interface/IFileDialog/IFileDialog.FileName.htm)
		 Свойство FileName определяет
		 имя и путь к каталогу последнего выбранного файла.


		 ![](../../Property_Image.gif)
		 [FileNames](../../Interface/IFileDialog/IFileDialog.FileNames.htm)
		 Свойство FileNames
		 возвращает коллекцию наименований и путей к файлам, при выборе
		 более одного файла.


		 ![](../../Property_Image.gif)
		 [Filter](../../Interface/IFileDialog/IFileDialog.Filter.htm)
		 Свойство Filter определяет
		 текст фильтра для ограничения списка доступных файлов.


		 ![](../../Property_Image.gif)
		 [FilterIndex](../../Interface/IFileDialog/IFileDialog.FilterIndex.htm)
		 Свойство FilterIndex
		 определяет какой из добавленных фильтров будет устанавливаться
		 по умолчанию при открытии диалога.


		 ![](../../Property_Image.gif)
		 [InitialDirectory](../../Interface/IFileDialog/IFileDialog.InitialDirectory.htm)
		 Свойство InitialDirectory
		 определяет директорию, которая будет открываться по умолчанию
		 при запуске диалога.


		 ![](../../Property_Image.gif)
		 [ShowHelp](../../Interface/IFileDialog/IFileDialog.ShowHelp.htm)
		 Свойство ShowHelp определяет,
		 будет ли отображаться кнопка «Справка» в окне диалога.


		 ![](../../Property_Image.gif)
		 [Title](../../Interface/IFileDialog/IFileDialog.Title.htm)
		 Свойство Title определяет
		 заголовок окна.


		 ![](../../Property_Image.gif)
		 [ValidateNames](../../Interface/IFileDialog/IFileDialog.ValidateNames.htm)
		 Свойство ValidateNames
		 определяет признак проверки корректности имени файла.


## Свойства, унаследованные от [IComponent](../../Interface/IComponent/IComponent.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ComponentCount](../../Interface/IComponent/IComponent.ComponentCount.htm)
		 Свойство ComponentCount
		 возвращает количество дочерних компонентов, расположенных на родительском
		 компоненте.


		 ![](../../Property_Image.gif)
		 [Components](../../Interface/IComponent/IComponent.Components.htm)
		 Свойство Components
		 возвращает дочерний компонент, индекс которого передается посредством
		 входного параметра.


		 ![](../../Property_Image.gif)
		 [Data](../../Interface/IComponent/IComponent.Data.htm)
		 Свойство Data предназначено
		 для хранения любых пользовательских данных.


		 ![](../../Property_Image.gif)
		 [Name](../../Interface/IComponent/IComponent.Name.htm)
		 Свойство Name определяет
		 наименование компонента.


		 ![](../../Property_Image.gif)
		 [Tag](../../Interface/IComponent/IComponent.Tag.htm)
		 Свойство Tag не используется
		 компилятором. Пользователь может изменить значение данного свойства
		 и использовать его по своему усмотрению.


## Методы, унаследованные от [IFileDialog](../../Interface/IFileDialog/IFileDialog.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Execute](../../Interface/IFileDialog/IFileDialog.Execute.htm)
		 Метод Execute осуществляет
		 инициализацию диалога и возвращает результат выбора пользователя.


См. также:


[Классы сборки Forms](../ModForms_Classes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
