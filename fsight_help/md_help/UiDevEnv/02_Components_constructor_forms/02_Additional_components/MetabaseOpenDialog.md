# MetabaseOpenDialog: Компонент

MetabaseOpenDialog: Компонент
-


# MetabaseOpenDialog


## Иерархия наследования


           [IComponent](modforms.chm::/Interface/IComponent/IComponent.htm)


           [IMetabaseDialog](KeExtCtrls.chm::/Interface/IMetabaseDialog/IMetabaseDialog.htm)


           [IMetabaseOpenDialog](KeExtCtrls.chm::/Interface/IMetabaseOpenDialog/IMetabaseOpenDialog.htm)


           [MetabaseOpenDialog](KeExtCtrls.chm::/Class/MetabaseOpenDialog/MetabaseOpenDialog.htm)


## Описание


Компонент MetabaseOpenDialog
 представляет собой диалог открытия объекта репозитория.


## Работа с компонентом


В диалоге присутствует возможность фильтрации пустых папок, для этого
 необходимо выбрать соответствующий пункт контекстного меню. По умолчанию
 фильтрация включена. Для инициализации диалога необходимо вызвать метод
 [Execute](KeExtCtrls.chm::/Interface/IMetabaseDialog/IMetabaseDialog.Execute.htm).


## Фильтры компонента


Для настройки фильтрации объектов, отображаемых в дереве компонента,
 необходимо выполнить одно из следующих действий:


	- для компонента выполнить пункт контекстного меню «Фильтр».


	- в [инспекторе
	 объектов](../../01_Development_Environment/03_Windows_of_Development_Environment/Object_Inspector.htm) дважды щелкнуть по свойству [Filters](keextctrls.chm::/Interface/IMetabaseDialog/IMetabaseDialog.Filters.htm).


![](../Filters.gif)


В данном окне содержится список фильтров, используемых в компоненте.


Весь список оформлен в виде таблицы, содержащей два столбца:


	- Описание -
	 в данном столбце представлено краткое описание фильтра.


	- Класс объектов
	 - список всех классов (подклассов) включенных в данный фильтр.


В окне можно создавать новые, а также редактировать или удалять уже
 имеющиеся фильтры. В таблице доступна множественная отметка, при этом
 выделенные фильтры можно только удалить.


Описание фильтра можно отредактировать. Для этого необходимо выделить
 фильтр и осуществить одиночный щелчок мыши в области описания. По истечению
 нескольких секунд будет открыто окно редактирования описания. Также можно
 воспользоваться клавишей F2.


### Создание фильтра объектов


Для создания нового фильтра объектов необходимо выполнить одно из следующих
 действий:


	- нажать кнопку «Добавить»;


	- нажать клавишу INSERT;


	- дважды щёлкнуть на свободном месте диалога.


![](../Add_Filter.gif)


В открывшемся диалоге необходимо выбрать тип создаваемого фильтра. Доступны
 следующие типы:


	- Все объекты.
	 При использовании данного фильтра будут доступны все объекты репозитория.


	- Указанные классы
	 объектов. При использовании данного фильтра будут доступны
	 только выбранные объекты.


В дереве классов необходимо отметить флаги у тех классов объектов, которые
 будут доступны при использовании данного фильтра. Флаг «Отображать
 подклассы» позволяет исключить из дерева отображение дополнительных
 классов объектов.


В области «Способ добавления фильтра»
 необходимо указать в каком виде будет сохранен фильтр:


	- Создать отдельный
	 фильтр для каждого класса. Для каждого отмеченного класса (подкласса)
	 будет создан отдельный фильтр. Описание создаваемых фильтров будет
	 соответствовать наименованиям классов (подклассов).


	- Создать единый фильтр
	 для выбранных классов. Для всех отмеченных классов будет создан
	 один составной фильтр. В поле «Описание»
	 необходимо указать краткое описание создаваемого фильтра.


После нажатия кнопки «ОК» будет
 создан новый фильтр (фильтры) для выбранных классов объектов.


### Редактирование фильтра объектов


Для редактирования какого-либо фильтра необходимо выполнить одно из
 следующих действий:


	- дважды щелкнуть по необходимому фильтру;


	- выделить фильтр в таблице и нажать кнопку «Редактировать»;


	- выделить фильтр в таблице и нажать клавишу F4;


	- для требуемого фильтра выполнить команду контекстного
	 меню «Редактировать».


В зависимости от типа созданного фильтра (отдельный для класса (подкласса),
 либо составной фильтр) будет выведен диалог редактирования фильтра.


	Отдельный фильтр для класса (подкласса) Составной фильтр


		![](../Single_filter.gif)


		![](../Composite_filter.gif)


В диалоге можно изменить класс (подкласс, либо их комбинацию для составного
 фильтра) объекта (ов), для которого создан фильтр, а также описание фильтра.
 После нажатия кнопки «ОК» изменения
 будут сохранены.


### Удаление фильтра


Для удаления фильтра (фильтров) необходимо выделить его в таблице и
 выполнить одно из следующих действий:


	- нажать кнопку «Удалить»;


	- нажать клавишу DELETE;


	- выполнить для фильтра (фильтров) пункт контекстного
	 меню «Удалить».


После этого фильтр будет удален.


## Пример


![](MetabaseOpenDialog_Sample.gif)


## Свойства компонента MetabaseOpenDialog


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
		 [FilterIndex](KeExtCtrls.chm::/Interface/IMetabaseDialog/IMetabaseDialog.FilterIndex.htm)
		 Свойство FilterIndex
		 определяет индекс выбранного фильтра компонента.


		 ![](../../Property_Image.gif)
		 [Filters](KeExtCtrls.chm::/Interface/IMetabaseDialog/IMetabaseDialog.Filters.htm)
		 Свойство Filters возвращает
		 коллекцию фильтров компонента.


		 ![](../../Property_Image.gif)
		 [FolderFilters](KeExtCtrls.chm::/Interface/IMetabaseDialog/IMetabaseDialog.FolderFilters.htm)
		 Свойство FolderFilters
		 возвращает коллекцию фильтров, используемых для определения объектов-папок
		 в диалоге.


		 ![](../../Property_Image.gif)
		 [InitialFolder](KeExtCtrls.chm::/Interface/IMetabaseDialog/IMetabaseDialog.InitialFolder.htm)
		 Свойство InitialFolder
		 определяет исходный каталог.


		 ![](../../Property_Image.gif)
		 [MultiSelect](KeExtCtrls.chm::/Interface/IMetabaseOpenDialog/IMetabaseOpenDialog.MultiSelect.htm)
		 Свойство MultiSelect
		 определяет признак выбора в диалоге нескольких объектов.


		 ![](../../Property_Image.gif)
		 [Name](ModForms.chm::/Interface/IComponent/IComponent.Name.htm)
		 Свойство Name определяет
		 наименование компонента.


		 ![](../../Property_Image.gif)
		 [Object](KeExtCtrls.chm::/Interface/IMetabaseDialog/IMetabaseDialog.Object.htm)
		 Свойство Object возвращает
		 описание выбранного объекта репозитория.


		 ![](../../Property_Image.gif)
		 [Objects](KeExtCtrls.chm::/Interface/IMetabaseDialog/IMetabaseDialog.Objects.htm)
		 Свойство Objects возвращает
		 коллекцию выбранных объектов репозитория.


		 ![](../../Property_Image.gif)
		 [Root](KeExtCtrls.chm::/Interface/IMetabaseDialog/IMetabaseDialog.Root.htm)
		 Свойство Root определяет
		 корневой каталог.


		 ![](../../Property_Image.gif)
		 [Tag](ModForms.chm::/Interface/IComponent/IComponent.Tag.htm)
		 Свойство Tag не используется
		 компилятором. Пользователь может изменить значение свойства Tag и использовать его по своему
		 усмотрению.


		 ![](../../Property_Image.gif)
		 [Title](KeExtCtrls.chm::/Interface/IMetabaseDialog/IMetabaseDialog.Title.htm)
		 Свойство Title определяет
		 заголовок диалога.


## Методы компонента MetabaseOpenDialog


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Execute](KeExtCtrls.chm::/Interface/IMetabaseDialog/IMetabaseDialog.Execute.htm)
		 Метод Execute инициализирует
		 диалог открытия объекта репозитория.


См. также:


[Дополнительные компоненты](Additional_components.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
