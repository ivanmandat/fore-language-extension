# UiTabSheet: Компонент

UiTabSheet: Компонент
-


# UiTabSheet


## Иерархия наследования


           [IComponent](modforms.chm::/Interface/IComponent/IComponent.htm)


           [IUiTabSheet](TabSheet.chm::/Interface/IUiTabSheet/IUiTabSheet.htm)


           [UiTabSheet](TabSheet.chm::/Class/UiTabSheet/UiTabSheet.htm)


## Описание


Компонент UiTabSheet является
 источником данных для компонента [TabSheetBox](TabSheetBox.htm),
 предназначен для создания временных таблиц не связанных с репозиторием.


## Работа с компонентом


После размещения компонента на форме установите его в качестве источника
 для какого-либо компонента [TabSheetBox](TabSheetBox.htm).
 При запуске формы в компоненте отобразится таблица.


В коде на Fore, используя свойство
 [TabSheet](TabSheet.chm::/Interface/IUiTabSheet/IUiTabSheet.TabSheet.htm),
 можно получить и настроить параметры таблицы, описываемой интерфейсом
 [ITabSheet](TabSheet.chm::/Interface/ITabSheet/ITabSheet.htm).


## Свойства компонента UiTabSheet


		 Имя свойства
		 Краткое описание


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
		 [Name](ModForms.chm::/Interface/IComponent/IComponent.Name.htm)
		 Свойство Name определяет
		 наименование компонента.


		 ![](../../Property_Image.gif)
		 [TabSheet](TabSheet.chm::/Interface/IUiTabSheet/IUiTabSheet.TabSheet.htm)
		 Свойство TabSheet возвращает
		 параметры таблицы.


		 ![](../../Property_Image.gif)
		 [Tag](ModForms.chm::/Interface/IComponent/IComponent.Tag.htm)
		 Свойство Tag не используется
		 компилятором. Пользователь может изменить значение свойства Tag и использовать его по своему
		 усмотрению.


См. также:


[Компоненты доступа
 к данным](03_components_of_the_access_to_data.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
