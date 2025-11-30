# IRibbonContext

IRibbonContext
-


# IRibbonContext


Сборка: Forms;


## Описание


Интерфейс IRibbonContext содержит
 свойства для работы с контекстной вкладкой.


## Иерархия наследования


           [IComponent](../IComponent/IComponent.htm)


           IRibbonContext


## Комментарии


Контекстная вкладка отображается на ленте при наступлении определенных
 событий, например при выделении в приложении какого-либо объекта. По умолчанию
 контекстная вкладка скрыта. Для управления видимостью контекстной вкладки
 используйте свойство [Visible](IRibbonContext.Visible.htm).
 Любая контекстная вкладка строится на базе обычных вкладок. Для получения
 коллекции вкладок, которые в себя включает текущая контекстная вкладка,
 используйте свойство [Categories](IRibbonContext.Categories.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Categories](IRibbonContext.Categories.htm)


		 Свойство Categories
		 возвращает коллекцию дочерних вкладок, формирующих содержимое
		 контекстной вкладки.


		 ![](../../Property_Image.gif)
		 [Id](IRibbonContext.Id.htm)


		 Свойство Id возвращает
		 идентификатор контекстной вкладки.


		 ![](../../Property_Image.gif)
		 [Text](IRibbonContext.Text.htm)


		 Свойство Text определяет
		 текст заголовка контекстной вкладки.


		 ![](../../Property_Image.gif)
		 [Visible](IRibbonContext.Visible.htm)


		 Свойство Visible определяет
		 признак отображения контекстной вкладки.


## Свойства, унаследованные от [IComponent](../IComponent/IComponent.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ComponentCount](../IComponent/IComponent.ComponentCount.htm)
		 Свойство ComponentCount
		 возвращает количество дочерних компонентов, расположенных на родительском
		 компоненте.


		 ![](../../Property_Image.gif)
		 [Components](../IComponent/IComponent.Components.htm)
		 Свойство Components
		 возвращает дочерний компонент, индекс которого передается посредством
		 входного параметра.


		 ![](../../Property_Image.gif)
		 [Data](../IComponent/IComponent.Data.htm)
		 Свойство Data предназначено
		 для хранения любых пользовательских данных.


		 ![](../../Property_Image.gif)
		 [Name](../IComponent/IComponent.Name.htm)
		 Свойство Name определяет
		 наименование компонента.


		 ![](../../Property_Image.gif)
		 [Tag](../IComponent/IComponent.Tag.htm)
		 Свойство Tag не используется
		 компилятором. Пользователь может изменить значение данного свойства
		 и использовать его по своему усмотрению.


См. также:


[Интерфейсы
 сборки Forms](../ModForms_Interfaces.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
