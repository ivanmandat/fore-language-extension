# UiEtlObject: Компонент

UiEtlObject: Компонент
-


# UiEtlObject


## Иерархия наследования


           [IComponent](ModForms.chm::/Interface/IComponent/IComponent.htm)


           [IUiMetabaseObject](KeFore.chm::/Interface/IUiMetabaseObject/IUiMetabaseObject.htm)


           [IUiEtlObject](KeEtl.chm::/Interface/IUiEtlObject/IUiEtlObject.htm)


           [UiEtlObject](KeEtl.chm::/Class/UiEtlObject/UiEtlObject.htm)


## Описание


Компонент UiEtlObject является
 невизуальным, предназначен для получения доступа к задачам ETL репозитория.


## Работа с компонентом


После размещения компонента на форме для его использования выполните
 следующие действия:


	- В инспекторе объектов в свойстве
	 [Object](KeFore.chm::/Interface/IUiMetabaseObject/IUiMetabaseObject.Object.htm)
	 укажите задачу ETL репозитория. Для этого в редакторе свойства нажмите
	 кнопку ![](../../Select_Button.gif) или в контекстном
	 меню для компонента выберите команду «Объект».
	 В открывшемся диалоге выберите необходимую задачу ETL;


	- Установите свойству [Active](KeFore.chm::/Interface/IUiMetabaseObject/IUiMetabaseObject.Active.htm) значения
	 True.


После этого компонент может быть указан в качестве источника данных
 для визуального компонента [EtlBox](EtlBox.htm).


В коде на Fore, используя свойство
 [EtlTask](KeEtl.chm::/Interface/IUiEtlObject/IUiEtlObject.EtlTask.htm), можно получить
 актуальную задачу ETL, описываемую интерфейсом [IEtlTask](KeEtl.chm::/Interface/IEtlTask/IEtlTask.htm).
 Также в качестве значения свойства [EtlTask](KeEtl.chm::/Interface/IUiEtlObject/IUiEtlObject.EtlTask.htm) или [Instance](KeFore.chm::/Interface/IUiMetabaseObject/IUiMetabaseObject.Instance.htm)
 может быть указан открытый экземпляр задачи ETL. При этом работа будет
 осуществляться с указанным экземпляром, а не с той задачей ETL, которая
 задана в свойстве [Object](KeFore.chm::/Interface/IUiMetabaseObject/IUiMetabaseObject.Object.htm).


## Свойства компонента UiEtlObject


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Active](KeFore.chm::/Interface/IUiMetabaseObject/IUiMetabaseObject.Active.htm)
		 Свойство Active
		 определяет активность компонента.


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
		 Свойство Data
		 предназначено для хранения любых пользовательских данных.


		 ![](../../Property_Image.gif)
		 [EtlTask](KeEtl.chm::/Interface/IUiEtlObject/IUiEtlObject.EtlTask.htm)
		 Свойство EtlTask определяет
		 задачу ETL репозитория, к которой необходимо получить доступ.


		 ![](../../Property_Image.gif)
		 [Instance](KeFore.chm::/Interface/IUiMetabaseObject/IUiMetabaseObject.Instance.htm)
		 Свойство Instance
		 определяет данные объекта репозитория, загруженного в компонент.


		 ![](../../Property_Image.gif)
		 [Name](ModForms.chm::/Interface/IComponent/IComponent.Name.htm)
		 Свойство Name
		 определяет наименование компонента.


		 ![](../../Property_Image.gif)
		 [Object](KeFore.chm::/Interface/IUiMetabaseObject/IUiMetabaseObject.Object.htm)
		 Свойство Object
		 определяет объект репозитория, к которому необходимо получить
		 доступ.


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
		 [Tag](ModForms.chm::/Interface/IComponent/IComponent.Tag.htm)
		 Свойство Tag
		 не используется компилятором. Пользователь может изменить значение
		 свойства Tag
		 и использовать его по своему усмотрению.


## Методы компонента UiEtlObject


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [ClearDefault](KeFore.chm::/Interface/IUiMetabaseObject/IUiMetabaseObject.ClearDefault.htm)
		 Метод ClearDefault
		 осуществляет установку значений всех параметров объекта по умолчанию.


См. также:


[Компоненты
 доступа к данным](03_components_of_the_access_to_data.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
