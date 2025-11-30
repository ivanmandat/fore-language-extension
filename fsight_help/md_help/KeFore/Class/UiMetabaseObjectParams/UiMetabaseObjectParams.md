# UiMetabaseObjectParams

UiMetabaseObjectParams
-


# UiMetabaseObjectParams


## Описание


Класс UiMetabaseObjectParams
 реализует компонент среды разработки [UiMetabaseObjectParams](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/UiMetabaseObjectParams.htm),
 используемый для управления значениями параметров объектов репозитория,
 доступ к которым предоставляется соответствующими компонентами ([UiDimension](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/UiDimension.htm),
 [UiErAnalyzer](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/UiErAnalyzer.htm),
 [UiModel](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/UiModel.htm),
 [UiReport](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/UiReport.htm),
 [UiWorkspaceObject](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/UiWorkspaceObject.htm)).


## Свойства объекта класса, унаследованные от [IUiMetabaseObjectParams](../../Interface/IUiMetabaseObjectParams/IUiMetabaseObjectParams.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [IsDefault](../../Interface/IUiMetabaseObjectParams/IUiMetabaseObjectParams.IsDefault.htm)
		 Свойство IsDefault
		 определяет, будут ли при открытии объекта использоваться значения
		 параметров, установленные по умолчанию.


		 ![](../../Property_Image.gif)
		 [ParamControl](../../Interface/IUiMetabaseObjectParams/IUiMetabaseObjectParams.ParamControl.htm)
		 Свойство ParamControl
		 определяет связь параметров с элементами управления.


		 ![](../../Property_Image.gif)
		 [UiObject](../../Interface/IUiMetabaseObjectParams/IUiMetabaseObjectParams.UiObject.htm)
		 Свойство UiObject определяет
		 компонент, связанный с объектом репозитория, параметрами которого
		 необходимо управлять.


## Свойства объекта класса, унаследованные от [IComponent](ModForms.chm::/Interface/IComponent/IComponent.htm)


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


## Методы объекта класса, унаследованные от [IUiMetabaseObjectParams](../../Interface/IUiMetabaseObjectParams/IUiMetabaseObjectParams.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CollectValues](../../Interface/IUiMetabaseObjectParams/IUiMetabaseObjectParams.CollectValues.htm)
		 Метод CollectValues
		 осуществляет указанное действие со значениями параметров.


		 ![](../../Sub_Image.gif)
		 [RemoveParamControl](../../Interface/IUiMetabaseObjectParams/IUiMetabaseObjectParams.RemoveParamControl.htm)
		 Метод RemoveParamControl
		 осуществляет удаление привязки указанного элемента управления
		 к параметру объекта.


		 ![](../../Sub_Image.gif)
		 [ResetParamControls](../../Interface/IUiMetabaseObjectParams/IUiMetabaseObjectParams.ResetParamControls.htm)
		 Метод ResetParamControls
		 осуществляет сброс привязок элементов управления по всем параметрам.


См. также:


[Классы сборки Fore](../KeFore_Class.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
