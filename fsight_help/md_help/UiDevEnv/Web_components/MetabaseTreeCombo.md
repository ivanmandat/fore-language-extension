# MetabaseTreeCombo: Компонент веб-форм

MetabaseTreeCombo: Компонент веб-форм
-


# MetabaseTreeCombo


## Иерархия наследования


           [IWebComponent](WebForms.chm::/Interface/IWebComponent/IWebComponent.htm)


           [IWebControl](WebForms.chm::/Interface/IWebControl/IWebControl.htm)


           [IWebMetabaseTreeCombo](WebForms.chm::/Interface/IWebMetabaseTreeCombo/IWebMetabaseTreeCombo.htm)


           [WebMetabaseTreeCombo](WebForms.chm::/Class/WebMetabaseTreeCombo/WebMetabaseTreeCombo.htm)


## Описание


Компонент MetabaseTreeCombo
 реализует раскрывающийся список, отображающий дерево объектов репозитория.


## Комментарии


Компонент имеет различный набор свойств, доступных в режиме дизайнера
 и режиме выполнения веб-формы.


	 Режим
	 дизайнера

	 Режим
	 выполнения

	 События


			- name. Наименование
			 компонента;


			- borderColor.
			 Цвет границы компонента;


			- color. Цвет
			 фона компонента;


			- coordinate.
			 Координата верхнего левого угла компонента. Координаты могут
			 быть указаны в пикселях или в процентах относительно размеров
			 родительского компонента. Свойство доступно, если свойству
			 position установлено
			 значение absolute;


			- enabled. Признак
			 доступности компонента пользователю;


			- filter. Фильтр
			 объектов репозитория, отображаемых в компоненте, по классам;


			- font. Настройки
			 шрифта, используемого для отображения текста в компоненте.
			 При необходимости можно загрузить [пользовательские
			 шрифты](Setup.chm::/UiWebSetup/03_Setup_Web/General_for_linux/Loading_Custom_Fonts.htm);


			- hint. Текст
			 всплывающей подсказки;


			- padding. Отступ
			 от границ компонента до его содержимого. Отступы могут быть
			 указаны в пикселях или в процентах относительно размеров компонента;


			- popupMenu. Контекстное
			 меню, отображаемое для компонента. В качестве значения укажите
			 один из компонентов [PopupMenu](PopupMenu.htm),
			 размещённых на форме;


			- position. Способ
			 позиционирования компонента на веб-форме или внутри компонента-контейнера.
			 По умолчанию свойство имеет значение absolute,
			 при этом компонент имеет фиксированное расположение и размер,
			 определяемые свойствами coordinate
			 и size. При значении
			 relative положение
			 и размеры компонента будут изменяться вместе с размерами компонента-контейнера.
			 При этом свойство coordinate
			 будет недоступно. Место расположения компонента будет определяться
			 свойствами flexDirection,
			 aligments, justifyContent
			 родительского компонента, а размеры компонента будут изменяться,
			 если свойство size
			 задано в процентах;


			- root. Корневой
			 каталог, содержимое которого будет отображаться в компоненте;


			- searchEnable.
			 Признак возможности поиска в компоненте;


			- selectionMode.
			 Режим отметки вершин в дереве;


			- showEmptyFolders.
			 Признак отображения пустых папок;


			- showHint. Признак
			 отображения всплывающей подсказки при наведении курсора мыши
			 на компонент;


			- showShortcuts.
			 Признак отображения ярлыков в дереве компонента;


			- size. Размеры
			 компонента. Размеры могут быть указаны в пикселях или в процентах
			 относительно размеров родительского компонента;


			- visible. Признак
			 видимости компонента на запущенной веб-форме.


			- [BorderColor](WebForms.chm::/Interface/IWebControl/IWebControl.BorderColor.htm).
			 Цвет границы компонента;


			- [Color](WebForms.chm::/Interface/IWebControl/IWebControl.Color.htm).
			 Цвет фона компонента;


			- [Count](WebForms.chm::/Interface/IWebMetabaseTreeCombo/IWebMetabaseTreeCombo.Count.htm).
			 Количество объектов, отображаемых в компоненте;


			- [DeselectAll](WebForms.chm::/Interface/IWebMetabaseTreeCombo/IWebMetabaseTreeCombo.DeselectAll.htm).
			 Снимает отметку со всех выделенных объектов;


			- [Enabled](WebForms.chm::/Interface/IWebControl/IWebControl.Enabled.htm).
			 Признак доступности компонента для пользователя;


			- [PopupMenu](WebForms.chm::/Interface/IWebControl/IWebControl.PopupMenu.htm).
			 Контекстное меню, отображаемое для компонента. В качестве
			 значения укажите один из компонентов [PopupMenu](PopupMenu.htm),
			 размещённых на форме;


			- [Root](WebForms.chm::/Interface/IWebMetabaseTreeCombo/IWebMetabaseTreeCombo.Root.htm).
			 Корневой каталог, содержимое которого будет отображаться в
			 компоненте;


			- [SelectedObjects](WebForms.chm::/Interface/IWebMetabaseTreeCombo/IWebMetabaseTreeCombo.SelectedObjects.htm).
			 Коллекция описаний объектов, выделенных в компоненте;


			- [SelectElement](WebForms.chm::/Interface/IWebMetabaseTreeCombo/IWebMetabaseTreeCombo.SelectElement.htm).
			 Выделяет объект с указанным описанием;


			- [SelectElementKey](WebForms.chm::/Interface/IWebMetabaseTreeCombo/IWebMetabaseTreeCombo.SelectElementKey.htm).
			 Выделяет объект с указанным ключом;


			- [Text](WebForms.chm::/Interface/IWebControl/IWebControl.Text.htm).
			 Текст, отображаемый в компоненте;


			- [Visible](WebForms.chm::/Interface/IWebControl/IWebControl.Visible.htm).
			 Признак видимости компонента для пользователя.


		Компонент имеет событие onSelectionChange,
		 наступающее при изменении отметки объектов в компоненте.


## Пример


![](MetabaseTreeCombo.png)


См. также:


[Компоненты
 веб-форм](web_components.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
