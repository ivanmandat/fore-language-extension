# FontDialog: Класс

FontDialog: Класс
-


# FontDialog


## Описание


Класс FontDialog реализует компонент
 среды разработки [FontDialog](UiDevEnv.chm::/02_Components_constructor_forms/01_Standart_Components/FontDialog.htm),
 предоставляющий стандартный диалог выбора шрифта.


## Комментарии


Используется только в настольном приложении.


## Свойства, унаследованные от [IFontDialog](../../Interface/IFontDialog/IFontDialog.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Device](../../Interface/IFontDialog/IFontDialog.Device.htm)


		 Свойство Device определяет,
		 какие шрифты будут входить в список доступных шрифтов при инициализации
		 диалога выбора шрифта.


		 ![](../../Property_Image.gif)
		 [Font](../../Interface/IFontDialog/IFontDialog.Font.htm)


		 Свойство Font определяет
		 шрифт, выбранный в диалоге.


		 ![](../../Property_Image.gif)
		 [MaxFontSize](../../Interface/IFontDialog/IFontDialog.MaxFontSize.htm)


		 Свойство MaxFontSize
		 определяет максимальный размер шрифта, который можно будет установить
		 для выбранного в диалоге шрифта.


		 ![](../../Property_Image.gif)
		 [MinFontSize](../../Interface/IFontDialog/IFontDialog.MinFontSize.htm)


		 Свойство MinFontSize
		 определяет минимальный размер шрифта, который можно будет установить
		 для выбранного в диалоге шрифта.


		 ![](../../Property_Image.gif)
		 [Options](../../Interface/IFontDialog/IFontDialog.Options.htm)


		 Свойство Options определяет
		 дополнительные параметры диалога.


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


## Методы, унаследованные от [IFontDialog](../../Interface/IFontDialog/IFontDialog.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Execute](../../Interface/IFontDialog/IFontDialog.Execute.htm)


		 Метод Execute осуществляет
		 инициализацию диалога и возвращает результат выбора пользователя.


## События


		 Имя события
		 Краткое описание


		 ![](../../Event_Image.gif)
		 [OnApply](FontDialog.OnApply.htm)
		 Событие OnApply наступает,
		 когда пользователь нажимает кнопку "Применить" диалога
		 выбора шрифта.


См. также:


[Классы сборки Forms](../ModForms_Classes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
