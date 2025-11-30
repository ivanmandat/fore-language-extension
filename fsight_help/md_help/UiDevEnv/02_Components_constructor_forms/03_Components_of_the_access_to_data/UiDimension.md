# UiDimension: Компонент

UiDimension: Компонент
-


# UiDimension


## Иерархия наследования


           [IComponent](modforms.chm::/Interface/IComponent/IComponent.htm)


           [IUiMetabaseObject](KeFore.chm::/Interface/IUiMetabaseObject/IUiMetabaseObject.htm)


           [IUiDimension](KeExtCtrls.chm::/Interface/IUiDimension/IUiDimension.htm)


           [UiDimension](KeExtCtrls.chm::/Class/UiDimension/UiDimension.htm)


## Описание


Компонент UiDimension предназначен
 для связи визуальных компонентов доступа к данным ([DimensionTree](DimensionTree.htm)
 и [DimensionCombo](DimensionCombo.htm)) с источником данных
 из репозитория. Источниками данных для компонента UiDimension
 являются справочники.


## Работа с компонентом


После размещения компонента на форме для его использования выполните
 следующие действия:


	- В инспекторе объектов в свойстве [Object](KeFore.chm::/Interface/IUiMetabaseObject/IUiMetabaseObject.Object.htm) укажите
	 справочник/справочник НСИ репозитория. Для этого в редакторе свойства
	 нажмите кнопку ![](../../Select_Button.gif) или в контекстном
	 меню для компонента выберите команду «Объект».
	 В открывшемся диалоге выберите необходимый справочник;


	- Установите свойству [Active](KeFore.chm::/Interface/IUiMetabaseObject/IUiMetabaseObject.Active.htm) значения
	 True.


После этого компонент может быть указан в качестве источника данных
 для визуальных компонентов: [DimensionCombo](DimensionCombo.htm)
 или [DimensionTree](DimensionTree.htm).
 При запуске формы будет отображен справочник.


В коде на Fore, используя свойство
 [DimInstance](KeExtCtrls.chm::/Interface/IUiDimension/IUiDimension.DimInstance.htm),
 можно получить данные справочника, с которым производится работа.


Свойстве [Instance](KeFore.chm::/Interface/IUiMetabaseObject/IUiMetabaseObject.Instance.htm) позволяет
 изменить отображаемый справочник. В качестве значения свойства может быть
 указан экземпляр открытого справочника, описываемого интерфейсом [IDimInstance](KeDims.chm::/interface/IDimInstance/IDimInstance.htm).


Свойство [Selection](KeExtCtrls.chm::/Interface/IUiDimension/IUiDimension.Selection.htm) позволяет
 получить или изменить отметку элементов.


Примечание.
 Компонент UiDimension всегда работает
 в режиме [UiMetabaseObjectOperationMode.Open](KeFore.chm::/Enums/UiMetabaseObjectOperationMode.htm).


## Свойства компонента UiDimension


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Active](KeFore.chm::/Interface/IUiMetabaseObject/IUiMetabaseObject.Active.htm)
		 Свойство Active определяет
		 активность компонента.


		 ![](../../Property_Image.gif)
		 [ComponentCount](ModForms.chm::/Interface/IComponent/IComponent.ComponentCount.htm)
		 Свойство ComponentCount
		 возвращает количество дочерних компонентов.


		 ![](../../Property_Image.gif)
		 [Components](ModForms.chm::/Interface/IComponent/IComponent.Components.htm)
		 Свойство Components
		 возвращает дочерний компонент.


		 ![](../../Property_Image.gif)
		 [Data](ModForms.chm::/Interface/IComponent/IComponent.Data.htm)
		 Свойство Data предназначено
		 для хранения любых пользовательских данных.


		 ![](../../Property_Image.gif)
		 [Dimension](KeExtCtrls.chm::/Interface/IUiDimension/IUiDimension.Dimension.htm)
		 Свойство Dimension
		 определяет справочник, из которого будут браться данные.


		 ![](../../Property_Image.gif)
		 [DimInstance](KeExtCtrls.chm::/Interface/IUiDimension/IUiDimension.DimInstance.htm)
		 Свойство DimInstance
		 возвращает данные справочника, подключенного к компоненту.


		 ![](../../Property_Image.gif)
		 [Instance](KeFore.chm::/Interface/IUiMetabaseObject/IUiMetabaseObject.Instance.htm)
		 Свойство Instance определяет
		 данные объекта репозитория, загруженного в компонент.


		 ![](../../Property_Image.gif)
		 [Name](ModForms.chm::/Interface/IComponent/IComponent.Name.htm)
		 Свойство Name определяет
		 наименование компонента.


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


		 ![](../../Property_Image.gif)
		 [Selection](KeExtCtrls.chm::/Interface/IUiDimension/IUiDimension.Selection.htm)
		 Свойство Selection
		 определяет отметку элементов справочника, являющегося источником
		 данных для компонента.


		 ![](../../Property_Image.gif)
		 [Tag](ModForms.chm::/Interface/IComponent/IComponent.Tag.htm)
		 Свойство Tag не используется
		 компилятором. Пользователь может изменить значение свойства Tag и использовать его по своему
		 усмотрению.


## Методы компонента UiDimension


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [ClearDefault](KeFore.chm::/Interface/IUiMetabaseObject/IUiMetabaseObject.ClearDefault.htm)
		 Метод ClearDefault
		 осуществляет установку значений всех параметров объекта по умолчанию.


См. также:


[Компоненты доступа
 к данным](03_components_of_the_access_to_data.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
