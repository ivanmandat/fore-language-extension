# TreeList: Компонент веб-форм

TreeList: Компонент веб-форм
-


# TreeList


## Иерархия наследования


           [IWebComponent](WebForms.chm::/Interface/IWebComponent/IWebComponent.htm)


           [IWebControl](WebForms.chm::/Interface/IWebControl/IWebControl.htm)


           [IWebTreeControl](WebForms.chm::/Interface/IWebTreeControl/IWebTreeControl.htm)


           [IWebTreeList](WebForms.chm::/Interface/IWebTreeList/IWebTreeList.htm)


           [WebTreeList](WebForms.chm::/Class/WebTreeList/WebTreeList.htm)


## Описание


Компонент TreeList предназначен
 для отображения древовидных структур различных элементов.


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


			- flexGrow. Свойство
			 определяет, какую пропорцию свободного пространства в контейнере
			 необходимо выделить компоненту. Если для всех компонентов
			 установлено значение 1, то свободное пространство в контейнере
			 равномерно распределяется между компонентами. Если один из
			 компонентов имеет значение 2, то ему выделяется в два раза
			 больше свободного пространства и так далее. Свойство доступно,
			 если свойству position
			 установлено значение relative;


			- font. Настройки
			 шрифта, используемого для отображения текста в компоненте.
			 При необходимости можно загрузить [пользовательские
			 шрифты](Setup.chm::/UiWebSetup/03_Setup_Web/General_for_linux/Loading_Custom_Fonts.htm);


			- hint. Текст
			 всплывающей подсказки;


			- nodes. Коллекция
			 вершин, доступных для выбора в компоненте;


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


			- selectionMode.
			 Режим отметки вершин в дереве;


			- showHint. Признак
			 отображения всплывающей подсказки при наведении курсора мыши
			 на компонент;


			- size. Размеры
			 компонента. Размеры могут быть указаны в пикселях или в процентах
			 относительно размеров родительского компонента;


			- visible. Признак
			 видимости компонента на запущенной веб-форме.


		Свойства:


			- [BorderColor](WebForms.chm::/Interface/IWebControl/IWebControl.BorderColor.htm).
			 Цвет границы компонента;


			- [Color](WebForms.chm::/Interface/IWebControl/IWebControl.Color.htm).
			 Цвет фона компонента;


			- [Enabled](WebForms.chm::/Interface/IWebControl/IWebControl.Enabled.htm).
			 Признак доступности компонента для пользователя;


			- [Nodes](WebForms.chm::/Interface/IWebTreeControl/IWebTreeControl.Nodes.htm).
			 Коллекция вершин дерева;


			- [PopupMenu](WebForms.chm::/Interface/IWebControl/IWebControl.PopupMenu.htm).
			 Контекстное меню, отображаемое для компонента. В качестве
			 значения укажите один из компонентов [PopupMenu](PopupMenu.htm),
			 размещённых на форме;


			- [Selection](WebForms.chm::/Interface/IWebTreeControl/IWebTreeControl.Selection.htm).
			 Коллекция выделенных вершин;


			- [Text](WebForms.chm::/Interface/IWebControl/IWebControl.Text.htm).
			 Текст, отображаемый в компоненте;


			- [Visible](WebForms.chm::/Interface/IWebControl/IWebControl.Visible.htm).
			 Признак видимости компонента для пользователя.


		Методы:


			- [BeginUpdate](WebForms.chm::/Interface/IWebTreeControl/IWebTreeControl.BeginUpdate.htm).
			 Блокирует обновление дерева элементов компонента;


			- [EndUpdate](WebForms.chm::/Interface/IWebTreeControl/IWebTreeControl.EndUpdate.htm).
			 Возобновляет обновление дерева элементов компонента.


		Компонент имеет событие OnSelectionChange,
		 в котором может отслеживаться изменение отметки вершин.


## Пример


![](TreeList.png)


См. также:


[Создание
 веб-формы и размещение компонентов](../01_Development_Environment/02_Work_in_Development_Environment/DevEnv_Object/Web_Form.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
