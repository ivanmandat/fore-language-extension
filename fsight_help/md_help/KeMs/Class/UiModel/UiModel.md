# UiModel

UiModel
-


# UiModel


## Описание


Класс UiModel реализует компонент
 среды разработки [UiModel](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/UiModel.htm),
 являющийся источником данных для компонента [ModelBox](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/ModelBox.htm).


## Комментарии


Компонент [UiModel](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/UiModel.htm)
 всегда работает в режиме UiMetabaseObjectOperationMode.Edit.


## Свойства, унаследованные от [IUiModel](../../Interface/IUiModel/IUiModel.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Model](../../Interface/IUiModel/IUiModel.Model.htm)

		 Свойство Model определяет
		 модель контейнера моделирования, доступ к которой необходимо получить.


## Свойства, унаследованные от [IUiMetabaseObject](KeFore.chm::/Interface/IUiMetabaseObject/IUiMetabaseObject.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Active](KeFore.chm::/Interface/IUiMetabaseObject/IUiMetabaseObject.Active.htm)


		 Свойство Active определяет,
		 будет ли активным компонент.


		 ![](../../Property_Image.gif)
		 [Instance](KeFore.chm::/Interface/IUiMetabaseObject/IUiMetabaseObject.Instance.htm)


		 Свойство Instance определяет
		 данные объекта репозитория, загруженного в компонент.


		 ![](../../Property_Image.gif)
		 [Object](KeFore.chm::/Interface/IUiMetabaseObject/IUiMetabaseObject.Object.htm)


		 Свойство Object определяет
		 объект репозитория, к которому необходимо получить доступ.


		 ![](../../Property_Image.gif)
		 [ObjectClassId](KeFore.chm::/Interface/IUiMetabaseObject/IUiMetabaseObject.ObjectClassId.htm)


		 Свойство ObjectClassId
		 возвращает числовой идентификатор, соответствующий классу объекта,
		 загруженного в компонент.


		 ![](../../Property_Image.gif)
		 [OperationMode](KeFore.chm::/Interface/IUiMetabaseObject/IUiMetabaseObject.OperationMode.htm)


		 Свойство OperationMode
		 определяет режим подключения объекта.


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
		 возвращает дочерний компонент, индекс которого передается посредством
		 входного параметра.


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
		 Свойство Tag не
		 используется компилятором. Пользователь может изменить значение
		 данного свойства и использовать его по своему усмотрению.


## Методы, унаследованные от [IUiMetabaseObject](KeFore.chm::/Interface/IUiMetabaseObject/IUiMetabaseObject.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [ClearDefault](KeFore.chm::/Interface/IUiMetabaseObject/IUiMetabaseObject.ClearDefault.htm)


		 Метод ClearDefault
		 осуществляет установку значений всех параметров объекта по умолчанию.


См. также:


[Классы сборки Ms](../KeMs_Classes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
