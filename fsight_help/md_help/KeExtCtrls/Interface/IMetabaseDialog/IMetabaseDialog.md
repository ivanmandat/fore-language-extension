# IMetabaseDialog

IMetabaseDialog
-


# IMetabaseDialog


Сборка: ExtCtrls;


## Описание


Интерфейс IMetabaseDialog содержит
 базовые свойства и методы компонентов, реализующих диалоги открытия и
 сохранения объектов репозитория.


## Иерархия наследования


           [IComponent](ModForms.chm::/Interface/IComponent/IComponent.htm)


           IMetabaseDialog


## Комментарии


Данный интерфейс является базовым для следующих интерфейсов:


	- [IMetabaseOpenDialog](../IMetabaseOpenDialog/IMetabaseOpenDialog.htm);


	- [IMetabaseSaveDialog](../IMetabaseSaveDialog/IMetabaseSaveDialog.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [FilterIndex](IMetabaseDialog.FilterIndex.htm)
		 Свойство FilterIndex
		 определяет индекс выбранного фильтра, который используется в диалогах
		 для фильтрации объектов репозитория.


		 ![](../../Property_Image.gif)
		 [Filters](IMetabaseDialog.Filters.htm)
		 Свойство Filters возвращает
		 коллекцию фильтров, используемых в диалоге.


		 ![](../../Property_Image.gif)
		 [FolderFilters](IMetabaseDialog.FolderFilters.htm)
		 Свойство FolderFilters
		 возвращает коллекцию фильтров, используемых для определения объектов-папок
		 в диалоге.


		 ![](../../Property_Image.gif)
		 [InitialFolder](IMetabaseDialog.InitialFolder.htm)
		 Свойство InitialFolder
		 определяет исходный каталог.


		 ![](../../Property_Image.gif)
		 [Object](IMetabaseDialog.Object.htm)
		 Свойство Object возвращает
		 описание выбранного объекта репозитория.


		 ![](../../Property_Image.gif)
		 [Objects](IMetabaseDialog.Objects.htm)
		 Свойство Objects возвращает
		 коллекцию выбранных объектов репозитория.


		 ![](../../Property_Image.gif)
		 [Root](IMetabaseDialog.Root.htm)
		 Свойство Root определяет
		 корневой каталог для диалога.


		 ![](../../Property_Image.gif)
		 [Title](IMetabaseDialog.Title.htm)
		 Свойство Title определяет
		 заголовок диалога.


## Свойства, унаследованные от [IComponent](ModForms.chm::/Interface/IComponent/IComponent.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ComponentCount](ModForms.chm::/Interface/IComponent/IComponent.ComponentCount.htm)
		 Свойство ComponentCount
		 возвращает количество дочерних компонентов, расположенных на родительском
		 компоненте.


		 ![](../../Property_Image.gif)
		 [Components](ModForms.chm::/Interface/IComponent/IComponent.Components.htm)
		 Свойство Components
		 возвращает дочерний компонент, индекс которого передается
		 посредством входного параметра.


		 ![](../../Property_Image.gif)
		 [Data](ModForms.chm::/Interface/IComponent/IComponent.Data.htm)
		 Свойство Data предназначено
		 для хранения любых пользовательских данных.


		 ![](../../Property_Image.gif)
		 [Name](ModForms.chm::/Interface/IComponent/IComponent.Name.htm)
		 Свойство Name определяет
		 наименование компонента.


		 ![](../../Property_Image.gif)
		 [Tag](ModForms.chm::/Interface/IComponent/IComponent.Tag.htm)
		 Свойство Tag не используется
		 компилятором. Пользователь может изменить значение данного свойства
		 и использовать его по своему усмотрению.


## Методы


		  Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Execute](IMetabaseDialog.Execute.htm)
		 Метод Execute выполняет
		 диалог.


См. также:


[Интерфейсы сборки ExtCtrls](../KeExtCtrls_Interfaces.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
